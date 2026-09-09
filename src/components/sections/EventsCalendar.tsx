"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";

import { costaEvents, type CostaEvent } from "@/data/events";

const ALL = "Todos";

const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
] as const;

const SHORT_MONTHS = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic",
] as const;

/** Parseo manual: `new Date("2026-09-11")` es UTC y puede caer al día anterior. */
const parseDay = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month: month - 1, day };
};

const monthKey = (iso: string) => iso.slice(0, 7);

const monthLabel = (key: string) => {
  const [year, month] = key.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
};

const normalize = (value: string) =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const matchesQuery = (event: CostaEvent, query: string) => {
  if (query.length === 0) return true;
  const haystack = normalize(
    `${event.name} ${event.category} ${event.town} ${event.venue} ${event.desc}`
  );
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
};

/** "11 sep" o "11–14 sep" / "28 nov – 3 dic" para los de varios días. */
const formatRange = (event: CostaEvent) => {
  const from = parseDay(event.start);
  if (!event.end || event.end === event.start) {
    return { day: String(from.day), month: SHORT_MONTHS[from.month], extra: null };
  }
  const to = parseDay(event.end);
  const extra =
    from.month === to.month
      ? `hasta el ${to.day}`
      : `hasta el ${to.day} ${SHORT_MONTHS[to.month]}`;
  return { day: String(from.day), month: SHORT_MONTHS[from.month], extra };
};

export default function EventsCalendar() {
  const [activeGroup, setActiveGroup] = useState<string>(ALL);
  const [activeTown, setActiveTown] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const groups = useMemo(
    () => [ALL, ...Array.from(new Set(costaEvents.map((e) => e.group))).sort((a, b) => a.localeCompare(b, "es"))],
    []
  );

  const towns = useMemo(
    () => [ALL, ...Array.from(new Set(costaEvents.map((e) => e.town))).sort((a, b) => a.localeCompare(b, "es"))],
    []
  );

  const visible = useMemo(
    () =>
      costaEvents.filter(
        (event) =>
          (activeGroup === ALL || event.group === activeGroup) &&
          (activeTown === ALL || event.town === activeTown) &&
          matchesQuery(event, query)
      ),
    [activeGroup, activeTown, query]
  );

  const byMonth = useMemo(() => {
    const map = new Map<string, CostaEvent[]>();
    for (const event of visible) {
      const key = monthKey(event.start);
      const bucket = map.get(key);
      if (bucket) bucket.push(event);
      else map.set(key, [event]);
    }
    return Array.from(map.entries());
  }, [visible]);

  return (
    <div>
      {/* Controles */}
      <div className="mb-10 flex flex-col gap-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar evento, lugar o municipio..."
              aria-label="Buscar en la agenda de eventos"
              className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-10 font-sans text-sm text-white placeholder:text-brand-light/40 transition-colors focus:border-brand-orange focus:outline-none"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-brand-light/50 transition-colors hover:text-brand-orange"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="events-town" className="sr-only">
              Filtrar por municipio
            </label>
            <select
              id="events-town"
              value={activeTown}
              onChange={(event) => setActiveTown(event.target.value)}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-sans text-sm text-white transition-colors focus:border-brand-orange focus:outline-none"
            >
              {towns.map((town) => (
                <option key={town} value={town} className="bg-brand-navy">
                  {town === ALL ? "Todos los municipios" : town}
                </option>
              ))}
            </select>

            <p className="shrink-0 font-sans text-sm text-brand-light/50" aria-live="polite">
              <span className="font-bold text-brand-orange">{visible.length}</span>{" "}
              {visible.length === 1 ? "evento" : "eventos"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {groups.map((group) => {
            const isActive = group === activeGroup;
            return (
              <button
                key={group}
                type="button"
                onClick={() => setActiveGroup(group)}
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
                    layoutId="events-filter-pill"
                    className="absolute inset-0 rounded-full bg-brand-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{group}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Agenda */}
      {byMonth.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 py-20 text-center">
          <p className="font-heading text-xl font-black uppercase text-white">Sin resultados</p>
          <p className="mt-2 font-sans text-brand-light/60">
            Prueba con otra categoría, otro municipio o ajusta la búsqueda.
          </p>
        </div>
      ) : (
        <div className="space-y-14">
          {byMonth.map(([key, monthEvents]) => (
            <div key={key}>
              <h3 className="mb-6 border-b border-white/10 pb-3 font-heading text-2xl font-black uppercase tracking-tight text-brand-orange">
                {monthLabel(key)}
                <span className="ml-3 font-sans text-sm font-medium normal-case tracking-normal text-brand-light/40">
                  {monthEvents.length} {monthEvents.length === 1 ? "evento" : "eventos"}
                </span>
              </h3>

              <ul className="space-y-3">
                {monthEvents.map((event) => (
                  <EventRow key={`${event.start}-${event.name}`} event={event} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EventRow({ event }: { readonly event: CostaEvent }) {
  const { day, month, extra } = formatRange(event);

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-orange/50 hover:bg-white/[0.06] sm:gap-7 sm:p-6"
    >
      {/* Fecha */}
      <div className="flex w-14 shrink-0 flex-col items-center justify-start border-r border-brand-orange/25 pr-4 sm:w-16 sm:pr-6">
        <span className="font-heading text-3xl font-black leading-none text-brand-orange">
          {day}
        </span>
        <span className="mt-1 font-sans text-xs font-bold uppercase tracking-wider text-brand-light/70">
          {month}
        </span>
        {extra && (
          <span className="mt-1 text-center font-sans text-[10px] leading-tight text-brand-light/40">
            {extra}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <h4 className="font-heading text-lg font-black leading-tight text-white">
            {event.source ? (
              <a
                href={event.source}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-orange"
              >
                {event.name}
                <ArrowUpRight
                  size={15}
                  className="ml-1 inline-block -translate-y-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            ) : (
              event.name
            )}
          </h4>
          <span className="shrink-0 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-brand-orange">
            {event.category}
          </span>
        </div>

        <p className="mt-2 inline-flex items-start gap-1.5 font-sans text-sm font-medium text-brand-light/70">
          <MapPin size={14} className="mt-0.5 shrink-0" />
          <span>
            {event.town} · {event.venue}
          </span>
        </p>

        <p className="mt-2 font-sans text-sm leading-relaxed text-brand-light/60">{event.desc}</p>
      </div>
    </motion.li>
  );
}
