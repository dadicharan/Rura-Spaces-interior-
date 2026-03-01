
import React from 'react';
import Hero from '../components/Hero';
import { Page } from '../App';
import { PROJECTS, SERVICES } from '../constants';
import { ShieldCheck, Clock, PencilRuler, Diamond, Users, PackageCheck, ArrowRight } from 'lucide-react';

const Home: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Brand Intro */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-matteBlack mb-6">Designing Timeless Spaces with Purpose.</h2>
          <p className="text-lg text-charcoal/70 font-light leading-relaxed">
            RuRa Spaces provides end-to-end interior, architecture, and landscape solutions for the modern Indian home. 
            We combine high-end execution with complete budget transparency, ensuring your premium space is crafted 
            on time and with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-beige/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-bold block mb-2">Our Expertise</span>
              <h2 className="text-3xl font-serif text-matteBlack">Core Design Solutions</h2>
            </div>
            <button onClick={() => onNavigate('services')} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-mutedGold transition-colors">
              All Services <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(s => (
              <div key={s.id} className="bg-ivory p-8 border border-charcoal/5 hover:border-mutedGold transition-all">
                <h3 className="text-xl font-serif mb-4">{s.title}</h3>
                <p className="text-sm text-charcoal/60 mb-6 font-light">{s.description}</p>
                <button onClick={() => onNavigate('services')} className="text-xs uppercase font-bold text-mutedGold">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-matteBlack text-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-bold block mb-2">Portfolio</span>
            <h2 className="text-3xl font-serif">Featured Transformations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map(p => (
              <div key={p.id} className="group cursor-pointer" onClick={() => onNavigate('projects')}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={p.name} />
                </div>
                <h3 className="text-lg font-serif mb-1">{p.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-ivory/50">{p.configuration} • {p.budget}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-16 text-matteBlack">The RuRa Design Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { n: '01', t: 'Discuss', d: 'Requirement discussion', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80' },
              { n: '02', t: 'Analyze', d: 'Site visit & measurements', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
              { n: '03', t: 'Design', d: 'Concept & 3D visualization', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80' },
              { n: '04', t: 'Select', d: 'Material finalization', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&w=500&q=80' },
              { n: '05', t: 'Build', d: 'Execution & supervision', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80' },
              { n: '06', t: 'Inhabit', d: 'Project Handover', img: 'https://images.unsplash.com/photo-1600210491892-03d5c1a06fb1?auto=format&fit=crop&w=500&q=80' }
            ].map(step => (
              <div key={step.n} className="group overflow-hidden border border-charcoal/5 hover:border-mutedGold transition-all duration-500">
                <div className="relative overflow-hidden h-48 bg-beige">
                  <img 
                    src={step.img} 
                    alt={step.t}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matteBlack/30" />
                  <span className="absolute top-4 left-4 text-5xl font-serif text-mutedGold font-bold opacity-90">{step.n}</span>
                </div>
                <div className="p-6 text-center bg-ivory">
                  <h4 className="font-serif text-lg font-bold text-matteBlack mb-3 leading-tight">{step.t}</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-beige/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-bold block mb-2">The Advantage</span>
            <h2 className="text-3xl font-serif">Why Partner with Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Clock />, title: 'Fixed Timelines' },
              { icon: <Diamond />, title: 'Premium Materials' },
              { icon: <PencilRuler />, title: 'Custom Designs' },
              { icon: <ShieldCheck />, title: 'Budget Clarity' },
              { icon: <Users />, title: 'Dedicated Manager' },
              { icon: <PackageCheck />, title: 'Post-Handover Support' }
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-ivory shadow-sm border border-charcoal/5">
                <div className="text-mutedGold mt-1">{v.icon}</div>
                <div>
                  <h4 className="font-serif text-lg mb-1">{v.title}</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Experience a seamless journey from the first sketch to the final styling.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-mutedGold text-ivory text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">“Your Dream Space Starts with a Conversation.”</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-matteBlack text-ivory px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-ivory hover:text-matteBlack transition-all"
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
