# 🚀 30 Idées d'Amélioration — Picsell Agency Vitrine (Scrollytelling & UX)
*Brainstorming d'équipe BMAD (Party Mode)*

Ce document répertorie les 30 propositions d'améliorations esthétiques, interactives et techniques formulées par les experts de l'équipe BMAD pour sublimer la page vitrine et l'expérience Scrollytelling de Picsell Agency.

---

## 👩‍💻 1. Amelia — Développement React & Animations GSAP
*Focus : Fluidité, dynamisme, micro-interactions et maîtrise de GSAP.*

- [ ] **01. Velocity-based Rotation** : Accélérer la vitesse de rotation des engrenages proportionnellement à la vélocité du défilement avec une décélération élastique naturelle à l'arrêt du scroll.
- [ ] **02. Effet Scroll-Snap GSAP** : Mettre en place un accrochage magnétique doux qui centre automatiquement la carte de l'expertise consultée au milieu du viewport.
- [ ] **03. SplitText / Text Reveal** : Animer l'apparition des titres et paragraphes mot par mot ou lettre par lettre à la manière d'une frappe d'horlogerie de précision.
- [ ] **04. DrawSVG (Tracé initial)** : Au premier chargement de la page, révéler les contours vectoriels des engrenages comme un dessin technique qui s'assemble avant de commencer à tourner.
- [x] **05. Glow & Halo Dynamique** : Faire émettre à l'engrenage actif et à son arrière-plan une lumière néon (`drop-shadow` et aura diffuse) de sa couleur de marque dédiée. *(Testé & Implémenté sur `feat/dark-mode-scroll`)*
- [ ] **06. Parallaxe sur les badges & tags** : Décaler la vitesse de scroll des pills/badges par rapport au texte pour créer un effet de profondeur 3D multicouche.
- [ ] **07. Animation d'entrée du Hero** : Emboîter les mots du slogan principal *"La précision, moteur..."* comme des rouages mécaniques lors de l'apparition initiale.
- [ ] **08. Typing / Live Counter sur Data** : Dans le module Data Intelligence, animer des chiffres et métriques en temps réel qui défilent à toute allure puis se figent avec précision.
- [ ] **09. Magnetic Buttons** : Rendre les boutons CTA du Hero et du Footer magnétiques en les attirant subtilement vers le curseur lors du survol.
- [ ] **10. Curseur interactif (Custom Gear Cursor)** : Remplacer la souris par un pointeur minimaliste en forme de mini-engrenage qui pivote avec les mouvements de la souris.

---

## 🎨 2. Sally — UI/UX & Direction Artistique
*Focus : Élégance, identité de marque, immersion visuelle et prestige.*

- [x] **01. Transition Jour/Nuit (Dark Mode Scroll)** : Transitionner progressivement le fond blanc épuré du Hero vers un noir obsidienne profond (`#06070a`) lors de l'entrée dans les expertises. *(Testé & Implémenté sur `feat/dark-mode-scroll`)*
- [x] **02. Glassmorphism Premium** : Encapsuler chaque section dans une carte en verre dépoli (`backdrop-blur-2xl`, bordures fines semi-transparentes et reflets irisés) pour une lisibilité maximale sur tous les écrans. *(Testé & Implémenté sur `feat/glassmorphism-premium`)*
- [x] **03. Typographie "Outline" réactive** : Styliser les grands numéros `01, 02, 03, 04` en contour filaire vide, se remplissant de couleur néon vibrante et brillante selon le module actif. *(Testé & Implémenté sur `feat/reactive-outline-typography`)*
- [x] **04. Bruit texturé (Noise Overlay)** : Ajouter une couche très subtile de grain photographique (film noise) en arrière-plan pour un rendu éditorial haut de gamme. *(Testé & Implémenté sur `feat/noise-overlay`)*
- [x] **05. Lignes de force & Grille Blueprint** : Dessiner de fines lignes géométriques lumineuses en arrière-plan rappelant des plans d'architecte et d'ingénierie logicielle. *(Testé & Implémenté sur `feat/blueprint-grid`)*
- [x] **06. Micro-interactions sur les badges** : Illuminer intensément les tags de compétences (`Stratégie`, `Next.js`, etc.) avec une onde lumineuse au survol de la souris. *(Testé & Implémenté sur `feat/badge-micro-interactions`)*
- [x] **07. Clipping Mask visuel** : Dévoiler des textures abstraites ou des aperçus de code source à travers les découpes des grands chiffres vectoriels. *(Testé & Implémenté sur `feat/clipping-mask-typography`)*
- [ ] **08. Anneau de progression circulaire** : Remplacer le compteur texte par un anneau circulaire lumineux autour de l'engrenage central qui se remplit à 25%, 50%, 75% et 100%.
- [ ] **09. Contrastes typographiques extrêmes** : Associer une police Serif/Sora très grasse pour les titres à une typographie Monospace technique pour les métadonnées et indices.
- [ ] **10. CTA Flottant contextuel** : Afficher un bouton d'action discret et sticky dont l'intitulé s'adapte en temps réel au service en cours de lecture.

---

## 📐 3. Winston — Architecture, Performance & Bonnes Pratiques
*Focus : 60 FPS constants, scalabilité, accessibilité et robustesse.*

- [ ] **01. Intégration de Lenis (Smooth Scrolling)** : Intégrer la bibliothèque Lenis pour unifier et lisser l'inertie du défilement souris/trackpad sur tous les navigateurs.
- [ ] **02. Accélération 100% GPU (CSS Hardware Acceleration)** : Restreindre strictement les animations GSAP aux propriétés `transform` (GPU) et `opacity` afin d'éviter tout Layout Repaint.
- [ ] **03. GSAP MatchMedia (Responsive conditionnel)** : Définir des timelines et comportements distincts pour Mobile (écrans tactiles) et Desktop (souris haute précision).
- [ ] **04. Respect du `prefers-reduced-motion`** : Désactiver automatiquement les rotations rapides et effets intenses pour les utilisateurs ayant activé l'option d'accessibilité sur leur système.
- [ ] **05. Lazy Loading et Hydratation progressive** : Différer l'exécution des scripts lourds hors du viewport initial pour un First Contentful Paint (FCP) instantané.
- [ ] **06. Modularisation vectorielle (Gear Data Config)** : Extraire les coordonnées et rayons des engrenages dans un fichier de configuration TypeScript pur pour faciliter l'ajout de nouveaux modules.
- [ ] **07. Mémoïsation React (`React.memo`)** : Isoler le composant SVG pour empêcher les re-rendus inutiles du cycle React pendant que GSAP pilote le DOM directement.
- [ ] **08. Prévention des Layout Shifts (CLS 0)** : Définir des ratios stricts (`aspect-ratio`) sur les conteneurs d'engrenages pour éviter tout saut d'écran au chargement des polices.
- [ ] **09. Isolation SSR & Hook Isomorphe** : Sécuriser l'enregistrement des plugins GSAP avec un cycle de vie contrôlé sans flash visuel avant hydratation.
- [ ] **10. Mode Éco-responsable** : Détecter la batterie faible ou le mode économie d'énergie pour réduire les calculs d'ombres et le framerate de fond.

---

*Document généré par l'équipe BMAD pour Picsell Agency.*
