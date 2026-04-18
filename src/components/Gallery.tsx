import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const images = [
  { src: gallery9, alt: "Health bar" },
  { src: gallery7, alt: "Slobodni tegovi" },
  { src: gallery8, alt: "Hammer Strength zona" },
  { src: gallery12, alt: "Sala za grupne treninge" },
  { src: gallery10, alt: "Trake za trčanje" },
  { src: gallery11, alt: "Svlačionice i tuševi" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: "prev" | "next") => {
    if (selected === null) return;
    if (dir === "prev") {
      setSelected(selected === 0 ? images.length - 1 : selected - 1);
    } else {
      setSelected(selected === images.length - 1 ? 0 : selected + 1);
    }
  };

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
              >
                <button
                  onClick={() => setSelected(i)}
                  className="w-full overflow-hidden rounded-xl gradient-border shadow-warm group focus:outline-none focus:ring-2 focus:ring-primary relative aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              className="hero-btn inline-block bg-gradient-primary text-[hsl(0_0%_100%)] font-semibold px-7 py-3 rounded-full shadow-glow hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 font-heading uppercase tracking-wider text-sm"
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
          <div className="relative max-w-4xl w-full flex items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => navigate("prev")}
              className="absolute -left-5 md:-left-14 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Prethodna slika"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full rounded-xl shadow-2xl aspect-video object-cover"
            />

            <button
              onClick={() => navigate("next")}
              className="absolute -right-5 md:-right-14 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Sljedeća slika"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black/60 text-foreground w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="absolute bottom-8 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === selected ? "bg-primary scale-125" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
