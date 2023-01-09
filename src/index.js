import { loadPreset } from "@babel/core/lib/config/files";
import { drawStar } from "./scripts/heading";
import { drawCircle } from "./scripts/heading";
import { drawStarCircle } from "./scripts/heading";
import { newCanvas } from "./scripts/heading";
import { starpoints } from "./scripts/points";
import { circlepoints } from "./scripts/points";
import { starcirclepoints } from "./scripts/points";

const clearCanvas = document.getElementById("newGame");
const levelOne = document.getElementById("one");
const levelTwo = document.getElementById("two");
const levelThree = document.getElementById("three");
const resultDisplay = document.getElementById("resultId");
const perc = document.getElementById("percentage");
const pts = document.getElementById("score");
const instruct = document.getElementById("instructions");
const howto = document.getElementById("how");
const aboutgame = document.getElementById("about");

instruct.addEventListener("click", () => {
  if (!instruct.classList.contains("popped")) {
    instruct.classList.add("popped");
    instruct.innerHTML =
      "Your goal is to trace through the curved inline (black line) of the shape depending on level. Timer will start when you click on the game. Highest point you can achieve is 1000. Good Luck!";
  } else {
    instruct.innerHTML = "Instructions";
    instruct.classList.remove("popped");
  }
});
howto.addEventListener("click", () => {
  if (!howto.classList.contains("popped")) {
    howto.classList.add("popped");
    howto.innerHTML =
      "Select level that you want to play. Click on game and start tracing the shape line!";
  } else {
    howto.classList.remove("popped");
    howto.innerHTML = "How-To-Play";
  }
});

aboutgame.addEventListener("click", () => {
  if (!aboutgame.classList.contains("popped")) {
    aboutgame.classList.add("popped");
    aboutgame.innerHTML =
      "Dalgona Game(ppopgi) was a popular street snack/game in the 70s and 80s and became well-known after it was played in one of the episode of the Netflix series Squid Game. I created this game to give the users an experience of poppgi";
  } else {
    aboutgame.classList.remove("popped");
    aboutgame.innerHTML = "About the Game";
  }
});

var timer;

const timeLeft = document.getElementById("count-down");
const startingMinutes = 1; // change back to 1 after debugging.
let time = startingMinutes * 15; // change 3 to 25 after debugging.

