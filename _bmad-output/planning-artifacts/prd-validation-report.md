---
validationTarget: '_bmad-output/planning-artifacts/prd.md'
validationDate: '2026-09-05'
inputDocuments:
  - '_bmad-output/planning-artifacts/product-brief-picsell.agency-2026-01-27.md'
  - '_bmad-output/planning-artifacts/research/market-Premium-AI-Agencies-research-2026-01-27.md'
  - '_bmad-output/analysis/brainstorming-session-2026-01-26.md'
  - 'docs/bmad-improvement-ideas.md'
  - 'docs/project-context.md'
  - 'docs/Picsell_Brand_Guidelines.md'
  - 'docs/Le storytelling de marque.md'
  - 'docs/epics.md'
  - 'src/ (Codebase active)'
validationStepsCompleted:
  - 'step-v-01-discovery'
  - 'step-v-02-format-detection'
  - 'step-v-03-density-validation'
  - 'step-v-04-brief-coverage-validation'
  - 'step-v-05-measurability-validation'
  - 'step-v-06-traceability-validation'
  - 'step-v-07-implementation-leakage-validation'
  - 'step-v-08-domain-compliance-validation'
  - 'step-v-09-project-type-validation'
  - 'step-v-10-smart-validation'
  - 'step-v-11-holistic-quality-validation'
  - 'step-v-12-completeness-validation'
  - 'step-v-13-report-complete'
validationStatus: COMPLETE_WITH_GAPS
overallScore: 88/100
---

# PRD Validation Report : picsell.agency

**Document Validé :** `_bmad-output/planning-artifacts/prd.md`  
**Date d'Audit :** 2026-09-05  
**Auditeur :** John (Product Manager 📋 - BMad Method)  
**Statut Global :** **COMPLET AVEC ÉCARTS MAJEURS À SYNCHRONISER**  
**Score Global :** **88 / 100**

---

## 1. Résumé Exécutif de l'Audit

