/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\n\n\n\nconst clearCanvas = document.getElementById('newGame');\nconst levelOne = document.getElementById('one');\nconst levelTwo = document.getElementById('two');\nconst levelThree = document.getElementById('three');\nconst resultDisplay = document.getElementById('resultId');\nlet start = false; // const timerId = setInterval(updateCountdown,1000);\n\nwindow.addEventListener('load', () => {\n  let canvas = document.querySelector('#canvas');\n  let ctx = canvas.getContext('2d');\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n\n    if (painting === true) {\n      if (start === false) {\n        setInterval(updateCountdown, 1000);\n        start = true;\n      }\n    }\n\n    draw(e);\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round';\n    ctx.strokeStyle = 'white';\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n    lose(); // win();\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  clearCanvas.addEventListener('click', _scripts_heading__WEBPACK_IMPORTED_MODULE_0__.newCanvas);\n  levelOne.addEventListener('click', () => {\n    ctx.reset();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.newCanvas)();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawCircle)();\n  });\n  levelTwo.addEventListener('click', () => {\n    ctx.reset();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.newCanvas)();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar)();\n  });\n  levelThree.addEventListener('click', () => {\n    ctx.reset();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.newCanvas)();\n    (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStarCircle)();\n  });\n});\nconst timeLeft = document.getElementById('count-down');\nconst startingMinutes = 1; // change back to 3 after debugging.\n\nlet time = startingMinutes * 3; // change 3 to 60 after debugging. \n\nfunction updateCountdown() {\n  const minutes = Math.floor(time / 60);\n  let seconds = time % 60;\n  seconds = seconds < 10 ? '0' + seconds : seconds;\n  timeLeft.innerHTML = `${minutes}:${seconds}`;\n\n  if (time !== 0) {\n    time -= 1;\n  }\n} // function win() {\n//     if (time !== 0) {\n//         // if (percent >= 85) {\n//             resultDisplay.textContent = 'You win!';\n//         // }\n//     }\n// }\n\n\nfunction lose() {\n  if (time === 0) {\n    // if (percent < 85) {\n    resultDisplay.textContent = 'You Lose!'; // clearInterval(setInterval(startPosition,1000));\n    // canvas.removeEventListener('mousedown', startPosition);\n    // }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ry9CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLE1BQU0rQixlQUFlLEdBQUcsQ0FBeEIsRUFBMkI7O0FBQzNCLElBQUlDLElBQUksR0FBR0QsZUFBZSxHQUFHLENBQTdCLEVBQWdDOztBQUVoQyxTQUFTZixlQUFULEdBQTJCO0VBQ3ZCLE1BQU1pQixPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLEdBQUMsRUFBaEIsQ0FBaEI7RUFDQSxJQUFJSSxPQUFPLEdBQUdKLElBQUksR0FBRyxFQUFyQjtFQUVBSSxPQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFWLEdBQWUsTUFBTUEsT0FBckIsR0FBK0JBLE9BQXpDO0VBRUFOLFFBQVEsQ0FBQ08sU0FBVCxHQUFzQixHQUFFSixPQUFRLElBQUdHLE9BQVEsRUFBM0M7O0VBQ0EsSUFBSUosSUFBSSxLQUFLLENBQWIsRUFBZ0I7SUFDWkEsSUFBSSxJQUFJLENBQVI7RUFDSDtBQUNKLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNKLElBQVQsR0FBZ0I7RUFDWixJQUFJSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtJQUNaO0lBQ0k1QixhQUFhLENBQUNrQyxXQUFkLEdBQTRCLFdBQTVCLENBRlEsQ0FHUjtJQUNBO0lBQ0o7RUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFsZ29uYV9nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkcmF3U3RhciB9IGZyb20gXCIuL3NjcmlwdHMvaGVhZGluZ1wiO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gXCIuL3NjcmlwdHMvaGVhZGluZ1wiO1xuaW1wb3J0IHsgZHJhd1N0YXJDaXJjbGUgfSBmcm9tIFwiLi9zY3JpcHRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IG5ld0NhbnZhcyB9IGZyb20gXCIuL3NjcmlwdHMvaGVhZGluZ1wiO1xuXG5jb25zdCBjbGVhckNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdHYW1lJyk7XG5jb25zdCBsZXZlbE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbmUnKTtcbmNvbnN0IGxldmVsVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3bycpO1xuY29uc3QgbGV2ZWxUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlZScpO1xuY29uc3QgcmVzdWx0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRJZCcpO1xuXG5sZXQgc3RhcnQgPSBmYWxzZTtcbi8vIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVDb3VudGRvd24sMTAwMCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGxldCBwYWludGluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRQb3NpdGlvbihlKSB7XG4gICAgICAgIHBhaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYWludGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgZHJhdyhlKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmluaXNoZWRQb3NpdGlvbigpIHtcbiAgICAgICAgcGFpbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmF3KGUpIHtcbiAgICAgICAgaWYgKCFwYWludGluZykgcmV0dXJuO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgIGN0eC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhlLm9mZnNldFgsZS5vZmZzZXRZKTtcbiAgICAgICAgbG9zZSgpO1xuICAgICAgICAvLyB3aW4oKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRQb3NpdGlvbik7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hlZFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhdyk7IC8vZSA9PiBkcmF3KGUpKTtcbiAgICBjbGVhckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0NhbnZhcyk7XG4gICAgbGV2ZWxPbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN0eC5yZXNldCgpO1xuICAgICAgICBuZXdDYW52YXMoKTtcbiAgICAgICAgZHJhd0NpcmNsZSgpO1xuICAgIH0pO1xuICAgIGxldmVsVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjdHgucmVzZXQoKTtcbiAgICAgICAgbmV3Q2FudmFzKCk7XG4gICAgICAgIGRyYXdTdGFyKCk7XG4gICAgfSk7XG4gICAgbGV2ZWxUaHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3R4LnJlc2V0KCk7XG4gICAgICAgIG5ld0NhbnZhcygpO1xuICAgICAgICBkcmF3U3RhckNpcmNsZSgpO1xuICAgIH0pO1xufSk7XG5cbmNvbnN0IHRpbWVMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50LWRvd24nKTtcbmNvbnN0IHN0YXJ0aW5nTWludXRlcyA9IDE7IC8vIGNoYW5nZSBiYWNrIHRvIDMgYWZ0ZXIgZGVidWdnaW5nLlxubGV0IHRpbWUgPSBzdGFydGluZ01pbnV0ZXMgKiAzOyAvLyBjaGFuZ2UgMyB0byA2MCBhZnRlciBkZWJ1Z2dpbmcuIFxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZS82MCk7XG4gICAgbGV0IHNlY29uZHMgPSB0aW1lICUgNjA7XG4gICAgXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgIFxuICAgIHRpbWVMZWZ0LmlubmVySFRNTCA9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIGlmICh0aW1lICE9PSAwKSB7XG4gICAgICAgIHRpbWUgLT0gMTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHdpbigpIHtcbi8vICAgICBpZiAodGltZSAhPT0gMCkge1xuLy8gICAgICAgICAvLyBpZiAocGVyY2VudCA+PSA4NSkge1xuLy8gICAgICAgICAgICAgcmVzdWx0RGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3Ugd2luISc7XG4vLyAgICAgICAgIC8vIH1cbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIGxvc2UoKSB7XG4gICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPCA4NSkge1xuICAgICAgICAgICAgcmVzdWx0RGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3UgTG9zZSEnO1xuICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChzZXRJbnRlcnZhbChzdGFydFBvc2l0aW9uLDEwMDApKTtcbiAgICAgICAgICAgIC8vIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZHJhd1N0YXIiLCJkcmF3Q2lyY2xlIiwiZHJhd1N0YXJDaXJjbGUiLCJuZXdDYW52YXMiLCJjbGVhckNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZXZlbE9uZSIsImxldmVsVHdvIiwibGV2ZWxUaHJlZSIsInJlc3VsdERpc3BsYXkiLCJzdGFydCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInBhaW50aW5nIiwic3RhcnRQb3NpdGlvbiIsImUiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNvdW50ZG93biIsImRyYXciLCJmaW5pc2hlZFBvc2l0aW9uIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibGluZUNhcCIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdHJva2UiLCJtb3ZlVG8iLCJsb3NlIiwicmVzZXQiLCJ0aW1lTGVmdCIsInN0YXJ0aW5nTWludXRlcyIsInRpbWUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImlubmVySFRNTCIsInRleHRDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCircle\": function() { return /* binding */ drawCircle; },\n/* harmony export */   \"drawStar\": function() { return /* binding */ drawStar; },\n/* harmony export */   \"drawStarCircle\": function() { return /* binding */ drawStarCircle; },\n/* harmony export */   \"newCanvas\": function() { return /* binding */ newCanvas; }\n/* harmony export */ });\nfunction newCanvas() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.reset();\n}\nfunction drawCircle() {\n  let canvas = document.getElementById(\"canvas2\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.arc(298, 258, 120, 0, 2 * Math.PI);\n  ctx.closePath();\n  ctx.stroke();\n}\nfunction drawStar() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}\nfunction drawStarCircle() {\n  let canvas = document.getElementById(\"canvas2\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.arc(298, 258, 120, 0, 2 * Math.PI);\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FkLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FkLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0VBQ0FkLEdBQUcsQ0FBQ1UsU0FBSjtFQUNBVixHQUFHLENBQUNXLE1BQUo7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9zY3JpcHRzL2hlYWRpbmcuanM/ODE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbmV3Q2FudmFzKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMicpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHgucmVzZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMlwiKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoMjk4LCAyNTgsIDEyMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd1N0YXIoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMyJyk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygyOTgsIDE0NS4wKTtcbiAgICBjdHgubGluZVRvKDMzMSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDQwOCwgMjIzLjMpO1xuICAgIGN0eC5saW5lVG8oMzUyLCAyNzYpO1xuICAgIGN0eC5saW5lVG8oMzY1LCAzNTApO1xuICAgIGN0eC5saW5lVG8oMjk4LCAzMTUpO1xuICAgIGN0eC5saW5lVG8oMjMxLCAzNTApO1xuICAgIGN0eC5saW5lVG8oMjQ1LCAyNzYpO1xuICAgIGN0eC5saW5lVG8oMTkxLCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygyNjUsIDIxNSk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDE0NS4wKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpOyAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdTdGFyQ2lyY2xlKCkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczJcIik7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKDI5OCwgMjU4LCAxMjAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHgubW92ZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5saW5lVG8oMzMxLCAyMTUpO1xuICAgIGN0eC5saW5lVG8oNDA4LCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygzNTIsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygzNjUsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDMxNSk7XG4gICAgY3R4LmxpbmVUbygyMzEsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyNDUsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygxOTEsIDIyMy4zKTtcbiAgICBjdHgubGluZVRvKDI2NSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cbiJdLCJuYW1lcyI6WyJuZXdDYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJlc2V0IiwiZHJhd0NpcmNsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZHJhd1N0YXIiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3U3RhckNpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWxnb25hX2dhbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;