interface Props {
  variant?: "wave" | "angle" | "dots";
  flip?: boolean;
  className?: string;
  fromColor?: string;
  toColor?: string;
}

const SectionDivider = ({
  variant = "wave",
  flip = false,
  className = "",
  fromColor,
  toColor,
}: Props) => {
  const transform = flip ? "rotate(180deg)" : undefined;

  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-3 py-6 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`rounded-full ${i === 2 ? "w-3 h-3 bg-primary/60" : "w-2 h-2 bg-primary/30"}`}
          />
        ))}
      </div>
    );
  }

  const fill1 = fromColor || "hsl(var(--card))";
  const fill2 = toColor || "hsl(var(--background))";

  if (variant === "angle") {
    return (
      <div className={`overflow-hidden leading-none -my-px ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <polygon fill={fill1} points="0,0 1200,0 1200,100" opacity="0.5" />
          <polygon fill={fill2} points="0,30 1200,0 1200,100 0,100" />
        </svg>
      </div>
    );
  }

  // wave
  return (
    <div className={`overflow-hidden leading-none -my-px ${className}`} style={{ transform }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-14 md:h-24">
        <defs>
          <linearGradient id={`divGrad-${flip ? "f" : "n"}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={fill1} stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor={fill1} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          fill={fill2}
          d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
        />
        <path
          fill={`url(#divGrad-${flip ? "f" : "n"})`}
          d="M0,80 C200,40 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
