export function newCanvas() {
    let canvas = document.getElementById('canvas2');
    let ctx = canvas.getContext('2d');
    ctx.reset();
}

export function drawCircle() {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(298, 258, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}
export function drawStar() {
    let canvas = document.getElementById('canvas2');
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(298, 145.0);
    ctx.lineTo(331, 215);
    ctx.lineTo(408, 223.3);
    ctx.lineTo(352, 276);
    ctx.lineTo(365, 350);
    ctx.lineTo(298, 315);
    ctx.lineTo(231, 350);
    ctx.lineTo(245, 276);
    ctx.lineTo(191, 223.3);
    ctx.lineTo(265, 215);
    ctx.lineTo(298, 145.0);
    ctx.closePath();
    ctx.stroke();    
}

export function drawStarCircle() {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(298, 258, 120, 0, 2 * Math.PI);
    ctx.moveTo(298, 145.0);
    ctx.lineTo(331, 215);
    ctx.lineTo(408, 223.3);
    ctx.lineTo(352, 276);
    ctx.lineTo(365, 350);
    ctx.lineTo(298, 315);
    ctx.lineTo(231, 350);
    ctx.lineTo(245, 276);
    ctx.lineTo(191, 223.3);
    ctx.lineTo(265, 215);
    ctx.lineTo(298, 145.0);
    ctx.closePath();
    ctx.stroke();
}

