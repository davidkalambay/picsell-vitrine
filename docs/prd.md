---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain-skipped', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments: ["docs/picsell-brand-guideline.md", "planning-artifacts/product-brief-picsell.agency-2026-01-27.md", "planning-artifacts/research/market-Premium-AI-Agencies-research-2026-01-27.md", "analysis/brainstorming-session-2026-01-26.md"]
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 1
  projectDocsCount: 1
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low'
  projectContext: 'greenfield'
workflowType: 'prd'
---

**Author:** David
**Date:** 2026-01-27
**Aligné brand guideline :** 2026-05-19 (v1.0)

## Executive Summary

Picsell Agency est un **accélérateur de vente digital** qui utilise l'IA pour construire, avec la précision d'une horlogerie numérique, une présence de marque qui génère des **résultats mesurables** (leads, conversions, revenus). Cette vitrine immersive positionne David comme un expert de niveau « Enterprise » auprès d'une clientèle internationale (James) et locale (Jean-Luc).

**Tagline officielle :** « Precision in every pixel » — engagement contractuel sur chaque mission.
**Signature code (contextes digitaux) :** `</> Precision in every pixel`

Le produit différencieur réside dans la méthodologie **BMAD** (supervision experte), la transparence technique (« Inside the Engine ») et le respect strict du **design system Picsell** défini dans [`docs/picsell-brand-guideline.md`](picsell-brand-guideline.md). La métaphore horlogère (engrenages, précision mécanique) sert le récit d'immersion sans remplacer l'identité visuelle officielle.

## Brand Compliance

> Référence normative : [`docs/picsell-brand-guideline.md`](picsell-brand-guideline.md) v1.0 — Mars 2025. Tout écart doit être validé par la direction artistique avant production.

### Positionnement produit

| Principe brand | Application vitrine |
|----------------|---------------------|
| Partenaire de croissance, pas agence marketing classique | Contenus orientés ROI chiffré, pas vanity metrics |
| Chaque pixel = argument de vente | Portfolio et services liés à des indicateurs mesurables |
| Systèmes qui vendent | 3 piliers Dev, Marketing AEO, Automatisation |
| Client autonome et performant | Transparence BMAD, Dashboard ROI (vision) |

### Design system (site web)

| Token | Valeur | Usage vitrine |
|-------|--------|---------------|
| Fond clair | `#F0F2F5` | Mode par défaut — backgrounds, cards |
| Fond sombre | `#080810` | Mode sombre autorisé |
| Bleu Picsell | `#0089D0` | Primaire — titres, liens, boutons principaux |
| Turquoise | `#3DBCC7` | Secondaire — accents tech, code |
| Orange Énergie | `#F37021` | CTA, bordures actives |
| Jaune Doré | `#FDB913` | Highlights, soulignements, bordures gauches |
| Noir Charbon | `#1A1A1A` | Corps de texte, fonds sombres |
| Hiérarchie couleur | 60 % bleu + blanc / 30 % orange + turquoise / 10 % jaune + noir | Respecter sur l'ensemble des pages |

**CTA :** fond `#F37021` ou `#0089D0`, texte blanc, `border-radius: 0` ou `2px` max.
**Associations interdites :** orange sur jaune, bleu sur turquoise, blanc sur blanc cassé, dégradés non validés.

### Typographie

| Usage | Police |
|-------|--------|
| Titre de marque | ITC Bauhaus Bold 700 |
| H1 / H2 / sections | Montserrat Bold / SemiBold |
| Corps | Open Sans Regular 400 |
| Citations | Roboto Italic 400 |
| Légendes | Glacial Indifference Regular 400 |
| Code / technique | Courier New Regular 400 |

**Règles :** interlignage 1,5× pour le corps ; max 2 polices par écran ; ITC Bauhaus et Montserrat jamais sur la même ligne (sauf logo).

### Ton & copywriting

