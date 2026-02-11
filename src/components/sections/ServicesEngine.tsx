"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Gears } from "@/components/animations/Gears";
import { EngineServiceCard } from "@/components/animations/EngineServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "card_ai",
        number: "01. CORE",
        title: "AI ENGINE",
        description: "Ne subissez pas l'IA, pilotez-la. Nous intégrons des modèles neuronaux sur-mesure au cœur de votre business model.",
        tags: ["AGENTS AUTONOMES", "LLM"],
        accentColor: "var(--blue)",
    },
    {
        id: "card_marketing",
        number: "02. VISIBILITY",
        title: "DIGITAL MARKETING",
        description: "La visibilité comme une science exacte. Acquisition ciblée, SEO sémantique et campagnes de conversion millimétrées.",
        tags: ["GROWTH", "CRO", "ADS"],
        accentColor: "var(--orange)",
    },
    {
        id: "card_dev",
        number: "03. STRUCTURE",
        title: "DEVELOPMENT",
        description: "L'élégance du code, la robustesse de l'infrastructure. Architectures scalables, sécurité militaire et expérience 60 FPS.",
        tags: ["FULL-STACK", "CLOUD-NATIVE"],
        accentColor: "var(--black)",
    },
    {
        id: "card_automation",
        number: "04. FLOW",
        title: "AUTOMATION",
        description: "Faites travailler les machines pendant que vous dormez. Workflows connectés, synchronisation temps réel.",
        tags: ["N8N", "ZAPIER", "PYTHON"],
        accentColor: "var(--cyan)",
    },
    {
        id: "card_data",
        number: "05. VISION",
        title: "DATA INTELLIGENCE",
        description: "L'intuition est une erreur. La donnée est une certitude. Tableaux de bord de pilotage pour une croissance maîtrisée.",
        tags: ["BIGQUERY", "KPIs", "DASHBOARDS"],
        accentColor: "var(--yellow)",
    },
];

export const ServicesEngine = () => {
    const main = useRef<HTMLDivElement>(null);
    const title = useRef<HTMLDivElement>(null);
    const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            // 1. Setup Initial State
            gsap.set(".cluster-main", { x: 350, y: 50, scale: 0.9 });

            // 2. TIMELINE: GEARS ROTATION
            // Synced to full page scroll
            const tlGears = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                },
            });

            const baseRot = 360 * 2.5;
            const rads = { ai: 18, marketing: 12, automation: 10, development: 14, data: 16 };

            tlGears.to("#spin_ai", { rotation: baseRot, transformOrigin: "center center", ease: "none" }, 0);
            tlGears.to("#spin_marketing", { rotation: -(rads.ai / rads.marketing) * baseRot, transformOrigin: "center center", ease: "none" }, 0);
            tlGears.to("#spin_automation", { rotation: -(rads.ai / rads.automation) * baseRot, transformOrigin: "center center", ease: "none" }, 0);
            tlGears.to("#spin_data", { rotation: -(rads.ai / rads.data) * baseRot, transformOrigin: "center center", ease: "none" }, 0);
            tlGears.to("#spin_dev", { rotation: -(rads.ai / rads.development) * baseRot, transformOrigin: "center center", ease: "none" }, 0);

            // 3. TIMELINE: MAIN TITLE EXIT
            gsap.to(title.current, {
                opacity: 0,
                y: -150,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "400px top",
                    scrub: 0.5,
                },
            });

            // 4. TIMELINE: CARDS SEQUENCE
            const tlStory = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                },
            });

            function addCardSequence(tl: gsap.core.Timeline, element: HTMLElement | null, startTime: number, duration: number) {
                if (!element) return;
                const enterT = duration * 0.2;
                const holdT = duration * 0.55;
                const exitT = duration * 0.25;

                // Enter
                tl.to(element, { opacity: 1, y: 0, duration: enterT, ease: "power2.out" }, startTime);
                // Glide Up (Reading zone)
                tl.to(element, { y: -50, duration: holdT, ease: "none" }, startTime + enterT);
                // Exit (Physical scroll out)
                tl.to(element, { y: -window.innerHeight * 0.9, duration: exitT, ease: "power2.in" }, startTime + enterT + holdT);
            }

            // Distribute 5 cards across the timeline
            services.forEach((service, index) => {
                const start = 0.10 + index * 0.18; // 0.10, 0.28, 0.46, 0.64, 0.82
                addCardSequence(tlStory, cardsRefs.current[index], start, 0.15);
            });
        },
        { scope: main }
    );

    return (
        <section ref={main} className="relative w-full h-full min-h-screen">
            {/* Title Column (Left) */}
            <div ref={title} className="fixed top-1/2 left-[8%] -translate-y-1/2 w-[40%] text-left z-10 pointer-events-none">
                <h1 className="text-[4.5rem] leading-[1.1] font-extrabold tracking-[-0.04em] text-black m-0 uppercase">
                    SERVICES_<br />ENGINE
                </h1>
                <p className="text-[1.2rem] text-[#666] mt-[20px] font-normal tracking-normal">
                    Driven by Intelligence.
                </p>
            </div>

            {/* Gears Column (Right) */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
                <Gears synced={true} />
            </div>

            {/* Service Cards (Left) */}
            {services.map((service, index) => (
                <EngineServiceCard
                    key={service.id}
                    ref={(el: HTMLDivElement | null) => {
                        cardsRefs.current[index] = el;
                    }}
                    id={service.id}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    accentColor={service.accentColor}
                />
            ))}

            {/* Footer Decoration */}
            <div className="fixed bottom-[4vh] left-[8%] text-[0.9rem] text-[#999] uppercase tracking-[0.2em] font-bold z-10 pointer-events-none">
                picsell agency — precision in progress
            </div>
        </section>
    );
};
