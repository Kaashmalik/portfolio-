'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Briefcase, Zap, Download, Cpu, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './About.module.css';

const aboutCards = [
  { icon: MapPin, title: 'Location', value: 'Lahore, PK — Remote Worldwide' },
  { icon: Calendar, title: 'Availability', value: 'Response within 12 hrs' },
  { icon: Briefcase, title: 'Platforms Shipped', value: '7 SaaS Products' },
  { icon: Zap, title: 'Tenants Served', value: '500+ Active Users' },
];

const stats = [
  { label: 'Production SaaS', value: 7, suffix: '', subtext: 'Full multi-tenant builds' },
  { label: 'Tenants in Production', value: 500, suffix: '+', subtext: 'Across fintech & agri' },
  { label: 'API Endpoints', value: 200, suffix: '+', subtext: 'Across all platforms' },
  { label: 'Lighthouse Score', value: 95, suffix: '+', subtext: 'Performance average' },
];

const skillSegments = [
  { label: 'Product UI / Frontend', value: 95 },
  { label: 'SaaS Backend & Infra', value: 92 },
  { label: 'AI & Automation', value: 88 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about" aria-label="About me">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">About</span>
            <h2>
              Builder of{' '}
              <span className="text-gradient">Multi-Tenant Platforms</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.layout}>
          <ScrollReveal>
            <div className={styles.profileColumn}>
              <div className={styles.terminalCard}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.terminalPath}>/home/kashif/profile.jpg</span>
                </div>
                <div className={styles.avatarFrame}>
                  <span>MK</span>
                </div>
                <div className={styles.terminalFooter}>
                  <span>Syne Mono</span>
                  <span>v2026</span>
                </div>
              </div>

              <div className={styles.availabilityCard}>
                <div>
                  <span className="status-dot" /> Currently Available
                </div>
                <p>Full-stack freelance engagements — 9+ hrs/day</p>
              </div>

              <div className={styles.aboutCards}>
                {aboutCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className={styles.aboutCard}>
                      <Icon size={18} className={styles.aboutCardIcon} />
                      <div>
                        <p className={styles.aboutCardTitle}>{card.title}</p>
                        <p className={styles.aboutCardValue}>{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.tagList}>
                <span>Multi-tenant SaaS</span>
                <span>AI Integrations</span>
                <span>Cross-platform (Web/Mobile/Desktop)</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.contentColumn}>
              <div className={styles.aboutCopy}>
                <p>
                  I architect end-to-end SaaS platforms for founders and product teams that need
                  more than a landing page. From PostgreSQL RLS and Clerk Organizations to React Native
                  offline sync and Electron desktop builds — I own the full stack.
                </p>
                <p>
                  Every build ships with production telemetry, CI/CD, and documentation. No toy apps,
                  only revenue-ready software that clients run their business on.
                </p>
              </div>

              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} active={inView} />
                ))}
              </div>

              <div className={styles.skillSegments}>
                <div className={styles.skillSegmentsHeader}>
                  <Cpu size={18} /> Capability Map
                </div>
                {skillSegments.map((segment) => (
                  <div key={segment.label} className={styles.skillRow}>
                    <div className={styles.skillMeta}>
                      <span>{segment.label}</span>
                      <span>{segment.value}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillBarFill}
                        data-active={inView}
                        style={{ width: inView ? `${segment.value}%` : 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <a
                  href="/documents/Muhammad-Kashif-CV.pdf"
                  className={styles.ghostButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} /> Download CV
                </a>
                <button className={styles.primaryChip} data-cursor="interactive">
                  <Sparkles size={16} /> Book a 30-min build session
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  suffix,
  subtext,
  active,
}: {
  label: string;
  value: number;
  suffix?: string;
  subtext: string;
  active: boolean;
}) {
  const displayValue = useCountUp(value, active);
  return (
    <div className={styles.statCard}>
      <span className={styles.statValue}>
        {displayValue}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
      <p>{subtext}</p>
    </div>
  );
}

function useCountUp(target: number, shouldAnimate: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;
    let raf: number;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shouldAnimate, target, duration]);

  return shouldAnimate ? value : 0;
}
