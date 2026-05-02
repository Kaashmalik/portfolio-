'use client';

import { Rocket, Layers, Cpu, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './Services.module.css';

const tiers = [
  {
    icon: Rocket,
    label: 'Starter',
    title: 'MVP Launch',
    price: 'From $1,500',
    desc: 'Go from idea to production-grade MVP in weeks. Authentication, CRUD, dashboards, and deployment — all included.',
    features: [
      'Next.js + Supabase full-stack build',
      'Auth, RBAC & basic dashboard',
      'Responsive UI with Tailwind + shadcn/ui',
      'Vercel deployment + CI/CD',
      'Source code handoff + docs',
    ],
    cta: 'Start a Project',
  },
  {
    icon: Layers,
    label: 'Growth',
    title: 'Multi-Tenant SaaS',
    price: 'From $5,000',
    desc: 'Full multi-tenant SaaS platform with tenant isolation, subscription billing, analytics, and admin portal.',
    features: [
      'Everything in Starter',
      'PostgreSQL RLS / Clerk Organizations',
      'Stripe or local payment integration',
      'Real-time dashboards & analytics',
      'Tenant onboarding & admin portal',
      'Mobile app (React Native / Expo)',
    ],
    cta: 'Discuss Your SaaS',
    featured: true,
  },
  {
    icon: Cpu,
    label: 'Enterprise',
    title: 'AI + Cross-Platform',
    price: 'Custom',
    desc: 'AI integrations, desktop apps, WebRTC streaming, microservices — complex systems built to scale.',
    features: [
      'Everything in Growth',
      'OpenAI / TensorFlow.js integration',
      'Electron desktop app',
      'NestJS microservices + Kafka',
      'WebRTC live streaming',
      'Observability (Sentry / PostHog)',
      'Dedicated support & SLA',
    ],
    cta: 'Book a Call',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-label="Services">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2>
              Engagement{' '}
              <span className="text-gradient">Models</span>
            </h2>
            <p>
              Whether you need a quick MVP or a complex multi-tenant platform with AI — pick the tier
              that fits, and I&apos;ll deliver production-ready software on schedule.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.tiersGrid}>
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <ScrollReveal key={tier.title} delay={idx + 1}>
                <article className={`${styles.tierCard} ${tier.featured ? styles.featured : ''}`}>
                  {tier.featured && <div className={styles.featuredTag}>Most Popular</div>}

                  <div className={styles.tierHeader}>
                    <div className={styles.tierIcon}>
                      <Icon size={22} />
                    </div>
                    <p className={styles.tierLabel}>{tier.label}</p>
                    <h3>{tier.title}</h3>
                    <p className={styles.tierPrice}>{tier.price}</p>
                  </div>

                  <p className={styles.tierDesc}>{tier.desc}</p>

                  <ul className={styles.tierFeatures}>
                    {tier.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>

                  <a href="#contact" className={styles.tierCta}>
                    {tier.cta} <ArrowRight size={16} />
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
