# Muhammad Kashif — Portfolio

> **Full-Stack SaaS Architect** — founder of MTK Codex, Lahore, Pakistan.

Live site: **[pf.mtkcodex.site](https://pf.mtkcodex.site)**

A conversion-focused portfolio for freelance and contract work: 7 shipped platforms with real
case studies, live demos, a working project-brief flow, and a downloadable CV.

## Highlights

- **7 production platforms** with Problem → Build → Result case studies
- **3 live demos** (LaraibCreative, MTK Dairy, Shakir Super League)
- **Working contact flow** — the brief opens WhatsApp or email pre-filled, so no lead is lost
- **Real CV download** — generated PDF at `/documents/Muhammad-Kashif-CV.pdf`
- **Theme-aware design** — light and dark mode both pass contrast
- **SEO complete** — metadata, Open Graph image, JSON-LD Person schema, `sitemap.xml`, `robots.txt`

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- CSS Modules with design tokens
- Lucide React icons
- `next-mdx-remote` + `gray-matter` for the blog

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (static export to `out/`) |
| `npm start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

## Content

| Path | Purpose |
| --- | --- |
| `src/data/projects.ts` | Projects, case studies, accents, demo links |
| `src/data/experience.ts` | Roles and achievements |
| `src/data/skills.ts` | Skill groups and levels |
| `src/data/testimonials.ts` | Client quotes |
| `content/blog/*.mdx` | Blog posts |
| `scripts/cv.html` | Source for the generated CV PDF |
| `scripts/linkedin-playbook.html` | Source for the LinkedIn playbook PDF |
| `scripts/linkedin-outreach.html` | Source for the outreach playbook PDF |
| `LINKEDIN.md` | Full LinkedIn audit, copy-paste text, click-by-click link steps |
| `LINKEDIN-OUTREACH.md` | DM/InMail scripts, follow-up sequence, objection handling |
| `linkedin-assets/` | 1200 × 630 thumbnails for LinkedIn Featured cards |
| `linkedin-assets/outreach-tracker.csv` | Pipeline tracker for outreach |
| `CV.md` | Long-form CV source |

## Regenerate the CV PDF

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/documents/Muhammad-Kashif-CV.pdf \
  file:///absolute/path/to/scripts/cv.html
```

## Deploy

`next.config.ts` uses `output: 'export'`, so any static host works (Netlify, Vercel, Cloudflare Pages,
GitHub Pages). Build with `npm run build` and publish `out/`.

## LinkedIn kit

| File | What it is |
| --- | --- |
| `public/documents/LinkedIn-Playbook.pdf` | 9-page printable playbook — audit, copy-paste text, and the exact click paths for adding live links |
| `public/documents/LinkedIn-Outreach-Playbook.pdf` | 9-page outreach playbook — Premium setup, targeting, DM/InMail scripts, follow-up sequence |
| `LINKEDIN.md` | Profile content in Markdown, easy to edit |
| `LINKEDIN-OUTREACH.md` | All message scripts in Markdown for quick copy-paste |
| `linkedin-assets/01-portfolio.png` | Featured card thumbnail for the portfolio |
| `linkedin-assets/02-mtk-dairy.png` | Featured card thumbnail for MTK Dairy |
| `linkedin-assets/03-laraibcreative.png` | Featured card thumbnail for LaraibCreative |
| `linkedin-assets/04-shakir-super-league.png` | Featured card thumbnail for Shakir Super League |
| `linkedin-assets/outreach-tracker.csv` | Pipeline tracker — open in Excel or Google Sheets |

Regenerate either PDF:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/documents/LinkedIn-Playbook.pdf \
  file:///absolute/path/to/scripts/linkedin-playbook.html

chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/documents/LinkedIn-Outreach-Playbook.pdf \
  file:///absolute/path/to/scripts/linkedin-outreach.html
```

---

Built by Muhammad Kashif — [GitHub](https://github.com/Kaashmalik) ·
[LinkedIn](https://www.linkedin.com/in/muhammadkashif-mtkcodex) ·
[mtkcodex.tech](https://mtkcodex.tech)
