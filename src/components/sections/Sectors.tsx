"use client";

import { motion } from "framer-motion";
import { Paintbrush, Building2, UtensilsCrossed, Plane, Heart, Globe } from "lucide-react";

export default function Sectors() {
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
      title: "Proyección Internacional",
      icon: <Globe size={32} />,
      desc: "Conectando Marbella con el mundo y atrayendo inversión global."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sectores" className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl uppercase"
          >
            ExpoMarbella <span className="text-brand-orange">cubre lo que importa</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
      </div>
    </section>
  );
}
