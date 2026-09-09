import type { CostaEvent } from "@/data/events";

export const MONTH_NAMES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
] as const;

export const SHORT_MONTH_NAMES = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic",
] as const;

/** La semana empieza en lunes, como es habitual en España. */
export const WEEKDAY_NAMES = ["L", "M", "X", "J", "V", "S", "D"] as const;

export type YearMonth = { readonly year: number; readonly month: number };

/**
 * Las fechas se manejan como cadenas ISO y se comparan lexicográficamente.
 * `new Date("2026-09-11")` se interpreta en UTC y en husos negativos cae al
 * día anterior, así que nunca se construye un Date a partir de la cadena.
 */
export const parseISO = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month: month - 1, day };
};

export const toISO = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

export const monthKeyOf = (iso: string) => iso.slice(0, 7);

export const monthLabel = ({ year, month }: YearMonth) => `${MONTH_NAMES[month]} ${year}`;

export const sameMonth = (a: YearMonth, b: YearMonth) =>
  a.year === b.year && a.month === b.month;

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

/** Índice del día de la semana con el lunes en 0. */
const mondayFirstIndex = (year: number, month: number, day: number) =>
  (new Date(year, month, day).getDay() + 6) % 7;

/** Rejilla de semanas completas; `null` en los huecos antes y después del mes. */
export const buildMonthGrid = ({ year, month }: YearMonth): (number | null)[][] => {
  const total = daysInMonth(year, month);
  const lead = mondayFirstIndex(year, month, 1);

  const cells: (number | null)[] = [
    ...Array<null>(lead).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
};

/** Un evento ocupa todos los días entre su inicio y su fin, ambos incluidos. */
export const eventCoversDay = (event: CostaEvent, iso: string) =>
  iso >= event.start && iso <= (event.end ?? event.start);

export const isMultiDay = (event: CostaEvent) =>
  Boolean(event.end) && event.end !== event.start;

/** Meses distintos presentes en la agenda, en orden cronológico. */
export const monthsOf = (events: readonly CostaEvent[]): YearMonth[] => {
  const keys = Array.from(new Set(events.map((e) => monthKeyOf(e.start)))).sort();
  return keys.map((key) => {
    const [year, month] = key.split("-").map(Number);
    return { year, month: month - 1 };
  });
};

/** "11 de septiembre de 2026" */
export const longDate = (iso: string) => {
  const { year, month, day } = parseISO(iso);
  return `${day} de ${MONTH_NAMES[month]} de ${year}`;
};
