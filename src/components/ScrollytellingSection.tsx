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
                    <div id="story-marketing" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'marketing' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-6 scale-[0.98]'}`}>
                        <p className="text-6xl lg:text-7xl font-black text-white/10 leading-none mb-2 font-sora">01</p>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--pic-orange,#f37021)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--pic-orange,#f37021)] animate-pulse"></span>
                            Digital Marketing
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 max-w-md text-white leading-tight">
                            Une présence qui convertit, pas seulement qui existe.
                        </h2>
                        <p className="text-slate-300 text-base lg:text-lg mb-8 max-w-md leading-relaxed">
                            Stratégie de contenu, acquisition et image de marque pensées pour le marché congolais et la diaspora francophone.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] shadow-[0_0_15px_rgba(243,112,33,0.15)]">Stratégie</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] shadow-[0_0_15px_rgba(243,112,33,0.15)]">Contenu</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] shadow-[0_0_15px_rgba(243,112,33,0.15)]">Acquisition</span>
                        </div>
                    </div>

                    {/* Section 2: Automation */}
                    <div id="story-automation" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'automation' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-6 scale-[0.98]'}`}>
                        <p className="text-6xl lg:text-7xl font-black text-white/10 leading-none mb-2 font-sora">02</p>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--pic-turquoise,#3dbcc7)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--pic-turquoise,#3dbcc7)] animate-pulse"></span>
                            Automation
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 max-w-md text-white leading-tight">
                            Vos process tournent, même quand vous dormez.
                        </h2>
                        <p className="text-slate-300 text-base lg:text-lg mb-8 max-w-md leading-relaxed">
                            Workflows automatisés, intégrations et outils sur-mesure pour éliminer les tâches répétitives de vos équipes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] shadow-[0_0_15px_rgba(61,188,199,0.15)]">Workflows</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] shadow-[0_0_15px_rgba(61,188,199,0.15)]">Intégrations</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] shadow-[0_0_15px_rgba(61,188,199,0.15)]">Gain de temps</span>
                        </div>
                    </div>

                    {/* Section 3: Development */}
                    <div id="story-development" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'development' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-6 scale-[0.98]'}`}>
                        <p className="text-6xl lg:text-7xl font-black text-white/10 leading-none mb-2 font-sora">03</p>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--pic-blue,#0089d0)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--pic-blue,#0089d0)] animate-pulse"></span>
                            Development
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 max-w-md text-white leading-tight">
                            Des produits robustes, du prototype à l'échelle.
                        </h2>
                        <p className="text-slate-300 text-base lg:text-lg mb-8 max-w-md leading-relaxed">
                            Applications web et mobiles sur Next.js, Node.js et PostgreSQL — de la carte de visite digitale aux plateformes SaaS complètes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] shadow-[0_0_15px_rgba(0,137,208,0.15)]">Web & Mobile</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] shadow-[0_0_15px_rgba(0,137,208,0.15)]">API</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] shadow-[0_0_15px_rgba(0,137,208,0.15)]">Scalabilité</span>
                        </div>
                    </div>

                    {/* Section 4: Data Intelligence */}
                    <div id="story-data" className={`min-h-[80vh] flex flex-col justify-center py-16 transition-all duration-700 ${activeSection === 'data' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-6 scale-[0.98]'}`}>
                        <p className="text-6xl lg:text-7xl font-black text-white/10 leading-none mb-2 font-sora">04</p>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[var(--pic-gold,#fdb913)] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--pic-gold,#fdb913)] animate-pulse"></span>
                            Data Intelligence
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 max-w-md text-white leading-tight">
                            Décidez avec des chiffres, pas des intuitions.
                        </h2>
                        <p className="text-slate-300 text-base lg:text-lg mb-8 max-w-md leading-relaxed">
                            Tableaux de bord, reporting et modèles prédictifs pour transformer vos données en décisions.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] shadow-[0_0_15px_rgba(253,185,19,0.15)]">Dashboards</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] shadow-[0_0_15px_rgba(253,185,19,0.15)]">Reporting</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] shadow-[0_0_15px_rgba(253,185,19,0.15)]">Prédiction</span>
                        </div>
                    </div>

                    {/* Spacer at the bottom so we can scroll past the last item safely */}
                    <div className="h-[20vh]"></div>
                </div>

            </div>
        </section>
    );
};
