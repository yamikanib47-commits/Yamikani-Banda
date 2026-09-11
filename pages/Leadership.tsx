import React from 'react';
import { Link } from 'react-router-dom';

const Leadership: React.FC = () => {
    return (
        <div className="w-full">
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-[1280px] mx-auto border-b border-outline-variant pb-12 mb-12">
                    <div className="inline-flex items-center gap-2 border border-outline-variant px-4 py-1.5 rounded w-fit mb-8">
                        <span className="material-symbols-outlined text-sm text-outline">work</span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-outline">Entrepreneurship & Execution</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight mb-6">
                        Experience & <br className="hidden md:block"/>
                        <span className="italic">Practical</span> Work
                    </h1>
                    <p className="text-xl text-outline max-w-2xl font-sans">
                        Building ventures from zero. My professional development comes through entrepreneurship, client work, and architecting real-world digital systems.
                    </p>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        
                        {/* AutoAce Zed Case Study */}
                        <section>
                            <div className="flex items-center gap-4 mb-10 border-b border-outline-variant pb-6">
                                <h2 className="text-2xl font-display text-primary">Featured <span className="italic">Case Study</span></h2>
                            </div>
                            
                            <div className="group border border-outline-variant bg-surface overflow-hidden flex flex-col">
                                <div className="w-full aspect-[2/1] border-b border-outline-variant overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                                        alt="AutoAce Zed"
                                        className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                            <div>
                                                <h3 className="text-3xl font-display text-primary mb-2">AutoAce Zed</h3>
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-outline">Founder / Growth & Product Builder</p>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-6 mb-8">
                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">The Problem & Insight</h4>
                                                <p className="text-outline text-sm leading-relaxed">
                                                    The Zambian used-car market is highly fragmented. Vehicle discovery and transactions depend heavily on WhatsApp groups and informal brokers. Built AutoAce around a simple insight: the used-car market does not only have a supply problem. It has a connection and trust problem.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">The Solution</h4>
                                                <p className="text-outline text-sm leading-relaxed">
                                                    AutoAce was designed as a request-driven automotive marketplace where buyer demand can be matched to suitable vehicle supply, creating a structured connection between buyers, sellers and agents.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What I Built</h4>
                                                <p className="text-outline text-sm leading-relaxed">
                                                    Brand positioning, marketing strategy, TikTok growth, content strategy, marketplace concept, lead-generation workflows, digital product UX, business model, and CMS/CRM workflows.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 pt-6 border-t border-outline-variant">
                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">Startup Strategy</span>
                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">Marketplace Design</span>
                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">Marketing</span>
                                        <span className="text-[10px] uppercase tracking-widest font-semibold text-outline">Automation</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Dante Vision Studio & AI Automation */}
                        <section>
                            <div className="flex items-center gap-4 mb-10 border-b border-outline-variant pb-6">
                                <h2 className="text-2xl font-display text-primary">Ventures & <span className="italic">Systems</span></h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                {/* Dante Vision Studio */}
                                <div className="border border-outline-variant bg-surface p-8 flex flex-col justify-between">
                                    <div>
                                        <span className="material-symbols-outlined text-primary text-3xl mb-6">brush</span>
                                        <h3 className="text-xl font-display text-primary mb-1">Dante Vision Studio</h3>
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4">Founder / Creative & Digital Services</p>
                                        <p className="text-sm text-outline leading-relaxed mb-6">
                                            A creative and digital venture developing visual identities, marketing assets, and digital solutions. Focused on graphic design, branding, content creation, video, and digital presence development.
                                        </p>
                                    </div>
                                </div>

                                {/* AI Automation & Career OS */}
                                <div className="border border-outline-variant bg-surface p-8 flex flex-col justify-between">
                                    <div>
                                        <span className="material-symbols-outlined text-primary text-3xl mb-6">smart_toy</span>
                                        <h3 className="text-xl font-display text-primary mb-1">AI Automation & Systems</h3>
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4">Business & Workflow Automation</p>
                                        <p className="text-sm text-outline leading-relaxed mb-6">
                                            Building automated lead processes, CMS concepts, CRM systems, and data pipelines. Created Career OS, a personal career-management system designed around job discovery, ATS-friendly CV generation, and application tracking.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 flex flex-col gap-6">
                            
                            {/* Entrepreneurship Focus */}
                            <div className="border border-outline-variant bg-surface p-8">
                                <div className="flex items-center gap-3 mb-8 border-b border-outline-variant pb-6">
                                    <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
                                    <h3 className="text-xl font-display text-primary">Entrepreneurial <span className="italic">Mindset</span></h3>
                                </div>
                                <div className="space-y-8">
                                    <div className="relative pl-6 border-l border-outline-variant">
                                        <div className="absolute -left-[5px] top-1.5 size-2 bg-primary"></div>
                                        <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Building from Zero</h4>
                                        <p className="text-sm text-outline leading-relaxed">Testing ideas, validating markets, and executing functional MVPs rapidly.</p>
                                    </div>
                                    <div className="relative pl-6 border-l border-outline-variant">
                                        <div className="absolute -left-[5px] top-1.5 size-2 bg-primary"></div>
                                        <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Marketing Experimentation</h4>
                                        <p className="text-sm text-outline leading-relaxed">Leading with the audience's problem or desire, then positioning the product or service as the solution.</p>
                                    </div>
                                    <div className="relative pl-6 border-l border-outline-variant">
                                        <div className="absolute -left-[5px] top-1.5 size-2 bg-primary"></div>
                                        <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Learning Through Execution</h4>
                                        <p className="text-sm text-outline leading-relaxed">Practical experience gained by designing, building, and launching digital systems and content strategies.</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-primary text-on-primary p-8 flex flex-col gap-6">
                                <h3 className="text-2xl font-display">Let's build a <span className="italic">system</span> together.</h3>
                                <p className="text-sm text-on-primary-container leading-relaxed">
                                    Ready to scale your operations or launch a digital-first initiative? Let's work together.
                                </p>
                                <Link to="/contact" className="inline-flex items-center justify-center w-full bg-on-primary text-primary font-semibold tracking-widest uppercase text-sm py-4 hover:bg-surface-variant transition-colors mt-2">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Leadership;
