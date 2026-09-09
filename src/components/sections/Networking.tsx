"use client";

import { motion } from "framer-motion";
import InstagramGlyph from "@/components/ui/InstagramGlyph";

import { networkingReels, type NetworkingReel } from "@/data/networkingReels";

export default function Networking() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkingReels.map((reel, idx) => (
            <motion.div
              key={reel.postUrl}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ReelCard reel={reel} />
              <p className="mt-3 text-center font-heading font-black text-sm uppercase text-brand-navy">
                {reel.venue}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Formato vertical 9:16, el original de los reels. Con MP4 autoalojado el
 * vídeo se reproduce solo y en bucle; si no lo hay, se incrusta Instagram.
 */
function ReelCard({ reel }: { readonly reel: NetworkingReel }) {
  const frameClasses =
    "relative w-full aspect-[9/16] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-lg";

  if (reel.video) {
    return (
      <a
        href={reel.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${frameClasses} group block`}
        aria-label={`Ver en Instagram el reel de ${reel.venue}`}
      >
        <video
          src={reel.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`Reel del evento de networking en ${reel.venue}`}
          className="h-full w-full object-cover"
        />
      </a>
    );
  }

  if (reel.unavailable) {
    return (
      <a
        href={reel.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${frameClasses} group flex flex-col items-center justify-center gap-3 text-center`}
      >
        <InstagramGlyph className="h-7 w-7 text-brand-orange" />
        <span className="px-6 font-sans text-sm font-medium text-brand-dark/50">
          Reel no disponible ahora mismo
        </span>
      </a>
    );
  }

  return (
    <div className={frameClasses}>
      <iframe
        src={`${reel.postUrl}embed/captioned/`}
        className="absolute inset-0 h-full w-full border-0"
        scrolling="no"
        allow="encrypted-media"
        title={`Reel del evento de networking en ${reel.venue}`}
      />
    </div>
  );
}
