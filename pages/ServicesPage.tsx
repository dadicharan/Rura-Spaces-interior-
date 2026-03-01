
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-ivory">
      <section className="py-20 px-6 bg-matteBlack text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-6">Expertise & Solutions</h1>
          <p className="text-ivory/60 text-lg font-light tracking-wide">From conceptual sketches to the final turnkey handover, we offer a comprehensive suite of luxury design services.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-24">
          {SERVICES.map((s, i) => {
            const IconComponent = (Icons as any)[s.icon];
            return (
              <div key={s.id} className={`flex flex-col md:flex-row gap-16 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="w-16 h-16 bg-beige flex items-center justify-center text-mutedGold mb-8">
                    <IconComponent size={32} strokeWidth={1} />
                  </div>
                  <h2 className="text-4xl font-serif text-matteBlack mb-6">{s.title}</h2>
                  <p className="text-lg text-charcoal/80 font-light mb-8 leading-relaxed">{s.longDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-beige pt-8">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-mutedGold mb-3">Suitable For</h4>
                      <p className="text-sm text-charcoal/70 font-light">{s.suitableFor}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-mutedGold mb-3">Core Use Cases</h4>
                      <ul className="text-sm text-charcoal/70 font-light space-y-1">
                        {s.useCases?.map(u => <li key={u}>• {u}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 aspect-video bg-beige overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${1600000000000 + i * 1000}?auto=format&fit=crop&w=1200&q=80`} className="w-full h-full object-cover grayscale opacity-80" alt={s.title} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
