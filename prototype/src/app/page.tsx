import { SwissLayout } from "@/components/SwissLayout";
import { HeroEngine } from "@/components/HeroEngine";
import { GlassGrid } from "@/components/GlassGrid";
import { HorologicalCTA } from "@/components/HorologicalCTA";

export default function Home() {
  return (
    <SwissLayout>
      {/* Navigation Header */}
      <nav className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brushed-gold flex items-center justify-center rounded-sm">
            <span className="text-midnight-black font-serif font-bold text-xl">P</span>
          </div>
          <div>
            <h1 className="text-xl font-serif text-white leading-none">Picsell Agency</h1>
            <span className="font-mono text-[9px] text-brushed-gold uppercase tracking-[0.2em]">Mechanical_Swiss_Mastery</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-brushed-gold transition-colors">Services</a>
          <a href="#" className="hover:text-brushed-gold transition-colors">Méthode BMAD</a>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-brushed-gold">FR / EN</span>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroEngine />

      {/* Services Section */}
      <div id="services">
        <GlassGrid />
      </div>

      {/* Final Call to Action */}
      <HorologicalCTA />
    </SwissLayout>
  );
}