window.addEventListener("load", () => {
  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  let painting = false;

  class Player {
    constructor() {
      this.points = new Set();
      this.ongoing = false;
      this.level = 0;
      // this.score = 1000;
      this.score = 0;
      this.game_start = false;
    }
    timeStart() {
      if (this.game_start === true) {
        this.ongoing = true;
        timer = setInterval(() => {
          const minutes = Math.floor(time / 60);
          let seconds = time % 60;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          // uncomment the console.logs if needed
          // console.log("going");
          timeLeft.innerHTML = `${minutes}:${seconds}`;
          if (time > 0 && this.ongoing === true) {
            time -= 1;
          } else if (time === 0) {
            this.timeEnd();
          }
        }, 1000);
      }
    }
    timeEnd() {
      // console.log("stopped");
      this.ongoing = false;
      clearInterval(timer);
    }
    restartTime() {
      // console.log("ongoing");
      if (this.ongoing === true) {
        this.ongoing = false;
      }
      time = startingMinutes * 15;
      perc.textContent = 0;
    }
  }
  let player = new Player();

  // function startPosition(e) {
  //   painting = true;
  //   if (painting) {
  //     console.log(player.ongoing, "1");
  //     console.log(e, "this is the mouse event");
  //     if (player.ongoing === false) {
  //       player.timeStart();
  //     }
  //   }
  //   // draw(e);
  //   e.preventDefault();
  // }

  // function finishedPosition(e) {
  //   painting = false;
  //   ctx.beginPath();
  //   e.preventDefault();
  // }

  // function draw(e) {
  //   if (!painting) return;
  //   ctx.lineWidth = 5;
  //   ctx.lineCap = "round";
  //   ctx.strokeStyle = "white";
  //   // ctx.lineTo(e.offsetX, e.offsetY);

  // if (player.level === 1) {
  //   circlepoints.forEach((point) => {
  //     if (
  //       Math.abs(e.offsetX - point[0]) <= 2 &&
  //       Math.abs(e.offsetY - point[1]) <= 2
  //     ) {
  //       player.points.add(point);
  //     }
  //   });

  //   if (player.ongoing === true) {
  //     if (player.points.size / circlepoints.length === 1) {
  //       win();
  //     }
  //   } else if (player.ongoing === false && time === 0) {
  //     // if (player.ongoing === false) {
  //     if (player.points.size >= circlepoints.length * 0.8) {
  //       win();
  //     } else {
  //       lose();
  //     }
  //   }
  //   if (time === 0) return;
  //   perc.textContent = ` ${Math.round(
  //     (player.points.size / circlepoints.length) * 100
  //   )}%`;
  //   pts.textContent = `${Math.round(
  //     player.score + 1000 * (player.points.size / circlepoints.length)
  //   )}`;
  // }
  // if (player.level === 2) {
  //   starpoints.forEach((point) => {
  //     if (
  //       Math.abs(e.offsetX - point[0]) <= 2 &&
  //       Math.abs(e.offsetY - point[1]) <= 2
  //     ) {
  //       player.points.add(point);
  //     }
  //   });
  //   if (player.ongoing === false && time === 0) {
  //     if (player.points.size >= starpoints.length * 0.8) {
  //       win();
  //     } else {
  //       lose();
  //     }
  //   }
  //   if (time === 0) return;
  //   perc.textContent = ` ${Math.round(
  //     (player.points.size / starpoints.length) * 100
  //   )}%`;
  //   pts.textContent = `${Math.round(
  //     player.score * (player.points.size / starpoints.length)
  //   )}`;
  // }
  // if (player.level === 3) {
  //   starcirclepoints.forEach((point) => {
  //     if (
  //       Math.abs(e.offsetX - point[0]) <= 2 &&
  //       Math.abs(e.offsetY - point[1]) <= 2
  //     ) {
  //       player.points.add(point);
  //     }
  //   });

  //   if (player.ongoing === false) {
  //     if (player.points.size >= starcirclepoints.length * 0.8) win();
  //     else {
  //       lose();
  //     }
  //   }
  //   if (time === 0) return;
  //   perc.textContent = ` ${Math.round(
  //     (player.points.size / starcirclepoints.length) * 100
  //   )}%`;
  //   pts.textContent = `${Math.round(
  //     player.score * (player.points.size / starcirclepoints.length)
  //   )}`;
  // }
  //   console.log(player.ongoing, "2");
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.moveTo(e.offsetX, e.offsetY);

  //   e.preventDefault();
  // }
  // let start = true;
  // function stop(e) {
  //   if (start) {
  //     ctx.stroke();
  //     ctx.closePath();
  //     start = false;
  //   }
  //   e.preventDefault();
  // }

  // canvas.addEventListener("mousedown", startPosition, false);
  // canvas.addEventListener("touchstart", finishedPosition, false);
  // canvas.addEventListener("mousemove", draw, false);
  // canvas.addEventListener("touchmove", draw, false);

  // canvas.addEventListener("touchout", stop, false);
  // canvas.addEventListener("mouseup", stop, false);
  // canvas.addEventListener("mouseout", stop, false);

  let is_drawing = false;
  let is_drawing2 = true;

  if (is_drawing2) {
    canvas.addEventListener("touchstart", start, false);
    canvas.addEventListener("touchmove", draw, false);
    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);

    canvas.addEventListener("touchend", stop, false);
    canvas.addEventListener("mouseup", stop, false);
    canvas.addEventListener("mouseout", stop, false);
  } else {
    canvas.removeEventListener("touchstart", start, false);
    canvas.removeEventListener("touchmove", draw, false);
    canvas.removeEventListener("mousedown", start, false);
    canvas.removeEventListener("mousemove", draw, false);
  }

  function start(e) {
    if (player.game_start) {
      is_drawing = true;

      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      if (is_drawing) {
        if (player.ongoing === false) {
          player.timeStart();
        }
      }
      e.preventDefault();
    }
  }
  function draw(e) {
    if (!is_drawing) {
      return;
    }
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.strokeStyle = "white";
    ctx.lineWidth = "5";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    if (player.level === 1) {
      circlepoints.forEach((point) => {
        if (
          Math.abs(e.offsetX - point[0]) <= 3 &&
          Math.abs(e.offsetY - point[1]) <= 3
        ) {
          player.points.add(point);
        }
      });

      if (player.ongoing === true) {
        if (player.points.size / circlepoints.length === 1) {
          win();
        }
      } else if (player.ongoing === false && time === 0) {
        // if (player.ongoing === false) {
        if (player.points.size >= circlepoints.length * 0.8) {
          win();
        } else {
          lose();
        }
      }
      if (time === 0) return;
      perc.textContent = ` ${Math.round(
        (player.points.size / circlepoints.length) * 100
      )}%`;
      pts.textContent = `${Math.round(
        player.score + 1000 * (player.points.size / circlepoints.length)
      )}`;
    }
    if (player.level === 2) {
      starpoints.forEach((point) => {
        if (
          Math.abs(e.offsetX - point[0]) <= 3 &&
          Math.abs(e.offsetY - point[1]) <= 3
        ) {
          player.points.add(point);
        }
      });
      if (player.ongoing === true) {
        if (player.points.size / starpoints.length === 1) {
          win();
        }
      } else if (player.ongoing === false && time === 0) {
        if (player.points.size >= starpoints.length * 0.8) {
          win();
        } else {
          lose();
        }
      }
      if (time === 0) return;
      perc.textContent = ` ${Math.round(
        (player.points.size / starpoints.length) * 100
      )}%`;
      pts.textContent = `${Math.round(
        player.score + 1000 * (player.points.size / starpoints.length)
      )}`;
    }
    if (player.level === 3) {
      starcirclepoints.forEach((point) => {
        if (
          Math.abs(e.offsetX - point[0]) <= 3 &&
          Math.abs(e.offsetY - point[1]) <= 3
        ) {
          player.points.add(point);
        }
      });

      if (player.ongoing === true) {
        if (player.points.size / starcirclepoints.length === 1) {
          win();
        }
      } else if (player.ongoing === false && time === 0) {
        if (player.points.size >= starcirclepoints.length * 0.8) {
          win();
        } else {
          lose();
        }
      }
      if (time === 0) return;
      perc.textContent = ` ${Math.round(
        (player.points.size / starcirclepoints.length) * 100
      )}%`;
      pts.textContent = `${Math.round(
        player.score + 1000 * (player.points.size / starcirclepoints.length)
      )}`;
    }
    e.preventDefault();
  }

  function stop(e) {
    if (is_drawing) {
      ctx.stroke();
      ctx.closePath();
      is_drawing = false;
    }
    e.preventDefault();
  }

  clearCanvas.addEventListener("click", () => {
    // New Game
    ctx.reset();
    newCanvas();
    player.restartTime();
    player.points = new Set();
    pts.textContent = `0`;
    resultDisplay.textContent = "";
    is_drawing2 = true;
    player.game_start = false;
  });

  levelOne.addEventListener("click", () => {
    // Level 1
    ctx.reset();
    newCanvas();
    drawCircle();
    player.restartTime();
    player.level = 1;
    player.points = new Set();
    pts.textContent = `0`;
    resultDisplay.textContent = "";
    is_drawing2 = true;
    player.game_start = true;
  });

  levelTwo.addEventListener("click", () => {
    // Level 2
    ctx.reset();
    newCanvas();
    drawStar();
    player.restartTime();
    player.level = 2;
    player.points = new Set();
    pts.textContent = `0`;
    resultDisplay.textContent = "";
    is_drawing2 = true;
    player.game_start = true;
  });

  levelThree.addEventListener("click", () => {
    // Level 3
    ctx.reset();
    newCanvas();
    drawStarCircle();
    player.restartTime();
    player.level = 3;
    player.points = new Set();
    pts.textContent = `0`;
    resultDisplay.textContent = "";
    is_drawing2 = true;
    player.game_start = true;
  });

  function win() {
    resultDisplay.textContent = "You win!";
    if (player.game_start === true) {
      window.alert("CLEARED\n YOU HAVE CLEARED THE LEVEL!");
    }
    clearInterval(timer);
    ctx.reset();
    is_drawing2 = false;
    player.game_start = false;
  }

  function lose() {
    resultDisplay.textContent = "You Lose!";
    if (player.game_start === true) {
      window.alert("YOU LOSE\n TRY AGAIN NEXT TIME! ");
    }
    clearInterval(timer);
    ctx.reset();
    is_drawing2 = false;
    player.game_start = false;
  }
});
