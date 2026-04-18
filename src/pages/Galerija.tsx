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
import g11 from "@/assets/galerija/g11.jpg";
import g12 from "@/assets/galerija/g12.jpg";
import g13 from "@/assets/galerija/g13.jpg";
import g14 from "@/assets/galerija/g14.jpg";
import g15 from "@/assets/galerija/g15.jpg";
import g16 from "@/assets/galerija/g16.jpg";
import g17 from "@/assets/galerija/g17.jpg";
import g18 from "@/assets/galerija/g18.jpg";
import g19 from "@/assets/galerija/g19.jpg";
import g20 from "@/assets/galerija/g20.jpg";
import g21 from "@/assets/galerija/g21.jpg";
import g22 from "@/assets/galerija/g22.jpg";
import g23 from "@/assets/galerija/g23.jpg";
import g24 from "@/assets/galerija/g24.jpg";
import g25 from "@/assets/galerija/g25.jpg";
import g26 from "@/assets/galerija/g26.jpg";
import g27 from "@/assets/galerija/g27.jpg";
import g28 from "@/assets/galerija/g28.jpg";
import g29 from "@/assets/galerija/g29.jpg";
import g30 from "@/assets/galerija/g30.jpg";
import g31 from "@/assets/galerija/g31.jpg";
import g32 from "@/assets/galerija/g32.jpg";
import g33 from "@/assets/galerija/g33.jpg";
import g34 from "@/assets/galerija/g34.jpg";
import g35 from "@/assets/galerija/g35.jpg";
import g36 from "@/assets/galerija/g36.jpg";
import g37 from "@/assets/galerija/g37.jpg";
import g38 from "@/assets/galerija/g38.jpg";
import g39 from "@/assets/galerija/g39.jpg";
import g40 from "@/assets/galerija/g40.jpg";

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
  { src: g11, alt: "Osvježenje nakon treninga" },
  { src: g12, alt: "Stalak s bučicama" },
  { src: g13, alt: "Funkcionalna zona — širi pogled" },
  { src: g14, alt: "Hammer Strength sprava — detalj" },
  { src: g15, alt: "Trake za trčanje uz prozore" },
  { src: g16, alt: "Šipka s utezima" },
  { src: g17, alt: "Zona sa spravama — atmosfera" },
  { src: g18, alt: "Pogled na cijelu teretanu" },
  { src: g19, alt: "Recepcija i fitness shop" },
  { src: g20, alt: "Kardio zona s pogledom" },
  { src: g21, alt: "Bučice uz prozor s pogledom" },
  { src: g22, alt: "Svlačionica i tuševi" },
  { src: g23, alt: "Funkcionalna zona — kettlebellovi i konopi" },
  { src: g24, alt: "Trake za trčanje uz velike prozore" },
  { src: g25, alt: "Kettlebellovi i oprema za trening" },
  { src: g26, alt: "Bučice s pogledom na prirodu" },
  { src: g27, alt: "Tuševi i umivaonici" },
  { src: g28, alt: "Kardio zona — širi pogled" },
  { src: g29, alt: "Shake u baru — atmosfera" },
  { src: g30, alt: "Glavna sala — pogled" },
  { src: g31, alt: "Stalak s kettlebellovima u boji" },
  { src: g32, alt: "Hammer Strength zona — širi pogled" },
  { src: g33, alt: "Funkcionalna zona s monkey barovima" },
  { src: g34, alt: "Grupni trening u glavnoj sali" },
  { src: g35, alt: "Atmosfera grupnog treninga" },
  { src: g36, alt: "Grupni kardio trening na trakama" },
  { src: g37, alt: "Šarene svlačionice — pogled 1" },
  { src: g38, alt: "Šarene svlačionice — pogled 2" },
  { src: g39, alt: "Shake u baru s pogledom" },
  { src: g40, alt: "Funkcionalna zona — širi pogled" },
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
                Pogledajte našu kompletnu galeriju
                <br />
                i upoznajte prostor u kojem ćete trenirati
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
