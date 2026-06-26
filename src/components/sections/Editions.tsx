"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mockEditions = [
  {
    id: 14,
    title: "DecoMarbella Nº14",
    date: "Winter/Spring 2026",
    desc: "Especial Rebranding. Entrevista exclusiva directivos Savills, novedades Marbella Home Meeting y lo último en diseño de interiores.",
    coverUrl: "https://decomarbella.es/wp-content/uploads/2026/02/Portada14-web-724x1024.jpg",
    isNew: true,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/007334244285c31f043a4"
  },
  {
    id: 13,
    title: "DecoMarbella Nº13",
    date: "Autumn/Winter 2025",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/00798977796033d08fc0a",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/00798977796033d08fc0a"
  },
  {
    id: 12,
    title: "DecoMarbella Nº12",
    date: "Spring/Summer 2025",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367cb596f1efb37",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367cb596f1efb37"
  },
  {
    id: 11,
    title: "DecoMarbella Nº11",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/00618036748829f9c6888",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/00618036748829f9c6888"
  },
  {
    id: 10,
    title: "DecoMarbella Nº10",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367de65c934f9a8",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367de65c934f9a8"
  },
  {
    id: 9,
    title: "DecoMarbella Nº09",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367fc3f806d68e3",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367fc3f806d68e3"
  },
  {
    id: 8,
    title: "DecoMarbella Nº08",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367d07b1089a3d2",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367d07b1089a3d2"
  },
  {
    id: 7,
    title: "DecoMarbella Nº07",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/00618036707dbf26e60e9",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/00618036707dbf26e60e9"
  },
  {
    id: 6,
    title: "DecoMarbella Nº06",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367b572c350cca2",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367b572c350cca2"
  },
  {
    id: 5,
    title: "DecoMarbella Nº05",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367671f6c353ea9",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367671f6c353ea9"
  },
  {
    id: 4,
    title: "DecoMarbella Nº04",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367d3130913ee50",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367d3130913ee50"
  }
];

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
          {mockEditions.map((edition, idx) => (
            <motion.div
              key={edition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <a 
                href={edition.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[1/1.414] overflow-hidden rounded shadow-md cursor-pointer bg-transparent block"
              >
                {edition.isNew && (
                  <div className="absolute top-2 right-2 z-10 bg-brand-orange text-brand-dark font-black text-[10px] px-2 py-0.5 uppercase rounded-sm shadow-lg">
                    Nueva
                  </div>
                )}
                <Image
                  src={edition.coverUrl}
                  alt={`Portada de ${edition.title}`}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
