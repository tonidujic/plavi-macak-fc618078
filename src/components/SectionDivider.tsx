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
            className={`rounded-full transition-all duration-500 ${i === 2 ? "w-3 h-3 bg-primary/60 shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "w-2 h-2 bg-primary/30"}`}
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
          <defs>
            <linearGradient id={`angGrad-${flip ? "f" : "n"}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <polygon fill={fill2} points="0,30 1200,0 1200,100 0,100" />
          <polygon fill={`url(#angGrad-${flip ? "f" : "n"})`} points="0,0 1200,0 1200,100" opacity="0.7" />
        </svg>
      </div>
    );
  }

  // wave - enhanced with richer gradients
  const uid = `divGrad-${flip ? "f" : "n"}-${Date.now()}`;
  return (
    <div className={`overflow-hidden leading-none -my-px ${className}`} style={{ transform }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-28">
        <defs>
          <linearGradient id={uid} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="30%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill={fill2}
          d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
        />
        <path
          fill={`url(#${uid})`}
          d="M0,80 C200,40 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
