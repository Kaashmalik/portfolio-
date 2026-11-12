'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, PlayCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

const walkthroughLink = (title: string) =>
  `https://wa.me/923038111297?text=${encodeURIComponent(
    `Hi Muhammad, I'd like a live walkthrough of ${title}. Here's what I'm building: `
  )}`;

export default function Projects() {
  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const heroProject = featuredProjects[0];
  const gridProjects = featuredProjects.slice(1);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.projects} id="projects" aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Production Platforms</span>
            <h2>
              7 Shipped Platforms{' '}
              <span className="text-gradient">Serving Real Clients</span>
            </h2>
            <p>
              From fintech to agri-tech, every platform below ships with tenant isolation, AI integrations,
              and the boring production work — telemetry, backups, and handoff docs.
            </p>
          </div>
        </ScrollReveal>

        {heroProject && (
          <ScrollReveal>
            <FeaturedProject project={heroProject} onOpenCaseStudy={setActiveProject} />
          </ScrollReveal>
        )}

        <div className={styles.projectsGrid}>
          {gridProjects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} onOpenCaseStudy={setActiveProject} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

function ProjectCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div
      className={`${styles.cover} ${compact ? styles.coverCompact : ''}`}
      style={{
        background: `radial-gradient(circle at 20% 10%, ${project.accent}55, transparent 55%), linear-gradient(135deg, ${project.accent}22 0%, #0a0a0f 75%)`,
      }}
      aria-hidden="true"
    >
      <div
        className={styles.coverImage}
        style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
        hidden={!project.image}
      />
      <span className={styles.coverInitial} style={{ color: project.accent }}>
        {project.title.charAt(0)}
      </span>
      {compact && !project.image && (
        <div className={styles.coverTitle}>
          <span>{project.category}</span>
          <strong>{project.title}</strong>
        </div>
      )}
      <div className={styles.coverScrim} />
    </div>
  );
}

function FeaturedProject({ project, onOpenCaseStudy }: { project: Project; onOpenCaseStudy: (project: Project) => void; }) {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredVisual}>
        <ProjectCover project={project} />
        <div className={styles.featuredBadge}>{project.category}</div>
        <div className={styles.featuredCaption}>
          <span>{project.title}</span>
          <span className={styles.featuredStatus}>
            {project.liveUrl ? 'Live in production' : 'Private demo'}
          </span>
        </div>
      </div>
      <div className={styles.featuredContent}>
        <p className={styles.featuredLabel}>Flagship Platform</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.featuredStats}>
          <div>
            <span>{project.highlights.length}</span>
            <p>Key Modules</p>
          </div>
          <div>
            <span>{project.techStack.length}</span>
            <p>Technologies</p>
          </div>
          <div>
            <span>{project.liveUrl ? 'Live' : 'On request'}</span>
            <p>Demo Access</p>
          </div>
        </div>
        <div className={styles.featuredCtas}>
          <button className={styles.primaryButton} onClick={() => onOpenCaseStudy(project)}>
            <ArrowRight size={16} /> Case Study
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.ghostButton}>
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {!project.liveUrl && project.walkthrough && (
            <a href={walkthroughLink(project.title)} target="_blank" rel="noopener noreferrer" className={styles.ghostButton}>
              <PlayCircle size={16} /> Walkthrough
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.ghostButton}>
              <GithubIcon size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenCaseStudy }: { project: Project; onOpenCaseStudy: (project: Project) => void; }) {
  return (
    <article className={styles.projectCard}>
      <ProjectCover project={project} compact />
      <div className={styles.cardHeader}>
        <span className={styles.cardCategory}>{project.category}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className={styles.cardTech}>
        {project.techStack.slice(0, 6).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
        {project.techStack.length > 6 && <span>+{project.techStack.length - 6} more</span>}
      </div>
      <div className={styles.cardHighlights}>
        {project.highlights.slice(0, 3).map((highlight) => (
          <div key={highlight}>
            <CheckCircle2 size={16} />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
      <div className={styles.cardCtas}>
        <button onClick={() => onOpenCaseStudy(project)}>
          Case Study <ArrowRight size={14} />
        </button>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} /> Live
          </a>
        )}
        {!project.liveUrl && project.walkthrough && (
          <a href={walkthroughLink(project.title)} target="_blank" rel="noopener noreferrer">
            <PlayCircle size={14} /> Walkthrough
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={14} /> Code
          </a>
        )}
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close case study">
          <X size={18} />
        </button>
        <p className={styles.modalLabel}>Case Study</p>
        <h3>{project.title}</h3>
        <p className={styles.modalCategory}>{project.category}</p>

        <div className={styles.caseStudyGrid}>
          <div className={styles.caseStudyBlock}>
            <span>Problem</span>
            <p>{project.caseStudy.problem}</p>
          </div>
          <div className={styles.caseStudyBlock}>
            <span>What I built</span>
            <p>{project.caseStudy.solution}</p>
          </div>
          <div className={`${styles.caseStudyBlock} ${styles.caseStudyResult}`}>
            <span>Result</span>
            <p>{project.caseStudy.result}</p>
          </div>
        </div>

        <p className={styles.modalDesc}>{project.longDescription}</p>
        <div className={styles.modalHighlights}>
          {project.highlights.map((highlight) => (
            <div key={highlight}>
              <CheckCircle2 size={16} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className={styles.modalMeta}>
          <div>
            <span>Tech Stack</span>
            <p>{project.techStack.join(' · ')}</p>
          </div>
          <div>
            <span>Links</span>
            <div className={styles.modalLinks}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {!project.liveUrl && project.walkthrough && (
                <a href={walkthroughLink(project.title)} target="_blank" rel="noopener noreferrer">
                  <PlayCircle size={14} /> Book a walkthrough
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={14} /> Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.089 3.292 9.397 7.858 10.915.575.105.785-.25.785-.555 0-.274-.011-1.188-.016-2.156-3.2.696-3.877-1.54-3.877-1.54-.523-1.33-1.278-1.685-1.278-1.685-1.045-.715.079-.701.079-.701 1.155.082 1.763 1.186 1.763 1.186 1.028 1.763 2.698 1.254 3.355.959.103-.745.402-1.255.73-1.542-2.554-.291-5.237-1.278-5.237-5.685 0-1.255.448-2.282 1.183-3.086-.118-.29-.513-1.46.112-3.043 0 0 .967-.31 3.17 1.178a10.978 10.978 0 0 1 2.886-.389c.979.005 1.966.133 2.886.389 2.202-1.488 3.167-1.178 3.167-1.178.627 1.583.233 2.753.115 3.043.737.804 1.181 1.831 1.181 3.086 0 4.418-2.689 5.39-5.256 5.675.414.356.783 1.057.783 2.132 0 1.54-.015 2.778-.015 3.156 0 .309.207.666.79.553C20.213 21.392 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
    </svg>
  );
}
