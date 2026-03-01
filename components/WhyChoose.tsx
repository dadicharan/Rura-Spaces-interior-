
import React from 'react';
import { ShieldCheck, Clock, PencilRuler, Diamond, Users, PackageCheck } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const values = [
    { icon: <ShieldCheck />, title: 'Transparent Budgeting', desc: 'No hidden costs. Detailed itemized estimates before we start.' },
    { icon: <Clock />, title: 'On-Time Delivery', desc: 'Strict project management ensures we hand over on the promised date.' },
    { icon: <PencilRuler />, title: 'Customized Designs', desc: 'No cookie-cutter templates. Every space is uniquely yours.' },
    { icon: <Diamond />, title: 'Premium Materials', desc: 'We source only high-grade woods, metals, and fabrics.' },
    { icon: <Users />, title: 'Expert Team', desc: 'Our architects and craftsmen bring decades of combined experience.' },
    { icon: <PackageCheck />, title: 'End-to-End Handling', desc: 'From procurement to plumbing—we handle the chaos so you don\'t have to.' }
  ];

  return (
    <section className="py-24 bg-beige/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">The Advantage</span>
          <h2 className="text-4xl font-serif text-matteBlack">Why Choose RuRa Spaces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {values.map((v, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-ivory shadow-lg rounded-full flex items-center justify-center text-mutedGold">
                {v.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif text-matteBlack mb-2">{v.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