Le PRD actuel (`prd.md`, rédigé le 27 janvier 2026) est un document solide, conforme aux standards BMAD (structure 6/6, haute densité d'information, chaîne de traçabilité claire).

**Cependant, une confrontation rigoureuse avec la réalité du site en développement (`src/`) et le dossier `docs/` (notamment `docs/bmad-improvement-ideas.md`, `Picsell_Brand_Guidelines.md` et `Le storytelling de marque.md`) révèle un décalage critique :**

> [!WARNING]
> **Le code a dépassé le PRD initial !**
> La vitrine en production intègre désormais l'intégralité des **30 améliorations BMAD (suites Sally, Amelia et Winston)** : Tiroir de réglages interactif Studio (Settings Drawer multi-domaines), défilement lissé Lenis synchronisé au RAF ticker GSAP, mode éco batterie avec throttle GPU, terminaux de code interactifs dans les cartes, curseur custom en engrenage, boutons magnétiques, télémétrie live HUD, tracés vectoriels DrawSVG, etc.
> **Aucune de ces fonctionnalités réelles n'est formalisée dans les Functional Requirements (FR1 à FR19) du PRD actuel.**

---

## 2. Détection de Format & Structure (Étape 2)

- **Structure analysée :** 9 sections de niveau 2 (Executive Summary, Success Criteria, Product Scope, User Journeys, Innovation & Novel Patterns, Web App Specific Requirements, Project Scoping, Functional Requirements, Non-Functional Requirements).
- **Couverture des sections cœurs BMAD :** **6 / 6 présentes** (Executive Summary, Success Criteria, Product Scope, User Journeys, Functional Requirements, Non-Functional Requirements).
- **Classification du format :** **BMAD Standard (Conforme)**.

---

## 3. Densité d'Information & Style (Étape 3)

- **Rapport Signal/Bruit :** Très bon. Le document évite le bavardage générique.
- **Formules verbeuses détectées :** 4 occurrences mineures (ex: *"a pour but de positionner"*, *"doit permettre le visionnage"* au lieu de *"positionne"*, *"diffuse"*).
- **Évaluation de sévérité :** **Pass** (< 5 violations).

---

## 4. Couverture du Product Brief & Écarts avec le Site Réel (Étape 4)

| Composante Brief / docs | Statut dans le PRD | Alignement avec le Site Actuel (`src/`) |
| :--- | :--- | :--- |
| **Vision & Métaphore Horlogère** | Entièrement couvert | Parfait alignement avec `GearEngine` et le scrollytelling. |
| **Positionnement "Accélérateur de Vente"** | Partiellement couvert | Le PRD mentionne "agence", alors que la charte (`Brand Guidelines`) insiste sur *« accélérateur de vente, pas agence classique »* et la signature `</> Precision in every pixel`. |
| **Personas Cibles (James, Jean-Luc, David)** | Entièrement couvert | Les parcours utilisateurs reflètent fidèlement les 3 personas. |
| **Catalogue 3 Piliers (Dev, Marketing/AEO, Auto)** | Entièrement couvert | Implémenté dans les cartes de scrollytelling. |
| **Les 30 Améliorations BMAD (Sally, Amelia, Winston)** | **NON COUVERT DANS LES FRs** | **Écart critique :** 14 composants interactifs majeurs codés dans `src/` sont absents de la spécification produit. |

---

## 5. Analyse de Mesurabilité & Critères SMART (Étapes 5 & 10)

### Exigences Fonctionnelles (FR1 à FR19)
- **Points forts :** Les exigences FR4 à FR16 sont actionnables et bien bornées (4 études de cas, 3 piliers explicites, double tunnel Upwork/formulaire).
- **Faiblesses de mesurabilité :**
  - `FR1` : *"animation fluide d'engrenages (SVG) synchronisée avec le défilement"* → Manque de critère précis (ex: 60 FPS stables, synchronisation 1:1 avec GSAP ScrollTrigger).
  - `FR17` : *"nativement optimisé pour l'indexation par les moteurs IA (AEO-Ready)"* → Manque de métrique vérifiable (ex: balisage JSON-LD Schema.org validé, sémantique SSR intégrale).
  - `FR18` : *"garantir une accessibilité de niveau WCAG AA"* → Doit spécifier le seuil automatisé (score Lighthouse Accessibilité >= 95).

### Exigences Non-Fonctionnelles (NFR)
- LCP < 1.5s : **Mesurable ✓**
- Framerate 60 FPS constants : **Mesurable ✓**
- Disponibilité 99.9% : **Mesurable ✓**

---

## 6. Traçabilité & Absence d'Orphelins (Étape 6)

- La chaîne **Vision → Success Criteria → User Journeys → FRs** est intacte pour les fonctionnalités de base.
- **Nécessité d'extension :** Les améliorations BMAD (curseur, mode éco, settings drawer, micro-interactions) soutiennent directement le critère de succès *"Confiance Instantanée de James"* et la *"Performance Luxury"*. Elles doivent être rattachées formellement à cette chaîne.

---

## 7. Fuites d'Implémentation (Étape 7)

- `FR1` mentionne "SVG" (Format vectoriel standard - Acceptable).
- `FR19` cite "Google Analytics (GA4)" (Outil tiers spécifique - Toléré pour l'infrastructure marketing).
- `NFR` cite "GSAP/Framer Motion" dans la définition du framerate (légère fuite d'implémentation dans un NFR de performance qui devrait uniquement exiger le framerate cible et les métriques de rendu GPU).

---

## 8. Conformité Domaine & Type de Projet (Étapes 8 & 9)

- **Domaine :** Vitrine Digitale & Ingénierie Produit (Faible complexité réglementaire, haute exigence de rendu).
- **Type Web App :** Single Page Application / Next.js App Router.
- **Respect des impératifs :** SSR/SSG pour le référencement AEO, Core Web Vitals stricts, architecture fluide.

---

## 9. Synthèse des Écarts & Plan d'Action Recommandé

Pour aligner le **Product Brief** et le **PRD** sur le site actuel en développement :

1. **Mettre à jour l'Executive Summary et le Product Brief :**
   - Intégrer la formule officielle de marque : *« Picsell Agency n'est pas une agence classique, c'est un accélérateur de vente digital »*.
   - Intégrer la promesse et la signature : `</> Precision in every pixel`.
   - Valoriser le sens du nom : *Picsell = Pixel + Sell*.

2. **Enrichir les Exigences Fonctionnelles (Ajout de FR20 à FR30) :**
   - **FR20 (Studio Settings Drawer) :** Le visiteur/testeur peut ouvrir un tiroir de réglages interactif pour personnaliser l'expérience en temps réel selon 3 onglets thématiques (Sally: UI/Finition, Amelia: Dynamique/Animations, Winston: Architecture/Performance).
   - **FR21 (Lenis Smooth Scroll) :** Le système unifie l'inertie et la fluidité du défilement via un moteur de smooth scroll synchronisé avec le ticker GSAP.
   - **FR22 (Mode Éco Batterie) :** Le système détecte l'état de la batterie (Battery API) et réduit dynamiquement la charge GPU en mode économie d'énergie.
   - **FR23 (Terminaux d'Ingénierie Code) :** Chaque carte de service présente un mini-terminal interactif avec onglets et prévisualisation de code source d'entreprise.
   - **FR24 (Curseur Engrenage Interactif) :** Le pointeur desktop se transforme en mini-engrenage cinématique réactif aux survols interactifs.
   - **FR25 (Télémétrie Live Counter) :** Le module Data affiche des compteurs numériques animés à haute vitesse simulant un HUD de télémétrie.
   - **FR26 (Boutons Magnétiques) :** Les boutons d'action du Hero et des cartes réagissent magnétiquement à la proximité du curseur avec inertie ressort.
   - **FR27 (Tracé Technique DrawSVG & SplitText) :** L'entrée de page révèle le contour technique filaire des engrenages et fait apparaître les titres avec une frappe horlogère mécanique.
   - **FR28 (Anneau Circulaire de Progression) :** L'avancement dans les 4 expertises est matérialisé par un anneau radial néon (25%, 50%, 75%, 100%).
   - **FR29 (Grille Blueprint, Noise & Outline Typo) :** L'arrière-plan intègre un canevas technique avec grille d'architecte, grain photographique et grands indices numériques en contour réactif.
   - **FR30 (Accessibilité Motion Adaptive) :** Le système neutralise automatiquement les animations intenses dès lors que l'option système `prefers-reduced-motion` est active.
