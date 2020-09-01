/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroids.js":
/*!**************************!*\
  !*** ./src/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n// function Asteroid extends MovingObject {\n\n//         Asteroid.COLOR = 'red';\n//         Asteroid.RADIUS = 50;\n\n//         constructor (pos, call MovingObject superconstruvtor) {\n//             //super(new MovingObject)\n//             newAsteroid = new MovingObject(pos, color = Asteroid.COLOR, radius = Asteroid.RADIUS, vel = Util.randomVec(length));\n//         }\n    \n// }\n\nAsteroid.COLOR = 'red';\nAsteroid.RADIUS = 50;\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid (options) {\n    options.color = Asteroid.COLOR;\n    options.radius = Asteroid.RADIUS;\n    options.vel = Util.randomVec(15);\n    MovingObject.call(this, options);\n}\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroids.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('webpack test2');\n//debugger\n//import MovingObject from \"./moving_object.js\";\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroids.js */ \"./src/asteroids.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvasElement = document.getElementById(\"game-canvas\");//[0];\n     //debugger\n    const ctx = canvasElement.getContext(\"2d\");\n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid;\n    window.ctx = ctx;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("    //debugger\nfunction MovingObject(objectArg) {\n    // debugger\n    this.pos = objectArg.pos;\n    this.vel = objectArg.vel;\n    this.radius = objectArg.radius;\n    this.color = objectArg.color;\n    console.log('I am moving');\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    //Draw a circle\n    const c = document.getElementById(\"game-canvas\");\n    debugger\n    ctx = c.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n}\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n\n//Function.prototype.inherits = function (ParentClass) { ... };\n\nmodule.exports = MovingObject;\n//modules.exports = {MovingObject: MovingObject};\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Util.inherits = function (childClass, parentClass) { ... }\n\n// const Util = {           ES6\n//     inherits: function inherits(childClass, parentClass) {\n//       //...\n//     }\n//   };\n  \n//   module.exports = Util;\n\nconst Util = {\n    inherits(childClass, parentClass) {\n      //...\n      function Surrogate() {};\n      //debugger\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n  };\n\n// function Surrogate() { }\n// Surrogate.prototype = Animal.prototype;\n// Cat.prototype = new Surrogate();\n// Cat.prototype.constructor = Cat;\n\n\n  module.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });