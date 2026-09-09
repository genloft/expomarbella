import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { currentIssue } from "@/data/currentIssue";

export const metadata: Metadata = {
  title: `Revista | ${currentIssue.title} — ${currentIssue.date}`,
  description: `Lee online el número ${currentIssue.number} de ExpoMarbella (${currentIssue.date}), la revista de arquitectura, diseño, real estate y lifestyle de Marbella y la Costa del Sol.`,
  alternates: { canonical: "https://expomarbella.com/revista" },
  openGraph: {
    title: `${currentIssue.title} | ExpoMarbella`,
    description: `Número actual de ExpoMarbella, ${currentIssue.date}. Léelo online.`,
    url: "https://expomarbella.com/revista",
    siteName: "ExpoMarbella",
    images: [{ url: currentIssue.coverAbsolute, width: 1000, height: 1415 }],
    locale: "es_ES",
    type: "website",
  },
};

export default function RevistaPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32 text-brand-dark">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-medium text-brand-orange transition-colors hover:text-brand-navy"
        >
          <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          {/* Portada */}
          <a
            href={currentIssue.readUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[1000/1415] overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src={currentIssue.cover}
              alt={`Portada de ${currentIssue.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-brand-navy/0 opacity-0 transition-all duration-300 group-hover:bg-brand-navy/60 group-hover:opacity-100">
              <span className="rounded bg-white px-5 py-2.5 font-sans font-bold text-brand-navy">
                Leer online
              </span>
            </span>
          </a>

          {/* Contenido */}
          <div>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
              Número actual · {currentIssue.date}
            </p>

            <h1 className="font-heading text-5xl font-black uppercase leading-[1.02] text-brand-navy md:text-7xl">
              ExpoMarbella
              <span className="block text-brand-orange">Nº{currentIssue.number}</span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-brand-dark/70">
              En portada, <strong className="text-brand-navy">{currentIssue.coverStory}</strong>.
              Lee la edición completa en nuestro visor interactivo, con artículos en seis idiomas.
            </p>

            <a
              href={currentIssue.readUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded bg-brand-orange px-8 py-4 font-sans text-lg font-bold text-brand-dark transition-colors hover:bg-brand-navy hover:text-white"
            >
              Leer la revista <ArrowUpRight size={20} />
            </a>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <h2 className="mb-6 font-heading text-xl font-black uppercase tracking-tight text-brand-navy">
                En este número
              </h2>
              <ul className="space-y-4">
                {currentIssue.highlights.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-baseline justify-between gap-6 border-b border-gray-100 pb-4"
                  >
                    <span className="font-sans font-medium text-brand-dark">{item.title}</span>
                    <span className="shrink-0 font-sans text-sm font-bold text-brand-orange">
                      Pág. {item.page}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#ediciones"
              className="mt-10 inline-flex items-center gap-2 font-sans font-bold text-brand-navy underline underline-offset-4 transition-colors hover:text-brand-orange"
            >
              Ver todas las ediciones anteriores
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
