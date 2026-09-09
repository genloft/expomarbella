"use client";

import { motion } from "framer-motion";
import { CalendarDays, Eye, Globe2 } from "lucide-react";

import PackExpoMarbella from "./PackExpoMarbella";

export default function Advertise() {
  const values = [
    {
      icon: <CalendarDays size={40} />,
      title: "Solo 2 ediciones al año",
      desc: "Menor inversión recurrente, mayor impacto y exclusividad en cada número."
    },
    {
      icon: <Eye size={40} />,
      title: "+6 meses de visibilidad",
      desc: "Tu marca presente y visible en los puntos más premium durante medio año por inserción."
    },
    {
      icon: <Globe2 size={40} />,
      title: "Artículos en 6 idiomas",
      desc: "Tu publirreportaje en el idioma de tu cliente objetivo."
    }
  ];

  return (
    <section id="anunciate" className="py-24 bg-[#FAFAFA] text-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy mb-6"
          >
            Visibilidad 360º. <br className="hidden md:block" />
            <span className="text-brand-orange">El mayor impacto.</span>
          </motion.h2>
          <p className="text-xl font-serif italic text-brand-dark/70 max-w-2xl mx-auto">
            Posiciona tu marca frente a la audiencia más exclusiva de la Costa del Sol.
          </p>
        </div>

        {/* 3 Columns Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="text-brand-orange mb-6 bg-brand-orange/10 p-5 rounded-full">
                {val.icon}
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-brand-navy">{val.title}</h3>
              <p className="text-brand-dark/70 font-sans text-lg">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        <PackExpoMarbella />

      </div>
    </section>
  );
}
