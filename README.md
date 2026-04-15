<div align="center">

# ✦ Manohar Kumar Sah — 3D Portfolio

### *Where AI meets immersive web experiences*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.168-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

<br/>

> A fully interactive, physics-driven 3D portfolio showcasing AI/ML projects, research, and startup work — built with cutting-edge web technologies.

[🌐 Live Demo](#) · [📬 Contact](#contact) · [🐛 Report Bug](https://github.com/mmpbrother94/ThreeDPortfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Featured Projects](#-featured-projects)
- [Career Highlights](#-career-highlights)
- [Contact](#-contact)
- [License](#-license)

---

## 🔭 Overview

This is a **single-page 3D portfolio** for **Manohar Kumar Sah** — B.Tech CSE-AI student, hackathon winner, startup co-founder, and research intern. The site blends real-time physics simulation, scroll-driven animations, and GPU-accelerated 3D graphics to deliver an experience that stands far beyond a typical portfolio.

Every section — from the cinematic landing hero to the physics-based tech stack showcase — is crafted to be both visually stunning and highly performant.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Cinematic Landing** | Full-screen hero with animated character and split-text reveal |
| 🧲 **Physics Tech Stack** | Interactive 3D balls simulated with Rapier physics engine |
| 📜 **Scroll Animations** | GSAP ScrollTrigger-powered section transitions and parallax |
| 🖱️ **Custom Cursor** | Reactive cursor that morphs on interactive elements |
| 🎠 **Project Carousel** | Smooth project showcase with external links |
| ⚡ **Lazy Loading** | Code-split components for fast initial load |
| 📊 **Analytics** | Vercel Analytics integration for real-time visitor insights |
| 📱 **Responsive** | Optimized layout for both desktop and mobile viewports |
| 🌀 **Marquee Effects** | Continuous scrolling text banners via `react-fast-marquee` |
| ⏳ **Loading Screen** | Animated progress loader before content reveals |

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 18.3 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.5 | Type-safe development |
| [Vite](https://vitejs.dev/) | 5.4 | Lightning-fast build tool & dev server |

### 3D & Animation

| Technology | Version | Purpose |
|---|---|---|
| [Three.js](https://threejs.org/) | 0.168 | 3D rendering engine |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 8.17 | React renderer for Three.js |
| [React Three Drei](https://github.com/pmndrs/drei) | 9.120 | R3F helper components |
| [React Three Rapier](https://github.com/pmndrs/react-three-rapier) | 1.5 | Physics simulation (Rapier WASM) |
| [React Three Postprocessing](https://github.com/pmndrs/react-postprocessing) | 2.16 | Post-processing effects |
| [GSAP](https://greensock.com/gsap/) | 3.12 | Professional animation library |

### UI & Utilities

| Technology | Version | Purpose |
|---|---|---|
| [React Icons](https://react-icons.github.io/react-icons/) | 5.3 | Icon library |
| [React Fast Marquee](https://www.react-fast-marquee.com/) | 1.6 | Smooth marquee component |
| [Vercel Analytics](https://vercel.com/analytics) | 1.4 | Web analytics |

---

## 📁 Project Structure

```
ThreeDPortfolio/
├── public/                  # Static assets (models, textures, images)
├── src/
│   ├── assets/              # Local images & media
│   ├── components/
│   │   ├── Character/       # 3D animated character model
│   │   ├── styles/          # Component-scoped CSS
│   │   ├── utils/           # Reusable utility components
│   │   ├── About.tsx        # About section
│   │   ├── Career.tsx       # Timeline / career section
│   │   ├── Contact.tsx      # Contact form & social links
│   │   ├── Cursor.tsx       # Custom cursor logic
│   │   ├── Landing.tsx      # Hero / landing section
│   │   ├── Loading.tsx      # Loading screen
│   │   ├── MainContainer.tsx# Page layout orchestrator
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── TechStack.tsx    # Physics-based 3D tech showcase
│   │   ├── WhatIDo.tsx      # Services / skills overview
│   │   └── Work.tsx         # Projects carousel
│   ├── context/
│   │   └── LoadingProvider.tsx  # Global loading state
│   ├── data/
│   │   ├── portfolioData.ts     # Portfolio content (projects, career, contact)
│   │   └── boneData.ts          # 3D character bone mapping
│   ├── types/               # Shared TypeScript interfaces
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mmpbrother94/ThreeDPortfolio.git

# 2. Navigate into the project
cd ThreeDPortfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on every save.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Starts Vite dev server with HMR |
| Build | `npm run build` | Type-checks + bundles for production |
| Preview | `npm run preview` | Serves the production build locally |
| Lint | `npm run lint` | Runs ESLint across all source files |

---

## 🏗️ Featured Projects

### 🧠 Brain Tumor Detector
> AI-powered medical imaging tool that identifies brain tumors using deep learning.

**Stack:** Python · OpenCV · TensorFlow

---

### ♻️ TrashMorph *(Co-Founder)*
> Smart waste management platform that gamifies recycling and connects communities.

**Stack:** JavaScript · Node.js · MongoDB

---

### 💰 Gringotts FinTech
> Full-stack fintech platform offering digital financial services and dashboards.

**Stack:** React · Node.js · Express

---

### 🌾 FarmFlow
> Precision agriculture web app helping farmers optimize crop planning and resource usage.

**Stack:** Django · Python · JavaScript

---

## 🏆 Career Highlights

```
🚀  Co-Founder         TrashMorph                — Building sustainable waste-tech solutions
🔬  Research Intern    NIT Rourkela              — AI/ML research in a top-tier NIT
💼  Intern             SDI Bhubaneswar           — Industry experience in software development
🥇  Hackathon Winner   IIIT Bhubaneswar          — Competitive problem-solving & innovation
🎓  B.Tech CSE-AI      GIFT Bhubaneswar (2021–25) — Specialization in Artificial Intelligence
```

---

## 📬 Contact

<div align="center">

| Platform | Link |
|---|---|
| 💼 LinkedIn | [manoharkumarsah](https://www.linkedin.com/in/manoharkumarsah/) |
| 🐙 GitHub | [mmpbrother94](https://github.com/mmpbrother94) |
| 📧 Email | [manoharkumar94712@gmail.com](mailto:manoharkumar94712@gmail.com) |
| 📺 YouTube | [PlayStorePioneers571](https://youtube.com/@PlayStorePioneers571) |
| 📸 Instagram | [manohar0112553](https://instagram.com/manohar0112553) |

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Manohar Kumar Sah](https://github.com/mmpbrother94)**

*If you found this project inspiring, consider giving it a ⭐ on GitHub!*

</div>
