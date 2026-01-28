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
                    className="w-full h-full drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all duration-700"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Concentric Precision Rings */}
                    <circle cx="50" cy="50" r="48" stroke="#E5E4E2" strokeWidth="0.25" opacity="0.2" />
                    <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />

                    {/* Procedural "P" - Concentric Mechanism */}
                    <path
                        d="M50 15C30.7 15 15 30.7 15 50C15 69.3 30.7 85 50 85V70C38.9 70 30 61.1 30 50C30 38.9 38.9 30 50 30V15Z"
                        fill="url(#goldGradient)"
                        className="transition-all duration-500 group-hover:opacity-90"
                    />

                    {/* Mechanical Core */}
                    <circle cx="50" cy="50" r="12" stroke="#D4AF37" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="6" fill="#E5E4E2" className="animate-pulse" />

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
