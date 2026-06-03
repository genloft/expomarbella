"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      month: "Nov",
      year: "2026",
      title: "SIMED",
      location: "FYCMA, Málaga",
      desc: "Salón Inmobiliario del Mediterráneo. Stand oficial ExpoMarbella."
    },
    {
      month: "Nov",
      year: "2026",
      title: "Ibiza Home Meeting",
      location: "FECOEV, Ibiza",
      desc: "La feria del sector de la construcción y el inmobiliario."
    },
    {
      month: "Ene",
      year: "2027",
      title: "FITUR",
      location: "IFEMA, Madrid",
      desc: "Feria Internacional de Turismo. Presentación edición especial."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase mb-4">
              Próximos <span className="text-brand-orange">Eventos</span>
            </h2>
            <p className="text-brand-light font-sans max-w-xl text-lg">
              Agenda de presencia oficial y distribución especial.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-8 flex flex-col h-full"
            >
              <div className="flex gap-6 mb-6">
                <div className="flex flex-col items-center justify-center border-r border-brand-orange/30 pr-6">
                  <span className="font-heading font-black text-4xl text-brand-orange leading-none">{evt.month}</span>
                  <span className="font-bold text-brand-light mt-1">{evt.year}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-wide group-hover:text-brand-orange transition-colors">
                    {evt.title}
                  </h3>
                  <span className="text-brand-light/70 text-sm font-bold">{evt.location}</span>
                </div>
              </div>
              <p className="text-brand-light font-sans flex-grow mb-8">
                {evt.desc}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-orange transition-colors mt-auto">
                Saber más <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
