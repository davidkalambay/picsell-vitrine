# 📋 Backlog Post-Lancement & Amélioration Continue — Picsell Agency

Ce document rassemble les recommandations issues de la revue critique **BMAD Party Mode** et de l'**Audit Copywriting & Architecture de l'Information**, formalisées sous forme d'**Issues GitHub / Jira** prêtes à être priorisées et traitées.

---

## 🎯 Vue d'ensemble des Issues

| ID | Titre de l'Issue | Type / Label | Priorité | Estimation | Porteur (Persona) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **ISSUE-01** | [CRO] Optimiser la clarté et l'accès au CTA Primaire dans le Hero Header | `enhancement`, `cro` | **P1 (High)** | **S (1j)** | Sally |
| **ISSUE-02** | [A11y/UI] Rehausser le ratio de contraste des labels secondaires et métadonnées | `accessibility`, `ui` | **P1 (High)** | **S (0.5j)** | Amélia |
| **ISSUE-03** | [Perf] Auto-détection des périphériques Low-Spec (Hardware Concurrency / RAM) | `performance`, `dx` | **P2 (Medium)** | **M (2j)** | Winston |
| **ISSUE-04** | [Mobile/UX] Élargir les cibles tactiles (Touch Targets $\ge$ 44px) sur mobile | `mobile`, `ux` | **P2 (Medium)** | **S (1j)** | Amélia |
| **ISSUE-05** | [Analytics] Intégrer la télémétrie privacy-first et le tracking d'entonnoir | `analytics`, `growth` | **P2 (Medium)** | **M (1.5j)** | Sally |
| **ISSUE-06** | [CI/CD] Ajouter le workflow GitHub Actions pour exécuter Vitest et ESLint | `ci-cd`, `devops` | **P3 (Low)** | **S (0.5j)** | Bob |
| **ISSUE-07** | [Copy/CRO] Réécriture orientée résultats du sous-titre et des micro-copies Hero | `copywriting`, `cro` | **P1 (High)** | **S (0.5j)** | Sally |
| **ISSUE-08** | [Copy/Branding] Refonte des 4 Piliers Scrollytelling avec des verbes d'action | `copywriting`, `brand` | **P2 (Medium)** | **S (1j)** | Sally |
| **ISSUE-09** | [Copy/Storytelling] Clarification des "Complications" vers "Preuves d'Exécution" | `copywriting`, `ux` | **P2 (Medium)** | **S (0.5j)** | Amélia |

---

### 📌 ISSUE-01 : [CRO] Optimiser la clarté et l'accès au CTA Primaire dans le Hero Header

- **Labels :** `area:hero`, `type:enhancement`, `role:sally`
- **Priorité :** P1 (High)
- **Objectif :** Permettre aux visiteurs C-Level pressés de déclencher immédiatement une prise de contact ou d'accéder au simulateur sans défilement obligatoire.

#### Description & Contexte
Le Hero actuel privilégie l'immersion visuelle et technique avec une forte densité de badges (`SYS_ALIGN`, `LATENCY`). Un visiteur orienté ROI peut chercher un bouton d'action directe rapide dès le premier viewport.

#### Spécifications & Tâches
- [ ] Ajouter un duo de boutons d'action dans le Hero sous la promesse principale :
  - **Bouton Primaire :** `[ Réserver un cadrage stratégique ]` (Lien direct ancré `#conversion-hub` avec effet magnétique).
  - **Bouton Secondaire :** `[ Simuler mon ROI ]` (Lien direct ancré `#roi-dashboard-showcase` avec bordure luminescente or).
- [ ] Déplacer les badges télémétriques très fins en sous-titre pour alléger la charge cognitive initiale.

#### Critères d'Acceptation (Definition of Done)
- Le Hero présente 2 CTAs visibles et cliquables sans scroll sur écrans desktop ($\ge 1024\text{px}$) et mobile ($\ge 375\text{px}$).
- Les clics sur les CTAs déclenchent un scroll fluide Lenis vers les sections respectives.
- Test unitaire vérifiant la présence et les attributs d'accessibilité (`aria-label`) des deux CTAs.

---

### 📌 ISSUE-02 : [A11y/UI] Rehausser le ratio de contraste des labels secondaires et métadonnées

- **Labels :** `area:design-system`, `type:accessibility`, `wcag-aa`
- **Priorité :** P1 (High)
- **Objectif :** Garantir un ratio de contraste minimal de 4.5:1 (WCAG 2.1 AA) pour l'ensemble des textes secondaires sur fond sombre.

#### Description & Contexte
Certains textes de métadonnées, puces de code et sous-titres utilisent des classes Tailwind `text-slate-500` ou `text-zinc-500` qui peuvent être difficiles à lire sur certains écrans OLED à faible luminosité ou en extérieur.

