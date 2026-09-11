import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-on-primary py-24 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col gap-2">
          <span className="font-display font-bold text-2xl tracking-tight">Yamikani Banda</span>
          <p className="text-outline-variant text-sm font-sans">
            Marketing & Creative Technology Professional
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-center gap-8">
           <Link to="/" className="text-xs font-semibold uppercase tracking-widest text-outline-variant hover:text-on-primary transition-colors">Home</Link>
           <Link to="/skills" className="text-xs font-semibold uppercase tracking-widest text-outline-variant hover:text-on-primary transition-colors">Skills</Link>
           <Link to="/projects" className="text-xs font-semibold uppercase tracking-widest text-outline-variant hover:text-on-primary transition-colors">Work</Link>
           <Link to="/cms" className="text-xs font-semibold uppercase tracking-widest text-outline-variant hover:text-on-primary transition-colors">Admin</Link>
        </div>

        <div className="flex items-center justify-start md:justify-end gap-6">
          <a href="https://www.linkedin.com/in/yamikani-banda-006b0a376/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-outline-variant hover:text-on-primary transition-colors">
             <span className="font-semibold text-xs tracking-widest uppercase">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center justify-center text-outline-variant hover:text-on-primary transition-colors">
             <span className="font-semibold text-xs tracking-widest uppercase">Twitter</span>
          </a>
           <a href="#" className="flex items-center justify-center text-outline-variant hover:text-on-primary transition-colors">
             <span className="font-semibold text-xs tracking-widest uppercase">GitHub</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mt-20 pt-8 border-t border-outline/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-outline-variant font-medium tracking-wide">
          © {new Date().getFullYear()} Yamikani Banda. All rights reserved.
        </p>
        <p className="text-xs text-outline-variant font-medium tracking-wide">
          Designed with Editorial Modernism.
        </p>
      </div>
    </footer>
  );
};

export default Footer;