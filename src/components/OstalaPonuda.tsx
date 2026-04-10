import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import pivnicaImg from "@/assets/ponuda-pivnica.jpeg";
import etnoImg from "@/assets/ponuda-etno.jpg";
import vodeniparkImg from "@/assets/ponuda-vodenipark.jpeg";
import spaImg from "@/assets/ponuda-spa.jpeg";
import restoranImg from "@/assets/ponuda-restoran.jpg";

const offerings = [
  { subtitle: "ETNO SELO", title: "Bajkovit\nodmor", img: etnoImg },
  { subtitle: "PIVNICA", title: "Kod Crnog\nMačka", img: pivnicaImg },
  { subtitle: "RESTORAN", title: "Kod Mlina", img: restoranImg },
  { subtitle: "VODENI PARK", title: "Ribica", img: vodeniparkImg },
  { subtitle: "OAZA ZA ODMOR", title: "Spa &\nWellness", img: spaImg },
];

const OstalaPonuda = () => (
  <>
    <SectionDivider variant="wave" flip className="bg-card" />
    <section id="ostala-ponuda" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
            Ostala <span className="text-gradient">ponuda</span>
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Otkrijte sve što kompleks Etno selo Čardaci ima za ponuditi
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {offerings.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[3/4] shadow-warm hover:shadow-glow transition-all duration-500">
                {/* Background image */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                {/* Border effect */}
                <div className="absolute inset-3 border border-white/20 rounded-lg pointer-events-none group-hover:border-white/40 transition-all duration-500" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-white/70 text-xs md:text-sm font-heading uppercase tracking-[0.2em] mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold italic leading-tight whitespace-pre-line" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                    {item.title}
                  </h3>
                  <span className="mt-4 text-white/70 text-xs md:text-sm uppercase tracking-[0.15em] font-heading group-hover:text-white transition-colors duration-300">
                    Više informacija
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OstalaPonuda;
