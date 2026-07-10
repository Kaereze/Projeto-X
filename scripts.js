// Revela elementos com a classe "reveal" com uma animação suave
// assim que eles entram na tela ao rolar a página.
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));

// Brilho que acompanha o cursor, só em dispositivos com mouse
// e quando o usuário não pediu para reduzir animações.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!prefersReducedMotion && hasFineHover) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {
        glow.style.opacity = "1";
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });
}
