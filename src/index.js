
import { drawStar } from "./scripts/heading";

let start = false;

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    let painting = false;
    function startPosition(e) {
        painting = true;
            if (painting === true) {
                if (start === false) {
                    setInterval(updateCountdown, 1000);
                    start = true;
                }
            }
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
        // console.log(e)
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


const timeLeft = document.getElementById('count-down');
const startingMinutes = 3;
let time = startingMinutes * 60;

// setInterval(updateCountdown, 1000); 

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    

    timeLeft.innerHTML = `${minutes}:${seconds}`;
    if (time !== 0) {
        time -= 1;
    }
    
}