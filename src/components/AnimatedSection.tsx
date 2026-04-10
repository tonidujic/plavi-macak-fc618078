import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale";
}

const variants = {
  up: { hidden: "opacity-0 translate-y-10", visible: "opacity-100 translate-y-0" },
  left: { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-10", visible: "opacity-100 translate-x-0" },
  scale: { hidden: "opacity-0 scale-90", visible: "opacity-100 scale-100" },
};

const AnimatedSection = ({ children, className = "", delay = 0, variant = "up" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const v = variants[variant];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? v.visible : v.hidden} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
