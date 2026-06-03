"use client";

import { motion } from "framer-motion";
import { CalendarDays, Eye, Globe2 } from "lucide-react";

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
      title: "Alcance en expansión",
      desc: "Presencia consolidada en la Costa del Sol y apertura a mercados nacionales (2027)."
    }
  ];

  const formats = [
    { name: "Página Completa", type: "Interior", size: "210 x 297 mm" },
    { name: "Doble Página", type: "Interior", size: "420 x 297 mm" },
    { name: "Contraportada", type: "Premium", size: "210 x 297 mm" },
    { name: "Interior Portada", type: "Premium", size: "210 x 297 mm" },
    { name: "Publirreportaje", type: "Contenido", size: "A medida" },
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
            Las mejores tarifas. <br className="hidden md:block" />
            <span className="text-brand-orange">El mayor impacto.</span>
          </motion.h2>
          <p className="text-xl font-serif italic text-brand-dark/70 max-w-2xl mx-auto">
            Posiciona tu negocio frente a la audiencia más selecta de la Costa del Sol.
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

        {/* Formats Table */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-brand-navy p-6">
            <h3 className="font-heading font-bold text-2xl text-white uppercase text-center">Formatos Disponibles</h3>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-4 px-6 font-bold text-brand-navy">Formato</th>
                  <th className="py-4 px-6 font-bold text-brand-navy hidden sm:table-cell">Ubicación</th>
                  <th className="py-4 px-6 font-bold text-brand-navy">Dimensiones</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((fmt, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-brand-dark">{fmt.name}</td>
                    <td className="py-4 px-6 text-brand-dark/70 hidden sm:table-cell">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${fmt.type === 'Premium' ? 'bg-brand-orange/20 text-brand-orange' : 'bg-gray-100 text-gray-600'}`}>
                        {fmt.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-brand-dark/70 font-mono text-sm">{fmt.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="text-center">
          <button className="bg-brand-orange text-brand-dark px-10 py-4 rounded font-bold text-lg hover:bg-brand-navy hover:text-white transition-colors shadow-lg shadow-brand-orange/30">
            Solicitar tarifa publicitaria
          </button>
        </div>
      </div>
    </section>
  );
}
