'use client';

import { MapPin, Calendar, Briefcase, Zap, Download } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './About.module.css';

const aboutCards = [
  { icon: MapPin, title: 'Location', value: 'Lahore, PK — Remote Worldwide' },
  { icon: Calendar, title: 'Availability', value: '9+ Hrs/Day' },
  { icon: Briefcase, title: 'Platforms Shipped', value: '7 SaaS Products' },
  { icon: Zap, title: 'Tenants Served', value: '500+ Across 3 Platforms' },
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About me">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2>
              Building SaaS Platforms{' '}
              <span className="text-gradient">That Scale</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.aboutGrid}>
          <ScrollReveal>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder} />
              <div className={styles.avatarPlaceholder}>
                MK
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                <strong>Full-Stack SaaS Architect</strong> based in Lahore, Pakistan. I design
                and build production-grade multi-tenant SaaS platforms across{' '}
                <strong>web, mobile, and desktop</strong> — from e-commerce and fintech to edtech,
                agriculture, and AI security. Every platform ships with real users, real revenue,
                and enterprise-grade architecture.
              </p>
              <p className={styles.aboutText}>
                <strong>7 platforms delivered</strong> — 3 live in production serving 500+ tenants
                and 50K+ tracked entities. Full-stack ownership from database schema and API
                design to responsive UI, payment integration, and deployment. Available{' '}
                <strong>9+ hours per day</strong> for remote engagements worldwide.
              </p>

              <div className={styles.aboutCards}>
                {aboutCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className={styles.aboutCard}>
                      <Icon size={20} className={styles.aboutCardIcon} />
                      <div className={styles.aboutCardTitle}>{card.title}</div>
                      <div className={styles.aboutCardValue}>{card.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.resumeBtn}>
                <a href="#" className="btn btn-secondary">
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
