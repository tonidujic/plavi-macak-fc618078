import { MapPin, Clock, Instagram, Facebook, Dumbbell, Users, Heart, Zap, ChevronDown, Mail, Phone, Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.webp";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import TypewriterText from "@/components/TypewriterText";
import Gallery from "@/components/Gallery";
import ScrollProgress from "@/components/ScrollProgress";
import CounterSection from "@/components/CounterSection";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-warm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Plavi Mačak"
            width={44}
            height={44}
            className="rounded-full shadow-warm transition-transform duration-300 hover:scale-110"
          />
          <div>
            <span className={`text-lg font-bold tracking-tight font-heading transition-colors duration-300 ${scrolled ? "" : "text-[hsl(0_0%_100%)]"}`}>
              Plavi Mačak
            </span>
            <span className={`hidden sm:inline text-sm ml-2 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-[hsl(0_0%_100%/0.7)]"}`}>
              Fitness Centar
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold font-heading tracking-wider uppercase">
          {[
            { href: "#o-nama", label: "O nama" },
            { href: "#usluge", label: "Usluge" },
            { href: "#radno-vrijeme", label: "Radno vrijeme" },
            { href: "#lokacija", label: "Lokacija" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link-underline transition-colors duration-200 ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover object-center scale-110"
            loading="eager"
            style={{ transform: `translateY(${offsetY * 0.3}px) scale(1.1)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_0%/0.7)] via-[hsl(0_0%_0%/0.5)] to-[hsl(0_0%_0%/0.8)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-[fade-in-up_1s_ease-out]">
          <img
            src={logo}
            alt="Logo"
            width={110}
            height={110}
            className="mx-auto mb-8 drop-shadow-2xl rounded-full animate-[fade-in-up_0.8s_ease-out]"
          />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight font-heading mb-4 text-[hsl(0_0%_100%)] uppercase">
            PLAVI <span className="text-gradient">MAČAK</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2 text-[hsl(0_0%_100%/0.8)] tracking-widest uppercase">
            Fitness Centar
          </p>
          <p className="text-[hsl(0_0%_100%/0.6)] mb-10 max-w-lg mx-auto text-lg h-14">
            <TypewriterText text="Vrhunski opremljena teretana u srcu Viteza" speed={50} delay={800} />
          </p>
          <div className="flex flex-row gap-3 justify-center px-4">
            <a
              href="#o-nama"
              className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-full shadow-glow hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Saznaj više
            </a>
            <a
              href="#kontakt"
              className="inline-block bg-gradient-accent text-accent-foreground font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Kontaktiraj nas
            </a>
          </div>
        </div>

        <a
          href="#o-nama"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[hsl(0_0%_100%/0.6)] animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      <SectionDivider variant="wave" className="bg-background -mt-1" />

      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="noise-overlay" />
        <AnimatedSection>
          <div className="container mx-auto max-w-2xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 uppercase">
              <Users className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
              Grupni <span className="text-gradient">treninzi</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Pridružite se našim dinamičnim grupnim treninzima i trenirajte u motivirajućoj atmosferi
            </p>
            <div className="mx-auto max-w-md rounded-xl overflow-hidden shadow-warm gradient-border">
              <iframe
                src="https://www.instagram.com/reel/DTAUfj1CrW_/embed/"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                title="Grupni treninzi - Plavi Mačak Fitness"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

const About = () => (
  <>
    <SectionDivider variant="angle" className="bg-background" />
    <section id="o-nama" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection variant="scale">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 uppercase">
            O <span className="text-gradient">nama</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Fitness centar <strong className="text-foreground">Plavi Mačak</strong> smješten je u
            Vitezu, unutar turističkog kompleksa{" "}
            <strong className="text-foreground">Etno selo Čardaci</strong> (Poslovni Centar 96 Zona
            2, Vitez 72250). Otvoren 2026. godine, nudimo vrhunski opremljenu teretanu za sve razine
            spremnosti — od početnika do iskusnih sportaša. Naša misija je pomoći vam da postignete
            svoje fitness ciljeve u motivirajućem i profesionalnom okruženju.
          </p>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const services = [
  { icon: Dumbbell, title: "Teretana", desc: "Vrhunske sprave i slobodni tegovi za sve razine treninga" },
  { icon: Users, title: "Treneri", desc: "Profesionalni treneri s individualnim pristupom" },
  { icon: Zap, title: "Funkcionalni trening", desc: "Dinamični grupni treninzi za snagu i izdržljivost" },
  { icon: Heart, title: "Kombinirani trening", desc: "Kombinacija kardio i strength vježbi za optimalne rezultate" },
];

const Services = () => (
  <>
    <SectionDivider variant="dots" />
    <section id="usluge" className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 uppercase">
            Naše <span className="text-gradient">usluge</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Sve što vam treba za postizanje fitness ciljeva na jednom mjestu
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 120} variant={i < 2 ? "left" : "right"}>
              <div className="glass rounded-xl p-6 shadow-warm gradient-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow group h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 icon-glow group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

const schedule = [
  { day: "Ponedjeljak – Petak", hours: "07:00 – 22:00" },
  { day: "Subota", hours: "09:00 – 21:00" },
  { day: "Nedjelja", hours: "07:00 – 22:00" },
];

const Schedule = () => (
  <>
    <SectionDivider variant="wave" flip className="bg-card" />
    <section id="radno-vrijeme" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 uppercase">
            <Clock className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            Radno <span className="text-gradient">vrijeme</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />
          <div className="glass rounded-xl shadow-warm gradient-border overflow-hidden">
            {schedule.map((s, i) => (
              <div
                key={s.day}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 sm:py-5 gap-1 sm:gap-0 transition-colors duration-200 hover:bg-muted/30 ${
                  i < schedule.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="font-medium text-sm sm:text-base">{s.day}</span>
                <span className="text-secondary font-bold text-base sm:text-lg">{s.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const Location = () => (
  <>
    <SectionDivider variant="angle" className="bg-background" />
    <section id="lokacija" className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection variant="scale">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 uppercase">
            <MapPin className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            <span className="text-gradient">Lokacija</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-center mb-10">
            Poslovni Centar 96 Zona 2, Etno selo Čardaci, Vitez 72250
          </p>
          <div className="rounded-xl overflow-hidden shadow-warm gradient-border">
            <iframe
              title="Plavi Mačak lokacija"
              src="https://maps.google.com/maps?q=44.1578,17.7869&t=k&z=18&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const reviews = [
  {
    name: "Marko B.",
    text: "Najbolja teretana u Vitezu! Oprema je vrhunska, a atmosfera odlična. Preporučujem svima koji traže kvalitetan trening.",
    rating: 5,
  },
  {
    name: "Ana K.",
    text: "Grupni treninzi su fantastični! Treneri su profesionalni i uvijek motiviraju. Osjećam se kao dio obitelji.",
    rating: 5,
  },
  {
    name: "Emir H.",
    text: "Konačno moderna teretana s pravom opremom. Čisto, prostrano i uvijek ugodna atmosfera za trening.",
    rating: 5,
  },
  {
    name: "Lejla M.",
    text: "Odlično radno vrijeme i pristupačne cijene. Osoblje je ljubazno i uvijek spremno pomoći. Top teretana!",
    rating: 4,
  },
];

const Reviews = () => (
  <>
    <SectionDivider variant="wave" className="bg-background" />
    <section id="recenzije" className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 uppercase">
            <Quote className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            Što kažu naši <span className="text-gradient">članovi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Iskustva naših zadovoljnih članova govore sama za sebe
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.name} delay={i * 150} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="glass rounded-xl p-6 shadow-warm gradient-border h-full flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-500 group">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 ${si < r.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-sm">{r.name}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

const Contact = () => (
  <>
    <SectionDivider variant="dots" />
    <section id="kontakt" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 uppercase">
            Pratite <span className="text-gradient">nas</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground mb-10">
            Pronađite nas na društvenim mrežama za najnovije vijesti i akcije
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/plavi_macak_fitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass gradient-border rounded-xl px-6 py-4 shadow-warm hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6 text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              <span className="font-medium">@plavi_macak_fitness</span>
            </a>
            <a
              href="https://www.facebook.com/fitnesscentarplavimacak/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass gradient-border rounded-xl px-6 py-4 shadow-warm hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group w-full sm:w-auto justify-center"
            >
              <Facebook className="w-6 h-6 text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              <span className="font-medium">Fitness Centar Plavi Mačak</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const Footer = () => (
  <footer className="bg-card border-t border-border/50 pt-16 pb-8 px-4 relative overflow-hidden">
    <div className="noise-overlay" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <img
              src={logo}
              alt="Plavi Mačak"
              width={48}
              height={48}
              className="rounded-full"
              loading="lazy"
            />
            <div>
              <p className="font-bold text-lg font-heading">Plavi Mačak</p>
              <p className="text-sm text-muted-foreground">Fitness Centar</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Vrhunski opremljena teretana u srcu Viteza, unutar Etno sela Čardaci.
          </p>
        </div>

        {/* Quick links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 text-primary font-heading uppercase text-sm tracking-wider">Brzi linkovi</h4>
          <nav className="flex flex-col gap-2">
            {[
              { href: "#o-nama", label: "O nama" },
              { href: "#usluge", label: "Usluge" },
              { href: "#galerija", label: "Galerija" },
              { href: "#radno-vrijeme", label: "Radno vrijeme" },
              { href: "#lokacija", label: "Lokacija" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 text-primary font-heading uppercase text-sm tracking-wider">Radno vrijeme</h4>
          <div className="text-sm text-muted-foreground space-y-1 mb-6">
            <p>Pon – Pet: 07:00 – 22:00</p>
            <p>Subota: 09:00 – 21:00</p>
            <p>Nedjelja: 07:00 – 22:00</p>
          </div>
          <h4 className="font-semibold mb-3 text-primary font-heading uppercase text-sm tracking-wider">Pratite nas</h4>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/plavi_macak_fitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://www.facebook.com/fitnesscentarplavimacak/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Fitness centar Plavi Mačak · Etno selo Čardaci, Vitez
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <CounterSection />
    <Gallery />
    <Services />
    <Schedule />
    <Location />
    <Reviews />
    <Contact />
    <Footer />
  </>
);

export default Index;
