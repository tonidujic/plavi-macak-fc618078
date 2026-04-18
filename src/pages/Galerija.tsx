import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollProgress from "@/components/ScrollProgress";

const GalerijaPage = () => {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="pt-8 pb-16 px-4 bg-card relative overflow-hidden">
          <div className="noise-overlay" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-8 font-heading uppercase text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Nazad na početnu
            </Link>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tight mb-4">
                <span className="text-gradient">Galerija</span>
              </h1>
              <div className="section-line mb-6" />
              <p className="text-muted-foreground text-lg max-w-xl">
                Pogledajte našu kompletnu galeriju i upoznajte prostor u kojem ćete trenirati
              </p>
            </div>
          </div>
        </div>

        {/* Back CTA */}
        <div className="py-12 text-center">
          <Link
            to="/"
            className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-full shadow-glow hover:scale-105 transition-all duration-300 font-heading uppercase tracking-wider text-sm"
          >
            Nazad na početnu
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalerijaPage;
