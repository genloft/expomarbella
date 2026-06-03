"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Distribution() {
  const roadmap = [
    {
      year: "2026",
      title: "Consolidación Costa del Sol",
      points: [
        "200 puntos de distribución exclusivos",
        "El Corte Inglés Puerto Banús",
        "Marbella Home Meeting",
        "SIMED Málaga",
        "Ibiza Home Meeting",
        "FITUR Madrid"
      ]
    },
    {
      year: "2027",
      title: "Expansión Nacional",
      points: [
        "Madrid capital y zonas premium",
        "Barcelona",
        "Distribución en salas VIP",
        "Nuevos puntos de venta en aeropuertos"
      ]
    },
    {
      year: "2028+",
      title: "Proyección Internacional",
      points: [
        "Dubai",
        "Londres",
        "París",
        "Berlín",
        "Lisboa"
      ]
    }
  ];

  return (
    <section id="distribucion" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Abstract Map Concept */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] border-[1px] rounded-full border-white/20"></div>
        <div className="absolute w-[600px] h-[600px] border-[1px] rounded-full border-white/20"></div>
        <div className="absolute w-[400px] h-[400px] border-[1px] rounded-full border-white/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase mb-6">
            Donde nos <span className="text-brand-orange">encontrarás</span>
          </h2>
          <p className="text-xl text-brand-light max-w-2xl mx-auto font-serif italic">
            Desde Marbella hacia el mundo. Un roadmap de crecimiento para llevar tu marca más lejos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-brand-light/20">
            <motion.div 
              className="h-full bg-brand-orange"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {roadmap.map((item, idx) => (
              <motion.div 
                key={item.year}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3 }}
              >
                {/* Node */}
                <div className="hidden md:flex absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-navy border-4 border-brand-orange z-10" />
                
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg mt-0 md:mt-8 hover:bg-white/10 transition-colors h-full">
                  <div className="flex items-end gap-3 mb-6 border-b border-brand-light/20 pb-4">
                    <h3 className="font-heading font-black text-5xl text-brand-orange">{item.year}</h3>
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-4 text-white uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-brand-light font-sans">
                        <MapPin size={18} className="text-brand-orange shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center bg-white/5 p-12 rounded-xl border border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-black text-3xl md:text-4xl uppercase mb-6">
            ¿Quieres que tu marca llegue más lejos?
          </h3>
          <p className="text-brand-light text-lg mb-8 max-w-2xl mx-auto">
            Únete a ExpoMarbella y posiciona tu empresa frente a un público inversor y de alto poder adquisitivo.
          </p>
          <Link 
            href="#contacto"
            className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded font-bold text-lg hover:bg-white transition-colors"
          >
            Solicitar información y media kit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
