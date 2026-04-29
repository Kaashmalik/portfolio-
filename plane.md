# 🚀 MalikTech Portfolio — Master Plan 2026

> **Goal:** Build a world-class, premium developer portfolio that showcases full-stack expertise, impresses recruiters in seconds, and ranks high on search engines & AI agents.

---

## 📋 Table of Contents

1. [Brand Identity & Strategy](#1-brand-identity--strategy)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Page Structure & Sections](#4-page-structure--sections)
5. [Animation & Interaction Strategy](#5-animation--interaction-strategy)
6. [SEO & Structured Data](#6-seo--structured-data)
7. [Performance & Accessibility](#7-performance--accessibility)
8. [Blog / Content Strategy](#8-blog--content-strategy)
9. [Analytics & Monitoring](#9-analytics--monitoring)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)
11. [Implementation Roadmap](#11-implementation-roadmap)
12. [Folder Structure](#12-folder-structure)

---

## 1. Brand Identity & Strategy

| Attribute        | Value                                                                 |
| :--------------- | :-------------------------------------------------------------------- |
| **Brand Name**   | MalikTech                                                             |
| **Tagline**      | *"Engineering Scalable Solutions"* (customize to your niche)          |
| **Target Audience** | Recruiters, startup founders, freelance clients, open-source community |
| **Tone**         | Professional, confident, modern, approachable                         |
| **Color Mood**   | Dark-mode-first with electric accent gradients                        |
| **Typography**   | Inter / Outfit (headings) + JetBrains Mono (code snippets)           |

### Value Proposition (Hero Hook)
> Full-Stack Developer specializing in scalable SaaS platforms, real-time applications, and premium UI/UX — built with Next.js, NestJS, React Native & Supabase.

---

## 2. Tech Stack

### Core Framework
| Layer            | Technology                  | Why                                                    |
| :--------------- | :-------------------------- | :----------------------------------------------------- |
| **Framework**    | **Next.js 15 (App Router)** | SSR/SSG, performance, SEO, React Server Components     |
| **Language**     | **TypeScript 5.x**          | Type safety, DX, industry standard                     |
| **Styling**      | **Vanilla CSS + CSS Modules** | Full control, no framework lock-in, native nesting     |
| **Animations**   | **GSAP 3 + Framer Motion**  | GSAP for scroll/timeline, Framer Motion for layout     |
| **3D (Optional)**| **Three.js + React Three Fiber** | Hero section 3D visuals if desired                 |
| **Icons**        | **Lucide React**            | Lightweight, tree-shakeable, consistent                |
| **Fonts**        | **Google Fonts (next/font)** | Zero layout shift, self-hosted                        |

### Content & Data
| Layer            | Technology                  | Why                                                    |
| :--------------- | :-------------------------- | :----------------------------------------------------- |
| **CMS (Blog)**   | **MDX + contentlayer** OR **Notion API** | Write in Markdown, render as React components |
| **Contact Form** | **Resend + React Email**    | Free tier, beautiful transactional emails              |
| **Analytics**    | **Umami (self-hosted)** OR **Plausible** | Privacy-first, lightweight, GDPR compliant    |

### Infrastructure
| Layer            | Technology                  | Why                                                    |
| :--------------- | :-------------------------- | :----------------------------------------------------- |
| **Hosting**      | **Vercel**                  | Edge network, preview deploys, Next.js native          |
| **Domain**       | **Custom domain**           | Professional credibility                               |
| **CI/CD**        | **GitHub Actions + Vercel** | Auto deploy on push, PR previews                       |
| **Monitoring**   | **Vercel Analytics + Web Vitals** | Real-time performance tracking                   |

---

## 3. Design System

### 3.1 Color Palette (Dark Mode First)

```css
:root {
  /* Background Layers */
  --bg-primary:    hsl(225, 25%, 6%);      /* Deep navy-black */
  --bg-secondary:  hsl(225, 20%, 10%);     /* Card backgrounds */
  --bg-tertiary:   hsl(225, 18%, 14%);     /* Elevated surfaces */

  /* Text */
  --text-primary:   hsl(0, 0%, 95%);       /* Headings */
  --text-secondary: hsl(220, 10%, 65%);    /* Body text */
  --text-muted:     hsl(220, 10%, 45%);    /* Subtle text */

  /* Accent Gradient */
  --accent-start:   hsl(260, 85%, 65%);    /* Electric violet */
  --accent-end:     hsl(200, 90%, 55%);    /* Cyan blue */
  --accent-gradient: linear-gradient(135deg, var(--accent-start), var(--accent-end));

  /* Glass */
  --glass-bg:       rgba(255, 255, 255, 0.05);
  --glass-border:   rgba(255, 255, 255, 0.1);
  --glass-blur:     16px;

  /* Semantic */
  --success:  hsl(150, 70%, 50%);
  --warning:  hsl(40, 90%, 55%);
  --error:    hsl(0, 75%, 55%);
}

/* Light Mode Override */
[data-theme="light"] {
  --bg-primary:    hsl(220, 20%, 97%);
  --bg-secondary:  hsl(220, 15%, 93%);
  --text-primary:  hsl(225, 25%, 10%);
  --text-secondary: hsl(220, 10%, 40%);
  --glass-bg:      rgba(255, 255, 255, 0.6);
  --glass-border:  rgba(0, 0, 0, 0.08);
}
```

### 3.2 Typography Scale

```css
/* Fluid Typography — scales from mobile to desktop */
--font-display: clamp(2.5rem, 5vw + 1rem, 5rem);     /* Hero title */
--font-h1:      clamp(2rem, 3vw + 0.5rem, 3.5rem);    /* Section headings */
--font-h2:      clamp(1.5rem, 2vw + 0.5rem, 2.25rem); /* Sub-headings */
--font-h3:      clamp(1.125rem, 1.5vw, 1.5rem);       /* Card titles */
--font-body:    clamp(0.95rem, 1vw, 1.125rem);         /* Body text */
--font-small:   clamp(0.8rem, 0.9vw, 0.875rem);       /* Captions */
--font-code:    0.875rem;                               /* Code blocks */
```

### 3.3 Glassmorphism Components

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### 3.4 Spacing & Layout

```css
--space-xs:  0.25rem;   /* 4px */
--space-sm:  0.5rem;    /* 8px */
--space-md:  1rem;      /* 16px */
--space-lg:  1.5rem;    /* 24px */
--space-xl:  2rem;      /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */

--max-width:   1200px;
--section-pad: var(--space-4xl) var(--space-lg);
```

---

## 4. Page Structure & Sections

### 4.1 Single-Page Layout (Recommended for Portfolio)

```
┌─────────────────────────────────────────┐
│  🔝 NAVBAR (sticky, glass, theme toggle)│
├─────────────────────────────────────────┤
│  🌟 HERO SECTION                        │
│  - Name + Animated Title                │
│  - Tagline / Value Proposition          │
│  - CTA Buttons (View Work / Contact)    │
│  - Ambient gradient / 3D background     │
│  - Social Links (GitHub, LinkedIn)      │
├─────────────────────────────────────────┤
│  👤 ABOUT ME                            │
│  - Professional photo/avatar            │
│  - Short bio (3-4 sentences)            │
│  - Years of experience counter          │
│  - Currently learning / working on      │
│  - Downloadable resume button           │
├─────────────────────────────────────────┤
│  🛠️ SKILLS & EXPERTISE                  │
│  - Categorized: Frontend / Backend /    │
│    Mobile / DevOps / Database           │
│  - Interactive skill cards (not lists)  │
│  - Each skill linked to a project       │
│  - Proficiency bars or radial charts    │
├─────────────────────────────────────────┤
│  💼 FEATURED PROJECTS (3-5 max)         │
│  - Project cards with live preview      │
│  - Each card: Screenshot, Title,        │
│    Tech Stack Tags, Description         │
│  - Expandable Case Study modal:         │
│    • Problem → Approach → Result        │
│    • Architecture diagram               │
│    • Key metrics / outcomes             │
│  - Links: Live Demo | GitHub | Case     │
├─────────────────────────────────────────┤
│  📊 EXPERIENCE TIMELINE                 │
│  - Vertical animated timeline           │
│  - Company, Role, Duration, Key wins    │
│  - Scroll-triggered reveal animations   │
├─────────────────────────────────────────┤
│  🏆 ACHIEVEMENTS & STATS               │
│  - Animated counters (projects, clients │
│    commits, years of experience)        │
│  - Certifications / Awards             │
│  - Open source contributions           │
├─────────────────────────────────────────┤
│  ✍️ BLOG / ARTICLES (Optional)          │
│  - Latest 3 posts with thumbnails       │
│  - "Read More" → /blog page            │
├─────────────────────────────────────────┤
│  💬 TESTIMONIALS                        │
│  - Client/colleague quotes             │
│  - Auto-scrolling carousel             │
│  - Avatar + Name + Role                │
├─────────────────────────────────────────┤
│  📬 CONTACT SECTION                     │
│  - Contact form (Name, Email, Message)  │
│  - Email, Location, Availability status │
│  - Social links row                     │
│  - Calendly embed (optional)            │
├─────────────────────────────────────────┤
│  🔻 FOOTER                             │
│  - Quick links, copyright, social       │
│  - "Built with Next.js" badge           │
│  - Back to top button                   │
└─────────────────────────────────────────┘
```

### 4.2 Additional Pages (via App Router)

| Route              | Purpose                                    |
| :------------------ | :----------------------------------------- |
| `/`                 | Main portfolio (single page)               |
| `/blog`             | Blog listing page                          |
| `/blog/[slug]`      | Individual blog post (MDX)                 |
| `/projects/[slug]`  | Detailed case study page                   |
| `/resume`           | Interactive resume / PDF download          |

---

## 5. Animation & Interaction Strategy

### 5.1 Micro-Interactions
| Element              | Animation                                         | Library       |
| :------------------- | :------------------------------------------------ | :------------ |
| Page Load            | Staggered fade-in of hero elements                | Framer Motion |
| Scroll Reveals       | Fade-up with slight Y offset                      | GSAP ScrollTrigger |
| Navbar               | Glass effect intensifies on scroll                | CSS + JS      |
| Project Cards        | 3D tilt on hover (perspective transform)          | Vanilla JS    |
| Skill Tags           | Subtle pulse/glow on hover                        | CSS           |
| Stats Counters       | Count-up animation on scroll into view            | GSAP          |
| Page Transitions     | Smooth cross-fade between routes                  | Framer Motion |
| Cursor               | Custom cursor with magnetic effect (desktop only) | GSAP          |
| Theme Toggle         | Smooth color transition (200ms)                   | CSS transition|

### 5.2 Rules
- **Always** respect `prefers-reduced-motion` → disable non-essential animations
- Keep total animation JS under **15KB** gzipped
- Use GPU-accelerated properties only (`transform`, `opacity`)
- No animation should delay content visibility beyond **300ms**

---

## 6. SEO & Structured Data

### 6.1 Meta Tags (per page)
```tsx
export const metadata: Metadata = {
  title: 'MalikTech | Full-Stack Developer Portfolio',
  description: 'Full-stack developer specializing in Next.js, NestJS, React Native & scalable SaaS platforms.',
  keywords: ['full-stack developer', 'Next.js', 'portfolio', 'SaaS'],
  openGraph: {
    title: 'MalikTech Portfolio',
    description: '...',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MalikTech Portfolio',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};
```

### 6.2 JSON-LD Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://maliktech.dev/#person",
  "name": "Your Name",
  "jobTitle": "Full-Stack Developer",
  "url": "https://maliktech.dev",
  "image": "https://maliktech.dev/avatar.jpg",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourprofile"
  ],
  "knowsAbout": ["Next.js", "NestJS", "React Native", "TypeScript", "Supabase"]
}
```

### 6.3 Technical SEO Checklist
- [x] Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`)
- [x] Single `<h1>` per page with proper heading hierarchy
- [x] Alt text on every image
- [x] `sitemap.xml` (auto-generated by Next.js)
- [x] `robots.txt`
- [x] Canonical URLs
- [x] OG images (1200×630) for every page
- [x] `preconnect` for external fonts/APIs
- [x] Lighthouse SEO score: **95+**

---

## 7. Performance & Accessibility

### 7.1 Performance Targets
| Metric              | Target        |
| :------------------- | :------------ |
| **LCP**             | < 2.0s        |
| **FID**             | < 100ms       |
| **CLS**             | < 0.05        |
| **TTI**             | < 3.0s        |
| **Lighthouse Perf** | 95+           |
| **Bundle Size**     | < 150KB (JS first load) |

### 7.2 Optimization Strategies
- **Images:** Use `next/image` with WebP/AVIF, lazy loading, blur placeholders
- **Fonts:** Self-host via `next/font`, use `font-display: swap`
- **Code Splitting:** Dynamic imports for heavy components (3D, animations)
- **Prefetching:** `<Link prefetch>` for internal navigation
- **Edge Caching:** ISR with 1-hour revalidation for blog posts

### 7.3 Accessibility (WCAG 2.2 AA)
- Color contrast ratio ≥ 4.5:1 for text
- Full keyboard navigation
- ARIA labels on interactive elements
- Skip-to-content link
- Focus indicators on all interactive elements
- Screen reader tested
- `prefers-reduced-motion` respected
- `prefers-color-scheme` detected for initial theme

---

## 8. Blog / Content Strategy

### 8.1 Setup
- **Format:** MDX files in `/content/blog/`
- **Features:** Syntax highlighting (Shiki), table of contents, reading time, share buttons
- **Categories:** Tutorials, Architecture, DevOps, Career, Open Source

### 8.2 Content Ideas (First 5 Posts)
1. "Building a Scalable Cricket SaaS with Next.js 15 & NestJS"
2. "Implementing Real-Time Updates with Supabase & WebSockets"
3. "My Liquid Glass Design System — From Concept to Code"
4. "Setting Up a Production-Grade Expo App with AdMob"
5. "Why I Chose Drizzle ORM Over Prisma in 2026"

---

## 9. Analytics & Monitoring

| Tool                    | Purpose                            | Privacy   |
| :---------------------- | :--------------------------------- | :-------- |
| **Umami** (self-hosted) | Page views, visitors, referrals    | GDPR ✅   |
| **Vercel Analytics**    | Web Vitals, performance metrics    | Built-in  |
| **Google Search Console** | Search performance, indexing     | Free      |
| **Sentry** (free tier)  | Error tracking & monitoring        | Optional  |

---

## 10. Deployment & Infrastructure

### 10.1 CI/CD Pipeline
```
GitHub Push → GitHub Actions (lint + type-check + build) → Vercel Deploy
     │
     └── PR → Preview Deploy (unique URL per PR)
```

### 10.2 Environment Setup
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://maliktech.dev
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxx
NEXT_PUBLIC_GA_ID=G-xxxxx  # optional
```

### 10.3 Domain & DNS
- Primary: `maliktech.dev` (or your chosen domain)
- DNS via Vercel or Cloudflare
- SSL: Automatic via Vercel

---

## 11. Implementation Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Set up design system (CSS variables, globals, fonts)
- [ ] Create layout component (Navbar + Footer)
- [ ] Implement dark/light theme toggle
- [ ] Set up project folder structure

### Phase 2: Core Sections (Week 2)
- [ ] Build Hero section with animated title
- [ ] Build About Me section
- [ ] Build Skills section with interactive cards
- [ ] Build Featured Projects section with cards
- [ ] Build Contact form with Resend integration

### Phase 3: Enhanced Sections (Week 3)
- [ ] Build Experience Timeline
- [ ] Build Achievements & Stats counters
- [ ] Build Testimonials carousel
- [ ] Create project detail / case study pages
- [ ] Add scroll-triggered animations (GSAP)

### Phase 4: Blog & Content (Week 4)
- [ ] Set up MDX blog pipeline
- [ ] Create blog listing page
- [ ] Create blog post template with ToC
- [ ] Write first 2-3 blog posts
- [ ] Add RSS feed

### Phase 5: Polish & Launch (Week 5)
- [ ] Add all micro-interactions & hover effects
- [ ] Implement SEO (meta tags, JSON-LD, sitemap)
- [ ] Performance audit (Lighthouse 95+)
- [ ] Accessibility audit (WCAG 2.2 AA)
- [ ] Cross-browser & mobile testing
- [ ] Deploy to Vercel with custom domain
- [ ] Submit to Google Search Console
- [ ] Set up analytics (Umami)

### Phase 6: Post-Launch (Ongoing)
- [ ] Publish blog posts regularly
- [ ] Add new projects as completed
- [ ] Monitor analytics & iterate
- [ ] A/B test hero CTAs
- [ ] Gather and add testimonials

---

## 12. Folder Structure

```
portfolio/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── projects/
│   │   ├── blog/
│   │   └── og/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home (all sections)
│   │   ├── globals.css             # Design system
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Blog post
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx        # Case study
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── AnimatedCounter.tsx
│   │       └── ScrollReveal.tsx
│   ├── data/
│   │   ├── projects.ts             # Project metadata
│   │   ├── skills.ts               # Skills data
│   │   ├── experience.ts           # Work history
│   │   └── testimonials.ts         # Testimonials
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollProgress.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   ├── mdx.ts                  # MDX utilities
│   │   ├── seo.ts                  # SEO helpers
│   │   └── email.ts                # Contact form handler
│   └── types/
│       └── index.ts
├── content/
│   └── blog/                       # MDX blog posts
├── .env.local
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✅ Success Criteria

| Criteria                  | Target                          |
| :------------------------ | :------------------------------ |
| Lighthouse Performance    | 95+                             |
| Lighthouse SEO            | 95+                             |
| Lighthouse Accessibility  | 95+                             |
| First Load JS             | < 150KB                         |
| Page Load Time            | < 2 seconds                     |
| Mobile Responsive         | All breakpoints tested          |
| Browser Support           | Chrome, Firefox, Safari, Edge   |
| Dark/Light Mode           | Seamless toggle                 |
| Featured Projects         | 3-5 with case studies           |
| Blog Posts at Launch       | Minimum 2-3                     |
| Contact Form              | Working with email delivery     |

---

> **Next Step:** Approve this plan, and we'll begin Phase 1 — initializing the Next.js 15 project and building the design system foundation.
