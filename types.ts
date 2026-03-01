
export interface Project {
  id: string;
  name: string;
  type?: string;
  configuration: string;
  address?: string;
  budget: string;
  scope?: string;
  image: string;
  description: string;
  details?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  longDescription?: string;
  useCases?: string[];
  suitableFor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
