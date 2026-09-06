---
stepsCompleted: [1, 2, 3, 4, 5, 6]
workflowType: 'epics-and-stories'
lastStep: 6
status: 'complete_and_harmonized'
completedAt: '2026-01-27'
updatedAt: '2026-09-06'
inputDocuments:
  - '_bmad-output/planning-artifacts/prd.md'
  - '_bmad-output/planning-artifacts/prd-validation-report.md'
  - '_bmad-output/planning-artifacts/architecture.md'
  - 'docs/project-context.md'
  - 'src/config/gears.config.ts'
project_name: 'picsell.agency'
user_name: 'David'
scrum_master: 'Bob (Technical Scrum Master 🏃)'
---

# picsell.agency - Epic & Story Breakdown (Version Consolidée)

_Découpage agile exhaustif, rigoureusement aligné sur les 28 Exigences Fonctionnelles (FR1 à FR28) du PRD certifié (98/100) et l'Architecture Technique du moteur vectoriel._

---

## 1. Inventaire des Exigences & Cartographie de Couverture

### 1.1. Exigences Fonctionnelles (FR1 à FR28)
- **FR1** : Moteur cinématique vectoriel (Engrenage noir IA + 4 satellites chromatiques) synchronisé au scroll (60 FPS).
- **FR2** : Univers visuel "Midnight Luxury" (or, acier, blueprint vectoriel, typographie mécanique).
- **FR3** : Navigation fluide sans rechargement de page (Single Page Application).
- **FR4** : Fiche détaillée de l'offre "Développement Web & Mobile".
- **FR5** : Fiche détaillée de l'offre "Marketing Digital & AEO".
- **FR6** : Fiche détaillée de l'offre "Automatisation de Workflows".
- **FR7** : Fiche détaillée de l'offre "Data Analytics & IT".
- **FR8** : Formalisation visuelle de l'interconnexion mécanique entre le Moteur IA et les 4 piliers satellites.
- **FR9** : Exposition de la stack technique moderne de l'agence.
- **FR10** : Manifeste de la méthodologie BMAD (supervision experte humaine et zéro boîte noire).
- **FR11** : Mini-terminaux interactifs avec onglets de code source réel et schémas d'architecture.
- **FR12** : Effet interactif "Fond Transparent" révélant les couches techniques sous-jacentes.
- **FR13** : 4 études de cas représentatives couvrant chacun des 4 piliers.
- **FR14** : Indicateurs de ROI mesurables et quantifiés par étude de cas.
- **FR15** : Aperçu interactif ou vidéo du futur Dashboard ROI.
- **FR16** : Tiroir de réglages interactif Studio (Settings Drawer) avec profils Sally (UI), Amelia (Motion), Winston (Télémétrie/HUD).
- **FR17** : Curseur desktop cinématique en mini-engrenage réactif au survol des zones interactives.
- **FR18** : Boutons d'action principaux (CTA) à attraction magnétique et rappel élastique.
- **FR19** : Révélation mécanique en tracé vectoriel (DrawSVG) et typographie cadencée.
- **FR20** : Anneau radial de progression néon (25%, 50%, 75%, 100%) marquant l'exploration des 4 expertises.
- **FR21** : Compteurs numériques animés à haute vitesse simulant un flux de télémétrie en temps réel.
- **FR22** : Accès direct et qualifié vers le profil Upwork de David (Tunnel James - International).
- **FR23** : Formulaire de consultation stratégique avec qualification selon les 4 piliers (Tunnel Jean-Luc - PME).
- **FR24** : Suivi des événements et conversions via Google Analytics (GA4).
- **FR25** : Optimisation sémantique native pour l'indexation IA (AEO via JSON-LD Schema.org).
- **FR26** : Mode Éco Batterie automatique limitant la charge GPU sur batterie faible.
- **FR27** : Détection de la préférence d'accessibilité `prefers-reduced-motion` et neutralisation des animations lourdes.
- **FR28** : Conformité d'accessibilité WCAG 2.1 AA (navigation clavier, contrastes stricts, score Lighthouse >= 95).

### 1.2. Matrice de Couverture des Epics

