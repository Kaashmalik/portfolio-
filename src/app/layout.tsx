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
  title: "MTK Codex | Full-Stack SaaS Architect",
  description:
    "Full-Stack SaaS Architect with 7 production platforms across web, mobile, and desktop. Specializing in multi-tenant SaaS, AI integration, and scalable MVPs using Next.js, TypeScript, NestJS, Laravel, React Native, and Electron. Available 9+ hrs/day for remote work worldwide.",
  keywords: [
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
    "MVP developer",
    "freelance developer",
    "Pakistan developer",
    "Supabase",
    "PostgreSQL",
    "shadcn/ui",
    "Vercel AI SDK",
    "fintech developer",
    "edtech developer",
  ],
  authors: [{ name: "Muhammad Kashif" }],
  creator: "MTK Codex",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MTK Codex | Full-Stack SaaS Architect",
    description:
      "7 production SaaS platforms across e-commerce, fintech, edtech, agriculture, sports, and security. Multi-tenant architecture, AI integration, and cross-platform delivery. Available for freelance engagements worldwide.",
    siteName: "MTK Codex",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTK Codex | Full-Stack SaaS Architect",
    description:
      "Full-Stack SaaS Architect with 7 production platforms. Multi-tenant SaaS, AI integration, web + mobile + desktop. Available for remote freelance work.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
              "jobTitle": "Full-Stack SaaS Architect",
              "url": "https://pf.mtkcodex.site",
              "knowsAbout": [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Multi-Tenant SaaS",
                "AI Integration",
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
