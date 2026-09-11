import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import CMS from './pages/CMS';
import { CMSProvider } from './context/CMSContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <CMSProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cms" element={<CMS />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CMSProvider>
  );
};

export default App;