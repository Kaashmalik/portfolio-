'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
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
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p>
              Have a project in mind? I&apos;d love to hear about it. Send me a message
              and let&apos;s discuss how we can work together.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div>
                <h3 className={styles.contactTitle}>Let&apos;s Talk</h3>
                <p className={styles.contactDesc}>
                  I&apos;m currently available for freelance work and full-time opportunities.
                  Feel free to reach out!
                </p>
              </div>

              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Email</div>
                    <div className={styles.contactItemValue}>hello@maliktech.dev</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className={styles.contactItemLabel}>Location</div>
                    <div className={styles.contactItemValue}>Available Worldwide</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span className="status-dot" />
                <span style={{ fontSize: 'var(--font-small)', color: 'var(--text-secondary)' }}>
                  Currently available for new projects
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