- **Piliers :** précis, direct, humain, ambitieux.
- **Promesses chiffrées et contractuelles** — éviter le flou (« environ », « peut-être », « beaucoup de »).
- **Formulations approuvées :** « Nous construisons votre présence digitale », « L'image qui vend. Chaque pixel compte. »
- **Formulations interdites :** « Des solutions digitales adaptées à vos besoins », « N'hésitez pas à nous contacter si vous souhaitez », jargon marketing creux.

### Logo

- Version couleur par défaut sur fond clair ; version couleur conservée sur fond sombre (`#1A1A1A`, `#080810`).
- Zone de protection = hauteur du « P » ; hauteur min. 32 px (digital), favicon = cercle central simplifié.
- Usages interdits : déformation, rotation, ombres non officielles, recadrage des éléments.

---

## Success Criteria

### User Success
- **Confiance Instantanée (James)** : L'utilisateur international perçoit immédiatement le sérieux et la rigueur technique dès les premières secondes, via une identité visuelle Picsell cohérente (palette, typo, tagline).
- **Transparence Expertise** : James comprend la méthodologie BMAD comme une garantie de qualité « Enterprise-ready ».
- **Clarté de l'Offre** : Jean-Luc comprend immédiatement comment Picsell peut digitaliser sa PME sans complexité inutile.

### Business Success
- **Chiffre d'Affaires** : Atteindre **15 000 USD par mois** dès la phase de lancement.
- **Efficience Opérationnelle** : Capacité à gérer **8 clients premium par mois** en mode solo (David).
- **Positionnement Marché** : Réussir la fusion « Standard Global / Prix Local ».

### Technical Success
- **Performance « Precision »** : Temps de chargement ultra-rapide et animations fluides (60 FPS) pour incarner « Precision in every pixel ».
- **Maîtrise de la Stack** : Utilisation d'une stack moderne facilitant les futures intégrations IA.
- **Audit BMAD** : Le site lui-même doit passer avec succès un audit interne de qualité BMAD.
- **Conformité brand** : Audit visuel validant palette, typo, logo et ton avant mise en production.

### Measurable Outcomes
- **Conversations Upwork** : Au moins 5 demandes de devis internationales par semaine.
- **Conversion Locale** : 1 demande de consultation directe par semaine via le site.
- **Portfolio Visibility** : Un temps moyen passé sur les cas d'études supérieur à 60 secondes.

## Product Scope

### MVP - Minimum Viable Product
- **Identité Visuelle Picsell** : Design system officiel (palette lumineuse/chaleureuse, typo Montserrat/Open Sans) avec animation d'engrenages aux couleurs du logo (bleu, turquoise, orange, jaune) pour la métaphore de précision mécanique.
- **Tagline & Signature** : « Precision in every pixel » visible au hero ; variante `</> Precision in every pixel` dans les zones tech/code.
- **Section « Inside the Engine »** : Présentation détaillée de la stack technique et de la méthode de supervision experte BMAD.
- **Portfolio** : 4 études de cas représentatives (AEO, Agents, Automation) avec ROI chiffré.
- **Vidéo Démo « Dashboard ROI »** : Walkthrough visuel/animé montrant la vision du futur Dashboard ROI.
- **Catalogue des Services** : Présentation explicite des 3 piliers :
    1. **Développement Web & Mobile** (Solutions robustes et scalables).
    2. **Marketing Digital** (Acquisition et visibilité AEO).
    3. **Automatisation de Workflows** (Efficience et réduction des coûts).
- **Tunnel Dual** : Interaction simple pour engager David via Upwork ou directement.

### Growth Features (Post-MVP)
- **Dashboard Interactif Temps Réel** : Version beta de l'outil de reporting dynamique.
- **Section Témoignages** : Retours d'expérience vérifiés des premiers clients.
- **Audit IA Lite** : Petit outil interactif permettant à l'utilisateur de tester son besoin en IA.

### Vision (Future)
- **Dashboard Interactif Live** : Plateforme SaaS de suivi de projet et de ROI pour les clients.
- **IA Concierge** : Agent conversationnel expert entraîné sur la base de connaissances de l'agence.
- **Certifications Picsell** : Établir un standard de qualité reconnu sur le marché africain.

## User Journeys

