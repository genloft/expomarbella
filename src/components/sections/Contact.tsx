"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#FAFAFA] text-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-brand-navy mb-6">
              Hablemos de <span className="text-brand-orange">tu marca</span>
            </h2>
            <p className="text-xl font-serif italic text-brand-dark/70 mb-10 max-w-lg">
              Estamos aquí para ayudarte a diseñar la mejor estrategia de visibilidad en el sector premium de la Costa del Sol.
            </p>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                <div className="w-20 h-20 bg-brand-light/20 rounded-full flex items-center justify-center text-brand-navy font-black text-2xl uppercase shrink-0">
                  JS
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl text-brand-navy">Javier Sancho</h3>
                  <p className="text-brand-orange font-bold text-sm uppercase tracking-wider">Director de Contenidos y Ventas</p>
                </div>
              </div>

              <div className="space-y-6">
                <a href="mailto:info@decomarbella.es" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 group-hover:bg-brand-orange/10 rounded-full flex items-center justify-center transition-colors">
                    <Mail size={20} className="text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="font-medium text-brand-dark group-hover:text-brand-orange transition-colors">info@decomarbella.es</p>
                  </div>
                </a>

                <a href="tel:+34600000000" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 group-hover:bg-brand-orange/10 rounded-full flex items-center justify-center transition-colors">
                    <Phone size={20} className="text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider mb-1">Teléfono Directo</p>
                    <p className="font-medium text-brand-dark group-hover:text-brand-orange transition-colors">+34 600 000 000</p>
                  </div>
                </a>

                <a href="https://linkedin.com/company/decomarbella" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-50 group-hover:bg-brand-orange/10 rounded-full flex items-center justify-center transition-colors">
                    <Briefcase size={20} className="text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider mb-1">Redes Profesionales</p>
                    <p className="font-medium text-brand-dark group-hover:text-brand-orange transition-colors">Conectar en LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form / Visual */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <h3 className="font-heading font-bold text-3xl mb-8 relative z-10">Envíanos un mensaje rápido</h3>
              
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-brand-light mb-2">Tu Nombre</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Ej. María García" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-light mb-2">Tu Empresa</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Nombre de tu marca" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-light mb-2">Email de Contacto</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="hola@empresa.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-light mb-2">¿En qué podemos ayudarte?</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Me gustaría recibir el media kit..."></textarea>
                </div>
                <button className="w-full bg-brand-orange text-brand-dark font-bold py-4 rounded hover:bg-white transition-colors flex justify-center items-center gap-2 uppercase tracking-wide">
                  Enviar Mensaje <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
