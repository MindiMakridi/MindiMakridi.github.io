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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icon/eraser.png":
/*!********************************!*\
  !*** ./assets/icon/eraser.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjlsM35OAAACLElEQVQ4T52RX0hTYRjGT+5P23GORmeb7ujkHLYx08YutK3R0HbhRTMqo1DEK7sIJIaUIGKajCiQIDOiWl1oC4eWFIONikIYxEDYaNA/6qIoa5OE7opunr7v83S1JdkP3osPnufhfZ+Pc7vdPbIs97hcLonjuG1ktoZOp4PRaITFYoHdbl9zOp1JEjgmiqJPkWyOWq2GSqXCvpYgQt4QhB0CeJ4Hr+OzDofDrMj+Dg2Y7I9iom8SyXMpfJr7iuzlFTTWNcJgMHwnks3PogGp6CPMnbmLoe7TyF0poDS/jljkNnxNPlit1g9ERvupDFn/Bw34fKeIxdElYvKjOP8NX+IlTA1cgkf2wCE70nq9vlWxlKH17wrkEiMLLGRlOgdREPE69o69p0/OwGQ0oV6sT9hsNq/iKaPlWPB4KjGyyExvbr3HkcBRPL2wzN4PxpOsWANveEi+W1A8ZbSH93Slly9mUEqsY2H0Ps72TuDJ+Wes2MzUcwg7BZBTXir6ivjtZvuL1XiRdXBt8DrGeseRnymwTW5EYmiWmyEIAi1Ws2Epx1atr/756uZbZqJbaDQaNJgbcDjQjVpTHTtHkqQlrVbrUjxlbPe5/Wvp6GMW4G/ai/zVAmaH4xg8eApSrYSqqioQXeeGvDLevlB/NtzWxQLoNrQb2sdA54l/CqAcIMJMq6sNH2dX/yuAEiaTr+FrfrV7OhA5NISO3fu3FPAHPZkgmWEy98jkOY6TfwOdDQhw7nSJZwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/icon/pencil.png":
/*!********************************!*\
  !*** ./assets/icon/pencil.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjlsM35OAAACSElEQVQ4T2Pg4uLaIyYmMsXEUCvRysrUQExMTJyBgYEViIkDwsJ8P5KTvD7PmVP0LifH44WdHd8FDQ1eH6AUO0QFAZCfH/T/zOn+/6tXx/3fslH8/63rLH/rathum5lxeQOl2SCq8ICIcNOvy5eq/n/0gOf/10/M/9+/Zv7/4C7z31qgIRYWXB5AJfgNycni7L5zi/nNs0dM/79/Zv7/5QPz/+ePmf/fv8v8r66W7Y6lJZc7UBluQyIjGURamxma7t5ifvvqGfP/b0BXgAz58Ibp/+MHLP9qaznuWFiwg1yCO0x8fICGtDI0PbrP/Ob5E+b/H99ADAJ55+Fdln81FWx3TEzYPIFKcbqE0cODQbSznaHp4T2IIZ/fM///+hHoHSD7wT3mf9WVbLdNTLhAhuB0CdiQjg6G5kdAQz4AXQEKk8+gMAEa8ugB87/KcrbbRkbg2OGAaMEEYEO6O4Euucv89s0LYFi8Zf7/CWjIO6B3Hj9k/ldeynbb1JTLR16egCFdQJeADHkBtB1kCMhLoEB+8ojpb3Ym6y1tFWFfeXl5/IZ0djK0PL7H9PbNS6b/P74wAdMJ0/8n9zn+t5fK/I2yMrupICzmD1WPFTCCYqe9laHlwV2mty8es//ft1Hk/9Iqt/9Hqor/rk5PfyUtJDQbqhY3sLFhEA30ZW/pyjJ8u6s88//ekpIv5e6eF22VlVPEuLlBGY8gYDSWlBRJsLZsqfL0vu2mqdnmrKqqBBTH6X+swE/dijfV1lZSVFSUB8hlhIgyMAAAfrcCI4tx3q4AAAAASUVORK5CYII=");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/eraser-checkbox.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/eraser-checkbox.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/icon/eraser.png */ "./assets/icon/eraser.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/icon/pencil.png */ "./assets/icon/pencil.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "label {\r\n    display: inline-block;\r\n    content: '';\r\n    width: 16px;\r\n    height: 16px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nlabel.active {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\ninput {\r\n    display: none;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/icon/pencil.png */ "./assets/icon/pencil.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/icon/eraser.png */ "./assets/icon/eraser.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "\r\ntable {\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n}\r\n\r\ntable.game-table {\r\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), default;\r\n}\r\n\r\ntable.eraser {\r\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "), default;\r\n}\r\ntd {\r\n    width: 20px;\r\n    position: relative;\r\n}\r\ntd:after {\r\n    content: '';\r\n    display: block;\r\n    margin-top: 100%;\r\n}\r\n\r\ntd.active {\r\n    background-color: green;\r\n}\r\n\r\nselect {\r\n    margin-right: 10px;\r\n}\r\n\r\n.figure {\r\n    cursor: pointer;\r\n}\r\n\r\ntable.draggable {\r\n    margin-top: 0px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
class Controller {
    constructor(rows = 10, columns = 10, speed = 1) {
        this.speed = speed;
        rows = rows ? rows : 10;
        columns = columns ? columns : 10;
        this.speed = this.speed ? this.speed : 1;
        this.observers = [];
        this.game = new Game_1.default(rows, columns);
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers.filter((obs) => obs != observer);
    }
    updated(params) {
        let event = Object.assign({ game: this.game, intervalId: this.intervalId, speed: this.speed, rows: this.game.rows, columns: this.game.columns, hasBoundaries: this.game.hasBoundaries }, params);
        this.observers.forEach((observer) => {
            observer.notify(event);
        });
    }
    speedUp() {
        this.pause();
        this.speed++;
        this.start();
        this.updated({ type: 'speedUp' });
    }
    speedDown() {
        this.pause();
        if (this.speed <= 1) {
            this.speed /= 2;
        }
        else {
            this.speed -= 1;
        }
        this.start();
        this.updated({ type: 'speedDown' });
    }
    pause() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.updated({ type: 'pause' });
    }
    start() {
        this.intervalId = window.setInterval(() => {
            const points = this.game.turn();
            this.updated({ type: 'turn', points });
        }, 1000 / this.speed);
        this.updated({ type: 'start' });
    }
    reset() {
        this.pause();
        this.game.initialize(this.game.rows, this.game.columns);
        this.updated({ type: 'reset' });
    }
    setLive(point) {
        this.pause();
        this.game.setLive(point);
        this.updated({ type: 'setLive', points: [point] });
    }
    setEmpty(point) {
        this.pause();
        this.game.setEmpty(point);
        let obj = { type: 'setEmpty', point };
        this.updated({ type: 'setEmpty', points: [point] });
    }
    getPoint(point) {
        return this.game.getPoint(point);
    }
    isOn() {
        return this.intervalId != null;
    }
    get rows() {
        return this.game.rows;
    }
    get columns() {
        return this.game.columns;
    }
    set rows(rows) {
        this.pause();
        this.game.initialize(rows, this.game.columns);
        this.updated({ type: 'setRows' });
    }
    set columns(columns) {
        this.pause();
        this.game.initialize(this.game.rows, columns);
        this.updated({ type: 'setColumns' });
    }
    get hasBoundaries() {
        return this.game.hasBoundaries;
    }
    set hasBoundaries(value) {
        this.game.hasBoundaries = value;
    }
}
exports.default = Controller;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
class Game {
    constructor(rows = 30, columns = 30) {
        this.initialize(rows, columns);
        this._hasBoundaries = false;
    }
    initialize(rows = 30, columns = 30) {
        this._currentGen = Array(rows);
        this._nextGen = Array(rows);
        for (let i = 0; i < rows; i++) {
            this._currentGen[i] = Array(columns).fill(false);
            this._nextGen[i] = Array(columns).fill(false);
        }
    }
    turn() {
        const updatedPoints = [];
        this._nextGen.forEach((values, y) => {
            values.forEach((value, x) => {
                this._nextGen[y][x] = this.isAlive(new Point_1.default(x, y));
                if (this._nextGen[y][x] != this._currentGen[y][x]) {
                    updatedPoints.push(new Point_1.default(x, y));
                }
            });
        });
        this._nextGen.forEach((values, y) => {
            this._currentGen[y] = values.slice();
        });
        return updatedPoints;
    }
    getPoint(point) {
        let x = point.x;
        let y = point.y;
        if (this.hasBoundaries && (x < 0 || x >= this.columns || y < 0 || y >= this.rows)) {
            return false;
        }
        x = x < 0 ? (this.columns + x) : x;
        x = x >= this.columns ? (x - this.columns) : x;
        y = y < 0 ? (this.rows + y) : y;
        y = y >= this.rows ? (y - this.rows) : y;
        return this._currentGen[y][x];
    }
    setLive(point) {
        this._currentGen[point.y][point.x] = true;
    }
    setEmpty(point) {
        this._currentGen[point.y][point.x] = false;
    }
    get currentGen() {
        return this._currentGen;
    }
    get nextGen() {
        return this._nextGen;
    }
    get rows() {
        return this.currentGen.length;
    }
    get columns() {
        return this.currentGen[0].length;
    }
    get hasBoundaries() {
        return this._hasBoundaries;
    }
    set hasBoundaries(value) {
        this._hasBoundaries = value;
    }
    isAlive(point) {
        let current = this.getPoint(point);
        let aliveNeighboursCount = this.getNeighbours(point).filter((value) => value).length;
        return current ? [2, 3].includes(aliveNeighboursCount) : aliveNeighboursCount == 3;
    }
    getNeighbours(point) {
        let neighbours = [];
        neighbours.push(this.getPoint(new Point_1.default(point.x - 1, point.y + 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x, point.y + 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x + 1, point.y + 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x + 1, point.y)));
        neighbours.push(this.getPoint(new Point_1.default(point.x + 1, point.y - 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x, point.y - 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x - 1, point.y - 1)));
        neighbours.push(this.getPoint(new Point_1.default(point.x - 1, point.y)));
        return neighbours;
    }
}
exports.default = Game;


