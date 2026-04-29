'use client';

import { MapPin, Calendar, Briefcase, GraduationCap, Download } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './About.module.css';

const aboutCards = [
  { icon: MapPin, title: 'Location', value: 'Remote / Worldwide' },
  { icon: Calendar, title: 'Experience', value: '3+ Years' },
  { icon: Briefcase, title: 'Focus', value: 'Full-Stack SaaS' },
  { icon: GraduationCap, title: 'Learning', value: 'AI Integration' },
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About me">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2>
              Passionate About Building{' '}
              <span className="text-gradient">Great Software</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.aboutGrid}>
          <ScrollReveal>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder} />
              <div className={styles.avatarPlaceholder}>
                👨‍💻
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                I&apos;m a <strong>Full-Stack Developer</strong> with a passion for
                crafting scalable, performant web and mobile applications. With expertise in{' '}
                <strong>Next.js, NestJS, React Native, and Supabase</strong>, I specialize
                in building production-grade SaaS platforms and real-time applications.
              </p>
              <p className={styles.aboutText}>
                I believe in writing <strong>clean, maintainable code</strong> and creating
                user experiences that are both beautiful and functional. Currently focused on
                integrating <strong>AI-powered features</strong> into modern web applications
                and exploring the cutting edge of web development in 2026.
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
