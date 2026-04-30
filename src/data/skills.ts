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
      { name: 'Next.js 14/15/16 / App Router', level: 95, projectLink: 'laraibcreative' },
      { name: 'TypeScript', level: 92, projectLink: 'laraibcreative' },
      { name: 'Tailwind CSS', level: 93, projectLink: 'laraibcreative' },
      { name: 'shadcn/ui & Radix', level: 88, projectLink: 'mtk-dairy' },
      { name: 'Framer Motion', level: 80, projectLink: 'laraibcreative' },
      { name: 'Zustand', level: 85, projectLink: 'laraibcreative' },
      { name: 'TanStack Query', level: 82, projectLink: 'mtk-dairy' },
      { name: 'React Native / Expo', level: 78, projectLink: 'mtk-edu' },
      { name: 'Electron / Desktop Apps', level: 80, projectLink: 'mtk-download-manager' },
    ],
  },
  {
    title: 'AI & Integrations',
    icon: 'Zap',
    skills: [
      { name: 'Vercel AI SDK', level: 85 },
      { name: 'OpenAI / Groq APIs', level: 82, projectLink: 'shakir-super-league' },
      { name: 'Prompt Engineering', level: 78 },
      { name: 'Mediasoup / WebRTC', level: 78, projectLink: 'shakir-super-league' },
      { name: 'TensorFlow.js / On-Device ML', level: 78, projectLink: 'mtk-alertpro' },
      { name: 'Streaming UI Patterns', level: 80 },
    ],
  },
  {
    title: 'Backend & Systems',
    icon: 'Server',
    skills: [
      { name: 'NestJS / Microservices', level: 85, projectLink: 'shakir-super-league' },
      { name: 'Laravel 11 / PHP 8.2', level: 82, projectLink: 'mtk-edu' },
      { name: 'Node.js / Express.js', level: 86, projectLink: 'laraibcreative' },
      { name: 'PostgreSQL / Supabase / RLS', level: 85, projectLink: 'instalease' },
      { name: 'Firebase Firestore', level: 78, projectLink: 'mtk-dairy' },
      { name: 'Redis / Kafka', level: 80, projectLink: 'shakir-super-league' },
      { name: 'JWT / NextAuth / Clerk', level: 85, projectLink: 'laraibcreative' },
    ],
  },
  {
    title: 'DevOps & Payments',
    icon: 'Database',
    skills: [
      { name: 'Vercel / Edge Deploy', level: 90, projectLink: 'laraibcreative' },
      { name: 'Stripe / Payment APIs', level: 82, projectLink: 'shakir-super-league' },
      { name: 'Local Payments (JazzCash, EasyPaisa)', level: 80, projectLink: 'mtk-dairy' },
      { name: 'Docker / Nginx', level: 78, projectLink: 'shakir-super-league' },
      { name: 'Git / GitHub Actions', level: 85 },
      { name: 'SEO / Structured Data', level: 80 },
    ],
  },
];
