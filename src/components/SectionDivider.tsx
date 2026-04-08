interface Props {
  variant?: "wave" | "angle" | "dots";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "wave", flip = false, className = "" }: Props) => {
  const transform = flip ? "rotate(180deg)" : undefined;

  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-2 py-4 ${className}`}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className={`overflow-hidden leading-none ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <polygon
            fill="hsl(var(--card))"
            points="0,60 1200,0 1200,60"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden leading-none ${className}`} style={{ transform }}>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
        <path
          fill="hsl(var(--card))"
          d="M0,40 C300,80 600,0 900,40 C1050,60 1150,50 1200,40 L1200,80 L0,80 Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
