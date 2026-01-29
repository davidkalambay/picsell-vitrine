"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    roi: string[];
    href: string;
    icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, roi, href, icon }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-[#0A0A0A] border border-[#E5E4E2]/10 rounded-sm overflow-hidden"
        >
            {/* Background Micro-Grid */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: 'radial-gradient(#E5E4E2 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

            {/* Icon Area */}
            <div className="relative mb-6 w-12 h-12 flex items-center justify-center text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>

            {/* Content */}
            <h3 className="relative text-xl font-serif text-[#E5E4E2] tracking-wider mb-4 group-hover:text-[#D4AF37] transition-colors">
                {title}
            </h3>
            <p className="relative text-xs text-[#E5E4E2]/60 font-mono mb-8 leading-relaxed">
                {description}
            </p>

            {/* ROI Indicators */}
            <ul className="relative space-y-3 mb-10">
                {roi.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-[#E5E4E2]/40 font-mono">
                        <span className="w-1.5 h-[1px] bg-[#D4AF37]" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Link href={href} className="relative inline-block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-mono group-hover:underline decoration-1 underline-offset-8 transition-all">
                Explore_Pillar
            </Link>

            {/* Corner Detail */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors" />
        </motion.div>
    );
};
