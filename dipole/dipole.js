const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let x = 0;
let oldTime = "";
let separationLineVisible = false;

let xc = 280;
let yc = 200;
const xshift = 220;
const yshift = 140;

// Electron offset constants
const fix = 24;
const fix2 = 17;
const limit = 3;

// Electron dot size
const electronRadius = 3.5;

// Call this on mouse click
canvas.addEventListener("mousedown", () => {
    x += 1;
    drawFrame();
});

function drawYellowConnection(x1, y1, x2, y2) {
    ctx.fillStyle = "yellow";
    const step = 10; // distance between points
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx*dx + dy*dy);
    const steps = Math.floor(distance / step);

    for (let i = 0; i <= steps; i++) {
        const px = x1 + (dx * i / steps);
        const py = y1 + (dy * i / steps);
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, 2 * Math.PI); // radius of each yellow point
        ctx.fill();
    }
}

// Utility: draw clock
function drawClock() {
    const now = new Date().toString();
    ctx.fillStyle = "white";
    ctx.fillRect(15, 465, 300, 25); // erase previous
    ctx.fillStyle = "black";
    ctx.font = "16px Times New Roman";
    ctx.fillText(now, 20, 480);
    oldTime = now;
}

// Utility: draw an electron using your Java logic
function drawElectrons(baseX, baseY) {
    // Random offsets
    let nshell1x = Math.floor(Math.random() * 4 + 1);
    let nshell2x = Math.floor(Math.random() * 2 + 1);
    let nshell1y = Math.floor(Math.random() * 3 + 1);
    let nshell2y = Math.floor(Math.random() * 2 + 1);

    let sign1x = Math.floor(Math.random() * 2 + 1);
    let sign1y = Math.floor(Math.random() * 2 + 1);
    let sign2x = Math.floor(Math.random() * 2 + 1);
    let sign2y = Math.floor(Math.random() * 2 + 1);

    let xxx = Math.floor(Math.random() * 3 + 1);
    let yyy = Math.floor(Math.random() * 3 + 1);

    if (sign1x === 2 && xxx === 3) nshell1x = -nshell1x;
    if (sign2x === 2 && yyy === 3) nshell2x = -nshell2x;
    if (sign1y === 2) nshell1y = -nshell1y;
    if (sign2y === 2) nshell2y = -nshell2y;

    let posxel1 = 1, posyel1 = 1;
    while (posxel1 < limit && posyel1 < limit) {
        posxel1 = Math.floor(Math.random() * fix);
        posyel1 = Math.floor(Math.random() * fix2);
    }

    let posxel2 = 1, posyel2 = 1;
    while (posxel2 < limit && posyel2 < limit) {
        posxel2 = Math.floor(Math.random() * fix);
        posyel2 = Math.floor(Math.random() * fix2);
    }

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(baseX + posxel1 * nshell1x, baseY + posyel1 * nshell1y, electronRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(baseX + posxel2 * nshell2x, baseY + posyel2 * nshell2y, electronRadius, 0, 2 * Math.PI);
    ctx.fill();
}

// Draw a full frame based on current x
function drawFrame() {
    // Clear canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Clear only clock area
    ctx.fillStyle = "white";
    ctx.fillRect(15, 465, 300, 25);

    // Draw clock
    drawClock();

    // Draw labels and info
    ctx.font = "26px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("F", 350, 100);
    ctx.fillText("H", 200, 100);

    ctx.font = "16px Times New Roman";
    ctx.fillText("C. Villani, 2007", 570, 20);

    // Draw nuclei
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(350, 200, 10, 0, 2 * Math.PI); // Fluorine
    ctx.fill();

    ctx.beginPath();
    ctx.arc(205, 205, 7.5, 0, 2 * Math.PI); // Hydrogen
    ctx.fill();

    // Red electron shell
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(350, 200, 35, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw first electrons
    if (x <= 2) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(240, 200, electronRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(310, 210, electronRadius, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        drawElectrons(xc, yc);
    }
    if (x == 90) {
        separationLineVisible = true;
    }

    // Second molecule appears after x > 90
    if (x > 90) {
        let xc2 = xc + xshift;
        let yc2 = yc + yshift;

        // Nuclei
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(350 + xshift, 200 + yshift, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(205 + xshift, 205 + yshift, 7.5, 0, 2 * Math.PI);
        ctx.fill();

	ctx.font = "26px Times New Roman";
    	ctx.fillStyle = "black";
    	ctx.fillText("F", 350 + xshift, 100 + yshift);
    	ctx.fillText("H", 200 + xshift, 100 + yshift);


        // Red shell
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(350 + xshift, 200 + yshift, 35, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw electrons for second molecule
        drawElectrons(xc2, yc2);
    }

        // Draw separation lines if flag is set
	if (separationLineVisible) {
    	ctx.strokeStyle = "black";

    	// First molecule
    	ctx.beginPath();
    	ctx.moveTo(285, 100);
    	ctx.lineTo(285, 300);
    	ctx.stroke();

    	// Second molecule (shifted)
    	ctx.beginPath();
    	ctx.moveTo(285 + xshift, 100 + yshift);
    	ctx.lineTo(285 + xshift, 300 + yshift);
    	ctx.stroke();
    }
// Yellow points line connecting right atom of molecule 1
// to left atom of molecule 2
    if (x >= 150) {
        const atom1X = 350 + 20;   // right side of fluorine in molecule 1
        const atom1Y = 200 + 40;   // center of fluorine
        const atom2X = 205 -20;        // left side of hydrogen in molecule 2
        const atom2Y = 205 -20 ;        // center of hydrogen

    	drawYellowConnection(atom1X, atom1Y, atom2X + xshift, atom2Y + yshift); }

    //if (x >= 200) {
   // 	drawYellowConnection(280, 200, 280 + xshift, 200 + yshift);
    //}
}

// Initial draw
drawFrame();

