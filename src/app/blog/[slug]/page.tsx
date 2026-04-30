import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ChevronLeft, Calendar } from 'lucide-react';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import styles from './page.module.css';

// Ensure the page gets static parameters generated for all posts
export function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | MTK Codex Blog`,
      description: post.summary,
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backBtn}>
          <ChevronLeft size={16} />
          Back to Blog
        </Link>

        <article>
          <header className={styles.header}>
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
            
            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.tags}>
              {post.tags.map((tag: string) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.content}>
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
