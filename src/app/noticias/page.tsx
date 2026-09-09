import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarRange } from "lucide-react";

import { NEWS_PERIOD, newsItems } from "@/data/news";
import NewsGrid from "@/components/noticias/NewsGrid";

export const metadata: Metadata = {
  title: "Noticias | Actualidad de Marbella y la Costa del Sol — ExpoMarbella",
  description: `Resumen de actualidad de Marbella, San Pedro Alcántara, Fuengirola, Mijas, Estepona y Sotogrande. ${NEWS_PERIOD}.`,
  alternates: { canonical: "https://expomarbella.com/noticias" },
  openGraph: {
    title: "Noticias | ExpoMarbella",
    description: `Actualidad de la Costa del Sol. ${NEWS_PERIOD}.`,
    url: "https://expomarbella.com/noticias",
    siteName: "ExpoMarbella",
    locale: "es_ES",
    type: "website",
  },
};

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32 text-brand-dark">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-medium text-brand-orange transition-colors hover:text-brand-navy"
        >
          <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 font-heading text-5xl font-black uppercase text-brand-navy md:text-7xl">
            Noticias
          </h1>

          <p className="mb-6 max-w-3xl font-sans text-xl leading-relaxed text-brand-dark/70 md:text-2xl">
            Lo que ha pasado esta semana en Marbella y la Costa del Sol: urbanismo, turismo,
            arquitectura, deporte, cultura y gastronomía.
          </p>

          <p className="mb-14 inline-flex items-center gap-2 rounded-full border border-brand-light/40 px-4 py-2 font-sans text-sm font-medium text-brand-dark/60">
            <CalendarRange size={16} className="shrink-0 text-brand-orange" />
            {newsItems.length} noticias · {NEWS_PERIOD}
          </p>

          <NewsGrid />
        </div>
      </div>
    </main>
  );
}
