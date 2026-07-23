import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });
  const ref = useRef(null);

  useEffect(() => {
    const hasFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFineHover || prefersReducedMotion) return;

    function handleMove(e) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (ref.current) ref.current.style.opacity = "1";
    }
    function handleLeave() {
      if (ref.current) ref.current.style.opacity = "0";
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="cursor-glow"
      style={{ left: springX, top: springY, opacity: 0 }}
      aria-hidden="true"
    />
  );
}
