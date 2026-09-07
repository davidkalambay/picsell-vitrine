"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { ContextualFloatingCTA } from "@/components/ContextualFloatingCTA";
import { CustomGearCursor } from "@/components/interactions/CustomGearCursor";
import { ConversionHub } from "@/components/conversion/ConversionHub";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { INSIGHTS_ARTICLES } from "@/data/insightsData";

const CATEGORIES = [
  "Toutes les Thématiques",
  "Ingénierie & Code",
  "Automatisation IA & n8n",
  "Marketing Cookieless",
  "Architecture & ROI",
];

export default function InsightsIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes les Thématiques");

  const filteredArticles = useMemo(() => {
    return INSIGHTS_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "Toutes les Thématiques" ||
        article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#06070a] text-[#f4f4f6] font-sans selection:bg-[#fdb913] selection:text-slate-950 relative"
    >
      <CustomGearCursor />
      <Navbar />
      <SettingsDrawer />
      <ContextualFloatingCTA />

      {/* Hero with Search and Category Filters */}
      <InsightsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      {/* Articles Grid Section */}
      <section className="py-20 md:py-28 px-6 max-w-6xl mx-auto">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-3xl bg-white/[0.02] border border-white/10 max-w-md mx-auto">
            <span className="text-4xl mb-4 block font-mono text-[#fdb913]">∅</span>
            <h3 className="text-xl font-bold font-sora text-white mb-2">
              Aucun article correspondant
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Aucune publication ne correspond à votre recherche &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Toutes les Thématiques");
              }}
              className="px-6 py-2.5 rounded-full text-xs font-mono font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] transition-all"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Engineering Newsletter Callout */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-white/[0.02] via-[#fdb913]/[0.03] to-white/[0.02] border border-white/10 relative overflow-hidden text-center max-w-4xl mx-auto backdrop-blur-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-4">
            <span>LE CALIBRE DE PRÉCISION &bull; NEWSLETTER TECHNIQUE</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black font-sora text-white mb-3">
            Recevez nos retours d&apos;expérience d&apos;ingénierie
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Un digest mensuel sans fioritures : patterns d&apos;architecture, scripts d&apos;automatisation et études de rentabilité pour bâtir des systèmes pérennes.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscription enregistrée avec succès. Bienvenue dans la Guilde Picsell.");
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse email professionnelle"
              className="px-5 py-3 rounded-full bg-white/[0.05] border border-white/15 focus:border-[#fdb913] text-white text-xs focus:outline-none flex-1 font-mono"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] transition-all shrink-0"
            >
              S&apos;abonner →
            </button>
          </form>
        </div>
      </section>

      {/* Global Conversion Hub */}
      <ConversionHub />
    </main>
  );
}
