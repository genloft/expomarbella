"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import EventsCalendar from "./EventsCalendar";

/** Ferias en las que ExpoMarbella tiene presencia propia. */
const OWN_PRESENCE = [
  {
    month: "Nov",
    year: "2026",
    title: "SIMED",
    location: "FYCMA, Málaga",
    desc: "Salón Inmobiliario del Mediterráneo. Stand oficial ExpoMarbella.",
  },
  {
    month: "Nov",
    year: "2026",
    title: "Ibiza Home Meeting",
    location: "FECOEV, Ibiza",
    desc: "La feria del sector de la construcción y el inmobiliario.",
  },
  {
    month: "Ene",
    year: "2027",
    title: "FITUR",
    location: "IFEMA, Madrid",
    desc: "Feria Internacional de Turismo. Presentación edición especial.",
  },
] as const;

export default function Events() {
  return (
    <section id="eventos" className="scroll-mt-24 bg-brand-navy py-24 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 font-heading text-4xl font-black uppercase md:text-5xl">
            Próximos <span className="text-brand-orange">Eventos en Marbella</span>
          </h2>
          <p className="max-w-xl font-sans text-lg text-brand-light">
            Información sobre próximos eventos de todo tipo en Marbella: construcción, arquitectura, interiorismo, gastronomía, deporte, ocio, salud, belleza, moda...
          </p>
        </motion.div>

        {/* Presencia propia */}
        <div className="mb-20">
          <h3 className="mb-6 border-l-2 border-brand-orange pl-4 font-heading text-xl font-black uppercase tracking-tight">
            Dónde estaremos
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {OWN_PRESENCE.map((evt, idx) => (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group flex h-full flex-col border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
              >
                <div className="mb-6 flex gap-6">
                  <div className="flex flex-col items-center justify-center border-r border-brand-orange/30 pr-6">
                    <span className="font-heading text-4xl font-black leading-none text-brand-orange">
                      {evt.month}
                    </span>
                    <span className="mt-1 font-bold text-brand-light">{evt.year}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-heading text-2xl font-bold uppercase tracking-wide transition-colors group-hover:text-brand-orange">
                      {evt.title}
                    </h4>
                    <span className="text-sm font-bold text-brand-light/70">{evt.location}</span>
                  </div>
                </div>
                <p className="mb-8 flex-grow font-sans text-brand-light">{evt.desc}</p>
                <Link
                  href="#contacto"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-brand-orange"
                >
                  Saber más <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Agenda completa de la Costa del Sol */}
        <div>
          <div className="mb-8 border-l-2 border-brand-orange pl-4">
            <h3 className="font-heading text-xl font-black uppercase tracking-tight">
              Agenda Costa del Sol
            </h3>
            <p className="mt-2 max-w-2xl font-sans text-sm text-brand-light/60">
              70 eventos confirmados o anunciados entre septiembre y diciembre de 2026 en Marbella,
              Málaga, Estepona, Fuengirola y San Pedro Alcántara.
            </p>
          </div>

          <EventsCalendar />
        </div>
      </div>
    </section>
  );
}
