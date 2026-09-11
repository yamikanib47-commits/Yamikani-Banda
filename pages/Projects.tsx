import React from 'react';
import { useCMS, Project } from '../context/CMSContext';

const Projects: React.FC = () => {
    const { projects } = useCMS();

    return (
        <div className="w-full">
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-[1280px] mx-auto border-b border-outline-variant pb-12 mb-12">
                    <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight mb-6">
                        Systems & <br className="hidden md:block"/>
                        <span className="italic">Solutions</span>
                    </h1>
                    <p className="text-xl text-outline max-w-2xl font-sans">
                        Building efficient digital infrastructure and automated workflows for the modern market.
                    </p>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                    
                    {projects.map((project: Project, index: number) => {
                        if (project.layoutType === 'main') {
                            return (
                                <div key={project.id} className="col-span-1 lg:col-span-12 border border-outline-variant bg-background overflow-hidden flex flex-col md:flex-row group">
                                    <div className="w-full md:w-1/2 aspect-video md:aspect-auto border-b md:border-b-0 md:border-r border-outline-variant overflow-hidden flex items-center justify-center bg-surface-variant relative">
                                        {project.imageUrl && (
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-semibold tracking-widest uppercase text-outline mb-4 block">{project.category}</span>
                                            <h2 className="text-3xl md:text-4xl font-display text-primary mb-8">{project.title} {project.titleItalic && <span className="italic">{project.titleItalic}</span>}</h2>
                                            <p className="text-outline text-sm leading-relaxed mb-8">
                                                {project.description}
                                            </p>
                                            <div className="space-y-6">
                                                {project.insight && (
                                                    <div className="border-l border-outline-variant pl-4">
                                                        <p className="text-[10px] font-semibold text-primary tracking-widest uppercase mb-2">Insight</p>
                                                        <p className="text-sm text-outline">{project.insight}</p>
                                                    </div>
                                                )}
                                                {project.impact && (
                                                    <div className="border-l border-outline-variant pl-4">
                                                        <p className="text-[10px] font-semibold text-primary tracking-widest uppercase mb-2">Impact</p>
                                                        <p className="text-sm text-outline">{project.impact}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {project.tags && project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-3 pt-12 mt-8 border-t border-outline-variant">
                                                {project.tags.map((tag, tIndex) => (
                                                    <React.Fragment key={tIndex}>
                                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">{tag}</span>
                                                        {tIndex < project.tags.length - 1 && <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">·</span>}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        if (project.layoutType === 'secondary') {
                            return (
                                <div key={project.id} className="col-span-1 lg:col-span-7 border border-outline-variant bg-surface flex flex-col group">
                                    <div className="w-full h-64 border-b border-outline-variant overflow-hidden relative">
                                        {project.imageUrl && (
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-semibold tracking-widest uppercase text-outline mb-4 block">{project.category}</span>
                                            <h3 className="text-3xl font-display text-primary mb-4">{project.title} {project.titleItalic && <span className="italic">{project.titleItalic}</span>}</h3>
                                            <p className="text-outline text-sm leading-relaxed mb-6">
                                                {project.description}
                                            </p>
                                        </div>
                                        {project.tags && project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-3 pt-8 border-t border-outline-variant mt-4">
                                                {project.tags.map((tag, tIndex) => (
                                                    <React.Fragment key={tIndex}>
                                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">{tag}</span>
                                                        {tIndex < project.tags.length - 1 && <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">·</span>}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        if (project.layoutType === 'accent') {
                            return (
                                <div key={project.id} className="col-span-1 lg:col-span-5 bg-primary text-on-primary p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-4xl mb-6 opacity-80">{project.icon || 'star'}</span>
                                        <span className="text-[10px] font-semibold tracking-widest uppercase text-on-primary-container mb-4 block">{project.category}</span>
                                        <h3 className="text-3xl font-display mb-4">{project.title} {project.titleItalic && <span className="italic">{project.titleItalic}</span>}</h3>
                                        <p className="text-on-primary-container text-sm leading-relaxed mb-12">
                                            {project.description}
                                        </p>
                                    </div>
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="relative z-10 flex flex-wrap gap-3 pt-8 border-t border-on-primary-container/30">
                                            {project.tags.map((tag, tIndex) => (
                                                <React.Fragment key={tIndex}>
                                                    <span className="text-[10px] uppercase tracking-widest font-semibold text-on-primary-container">{tag}</span>
                                                    {tIndex < project.tags.length - 1 && <span className="text-[10px] uppercase tracking-widest font-semibold text-on-primary-container">·</span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <div key={project.id} className="col-span-1 lg:col-span-6 border border-outline-variant bg-surface p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-semibold tracking-widest uppercase text-outline mb-4 block">{project.category}</span>
                                    <h3 className="text-3xl font-display text-primary mb-4">{project.title} {project.titleItalic && <span className="italic">{project.titleItalic}</span>}</h3>
                                    <p className="text-outline text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-3 pt-8 border-t border-outline-variant mt-8">
                                        {project.tags.map((tag, tIndex) => (
                                            <React.Fragment key={tIndex}>
                                                <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">{tag}</span>
                                                {tIndex < project.tags.length - 1 && <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">·</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>
            </section>
        </div>
    );
};

export default Projects;