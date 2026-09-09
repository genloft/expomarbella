"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

export const ALL_CATEGORIES = "Todas";

type ShowroomFiltersProps = {
  readonly categories: readonly string[];
  readonly activeCategory: string;
  readonly query: string;
  readonly resultCount: number;
  readonly onCategoryChange: (category: string) => void;
  readonly onQueryChange: (query: string) => void;
};

export default function ShowroomFilters({
  categories,
  activeCategory,
  query,
  resultCount,
  onCategoryChange,
  onQueryChange,
}: ShowroomFiltersProps) {
  return (
    <div className="mb-14">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar marca o sector..."
            aria-label="Buscar cliente del showroom"
            className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-10 font-sans text-sm text-white placeholder:text-brand-light/40 transition-colors focus:border-brand-orange focus:outline-none"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-brand-light/50 transition-colors hover:text-brand-orange"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <p className="font-sans text-sm text-brand-light/50" aria-live="polite">
          <span className="font-bold text-brand-orange">{resultCount}</span>{" "}
          {resultCount === 1 ? "marca" : "marcas"} en el showroom
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`relative rounded-full border px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                isActive
                  ? "border-transparent text-brand-navy"
                  : "border-white/15 text-brand-light/60 hover:border-white/35 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  aria-hidden
                  layoutId="showroom-filter-pill"
                  className="absolute inset-0 rounded-full bg-brand-orange"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
