'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone, Shield, Clock, Globe } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './Contact.module.css';

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 — $3,000',
  '$3,000 — $7,000',
  '$7,000 — $15,000',
  '$15,000+',
  'Not sure yet',
];

const PROJECT_TYPES = [
  'Multi-tenant SaaS',
  'AI Integration',
  'MVP / Prototype',
  'Mobile App (React Native)',
  'Desktop App (Electron)',
  'E-commerce Platform',
  'Other',
];

const trustSignals = [
  { icon: Shield, text: '7 Production Platforms Shipped' },
  { icon: Clock, text: 'Response within 12 hrs guaranteed' },
  { icon: Globe, text: 'Available 9+ hrs/day — Remote Worldwide' },
];

const WHATSAPP_NUMBER = '923038111297';
const EMAIL = 'kaash0542@gmail.com';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const buildBrief = () =>
    [
      'New project brief — from pf.mtkcodex.site',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project type: ${formData.projectType || 'Not specified'}`,
      `Budget: ${formData.budget || 'Not specified'}`,
      '',
      'Details:',
      formData.message,
    ].join('\n');

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const brief = buildBrief();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(brief)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleEmail = () => {
    const brief = buildBrief();
    const subject = `Project inquiry — ${formData.projectType || 'SaaS build'}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
    setSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contact" aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2>
              Let&apos;s Build Your{' '}
              <span className="text-gradient">Next Platform</span>
            </h2>
            <p>
              Whether you need a multi-tenant SaaS, an AI-powered feature, or a complete MVP —
              I deliver production-ready solutions with detailed estimates and timeline breakdowns.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.trustRow}>
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.text} className={styles.trustItem}>
                  <Icon size={18} />
                  <span>{signal.text}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.availBadge}>
                <span className="status-dot" />
                Currently Accepting New Projects
              </div>

              <p className={styles.contactDesc}>
                I respond within 12 hours with a detailed project estimate, timeline, and cost breakdown.
                Every engagement starts with a free 30-min discovery call.
              </p>

              <div className={styles.contactItems}>
                <a href={`mailto:${EMAIL}`} className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><Mail size={18} /></div>
                  <div>
                    <div className={styles.contactItemLabel}>Email</div>
                    <div className={styles.contactItemValue}>{EMAIL}</div>
                  </div>
                </a>

                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><Phone size={18} /></div>
                  <div>
                    <div className={styles.contactItemLabel}>WhatsApp</div>
                    <div className={styles.contactItemValue}>+92 303 8111297</div>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}><MapPin size={18} /></div>
                  <div>
                    <div className={styles.contactItemLabel}>Location</div>
                    <div className={styles.contactItemValue}>Lahore, PK — Remote Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
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
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-type" className={styles.formLabel}>Project Type</label>
                  <select
                    id="contact-type"
                    className={styles.formSelect}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="">Select type...</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-budget" className={styles.formLabel}>Budget Range</label>
                  <select
                    id="contact-budget"
                    className={styles.formSelect}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Select range...</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>Project Details</label>
                <textarea
                  id="contact-message"
                  className={styles.formTextarea}
                  placeholder="Tell me about your project — goals, timeline, tech preferences..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  <Send size={18} />
                  Send on WhatsApp
                </button>
                <button type="button" className={styles.emailButton} onClick={handleEmail}>
                  <Mail size={18} />
                  Email instead
                </button>
              </div>

              <p className={styles.formNote}>
                This opens WhatsApp or your email app with the brief pre-filled — no form server,
                no lost messages. I reply within 12 hours.
              </p>

              {submitted && (
                <div className={styles.successMessage} role="status" aria-live="polite">
                  <CheckCircle size={16} />
                  Brief ready — send it in WhatsApp or email and I&apos;ll reply within 12 hours.
                  <button type="button" className={styles.resetButton} onClick={resetForm}>
                    Start a new brief
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
