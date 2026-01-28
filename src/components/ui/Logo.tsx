import Image from "next/image";
import React from "react";

interface LogoProps {
    className?: string;
    variant?: "full" | "icon";
}

export const Logo: React.FC<LogoProps> = ({ className, variant = "full" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative group">
                {/* Original Icon with Color Harmonization Filter */}
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#D4AF37]/20">
                    <Image
                        src="/assets/icon-picsell.png"
                        alt="Picsell Agency Icon"
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        style={{
                            filter: 'sepia(100%) saturate(300%) hue-rotate(-15deg) brightness(0.9)',
                            /* This filter shifts the orange/red toward a warmer gold palette */
                        }}
                    />
                    {/* Subtle Pulse Overlay for the "Mechanical Heart" feel */}
                    <div className="absolute inset-0 bg-[#D4AF37]/10 animate-pulse mix-blend-overlay pointer-events-none" />
                </div>
            </div>

            {variant === "full" && (
                <div className="flex flex-col items-start select-none">
                    <span className="font-serif text-lg tracking-tight text-[#E5E4E2] leading-none">
                        Picsell<span className="text-[#D4AF37]">.</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E5E4E2]/40">
                        Agency
                    </span>
                </div>
            )}
        </div>
    );
};
