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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\n\nlet start = false;\nwindow.addEventListener('load', () => {\n  const canvas = document.querySelector('#canvas');\n  const ctx = canvas.getContext('2d');\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n\n    if (painting === true) {\n      if (start === false) {\n        setInterval(updateCountdown, 1000);\n        start = true;\n      }\n    }\n\n    draw(e);\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round'; // console.log(e)\n\n    ctx.strokeStyle = 'white';\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawCircle)();\n  (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar)();\n});\nconst timeLeft = document.getElementById('count-down');\nconst startingMinutes = 3;\nlet time = startingMinutes * 60; // setInterval(updateCountdown, 1000); \n\nfunction updateCountdown() {\n  const minutes = Math.floor(time / 60);\n  let seconds = time % 60;\n  seconds = seconds < 10 ? '0' + seconds : seconds;\n  timeLeft.innerHTML = `${minutes}:${seconds}`;\n\n  if (time !== 0) {\n    time -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0EsSUFBSUUsS0FBSyxHQUFHLEtBQVo7QUFFQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxNQUFNO0VBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7O0VBQ0EsU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7SUFDdEJGLFFBQVEsR0FBRyxJQUFYOztJQUNJLElBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtNQUNuQixJQUFJUixLQUFLLEtBQUssS0FBZCxFQUFxQjtRQUNqQlcsV0FBVyxDQUFDQyxlQUFELEVBQWtCLElBQWxCLENBQVg7UUFDQVosS0FBSyxHQUFHLElBQVI7TUFDSDtJQUNKOztJQUNMYSxJQUFJLENBQUNILENBQUQsQ0FBSjtFQUNIOztFQUVELFNBQVNJLGdCQUFULEdBQTRCO0lBQ3hCTixRQUFRLEdBQUcsS0FBWDtJQUNBRixHQUFHLENBQUNTLFNBQUo7RUFDSDs7RUFFRCxTQUFTRixJQUFULENBQWNILENBQWQsRUFBaUI7SUFDYixJQUFJLENBQUNGLFFBQUwsRUFBZTtJQUNmRixHQUFHLENBQUNVLFNBQUosR0FBZ0IsQ0FBaEI7SUFDQVYsR0FBRyxDQUFDVyxPQUFKLEdBQWMsT0FBZCxDQUhhLENBSWI7O0lBQ0FYLEdBQUcsQ0FBQ1ksV0FBSixHQUFrQixPQUFsQjtJQUNBWixHQUFHLENBQUNhLE1BQUosQ0FBV1QsQ0FBQyxDQUFDVSxPQUFiLEVBQXNCVixDQUFDLENBQUNXLE9BQXhCO0lBQ0FmLEdBQUcsQ0FBQ2dCLE1BQUo7SUFDQWhCLEdBQUcsQ0FBQ1MsU0FBSjtJQUNBVCxHQUFHLENBQUNpQixNQUFKLENBQVdiLENBQUMsQ0FBQ1UsT0FBYixFQUFxQlYsQ0FBQyxDQUFDVyxPQUF2QjtFQUNIOztFQUVEbEIsTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ08sYUFBckM7RUFDQU4sTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ1ksZ0JBQW5DO0VBQ0FYLE1BQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNXLElBQXJDLEVBbkNrQyxDQW1DVTs7RUFDNUNkLDREQUFVO0VBQ1ZELDBEQUFRO0FBQ1gsQ0F0Q0Q7QUF5Q0EsTUFBTTBCLFFBQVEsR0FBR3BCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsQ0FBeEI7QUFDQSxJQUFJQyxJQUFJLEdBQUdELGVBQWUsR0FBRyxFQUE3QixFQUVBOztBQUVBLFNBQVNkLGVBQVQsR0FBMkI7RUFDdkIsTUFBTWdCLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksR0FBQyxFQUFoQixDQUFoQjtFQUNBLElBQUlJLE9BQU8sR0FBR0osSUFBSSxHQUFHLEVBQXJCO0VBRUFJLE9BQU8sR0FBR0EsT0FBTyxHQUFHLEVBQVYsR0FBZSxNQUFNQSxPQUFyQixHQUErQkEsT0FBekM7RUFHQVAsUUFBUSxDQUFDUSxTQUFULEdBQXNCLEdBQUVKLE9BQVEsSUFBR0csT0FBUSxFQUEzQzs7RUFDQSxJQUFJSixJQUFJLEtBQUssQ0FBYixFQUFnQjtJQUNaQSxJQUFJLElBQUksQ0FBUjtFQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWxnb25hX2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRyYXdTdGFyIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5sZXQgc3RhcnQgPSBmYWxzZTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGxldCBwYWludGluZyA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHN0YXJ0UG9zaXRpb24oZSkge1xuICAgICAgICBwYWludGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGFpbnRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGRyYXcoZSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGZpbmlzaGVkUG9zaXRpb24oKSB7XG4gICAgICAgIHBhaW50aW5nID0gZmFsc2U7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhdyhlKSB7XG4gICAgICAgIGlmICghcGFpbnRpbmcpIHJldHVybjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJ1xuICAgICAgICBjdHgubGluZVRvKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZS5vZmZzZXRYLGUub2Zmc2V0WSk7XG4gICAgfVxuICAgIFxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaGVkUG9zaXRpb24pO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KTsgLy9lID0+IGRyYXcoZSkpO1xuICAgIGRyYXdDaXJjbGUoKTtcbiAgICBkcmF3U3RhcigpO1xufSk7XG5cblxuY29uc3QgdGltZUxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQtZG93bicpO1xuY29uc3Qgc3RhcnRpbmdNaW51dGVzID0gMztcbmxldCB0aW1lID0gc3RhcnRpbmdNaW51dGVzICogNjA7XG5cbi8vIHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgMTAwMCk7IFxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZS82MCk7XG4gICAgbGV0IHNlY29uZHMgPSB0aW1lICUgNjA7XG4gICAgXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgIFxuXG4gICAgdGltZUxlZnQuaW5uZXJIVE1MID0gYCR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgaWYgKHRpbWUgIT09IDApIHtcbiAgICAgICAgdGltZSAtPSAxO1xuICAgIH1cbiAgICBcbn0iXSwibmFtZXMiOlsiZHJhd1N0YXIiLCJkcmF3Q2lyY2xlIiwic3RhcnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInBhaW50aW5nIiwic3RhcnRQb3NpdGlvbiIsImUiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNvdW50ZG93biIsImRyYXciLCJmaW5pc2hlZFBvc2l0aW9uIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibGluZUNhcCIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdHJva2UiLCJtb3ZlVG8iLCJ0aW1lTGVmdCIsImdldEVsZW1lbnRCeUlkIiwic3RhcnRpbmdNaW51dGVzIiwidGltZSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCircle\": function() { return /* binding */ drawCircle; },\n/* harmony export */   \"drawStar\": function() { return /* binding */ drawStar; }\n/* harmony export */ });\nfunction drawCircle() {\n  var canvas = document.getElementById(\"canvas2\");\n  var ctx = canvas.getContext(\"2d\");\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.arc(298, 255, 120, 0, 2 * Math.PI);\n  ctx.closePath();\n  ctx.stroke();\n}\nfunction drawStar() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n  ctx.beginPath();\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsVUFBVCxHQUFzQjtFQUN6QixJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFiO0VBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtFQUNBRCxHQUFHLENBQUNFLFdBQUosR0FBa0IsT0FBbEI7RUFDQUYsR0FBRyxDQUFDRyxTQUFKLEdBQWdCLENBQWhCO0VBQ0FILEdBQUcsQ0FBQ0ksU0FBSjtFQUNBSixHQUFHLENBQUNLLEdBQUosQ0FBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixDQUF2QixFQUEwQixJQUFJQyxJQUFJLENBQUNDLEVBQW5DO0VBQ0FQLEdBQUcsQ0FBQ1EsU0FBSjtFQUNBUixHQUFHLENBQUNTLE1BQUo7QUFDSDtBQUNNLFNBQVNDLFFBQVQsR0FBb0I7RUFDdkIsSUFBSWIsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtFQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7RUFDQUQsR0FBRyxDQUFDRSxXQUFKLEdBQWtCLE9BQWxCO0VBQ0FGLEdBQUcsQ0FBQ0csU0FBSixHQUFnQixDQUFoQjtFQUNBSCxHQUFHLENBQUNJLFNBQUo7RUFDQUosR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQixLQUFoQjtFQUNBWCxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FaLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQVosR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBWixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FaLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQVosR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBWixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FaLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQVosR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBWixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0VBQ0FaLEdBQUcsQ0FBQ1EsU0FBSjtFQUNBUixHQUFHLENBQUNTLE1BQUo7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9zY3JpcHRzL2hlYWRpbmcuanM/ODE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZSgpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMyXCIpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYygyOTgsIDI1NSwgMTIwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RhcigpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5saW5lVG8oMzMxLCAyMTUpO1xuICAgIGN0eC5saW5lVG8oNDA4LCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygzNTIsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygzNjUsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDMxNSk7XG4gICAgY3R4LmxpbmVUbygyMzEsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyNDUsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygxOTEsIDIyMy4zKTtcbiAgICBjdHgubGluZVRvKDI2NSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG59XG5cblxuIl0sIm5hbWVzIjpbImRyYXdDaXJjbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZHJhd1N0YXIiLCJtb3ZlVG8iLCJsaW5lVG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

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