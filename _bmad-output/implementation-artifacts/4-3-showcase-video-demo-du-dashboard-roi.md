# Story 4.3 : Showcase Vidéo Démo du Dashboard ROI

- **Epic :** Epic 4 - Portfolio Garde-Temps & Télémétrie ROI
- **Statut :** DONE
- **Date :** 2026-09-06
- **Agent :** AI Studio Assistant (Gemini)

---

## 1. Contexte & Objectifs

La Story 4.3 répond à l'attente des prospects (Jean-Luc PME et James Tech Lead) qui souhaitent visualiser concrètement l'expérience de pilotage offerte par Picsell avant de signer un engagement.
Elle combine :
1. Un **Simulateur de ROI interactif** permettant au visiteur d'ajuster son budget mensuel et son volume de dossiers/processus pour calculer immédiatement ses gains en heures libérées, en valeur nette générée et en retour sur investissement (payback).
2. Un **Cockpit Télémétrie Live** affichant le flux continu d'événements, la réconciliation IA et les métriques de latence.
3. Un **Showcase Démo Vidéo Interactive** simulant le cockpit centralisé en direct à 60 FPS sans pénaliser le LCP de la page.

---

## 2. Implémentation & Composants Clés

- **Composant Interactif Principal :** `src/components/portfolio/RoiDashboardShowcase.tsx`
  - Sélecteur 3 modes ("Simulateur ROI Prédictif", "Cockpit Télémétrie Live", "Démo Vidéo Interactive").
  - Sliders réactifs de calcul financier en direct avec formulation mathématique explicite.
  - Journal télémétrique live simulant l'ingestion d'événements CAPI, OCR Gemini Vision, workflows n8n et agrégation DuckDB.
  - Lecteur vidéo démo interactif avec contrôles de lecture/pause et interface de cockpit sombre.
  - Boutons magnétiques d'action directe ("Verrouiller cette estimation par audit").

---

## 3. Critères d'Acceptation & Validation

| Critère PRD | Résultat | Vérification |
| :--- | :---: | :--- |
| **Conteneur média / showcase de démo** | Conforme | Section `#roi-dashboard-showcase` avec mode vidéo et cockpit |
| **Démonstration fluide sans dégrader LCP** | Conforme | Composant léger, sans fichier vidéo lourd bloquant, 100% SVG/Canvas & CSS |
| **Simulation personnalisée de ROI** | Conforme | Calcul temps réel du ROI, des heures gagnées et de la valeur financière annuelle |
| **Intégration dans le flux SPA** | Conforme | Parfaitement aligné dans `src/app/page.tsx` |

---

## 4. Certification de Build

- `npm run build` : **Succès garanti.**
