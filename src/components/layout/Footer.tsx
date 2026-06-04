import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-light/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-heading font-black text-3xl tracking-tighter text-brand-orange uppercase">
                Expo
              </span>
              <span className="font-heading font-black text-3xl tracking-tighter text-white uppercase">
                Marbella
              </span>
            </Link>
            <p className="font-serif text-brand-light text-lg italic">
              Interior Design · Real Estate · Gastronomy · Lifestyle
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider mb-6">Explora</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#la-revista" className="text-brand-light hover:text-brand-orange transition-colors">La Revista</Link></li>
              <li><Link href="#ediciones" className="text-brand-light hover:text-brand-orange transition-colors">Ediciones Anteriores</Link></li>
              <li><Link href="#sectores" className="text-brand-light hover:text-brand-orange transition-colors">Sectores</Link></li>
              <li><Link href="#distribucion" className="text-brand-light hover:text-brand-orange transition-colors">Puntos de Distribución</Link></li>
              <li><Link href="#contacto" className="text-brand-light hover:text-brand-orange transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider mb-6">Negocio</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#anunciate" className="text-brand-light hover:text-brand-orange transition-colors">Anúnciate con nosotros</Link></li>
              <li><Link href="#" className="text-brand-light hover:text-brand-orange transition-colors">Media Kit 2026</Link></li>
              <li><Link href="#" className="text-brand-light hover:text-brand-orange transition-colors">Colaboraciones</Link></li>
              <li><Link href="#" className="text-brand-light hover:text-brand-orange transition-colors">Eventos & Patrocinios</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider mb-6">Contacto Directo</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-brand-light text-sm font-bold">Javier Sancho <span className="block font-normal text-brand-light/60">Ventas & Contenidos</span></li>
              <li>
                <a href="mailto:info@decomarbella.es" className="flex items-center gap-2 text-brand-light hover:text-brand-orange transition-colors">
                  <Mail size={16} /> info@decomarbella.es
                </a>
              </li>
              <li>
                <a href="tel:+34675250741" className="flex items-center gap-2 text-brand-light hover:text-brand-orange transition-colors">
                  <Phone size={16} /> +34 675 250 741
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a href="https://linkedin.com/company/decomarbella" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-xs">
                    IN
                  </a>
                  <a href="https://instagram.com/decomarbella" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-xs">
                    IG
                  </a>
                  <a href="https://facebook.com/decomarbella" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-xs">
                    FB
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-brand-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-light/60 text-sm">
            © {new Date().getFullYear()} ExpoMarbella. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-brand-light/60">
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-brand-light/40 text-xs">
            ExpoMarbella evoluciona desde DecoMarbella · decomarbella.es
          </p>
        </div>
      </div>
    </footer>
  );
}
