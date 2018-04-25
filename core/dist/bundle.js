(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory();
	else
		root["core"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app-store/store/index.js":
/*!**************************************!*\
  !*** ./src/app-store/store/index.js ***!
  \**************************************/
/*! exports provided: myStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/app-store/store/store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myStore\", function() { return _store__WEBPACK_IMPORTED_MODULE_0__[\"myStore\"]; });\n\n\n\n//# sourceURL=webpack://core/./src/app-store/store/index.js?");

/***/ }),

/***/ "./src/app-store/store/store.js":
/*!**************************************!*\
  !*** ./src/app-store/store/store.js ***!
  \**************************************/
/*! exports provided: myStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myStore\", function() { return myStore; });\nconst myStore = {\n  secret: 'secret',\n};\n\n\n//# sourceURL=webpack://core/./src/app-store/store/store.js?");

/***/ }),

/***/ "./src/main.jsx":
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
/*! exports provided: myStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store */ \"./src/app-store/store/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myStore\", function() { return store__WEBPACK_IMPORTED_MODULE_0__[\"myStore\"]; });\n\n\n\n\n\n\nconsole.log('core 222 5 XXX', store__WEBPACK_IMPORTED_MODULE_0__[\"myStore\"].secret);\n\n\n//# sourceURL=webpack://core/./src/main.jsx?");

/***/ })

/******/ });
});