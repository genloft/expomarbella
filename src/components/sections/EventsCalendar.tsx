"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Search, X } from "lucide-react";

import { costaEvents, type CostaEvent } from "@/data/events";
import {
  eventCoversDay,
  longDate,
  monthKeyOf,
  monthsOf,
  type YearMonth,
} from "@/lib/eventDates";
import EventsMonthGrid from "./EventsMonthGrid";
import EventsList from "./EventsList";

const ALL = "Todos";

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

export default function EventsCalendar() {
  const months = useMemo(() => monthsOf(costaEvents), []);

  const [activeGroup, setActiveGroup] = useState<string>(ALL);
  const [activeTown, setActiveTown] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState<YearMonth>(months[0]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const groups = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(costaEvents.map((e) => e.group))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    ],
    []
  );

  const towns = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(costaEvents.map((e) => e.town))).sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    ],
    []
  );

  /** Filtros de contenido: alimentan tanto el calendario como el listado. */
  const filtered = useMemo(
    () =>
      costaEvents.filter(
        (event) =>
          (activeGroup === ALL || event.group === activeGroup) &&
          (activeTown === ALL || event.town === activeTown) &&
          matchesQuery(event, query)
      ),
    [activeGroup, activeTown, query]
  );

  /** El día seleccionado solo recorta el listado, no el calendario. */
  const listed = useMemo(
    () =>
      selectedDay
        ? filtered.filter((event) => eventCoversDay(event, selectedDay))
        : filtered,
    [filtered, selectedDay]
  );

  const monthEventCount = filtered.filter(
    (event) => monthKeyOf(event.start) === `${month.year}-${String(month.month + 1).padStart(2, "0")}`
  ).length;

  const changeMonth = (next: YearMonth) => {
    setMonth(next);
    setSelectedDay(null);
  };

  const resetFilters = () => {
    setActiveGroup(ALL);
    setActiveTown(ALL);
    setQuery("");
    setSelectedDay(null);
  };

  const hasFilters = activeGroup !== ALL || activeTown !== ALL || query.length > 0 || selectedDay;

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
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedDay(null);
              }}
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

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <label htmlFor="events-town" className="sr-only">
              Filtrar por municipio
            </label>
            <select
              id="events-town"
              value={activeTown}
              onChange={(event) => {
                setActiveTown(event.target.value);
                setSelectedDay(null);
              }}
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-sans text-sm text-white transition-colors focus:border-brand-orange focus:outline-none sm:flex-none"
            >
              {towns.map((town) => (
                <option key={town} value={town} className="bg-brand-navy">
                  {town === ALL ? "Todos los municipios" : town}
                </option>
              ))}
            </select>

            <p className="shrink-0 font-sans text-sm text-brand-light/50" aria-live="polite">
              <span className="font-bold text-brand-orange">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "evento" : "eventos"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {groups.map((group) => {
            const isActive = group === activeGroup;
            return (
              <button
                key={group}
                type="button"
                onClick={() => {
                  setActiveGroup(group);
                  setSelectedDay(null);
                }}
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

          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="ml-1 font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-light/50 underline underline-offset-4 transition-colors hover:text-brand-orange"
            >
              Quitar filtros
            </button>
          )}
        </div>
      </div>

      {/* Calendario + listado */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <EventsMonthGrid
            events={filtered}
            month={month}
            months={months}
            selectedDay={selectedDay}
            onMonthChange={changeMonth}
            onSelectDay={setSelectedDay}
          />

          <p className="mt-4 flex items-center gap-2 font-sans text-sm text-brand-light/50">
            <CalendarDays size={15} className="shrink-0 text-brand-orange" />
            {monthEventCount === 0
              ? "Ningún evento este mes con los filtros actuales."
              : "Pulsa un día para ver solo sus eventos."}
          </p>
        </div>

        <div>
          {selectedDay && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-orange/30 bg-brand-orange/10 px-5 py-4">
              <p className="font-heading text-sm font-black uppercase tracking-wide text-brand-orange">
                {longDate(selectedDay)}
                <span className="ml-2 font-sans font-medium normal-case tracking-normal text-brand-light/70">
                  {listed.length} {listed.length === 1 ? "evento" : "eventos"}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-light/70 transition-colors hover:text-brand-orange"
              >
                <X size={14} /> Ver todos
              </button>
            </div>
          )}

          <EventsList events={listed} grouped={!selectedDay} />
        </div>
      </div>
    </div>
  );
}
