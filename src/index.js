
import { drawStar } from "./scripts/heading";
import { drawCircle } from "./scripts/heading";
import { drawStarCircle } from "./scripts/heading";
import { newCanvas } from "./scripts/heading";
import { starpoints } from "./scripts/points";
import { circlepoints } from "./scripts/points";
import { starcirclepoints} from "./scripts/points";

const clearCanvas = document.getElementById('newGame');
const levelOne = document.getElementById('one');
const levelTwo = document.getElementById('two');
const levelThree = document.getElementById('three');
const resultDisplay = document.getElementById('resultId');
const perc = document.getElementById('percentage');
var timer;


const timeLeft = document.getElementById('count-down');
const startingMinutes = 1; // change back to 3 after debugging.
let time = startingMinutes * 60; // change 3 to 60 after debugging. 

window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let painting = false;
    
class Player {
    constructor() {
        this.points = new Set();
        this.ongoing = false;
        this.level = 0;
    }
    timeStart() {
        this.ongoing = true;
        timer = setInterval(() => {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            console.log('going')
            timeLeft.innerHTML = `${minutes}:${seconds}`;
            if (time > 0 && this.ongoing === true) {
                time -= 1;
            } else {
                this.timeEnd();
            }
        },1000);
    }
    timeEnd() {
        console.log('stopped');
        this.ongoing = false;
        clearInterval(timer);
    }
    restartTime() {
        console.log('ongoing');
        if (this.ongoing === true) {
            this.ongoing = false;
        }
        time = startingMinutes * 60;
        perc.textContent = 0;
    }
}
    let player = new Player();

    function startPosition(e) {
        painting = true;
        if (painting) {
            if (player.ongoing === false) {
                player.timeStart();
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
        if (player.level === 1) {
            circlepoints.forEach(point => {
                if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                    player.points.add(point);
                }
            });
            if (player.points.size >= (circlepoints.length * .80)) {
                win();
            }
            perc.textContent = ` ${Math.round((player.points.size / circlepoints.length) * 100)}%`;
        }
        if (player.level === 2) {
            starpoints.forEach(point =>  {
                if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                    player.points.add(point);
                }
            });
            if (player.points.size >= (starpoints.length * .80)) {
                win();
            }
            perc.textContent = ` ${Math.round((player.points.size / starpoints.length) * 100)}%`;
        }
        if (player.level === 3) {
            starcirclepoints.forEach(point => {
                if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                    player.points.add(point);
                }
            });
            if (player.points.size >= (starcirclepoints.length * .80)) {
                win();
            }
            perc.textContent = ` ${Math.round((player.points.size / starcirclepoints.length) * 100)}%`;
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
        if (timer === 0) {
            gameDone();
            // lose();
        }
        //  perc.textContent = ` ${Math.round((player.points.size / starpoints.length) * 100)}%`;
    }
    
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw); //e => draw(e));
    clearCanvas.addEventListener('click', () => { // New Game
        ctx.reset();
        newCanvas();
        // player.timeEnd();
        player.restartTime();
        player.points = new Set()
    });
    levelOne.addEventListener('click', () => { // Level 1
        ctx.reset();
        newCanvas();
        drawCircle();
        // player.timeEnd();
        player.restartTime();
        player.level = 1;
        player.points = new Set()
    });
    levelTwo.addEventListener('click', () => { // Level 2
        ctx.reset();
        newCanvas();
        drawStar();
        // player.timeEnd();
        player.restartTime();
        player.level = 2;
        player.points = new Set()
    });
    levelThree.addEventListener('click', () => { // Level 3
        ctx.reset();
        newCanvas();
        drawStarCircle();
        // player.timeEnd();
        player.restartTime();
        player.level = 3;
        player.points = new Set()
    });





    function win() {
        console.log(player.points.size,'points');
        console.log(starpoints.length, 'total');
        // console.log(circlepoints.length, 'total')
        resultDisplay.textContent = 'You win!';

        
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
