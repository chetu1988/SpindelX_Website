"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props { value: number; suffix?: string; prefix?: string; duration?: number; className?: string; }

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2000, className = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const isDecimal = value % 1 !== 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const ep = p * (2 - p);
      setCount(isDecimal ? parseFloat((ep * value).toFixed(1)) : Math.floor(ep * value));
      if (p < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
}
