
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80" 
              alt="Design Philosophy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-beige -z-10 hidden lg:block" />
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl font-serif text-matteBlack mb-8 leading-tight">
            Where Craftsmanship <br />
            Meets Modern Living.
          </h2>
          <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg font-light">
            <p>
              RuRa Spaces is not just an interior firm; we are storytellers who use space, texture, and light as our medium. With a focus on high-end residential architecture and landscape, we create environments that feel personal and timeless.
            </p>
            <p>
              Our philosophy revolves around the delicate balance between <span className="text-matteBlack font-medium italic">functionality and aesthetics</span>. Every corner we design is a testament to our commitment to quality, transparency in timelines, and precision in execution.
            </p>
            <p>
              From the initial 3D visualization to the final turnkey handover, our team ensures your vision is translated into reality with zero compromise.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-beige pt-8">
            <div>
              <p className="text-3xl font-serif text-matteBlack">150+</p>
              <p className="text-xs uppercase tracking-widest text-mutedGold mt-1">Homes Transformed</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-matteBlack">100%</p>
              <p className="text-xs uppercase tracking-widest text-mutedGold mt-1">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