#### Spécifications & Tâches
- [ ] Remplacer les occurrences de `text-slate-500` par `text-slate-400` ou `text-slate-300` sur les éléments textuels critiques (`DataLiveCounter`, `EngineeringTerminal`, `RoiDashboardShowcase`).
- [ ] Vérifier le ratio de contraste de l'ensemble des textes avec l'outil Chrome DevTools A11y Audit ou axe-core.
- [ ] Conserver l'accentuation colorée dorée/cyan pour les données numériques.

#### Critères d'Acceptation
- 100% des textes affichés respectent un ratio de contraste $\ge 4.5:1$ (texte standard) et $\ge 3:1$ (grands titres / badges).
- Score Accessibilité Lighthouse $\ge 98/100$.

---

### 📌 ISSUE-03 : [Perf] Auto-détection des périphériques Low-Spec (Hardware Concurrency / RAM)

- **Labels :** `area:performance`, `type:optimization`, `role:winston`
- **Priorité :** P2 (Medium)
- **Objectif :** Activer proactivement le Mode Performance / Mode Éco sur les appareils à ressources limitées pour garantir 60 FPS constants sans saccades.

#### Description & Contexte
En plus de la Battery Status API déjà intégrée, certains laptops ou téléphones d'entrée de gamme disposent d'un nombre limité de cœurs CPU (`navigator.hardwareConcurrency <= 4`) ou d'une mémoire restreinte (`navigator.deviceMemory <= 4GB`), ce qui peut ralentir le rendu du triple blur CSS et des animations GSAP simultanées.

#### Spécifications & Tâches
- [ ] Étendre le hook de détection dans `SettingsContext.tsx` :
  ```typescript
  const isLowEndDevice = 
    (typeof navigator !== "undefined" && 
      ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
       ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4)));
  ```
- [ ] Si `isLowEndDevice === true` et aucun réglage utilisateur n'est persisté en `localStorage`, initialiser `performanceMode: true` et `glassmorphism: false` (remplacé par fond uni opaque haute performance).
- [ ] Notifier discrètement l'utilisateur via `EcoModeNotification` avec possibilité de réactiver les graphismes maximaux.

#### Critères d'Acceptation
- Sur environnement émulé 4 CPU / 2GB RAM, la page se charge sans gel d'animation avec un framerate stable.
- Test unitaire validant l'activation par défaut des flags de performance sur appareil bridé.

---

### 📌 ISSUE-04 : [Mobile/UX] Élargir les cibles tactiles (Touch Targets $\ge$ 44px) sur mobile

- **Labels :** `area:mobile`, `type:ux`, `role:amelia`
- **Priorité :** P2 (Medium)
- **Objectif :** Faciliter la navigation au doigt sur smartphone en assurant des zones cliquables conformes aux directives Apple HIG & Google Material ($\ge 44 \times 44\text{px}$).

#### Description & Contexte
Les onglets du `SettingsDrawer` (Sally, Amélia, Winston) et les boutons de copie du terminal de code (`EngineeringTerminal`) sont très compacts sur mobile (< 380px), pouvant générer des clics imprécis.

#### Spécifications & Tâches
- [ ] Ajouter un padding invisible ou minimal (`min-h-[44px] min-w-[44px] flex items-center justify-center`) sur tous les boutons interactifs, toggles et onglets.
- [ ] Revoir l'espacement entre les onglets de personas dans `SettingsDrawer.tsx` pour mobile.

#### Critères d'Acceptation
- Aucune cible tactile sur mobile n'a une surface effective inférieure à $44 \times 44\text{px}$.
- Validation sur viewport 375px (iPhone SE / Galaxy A-series).

---

### 📌 ISSUE-05 : [Analytics] Intégrer la télémétrie privacy-first et le tracking d'entonnoir

- **Labels :** `area:analytics`, `type:feature`, `role:sally`
- **Priorité :** P2 (Medium)
- **Objectif :** Mesurer précisément le taux de conversion entre les deux tunnels (Upwork vs Consultation directe) sans cookies intrusifs.

#### Description & Contexte
Pour affiner la stratégie d'acquisition, l'agence a besoin de savoir quel pourcentage de visiteurs :
1. Clique sur le lien Upwork Escrow.
2. Interagit avec le simulateur de ROI.
3. Soumet le formulaire de consultation stratégique.

#### Spécifications & Tâches
- [ ] Intégrer un module d'événements personnalisés (Plausible Analytics, Cloudflare Web Analytics ou API route interne `api/telemetry`).
- [ ] Déclencher des événements `conversion_upwork_click`, `simulator_roi_calculated`, `audit_form_submitted`.
- [ ] Respecter strictement le RGPD et l'absence de traçage tiers invasif.

#### Critères d'Acceptation
- Les clics sur les CTAs critiques émettent un événement télémétrique non-bloquant.
- 0 cookie tiers déposé.

---

### 📌 ISSUE-06 : [CI/CD] Ajouter le workflow GitHub Actions pour exécuter Vitest et ESLint

