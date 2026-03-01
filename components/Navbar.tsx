
import React, { useState } from 'react';
import { Page } from '../App';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: '3D Experience', page: 'experience' },
    { name: 'Contact Us', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 bg-matteBlack/95 backdrop-blur-md shadow-sm ${
      isScrolled || isMobileMenuOpen ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex flex-col cursor-pointer z-50" 
          onClick={() => handleNavigate('home')}
        >
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest leading-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-ivory' : 'text-ivory'}`}>
            RuRa Spaces
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-mutedGold font-medium mt-1">Interiors • Architecture • Landscape</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={`text-xs uppercase tracking-widest font-semibold transition-all hover:text-mutedGold ${
                currentPage === link.page ? 'text-mutedGold' : (isScrolled ? 'text-ivory' : 'text-ivory/80')
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigate('contact')}
            className="bg-gold text-ivory px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-mutedGold transition-all transform hover:-translate-y-0.5"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-mutedGold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-matteBlack' : 'text-ivory'} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-matteBlack z-40 transition-transform duration-500 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={`text-xl uppercase tracking-[0.2em] font-serif ${
                currentPage === link.page ? 'text-mutedGold' : 'text-ivory'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigate('contact')}
            className="bg-mutedGold text-matteBlack px-10 py-4 text-xs uppercase tracking-widest font-bold"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
