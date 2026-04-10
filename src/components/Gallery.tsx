import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Kardio zona s trakama za trčanje" },
  { src: gallery2, alt: "Glavni prostor teretane sa spravama" },
  { src: gallery3, alt: "Prostor za funkcionalni trening" },
  { src: gallery4, alt: "Zona za vježbanje i street workout" },
  { src: gallery5, alt: "Recepcija i fitness shop" },
  { src: gallery6, alt: "Tegovi i bumper ploče" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galerija" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl relative z-10">
           <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
             Naš <span className="text-gradient">prostor</span>
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Pogledajte kako izgleda naša teretana
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <AnimatedSection
                key={i}
                delay={i * 100}
                variant={i % 2 === 0 ? "left" : "right"}
                className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}
              >
                <button
                  onClick={() => setSelected(i)}
                  className="w-full h-full overflow-hidden rounded-xl gradient-border shadow-warm group focus:outline-none focus:ring-2 focus:ring-primary relative"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i === 0 ? "h-full min-h-[280px] md:min-h-[420px]" : "h-48 md:h-56"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <span className="text-sm font-extrabold uppercase tracking-wider text-primary drop-shadow-lg font-display">
                      {img.alt}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* "Više" button */}
          <div className="text-center mt-12">
            <Link
              to="/galerija"
              className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-full shadow-glow hover:scale-105 transition-all duration-300 font-heading uppercase tracking-wider text-sm"
            >
              Pogledaj više
            </Link>
          </div>
        </div>
      </AnimatedSection>

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
            <div className="flex justify-center gap-2 mt-4">
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
    </section>
  );
};

export default Gallery;
