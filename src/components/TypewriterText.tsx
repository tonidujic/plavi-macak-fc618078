import { useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText = ({ text, className = "", speed = 60, delay = 500 }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-[1em] bg-primary/70 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
};

export default TypewriterText;
