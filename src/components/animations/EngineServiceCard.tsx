"use client";

import React, { forwardRef } from "react";

interface EngineServiceCardProps {
    number: string;
    title: string;
    description: string;
    tags: string[];
    accentColor: string;
    id?: string;
}

export const EngineServiceCard = forwardRef<HTMLDivElement, EngineServiceCardProps>(
    ({ number, title, description, tags, accentColor, id }, ref) => {
        return (
            <div
                id={id}
                ref={ref}
                className="fixed left-[8%] top-1/2 w-[380px] p-[35px] bg-[#FFFFFF]/95 backdrop-blur-[12px] border border-black/5 rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-50 opacity-0 transform translate-y-[100px]"
                style={{ borderLeft: `4px solid ${accentColor}` }}
            >
                <span
                    className="block text-[0.8rem] font-extrabold uppercase tracking-[0.1em] mb-[15px]"
                    style={{ color: accentColor }}
                >
                    {number}
                </span>
                <h3 className="font-quicksand text-[2rem] font-bold m-0 mb-[15px] text-[#1A1A1A] leading-[1.1]">
                    {title}
                </h3>
                <p className="text-[1.1rem] leading-[1.6] text-[#444] font-normal">
                    {description}
                </p>
                <div className="mt-[25px] flex flex-wrap gap-[10px]">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[0.75rem] bg-black/5 px-[12px] py-[6px] rounded-[6px] font-bold"
                            style={{ color: accentColor }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
);

EngineServiceCard.displayName = "EngineServiceCard";
