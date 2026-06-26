import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function NoticiasPage() {
  const news = [
    {
      id: 1,
      title: "Forbes analizará en Marbella el mercado residencial",
      date: "26 de Junio, 2026",
      excerpt: "La prestigiosa revista Forbes elige Marbella para su próxima cumbre sobre el mercado inmobiliario de lujo. Expertos del sector debatirán sobre las tendencias que están transformando la Costa del Sol en un epicentro global de inversión.",
      image: "/images/blog/forbes.png",
      url: "https://www.malagahoy.es/marbella/forbes-analizara-marbella-mercado-residencial_0_2007108296.html",
      category: "Eventos"
    },
    {
      id: 2,
      title: "La nueva era de la arquitectura en la Costa del Sol",
      date: "23 de Junio, 2026",
      excerpt: "Diseños de vanguardia, sostenibilidad y lujo se dan la mano en los nuevos proyectos residenciales. Marbella redefine su skyline con villas que integran el paisaje mediterráneo en espacios interiores excepcionales.",
      image: "/images/blog/expansion.png",
      url: "https://www.expansion.com/fueradeserie/arquitectura/2026/06/23/6a0864e4468aeba2338b4576.html",
      category: "Arquitectura"
    },
    {
      id: 3,
      title: "Marbella se consolida como el paraíso europeo de la inversión prime",
      date: "24 de Junio, 2026",
      excerpt: "El \"Triángulo de Oro\" (Marbella, Estepona y Benahavís) entra en una fase de madurez. Con una demanda cada vez más internacional y exigente, el destino se sitúa en el top mundial para la adquisición de segundas residencias de ultra lujo.",
      image: "/images/blog/bolsamania.png",
      url: "https://www.bolsamania.com/noticias/empresas/economia--marbella-consolida-su-posicion-entre-los-grandes-destinos-vacacionales-para-la-inversion-inmobiliaria-de-lujo--22819922.html",
      category: "Inversión"
    },
    {
      id: 4,
      title: "Reporte del Mercado 2026: Récords en el sector del lujo",
      date: "Junio 2026",
      excerpt: "Según los últimos informes del sector, el mercado inmobiliario de alto nivel en Marbella sigue rompiendo marcas. El inventario de propiedades exclusivas se renueva ante la incesante llegada de compradores internacionales.",
      image: "/images/blog/dm_properties.png",
      url: "https://www.dmproperties.com/es/cat/noticias",
      category: "Mercado"
    },
    {
      id: 5,
      title: "Branded Residences: La alianza de Armani y Rafa Nadal en Marbella",
      date: "23 de Junio, 2026",
      excerpt: "El fenómeno de las viviendas de marca alcanza un nuevo nivel. El nuevo y espectacular proyecto residencial en Marbella une la elegancia atemporal de Giorgio Armani con la visión del deportista Rafa Nadal, creando un concepto de vida sin precedentes.",
      image: "/images/blog/armani_nadal.png",
      url: "https://www.merca2.es/2026/06/23/armani-nadal-residencial-lujo-marbella-2403963/",
      category: "Proyectos"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-brand-dark pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-navy transition-colors mb-12 font-medium">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-black text-5xl md:text-7xl uppercase mb-6 text-brand-navy">
            Noticias
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/70 font-sans leading-relaxed mb-16 max-w-3xl">
            Descubre las últimas novedades, tendencias y análisis del mercado residencial de lujo, arquitectura y lifestyle en Marbella.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((item) => (
              <article key={item.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-brand-light/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-brand-orange text-brand-dark font-bold text-xs uppercase px-3 py-1 rounded-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-brand-light text-sm font-medium mb-4">
                    <Calendar size={16} />
                    <time>{item.date}</time>
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-brand-navy mb-4 line-clamp-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-brand-dark/70 font-sans line-clamp-4 mb-8 flex-grow">
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-orange transition-colors mt-auto"
                  >
                    Leer artículo completo <ExternalLink size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
