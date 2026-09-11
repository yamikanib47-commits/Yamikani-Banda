import React, { createContext, useContext, useState, useEffect } from 'react';

export type ProjectLayoutType = 'main' | 'secondary' | 'accent' | 'standard';

export interface Project {
    id: string;
    title: string;
    titleItalic?: string;
    category: string;
    description: string;
    imageUrl?: string;
    icon?: string; // e.g., 'manage_search'
    insight?: string;
    impact?: string;
    tags: string[];
    layoutType: ProjectLayoutType;
}

const defaultProjects: Project[] = [
    {
        id: '1',
        title: 'AutoAce',
        titleItalic: 'Zed',
        category: 'Startup / Marketplace / Marketing / Product',
        description: 'Zambian automotive marketplace and vehicle-matching platform connecting buyers, sellers and agents.',
        imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
        insight: "The used-car market doesn't just have a supply problem, it has a connection and trust problem.",
        impact: 'Grew TikTok audience from 15k to >30k during documentation period. Successfully facilitated real vehicle sales and onboarded a network of 66 agents.',
        tags: ['Strategy', 'Marketing', 'MVP'],
        layoutType: 'main'
    },
    {
        id: '2',
        title: 'Dante Vision',
        titleItalic: 'Studio',
        category: 'Branding / Creative / Marketing',
        description: 'Creative and digital services focused on branding, visual communication, content creation and developing a strong digital presence.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
        tags: ['Design', 'Video', 'Brand Identity'],
        layoutType: 'secondary'
    },
    {
        id: '3',
        title: 'Career',
        titleItalic: 'OS',
        category: 'AI / Automation / Career Technology',
        description: 'An AI-assisted career operating system designed around job discovery, job application workflows, CV generation and ATS-friendly application management.',
        icon: 'manage_search',
        tags: ['Job Search Automation', 'CV Generation'],
        layoutType: 'accent'
    },
    {
        id: '4',
        title: 'CMS & CRM',
        titleItalic: 'Systems',
        category: 'Digital Systems / Automation',
        description: 'Custom business systems built to organize content, customer information, workflows and operational processes for personal ventures and digital projects.',
        tags: ['Database Arch', 'Process Design'],
        layoutType: 'standard'
    },
    {
        id: '5',
        title: 'AI Automation',
        titleItalic: 'Workflows',
        category: 'AI / Automation',
        description: 'Practical automation systems designed to reduce repetitive work and connect business processes seamlessly, including automated lead processes and data pipelines.',
        tags: ['Low-Code / No-Code', 'API Integrations', 'Data Pipelines'],
        layoutType: 'standard'
    }
];

interface CMSContextType {
    projects: Project[];
    addProject: (project: Omit<Project, 'id'>) => Promise<void>;
    updateProject: (id: string, project: Omit<Project, 'id'>) => Promise<void>;
    deleteProject: (id: string) => Promise<void>;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // TODO: When migrating to a real backend (e.g., Firebase via Antigravity),
    // replace this initialization with a data fetching hook (e.g., onSnapshot or getDocs).
    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem('portfolio_projects');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing stored projects", e);
            }
        }
        return defaultProjects;
    });

    // TODO: Remove this local storage synchronization effect when a backend is added.
    useEffect(() => {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = async (projectData: Omit<Project, 'id'>) => {
        // TODO: Replace with backend call (e.g., const docRef = await addDoc(collection(db, 'projects'), projectData))
        const newProject: Project = {
            ...projectData,
            id: Date.now().toString(),
        };
        setProjects(prev => [...prev, newProject]);
    };

    const updateProject = async (id: string, projectData: Omit<Project, 'id'>) => {
        // TODO: Replace with backend call (e.g., await updateDoc(doc(db, 'projects', id), projectData))
        setProjects(prev => prev.map(p => p.id === id ? { ...projectData, id } : p));
    };

    const deleteProject = async (id: string) => {
        // TODO: Replace with backend call (e.g., await deleteDoc(doc(db, 'projects', id)))
        setProjects(prev => prev.filter(p => p.id !== id));
    };

    return (
        <CMSContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </CMSContext.Provider>
    );
};

export const useCMS = () => {
    const context = useContext(CMSContext);
    if (context === undefined) {
        throw new Error('useCMS must be used within a CMSProvider');
    }
    return context;
};
