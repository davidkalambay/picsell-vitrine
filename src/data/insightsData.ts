export interface ArticleSection {
  title: string;
  content: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  callout?: {
    type: "info" | "warning" | "tip" | "takeaway";
    text: string;
  };
}

export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: "Ingénierie & Code" | "Automatisation IA & n8n" | "Marketing Cookieless" | "Architecture & ROI";
  categoryColor: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarBadge: string;
    bio: string;
  };
  excerpt: string;
  keyTakeaway: string;
  sections: ArticleSection[];
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: "l-image-qui-vend-pourquoi-votre-interface-est-votre-premier-commercial",
    title: "L'Image n'est pas de la Décoration : Pourquoi votre Interface est votre Premier Commercial",
    subtitle: "Comment convertir l'attention d'un visiteur en décision d'achat en moins de 3 secondes grâce à l'ingénierie visuelle et au scrollytelling émotionnel.",
    category: "Marketing Cookieless",
    categoryColor: "#f37021",
    readTime: "5 min de lecture",
    publishedAt: "Mars 2025",
    author: {
      name: "Jean-Luc Mukendi",
      role: "Co-fondateur & Dir. Stratégie & Croissance",
      avatarBadge: "Stratégie",
      bio: "Spécialiste de la monétisation numérique, du cadrage de valeur et des tunnels d'acquisition cookieless.",
    },
    excerpt: "Dans un marché saturé où chaque prospect vous juge en 3 secondes, l'image n'est plus un élément cosmétique : c'est un actif commercial qui vend ou qui fait fuir.",
    keyTakeaway: "Un design d'excellence n'est pas un coût de communication, c'est un accélérateur d'arbitrage qui divise par deux votre coût d'acquisition.",
    sections: [
      {
        title: "1. La sanction des 3 secondes",
        content: [
          "Aujourd'hui, votre prospect ne vous rencontre pas dans un bureau feutré. Il atterrit sur votre site depuis son smartphone, entre deux notifications.",
          "S'il ressent la moindre hésitation, une typographie générique ou un temps de chargement supérieur à 1 seconde, son pouce glisse vers le concurrent. L'esthétique de votre marque est votre premier argument de négociation.",
        ],
        callout: {
          type: "takeaway",
          text: "Chaque pixel est une promesse de rigueur. Si votre vitrine est approximative, le prospect présume que votre produit l'est aussi.",
        },
      },
      {
        title: "2. Le Scrollytelling : Remplacer l'argumentaire par l'expérience",
        content: [
          "Les longs blocs de texte indigestes sont morts. Le scrollytelling interactif guide l'œil du visiteur à travers une démonstration mécanique de votre valeur.",
          "En synchronisant les micro-animations GSAP au défilement naturel de l'utilisateur, on crée une sensation de contrôle et de fascination qui retient l'attention jusqu'au tunnel de conversion.",
        ],
        codeSnippet: {
          language: "tsx",
          caption: "Déclenchement cinétique d'argumentaire via GSAP ScrollTrigger",
          code: `// Exemple de révélation cinétique progressive
gsap.to(".feature-card", {
  scrollTrigger: {
    trigger: "#conversion-section",
    start: "top 60%",
    scrub: 0.5,
  },
  opacity: 1,
  y: 0,
  stagger: 0.15,
  ease: "power2.out"
});`,
        },
      },
      {
        title: "3. La fin des cookies tiers et le règne de l'attribution propriétaire",
        content: [
          "Avec la disparition programmée des cookies tiers et le durcissement des réglementations sur la vie privée, les stratégies d'acquisition fondées sur le retargeting aveugle s'effondrent.",
          "Les entreprises gagnantes sont celles qui capturent l'intention dès la première visite grâce à des calculateurs de ROI interactifs et des diagnostics instantanés.",
        ],
      },
    ],
  },
  {
    slug: "architecture-nextjs-zero-dette-technique-sub-100ms",
    title: "Next.js App Router & Architecture Zero-Dette : Livrer sous les 100ms",
    subtitle: "Les patterns d'ingénierie logicielle pour bâtir des applications web ultra-rapides, maintenables et sans régression avec React 19 et Cloudflare Edge.",
    category: "Ingénierie & Code",
    categoryColor: "#0089d0",
    readTime: "7 min de lecture",
    publishedAt: "Février 2025",
    author: {
      name: "David Kalambay",
      role: "CEO & Architecte Logiciel / IA",
      avatarBadge: "Architecture",
      bio: "Architecte système et ingénieur logiciel spécialisé dans les architectures cloud distribuées, Next.js et l'IA générative.",
    },
    excerpt: "Comment éliminer la dette technique dès le premier jour et atteindre un temps de réponse P99 inférieur à 100ms grâce à Next.js 15 et aux Server Components.",
    keyTakeaway: "La rapidité d'exécution n'est pas une question d'optimisation tardive, mais de discipline d'architecture dès le premier commit.",
    sections: [
      {
        title: "1. La tyrannie des dépendances superflues",
        content: [
          "Le premier réflexe d'un développement précipité est d'empiler des bibliothèques tierces pour chaque besoin graphique ou interactif.",
          "Chez Picsell Agency, nous appliquons une politique stricte : zéro dépendance non auditée. Nous privilégions le code natif, TypeScript strict et les primitives du navigateur pour préserver un bundle initial ultra-léger.",
        ],
        callout: {
          type: "tip",
          text: "Un bundle JS initial inférieur à 80kb garantit un First Contentful Paint sous les 300ms, même sur les réseaux mobiles 3G/4G.",
        },
      },
      {
        title: "2. Server Components vs Client Islands",
        content: [
          "En utilisant judicieusement les React Server Components pour le rendu statique et les îles clientes ('use client') uniquement pour les interactions horlogères complexes, nous éliminons tout calcul inutile côté client.",
        ],
        codeSnippet: {
          language: "tsx",
          caption: "Ségrégation stricte entre layout statique et composants interactifs",
          code: `// Server Component pur pour le référencement et la performance maximale
export default async function InsightsPage() {
  const articles = await getValidatedArticles();
  
  return (
    <div className="bg-[#06070a] text-white">
      <InsightsStaticHeader />
      <InsightsInteractiveFilter articles={articles} />
    </div>
  );
}`,
        },
      },
      {
        title: "3. La chambre d'épreuve : 100% de tests avant déploiement",
        content: [
          "Une ligne de code sans test est une dette différée à taux usuraire. Chaque module interactif doit disposer de ses tests unitaires et de ses validations d'accessibilité WCAG 2.1 AA intégrés dans un pipeline CI/CD automatisé.",
        ],
      },
    ],
  },
  {
    slug: "orchestration-ia-et-n8n-en-production",
    title: "Orchestration IA et n8n en Production : Éliminer la Friction Opérationnelle",
    subtitle: "Comment connecter vos LLMs, CRM, passerelles de paiement et messageries pour créer un moteur d'affaires autonome 24/7/365.",
    category: "Automatisation IA & n8n",
    categoryColor: "#3dbcc7",
    readTime: "6 min de lecture",
    publishedAt: "Janvier 2025",
    author: {
      name: "David Kalambay",
      role: "CEO & Architecte Logiciel / IA",
      avatarBadge: "Systèmes IA",
      bio: "Architecte système et ingénieur logiciel spécialisé dans les architectures cloud distribuées, Next.js et l'IA générative.",
    },
    excerpt: "Découvrez comment structurer des workflows n8n auto-réparateurs pour traiter vos leads WhatsApp, synchroniser vos ERP et déclencher des devis sans intervention humaine.",
    keyTakeaway: "L'automatisation IA bien conçue ne remplace pas l'humain, elle le libère des tâches répétitives pour concentrer son énergie sur la haute négociation.",
    sections: [
      {
        title: "1. Le piège des intégrations manuelles",
        content: [
          "Ressaisir manuellement des données de paiement, copier des contacts dans un CRM ou répondre aux mêmes questions fréquentes sur WhatsApp coûte en moyenne 14 heures par semaine à une équipe.",
          "En modélisant ces flux sous forme de rouages synchronisés avec n8n, nous transformons ces goulots d'étranglement en processus instantanés.",
        ],
      },
      {
        title: "2. Architecture d'un agent IA WhatsApp contextuel",
        content: [
          "Un assistant IA moderne ne doit pas se contenter de réponses vagues. Grâce au RAG (Retrieval-Augmented Generation), il interroge votre base de connaissances en temps réel pour renseigner le client sur vos tarifs, disponibilités et spécifications avec le ton exact de votre marque.",
        ],
        codeSnippet: {
          language: "json",
          caption: "Payload webhook n8n avec garde-fous de sécurité et typage strict",
          code: `{
  "event": "lead.qualified",
  "lead": {
    "source": "whatsapp_business",
    "intent": "strategic_audit",
    "budget_tier": "enterprise",
    "score": 94
  },
  "action": "trigger_calendar_booking_and_escrow_prep"
}`,
        },
      },
      {
        title: "3. Auto-healing et résilience des webhooks",
        content: [
          "En production, les APIs tierces subissent des micro-coupures. Nos workflows intègrent des mécanismes de retry exponentiel et des canaux de notification d'urgence pour qu'aucune opportunité commerciale ne soit perdue.",
        ],
      },
    ],
  },
];
