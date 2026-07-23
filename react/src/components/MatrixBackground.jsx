import { useEffect, useRef } from "react";

const LETRAS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789".split("");
const FONT_SIZE = 15;
const FRAME_DELAY = 50;

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let columns;
    let drops;
    let intervalId;
    let resizeTimeout;

    function setup() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      drops = new Array(columns).fill(1);
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = FONT_SIZE + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = LETRAS[Math.floor(Math.random() * LETRAS.length)];
        ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);

        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setup();

    if (!prefersReducedMotion) {
      intervalId = setInterval(draw, FRAME_DELAY);
    }

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setup, 150);
    }

    function handleVisibility() {
      if (prefersReducedMotion) return;
      if (document.hidden) {
        clearInterval(intervalId);
      } else {
        intervalId = setInterval(draw, FRAME_DELAY);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(intervalId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}
