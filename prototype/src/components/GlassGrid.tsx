"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, Database, Layout, Search, Zap } from "lucide-react";

const services = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "AEO Strategy",
        description: "Optimisation pour les moteurs de réponse (Perplexity, GPT-4, SearchGPT) pour dominer l'ère post-SEO.",
        tech: `{
  "agent": "SearchAgent_V4",
  "priority": "Semantic_Relevance",
  "metrics": ["context_score", "authority_index"]
}`
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Digital Vitrine",
        description: "Interfaces 'Haute Horlogerie' à 60 FPS, alliant luxe esthétique et performance technique absolue.",
        tech: `const config = {
  fps_limit: 60,
  acceleration: "hardware",
  render_mode: "precision_swiss"
};`
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI Integration",
        description: "Déploiement d'agents IA spécialisés pour automatiser vos processus critiques sans sacrifier la qualité.",
        tech: `import { BMAD_Manager } from "@picsell/core";

const workflow = new BMAD_Manager({
  supervision: "human_expert",
  automation_level: 0.95
});`
    }
];

export const GlassGrid = () => {
    return (
        <section className="py-24">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                    Expertise <span className="text-brushed-gold font-sans italic tracking-tighter uppercase text-3xl">Transparente</span>
                </h2>
                <p className="text-gray-400 max-w-2xl font-mono text-sm">
                    [MODE_GLASS_ENGINE_ACTIVE]: Survoler pour voir sous le capot
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-brushed-gold/50"
        >
            {/* Visual Content */}
            <div className="p-8 h-full flex flex-col justify-between">
                <div>
                    <div className="mb-6 inline-flex p-3 rounded-sm bg-brushed-gold/10 text-brushed-gold">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-sans font-light">
                        {service.description}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-brushed-gold font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Expertise_Details</span>
                    <div className="w-8 h-px bg-brushed-gold" />
                </div>
            </div>

            {/* Glass Reveal Overlay */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-midnight-black/90 p-8 backdrop-blur-md"
                    >
                        <div className="w-full h-full border border-brushed-gold/30 rounded-sm p-6 overflow-hidden relative">
                            <div className="absolute top-4 right-4 text-brushed-gold/20">
                                <Code className="w-12 h-12" />
                            </div>
                            <pre className="font-mono text-[11px] text-brushed-gold/80 leading-relaxed whitespace-pre-wrap">
                                {service.tech}
                            </pre>

                            <div className="absolute bottom-4 left-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brushed-gold animate-ping" />
                                <span className="font-mono text-[9px] text-brushed-gold uppercase tracking-[0.2em]">Live_Technical_Validation</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Grid Pattern (Decorative) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
        </motion.div>
    );
};
