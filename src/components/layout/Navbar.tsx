"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SHOWROOM", href: "/showroom" },
    { name: "Marbella Gourmet", href: "/marbella-gourmet" },
    { name: "Networking", href: "/networking" },
    { name: "Revista", href: "/revista" },
    { name: "Ediciones anteriores", href: "/#ediciones" },
    { name: "Noticias", href: "/noticias" },
    { name: "Distribución", href: "/#distribucion" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? isScrolled
            ? "bg-brand-navy/90 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
          : isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src={isHome ? "/images/logo-expomarbella.png" : "/images/Logo ExpoMarbella_b.png"} 
            alt="expomarbella" 
            width={180} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.includes('#') ? (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHome ? "text-brand-light hover:text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHome ? "text-brand-light hover:text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className={`flex items-center gap-4 ml-4 border-l pl-8 ${isHome ? "border-brand-light/20" : "border-brand-navy/20"}`}>
            <span className="text-xl">🇪🇸</span>
            <a
              href="#anunciate"
              className="bg-brand-orange text-brand-dark px-6 py-2.5 rounded font-bold hover:bg-white hover:text-brand-navy transition-colors"
            >
              Anúnciate con nosotros
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden ${isHome ? "text-white" : "text-brand-navy"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-brand-light/10 shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              link.href.includes('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-brand-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-brand-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="mt-4 pt-4 border-t border-brand-light/20 flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="text-2xl cursor-pointer">🇪🇸</span>
                <span className="text-2xl cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">🇬🇧</span>
              </div>
              <a
                href="#anunciate"
                className="bg-brand-orange text-brand-dark text-center px-6 py-3 rounded font-bold hover:bg-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anúnciate con nosotros
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
