"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Handshake, Megaphone, MonitorSmartphone } from "lucide-react";

/** Los cuatro soportes que componen el pack, tal y como se describen en el texto. */
const PILLARS = [
  { icon: BookOpen, label: "Revista" },
  { icon: MonitorSmartphone, label: "Presencia web" },
  { icon: Megaphone, label: "Publicidad exterior" },
  { icon: Handshake, label: "Eventos de networking" },
] as const;

export default function PackExpoMarbella() {
  return (
    <motion.div
      id="pack-expomarbella"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto mb-16 max-w-5xl scroll-mt-32 overflow-hidden rounded-2xl bg-brand-navy p-10 text-white shadow-[0_24px_70px_-40px_rgba(0,24,64,0.8)] md:p-16"
    >
      {/* Halo de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-orange/20 blur-[110px]"
      />

      <div className="relative">
        <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.32em] text-brand-orange">
          Pack ExpoMarbella
        </p>

        <h3 className="max-w-3xl font-heading text-3xl font-black uppercase leading-[1.08] md:text-5xl">
          ¿Quieres posicionar tu marca en{" "}
          <span className="text-brand-orange">Marbella</span>?
        </h3>

        <div className="mt-8 max-w-3xl space-y-5 font-sans text-lg leading-relaxed text-brand-light/80">
          <p>
            Únete a nosotros y promociona tu producto o servicio en un mercado de alto poder
            adquisitivo y marcado carácter internacional.
          </p>
          <p>
            En ExpoMarbella te ofrecemos un completo pack de promoción que combina revista,
            presencia web, publicidad exterior y eventos exclusivos de networking, creando una
            estrategia de{" "}
            <strong className="font-semibold text-white">visibilidad 360º</strong> para tu marca.
          </p>
          <p>
            Una opción perfecta tanto para empresas de la Costa del Sol como para compañías de
            cualquier punto de España que quieran darse a conocer, generar contactos y abrir
            mercado en Marbella.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
          {PILLARS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon size={22} />
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-wider text-brand-light">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-sans font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-white"
        >
          Quiero mi pack <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
