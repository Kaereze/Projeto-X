// Brilho que acompanha o cursor, só em dispositivos com mouse
// e quando o usuário não pediu para reduzir animações.
const prefersReducedMotionCursor = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!prefersReducedMotionCursor && hasFineHover) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    // Guarda a posição e só desenha uma vez por frame (evita reflow a cada
    // evento de mousemove, que pode disparar centenas de vezes por segundo).
    let targetX = 0;
    let targetY = 0;
    let ticking = false;

    function paintGlow() {
        glow.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        ticking = false;
    }

    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        glow.style.opacity = "1";

        if (!ticking) {
            ticking = true;
            requestAnimationFrame(paintGlow);
        }
    });

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });
}
