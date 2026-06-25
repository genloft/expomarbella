"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import BackgroundVideo from "@/components/ui/BackgroundVideo";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-navy">
        <Image 
          src="/images/hero_cover.png"
          alt="ExpoMarbella Hero"
          fill
          className="object-cover opacity-80"
          priority
        />
        <BackgroundVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase mb-4">
            De <span className="line-through text-brand-light/50">DecoMarbella</span> a <br className="hidden md:block" />
            <span className="text-brand-orange">Expo</span>Marbella
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-serif italic text-brand-light mb-6">
            Mejor. Más lejos. Más internacional.
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-light/90 mb-10 font-sans">
            La revista de referencia de la Costa del Sol evoluciona. La misma esencia, un horizonte más amplio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#ediciones"
              className="bg-brand-orange text-brand-dark px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors w-full sm:w-auto"
            >
              Ver la última edición
            </a>
            <a
              href="#el-cambio"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-brand-navy transition-colors w-full sm:w-auto"
            >
              Conoce el cambio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#el-cambio" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm font-bold uppercase tracking-widest">Descubrir</span>
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
