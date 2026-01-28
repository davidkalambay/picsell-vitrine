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
                {/* PURE ORIGINAL ASSET - No filters */}
                <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                    <Image
                        src="/assets/icon-picsell.png"
                        alt="Picsell Agency Icon"
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
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
