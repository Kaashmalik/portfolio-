export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'laraibcreative',
    title: 'LaraibCreative',
    description: 'A luxury Pakistani fashion e-commerce platform for custom-stitched ladies suits, bridal wear, party suits, and designer replicas.',
    longDescription: 'Built a full-stack luxury fashion e-commerce platform featuring custom stitching with precise body measurements, real-time order tracking, curated premium collections, and a comprehensive admin dashboard. Implements JWT authentication with httpOnly cookies, Zustand state management, Cloudinary image delivery, and local payment methods (COD, JazzCash, EasyPaisa). Deployed frontend on Vercel with mobile-first responsive design and dark mode support.',
    techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Zustand', 'Cloudinary'],
    category: 'E-Commerce',
    image: '/images/projects/laraibcreative.webp',
    liveUrl: 'https://www.laraibcreative.studio',
    githubUrl: 'https://github.com/Kaashmalik/laraibcreative-platform',
    featured: true,
    highlights: [
      'Custom stitching service with body measurement submission and real-time order tracking',
      'Premium collections with rich filtering by fabric, occasion, and price',
      'Mobile-first responsive design with dark mode and persistent wishlist sync',
      'Admin dashboard with 9-stage order fulfillment pipeline and payment verification',
    ],
  },
  {
    id: 'shakir-super-league',
    title: 'Shakir Super League (SSL)',
    description: 'A white-label SaaS platform for cricket league management — real-time scoring, AI commentary, live streaming, fantasy cricket, and analytics. Built for tournament organizers who need to launch their own branded league instantly.',
    longDescription: 'Architected and built a full-stack, multi-tenant white-label SaaS platform for cricket league management using Next.js 15 with NestJS microservices. Tournament organizers can launch their own branded instance with custom domains, logos, and team configurations. Features real-time ball-by-ball scoring with WebSocket sync, AI-powered commentary in five languages (English, Urdu, Punjabi, Pashto, Sindhi) via OpenAI GPT, WebRTC live streaming via Mediasoup, fantasy cricket with automated points, and ClickHouse-powered analytics. Uses PostgreSQL (Supabase), Redis caching, Apache Kafka for event streaming, and Docker with Nginx for deployment. Built to be sold as a recurring SaaS product to cricket leagues worldwide.',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'NestJS v11', 'PostgreSQL', 'Supabase', 'Redis', 'Apache Kafka', 'ClickHouse', 'Drizzle ORM', 'Zod', 'Clerk', 'Stripe', 'OpenAI GPT', 'Mediasoup', 'Docker', 'Nginx'],
    category: 'Sports Tech / SaaS',
    image: '/images/projects/shakir-super-league.webp',
    liveUrl: '#',
    githubUrl: 'https://github.com/Kaashmalik/mtk-ssl2026.git',
    featured: true,
    highlights: [
      'White-label SaaS architecture — tournament organizers launch branded instances with custom domains and team configurations',
      'Real-time ball-by-ball scoring with WebSocket sync, offline resilience, and O(1) incremental state updates',
      'AI multi-language commentary (English, Urdu, Punjabi, Pashto, Sindhi) via GPT with circuit-breaker pattern and Redis caching',
      'WebRTC live match streaming with Mediasoup, multi-room support, and low-latency broadcast',
    ],
  },
  {
    id: 'mtk-dairy',
    title: 'MTK Dairy',
    description: 'Pakistan\'s leading multi-tenant SaaS platform for dairy farm management — milk production tracking, cattle health, breeding cycles, and financial analytics. Built for farmers, cooperatives, and agricultural enterprises.',
    longDescription: 'A production-grade, multi-tenant SaaS platform managing 500+ dairy farms and 50K+ animals across Pakistan. Features Clerk Organizations for tenant isolation with 7 role-based access levels, Supabase PostgreSQL with Drizzle ORM, Upstash Redis + BullMQ for queuing, Firebase Firestore for real-time activity feeds, and Cloudinary for media. Includes automated billing with local payment gateways (JazzCash, EasyPaisa, XPay), IoT API integration for milking machines, bilingual UI (English + Urdu RTL), and PWA offline support. Built to scale to thousands of tenants with 99.9% uptime SLA.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Clerk', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Firebase Firestore', 'Upstash Redis', 'BullMQ', 'Cloudinary', 'Resend', 'Zustand', 'TanStack Query', 'next-intl', 'Sentry'],
    category: 'Agricultural Tech / SaaS',
    image: '/images/projects/mtk-dairy.webp',
    liveUrl: 'https://dairy.mtkcodex.site',
    githubUrl: 'https://github.com/Kaashmalik/malik-tech-dairy',
    featured: true,
    highlights: [
      'Multi-tenant SaaS with Clerk Organizations — 500+ farms, 50K+ animals, complete tenant isolation',
      'Real-time milk production tracking with IoT API integration for automated milking machines',
      '7-role RBAC (farm_owner to accountant) with granular permissions and audit logging',
      'Local payment integration (JazzCash, EasyPaisa, XPay) with tiered subscriptions and feature gating',
    ],
  },
  {
    id: 'mtk-edu',
    title: 'MTK Edu',
    description: 'An enterprise multi-tenant school management SaaS platform with AI-powered insights, biometric attendance, offline-first mobile apps, and 90+ RESTful API endpoints. Built for K-12 schools, colleges, and training centers.',
    longDescription: 'A comprehensive, multi-tenant school management SaaS platform designed for educational institutions of all sizes. Features subdomain-based tenant isolation via stancl/tenancy, AI-powered performance prediction and automated report generation via OpenAI, biometric attendance with Azure Face API integration, and offline-first React Native mobile apps with WatermelonDB. Backend built on Laravel 11 with Sanctum authentication, Spatie permissions (7 roles), and Laravel Horizon for queue management. Frontend uses Next.js 15 with Zustand, React Hook Form + Zod, and Recharts. 90+ RESTful API endpoints covering the complete academic lifecycle — from admission to graduation. Deployed on Vercel + Render with Supabase PostgreSQL, Cloudflare CDN, and Sentry monitoring.',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Laravel 11', 'PHP 8.2', 'PostgreSQL', 'Supabase', 'Redis', 'React Native', 'Expo', 'WatermelonDB', 'Zustand', 'React Hook Form', 'Zod', 'Recharts', 'next-intl', 'Sentry'],
    category: 'EdTech / SaaS',
    image: '/images/projects/mtk-edu.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    highlights: [
      'Multi-tenant SaaS with subdomain isolation — each school gets a dedicated subdomain with complete data separation',
      'AI-powered educational insights — performance prediction, automated report generation, and smart chatbot',
      'Biometric attendance with Azure Face API + offline-first React Native mobile apps with WatermelonDB sync',
      '90+ RESTful API endpoints covering full academic lifecycle — admission, exams, fees, library, and analytics',
    ],
  },
  {
    id: 'instalease',
    title: 'InstalEase',
    description: 'A multi-tenant SaaS platform for managing installment plans in retail businesses — contracts, payments, customers, and real-time analytics from a single dashboard.',
    longDescription: 'A production-grade, multi-tenant SaaS platform for retail installment businesses (home appliances, mobile phones, electronics, furniture). Features complete data isolation via PostgreSQL Row Level Security (RLS), 6-tier role-based access control (super_admin to customer), and real-time dashboards powered by Supabase Realtime subscriptions. Covers the full installment lifecycle: customer onboarding with CNIC verification, contract creation, automated installment scheduling, payment recording with receipt generation, guarantor management, and overdue/late-fee tracking. Includes a SaaS subscription model with tiered plans, multi-step shop registration with payment slip upload and manual verification, and a centralized Super Admin portal for platform-wide management. Built with Next.js 16, Supabase Auth, Zustand, TanStack Query v5, and deployed on Vercel.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Zustand', 'TanStack Query v5', 'React Hook Form', 'Zod', 'Recharts', 'Twilio', 'pdf-lib', 'Tesseract.js', 'Sentry'],
    category: 'FinTech / SaaS',
    image: '/images/projects/instalease.webp',
    liveUrl: 'https://instalease.mtkcodex.site',
    githubUrl: 'https://github.com/Kaashmalik/MTK-instalease',
    featured: true,
    highlights: [
      'Multi-tenant architecture with PostgreSQL RLS — unlimited shops with complete data isolation and 6-tier RBAC',
      'Real-time dashboards with Supabase Realtime — interactive charts for revenue, contract status, and payment breakdowns',
      'End-to-end installment workflow — CNIC verification, contract creation, auto-scheduling, receipt generation, and late-fee tracking',
      'SaaS subscription model with Super Admin portal — tiered plans, multi-step shop registration, and platform-wide management',
    ],
  },
  {
    id: 'mtk-alertpro',
    title: 'MTK AlertPro',
    description: 'An AI-powered mobile security app that transforms any IP camera into an intelligent surveillance system with on-device person/vehicle detection, instant push notifications, and alarm integration.',
    longDescription: 'A privacy-first mobile security application built with React Native + Expo that turns any IP camera into a smart surveillance system. Runs TensorFlow.js with SSD MobileNet V2 directly on-device for real-time person and vehicle detection — zero cloud processing means zero latency on inference and complete data privacy. Features instant push notifications with configurable cooldowns, alarm sound playback with red alert mode, vibration patterns, and per-camera detection settings (person/vehicle toggles, sensitivity thresholds). Achieves under 2-second end-to-end alert latency. Connects to 80%+ of IP cameras via RTSP/HTTP streams with automatic reconnection and offline camera caching. Backend powered by Supabase with Row Level Security for all user data. Monetized via RevenueCat subscriptions.',
    techStack: ['React Native', 'Expo SDK 52', 'TypeScript', 'NativeWind 4', 'Expo Router 4', 'Zustand 5', 'TanStack Query 5', 'Supabase', 'TensorFlow.js', 'SSD MobileNet V2', 'Firebase Cloud Messaging', 'RevenueCat', 'Expo Notifications'],
    category: 'AI / Mobile Security',
    image: '/images/projects/mtk-alertpro.webp',
    liveUrl: '#',
    githubUrl: 'https://github.com/Kaashmalik/mtk-alert-pro',
    featured: true,
    highlights: [
      'On-device AI detection — TensorFlow.js + SSD MobileNet V2 runs directly on phone for real-time person/vehicle detection with zero cloud dependency',
      'Smart alert system with alarm integration — push notifications, configurable cooldowns, alarm sounds, red alert mode, and per-camera detection settings',
      'Universal IP camera compatibility — 80%+ camera support via RTSP/HTTP streams with auto-reconnection and offline caching',
      'Privacy-first architecture — all AI processing on-device, camera credentials encrypted in memory, Supabase RLS protecting all user data',
    ],
  },
  {
    id: 'mtk-download-manager',
    title: 'MTK Download Manager',
    description: 'A cross-platform desktop application for downloading videos, music, and files from 1000+ websites — with smart queue management, progress tracking, and advanced configuration.',
    longDescription: 'A professional-grade cross-platform desktop download manager built with Electron 28 and React 18. Powered by yt-dlp for downloading from 1000+ websites including YouTube, Vimeo, and Twitch. Features full-featured download queue with pause/resume/cancel, priority ordering, drag-and-drop reordering, and parallel downloads with configurable concurrency. Real-time progress tracking shows speed, ETA, and size per item. Modern dark-themed UI with sidebar navigation, animated transitions via Framer Motion, toast notifications, and system tray with minimize-to-tray. Uses Better-SQLite3 for local database, Zustand for state management, and Electron Builder for cross-platform packaging (Windows NSIS/Portable, macOS DMG, Linux AppImage/DEB/RPM) with auto-update via GitHub Releases.',
    techStack: ['Electron 28', 'React 18', 'TypeScript', 'Vite 5', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Zod', 'Better-SQLite3', 'yt-dlp', 'Winston', 'Electron Builder', 'Electron Updater'],
    category: 'Desktop App / Utility',
    image: '/images/projects/mtk-download-manager.webp',
    liveUrl: '#',
    githubUrl: 'https://github.com/Kaashmalik/MTK-Download-manager-',
    featured: true,
    highlights: [
      '1000+ site support via yt-dlp — video/audio download with format selection, subtitle embedding, and chapter markers',
      'Smart queue management — pause/resume/cancel, priority ordering, drag-and-drop, parallel downloads with configurable concurrency',
      'Professional desktop UX — dark theme, sidebar nav, Framer Motion transitions, system tray, and minimize-to-tray',
      'Cross-platform distribution — Windows (NSIS + Portable), macOS (DMG), Linux (AppImage/DEB/RPM) with auto-update',
    ],
  },
];
