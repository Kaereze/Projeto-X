import { useMotionValue, useSpring } from "motion/react";

// Inclinação 3D suave que segue o mouse dentro do card (efeito "tilt").
// Ignorado em quem prefere menos movimento — nesse caso os valores
// simplesmente ficam parados em 0 (sem tilt), sem quebrar nada.
export default function useTilt(strength = 8) {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 22 });

  if (prefersReducedMotion) {
    return { onMouseMove: undefined, onMouseLeave: undefined, style: {} };
  }

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * strength);
    rotateX.set(-py * strength);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return {
    onMouseMove,
    onMouseLeave,
    style: { rotateX: springX, rotateY: springY, transformPerspective: 700 },
  };
}
