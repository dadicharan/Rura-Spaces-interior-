
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-ivory">
      <section className="py-24 px-6 border-b border-beige">
        <div className="max-w-5xl mx-auto">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif text-matteBlack mb-12">Crafting Elegance Since Inception.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
              <p>RuRa Spaces was born from a singular vision: to bridge the gap between high-end architectural aesthetics and practical residential modular solutions.</p>
              <p>We believe that luxury isn't just about expensive materials—it's about the <span className="italic font-serif">precision of detail</span> and the <span className="italic font-serif">intentionality of space</span>. Every project we undertake is a collaboration between our clients' dreams and our craftsmen's expertise.</p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Studio" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed font-light">To become the gold standard for integrated design-to-delivery services in India, known for transparency and artistic integrity.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed font-light">Empowering homeowners through 3D visualization and professional project management, ensuring every build is a legacy piece.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">What Makes Us Different</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed font-light">Zero hidden costs, verified premium materials, and a design process that includes the client as an active co-creator.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
