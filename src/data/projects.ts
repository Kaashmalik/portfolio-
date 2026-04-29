export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'cricket-saas',
    title: 'Cricket Tournament Manager',
    description: 'A full-featured SaaS platform for managing cricket tournaments with real-time scoring, analytics, and white-label branding.',
    longDescription: 'Built a production-grade cricket tournament management SaaS supporting real-time score updates via WebSockets, advanced analytics dashboards, role-based access control, and dynamic white-label branding for organizations.',
    techStack: ['Next.js 15', 'NestJS', 'Supabase', 'TypeScript', 'Drizzle ORM', 'WebSocket'],
    category: 'Full-Stack SaaS',
    image: '/images/projects/cricket-saas.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    highlights: [
      'Real-time scoring with WebSocket sync',
      'Multi-tenant white-label branding system',
      'Role-based access control (RBAC)',
      'Advanced cricket analytics & visualizations',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Cricket Live Mobile App',
    description: 'Cross-platform mobile app for live cricket scores, push notifications, and match analytics built with Expo & React Native.',
    longDescription: 'Developed a cross-platform mobile application delivering live match updates, push notifications, and interactive analytics. Integrated AdMob for monetization and optimized for both iOS and Android performance.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'AdMob'],
    category: 'Mobile App',
    image: '/images/projects/mobile-app.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    highlights: [
      'Cross-platform iOS & Android',
      'Push notifications for live updates',
      'AdMob integration for monetization',
      'Offline-first architecture',
    ],
  },
  {
    id: 'portfolio-site',
    title: 'Developer Portfolio',
    description: 'This very portfolio — a premium, glassmorphism-based personal site built with Next.js 15, featuring dark mode, animations, and perfect Lighthouse scores.',
    longDescription: 'Designed and built a cutting-edge developer portfolio featuring a liquid glass design system, scroll-triggered animations, dark/light mode, and optimized for SEO with structured data and perfect Lighthouse scores.',
    techStack: ['Next.js 15', 'TypeScript', 'CSS', 'Lucide Icons'],
    category: 'Web Design',
    image: '/images/projects/portfolio.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    highlights: [
      'Lighthouse 95+ on all metrics',
      'Liquid glass design system',
      'Scroll-triggered reveal animations',
      'JSON-LD structured data for SEO',
    ],
  },
];
