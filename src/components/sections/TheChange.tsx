"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TheChange() {
  return (
    <section id="el-cambio" className="py-24 bg-white text-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase mb-10 text-brand-navy">
              Una evolución <span className="text-brand-orange">natural</span>
            </h2>
            
            <div className="space-y-8 text-lg font-sans text-brand-dark/80">
              <div>
                <p>
                  Tras seis años consolidándose como publicación de referencia en arquitectura, interiorismo, construcción, diseño y estilo de vida en la Costa del Sol, <strong className="text-brand-navy">DecoMarbella</strong> evoluciona y se convierte en <strong className="text-brand-orange">ExpoMarbella</strong>: una plataforma de comunicación más amplia, innovadora e internacional.
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6 py-2">
                <h3 className="font-serif italic font-bold text-2xl text-brand-navy mb-2">La esencia no cambia</h3>
                <p>
                  El cambio es de nombre y tipografía. El ADN permanece: el mismo diseño limpio, elegante y moderno que nuestros lectores y anunciantes conocen y valoran.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold uppercase text-brand-navy mb-4 text-xl">La única. La oficial.</h3>
                <ul className="space-y-3 font-medium">
                  <li className="flex gap-3 items-start">
                    <span className="text-brand-orange text-xl">✦</span>
                    <span>Única revista autorizada a distribuir ejemplares dentro de El Corte Inglés de Puerto Banús</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-brand-orange text-xl">✦</span>
                    <span>Revista oficial de Marbella Home Meeting</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-brand-orange text-xl">✦</span>
                    <span>200 puntos de distribución desde Elviria hasta Sotogrande</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-brand-orange text-xl">✦</span>
                    <span>Tu publicidad visible más de 6 meses por solo 2 ediciones al año</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rotate-3 hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl">
              <Image 
                src="/images/Portada_ExpoMarbella.jpg" 
                alt="ExpoMarbella Magazine Cover" 
                fill
                className="object-cover rounded-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border border-brand-light/20"
              />
              <div className="absolute -inset-4 border-2 border-brand-orange/30 -z-10 translate-x-4 translate-y-4 rounded-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
