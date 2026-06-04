"use client";


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
    <div className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold uppercase text-brand-dark/40 tracking-widest">
          Confían en nosotros
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused] items-center gap-16 md:gap-24 px-8">
          {duplicatedLogos.map((src, idx) => (
            <div key={idx} className="relative w-48 md:w-64 h-24 md:h-32 flex-shrink-0 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0">
              <img 
                src={src}
                alt="Cliente"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
