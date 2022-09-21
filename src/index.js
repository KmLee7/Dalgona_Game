
import { drawStar } from "./scripts/heading";
import { drawCircle } from "./scripts/heading";
import { drawStarCircle } from "./scripts/heading";
import { newCanvas } from "./scripts/heading";

const clearCanvas = document.getElementById('newGame');
const levelOne = document.getElementById('one');
const levelTwo = document.getElementById('two');
const levelThree = document.getElementById('three');
const resultDisplay = document.getElementById('resultId');
import { starpoints } from "./scripts/points";

let start = false;
// const timerId = setInterval(updateCountdown,1000);

window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let painting = false;
    
    class Player {
        constructor() {
            this.points = new Set();
        }
    }
    let player = new Player();
    function startPosition(e) {
        painting = true;
        if (painting === true) {
            if (start === false) {
                var timer = setInterval(updateCountdown, 1000);
                timer;
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
        starpoints.forEach(point =>  {
           if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                player.points.add(point);
           }
        });
        // console.log(player.points, 'the pooijnts');
        // console.log(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
        gameDone();
        // lose();
        win();
    }
    
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw); //e => draw(e));
    clearCanvas.addEventListener('click', () => {
        ctx.reset();
        newCanvas();
    });
    levelOne.addEventListener('click', () => {
        ctx.reset();
        newCanvas();
        drawCircle();
    });
    levelTwo.addEventListener('click', () => {
        ctx.reset();
        newCanvas();
        drawStar();
    });
    levelThree.addEventListener('click', () => {
        ctx.reset();
        newCanvas();
        drawStarCircle();
    });

const timeLeft = document.getElementById('count-down');
const startingMinutes = 1; // change back to 3 after debugging.
let time = startingMinutes * 10; // change 3 to 60 after debugging. 

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (start === false) {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        timeLeft.innerHTML = `${minutes}:${seconds}`;
        
        if (time !== 0) {
            time -= 1;
        }
    }
}

    function win() {
        if (time !== 0) {
            if (player.points.size >= (starpoints.length * .80)) {
                resultDisplay.textContent = 'You win!';
                clearInterval(timer);
            }
        }
    }

    // function lose() {
    //     if (time === 0) {
    //         // if (percent < 85) {
    //             resultDisplay.textContent = 'You Lose!';
    //             // clearInterval(setInterval(startPosition,1000));
    //             // canvas.removeEventListener('mousedown', startPosition);
    //         // }
    //     }
    // }

    function gameDone() {
        if (time === 0) {
            console.log(player.points.size);
        }
    }
});
