import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import pivnicaImg from "@/assets/ponuda-pivnica.jpeg";
import etnoImg from "@/assets/ponuda-etno.jpg";
import vodeniparkImg from "@/assets/ponuda-vodenipark.jpeg";
import spaImg from "@/assets/ponuda-spa.jpeg";
import restoranImg from "@/assets/ponuda-restoran.jpg";

const offerings = [
  {
    title: "Pivnica",
    subtitle: "Craft Beer & Good Vibes",
    desc: "Tradicionalna pivnica s bogatom ponudom domaćih i craft piva u autentičnom ambijentu.",
    img: pivnicaImg,
  },
  {
    title: "Etno Selo Čardaci",
    subtitle: "Tradicija & Priroda",
    desc: "Unikatni turistički kompleks koji spaja tradicionalnu bosansku arhitekturu s modernim sadržajima.",
    img: etnoImg,
  },
  {
    title: "Vodeni Park",
    subtitle: "Aqua Fun & Relax",
    desc: "Otvoreni bazeni s toboganima i atrakcijama za cijelu porodicu u prekrasnom prirodnom okruženju.",
    img: vodeniparkImg,
  },
  {
    title: "Oaza za Odmor",
    subtitle: "Spa & Wellness",
    desc: "Zatvoreni bazeni, saune i wellness zona za potpunu relaksaciju tijela i uma.",
    img: spaImg,
  },
  {
    title: "Restoran",
    subtitle: "Fine Dining & Tradicija",
    desc: "Restoran s pogledom na jezero i bogatom ponudom domaćih i internacionalnih specijaliteta.",
    img: restoranImg,
  },
];

const OstalaPonuda = () => (
  <>
    <SectionDivider variant="wave" flip className="bg-card" />
    <section id="ostala-ponuda" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
            Ostala <span className="text-gradient">ponuda</span>
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Otkrijte sve što kompleks Etno selo Čardaci ima za ponuditi
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {offerings.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 100}
              variant={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } rounded-2xl overflow-hidden shadow-warm gradient-border group hover:shadow-glow transition-all duration-500 bg-card`}
              >
                {/* Image */}
                <div className="md:w-1/2 relative overflow-hidden aspect-[16/10] md:aspect-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-white to-[hsl(42_85%_85%)]">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 font-heading">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-primary rounded-full mb-4" />
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.desc}
                  </p>
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
