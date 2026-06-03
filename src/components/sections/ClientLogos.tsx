"use client";

import Image from "next/image";

const clientLogos = [
  "https://decomarbella.es/wp-content/uploads/2026/01/Savills-1.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/Gilmar.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/Cordia.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/Alumed-1.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/Kubo.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/Molina-Caballero.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Casino.png",
  "https://decomarbella.es/wp-content/uploads/2026/01/area-design.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Fernando-Moreno.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Loriini.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Hotel-Occidental.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/panorama.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/NA-Arquitectos.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Centro-Hiperbarico.png",
  "https://decomarbella.es/wp-content/uploads/2024/04/Studio-Davias.png"
];

export default function ClientLogos() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="py-16 bg-brand-navy overflow-hidden mt-12 border-t border-brand-light/10">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold uppercase text-brand-light tracking-widest">
          Confían en nosotros
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <div className="flex w-[max-content] animate-marquee items-center gap-16 md:gap-24 px-8">
          {duplicatedLogos.map((src, idx) => (
            <div key={idx} className="relative w-32 md:w-40 h-16 flex-shrink-0 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0">
              <Image 
                src={src}
                alt="Cliente"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
