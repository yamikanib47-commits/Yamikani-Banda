import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="w-full">
            <section className="pt-24 pb-32 px-6">
                <div className="max-w-[1280px] mx-auto border-t border-outline-variant pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        
                        {/* Left Side: Copy & CTA */}
                        <div className="lg:col-span-5 flex flex-col gap-12">
                            <div>
                                <div className="inline-flex items-center gap-2 border border-outline-variant px-4 py-1.5 rounded w-fit mb-8">
                                    <span className="material-symbols-outlined text-sm text-outline">connect_without_contact</span>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-outline">Collaboration</span>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-display text-primary leading-tight mb-6">
                                    Let's build something <br className="hidden lg:block"/>
                                    <span className="italic">together.</span>
                                </h1>
                                <p className="text-lg text-outline leading-relaxed">
                                    Open to collaborations on marketing, creative design, digital products, or automation systems.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 pt-8 border-t border-outline-variant">
                                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-outline">Direct Contact & Info</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="mailto:[YOUR_EMAIL_HERE]" className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary font-semibold tracking-widest uppercase text-xs hover:bg-primary/90 transition-colors">
                                        <span className="material-symbols-outlined text-lg">mail</span>
                                        Let's Work Together
                                    </a>
                                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 border border-outline-variant text-primary font-semibold tracking-widest uppercase text-xs hover:bg-surface-variant transition-colors bg-surface">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Download My CV
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 pt-8 border-t border-outline-variant">
                                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-outline">Find me on</h3>
                                <div className="flex gap-8 flex-wrap">
                                    {[
                                        { name: 'Email', link: 'mailto:[YOUR_EMAIL_HERE]' },
                                        { name: 'LinkedIn', link: '[YOUR_LINKEDIN_URL]' },
                                        { name: 'WhatsApp', link: '[YOUR_WHATSAPP_URL]' },
                                        { name: 'Instagram', link: '[YOUR_INSTAGRAM_URL]' },
                                        { name: 'TikTok', link: '[YOUR_TIKTOK_URL]' }
                                    ].map(platform => (
                                        <a key={platform.name} href={platform.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-outline transition-colors flex items-center gap-1">
                                            <span className="font-display text-lg">{platform.name}</span>
                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-surface border border-outline-variant p-8 lg:p-12">
                                <h3 className="text-2xl font-display text-primary mb-8 border-b border-outline-variant pb-6">Project <span className="italic">Inquiry</span></h3>
                                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <label className="flex flex-col gap-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Name</span>
                                            <input type="text" placeholder="John Doe" className="w-full border-b border-outline-variant bg-transparent p-3 outline-none focus:border-primary text-primary transition-colors placeholder:text-outline/50 font-sans" />
                                        </label>
                                        <label className="flex flex-col gap-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Email</span>
                                            <input type="email" placeholder="john@example.com" className="w-full border-b border-outline-variant bg-transparent p-3 outline-none focus:border-primary text-primary transition-colors placeholder:text-outline/50 font-sans" />
                                        </label>
                                    </div>
                                    <label className="flex flex-col gap-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Project Type</span>
                                        <div className="relative">
                                            <select defaultValue="" className="w-full border-b border-outline-variant bg-transparent p-3 outline-none focus:border-primary text-primary transition-colors appearance-none font-sans cursor-pointer">
                                                <option value="" disabled>Select an option</option>
                                                <option value="automation">Workflow Automation</option>
                                                <option value="web-design">Web Design & Systems</option>
                                                <option value="branding">Digital Branding</option>
                                                <option value="other">Other / General Inquiry</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-3">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">Message</span>
                                        <textarea rows={4} placeholder="Tell me about your project..." className="w-full border-b border-outline-variant bg-transparent p-3 outline-none focus:border-primary text-primary transition-colors placeholder:text-outline/50 font-sans resize-none"></textarea>
                                    </label>
                                    <button type="submit" className="mt-4 w-full flex items-center justify-center gap-3 bg-primary py-5 text-on-primary font-semibold tracking-widest uppercase text-xs transition-colors hover:bg-surface-variant hover:text-primary border border-transparent hover:border-primary">
                                        Send Message
                                        <span className="material-symbols-outlined text-lg">send</span>
                                    </button>
                                </form>
                                <div className="mt-8 pt-8 border-t border-outline-variant flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-outline">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span>Typical response time: 24-48 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;