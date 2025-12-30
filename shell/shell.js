const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ---------------- Configuration ---------------- */
const offsetX = 50; // shift nucleus/electrons left
let counter = 0;

/* probability thresholds (adjusted for slower appearance) */
const ssehroft  = 80*5;
const soft      = 160*5;
const smanchmal = 250*5;
const sselten   = 350*5;
const snie      = 400*5;

/* center of nucleus */
const xc = 450 - offsetX;
const yc = 250;

/* electron storage */
const electrons = [];

/* ---------------- Helpers ---------------- */
function circle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function randomElectron(maxRadius) {
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * maxRadius;
  return {
    x: xc + Math.cos(angle) * radius,
    y: yc + Math.sin(angle) * radius
  };
}

/* ---------------- Mouse event ---------------- */
canvas.addEventListener("mousedown", () => {
  // Generate exactly 3 electrons per click
  for (let i = 0; i < 3; i++) {
    electrons.push(randomElectron(120));
  }
});

/* ---------------- Drawing ---------------- */
function drawLabels() {
  ctx.fillStyle = "black";
  ctx.font = "26px Times New Roman";

  // LEFT labels (do not shift)
  ctx.fillText("Li", 40, 35);
  ctx.font = "20px Times New Roman";
  ctx.fillText("7", 30, 20);
  ctx.fillText("3", 30, 45);
  ctx.fillText(" = Proton", 20, 80);
  ctx.fillText(" = Neutron", 20, 100);
  ctx.fillText(" = Elektron", 20, 120);

  // RIGHT label
  ctx.font = "16px Times New Roman";
  ctx.fillText("C. Villani, 2006", canvas.width - 200, 25);
}

function drawNucleus() {
  // protons
  circle(xc - 10, yc - 5, 6, "red");
  circle(xc + 10, yc, 6, "red");
  circle(xc, yc + 10, 6, "red");

  // neutrons
  circle(xc - 5, yc + 5, 6, "blue");
  circle(xc + 5, yc - 10, 6, "blue");
  circle(xc - 12, yc + 12, 6, "blue");
  circle(xc + 12, yc + 12, 6, "blue");
}

/* ---------------- Animation ---------------- */
function animate() {
  counter++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawLabels();
  drawNucleus();

  // draw stored electrons (persistent)
  for (const e of electrons) {
    circle(e.x, e.y, 2, "black");
  }

  // probability regions
  if (counter > ssehroft) {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(xc, yc, 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText("sehr oft", xc + 20, yc + 10);
  }

  if (counter > soft) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(xc, yc, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText("oft", xc + 40, yc + 70);
  }

  if (counter > smanchmal) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(xc, yc, 170, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText("manchmal", xc + 80, yc + 110);
  }

  if (counter > sselten) {
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc(xc, yc, 260, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText("selten", xc + 100, yc + 170);
  }

  if (counter > snie) {
    ctx.fillStyle = "black";
    ctx.fillText("so gut wie nie", xc + 200, yc + 200);
  }

  requestAnimationFrame(animate);
}

/* start */
animate();

