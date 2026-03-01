
import React, { useEffect, useState } from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (p: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90)',
          transform: `translateY(${offsetY * 0.4}px) scale(1.1)`
        }}
      >
        <div className="absolute inset-0 bg-matteBlack/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
        <h1 className="text-5xl md:text-8xl font-serif text-ivory mb-6 leading-[1.1]">
          Designing Spaces <br />
          <span className="italic font-light">With Purpose.</span>
        </h1>
        <p className="text-ivory/90 text-sm md:text-lg tracking-[0.4em] uppercase mb-12 font-medium">
          Interiors • Architecture • Landscape
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-lg mx-auto md:max-w-none">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-mutedGold text-ivory px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-ivory hover:text-matteBlack transition-all w-full md:w-auto shadow-2xl"
          >
            Book Free Consultation
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className="border border-ivory/40 text-ivory px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md hover:bg-ivory/10 transition-all w-full md:w-auto"
          >
            Explore Our Projects
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] text-ivory mb-2 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-ivory to-transparent" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