### Journey 1: James (The Precision Hunter) - USA/Europe
- **Opening Scene**: James est lassé des offres génériques sur Upwork. Il recherche une agence capable de livrer une architecture complexe sans dette technique.
- **Rising Action**: Il arrive sur la vitrine Picsell. Il reconnaît immédiatement la tagline « Precision in every pixel » et ignore le « marketing classique » pour plonger dans **« Inside the Engine »**.
- **Climax**: Il découvre la méthode **BMAD** et la vidéo du **Dashboard ROI**. Il comprend que Picsell maîtrise la mécanique du code et la rentabilité.
- **Resolution**: Il clique sur **« Hire on Upwork »** avec la certitude d'avoir trouvé un partenaire de niveau « Enterprise ».

### Journey 2: Jean-Luc (Le Visionnaire Pragmatique) - Kinshasa
- **Opening Scene**: Jean-Luc veut faire passer sa PME au niveau supérieur mais ne veut pas de « digital vague » sans retour concret.
- **Rising Action**: Il arrive sur le site et voit immédiatement trois piliers clairs : **Applications Web/Mobile**, **Marketing Digital**, et **Automatisation**. Fini l'ambiguïté.
- **Climax**: Il réalise que l'Automatisation de ses workflows va lui faire gagner 2h par jour, et que le Marketing AEO va lui amener des clients sans qu'il ait besoin d'être expert.
- **Resolution**: Il remplit le formulaire **« Lancer mon projet »**. Il sait exactement ce qu'il achète : de la croissance assistée par la tech.

### Journey 3: David (L'Expert Digital) - Opérations Internes
- **Opening Scene**: David commence sa journée à 14h. Sa boîte mail contient 3 leads pré-qualifiés par la vitrine.
- **Rising Action**: Grâce à la clarté du site et au ton direct de la marque, les prospects ne posent plus de questions de base sur les services. Ils demandent déjà des devis sur les 3 piliers spécifiques.
- **Climax**: David passe moins de temps à « évangéliser » et plus de temps à « certifier » les solutions (Méthode BMAD).
- **Resolution**: Le site agit comme un commercial expert asynchrone, permettant à David de maintenir l'objectif de 15k$/mois malgré ses contraintes horaires.

### Journey Requirements Summary
1. **Clarté catégorielle** : La navigation doit refléter les 3 piliers (Dev, Marketing, Automation) dès le premier coup d'œil.
2. **Preuve par le chiffre** : Chaque service doit être lié à un indicateur de ROI (ex: Marketing = Leads, Automation = Temps gagné).
3. **Double appel à l'action** : Distinguer le tunnel « Freelance/Upwork » du tunnel « Conseil/PME ».
4. **Cohérence brand** : Tagline, palette et ton visibles dès la première seconde.

## Innovation & Novel Patterns

### Detected Innovation Areas
- **Développement Web & Mobile « AI-First »** : Utilisation intensive de l'IA pour le prototypage et la génération de code, tout en maintenant une rigueur humaine via la méthodologie **BMAD**.
- **Answer Engine Optimization (AEO)** : Stratégie de marketing digital nativement conçue pour la visibilité sur les moteurs de réponse (ChatGPT, Perplexity, SearchGPT).
- **Agents IA Autonomes** : Transition du simple Zapier vers des agents capables de prendre des décisions et de gérer des workflows complexes pour les PME.

### Validation Approach
- **BMAD Certification** : Chaque composant généré par IA est soumis à une revue de code experte pour garantir la maintenabilité.
- **ROI Dashboard Sync** : Mesure directe de l'impact des agents IA sur les processus métier (gain de temps réel).
- **AEO Benchmarking** : Tests de visibilité sur les principaux moteurs IA du marché.
- **Brand Audit** : Vérification palette, typo, logo, contrastes et ton avant release.

### Risk Mitigation
- **Dépendance IA** : Maintenance d'une expertise humaine forte pour corriger les hallucinations ou bugs algorithmiques.
- **Évolution de l'AEO** : Veille constante sur les API des moteurs de réponse pour adapter les stratégies d'indexation.
- **Dérive visuelle** : Tout composant UI doit utiliser les design tokens Picsell (pas de palette ou typo hors charte).

