const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let fix = 80, fix2 = 50;
let xc = 510, yc = 250;
let limit = 25;

function r(max) {
  return Math.floor(Math.random() * max);
}

function oval(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
  ctx.fill();
}

function paint() {
  // --- Clear canvas (fresh frame like Java repaint) ---
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const now = new Date();

  // Title
  ctx.font = "bold 26px Times New Roman";
  ctx.fillStyle = "black";
  ctx.fillText("Li", 50, 30);

  // Date
  ctx.font = "bold 20px Times New Roman";
  ctx.fillText(now.toString(), 20, 480);

  // Legend
  ctx.fillText("7", 40, 20);
  ctx.fillText("3", 40, 37);
  ctx.fillText(" = Proton", 20, 80);
  ctx.fillText(" = Neutron", 20, 100);
  ctx.fillText(" = Elektron", 20, 120);

  // Signature
  ctx.font = "bold 16px Times New Roman";
  ctx.fillText(" C. Villani, 2006", 720, 20);

  // Legend symbols
  oval(15, 112, 5, 5, "black"); // electron
  oval(13, 70, 10, 10, "red");  // proton
  oval(13, 90, 10, 10, "blue"); // neutron

  // Nucleus
  oval(504, 240, 10, 10, "red");
  oval(520, 250, 10, 10, "red");
  oval(503, 260, 10, 10, "red");

  oval(500, 250, 10, 10, "blue");
  oval(517, 240, 10, 10, "blue");
  oval(515, 262, 10, 10, "blue");
  oval(510, 250, 10, 10, "blue");

  // Random shell directions
  let nsx = [r(4)+1, r(2)+1, r(2)+1];
  let nsy = [r(4)+1, r(2)+1, r(2)+1];

  for (let i = 0; i < 3; i++) {
    if (r(2)) nsx[i] *= -1;
    if (r(2)) nsy[i] *= -1;
  }

  // Electrons (fresh each repaint)
  for (let i = 0; i < 3; i++) {
    let px = 1, py = 1;
    while (px < limit && py < limit) {
      px = r(fix);
      py = r(fix2);
    }
    oval(
      xc + px * nsx[i],
      yc + py * nsy[i],
      5,
      5,
      "black"
    );
  }
}

// Initial draw
paint();

// Mouse click → repaint (Applet-like)
canvas.addEventListener("mousedown", (e) => {
  paint();
  e.preventDefault();
});

