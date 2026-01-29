import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServices } from "@/lib/mdx";

// Static Params for Build Optimization
export async function generateStaticParams() {
    const services = await getAllServices();
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] p-6 sm:p-24">
            <div className="w-full max-w-3xl">
                <header className="mb-12 border-b border-[#D4AF37]/20 pb-12">
                    <h1 className="text-3xl sm:text-5xl font-serif text-[#D4AF37] tracking-[0.2em] uppercase mb-6">
                        {service.title}
                    </h1>
                    <p className="text-[#E5E4E2]/60 font-mono text-xs sm:text-sm leading-relaxed">
                        {service.description}
                    </p>
                </header>

                <article className="prose prose-invert prose-sm sm:prose-base max-w-none text-[#E5E4E2]/80 font-light leading-loose tracking-wide">
                    {/* Minimalist MDX rendering logic - can be expanded with MDXRemote later if needed */}
                    {service.content.split('\n').map((line, i) => {
                        if (line.startsWith('## ')) return <h2 key={i} className="text-[#D4AF37] font-serif text-2xl mt-12 mb-6 uppercase tracking-widest">{line.replace('## ', '')}</h2>;
                        if (line.startsWith('### ')) return <h3 key={i} className="text-[#E5E4E2] font-serif text-lg mt-8 mb-4 uppercase tracking-wider">{line.replace('### ', '')}</h3>;
                        if (line.startsWith('- ')) return <li key={i} className="list-none flex items-center gap-3 my-2 text-[#E5E4E2]/70"><span className="w-1 h-[1px] bg-[#D4AF37]" /> {line.replace('- ', '')}</li>;
                        if (line.startsWith('> ')) return <blockquote key={i} className="border-l-2 border-[#D4AF37] pl-6 my-10 italic text-[#D4AF37]/80 font-serif text-xl">{line.replace('> ', '').replace(/"/g, '')}</blockquote>;
                        if (line.trim() === '') return <br key={i} />;
                        return <p key={i} className="mb-6">{line}</p>;
                    })}
                </article>

                <footer className="mt-20 pt-10 border-t border-[#E5E4E2]/10">
                    <div className="flex flex-wrap gap-4">
                        {service.roi.map((metric, i) => (
                            <span key={i} className="px-4 py-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] font-mono text-[9px] uppercase tracking-widest rounded-full">
                                {metric}
                            </span>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
}
