"use client";

import React, { useRef } from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap-config';
import { ServiceContent } from '@/lib/mdx';

const ICON_MAP: Record<string, React.ReactNode> = {
    dev: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    marketing: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M12 2v20M2 12h20M12 2l-2 2M12 22l2-2M2 12l2 2M22 12l-2-2" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    automation: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4l3 3" />
        </svg>
    ),
};

export const ServicesSection: React.FC<{ services: ServiceContent[] }> = ({ services }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (services.length > 0) {
            gsap.from(containerRef.current?.children || [], {
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }
    }, { scope: sectionRef, dependencies: [services] });

    return (
        <section ref={sectionRef} className="relative w-full py-32 px-6 flex justify-center bg-[#0A0A0A]">
            <div className="w-full max-w-7xl">
                <div className="mb-20 text-center">
                    <h2 className="text-[#D4AF37] font-serif text-3xl tracking-[0.4em] uppercase mb-4">
                        Complications_Service
                    </h2>
                    <p className="text-[#E5E4E2]/40 font-mono text-[10px] uppercase tracking-[0.2em]">
                        Technical_Expertise_Matrix // Verified_Outputs
                    </p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.title}
                            description={service.description}
                            roi={service.roi}
                            href={`/services/${service.slug}`}
                            icon={ICON_MAP[service.slug] || ICON_MAP.dev}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
