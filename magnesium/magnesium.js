const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ---- Constants and variables ----
const xc = 510;
const yc = 250;
const fix = 80;
const fix2 = 50;
const limit = 25;
const dime = 10;

let oldDate = new Date();

// Shell multipliers (direction + shell size)
let nshell = Array.from({ length: 12 }, () => ({ x: 1, y: 1 }));
let posxel = new Array(12);
let posyel = new Array(12);

// ---- Utility functions ----
function randomSign() {
  return Math.random() < 0.5 ? 1 : -1;
}

// ---- Initialize shell directions (done once) ----
function initShells() {
  for (let i = 0; i < 12; i++) {
    if (i < 2) {
      nshell[i].x = nshell[i].y = 1;
    } else if (i < 10) {
      nshell[i].x = nshell[i].y = 2;
    } else {
      nshell[i].x = nshell[i].y = 3;
    }

    nshell[i].x *= randomSign();
    nshell[i].y *= randomSign();
  }
}

// ---- Randomize electron positions (Java paint() behavior) ----
function randomizeElectrons() {
  for (let i = 0; i < 12; i++) {
    posxel[i] = 1;
    posyel[i] = 1;

    while (posxel[i] < limit && posyel[i] < limit) {
      posxel[i] = Math.floor(Math.random() * fix);
      posyel[i] = Math.floor(Math.random() * fix2);
    }
  }
}

// ---- Draw everything ----
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Regenerate electron positions on every redraw
  randomizeElectrons();

  // Title
  ctx.fillStyle = "black";
  ctx.font = "bold 26px Times New Roman";
  ctx.fillText("Mg   (12 Elektronen)", 50, 30);

  ctx.font = "bold 20px Times New Roman";
  // Legend: nucleus
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(25, 85, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.font = "bold 20px Times New Roman";
  ctx.fillText(" = Kern", 40, 100);

  ctx.fillText(" = Elektron", 40, 150);

  // Time display
  const now = new Date();
  ctx.font = "bold 16px Times New Roman";
  ctx.fillText(now.toString(), 20, 480);
  oldDate = now;

  // Author
  ctx.fillText("C. Villani, 2006", 720, 20);

  // Legend electron
  ctx.beginPath();
  ctx.arc(25, 135, dime / 2, 0, Math.PI * 2);
  ctx.fill();

  // Nucleus
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(xc + 20, yc + 20, 20, 0, Math.PI * 2);
  ctx.fill();

  // Electron colors (same grouping as Java)
  const colors = [
    "rgb(139,69,19)", "rgb(139,69,19)", // first shell
    "pink","pink","pink","pink","pink","pink","pink","pink", // second shell
    "green","green" // third shell
  ];

  // Draw electrons
  for (let i = 0; i < 12; i++) {
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.arc(
      xc + posxel[i] * nshell[i].x,
      yc + posyel[i] * nshell[i].y,
      dime / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

// ---- Mouse interaction ----
canvas.addEventListener("mousedown", () => {
  draw(); // new electron positions on click
});

// ---- Start ----
initShells();
draw();

