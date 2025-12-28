/* =========================
   Variable declarations
   ========================= */
let SECOND_MOLECULE = 40;
let LINES = 100;
let FORCE = 200;
let CORRELATION = 20;

let x = 0;
let xs = 13;
let ys = 20;

let x1, y1;

let fix = 24;
let fix2 = 17;

let xc = 280;
let yc = 200;
let xc1 = 280;
let yc1 = 200;

let xshift = 220;
let yshift = 140;

let nshell1x, nshell2x;
let nshell1y, nshell2y;

let sign1x, sign2x;
let sign1y, sign2y;

let posxel1, posyel1;
let posxel2, posyel2;

let limit = 3;

let oldDate = new Date();

/* =========================
   Canvas setup
   ========================= */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   Mouse handling
   ========================= */
canvas.addEventListener("mousedown", () => {
  x += 1;
  console.log("mouse gedrückt 2");
  draw();
});

/* =========================
   Helper: draw filled oval
   ========================= */
function fillOval(cx, cy, w, h) {
  ctx.beginPath();
  ctx.ellipse(cx + w / 2, cy + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
  ctx.fill();
}

/* =========================
   Main drawing function
   ========================= */
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* Text */
  ctx.fillStyle = "black";
  ctx.font = "bold 26px Times New Roman";
  ctx.fillText("H", 350, 100);
  ctx.fillText("H", 200, 100);

  ctx.font = "bold 16px Times New Roman";
  ctx.fillText(" C. Villani, 2007", 570, 20);

  /* Molecule centers */
  ctx.font = "bold 20px Times New Roman";
  ctx.fillStyle = "black";
  fillOval(350, 200, 15, 15);
  fillOval(205, 200, 15, 15);

  /* Date */
  ctx.fillStyle = "white";
  ctx.fillText(oldDate.toString(), 20, 480);
  ctx.fillStyle = "black";

  /* Random shell directions */
  nshell1x = Math.floor(Math.random() * 4 + 1);
  nshell2x = Math.floor(Math.random() * 2 + 1);
  nshell1y = Math.floor(Math.random() * 3 + 1);
  nshell2y = Math.floor(Math.random() * 2 + 1);

  sign1x = Math.floor(Math.random() * 2 + 1);
  sign1y = Math.floor(Math.random() * 2 + 1);
  sign2x = Math.floor(Math.random() * 2 + 1);
  sign2y = Math.floor(Math.random() * 2 + 1);

  if (sign1x === 2) nshell1x *= -1;
  if (sign2x === 2) nshell2x *= -1;
  if (sign1y === 2) nshell1y *= -1;
  if (sign2y === 2) nshell2y *= -1;

  ctx.fillStyle = "red";

  posxel1 = posyel1 = 1;
  while (posxel1 < limit && posyel1 < limit) {
    posxel1 = Math.floor(Math.random() * fix);
    posyel1 = Math.floor(Math.random() * fix2);
  }

  posxel2 = posyel2 = 1;
  while (posxel2 < limit && posyel2 < limit) {
    posxel2 = Math.floor(Math.random() * fix);
    posyel2 = Math.floor(Math.random() * fix2);
  }

  fillOval(xc + posxel1 * nshell1x, yc + posyel1 * nshell1y, 7, 7);
  fillOval(xc + posxel2 * nshell2x, yc + posyel2 * nshell2y, 7, 7);

  /* Lines */
  if (x >= LINES) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(285, 100);
    ctx.lineTo(285, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280 + xshift, 250);
    ctx.lineTo(280 + xshift, 500);
    ctx.stroke();
  }

  /* Second molecule */
  if (x > SECOND_MOLECULE) {
    xc1 = 280 + xshift;
    yc1 = 200 + yshift;

    ctx.fillStyle = "black";
    ctx.font = "bold 26px Times New Roman";
    ctx.fillText("H", 350 + xshift, 470);
    ctx.fillText("H", 200 + xshift, 470);

    fillOval(350 + xshift, 200 + yshift, 15, 15);
    fillOval(205 + xshift, 200 + yshift, 15, 15);

    ctx.fillStyle = "red";

    posxel1 = posyel1 = 1;
    while (posxel1 < limit && posyel1 < limit) {
      posxel1 = Math.floor(Math.random() * fix);
      posyel1 = Math.floor(Math.random() * fix2);
    }

    posxel2 = posyel2 = 1;
    while (posxel2 < limit && posyel2 < limit) {
      posxel2 = Math.floor(Math.random() * fix);
      posyel2 = Math.floor(Math.random() * fix2);
    }

    fillOval(xc1 + posxel1 * nshell1x, yc1 + posyel1 * nshell1y, 7, 7);
    fillOval(xc1 + posxel2 * nshell2x, yc1 + posyel2 * nshell2y, 7, 7);
  }

  /* Force visualization */
  if (x >= FORCE) {
    ctx.fillStyle = "yellow";
    x1 = 370;
    y1 = 250;
    while (x1 < 420) {
      fillOval(x1, y1, 10, 10);
      x1 += xs;
      y1 += ys;
    }
  }
}

/* Initial draw */
draw();
