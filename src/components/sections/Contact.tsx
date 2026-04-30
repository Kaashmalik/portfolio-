'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production: integrate with Resend or similar
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contact" aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2>
              Let&apos;s Build Your{' '}
              <span className="text-gradient">SaaS Platform</span>
            </h2>
            <p>
              Whether you need a multi-tenant SaaS platform, an AI-powered feature, or a complete
              MVP — I deliver production-ready solutions. 7 platforms shipped, 3 live in production.
              Response guaranteed within 12 hours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div>
                <h3 className={styles.contactTitle}>Get in Touch</h3>
                <p className={styles.contactDesc}>
                  Currently accepting new projects — multi-tenant SaaS platforms, AI integrations,
                  cross-platform apps (web + mobile + desktop), and MVP development. I respond
                  within 12 hours and provide detailed project estimates with timeline and cost breakdown.
                </p>
              </div>

              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Email</div>
                    <div className={styles.contactItemValue}>kaash0542@gmail.com</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>WhatsApp</div>
                    <a href="https://wa.me/923038111297" target="_blank" rel="noopener noreferrer" className={styles.contactItemValue}>+92 303 8111297</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Location</div>
                    <div className={styles.contactItemValue}>Lahore, PK — Remote Worldwide</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span className="status-dot" />
                <span style={{ fontSize: 'var(--font-small)', color: 'var(--text-secondary)' }}>
                  Available 9+ hrs/day — Response within 12 hrs — Remote Worldwide
                </span>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.formLabel}>Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.formLabel}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>Message</label>
                <textarea
                  id="contact-message"
                  className={styles.formTextarea}
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              ) : (
                <div className={styles.submitBtn}>
                  <button type="submit" className="btn btn-primary">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
