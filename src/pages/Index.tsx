import { MapPin, Clock, Instagram, Facebook, Dumbbell, Users, Heart, Zap, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.webp";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import TypewriterText from "@/components/TypewriterText";

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
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border"
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
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? "" : "text-white"}`}>
              Plavi Mačak
            </span>
            <span className={`hidden sm:inline text-sm ml-2 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Fitness Centar
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            { href: "#o-nama", label: "O nama" },
            { href: "#usluge", label: "Usluge" },
            { href: "#radno-vrijeme", label: "Radno vrijeme" },
            { href: "#lokacija", label: "Lokacija" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors duration-200 ${
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
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

const Hero = () => (
  <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-[fade-in-up_1s_ease-out]">
        <img
          src={logo}
          alt="Logo"
          width={110}
          height={110}
          className="mx-auto mb-8 drop-shadow-2xl rounded-full animate-[fade-in-up_0.8s_ease-out]"
        />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white">
          PLAVI <span className="text-gradient">MAČAK</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-white/80 tracking-widest uppercase">
          Fitness Centar
        </p>
        <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg h-14">
          <TypewriterText text="Vrhunski opremljena teretana u srcu Viteza" speed={50} delay={800} />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#o-nama"
            className="inline-block bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-glow hover:scale-105 transition-all duration-300 text-lg"
          >
            Saznaj više
          </a>
          <a
            href="#kontakt"
            className="inline-block bg-gradient-accent text-accent-foreground font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 text-lg"
          >
            Kontaktiraj nas
          </a>
        </div>
      </div>

      <a
        href="#o-nama"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>

    <SectionDivider variant="wave" className="bg-background -mt-1" />

    <section className="py-24 px-4 bg-card">
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pogledajte <span className="text-gradient">nas</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-10 rounded-full" />
          <div className="mx-auto max-w-md rounded-xl overflow-hidden shadow-warm border border-border">
            <iframe
              src="https://www.instagram.com/reel/DTAUfj1CrW_/embed/"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
              title="Plavi Mačak Fitness video"
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const About = () => (
  <>
    <SectionDivider variant="angle" className="bg-background" />
    <section id="o-nama" className="py-24 px-4 bg-background">
      <AnimatedSection>
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
    <section id="usluge" className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Naše <span className="text-gradient">usluge</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Sve što vam treba za postizanje fitness ciljeva na jednom mjestu
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 120}>
              <div className="bg-background rounded-xl p-6 shadow-warm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow group h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
    <section id="radno-vrijeme" className="py-24 px-4 bg-background">
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Clock className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            Radno <span className="text-gradient">vrijeme</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />
          <div className="bg-card rounded-xl shadow-warm border border-border overflow-hidden">
            {schedule.map((s, i) => (
              <div
                key={s.day}
                className={`flex items-center justify-between px-6 py-5 transition-colors duration-200 hover:bg-muted/50 ${
                  i < schedule.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-medium">{s.day}</span>
                <span className="text-secondary font-bold text-lg">{s.hours}</span>
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
    <section id="lokacija" className="py-24 px-4 bg-card">
      <AnimatedSection>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <MapPin className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            <span className="text-gradient">Lokacija</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-center mb-10">
            Poslovni Centar 96 Zona 2, Etno selo Čardaci, Vitez 72250
          </p>
          <div className="rounded-xl overflow-hidden shadow-warm border border-border">
            <iframe
              title="Plavi Mačak lokacija"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=5Q7G%2BP6F%2C+Vitez%2C+Bosnia+%26+Herzegovina&zoom=16"
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

const Contact = () => (
  <>
    <SectionDivider variant="dots" />
    <section id="kontakt" className="py-24 px-4 bg-background">
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-warm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">@plavi_macak_fitness</span>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-warm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group w-full sm:w-auto justify-center"
            >
              <Facebook className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  </>
);

const Footer = () => (
  <footer className="bg-secondary py-10 px-4">
    <div className="container mx-auto text-center">
      <img
        src={logo}
        alt="Plavi Mačak"
        width={48}
        height={48}
        className="mx-auto mb-4 rounded-full hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <p className="text-secondary-foreground/80 text-sm">
        © 2026 Fitness centar Plavi Mačak · Etno selo Čardaci, Vitez
      </p>
    </div>
  </footer>
);

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Schedule />
    <Location />
    <Contact />
    <Footer />
  </>
);

export default Index;
