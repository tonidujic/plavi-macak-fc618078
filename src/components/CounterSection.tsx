import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Trophy, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Aktivnih članova" },
  { icon: Dumbbell, value: 50, suffix: "+", label: "Profesionalnih sprava" },
  { icon: Trophy, value: 5, suffix: "+", label: "Stručnih trenera" },
  { icon: Clock, value: 7, suffix: "/7", label: "Dana u tjednu" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {count}{suffix}
    </span>
  );
};

const CounterSection = () => (
  <section className="py-20 px-4 bg-background relative overflow-hidden">
    <div className="noise-overlay" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 100}>
            <div className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted/50 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                <stat.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CounterSection;
