import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/hooks/useTheme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MalikTech | Full-Stack Developer Portfolio",
  description:
    "Full-stack developer specializing in Next.js, NestJS, React Native & scalable SaaS platforms. Building modern, performant web and mobile applications.",
  keywords: [
    "full-stack developer",
    "Next.js",
    "React",
    "NestJS",
    "React Native",
    "TypeScript",
    "portfolio",
    "SaaS developer",
    "web developer",
  ],
  authors: [{ name: "MalikTech" }],
  creator: "MalikTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MalikTech | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in scalable SaaS platforms, real-time apps, and premium mobile experiences.",
    siteName: "MalikTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "MalikTech | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in scalable SaaS platforms and modern web applications.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
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
              "@id": "https://maliktech.dev/#person",
              name: "Malik",
              jobTitle: "Full-Stack Developer",
              url: "https://maliktech.dev",
              knowsAbout: [
                "Next.js",
                "NestJS",
                "React Native",
                "TypeScript",
                "Supabase",
                "SaaS Development",
              ],
              sameAs: [
                "https://github.com/",
                "https://linkedin.com/in/",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
