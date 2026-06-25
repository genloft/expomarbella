"use client";

import Image from "next/image";

const clientLogos = [
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Savills-1.png", name: "Savills" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Gilmar.png", name: "Gilmar" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Cordia.png", name: "Cordia" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Alumed-1.png", name: "Alumed" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Kubo.png", name: "Kubo" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/Molina-Caballero.png", name: "Molina Caballero" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Casino.png", name: "Casino Marbella" },
  { url: "https://decomarbella.es/wp-content/uploads/2026/01/area-design.png", name: "Area Design" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Fernando-Moreno.png", name: "Fernando Moreno" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Loriini.png", name: "Loriini" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Hotel-Occidental.png", name: "Hotel Occidental" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/panorama.png", name: "Panorama Properties" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/NA-Arquitectos.png", name: "NA Arquitectos" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Centro-Hiperbarico.png", name: "Centro Hiperbárico" },
  { url: "https://decomarbella.es/wp-content/uploads/2024/04/Studio-Davias.png", name: "Studio Davias" }
];

export default function ClientLogos() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h2 className="text-sm font-bold uppercase text-brand-dark/40 tracking-widest">
          Confían en nosotros
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused] items-center gap-16 md:gap-24 px-8">
          {duplicatedLogos.map((client, idx) => (
            <div key={idx} className="relative w-48 md:w-64 h-24 md:h-32 flex-shrink-0 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0">
              <Image 
                src={client.url}
                alt={`Logo de ${client.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
