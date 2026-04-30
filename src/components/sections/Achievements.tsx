'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Code, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './Achievements.module.css';

const stats = [
  { id: 1, label: 'SaaS Platforms Shipped', value: 7, icon: Award, suffix: '' },
  { id: 2, label: 'Tenants in Production', value: 500, icon: Users, suffix: '+' },
  { id: 3, label: 'API Endpoints Built', value: 200, icon: Code, suffix: '+' },
  { id: 4, label: 'Lighthouse Score', value: 95, icon: Zap, suffix: '+' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div className={styles.statNumber}>
      {count}{suffix}
    </div>
  );
}

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.achievements} id="achievements" aria-label="Achievements">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Impact</span>
            <h2>
              Real Numbers, <span className="text-gradient">Real Platforms</span>
            </h2>
            <p>
              Not hypothetical metrics — these are actual production numbers from platforms serving real users and generating real revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.statsGrid} ref={ref}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.id} delay={index + 1}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon size={24} />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
