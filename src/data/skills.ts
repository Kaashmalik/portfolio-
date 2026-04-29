export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  projectLink?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React / Next.js', level: 95, projectLink: 'cricket-saas' },
      { name: 'TypeScript', level: 90, projectLink: 'cricket-saas' },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Framer Motion', level: 78 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js / NestJS', level: 88, projectLink: 'cricket-saas' },
      { name: 'REST APIs', level: 92 },
      { name: 'WebSockets', level: 80, projectLink: 'cricket-saas' },
      { name: 'Authentication / RBAC', level: 85 },
      { name: 'Microservices', level: 75 },
    ],
  },
  {
    title: 'Mobile',
    icon: 'Smartphone',
    skills: [
      { name: 'React Native / Expo', level: 85, projectLink: 'mobile-app' },
      { name: 'Cross-Platform Dev', level: 82 },
      { name: 'Push Notifications', level: 78 },
      { name: 'App Store Deployment', level: 70 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: 'Database',
    skills: [
      { name: 'Supabase / PostgreSQL', level: 88, projectLink: 'cricket-saas' },
      { name: 'Drizzle ORM', level: 82 },
      { name: 'Vercel / CI/CD', level: 80 },
      { name: 'GitHub Actions', level: 75 },
    ],
  },
];
