
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <section id="projects" className="py-24 bg-matteBlack text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif">Selected Works</h2>
          </div>
          <p className="text-ivory/50 max-w-sm text-sm tracking-wide font-light">
            A curation of our most prestigious residential projects across Hyderabad and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full text-left p-6 transition-all duration-300 border-l-2 ${
                  activeProject.id === project.id 
                    ? 'border-mutedGold bg-ivory/5' 
                    : 'border-transparent text-ivory/40 hover:text-ivory hover:bg-ivory/5'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] mb-1 font-semibold">{project.configuration}</p>
                <h3 className="text-xl font-serif">{project.name}</h3>
              </button>
            ))}
          </div>

          {/* Display Area */}
          <div className="lg:col-span-8 group relative overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-mutedGold text-xs uppercase tracking-widest font-bold mb-4">Project Details</h4>
                <div className="space-y-4">
                  {activeProject.address && (
                    <div className="flex justify-between border-b border-ivory/10 pb-2">
                      <span className="text-ivory/40 text-sm">Location</span>
                      <span className="text-sm">{activeProject.address}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-ivory/10 pb-2">
                    <span className="text-ivory/40 text-sm">Budget</span>
                    <span className="text-sm">{activeProject.budget}</span>
                  </div>
                  <div className="flex justify-between border-b border-ivory/10 pb-2">
                    <span className="text-ivory/40 text-sm">Configuration</span>
                    <span className="text-sm">{activeProject.configuration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-mutedGold text-xs uppercase tracking-widest font-bold mb-4">The Narrative</h4>
                <p className="text-ivory/70 text-sm leading-relaxed font-light">
                  {activeProject.description}
                </p>
                <button className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-mutedGold pb-1 hover:text-mutedGold transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
