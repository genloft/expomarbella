"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, FileDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import Image from "next/image";

export default function Distribution() {
  const galleryImages = [
    "Screenshot 2026-06-07 at 08-59-15 Instagram.png",
    "Screenshot 2026-06-07 at 08-59-29 Instagram.png",
    "Screenshot 2026-06-07 at 08-59-45 Instagram.png",
    "Screenshot 2026-06-07 at 09-00-20 Instagram.png",
    "Screenshot 2026-06-07 at 09-01-01 Instagram.png",
    "Screenshot 2026-06-07 at 09-01-09 Instagram.png",
    "Screenshot 2026-06-07 at 09-01-20 Instagram.png",
    "Screenshot 2026-06-07 at 09-01-36 Instagram.png",
    "Screenshot 2026-06-07 at 09-01-46 Instagram.png",
    "Screenshot 2026-06-07 at 09-02-54 Instagram.png",
    "Screenshot 2026-06-07 at 09-03-06 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-10 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-17 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-24 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-33 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-45 Instagram.png",
    "Screenshot 2026-06-07 at 09-05-56 Instagram.png",
    "Screenshot 2026-06-07 at 09-06-03 Instagram.png",
    "Screenshot 2026-06-07 at 09-06-16 Instagram.png",
    "Screenshot 2026-06-07 at 09-06-35 Instagram.png",
    "Screenshot 2026-06-07 at 09-06-41 Instagram.png",
    "Screenshot 2026-06-07 at 09-06-50 Instagram.png",
    "Screenshot 2026-06-07 at 09-07-10 Instagram.png",
    "Screenshot 2026-06-07 at 09-07-23 Instagram.png",
    "Screenshot 2026-06-07 at 09-07-41 Instagram.png",
    "Screenshot 2026-06-07 at 09-07-47 Instagram.png",
    "Screenshot 2026-06-07 at 09-07-55 Instagram.png",
    "Screenshot 2026-06-07 at 09-08-50 Instagram.png",
    "Screenshot 2026-06-07 at 09-09-43 Instagram.png",
    "Screenshot 2026-06-07 at 09-10-00 Instagram.png",
    "Screenshot 2026-06-07 at 09-10-37 Instagram.png",
    "Screenshot 2026-06-07 at 09-10-51 Instagram.png",
    "Screenshot 2026-06-07 at 09-11-01 Instagram.png",
    "Screenshot 2026-06-07 at 09-11-10 Instagram.png",
    "Screenshot 2026-06-07 at 09-11-28 Instagram.png",
    "Screenshot 2026-06-07 at 09-11-38 Instagram.png",
    "Screenshot 2026-06-07 at 09-14-33 Instagram.png",
    "Screenshot 2026-06-07 at 09-14-45 Instagram.png",
    "Screenshot 2026-06-07 at 09-14-57 Instagram.png",
    "Screenshot 2026-06-07 at 09-15-03 Instagram.png",
    "Screenshot 2026-06-07 at 09-15-09 Instagram.png",
    "Screenshot 2026-06-07 at 19-25-36 Instagram.png",
    "Screenshot 2026-06-07 at 19-26-05 Instagram.png",
    "Screenshot 2026-06-07 at 19-26-13 Instagram.png",
    "Screenshot 2026-06-07 at 19-26-22 Instagram.png",
    "Screenshot 2026-06-07 at 19-26-45 Instagram.png",
    "Screenshot 2026-06-07 at 19-26-56 Instagram.png",
    "Screenshot 2026-06-07 at 19-27-19 Instagram.png",
    "Screenshot 2026-06-07 at 19-27-25 Instagram.png",
    "Screenshot 2026-06-07 at 19-27-33 Instagram.png",
    "Screenshot 2026-06-07 at 19-27-43 Instagram.png",
    "Screenshot 2026-06-07 at 19-28-45 Instagram.png",
    "Screenshot 2026-06-07 at 19-28-55 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-01 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-11 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-17 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-26 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-32 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-38 Instagram.png",
    "Screenshot 2026-06-07 at 19-29-46 Instagram.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextImage, 1000);
    return () => clearInterval(timer);
  }, [isHovered, nextImage]);

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

          <p className="text-xl text-brand-light max-w-3xl mx-auto font-serif italic">
            Más de 500 puntos de distribución en Marbella, Puerto Banús, Nueva Andalucía, San
            Pedro, Estepona y Sotogrande. Estamos en los mejores showrooms, estudios de
            arquitectura e interiorismo, restaurantes, clínicas, hoteles y centros de negocios.
          </p>

          <p className="mt-10 max-w-3xl mx-auto rounded-xl border border-brand-orange/30 bg-brand-orange/10 px-8 py-6 font-sans text-lg md:text-xl font-bold leading-relaxed text-white">
            Distribuimos <span className="text-brand-orange">en exclusiva</span> dentro de El Corte
            Inglés de Puerto Banús (zona de atención al cliente) y en La Zagaleta (Casa Club New
            Course &amp; Old Course).
          </p>

          <a
            href="/docs/lista-distribucion-expomarbella-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-sans font-bold text-brand-orange underline underline-offset-4 transition-colors hover:text-white"
          >
            <FileDown size={20} className="shrink-0" />
            Descargar aquí la lista de distribución completa
          </a>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/images/ECI junio 2026.jpg" 
              alt="ExpoMarbella ECI Junio 2026" 
              fill
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div 
            className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-2xl group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image 
                  src={`/images/galeria/${galleryImages[currentImageIndex]}`}
                  alt={`Galería ExpoMarbella ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-navy/80 text-brand-orange p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-navy hover:scale-110 border border-brand-orange/50 hover:border-brand-orange z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-navy/80 text-brand-orange p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-navy hover:scale-110 border border-brand-orange/50 hover:border-brand-orange z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-navy/80 text-brand-light text-sm px-4 py-1 rounded-full border border-white/10 shadow-lg pointer-events-none z-10">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
