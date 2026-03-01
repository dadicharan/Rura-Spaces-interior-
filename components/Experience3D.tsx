
import React, { useState } from 'react';
import { Box, Layers, Sun, RotateCw } from 'lucide-react';

/* Fix for TypeScript error: 'model-viewer' does not exist on type 'JSX.IntrinsicElements' */
// Using declare module 'react' to augment the JSX namespace specifically within the React context
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const MODELS = [
  {
    id: 'sofa',
    name: 'Luxury Velvet Sofa',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb',
    description: 'Explore the high-end fabric textures and ergonomic curves of our signature seating line.',
    stats: { material: 'Premium Velvet', finish: 'Matte Gold Base', style: 'Contemporary' }
  },
  {
    id: 'chair',
    name: 'Art Deco Armchair',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/SheenChair/glTF-Binary/SheenChair.glb',
    description: 'A study in micro-textures and metallic accents. Zoom in to see the intricate fabric sheen.',
    stats: { material: 'Sheen Fabric', finish: 'Oak Legs', style: 'Modern Classic' }
  }
];

const Experience3D: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-ivory">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-beige rounded-full blur-[120px] opacity-60 -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-mutedGold/5 rounded-full blur-[100px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Interactive Design</span>
          <h2 className="text-4xl md:text-6xl font-serif text-matteBlack mb-8">Touch the Future of Your Space</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Don't just look at photos. Interact with our designs. Rotate, zoom, and inspect every finish in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls and Stats */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-8">
            <div className="bg-white p-8 border border-charcoal/5 shadow-xl">
              <h3 className="text-2xl font-serif text-matteBlack mb-6">Explore Details</h3>
              
              <div className="space-y-4 mb-8">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m)}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between border ${
                      selectedModel.id === m.id 
                        ? 'border-mutedGold bg-beige/30' 
                        : 'border-transparent hover:bg-beige/10'
                    }`}
                  >
                    <span className="font-medium">{m.name}</span>
                    <Box size={16} className={selectedModel.id === m.id ? 'text-mutedGold' : 'text-charcoal/20'} />
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-mutedGold font-bold mb-2">Description</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{selectedModel.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Material</h4>
                    <p className="text-sm font-medium">{selectedModel.stats.material}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Finish</h4>
                    <p className="text-sm font-medium">{selectedModel.stats.finish}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-charcoal/40 uppercase tracking-widest font-bold">
              <RotateCw size={14} />
              <span>Drag to rotate • Pinch to zoom</span>
            </div>
          </div>

          {/* 3D Viewer Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="aspect-square lg:aspect-video bg-beige relative shadow-2xl overflow-hidden border border-charcoal/5">
              <model-viewer
                src={selectedModel.url}
                camera-controls
                auto-rotate
                shadow-intensity="1"
                environment-image="neutral"
                exposure="1.2"
                interaction-prompt="auto"
                ar
                alt={`A 3D model of ${selectedModel.name}`}
              >
                <div slot="progress-bar" className="absolute inset-x-0 bottom-0 h-1 bg-mutedGold transition-transform origin-left"></div>
              </model-viewer>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-matteBlack/80 backdrop-blur-md px-4 py-2 text-ivory flex items-center gap-3">
                <Layers size={14} className="text-mutedGold" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">High-Fidelity Render</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: <Box size={20} />, title: 'Real-Scale', desc: 'Accurate dimensions for spatial planning.' },
                { icon: <Sun size={20} />, title: 'PBR Lighting', desc: 'Realistic reflection and lighting physics.' },
                { icon: <Layers size={20} />, title: 'Texture Detail', desc: 'Inspect materials down to the grain.' }
              ].map((f, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-mutedGold">{f.icon}</div>
                  <h4 className="font-serif text-lg text-matteBlack">{f.title}</h4>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience3D;
