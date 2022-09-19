/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Heading = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('canvas');\n  const heading = new Heading('Hey Gamers!!');\n  canvas.innerHTML = heading.heading;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7RUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSU4sT0FBSixDQUFZLGNBQVosQ0FBaEI7RUFFQUksTUFBTSxDQUFDRyxTQUFQLEdBQW1CRCxPQUFPLENBQUNBLE9BQTNCO0FBQ0gsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbGdvbmFfZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRpbmcgPSByZXF1aXJlKCcuL3NjcmlwdHMvaGVhZGluZycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gbmV3IEhlYWRpbmcoJ0hleSBHYW1lcnMhIScpO1xuXG4gICAgY2FudmFzLmlubmVySFRNTCA9IGhlYWRpbmcuaGVhZGluZztcbn0pIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkaW5nIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(module) {

eval("function Heading(text) {\n  this.text = text;\n  this.heading = '<h2>$(this.text)</h2>';\n}\n\nmodule.exports = Heading;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibmFtZXMiOlsiSGVhZGluZyIsInRleHQiLCJoZWFkaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFsZ29uYV9nYW1lLy4vc3JjL3NjcmlwdHMvaGVhZGluZy5qcz84MTRjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhlYWRpbmcodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICB0aGlzLmhlYWRpbmcgPSAnPGgyPiQodGhpcy50ZXh0KTwvaDI+J1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICBIZWFkaW5nOyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7RUFDbkIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0VBQ0EsS0FBS0MsT0FBTCxHQUFlLHVCQUFmO0FBQ0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFrQkosT0FBbEIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected more input.\n  ╷\n1 │ @import\n  │        ^\n  ╵\n  src/index.scss 1:8  root stylesheet\n    at tryRunOrWebpackError (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4955:16\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4923:15\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3527:9)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4870:8\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3349:32\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/CacheFacade.js:137:15)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3349:11\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3319:9)\n    at codeGen (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4858:11)\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4888:14\n    at processQueue (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/util/processAsyncTree.js:55:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected more input.\n  ╷\n1 │ @import\n  │        ^\n  ╵\n  src/index.scss 1:8  root stylesheet\n    at Object.<anonymous> (/Users/km/Desktop/Dalgona_Game/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/km/Desktop/Dalgona_Game/node_modules/sass-loader/dist/cjs.js!/Users/km/Desktop/Dalgona_Game/src/index.scss:1:7)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/Hook.js:14:14)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5057:39\n    at tryRunOrWebpackError (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4955:16\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4923:15\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3527:9)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4870:8\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3349:32\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/CacheFacade.js:137:15)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3349:11\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/Users/km/Desktop/Dalgona_Game/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:3319:9)\n    at codeGen (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4858:11)\n    at symbolIterator (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/km/Desktop/Dalgona_Game/node_modules/neo-async/async.js:3463:5)\n    at /Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/Compilation.js:4888:14\n    at processQueue (/Users/km/Desktop/Dalgona_Game/node_modules/webpack/lib/util/processAsyncTree.js:55:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n\nGenerated code for /Users/km/Desktop/Dalgona_Game/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/km/Desktop/Dalgona_Game/node_modules/sass-loader/dist/cjs.js!/Users/km/Desktop/Dalgona_Game/src/index.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: expected more input.\\n  ╷\\n1 │ @import\\n  │        ^\\n  ╵\\n  src/index.scss 1:8  root stylesheet\");");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;