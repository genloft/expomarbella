"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import type { ShowroomClient } from "@/data/showroomTypes";
import ClientsGrid from "./ClientsGrid";
import ShowroomFilters, { ALL_CATEGORIES } from "./ShowroomFilters";

type ShowroomClientsProps = {
  readonly clients: readonly ShowroomClient[];
};

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const matchesQuery = (client: ShowroomClient, query: string): boolean => {
  if (query.length === 0) return true;

  const haystack = normalize(
    `${client.name} ${client.category} ${client.city} ${client.description}`
  );

  return normalize(query)
    .split(/\s+/)
    .filter((term) => term.length > 0)
    .every((term) => haystack.includes(term));
};

export default function ShowroomClients({ clients }: ShowroomClientsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => [
      ALL_CATEGORIES,
      ...Array.from(new Set(clients.map((client) => client.category))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    ],
    [clients]
  );

  const visibleClients = useMemo(
    () =>
      clients.filter(
        (client) =>
          (activeCategory === ALL_CATEGORIES || client.category === activeCategory) &&
          matchesQuery(client, query)
      ),
    [clients, activeCategory, query]
  );

  const platinum = visibleClients.filter((client) => client.tier === "platinum");
  const premium = visibleClients.filter((client) => client.tier === "premium");
  const hasResults = visibleClients.length > 0;

  return (
    <section id="clientes" className="relative bg-brand-navy py-24 md:py-32">
      {/* Decorative field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-light/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
            <Sparkles size={13} /> Clientes seleccionados
          </span>
          <h2 className="font-heading text-4xl font-black uppercase leading-[1.05] text-white md:text-5xl">
            Las marcas que <span className="text-brand-orange">habitan</span> el showroom
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-brand-light/70">
            Empresas, marcas y profesionales seleccionados que forman parte del ecosistema
            ExpoMarbella y representan algunos de los mejores productos y servicios disponibles
            en Marbella y la Costa del Sol.
          </p>
        </motion.div>

        <ShowroomFilters
          categories={categories}
          activeCategory={activeCategory}
          query={query}
          resultCount={visibleClients.length}
          onCategoryChange={setActiveCategory}
          onQueryChange={setQuery}
        />

        {platinum.length > 0 && (
          <div className="mb-20">
            <TierHeading
              title="Clientes Platinum"
              subtitle="Marcas de referencia con presencia destacada dentro de sus respectivos sectores."
            />
            <ClientsGrid clients={platinum} columns="wide" />
          </div>
        )}

        {premium.length > 0 && (
          <div>
            <TierHeading
              title="Clientes Premium"
              subtitle="El ecosistema de firmas que da forma al diseño, el hogar y el lifestyle de la Costa del Sol."
            />
            <ClientsGrid clients={premium} columns="compact" />
          </div>
        )}

        {!hasResults && (
          <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
            <p className="font-heading text-xl font-black uppercase text-white">
              Sin resultados
            </p>
            <p className="mt-2 font-sans text-brand-light/60">
              Prueba con otro sector o ajusta la búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function TierHeading({ title, subtitle }: { readonly title: string; readonly subtitle: string }) {
  return (
    <div className="mb-8 flex flex-col gap-3 border-l-2 border-brand-orange pl-5">
      <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
        {title}
      </h3>
      <p className="max-w-2xl font-sans text-sm text-brand-light/60">{subtitle}</p>
    </div>
  );
}
