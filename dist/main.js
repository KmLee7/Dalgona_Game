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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\nlet start = false;\nwindow.addEventListener('load', () => {\n  const canvas = document.querySelector('#canvas');\n  const ctx = canvas.getContext('2d');\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n\n    if (painting === true) {\n      if (start === false) {\n        setInterval(updateCountdown, 1000);\n        start = true;\n      }\n    }\n\n    draw(e);\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round'; // console.log(e)\n\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar)();\n});\nconst timeLeft = document.getElementById('count-down');\nconst startingMinutes = 3;\nlet time = startingMinutes * 60; // setInterval(updateCountdown, 1000); \n\nfunction updateCountdown() {\n  const minutes = Math.floor(time / 60);\n  let seconds = time % 60;\n  seconds = seconds < 10 ? '0' + seconds : seconds;\n  timeLeft.innerHTML = `${minutes}:${seconds}`;\n\n  if (time !== 0) {\n    time -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUVBLElBQUlDLEtBQUssR0FBRyxLQUFaO0FBRUFDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtFQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0VBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUVBLElBQUlDLFFBQVEsR0FBRyxLQUFmOztFQUNBLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0lBQ3RCRixRQUFRLEdBQUcsSUFBWDs7SUFDSSxJQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7TUFDbkIsSUFBSVIsS0FBSyxLQUFLLEtBQWQsRUFBcUI7UUFDakJXLFdBQVcsQ0FBQ0MsZUFBRCxFQUFrQixJQUFsQixDQUFYO1FBQ0FaLEtBQUssR0FBRyxJQUFSO01BQ0g7SUFDSjs7SUFDTGEsSUFBSSxDQUFDSCxDQUFELENBQUo7RUFDSDs7RUFFRCxTQUFTSSxnQkFBVCxHQUE0QjtJQUN4Qk4sUUFBUSxHQUFHLEtBQVg7SUFDQUYsR0FBRyxDQUFDUyxTQUFKO0VBQ0g7O0VBRUQsU0FBU0YsSUFBVCxDQUFjSCxDQUFkLEVBQWlCO0lBQ2IsSUFBSSxDQUFDRixRQUFMLEVBQWU7SUFDZkYsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLENBQWhCO0lBQ0FWLEdBQUcsQ0FBQ1csT0FBSixHQUFjLE9BQWQsQ0FIYSxDQUliOztJQUNBWCxHQUFHLENBQUNZLE1BQUosQ0FBV1IsQ0FBQyxDQUFDUyxPQUFiLEVBQXNCVCxDQUFDLENBQUNVLE9BQXhCO0lBQ0FkLEdBQUcsQ0FBQ2UsTUFBSjtJQUNBZixHQUFHLENBQUNTLFNBQUo7SUFDQVQsR0FBRyxDQUFDZ0IsTUFBSixDQUFXWixDQUFDLENBQUNTLE9BQWIsRUFBcUJULENBQUMsQ0FBQ1UsT0FBdkI7RUFDSDs7RUFFRGpCLE1BQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNPLGFBQXJDO0VBQ0FOLE1BQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNZLGdCQUFuQztFQUNBWCxNQUFNLENBQUNELGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDVyxJQUFyQyxFQWxDa0MsQ0FrQ1U7O0VBQzVDZCwwREFBUTtBQUNYLENBcENEO0FBdUNBLE1BQU13QixRQUFRLEdBQUduQixRQUFRLENBQUNvQixjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQXhCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxlQUFlLEdBQUcsRUFBN0IsRUFFQTs7QUFFQSxTQUFTYixlQUFULEdBQTJCO0VBQ3ZCLE1BQU1lLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksR0FBQyxFQUFoQixDQUFoQjtFQUNBLElBQUlJLE9BQU8sR0FBR0osSUFBSSxHQUFHLEVBQXJCO0VBRUFJLE9BQU8sR0FBR0EsT0FBTyxHQUFHLEVBQVYsR0FBZSxNQUFNQSxPQUFyQixHQUErQkEsT0FBekM7RUFHQVAsUUFBUSxDQUFDUSxTQUFULEdBQXNCLEdBQUVKLE9BQVEsSUFBR0csT0FBUSxFQUEzQzs7RUFDQSxJQUFJSixJQUFJLEtBQUssQ0FBYixFQUFnQjtJQUNaQSxJQUFJLElBQUksQ0FBUjtFQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWxnb25hX2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRyYXdTdGFyIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5cbmxldCBzdGFydCA9IGZhbHNlO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgXG4gICAgbGV0IHBhaW50aW5nID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc3RhcnRQb3NpdGlvbihlKSB7XG4gICAgICAgIHBhaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYWludGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgZHJhdyhlKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmluaXNoZWRQb3NpdGlvbigpIHtcbiAgICAgICAgcGFpbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmF3KGUpIHtcbiAgICAgICAgaWYgKCFwYWludGluZykgcmV0dXJuO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICBjdHgubGluZVRvKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZS5vZmZzZXRYLGUub2Zmc2V0WSk7XG4gICAgfVxuICAgIFxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaGVkUG9zaXRpb24pO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KTsgLy9lID0+IGRyYXcoZSkpO1xuICAgIGRyYXdTdGFyKCk7XG59KTtcblxuXG5jb25zdCB0aW1lTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC1kb3duJyk7XG5jb25zdCBzdGFydGluZ01pbnV0ZXMgPSAzO1xubGV0IHRpbWUgPSBzdGFydGluZ01pbnV0ZXMgKiA2MDtcblxuLy8gc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKTsgXG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZG93bigpIHtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lLzYwKTtcbiAgICBsZXQgc2Vjb25kcyA9IHRpbWUgJSA2MDtcbiAgICBcbiAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHM7XG4gICAgXG5cbiAgICB0aW1lTGVmdC5pbm5lckhUTUwgPSBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICBpZiAodGltZSAhPT0gMCkge1xuICAgICAgICB0aW1lIC09IDE7XG4gICAgfVxuICAgIFxufSJdLCJuYW1lcyI6WyJkcmF3U3RhciIsInN0YXJ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJwYWludGluZyIsInN0YXJ0UG9zaXRpb24iLCJlIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVDb3VudGRvd24iLCJkcmF3IiwiZmluaXNoZWRQb3NpdGlvbiIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lVG8iLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0cm9rZSIsIm1vdmVUbyIsInRpbWVMZWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydGluZ01pbnV0ZXMiLCJ0aW1lIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawStar\": function() { return /* binding */ drawStar; }\n/* harmony export */ });\nfunction drawStar() {\n  let canvas = document.getElementById('canvas2');\n  let ctx = canvas.getContext('2d');\n  ctx.strokeStyle = \"white\";\n  ctx.beginPath();\n  ctx.moveTo(298, 145.0);\n  ctx.lineTo(331, 215);\n  ctx.lineTo(408, 223.3);\n  ctx.lineTo(352, 276);\n  ctx.lineTo(365, 350);\n  ctx.lineTo(298, 315);\n  ctx.lineTo(231, 350);\n  ctx.lineTo(245, 276);\n  ctx.lineTo(191, 223.3);\n  ctx.lineTo(265, 215);\n  ctx.lineTo(298, 145.0);\n  ctx.closePath();\n  ctx.stroke();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxTQUFTQSxRQUFULEdBQW9CO0VBQ3ZCLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWI7RUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0VBQ0FELEdBQUcsQ0FBQ0UsV0FBSixHQUFrQixPQUFsQjtFQUNBRixHQUFHLENBQUNHLFNBQUo7RUFDQUgsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQixLQUFoQjtFQUNBSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0VBQ0FMLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0IsS0FBaEI7RUFDQUwsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUNBTCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0VBQ0FMLEdBQUcsQ0FBQ00sU0FBSjtFQUNBTixHQUFHLENBQUNPLE1BQUo7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9zY3JpcHRzL2hlYWRpbmcuanM/ODE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RhcigpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5saW5lVG8oMzMxLCAyMTUpO1xuICAgIGN0eC5saW5lVG8oNDA4LCAyMjMuMyk7XG4gICAgY3R4LmxpbmVUbygzNTIsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygzNjUsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyOTgsIDMxNSk7XG4gICAgY3R4LmxpbmVUbygyMzEsIDM1MCk7XG4gICAgY3R4LmxpbmVUbygyNDUsIDI3Nik7XG4gICAgY3R4LmxpbmVUbygxOTEsIDIyMy4zKTtcbiAgICBjdHgubGluZVRvKDI2NSwgMjE1KTtcbiAgICBjdHgubGluZVRvKDI5OCwgMTQ1LjApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG59XG5cblxuIl0sIm5hbWVzIjpbImRyYXdTdGFyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

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