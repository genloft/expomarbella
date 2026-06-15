import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-white text-brand-dark pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-navy transition-colors mb-12 font-medium">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <div className="max-w-4xl">
          <h1 className="font-heading font-black text-5xl md:text-7xl uppercase mb-8 text-brand-navy">
            Networking
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/70 font-sans leading-relaxed mb-12">
            Conecta con los mejores profesionales. Esta es una página de muestra en construcción.
          </p>
          <div className="h-64 bg-brand-light/20 rounded-xl border-2 border-dashed border-brand-light/40 flex items-center justify-center">
            <span className="text-brand-dark/40 font-bold uppercase tracking-widest">Espacio para eventos de Networking</span>
          </div>
        </div>
      </div>
    </main>
  );
}
