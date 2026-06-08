const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "ボウルに卵とグラニュー糖を入れ、白っぽくふんわりするまで泡立てます。油と全乳を加え、全体が均一になるまでよく混ぜま小麦粉を少しずつ加え、泡を潰さないように優しく混ぜます。最後にベーキングパウダーを加えて混ぜます生地油を塗って小麦粉をまぶした、中央に穴の開いた丸型ケーキ型に流し込予熱した中温のオーブンで約40分、または表面がきつね色になり、乾くまで焼きま"
const letrasArray = letras.split("");

const fontSize = 12;
const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
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

setInterval(draw, 35);