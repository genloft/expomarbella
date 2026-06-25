"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or rejected cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-white/10 p-6 shadow-2xl"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl">
            <p className="text-brand-light/90 text-sm leading-relaxed text-center md:text-left">
              Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas). Puedes aceptar todas las cookies pulsando el botón "Aceptar todas" o rechazarlas pulsando "Rechazar". Más información en nuestra <Link href="/politica-de-cookies" className="text-brand-orange hover:underline font-bold">Política de Cookies</Link>.
            </p>
            <div className="flex gap-4 shrink-0 w-full md:w-auto justify-center md:justify-end">
              <button 
                onClick={rejectCookies}
                className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors text-sm font-bold uppercase tracking-wider w-full md:w-auto"
              >
                Rechazar
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-3 bg-brand-orange text-brand-navy rounded hover:bg-white transition-colors text-sm font-bold uppercase tracking-wider w-full md:w-auto shadow-lg shadow-brand-orange/20"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
