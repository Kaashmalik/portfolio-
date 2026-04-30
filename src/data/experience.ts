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
    role: 'Full-Stack SaaS Architect',
    company: 'MTK Codex',
    location: 'Remote — Lahore, PK',
    period: '2024 — Present',
    type: 'freelance',
    description: 'Founder and lead architect of MTK Codex — designing and shipping production multi-tenant SaaS platforms across web, mobile, and desktop for clients worldwide.',
    achievements: [
      'Shipped 7 production SaaS platforms: InstalEase (FinTech), MTK Dairy (AgriTech), MTK Edu (EdTech), Shakir Super League (SportsTech), LaraibCreative (E-Commerce), MTK AlertPro (AI Security), MTK Download Manager (Desktop)',
      '3 platforms live in production serving 500+ tenants and 50K+ tracked entities across Pakistan',
      'Architected multi-tenant systems with PostgreSQL RLS, Clerk Organizations, and stancl/tenancy for complete data isolation',
      'Integrated AI capabilities: OpenAI GPT commentary, TensorFlow.js on-device detection, Vercel AI SDK streaming chat',
    ],
    techUsed: ['Next.js 14/15/16', 'TypeScript', 'NestJS', 'Laravel 11', 'Supabase', 'React Native', 'Electron', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    role: 'Frontend & Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 — 2024',
    type: 'freelance',
    description: 'Delivered modern web applications and e-commerce platforms for clients, building expertise in React, Node.js, and scalable architecture patterns.',
    achievements: [
      'Delivered 10+ client projects on schedule with 100% client satisfaction — e-commerce, dashboards, and landing pages',
      'Built LaraibCreative luxury fashion e-commerce with JWT auth, Cloudinary media, and local payment integration (COD, JazzCash, EasyPaisa)',
      'Migrated full stack to Next.js + TypeScript + Tailwind CSS for improved performance and developer experience',
      'Established reusable component architecture and design system patterns used across all subsequent projects',
    ],
    techUsed: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
  },
];
