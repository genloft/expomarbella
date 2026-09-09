"use client";

import { forwardRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { ShowroomClient } from "@/data/showroomTypes";
import ClientLogo from "./ClientLogo";
import InstagramGlyph from "@/components/ui/InstagramGlyph";

type ClientCardProps = {
  readonly client: ShowroomClient;
  /** Posición dentro de la rejilla; escalona la entrada de las primeras tarjetas. */
  readonly index: number;
};

const MAX_STAGGER_STEPS = 8;
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
      delay: Math.min(index, MAX_STAGGER_STEPS) * 0.05,
    },
  }),
};

/**
 * `AnimatePresence` en modo `popLayout` mide cada hijo, así que la tarjeta
 * tiene que reenviar la ref al nodo del DOM.
 */
const ClientCard = forwardRef<HTMLDivElement, ClientCardProps>(function ClientCard(
  { client, index },
  ref
) {
  const isPlatinum = client.tier === "platinum";
  const href = client.website ?? client.instagram;

  return (
    <motion.div
      ref={ref}
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 ${
        isPlatinum
          ? "border-brand-orange/30 bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_20px_60px_-30px_rgba(251,186,0,0.55)]"
          : "border-white/10 bg-white/[0.03]"
      } backdrop-blur-sm transition-colors duration-300 hover:border-brand-orange/60`}
    >
      {/* Resplandor ambiental al pasar el cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-orange/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {isPlatinum && (
        <span className="absolute right-4 top-4 z-20 rounded-full bg-brand-orange px-2.5 py-1 font-heading text-[10px] font-black uppercase tracking-[0.14em] text-brand-navy">
          Platinum
        </span>
      )}

      {/* Placa del logotipo: blanca por defecto, oscura si el logo es blanco */}
      <div
        className={`relative z-10 mb-6 flex w-full items-center justify-center overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.03] ${
          client.logoOnDark ? "bg-brand-navy ring-1 ring-inset ring-white/15" : "bg-white"
        } ${isPlatinum ? "h-32 p-6" : "h-24 p-4"}`}
      >
        <div className="relative h-full w-full">
          <ClientLogo
            name={client.name}
            logo={client.logo}
            sizes={isPlatinum ? "260px" : "200px"}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange">
          {client.category}
        </p>

        <h3
          className={`font-heading font-black leading-tight text-white ${
            isPlatinum ? "text-2xl" : "text-lg"
          }`}
        >
          {href ? (
            /* Enlace extendido: el ancla cubre toda la tarjeta sin anidar contenido */
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-brand-orange"
            >
              {client.name}
            </a>
          ) : (
            client.name
          )}
        </h3>

        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-brand-light/80">
          {client.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-brand-light/60">
            <MapPin size={13} className="shrink-0" />
            {client.city}
          </span>

          <span className="inline-flex items-center gap-2 text-brand-light/60">
            {client.instagram && (
              <InstagramGlyph className="h-[15px] w-[15px] transition-colors group-hover:text-brand-orange" />
            )}
            {href && (
              <ArrowUpRight
                size={18}
                className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
              />
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

export default ClientCard;
