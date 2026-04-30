import { ExternalLink } from 'lucide-react';
import styles from './Hero.module.css';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      {/* Animated background */}
      <div className={styles.heroGrid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.heroContent}>
        <p className={styles.greeting}>
          <span className="status-dot" /> Available for work
        </p>

        <h1 className={styles.title}>
          Muhammad Kashif
          <br />
          <span className="text-gradient">Full-Stack SaaS Architect</span>
        </h1>

        <p className={styles.subtitle}>
          I build production-grade multi-tenant SaaS platforms across web, mobile, and desktop —
          from e-commerce and fintech to edtech and AI security. 7 platforms shipped,
          3 live in production, 500+ tenants served. Full-stack delivery with
          Next.js, NestJS, Laravel, React Native, and Electron.
        </p>

        <div className={styles.heroCtas}>
          <a href="#contact" className="btn btn-primary">
            <ExternalLink size={18} />
            Hire Me
          </a>
          <a href="#projects" className="btn btn-secondary">
            <GithubIcon size={18} />
            View My Work
          </a>
        </div>

        <div className={styles.heroMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>7</span> SaaS Platforms
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>3</span> Live in Production
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>500+</span> Tenants Served
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>9+</span> Hrs/Day Available
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
