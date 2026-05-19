---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
lastStep: 14
alignedBrandGuideline: "docs/picsell-brand-guideline.md v1.0"
alignedPrd: "docs/prd.md (2026-05-19)"
lastUpdated: "2026-05-19"
inputDocuments:
  - "docs/prd.md"
  - "docs/picsell-brand-guideline.md"
  - "docs/product-brief-picsell.agency-2026-01-27.md"
  - "docs/market-Premium-AI-Agencies-research-2026-01-27.md"
  - "docs/brainstorming-session-2026-01-26.md"
---

# UX Design Specification picsell.agency

**Author:** David  
**Date:** 2026-01-27  
**Réaligné brand guideline :** 2026-05-19 (Sally / UX)

> **Référence normative visuelle :** [`docs/picsell-brand-guideline.md`](picsell-brand-guideline.md) v1.0  
> **Référence produit :** [`docs/prd.md`](prd.md) — aligné brand le 2026-05-19

---

## Executive Summary

### Project Vision

Picsell Agency est un **accélérateur de vente digital** : chaque pixel doit convertir. La vitrine incarne **« Precision in every pixel »** — rigueur BMAD, transparence technique (« Inside the Engine ») et un design system **lumineux, chaleureux et accessible** (palette officielle Picsell), à l'opposé des esthétiques tech froides ou du luxe sombre générique.

La métaphore **horlogerie numérique** (engrenages, précision mécanique) reste le fil narratif des animations — les **couleurs et la typo** suivent exclusivement le brand guideline.

### Target Users

- **James (Client International — Priority 80/20)** : Qualité Enterprise, stack moderne, fiabilité prouvée. Reconnaît la tagline et la rigueur visuelle dès la première seconde.
- **Jean-Luc (Dirigeant PME Locale)** : ROI clair, trois piliers lisibles, ton direct sans jargon creux.

### Key Design Challenges

- **Équilibre précision / chaleur** : Palette lumineuse sans paraître « cheap » ; crédibilité par le chiffre, pas par l'obscurité.
- **Navigation duale** : Tunnel Upwork (James) vs formulaire direct (Jean-Luc), visuellement distincts.
- **Performance 60 FPS** : Animations scroll-bound sans sacrifier LCP < 1,5 s.

### Design Opportunities

- **Hero « Precision Engine »** : Engrenages SVG aux **couleurs du logo** (bleu, turquoise, orange, jaune), synchronisés au scroll.
- **Glass-Engine** : Révéler code/schémas sous les services — preuve technique, pas gadget décoratif.
- **Tagline & signature code** : « Precision in every pixel » au hero ; `</> Precision in every pixel` en zones tech (Courier New, turquoise).

---

## Brand Compliance (UX)

Cette section traduit le brand guideline en tokens UX exploitables par Tailwind et les composants.

### Couleurs — tokens site

| Token | Hex | Usage UX |
|-------|-----|----------|
| `picsell-bg-light` | `#F0F2F5` | Fond par défaut, cards, zones de respiration |
| `picsell-bg-dark` | `#080810` | Mode sombre optionnel |
| `picsell-blue` | `#0089D0` | Primaire — titres, liens, boutons principaux |
| `picsell-turquoise` | `#3DBCC7` | Tech, code, liens secondaires sur fond sombre |
| `picsell-orange` | `#F37021` | CTA prioritaires, bordures actives |
| `picsell-yellow` | `#FDB913` | Highlights, soulignements, bordure gauche accent |
| `picsell-black` | `#1A1A1A` | Corps de texte, fonds sombres |

**Hiérarchie d'usage :** 60 % bleu + blanc cassé · 30 % orange + turquoise · 10 % jaune + noir.

**Interdits UX :** orange sur jaune · bleu sur turquoise · blanc sur blanc cassé · dégradés non validés · glassmorphism/glow comme style dominant.

### Typographie

| Rôle | Police | Usage interface |
|------|--------|-------------------|
| Marque | ITC Bauhaus Bold | Logo lockup uniquement — pas sur la même ligne que Montserrat |
| H1–H3 | Montserrat Bold / SemiBold | Titres de page et sections |
| Corps | Open Sans Regular | Paragraphes, descriptions — interlignage 1,5 |
| Code / tech | Courier New | Stack, snippets, signature `</>` |
| Légendes | Glacial Indifference | Captions, métadonnées |
| Pull quotes | Roboto Italic | Citations clients (usage ponctuel) |

**Règle écran :** max **2 familles** visibles simultanément (ex. Montserrat + Open Sans).

### Composants UI — règles brand

