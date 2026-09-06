export interface CaseStudy {
  id: string;
  pillarId: "marketing" | "automation" | "development" | "data";
  complication: string;
  pillarName: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  sector: string;
  challenge: string;
  solution: string;
  architecture: string[];
  stack: string[];
  metrics: {
    label: string;
    value: string;
    subtext: string;
    isHighlight?: boolean;
  }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  accentColor: string;
  badge: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ngalula-luxury",
    pillarId: "marketing",
    complication: "Complication Calendrier Perpétuel",
    pillarName: "Marketing & Performance",
    title: "L'Heure Marchande // Haute Couture & Retail Panafricain",
    subtitle: "Orchestration cookieless & conversion haute valeur",
    client: "Maison Ngalula",
    location: "Kinshasa — Paris",
    sector: "Luxe & E-Commerce",
    challenge:
      "Chute de 40% de la visibilité d'attribution publicitaire suite aux restrictions iOS/Safari et absence de traçabilité des paniers d'achat haute valeur entre la diaspora et les boutiques locales.",
    solution:
      "Déploiement d'une Customer Data Platform (CDP) 1st-party avec Meta Conversions API Server-Side, attribution multi-touch bayésienne et campagnes d'enchères dynamiques synchronisées sur les stocks réels.",
    architecture: [
      "Next.js 15 Edge Middleware pour capture cookieless",
      "Meta CAPI Gateway auto-hébergée (latence < 200ms)",
      "Pipeline d'attribution pondérée multi-touch",
      "Segmentations dynamiques RFM haute valeur"
    ],
    stack: ["Next.js 15", "Meta Conversions API", "BigQuery", "Tailwind CSS", "Stripe API"],
    metrics: [
      { label: "Surplus ROAS", value: "+340%", subtext: "De 2.1x à 7.2x mesuré", isHighlight: true },
      { label: "Chiffre d'Affaires", value: "+124 k$", subtext: "Généré en 90 jours", isHighlight: false },
      { label: "Baisse du CAC", value: "-46%", subtext: "Acquisition qualifiée", isHighlight: false },
      { label: "Taux Réachat", value: "+28%", subtext: "Fidélisation VIP", isHighlight: false }
    ],
    quote: {
      text: "La précision du tracking et la rentabilité publicitaire atteinte avec Picsell ont transformé nos lancements de collections internationales en succès immédiats.",
      author: "Mireille Ngalula",
      role: "Directrice Générale, Maison Ngalula"
    },
    accentColor: "var(--pic-orange, #f37021)",
    badge: "ROAS +340%"
  },
  {
    id: "katanga-supply-chain",
    pillarId: "automation",
    complication: "Complication Tourbillon",
    pillarName: "Automatisation & Processus IA",
    title: "Le Rouage Logistique // Fret & Supply Chain Minière",
    subtitle: "Automatisation documentaire autonome par vision multimodale",
    client: "Katanga Logistics Hub",
    location: "Kolwezi — Lubumbashi",
    sector: "Mines & Fret International",
    challenge:
      "Traitement manuel de plus de 1 200 manifestes de transport et bordereaux douaniers par semaine, générant des retards de 4 à 6 heures par convoi et des pénalités de dédouanement chroniques.",
    solution:
      "Architecture de vision IA autonome (Gemini 2.5 Vision) combinée à des agents n8n pour l'extraction automatique, le contrôle douanier croisé ERP et la notification instantanée aux transporteurs.",
    architecture: [
      "OCR multimodal haute résolution avec tolérance poussière & manuscrit",
      "Orchestrateur d'agents n8n Enterprise avec file d'attente Redis",
      "Réconciliation instantanée avec base ERP douanière",
      "Boucle de contrôle humain asynchrone pour cas ambigus"
    ],
    stack: ["Gemini Vision API", "n8n Enterprise", "PostgreSQL", "Redis", "Docker Swarm"],
    metrics: [
      { label: "Temps / Dossier", value: "-82%", subtext: "De 4h15 à 18s par convoi", isHighlight: true },
      { label: "Précision OCR", value: "99.8%", subtext: "Documents manuscrits", isHighlight: false },
      { label: "Économie Annuelle", value: "85 k$", subtext: "Pénalités évitées", isHighlight: false },
      { label: "Taux d'Erreur", value: "0.00%", subtext: "Après supervision", isHighlight: false }
    ],
    quote: {
      text: "Nos camions ne sont plus bloqués aux postes de pesage. Le système d'IA de Picsell traite les manifestes plus vite que nos équipes n'auraient pu le rêver.",
      author: "Patrick Ilunga",
      role: "Directeur des Opérations, Katanga Hub"
    },
    accentColor: "var(--pic-turquoise, #3dbcc7)",
    badge: "-82% TEMPS"
  },
  {
    id: "kongopay-fintech",
    pillarId: "development",
    complication: "Complication Chronographe",
    pillarName: "Ingénierie & Plateformes Web",
    title: "Le Cadran Monétaire // Passerelle Fintech Mobile Money",
    subtitle: "Résilience réseau extrême & paiements sans friction",
    client: "KongoPay Gateway",
    location: "Kinshasa, RDC",
    sector: "Fintech & Micro-Paiements",
    challenge:
      "Instabilité récurrente lors des micro-coupures réseau 3G/4G, provoquant jusqu'à 18% d'abandons lors du checkout et une incapacité à encaisser les pics de volume mensuels.",
    solution:
      "Refonte intégrale en Next.js 15 App Router avec gestion de reprise hors-ligne (Offline-First), traitement idempotent des transactions et edge caching distribué multi-opérateurs (M-Pesa, Orange, Airtel).",
    architecture: [
      "Next.js 15 App Router avec Server Actions optimisées",
      "File de messages distribuée avec déduplication stricte",
      "Fallback résilient multi-opérateurs Mobile Money",
      "Interface utilisateur réactive < 100ms avec Lenis scroll"
    ],
    stack: ["Next.js 15", "TypeScript Strict", "Redis Upstash", "PostgreSQL", "Tailwind CSS v4"],
    metrics: [
      { label: "Latence API", value: "< 85 ms", subtext: "Vs 450ms auparavant", isHighlight: true },
      { label: "Disponibilité", value: "99.99%", subtext: "SLA garanti 365j", isHighlight: false },
      { label: "Volume Traité", value: "+215%", subtext: "3.4M$ traités / an", isHighlight: false },
      { label: "Taux d'Abandon", value: "-64%", subtext: "Checkout optimisé", isHighlight: false }
    ],
    quote: {
      text: "La fiabilité technique de l'application construite par Picsell nous a permis d'obtenir l'agrément bancaire et de tripler nos volumes de transactions.",
      author: "Dieudonné Makiese",
      role: "Chief Technology Officer, KongoPay"
    },
    accentColor: "var(--pic-blue, #0089d0)",
    badge: "99.99% SLA"
  },
  {
    id: "telecom-churn-intelligence",
    pillarId: "data",
    complication: "Complication Grande Sonnerie",
    pillarName: "IA Stratégique & Data Intelligence",
    title: "La Grande Sonnerie // Moteur Décisionnel Télécoms",
    subtitle: "Télémétrie continue & prédiction proactive du churn",
    client: "Opérateur Réseau Mobile",
    location: "RDC & Région Grands Lacs",
    sector: "Télécoms & Big Data",
    challenge:
      "Perte mensuelle d'abonnés premium sans signaux annonciateurs, avec des rapports décisionnels historiques livrés avec 3 semaines de latence par les équipes BI classiques.",
    solution:
      "Mise en place d'un moteur de télémétrie haute fréquence ingérant 48 500 événements par seconde, couplé à un modèle d'apprentissage supervisé générant des alertes prédictives 12 jours avant désengagement.",
    architecture: [
      "Pipeline d'ingestion haute vélocité avec DuckDB & Kafka",
      "Modèle prédictif local de churn entraîné sur l'historique d'usage",
      "Dashboard de télémétrie en temps réel avec graphiques vectoriels",
      "Déclencheur d'offres de rétention automatisées par SMS/USSD"
    ],
    stack: ["DuckDB", "Apache Arrow", "Python / FastAPI", "Next.js 15", "GSAP / Canvas"],
    metrics: [
      { label: "Baisse du Churn", value: "-38%", subtext: "Résiliations évitées", isHighlight: true },
      { label: "Flux Télémétrique", value: "48.5 k/s", subtext: "Événements traités", isHighlight: false },
      { label: "Revenu Préservé", value: "310 k$", subtext: "Valeur client sauvée", isHighlight: false },
      { label: "Détection Proactive", value: "< 12 h", subtext: "Vs 21 jours avant", isHighlight: false }
    ],
    quote: {
      text: "Le passage d'un reporting passif à un moteur d'intelligence en continu a totalement métamorphosé notre rentabilité et la fidélisation de nos clients stratégiques.",
      author: "Jean-Marc Kabemba",
      role: "Directeur Stratégie Clientèle"
    },
    accentColor: "var(--pic-gold, #fdb913)",
    badge: "-38% CHURN"
  }
];