- **Labels :** `area:devops`, `type:automation`, `role:bob`
- **Priorité :** P3 (Low)
- **Objectif :** Automatiser la validation des 34 tests Vitest et du linter à chaque Pull Request et Push sur `main`.

#### Spécifications & Tâches
- [ ] Créer `.github/workflows/ci.yml` :
  ```yaml
  name: CI Pipeline
  on: [push, pull_request]
  jobs:
    test-and-lint:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
            cache: 'npm'
        - run: npm ci
        - run: npm run lint
        - run: npx tsc --noEmit
        - run: npm test
  ```

#### Critères d'Acceptation
- Le pipeline CI s'exécute en moins de 60 secondes sur GitHub Actions et bloque les merges en cas d'échec de test ou d'erreur de typage.

---

### 📌 ISSUE-07 : [Copy/CRO] Réécriture orientée résultats du sous-titre et des micro-copies Hero

- **Labels :** `area:copywriting`, `type:cro`, `role:sally`
- **Priorité :** P1 (High)
- **Objectif :** Remplacer les formules descriptives généralistes par des bénéfices d'affaires tangibles et des verbes d'action puissants dès le Hero.

#### Description & Contexte
Le sous-titre actuel (*« Picsell Agency conçoit des systèmes marketing, techniques et data pilotés par l'IA... »*) manque d'ancrage sur le retour sur investissement et l'impact opérationnel direct.

#### Spécifications & Tâches
- [ ] **Sous-titre Hero :** Remplacer par :
  > *« Nous concevons les architectures digitales, marketing et data qui automatisent votre croissance. Une ingénierie d'élite opérée depuis Kinshasa pour les entreprises exigeantes et la diaspora. »*
- [ ] **Boutons Hero :**
  - Primaire : `[ Lancer un cadrage stratégique ]` (au lieu de *"Découvrir nos expertises"*).
  - Secondaire : `[ Explorer le simulateur ROI → ]` (au lieu de *"Nous écrire"*).
- [ ] Mettre à jour les tests unitaires associés.

#### Critères d'Acceptation
- Clarté du message validée en test utilisateur (compréhension de l'offre en < 5 secondes).
- Taux de clics sur le premier viewport mesuré en hausse.

---

### 📌 ISSUE-08 : [Copy/Branding] Refonte des 4 Piliers Scrollytelling avec des verbes d'action

- **Labels :** `area:scrollytelling`, `type:copywriting`, `role:sally`
- **Priorité :** P2 (Medium)
- **Objectif :** Transformer les intitulés de piliers techniques en verbes d'impact pour dynamiser la lecture et la projection du client.

#### Description & Contexte
Les titres actuels des 4 sections du Scrollytelling (`01 DIGITAL MARKETING`, `02 AUTOMATION`, `03 DEVELOPMENT`, `04 DATA`) sont conventionnels et méritent d'incarner l'action et le résultat.

#### Spécifications & Tâches
- [ ] Mettre à jour les 4 titres et badges dynamiques dans `ScrollytellingSection.tsx` et `ContextualFloatingCTA.tsx` :
  1. **`01 / ACQUÉRIR`** — *Marketing de Précision & Acquisition Ciblée*
  2. **`02 / ACCÉLÉRER`** — *Automatisation de Processus & Workflows IA*
  3. **`03 / BÂTIR`** — *Applications Web, Mobile & Architectures Cloud Résilientes*
  4. **`04 / PILOTER`** — *Data Intelligence, Scoring Prédictif & Tableaux de Bord*
- [ ] Aligner les badges du bouton contextuel flottant (`ACQ`, `ACC`, `BAT`, `PIL`).

#### Critères d'Acceptation
- Synchronisation complète entre les titres du scrollytelling, les engrenages et le CTA flottant.
- Tests unitaires `ScrollytellingSection.test.tsx` et `ContextualFloatingCTA.test.tsx` mis à jour et validés.

---

### 📌 ISSUE-09 : [Copy/Storytelling] Clarification des "Complications" vers "Preuves d'Exécution"

- **Labels :** `area:portfolio`, `type:copywriting`, `role:amelia`
- **Priorité :** P2 (Medium)
- **Objectif :** Rendre la métaphore horlogère immédiatement accessible aux décideurs non-initiés tout en conservant son élégance.

#### Description & Contexte
Le terme horloger *"Complications"* pour désigner les études de cas peut prêter à confusion pour un directeur financier ou commercial.

#### Spécifications & Tâches
- [ ] Ajuster le chapeau et le titre de section dans `GardeTempsPortfolio.tsx` :
  - **Titre principal :** *« Preuves d'Exécution : 4 défis d'ingénierie résolus en production »*
  - **Sous-titre explicatif :** *« Tout comme les grandes complications horlogères défient la gravité, découvrez comment nos systèmes sur-mesure résolvent des problématiques critiques en RDC et à l'international. »*

#### Critères d'Acceptation
- Compréhension immédiate par les profils techniques et non-techniques.
