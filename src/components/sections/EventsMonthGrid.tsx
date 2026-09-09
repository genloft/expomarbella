"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CostaEvent } from "@/data/events";
import {
  WEEKDAY_NAMES,
  buildMonthGrid,
  eventCoversDay,
  monthLabel,
  toISO,
  type YearMonth,
} from "@/lib/eventDates";

type EventsMonthGridProps = {
  readonly events: readonly CostaEvent[];
  readonly month: YearMonth;
  readonly months: readonly YearMonth[];
  readonly selectedDay: string | null;
  readonly onMonthChange: (month: YearMonth) => void;
  readonly onSelectDay: (iso: string | null) => void;
};

const MAX_CHIPS = 2;

export default function EventsMonthGrid({
  events,
  month,
  months,
  selectedDay,
  onMonthChange,
  onSelectDay,
}: EventsMonthGridProps) {
  const weeks = buildMonthGrid(month);
  const index = months.findIndex((m) => m.year === month.year && m.month === month.month);
  const previous = index > 0 ? months[index - 1] : null;
  const next = index >= 0 && index < months.length - 1 ? months[index + 1] : null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
      {/* Cabecera del mes */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => previous && onMonthChange(previous)}
          disabled={!previous}
          aria-label="Mes anterior"
          className="rounded-full border border-white/15 p-2 text-brand-light transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-brand-light"
        >
          <ChevronLeft size={18} />
        </button>

        <h4 className="font-heading text-xl font-black uppercase tracking-tight text-white md:text-2xl">
          {monthLabel(month)}
        </h4>

        <button
          type="button"
          onClick={() => next && onMonthChange(next)}
          disabled={!next}
          aria-label="Mes siguiente"
          className="rounded-full border border-white/15 p-2 text-brand-light transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-brand-light"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Cabecera de días */}
      <div className="mb-2 grid grid-cols-7 gap-1.5 md:gap-2">
        {WEEKDAY_NAMES.map((day, i) => (
          <div
            key={`${day}-${i}`}
            aria-hidden
            className="pb-1 text-center font-sans text-[10px] font-bold uppercase tracking-widest text-brand-light/40"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Rejilla */}
      <div className="grid grid-cols-7 gap-1.5 md:gap-2">
        {weeks.flat().map((day, cellIndex) => {
          if (day === null) {
            return <div key={`empty-${cellIndex}`} aria-hidden className="min-h-16 md:min-h-24" />;
          }

          const iso = toISO(month.year, month.month, day);
          const dayEvents = events.filter((event) => eventCoversDay(event, iso));
          const hasEvents = dayEvents.length > 0;
          const isSelected = selectedDay === iso;

          return (
            <button
              key={iso}
              type="button"
              disabled={!hasEvents}
              aria-pressed={isSelected}
              aria-label={`${day} — ${dayEvents.length} ${dayEvents.length === 1 ? "evento" : "eventos"}`}
              onClick={() => onSelectDay(isSelected ? null : iso)}
              className={`min-h-16 rounded-lg border p-1.5 text-left transition-colors md:min-h-24 md:p-2 ${
                isSelected
                  ? "border-brand-orange bg-brand-orange/15"
                  : hasEvents
                    ? "border-white/10 bg-white/[0.04] hover:border-brand-orange/50 hover:bg-white/[0.08]"
                    : "cursor-default border-transparent bg-white/[0.01]"
              }`}
            >
              <span
                className={`font-heading text-sm font-black ${
                  isSelected
                    ? "text-brand-orange"
                    : hasEvents
                      ? "text-white"
                      : "text-brand-light/25"
                }`}
              >
                {day}
              </span>

              {hasEvents && (
                <span className="mt-1 hidden flex-col gap-1 md:flex">
                  {dayEvents.slice(0, MAX_CHIPS).map((event) => (
                    <span
                      key={`${event.start}-${event.name}`}
                      className="truncate rounded bg-brand-orange/20 px-1.5 py-0.5 font-sans text-[10px] font-medium leading-tight text-brand-orange"
                    >
                      {event.name}
                    </span>
                  ))}
                  {dayEvents.length > MAX_CHIPS && (
                    <span className="px-1 font-sans text-[10px] text-brand-light/50">
                      +{dayEvents.length - MAX_CHIPS} más
                    </span>
                  )}
                </span>
              )}

              {/* En móvil no cabe el texto: solo un punto por evento */}
              {hasEvents && (
                <span className="mt-1 flex flex-wrap gap-0.5 md:hidden" aria-hidden>
                  {dayEvents.slice(0, 3).map((event) => (
                    <motion.span
                      key={`${event.start}-${event.name}`}
                      layout
                      className="h-1.5 w-1.5 rounded-full bg-brand-orange"
                    />
                  ))}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
