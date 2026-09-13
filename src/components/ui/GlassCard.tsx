"use client";
import { useState, useRef } from "react";

interface Props { children: React.ReactNode; className?: string; tiltStrength?: number; style?: React.CSSProperties; id?: string; disableTilt?: boolean; }

export function GlassCard({ children, className = "", tiltStrength = 8, style = {}, id, disableTilt = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || disableTilt) return;
    setRx(-((e.clientY - r.top) / r.height - 0.5) * tiltStrength);
    setRy(((e.clientX - r.left) / r.width - 0.5) * tiltStrength);
  };

  const combinedStyle: React.CSSProperties = disableTilt ? style : {
    ...style,
    transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`,
    transformStyle: "preserve-3d",
  };

  return (
    <div ref={ref} id={id} className={`glass rounded-2xl p-6 transition-all duration-300 ease-out group ${className}`} onMouseMove={onMove} onMouseLeave={() => { if (!disableTilt) { setRx(0); setRy(0); } }} style={combinedStyle}>
      <div style={disableTilt ? {} : { transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>{children}</div>
    </div>
  );
}
