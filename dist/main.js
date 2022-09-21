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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\n // import { newCanvas } from \"./scripts/heading\";\n\nconst clearCanvas = document.getElementById('newGame');\nconst levelOne = document.getElementById('one');\nconst levelTwo = document.getElementById('two');\nconst resultDisplay = document.getElementById('resultId');\nlet start = false; // const timerId = setInterval(updateCountdown,1000);\n\nwindow.addEventListener('load', () => {\n  const canvas = document.querySelector('#canvas');\n  const ctx = canvas.getContext('2d');\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n\n    if (painting === true) {\n      if (start === false) {\n        setInterval(updateCountdown, 1000);\n        start = true;\n      }\n    }\n\n    draw(e);\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round';\n    ctx.strokeStyle = 'white';\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n    lose();\n    win();\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  clearCanvas.addEventListener('click', _scripts_heading__WEBPACK_IMPORTED_MODULE_0__.newCanvas);\n  levelOne.addEventListener('click', _scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawCircle);\n  levelTwo.addEventListener('click', _scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar);\n});\nconst timeLeft = document.getElementById('count-down');\nconst startingMinutes = 1;\nlet time = startingMinutes * 3;\n\nfunction updateCountdown() {\n  const minutes = Math.floor(time / 60);\n  let seconds = time % 60;\n  seconds = seconds < 10 ? '0' + seconds : seconds;\n  timeLeft.innerHTML = `${minutes}:${seconds}`;\n\n  if (time !== 0) {\n    time -= 1;\n  }\n}\n\nfunction win() {\n  if (time !== 0) {\n    // if (percent >= 85) {\n    resultDisplay.textContent = 'You win!'; // }\n  }\n}\n\nfunction lose() {\n  if (time === 0) {\n    // if (percent < 85) {\n    resultDisplay.textContent = 'You Lose!'; // clearInterval(setInterval(startPosition,1000));\n    // canvas.removeEventListener('mousedown', startPosition);\n    // }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtDQUVBOztBQUVBLE1BQU1HLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBakI7QUFDQSxNQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFqQjtBQUNBLE1BQU1HLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQXRCO0FBRUEsSUFBSUksS0FBSyxHQUFHLEtBQVosRUFDQTs7QUFFQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxNQUFNO0VBQ2xDLE1BQU1DLE1BQU0sR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLFNBQXZCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7O0VBRUEsU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7SUFDdEJGLFFBQVEsR0FBRyxJQUFYOztJQUNJLElBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtNQUNuQixJQUFJUCxLQUFLLEtBQUssS0FBZCxFQUFxQjtRQUNqQlUsV0FBVyxDQUFDQyxlQUFELEVBQWtCLElBQWxCLENBQVg7UUFDQVgsS0FBSyxHQUFHLElBQVI7TUFDSDtJQUNKOztJQUNMWSxJQUFJLENBQUNILENBQUQsQ0FBSjtFQUNIOztFQUVELFNBQVNJLGdCQUFULEdBQTRCO0lBQ3hCTixRQUFRLEdBQUcsS0FBWDtJQUNBRixHQUFHLENBQUNTLFNBQUo7RUFDSDs7RUFFRCxTQUFTRixJQUFULENBQWNILENBQWQsRUFBaUI7SUFDYixJQUFJLENBQUNGLFFBQUwsRUFBZTtJQUNmRixHQUFHLENBQUNVLFNBQUosR0FBZ0IsQ0FBaEI7SUFDQVYsR0FBRyxDQUFDVyxPQUFKLEdBQWMsT0FBZDtJQUNBWCxHQUFHLENBQUNZLFdBQUosR0FBa0IsT0FBbEI7SUFDQVosR0FBRyxDQUFDYSxNQUFKLENBQVdULENBQUMsQ0FBQ1UsT0FBYixFQUFzQlYsQ0FBQyxDQUFDVyxPQUF4QjtJQUNBZixHQUFHLENBQUNnQixNQUFKO0lBQ0FoQixHQUFHLENBQUNTLFNBQUo7SUFDQVQsR0FBRyxDQUFDaUIsTUFBSixDQUFXYixDQUFDLENBQUNVLE9BQWIsRUFBcUJWLENBQUMsQ0FBQ1csT0FBdkI7SUFDQUcsSUFBSTtJQUNKQyxHQUFHO0VBQ047O0VBRURyQixNQUFNLENBQUNELGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDTSxhQUFyQztFQUNBTCxNQUFNLENBQUNELGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DVyxnQkFBbkM7RUFDQVYsTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1UsSUFBckMsRUFyQ2tDLENBcUNVOztFQUM1Q2xCLFdBQVcsQ0FBQ1EsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0NWLHVEQUF0QztFQUNBSyxRQUFRLENBQUNLLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DVCx3REFBbkM7RUFDQUssUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ1gsc0RBQW5DO0FBQ0gsQ0F6Q0Q7QUEyQ0EsTUFBTWtDLFFBQVEsR0FBRzlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLE1BQU04QixlQUFlLEdBQUcsQ0FBeEI7QUFDQSxJQUFJQyxJQUFJLEdBQUdELGVBQWUsR0FBRyxDQUE3Qjs7QUFFQSxTQUFTZixlQUFULEdBQTJCO0VBQ3ZCLE1BQU1pQixPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLEdBQUMsRUFBaEIsQ0FBaEI7RUFDQSxJQUFJSSxPQUFPLEdBQUdKLElBQUksR0FBRyxFQUFyQjtFQUVBSSxPQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFWLEdBQWUsTUFBTUEsT0FBckIsR0FBK0JBLE9BQXpDO0VBRUFOLFFBQVEsQ0FBQ08sU0FBVCxHQUFzQixHQUFFSixPQUFRLElBQUdHLE9BQVEsRUFBM0M7O0VBQ0EsSUFBSUosSUFBSSxLQUFLLENBQWIsRUFBZ0I7SUFDWkEsSUFBSSxJQUFJLENBQVI7RUFDSDtBQUNKOztBQUVELFNBQVNILEdBQVQsR0FBZTtFQUNYLElBQUlHLElBQUksS0FBSyxDQUFiLEVBQWdCO0lBQ1o7SUFDSTVCLGFBQWEsQ0FBQ2tDLFdBQWQsR0FBNEIsVUFBNUIsQ0FGUSxDQUdaO0VBQ0g7QUFDSjs7QUFFRCxTQUFTVixJQUFULEdBQWdCO0VBQ1osSUFBSUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7SUFDWjtJQUNJNUIsYUFBYSxDQUFDa0MsV0FBZCxHQUE0QixXQUE1QixDQUZRLENBR1I7SUFDQTtJQUNKO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZHJhd1N0YXIsIG5ld0NhbnZhcyB9IGZyb20gXCIuL3NjcmlwdHMvaGVhZGluZ1wiO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gXCIuL3NjcmlwdHMvaGVhZGluZ1wiO1xuLy8gaW1wb3J0IHsgbmV3Q2FudmFzIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5cbmNvbnN0IGNsZWFyQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0dhbWUnKTtcbmNvbnN0IGxldmVsT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZScpO1xuY29uc3QgbGV2ZWxUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvJyk7XG5jb25zdCByZXN1bHREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdElkJyk7XG5cbmxldCBzdGFydCA9IGZhbHNlO1xuLy8gY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwxMDAwKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGxldCBwYWludGluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRQb3NpdGlvbihlKSB7XG4gICAgICAgIHBhaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYWludGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgZHJhdyhlKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmluaXNoZWRQb3NpdGlvbigpIHtcbiAgICAgICAgcGFpbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmF3KGUpIHtcbiAgICAgICAgaWYgKCFwYWludGluZykgcmV0dXJuO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgIGN0eC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhlLm9mZnNldFgsZS5vZmZzZXRZKTtcbiAgICAgICAgbG9zZSgpO1xuICAgICAgICB3aW4oKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRQb3NpdGlvbik7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hlZFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhdyk7IC8vZSA9PiBkcmF3KGUpKTtcbiAgICBjbGVhckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0NhbnZhcyk7XG4gICAgbGV2ZWxPbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkcmF3Q2lyY2xlKTtcbiAgICBsZXZlbFR3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRyYXdTdGFyKTtcbn0pO1xuXG5jb25zdCB0aW1lTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC1kb3duJyk7XG5jb25zdCBzdGFydGluZ01pbnV0ZXMgPSAxO1xubGV0IHRpbWUgPSBzdGFydGluZ01pbnV0ZXMgKiAzO1xuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZS82MCk7XG4gICAgbGV0IHNlY29uZHMgPSB0aW1lICUgNjA7XG4gICAgXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgIFxuICAgIHRpbWVMZWZ0LmlubmVySFRNTCA9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIGlmICh0aW1lICE9PSAwKSB7XG4gICAgICAgIHRpbWUgLT0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdpbigpIHtcbiAgICBpZiAodGltZSAhPT0gMCkge1xuICAgICAgICAvLyBpZiAocGVyY2VudCA+PSA4NSkge1xuICAgICAgICAgICAgcmVzdWx0RGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3Ugd2luISc7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvc2UoKSB7XG4gICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPCA4NSkge1xuICAgICAgICAgICAgcmVzdWx0RGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3UgTG9zZSEnO1xuICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChzZXRJbnRlcnZhbChzdGFydFBvc2l0aW9uLDEwMDApKTtcbiAgICAgICAgICAgIC8vIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZHJhd1N0YXIiLCJuZXdDYW52YXMiLCJkcmF3Q2lyY2xlIiwiY2xlYXJDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGV2ZWxPbmUiLCJsZXZlbFR3byIsInJlc3VsdERpc3BsYXkiLCJzdGFydCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInBhaW50aW5nIiwic3RhcnRQb3NpdGlvbiIsImUiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNvdW50ZG93biIsImRyYXciLCJmaW5pc2hlZFBvc2l0aW9uIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibGluZUNhcCIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdHJva2UiLCJtb3ZlVG8iLCJsb3NlIiwid2luIiwidGltZUxlZnQiLCJzdGFydGluZ01pbnV0ZXMiLCJ0aW1lIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCircle\": function() { return /* binding */ drawCircle; },\n/* harmony export */   \"drawStar\": function() { return /* binding */ drawStar; },\n/* harmony export */   \"newCanvas\": function() { return /* binding */ newCanvas; }\n/* harmony export */ });\nfunction newCanvas() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.reset();\n}\nfunction drawCircle() {\n  let canvas = document.getElementById(\"canvas2\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.arc(298, 258, 120, 0, 2 * Math.PI);\n  ctx.closePath();\n  ctx.stroke();\n}\nfunction drawStar() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLFNBQVQsR0FBcUI7RUFDeEIsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtFQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7RUFDQUQsR0FBRyxDQUFDRSxLQUFKO0FBQ0g7QUFFTSxTQUFTQyxVQUFULEdBQXNCO0VBQ3pCLElBQUlOLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWI7RUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0VBQ0FELEdBQUcsQ0FBQ0ksV0FBSixHQUFrQixPQUFsQjtFQUNBSixHQUFHLENBQUNLLFNBQUosR0FBZ0IsQ0FBaEI7RUFDQUwsR0FBRyxDQUFDTSxTQUFKO0VBQ0FOLEdBQUcsQ0FBQ08sR0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCLElBQUlDLElBQUksQ0FBQ0MsRUFBbkM7RUFDQVQsR0FBRyxDQUFDVSxTQUFKO0VBQ0FWLEdBQUcsQ0FBQ1csTUFBSjtBQUNIO0FBQ00sU0FBU0MsUUFBVCxHQUFvQjtFQUN2QixJQUFJZixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFiO0VBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtFQUNBRCxHQUFHLENBQUNJLFdBQUosR0FBa0IsT0FBbEI7RUFDQUosR0FBRyxDQUFDSyxTQUFKLEdBQWdCLENBQWhCO0VBQ0FMLEdBQUcsQ0FBQ00sU0FBSjtFQUNBTixHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0VBQ0FiLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixLQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FkLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FkLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQWQsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQixLQUFoQjtFQUNBZCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FkLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQWQsR0FBRyxDQUFDVSxTQUFKO0VBQ0FWLEdBQUcsQ0FBQ1csTUFBSjtBQUVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFsZ29uYV9nYW1lLy4vc3JjL3NjcmlwdHMvaGVhZGluZy5qcz84MTRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBuZXdDYW52YXMoKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMyJyk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5yZXNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZSgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMyXCIpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYygyOTgsIDI1OCwgMTIwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RhcigpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5saW5lVG8oMzMxLCAyMTUpO1xuICAgIGN0eC5saW5lVG8oNDA4LCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygzNTIsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygzNjUsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDMxNSk7XG4gICAgY3R4LmxpbmVUbygyMzEsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyNDUsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygxOTEsIDIyMy4zKTtcbiAgICBjdHgubGluZVRvKDI2NSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7IFxuICAgIFxufVxuXG5cbiJdLCJuYW1lcyI6WyJuZXdDYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJlc2V0IiwiZHJhd0NpcmNsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZHJhd1N0YXIiLCJtb3ZlVG8iLCJsaW5lVG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

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