| Epic | Titre de l'Epic | Exigences Couvertes |
| :---: | :--- | :--- |
| **Epic 1** | **Moteur Vectoriel Horloger & Immersion Cinématique** | FR1, FR2, FR3 |
| **Epic 2** | **Vitrine des 4 Piliers & Moteur Central IA** | FR4, FR5, FR6, FR7, FR8 |
| **Epic 3** | **Preuve d'Ingénierie, Manifeste BMAD & Terminaux de Code** | FR9, FR10, FR11, FR12 |
| **Epic 4** | **Portfolio Garde-Temps & Télémétrie ROI** | FR13, FR14, FR15, FR21 |
| **Epic 5** | **Studio Settings Drawer & Micro-Interactions de Luxe** | FR16, FR17, FR18, FR19, FR20 |
| **Epic 6** | **Tunnels de Conversion, AEO & Résilience Système** | FR22, FR23, FR24, FR25, FR26, FR27, FR28 |

---

## 2. Découpage Détaillé des Epics et User Stories

---

### Epic 1 : Moteur Vectoriel Horloger & Immersion Cinématique
**Objectif :** Poser immédiatement l'univers "Haute Horlogerie Digitale" et offrir une immersion 60/120 FPS dès les premières secondes.

#### Story 1.1 : Moteur Vectoriel SVG Synchrone (GearEngine)
- **En tant que** visiteur international (James),
- **Je veux** observer l'engrenage central noir (Moteur IA) et les 4 engrenages satellites tourner en parfaite synchronisation avec mon défilement,
- **Afin de** constater visuellement le niveau de maîtrise technique et de rigueur mathématique de Picsell.
- **Critères d'Acceptation :**
  - **Given** les définitions géométriques de `gears.config.ts` (rayons primitifs, pas de denture, coordonnées cartésiennes).
  - **When** l'utilisateur fait défiler la page vers le bas ou le haut.
  - **Then** l'engrenage noir central pivote et entraîne les 4 satellites (`development`, `marketing`, `automation`, `data`) avec des ratios angulaires stricts.
  - **And** le rendu utilise des transformations vectorielles pures sans saccades à 60 FPS constants minimum.

#### Story 1.2 : Pipeline Scrollytelling Lenis + GSAP ScrollTrigger
- **En tant que** visiteur,
- **Je veux** une inertie de défilement unifiée et ultra-fluide sur l'ensemble de la page,
- **Afin d'**expérimenter une navigation haut de gamme sans frottement.
- **Critères d'Acceptation :**
  - **Given** le composant `SmoothScrollProvider.tsx`.
  - **When** la page est chargée.
  - **Then** Lenis intercepte les événements de scroll et synchronise son ticker avec le RAF ticker de GSAP (`gsap.ticker.add`).
  - **And** aucun lag ou saut visuel n'intervient lors des changements de vitesse de défilement.

#### Story 1.3 : Univers Visuel Midnight Luxury & Grille Blueprint
- **En tant que** visiteur,
- **Je veux** être immergé dans un environnement graphique alliant noir profond, accents or/acier et canevas technique,
- **Afin de** percevoir immédiatement l'identité prestigieuse "Luxury Tech".
- **Critères d'Acceptation :**
  - **Given** les composants `BlueprintGrid.tsx` et `NoiseOverlay.tsx`.
  - **When** la page est affichée.
  - **Then** la grille d'architecte Blueprint et le grain photographique subtil habillent l'arrière-plan avec opacité maîtrisée.
  - **And** la typographie code/monospace structure les indices numériques et les légendes d'ingénierie.

---

### Epic 2 : Vitrine des 4 Piliers & Moteur Central IA
**Objectif :** Présenter avec clarté absolue les 4 domaines d'accélération et leur symbiose avec le moteur IA.