## [Web App] Specific Requirements

### Project-Type Overview
- **Architecture SPA** : Single Page Application pour des transitions fluides et une immersion totale, au service de la précision perçue (« Precision in every pixel »).
- **Cible James (International)** : Optimisation maximale pour les navigateurs modernes et les connexions haut débit.

### Technical Architecture Considerations
- **SEO & AEO Ready** : SSR ou SSG pour une indexation parfaite par les moteurs IA (ChatGPT, Perplexity).
- **Accessibilité WCAG AA** : Contrastes conformes aux associations approuvées du brand guideline ; navigation clavier et sémantique HTML5.

### Implementation Considerations
- **Performance « Precision »** : Core Web Vitals (LCP, FID, CLS) dans le vert.
- **Design System Picsell** : Tokens couleur et typo du brand guideline ; animations 60 FPS (Framer Motion ou GSAP) sans effets hors charte (pas de glassmorphism/glow non validés).
- **Responsive Design** : Expérience premium sur Desktop d'abord (James), adaptée avec fluidité sur Mobile.
- **Thèmes** : Mode clair (`#F0F2F5`) par défaut ; mode sombre (`#080810`) optionnel avec logo couleur conservé.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy
- **Approach** : **Revenue & Experience MVP**. Générer 15k$/mois en offrant une expérience visuelle premium **conforme au brand guideline**, tout en restant techniquement léger (solo-dev).
- **Resource Requirements** : 1 Expert (David) + Supervision BMAD. GSAP/Framer Motion pour les animations aux couleurs officielles.

### MVP Feature Set (Phase 1)
- **Must-Have Capabilities** :
    - **Hero-Mouvement** : Animation SVG/CSS d'engrenages synchronisée au scroll, aux couleurs du logo (bleu `#0089D0`, turquoise `#3DBCC7`, orange `#F37021`, jaune `#FDB913`).
    - **Tagline hero** : « Precision in every pixel » + variante signature code dans la zone tech.
    - **Piliers Explicites** : Dev Web/Mobile, Marketing Digital (AEO), Automatisation.
    - **Effet « Fond Transparent »** : Visualisation interactive du code/automation dans les cas d'études.
    - **Portfolio** : 4 projets détaillés avec preuves de ROI chiffrées.
    - **Vidéo Démo Dashboard** : Preuve visuelle du futur outil de reporting.
    - **Design system Picsell** : Palette officielle, typographie Montserrat/Open Sans/ITC Bauhaus, CTA orange ou bleu, fonds `#F0F2F5` (clair) ou `#080810` (sombre).

### Post-MVP Features
- **Phase 2 (Growth)** :
    - Témoignages clients et études de cas supplémentaires.
    - Outil d'Auto-Audit IA (Lead Magnet pour Jean-Luc).
    - Beta du Dashboard interactif (lecture seule).
- **Phase 3 (Vision)** :
    - Dashboard ROI Live intégré.
    - IA Concierge (Sales Agent).
    - Écosystème de certifications Picsell.

### Risk Mitigation Strategy
- **Technical Risks** : Frameworks robustes (Next.js/Framer Motion) pour fluidité et SEO.
- **Market Risks** : Focus sur Upwork (James) pour un flux de leads rapide.
- **Resource Risks** : Architecture simplifiée pour maintenance solo en 1h/jour.
- **Brand Risks** : Checklist brand compliance intégrée au processus BMAD avant chaque release.

## Functional Requirements

