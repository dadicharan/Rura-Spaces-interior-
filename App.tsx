
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import Experience3DPage from './pages/Experience3DPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'experience' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <ServicesPage />;
      case 'projects': return <ProjectsPage />;
      case 'experience': return <Experience3DPage />;
      case 'contact': return <ContactPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-charcoal bg-ivory overflow-x-hidden">
      <Navbar isScrolled={isScrolled} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Chatbot />
    </div>
  );
};

export default App;
