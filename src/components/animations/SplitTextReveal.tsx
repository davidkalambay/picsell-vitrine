"use client";

import React, { useRef, useId } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

type HTMLTextTag = "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "section" | "article";

interface SplitTextRevealProps {
    children: React.ReactNode;
    as?: HTMLTextTag;
    mode?: "words" | "chars";
    trigger?: "scroll" | "active" | "mount";
    isActive?: boolean;
    delay?: number;
    stagger?: number;
    duration?: number;
    className?: string;
    wordClassName?: string;
    style?: React.CSSProperties;
    /**
     * Easing flavor:
     * - "clockwork": snappy escapement feel with micro-back bounce (horological strike)
     * - "smooth": sleek exponential decay
     * - "linear-tick": mechanical step-like strike
     */
    flavor?: "clockwork" | "smooth" | "linear-tick";
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
    children,
    as: Tag = "div",
    mode = "words",
    trigger = "scroll",
    isActive = true,
    delay = 0,
    stagger = 0.032,
    duration = 0.65,
    className = "",
    wordClassName = "",
    style = {},
    flavor = "clockwork",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const { settings } = useSiteSettings();

    // Select GSAP ease based on mechanical horology flavor
    const easeMap = {
        clockwork: "back.out(1.3)",
        smooth: "power3.out",
        "linear-tick": "expo.out",
    };
    const selectedEase = easeMap[flavor] || "back.out(1.3)";

    // Text parsing helper for full accessible aria-label
    const extractText = (node: React.ReactNode): string => {
        if (typeof node === "string") return node;
        if (typeof node === "number") return String(node);
        if (Array.isArray(node)) return node.map(extractText).join("");
        if (React.isValidElement(node)) {
            const props = node.props as { children?: React.ReactNode };
            return extractText(props.children);
        }
        return "";
    };

    const fullPlainText = extractText(children);

    useGSAP(
        () => {
            if (!settings.splitTextReveal || !containerRef.current) return;

            const targets = containerRef.current.querySelectorAll(".split-unit-inner");
            if (!targets.length) return;

            // Prepare initial state: tucked below overflow mask with slight mechanical tilt
            gsap.set(targets, {
                y: "115%",
                opacity: 0,
                rotateX: -20,
                transformOrigin: "bottom center",
            });

            const animateReveal = () => {
                gsap.to(targets, {
                    y: "0%",
                    opacity: 1,
                    rotateX: 0,
                    duration,
                    stagger,
                    delay,
                    ease: selectedEase,
                    overwrite: "auto",
                });
            };

            const animateReset = () => {
                gsap.to(targets, {
                    y: "115%",
                    opacity: 0,
                    rotateX: -20,
                    duration: 0.25,
                    ease: "power2.in",
                    overwrite: "auto",
                });
            };

            if (trigger === "mount") {
                animateReveal();
            } else if (trigger === "active") {
                if (isActive) {
                    animateReveal();
                } else {
                    animateReset();
                }
            } else if (trigger === "scroll") {
                const st = ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top 85%",
                    onEnter: () => animateReveal(),
                    once: true,
                });
                return () => st.kill();
            }
        },
        {
            scope: containerRef,
            dependencies: [settings.splitTextReveal, isActive, trigger, delay, duration, stagger, selectedEase],
        }
    );

    // If disabled in settings, render standard text without splitting
    if (!settings.splitTextReveal) {
        return React.createElement(
            Tag,
            { className, style },
            children
        );
    }

    // Recursive node splitter preserving custom JSX formatting (spans, gradients, etc.)
    const renderNode = (node: React.ReactNode, keyPrefix: string): React.ReactNode => {
        if (typeof node === "string") {
            if (mode === "chars") {
                const characters = Array.from(node);
                return characters.map((char, i) => {
                    if (char === " ") {
                        return <span key={`${keyPrefix}-sp-${i}`}>&nbsp;</span>;
                    }
                    return (
                        <span
                            key={`${keyPrefix}-c-${i}`}
                            className="inline-block overflow-hidden align-top leading-tight"
                        >
                            <span className={`split-unit-inner inline-block will-change-transform ${wordClassName}`}>
                                {char}
                            </span>
                        </span>
                    );
                });
            }

            // mode === "words"
            const words = node.split(/(\s+)/);
            return words.map((chunk, i) => {
                if (/^\s+$/.test(chunk)) {
                    return <span key={`${keyPrefix}-sp-${i}`}>&nbsp;</span>;
                }
                return (
                    <span
                        key={`${keyPrefix}-w-${i}`}
                        className="inline-block overflow-hidden align-top"
                        style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
                    >
                        <span className={`split-unit-inner inline-block will-change-transform ${wordClassName}`}>
                            {chunk}
                        </span>
                    </span>
                );
            });
        }

        if (Array.isArray(node)) {
            return node.map((child, idx) => renderNode(child, `${keyPrefix}-${idx}`));
        }

        if (React.isValidElement(node)) {
            const { children: childChildren, ...otherProps } = node.props as { children?: React.ReactNode; [key: string]: unknown };
            return React.cloneElement(
                node,
                { ...otherProps, key: node.key || keyPrefix },
                renderNode(childChildren, `${keyPrefix}-nested`)
            );
        }

        return node;
    };

    const Component = Tag as React.ElementType;

    return (
        <Component
            ref={containerRef}
            className={`split-reveal-container ${className}`}
            style={style}
            aria-label={fullPlainText}
        >
            <span aria-hidden="true" className="inline-block w-full">
                {renderNode(children, id)}
            </span>
        </Component>
    );
};
