
import { drawStar } from "./scripts/heading";
import { drawCircle } from "./scripts/heading";
import { drawStarCircle } from "./scripts/heading";
import { newCanvas } from "./scripts/heading";

const clearCanvas = document.getElementById('newGame');
const levelOne = document.getElementById('one');
const levelTwo = document.getElementById('two');
const levelThree = document.getElementById('three');
const resultDisplay = document.getElementById('resultId');

let start = false;
// const timerId = setInterval(updateCountdown,1000);

window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    
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
        ctx.strokeStyle = 'white'
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
        lose();
        // win();
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw); //e => draw(e));
    clearCanvas.addEventListener('click', newCanvas);
    levelOne.addEventListener('click', () => {
        newCanvas();
        drawCircle();
    });
    levelTwo.addEventListener('click', () => {
        newCanvas();
        drawStar();
    });
    levelThree.addEventListener('click', () => {
        newCanvas();
        drawStarCircle();
    });
});

const timeLeft = document.getElementById('count-down');
const startingMinutes = 1; // change back to 3 after debugging.
let time = startingMinutes * 3; // change 3 to 60 after debugging. 

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeLeft.innerHTML = `${minutes}:${seconds}`;
    if (time !== 0) {
        time -= 1;
    }
}

// function win() {
//     if (time !== 0) {
//         // if (percent >= 85) {
//             resultDisplay.textContent = 'You win!';
//         // }
//     }
// }

function lose() {
    if (time === 0) {
        // if (percent < 85) {
            resultDisplay.textContent = 'You Lose!';
            // clearInterval(setInterval(startPosition,1000));
            // canvas.removeEventListener('mousedown', startPosition);
        // }
    }
}