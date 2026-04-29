'use client';

import { Monitor, Server, Smartphone, Database } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { skillCategories } from '@/data/skills';
import styles from './Skills.module.css';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Smartphone,
  Database,
};

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = iconMap[category.icon] || Monitor;

  return (
    <div
      ref={ref}
      className={`${styles.skillCategory} reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.categoryHeader}>
        <div className={styles.categoryIcon}>
          <Icon size={22} />
        </div>
        <h3 className={styles.categoryTitle}>{category.title}</h3>
      </div>

      <div className={styles.skillList}>
        {category.skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.skillBar}>
              <div
                className={`${styles.skillBarFill} ${isVisible ? styles.animated : ''}`}
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-label="Skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Skills & Expertise</span>
            <h2>
              Technologies I{' '}
              <span className="text-gradient">Work With</span>
            </h2>
            <p>
              Specialized in modern full-stack development with a focus on scalable,
              production-grade applications.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <SkillCategory key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
