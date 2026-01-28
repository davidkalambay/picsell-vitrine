import { HeroMechanicalEngine } from "@/components/animations/HeroMechanicalEngine";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#0A0A0A] overflow-hidden">
      {/* Absolute Header for Logo */}
      <header className="absolute top-0 left-0 w-full z-30 p-8 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex gap-8 font-mono text-[10px] text-[#E5E4E2]/40 uppercase tracking-[0.2em]">
          <span>// Heritage_Suisse</span>
          <span>// IA_Supervisée</span>
        </div>
      </header>

      {/* The Mechanical Engine - Proving our technical mastery even in Coming Soon */}
      <section className="absolute inset-0 z-0">
        <div className="opacity-40 scale-110 blur-[2px]">
          <HeroMechanicalEngine />
        </div>
      </section>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />

      {/* Content */}
      <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-[#D4AF37] font-mono text-sm tracking-[0.4em] uppercase opacity-80 animate-pulse">
            Mechanism_Adjustment_In_Progress
          </h2>

          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-[#E5E4E2] leading-tight">
            L'ingénierie de <br />
            <span className="italic font-light text-[#D4AF37]">l'image qui vend.</span>
          </h1>

          <p className="max-w-xl mx-auto text-[#E5E4E2]/70 text-lg font-light leading-relaxed">
            Picsell Agency réinvente la conversion digitale. La puissance du pixel, la précision d'un mouvement d'horlogerie.
            Prêt pour l'ajustement final ?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="mailto:david@picsell.agency"
              className="group relative px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-mono text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:pr-12"
            >
              <span className="relative z-10">Consultation Prioritaire</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </a>

            <p className="font-mono text-[10px] text-[#E5E4E2]/40 uppercase tracking-[0.2em]">
              Lancement_prévu: Q1_2026
            </p>
          </div>
        </div>

        {/* Technical Footer Decoration */}
        <div className="absolute bottom-12 w-full max-w-5xl px-12 flex justify-between items-end">
          <div className="hidden md:block text-left space-y-2 opacity-30 font-mono text-[10px] text-[#E5E4E2]">
            <p>// BMAD_CORE_v1.0.0</p>
            <p>// SHIFTING_TO_LUXURY_TECH</p>
          </div>

          <div className="text-right space-y-2 opacity-30 font-mono text-[10px] text-[#E5E4E2]">
            <p>EST_SYNCHRONIZATION_ACTIVE</p>
            <p>© 2026 PICSELL_AGENCY</p>
          </div>
        </div>
      </section>
    </main>
  );
}
