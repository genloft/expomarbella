"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ShowroomHeroProps = {
  readonly totalClients: number;
  readonly platinumCount: number;
  readonly sectorCount: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function ShowroomHero({
  totalClients,
  platinumCount,
  sectorCount,
}: ShowroomHeroProps) {
  const stats = [
    { value: `${totalClients}`, label: "Marcas seleccionadas" },
    { value: `${platinumCount}`, label: "Clientes Platinum" },
    { value: `${sectorCount}`, label: "Sectores representados" },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-navy pb-20 pt-40 md:pb-28 md:pt-48">
      {/* Background treatment */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-orange/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C8D0DC 1px, transparent 1px), linear-gradient(to bottom, #C8D0DC 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-light/60 transition-colors hover:text-brand-orange"
        >
          <ArrowLeft size={17} /> Volver al inicio
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.32em] text-brand-orange"
          >
            ExpoMarbella
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Show
            <span className="text-brand-orange">room</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-brand-light/80 md:text-xl"
          >
            Bienvenido al Showroom de ExpoMarbella, el espacio que reúne a nuestros{" "}
            <strong className="font-semibold text-white">Clientes Premium</strong>: empresas,
            marcas y profesionales seleccionados que forman parte del ecosistema ExpoMarbella y
            representan algunos de los mejores productos y servicios disponibles en Marbella y la
            Costa del Sol.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-brand-light/60 md:text-lg"
          >
            Dentro del Showroom, nuestros{" "}
            <strong className="font-semibold text-brand-orange">Clientes Platinum</strong> cuentan
            con una presencia especialmente destacada, como marcas de referencia dentro de sus
            respectivos sectores.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#clientes"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-white"
            >
              Explorar marcas <ArrowRight size={17} />
            </a>
            <a
              href="#solicitud"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Formar parte
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-4xl font-black text-brand-orange md:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 font-sans text-xs uppercase tracking-[0.12em] text-brand-light/50 md:text-sm md:tracking-wider">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
