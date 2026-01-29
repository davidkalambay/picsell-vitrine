import { HeroLens } from "@/components/animations/HeroLens";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { getAllServices } from "@/lib/mdx";

export default async function Home() {
  const services = await getAllServices();

  return (
    <main className="relative flex min-h-screen flex-col bg-[#0A0A0A]">
      {/* Lens Section */}
      <section className="relative w-full">
        <HeroLens />
      </section>

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Spacer / Future Sections */}
      <section className="h-[50vh] w-full flex items-center justify-center pointer-events-none">
        <h2 className="text-[#D4AF37]/20 font-serif text-2xl tracking-[0.5em] uppercase">
          Precision_Observed
        </h2>
      </section>
    </main>
  );
}
