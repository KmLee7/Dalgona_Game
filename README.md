# Dalgona Game (Ppopgi)
### Live Link - https://kmlee7.github.io/Dalgona_Game/
#### Dalgona Game is a 2D game where you have to cut out the carved symbols(shape) on the dalgona candy. One of the games I used to play in Korea as a young kid and it became more known after it was played in Squid Game (Korean Netflix Drama). Dalgona game will have variety of difficulties ('normal', 'hard' and  'im_possible'(depending if I can make the shape)). The game will be played with just a mouse and you can cut the out carved lines by clicking on your left click on your mouse. It will have certain amount of percentage you have to complete in certain amount time. This game aims to replicate an experience of Ppopgi that was played on Squid Game.

![wireframe](https://i.imgur.com/W8eh7Nk.jpg)

# Wireframe:
![wireframe](https://i.imgur.com/soIuyeG.png)

# Instructions:
* Your goal is to trace through the curved inline (black line) of the shape depending on level. Timer will start when you click on the game. Highest point you can achieve is 1000. Good Luck!



# Functionality & MVPs:
### In the Game,
* Users will be see Instructions, How-To-Play and About the Game by clicking.
* Mouse will start to draw (when the user clicks and holds on to the left click) when the mouse pointer is near the curved in line. Game will observe the difference between shape coordinates (x,y) and the mouse coordinates (x,y). Had to pin point the x and y of the shape and created an array of coordinates so it's not 100% accurate. and compared the mouse (when clicking) coordinates.

```export let starpoints = [
    [298, 144],
    [290, 167],
    [281, 182],
    [266, 214],
    [242, 218],
    [218, 221],
    [193, 224],
    [209, 242],
    [227, 259],
    [245, 277],
    [241, 300],
    [236, 326],
    [232, 350],
    [252, 339],
    [275, 328],
    [300, 315],
    [322, 328],
    [347, 341],
    [367, 353],
    [363, 331],
    [359, 310],
    [352, 279],
    [368, 262],
    [387, 243],
    [409, 224],
    [382, 219],
    [358, 218],
    [333, 215],
    [310, 149],
    [309, 169]
  ];
  
  export let circlepoints = [
    [293, 139],
    [262, 145],
    [231, 160],
    [205, 184],
    [187, 215],
    [178, 254],
    [183, 292],
    [200, 327],
    [224, 352],
    [256, 371],
    [288, 379],
    [321, 375],
    [353, 365],
    [378, 349],
    [399, 324],
    [414, 291],
    [418, 255],
    [412, 219],
    [398, 192],
    [374, 165],
    [347, 149],
    [320, 141]
  ];
  ```
  
  ```
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
```

* Users will be able to select on levels that they want to play.
```
levelOne.addEventListener('click', () => { // Level 1
        ctx.reset();
        newCanvas();
        drawCircle();
        player.restartTime();
        player.level = 1;
        player.points = new Set();
    });
```
* Users will be able to start a new game after they have either lose or win that game.
```
clearCanvas.addEventListener('click', () => { // New Game
        ctx.reset();
        newCanvas();
        player.restartTime();
        player.points = new Set();
    });
```

# Technologies & Libraries, APIs:
* APIs
  * https://developer.mozilla.org/en-US/docs/Web/API
* Vanilla JavaScript

# Implementation & Timeline:
* Friday Afternoon & Weekend:
  * Basic Outline of the game.
  * Brainstorming of the javascript logic.
  * Getting the basic html outline of the game set up.
  * Figuring out how I'll create the shapes in html 5 canvas.

* Monday:
  * Implement on how to have a background picture of Dalgona on top of canvas shape lines
  * Implement on how to calculate the percentage of completion based on if the user went over the canvas shape curved lines.
  * Implement on how to set up a timer and how it's going to render game-over page when timer hits 0:00 or stops the timer when the user wins.
  * Implement on how to calculate the score based on percentage of completion and how much time is left.

* Tuesday:
  * Focus on Dalgona shape level canvas and users mouse coordination.

* Wednesday:
  * Dedicate this day on putting all the pieces together.
  * After focus on designing the game page.
  * Play and Debug.

* Thursday:
  * Deploy to Github pages.


# Future Implementations
* Change the hitpoints to create image data of the shape and compare the mouse coordinates to have more accurate percentage.
* Add BGM music on and off switch
* Add Pause and Resume Button.
* Change canvas image to drawing of Dalgona instead.
* Add harder level

# Crediting and Citing
* Dalgona Candy image - https://120pro.tistory.com/107
* Squid Game image - https://www.netflix.com/
