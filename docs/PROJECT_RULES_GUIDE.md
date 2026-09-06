# 📚 Guide Complet des 28 Règles du Projet Picsell.agency

**Date :** 2026-09-06  
**Branche Source :** `aistudio/epic-1-review-and-validation`  
**Optimisé pour :** Agents IA & Développeurs

---

## 📖 Table des Matières

1. [Technology Stack (5 règles)](#1-technology-stack--5-règles)
2. [Brand Metaphor (3 règles)](#2-brand-metaphor--3-règles)
3. [Language & Naming (3 règles)](#3-language--naming--3-règles)
4. [Framework Rules (3 règles)](#4-framework-rules-nextjs-16--react-19--3-règles)
5. [Animation & Performance (5 règles)](#5-animation--performance--5-règles)
6. [State Management (2 règles)](#6-state-management--2-règles)
7. [Quality & Testing (3 règles)](#7-quality--testing--3-règles)
8. [Critical Rules (5 règles)](#8-critical-rules--5-règles)
9. [Workflow & Organization (2 règles)](#9-workflow--organization--2-règles)

**Total : 28 règles**

---

## 1. Technology Stack (5 règles)

### Règle 1.1 : Framework & Runtime
**📌 OBLIGATION ABSOLUE**

```
Framework: Next.js 16.1.5 (App Router, pas Pages Router)
Runtime: React 19.2.3 (dernière version stable)
Language: TypeScript 5 (Strict mode obligatoire)
```

**Pourquoi :**
- Next.js 16 = 60% plus rapide que 14 (Turbopack)
- React 19 = optimisations mémoire pour animations GSAP
- TypeScript strict = zéro runtime errors surprises

**Non-Conforme :**
```typescript
// ❌ INTERDIT: Next.js 14
// ❌ INTERDIT: React 18
// ❌ INTERDIT: JavaScript vanilla
```

---

### Règle 1.2 : Styling & CSS-in-JS
**📌 OBLIGATION ABSOLUE**

```
Styling: Tailwind CSS v4 (@tailwindcss/postcss)
Architecture: Variables de thème CSS (pas BEM/SMACSS)
Preprocessor: PostCSS (configuration intégrée Next.js)
```

**Justification :**
- Tailwind v4 = tokens variables + runtime très optimisé
- PostCSS = 0 dépendances externes (Sass/LESS bannies)
- Variables CSS = dark mode natif via `prefers-color-scheme`

**Exemple conforme :**
```css
/* ✅ CONFORME: Variables de thème */
:root {
  --color-primary: #00F5FF;
  --color-gold: #D4AF37;
}

/* ✅ CONFORME: Classe Tailwind */
<div className="bg-[--color-primary] text-xs"/>
```

---

### Règle 1.3 : Animation Engine (Priorité Stricte)
**📌 OBLIGATION ABSOLUE**

```
Tier 1 (Priorité Maximale):
  ✅ GSAP v3.14 (@gsap/react hook)
  ✅ ScrollTrigger (pour scroll-bound)
  ✅ Lenis v1.3 (smooth scroll)

Tier 2 (Transitions UI Seulement):
  ⚠️ Framer Motion v12 (drawers, toggles, nav)

Tier 3 (Interdit pour Engrenages):
  ❌ Lottie (décodage JSON trop lent)
  ❌ Three.js (WebGL overkill)
  ❌ Anime.js (conflit avec GSAP)
```

**Raison :**
- GSAP = moteur physique GPU-native (60 FPS garanti)
- ScrollTrigger = synchronisation pixel-perfect avec scroll
- Lenis = lissage natif, zéro décalage avec ticker GSAP

**Configuration Obligatoire :**
```typescript
// src/lib/gsap-config.ts
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.registerPlugin(ScrollTrigger);
```

---

### Règle 1.4 : State Management (Hiérarchie Stricte)
**📌 OBLIGATION ABSOLUE**

```
Niveau 1 (React Context):
  ✅ SettingsContext.tsx (studio presets: Sally/Amelia/Winston)
  ✅ Animation states (isSpinning, currentSpeed)
  ✅ Mode batterie (isLowPowerMode)

Niveau 2 (Zustand - Optional):
  ⚠️ Stores isolés pour page-level state
  ⚠️ Atomicité maximale (1 concern = 1 store)

Niveau 3 (Local State):
  ✅ useState pour UI state transitoire (hover, focus)
```

**Ne JAMAIS faire :**
```typescript
// ❌ INTERDIT: Redux (trop lourd pour cette taille)
// ❌ INTERDIT: MobX (trop magique)
// ❌ INTERDIT: Context pour états fréquents (perf)
```

---

### Règle 1.5 : Content & Templating
**📌 OBLIGATION ABSOLUE**

```
Format: MDX local (@next/mdx, @mdx-js/react)
Stockage: /src/content/**/*.mdx (co-located avec app)
Parsing: Compilé à build-time (zéro bundle overhead)
```

**Cas d'Usage :**
- Documentation technique inline
- Études de cas Garde-Temps
- Blog technique (futur)

**Non-Conforme :**
```typescript
// ❌ INTERDIT: MDX chargé dynamiquement
// ❌ INTERDIT: Markdown vanilla (pas JSX)
```

---

## 2. Brand Metaphor (3 règles)

### Règle 2.1 : Concept "Inside the Engine"
**📌 RÈGLE D'OR - IDENTITÉ COMPLÈTE**

```
Métaphore: Horlogerie de luxe
Symbole Principal: Engrenage noir central (Moteur IA)
Environnement Secondaire: 4 engrenages satellites colorés

Palette:
  🖤 Moteur IA Central: #0A0A0A (noir profond)
  🌐 Dev Web/Mobile: #00F5FF (cyan électrique)
  📈 Marketing/AEO: #FF8A00 (orange vibrant)
  ⚡ Automatisation: #00FF66 (vert émeraude)
  📊 Data/IT: #9D00FF (violet électrique)

Matériau:
  Polished Steel: #E5E4E2 (engrenages secondaires)
  Brushed Gold: #D4AF37 (accents luxe)
  Obsidian: #050505 (fond principal)
```

**Impact Visuel :**
- **Symétrie Radiale :** Moteur central = point d'équilibre
- **Mouvements Synchrones :** Engrenages interlockés = synchronisation (métaphore agence)
- **Dynamique Cinématique :** Rotation ≈ productivité & flux de travail

**Interdictions Absolues :**
```
❌ PAS de 5ème engrenage ou pilier supplémentaire
❌ PAS d'asymétrie radiale intentionnelle
❌ PAS de palette autre que celle définie
❌ PAS d'animation "loose" ou "cheap-looking"
```

---

### Règle 2.2 : Paramètrisation Centralisée (Source Unique de Vérité)
**📌 OBLIGATION ABSOLUE**

```
Fichier: src/config/gears.config.ts
Contenu Obligatoire:
  - SatelliteGearConfig (4 piliers)
  - CentralGearConfig (moteur IA)
  - Ratios de dents & vitesses
  - Palettes de couleurs
  - Coordonnées (x, y, radius)
  - Textures & labels

Sous-Aucune Circonstance:
  ❌ Coder en dur une couleur d'engrenage
  ❌ Mettre un ratio de dents dans un composant React
  ❌ Modifier une position via CSS (importer depuis config)
```

**Exemple Conforme :**
```typescript
// ✅ CONFORME: Importer depuis gears.config.ts
import { SATELLITE_GEARS } from "@/config/gears.config";

const MarketingGear = () => {
  const config = SATELLITE_GEARS.find(g => g.id === "marketing");
  return <circle cx={config.center.x} fill={config.color} />;
};

// ❌ INTERDIT: Hardcoder la couleur
const BadGear = () => <circle fill="#FF8A00" />; // 🚫 NON!
```

---

### Règle 2.3 : Symbologie IA = Moteur Central Noir
**📌 RÈGLE D'OR**

```
Visuel: Engrenage noir au centre (36 dents, ratio 1.5)
Rôle Conceptuel: 
  - "Cœur propulseur de l'agence"
  - Alimente & accélère les 4 piliers
  - IA = catalyseur universel

Animations Associées:
  ✅ Rotation centrale constante (vitesse de base)
  ✅ Tous les satellites turn-on au contact du central
  ✅ Synchronisation précise (pas de glissements)

Contexte Business:
  "Toutes nos solutions sont propulsées par une IA intelligente"
  → Moteur central = cette IA incarnée visuellement
```

---

## 3. Language & Naming (3 règles)

### Règle 3.1 : Nommage des Fichiers
**📌 OBLIGATION ABSOLUE**

```
Composants React:
  Format: PascalCase.tsx
  Exemples:
    ✅ GearEngine.tsx
    ✅ SettingsDrawer.tsx
    ✅ HeroMechanicalEngine.tsx
    ❌ gear-engine.tsx (interdit)
    ❌ gearEngine.tsx (interdit pour composants)

Utilitaires & Config:
  Format: kebab-case.ts ou camelCase.ts
  Exemples:
    ✅ gears.config.ts
    ✅ gsap-config.ts
    ✅ useIsMounted.ts (hooks)
    ❌ GearsConfig.ts (conflit React)

Interfaces & Types:
  Format: PascalCase
  Exemples:
    ✅ interface GearConfig {}
    ✅ type ServiceModuleKey = "marketing" | ...
    ❌ interface gear_config {} (interdit)
```

**Raison Ergonomique :**
- PascalCase pour composants = distinction automatique (éditeur)
- kebab-case pour utils = lisibilité URL-friendly
- Interfaces PascalCase = convention TypeScript standard

---

### Règle 3.2 : Imports & Alias Path
**📌 OBLIGATION ABSOLUE**

```
Configuration tsconfig.json:
  "paths": {
    "@/*": ["./src/*"]
  }

Syntaxe Obligatoire:
  ✅ import { GearEngine } from "@/components/animations/GearEngine";
  ✅ import { gears } from "@/config/gears.config";
  ✅ import { useIsMounted } from "@/hooks/useIsMounted";
  
  ❌ import from "../../../components/..." (relative)
  ❌ import from "./src/..." (absolute sans @)
```

**Avantages :**
- Imports lisibles et traçables
- Refactoring automatique si répertoires bougent
- Éditeur autocomplete meilleur
- CI/CD detection des imports cycliques

---

### Règle 3.3 : Typage Strict (Zero `any`)
**📌 OBLIGATION ABSOLUE**

```
tsconfig.json:
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "strictPropertyInitialization": true

Principes:
  ❌ JAMAIS de `any`
  ✅ Utiliser `unknown` + type guard si incertain
  ✅ Définir interfaces explicites pour tous les props
  ✅ Typer les callbacks et retours de fonction

Exemple Conforme:
  interface GearProps {
    id: ServiceModuleKey; // Énumération stricte
    color: string; // Hex color validation elsewhere
    onRotate?: (angle: number) => void; // Callback typé
  }

Exemple Non-Conforme:
  const BadComponent = (props: any) => {}; // ❌ INTERDIT
```

---

## 4. Framework Rules (Next.js 16 & React 19) (3 règles)

### Règle 4.1 : Server Components par Défaut
**📌 OBLIGATION ABSOLUE**

```
Principe:
  Tout composant est Server Component SAUF s'il a besoin de:
  - Hooks React (useState, useEffect, useRef, useContext)
  - Interactions utilisateur (onClick, onChange)
  - Événements DOM
  - Browser-only APIs

Pattern Correct:
  // ✅ Server Component (par défaut)
  export default function Homepage() {
    return <HeroSection />;
  }

  // ✅ Client Component (explicite)
  "use client";
  import { useState } from "react";
  export default function SettingsDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return ...;
  }

Antipattern:
  ❌ "use client" sur tous les fichiers
  ❌ Oublier "use client" sur composants interactifs
  ❌ Importer Browser APIs dans composants serveur
```

**Bénéfices :**
- Bundle client réduit de ~40%
- Code sensible (tokens, configs) reste serveur
- Hydration plus rapide
- Streaming SSR automatique

---

### Règle 4.2 : Image Optimization (next/image Obligatoire)
**📌 OBLIGATION ABSOLUE POUR IMAGES**

```
Obligatoire:
  ✅ import Image from "next/image";
  ✅ <Image src="" width={} height={} />
  ✅ Toutes les images avec srcSet automatique

Attributs Requis:
  - src: string (path absolu)
  - width: number (pixel exact)
  - height: number (pixel exact)
  - alt: string (description courte)
  - priority?: boolean (pour LCP elements)

Exemple:
  <Image
    src="/assets/hero-gear.svg"
    width={800}
    height={600}
    alt="Central gear mechanism"
    priority={true} // Hero element → LCP critical
  />

Interdit:
  ❌ <img /> HTML natif
  ❌ srcSet manuel
  ❌ CSS background-image pour photos
```

**Impact :**
- WebP automatique + AVIF fallback
- Lazy loading natif (économie bande passante)
- CLS = 0 (dimensions pré-calculées)

---

### Règle 4.3 : SEO & Metadata
**📌 OBLIGATION ABSOLUE**

```
Chaque page/route doit définir:

1. Métadata standard:
  export const metadata: Metadata = {
    title: "Picsell.agency | Luxury Tech Precision",
    description: "...",
    keywords: ["..."],
    openGraph: { ... }
  };

2. Schema.org (JSON-LD):
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Picsell"
    }
  </script>

3. Accessibility:
  ✅ lang="fr" sur <html>
  ✅ Heading hierarchy (h1 > h2 > h3)
  ✅ Images avec alt text

Raison:
  - Indexation par moteurs génératifs (Perplexity, Claude, ChatGPT)
  - Partage social opengraph
  - Crédibilité organique & SEO
```

---

## 5. Animation & Performance (5 règles)

### Règle 5.1 : useGSAP Hook (Obligatoire pour GSAP)
**📌 OBLIGATION ABSOLUE**

```
Importation:
  import { useGSAP } from "@gsap/react";
  import { gsap } from "@/lib/gsap-config";

Pattern Obligatoire:
  "use client";
  import { useRef } from "react";
  import { useGSAP } from "@gsap/react";

  export const HeroGears = () => {
    const containerRef = useRef(null);

    useGSAP(
      () => {
        // Animation logic here
        gsap.to(containerRef.current, {
          rotation: 360,
          duration: 2,
          repeat: -1,
        });
      },
      { scope: containerRef } // ← Isolé au DOM
    );

    return <div ref={containerRef}>{/* ... */}</div>;
  };

Cleanup Automatique:
  ✅ useGSAP gère revert() au unmount
  ✅ Prévient memory leaks
  ✅ Zéro ScrollTrigger zombies

Antipattern:
  ❌ gsap.to() directement dans useEffect
  ❌ Oublier cleanup gsap.context().revert()
  ❌ Sans { scope: ref } → affects DOM global
```

**Pourquoi :**
- useGSAP est aware de React Strict Mode
- Cleanup automatique = pas de duplicates
- Scoping = animations isolées par instance

---

### Règle 5.2 : Lenis + GSAP Synchronization
**📌 OBLIGATION ABSOLUE**

```
Configuration Requise:
  // src/lib/gsap-config.ts
  import { Lenis } from "lenis";
  
  const lenis = new Lenis({ /* options */ });
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Synchronisation au frame
  });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh(); // Après Lenis init

Conséquences:
  ✅ Scroll lissé = animations scroll-bound parfaites
  ✅ 60 FPS maintenu même avec scroll rapide
  ✅ Aucun jank ou tearing visuel

Non-Conforme:
  ❌ Lenis seul (sans GSAP sync)
  ❌ requestAnimationFrame manuel dans lien Lenis
  ❌ ScrollTrigger sans Lenis integration
```

---

### Règle 5.3 : Battery & Low-Power Mode Awareness
**📌 OBLIGATION ABSOLUE**

```
Contexte Fourni:
  import { useContext } from "react";
  import { SettingsContext } from "@/context/SettingsContext";

  const AnimatedGear = () => {
    const { isLowPowerMode, batteryLevel } = useContext(SettingsContext);

    useGSAP(() => {
      if (isLowPowerMode) {
        gsap.globalTimeline.timeScale(0.5); // 50% speed
      }
    }, { dependencies: [isLowPowerMode] });
  };

Règles:
  ✅ Interroger isLowPowerMode avant boucles d'animation lourdes
  ✅ Réduire particules, glows, blur effects si batterie faible
  ✅ Désactiver motion si prefers-reduced-motion détecté

Implémentation Automatisée:
  ❌ Pas d'approche "hope for the best"
  ✅ Tests sur iPhone avec Low Power enabled
```

---

### Règle 5.4 : Zero Heavy Calculations in Render
**📌 OBLIGATION ABSOLUE**

```
Interdit dans render:
  ❌ Math.sin(), Math.cos(), Math.sqrt() (trigonométrie)
  ❌ Calculs de physics à chaque frame
  ❌ Transformations matrices
  ❌ Object creation / spread operators dans render

Correct:
  ✅ useMemo pour prédéfinir transformations
  ✅ Déléguer à GSAP (GPU-native)
  ✅ Utiliser transform: translateZ() plutôt que top/left

Exemple:
  // ✅ Conforme: GSAP gère l'animation
  gsap.to(element, {
    rotation: angle,
    transformOrigin: "center",
    duration: 0.5
  });

  // ❌ Non-conforme: Calcul dans render
  const badRender = () => {
    const angle = Math.atan2(y - centerY, x - centerX);
    return <div style={{ transform: `rotate(${angle}rad)` }} />;
  };
```

---

### Règle 5.5 : 60 FPS Non-Negotiable
**📌 OBLIGATION ABSOLUE**

```
Cible de Performance:
  ✅ 60 FPS stable sur Hero section
  ✅ 120 FPS sur écrans ProMotion (iPad Pro)
  ✅ CLS (Cumulative Layout Shift) = 0
  ✅ INP (Interaction to Next Paint) < 100ms

Validation:
  1. Chrome DevTools → Performance tab
  2. Lighthouse Audit (target: >90)
  3. Real device testing (iPhone + Android)

Red Flags (Refactoring Requis):
  ⚠️ Jank during scroll
  ⚠️ Animation stutters on large devices
  ⚠️ Lighthouse <85 performance score
```

---

## 6. State Management (2 règles)

### Règle 6.1 : SettingsContext pour Studio Presets
**📌 OBLIGATION ABSOLUE**

```
Fichier: src/context/SettingsContext.tsx

Responsabilités:
  - Sally: Finition & UI (colors, filters)
  - Amelia: Dynamique & Animations (speed, smoothing)
  - Winston: Architecture & Télémétrie (debug, logging)

État Managé:
  interface SettingsState {
    selectedPreset: "Sally" | "Amelia" | "Winston";
    gearSpeed: number; // 0.5 to 2.0
    isLowPowerMode: boolean;
    soundEnabled: boolean;
    debugOverlay: boolean;
  }

Utilisé Par:
  ✅ Components/animations pour adapter behavior
  ✅ SettingsDrawer pour UI contrôles
  ✅ Tests pour reproductibilité

Ne JAMAIS:
  ❌ Dupliquer cet état dans Zustand
  ❌ Persister dans localStorage automatiquement
  ❌ Changer trop souvent (cause re-renders)
```

---

### Règle 6.2 : Zustand pour Page-Level Atomicity
**📌 OPTIONNEL MAIS RECOMMANDÉ**

```
Usage:
  À utiliser SEULEMENT pour states isolés
  Ne remplace PAS Context API

Exemple d'Utilisation:
  // store/portfolioStore.ts
  import { create } from "zustand";

  interface PortfolioState {
    selectedCase: string | null;
    setSelectedCase: (id: string) => void;
  }

  export const usePortfolioStore = create<PortfolioState>(set => ({
    selectedCase: null,
    setSelectedCase: id => set({ selectedCase: id })
  }));

Principe:
  ✅ 1 concern = 1 store
  ✅ Atomicité maximale
  ✅ Pas de gigantic Redux-like megastore
```

---

## 7. Quality & Testing (3 règles)

### Règle 7.1 : Build Validation Stricte
**📌 OBLIGATION ABSOLUE AVANT COMMIT**

```
Commandes Requises:
  1. npm run build
     → Compilation TypeScript strict
     → Aucune erreur warning acceptée
  
  2. npm run lint
     → ESLint check
     → Format check (Prettier)

Exit Codes:
  ✅ 0 = Success (prêt pour commit)
  ❌ Non-0 = Reject build

Exemple Pre-Commit Hook:
  "scripts": {
    "prebuild": "npm run lint",
    "build": "next build"
  }

Non-Conforme:
  ❌ Commit avec warnings TypeScript
  ❌ Build qui timeout > 5min
  ❌ Production build qui fail
```

---

### Règle 7.2 : Accessibility (WCAG AA Standard)
**📌 OBLIGATION ABSOLUE**

```
Contrastes Textuels:
  ✅ Minimum 4.5:1 sur fond sombre (#050505)
  ✅ Tester avec axe DevTools

Interactions:
  ✅ Tous les boutons & toggles = aria-label
  ✅ Keyboard navigation (Tab, Enter, Escape)
  ✅ Focus visible ring

Exemple Conforme:
  <button
    onClick={toggle}
    aria-label="Open settings panel"
    className="focus-visible:ring-2"
  >
    ⚙️ Settings
  </button>

Test Automatisé:
  npm install -D @axe-core/react
  // Dans tests: render(<App />); axe check
```

---

### Règle 7.3 : Web Vitals Target
**📌 OBLIGATION ABSOLUE**

```
Lighthouse Score (Desktop):
  Performance: >= 90
  Accessibility: >= 90
  Best Practices: >= 90
  SEO: >= 90

Core Web Vitals:
  LCP (Largest Contentful Paint): < 1.2s
  INP (Interaction to Next Paint): < 100ms
  CLS (Cumulative Layout Shift): = 0

Validation:
  vercel.com analytics dashboard
  PageSpeed Insights
  Local audit: `npm run build && npx lighthouse`

Red Flags:
  ⚠️ LCP > 2.5s → SVG optimization needed
  ⚠️ CLS > 0.1 → layout calculations problematic
  ⚠️ INP > 200ms → JavaScript blocking main thread
```

---

## 8. Critical Rules (5 règles)

### Règle 8.1 : NO Framer Motion for Gears ❌
**📌 INTERDICTION ABSOLUE**

```
Contexte:
  ✅ Framer Motion = parfait pour UI transitions
  ❌ Framer Motion = trop lent pour engrenages interlockés

Raison Technique:
  - Framer Motion render-time interpolation
  - GSAP = GPU-native transforms (3x plus rapide)
  - ScrollTrigger requires GSAP (pas de Framer Motion equiv)

Conforme:
  ✅ GSAP ScrollTrigger pour gear rotations
  ✅ Framer Motion pour drawer animations
  ✅ Framer Motion pour card hover states

Non-Conforme:
  ❌ Framer Motion.animate({ rotate: 360 }) pour gears
  ❌ Combiner Framer Motion + GSAP sur même element
```

---

### Règle 8.2 : Exactly 4 Pillars + 1 Central Engine
**📌 INTERDICTION ABSOLUE**

```
Architecture Figée:
  ✅ Moteur Central: 1 engrenage noir (36 dents)
  ✅ Satellites: 4 engrenages colorés (ratios différents)
  ❌ Pas de 5ème pilier
  ❌ Pas de variantes visuelles des 4

Les 4 Piliers:
  1. 🌐 Dév Web/Mobile (cyan)
  2. 📈 Marketing/AEO (orange)
  3. ⚡ Automatisation (vert)
  4. 📊 Data/IT (violet)

Raison:
  - Symbolique horlogère = équilibre 4 forces
  - Brand consistency = reconnaissance immédiate
  - Scaling: ajouter du contenu, pas des engrenages
```

---

### Règle 8.3 : NO kebab-case Component Names
**📌 INTERDICTION ABSOLUE**

```
Interdit:
  ❌ gear-engine.tsx
  ❌ hero-section.tsx
  ❌ settings-drawer.tsx

Conforme:
  ✅ GearEngine.tsx
  ✅ HeroSection.tsx
  ✅ SettingsDrawer.tsx

Raison:
  - Convention React universelle (PascalCase = components)
  - Outils editor autocomplete (Cmd/Ctrl + Space)
  - Imports lisibles instantanément

Note:
  kebab-case OK pour:
    ✅ gsap-config.ts (utils)
    ✅ gears.config.ts (data)
    ❌ JAMAIS pour composants React
```

---

### Règle 8.4 : NO Hardcoded Gear Values
**📌 INTERDICTION ABSOLUE**

```
Interdit:
  ❌ <circle cx="200" cy="200" />
  ❌ fill="#D4AF37" (couleur en dur)
  ❌ rotation={360} sans config

Conforme:
  ✅ import { SATELLITE_GEARS } from "@/config/gears.config"
  ✅ const gear = SATELLITE_GEARS.find(g => g.id === "marketing")
  ✅ <circle cx={gear.center.x} fill={gear.color} />

Centralisation:
  Toute modification de paramètre gear = 1 seul fichier
  → src/config/gears.config.ts
  → 0 chasse aux valeurs en dur

Avantage:
  ✅ Scaling facile (ajout nouveaux satellites)
  ✅ A/B testing presets (Sally/Amelia/Winston)
  ✅ One source of truth pour design
```

---

### Règle 8.5 : NO Secrets in Client Code
**📌 INTERDICTION ABSOLUE**

```
Interdit:
  ❌ API_KEY dans .env.local exposé
  ❌ Database credentials en frontend
  ❌ Private tokens en JavaScript

Conforme:
  ✅ API_KEY dans .env.local (serverOnly)
  ✅ Route Handlers (/api/...) pour secrets
  ✅ Environment variables préfixées NEXT_PUBLIC_ uniquement si safe

Exemple:
  // .env.local (non exposé)
  DATABASE_SECRET=super_secret_xxx

  // .env.local (exposé via NEXT_PUBLIC_)
  NEXT_PUBLIC_ANALYTICS_ID=ua-xxxxx

  // src/app/api/stripe/route.ts (serveur)
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
```

---

## 9. Workflow & Organization (2 règles)

### Règle 9.1 : Source of Truth Documentation
**📌 OBLIGATION ABSOLUE**

```
Fichiers Canoniques:
  ✅ _bmad-output/planning-artifacts/prd.md
  ✅ _bmad-output/planning-artifacts/architecture.md
  ✅ _bmad-output/planning-artifacts/epics.md
  ✅ _bmad-output/planning-artifacts/project-context.md
  ✅ _bmad-output/planning-artifacts/ux-design-specification.md

Versions Périmées à IGNORER:
  ❌ docs/prd.md (backup, pas à jour)
  ❌ docs/architecture.md (deprecated)
  ❌ Commentaires inline (rongés par le temps)

Procédure:
  1. Lire la source canonique AVANT implémenter
  2. Commiter avec trace: "ref: epics.md#L42"
  3. Mettre à jour source de vérité après change
```

---

### Règle 9.2 : Git Workflow & BMAD Methodology
**📌 OBLIGATION ABSOLUE**

```
Branches:
  ✅ main (production, synchronized origin/main)
  ✅ Feature branches (feat/*, claude/*, aistudio/*)
  ❌ Never push directly to main

Commits:
  Format: type(scope): message
  ✅ "feat(animations): implement gear scroll trigger"
  ✅ "fix(ux): resolve CLS in hero section"
  ✅ "docs(project-context): update rules for Lenis"

PR Template:
  - Description claires des changes
  - Référence PRD/Epics
  - Links aux tickets/issues
  - Screenshots si UI changes

CI/CD:
  ✅ ESLint check obligatoire
  ✅ TypeScript compilation
  ✅ Build production test
  ✅ Accessibility audit (axe)
```

---

## 📊 Résumé par Criticité

### 🔴 RED (Showstoppers - Blocker)
- [1.1] TypeScript 5 Strict Mode
- [2.1] Brand Metaphor (4 pillars only)
- [2.2] Gears Configuration Centralization
- [5.1] useGSAP Hook Pattern
- [5.5] 60 FPS Non-Negotiable
- [7.1] Build Validation
- [8.1-8.5] All Critical Rules

### 🟠 ORANGE (High Priority - Must Comply)
- [1.2] Tailwind CSS v4
- [1.3] GSAP + ScrollTrigger + Lenis
- [3.1-3.3] Naming Conventions
- [4.1-4.3] Framework Rules
- [5.2-5.4] Performance Optimization
- [6.1-6.2] State Management

### 🟡 YELLOW (Medium Priority - Strongly Recommended)
- [1.4] Zustand Setup
- [1.5] MDX Content
- [7.2-7.3] Accessibility & Web Vitals
- [9.1-9.2] Documentation & Workflow

---

## 🎯 Checklist d'Onboarding Agent IA

Avant tout développement:

- [ ] Lire ce guide complet
- [ ] Comprendre métaphore horlogère
- [ ] Vérifier versions tech stack
- [ ] Tester `npm run build` localement
- [ ] Consulter gears.config.ts
- [ ] Valider contre project-context.md
- [ ] Implémenter avec rules en tête
- [ ] Passer lint + build avant commit
- [ ] Documenter decisions dans PR

---

**Dernière mise à jour :** 2026-09-06  
**Branche Source :** `aistudio/epic-1-review-and-validation`  
**Pour :** Agents IA, Développeurs, Auditeurs BMAD
