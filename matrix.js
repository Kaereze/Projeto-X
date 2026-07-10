const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Caracteres katakana (efeito clássico do filme Matrix) + dígitos
const letras = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
const letrasArray = letras.split("");

const fontSize = 12;

let columns;
let drops;

// Recalcula o tamanho do canvas e as colunas de chuva de letras
function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
}

function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text =
            letrasArray[Math.floor(Math.random() * letrasArray.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setup();

let intervalId = setInterval(draw, 35);

// Ajusta o efeito se a janela mudar de tamanho
window.addEventListener("resize", setup);

// Pausa o efeito quando a aba não está visível, economizando CPU/bateria
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearInterval(intervalId);
    } else {
        intervalId = setInterval(draw, 35);
    }
});