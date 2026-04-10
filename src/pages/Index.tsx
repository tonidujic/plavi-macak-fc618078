import { MapPin, Clock, Instagram, Facebook, Dumbbell, Users, Heart, Zap, ChevronDown, Mail, Phone, Star, Quote, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.webp";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import TypewriterText from "@/components/TypewriterText";
import Gallery from "@/components/Gallery";
import ScrollProgress from "@/components/ScrollProgress";
import CounterSection from "@/components/CounterSection";
import OstalaPonuda from "@/components/OstalaPonuda";

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
          <a href="#" className="logo-glow-wrap rounded-full transition-all duration-300 cursor-pointer">
            <img
              src={logo}
              alt="Plavi Mačak"
              width={44}
              height={44}
              className="rounded-full shadow-warm transition-transform duration-300 hover:scale-110 relative z-10"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-extrabold font-heading tracking-wider uppercase">
          {[
            { href: "#usluge", label: "Usluge" },
            { href: "#recenzije", label: "Recenzije" },
            { href: "#galerija", label: "Galerija" },
            { href: "#o-nama", label: "O nama" },
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
             Plavi <span className="text-gradient">Mačak</span>
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
              className="hero-btn inline-block bg-gradient-primary text-[hsl(0_0%_100%)] font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-full shadow-glow hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 text-sm sm:text-base"
             >
               Saznaj više
            </a>
            <a
              href="#kontakt"
              className="hero-btn inline-block bg-gradient-accent text-accent-foreground font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-full hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 text-sm sm:text-base border border-primary/20"
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
             <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              <Users className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
              Grupni <span className="text-gradient">treninzi</span>
            </h2>
            <div className="section-line mx-auto mb-4" />
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Pridružite se našim dinamičnim grupnim treninzima<br />i trenirajte u motivirajućoj atmosferi
            </p>
            <div className="mx-auto max-w-md overflow-hidden shadow-glow" style={{ background: '#000', borderRadius: '12px', border: '2px solid hsl(var(--primary))', boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}>
              {/* Instagram header */}
              <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid #333' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                    <img src={logo} alt="Plavi Mačak" className="w-full h-full rounded-full object-cover bg-black" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-white">plavi_macak_fitness</p>
                    <p className="text-xs text-white/70 text-left">1414 pratitelja</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/plavi_macak_fitness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-4 py-1.5 rounded-lg"
                  style={{ background: '#0095f6', color: '#fff', textDecoration: 'none' }}
                >
                  Prikaži profil
                </a>
              </div>
              {/* Video */}
              <video
                src="/grupni-treninzi.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[4/5] object-cover"
                style={{ background: '#000' }}
                title="Grupni treninzi - Plavi Mačak Fitness"
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
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-6">
            O <span className="text-gradient">nama</span>
          </h2>
          <div className="section-line mx-auto mb-8" />
           <div className="glass rounded-2xl p-8 md:p-12 gradient-border shadow-warm">
            <p className="text-muted-foreground leading-relaxed text-lg">
               Fitness centar <strong className="text-foreground">"Plavi Mačak"</strong> najveći je i
               najmoderniji fitness objekt u Vitezu, unutar turističkog kompleksa{" "}
               <strong className="text-foreground">Etno selo Čardaci</strong>. Obuhvaća prostor od
               900 m², tri specijalizirane sale za trening sa više od 50 sprava te mnoštvom popratnih
               rekvizita za vježbanje i Health Barom. Otvoren 2019. godine — nudimo vrhunski opremljenu
               teretanu za sve razine spremnosti — od početnika do iskusnih sportaša. Naša misija je
               pomoći vam da postignete svoje fitness ciljove u motivirajućem i profesionalnom okruženju.
            </p>
          </div>
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
           <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
            Naše <span className="text-gradient">usluge</span>
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Sve što vam treba za postizanje fitness ciljeva na jednom mjestu
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 120} variant={i < 2 ? "left" : "right"}>
              <div className="bg-gradient-to-br from-white to-[hsl(42_85%_85%)] rounded-xl p-6 shadow-warm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow group h-full cursor-default">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 icon-glow group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
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
           <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
            <Clock className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            Radno <span className="text-gradient">vrijeme</span>
          </h2>
          <div className="section-line mx-auto mb-12" />
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
           <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
            <MapPin className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
            <span className="text-gradient">Lokacija</span>
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="text-muted-foreground text-center mb-10">
            Poslovni Centar 96 Zona 2, Etno selo Čardaci, Vitez 72250
          </p>
          <div className="rounded-xl overflow-hidden shadow-warm gradient-border">
            <iframe
              title="Plavi Mačak lokacija"
              src="https://maps.google.com/maps?q=Fitness+centar+Plavi+ma%C4%8Dak,+Vitez,+Bosnia+and+Herzegovina&t=k&z=18&ie=UTF8&iwloc=&output=embed"
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
  {
    name: "Ivana S.",
    text: "Health Bar je odličan dodatak! Nakon treninga uvijek uživam u zdravom smoothiju. Sve na jednom mjestu.",
    rating: 5,
  },
  {
    name: "Dino T.",
    text: "Tri sale za vježbanje sa preko 50 sprava — uvijek ima mjesta i nikad ne moram čekati. Vrhunski!",
    rating: 5,
  },
  {
    name: "Sara P.",
    text: "Lokacija u Etno selu Čardaci je prekrasna. Trening u ovakvom okruženju je poseban doživljaj.",
    rating: 5,
  },
  {
    name: "Adnan R.",
    text: "Od početnika do naprednog sportaša — ovdje svatko pronađe sve što mu treba. Preporučujem 100%!",
    rating: 5,
  },
];
const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <SectionDivider variant="wave" className="bg-background" />
      <section id="recenzije" className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
              <Quote className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
              Što kažu naši <span className="text-gradient">članovi</span>
            </h2>
            <div className="section-line mx-auto mb-6" />
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Iskustva naših zadovoljnih članova govore sama za sebe
            </p>
          </AnimatedSection>
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Prethodna recenzija"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide pb-8 pt-4 snap-x snap-mandatory px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="min-w-[300px] max-w-[340px] flex-shrink-0 snap-center bg-gradient-to-br from-white to-[hsl(42_85%_85%)] rounded-xl p-6 shadow-warm border border-border/50 flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-500 group overflow-visible"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-4 h-4 ${si < r.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                      />
                    ))}
                    <Quote className="w-5 h-5 text-primary/30 ml-auto" />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic text-sm">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {r.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-sm text-gray-900">{r.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Sljedeća recenzija"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const Contact = () => (
  <>
    <SectionDivider variant="dots" />
    <section id="kontakt" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="noise-overlay" />
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
            Pratite <span className="text-gradient">nas</span>
          </h2>
          <div className="section-line mx-auto mb-6" />
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

const faqItems = [
  {
    q: "Koje su cijene članarina?",
    a: "Nudimo razne pakete članarina prilagođene vašim potrebama. Kontaktirajte nas za detaljne informacije o cijenama i trenutnim akcijama.",
  },
  {
    q: "Da li nudite personalni trening?",
    a: "Da! Naši certificirani treneri nude individualne programe treninga prilagođene vašim ciljevima i razini kondicije.",
  },
  {
    q: "Kakva je oprema u teretani?",
    a: "Teretana je opremljena vrhunskim spravama i slobodnim tegovima poznatih proizvođača, pogodnim za sve razine treninga.",
  },
  {
    q: "Trebam li zakazati termin za grupne treninge?",
    a: "Za grupne treninge preporučujemo da se javite unaprijed kako bismo vam osigurali mjesto. Raspored treninga možete pratiti na našim društvenim mrežama.",
  },
  {
    q: "Da li imate parking?",
    a: "Da, unutar kompleksa Etno selo Čardaci osiguran je besplatan parking za sve naše članove.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <SectionDivider variant="wave" flip className="bg-card" />
      <section id="faq" className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-center mb-4">
              Često postavljana <span className="text-gradient">pitanja</span>
            </h2>
            <div className="section-line mx-auto mb-6" />
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Odgovori na najčešća pitanja o našem fitness centru
            </p>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  className="bg-gradient-to-br from-white to-[hsl(42_85%_85%)] rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-glow"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="font-semibold text-gray-900 font-display text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                      {item.a}
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
};

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
          <h4 className="font-semibold mb-4 text-primary font-heading uppercase text-sm tracking-wider">Kontakt</h4>
          <a
            href="tel:+38763690014"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 justify-center md:justify-start mb-4"
          >
            <Phone className="w-4 h-4" />
            +387 63 690 014
          </a>
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
    <Services />
    <About />
    <CounterSection />
    <Schedule />
    <Gallery />
    <Reviews />
    <Location />
    <OstalaPonuda />
    <FAQ />
    <Contact />
    <Footer />
  </>
);

export default Index;
