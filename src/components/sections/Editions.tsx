"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { currentIssue } from "@/data/currentIssue";
import { editions } from "@/data/editions";

export default function Editions() {
  return (
    <section id="ediciones" className="py-24 bg-white text-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy">
              Todas las <span className="text-brand-orange">ediciones</span>
            </h2>
            <p className="mt-4 text-brand-dark/70 font-sans max-w-xl mx-auto">
              Explora nuestro archivo completo. Desde los inicios como DecoMarbella hasta la nueva era de ExpoMarbella.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {editions.map((edition, idx) => {
            const label = `${edition.brand} Nº${String(edition.number).padStart(2, "0")}`;
            const isCurrent = edition.number === currentIssue.number;

            return (
              <motion.div
                key={edition.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx, 8) * 0.1 }}
                className="group"
              >
                <a
                  href={edition.readUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[1/1.414] overflow-hidden rounded shadow-md cursor-pointer bg-transparent block"
                >
                  {isCurrent && (
                    <div className="absolute top-2 right-2 z-10 bg-brand-orange text-brand-dark font-black text-[10px] px-2 py-0.5 uppercase rounded-sm shadow-lg">
                      Nueva
                    </div>
                  )}
                  <Image
                    src={edition.cover}
                    alt={`Portada de ${label} — ${edition.date}`}
                    fill
                    className="object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-brand-navy font-bold text-sm px-4 py-2 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Leer
                    </span>
                  </div>
                </a>

                <div className="mt-3">
                  <p className="font-heading font-black text-sm uppercase text-brand-navy">
                    {label}
                  </p>
                  <p className="font-sans text-xs text-brand-dark/50">{edition.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
