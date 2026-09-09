"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Paintbrush, Building2, UtensilsCrossed, Plane, Heart, Globe, ChevronDown } from "lucide-react";

export default function Sectors() {
  const [isOpen, setIsOpen] = useState(false);

  const sectors = [
    {
      title: "Arquitectura & Interiorismo",
      icon: <Paintbrush size={32} />,
      desc: "Diseño vanguardista y tendencias en espacios de lujo."
    },
    {
      title: "Real Estate & Inversión",
      icon: <Building2 size={32} />,
      desc: "Las propiedades más exclusivas y oportunidades del mercado."
    },
    {
      title: "Gastronomía Premium",
      icon: <UtensilsCrossed size={32} />,
      desc: "Alta cocina, chefs estrella y experiencias culinarias únicas."
    },
    {
      title: "Turismo & Lifestyle",
      icon: <Plane size={32} />,
      desc: "El estilo de vida de la Costa del Sol y destinos internacionales."
    },
    {
      title: "Salud & Bienestar",
      icon: <Heart size={32} />,
      desc: "Clínicas premium, spas y wellness para un cuidado integral."
    },
    {
      title: "Ocio & lifestyle",
      icon: <Globe size={32} />,
      desc: "Las experiencias, tendencias y lugares que definen el estilo de vida más exclusivo de la Costa del Sol."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sectores" className="py-16 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl uppercase"
          >
            ExpoMarbella <span className="text-brand-orange">te muestra solo lo mejor</span>
          </motion.h2>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="sectores-lista"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-light/25 px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-brand-light transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            {isOpen ? "Ocultar sectores" : "Ver los sectores"}
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="sectores-lista"
              key="sectores-lista"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-brand-navy border border-brand-light/10 p-10 rounded-lg hover:bg-brand-orange transition-colors duration-300 flex flex-col items-center text-center shadow-lg"
                  >
                    <div className="w-16 h-16 bg-brand-light/5 rounded-full flex items-center justify-center mb-6 text-brand-orange group-hover:text-brand-navy group-hover:bg-white/20 transition-colors">
                      {sector.icon}
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-brand-navy transition-colors">{sector.title}</h3>
                    <p className="font-sans text-brand-light group-hover:text-brand-dark/80 transition-colors">
                      {sector.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