#### Story 2.1 : Catalogue des 4 Complications (Services)
- **En tant que** dirigeant de PME (Jean-Luc),
- **Je veux** consulter les fiches détaillées des 4 piliers d'expertise,
- **Afin de** cibler exactement le levier qui va accélérer la rentabilité de mon entreprise.
- **Critères d'Acceptation :**
  - **Given** le composant `ScrollytellingSection.tsx`.
  - **When** le visiteur parcourt le catalogue de services.
  - **Then** 4 sections dédiées s'affichent distinctement :
    1. *Développement Web & Mobile* (Next.js, architectures d'entreprise).
    2. *Marketing Digital & AEO* (Domination des moteurs de réponse IA).
    3. *Automatisation de Workflows* (Orchestration d'agents et élimination des tâches chronophages).
    4. *Data Analytics & IT* (Infrastructures cloud et tableaux de bord décisionnels).
  - **And** chaque fiche formule explicitement le gain métier et le ROI opérationnel.

#### Story 2.2 : Couplage Mécanique & Visualisation du Moteur Central IA
- **En tant que** prospect technique (James),
- **Je veux** visualiser comment le Moteur IA démultiplie chacun des 4 piliers,
- **Afin de** m'assurer que l'IA n'est pas un mot-clé marketing mais un catalyseur d'ingénierie concret.
- **Critères d'Acceptation :**
  - **Given** la carte active d'un pilier de service.
  - **When** l'engrenage satellite correspondant entre en résonance au scroll.
  - **Then** une mise en surbrillance visuelle connecte l'engrenage noir central IA au pilier actif.
  - **And** un descriptif synthétise l'apport technologique spécifique de l'IA pour ce domaine.

#### Story 2.3 : Navigation Continue SPA & Transitions Fluides
- **En tant que** visiteur,
- **Je veux** basculer entre les sections et les pages contextuelles sans rechargement complet,
- **Afin de** conserver une immersion ininterrompue.
- **Critères d'Acceptation :**
  - **Given** la structure Next.js App Router.
  - **When** un lien interne ou une ancre est activé.
  - **Then** la transition s'effectue de façon instantanée avec morphing d'interface sans rafraîchissement blanc du navigateur.

---

### Epic 3 : Preuve d'Ingénierie, Manifeste BMAD & Terminaux de Code
**Objectif :** Établir une confiance technique inébranlable auprès des profils les plus exigeants en exposant l'artisanat du code.

#### Story 3.1 : Manifeste Méthodologique BMAD & Stack Technique
- **En tant que** client international (James),
- **Je veux** lire le manifeste de la méthode BMAD et auditer la stack technique,
- **Afin de** vérifier que les solutions livrées sont maintenables, documentées et sans boîte noire.
- **Critères d'Acceptation :**
  - **Given** la section "Inside the Engine".
  - **When** le visiteur examine la méthodologie.
  - **Then** les principes de la supervision experte humaine et de la chaîne qualité BMAD sont exposés avec précision.
  - **And** les technologies d'infrastructure (Next.js, TypeScript, GSAP, Tailwind, Vercel) sont listées avec leurs versions validées.

#### Story 3.2 : Terminaux d'Ingénierie Code Interactifs
- **En tant que** Tech Lead / Décideur technique (James),
- **Je veux** inspecter de vrais extraits de code source et de schémas d'architecture dans les cartes de service,
- **Afin d'**évaluer concrètement la qualité d'écriture et les standards d'ingénierie de Picsell.
- **Critères d'Acceptation :**
  - **Given** le composant `EngineeringTerminal.tsx`.
  - **When** le visiteur clique sur les onglets du terminal (ex: `schema.ts`, `workflow.json`, `pipeline.yml`).
  - **Then** le code source s'affiche avec coloration syntaxique d'entreprise et numérotation de lignes.
  - **And** un bouton permet de copier ou d'agrandir l'extrait sans rupture d'interaction.

#### Story 3.3 : Mode "Fond Transparent" (Glass-Engine)
- **En tant que** visiteur,
- **Je veux** activer un basculement visuel pour voir les entrailles logicielles sous les interfaces,
- **Afin de** comprendre la mécanique interne qui produit le résultat final.
- **Critères d'Acceptation :**
  - **Given** une étude de cas ou une carte de service.
  - **When** le visiteur active le switch "Fond Transparent".
  - **Then** le calque UI se dissout pour révéler la structure de données ou le diagramme vectoriel sous-jacent.

---

### Epic 4 : Portfolio Garde-Temps & Télémétrie ROI
**Objectif :** Démontrer la valeur par la preuve chiffrée à travers 4 cas d'études emblématiques et des flux de données en direct.

#### Story 4.1 : Vitrine des 4 Études de Cas "Garde-Temps"
- **En tant que** prospect (Jean-Luc ou James),
- **Je veux** explorer 4 projets emblématiques correspondant à chacun des 4 piliers,
- **Afin de** juger de la capacité d'exécution sur des cas concrets de mon secteur.
- **Critères d'Acceptation :**
  - **Given** la section Portfolio Garde-Temps.
  - **When** le visiteur parcourt les projets.
  - **Then** 4 études de cas représentatives s'affichent avec visuels de haute précision, contexte métier et stack déployée.

#### Story 4.2 : Indicateurs de ROI & Télémétrie Live Counter
- **En tant que** dirigeant,
- **Je veux** voir des indicateurs de ROI chiffrés et des compteurs animés à haute vitesse,
- **Afin de** matérialiser le retour sur investissement direct de chaque solution.
- **Critères d'Acceptation :**
  - **Given** le composant `DataLiveCounter.tsx`.
  - **When** la section entre dans le viewport.
  - **Then** les compteurs numériques s'incrémentent avec un effet de télémétrie cadencé (temps gagné, volume de leads, disponibilité 99.9%).

#### Story 4.3 : Showcase Vidéo Démo du Dashboard ROI
- **En tant que** client potentiel (Jean-Luc),
- **Je veux** visionner un walkthrough visuel fluide du futur tableau de bord de pilotage,
- **Afin d'**être rassuré sur la façon dont je pourrai suivre mes résultats en temps réel.
- **Critères d'Acceptation :**
  - **Given** le conteneur média de démo.
  - **When** l'utilisateur lance la démonstration.
  - **Then** le lecteur vidéo minimaliste démarre sans dégrader le LCP de la page.

---

### Epic 5 : Studio Settings Drawer & Micro-Interactions de Luxe
**Objectif :** Transformer la vitrine en un banc d'essai interactif haut de gamme où le visiteur calibre lui-même l'expérience.

#### Story 5.1 : Tiroir de Réglages Interactif Studio (Settings Drawer)
- **En tant que** visiteur curieux ou auditeur technique,
- **Je veux** ouvrir un tiroir de réglages pour modifier en direct les paramètres de la vitrine selon 3 profils d'experts BMAD,
- **Afin de** tester la réactivité et la flexibilité du système.
- **Critères d'Acceptation :**
  - **Given** les composants `SettingsDrawer.tsx` et `SettingsContext.tsx`.
  - **When** le tiroir est déployé.
  - **Then** 3 onglets d'experts sont sélectionnables :
    - *Sally (UI / Finition)* : Thème chromatique, mode de contraste, densité visuelle.
    - *Amelia (Motion / Dynamique)* : Vitesse de rotation des rouages, intensité des particules, inertie.
    - *Winston (Architecture / Télémétrie)* : Affichage de l'overlay HUD live, monitoring FPS et toggle Mode Éco.
  - **And** les réglages s'appliquent instantanément au DOM et sont mémorisés dans le `localStorage`.

#### Story 5.2 : Curseur Cinématique Engrenage & Boutons Magnétiques
- **En tant que** visiteur desktop,
- **Je veux** un pointeur personnalisé en mini-engrenage et des boutons magnétiques qui s'aimantent à mon curseur,
- **Afin de** ressentir le raffinement et la précision horlogère à chaque interaction.
- **Critères d'Acceptation :**
  - **Given** `CustomGearCursor.tsx` et `MagneticButton.tsx`.
  - **When** le curseur survole un bouton d'action ou un lien interactif.
  - **Then** l'engrenage du curseur accélère sa rotation et le bouton subit une attraction physique élastique vers le curseur.

#### Story 5.3 : Révélation Vectorielle DrawSVG & Anneau Radial (25% à 100%)
- **En tant que** visiteur,
- **Je veux** voir les tracés vectoriels se dessiner mécaniquement et mon avancement suivi par un anneau radial néon,
- **Afin de** me repérer précisément dans la progression des 4 piliers.
- **Critères d'Acceptation :**
  - **Given** `CircularProgressRing.tsx` et `SplitTextReveal.tsx`.
  - **When** l'utilisateur défile à travers les 4 sections d'expertise.
  - **Then** l'anneau radial se remplit par paliers de 25% (25%, 50%, 75%, 100%) avec une lueur néon réactive.
  - **And** les titres apparaissent lettre par lettre avec une frappe horlogère rythmée.

---

### Epic 6 : Tunnels de Conversion, AEO & Résilience Système
**Objectif :** Convertir les deux cibles (James et Jean-Luc) avec zéro friction, tout en garantissant des performances et une accessibilité irréprochables.

#### Story 6.1 : Double Tunnel de Conversion Qualifié
- **En tant qu'**entrepreneur ou donneur d'ordre,
- **Je veux** un accès direct et sécurisé correspondant à mon mode d'engagement privilégié,
- **Afin de** démarrer ma collaboration avec David sans perte de temps.
- **Critères d'Acceptation :**
  - **Given** les composants de conversion et CTA flottants (`ContextualFloatingCTA.tsx`).
  - **When** James clique sur "Hire on Upwork".
  - **Then** un lien direct et vérifiable ouvre son environnement de contractualisation sécurisé.
  - **When** Jean-Luc souhaite une consultation stratégique.
  - **Then** un formulaire clair lui permet de sélectionner son pilier prioritaire avec validation instantanée côté serveur.

#### Story 6.2 : Structuration AEO Native & Intégration GA4
- **En tant qu'**opérateur (David),
- **Je veux** que la vitrine soit indexée en priorité par les moteurs de réponse IA et tracke précisément les conversions,
- **Afin de** générer un flux constant de prospects qualifiés.
- **Critères d'Acceptation :**
  - **Given** le layout Next.js racine.
  - **When** les bots d'IA (ChatGPT, Perplexity, Claude) explorent le site.
  - **Then** des balises JSON-LD Schema.org complètes décrivent l'agence, ses 4 services et sa réputation.
  - **And** les événements de conversion (ouvertures du studio drawer, sélections de piliers, clics CTA) sont envoyés à GA4.

#### Story 6.3 : Résilience Matérielle & Accessibilité WCAG AA
- **En tant qu'**utilisateur sur matériel contraignant ou avec des besoins d'accessibilité,
- **Je veux** que le site s'adapte automatiquement à mon niveau de batterie et respecte mes choix de mouvement,
- **Afin de** naviguer confortablement sans vider ma batterie ni subir de gêne visuelle.
- **Critères d'Acceptation :**
  - **Given** la détection de la Battery Status API et de la media query `prefers-reduced-motion`.
  - **When** la batterie passe sous les 20% ou que le mode mouvement réduit est activé par le système.
  - **Then** les animations d'engrenages complexes sont allégées ou figées en position noble.
  - **And** l'ensemble des parcours reste navigable au clavier avec des contrastes conformes WCAG 2.1 AA (score Lighthouse >= 95).

---

## 3. Matrice de Traçabilité Globale

```text
PRD (FR1 à FR3)   ──> Architecture (GearEngine/Lenis/GSAP)  ──> Epic 1 (Stories 1.1, 1.2, 1.3)
PRD (FR4 à FR8)   ──> Architecture (4 Piliers + Moteur IA)  ──> Epic 2 (Stories 2.1, 2.2, 2.3)
PRD (FR9 à FR12)  ──> Architecture (EngineeringTerminal)    ──> Epic 3 (Stories 3.1, 3.2, 3.3)
PRD (FR13 à FR15) ──> Architecture (DataLiveCounter)        ──> Epic 4 (Stories 4.1, 4.2, 4.3)
PRD (FR16 à FR21) ──> Architecture (SettingsDrawer/Context) ──> Epic 5 (Stories 5.1, 5.2, 5.3)
PRD (FR22 à FR28) ──> Architecture (AEO/Battery/WCAG/GA4)   ──> Epic 6 (Stories 6.1, 6.2, 6.3)
```

---

## 4. Statut & Prêt pour Sprint

- **Exhaustivité :** 100% des 28 exigences fonctionnelles et non-fonctionnelles sont couvertes.
- **Granularité :** 18 stories d'ingénierie précisément délimitées avec critères d'acceptation de type Given/When/Then.
- **Statut de validation :** **READY FOR SPRINT STATUS INITIALIZATION ✅**.

---
*Document certifié par Bob, Technical Scrum Master (BMad Method) 🏃.*
