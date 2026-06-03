import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-sm">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-sm">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-sm">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-orange transition-colors font-bold text-sm">
                YT
              </a>
            </div>
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

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-brand-light text-sm mb-4">
              Suscríbete y sé el primero en recibir cada edición digital y noticias del sector.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Tu email profesional" 
                className="bg-brand-navy border border-brand-light/20 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange"
                required
              />
              <button 
                type="submit"
                className="bg-brand-orange text-brand-dark font-bold px-4 py-3 rounded flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                Suscribirse <ArrowRight size={18} />
              </button>
            </form>
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