| Élément | Spécification |
|---------|---------------|
| CTA primaire | Fond `#F37021` ou `#0089D0`, texte blanc |
| CTA secondaire | Outline bleu sur fond clair |
| `border-radius` | `0` ou `2px` max |
| Bordures accent | Gauche `4px` `#FDB913` sur blocs mise en avant |
| Focus / hover | Changement de couleur/contraste — pas de glow non validé |
| Logo | Couleur sur `#F0F2F5` ; conservé tel quel sur `#080810` |

### Ton microcopy (interface)

- **Précis, direct, humain, ambitieux** — promesses chiffrées.
- ✔ « Lancer mon projet » · « Hire on Upwork » · « Chaque pixel compte. »
- ✘ « N'hésitez pas à nous contacter » · « Solutions adaptées à vos besoins »
- Confirmation formulaire : *« Demande reçue — on vous recontacte sous 24 h. »* (direct, pas métaphore horlogère forcée)

---

## Core User Experience

### Defining Experience

Expérience centrée sur la **conversion mesurable** : l'utilisateur comprend les 3 piliers, voit la preuve (BMAD, ROI, portfolio) et agit via le bon tunnel.

### Platform Strategy

- **Web SPA** (Next.js) — transitions fluides sans rechargement.
- **Desktop-first** pour James ; mobile fluide pour Jean-Luc.
- **Mode clair par défaut** (`#F0F2F5`) ; toggle mode sombre (`#080810`) optionnel.

### Effortless Interactions

- **Glass-Engine** : révélation code/schémas au survol ou tap — lisibilité maximale.
- **Scroll-bound gears** : couleurs logo, 60 FPS, pas d'inertie « laggy ».

### Critical Success Moments

- **Eurêka BMAD** : l'utilisateur comprend que l'IA est supervisée — confiance, pas mystère opaque.
- **Tagline immédiate** : « Precision in every pixel » ancre la promesse contractuelle.

### Experience Principles

1. **Chaque pixel vend** — chaque bloc UI sert un indicateur ou une action.
2. **Transparence** — montrer le moteur (Inside the Engine, Glass-Engine).
3. **Fluidité** — 60 FPS, Core Web Vitals au vert.
4. **Chaleur accessible** — lumineux et professionnel, jamais froid ni générique.

---

## Desired Emotional Response

### Primary Emotional Goals

- **Confiance** — palette cohérente, promesses chiffrées, ton direct.
- **Clarté** — trois piliers visibles, hiérarchie typographique nette.
- **Énergie maîtrisée** — orange/jaune pour l'action, bleu pour la stabilité.

### Emotional Journey Mapping

- **Découverte** : reconnaissance immédiate de la marque (logo, tagline, bleu Picsell).
- **Exploration** : fascination technique via Glass-Engine sans surcharge.
- **Conversion** : certitude — « je sais ce que j'achète et comment vous joindre ».

### Design Implications

- **Akis Studio** — révélation progressive et espace blanc → adapté au fond `#F0F2F5`.
- **Jonas Reymondin** — précision grille et micro-feedback → conservé.
- **Nivora** — profondeur tactile → **adapté** : ombres légères et bordures nettes, **pas** dark luxury + glassmorphism.

### Emotional Design Principles

1. **Précision chaleureuse** — rigueur sans froideur corporate.
2. **Contraste lisible** — texte `#1A1A1A` sur `#F0F2F5` ; blanc sur bleu/orange pour CTA.
3. **Détail intentionnel** — chaque token brand a une fonction (pas de décoration or/acier).

---

## UX Pattern Analysis & Inspiration

### Transferable UX Patterns

**Navigation :**
- Menu minimal, ouverture fluide (Slow Reveal) — fond blanc cassé ou bleu header.
- Progression scroll liée aux engrenages — couleurs quadrant logo.

**Interaction :**
- Glass-Engine reveal — masque/loupe sur schémas techniques.
- Feedback immédiat — états hover/focus par couleur, pas par glow.

**Visuel :**
- **Palette Picsell** — fond clair dominant, accents orange CTA.
- **Typo Montserrat + Open Sans** — hiérarchie claire, pas de serif prestige.

### Anti-Patterns to Avoid

- **Midnight Luxury / or-acier** — hors charte ; remplacé par tokens Picsell.
- **Glassmorphism excessif** — interdit comme langage principal.
- **Serif titres** (Playfair, Cinzel) — remplacés par Montserrat.
- **CTA arrondis** (`rounded-lg`, pills) — max 2 px.
- **Copy flou** — « environ », « peut-être », « n'hésitez pas ».
- **Over-animation** — mouvement permanent qui fatigue.

### Design Inspiration Strategy

