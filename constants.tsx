
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Sandeep Renovation',
    type: 'Full House Renovation',
    configuration: '3BHK',
    address: 'Pragathi Nagar, Hyderabad',
    budget: '₹17 Lakhs',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'A contemporary transformation focused on maximizing natural light.',
    details: 'Complete civil overhaul including kitchen extension, flooring replacement with Italian marble, and smart lighting automation.'
  },
  {
    id: '2',
    name: 'Karthik Residency',
    type: 'Full House Renovation',
    configuration: '2BHK',
    budget: '₹11.5 Lakhs',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Minimalist approach with smart storage solutions.',
    details: 'Optimized furniture layout for a compact 2BHK, focusing on multi-functional cabinets and a neutral ivory palette.'
  },
  {
    id: '3',
    name: 'Urban Rise',
    configuration: '3BHK',
    scope: 'Fully Modular',
    budget: '₹25 Lakhs',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
    description: 'Sleek Italian-inspired modular kitchen and wardrobes.',
    details: 'Features high-gloss lacquered finishes, BLUM hardware, and integrated profile lighting across all modular units.'
  },
  {
    id: '4',
    name: 'Navya Residency',
    configuration: '4BHK',
    scope: 'Fully Modular',
    address: 'Vasavi Lake City, Hafeezpet',
    budget: '₹15.5 Lakhs',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision-engineered modular systems for a large family.',
    details: 'A balance of wood-grain textures and solid colors, designed for durability and high-traffic usage.'
  },
  {
    id: '5',
    name: 'Rajavardhane',
    configuration: '2.5BHK',
    scope: 'Fully Modular',
    address: 'Nyla, Miyapur',
    budget: '₹12.5 Lakhs',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Compact luxury at its best.',
    details: 'Custom space-saving solutions for the half-bedroom (study) and premium veneer finishes in the living area.'
  },
  {
    id: '6',
    name: 'My Home Raja',
    configuration: '4BHK',
    scope: 'Luxury Interiors',
    address: 'My Home Raka, Miyapur',
    budget: '₹45 Lakhs',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of luxury architecture.',
    details: 'Bespoke chandeliers, rare onyx stone highlights, and a fully customized home theater room.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    description: 'Bespoke modular & luxury home solutions.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    longDescription: 'We specialize in crafting residential spaces that blend luxury with daily functionality. From 2BHKs to sprawling villas, our designs are personal.',
    useCases: ['Modular Kitchens', 'Master Bedrooms', 'Living Areas'],
    suitableFor: 'Homeowners looking for a professional touch and premium finish.'
  },
  {
    id: 'architecture',
    title: 'Architectural Design',
    description: 'Structural elegance meeting functional modern needs.',
    icon: 'Layout',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our architectural wing focuses on structural integrity and spatial flow, ensuring the exterior is as breathtaking as the interior.',
    useCases: ['Villa Planning', 'Commercial Buildings', 'Structural Drafting'],
    suitableFor: 'Clients building from the ground up.'
  },
  {
    id: 'landscape',
    title: 'Landscape Design',
    description: 'Harmonious outdoor environments.',
    icon: 'TreePine',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Creating green lungs for your home. We design terraces, gardens, and vertical greenery that require minimal maintenance.',
    useCases: ['Terrace Gardens', 'Villa Lawns', 'Poolside Areas'],
    suitableFor: 'Those who value outdoor serenity and nature.'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Reinvigorating existing spaces.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Transforming dated properties into modern masterpieces without compromising on structural safety.',
    useCases: ['Kitchen Remodel', 'Bathroom Renovation', 'Full-house makeover'],
    suitableFor: 'Homeowners looking to upgrade their lifestyle within existing properties.'
  },
  {
    id: 'turnkey',
    title: 'Turnkey Execution',
    description: 'Hassle-free end-to-end execution.',
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    longDescription: 'We handle everything from civil work to plumbing, electrical, and styling. You just move in.',
    useCases: ['Full Project Management', 'Vendor Coordination', 'Quality Control'],
    suitableFor: 'Busy professionals who want zero stress during construction.'
  },
  {
    id: 'visual',
    title: '3D Design & Visualization',
    description: 'Realistic renders for your dream home.',
    icon: 'Box',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Photorealistic 3D visualization that helps you see every material and light before execution.',
    useCases: ['360 Walkthroughs', 'VR Experience', 'Material Testing'],
    suitableFor: 'Visual learners who want certainty before spending.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sandeep V.',
    role: 'Homeowner, Pragathi Nagar',
    content: 'The team transformed our old 3BHK into a modern masterpiece. Their transparency on budget was impressive.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Karthik R.',
    role: 'Tech Lead',
    content: 'Minimalist, functional, and delivered exactly on time. RuRa Spaces understands the modern professional lifestyle.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Navya P.',
    role: 'Entrepreneur',
    content: 'Our modular kitchen and wardrobes are world-class. The quality of materials used is far superior to local competitors.',
    rating: 5
  }
];
