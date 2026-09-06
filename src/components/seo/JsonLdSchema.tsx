import React from "react";

export function JsonLdSchema() {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://picsell.agency/#organization",
        "name": "Picsell Agency",
        "url": "https://picsell.agency",
        "logo": "https://picsell.agency/logo.svg",
        "description": "Agence d'ingénierie logicielle, d'automatisation IA et de marketing de haute précision basée à Kinshasa, RDC. Precision in progress.",
        "founder": {
          "@type": "Person",
          "@id": "https://picsell.agency/#founder",
          "name": "David Kalambay",
          "jobTitle": "Founder & Principal Horological Architect / Senior Tech Lead",
          "sameAs": [
            "https://www.upwork.com/freelancers/~017c699933b93f7734",
            "https://linkedin.com/in/davidkalambay",
            "https://github.com/davidkalambay"
          ]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kinshasa",
          "addressCountry": "CD",
          "addressRegion": "Kinshasa"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "contact@picsell.agency",
          "availableLanguage": ["French", "English"]
        },
        "sameAs": [
          "https://www.upwork.com/freelancers/~017c699933b93f7734",
          "https://github.com/davidkalambay"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://picsell.agency/#service",
        "name": "Picsell Agency — Services d'Ingénierie & d'Automatisation Horlogère",
        "parentOrganization": {
          "@id": "https://picsell.agency/#organization"
        },
        "areaServed": ["CD", "FR", "BE", "CH", "US", "CA", "International"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Les 4 Complications Logicielles Picsell",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Complication Calendrier Perpétuel — Marketing & Performance",
                "description": "Architecture publicitaire first-party, Meta Conversions API (CAPI) server-side, pipelines cookieless et optimisation mathématique du ROAS."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Complication Tourbillon — Automatisation & Processus IA",
                "description": "Orchestration d'agents n8n autonomes, OCR multimodal Gemini 2.5 Vision, synchronisation ERP et élimination du travail manuel à 80%+."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Complication Chronographe — Ingénierie & Plateformes Web",
                "description": "Développement Next.js 15 App Router offline-first, passerelles Mobile Money résilientes aux coupures réseau et SLA 99.99% garanti."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Complication Grande Sonnerie — IA Stratégique & Data Intelligence",
                "description": "Pipelines analytiques DuckDB/Kafka, tableaux de bord de pilotage exécutif et modélisation prédictive de churn / lifetime value."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://picsell.agency/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que Picsell Agency ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Picsell Agency est un bureau d'ingénierie logicielle et de marketing de précision horlogère dirigé par David Kalambay. Nous concevons des plateformes web haute performance, des automatisations IA sur mesure et des architectures de données pour PME et grands comptes internationaux."
            }
          },
          {
            "@type": "Question",
            "name": "Pourquoi l'approche horlogère dans le développement logiciel ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'approche horlogère repose sur le Manifeste BMAD : chaque ligne de code et chaque brique d'automatisation doit s'engrener avec une tolérance micrométrique. Zéro dette technique cachée, SLA garanti, et surveillance télémétrique continue pour un fonctionnement sans à-coups."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les deux modes de contractualisation avec Picsell ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour les donneurs d'ordre internationaux et Tech Leads, un contrat sécurisé direct via Upwork (Top Rated Plus avec protection escrow). Pour les PME et entreprises régionales, un contrat direct avec consultation stratégique initiale de cadrage et audit d'architecture."
            }
          },
          {
            "@type": "Question",
            "name": "Où intervient Picsell Agency ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le siège est établi à Kinshasa en République Démocratique du Congo, avec des déploiements actifs en Afrique centrale, Europe et Amérique du Nord grâce à des protocoles de télé-ingénierie et d'astreinte 24/7."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      id="picsell-aeo-schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
    />
  );
}
