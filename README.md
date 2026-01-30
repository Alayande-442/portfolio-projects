# AI‑Augmented Developer Portfolio

A modern, cloud‑native developer portfolio that showcases **AI automation, agentic workflows, and scalable systems engineering**.

This project is built for the **DEV “New Year, New You” Portfolio Challenge (2026)** and leverages **Google AI (Gemini)** alongside **Google Cloud Run** to demonstrate real‑world, production‑ready AI integration — not demos or gimmicks.

---

## Overview

Traditional portfolios are static. This one is **intelligent**.

The portfolio acts as an interactive system that:

- Explains projects differently depending on audience (recruiter, engineer, founder)
- Interprets job descriptions and maps them to relevant experience
- Demonstrates how AI can be embedded into real products

The goal is to present not just _what I built_, but **how I think as an engineer**.

---

## Key Features

### 1. Intelligent 3D Hero (Three.js)

- Abstract "Intelligence Core" visualization
- Represents AI systems, agents, and data flow
- Lightweight, performance‑aware, Cloud Run friendly

### 2. AI‑Powered Portfolio Assistant (Gemini)

- Conversational interface trained on portfolio content
- Answers questions about projects, skills, and experience
- Adapts explanations to different audiences

### 3. AI Project Explainers

- Each case study can be explained via Gemini
- Context‑aware summaries:
  - Recruiter view
  - Engineer view
  - Business / founder view

### 4. Job Description Analyzer

- Paste a JD into the portfolio
- Gemini analyzes fit, highlights matching projects, and identifies gaps

### 5. Cloud‑Native Deployment

- Fully containerized
- Deployed on **Google Cloud Run**
- Scales automatically, minimal infrastructure overhead

---

## Tech Stack

### Frontend

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (micro‑interactions)
- **Three.js / @react-three/fiber**

### AI & Automation

- **Google Gemini (via AI Studio)**
- Structured prompting & tool‑style responses
- Optional embeddings for semantic search

### Infrastructure

- **Google Cloud Run**
- Docker
- Environment‑based configuration

---

## Architecture Overview

```
Browser (Next.js)
   ↓
Server Actions / API Routes
   ↓
Gemini API (Reasoning & Generation)
   ↓
Structured Responses (JSON)
   ↓
UI Rendering & 3D Feedback
```

The AI layer is treated as a **reasoning engine**, not a chat toy.

---

## Design Philosophy

- **Clarity over flash**
- **Systems thinking over aesthetics alone**
- **AI as a product feature, not decoration**
- Performance and accessibility are first‑class concerns

The visual identity is intentionally minimal, calm, and professional — inspired by modern Google product design.

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev/ npx next dev
```

Environment variables are required for Gemini access:

```env
GEMINI_API_KEY=your_key_here
```

---

## Deployment (Google Cloud Run)

1. Build Docker image
2. Push to Google Artifact Registry
3. Deploy to Cloud Run
4. Embed live URL in DEV submission post

This project is deployed following Cloud Run best practices:

- Stateless services
- Fast cold starts
- Secure environment variables

---

## DEV Challenge Submission

This portfolio is submitted as part of:

**New Year, New You Portfolio Challenge – 2026**

Submission post includes a live Cloud Run embed using:

```
--labels dev-tutorial=devnewyear2026
```

---

## Roadmap

- [ ] Finalize 3D Intelligence Core
- [ ] Integrate Gemini project explainer
- [ ] Add JD Analyzer
- [ ] Performance & Lighthouse optimization
- [ ] Final Cloud Run deployment

---

## Author

**Olaoluwa Alayande**
Full‑Stack Engineer | AI Automation & Agentic Systems

Building intelligent, scalable systems with real‑world impact.

---

## Folder structure

```bash
/app
  /page.tsx        → main page
  /layout.tsx      → global layout
/components
  /hero
    Hero.tsx
    HeroPlaceholder3D.tsx
  /sections
    WhatIBuild.tsx
    CaseStudies.tsx
    AICapabilities.tsx
    TechStack.tsx
    Contact.tsx
/styles
  globals.css
```

## License

MIT License