**Adopter :** grille suisse (Reymondin) · révélation progressive (Akis) · réactivité pixel (PRD).  
**Adapter :** engrenages → couleurs logo · Glass-Engine → preuve ROI/BMAD.  
**Éviter :** dark mode par défaut · palettes tech froides génériques.

---

## 2. Core User Experience (Detailed)

### 2.1 Defining Experience

« Le site où chaque scroll ajuste un moteur aux couleurs Picsell — et où tu vois la mécanique derrière chaque service. »

### 2.2 User Mental Model

James : fatigue des templates Upwork → Picsell = **partenaire Enterprise mesurable**.  
Jean-Luc : « digital vague » → **trois piliers + chiffres ROI**.

### 2.3 Success Criteria

- Scroll → engrenage : latence imperceptible.
- Glass-Engine : schémas SVG nets, contraste WCAG AA.
- 60 FPS constant sur animations hero.

### 2.4 Novel UX Patterns

- **Scroll-bound Mechanical Feedback** — scroll pilote le moteur visuel.
- **Precision Transitions** — transitions mécaniques fluides (easing custom), fond clair/sombre brand.

### 2.5 Experience Mechanics (Tunnel Consultation)

1. **Initiation** — CTA « Lancer mon projet » (orange) ou « Hire on Upwork » (bleu).
2. **Interaction** — transition fluide vers formulaire, fond `#F0F2F5`, champs Open Sans.
3. **Achèvement** — *« Demande reçue — on vous recontacte sous 24 h. »*

---

## 3. Visual Design Foundation

### 3.1 Color System (Design System Picsell)

**Mode clair (défaut)**

| Rôle | Token | Hex |
|------|-------|-----|
| Background | `picsell-bg-light` | `#F0F2F5` |
| Surface / card | `white` | `#FFFFFF` |
| Text primary | `picsell-black` | `#1A1A1A` |
| Primary | `picsell-blue` | `#0089D0` |
| CTA | `picsell-orange` | `#F37021` |
| Accent border | `picsell-yellow` | `#FDB913` |
| Tech / code | `picsell-turquoise` | `#3DBCC7` |

**Mode sombre (optionnel)**

| Rôle | Hex |
|------|-----|
| Background | `#080810` |
| Text | `#F0F2F5` |
| Accents | mêmes couleurs logo — logo couleur inchangé |

**Engrenages hero (couleurs logo)** : `#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A`.

### 3.2 Typography System

```css
/* Tailwind / next/font — exemples */
--font-brand: 'ITC Bauhaus', sans-serif;      /* logo uniquement */
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
--font-code: 'Courier New', monospace;
--font-caption: 'Glacial Indifference', sans-serif;
```

| Niveau | Police | Taille | Graisse |
|--------|--------|--------|---------|
| H1 | Montserrat | 36px | 700 |
| H2 | Montserrat | 24px | 700 |
| Section | Montserrat | 20px | 600 |
| Body | Open Sans | 16px | 400 |
| Code | Courier New | 14px | 400 |
| Caption | Glacial Indifference | 14px | 400 |

### 3.3 Spacing & Layout Foundation

- Grille 12 colonnes, gouttières cohérentes.
- Unité de base **8 px**.
- Zones aérées (fond `#F0F2F5`) alternant avec blocs données denses (cards blanches, bordure gauche jaune pour highlights).

### 3.4 Accessibility Considerations

- **WCAG AA** — associations approuvées uniquement (voir brand guideline §04).
- Focus visible : outline `2px` `#0089D0` — pas de glow seul.
- Contraste CTA : blanc sur orange/bleu validé.

---

## 4. Design Direction Decision

### Design Directions Explored (historique)

Six directions explorées dans `ux-design-directions.html` (janv. 2026). Les directions **01 (Grand Mechanism)**, **02 (Glass-Engine)** et **04 (Swiss Precision)** restent valides sur le plan interaction — **la couche visuelle bascule vers Picsell**.

### Chosen Direction (révisé 2026-05-19)

**« Precision Swiss Engine »** — fusion de :

- **04 Swiss Precision** — grille, crédibilité BMAD.
- **01 Grand Mechanism** — engrenages scroll-bound, **couleurs logo**.
- **02 Glass-Engine Pro** — transparence technique.

**Abandonné :** Midnight Minimal, esthétique or/acier, dark luxury par défaut.

### Design Rationale

- Alignement **brand guideline** + **PRD** (FR2, FR20–FR24).
- Palette **lumineuse et accessible** différencie Picsell des agences tech froides.
- Horlogerie = **mouvement**, pas = **couleurs sombres**.

### Implementation Approach

- **Next.js + Tailwind** — tokens dans `tailwind.config`.
- **Framer Motion + GSAP** — engrenages 60 FPS.
- **Pas de glassmorphism** comme pattern principal — privilégier cards blanches, bordures nettes, accent jaune à gauche.

