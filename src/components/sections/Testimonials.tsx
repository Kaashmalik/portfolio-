'use client';

import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[activeIndex];

  if (!testimonial) return null;

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
              Real feedback from real clients — business owners, tournament directors, and school administrators who use these platforms daily.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.carousel}>
          <ScrollReveal>
            <div className={styles.card}>
              <Quote size={64} className={styles.quoteIcon} />
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <blockquote className={styles.quote}>
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {/* Fallback avatar if image fails or isn't present */}
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.controls}>
              <button className={styles.controlBtn} onClick={handlePrev} aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              <button className={styles.controlBtn} onClick={handleNext} aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>

            <div className={styles.indicators}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.indicator} ${idx === activeIndex ? styles.active : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
