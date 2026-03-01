
import React, { useState, useRef, useEffect } from 'react';
import { Box, Play, Pause, Maximize, RotateCw, ZoomIn, ZoomOut, Info, Layers } from 'lucide-react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const MODELS = [
  {
    id: 'living',
    name: 'Luxury Living Room',
    category: 'Complete Room',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BarallelRGB/glTF-Binary/BarallelRGB.glb',
    description: 'Modern luxury lounge with premium seating and ambient lighting.',
    details: 'Experience our signature living space with velvet furnishings and gold accents.',
    features: ['Velvet Upholstery', 'Gold Hardware', 'LED Ambient Lighting', 'Modular Design']
  },
  {
    id: 'bedroom',
    name: 'Master Bedroom Suite',
    category: 'Complete Room',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/ReciprocatingSaw/glTF-Binary/ReciprocatingSaw.glb',
    description: 'Serene sanctuary with luxurious bedding and elegant design.',
    details: 'A restful retreat crafted for ultimate comfort and sophistication.',
    features: ['Premium Bed Frame', 'Nightstands', 'Wall Sconces', 'Luxury Linens']
  },
  {
    id: 'kitchen',
    name: 'Contemporary Kitchen',
    category: 'Complete Room',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb',
    description: 'State-of-the-art culinary space with premium appliances.',
    details: 'Functional elegance meets modern design in this chef\'s showcase.',
    features: ['Smart Appliances', 'Granite Counters', 'Island Seating', 'Custom Cabinetry']
  },
  {
    id: 'dining',
    name: 'Dining Set',
    category: 'Furniture Piece',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
    description: 'Elegant dining experience with hand-crafted furnishings.',
    details: 'A space where conversations flow and memories are created.',
    features: ['Solid Wood Table', '8-Seater Capacity', 'Upholstered Chairs', 'Statement Lighting']
  },
  {
    id: 'office',
    name: 'Executive Workspace',
    category: 'Complete Room',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Lantern/glTF-Binary/Lantern.glb',
    description: 'Professional environment designed for productivity and style.',
    details: 'Where creativity and focus converge in perfect harmony.',
    features: ['Executive Desk', 'Ergonomic Chair', 'Built-in Shelving', 'Conference Area']
  },
  {
    id: 'lounge',
    name: 'Premium Lounge Chair',
    category: 'Furniture Piece',
    url: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/SheenChair/glTF-Binary/SheenChair.glb',
    description: 'Ergonomic luxury furniture with premium materials and sleek design.',
    details: 'Designed for those who appreciate comfort and aesthetic excellence.',
    features: ['Premium Upholstery', 'Adjustable Recline', 'Brass Legs', 'Italian Leather']
  }
];

