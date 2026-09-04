"use client";

import React, { useRef, useState } from "react";
import { ScrollytellingEngine } from "./ScrollytellingEngine";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";

type SectionType = "marketing" | "automation" | "development" | "data" | null;

export const ScrollytellingSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<SectionType>(null);

    useGSAP(() => {
        // We can create scroll triggers for each block to update activeSection
        const sections = [
            { id: "marketing" },
            { id: "automation" },
            { id: "development" },
            { id: "data" }
        ];

        sections.forEach(({ id }) => {
            const el = document.getElementById(`story-${id}`);
            if (el) {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveSection(id as SectionType),
                    onEnterBack: () => setActiveSection(id as SectionType),
                    onLeave: () => {
                        // If we leave the very top or bottom, we might clear it or keep last
                        if (id === "data") setActiveSection(null);
                    },
                    onLeaveBack: () => {
                        if (id === "marketing") setActiveSection(null);
                    }
                });
            }
        });

    }, { scope: containerRef });

    return (
        <section id="scrollytelling-section" ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 py-20 pb-40">
            {/* Desktop Layout: Grid. Mobile Layout: Stacked */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                
                {/* Visual side (Sticky) */}
                <div className="w-full h-full order-first lg:order-none z-0">
                    <div className="w-full lg:sticky lg:top-24 flex flex-col items-center justify-center py-10 lg:py-20 lg:h-[80vh]">
                        <div className="w-full h-full relative">
                            <ScrollytellingEngine activeSection={activeSection} />
                        </div>
                        {/* Status text */}
                        <div className="mt-8 text-xs font-semibold tracking-widest uppercase text-gray-400">
                            {activeSection ? `${['marketing', 'automation', 'development', 'data'].indexOf(activeSection) + 1}/4 modules engagés` : "0/4 modules engagés"}
                        </div>
                    </div>
                </div>

                {/* Text side (Scrollable) */}
                <div className="w-full flex flex-col z-10">
                    {/* Spacer to push first section down a bit */}
                    <div className="hidden lg:block h-[30vh]"></div>

                    {/* Section 1: Marketing */}
                    <div id="story-marketing" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'marketing' ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-6'}`}>
                        <p className="text-5xl lg:text-6xl font-extrabold text-black/5 leading-none mb-2">01</p>
                        <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[var(--pic-orange,#f37021)]">Digital Marketing</p>
                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-md">Une présence qui convertit, pas seulement qui existe.</h2>
                        <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-md leading-relaxed">
                            Stratégie de contenu, acquisition et image de marque pensées pour le marché congolais et la diaspora francophone.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[var(--pic-orange,#f37021)]">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Stratégie</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Contenu</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Acquisition</span>
                        </div>
                    </div>

                    {/* Section 2: Automation */}
                    <div id="story-automation" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'automation' ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-6'}`}>
                        <p className="text-5xl lg:text-6xl font-extrabold text-black/5 leading-none mb-2">02</p>
                        <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[var(--pic-turquoise,#3dbcc7)]">Automation</p>
                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-md">Vos process tournent, même quand vous dormez.</h2>
                        <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-md leading-relaxed">
                            Workflows automatisés, intégrations et outils sur-mesure pour éliminer les tâches répétitives de vos équipes.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[var(--pic-turquoise,#3dbcc7)]">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Workflows</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Intégrations</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Gain de temps</span>
                        </div>
                    </div>

                    {/* Section 3: Development */}
                    <div id="story-development" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'development' ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-6'}`}>
                        <p className="text-5xl lg:text-6xl font-extrabold text-black/5 leading-none mb-2">03</p>
                        <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[var(--pic-blue,#0089d0)]">Development</p>
                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-md">Des produits robustes, du prototype à l'échelle.</h2>
                        <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-md leading-relaxed">
                            Applications web et mobiles sur Next.js, Node.js et PostgreSQL — de la carte de visite digitale aux plateformes SaaS complètes.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[var(--pic-blue,#0089d0)]">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Web & Mobile</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">API</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Scalabilité</span>
                        </div>
                    </div>

                    {/* Section 4: Data Intelligence */}
                    <div id="story-data" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'data' ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-6'}`}>
                        <p className="text-5xl lg:text-6xl font-extrabold text-black/5 leading-none mb-2">04</p>
                        <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[var(--pic-gold,#fdb913)]">Data Intelligence</p>
                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-md">Décidez avec des chiffres, pas des intuitions.</h2>
                        <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-md leading-relaxed">
                            Tableaux de bord, reporting et modèles prédictifs pour transformer vos données en décisions.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[var(--pic-gold,#fdb913)]">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Dashboards</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Reporting</span>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-current">Prédiction</span>
                        </div>
                    </div>

                    {/* Spacer at the bottom so we can scroll past the last item safely */}
                    <div className="h-[20vh]"></div>
                </div>

            </div>
        </section>
    );
};
