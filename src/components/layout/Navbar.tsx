"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "La Revista", href: "#la-revista" },
    { name: "Ediciones", href: "#ediciones" },
    { name: "Sectores", href: "#sectores" },
    { name: "Distribución", href: "#distribucion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-heading font-black text-2xl tracking-tighter text-brand-orange uppercase">
            Expo
          </span>
          <span className="font-heading font-black text-2xl tracking-tighter text-white uppercase">
            Marbella
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-light hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-brand-light/20 pl-8">
            <span className="text-xl">🇪🇸</span>
            <Link
              href="#anunciate"
              className="bg-brand-orange text-brand-dark px-6 py-2.5 rounded font-bold hover:bg-white hover:text-brand-navy transition-colors"
            >
              Anúnciate con nosotros
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
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
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white hover:text-brand-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-brand-light/20 flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="text-2xl cursor-pointer">🇪🇸</span>
                <span className="text-2xl cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">🇬🇧</span>
              </div>
              <Link
                href="#anunciate"
                className="bg-brand-orange text-brand-dark text-center px-6 py-3 rounded font-bold hover:bg-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anúnciate con nosotros
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
