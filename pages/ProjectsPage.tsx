
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { MapPin, IndianRupee, Layout, ArrowRight, X } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-serif text-matteBlack mb-4">Portfolio.</h1>
            <p className="text-charcoal/50 text-lg font-light">A curated display of our finest transformations across Hyderabad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map(p => (
              <div 
                key={p.id} 
                className="group cursor-pointer bg-white border border-charcoal/5 hover:border-mutedGold transition-all duration-500 overflow-hidden shadow-sm"
                onClick={() => setSelectedProject(p)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={p.name} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-matteBlack mb-2">{p.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-charcoal/50 text-xs">
                      <Layout size={14} /> <span>{p.configuration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/50 text-xs">
                      <IndianRupee size={14} /> <span>{p.budget}</span>
                    </div>
                    {p.address && (
                      <div className="flex items-center gap-2 text-charcoal/50 text-xs">
                        <MapPin size={14} /> <span>{p.address}</span>
                      </div>
                    )}
                  </div>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-mutedGold flex items-center gap-2">
                    View Project <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-matteBlack/90 backdrop-blur-sm">
          <div className="bg-ivory w-full max-w-5xl max-h-[90vh] overflow-y-auto relative rounded-sm shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-matteBlack z-10 hover:text-mutedGold"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 bg-beige">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.name} />
              </div>
              <div className="w-full lg:w-2/5 p-12 lg:p-16">
                <span className="text-mutedGold uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Case Study</span>
                <h2 className="text-4xl font-serif text-matteBlack mb-6">{selectedProject.name}</h2>
                <div className="grid grid-cols-2 gap-6 mb-8 border-y border-beige py-6">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold mb-1">Configuration</h5>
                    <p className="text-sm font-medium">{selectedProject.configuration}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold mb-1">Budget</h5>
                    <p className="text-sm font-medium">{selectedProject.budget}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Scope of Work</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed font-light">{selectedProject.details}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Design Concept</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed font-light">{selectedProject.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="mt-12 w-full bg-matteBlack text-ivory py-4 text-xs uppercase tracking-widest font-bold hover:bg-mutedGold transition-all"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
