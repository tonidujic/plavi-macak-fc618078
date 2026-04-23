interface Props {
  variant?: "wave" | "angle" | "dots";
  flip?: boolean;
  className?: string;
  fromColor?: string;
  toColor?: string;
}

const SectionDivider = ({ variant = "wave", className = "" }: Props) => {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-3 py-6 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-500 ${
              i === 2
                ? "w-3 h-3 bg-primary/60 shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
                : "w-2 h-2 bg-primary/30"
            }`}
          />
        ))}
      </div>
    );
  }

  // Clean, minimal horizontal line divider for both "wave" and "angle"
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <div className="section-line" />
    </div>
  );
};

export default SectionDivider;
