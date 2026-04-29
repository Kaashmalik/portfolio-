export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'freelance' | 'contract';
  description: string;
  achievements: string[];
  techUsed: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer',
    company: 'MalikTech',
    location: 'Remote',
    period: '2024 — Present',
    type: 'freelance',
    description: 'Building scalable SaaS products and mobile applications with modern tech stacks.',
    achievements: [
      'Architected and built a multi-tenant cricket SaaS platform from scratch',
      'Implemented real-time scoring system with WebSocket integration',
      'Developed cross-platform mobile app with React Native & Expo',
      'Achieved Lighthouse scores of 95+ across all portfolio projects',
    ],
    techUsed: ['Next.js', 'NestJS', 'Supabase', 'React Native', 'TypeScript'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Freelance Projects',
    location: 'Remote',
    period: '2022 — 2024',
    type: 'freelance',
    description: 'Delivered high-quality web applications for clients across multiple industries.',
    achievements: [
      'Delivered 10+ client projects on time and within budget',
      'Specialized in responsive, accessible web design',
      'Built reusable component libraries for faster delivery',
    ],
    techUsed: ['React', 'Next.js', 'CSS', 'JavaScript', 'Figma'],
  },
];
