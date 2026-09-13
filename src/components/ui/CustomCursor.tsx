"use client";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onFirst = () => { setVisible(true); window.removeEventListener("mousemove", onFirst); };
    window.addEventListener("mousemove", onFirst);
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    const attach = () => {
      document.querySelectorAll("a,button,[role='button'],input,select,textarea").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", onFirst); obs.disconnect(); };
  }, []);

  if (!visible) return null;
  return (
    <div
      className={`custom-cursor${hovered ? " expanded" : ""}`}
      style={{ transform: `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)` }}
    />
  );
}