---

## 5. User Journey Flows

*(Parcours inchangés sur le fond — mise à jour visuelle et copy)*

### 5.1 Journey 1: James

Landing (tagline + bleu Picsell) → scroll engrenages → Inside the Engine / Glass-Engine → Hire on Upwork.

### 5.2 Journey 2: Jean-Luc

Landing → 3 piliers (orange/bleu) → ROI chiffré → Lancer mon projet.

### 5.3 Journey Patterns

- Slow Reveal sur fond clair.
- Micro-validation par indicateurs chiffrés (pas vanity metrics).
- Transitions SPA sans rupture.

### 5.4 Flow Optimization Principles

- Formulaire : champs clairs, labels Open Sans, CTA orange.
- Copy PRD/brand — direct, chiffré.

---

## 6. Component Strategy

### 6.1 Design System Foundation

**Tailwind CSS + Framer Motion** — tokens Picsell dans la config Tailwind.

### 6.2 Custom Components

#### Hero Precision Engine

- Engrenages SVG : bleu, turquoise, orange, jaune, noir.
- Tagline : « Precision in every pixel » — Montserrat ou ITC Bauhaus selon zone (pas même ligne).
- Fond : `#F0F2F5` (défaut).

#### Glass-Engine Grid

- Card service fond blanc, hover révèle couche technique.
- Code en Courier New `#3DBCC7` sur fond `#080810` ou bloc code clair.

#### CTA Picsell

- Primaire : `#F37021` ou `#0089D0`, texte blanc, `rounded-sm` (2px max).
- Pas d'effet « ouverture de cadran » lourd — transition Framer Motion **200–300 ms**, directe.

#### Signature code (footer / sections tech)

- `</> Precision in every pixel` — Courier New, turquoise.

### 6.3 Component Implementation Strategy

- Tokens centralisés — pas de couleurs hardcodées hors charte.
- Lazy-load animations hero.
- Max 2 polices par vue.

### 6.4 Implementation Roadmap

**Phase 1 — MVP (alignement brand)** :
- Migrer tokens Tailwind : supprimer or/acier/midnight.
- Hero + tagline + CTA brand.
- Typographie Montserrat / Open Sans.

**Phase 2** :
- Glass-Engine Grid.
- Mode sombre optionnel `#080810`.

**Phase 3** :
- Micro-interactions hover (couleur, pas glow).
- Dashboard ROI démo.

---

## 7. Tailwind Design Tokens (référence implémentation)

```js
// tailwind.config — extrait recommandé
colors: {
  picsell: {
    blue: '#0089D0',
    turquoise: '#3DBCC7',
    orange: '#F37021',
    yellow: '#FDB913',
    black: '#1A1A1A',
    'bg-light': '#F0F2F5',
    'bg-dark': '#080810',
  },
},
borderRadius: {
  picsell: '2px',
  none: '0',
},
fontFamily: {
  brand: ['ITC Bauhaus', 'sans-serif'],
  heading: ['Montserrat', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
  code: ['Courier New', 'monospace'],
  caption: ['Glacial Indifference', 'sans-serif'],
},
```

---

## 8. Écarts résolus (audit 2026-05-19)

| Ancien (Midnight Luxury) | Nouveau (Picsell) |
|--------------------------|-------------------|
| Fond `#0A0A0A` par défaut | `#F0F2F5` clair par défaut |
| Or `#D4AF37` / acier `#E5E4E2` | Bleu, orange, turquoise, jaune logo |
| Serif titres | Montserrat |
| Inter / Roboto Mono corps | Open Sans / Courier New |
| Glassmorphism + glows | Cards nettes, bordures, accent jaune |
| CTA arrondis / effets luxe | `border-radius` ≤ 2 px, couleurs brand |
| Copy métaphorique horloger | Ton direct brand |

---

## Design System Foundation (stack)

### Choix technique

**Tailwind CSS + Framer Motion** — inchangé.

### Rationale

- Tokens Picsell mappables directement dans Tailwind.
- 60 FPS pour engrenages (PRD).
- Maintenance solo-dev.

### Customization Strategy

- **Design Tokens** : palette §3.1 — source unique de vérité avec `picsell-brand-guideline.md`.
- **Pas de glassmorphism utilities** par défaut — utiliser `border-l-4 border-picsell-yellow` pour highlights.
- **Easing mécanique** : courbes bézier custom pour engrenages — indépendant de la palette.

---

*Document aligné avec `docs/picsell-brand-guideline.md` et `docs/prd.md`. Prochaine étape recommandée : `bmad-check-implementation-readiness` puis `bmad-correct-course` pour les epics.*
