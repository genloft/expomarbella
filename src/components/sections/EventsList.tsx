"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { CostaEvent } from "@/data/events";
import {
  SHORT_MONTH_NAMES,
  isMultiDay,
  monthKeyOf,
  parseISO,
} from "@/lib/eventDates";

type EventsListProps = {
  readonly events: readonly CostaEvent[];
  /** Con un día seleccionado la lista se muestra plana, sin cabeceras de mes. */
  readonly grouped: boolean;
};

const monthHeading = (key: string) => {
  const [year, month] = key.split("-").map(Number);
  const names = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${names[month - 1]} ${year}`;
};

export default function EventsList({ events, grouped }: EventsListProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
        <p className="font-heading text-xl font-black uppercase text-white">Sin resultados</p>
        <p className="mt-2 font-sans text-brand-light/60">
          Prueba con otra categoría, otro municipio o ajusta la búsqueda.
        </p>
      </div>
    );
  }

  if (!grouped) {
    return (
      <ul className="space-y-3">
        {events.map((event) => (
          <EventRow key={`${event.start}-${event.name}`} event={event} />
        ))}
      </ul>
    );
  }

  const byMonth = new Map<string, CostaEvent[]>();
  for (const event of events) {
    const key = monthKeyOf(event.start);
    const bucket = byMonth.get(key);
    if (bucket) bucket.push(event);
    else byMonth.set(key, [event]);
  }

  return (
    <div className="space-y-12">
      {Array.from(byMonth.entries()).map(([key, monthEvents]) => (
        <div key={key}>
          <h4 className="mb-5 border-b border-white/10 pb-3 font-heading text-xl font-black uppercase tracking-tight text-brand-orange">
            {monthHeading(key)}
            <span className="ml-3 font-sans text-sm font-medium normal-case tracking-normal text-brand-light/40">
              {monthEvents.length} {monthEvents.length === 1 ? "evento" : "eventos"}
            </span>
          </h4>
          <ul className="space-y-3">
            {monthEvents.map((event) => (
              <EventRow key={`${event.start}-${event.name}`} event={event} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EventRow({ event }: { readonly event: CostaEvent }) {
  const from = parseISO(event.start);
  const to = event.end ? parseISO(event.end) : null;

  const rangeNote =
    to && isMultiDay(event)
      ? from.month === to.month
        ? `hasta el ${to.day}`
        : `hasta el ${to.day} ${SHORT_MONTH_NAMES[to.month]}`
      : null;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-orange/50 hover:bg-white/[0.06] sm:gap-7 sm:p-6"
    >
      <div className="flex w-14 shrink-0 flex-col items-center border-r border-brand-orange/25 pr-4 sm:w-16 sm:pr-6">
        <span className="font-heading text-3xl font-black leading-none text-brand-orange">
          {from.day}
        </span>
        <span className="mt-1 font-sans text-xs font-bold uppercase tracking-wider text-brand-light/70">
          {SHORT_MONTH_NAMES[from.month]}
        </span>
        {rangeNote && (
          <span className="mt-1 text-center font-sans text-[10px] leading-tight text-brand-light/40">
            {rangeNote}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <h5 className="font-heading text-lg font-black leading-tight text-white">
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
          </h5>
          <span className="max-w-full rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 font-sans text-[10px] font-bold uppercase leading-relaxed tracking-[0.12em] text-brand-orange">
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
