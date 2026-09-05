"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent) => void;
    href?: string;
    strength?: number; // Outer pull strength (default 0.35)
    textStrength?: number; // Inner text parallax pull (default 0.18)
    as?: "button" | "a" | "div";
    target?: string;
    rel?: string;
    ariaLabel?: string;
}

const MagneticButtonComponent: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    style = {},
    onClick,
    href,
    strength = 0.35,
    textStrength = 0.18,
    as: Tag = href ? "a" : "button",
    target,
    rel,
    ariaLabel,
}) => {
    const buttonRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const { settings } = useSiteSettings();

    useGSAP(() => {
        if (!buttonRef.current || !settings.magneticButtons) return;

        const el = buttonRef.current;
        const content = contentRef.current;

        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
        const xTextTo = content ? gsap.quickTo(content, "x", { duration: 0.5, ease: "power3.out" }) : null;
        const yTextTo = content ? gsap.quickTo(content, "y", { duration: 0.5, ease: "power3.out" }) : null;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            xTo(deltaX);
            yTo(deltaY);

            if (xTextTo && yTextTo) {
                xTextTo(deltaX * (textStrength / strength));
                yTextTo(deltaY * (textStrength / strength));
            }
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.75,
                ease: "elastic.out(1.1, 0.4)",
            });

            if (content) {
                gsap.to(content, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1.1, 0.4)",
                });
            }
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: buttonRef, dependencies: [settings.magneticButtons, strength, textStrength] });

    const props: any = {
        ref: buttonRef,
        className: `inline-flex items-center justify-center select-none relative ${className}`,
        style: {
            willChange: "transform",
            ...style,
        },
        onClick,
        "aria-label": ariaLabel,
    };

    if (Tag === "a" || href) {
        props.href = href;
        if (target) props.target = target;
        if (rel) props.rel = rel;
    }

    const Component = Tag as any;

    return (
        <Component {...props}>
            <span
                ref={contentRef}
                className="w-full h-full inline-flex items-center justify-center pointer-events-none"
                style={{ willChange: "transform" }}
            >
                {children}
            </span>
        </Component>
    );
};

export const MagneticButton = React.memo(MagneticButtonComponent);

