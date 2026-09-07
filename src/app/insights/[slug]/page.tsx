import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { CustomGearCursor } from "@/components/interactions/CustomGearCursor";
import { ConversionHub } from "@/components/conversion/ConversionHub";
import { ArticleReadingProgress } from "@/components/insights/ArticleReadingProgress";
import { ArticleAuthorCard } from "@/components/insights/ArticleAuthorCard";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { INSIGHTS_ARTICLES } from "@/data/insightsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article non trouvé — Picsell Agency",
    };
  }

  return {
    title: `${article.title} — Picsell Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      url: `https://picsell.agency/insights/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#06070a] text-[#f4f4f6] font-sans selection:bg-[#fdb913] selection:text-slate-950 relative"
    >
      {/* Top Horological Reading Progress Bar */}
      <ArticleReadingProgress themeColor={article.categoryColor} />

      <CustomGearCursor />
      <Navbar />
      <SettingsDrawer />
      <ContextualFloatingCTA />

      {/* Article Header */}
      <header className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 bg-radial-vignette text-white border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span style={{ color: article.categoryColor }} className="truncate max-w-[200px] sm:max-w-none">
              {article.category}
            </span>
          </div>

          {/* Category & Read Time Badges */}
          <div className="flex items-center gap-3 mb-6">
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
              &bull; {article.readTime}
            </span>
            <span className="text-xs font-mono text-slate-400">
              &bull; {article.publishedAt}
            </span>
          </div>

          {/* Article Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sora tracking-tight mb-6 leading-tight text-white">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            {article.subtitle}
          </p>

          {/* Author Header Row */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-[#fdb913]">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold font-sora text-white">{article.author.name}</p>
              <p className="text-xs font-mono text-slate-400">{article.author.role}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Body */}
      <article className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        {/* Key Takeaway Banner */}
        <div
          className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border mb-16 relative overflow-hidden"
          style={{ borderColor: `${article.categoryColor}30` }}
        >
          <div
            className="absolute top-0 left-0 bottom-0 w-1.5"
            style={{ backgroundColor: article.categoryColor }}
          />
          <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2" style={{ color: article.categoryColor }}>
            Thèse Principale :
          </span>
          <p className="text-base md:text-lg font-medium text-slate-200 leading-relaxed italic">
            &ldquo;{article.keyTakeaway}&rdquo;
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black font-sora text-white tracking-tight">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}

              {section.callout && (
                <div className="p-6 rounded-xl bg-white/[0.03] border-l-2 border-[#fdb913] text-sm text-slate-200 italic my-6">
                  {section.callout.text}
                </div>
              )}

              {section.codeSnippet && (
                <div className="my-8 rounded-2xl border border-white/10 bg-[#090d13] overflow-hidden">
                  {section.codeSnippet.caption && (
                    <div className="px-5 py-2.5 bg-white/[0.03] border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{section.codeSnippet.caption}</span>
                      <span className="uppercase text-[#3dbcc7] font-semibold">{section.codeSnippet.language}</span>
                    </div>
                  )}
                  <pre className="p-5 text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Author Bio Section */}
        <ArticleAuthorCard author={article.author} />

        {/* Back to Insights button */}
        <div className="text-center pt-8 border-t border-white/10">
          <MagneticButton
            href="/insights"
            strength={0.3}
            textStrength={0.15}
            className="px-8 py-3.5 rounded-full text-xs font-mono font-bold border border-white/20 text-white hover:bg-white/[0.08] transition-all inline-block"
          >
            ← Retourner à la bibliothèque d&apos;Insights
          </MagneticButton>
        </div>
      </article>

      {/* Global Conversion Hub */}
      <ConversionHub />
    </main>
  );
}
