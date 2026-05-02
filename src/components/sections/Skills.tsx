'use client';

import { Monitor, Server, Zap, Database, Rocket, Shield, CloudLightning } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { skillCategories } from '@/data/skills';
import styles from './Skills.module.css';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Zap,
  Database,
};

const stats = [
  { label: 'Production Platforms', value: '7', detail: 'Full-stack SaaS builds' },
  { label: 'Tech Stack Deliverables', value: '40+', detail: 'APIs, UI systems, infra' },
  { label: 'AI Integrations', value: '12', detail: 'OpenAI, TensorFlow.js, Vercel AI' },
];

const capabilityBadges = [
  'Multi-tenant SaaS',
  'PostgreSQL RLS / Clerk',
  'React Native Offline Sync',
  'Electron Desktop Apps',
  'Stripe + Local Payments',
  'Observability (Sentry/PostHog)',
];

const stackTicker = [
  'Next.js 16',
  'TypeScript 5',
  'Tailwind CSS v4',
  'NestJS 11',
  'Supabase',
  'PostgreSQL',
  'React Native',
  'Electron 28',
  'OpenAI / Vercel AI SDK',
  'TensorFlow.js',
  'Redis / Kafka',
  'Docker / Nginx',
  'shadcn/ui',
  'Stripe / RevenueCat',
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-label="Skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Stack & Systems</span>
            <h2>
              Full-Stack Arsenal{' '}
              <span className="text-gradient">For Production SaaS</span>
            </h2>
            <p>
              Every tool here shipped to production — powering fintech, edtech, agri-tech, sports, and AI security platforms.
              Frontend polish, backend rigor, infra automation, and AI integrations working together.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <p>{stat.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.badgeRow}>
            {capabilityBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.stackTicker}>
          <div className={styles.stackTrack}>
            {[...stackTicker, ...stackTicker].map((item, idx) => (
              <span key={`${item}-${idx}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <ScrollReveal key={category.title}>
              <SkillCategoryCard category={category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category }: { category: typeof skillCategories[number] }) {
  const Icon = iconMap[category.icon] || Monitor;
  return (
    <article className={styles.categoryCard}>
      <div className={styles.categoryHeader}>
        <div className={styles.categoryIcon}>
          <Icon size={20} />
        </div>
        <div>
          <p className={styles.categoryLabel}>Capability</p>
          <h3>{category.title}</h3>
        </div>
      </div>
      <div className={styles.skillList}>
        {category.skills.map((skill) => (
          <div key={skill.name} className={styles.skillRow}>
            <div className={styles.skillMeta}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className={styles.skillBar}>
              <div style={{ width: `${skill.level}%` }} />
            </div>
            {skill.projectLink && (
              <a href={`#projects`} className={styles.skillProject} data-cursor="interactive">
                ↳ Deployed inside {skill.projectLink.replace('-', ' ')}
              </a>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
