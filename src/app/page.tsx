import { HeroMechanicalEngine } from "@/components/animations/HeroMechanicalEngine";

export default function Home() {
  return (
    <main className="relative flex min-h-[200vh] flex-col bg-[#0A0A0A]">
      {/* Scrollable container for the engine */}
      <section className="sticky top-0 h-screen w-full">
        <HeroMechanicalEngine />
      </section>

      {/* Spacer to allow scrolling */}
      <section className="h-screen w-full flex items-center justify-center pointer-events-none">
        <h2 className="text-[#D4AF37] font-serif text-2xl tracking-[0.5em] uppercase opacity-60">
          Scroll for Precision
        </h2>
      </section>
    </main>
  );
}
