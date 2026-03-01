
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Client Voices</span>
          <h2 className="text-4xl font-serif text-matteBlack italic">“Reflecting Our Clients' Journeys”</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-beige/20 p-12 relative">
              <span className="absolute top-8 left-8 text-6xl font-serif text-mutedGold/20">“</span>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-mutedGold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 text-lg font-light leading-relaxed mb-8 italic">
                  {t.content}
                </p>
                <div>
                  <h4 className="font-serif text-matteBlack text-xl">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-mutedGold font-medium mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
