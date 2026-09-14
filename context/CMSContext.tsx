import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { loadDataFromDrive, saveDataToDrive, uploadImageToDrive } from '../utils/drive';

export type ProjectLayoutType = 'main' | 'secondary' | 'accent' | 'standard';

export interface Project {
    id: string;
    title: string;
    titleItalic?: string;
    category: string;
    description: string;
    imageUrl?: string;
    icon?: string;
    insight?: string;
    impact?: string;
    tags: string[];
    layoutType: ProjectLayoutType;
}

const defaultProjects: Project[] = [
    // ... default projects remain the same
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
    uploadImage: (file: File) => Promise<string | undefined>;
    driveToken: string | null;
    loginToDrive: () => void;
    isDriveLoading: boolean;
    profileImageUrl: string | null;
    updateProfileImage: (url: string) => Promise<void>;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem('portfolio_projects');
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { console.error(e); }
        }
        return defaultProjects;
    });
    
    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(() => {
        return localStorage.getItem('portfolio_profile_image') || null;
    });

    const [driveToken, setDriveToken] = useState<string | null>(null);
    const [isDriveLoading, setIsDriveLoading] = useState(false);
    const tokenClient = useRef<any>(null);

    const loginToDrive = () => {
        if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
            alert('VITE_GOOGLE_CLIENT_ID is missing in environment variables.');
            return;
        }
        if (!window.google) {
            alert('Google Identity Services not loaded yet. Please try again in a moment.');
            return;
        }

        if (!tokenClient.current) {
            tokenClient.current = window.google.accounts.oauth2.initTokenClient({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                scope: 'https://www.googleapis.com/auth/drive.file',
                callback: async (response: any) => {
                    if (response.error !== undefined) {
                        console.error('Drive Auth Error:', response.error);
                        return;
                    }
                    const token = response.access_token;
                    setDriveToken(token);
                    setIsDriveLoading(true);
                    try {
                        const data = await loadDataFromDrive(token);
                        if (data) {
                            if (data.projects && Array.isArray(data.projects)) {
                                setProjects(data.projects);
                            } else if (Array.isArray(data)) {
                                setProjects(data); // Fallback for old data format
                            }
                            if (data.profileImage) {
                                setProfileImageUrl(data.profileImage);
                            }
                        }
                    } catch (e) {
                        console.error('Error loading data from Drive', e);
                    } finally {
                        setIsDriveLoading(false);
                    }
                },
            });
        }
        
        tokenClient.current.requestAccessToken();
    };

    // Auto-save to local storage as fallback
    useEffect(() => {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
        if (profileImageUrl) {
            localStorage.setItem('portfolio_profile_image', profileImageUrl);
        }
    }, [projects, profileImageUrl]);

    const saveToDriveSilently = async (updatedProjects: Project[], updatedProfileImage: string | null = profileImageUrl) => {
        if (driveToken) {
            try {
                await saveDataToDrive(driveToken, {
                    projects: updatedProjects,
                    profileImage: updatedProfileImage
                });
            } catch (e) {
                console.error("Failed to save to Drive", e);
            }
        }
    };

    const updateProfileImage = async (url: string) => {
        setProfileImageUrl(url);
        await saveToDriveSilently(projects, url);
    };

    const addProject = async (projectData: Omit<Project, 'id'>) => {
        const newProject: Project = {
            ...projectData,
            id: Date.now().toString(),
        };
        const updated = [...projects, newProject];
        setProjects(updated);
        await saveToDriveSilently(updated);
    };

    const updateProject = async (id: string, projectData: Omit<Project, 'id'>) => {
        const updated = projects.map(p => p.id === id ? { ...projectData, id } : p);
        setProjects(updated);
        await saveToDriveSilently(updated);
    };

    const deleteProject = async (id: string) => {
        const updated = projects.filter(p => p.id !== id);
        setProjects(updated);
        await saveToDriveSilently(updated);
    };

    const uploadImage = async (file: File) => {
        if (!driveToken) {
            alert("You must log in to Google Drive to upload images.");
            return undefined;
        }
        return await uploadImageToDrive(driveToken, file);
    };

    return (
        <CMSContext.Provider value={{ 
            projects, addProject, updateProject, deleteProject, 
            uploadImage, driveToken, loginToDrive, isDriveLoading,
            profileImageUrl, updateProfileImage
        }}>
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
