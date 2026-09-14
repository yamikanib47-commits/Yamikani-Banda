import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';

const Home: React.FC = () => {
  const { profileImageUrl } = useCMS();
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden isolate">
        {/* Black polka-dotted gradient background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_2px,transparent_2px)] [background-size:24px_24px] opacity-20 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="inline-flex items-center gap-2 border border-outline-variant px-4 py-1.5 rounded w-fit bg-background">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-outline">Marketing & Creative Technology</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary">
              I build brands, content and digital <span className="italic">systems</span> that help businesses grow.
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-outline leading-relaxed max-w-xl">
              I'm a multidisciplinary professional combining marketing strategy, visual communication, content production and digital systems to turn ideas into practical business solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/projects" className="bg-primary text-on-primary px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors text-center">
                Selected Works
              </Link>
              <a href="https://www.linkedin.com/in/yamikani-banda-006b0a376/" target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-primary px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase hover:bg-surface-variant transition-colors text-center">
                LinkedIn Profile
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-primary px-8 py-4 rounded text-sm font-semibold tracking-widest uppercase hover:bg-surface-variant transition-colors text-center">
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded overflow-hidden">
              <img 
                src={profileImageUrl || "/image.png"} 
                alt="Yamikani Banda"
                className="w-full h-full object-cover grayscale-[20%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-32 px-6 bg-surface-variant">
        <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <h2 className="text-4xl md:text-5xl font-display text-primary">
                  Core <span className="italic">Capabilities</span>
                </h2>
                <Link to="/skills" className="group flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold tracking-widest uppercase text-primary transition-all">
                    Full Skill Map <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { icon: 'trending_up', title: 'Marketing', skills: 'Digital Marketing, Content Strategy, Brand Growth, Sales & Marketing', level: 'Strategy' },
                    { icon: 'palette', title: 'Creative', skills: 'Graphic Design, Brand Identity, Video Editing, 3D Graphics', level: 'Production' },
                    { icon: 'settings_suggest', title: 'Technology', skills: 'AI Automation, CMS & CRM Development, MVP Design', level: 'Systems' }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 rounded bg-background border border-outline-variant hover:border-outline transition-colors flex flex-col gap-6">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-outline mb-2 block">{item.level}</span>
                          <h3 className="text-xl font-display mb-3 text-primary">{item.title}</h3>
                          <p className="text-outline text-sm leading-relaxed">{item.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1280px] mx-auto bg-primary text-on-primary rounded p-12 md:p-24 text-center">
            <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
                <span className="material-symbols-outlined text-4xl opacity-50">architecture</span>
                <h2 className="text-4xl md:text-6xl font-display leading-[1.1]">
                  Ready to <span className="italic">build</span> something practical?
                </h2>
                <p className="text-outline-variant text-lg md:text-xl font-sans font-light">
                    From brand identity and social content to AI-powered automation and digital products, let's work together to help your business operate and grow better.
                </p>
                <Link to="/contact" className="mt-8 bg-on-primary text-primary px-10 py-5 rounded text-sm font-semibold tracking-widest uppercase hover:bg-surface-variant transition-colors">
                    Let's Work Together
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;