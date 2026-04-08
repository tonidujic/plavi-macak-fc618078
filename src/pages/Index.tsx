import { MapPin, Clock, Instagram, Facebook, Dumbbell, Users, Heart, Zap } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import logo from "@/assets/logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Plavi Mačak" width={40} height={40} className="rounded-full" />
        <span className="text-lg font-bold tracking-tight">Plavi Mačak</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#o-nama" className="text-muted-foreground hover:text-primary transition-colors">O nama</a>
        <a href="#usluge" className="text-muted-foreground hover:text-primary transition-colors">Usluge</a>
        <a href="#radno-vrijeme" className="text-muted-foreground hover:text-primary transition-colors">Radno vrijeme</a>
        <a href="#lokacija" className="text-muted-foreground hover:text-primary transition-colors">Lokacija</a>
        <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Fitness centar Plavi Mačak" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/70" />
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <img src={logo} alt="Logo" width={100} height={100} className="mx-auto mb-6 drop-shadow-2xl" />
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
        PLAVI <span className="text-gradient">MAČAK</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2">FITNESS CENTAR</p>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Vrhunski opremljena teretana u srcu Viteza · Etno selo Čardaci
      </p>
      <a
        href="#o-nama"
        className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-glow hover:opacity-90 transition-opacity"
      >
        Saznaj više
      </a>
    </div>
  </section>
);

const services = [
  { icon: Dumbbell, title: "Fitness oprema", desc: "Vrhunski sprave i slobodni tegovi za sve razine" },
  { icon: Users, title: "Osobni trening", desc: "Individualni pristup s profesionalnim trenerima" },
  { icon: Heart, title: "Kardio zona", desc: "Moderna kardio oprema za efikasno vježbanje" },
  { icon: Zap, title: "Funkcionalni trening", desc: "Dinamični treninzi za snagu i izdržljivost" },
];

const Services = () => (
  <section id="usluge" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Naše <span className="text-gradient">usluge</span></h2>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Sve što vam treba za postizanje fitness ciljeva na jednom mjestu</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="o-nama" className="py-24 px-4 bg-card/50">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">O <span className="text-gradient">nama</span></h2>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Fitness centar <strong className="text-foreground">Plavi Mačak</strong> smješten je u Vitezu, unutar 
        turističkog kompleksa <strong className="text-foreground">Etno selo Čardaci</strong>. 
        Otvoren 2026. godine, nudimo vrhunski opremljenu teretanu za sve razine 
        spremnosti — od početnika do iskusnih sportaša. Naša misija je pomoći vam 
        da postignete svoje fitness ciljeve u motivirajućem i profesionalnom okruženju.
      </p>
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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <Clock className="inline-block w-8 h-8 mr-2 text-primary align-middle" />
        Radno <span className="text-gradient">vrijeme</span>
      </h2>
      <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
        {schedule.map((s, i) => (
          <div key={s.day} className={`flex items-center justify-between px-6 py-5 ${i < schedule.length - 1 ? "border-b border-border" : ""}`}>
            <span className="font-medium">{s.day}</span>
            <span className="text-primary font-semibold">{s.hours}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="lokacija" className="py-24 px-4 bg-card/50">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <MapPin className="inline-block w-8 h-8 mr-2 text-primary align-middle" />
        <span className="text-gradient">Lokacija</span>
      </h2>
      <p className="text-muted-foreground text-center mb-10">Etno selo Čardaci, Vitez, Bosna i Hercegovina</p>
      <div className="rounded-xl overflow-hidden shadow-card border border-border">
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Pratite <span className="text-gradient">nas</span></h2>
      <p className="text-muted-foreground mb-10">Pronađite nas na društvenim mrežama za najnovije vijesti i akcije</p>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.instagram.com/plavi_macak_fitness/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-card hover:border-primary/50 transition-colors group"
        >
          <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="font-medium">@plavi_macak_fitness</span>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-card hover:border-primary/50 transition-colors group"
        >
          <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="font-medium">Facebook</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto text-center text-sm text-muted-foreground">
      © 2026 Fitness centar Plavi Mačak. Sva prava pridržana.
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
