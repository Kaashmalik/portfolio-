import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, Layers, Target, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import styles from './page.module.css';

const projectEmojis: Record<string, string> = {
  'cricket-saas': '🏏',
  'mobile-app': '📱',
  'portfolio-site': '🌐',
};

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

// Ensure the page gets static parameters generated for all known projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.backBtn}>
          <ChevronLeft size={16} />
          Back to Projects
        </Link>

        <header className={styles.header}>
          <span className={`badge badge-accent ${styles.category}`}>
            {project.category}
          </span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </header>

        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            {projectEmojis[project.id] || '🚀'}
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Target className={styles.sectionIcon} />
              Project Overview
            </h2>
            <p className={styles.text}>{project.longDescription}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Layers className={styles.sectionIcon} />
              Tech Stack
            </h2>
            <div className={styles.techGrid}>
              {project.techStack.map((tech) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <CheckCircle2 className={styles.sectionIcon} />
              Key Features & Highlights
            </h2>
            <div className={styles.highlightsList}>
              {project.highlights.map((hl) => (
                <div key={hl} className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.highlightIcon} />
                  <span className={styles.text}>{hl}</span>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
