
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-matteBlack text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-mutedGold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Start Your Design Journey Today</h2>
            <p className="text-ivory/60 text-lg font-light leading-relaxed mb-12">
              Whether you're planning a full home renovation or a luxury villa, our team is ready to help you craft your story.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center group-hover:bg-mutedGold transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs uppercase tracking-widest">Call Us</p>
                  <p className="text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center group-hover:bg-mutedGold transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs uppercase tracking-widest">Email Us</p>
                  <p className="text-lg">hello@ruraspaces.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center group-hover:bg-mutedGold transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-ivory/40 text-xs uppercase tracking-widest">Visit Studio</p>
                  <p className="text-lg">Financial District, Gachibowli, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ivory/5 p-10 lg:p-16 backdrop-blur-lg rounded-sm border border-ivory/10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-ivory/60">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/20 py-3 focus:border-mutedGold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-ivory/60">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-ivory/20 py-3 focus:border-mutedGold outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-ivory/60">Project Type</label>
                  <select className="w-full bg-transparent border-b border-ivory/20 py-3 focus:border-mutedGold outline-none transition-colors appearance-none cursor-pointer">
                    <option className="bg-matteBlack">Select Type</option>
                    <option className="bg-matteBlack">3BHK Renovation</option>
                    <option className="bg-matteBlack">Luxury Villa</option>
                    <option className="bg-matteBlack">Modular Kitchen</option>
                    <option className="bg-matteBlack">Architecture</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-ivory/60">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-ivory/20 py-3 focus:border-mutedGold outline-none transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-ivory/60">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-ivory/20 py-3 focus:border-mutedGold outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-mutedGold py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-ivory hover:text-matteBlack transition-all transform hover:-translate-y-1">
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
