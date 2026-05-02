'use client';

import { CheckCircle2, Calendar, Briefcase } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { experience } from '@/data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-label="Experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Experience</span>
            <h2>
              Track Record of{' '}
              <span className="text-gradient">Shipped Products</span>
            </h2>
            <p>
              Every role is measured by platforms delivered and users served — not job titles.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {experience.map((item) => (
            <ScrollReveal key={item.id}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <Briefcase size={14} />
                </div>

                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <p className={styles.typeLabel}>{item.type}</p>
                      <h3 className={styles.role}>{item.role}</h3>
                      <p className={styles.company}>{item.company} · {item.location}</p>
                    </div>
                    <span className={styles.periodBadge}>
                      <Calendar size={14} />
                      {item.period}
                    </span>
                  </div>

                  <p className={styles.description}>{item.description}</p>

                  <div className={styles.achievements}>
                    {item.achievements.map((ach) => (
                      <div key={ach} className={styles.achievement}>
                        <CheckCircle2 size={14} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.techTags}>
                    {item.techUsed.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
