import { useMotionValue, useSpring } from "motion/react";

// Deslocamento 2D suave seguindo o mouse (sem rotação/perspectiva 3D).
// Usado em vez de useTilt em elementos com mix-blend-mode: transforms
// 3D (rotateX/rotateY + perspective) fazem o navegador promover o
// elemento pra uma camada de composição própria, e nessa camada o
// mix-blend-mode para de enxergar o que está atrás — o fundo preto
// da imagem volta a aparecer. Um translate 2D simples não tem esse
// problema.
export default function useParallax(strength = 14) {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });

  if (prefersReducedMotion) {
    return { onMouseMove: undefined, onMouseLeave: undefined, style: {} };
  }

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * strength);
    y.set(py * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { onMouseMove, onMouseLeave, style: { x: springX, y: springY } };
}
