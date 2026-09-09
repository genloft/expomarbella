"use client";

import type { ShowroomClient } from "@/data/showroomTypes";
import ClientLogo from "./ClientLogo";

type LogoMarqueeProps = {
  readonly clients: readonly ShowroomClient[];
};

/**
 * Cinta continua de logotipos. La lista se duplica para que la animación
 * `marquee` (0% -> -50%) encadene sin saltos.
 */
export default function LogoMarquee({ clients }: LogoMarqueeProps) {
  const withLogo = clients.filter((client) => Boolean(client.logo));
  if (withLogo.length === 0) return null;

  const track = [...withLogo, ...withLogo];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand-navy py-10">
      {/* Difuminado en los bordes para que la cinta entre y salga de escena */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-navy to-transparent md:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-navy to-transparent md:w-40"
      />

      <div className="flex w-max animate-marquee gap-5 motion-reduce:animate-none">
        {track.map((client, index) => (
          <div
            key={`${client.slug}-${index}`}
            aria-hidden={index >= withLogo.length}
            className={`flex h-20 w-40 shrink-0 items-center justify-center rounded-xl p-4 grayscale transition-all duration-300 hover:grayscale-0 ${
              client.logoOnDark ? "bg-white/5 ring-1 ring-inset ring-white/10" : "bg-white"
            }`}
          >
            <div className="relative h-full w-full">
              <ClientLogo name={client.name} logo={client.logo} sizes="160px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