### Identité & Design System Picsell
- **FR1** : Le système doit afficher une animation fluide d'engrenages (SVG) synchronisée avec le défilement, utilisant exclusivement les couleurs officielles du logo (bleu, turquoise, orange, jaune, noir).
- **FR2** : Le site doit implémenter le design system Picsell : palette (`#0089D0`, `#3DBCC7`, `#F37021`, `#FDB913`, `#1A1A1A`, `#F0F2F5`, `#080810`), typographie officielle et hiérarchie couleur 60/30/10.
- **FR3** : Le visiteur doit pouvoir naviguer entre les pages sans rechargement visible (expérience SPA).
- **FR20** : Le hero et le footer doivent afficher la tagline « Precision in every pixel ».
- **FR21** : Les zones tech/code doivent afficher la signature `</> Precision in every pixel` en Courier New `#3DBCC7`.
- **FR22** : Le logo officiel doit respecter zone de protection, tailles minimales (32 px digital) et usages autorisés du brand guideline.
- **FR23** : Les CTA doivent utiliser fond `#F37021` ou `#0089D0`, texte blanc, `border-radius` ≤ 2 px.
- **FR24** : Tous les textes marketing doivent respecter le ton brand (précis, direct, humain, ambitieux) et les formulations approuvées/interdites.

### Vitrine des 3 Piliers (Dev, Marketing, Auto)
- **FR4** : Le visiteur peut consulter les détails spécifiques de l'offre « Développement Web & Mobile ».
- **FR5** : Le visiteur peut consulter les détails de l'offre « Marketing Digital / AEO ».
- **FR6** : Le visiteur peut consulter les détails de l'offre « Automatisation de Workflows ».
- **FR7** : Le catalogue doit permettre une hiérarchisation visuelle claire des services.

### Preuve de Rigueur (Inside the Engine)
- **FR8** : Le système doit exposer la stack technique utilisée par l'agence.
- **FR9** : Le visiteur peut consulter le manifeste de la méthodologie **BMAD**.
- **FR10** : Le visiteur peut activer l'effet « Fond Transparent » sur les cas d'études pour voir la mécanique technique (code/schémas).

### Portfolio & Réassurance
- **FR11** : Le système doit présenter 4 études de cas détaillées.
- **FR12** : Chaque étude de cas doit afficher des indicateurs de ROI mesurables (ex: temps gagné, leads générés).
- **FR13** : Le système doit permettre le visionnage de la vidéo démo du « Dashboard ROI ».

### Conversion & Tunnels
- **FR14** : Le système doit proposer un accès direct vers le profil Upwork de David (tunnel James).
- **FR15** : Le système doit proposer un formulaire de consultation directe (tunnel Jean-Luc).
- **FR16** : Le système doit capturer les intentions des leads selon les 3 piliers de services.

### Excellence Technique & Analytics
- **FR17** : Le site doit être nativement optimisé pour l'indexation par les moteurs IA (AEO-Ready).
- **FR18** : Le système doit garantir une accessibilité de niveau WCAG AA, en respectant les associations de couleurs approuvées du brand guideline.
- **FR19** : Le système doit intégrer **Google Analytics (GA4)** pour le suivi du comportement utilisateur et des conversions (James & Jean-Luc).

## Non-Functional Requirements

### Performance
- **LCP (Largest Contentful Paint)** : < 1.5s sur les réseaux haut débit.
- **Fluidité des Animations** : 60 FPS constants (GSAP/Framer Motion).
- **Optimisation Assets** : Formats modernes (WebP, Avif, SVG minifié).

### Security
- **Confidentialité** : Chiffrement TLS (HTTPS) pour tous les flux de données.
- **Protection des Formulaires** : Validation rigoureuse côté serveur pour prévenir les injections.

### Accessibility
- **Standard WCAG AA** : Contrastes validés selon les associations approuvées du brand guideline (éviter orange sur jaune, bleu sur turquoise, blanc sur blanc cassé).
- **Inclusion** : Lisibilité optimale sur tous les supports (Desktop-first pour James).

### Brand & Visual Consistency
- **Conformité charte** : 100 % des écrans MVP passent la checklist brand (couleurs, typo, logo, CTA, ton) avant release.
- **Hashtags sociaux** (hors scope site, référence) : `#PicsellAgency` `#PrecisionInEveryPixel`.

### Reliability
- **Disponibilité (Uptime)** : Cible de 99.9%.
- **Maintenance** : Page de maintenance conforme au design system Picsell (fond `#F0F2F5` ou `#080810`, logo, message direct sans métaphore alambiquée).
