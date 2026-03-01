
import React from 'react';
import { Page } from '../App';

const Footer: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-matteBlack text-ivory/40 py-16 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold tracking-widest text-ivory block mb-2 cursor-pointer" onClick={() => onNavigate('home')}>RuRa Spaces</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-mutedGold">Design Excellence • 2025</span>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-sm uppercase tracking-widest font-medium">
            <button onClick={() => onNavigate('about')} className="hover:text-ivory transition-colors">About</button>
            <button onClick={() => onNavigate('services')} className="hover:text-ivory transition-colors">Services</button>
            <button onClick={() => onNavigate('projects')} className="hover:text-ivory transition-colors">Portfolio</button>
            <button onClick={() => onNavigate('experience')} className="hover:text-ivory transition-colors">3D Experience</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-ivory transition-colors">Contact</button>
          </div>

          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-10 h-10 rounded-full border border-ivory/10 flex items-center justify-center hover:bg-mutedGold hover:text-ivory transition-all"
              >
                <span className="sr-only">{social}</span>
                <div className="w-1 h-1 bg-current" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ivory/5 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2025 RuRa Spaces Interiors. Crafted for Luxury.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