const Experience3DPage: React.FC = () => {
  const [selected, setSelected] = useState(MODELS[0]);
  const [isRotating, setIsRotating] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const modelViewerRef = useRef<any>(null);

  const toggleRotation = () => setIsRotating(!isRotating);

  const handleZoom = (increment: boolean) => {
    if (!modelViewerRef.current) return;
    const zoomAmount = increment ? -1 : 1;
    modelViewerRef.current.zoom(zoomAmount);
  };

  const resetView = () => {
    if (!modelViewerRef.current) return;
    modelViewerRef.current.cameraOrbit = '0deg 75deg 105%';
    modelViewerRef.current.fieldOfView = 'auto';
  };

  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20 px-6 bg-beige/40 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-mutedGold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Innovation Lab</span>
            <h1 className="text-4xl md:text-6xl font-serif text-matteBlack mb-8 leading-tight">
              Visualize Your Space <br />
              <span className="italic">Before Reality.</span>
            </h1>
            <p className="text-lg text-charcoal/60 font-light leading-relaxed mb-8">
              Experience browser-native 3D previews. Our engine simulates physics and light density to ensure your home looks exactly as planned.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-matteBlack text-ivory px-6 py-3 text-[10px] uppercase tracking-widest font-bold">
                <Maximize size={14} /> 4K Rendering
              </div>
              <div className="flex items-center gap-2 border border-matteBlack/10 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-matteBlack">
                <RotateCw size={14} /> Scale 1:1
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="p-8 bg-white border border-charcoal/5 shadow-sm">
                <h4 className="font-serif text-xl mb-2 text-mutedGold">Material Zoom</h4>
                <p className="text-xs text-charcoal/50 leading-relaxed">Inspect every grain of wood and weave of fabric in sub-millimeter detail.</p>
             </div>
             <div className="p-8 bg-white border border-charcoal/5 shadow-sm translate-y-6">
                <h4 className="font-serif text-xl mb-2 text-mutedGold">Natural Light</h4>
                <p className="text-xs text-charcoal/50 leading-relaxed">Simulate how daylight reflects off surfaces throughout the afternoon.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-10 flex-wrap gap-2">
            <div className="bg-white border border-charcoal/5 inline-flex p-1 rounded-lg shadow-md flex-wrap gap-1 justify-center max-w-5xl">
              {MODELS.map(m => (
                <button
                  key={m.id}
                  onClick={() => { setSelected(m); setIsLoading(true); }}
                  className={`px-4 py-3 text-[9px] uppercase tracking-[0.15em] font-bold transition-all whitespace-nowrap rounded-md ${
                    selected.id === m.id 
                      ? 'bg-matteBlack text-ivory shadow-lg scale-105 border border-mutedGold' 
                      : 'text-charcoal/60 hover:text-charcoal hover:bg-beige/30 border border-transparent'
                  }`}
                  title={`View ${m.name}`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          <div className="relative aspect-video bg-[#F0EFEC] shadow-2xl border border-charcoal/5 overflow-hidden group">
            <model-viewer
              ref={modelViewerRef}
              src={selected.url}
              camera-controls
              auto-rotate={isRotating ? true : undefined}
              shadow-intensity="1.5"
              environment-image="neutral"
              exposure="1.2"
              interaction-prompt="auto"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full"
            >
              {isLoading && (
                <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-beige">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-mutedGold border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-mutedGold">Loading Model...</span>
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-matteBlack/90 backdrop-blur-md px-6 py-4 border border-ivory/10 shadow-xl z-50 rounded-lg">
                <button onClick={toggleRotation} className="text-ivory hover:text-mutedGold transition-colors" title={isRotating ? "Pause" : "Play"}>
                  {isRotating ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <div className="w-[1px] h-4 bg-ivory/20" />
                <button onClick={() => handleZoom(true)} className="text-ivory hover:text-mutedGold transition-colors" title="Zoom In"><ZoomIn size={18} /></button>
                <button onClick={() => handleZoom(false)} className="text-ivory hover:text-mutedGold transition-colors" title="Zoom Out"><ZoomOut size={18} /></button>
                <div className="w-[1px] h-4 bg-ivory/20" />
                <button onClick={resetView} className="text-ivory hover:text-mutedGold transition-colors" title="Reset"><RotateCw size={18} /></button>
              </div>

              <div className="absolute top-6 left-6 p-6 bg-ivory/95 backdrop-blur-md shadow-xl border-l-4 border-mutedGold max-w-xs hidden md:block max-h-[500px] overflow-y-auto rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={20} className="text-mutedGold" />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-mutedGold bg-beige px-2 py-1 rounded">{selected.category || 'Display'}</span>
                </div>
                <h3 className="text-xl font-serif text-matteBlack mb-2">{selected.name}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed font-light mb-4">{selected.description}</p>
                
                <div className="bg-beige/50 p-3 mb-4 border-l-2 border-mutedGold rounded">
                  <p className="text-[9px] uppercase tracking-widest text-mutedGold font-bold mb-1">Design Details</p>
                  <p className="text-[11px] text-charcoal/80 italic">{selected.details}</p>
                </div>

                {selected.features && selected.features.length > 0 && (
                  <div className="bg-white/50 p-3 rounded border border-charcoal/5">
                    <p className="text-[9px] uppercase tracking-widest text-matteBlack font-bold mb-3">Key Features</p>
                    <div className="space-y-2">
                      {selected.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-mutedGold font-bold text-[9px] mt-1">✓</span>
                          <span className="text-[10px] text-charcoal/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute top-6 right-6 flex items-center gap-2 text-matteBlack/40 text-[9px] uppercase tracking-widest font-bold">
                <Info size={12} /> <span>Interact to Orbit • Scroll to Zoom</span>
              </div>
            </model-viewer>

            {/* Mobile Info Card */}
            <div className="block md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-matteBlack via-matteBlack/90 to-transparent p-6 text-ivory">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] uppercase tracking-widest font-bold text-mutedGold bg-mutedGold/20 px-2 py-1 rounded">{selected.category || 'Display'}</span>
              </div>
              <h3 className="text-lg font-serif text-ivory mb-1">{selected.name}</h3>
              <p className="text-xs text-ivory/80 leading-relaxed mb-3">{selected.description}</p>
              {selected.features && selected.features.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selected.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-[8px] uppercase tracking-widest font-bold text-mutedGold bg-ivory/10 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience3DPage;
