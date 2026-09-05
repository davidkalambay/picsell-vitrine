"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

const CustomGearCursorComponent: React.FC = () => {
    const { settings } = useSiteSettings();
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const gearRef = useRef<SVGSVGElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeColor, setActiveColor] = useState("#0089d0");

    useEffect(() => {
        // Detect touch device
        if (typeof window !== "undefined") {
            const hasTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
            setIsTouchDevice(hasTouch);
        }
    }, []);

    useGSAP(() => {
        if (!settings.gearCursor || settings.reducedMotion || isTouchDevice || !cursorRef.current || !dotRef.current || !gearRef.current) {
            return;
        }

        const cursorEl = cursorRef.current;
        const dotEl = dotRef.current;
        const gearEl = gearRef.current;

        // Quick setters for GPU transform performance
        const setCursorX = gsap.quickTo(cursorEl, "x", { duration: 0.22, ease: "power2.out" });
        const setCursorY = gsap.quickTo(cursorEl, "y", { duration: 0.22, ease: "power2.out" });

        const setDotX = gsap.quickTo(dotEl, "x", { duration: 0.04, ease: "power3.out" });
        const setDotY = gsap.quickTo(dotEl, "y", { duration: 0.04, ease: "power3.out" });

        let currentRotation = 0;
        let lastX = 0;
        let lastY = 0;

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (!isVisible) setIsVisible(true);

            setCursorX(clientX);
            setCursorY(clientY);
            setDotX(clientX);
            setDotY(clientY);

            // Compute delta movement for realistic gear rolling
            const deltaX = clientX - lastX;
            const deltaY = clientY - lastY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance > 1) {
                const sign = deltaX >= 0 ? 1 : -1;
                currentRotation += distance * 0.45 * sign;
                gsap.to(gearEl, {
                    rotation: currentRotation,
                    duration: 0.4,
                    ease: "power1.out",
                    overwrite: "auto",
                });
            }

            lastX = clientX;
            lastY = clientY;

            // Detect hovered interactive elements
            const target = e.target as HTMLElement | null;
            if (target) {
                const interactive = target.closest("a, button, input, textarea, select, [role='button'], label, .cursor-pointer, summary");
                if (interactive) {
                    setIsHovered(true);

                    // Contextual color detection based on element or section
                    if (target.closest("#story-marketing")) setActiveColor("#f37021");
                    else if (target.closest("#story-automation")) setActiveColor("#3dbcc7");
                    else if (target.closest("#story-development")) setActiveColor("#0089d0");
                    else if (target.closest("#story-data")) setActiveColor("#fdb913");
                    else setActiveColor("#0089d0");
                } else {
                    setIsHovered(false);
                }
            }
        };

        const onMouseDown = () => {
            setIsClicked(true);
            gsap.to(gearEl, {
                scale: 0.75,
                rotation: "+=45",
                duration: 0.2,
                ease: "back.out(2)",
            });
            gsap.to(dotEl, {
                scale: 1.6,
                duration: 0.15,
                ease: "power2.out",
            });
        };

        const onMouseUp = () => {
            setIsClicked(false);
            gsap.to(gearEl, {
                scale: isHovered ? 1.5 : 1,
                duration: 0.35,
                ease: "elastic.out(1.2, 0.4)",
            });
            gsap.to(dotEl, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const onMouseLeave = () => {
            setIsVisible(false);
        };

        const onMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        document.body.addEventListener("mouseleave", onMouseLeave);
        document.body.addEventListener("mouseenter", onMouseEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.body.removeEventListener("mouseleave", onMouseLeave);
            document.body.removeEventListener("mouseenter", onMouseEnter);
        };
    }, { dependencies: [settings.gearCursor, isTouchDevice, isVisible, isHovered] });

    // Animate hover state transitions
    useEffect(() => {
        if (!gearRef.current || !dotRef.current || !settings.gearCursor || isTouchDevice) return;

        if (isHovered) {
            gsap.to(gearRef.current, {
                scale: 1.5,
                opacity: 0.9,
                duration: 0.3,
                ease: "back.out(1.8)",
            });
            gsap.to(dotRef.current, {
                scale: 0.4,
                opacity: 0.6,
                duration: 0.2,
            });
        } else if (!isClicked) {
            gsap.to(gearRef.current, {
                scale: 1,
                opacity: 0.65,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(dotRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.2,
            });
        }
    }, [isHovered, isClicked, settings.gearCursor, isTouchDevice]);

    if (!settings.gearCursor || settings.reducedMotion || isTouchDevice) return null;

    return (
        <div
            className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
        >
            {/* Center Precision Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none transition-colors duration-300"
                style={{
                    backgroundColor: isHovered ? activeColor : "var(--pic-blue, #0089d0)",
                    boxShadow: `0 0 10px ${isHovered ? activeColor : "#0089d0"}`,
                    willChange: "transform",
                }}
            />

            {/* Orbiting Mechanical Mini Gear */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 flex items-center justify-center pointer-events-none"
                style={{ willChange: "transform" }}
            >
                <svg
                    ref={gearRef}
                    className="w-full h-full transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,137,208,0.35)]"
                    viewBox="0 0 40 40"
                    fill="none"
                    style={{
                        transformOrigin: "center center",
                        willChange: "transform",
                    }}
                >
                    {/* Outer Cog Teeth (8 teeth) */}
                    <circle
                        cx="20"
                        cy="20"
                        r="11"
                        stroke={isHovered ? activeColor : "currentColor"}
                        strokeWidth="1.6"
                        strokeDasharray="3 3.5"
                        className="text-slate-800 dark:text-slate-200 transition-colors"
                    />
                    {/* Inner Pitch Circle */}
                    <circle
                        cx="20"
                        cy="20"
                        r="6"
                        stroke={isHovered ? activeColor : "currentColor"}
                        strokeWidth="1.2"
                        className="text-slate-700 dark:text-slate-300 transition-colors"
                    />
                    {/* Axle Crosshairs */}
                    <line
                        x1="20"
                        y1="10"
                        x2="20"
                        y2="30"
                        stroke={isHovered ? activeColor : "currentColor"}
                        strokeWidth="0.8"
                        strokeOpacity="0.7"
                        className="text-slate-600 dark:text-slate-400"
                    />
                    <line
                        x1="10"
                        y1="20"
                        x2="30"
                        y2="20"
                        stroke={isHovered ? activeColor : "currentColor"}
                        strokeWidth="0.8"
                        strokeOpacity="0.7"
                        className="text-slate-600 dark:text-slate-400"
                    />
                </svg>
            </div>
        </div>
    );
};

export const CustomGearCursor = React.memo(CustomGearCursorComponent);