/***/ }),

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
exports.default = Point;


/***/ }),

/***/ "./src/components/Controls.ts":
/*!************************************!*\
  !*** ./src/components/Controls.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Glider_1 = __webpack_require__(/*! ./figures/Glider */ "./src/components/figures/Glider.ts");
const SmallExploder_1 = __webpack_require__(/*! ./figures/SmallExploder */ "./src/components/figures/SmallExploder.ts");
const Exploder_1 = __webpack_require__(/*! ./figures/Exploder */ "./src/components/figures/Exploder.ts");
const Spaceship_1 = __webpack_require__(/*! ./figures/Spaceship */ "./src/components/figures/Spaceship.ts");
const Tumbler_1 = __webpack_require__(/*! ./figures/Tumbler */ "./src/components/figures/Tumbler.ts");
const GliderGun_1 = __webpack_require__(/*! ./figures/GliderGun */ "./src/components/figures/GliderGun.ts");
class ControlsComponent {
    constructor(controller, table) {
        this.controller = controller;
        this.table = table;
        this.controls = this.createControls();
    }
    createControls() {
        const controls = document.createElement('div');
        controls.classList.add('controls');
        controls.appendChild(this.createSizeSection());
        controls.appendChild(this.createSpeedSection());
        controls.appendChild(this.createOptionsSection());
        controls.appendChild(this.createButtonsSection());
        controls.appendChild(this.createFiguresSelect());
        controls.appendChild(this.createFigureContainer());
        return controls;
    }
    createSizeSection() {
        const sizesSection = document.createElement('article');
        sizesSection.appendChild(this.createRowsSelect());
        sizesSection.appendChild(this.createColumnsSelect());
        return sizesSection;
    }
    createRowsSelect() {
        const label = document.createElement("label");
        const span = document.createElement("span");
        span.innerHTML = "Rows: ";
        const select = this.createSelect();
        select.onchange = (e) => {
            this.controller.rows = +select.value;
        };
        label.appendChild(span);
        label.appendChild(select);
        return label;
    }
    createSelect() {
        const select = document.createElement('select');
        for (let i = 30; i <= 200; i += 10) {
            let option = document.createElement('option');
            option.value = i.toString();
            option.innerText = i.toString();
            select.appendChild(option);
        }
        return select;
    }
    createColumnsSelect() {
        const label = document.createElement("label");
        const span = document.createElement("span");
        span.innerHTML = "Columns: ";
        const select = this.createSelect();
        select.onchange = (e) => {
            this.controller.columns = +select.value;
        };
        label.appendChild(span);
        label.appendChild(select);
        return label;
    }
    createSpeedSection() {
        const speedSection = document.createElement("article");
        speedSection.innerText = "Speed: ";
        speedSection.appendChild(this.createSpeedUpButton());
        speedSection.appendChild(this.createSpeedDownButton());
        return speedSection;
    }
    createSpeedUpButton() {
        const button = document.createElement('button');
        button.innerText = "↑";
        button.onclick = (e) => {
            this.controller.speedUp();
        };
        return button;
    }
    createSpeedDownButton() {
        const button = document.createElement('button');
        button.innerText = "↓";
        button.onclick = (e) => {
            this.controller.speedDown();
        };
        return button;
    }
    createOptionsSection() {
        const optionsSection = document.createElement('article');
        optionsSection.innerText = "Draw mode: ";
        optionsSection.appendChild(this.createEraserModeCheckbox());
        optionsSection.appendChild(this.createBoundariesCheckbox());
        return optionsSection;
    }
    createEraserModeCheckbox() {
        const checkbox = document.createElement('eraser-checkbox');
        checkbox.onchange = (e) => {
            this.table.toggleMode();
        };
        return checkbox;
    }
    createButtonsSection() {
        const buttons = document.createElement('article');
        this.startButton = this.createStartButton();
        this.pauseButton = this.createPauseButton();
        buttons.appendChild(this.startButton);
        buttons.appendChild(this.pauseButton);
        buttons.appendChild(this.createResetButton());
        return buttons;
    }
    createStartButton() {
        const button = document.createElement('button');
        button.innerText = "Start";
        button.onclick = (e) => {
            this.controller.start();
        };
        return button;
    }
    createPauseButton() {
        const button = document.createElement('button');
        button.innerText = "Pause";
        button.style.display = 'none';
        button.onclick = (e) => {
            this.controller.pause();
        };
        return button;
    }
    createResetButton() {
        const button = document.createElement('button');
        button.innerText = "Reset";
        button.onclick = (e) => {
            this.controller.reset();
        };
        return button;
    }
    createBoundariesCheckbox() {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        label.innerHTML = "<span>Boundaries</span>";
        checkbox.type = 'checkbox';
        checkbox.checked = this.controller.hasBoundaries;
        checkbox.onchange = (e) => {
            this.controller.hasBoundaries = checkbox.checked;
        };
        label.appendChild(checkbox);
        return label;
    }
    createFiguresSelect() {
        const label = document.createElement('label');
        label.innerHTML = '<span>Figure </span>';
        const select = document.createElement('select');
        select.appendChild(document.createElement('option'));
        Object.keys(this.getFigures()).forEach((figureName) => {
            const option = document.createElement('option');
            option.value = figureName;
            option.innerText = figureName;
            select.appendChild(option);
        });
        select.onchange = (e) => {
            this.controls.querySelector('.figure-container').innerHTML = "";
            if (select.value) {
                this.controls.querySelector('.figure-container').appendChild(this.getFigures()[select.value].getDOMElement());
            }
        };
        label.appendChild(select);
        return label;
    }
    getFigures() {
        return {
            'Glider': new Glider_1.default(this.controller),
            'Spaceship': new Spaceship_1.default(this.controller),
            'SmallExploder': new SmallExploder_1.default(this.controller),
            'Exploder': new Exploder_1.default(this.controller),
            'Tumbler': new Tumbler_1.default(this.controller),
            'Gosper Glider Gun': new GliderGun_1.default(this.controller),
        };
    }
    createFigureContainer() {
        const figureContainer = document.createElement('div');
        figureContainer.classList.add('figure-container');
        return figureContainer;
    }
    getDOMElement() {
        return this.controls;
    }
    notify(event) {
        switch (event.type) {
            case 'pause':
                this.showStartButton();
                break;
            case 'start':
                this.showPauseButton();
                break;
        }
    }
    showStartButton() {
        this.startButton.style.display = 'inline';
        this.pauseButton.style.display = 'none';
    }
    showPauseButton() {
        this.startButton.style.display = 'none';
        this.pauseButton.style.display = 'inline';
    }
}
exports.default = ControlsComponent;


