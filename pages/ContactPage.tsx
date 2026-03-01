
import React from 'react';
import Contact from '../components/Contact';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-ivory">
      <Contact />
      
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-beige/30 p-12">
          <h3 className="text-2xl font-serif mb-8">Direct Assistance</h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone className="text-mutedGold" />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40 mb-1">Project Inquiries</p>
                <p className="text-lg">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-mutedGold" />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40 mb-1">Corporate & Vendors</p>
                <p className="text-lg">partnerships@ruraspaces.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MessageCircle className="text-mutedGold" />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-charcoal/40 mb-1">WhatsApp Chat</p>
                <p className="text-lg">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full min-h-[400px] grayscale opacity-70 border border-charcoal/10 relative">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Map Placeholder" />
          <div className="absolute inset-0 flex items-center justify-center bg-matteBlack/20 backdrop-blur-[2px]">
            <div className="bg-ivory p-6 shadow-2xl border border-mutedGold">
              <h4 className="font-serif text-xl mb-1">RuRa Design Studio</h4>
              <p className="text-xs text-charcoal/60">Gachibowli Financial District, Hyderabad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
