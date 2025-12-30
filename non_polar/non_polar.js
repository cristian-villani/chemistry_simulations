// === Unpolar2.js ===

// Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// === Variables (direct Java → JS mapping) ===
let x = 0;

let fix = 20;
let fix2 = 20;

let xc = 280;
let yc = 200;

let nshell1x, nshell2x;
let nshell1y, nshell2y;
let sign1x, sign2x;
let sign1y, sign2y;

let posxel1, posyel1;
let posxel2, posyel2;

let limit = 3;

let oldDate = new Date();

// === Utility ===
function randInt(max) {
  return Math.floor(Math.random() * max);
}

// === Mouse listener (replaces MouseListener) ===
canvas.addEventListener("mousedown", (e) => {
  x += 1;
  console.log("mouse gedrückt 2");
  repaint();
  e.preventDefault();
});

// === Paint logic (replaces paint(Graphics k)) ===
function repaint() {
  // Clear background
  ctx.fillStyle = "white";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);

  const now = new Date();

  // ---- Text ----
  ctx.fillStyle = "black";
  ctx.font = "bold 26px Times New Roman";
  ctx.fillText("H", 350, 100);
  ctx.fillText("H", 200, 100);

  ctx.font = "bold 16px Times New Roman";
  ctx.fillText(" C. Villani, 2007", 570, 20);

  // ---- Fixed dots ----
  ctx.font = "bold 20px Times New Roman";
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(357, 207, 7.5, 0, Math.PI * 2);
  ctx.arc(212, 212, 7.5, 0, Math.PI * 2);
  ctx.fill();

  // ---- Remove old date ----
  ctx.fillStyle = "white";
  ctx.fillText(oldDate.toString(), 20, 480);

  // ---- Draw new date ----
  ctx.fillStyle = "black";
  ctx.fillText(now.toString(), 20, 480);
  oldDate = now;

  // ---- Random shell directions ----
  nshell1x = randInt(4) + 1;
  nshell2x = randInt(2) + 1;
  nshell1y = randInt(3) + 1;
  nshell2y = randInt(2) + 1;

  sign1x = randInt(2) + 1;
  sign2x = randInt(2) + 1;
  sign1y = randInt(2) + 1;
  sign2y = randInt(2) + 1;

  if (sign1x === 2) nshell1x = -nshell1x;
  if (sign2x === 2) nshell2x = -nshell2x;
  if (sign1y === 2) nshell1y = -nshell1y;
  if (sign2y === 2) nshell2y = -nshell2y;

  ctx.fillStyle = "red";

  // ---- Initial static dots ----
  if (x <= 3) {
    ctx.beginPath();
    ctx.arc(243, 203, 3.5, 0, Math.PI * 2);
    ctx.arc(313, 213, 3.5, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // ---- Random electron positions ----
    posxel1 = 1;
    posyel1 = 1;
    while (posxel1 < limit && posyel1 < limit) {
      posxel1 = randInt(fix);
      posyel1 = randInt(fix2);
    }

    posxel2 = 1;
    posyel2 = 1;
    while (posxel2 < limit && posyel2 < limit) {
      posxel2 = randInt(fix);
      posyel2 = randInt(fix2);
    }

    // Electron 1
    ctx.beginPath();
    ctx.arc(
      xc + posxel1 * nshell1x,
      yc + posyel1 * nshell1y,
      3.5,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Electron 2
    ctx.beginPath();
    ctx.arc(
      xc + posxel2 * nshell2x,
      yc + posyel2 * nshell2y,
      3.5,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

// Initial draw
repaint();

