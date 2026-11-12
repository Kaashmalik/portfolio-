import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/hooks/useTheme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pf.mtkcodex.site"),
  title: {
    default: "Muhammad Kashif | Full-Stack SaaS Architect",
    template: "%s | Muhammad Kashif",
  },
  description:
    "Full-Stack SaaS Architect and founder of MTK Codex. 7 production platforms across fintech, agri-tech, ed-tech, sports, e-commerce, AI security and desktop. Multi-tenant SaaS, AI integration and cross-platform delivery with Next.js, TypeScript, NestJS, Laravel, React Native and Electron.",
  keywords: [
    "Muhammad Kashif",
    "Malik Kashif",
    "MTK Codex",
    "SaaS developer",
    "multi-tenant SaaS",
    "full-stack developer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
    "Electron",
    "NestJS",
    "Laravel",
    "AI integration",
    "CRM developer",
    "MVP developer",
    "freelance developer",
    "Pakistan developer",
    "Lahore developer",
    "Supabase",
    "PostgreSQL",
    "shadcn/ui",
    "Vercel AI SDK",
    "fintech developer",
    "edtech developer",
  ],
  authors: [{ name: "Muhammad Kashif", url: "https://pf.mtkcodex.site" }],
  creator: "Muhammad Kashif",
  publisher: "MTK Codex",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pf.mtkcodex.site",
    title: "Muhammad Kashif | Full-Stack SaaS Architect",
    description:
      "7 production SaaS platforms across fintech, agri-tech, ed-tech, sports, commerce, AI security and desktop. Available for freelance engagements worldwide.",
    siteName: "Muhammad Kashif — MTK Codex",
    images: [
      {
        url: "/images/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Kashif — Full-Stack SaaS Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kashif | Full-Stack SaaS Architect",
    description:
      "7 production SaaS platforms. Multi-tenant architecture, AI integration, web + mobile + desktop. Available for remote freelance work.",
    images: ["/images/og/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://pf.mtkcodex.site/#person",
              "name": "Muhammad Kashif",
              "alternateName": ["Malik Kashif", "MTK Codex"],
              "jobTitle": "Full-Stack SaaS Architect",
              "description":
                "Full-stack SaaS architect and founder of MTK Codex. Ships multi-tenant platforms across web, mobile and desktop.",
              "url": "https://pf.mtkcodex.site",
              "email": "mailto:kaash0542@gmail.com",
              "image": "https://pf.mtkcodex.site/images/og/og-cover.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "PK",
              },
              "worksFor": {
                "@type": "Organization",
                "name": "MTK Codex",
                "url": "https://mtkcodex.tech",
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "COMSATS University Islamabad, Lahore Campus",
              },
              "knowsLanguage": ["English", "Urdu"],
              "knowsAbout": [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Multi-Tenant SaaS",
                "PostgreSQL Row Level Security",
                "AI Integration",
                "CRM Development",
                "SaaS Development",
                "React",
                "React Native",
                "Electron",
                "NestJS",
                "Laravel",
                "PostgreSQL",
                "Supabase",
                "shadcn/ui",
                "Vercel AI SDK",
              ],
              "sameAs": [
                "https://github.com/Kaashmalik",
                "https://www.linkedin.com/in/muhammadkashif-mtkcodex",
                "https://mtkcodex.tech",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
