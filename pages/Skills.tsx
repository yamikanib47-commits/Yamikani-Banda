import React from 'react';

const Skills: React.FC = () => {
    return (
        <div className="w-full">
            {/* Header */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-[1280px] mx-auto border-b border-outline-variant pb-12 mb-12">
                    <div className="inline-flex items-center gap-2 border border-outline-variant px-4 py-1.5 rounded w-fit mb-8">
                        <span className="material-symbols-outlined text-sm text-outline">build</span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-outline">Digital Toolbox & Education</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight mb-6">
                        Skills, Tools & <br className="hidden md:block"/>
                        <span className="italic">Credentials</span>
                    </h1>
                    <p className="text-xl text-outline max-w-2xl font-sans">
                        My practical expertise spanning marketing, creative design, and technical automation, backed by a foundational education in computing and digital marketing.
                    </p>
                </div>
            </section>

            {/* Core Skills */}
            <section className="pb-24 px-6">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Marketing & Growth */}
                    <div className="border border-outline-variant bg-surface p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-8 border-b border-outline-variant pb-4">
                            <span className="material-symbols-outlined text-2xl text-primary">trending_up</span>
                            <h3 className="text-xl font-display text-primary">Marketing & <span className="italic">Growth</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {['Digital Marketing', 'Marketing Strategy', 'Social Media Marketing', 'Content Strategy', 'Brand Strategy', 'Audience Growth', 'Sales & Marketing', 'Startup Growth Strategy', 'Campaign Development'].map((skill, i) => (
                                <li key={i} className="text-sm text-outline flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Design */}
                    <div className="border border-outline-variant bg-surface p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-8 border-b border-outline-variant pb-4">
                            <span className="material-symbols-outlined text-2xl text-primary">palette</span>
                            <h3 className="text-xl font-display text-primary">Creative & <span className="italic">Design</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {['Graphic Design', 'Brand Identity', 'Visual Design', 'Social Media Design', '3D Graphics', 'Creative Direction'].map((skill, i) => (
                                <li key={i} className="text-sm text-outline flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content & Media */}
                    <div className="border border-outline-variant bg-surface p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-8 border-b border-outline-variant pb-4">
                            <span className="material-symbols-outlined text-2xl text-primary">movie</span>
                            <h3 className="text-xl font-display text-primary">Content & <span className="italic">Media</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {['Content Creation', 'Social Media Content', 'Video Editing', 'Short-form Video', 'Visual Storytelling', 'Content Strategy'].map((skill, i) => (
                                <li key={i} className="text-sm text-outline flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technology */}
                    <div className="border border-outline-variant bg-primary text-on-primary p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/30 pb-4">
                            <span className="material-symbols-outlined text-2xl text-on-primary">settings_suggest</span>
                            <h3 className="text-xl font-display text-on-primary">Technology & <span className="italic">Systems</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {['AI Automation', 'Workflow Automation', 'CMS Development', 'CRM Development', 'MVP Development', 'Digital Product Development', 'No-code / Low-code', 'Web Product Design'].map((skill, i) => (
                                <li key={i} className="text-sm text-on-primary-container flex items-center gap-2">
                                    <div className="w-1 h-1 bg-on-primary rounded-full"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* Software & Tools */}
            <section className="pb-24 px-6">
                <div className="max-w-[1280px] mx-auto border-t border-outline-variant pt-16">
                    <div className="flex items-center gap-4 mb-10 border-b border-outline-variant pb-6">
                        <span className="material-symbols-outlined text-3xl text-primary">widgets</span>
                        <h3 className="text-2xl font-display text-primary">Software & <span className="italic">Tools</span></h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4 block">Design & Video</span>
                            <div className="flex flex-wrap gap-2">
                                {['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut'].map(tool => (
                                    <span key={tool} className="px-3 py-1.5 border border-outline-variant text-primary text-xs font-semibold">{tool}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4 block">Product & Web</span>
                            <div className="flex flex-wrap gap-2">
                                {['Framer', 'Glide', 'Lovable', 'Vercel', 'GitHub'].map(tool => (
                                    <span key={tool} className="px-3 py-1.5 border border-outline-variant text-primary text-xs font-semibold">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4 block">Automation & Systems</span>
                            <div className="flex flex-wrap gap-2">
                                {['Make.com', 'Tally', 'Google Sheets', 'Zoho CRM', 'Supabase', 'OneSignal'].map(tool => (
                                    <span key={tool} className="px-3 py-1.5 border border-outline-variant text-primary text-xs font-semibold">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-4 block">AI Workflows</span>
                            <div className="flex flex-wrap gap-2">
                                {['Google AI Studio', 'AI-assisted dev', 'AI content workflows', 'AI business systems'].map(tool => (
                                    <span key={tool} className="px-3 py-1.5 border border-outline-variant text-primary text-xs font-semibold">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Certifications */}
            <section className="pb-32 px-6">
                <div className="max-w-[1280px] mx-auto border-t border-outline-variant pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Education */}
                        <div className="bg-surface border border-outline-variant p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant pb-6">
                                <span className="material-symbols-outlined text-3xl text-primary">school</span>
                                <h3 className="text-2xl font-display text-primary">Formal <span className="italic">Education</span></h3>
                            </div>
                            
                            <h4 className="font-display text-2xl text-primary mb-2">Cavendish University Zambia</h4>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-6">Bachelor of Science in Computing</p>
                            
                            <div className="border-l border-outline-variant pl-4">
                                <span className="inline-block px-2 py-1 bg-surface-variant text-primary text-[10px] uppercase tracking-widest font-semibold mb-3">Year 2 • Distance Learning</span>
                                <p className="text-sm text-outline leading-relaxed">
                                    Currently pursuing a Bachelor of Science in Computing through distance learning, developing a technical foundation that complements my work across digital products, automation, marketing technology and business systems.
                                </p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-surface border border-outline-variant p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant pb-6">
                                <span className="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                                <h3 className="text-2xl font-display text-primary">Industry <span className="italic">Certifications</span></h3>
                            </div>
                            
                            <h4 className="font-display text-2xl text-primary mb-2">HubSpot Academy</h4>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-6">Professional Certification</p>
                            
                            <div className="border-l border-outline-variant pl-4">
                                <span className="inline-block px-2 py-1 bg-surface-variant text-primary text-[10px] uppercase tracking-widest font-semibold mb-3">Certified</span>
                                <p className="font-display text-lg text-primary mb-2">Content Marketing / Digital Marketing</p>
                                <p className="text-sm text-outline leading-relaxed">
                                    Formal marketing knowledge bridging the gap between creative execution and strategic business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
