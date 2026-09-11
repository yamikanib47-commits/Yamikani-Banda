import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`text-sm tracking-widest uppercase font-semibold transition-colors ${
        isActive(to) ? 'text-primary' : 'text-outline hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );

  const MobileNavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      onClick={() => setIsMobileMenuOpen(false)}
      className={`block px-4 py-3 text-sm tracking-widest uppercase font-semibold transition-colors ${
        isActive(to) 
          ? 'text-primary bg-surface-variant rounded' 
          : 'text-outline hover:text-primary hover:bg-surface-variant rounded'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-outline-variant shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display font-bold text-2xl tracking-tight text-primary md:hidden">YB</span>
          <span className="font-display font-bold text-2xl tracking-tight text-primary hidden md:inline">Yamikani Banda</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/skills" label="Skills" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/leadership" label="Leadership" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-outline hover:text-primary uppercase tracking-wider transition-colors"
            title="Download Professional CV"
          >
            Download CV
          </a>
          
          <Link
            to="/contact"
            className="hidden sm:flex bg-primary text-on-primary px-6 py-2.5 rounded text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
          >
            Let's Work Together
          </Link>
          
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-outline-variant shadow-lg p-6 flex flex-col gap-2">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/skills" label="Skills" />
          <MobileNavLink to="/projects" label="Projects" />
          <MobileNavLink to="/leadership" label="Leadership" />
          <MobileNavLink to="/contact" label="Contact" />
          <div className="pt-4 mt-4 border-t border-outline-variant flex flex-col gap-3">
             <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-surface-variant text-primary px-5 py-3 rounded text-sm font-semibold tracking-wide uppercase hover:bg-outline-variant transition-colors"
            >
              Download CV
            </a>
             <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-primary text-on-primary px-5 py-3 rounded text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;