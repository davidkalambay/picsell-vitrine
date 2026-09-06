---
project_name: 'picsell-vitrine'
user_name: 'David'
date: '2026-09-06'
sections_completed: ['technology_stack', 'brand_metaphor_rules', 'language_rules', 'framework_rules', 'animation_rules', 'state_rules', 'quality_rules', 'critical_rules', 'workflow_rules']
status: 'complete'
rule_count: 28
optimized_for_llm: true
---

# Project Context for AI Agents

_Ce fichier contient les règles critiques, l'architecture et les conventions que tout agent IA doit impérativement respecter lors du développement sur ce projet. Il fait foi en cas de divergence._

---

## 1. Technology Stack & Versions Réelles

- **Framework :** Next.js 16 (v16.1.5, App Router) + React 19 (v19.2.3)
- **Language :** TypeScript 5 (Strict mode, `noImplicitAny`, `strictNullChecks`)
- **Styling :** Tailwind CSS v4 (`@tailwindcss/postcss`, architecture CSS moderne avec variables de thème)
- **Animations & Moteur Physique :**
  - **GSAP v3.14** + **`@gsap/react`** (utilisation impérative du hook `useGSAP` avec scoping)
  - **Lenis Smooth Scroll v1.3** (`lenis`, synchronisé sur le GSAP ticker)
  - **Framer Motion v12** (réservé aux transitions d'interface, `AnimatePresence`, drawers et modales)
- **State Management :**
  - **React Context :** [`SettingsContext.tsx`](file:///d:/Projects/internal/picsell-vitrine/src/context/SettingsContext.tsx) orchestre les presets studio (Sally, Amelia, Winston), la vitesse des engrenages, le mode éco batterie, le son et les overlays de debug.
  - **Zustand v5 :** Installé et disponible pour de futurs stores atomiques isolés si nécessaire.
- **Contenu & Docs :** MDX local (`@next/mdx`, `@mdx-js/react`)
- **Hébergement & CI/CD :** Vercel & GitHub (`main` synchronisée sur `origin/main`)

---

## 2. Métaphore de Marque & Architecture Visuelle (Règle d'Or)

L'identité visuelle de Picsell est bâtie sur le concept **« Inside the Engine »** :

1. **Les 4 Piliers Satellites :**
   - 🌐 **Dév Web & Mobile** (Bleu cyan `#00F5FF`, ratio 1.0, 24 dents)
   - 📈 **Marketing Digital & AEO** (Orange vibrant `#FF8A00`, ratio 0.8, 20 dents)
   - ⚡ **Automatisation No-Code & Workflows** (Vert émeraude `#00FF66`, ratio 1.2, 28 dents)
   - 📊 **Data Analytics & IT Infrastructure** (Violet électrique `#9D00FF`, ratio 0.9, 22 dents)
2. **Le Moteur IA Central (Engrenage Noir / Quadrant Noir) :**
   - Engrenage noir central (`#0A0A0A` / bordure `#1F1F1F`, ratio 1.5, 36 dents).
   - Symbolise le cœur propulseur de l'agence : l'intelligence artificielle qui alimente, synchronise et accélère les 4 piliers.
3. **Source Unique de Configuration Mécanique :**
   - **TOUS** les paramètres des engrenages (rayons, ratios de dents, vitesses, angles, couleurs) sont définis dans [`src/config/gears.config.ts`](file:///d:/Projects/internal/picsell-vitrine/src/config/gears.config.ts).
   - **Interdiction absolue** de coder en dur des ratios ou couleurs d'engrenages dans les composants de rendu.

---

## 3. Conventions de Code & TypeScript

- **Typage Strict :**
  - `noImplicitAny` et `strictNullChecks` activés. Éviter `any` à tout prix ; définir des interfaces explicites.
- **Conventions de Nommage :**
  - **Composants React :** `PascalCase.tsx` (ex: `GearEngine.tsx`, `SettingsDrawer.tsx`, `BlueprintGrid.tsx`, `ScrollytellingEngine.tsx`).
  - **Fichiers Utilitaires & Config :** `kebab-case.ts` ou `camelCase.ts` (ex: `gears.config.ts`, `utils.ts`).
  - **Interfaces :** Préférer `interface ComponentProps` pour les props de composants.
- **Imports :**
  - Utiliser systématiquement l'alias `@/*` (ex: `@/components/GearEngine`, `@/context/SettingsContext`, `@/config/gears.config`).

---

## 4. Règles Framework (Next.js 16 & React 19)

- **Server Components par défaut :** N'ajouter `'use client'` qu'au sommet des composants nécessitant des hooks React (`useState`, `useEffect`, `useRef`, `useContext`) ou des interactions utilisateur.
- **Optimisation des Médias :** Utiliser `next/image` avec dimensions strictes et attributs `priority` pour les éléments LCP.
- **AEO & SEO :** Chaque page/route doit définir son objet `metadata` ou balisage Schema.org (JSON-LD) pour le référencement naturel et l'indexation par les moteurs IA (Perplexity, ChatGPT, Claude).

---

## 5. Animations, GSAP & Performance

- **Hook `useGSAP` obligatoire :**
  - Toujours encapsuler les initialisations GSAP dans le hook `useGSAP({ scope: containerRef })` de `@gsap/react`.
  - Laisser `@gsap/react` gérer le nettoyage automatique (`revert`) lors du démontage pour éliminer les fuites mémoire.
- **Synchronisation Lenis + GSAP ScrollTrigger :**
  - Le lissage de défilement Lenis doit être synchronisé directement sur le GSAP ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))`).
- **Gestion de la Batterie & Mode Réduit :**
  - Respecter systématiquement les requêtes `prefers-reduced-motion`.
  - Interroger l'état `isLowPowerMode` ou `batteryLevel` exposé par `SettingsContext` pour suspendre ou ralentir les boucles d'animation continues sur appareils à batterie faible.
- **Zéro Calcul Lourd dans le Render :**
  - Ne jamais exécuter de calculs trigonométriques complexes dans le corps de rendu d'un composant React. Utiliser `useMemo` ou déléguer la transformation à GSAP.

---

## 6. Testing, Qualité & Build

- **Validation Build Stricte :**
  - Avant de soumettre une story ou un commit, le projet doit compiler sans erreur avec `npm run build` (`next build`).
- **Accessibilité (WCAG AA) :**
  - Assurer des contrastes textuels de minimum 4.5:1 sur fond sombre (`#050505`).
  - Tous les boutons, curseurs et toggles du `SettingsDrawer` doivent posséder un `aria-label` accessible et être navigables au clavier.
- **Performance Web Vitals :**
  - Maintenir un objectif de 60 FPS sur le Hero et les scènes 3D/SVG, et un score Lighthouse Performance > 90 sur desktop.

---

## 7. Règles Anti-Patterns Absolues (Don't-Miss Rules)

- 🛑 **PAS de Framer Motion pour les engrenages :** Les engrenages interconnectés et le scrollytelling cinématique sont pilotés exclusivement par GSAP ScrollTrigger. Motion est restreint aux micro-interactions et transitions UI (drawers, boutons magnétiques, cartes).
- 🛑 **PAS de 5ème pilier inventé :** L'agence est structurée autour de **4 piliers satellites** et **1 moteur IA central**.
- 🛑 **PAS de nommage `kebab-case` pour les composants :** Suivre la convention existante `PascalCase.tsx`.
- 🛑 **PAS de valeurs d'engrenages en dur :** Toujours importer depuis `@/config/gears.config`.
- 🛑 **PAS de clés API ou secrets dans le code client :** Utiliser les variables d'environnement `.env.local` et les Route Handlers serveur.

---

## 8. Concurrent Development & Workflow Multi-Agents (Règles Agents IA)

**⚠️ CRITIQUE POUR MULTI-AGENT :** Éviter les conflits de développement et garantir la non-régression.

### Règles Fondamentales

- 🔒 **Verrouillage d'État Obligatoire (`in-progress`) :**
  - Dès qu'un agent commence à travailler sur un Epic ou une User Story, il **DOIT impérativement** passer son statut à `in-progress` dans `_bmad-output/implementation-artifacts/sprint-status.yaml`.
- 🛡️ **Règle Anti-Collision Multi-Agents :**
  - Deux agents ne doivent **JAMAIS** travailler simultanément sur la même Story ou sur le même Epic.
  - Si un Epic ou une Story est déjà marqué(e) `in-progress`, l'agent doit obligatoirement sélectionner un autre Epic ou une autre Story disponible (`backlog` ou `ready-for-dev`).
- 🌿 **Isolation Stricte par Branche Git :**
  - Tout travail d'un agent doit être effectué sur une branche Git dédiée (préfixée obligatoirement par `aistudio/`, `claude/` ou `feat/`, ex. `aistudio/epic-2-vitrine-4-piliers-moteur-ia`).
  - La branche `main` doit rester protégée afin de préserver l'historique et permettre une intégration structurée avec validation par Pull Request.
- ✅ **Finalisation & Libération de Verrou :**
  - Une fois l'implémentation, les tests et la validation de compilation (`npm run build`) validés, l'agent consigne l'artefact de story dans `_bmad-output/implementation-artifacts/` et bascule le statut vers `done` ou `review` dans `sprint-status.yaml`.

### Protocole de Réservation & Cycle de Vie

1. **AVANT de commencer un Epic/Story :**
   - Consulter `_bmad-output/implementation-artifacts/sprint-status.yaml`
   - Vérifier le statut EXACT : `backlog` / `ready-for-dev` / `in-progress` / `review` / `done`
   - Si `in-progress` → **CHOISIR UN AUTRE EPIC**

2. **AU DÉMARRAGE :**
   - Mettre à jour `sprint-status.yaml` : `ready-for-dev` → `in-progress`
   - Commiter avec message : `ci: mark epic-X as in-progress by agent-name`
   - Push immédiatement (réservation)

3. **PENDANT LE DÉVELOPPEMENT :**
   - Une seule branche par Epic/Story
   - Format branche : `claude/epic-X-story-Y-...` ou `aistudio/epic-X-...`
   - Commits réguliers et atomiques
   - Push chaque commit pour visibilité

4. **EN CAS DE BLOCAGE/ABANDON :**
   - Mettre à jour `sprint-status.yaml` : `in-progress` → `ready-for-dev` + commentaire
   - Commiter & push immédiatement : `ci: release epic-X (reason: timeout/blocker)`

5. **À LA FIN (Ready for Review) :**
   - Mettre à jour `sprint-status.yaml` : `in-progress` → `done` ou `review`
   - Créer la PR avec lien vers `epics.md`

### Fichier d'Autorité

**Source Unique de Statut :**
```
_bmad-output/implementation-artifacts/sprint-status.yaml
```

Structure :
```yaml
development_status:
  epic-1-moteur-vectoriel-horloger-immersion-cinematique: done
  epic-2-vitrine-des-4-piliers-moteur-central-ia: done
  epic-3-preuve-dingenierie-manifeste-bmad-code: ready-for-dev
```

### Contention Resolution

**Si 2 agents attaquent le même epic :**
1. Le premier qui push `in-progress` gagne
2. Le second reçoit un conflit de merge
3. Le second consulte de nouveau le yaml et choisit un autre Epic disponible
4. Aucune négociation : strict respect du yaml

### Conventions Git

**Branch Naming by Agent (MANDATORY) :**

Chaque agent DOIT travailler sur une branche de feature commençant par son identificateur, suivi par l'Epic/Story :

```
Format: {agent-id}/{epic-number}-{description}

✅ claude/epic-1-review-and-validation
✅ claude/epic-2-vitrine-4-piliers
✅ aistudio/epic-2-vitrine-4-piliers-moteur-ia
✅ aistudio/epic-3-terminals-interactifs
✅ amelia/epic-4-portfolio-garde-temps
✅ winston/epic-5-settings-drawer
✅ feat/hero-mechanical-engine (spécifique)

❌ dev (trop générique, agent invisible)
❌ wip-stuff (trop vague, pas de traçabilité)
❌ feature-branch (pas d'identificateur agent)
```

**Bénéfices :**
- **Visibilité Immédiate :** Git log montre qui travaille quoi
- **Résolution de Contentions :** FIFO par `git push` du premier agent
- **Audit Trail Multi-Agent :** Chaque commit attribué à un agent via `git log --grep`
- **Parallélisation Conflict-Free :** Branches isolées par agent = zéro merge conflicts artificiels

**Identifiants d'Agent Reconnus :**
- `claude/` → Claude Haiku/Opus
- `aistudio/` → AI Studio agents
- `amelia/` → Agent spécifique Amelia
- `winston/` → Agent spécifique Winston
- `agent-X/` → Autres agents nommés

**Commit Message Convention :**
```
✅ "feat(epic-1): implement gear engine ..."
✅ "ci: mark epic-1 in-progress"
✅ "docs: update sprint-status epic-2 → done"

❌ "working on stuff"
❌ "fixes"
```

---

## 9. Git & Organisation BMAD

- **Dépôt :** `picsell-vitrine` sur GitHub.
- **Branche Active :** `main` (synchronisée avec `origin/main`).
- **Workflow Epics :** Voir section 8 (Concurrent Development)
- **Source Unique de Vérité Documentaire :**
  - Spécifications & PRD : `_bmad-output/planning-artifacts/prd.md`
  - Architecture : `_bmad-output/planning-artifacts/architecture.md`
  - Epics & Stories : `_bmad-output/planning-artifacts/epics.md`
  - Contexte Agent IA : `docs/project-context.md`
  - **Sprint Status (CRITICAL) :** `_bmad-output/implementation-artifacts/sprint-status.yaml`

---

_Dernière mise à jour : 2026-09-06_
