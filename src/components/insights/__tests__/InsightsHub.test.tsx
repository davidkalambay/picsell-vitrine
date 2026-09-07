import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SettingsProvider } from "@/context/SettingsContext";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { ArticleAuthorCard } from "@/components/insights/ArticleAuthorCard";
import { ArticleReadingProgress } from "@/components/insights/ArticleReadingProgress";
import InsightsIndexPage from "@/app/insights/page";
import InsightArticlePage, { generateMetadata } from "@/app/insights/[slug]/page";
import { INSIGHTS_ARTICLES } from "@/data/insightsData";

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("Insights Hub & Dynamic Articles", () => {
  const sampleArticle = INSIGHTS_ARTICLES[0];

  it("renders InsightsHero with title, search input and category pills", () => {
    const onSearchChange = vi.fn();
    const onSelectCategory = vi.fn();
    const categories = ["Toutes les Thématiques", "Ingénierie & Code", "Marketing Cookieless"];

    render(
      <SettingsProvider>
        <InsightsHero
          searchQuery=""
          onSearchChange={onSearchChange}
          selectedCategory="Toutes les Thématiques"
          onSelectCategory={onSelectCategory}
          categories={categories}
        />
      </SettingsProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /Insights, Systèmes & Décisions de Haute Précision\./i,
      })
    ).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Rechercher un article");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Next.js" } });
    expect(onSearchChange).toHaveBeenCalledWith("Next.js");

    const categoryBtn = screen.getByRole("button", { name: "Ingénierie & Code" });
    fireEvent.click(categoryBtn);
    expect(onSelectCategory).toHaveBeenCalledWith("Ingénierie & Code");
  });

  it("renders ArticleCard with category, title and link", () => {
    render(
      <SettingsProvider>
        <ArticleCard article={sampleArticle} />
      </SettingsProvider>
    );

    expect(screen.getByText(sampleArticle.category)).toBeInTheDocument();
    expect(screen.getByText(sampleArticle.title)).toBeInTheDocument();
    expect(screen.getByText(sampleArticle.author.name)).toBeInTheDocument();
    expect(screen.getByText(/Lire l'article →/i)).toBeInTheDocument();
  });

  it("renders ArticleAuthorCard with author details", () => {
    render(
      <SettingsProvider>
        <ArticleAuthorCard author={sampleArticle.author} />
      </SettingsProvider>
    );

    expect(screen.getByText(sampleArticle.author.name)).toBeInTheDocument();
    expect(screen.getByText(sampleArticle.author.role)).toBeInTheDocument();
    expect(screen.getByText(sampleArticle.author.bio)).toBeInTheDocument();
  });

  it("renders ArticleReadingProgress progressbar", () => {
    render(<ArticleReadingProgress themeColor="#3dbcc7" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });

  it("renders InsightsIndexPage and allows filtering articles by search and category", () => {
    render(
      <SettingsProvider>
        <InsightsIndexPage />
      </SettingsProvider>
    );

    // Initial state: 3 articles displayed
    expect(screen.getAllByText(/Lire l'article →/i)).toHaveLength(3);

    // Filter by search query
    const searchInput = screen.getByLabelText("Rechercher un article");
    fireEvent.change(searchInput, { target: { value: "n8n" } });
    expect(screen.getAllByText(/Lire l'article →/i)).toHaveLength(1);
    expect(screen.getByText(/Orchestration IA et n8n en Production/i)).toBeInTheDocument();

    // Reset search
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(screen.getAllByText(/Lire l'article →/i)).toHaveLength(3);

    // Filter by category
    const codeCategoryBtn = screen.getByRole("button", { name: "Ingénierie & Code" });
    fireEvent.click(codeCategoryBtn);
    expect(screen.getAllByText(/Lire l'article →/i)).toHaveLength(1);
    expect(screen.getByText(/Next\.js App Router & Architecture Zero-Dette/i)).toBeInTheDocument();
  });

  it("generates correct metadata for dynamic article", async () => {
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: sampleArticle.slug }),
    });

    expect(meta.title).toContain(sampleArticle.title);
    expect(meta.description).toBe(sampleArticle.excerpt);
  });

  it("renders InsightArticlePage for valid slug", async () => {
    const PageComponent = await InsightArticlePage({
      params: Promise.resolve({ slug: sampleArticle.slug }),
    });

    render(<SettingsProvider>{PageComponent}</SettingsProvider>);

    expect(screen.getByRole("heading", { level: 1, name: sampleArticle.title })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(sampleArticle.keyTakeaway, "i"))).toBeInTheDocument();
  });
});
