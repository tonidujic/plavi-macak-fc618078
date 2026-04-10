import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150 ease-out shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-primary" />
      </button>
    </>
  );
};

export default ScrollProgress;
