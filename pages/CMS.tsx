import React, { useState, useEffect } from 'react';
import { useCMS, Project, ProjectLayoutType } from '../context/CMSContext';

const CMS: React.FC = () => {
    const { projects, addProject, updateProject, deleteProject } = useCMS();
    
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');

    // CMS State
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(null);

    useEffect(() => {
        const auth = sessionStorage.getItem('cms_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'ichigohagazaki1') {
            setIsAuthenticated(true);
            sessionStorage.setItem('cms_auth', 'true');
            setAuthError('');
        } else {
            setAuthError('Incorrect password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('cms_auth');
    };

    const handleEdit = (project: Project) => {
        setCurrentProject(project);
        setIsEditing(true);
    };

    const handleCreateNew = () => {
        setCurrentProject({
            title: '',
            titleItalic: '',
            category: '',
            description: '',
            imageUrl: '',
            insight: '',
            impact: '',
            tags: [],
            layoutType: 'standard',
            icon: ''
        });
        setIsEditing(true);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentProject || !currentProject.title || !currentProject.category || !currentProject.description) {
            alert('Please fill out Title, Category, and Description at a minimum.');
            return;
        }

        const projectToSave: Omit<Project, 'id'> = {
            title: currentProject.title || '',
            titleItalic: currentProject.titleItalic || '',
            category: currentProject.category || '',
            description: currentProject.description || '',
            imageUrl: currentProject.imageUrl || '',
            insight: currentProject.insight || '',
            impact: currentProject.impact || '',
            tags: currentProject.tags || [],
            layoutType: (currentProject.layoutType as ProjectLayoutType) || 'standard',
            icon: currentProject.icon || ''
        };

        try {
            if (currentProject.id) {
                await updateProject(currentProject.id, projectToSave);
            } else {
                await addProject(projectToSave);
            }
            
            setIsEditing(false);
            setCurrentProject(null);
        } catch (error) {
            console.error("Failed to save project:", error);
            alert("An error occurred while saving. Please try again.");
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await deleteProject(id);
            } catch (error) {
                console.error("Failed to delete project:", error);
                alert("An error occurred while deleting. Please try again.");
            }
        }
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (currentProject) {
            setCurrentProject({
                ...currentProject,
                tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
            });
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="w-full min-h-screen bg-surface flex items-center justify-center px-6">
                <form onSubmit={handleLogin} className="bg-background border border-outline-variant p-8 md:p-12 w-full max-w-md flex flex-col gap-6">
                    <h1 className="text-3xl font-display text-primary text-center mb-2">Admin <span className="italic">Login</span></h1>
                    <p className="text-sm text-outline text-center mb-4">Please enter the master password to access the CMS.</p>
                    
                    {authError && (
                        <div className="bg-error/10 border border-error/20 text-error p-3 text-sm font-semibold text-center rounded">
                            {authError}
                        </div>
                    )}
                    
                    <label className="flex flex-col gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Password</span>
                        <input 
                            type="password" 
                            required
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                        />
                    </label>
                    <button 
                        type="submit"
                        className="w-full py-4 mt-2 bg-primary text-on-primary text-xs tracking-widest uppercase font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Enter CMS
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-surface">
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-outline-variant pb-8 mb-8 gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display text-primary leading-tight mb-2">
                                Content <span className="italic">Management</span>
                            </h1>
                            <p className="text-outline font-sans">Manage your portfolio projects. Changes are saved to your browser's local storage.</p>
                        </div>
                        <div className="flex gap-4">
                            {!isEditing && (
                                <button 
                                    onClick={handleCreateNew}
                                    className="bg-primary text-on-primary px-6 py-3 rounded font-semibold tracking-widest uppercase text-xs hover:bg-primary/90 transition-colors"
                                >
                                    + Add Project
                                </button>
                            )}
                            <button 
                                onClick={handleLogout}
                                className="border border-outline-variant text-primary px-6 py-3 rounded font-semibold tracking-widest uppercase text-xs hover:bg-surface-variant transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {!isEditing ? (
                        <div className="flex flex-col gap-4">
                            {projects.map(project => (
                                <div key={project.id} className="border border-outline-variant p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-background">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest text-outline font-semibold mb-1">{project.category}</div>
                                        <h3 className="text-2xl font-display text-primary">
                                            {project.title} <span className="italic">{project.titleItalic}</span>
                                        </h3>
                                        <div className="text-sm text-outline mt-2 line-clamp-1">{project.description}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleEdit(project)}
                                            className="px-4 py-2 border border-outline-variant text-primary text-xs tracking-widest uppercase font-semibold hover:bg-surface-variant transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(project.id)}
                                            className="px-4 py-2 border border-error text-error text-xs tracking-widest uppercase font-semibold hover:bg-error/10 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {projects.length === 0 && (
                                <div className="text-center py-12 text-outline">
                                    No projects found. Add one to get started.
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="bg-background border border-outline-variant p-8 md:p-12">
                            <h3 className="text-2xl font-display text-primary mb-8 border-b border-outline-variant pb-6">
                                {currentProject?.id ? 'Edit Project' : 'New Project'}
                            </h3>
                            <form onSubmit={handleSave} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Title</span>
                                        <input 
                                            type="text" 
                                            required
                                            value={currentProject?.title || ''} 
                                            onChange={e => setCurrentProject({...currentProject, title: e.target.value})}
                                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Title (Italic Part)</span>
                                        <input 
                                            type="text" 
                                            value={currentProject?.titleItalic || ''} 
                                            onChange={e => setCurrentProject({...currentProject, titleItalic: e.target.value})}
                                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary italic"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Category / Subtitle</span>
                                        <input 
                                            type="text" 
                                            required
                                            value={currentProject?.category || ''} 
                                            onChange={e => setCurrentProject({...currentProject, category: e.target.value})}
                                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                            placeholder="e.g. AI / Automation"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Layout Type</span>
                                        <select 
                                            value={currentProject?.layoutType || 'standard'} 
                                            onChange={e => setCurrentProject({...currentProject, layoutType: e.target.value as ProjectLayoutType})}
                                            className="w-full bg-surface border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                        >
                                            <option value="main">Main (Full Width, Large Image)</option>
                                            <option value="secondary">Secondary (Half Width, Medium Image)</option>
                                            <option value="accent">Accent (Dark Theme, Icon-based)</option>
                                            <option value="standard">Standard (Text Focused)</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Description</span>
                                    <textarea 
                                        required
                                        rows={3}
                                        value={currentProject?.description || ''} 
                                        onChange={e => setCurrentProject({...currentProject, description: e.target.value})}
                                        className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary resize-none"
                                    />
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Image URL</span>
                                        <input 
                                            type="text" 
                                            value={currentProject?.imageUrl || ''} 
                                            onChange={e => setCurrentProject({...currentProject, imageUrl: e.target.value})}
                                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                            placeholder="https://..."
                                        />
                                        <span className="text-xs text-outline">Used for main and secondary layouts.</span>
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Google Material Icon</span>
                                        <input 
                                            type="text" 
                                            value={currentProject?.icon || ''} 
                                            onChange={e => setCurrentProject({...currentProject, icon: e.target.value})}
                                            className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                            placeholder="e.g. manage_search"
                                        />
                                        <span className="text-xs text-outline">Used for accent layout instead of image.</span>
                                    </label>
                                </div>

                                {currentProject?.layoutType === 'main' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-outline-variant p-6 bg-surface-variant/30">
                                        <label className="flex flex-col gap-2">
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Insight (Main Layout Only)</span>
                                            <textarea 
                                                rows={2}
                                                value={currentProject?.insight || ''} 
                                                onChange={e => setCurrentProject({...currentProject, insight: e.target.value})}
                                                className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary resize-none"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Impact (Main Layout Only)</span>
                                            <textarea 
                                                rows={2}
                                                value={currentProject?.impact || ''} 
                                                onChange={e => setCurrentProject({...currentProject, impact: e.target.value})}
                                                className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary resize-none"
                                            />
                                        </label>
                                    </div>
                                )}

                                <label className="flex flex-col gap-2">
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Tags (Comma Separated)</span>
                                    <input 
                                        type="text" 
                                        value={currentProject?.tags?.join(', ') || ''} 
                                        onChange={handleTagsChange}
                                        className="w-full bg-transparent border border-outline-variant p-3 focus:outline-none focus:border-primary text-primary"
                                        placeholder="Marketing, Strategy, Design"
                                    />
                                </label>

                                <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-outline-variant">
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            setIsEditing(false);
                                            setCurrentProject(null);
                                        }}
                                        className="px-6 py-3 border border-outline-variant text-primary text-xs tracking-widest uppercase font-semibold hover:bg-surface-variant transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="px-6 py-3 bg-primary text-on-primary text-xs tracking-widest uppercase font-semibold hover:bg-primary/90 transition-colors"
                                    >
                                        Save Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CMS;
