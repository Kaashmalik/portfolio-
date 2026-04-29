import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';
import styles from './page.module.css';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Thoughts & <span className="text-gradient">Articles</span>
          </h1>
          <p className={styles.description}>
            Writing about web development, Next.js, full-stack architecture, and my journey as a developer.
          </p>
        </header>

        <div className={styles.postsList}>
          {posts.length === 0 ? (
            <p className={styles.noPosts}>No posts published yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <Calendar size={16} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className={styles.postSummary}>{post.summary}</p>
                
                <div className={styles.postFooter}>
                  <div className={styles.postTags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
