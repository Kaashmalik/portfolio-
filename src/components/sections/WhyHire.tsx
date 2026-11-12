'use client';

import {
  UserCheck,
  ShieldCheck,
  Layers,
  BrainCircuit,
  KeyRound,
  Clock,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './WhyHire.module.css';

const reasons = [
  {
    icon: UserCheck,
    title: 'You talk to the builder',
    text: 'No account manager and no offshore handoff. The person who scopes your project is the person who ships it.',
  },
  {
    icon: ShieldCheck,
    title: 'Production from day one',
    text: 'CI/CD, error monitoring, backups, and handoff docs are part of the build — not an upsell after launch.',
  },
  {
    icon: Layers,
    title: 'Multi-tenant by default',
    text: 'PostgreSQL RLS, Clerk Organizations, or subdomain isolation, so tenant #500 is as safe as tenant #1.',
  },
  {
    icon: BrainCircuit,
    title: 'AI that survives real users',
    text: 'Caching, circuit breakers, daily cost caps, and a kill switch. AI features that fail gracefully instead of billing you to death.',
  },
  {
    icon: KeyRound,
    title: 'You own everything',
    text: 'Repository, database schema, infrastructure and documentation are yours at handoff. No vendor lock-in.',
  },
  {
    icon: Clock,
    title: 'A 12-hour reply, not 12 days',
    text: '9+ hours a day across PK, AE, SA, UK, EU and US/CA overlap. You always know what is shipping next.',
  },
];

const steps = [
  { number: '01', title: 'Discovery call', text: '30 minutes on the problem, users, constraints and what success looks like.' },
  { number: '02', title: 'Fixed scope', text: 'A written proposal with milestones, timeline and price — no hourly surprises.' },
  { number: '03', title: 'Weekly demos', text: 'Working software every week, with a shared board and async updates.' },
  { number: '04', title: 'Handoff', text: 'Code, docs, credentials and a walkthrough recording. You keep the keys.' },
];

export default function WhyHire() {
  return (
    <section className={styles.why} id="why" aria-label="Why work with me">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Why work with me</span>
            <h2>
              One builder.{' '}
              <span className="text-gradient">Full ownership.</span>{' '}
              No handoff gaps.
            </h2>
            <p>
              Hiring a team means coordination cost. Hiring a junior means rework. You get one
              senior builder who has already shipped the hard parts — with a process you can hold
              me to.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={index + 1}>
                <article className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>
                    <Icon size={20} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className={styles.process}>
            <div className={styles.processHeader}>
              <span className="section-label">How we start</span>
              <h3>From first call to working software</h3>
            </div>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.processCtas}>
              <a
                href="https://wa.me/923038111297?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20start%20with%20a%2030-min%20discovery%20call."
                className={styles.primaryCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min call <ArrowRight size={16} />
              </a>
              <a href="#projects" className={styles.ghostCta}>
                See the proof first
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
