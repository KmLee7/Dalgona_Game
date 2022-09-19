// const Heading = require('./scripts/heading');

import { drawStar } from "./scripts/heading";

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const heading = new Heading('Hey Gamers!!');

//     canvas.innerHTML = heading.heading;
// })

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    let painting = false;

    
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
console.log(e)
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw); //e => draw(e));
    drawStar();
});
