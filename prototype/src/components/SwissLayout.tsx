"use client";

import React from "react";

interface SwissLayoutProps {
    children: React.ReactNode;
    className?: string;
    showGrid?: boolean;
}

/**
 * SwissLayout provides a 12-column grid foundation based on Swiss Design principles.
 * It includes optional "technical annotations" to reinforce the "Swiss Precision" theme.
 */
export const SwissLayout: React.FC<SwissLayoutProps> = ({
    children,
    className = "",
    showGrid = false
}) => {
    return (
        <div className={`relative min-h-screen w-full bg-midnight-black text-polished-steel selection:bg-brushed-gold selection:text-midnight-black ${className}`}>
            {/* Swiss Grid Overlay (Optional/Debug) */}
            {showGrid && (
                <div className="pointer-events-none fixed inset-0 z-50 flex px-4 md:px-8 lg:px-16">
                    <div className="grid w-full grid-cols-4 md:grid-cols-12 gap-4 lg:gap-8 opacity-5">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="h-full border-x border-polished-steel" />
                        ))}
                    </div>
                </div>
            )}

            {/* Swiss Annotations (Aesthetics) */}
            <div className="pointer-events-none fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col gap-8 opacity-20 font-mono text-[10px] tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
                    <span>Precision_Metrics_Active</span>
                    <span>Grid_System_V4.0</span>
                    <span>Swiss_Design_Foundation</span>
                </div>
            </div>

            <div className="pointer-events-none fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col gap-8 opacity-20 font-mono text-[10px] tracking-widest uppercase [writing-mode:vertical-lr]">
                    <span>Picsell_Agency_Prototype</span>
                    <span>BMAD_Methodology_Verified</span>
                    <span>60FPS_Optimization_Sync</span>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
                {children}
            </main>

            {/* Frame Border (Subtle) */}
            <div className="pointer-events-none fixed inset-4 md:inset-8 border border-white/5 z-30" />
        </div>
    );
};
