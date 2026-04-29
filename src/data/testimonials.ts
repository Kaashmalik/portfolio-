export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmed Khan',
    role: 'Product Manager',
    company: 'CricketPro League',
    avatar: '/images/testimonials/avatar-1.webp',
    quote: 'Exceptional work on our tournament platform. The real-time scoring system transformed how we manage matches. Highly professional and delivered ahead of schedule.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sarah Mitchell',
    role: 'Startup Founder',
    company: 'TechVenture Co',
    avatar: '/images/testimonials/avatar-2.webp',
    quote: 'Built our MVP from scratch with incredible attention to detail. The code quality was top-notch and the UI was exactly what we envisioned — modern and premium.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Raj Patel',
    role: 'CTO',
    company: 'DataSync Solutions',
    avatar: '/images/testimonials/avatar-3.webp',
    quote: 'A rare developer who understands both the technical and design sides. The portfolio speaks for itself — fast, beautiful, and well-architected.',
    rating: 5,
  },
];
