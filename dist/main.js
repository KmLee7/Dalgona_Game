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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n// const Heading = require('./scripts/heading');\n // document.addEventListener('DOMContentLoaded', () => {\n//     const canvas = document.getElementById('canvas');\n//     const heading = new Heading('Hey Gamers!!');\n//     canvas.innerHTML = heading.heading;\n// })\n\nwindow.addEventListener('load', () => {\n  const canvas = document.querySelector('#canvas');\n  const ctx = canvas.getContext('2d'); // canvas.height = window.innerHeight;\n  // canvas.width = window.innerWidth;\n\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n    draw(e);\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round';\n    console.log(e);\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtDQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtFQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0VBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDQUZrQyxDQUlsQztFQUNBOztFQUNBLElBQUlDLFFBQVEsR0FBRyxLQUFmOztFQUdBLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0lBQ3RCRixRQUFRLEdBQUcsSUFBWDtJQUNBRyxJQUFJLENBQUNELENBQUQsQ0FBSjtFQUNIOztFQUVELFNBQVNFLGdCQUFULEdBQTRCO0lBQ3hCSixRQUFRLEdBQUcsS0FBWDtJQUNBRixHQUFHLENBQUNPLFNBQUo7RUFDSDs7RUFFRCxTQUFTRixJQUFULENBQWNELENBQWQsRUFBaUI7SUFDYixJQUFJLENBQUNGLFFBQUwsRUFBZTtJQUNmRixHQUFHLENBQUNRLFNBQUosR0FBZ0IsQ0FBaEI7SUFDQVIsR0FBRyxDQUFDUyxPQUFKLEdBQWMsT0FBZDtJQUNSQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsQ0FBWjtJQUNRSixHQUFHLENBQUNZLE1BQUosQ0FBV1IsQ0FBQyxDQUFDUyxPQUFiLEVBQXNCVCxDQUFDLENBQUNVLE9BQXhCO0lBQ0FkLEdBQUcsQ0FBQ2UsTUFBSjtJQUNBZixHQUFHLENBQUNPLFNBQUo7SUFDQVAsR0FBRyxDQUFDZ0IsTUFBSixDQUFXWixDQUFDLENBQUNTLE9BQWIsRUFBcUJULENBQUMsQ0FBQ1UsT0FBdkI7RUFDSDs7RUFFRGpCLE1BQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNPLGFBQXJDO0VBQ0FOLE1BQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNVLGdCQUFuQztFQUNBVCxNQUFNLENBQUNELGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDUyxJQUFyQyxFQWhDa0MsQ0FnQ1U7O0VBQzVDWCwwREFBUTtBQUNYLENBbENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFsZ29uYV9nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgSGVhZGluZyA9IHJlcXVpcmUoJy4vc2NyaXB0cy9oZWFkaW5nJyk7XG5cbmltcG9ydCB7IGRyYXdTdGFyIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gICAgIGNvbnN0IGhlYWRpbmcgPSBuZXcgSGVhZGluZygnSGV5IEdhbWVycyEhJyk7XG5cbi8vICAgICBjYW52YXMuaW5uZXJIVE1MID0gaGVhZGluZy5oZWFkaW5nO1xuLy8gfSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgcGFpbnRpbmcgPSBmYWxzZTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIHN0YXJ0UG9zaXRpb24oZSkge1xuICAgICAgICBwYWludGluZyA9IHRydWU7XG4gICAgICAgIGRyYXcoZSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGZpbmlzaGVkUG9zaXRpb24oKSB7XG4gICAgICAgIHBhaW50aW5nID0gZmFsc2U7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhdyhlKSB7XG4gICAgICAgIGlmICghcGFpbnRpbmcpIHJldHVybjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbmNvbnNvbGUubG9nKGUpXG4gICAgICAgIGN0eC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhlLm9mZnNldFgsZS5vZmZzZXRZKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRQb3NpdGlvbik7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hlZFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhdyk7IC8vZSA9PiBkcmF3KGUpKTtcbiAgICBkcmF3U3RhcigpO1xufSk7XG4iXSwibmFtZXMiOlsiZHJhd1N0YXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInBhaW50aW5nIiwic3RhcnRQb3NpdGlvbiIsImUiLCJkcmF3IiwiZmluaXNoZWRQb3NpdGlvbiIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJjb25zb2xlIiwibG9nIiwibGluZVRvIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdHJva2UiLCJtb3ZlVG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawStar\": function() { return /* binding */ drawStar; }\n/* harmony export */ });\nfunction drawStar() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.strokeStyle = \"white\";\n  ctx.beginPath();\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxTQUFTQSxRQUFULEdBQW9CO0VBQ3ZCLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWI7RUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0VBQ0FELEdBQUcsQ0FBQ0UsV0FBSixHQUFrQixPQUFsQjtFQUNBRixHQUFHLENBQUNHLFNBQUo7RUFDQUgsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQixLQUFoQjtFQUNBSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0VBQ0FMLEdBQUcsQ0FBQ00sU0FBSjtFQUNBTixHQUFHLENBQUNPLE1BQUo7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9zY3JpcHRzL2hlYWRpbmcuanM/ODE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RhcigpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5saW5lVG8oMzMxLCAyMTUpO1xuICAgIGN0eC5saW5lVG8oNDA4LCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygzNTIsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygzNjUsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDMxNSk7XG4gICAgY3R4LmxpbmVUbygyMzEsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyNDUsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygxOTEsIDIyMy4zKTtcbiAgICBjdHgubGluZVRvKDI2NSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG59XG4iXSwibmFtZXMiOlsiZHJhd1N0YXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

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