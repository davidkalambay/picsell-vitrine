"use client";

import React, { useState } from "react";
import { useSiteSettings } from "@/context/SettingsContext";

interface EngineeringTerminalProps {
    filename: string;
    language: "typescript" | "sql" | "json";
    lines: {
        text: string;
        highlight?: "keyword" | "function" | "string" | "comment" | "accent";
    }[];
    accentColor: string;
    tagLabel: string;
}

const EngineeringTerminalComponent: React.FC<EngineeringTerminalProps> = ({
    filename,
    lines,
    accentColor,
    tagLabel,
}) => {
    const { settings } = useSiteSettings();
    const [copied, setCopied] = useState(false);

    if (!settings.codeTerminals) return null;

    const handleCopy = () => {
        const fullText = lines.map((l) => l.text).join("\n");
        navigator.clipboard?.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-6 w-full cls-terminal-reserve rounded-2xl overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20 group/terminal">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 border border-rose-500/40"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 border border-amber-500/40"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 border border-emerald-500/40"></span>
                </div>

                {/* File Title */}
                <div className="flex items-center gap-2">
                    <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{
                            backgroundColor: `${accentColor}20`,
                            color: accentColor,
                        }}
                    >
                        {tagLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400 select-none">
                        {filename}
                    </span>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    className="text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
                    title="Copier le code"
                >
                    {copied ? "✓ Copié" : "Copier"}
                </button>
            </div>

            {/* Code Content */}
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300 select-text">
                <pre className="m-0 p-0 font-mono">
                    <code>
                        {lines.map((line, idx) => (
                            <div key={idx} className="flex">
                                <span className="text-slate-600 select-none w-6 inline-block text-right pr-3 shrink-0">
                                    {idx + 1}
                                </span>
                                <span className="flex-1 whitespace-pre">
                                    {renderHighlightedLine(line.text, accentColor)}
                                </span>
                            </div>
                        ))}
                    </code>
                </pre>
                {/* Blinking Cursor */}
                <div className="flex items-center mt-2 text-slate-500 text-[10px] select-none">
                    <span
                        className="inline-block w-2 h-3.5 mr-1.5 animate-pulse"
                        style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-[10px] tracking-widest uppercase font-mono text-slate-500">
                        ENGINE_READY // 0 ERROR
                    </span>
                </div>
            </div>
        </div>
    );
};

export const EngineeringTerminal = React.memo(
    EngineeringTerminalComponent,
    (prevProps, nextProps) =>
        prevProps.filename === nextProps.filename &&
        prevProps.accentColor === nextProps.accentColor &&
        prevProps.tagLabel === nextProps.tagLabel &&
        prevProps.language === nextProps.language &&
        prevProps.lines.length === nextProps.lines.length
);


function renderHighlightedLine(text: string, accentColor: string) {
    if (text.startsWith("//") || text.startsWith("--")) {
        return <span className="text-slate-500 italic">{text}</span>;
    }

    // Split and color common keywords for a fast, elegant syntax highlight
    const parts = text.split(/(\b(?:const|await|export|async|function|return|SELECT|FROM|WHERE|ORDER|BY|DESC|Props|Lead|true|false)\b|["'`].*?["'`]|=>|\{|\}|\(|\))/g);

    return parts.map((part, i) => {
        if (/^(const|await|export|async|function|return|SELECT|FROM|WHERE|ORDER|BY|DESC)$/.test(part)) {
            return (
                <span key={i} className="text-rose-400 font-bold">
                    {part}
                </span>
            );
        }
        if (/^(Props|Lead|true|false)$/.test(part)) {
            return (
                <span key={i} className="text-amber-400 font-semibold">
                    {part}
                </span>
            );
        }
        if (/^["'`].*?["'`]$/.test(part)) {
            return (
                <span key={i} className="text-emerald-300">
                    {part}
                </span>
            );
        }
        if (part === "=>") {
            return (
                <span key={i} style={{ color: accentColor }}>
                    {part}
                </span>
            );
        }
        return <span key={i}>{part}</span>;
    });
}
