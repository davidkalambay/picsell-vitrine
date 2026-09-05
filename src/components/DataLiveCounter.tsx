"use client";

import React, { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

interface DataLiveCounterProps {
    isActive: boolean;
}

const DataLiveCounterComponent: React.FC<DataLiveCounterProps> = ({ isActive }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { settings } = useSiteSettings();

    // Display values states
    const [precision, setPrecision] = useState("00.0");
    const [events, setEvents] = useState("0.0");
    const [roas, setRoas] = useState("+0");
    const [latency, setLatency] = useState("450");
    const [isCalibrated, setIsCalibrated] = useState(false);

    useGSAP(() => {
        if (!settings.dataLiveCounter || !containerRef.current) return;

        if (!isActive) {
            setIsCalibrated(false);
            return;
        }

        // Animated Proxy Object
        const metrics = {
            precisionVal: 0,
            eventsVal: 0,
            roasVal: 0,
            latencyVal: 450,
        };

        const counterTl = gsap.timeline({
            onComplete: () => setIsCalibrated(true),
        });

        counterTl.to(metrics, {
            precisionVal: 99.8,
            eventsVal: 48.5,
            roasVal: 340,
            latencyVal: 12,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => {
                setPrecision(metrics.precisionVal.toFixed(1));
                setEvents(metrics.eventsVal.toFixed(1));
                setRoas(`+${Math.round(metrics.roasVal)}`);
                setLatency(Math.round(metrics.latencyVal).toString());
            },
        });

        // Flash calibration border on completion
        counterTl.fromTo(
            containerRef.current,
            { boxShadow: "0 0 0 rgba(253, 185, 19, 0)" },
            {
                boxShadow: "0 0 30px rgba(253, 185, 19, 0.25)",
                duration: 0.4,
                yoyo: true,
                repeat: 1,
            },
            "-=0.2"
        );

    }, { scope: containerRef, dependencies: [isActive, settings.dataLiveCounter] });

    if (!settings.dataLiveCounter) return null;

    return (
        <div
            ref={containerRef}
            className="my-6 p-4 sm:p-5 cls-counter-reserve rounded-2xl bg-[#090a0f]/80 backdrop-blur-xl border border-[var(--pic-gold,#fdb913)]/30 transition-all duration-500 relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-[var(--pic-gold,#fdb913)]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Header Telemetry Bar */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
                <div className="flex items-center gap-2">
                    <span
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            isActive
                                ? "bg-[var(--pic-gold,#fdb913)] animate-pulse shadow-[0_0_8px_var(--pic-gold,#fdb913)]"
                                : "bg-slate-600"
                        }`}
                    />
                    <span className="text-white font-bold">
                        DATA_TELEMETRY // LIVE_FEED
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span
                        className={`text-[9px] px-2 py-0.5 rounded font-bold transition-all ${
                            isCalibrated
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-white/10 text-slate-400"
                        }`}
                    >
                        {isCalibrated ? "SYNCED // 100%" : "STREAMING..."}
                    </span>
                </div>
            </div>

            {/* Metrics 4-Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {/* Metric 1 */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Précision ML
                    </span>
                    <div className="flex items-baseline gap-0.5">
                        <span className="font-sora text-xl sm:text-2xl font-black text-white font-mono tabular-nums inline-block min-w-[54px]">
                            {precision}
                        </span>
                        <span className="text-xs font-bold text-[var(--pic-gold,#fdb913)] font-mono">%</span>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Flux Événements
                    </span>
                    <div className="flex items-baseline gap-0.5">
                        <span className="font-sora text-xl sm:text-2xl font-black text-white font-mono tabular-nums inline-block min-w-[48px]">
                            {events}
                        </span>
                        <span className="text-xs font-bold text-[var(--pic-gold,#fdb913)] font-mono">k/s</span>
                    </div>
                </div>

                {/* Metric 3 */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Surplus ROAS
                    </span>
                    <div className="flex items-baseline gap-0.5">
                        <span className="font-sora text-xl sm:text-2xl font-black text-emerald-400 font-mono tabular-nums inline-block min-w-[58px]">
                            {roas}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">%</span>
                    </div>
                </div>

                {/* Metric 4 */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Latence Inférence
                    </span>
                    <div className="flex items-baseline gap-0.5">
                        <span className="text-xs font-bold text-[var(--pic-turquoise,#3dbcc7)] font-mono">&lt;</span>
                        <span className="font-sora text-xl sm:text-2xl font-black text-white font-mono tabular-nums inline-block min-w-[36px]">
                            {latency}
                        </span>
                        <span className="text-xs font-bold text-[var(--pic-turquoise,#3dbcc7)] font-mono">ms</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const DataLiveCounter = React.memo(
    DataLiveCounterComponent,
    (prevProps, nextProps) => prevProps.isActive === nextProps.isActive
);

