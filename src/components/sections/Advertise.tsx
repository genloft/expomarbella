"use client";

import { motion } from "framer-motion";
import { CalendarDays, Eye, Globe2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

  const formatsRevista = [
    { name: "Página completa", price: "Desde 800€ + IVA" },
    { name: "Página doble 2-3", price: "Desde 1.600€ + IVA" },
    { name: "Página doble 4-5", price: "Desde 1.400€ + IVA" },
    { name: "Página doble normal", price: "Desde 1.200€ + IVA" },
    { name: "Publirreportaje/entrevista 2 páginas", price: "Desde 1.200€ + IVA" },
    { name: "Publirreportaje/entrevista 4 páginas", price: "Desde 1.800€ + IVA" },
    { name: "Publirreportaje/entrevista 6 páginas", price: "Desde 2.400€ + IVA" },
    { name: "Portada + entrevista 6 páginas", price: "12.000€ + IVA" },
  ];

  const webProfiles = [
    {
      name: "Perfil básico",
      price: "600 €/año",
      features: [
        "Ficha de empresa",
        "Foto",
        "Datos de contacto",
        "Web",
        "Redes sociales"
      ]
    },
    {
      name: "Perfil premium",
      price: "3.000 €/año",
      features: [
        "Reportaje de presentación",
        "Galería de fotos",
        "Vídeo",
        "Aparición destacada en búsquedas",
        "Entrevista anual",
        "Patrocinador en eventos de networking",
        "Publicación mensual en redes sociales"
      ],
      isPremium: true
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
            Las mejores tarifas. <br className="hidden md:block" />
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

        {/* Formats Revista Table */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-brand-navy p-6">
            <h3 className="font-heading font-bold text-2xl text-white uppercase text-center">Formatos publicitarios en la revista</h3>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-4 px-6 font-bold text-brand-navy">Formato</th>
                  <th className="py-4 px-6 font-bold text-brand-navy text-right">Precio</th>
                </tr>
              </thead>
              <tbody>
                {formatsRevista.map((fmt, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-brand-dark">{fmt.name}</td>
                    <td className="py-4 px-6 font-mono text-sm text-brand-orange font-bold text-right">{fmt.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-gray-50 p-4 text-center text-sm text-brand-dark/60 italic border-t border-gray-100">
              (Precios para una campaña de 6 meses)
            </div>
          </div>
        </motion.div>

        {/* Formatos Web */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-black text-3xl uppercase text-brand-navy mb-4">Formatos publicitarios en la web</h3>
            <p className="text-brand-dark/70 text-lg">
              Ofrecemos a las empresas del sector de la construcción un espacio dentro de la sección "Showroom", con su propia landpage con información de su empresa, galería de fotos y vídeos publicados en Instagram, Facebook o Youtube.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProfiles.map((profile, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`bg-white rounded-xl overflow-hidden border ${profile.isPremium ? 'border-brand-orange shadow-2xl' : 'border-gray-200 shadow-lg'} relative`}
              >
                {profile.isPremium && (
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">Recomendado</div>
                )}
                <div className={`${profile.isPremium ? 'bg-brand-orange' : 'bg-brand-navy'} p-6 text-center text-white`}>
                  <h4 className="font-heading font-bold text-2xl uppercase mb-2">{profile.name}</h4>
                  <div className="text-3xl font-black">{profile.price}</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {profile.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-brand-dark">
                        <CheckCircle2 size={20} className={profile.isPremium ? 'text-brand-orange shrink-0' : 'text-brand-navy shrink-0'} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="#contacto" className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded font-bold text-lg hover:bg-brand-navy hover:text-white transition-colors shadow-lg shadow-brand-orange/30">
            Solicitar propuesta personalizada
          </Link>
        </div>
      </div>
    </section>
  );
}
