'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={styles.iconWrapper}>
        <Sun
          size={18}
          className={`${styles.icon} ${theme === 'light' ? styles.active : ''}`}
        />
        <Moon
          size={18}
          className={`${styles.icon} ${theme === 'dark' ? styles.active : ''}`}
        />
      </div>
    </button>
  );
}
