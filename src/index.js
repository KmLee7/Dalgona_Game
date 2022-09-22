
import { loadPreset } from "@babel/core/lib/config/files";
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
const pts = document.getElementById('score');
const instruct = document.getElementById('instructions');
const howto = document.getElementById('how');
const aboutgame = document.getElementById('about');


instruct.addEventListener('click', () => {
    instruct.innerHTML = 'Your goal is to trace through the curved inline (black line) of the shape depending on level. Timer will start when you click on the game. Highest point you can achieve is 1000. Good Luck!'
})
howto.addEventListener('click', () => {
    howto.innerHTML = 'Select level that you want to play. Click on game and start tracing the shape line!'
})

aboutgame.addEventListener('click', () => {
    aboutgame.innerHTML = 'Dalgona Game(ppopgi) was a popular street snack/game in the 70s and 80s and became well-known after it was played in one of the episode of the Netflix series Squid Game. I created this game to give the users an experience of poppgi'
})

var timer;

const timeLeft = document.getElementById('count-down');
const startingMinutes = 1; // change back to 3 after debugging.
let time = startingMinutes * 10; // change 3 to 60 after debugging. 

window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let painting = false;
    
class Player {
    constructor() {
        this.points = new Set();
        this.ongoing = false;
        this.level = 0;
        this.score = 1000;
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
        time = startingMinutes * 10;
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
            if (player.ongoing === false) {
                if (player.points.size >= (circlepoints.length * .80)) {
                    win();
                } else {
                    lose();
                }
            }
            if (time === 0) return; 
            perc.textContent = ` ${Math.round((player.points.size / circlepoints.length) * 100)}%`;
            pts.textContent = `${Math.round(player.score * (player.points.size / circlepoints.length))}`;
        }
        if (player.level === 2) {
            starpoints.forEach(point =>  {
                if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                    player.points.add(point);
                }
            });
            if (player.ongoing === false ) {
                if (player.points.size >= (starpoints.length * .80)) {
                    win();
                } else {
                    lose();
                }
            }
            if (time === 0) return; 
            perc.textContent = ` ${Math.round((player.points.size / starpoints.length) * 100)}%`;
            pts.textContent = `${Math.round(player.score * (player.points.size / starpoints.length))}`;
        }
        if (player.level === 3) {
            starcirclepoints.forEach(point => {
                if (Math.abs(e.offsetX - point[0]) <= 8 && Math.abs(e.offsetY - point[1]) <= 8) {
                    player.points.add(point);
                }
            });
            
            if (player.ongoing === false ) {
                if (player.points.size >= (starcirclepoints.length * .80)) win();
                else {lose()}
            }
            if (time === 0) return; 
            perc.textContent = ` ${Math.round((player.points.size / starcirclepoints.length) * 100)}%`;
            pts.textContent = `${Math.round(player.score * (player.points.size / starcirclepoints.length))}`;
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
    }
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishedPosition);
        canvas.addEventListener('mousemove', draw); //e => draw(e));

    clearCanvas.addEventListener('click', () => { // New Game
        ctx.reset();
        newCanvas();
        player.restartTime();
        player.points = new Set();
    });

    levelOne.addEventListener('click', () => { // Level 1
        ctx.reset();
        newCanvas();
        drawCircle();
        player.restartTime();
        player.level = 1;
        player.points = new Set();
    });
    
    levelTwo.addEventListener('click', () => { // Level 2
        ctx.reset();
        newCanvas();
        drawStar();
        player.restartTime();
        player.level = 2;
        player.points = new Set();
    });

    levelThree.addEventListener('click', () => { // Level 3
        ctx.reset();
        newCanvas();
        drawStarCircle();
        player.restartTime();
        player.level = 3;
        player.points = new Set();
    });

    function win() {
        resultDisplay.textContent = 'You win!';
    }

    function lose() {
        resultDisplay.textContent = 'You Lose!';
    }   
});
