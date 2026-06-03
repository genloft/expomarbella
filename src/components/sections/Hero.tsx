"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_cover_baja.jpg"
          alt="ExpoMarbella Cover 14"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
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
            <Link
              href="#ediciones"
              className="bg-brand-orange text-brand-dark px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors w-full sm:w-auto"
            >
              Ver la revista nº14
            </Link>
            <Link
              href="#el-cambio"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-brand-navy transition-colors w-full sm:w-auto"
            >
              Conoce el cambio
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link href="#el-cambio" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm font-bold uppercase tracking-widest">Descubrir</span>
          <ArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
}
