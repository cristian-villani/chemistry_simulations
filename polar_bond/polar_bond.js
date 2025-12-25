const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
const fix = 20;
const fix2 = 20;
const limit = 3;
const xc = 280;
const yc = 200;

let oldDate = "";

canvas.addEventListener("mousedown", () => {
  x++;
  draw();
});

function randInt(n) {
  return Math.floor(Math.random() * n) + 1;
}

function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Text
  ctx.fillStyle = "black";
  ctx.font = "bold 26px Times";
  ctx.fillText("F", 350, 100);
  ctx.fillText("H", 200, 100);

  ctx.font = "bold 16px Times";
  ctx.fillText("C. Villani, 2007", 570, 20);

  // Shapes
  ctx.font = "bold 20px Times";
  drawCircle(360, 210, 10, "black");
  drawCircle(212, 212, 7, "black");

  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(359, 209, 35, 0, 2 * Math.PI);
  ctx.stroke();

  // Date handling
  const now = new Date().toString();
  ctx.fillStyle = "white";
  ctx.fillText(oldDate, 20, 480);
  ctx.fillStyle = "black";
  ctx.fillText(now, 20, 480);
  oldDate = now;

  // Random parameters
  let nshell1x = randInt(4);
  let nshell2x = randInt(2);
  let nshell1y = randInt(3);
  let nshell2y = randInt(2);

  if (randInt(2) === 2 && randInt(3) === 3) nshell1x *= -1;
  if (randInt(2) === 2 && randInt(3) === 3) nshell2x *= -1;
  if (randInt(2) === 2) nshell1y *= -1;
  if (randInt(2) === 2) nshell2y *= -1;

  ctx.fillStyle = "red";

  if (x <= 3) {
    drawCircle(243, 203, 3.5, "red");
    drawCircle(313, 213, 3.5, "red");
  } else {
    let posxel1 = 1, posyel1 = 1;
    while (posxel1 < limit && posyel1 < limit) {
      posxel1 = randInt(fix);
      posyel1 = randInt(fix2);
    }

    let posxel2 = 1, posyel2 = 1;
    while (posxel2 < limit && posyel2 < limit) {
      posxel2 = randInt(fix);
      posyel2 = randInt(fix2);
    }

    drawCircle(xc + posxel1 * nshell1x,
               yc + posyel1 * nshell1y, 3.5, "red");

    drawCircle(xc + posxel2 * nshell2x,
               yc + posyel2 * nshell2y, 3.5, "red");
  }
}

// initial draw
draw();

