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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\nwindow.addEventListener('load', () => {\n  const canvas = document.querySelector('#canvas');\n  const ctx = canvas.getContext('2d');\n  let painting = false;\n\n  function startPosition(e) {\n    painting = true;\n    draw(e);\n    setInterval(updateCountdown, 1000); // NOT CORRECT\n  }\n\n  function finishedPosition() {\n    painting = false;\n    ctx.beginPath();\n  }\n\n  function draw(e) {\n    if (!painting) return;\n    ctx.lineWidth = 5;\n    ctx.lineCap = 'round';\n    console.log(e);\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(e.offsetX, e.offsetY);\n  }\n\n  canvas.addEventListener('mousedown', startPosition);\n  canvas.addEventListener('mouseup', finishedPosition);\n  canvas.addEventListener('mousemove', draw); //e => draw(e));\n\n  (0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__.drawStar)();\n});\nconst timeLeft = document.getElementById('count-down');\nconst startingMinutes = 3;\nlet time = startingMinutes * 60;\n\nfunction updateCountdown() {\n  const minutes = Math.floor(time / 60);\n  let seconds = time % 60;\n  seconds = seconds < 10 ? '0' + seconds : seconds;\n  timeLeft.innerHTML = `${minutes}:${seconds}`;\n\n  if (time === 0) {} else {\n    time -= 1;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUdBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU07RUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtFQUNBLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7RUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjs7RUFFQSxTQUFTQyxhQUFULENBQXVCQyxDQUF2QixFQUEwQjtJQUN0QkYsUUFBUSxHQUFHLElBQVg7SUFDQUcsSUFBSSxDQUFDRCxDQUFELENBQUo7SUFDQUUsV0FBVyxDQUFDQyxlQUFELEVBQWtCLElBQWxCLENBQVgsQ0FIc0IsQ0FHYztFQUV2Qzs7RUFFRCxTQUFTQyxnQkFBVCxHQUE0QjtJQUN4Qk4sUUFBUSxHQUFHLEtBQVg7SUFDQUYsR0FBRyxDQUFDUyxTQUFKO0VBQ0g7O0VBRUQsU0FBU0osSUFBVCxDQUFjRCxDQUFkLEVBQWlCO0lBQ2IsSUFBSSxDQUFDRixRQUFMLEVBQWU7SUFDZkYsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLENBQWhCO0lBQ0FWLEdBQUcsQ0FBQ1csT0FBSixHQUFjLE9BQWQ7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULENBQVo7SUFDQUosR0FBRyxDQUFDYyxNQUFKLENBQVdWLENBQUMsQ0FBQ1csT0FBYixFQUFzQlgsQ0FBQyxDQUFDWSxPQUF4QjtJQUNBaEIsR0FBRyxDQUFDaUIsTUFBSjtJQUNBakIsR0FBRyxDQUFDUyxTQUFKO0lBQ0FULEdBQUcsQ0FBQ2tCLE1BQUosQ0FBV2QsQ0FBQyxDQUFDVyxPQUFiLEVBQXFCWCxDQUFDLENBQUNZLE9BQXZCO0VBQ0g7O0VBRURuQixNQUFNLENBQUNELGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDTyxhQUFyQztFQUNBTixNQUFNLENBQUNELGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DWSxnQkFBbkM7RUFDQVgsTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1MsSUFBckMsRUEvQmtDLENBK0JVOztFQUM1Q1gsMERBQVE7QUFDWCxDQWpDRDtBQW9DQSxNQUFNeUIsUUFBUSxHQUFHckIsUUFBUSxDQUFDc0IsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxDQUF4QjtBQUNBLElBQUlDLElBQUksR0FBR0QsZUFBZSxHQUFHLEVBQTdCOztBQUVBLFNBQVNkLGVBQVQsR0FBMkI7RUFDdkIsTUFBTWdCLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksR0FBQyxFQUFoQixDQUFoQjtFQUNBLElBQUlJLE9BQU8sR0FBR0osSUFBSSxHQUFHLEVBQXJCO0VBRUFJLE9BQU8sR0FBR0EsT0FBTyxHQUFHLEVBQVYsR0FBZSxNQUFNQSxPQUFyQixHQUErQkEsT0FBekM7RUFFQVAsUUFBUSxDQUFDUSxTQUFULEdBQXNCLEdBQUVKLE9BQVEsSUFBR0csT0FBUSxFQUEzQzs7RUFDQSxJQUFJSixJQUFJLEtBQUssQ0FBYixFQUFnQixDQUVmLENBRkQsTUFFTztJQUNIQSxJQUFJLElBQUksQ0FBUjtFQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWxnb25hX2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRyYXdTdGFyIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWFkaW5nXCI7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGxldCBwYWludGluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRQb3NpdGlvbihlKSB7XG4gICAgICAgIHBhaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhdyhlKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKTsgLy8gTk9UIENPUlJFQ1RcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmluaXNoZWRQb3NpdGlvbigpIHtcbiAgICAgICAgcGFpbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmF3KGUpIHtcbiAgICAgICAgaWYgKCFwYWludGluZykgcmV0dXJuO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBjdHgubGluZVRvKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZS5vZmZzZXRYLGUub2Zmc2V0WSk7XG4gICAgfVxuICAgIFxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFBvc2l0aW9uKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaGVkUG9zaXRpb24pO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KTsgLy9lID0+IGRyYXcoZSkpO1xuICAgIGRyYXdTdGFyKCk7XG59KTtcblxuXG5jb25zdCB0aW1lTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC1kb3duJyk7XG5jb25zdCBzdGFydGluZ01pbnV0ZXMgPSAzO1xubGV0IHRpbWUgPSBzdGFydGluZ01pbnV0ZXMgKiA2MDtcblxuZnVuY3Rpb24gdXBkYXRlQ291bnRkb3duKCkge1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUvNjApO1xuICAgIGxldCBzZWNvbmRzID0gdGltZSAlIDYwO1xuICAgIFxuICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICBcbiAgICB0aW1lTGVmdC5pbm5lckhUTUwgPSBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lIC09IDE7XG4gICAgfVxuICAgIFxufSJdLCJuYW1lcyI6WyJkcmF3U3RhciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwicGFpbnRpbmciLCJzdGFydFBvc2l0aW9uIiwiZSIsImRyYXciLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNvdW50ZG93biIsImZpbmlzaGVkUG9zaXRpb24iLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwiY29uc29sZSIsImxvZyIsImxpbmVUbyIsIm9mZnNldFgiLCJvZmZzZXRZIiwic3Ryb2tlIiwibW92ZVRvIiwidGltZUxlZnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YXJ0aW5nTWludXRlcyIsInRpbWUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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