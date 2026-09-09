"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { newsItems, type NewsItem } from "@/data/news";

const ALL = "Todas";

export default function NewsGrid() {
  const [category, setCategory] = useState<string>(ALL);
  const [town, setTown] = useState<string>(ALL);

  const categories = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(newsItems.map((n) => n.category))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    ],
    []
  );

  const towns = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(newsItems.map((n) => n.town))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    ],
    []
  );

  const visible = useMemo(
    () =>
      newsItems.filter(
        (item) =>
          (category === ALL || item.category === category) &&
          (town === ALL || item.town === town)
      ),
    [category, town]
  );

  return (
    <div>
      {/* Filtros */}
      <div className="mb-12 flex flex-col gap-5 border-y border-brand-light/20 py-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="mr-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-dark/40">
            Tema
          </span>
          {categories.map((name) => {
            const isActive = name === category;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setCategory(name)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                  isActive
                    ? "border-transparent text-white"
                    : "border-brand-light/40 text-brand-dark/60 hover:border-brand-navy hover:text-brand-navy"
                }`}
              >
                {isActive && (
                  <motion.span
                    aria-hidden
                    layoutId="news-category-pill"
                    className="absolute inset-0 rounded-full bg-brand-navy"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="mr-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-dark/40">
            Municipio
          </span>
          {towns.map((name) => {
            const isActive = name === town;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setTown(name)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                  isActive
                    ? "border-brand-orange bg-brand-orange text-brand-dark"
                    : "border-brand-light/40 text-brand-dark/60 hover:border-brand-orange hover:text-brand-navy"
                }`}
              >
                {name}
              </button>
            );
          })}

          <p className="ml-auto font-sans text-sm text-brand-dark/50" aria-live="polite">
            <span className="font-bold text-brand-navy">{visible.length}</span>{" "}
            {visible.length === 1 ? "noticia" : "noticias"}
          </p>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-brand-light/40 py-20 text-center">
          <p className="font-heading text-xl font-black uppercase text-brand-navy">Sin resultados</p>
          <p className="mt-2 font-sans text-brand-dark/60">
            Prueba con otro tema u otro municipio.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <NewsCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

function NewsCard({ item, index }: { readonly item: NewsItem; readonly index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-brand-light/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.cover}
          alt=""
          aria-hidden
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-brand-orange px-3 py-1 font-sans text-xs font-bold uppercase text-brand-dark">
          {item.category}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-7">
        <p className="mb-3 inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-brand-dark/45">
          <MapPin size={13} className="shrink-0" />
          {item.town}
        </p>

        <h2 className="mb-4 font-heading text-xl font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand-orange">
          {item.title}
        </h2>

        <p className="font-sans leading-relaxed text-brand-dark/70">{item.body}</p>
      </div>
    </motion.article>
  );
}
