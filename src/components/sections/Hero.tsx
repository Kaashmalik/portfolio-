"use client";

import { useEffect, useMemo, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import styles from './Hero.module.css';

const ROLES = [
  'multi-tenant SaaS platforms',
  'AI-powered CRM workflows',
  'web, mobile & desktop apps',
];

const METRICS = [
  { label: 'SaaS Platforms', value: '7' },
  { label: 'Live in Production', value: '3' },
  { label: 'Tenants Served', value: '500+' },
  { label: 'Availability', value: '9+ hrs/day' },
];

const TECH_STACK = ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Laravel', 'Supabase', 'React Native', 'Electron', 'OpenAI', 'Vercel AI', 'Stripe', 'Sentry'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const marqueeItems = useMemo(() => [...TECH_STACK, ...TECH_STACK], []);

  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.dotGrid} />
      <div className={styles.gradientMesh} />

      <div className={styles.heroContent}>
        <div className={styles.statusBadge}>
          <span className="status-dot" /> Currently available for freelance — response within 12 hrs
        </div>

        <div className={styles.titleGroup}>
          <span className={styles.glitch} data-text="Muhammad Kashif">
            Muhammad Kashif
          </span>
          <span className={styles.roleLabel}>Full-Stack SaaS Architect</span>
        </div>

        <div className={styles.typewriter}>
          <span className={styles.typePrefix}>I build&nbsp;</span>
          <span className={styles.typeText}>{displayText}</span>
          <span className={styles.typeCursor} aria-hidden="true" />
        </div>

        <p className={styles.subtitle}>
          I turn messy operations into multi-tenant platforms people pay for — 7 shipped,
          3 live, 500+ tenants served. Full-stack across Next.js, NestJS, Laravel,
          React Native, and Electron.
        </p>

        <div className={styles.heroCtas}>
          <a href="#contact" className={`${styles.cta} ${styles.ctaPrimary}`}>
            <ExternalLink size={18} /> Hire Me
          </a>
          <a href="#projects" className={`${styles.cta} ${styles.ctaGhost}`}>
            See 7 Platforms
          </a>
          <a href="/documents/Muhammad-Kashif-CV.pdf" className={`${styles.cta} ${styles.ctaGhost}`} target="_blank" rel="noopener noreferrer" download>
            <Download size={18} /> CV
          </a>
        </div>

        <p className={styles.liveProof}>
          Live right now:{' '}
          <a href="https://www.laraibcreative.studio" target="_blank" rel="noopener noreferrer">LaraibCreative</a>
          <span aria-hidden="true">·</span>
          <a href="https://dairy.mtkcodex.site" target="_blank" rel="noopener noreferrer">MTK Dairy</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.cricketleague.tech" target="_blank" rel="noopener noreferrer">Cricket League</a>
          <span aria-hidden="true">·</span>
          <a href="https://mtkcodex.tech" target="_blank" rel="noopener noreferrer">MTK Codex</a>
        </p>

        <div className={styles.heroMeta}>
          {METRICS.map((metric) => (
            <div key={metric.label} className={styles.metaItem}>
              <span className={styles.metaValue}>{metric.value}</span>
              <span className={styles.metaLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
