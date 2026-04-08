import { MapPin, Clock, Instagram, Facebook, Dumbbell, Users, Heart, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Plavi Mačak" width={44} height={44} className="rounded-full shadow-warm" />
        <div>
          <span className="text-lg font-bold tracking-tight">Plavi Mačak</span>
          <span className="hidden sm:inline text-sm text-muted-foreground ml-2">Fitness Centar</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#o-nama" className="text-muted-foreground hover:text-foreground transition-colors">O nama</a>
        <a href="#usluge" className="text-muted-foreground hover:text-foreground transition-colors">Usluge</a>
        <a href="#radno-vrijeme" className="text-muted-foreground hover:text-foreground transition-colors">Radno vrijeme</a>
        <a href="#lokacija" className="text-muted-foreground hover:text-foreground transition-colors">Lokacija</a>
        <a href="#kontakt" className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">Kontakt</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary pt-20">
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      {/* Text */}
      <div className="flex-1 text-center lg:text-left">
        <img src={logo} alt="Logo" width={100} height={100} className="mb-6 drop-shadow-2xl rounded-full mx-auto lg:mx-0" />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-secondary-foreground">
          PLAVI <span className="text-gradient">MAČAK</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-secondary-foreground/70 tracking-widest uppercase">Fitness Centar</p>
        <p className="text-secondary-foreground/60 mb-10 max-w-lg text-lg">
          Vrhunski opremljena teretana u srcu Viteza<br />
          <span className="text-sm">Etno selo Čardaci</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#o-nama"
            className="inline-block bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg shadow-glow hover:opacity-90 transition-opacity text-lg"
          >
            Saznaj više
          </a>
          <a
            href="#kontakt"
            className="inline-block border-2 border-secondary-foreground/30 text-secondary-foreground font-bold px-8 py-3.5 rounded-lg hover:border-primary transition-colors text-lg"
          >
            Kontaktiraj nas
          </a>
        </div>
      </div>

      {/* Instagram Video */}
      <div className="flex-shrink-0 w-full max-w-sm rounded-2xl overflow-hidden shadow-warm border border-border">
        <iframe
          src="https://www.instagram.com/reel/DTAUfj1CrW_/embed/"
          width="100%"
          height="680"
          frameBorder="0"
          scrolling="no"
          allowTransparency
          allow="encrypted-media"
          title="Plavi Mačak Fitness video"
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="o-nama" className="py-24 px-4">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">O <span className="text-gradient">nama</span></h2>
      <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
      <p className="text-muted-foreground leading-relaxed text-lg">
        Fitness centar <strong className="text-foreground">Plavi Mačak</strong> smješten je u Vitezu, unutar 
        turističkog kompleksa <strong className="text-foreground">Etno selo Čardaci</strong> (Poslovni Centar 96 Zona 2, Vitez 72250). 
        Otvoren 2026. godine, nudimo vrhunski opremljenu teretanu za sve razine 
        spremnosti — od početnika do iskusnih sportaša. Naša misija je pomoći vam 
        da postignete svoje fitness ciljeve u motivirajućem i profesionalnom okruženju.
      </p>
    </div>
  </section>
);

const services = [
  { icon: Dumbbell, title: "Teretana", desc: "Vrhunske sprave i slobodni tegovi za sve razine treninga" },
  { icon: Users, title: "Treneri", desc: "Profesionalni treneri s individualnim pristupom" },
  { icon: Zap, title: "Funkcionalni trening", desc: "Dinamični grupni treninzi za snagu i izdržljivost" },
  { icon: Heart, title: "Kombinirani trening", desc: "Kombinacija kardio i strength vježbi za optimalne rezultate" },
];

const Services = () => (
  <section id="usluge" className="py-24 px-4 bg-card">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Naše <span className="text-gradient">usluge</span></h2>
      <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Sve što vam treba za postizanje fitness ciljeva na jednom mjestu</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-background rounded-xl p-6 shadow-warm border border-border hover:border-primary/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <s.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const schedule = [
  { day: "Ponedjeljak – Petak", hours: "07:00 – 22:00" },
  { day: "Subota", hours: "09:00 – 21:00" },
  { day: "Nedjelja", hours: "07:00 – 22:00" },
];

const Schedule = () => (
  <section id="radno-vrijeme" className="py-24 px-4">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <Clock className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
        Radno <span className="text-gradient">vrijeme</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />
      <div className="bg-card rounded-xl shadow-warm border border-border overflow-hidden">
        {schedule.map((s, i) => (
          <div key={s.day} className={`flex items-center justify-between px-6 py-5 ${i < schedule.length - 1 ? "border-b border-border" : ""}`}>
            <span className="font-medium">{s.day}</span>
            <span className="text-secondary font-bold text-lg">{s.hours}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="lokacija" className="py-24 px-4 bg-card">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <MapPin className="inline-block w-8 h-8 mr-2 text-secondary align-middle" />
        <span className="text-gradient">Lokacija</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-primary mx-auto mb-4 rounded-full" />
      <p className="text-muted-foreground text-center mb-10">Poslovni Centar 96 Zona 2, Etno selo Čardaci, Vitez 72250</p>
      <div className="rounded-xl overflow-hidden shadow-warm border border-border">
        <iframe
          title="Plavi Mačak lokacija"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.5!2d17.7867!3d44.1547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee1c5e7cbe2ab%3A0x0!2zNDTCsDA5JzE3LjAiTiAxN8KwNDcnMTIuMCJF!5e0!3m2!1shr!2sba!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="kontakt" className="py-24 px-4">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Pratite <span className="text-gradient">nas</span></h2>
      <div className="w-16 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
      <p className="text-muted-foreground mb-10">Pronađite nas na društvenim mrežama za najnovije vijesti i akcije</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/plavi_macak_fitness/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-warm hover:border-primary/50 transition-all hover:-translate-y-1 group w-full sm:w-auto justify-center"
        >
          <Instagram className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
          <span className="font-medium">@plavi_macak_fitness</span>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-warm hover:border-primary/50 transition-all hover:-translate-y-1 group w-full sm:w-auto justify-center"
        >
          <Facebook className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
          <span className="font-medium">Facebook</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-secondary py-10 px-4">
    <div className="container mx-auto text-center">
      <img src={logo} alt="Plavi Mačak" width={48} height={48} className="mx-auto mb-4 rounded-full" loading="lazy" />
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
