const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
const fix = 20;
const fix2 = 20;
const xc = 280;
const yc = 200;
let oldTime = "";

canvas.addEventListener('mousedown', () => {
    x++;
    draw();
});

function drawClock() {
    const now = new Date().toString();
    ctx.fillStyle = "white";
    ctx.fillText(oldTime, 20, 480);
    ctx.fillStyle = "black";
    ctx.fillText(now, 20, 480);
    oldTime = now;
}

function draw() {
    // Clear only for static parts
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nuclei
    ctx.fillStyle = "black";
    ctx.font = "26px Times New Roman";
    ctx.fillText("H", 350, 100);
    ctx.fillText("H", 200, 100);

    // Author
    ctx.font = "16px Times New Roman";
    ctx.fillText("C. Villani, 2007", 570, 20);

    // Draw nuclei circles
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.beginPath();
    // centerX, centerY, radius
    ctx.arc(350 + 7.5, 200 + 7.5, 7.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(205 + 7.5, 205 + 7.5, 7.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw clock
    ctx.font = "16px Times New Roman";
    drawClock();

// Electron displacement logic
    let nshell1x = Math.floor(Math.random() * 4 + 1);
    let nshell2x = Math.floor(Math.random() * 2 + 1);
    let nshell1y = Math.floor(Math.random() * 3 + 1);
    let nshell2y = Math.floor(Math.random() * 2 + 1);
    const sign1x = Math.floor(Math.random() * 2 + 1);
    const sign1y = Math.floor(Math.random() * 2 + 1);
    const sign2x = Math.floor(Math.random() * 2 + 1);
    const sign2y = Math.floor(Math.random() * 2 + 1);

    if(sign1x === 2) nshell1x = -nshell1x;
    if(sign2x === 2) nshell2x = -nshell2x;
    if(sign1y === 2) nshell1y = -nshell1y;
    if(sign2y === 2) nshell2y = -nshell2y;

    ctx.fillStyle = "red";
    if(x <= 3){
        //ctx.fillRect(240, 200, 7, 7);
        //ctx.fillRect(310, 210, 7, 7);
   	ctx.beginPath();
    	ctx.arc(240 + 3.5, 200 + 3.5, 3.5, 0, Math.PI * 2);
    	ctx.fill();

    	ctx.beginPath();
    	ctx.arc(310 + 3.5, 210 + 3.5, 3.5, 0, Math.PI * 2);
    	ctx.fill();
    } else {
        let posxel1 = 1, posyel1 = 1;
        while(posxel1 < 3 && posyel1 < 3){
            posxel1 = Math.floor(Math.random() * fix);
            posyel1 = Math.floor(Math.random() * fix2);
        }

        let posxel2 = 1, posyel2 = 1;
        while(posxel2 < 3 && posyel2 < 3){
            posxel2 = Math.floor(Math.random() * fix);
            posyel2 = Math.floor(Math.random() * fix2);
        }
        //ctx.fillRect(xc + posxel1 * nshell1x, yc + posyel1 * nshell1y, 7, 7);
        //ctx.fillRect(xc + posxel2 * nshell2x, yc + posyel2 * nshell2y, 7, 7);
    ctx.beginPath();
    ctx.arc(xc + posxel1 * nshell1x + 3.5, yc + posyel1 * nshell1y + 3.5,
            3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(xc + posxel2 * nshell2x + 3.5, yc + posyel2 * nshell2y + 3.5, 
            3.5, 0, Math.PI * 2);
    ctx.fill();
    }

    ctx.fillStyle = "black";
}
// Initial draw
draw();
