# Yousof Montasser Osman — Production AI & Software Engineering Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

> **Core Engineering Philosophy:**  
> *"Building production AI systems that remain reliable when models are wrong."*  
> The component will fail, so design the system so failure does not matter.

This repository contains the source code for the professional portfolio of **Yousof Montasser Osman**, an AI Engineer and Software Engineer based in Cairo, Egypt. It is built to present hands-on production engineering, deterministic validation around probabilistic AI models, computer vision pipelines, on-premise RAG architectures, and resilient backend services on AWS.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom engineering design tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO & Metadata:** Native OpenGraph, Twitter Cards, robots.txt, sitemap.xml, and Schema.org JSON-LD Person schema
- **Deployment Targets:** Vercel, GitHub Pages, or Docker container

---

## 📐 Architecture & System Design

The portfolio separates data models from UI presentation to ensure project case studies, metrics, and experience entries are simple to update without touching layout logic:

```
├── app/
│   ├── favicon.svg          # High-precision SVG target reticle favicon
│   ├── globals.css          # Technical dark theme, grid backgrounds, scrollbar styles
│   ├── icon.svg             # Next.js native vector icon
│   ├── layout.tsx           # Global metadata, OpenGraph, JSON-LD schema, viewport
│   ├── not-found.tsx        # Custom 404 state-out-of-bounds error boundary
│   ├── page.tsx             # Root page composition
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic XML sitemap generation
├── components/
│   ├── Navbar.tsx           # Telemetry indicator, navigation anchors, external channels
│   ├── Hero.tsx             # Positioning statement, CTAs, interactive verification terminal
│   ├── Philosophy.tsx       # Core engineering tenets & Prototype vs. Production matrix
│   ├── Projects.tsx         # Detailed architectural case studies with pipeline flow diagrams
│   ├── Experience.tsx       # Chronological timeline of engineering roles
│   ├── Skills.tsx           # Categorized technology stack without arbitrary progress bars
│   ├── Education.tsx        # Academic degrees and certified language proficiencies
│   ├── Contact.tsx          # 1-click clipboard copy, direct channels, and links
│   └── Footer.tsx           # Technical declaration and navigation
├── data/
│   └── portfolio.ts         # Authoritative single source of truth for all content
├── public/
│   └── favicon.svg          # Fallback static favicon
├── tailwind.config.ts       # Surface palette, accent colors (emerald/cyan/amber), typography
├── tsconfig.json            # Strict TypeScript configuration
└── package.json
```

---

## 🔍 Featured Engineering Case Studies

The portfolio presents engineering case studies highlighting failure modes and deterministic mitigation strategies:

### 1. Vantage — Real-Time HUD OCR & Live Map Visualization
- **GitHub:** [`Yousof-Montasser/vantage`](https://github.com/Yousof-Montasser/vantage)
- **Role & Org:** AI Engineer, Egyptian Military (Military Intelligence Agency)
- **Throughput:** 50 fps @ 10k bitrate
- **Accuracy Lift:** 80% → ~100%
- **Core Engineering:** When glare or occlusion corrupted OCR readings from FLIR HUD feeds, a raw model produced wild position jumps on tactical maps. An engineered Kalman filter modeled aircraft kinematics and dynamically substituted physically calculated coordinates whenever OCR innovation residuals exceeded dynamic thresholds. Streamed into WinTAK via Cursor-on-Target (CoT).

### 2. Automated OSINT Ingestion Pipeline — Taranis AI to RAGFlow
- **Role & Org:** AI Engineer, Egyptian Military (Military Intelligence Agency)
- **Throughput:** 1,500–3,500 articles daily
- **Isolation:** 100% on-premise with zero external cloud API leakage
- **Core Engineering:** Orchestrated scheduled n8n workflows with embedded Python nodes. Implemented cursor-based incremental sync, persistent report-to-document ID mappings for idempotent updates (replacing revised news items rather than duplicating vectors), parse-status polling loops, and automated error recovery alerts.

### 3. Real-Time Object Detection & Tracking for Drone Systems
- **Role & Org:** AI Engineer, Egyptian Military (Military Intelligence Agency)
- **Domain:** Autonomous Aerial Computer Vision
- **Core Engineering:** Real-time YOLO detection and multi-frame tracking on live drone camera feeds. Converted visual pixel offset errors into spatial guidance setpoints and integrated with flight controllers for closed-loop autonomous target pursuit, validated in simulation.

### 4. AI_NoteTaker — Agentic System with Enforced Safety Controls
- **GitHub:** [`Yousof-Montasser/AI_NoteTaker`](https://github.com/Yousof-Montasser/AI_NoteTaker)
- **Axiom:** *"The LLM proposes, the runtime enforces."*
- **Core Engineering:** Conversational agent built over a tool-calling loop. Destructive state changes are intercepted by deterministic runtime code requiring explicit confirmation rather than trusting prompts. Implements hybrid retrieval fusing lexical SQLite FTS5 with dense sentence-transformer embeddings via Reciprocal Rank Fusion (RRF).

### 5. InstaSearch — Instagram Product Discovery Platform
- **Org:** Cairo University Graduation Project (2024)
- **Scale:** Thousands of posts across 200+ fashion merchants
- **Core Engineering:** Multi-stage few-shot LLM classification pipeline structuring messy social commerce captions without manual data labeling. Integrated a natural-language-to-SQL chatbot executing parameterized relational queries in real time.

---

## 🚀 Local Development

### Prerequisites
- Node.js 18.x or 20.x or 22.x
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Yousof-Montasser/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Run type checking, linting, and production compilation
npm run build

# Start production server
npm run start
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub (`Yousof-Montasser/portfolio`).
2. Import the repository into [Vercel](https://vercel.com).
3. Next.js App Router will be detected automatically. Click **Deploy**.

### Static Export (GitHub Pages)
To export as a static HTML site for GitHub Pages:
1. Update `next.config.ts`:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true }
   };
   ```
2. Run `npm run build` to generate the `/out` directory.
3. Deploy the `/out` directory to your `gh-pages` branch or configure GitHub Actions.

---

## 📝 Updating Content

All personal details, case studies, technologies, and career experiences are stored in a typed dataset:
- Edit [`data/portfolio.ts`](data/portfolio.ts) to update text, metrics, links, or skills.
- The UI components automatically consume and format updates with strict TypeScript typing.

---

## 📄 License

MIT © Yousof Montasser Osman
