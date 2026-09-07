"use client";

import React from "react";
import Link from "next/link";
import { InsightArticle } from "@/data/insightsData";

export function ArticleCard({ article }: { article: InsightArticle }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
      style={{
        boxShadow: `0 0 30px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Dynamic Ambient Hover Glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
        style={{ backgroundColor: article.categoryColor }}
      />

      <div>
        {/* Category & Read Time Badges */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span
            className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
            style={{
              color: article.categoryColor,
              borderColor: `${article.categoryColor}40`,
              backgroundColor: `${article.categoryColor}15`,
            }}
          >
            {article.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {article.readTime}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold font-sora text-white mb-3 group-hover:text-[#fdb913] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-[#fdb913]">
            {article.author.name.charAt(0)}
          </div>
          <span className="text-xs font-mono text-slate-300">
            {article.author.name}
          </span>
        </div>

        <span className="text-xs font-bold text-[#fdb913] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Lire l&apos;article →
        </span>
      </div>
    </Link>
  );
}
