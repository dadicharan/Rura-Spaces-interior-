
import React from 'react';
import { Home, Layout, TreePine, Key, Hammer, Box } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: { [key: string]: any } = {
  Home,
  Layout,
  TreePine,
  Key,
  Hammer,
  Box
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-matteBlack">Comprehensive Design Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group bg-ivory overflow-hidden border border-charcoal/5 hover:border-mutedGold transition-all duration-500 hover:shadow-2xl hover:shadow-mutedGold/5 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden bg-charcoal/10 relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-10">
                  <div className="mb-4 text-mutedGold group-hover:scale-110 transition-transform duration-500 inline-block">
                    <IconComponent size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-serif text-matteBlack mb-4">{service.title}</h3>
                  <p className="text-charcoal/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="w-10 h-[1px] bg-charcoal/20 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
