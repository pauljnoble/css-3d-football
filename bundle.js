/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {import module from './script';
	__webpack_require__(2);
	document.write(module);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./_all.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./_all.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-size: 62.5%;\n  padding: 0;\n  margin: 0;\n}\n.velocity-animating {\n  transition: none !important;\n}\nbody {\n  background-image: -webkit-radial-gradient(ellipse, #2a437c 0, #10203b 100%);\n  font-family: 'Open Sans', helvetica, arial, sans-serif;\n}\nmain {\n  opacity: 0;\n}\n.static {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  padding: 0;\n  z-index: 3;\n}\n.static h1 {\n  margin: 50px 0 15px;\n  font-size: 50px;\n  font-weight: 800;\n  text-transform: uppercase;\n  line-height: 42px;\n  letter-spacing: -3px;\n  font-family: montserrat;\n}\n.static p {\n  font-weight: 300;\n  opacity: 0.4;\n  margin: 0 0 20px;\n  font-size: 16px;\n  color: #7f98d3;\n}\n.loading {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 16px;\n  line-height: 16px;\n  color: #fff;\n  font-family: 'montserrat';\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: -1px;\n  text-align: center;\n  opacity: 0;\n}\n.team-list {\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  list-style: none;\n  display: none;\n}\n.team-list li:first-child {\n  color: #fff;\n  font-weight: bold;\n}\n.team-list li {\n  font-size: 1.4rem;\n  margin: 0 0 10px;\n  color: #7f98d3;\n}\n.stage {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  perspective-origin: 50% -200px;\n  perspective: 1100px;\n  z-index: 1;\n  backface-visibility: hidden;\n}\n.world {\n  position: absolute;\n  top: 130px;\n  left: 50%;\n  margin-left: -336px;\n  width: 672px;\n  height: 840px;\n  transform: translateZ(-210px);\n  transform-style: preserve-3d;\n  z-index: 1;\n  backface-visibility: hidden;\n}\n.world.flipped {\n  transform: translateZ(-210px) rotateY(180deg);\n}\n.world.switched {\n  transform: translateZ(250px) rotateY(30deg) translateX(60px) translateY(-200px);\n}\n.switch-btn {\n  display: inline-block;\n  padding: 6px 15px;\n  border: solid 1px #7f98d3;\n  border-radius: 5px;\n  text-align: center;\n  color: #7f98d3;\n  text-decoration: none;\n  opacity: 1;\n  font-size: 12px;\n  transition: all 0.15s;\n}\n.switch-btn.disabled {\n  background: #7f98d3;\n  color: #2a437c;\n  cursor: default;\n}\n.switch-btn.disabled:hover {\n  color: #2a437c;\n}\n.switch-btn:hover {\n  color: #fff;\n}\n.switch-btn:first-child {\n  border-radius: 10px 0 0 10px;\n  border-right: none;\n}\n.switch-btn:last-child {\n  border-radius: 0 10px 10px 0;\n}\n.team {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n}\n.terrain {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-style: inherit;\n}\n.field {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  z-index: 2;\n  transform: rotateX(90deg) translateZ(0);\n  transform-origin: 50% 50%;\n  box-sizing: content-box;\n  backface-visibility: hidden;\n}\n.field--alt {\n  display: block;\n  width: 80%;\n  left: 10%;\n  transform: rotateX(90deg) translateZ(-10px);\n  background: #000;\n  opacity: 0.3;\n  box-shadow: 0 0 40px 30px #000;\n}\n.field__texture {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 3;\n}\n.field__texture.field__texture--gradient {\n  background-image: linear-gradient(to top, rgba(0,0,0,0.2), transparent);\n  z-index: 4;\n}\n.flipped .field__texture.field__texture--gradient {\n  opacity: 0;\n}\n.field__texture.field__texture--gradient-b {\n  opacity: 0;\n  background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent);\n  z-index: 4;\n}\n.flipped .field__texture.field__texture--gradient-b {\n  opacity: 1;\n}\n.texture .field__texture.field__texture--grass {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/grass2.png\");\n  background-repeat: repeat;\n  background-size: 75px 75px;\n  background-position: -20px -20px;\n}\n.field__side {\n  position: absolute;\n  top: 420px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  transform: rotateX(180deg) translateZ(-420px);\n  transform-origin: 50% 50%;\n  background-color: #f7f7f7;\n  z-index: 9;\n}\n.texture .field__side {\n  background-color: #000;\n}\n.texture .field__side:after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  opacity: 0.55;\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/mud.png\");\n  background-repeat: repeat;\n  background-size: 75px 75px;\n  background-position: -20px -20px;\n}\n.field__side.field__side--left,\n.field__side.field__side--right {\n  top: 0;\n  left: -8px;\n  height: 100%;\n  width: 8px;\n  transform-origin: 100% 50%;\n  transform: rotateX(90deg) rotateY(-90deg) translateZ(0);\n}\n.field__side.field__side--right {\n  left: auto;\n  right: 0;\n}\n.field__side.field__side--back {\n  transform: rotateX(180deg) translateZ(420px);\n}\n.field__line {\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  z-index: 4;\n}\n.field__line--goal {\n  width: 16%;\n  height: 6%;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-bottom: none;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 4%;\n}\n.field__line--goal--far {\n  top: 4%;\n  bottom: auto;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-top: none;\n}\n.field__line--penalty-arc {\n  width: 20%;\n  height: 20%;\n  overflow: hidden;\n  bottom: 20%;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.field__line--penalty-arc:after {\n  position: absolute;\n  top: 75%;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  content: ' ';\n  display: block;\n  border-radius: 50% 50% 0 0;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-bottom: none;\n  box-sizing: border-box;\n}\n.field__line--penalty-arc--far {\n  bottom: auto;\n  top: 20%;\n}\n.field__line--penalty-arc--far:after {\n  bottom: 75%;\n  top: auto;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-top: none;\n  border-radius: 0 0 50% 50%;\n}\n.field__line--penalty {\n  width: 44%;\n  height: 16%;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-bottom: none;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 4%;\n}\n.field__line--penalty--far {\n  top: 4%;\n  bottom: auto;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-top: none;\n}\n.field__line--outline {\n  width: 92%;\n  height: 92%;\n  top: 4%;\n  left: 4%;\n  border: solid 3px rgba(255,255,255,0.5);\n}\n.field__line--mid {\n  top: 50%;\n  width: 92%;\n  left: 4%;\n  background-color: rgba(255,255,255,0.5);\n}\n.field__line--circle {\n  width: 20%;\n  height: 20%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border: solid 3px rgba(255,255,255,0.5);\n  border-radius: 50%;\n}\n.debug-btn {\n  position: absolute;\n  right: 40px;\n  top: 40px;\n  border: solid 1px #fff;\n  border-radius: 10px;\n  height: 20px;\n  padding: 0 10px;\n  color: #fff;\n  text-decoration: none;\n  line-height: 20px;\n}\n.debug-btn:hover {\n  opacity: 1;\n  background-color: rgba(255,255,255,0.1);\n}\n.debug-btn.debug-btn--load {\n  top: 80px;\n}\n.player {\n  position: absolute;\n  height: 88px;\n  width: 65px;\n  padding-bottom: 23px;\n  z-index: 9;\n  left: 50%;\n  margin-left: -32.5px;\n  bottom: 50%;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.player .player__placeholder {\n  position: absolute;\n  opacity: 0;\n  transform: rotateX(90deg);\n  height: 30px;\n  width: 30px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 50%;\n  background-color: rgba(0,0,0,0.2);\n  z-index: 1;\n}\n.player.active .player__placeholder {\n  opacity: 1;\n}\n.player .player__card {\n  position: absolute;\n  bottom: 26px;\n  left: -82.5px;\n  height: 260px;\n  background-color: #f7f7f7;\n  opacity: 0;\n  width: 230px;\n  padding: 0;\n  font-size: 18px;\n  color: #333;\n  border-radius: 4px;\n  z-index: 2;\n}\n.player .player__card:after {\n  position: absolute;\n  display: block;\n  content: '';\n  height: 1px;\n  width: 1px;\n  border: solid 10px transparent;\n  border-top: solid 10px #eee;\n  bottom: -21px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: auto;\n  z-index: 3;\n}\n.player .player__card i {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 10px 15px;\n  font-size: 24px;\n  line-height: 20px;\n  color: #fff;\n  opacity: 0.3;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.player .player__card i:hover {\n  opacity: 0.6;\n}\n.player .player__card h3 {\n  text-align: center;\n  font-weight: normal;\n  text-transform: uppercase;\n  font-family: montserrat;\n  font-size: 19px;\n  line-height: 27px;\n  color: #333;\n  color: #fff;\n  padding: 15px 30px 40px;\n  margin: 0 0 30px;\n  background-color: #eee;\n  border-radius: 4px 4px 0 0;\n  background-color: #192642;\n}\n.player .player__card h3 span:first-child {\n  display: inline-block;\n  height: 27px;\n  width: 27px;\n  border-radius: 50%;\n  border: solid 1px #fff;\n  line-height: 27px;\n  opacity: 0.4;\n  font-size: 18px;\n}\n.player .player__card h3 span:last-child {\n  font-size: 14px;\n  opacity: 0.4;\n}\n.player .player__card p {\n  color: #777;\n  font-syle: italic;\n  text-align: center;\n}\n.player .player__card .player__card__list {\n  padding: 10px 0;\n  font-size: 14px;\n  color: #777;\n  overflow: auto;\n  text-align: center;\n}\n.player .player__card .player__card__list li {\n  display: inline-block;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 15px;\n  padding-left: 20px;\n  color: #333;\n}\n.player .player__card .player__card__list li span {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #aaa;\n}\n.player .player__card .player__card__list li:first-child {\n  padding-left: 0;\n  border-left: none;\n}\n.player .player__card .player__card__list--last {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background-color: #eee;\n  margin: 0;\n  padding: 0;\n  border-top: solid 1px #ddd;\n  border-radius: 0 0 6px 6px;\n  overflow: hidden;\n}\n.player .player__card .player__card__list--last li {\n  width: 50%;\n  padding: 10px 0 20px 0;\n  color: #a40028;\n  font-size: 28px;\n  line-height: 22px;\n}\n.player .player__card .player__card__list--last li:last-child {\n  border-left: solid 1px #ddd;\n}\n.player * {\n  pointer-events: none;\n}\n.player .player__img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 65px;\n  height: 65px;\n  z-index: 4;\n  overflow: hidden;\n  border-radius: 32.5px;\n  background-color: #000;\n  border: solid 1px #fff;\n  backface-visibility: hidden;\n  transition: all 0.2s;\n}\n.player .player__img img {\n  width: 100%;\n  transition: all 0.2s;\n  display: block;\n}\n.player .player__label {\n  position: absolute;\n  height: 20px;\n  display: inline-block;\n  width: auto;\n  overflow: visible;\n  white-space: nowrap;\n  left: -100%;\n  right: -100%;\n  margin: auto;\n  padding: 0 10px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 10px;\n  bottom: 0;\n  opacity: 0;\n  text-transform: upppercase;\n  transition: opacity 0.2s;\n  z-index: 2;\n  pointer-events: none;\n}\n.player .player__label span {\n  background-color: rgba(16,20,30,0.9);\n  color: #fff;\n  font-size: 11px;\n  padding: 3px 10px 2px 10px;\n  border-radius: 10px;\n  text-transform: upppercase;\n}\n.player:hover .player__img {\n  opacity: 1;\n}\n.player:hover .player__label {\n  opacity: 1;\n}\n.texture .player {\n  background-size: 100% auto;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);