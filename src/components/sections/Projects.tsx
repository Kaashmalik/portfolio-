'use client';

import Link from 'next/link';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const projectEmojis: Record<string, string> = {
  'laraibcreative': '',
  'shakir-super-league': '',
  'mtk-dairy': '',
  'mtk-edu': '',
  'instalease': '',
  'mtk-alertpro': '',
  'mtk-download-manager': '',
};

export default function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Production Platforms</span>
            <h2>
              7 SaaS Platforms{' '}
              <span className="text-gradient">In Production</span>
            </h2>
            <p>
              Every project below is a real, deployed platform with live users and revenue — not a demo.
              Multi-tenant architecture, AI integration, payment systems, and cross-platform delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.projectsGrid}>
          {projects.filter((p) => p.featured).map((project) => (
            <ScrollReveal key={project.id}>
              <article className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    {projectEmojis[project.id] || '🚀'}
                  </div>
                  <span className={`badge badge-accent ${styles.projectCategory}`}>
                    {project.category}
                  </span>
                </div>

                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.projectTech}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>

                  <div className={styles.projectHighlights}>
                    {project.highlights.map((hl) => (
                      <div key={hl} className={styles.highlight}>
                        <CheckCircle2 size={14} className={styles.highlightIcon} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="btn btn-primary"
                      style={{ padding: '0.5rem 1.25rem', fontSize: 'var(--font-small)' }}
                    >
                      Case Study
                      <ArrowRight size={16} />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="btn btn-secondary"
                        style={{ padding: '0.5rem 1.25rem', fontSize: 'var(--font-small)' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="btn btn-secondary"
                        style={{ padding: '0.5rem 1.25rem', fontSize: 'var(--font-small)' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
