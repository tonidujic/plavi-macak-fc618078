import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgress from "@/components/ScrollProgress";
import g1 from "@/assets/galerija/g1.jpg";
import g2 from "@/assets/galerija/g2.jpg";
import g3 from "@/assets/galerija/g3.jpg";
import g4 from "@/assets/galerija/g4.jpg";
import g5 from "@/assets/galerija/g5.jpg";
import g6 from "@/assets/galerija/g6.jpg";
import g7 from "@/assets/galerija/g7.jpg";
import g8 from "@/assets/galerija/g8.jpg";
import g9 from "@/assets/galerija/g9.jpg";
import g10 from "@/assets/galerija/g10.jpg";

const images = [
  { src: g1, alt: "Zona sa spravama i ogledalima" },
  { src: g2, alt: "Glavni prostor teretane" },
  { src: g3, alt: "Hammer Strength sprave" },
  { src: g4, alt: "Zid 'Evolucija' i sprave" },
  { src: g5, alt: "Sala za grupne treninge" },
  { src: g6, alt: "Sala s pogledom na prirodu" },
  { src: g7, alt: "Kardio zona s trakama za trčanje" },
  { src: g8, alt: "Bar i fitness shop" },
  { src: g9, alt: "Detalj — kardio zona" },
  { src: g10, alt: "Funkcionalna zona" },
];

const GalerijaPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="pt-8 pb-16 px-4 bg-card relative overflow-hidden">
          <div className="noise-overlay" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-8 font-heading uppercase text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Nazad na početnu
            </Link>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tight mb-4">
                <span className="text-gradient">Galerija</span>
              </h1>
              <div className="section-line mb-6" />
              <p className="text-muted-foreground text-lg max-w-xl">
                Pogledajte našu kompletnu galeriju i upoznajte prostor u kojem ćete trenirati
              </p>
            </div>
          </div>
        </div>

        {/* Masonry gallery */}
        <section className="py-16 px-4 bg-background relative overflow-hidden">
          <div className="noise-overlay" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
              {images.map((img, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 60}
                  variant={i % 2 === 0 ? "left" : "right"}
                  className="mb-4 md:mb-5 break-inside-avoid"
                >
                  <button
                    onClick={() => setSelected(i)}
                    className="w-full overflow-hidden rounded-xl gradient-border shadow-warm group focus:outline-none focus:ring-2 focus:ring-primary relative block"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-5">
                      <Search className="w-6 h-6 text-primary mb-2 drop-shadow-lg" />
                      <span className="text-sm font-medium text-foreground drop-shadow-lg px-3 text-center">
                        {img.alt}
                      </span>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Back CTA */}
        <div className="py-12 text-center">
          <Link
            to="/"
            className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-full shadow-glow hover:scale-105 transition-all duration-300 font-heading uppercase tracking-wider text-sm"
          >
            Nazad na početnu
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in-up_0.3s_ease-out]"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black/60 text-foreground w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === selected ? "bg-primary scale-125" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalerijaPage;