/***/ }),

/***/ "./src/components/EraserCheckbox.ts":
/*!******************************************!*\
  !*** ./src/components/EraserCheckbox.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const css = __webpack_require__(/*! ../../style/eraser-checkbox.css */ "./style/eraser-checkbox.css").toString();
class EraserCheckboxComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const label = document.createElement('label');
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'checkbox');
        this.input.onchange = (e) => {
            label.classList.toggle('active');
            e = new Event('change');
            this.dispatchEvent(e);
        };
        this.input.checked = this.checked;
        const style = document.createElement('style');
        style.innerHTML = css;
        label.appendChild(this.input);
        shadow.appendChild(label);
        shadow.appendChild(style);
    }
    get checked() {
        return this.input.checked;
    }
    set checked(value) {
        this.input.checked = value;
    }
}
exports.default = EraserCheckboxComponent;


/***/ }),

/***/ "./src/components/Life.ts":
/*!********************************!*\
  !*** ./src/components/Life.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Table_1 = __webpack_require__(/*! ./Table */ "./src/components/Table.ts");
const Controls_1 = __webpack_require__(/*! ./Controls */ "./src/components/Controls.ts");
const Controller_1 = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
const css = __webpack_require__(/*! ../../style/style.css */ "./style/style.css").toString();
class LifeComponent extends HTMLElement {
    constructor() {
        super();
        this.controller = new Controller_1.default(+this.getAttribute('rows'), +this.getAttribute('columns'), +this.getAttribute('speed'));
        let shadow = this.attachShadow({ mode: 'open' });
        let table = new Table_1.default(this.controller);
        let controls = new Controls_1.default(this.controller, table);
        shadow.appendChild(controls.getDOMElement());
        shadow.appendChild(table.getDOMElement());
        shadow.appendChild(this.getStyle());
        this.controller.subscribe(table);
        this.controller.subscribe(controls);
    }
    getStyle() {
        let style = document.createElement("style");
        style.innerHTML = css;
        return style;
    }
}
exports.default = LifeComponent;


/***/ }),

/***/ "./src/components/Table.ts":
/*!*********************************!*\
  !*** ./src/components/Table.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ../Point */ "./src/Point.ts");
class TableComponent {
    constructor(controller) {
        this.controller = controller;
        this.toggleModeSetLive = true;
        this.table = this.createTable();
        const mouseMoveHandler = this.getMousemoveHandler();
        this.table.onmousedown = e => {
            e.preventDefault();
            document.addEventListener('mousemove', mouseMoveHandler);
            document.onmouseup = () => document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }
    createTable() {
        const table = document.createElement("table");
        table.classList.add('game-table');
        table.setAttribute('border', "1");
        this.createRows(table);
        return table;
    }
    createRows(table) {
        table.innerHTML = "";
        for (let y = 0; y < this.controller.rows; y++) {
            let row = document.createElement("tr");
            for (let x = 0; x < this.controller.columns; x++) {
                let column = document.createElement('td');
                column.onclick = () => {
                    this.toggleCell(new Point_1.default(x, y));
                };
                row.appendChild(column);
            }
            table.appendChild(row);
        }
    }
    toggleCell(point) {
        this.toggleModeSetLive ? this.controller.setLive(point) : this.controller.setEmpty(point);
    }
    getDOMElement() {
        return this.table;
    }
    notify(event) {
        switch (event.type) {
            case 'reset':
            case 'setRows':
            case 'setColumns':
                this.createRows(this.table);
                break;
            case 'setLive':
            case 'setEmpty':
            case 'turn':
                this.updateTable(event.points);
                break;
        }
    }
    updateCell(point) {
        const cell = this.table.querySelectorAll("tr")[point.y].querySelectorAll('td')[point.x];
        if (this.controller.getPoint(point)) {
            cell.classList.add('active');
        }
        else {
            cell.classList.remove('active');
        }
    }
    updateTable(updated) {
        updated.forEach((point) => {
            this.updateCell(point);
        });
    }
    toggleMode() {
        this.toggleModeSetLive = !this.toggleModeSetLive;
        if (this.toggleModeSetLive) {
            this.table.classList.remove('eraser');
        }
        else {
            this.table.classList.add('eraser');
        }
    }
    getMousemoveHandler() {
        return function (e) {
            const target = e.target;
            const elem = target.shadowRoot ? target.shadowRoot.elementFromPoint(e.x, e.y) : null;
            if (elem) {
                elem.dispatchEvent(new Event('click'));
            }
        };
    }
}
exports.default = TableComponent;


/***/ }),

/***/ "./src/components/figures/Exploder.ts":
/*!********************************************!*\
  !*** ./src/components/figures/Exploder.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class Exploder extends Figure_1.default {
    getCoordinates() {
        return [
            [true, false, true, false, true],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, false, true, false, true],
        ];
    }
}
exports.default = Exploder;


/***/ }),

/***/ "./src/components/figures/Figure.ts":
/*!******************************************!*\
  !*** ./src/components/figures/Figure.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ../../Point */ "./src/Point.ts");
class Figure {
    constructor(controller) {
        this.controller = controller;
        this.coordinates = this.getCoordinates();
        this.table = this.createTable();
        this.table.onmousedown = e => {
            e.preventDefault();
            const table = this.createCloneTable();
            const mouseMoveHandler = this.getMouseMoveHandler(table);
            const self = this;
            function mouseUpHandler(event) {
                self.getMouseUpHandler(table)(event);
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
    }
    getDOMElement() {
        return this.table;
    }
    createTable() {
        const table = document.createElement('table');
        table.setAttribute('border', "1");
        table.classList.add('figure');
        this.coordinates.forEach((values, y) => {
            const row = document.createElement('tr');
            values.forEach((value, x) => {
                const cell = document.createElement('td');
                if (value) {
                    cell.classList.add('active');
                }
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
        return table;
    }
    createCloneTable() {
        const table = this.table.cloneNode(true);
        table.style.position = 'absolute';
        table.style.top = this.table.getBoundingClientRect().top + 'px';
        table.style.left = this.table.getBoundingClientRect().left + 'px';
        table.classList.add('figure', 'draggable');
        this.table.getRootNode().appendChild(table);
        return table;
    }
    getMouseUpHandler(table) {
        return (event) => {
            const root = this.table.getRootNode();
            const elements = root.elementsFromPoint(table.getBoundingClientRect().left + 1, table.getBoundingClientRect().top + 1);
            elements.forEach((element) => {
                const gameTable = element.closest('.game-table');
                if (gameTable && element != gameTable && this.fitsInside(table)) {
                    this.applyFigure(this.getCellPoint(element, gameTable));
                }
            });
            table.remove();
        };
    }
    getCellPoint(cell, table) {
        let point;
        table.querySelectorAll('tr').forEach((row, y) => {
            row.querySelectorAll('td').forEach((td, x) => {
                if (td == cell) {
                    point = new Point_1.default(x, y);
                    return;
                }
            });
        });
        return point;
    }
    getMouseMoveHandler(table) {
        let deltaX;
        let deltaY;
        return (event) => {
            if (!deltaX) {
                deltaX = event.x - table.getBoundingClientRect().x;
                deltaY = event.y - table.getBoundingClientRect().y;
            }
            table.style.top = event.y - deltaY + window.scrollY + 'px';
            table.style.left = event.x - deltaX + 'px';
            if (this.fitsInside(table)) {
                table.classList.add('fit');
            }
            else {
                table.classList.remove('fit');
            }
        };
    }
    fitsInside(table) {
        let result = false;
        const tableRect = table.getBoundingClientRect();
        const tables = this.table.getRootNode().querySelectorAll('.game-table');
        tables.forEach((gameTable) => {
            if (result)
                return;
            const gameTableRect = gameTable.getBoundingClientRect();
            const overflowLeft = gameTableRect.left > tableRect.left;
            const overflowRight = gameTableRect.right < tableRect.right;
            const overflowTop = gameTableRect.top > tableRect.top;
            const overflowBottom = gameTableRect.bottom < tableRect.bottom;
            result = !overflowLeft && !overflowRight && !overflowTop && !overflowBottom;
        });
        return result;
    }
    applyFigure(coordinatesAdjustment) {
        this.coordinates.forEach((values, y) => {
            values.forEach((value, x) => {
                if (value) {
                    this.controller.setLive(new Point_1.default(x + coordinatesAdjustment.x, y + coordinatesAdjustment.y));
                }
            });
        });
    }
}
exports.default = Figure;


/***/ }),

/***/ "./src/components/figures/Glider.ts":
/*!******************************************!*\
  !*** ./src/components/figures/Glider.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class Glider extends Figure_1.default {
    getCoordinates() {
        return [
            [false, false, true],
            [true, true, false],
            [false, true, true],
        ];
    }
}
exports.default = Glider;


/***/ }),

/***/ "./src/components/figures/GliderGun.ts":
/*!*********************************************!*\
  !*** ./src/components/figures/GliderGun.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class GliderGun extends Figure_1.default {
    getCoordinates() {
        return [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, true, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, true, true, false, false],
            [true, true, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [true, true, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
        ];
    }
}
exports.default = GliderGun;


/***/ }),

