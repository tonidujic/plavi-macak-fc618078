import { useState } from "react";
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

// Mosaic layout: [colSpan, rowSpan] for each image
const mosaicLayout = [
  "col-span-2 row-span-2",  // large
  "col-span-1 row-span-1",  // small
  "col-span-1 row-span-1",  // small
  "col-span-1 row-span-2",  // tall
  "col-span-1 row-span-1",  // small
  "col-span-1 row-span-1",  // small
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galerija" className="py-24 px-4 bg-background">
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Naš <span className="text-gradient">prostor</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Pogledajte kako izgleda naša teretana
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 80} className={mosaicLayout[i]}>
                <button
                  onClick={() => setSelected(i)}
                  className="w-full h-full overflow-hidden rounded-xl border border-border shadow-warm group focus:outline-none focus:ring-2 focus:ring-primary relative"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </button>
              </AnimatedSection>
            ))}
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
              className="absolute top-3 right-3 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === selected ? "bg-primary scale-125" : "bg-white/40 hover:bg-white/70"
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
