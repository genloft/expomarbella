"use client";

import { motion } from "framer-motion";

export default function Networking() {
  const reels = [
    "https://www.instagram.com/p/DVqEiFfDt5p/embed",
    "https://www.instagram.com/p/DP0W-c9DEdL/embed",
    "https://www.instagram.com/p/DI-oGpwIWs4/embed",
    "https://www.instagram.com/p/C0BaUuYt8w4/embed"
  ];

  return (
    <section id="networking" className="py-24 bg-white text-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy mb-6">
            <span className="text-brand-orange">Networking</span>
          </h2>
          <p className="text-xl font-serif italic text-brand-dark/70 max-w-4xl mx-auto">
            Organizamos eventos de networking para reunir a nuestros clientes y profesionales del sector de la construcción (promotores, constructores, arquitectos, interioristas, proveedores y fabricantes) para que hagan contactos y generen más negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {reels.map((src, idx) => (
            <motion.div 
              key={idx}
              className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex justify-center items-center shadow-lg p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <iframe
                src={src}
                className="w-full aspect-[4/5] rounded-sm"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                title={`Networking Reel ${idx + 1}`}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
