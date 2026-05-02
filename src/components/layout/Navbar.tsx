'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo} aria-label="MTK Codex Home">
          <Code2 size={24} />
          <span>
            MTK <span className={styles.logoAccent}>Codex</span>
          </span>
        </Link>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navActions}>
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: 'var(--font-small)' }}>
            Hire Me
          </a>
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.navLink}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
