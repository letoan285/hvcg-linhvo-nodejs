/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Apple.js":
/*!**********************!*\
  !*** ./src/Apple.js ***!
  \**********************/
/***/ (() => {

eval("// export class Apple {\r\n//     // myname = 'MyAplle'\r\n//     constructor(){\r\n//         this.myname = 'Myapple 22'\r\n//     }\r\n//     getName(){\r\n//         // return 'Ling'\r\n//         return this.myname;\r\n//     }\r\n// }\r\n\r\n// export const MyName = 'Toan';\r\n\r\n// export const yourName = 'Linh';\r\n// const herName = 'Linda'\r\n// export default yourName;\r\n\r\n// export default herName;\r\n// tinh chat OOP\r\n// 1. Tinh Ke thua // inheritance\r\n// 2. Tinh Dong dong // encapsulation\r\n// 3. tinh truu tuong, // abstraction\r\n// 4. tinh da hinh // polymophism\r\n// let color = 'Yello';\r\n\r\n// class Animal {\r\n//     #color; // private property\r\n//     // constructor(){\r\n//     //     this.color = 'Yello'\r\n//     // }\r\n\r\n//     // getColor(color){\r\n//     //     color = 'red'\r\n//     //     return color;\r\n//     // }\r\n//     static getColor(){\r\n//         return 'This is static';\r\n//     }\r\n// }\r\n\r\n// class Dog extends Animal {\r\n\r\n// }\r\n// const dog = new Animal();\r\n// // console.log(dog.getColor());\r\n// console.log( Animal.getColor() );\n\n//# sourceURL=webpack://webpack_project/./src/Apple.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Apple */ \"./src/Apple.js\");\n/* harmony import */ var _Apple__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Apple__WEBPACK_IMPORTED_MODULE_0__);\n// import {apple} from './Apple';\r\n\r\n// console.log('Hello', apple);\r\n\r\n// import linhName, {Apple, MyName, hoiho, hohok, }  from './Apple';\r\n\r\n\r\nconst apple = new MyApple();\r\n\r\n\r\nconsole.log(apple.getName());\n\n//# sourceURL=webpack://webpack_project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;