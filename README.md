# Google Cloud Community Day Kochi 2026 — Frontend Reconstruction

Faithful frontend reconstruction of the official [CCD Kochi 2026](https://ccd.gdgcloudkochi.com/) website by GDG Cloud Kochi.

## 🚀 Overview

This repository contains the reconstructed frontend application for **Google Cloud Community Day Kochi 2026** (*At the speed of thought · ചിന്തയുടെ വേഗതയിൽ*).

### ✨ Features & Coverage

* **Complete 4-Phase Journey Timeline:**
  * **06:00 · Fort Kochi:** *Think it at dawn* with Chinese fishing nets sunrise vector artwork.
  * **12:00 · Backwaters:** *Build it by noon* architecture & AI agent scene.
  * **16:00 · The Race:** *Ship it before the tide turns* Vallam Kali (snake boat) racing scene.
  * **20:00 · Nightfall:** *Scale it by nightfall* Kochi metro & bridge night skyline scene.
* **Onam Pookkalam Preloader:**
  * Procedurally animated SVG floral carpet with countdown and stage reveal bands.
  * Persistent session caching (`ccd26:seen`) so repeated navigations remain instantaneous.
* **Complete Subpages:**
  * `/speakers`: 17 announced speakers with track filters and retro Mac window badges.
  * `/team`: 33-member GDG Cloud Kochi crew cards with shuffle deck feature.
  * `/contributors`: Community Contributor Wall with rolling ribbons and live contributor API.
  * `/partners`: Community partners and sponsor tier showcase.
  * `/second-thought` & `/cloud-shell`: Interactive Easter egg console terminals.
* **Interactive Elements:**
  * Thought / Idea Generator: Generates downloadable boarding pass cards from user prompts.
  * Kathakali eye-tracking widget: Vector pupil tracking cursor movement dynamically.
  * ScrambleText and bilingual Malayalam-English marquee ticker.
* **Mobile & Performance Optimization:**
  * 100% pure vector SVG artwork and CSS art (zero heavy raster textures).
  * Hardware-accelerated transitions via GPU composite layers (`will-change: transform`).
  * Full responsive support across desktop (1440px), laptop (1280px), tablet (1024px, 768px), and mobile (390px, 360px).

## 🛠️ Getting Started

### Prerequisites
* Node.js (v18+)
* npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run preview
```