/***/ "./src/components/figures/SmallExploder.ts":
/*!*************************************************!*\
  !*** ./src/components/figures/SmallExploder.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class SmallExploder extends Figure_1.default {
    getCoordinates() {
        return [
            [false, true, false],
            [true, true, true],
            [true, false, true],
            [false, true, false],
        ];
    }
}
exports.default = SmallExploder;


/***/ }),

/***/ "./src/components/figures/Spaceship.ts":
/*!*********************************************!*\
  !*** ./src/components/figures/Spaceship.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class Spaceship extends Figure_1.default {
    getCoordinates() {
        return [
            [false, true, true, true, true],
            [true, false, false, false, true],
            [false, false, false, false, true],
            [true, false, false, true, false],
        ];
    }
}
exports.default = Spaceship;


/***/ }),

/***/ "./src/components/figures/Tumbler.ts":
/*!*******************************************!*\
  !*** ./src/components/figures/Tumbler.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Figure_1 = __webpack_require__(/*! ./Figure */ "./src/components/figures/Figure.ts");
class Tumbler extends Figure_1.default {
    getCoordinates() {
        return [
            [false, true, true, false, true, true, false],
            [false, true, true, false, true, true, false],
            [false, false, true, false, true, false, false],
            [true, false, true, false, true, false, true],
            [true, false, true, false, true, false, true],
            [true, true, false, false, false, true, true],
        ];
    }
}
exports.default = Tumbler;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Life_1 = __webpack_require__(/*! ./components/Life */ "./src/components/Life.ts");
const EraserCheckbox_1 = __webpack_require__(/*! ./components/EraserCheckbox */ "./src/components/EraserCheckbox.ts");
customElements.define('life-game', Life_1.default);
customElements.define('eraser-checkbox', EraserCheckbox_1.default);


/***/ }),

