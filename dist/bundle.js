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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/js/item.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar coco = new _item__WEBPACK_IMPORTED_MODULE_0__[\"Item\"](\"+5 Dexterity Vest\", 10, 20);\nvar li;\nconsole.log(coco.name);\n\nvar Shop = /*#__PURE__*/function () {\n  function Shop() {\n    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n    _classCallCheck(this, Shop);\n\n    this.items = items;\n  }\n\n  _createClass(Shop, [{\n    key: \"updateQuality\",\n    value: function updateQuality() {\n      for (var i = 0; i < this.items.length; i++) {\n        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {\n          if (this.items[i].quality > 0) {\n            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {\n              this.items[i].quality = this.items[i].quality - 1;\n            }\n          }\n        } else {\n          if (this.items[i].quality < 50) {\n            this.items[i].quality = this.items[i].quality + 1;\n\n            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {\n              if (this.items[i].sellIn < 11) {\n                if (this.items[i].quality < 50) {\n                  this.items[i].quality = this.items[i].quality + 1;\n                }\n              }\n\n              if (this.items[i].sellIn < 6) {\n                if (this.items[i].quality < 50) {\n                  this.items[i].quality = this.items[i].quality + 1;\n                }\n              }\n            }\n          }\n        }\n\n        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {\n          this.items[i].sellIn = this.items[i].sellIn - 1;\n        }\n\n        if (this.items[i].sellIn < 0) {\n          if (this.items[i].name != 'Aged Brie') {\n            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {\n              if (this.items[i].quality > 0) {\n                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {\n                  this.items[i].quality = this.items[i].quality - 1;\n                }\n              }\n            } else {\n              this.items[i].quality = this.items[i].quality - this.items[i].quality;\n            }\n          } else {\n            if (this.items[i].quality < 50) {\n              this.items[i].quality = this.items[i].quality + 1;\n            }\n          }\n        }\n      }\n\n      return this.items;\n    }\n  }]);\n\n  return Shop;\n}();\n\nvar shop = new Shop();\nconsole.log(\"hello\");\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/item.js":
/*!************************!*\
  !*** ./src/js/item.js ***!
  \************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Item = function Item(name, sellIn, quality) {\n  _classCallCheck(this, Item);\n\n  this.name = name;\n  this.sellIn = sellIn;\n  this.quality = quality;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/item.js?");

/***/ })

/******/ });