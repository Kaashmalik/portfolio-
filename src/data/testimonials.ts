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
    name: 'Ahmed Raza',
    role: 'Business Owner',
    company: 'InstalEase Client',
    avatar: '/images/testimonials/avatar-2.webp',
    quote: 'Malik built our complete installment management platform from the ground up — multi-tenant architecture, real-time dashboards, payment tracking, the works. The system handles 6 different user roles flawlessly and our shops onboard within minutes. Production-grade from day one.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Shakir Hussain',
    role: 'Tournament Director',
    company: 'Shakir Super League',
    avatar: '/images/testimonials/avatar-1.webp',
    quote: 'We needed a white-label platform that could run an entire cricket league — live scoring, AI commentary in 5 languages, fantasy cricket, and streaming. Malik delivered all of it as a reusable SaaS product. Other leagues now use the same platform under their own brand.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Fatima Noor',
    role: 'School Administrator',
    company: 'MTK Edu Client',
    avatar: '/images/testimonials/avatar-3.webp',
    quote: 'Managing 2000+ students across attendance, exams, fees, and reports was chaos before MTK Edu. The biometric attendance and AI-powered report generation alone saved us 20+ hours per week. The mobile app means teachers mark attendance from their phones — offline.',
    rating: 5,
  },
];