/***/ "./style/eraser-checkbox.css":
/*!***********************************!*\
  !*** ./style/eraser-checkbox.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./eraser-checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./style/eraser-checkbox.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style/style.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vZXJhc2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9wZW5jaWwucG5nIiwid2VicGFjazovLy8uL3N0eWxlL2VyYXNlci1jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXJhc2VyQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlmZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWd1cmVzL0V4cGxvZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpZ3VyZXMvRmlndXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpZ3VyZXMvR2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpZ3VyZXMvR2xpZGVyR3VuLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpZ3VyZXMvU21hbGxFeHBsb2Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWd1cmVzL1NwYWNlc2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maWd1cmVzL1R1bWJsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0eWxlL2VyYXNlci1jaGVja2JveC5jc3M/YzY4ZCIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/MzgxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsK0VBQWdCLHc5Qjs7Ozs7Ozs7Ozs7O0FDQS9CO0FBQWUsK0VBQWdCLDQvQjs7Ozs7Ozs7Ozs7QUNBL0I7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUYsc0NBQXNDLG1CQUFPLENBQUMsMkdBQW1EO0FBQ2pHLG9DQUFvQyxtQkFBTyxDQUFDLDJEQUEyQjtBQUN2RSxvQ0FBb0MsbUJBQU8sQ0FBQywyREFBMkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsVUFBVSw4QkFBOEIsb0JB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LEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFFO1lBQ3hRLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRTtZQUN0USxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUU7WUFDeFEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFFO1lBQ3hRLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRTtZQUMxUSxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUU7WUFDM1EsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFFO1lBQzFRLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBRTtZQUMxUSxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUU7WUFDM1EsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFFO1lBQzVRLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRTtZQUM1USxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUU7WUFDelEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVB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LEtBQUssRUFBRSxJQUFJLENBQUU7WUFDL0MsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUU7U0FDbEQsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUVELGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ2Qix3RkFBOEM7QUFDOUMsc0hBQWtFO0FBRWxFLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWEsQ0FBQyxDQUFDO0FBQ2xELGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsd0JBQXVCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0hsRSxxQkFBcUIsbUJBQU8sQ0FBQyx3SUFBZ0U7O0FBRTdGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BLHFCQUFxQixtQkFBTyxDQUFDLG9IQUFzRDs7QUFFbkY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUNYQklXWE1BQUE3REFBQU93d0hIYjZoa0FBQUFHSFJGV0hSVGIyWjBkMkZ5WlFCd1lXbHVkQzV1WlhRZ05DNHdMamxzTTM1T0FBQUNMRWxFUVZRNFQ1MlJYMGhUWVJqR1QrNVAyM0dPUm1lYjd1amtITFl4MDhZdXRLM1IwSGJoUlRNcW8xREVLN3NJSklhVUlHS2FqQ2lRSURPaVdsMW9DNGVXRklPTmlrSVl4RURZYU5BLzZxSW9hNU9FN29wdW5yN3Y4M1MxSmRrUDNvc1BudWZoZlorUGM3dmRQYklzOTdoY0xvbmp1RzFrdG9aT3A0UFJhSVRGWW9IZGJsOXpPcDFKRWpnbWlxSlBrV3lPV3EyR1NxWEN2cFlnUXQ0UWhCMENlSjRIcitPekRvZkRyTWorRGcyWTdJOWlvbThTeVhNcGZKcjdpdXpsRlRUV05jSmdNSHdua3MzUG9nR3A2Q1BNbmJtTG9lN1R5RjBwb0RTL2psamtObnhOUGxpdDFnOUVSdnVwREZuL0J3MzRmS2VJeGRFbFl2S2pPUDhOWCtJbFRBMWNna2Yyd0NFNzBucTl2bFd4bEtIMTd3cmtFaU1MTEdSbE9nZFJFUEU2OW82OXAwL093R1Ewb1Y2c1Q5aHNOcS9pS2FQbFdQQjRLakd5eUV4dmJyM0hrY0JSUEwyd3pONFB4cE9zV0FOdmVFaStXMUE4WmJTSDkzU2xseTltVUVxc1kySDBQczcyVHVESitXZXMyTXpVY3dnN0JaQlRYaXI2aXZqdFp2dUwxWGlSZFhCdDhEckdlc2VSbnltd1RXNUVZbWlXbXlFSUFpMVdzMkVweDFhdHIvNzU2dVpiWnFKYmFEUWFOSmdiY0RqUWpWcFRIVHRIa3FRbHJWYnJVanhsYlBlNS9XdnA2R01XNEcvYWkvelZBbWFINHhnOGVBcFNyWVNxcWlvUVhlZUd2RExldmxCL050eld4UUxvTnJRYjJzZEE1NGwvQ3FBY0lNSk1xNnNOSDJkWC95dUFFaWFUcitGcmZyVjdPaEE1TklTTzNmdTNGUEFIUFprZ21XRXk5OGprT1k2VGZ3T2REUWh3N25TSlp3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUNYQklXWE1BQUE3REFBQU93d0hIYjZoa0FBQUFHSFJGV0hSVGIyWjBkMkZ5WlFCd1lXbHVkQzV1WlhRZ05DNHdMamxzTTM1T0FBQUNTRWxFUVZRNFQyUGc0dUxhSXlZbU1zWEVVQ3ZSeXNyVVFFeE1USnlCZ1lFVmlJa0R3c0o4UDVLVHZEN1BtVlAwTGlmSDQ0V2RIZDhGRFExZUg2QVVPMFFGQVpDZkgvVC96T24rLzZ0WHgvM2ZzbEg4LzYzckxIL3JhdGh1bTVseGVRT2wyU0NxOElDSWNOT3Z5NWVxL24vMGdPZi8xMC9NLzkrL1p2Ny80Qzd6MzFxZ0lSWVdYQjVBSmZnTnljbmk3TDV6aS9uTnMwZE0vNzkvWnY3LzVRUHovK2VQbWYvZnY4djhyNjZXN1k2bEpaYzdVQmx1UXlJakdVUmFteG1hN3Q1aWZ2dnFHZlAvYjBCWGdBejU4SWJwLytNSExQOXFhem51V0Zpd2cxeUNPMHg4ZklDR3RESTBQYnJQL09iNUUrYi9IOTlBREFKNTUrRmRsbjgxRld4M1RFellQSUZLY2JxRTBjT0RRYlN6bmFIcDRUMklJWi9mTS8vLytoSG9IU0Q3d1QzbWY5V1ZiTGROVExoQWh1QjBDZGlRamc2RzVrZEFRejRBWFFFS2s4K2dNQUVhOHVnQjg3L0tjcmJiUmtiZzJPR0FhTUVFWUVPNk80RXV1Y3Y4OXMwTFlGaThaZjcvQ1dqSU82QjNIajlrL2xkZXluYmIxSlRMUjE2ZWdDRmRRSmVBREhrQnRCMWtDTWhMb0VCKzhvanBiM1ltNnkxdEZXRmZlWGw1L0laMGRqSzBQTDdIOVBiTlM2Yi9QNzR3QWRNSjAvOG45em4rdDVmSy9JMnlNcnVwSUN6bUQxV1BGVENDWXFlOWxhSGx3VjJtdHk4ZXMvL2Z0MUhrLzlJcXQvOUhxb3Ivcms1UGZ5VXRKRFFicWhZM3NMRmhFQTMwWlcvcHlqSjh1NnM4OC8vZWtwSXY1ZTZlRjIyVmxWUEV1TGxCR1k4Z1lEU1dsQlJKc0xac3FmTDB2dTJtcWRubXJLcXFCQlRINlgrc3dFL2RpamZWMWxaU1ZGU1VCOGhsaElneU1BQUFmcmNDSTR0eDNxNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pY29uL2VyYXNlci5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ljb24vcGVuY2lsLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbi9wZW5jaWwucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pY29uL2VyYXNlci5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlLmdhbWUtdGFibGUge1xcclxcbiAgICBjdXJzb3I6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlLmVyYXNlciB7XFxyXFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSwgZGVmYXVsdDtcXHJcXG59XFxyXFxudGQge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG50ZDphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxudGQuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZ3VyZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUuZHJhZ2dhYmxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4vT2JzZXJ2ZXInO1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBnYW1lOiBHYW1lO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9ic2VydmVyczogQXJyYXk8T2JzZXJ2ZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvd3MgPSAxMCwgY29sdW1ucyA9IDEwLCBwcml2YXRlIHNwZWVkID0gMSkge1xyXG4gICAgICAgIHJvd3MgPSByb3dzID8gcm93cyA6IDEwO1xyXG4gICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zID8gY29sdW1ucyA6IDEwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkID8gdGhpcy5zcGVlZCA6IDE7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShyb3dzLCBjb2x1bW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IE9ic2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUob2JzZXJ2ZXI6IE9ic2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZmlsdGVyKChvYnM6IE9ic2VydmVyKTogYm9vbGVhbiA9PiBvYnMgIT0gb2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZWQocGFyYW1zOiB7dHlwZTogc3RyaW5nfSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBldmVudDogRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcclxuICAgICAgICAgICAgaW50ZXJ2YWxJZDogdGhpcy5pbnRlcnZhbElkLFxyXG4gICAgICAgICAgICBzcGVlZDogdGhpcy5zcGVlZCxcclxuICAgICAgICAgICAgcm93czogdGhpcy5nYW1lLnJvd3MsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuZ2FtZS5jb2x1bW5zLFxyXG4gICAgICAgICAgICBoYXNCb3VuZGFyaWVzOiB0aGlzLmdhbWUuaGFzQm91bmRhcmllcyxcclxuICAgICAgICAgICAgLi4uIHBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXI6IE9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5vdGlmeShldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlZWRVcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZWQoe3R5cGU6ICdzcGVlZFVwJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWVkRG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkLz0yOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkLT0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkKHt0eXBlOiAnc3BlZWREb3duJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZCh7dHlwZTogJ3BhdXNlJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50czogQXJyYXk8UG9pbnQ+ID0gdGhpcy5nYW1lLnR1cm4oKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVkKDxhbnk+e3R5cGU6ICd0dXJuJywgcG9pbnRzfSk7XHJcbiAgICAgICAgfSwgMTAwMC90aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZWQoe3R5cGU6ICdzdGFydCd9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmluaXRpYWxpemUodGhpcy5nYW1lLnJvd3MsIHRoaXMuZ2FtZS5jb2x1bW5zKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZWQoe3R5cGU6ICdyZXNldCd9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXZlKHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2V0TGl2ZShwb2ludCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkKDxhbnk+e3R5cGU6ICdzZXRMaXZlJywgcG9pbnRzOiBbcG9pbnRdfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW1wdHkocG9pbnQ6IFBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zZXRFbXB0eShwb2ludCk7XHJcbiAgICAgICAgbGV0IG9iaiAgPSB7dHlwZTogJ3NldEVtcHR5JywgcG9pbnR9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlZCg8YW55Pnt0eXBlOiAnc2V0RW1wdHknLCBwb2ludHM6IFtwb2ludF19KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2ludChwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmdldFBvaW50KHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpc09uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVydmFsSWQgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm93cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUucm93cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sdW1ucygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcm93cyhyb3dzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmluaXRpYWxpemUocm93cywgdGhpcy5nYW1lLmNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZCh7dHlwZTogJ3NldFJvd3MnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNvbHVtbnMoY29sdW1uczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbml0aWFsaXplKHRoaXMuZ2FtZS5yb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZWQoe3R5cGU6ICdzZXRDb2x1bW5zJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNCb3VuZGFyaWVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuaGFzQm91bmRhcmllcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGFzQm91bmRhcmllcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5oYXNCb3VuZGFyaWVzID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50R2VuOiBBcnJheTxBcnJheTxib29sZWFuPj47XHJcbiAgICBwcml2YXRlIF9uZXh0R2VuOiBBcnJheTxBcnJheTxib29sZWFuPj47XHJcbiAgICBwcml2YXRlIF9oYXNCb3VuZGFyaWVzOiBib29sZWFuO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3Iocm93cyA9IDMwLCBjb2x1bW5zID0gMzApe1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZShyb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLl9oYXNCb3VuZGFyaWVzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShyb3dzID0gMzAsIGNvbHVtbnMgPSAzMCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRHZW4gPSBBcnJheShyb3dzKTtcclxuICAgICAgICB0aGlzLl9uZXh0R2VuID0gQXJyYXkocm93cyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEdlbltpXSA9IEFycmF5KGNvbHVtbnMpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9uZXh0R2VuW2ldID0gQXJyYXkoY29sdW1ucykuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oKTogQXJyYXk8UG9pbnQ+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkUG9pbnRzOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICB0aGlzLl9uZXh0R2VuLmZvckVhY2goKHZhbHVlczogYm9vbGVhbltdLCB5OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOiBib29sZWFuLCB4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25leHRHZW5beV1beF0gPSB0aGlzLmlzQWxpdmUobmV3IFBvaW50KHgsIHkpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZXh0R2VuW3ldW3hdICE9IHRoaXMuX2N1cnJlbnRHZW5beV1beF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRQb2ludHMucHVzaChuZXcgUG9pbnQoeCwgeSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9uZXh0R2VuLmZvckVhY2goKHZhbHVlczogYm9vbGVhbltdLCB5OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEdlblt5XSA9IHZhbHVlcy5zbGljZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkUG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvaW50KHBvaW50OiBQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB4OiBudW1iZXIgPSBwb2ludC54O1xyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSBwb2ludC55O1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JvdW5kYXJpZXMgJiYgKHggPCAwIHx8IHggPj0gdGhpcy5jb2x1bW5zIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5yb3dzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSB4IDwgMCA/ICh0aGlzLmNvbHVtbnMgKyB4KSA6IHg7XHJcbiAgICAgICAgeCA9IHggPj0gdGhpcy5jb2x1bW5zID8gKHggLSB0aGlzLmNvbHVtbnMpIDogeDtcclxuICAgICAgICB5ID0geSA8IDAgPyAodGhpcy5yb3dzICsgeSkgOiB5O1xyXG4gICAgICAgIHkgPSB5ID49IHRoaXMucm93cyA/ICh5IC0gdGhpcy5yb3dzKSA6IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRHZW5beV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGl2ZShwb2ludDogUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50R2VuW3BvaW50LnldW3BvaW50LnhdID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbXB0eShwb2ludDogUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50R2VuW3BvaW50LnldW3BvaW50LnhdID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRHZW4oKTogQXJyYXk8QXJyYXk8Ym9vbGVhbj4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEdlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmV4dEdlbigpOiBBcnJheTxBcnJheTxib29sZWFuPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZXh0R2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByb3dzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEdlbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbHVtbnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50R2VuWzBdLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzQm91bmRhcmllcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGFzQm91bmRhcmllcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGFzQm91bmRhcmllcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hhc0JvdW5kYXJpZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQWxpdmUocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQ6IGJvb2xlYW4gPSB0aGlzLmdldFBvaW50KHBvaW50KTtcclxuICAgICAgICBsZXQgYWxpdmVOZWlnaGJvdXJzQ291bnQ6IG51bWJlciA9IHRoaXMuZ2V0TmVpZ2hib3Vycyhwb2ludCkuZmlsdGVyKCh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW4gPT4gdmFsdWUpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPyBbMiwzXS5pbmNsdWRlcyhhbGl2ZU5laWdoYm91cnNDb3VudCkgOiBhbGl2ZU5laWdoYm91cnNDb3VudD09MztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5laWdoYm91cnMocG9pbnQ6IFBvaW50KTogQXJyYXk8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXJzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLmdldFBvaW50KG5ldyBQb2ludChwb2ludC54LTEsIHBvaW50LnkrMSkpKTtcclxuICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy5nZXRQb2ludChuZXcgUG9pbnQocG9pbnQueCwgcG9pbnQueSsxKSkpO1xyXG4gICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLmdldFBvaW50KG5ldyBQb2ludChwb2ludC54KzEsIHBvaW50LnkrMSkpKTtcclxuICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy5nZXRQb2ludChuZXcgUG9pbnQocG9pbnQueCsxLCBwb2ludC55KSkpO1xyXG4gICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLmdldFBvaW50KG5ldyBQb2ludChwb2ludC54KzEsIHBvaW50LnktMSkpKTtcclxuICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy5nZXRQb2ludChuZXcgUG9pbnQocG9pbnQueCwgcG9pbnQueS0xKSkpO1xyXG4gICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLmdldFBvaW50KG5ldyBQb2ludChwb2ludC54LTEsIHBvaW50LnktMSkpKTsgXHJcbiAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KHBvaW50LngtMSwgcG9pbnQueSkpKTtcclxuICAgICAgICByZXR1cm4gbmVpZ2hib3VycztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJjbGFzcyBQb2ludCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3g6IG51bWJlciwgcHJpdmF0ZSBfeTogbnVtYmVyKXt9XHJcblxyXG4gICAgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XHJcbmltcG9ydCBFcmFzZXJDaGVja2JveCBmcm9tICcuL0VyYXNlckNoZWNrYm94JztcclxuaW1wb3J0IFRhYmxlQ29tcG9uZW50IGZyb20gJy4vVGFibGUnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyJztcclxuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4uL09ic2VydmVyJztcclxuaW1wb3J0IENvbnRyb2xsZXJFdmVudCBmcm9tICcuLi9FdmVudCc7XHJcbmltcG9ydCBGaWd1cmUgZnJvbSAnLi9maWd1cmVzL0ZpZ3VyZSc7XHJcbmltcG9ydCBHbGlkZXIgZnJvbSAnLi9maWd1cmVzL0dsaWRlcic7XHJcbmltcG9ydCBTbWFsbEV4cGxvZGVyIGZyb20gJy4vZmlndXJlcy9TbWFsbEV4cGxvZGVyJztcclxuaW1wb3J0IEV4cGxvZGVyIGZyb20gJy4vZmlndXJlcy9FeHBsb2Rlcic7XHJcbmltcG9ydCBTcGFjZXNoaXAgZnJvbSAnLi9maWd1cmVzL1NwYWNlc2hpcCc7XHJcbmltcG9ydCBUdW1ibGVyIGZyb20gJy4vZmlndXJlcy9UdW1ibGVyJztcclxuaW1wb3J0IEdsaWRlckd1biBmcm9tICcuL2ZpZ3VyZXMvR2xpZGVyR3VuJztcclxuXHJcbmNsYXNzIENvbnRyb2xzQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50LCBPYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250cm9sczogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGF1c2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJvbGxlcjogQ29udHJvbGxlciwgcHJpdmF0ZSB0YWJsZTogVGFibGVDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5jcmVhdGVDb250cm9scygpOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29udHJvbHMoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzJyk7XHJcbiAgICAgICAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaXplU2VjdGlvbigpKTtcclxuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNwZWVkU2VjdGlvbigpKTtcclxuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbnNTZWN0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQnV0dG9uc1NlY3Rpb24oKSk7XHJcbiAgICAgICAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGaWd1cmVzU2VsZWN0KCkpO1xyXG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRmlndXJlQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIHJldHVybiBjb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNpemVTZWN0aW9uKCk6IEhUTUxFbGVtZW50e1xyXG4gICAgICAgIGNvbnN0IHNpemVzU2VjdGlvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgc2l6ZXNTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUm93c1NlbGVjdCgpKTtcclxuICAgICAgICBzaXplc1NlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb2x1bW5zU2VsZWN0KCkpO1xyXG4gICAgICAgIHJldHVybiBzaXplc1NlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzU2VsZWN0KCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGNvbnN0IHNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gXCJSb3dzOiBcIjtcclxuICAgICAgICBjb25zdCBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50ID0gdGhpcy5jcmVhdGVTZWxlY3QoKTtcclxuICAgICAgICBzZWxlY3Qub25jaGFuZ2UgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnJvd3MgPSArc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTZWxlY3QoKTogSFRNTFNlbGVjdEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAzMDsgaSA8PSAyMDA7IGkgKz0gMTApIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnNTZWxlY3QoKTogSFRNTExhYmVsRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgY29uc3Qgc3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBcIkNvbHVtbnM6IFwiO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVNlbGVjdCgpO1xyXG4gICAgICAgIHNlbGVjdC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29sdW1ucyA9ICtzZWxlY3QudmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNwZWVkU2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgc3BlZWRTZWN0aW9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgICAgIHNwZWVkU2VjdGlvbi5pbm5lclRleHQgPSBcIlNwZWVkOiBcIjtcclxuICAgICAgICBzcGVlZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTcGVlZFVwQnV0dG9uKCkpO1xyXG4gICAgICAgIHNwZWVkU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNwZWVkRG93bkJ1dHRvbigpKTtcclxuICAgICAgICByZXR1cm4gc3BlZWRTZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlU3BlZWRVcEJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIuKGkVwiO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zcGVlZFVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTcGVlZERvd25CdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCLihpNcIjtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3BlZWREb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVPcHRpb25zU2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1NlY3Rpb246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIG9wdGlvbnNTZWN0aW9uLmlubmVyVGV4dCA9IFwiRHJhdyBtb2RlOiBcIjtcclxuICAgICAgICBvcHRpb25zU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVyYXNlck1vZGVDaGVja2JveCgpKTtcclxuICAgICAgICBvcHRpb25zU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJvdW5kYXJpZXNDaGVja2JveCgpKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9uc1NlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFcmFzZXJNb2RlQ2hlY2tib3goKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94OiBFcmFzZXJDaGVja2JveCA9IDxFcmFzZXJDaGVja2JveD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlcmFzZXItY2hlY2tib3gnKTtcclxuICAgICAgICBjaGVja2JveC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjaGVja2JveDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ1dHRvbnNTZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidXR0b25zOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5jcmVhdGVTdGFydEJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSB0aGlzLmNyZWF0ZVBhdXNlQnV0dG9uKCk7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0QnV0dG9uKTtcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKHRoaXMucGF1c2VCdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVSZXNldEJ1dHRvbigpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN0YXJ0QnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU3RhcnRcIjtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBhdXNlQnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiUGF1c2VcIjtcclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlc2V0QnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiUmVzZXRcIjtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvdW5kYXJpZXNDaGVja2JveCgpOiBIVE1MTGFiZWxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBsYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IFwiPHNwYW4+Qm91bmRhcmllczwvc3Bhbj5cIlxyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0aGlzLmNvbnRyb2xsZXIuaGFzQm91bmRhcmllcztcclxuICAgICAgICBjaGVja2JveC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuaGFzQm91bmRhcmllcyA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGaWd1cmVzU2VsZWN0KCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICc8c3Bhbj5GaWd1cmUgPC9zcGFuPic7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5nZXRGaWd1cmVzKCkpLmZvckVhY2goKGZpZ3VyZU5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGZpZ3VyZU5hbWU7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBmaWd1cmVOYW1lO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxlY3Qub25jaGFuZ2UgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcuZmlndXJlLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3QudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLmZpZ3VyZS1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLmdldEZpZ3VyZXMoKVtzZWxlY3QudmFsdWVdLmdldERPTUVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RmlndXJlcygpOiB7W2ZpZ3VyZU5hbWU6IHN0cmluZ106IEZpZ3VyZX0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdHbGlkZXInOiBuZXcgR2xpZGVyKHRoaXMuY29udHJvbGxlciksXHJcbiAgICAgICAgICAgICdTcGFjZXNoaXAnOiBuZXcgU3BhY2VzaGlwKHRoaXMuY29udHJvbGxlciksXHJcbiAgICAgICAgICAgICdTbWFsbEV4cGxvZGVyJzogbmV3IFNtYWxsRXhwbG9kZXIodGhpcy5jb250cm9sbGVyKSxcclxuICAgICAgICAgICAgJ0V4cGxvZGVyJzogbmV3IEV4cGxvZGVyKHRoaXMuY29udHJvbGxlciksXHJcbiAgICAgICAgICAgICdUdW1ibGVyJzogbmV3IFR1bWJsZXIodGhpcy5jb250cm9sbGVyKSxcclxuICAgICAgICAgICAgJ0dvc3BlciBHbGlkZXIgR3VuJzogbmV3IEdsaWRlckd1bih0aGlzLmNvbnRyb2xsZXIpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGaWd1cmVDb250YWluZXIoKXtcclxuICAgICAgICBjb25zdCBmaWd1cmVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlndXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpZ3VyZS1jb250YWluZXInKTtcclxuICAgICAgICByZXR1cm4gZmlndXJlQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERPTUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShldmVudDogQ29udHJvbGxlckV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGF1c2UnOiBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXJ0QnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGF1c2VCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dTdGFydEJ1dHRvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93UGF1c2VCdXR0b24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sc0NvbXBvbmVudDsiLCJjb25zdCBjc3MgPSByZXF1aXJlKCcuLi8uLi9zdHlsZS9lcmFzZXItY2hlY2tib3guY3NzJykudG9TdHJpbmcoKTtcclxuXHJcbmNsYXNzIEVyYXNlckNoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBzaGFkb3c6IFNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICAgICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbmNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcclxuICAgICAgICBjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG4gICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyYXNlckNoZWNrYm94Q29tcG9uZW50OyIsImltcG9ydCBUYWJsZUNvbXBvbmVudCBmcm9tICcuL1RhYmxlJztcclxuaW1wb3J0IENvbnRyb2xzQ29tcG9uZW50IGZyb20gJy4vQ29udHJvbHMnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyJztcclxuY29uc3QgY3NzID0gcmVxdWlyZSgnLi4vLi4vc3R5bGUvc3R5bGUuY3NzJykudG9TdHJpbmcoKTtcclxuXHJcbmNsYXNzIExpZmVDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudHtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRyb2xsZXI6IENvbnRyb2xsZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCt0aGlzLmdldEF0dHJpYnV0ZSgncm93cycpLCArdGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbHVtbnMnKSwgK3RoaXMuZ2V0QXR0cmlidXRlKCdzcGVlZCcpKTtcclxuICAgICAgICBsZXQgc2hhZG93OiBTaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xyXG4gICAgICAgIGxldCB0YWJsZSA9IG5ldyBUYWJsZUNvbXBvbmVudCh0aGlzLmNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGxldCBjb250cm9scyA9IG5ldyBDb250cm9sc0NvbXBvbmVudCh0aGlzLmNvbnRyb2xsZXIsIHRhYmxlKTtcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoY29udHJvbHMuZ2V0RE9NRWxlbWVudCgpKTtcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQodGFibGUuZ2V0RE9NRWxlbWVudCgpKTtcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5nZXRTdHlsZSgpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3Vic2NyaWJlKHRhYmxlKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3Vic2NyaWJlKGNvbnRyb2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0eWxlKCk6IEhUTUxTdHlsZUVsZW1lbnQge1xyXG4gICAgICAgIGxldCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlQ29tcG9uZW50OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyJztcclxuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4uL09ic2VydmVyJztcclxuaW1wb3J0IEV2ZW50IGZyb20gJy4uL0V2ZW50JztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4uL1BvaW50JztcclxuXHJcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50LCBPYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgdG9nZ2xlTW9kZVNldExpdmU6IGJvb2xlYW4gPSB0cnVlOyBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnRhYmxlID0gdGhpcy5jcmVhdGVUYWJsZSgpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLmdldE1vdXNlbW92ZUhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnRhYmxlLm9ubW91c2Vkb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9ICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKCdib3JkZXInLCBcIjFcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKHRhYmxlKTtcclxuICAgICAgICByZXR1cm4gdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSB7XHJcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY29udHJvbGxlci5yb3dzOyB5KyspIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbnRyb2xsZXIuY29sdW1uczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2VsbChuZXcgUG9pbnQoeCwgeSkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2x1bW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlQ2VsbChwb2ludDogUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1vZGVTZXRMaXZlID8gdGhpcy5jb250cm9sbGVyLnNldExpdmUocG9pbnQpIDogdGhpcy5jb250cm9sbGVyLnNldEVtcHR5KHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRET01FbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOlxyXG4gICAgICAgICAgICBjYXNlICdzZXRSb3dzJzpcclxuICAgICAgICAgICAgY2FzZSAnc2V0Q29sdW1ucyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModGhpcy50YWJsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2V0TGl2ZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NldEVtcHR5JzpcclxuICAgICAgICAgICAgY2FzZSAndHVybic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhYmxlKGV2ZW50LnBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDZWxsKHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKVtwb2ludC55XS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW3BvaW50LnhdO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXIuZ2V0UG9pbnQocG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRhYmxlKHVwZGF0ZWQ6IFBvaW50W10pOiB2b2lkIHtcclxuICAgICAgICB1cGRhdGVkLmZvckVhY2goKHBvaW50OiBQb2ludCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbGwocG9pbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1vZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNb2RlU2V0TGl2ZSA9ICF0aGlzLnRvZ2dsZU1vZGVTZXRMaXZlO1xyXG4gICAgICAgIGlmKHRoaXMudG9nZ2xlTW9kZVNldExpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdlcmFzZXInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLmNsYXNzTGlzdC5hZGQoJ2VyYXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1vdXNlbW92ZUhhbmRsZXIoKTogKHRoaXM6IERvY3VtZW50LCBlOiBNb3VzZUV2ZW50KSA9PiBhbnkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGhpczogRG9jdW1lbnQsIGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiBFbGVtZW50ID0gPEVsZW1lbnQ+ZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW06IEVsZW1lbnQgPSB0YXJnZXQuc2hhZG93Um9vdCA/IHRhcmdldC5zaGFkb3dSb290LmVsZW1lbnRGcm9tUG9pbnQoZS54LCBlLnkpIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7IiwiaW1wb3J0IEZpZ3VyZSBmcm9tICcuL0ZpZ3VyZSc7XHJcblxyXG5jbGFzcyBFeHBsb2RlciBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogYm9vbGVhbltdW117XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgWyB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUgXSxcclxuICAgICAgICAgICAgWyB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlIF0sXHJcbiAgICAgICAgICAgIFsgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUgXSxcclxuICAgICAgICAgICAgWyB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUgXSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb2RlcjsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9Qb2ludCc7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXInO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgRmlndXJlIGltcGxlbWVudHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBBcnJheTxBcnJheTxib29sZWFuPj47XHJcbiAgICBwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJvbGxlcjogQ29udHJvbGxlcil7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuICAgICAgICB0aGlzLnRhYmxlID0gdGhpcy5jcmVhdGVUYWJsZSgpO1xyXG4gICAgICAgIHRoaXMudGFibGUub25tb3VzZWRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2xvbmVUYWJsZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IGFueSA9IHRoaXMuZ2V0TW91c2VNb3ZlSGFuZGxlcih0YWJsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlciAoZXZlbnQ6IE1vdXNlRXZlbnQpOiBhbnkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRNb3VzZVVwSGFuZGxlcih0YWJsZSkoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0Q29vcmRpbmF0ZXMoKTogQXJyYXk8QXJyYXk8Ym9vbGVhbj4+O1xyXG5cclxuICAgIGdldERPTUVsZW1lbnQoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKCdib3JkZXInLCBcIjFcIik7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnZmlndXJlJyk7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcy5mb3JFYWNoKCh2YWx1ZXM6IGJvb2xlYW5bXSwgeTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYm9vbGVhbiwgeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNsb25lVGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSA8SFRNTFRhYmxlRWxlbWVudD50aGlzLnRhYmxlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICB0YWJsZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGFibGUuc3R5bGUudG9wID0gdGhpcy50YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAncHgnO1xyXG4gICAgICAgIHRhYmxlLnN0eWxlLmxlZnQgPSB0aGlzLnRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAncHgnO1xyXG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2ZpZ3VyZScsICdkcmFnZ2FibGUnKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmdldFJvb3ROb2RlKCkuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIHJldHVybiB0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1vdXNlVXBIYW5kbGVyKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiBhbnkge1xyXG4gICAgICAgIHJldHVybiAoZXZlbnQ6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb290OiBTaGFkb3dSb290ID0gPFNoYWRvd1Jvb3Q+dGhpcy50YWJsZS5nZXRSb290Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50czogRWxlbWVudFtdID0gcm9vdC5lbGVtZW50c0Zyb21Qb2ludCh0YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgMSwgdGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgMSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVUYWJsZSA9IGVsZW1lbnQuY2xvc2VzdCgnLmdhbWUtdGFibGUnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVUYWJsZSAmJiBlbGVtZW50ICE9IGdhbWVUYWJsZSAmJiB0aGlzLmZpdHNJbnNpZGUodGFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUZpZ3VyZSh0aGlzLmdldENlbGxQb2ludCg8SFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50PmVsZW1lbnQsIDxIVE1MVGFibGVFbGVtZW50PmdhbWVUYWJsZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENlbGxQb2ludChjZWxsOiBIVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQsIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogUG9pbnQge1xyXG4gICAgICAgIGxldCBwb2ludDogUG9pbnQ7XHJcbiAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKChyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQsIHk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKS5mb3JFYWNoKCh0ZDogSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50LCB4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0ZCA9PSBjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ2V0TW91c2VNb3ZlSGFuZGxlcih0YWJsZTogSFRNTFRhYmxlRWxlbWVudCk6IChldmVudDogTW91c2VFdmVudCkgPT4gYW55IHtcclxuICAgICAgICBsZXQgZGVsdGFYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRlbHRhWTogbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiAoZXZlbnQ6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRlbHRhWCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZXZlbnQueCAtIHRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBldmVudC55IC0gdGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5zdHlsZS50b3AgPSBldmVudC55IC0gZGVsdGFZICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICAgICAgICB0YWJsZS5zdHlsZS5sZWZ0ID0gZXZlbnQueCAtIGRlbHRhWCArICdweCc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpdHNJbnNpZGUodGFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdmaXQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpdHNJbnNpZGUodGFibGU6IEhUTUxUYWJsZUVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdGFibGVSZWN0OiBET01SZWN0ID0gdGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdGFibGVzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gKDxTaGFkb3dSb290PnRoaXMudGFibGUuZ2V0Um9vdE5vZGUoKSkucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtdGFibGUnKTtcclxuICAgICAgICB0YWJsZXMuZm9yRWFjaCgoZ2FtZVRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZVRhYmxlUmVjdDogRE9NUmVjdCA9IGdhbWVUYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3dMZWZ0OiBib29sZWFuID0gZ2FtZVRhYmxlUmVjdC5sZWZ0ID4gdGFibGVSZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJmbG93UmlnaHQ6IGJvb2xlYW4gPSBnYW1lVGFibGVSZWN0LnJpZ2h0IDwgdGFibGVSZWN0LnJpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBvdmVyZmxvd1RvcDogYm9vbGVhbiA9IGdhbWVUYWJsZVJlY3QudG9wID4gdGFibGVSZWN0LnRvcDtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3dCb3R0b206IGJvb2xlYW4gPSBnYW1lVGFibGVSZWN0LmJvdHRvbSA8IHRhYmxlUmVjdC5ib3R0b207XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICFvdmVyZmxvd0xlZnQgJiYgIW92ZXJmbG93UmlnaHQgJiYgIW92ZXJmbG93VG9wICYmICFvdmVyZmxvd0JvdHRvbTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5RmlndXJlKGNvb3JkaW5hdGVzQWRqdXN0bWVudDogUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLmZvckVhY2goKHZhbHVlczogYm9vbGVhbltdLCB5OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOiBib29sZWFuLCB4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRMaXZlKG5ldyBQb2ludCh4ICsgY29vcmRpbmF0ZXNBZGp1c3RtZW50LngsIHkgKyBjb29yZGluYXRlc0FkanVzdG1lbnQueSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlndXJlOyIsImltcG9ydCBGaWd1cmUgZnJvbSAnLi9GaWd1cmUnO1xyXG5cclxuY2xhc3MgR2xpZGVyIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgICBnZXRDb29yZGluYXRlcygpOiBib29sZWFuW11bXXtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBbIGZhbHNlLCBmYWxzZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIHRydWUsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIHRydWUsIHRydWUgXSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGlkZXI7IiwiaW1wb3J0IEZpZ3VyZSBmcm9tICcuL0ZpZ3VyZSc7XHJcblxyXG5jbGFzcyBHbGlkZXJHdW4gZXh0ZW5kcyBGaWd1cmUge1xyXG5cclxuICAgIGdldENvb3JkaW5hdGVzKCk6IGJvb2xlYW5bXVtde1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSBdLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsaWRlckd1bjsiLCJpbXBvcnQgRmlndXJlIGZyb20gJy4vRmlndXJlJztcclxuXHJcbmNsYXNzIFNtYWxsRXhwbG9kZXIgZXh0ZW5kcyBGaWd1cmUge1xyXG5cclxuICAgIGdldENvb3JkaW5hdGVzKCk6IGJvb2xlYW5bXVtde1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIHRydWUsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgdHJ1ZSwgdHJ1ZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIGZhbHNlLCB0cnVlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIHRydWUsIGZhbHNlIF0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxFeHBsb2RlcjsiLCJpbXBvcnQgRmlndXJlIGZyb20gJy4vRmlndXJlJztcclxuXHJcbmNsYXNzIFNwYWNlc2hpcCBleHRlbmRzIEZpZ3VyZSB7XHJcblxyXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogYm9vbGVhbltdW117XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgWyBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UgXSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGFjZXNoaXA7IiwiaW1wb3J0IEZpZ3VyZSBmcm9tICcuL0ZpZ3VyZSc7XHJcblxyXG5jbGFzcyBUdW1ibGVyIGV4dGVuZHMgRmlndXJlIHtcclxuXHJcbiAgICBnZXRDb29yZGluYXRlcygpOiBib29sZWFuW11bXXtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBbIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UgXSxcclxuICAgICAgICAgICAgWyBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlIF0sXHJcbiAgICAgICAgICAgIFsgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSBdLFxyXG4gICAgICAgICAgICBbIHRydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUgXSxcclxuICAgICAgICAgICAgWyB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlIF0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHVtYmxlcjsiLCJpbXBvcnQgTGlmZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvTGlmZSc7XHJcbmltcG9ydCBFcmFzZXJDaGVja2JveENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvRXJhc2VyQ2hlY2tib3gnO1xyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsaWZlLWdhbWUnLCBMaWZlQ29tcG9uZW50KTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlcmFzZXItY2hlY2tib3gnLCBFcmFzZXJDaGVja2JveENvbXBvbmVudCk7IiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VyYXNlci1jaGVja2JveC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=