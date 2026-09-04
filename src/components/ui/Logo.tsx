import React from "react";

interface LogoProps {
    className?: string;
    variant?: "full" | "icon";
}

export const Logo: React.FC<LogoProps> = ({ className, variant = "full" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative group">
                {/* 
          ORIGINAL SHAPE COLORIZED WITH MASK
          This technique preserves the iconic 'P' form while applying 
          the Midnight Luxury gold palette without the "catastrophic" filter blur.
        */}
                <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                    <div
                        className="w-full h-full bg-[#D4AF37]"
                        style={{
                            maskImage: 'url(/assets/icon-picsell.png)',
                            WebkitMaskImage: 'url(/assets/icon-picsell.png)',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                    {/* Subtle Glow to make it pop like a high-end dial */}
                    <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700" />

                    {/* Mechanical Heart Pulse - Integrated as a subtle shadow pulse */}
                    <div className="absolute inset-0 ring-1 ring-[#D4AF37]/50 rounded-full animate-ping opacity-0 group-hover:opacity-20 transition-opacity" style={{ animationDuration: '3s' }} />
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
