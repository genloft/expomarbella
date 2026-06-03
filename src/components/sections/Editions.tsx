"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const mockEditions = [
  {
    id: 14,
    title: "ExpoMarbella Nº14",
    date: "Winter/Spring 2026",
    desc: "Especial Rebranding. Entrevista exclusiva directivos Savills, novedades Marbella Home Meeting y lo último en diseño de interiores.",
    coverUrl: "https://decomarbella.es/wp-content/uploads/2026/02/Portada14-web-724x1024.jpg",
    isNew: true,
    brand: "ExpoMarbella",
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
    title: "DecoMarbella Nº11",
    date: "Spring/Summer 2025",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367cb596f1efb37",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367cb596f1efb37"
  },
  {
    id: 11,
    title: "DecoMarbella Nº10",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/00618036748829f9c6888",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/00618036748829f9c6888"
  },
  {
    id: 10,
    title: "DecoMarbella Nº09",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367de65c934f9a8",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367de65c934f9a8"
  },
  {
    id: 9,
    title: "DecoMarbella Nº08",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367fc3f806d68e3",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367fc3f806d68e3"
  },
  {
    id: 8,
    title: "DecoMarbella Nº07",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367d07b1089a3d2",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367d07b1089a3d2"
  },
  {
    id: 7,
    title: "DecoMarbella Nº05",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/00618036707dbf26e60e9",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/00618036707dbf26e60e9"
  },
  {
    id: 6,
    title: "DecoMarbella Nº04",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367b572c350cca2",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367b572c350cca2"
  },
  {
    id: 5,
    title: "DecoMarbella Nº03",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367671f6c353ea9",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367671f6c353ea9"
  },
  {
    id: 4,
    title: "DecoMarbella Nº02",
    date: "Edición Pasada",
    desc: "Descubre esta edición completa en nuestro visor interactivo.",
    coverUrl: "https://www.calameo.com/books/social/cover/006180367d3130913ee50",
    isNew: false,
    brand: "DecoMarbella",
    pdfUrl: "https://www.calameo.com/read/006180367d3130913ee50"
  }
];

export default function Editions() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [activeEdition, setActiveEdition] = useState<typeof mockEditions[0] | null>(null);

  return (
    <section id="ediciones" className="py-24 bg-white text-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy">
              Todas las <span className="text-brand-orange">ediciones</span>
            </h2>
            <p className="mt-4 text-brand-dark/70 font-sans max-w-xl">
              Explora nuestro archivo completo. Desde los inicios como DecoMarbella hasta la nueva era de ExpoMarbella.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {["all", "2026", "2025", "2024", "Anteriores"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded font-bold transition-colors ${
                  selectedYear === year
                    ? "bg-brand-navy text-white"
                    : "bg-brand-light/20 text-brand-navy hover:bg-brand-light/40"
                }`}
              >
                {year === "all" ? "Todas" : year}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockEditions.filter(edition => {
            if (selectedYear === "all") return true;
            if (selectedYear === "Anteriores") return edition.date === "Edición Pasada";
            return edition.date.includes(selectedYear);
          }).map((edition, idx) => (
            <motion.div
              key={edition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div 
                className="relative aspect-[3/4] mb-6 overflow-hidden bg-brand-light/20 rounded shadow-md cursor-pointer"
                onClick={() => setActiveEdition(edition)}
              >
                {edition.isNew && (
                  <div className="absolute top-4 right-4 z-10 bg-brand-orange text-brand-dark font-black text-sm px-3 py-1 uppercase rounded-sm shadow-lg">
                    Nueva Edición
                  </div>
                )}
                <Image
                  src={edition.coverUrl}
                  alt={edition.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white text-brand-navy font-bold px-6 py-3 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Leer Edición
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-2xl text-brand-navy">{edition.title}</h3>
                  <span className="text-sm font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">
                    {edition.date}
                  </span>
                </div>
                <p className="font-sans text-brand-dark/70 mb-4 line-clamp-2 flex-grow">
                  {edition.desc}
                </p>
                {edition.brand === "DecoMarbella" && (
                  <p className="text-xs text-brand-light font-bold italic mt-auto">
                    * Publicada como DecoMarbella
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {activeEdition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/90 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div>
                  <h3 className="font-heading font-black text-2xl text-brand-navy">{activeEdition.title}</h3>
                  <p className="text-brand-dark/60 font-sans text-sm">{activeEdition.date}</p>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={activeEdition.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-orange hover:text-brand-navy transition-colors font-bold text-sm"
                  >
                    <ExternalLink size={18} /> Abrir Externamente
                  </a>
                  <button 
                    onClick={() => setActiveEdition(null)}
                    className="text-brand-dark/50 hover:text-brand-navy transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>
              </div>
              <div className="flex-grow bg-gray-100 flex items-center justify-center relative p-8">
                {/* Temporary PDF Viewer Mock */}
                <div className="bg-white w-full h-full rounded shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                  <Image src={activeEdition.coverUrl} alt="Cover" width={300} height={400} className="mb-6 shadow-lg rounded-sm opacity-50" />
                  <p className="text-brand-navy font-bold text-xl">Visor de PDF Integrado</p>
                  <p className="text-brand-dark/50 max-w-md text-center mt-2">Aquí se cargaría el iframe de Issuu o un componente react-pdf mostrando {activeEdition.title}.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
