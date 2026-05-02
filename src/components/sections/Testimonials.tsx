'use client';

import { Quote, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials" aria-label="Testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Client Results</span>
            <h2>
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p>
              Real feedback from real clients — business owners, tournament directors, and school administrators who run their businesses on these platforms daily.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={testimonial.id} delay={idx + 1}>
              <article className={styles.card}>
                <Quote size={40} className={styles.quoteIcon} />

                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <blockquote className={styles.quote}>
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorRole}>
                      {testimonial.role} · {testimonial.company}
                    </div>
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
