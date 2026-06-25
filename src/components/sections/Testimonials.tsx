"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reels = [
    "https://www.instagram.com/p/DU29uQnjlc4/embed",
    "https://www.instagram.com/p/DPn9FOsDGE2/embed",
    "https://www.instagram.com/p/DMvHIA5KT_j/embed",
    "https://www.instagram.com/p/DMbwlp4iaOK/embed",
    "https://www.instagram.com/p/DIcg-1PCvcJ/embed",
    "https://www.instagram.com/p/DH8lPnIITcd/embed"
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Scroll by approximately the width of one card + gap
      const scrollTo = direction === "left" 
        ? scrollLeft - 344 
        : scrollLeft + 344;
        
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="testimonios" className="py-24 bg-[#FAFAFA] text-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy mb-6">
            <span className="text-brand-orange">Testimonios</span>
          </h2>
          <p className="text-xl font-serif italic text-brand-dark/70 max-w-2xl mx-auto">
            Lo que opinan nuestros clientes y profesionales del sector sobre ExpoMarbella.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute top-[60%] -translate-y-1/2 left-0 md:-left-4 z-20 hidden sm:block">
          <button 
            onClick={() => scroll("left")}
            className="w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-brand-navy hover:text-brand-orange hover:scale-110 transition-all focus:outline-none"
            aria-label="Ver testimonios anteriores"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute top-[60%] -translate-y-1/2 right-0 md:-right-4 z-20 hidden sm:block">
          <button 
            onClick={() => scroll("right")}
            className="w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-brand-navy hover:text-brand-orange hover:scale-110 transition-all focus:outline-none"
            aria-label="Ver siguientes testimonios"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Horizontal Slider */}
        <div className="relative w-full -mx-6 px-6 md:mx-0 md:px-0">
          {/* Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-4"
          >
            {reels.map((src, idx) => (
              <motion.div 
                key={idx}
                className="w-[280px] md:w-[320px] shrink-0 snap-center bg-white rounded-xl overflow-hidden border border-gray-100 flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 100px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <iframe
                  src={src}
                  className="w-full aspect-[4/5] rounded-sm pointer-events-auto"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  title={`Testimonio Reel ${idx + 1}`}
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
