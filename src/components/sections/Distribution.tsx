"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
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
          <p className="text-xl text-brand-light max-w-3xl mx-auto font-serif italic">
            Más de 200 puntos de distribución entre Elviria y Sotogrande, la mayoría en Marbella, Puerto Banús, Nueva Andalucía, San Pedro y Estepona. Estamos en los mejores showrooms, estudios de arquitectura e interiorismo, restaurantes, clínicas, hoteles y centros de negocios.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[12px] left-0 w-full h-0.5 bg-brand-light/20 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-brand-orange"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {roadmap.map((item, idx) => (
              <motion.div 
                key={item.year}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3 }}
              >
                {/* Node */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-brand-navy border-4 border-brand-orange z-20 shrink-0 mb-6" />
                
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors h-full w-full">
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

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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

        {/* CTA */}
        <motion.div 
          className="text-center bg-white/5 p-12 rounded-xl border border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-black text-3xl md:text-4xl uppercase mb-6">
            ¿Quieres posicionar tu marca en Marbella?
          </h3>
          <p className="text-brand-light text-lg mb-8 max-w-2xl mx-auto">
            Únete a nosotros y promociona tu producto o servicio en un mercado de alto poder adquisitivo y de carácter internacional.
          </p>
          <Link 
            href="#contacto"
            className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded font-bold text-lg hover:bg-white transition-colors"
          >
            Solicita información y precios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
