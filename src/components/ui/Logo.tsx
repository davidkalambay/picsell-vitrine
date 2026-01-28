import React from "react";

interface LogoProps {
    className?: string;
    variant?: "full" | "icon";
}

export const Logo: React.FC<LogoProps> = ({ className, variant = "full" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* The "P" Chrono-Icon (SVG Procedural) */}
            <div className="relative w-10 h-10 group">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Outer Precision Ring */}
                    <circle cx="50" cy="50" r="48" stroke="#E5E4E2" strokeWidth="0.5" opacity="0.2" />

                    {/* The "P" Structure - Bold & Visible */}
                    <g className="transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                        {/* Stem of the P */}
                        <rect x="15" y="15" width="8" height="70" rx="4" fill="#D4AF37" />

                        {/* Bowl of the P - Reinterpreted as Horological Mechanism */}
                        <path
                            d="M23 15 H55 C77 15 77 55 55 55 H23 V15Z"
                            fill="url(#goldGradient)"
                        />

                        {/* Cutout in the bowl for mechanical transparency */}
                        <circle cx="50" cy="35" r="12" fill="#0A0A0A" />
                    </g>

                    {/* Mechanical Heart - Pulsing Discreetly */}
                    <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                        <circle cx="50" cy="35" r="8" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
                        <circle cx="50" cy="35" r="4" fill="#E5E4E2" />
                    </g>

                    {/* Definition of Gradients */}
                    <defs>
                        <linearGradient id="goldGradient" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#AA8A2E" />
                        </linearGradient>
                    </defs>
                </svg>
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
