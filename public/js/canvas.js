var canvas =
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/colorjoe/dist/colorjoe.js":
/*!*************************************************!*\
  !*** ../node_modules/colorjoe/dist/colorjoe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! colorjoe - v4.1.0 - Juho Vepsalainen <bebraw@gmail.com> - MIT
https://bebraw.github.com/colorjoe - 2018-07-03 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dragjs_umd = createCommonjsModule(function (module, exports) {
	(function (root, factory) {

	        {
	            module.exports = factory();
	        }

	    }(commonjsGlobal, function () {

	        /*! dragjs - v0.8.0 - Juho Vepsalainen <bebraw@gmail.com> - MIT
	https://bebraw.github.com/dragjs - 2018-07-03 */
	var drag = (function() {
	    function drag(elem, cbs) {
	        if(!elem) {
	            console.warn('drag is missing elem!');
	            return;
	        }

	        dragTemplate(elem, cbs, 'touchstart', 'touchmove', 'touchend');
	        dragTemplate(elem, cbs, 'mousedown', 'mousemove', 'mouseup');
	    }

	    function xyslider(o) {
	        var twod = div(o['class'] || '', o.parent);
	        var pointer = div('pointer', twod);
	        div('shape shape1', pointer);
	        div('shape shape2', pointer);
	        div('bg bg1', twod);
	        div('bg bg2', twod);

	        drag(twod, attachPointer(o.cbs, pointer));

	        return {
	            background: twod,
	            pointer: pointer
	        };
	    }

	    function slider(o) {
	        var oned = div(o['class'], o.parent);
	        var pointer = div('pointer', oned);
	        div('shape', pointer);
	        div('bg', oned);

	        drag(oned, attachPointer(o.cbs, pointer));

	        return {
	            background: oned,
	            pointer: pointer
	        };
	    }

	    drag.xyslider = xyslider;
	    drag.slider = slider;

	    return drag;

	    function attachPointer(cbs, pointer) {
	        var ret = {};

	        for(var n in cbs) {
	          ret[n] = wrap(cbs[n]);
	        }

	        function wrap(fn) {
	            return function(p) {
	                p.pointer = pointer;
	                fn(p);
	            };
	        }

	        return ret;
	    }

	    // move to elemutils lib?
	    function div(klass, p) {
	        return e('div', klass, p);
	    }

	    function e(type, klass, p) {
	        var elem = document.createElement(type);
	        if(klass) {
	          elem.className = klass;
	        }
	        p.appendChild(elem);

	        return elem;
	    }

	    function dragTemplate(elem, cbs, down, move, up) {

	        cbs = getCbs(cbs);

	        var beginCb = cbs.begin;
	        var changeCb = cbs.change;
	        var endCb = cbs.end;

	        on(elem, down, function(e) {

	            var moveHandler = partial(callCb, changeCb, elem);
	            function upHandler() {

	                off(document, move, moveHandler);
	                off(document, up, upHandler);

	                callCb(endCb, elem, e);
	            }

	            on(document, move, moveHandler);
	            on(document, up, upHandler);

	            callCb(beginCb, elem, e);
	        });
	    }

	    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
	    function on(elem, evt, handler) {
	        // Test via a getter in the options object to see if the passive property is accessed
	        var supportsPassive = false;
	        try {
	        var opts = Object.defineProperty({}, 'passive', {
	            get: function() {
	            supportsPassive = true;
	            }
	        });
	        window.addEventListener("testPassive", null, opts);
	        window.removeEventListener("testPassive", null, opts);
	        } catch (e) {}

	        elem.addEventListener(evt, handler, supportsPassive ? { passive: false } : false);
	    }

	    function off(elem, evt, handler) {
	      elem.removeEventListener(evt, handler, false);
	    }

	    function getCbs(cbs) {
	        if(!cbs) {
	            var initialOffset;
	            var initialPos;

	            return {
	                begin: function(c) {
	                    initialOffset = {x: c.elem.offsetLeft, y: c.elem.offsetTop};
	                    initialPos = c.cursor;
	                },
	                change: function(c) {
	                    style(c.elem, 'left', (initialOffset.x + c.cursor.x - initialPos.x) + 'px');
	                    style(c.elem, 'top', (initialOffset.y + c.cursor.y - initialPos.y) + 'px');
	                },
	                end: empty
	            };
	        }
	        else {
	            return {
	                begin: cbs.begin || empty,
	                change: cbs.change || empty,
	                end: cbs.end || empty
	            };
	        }
	    }

	    // TODO: set draggable class (handy for fx)
	    function style(e, prop, value) {
	        e.style[prop] = value;
	    }

	    function empty() {}

	    function callCb(cb, elem, e) {
	        e.preventDefault();

	        var offset = findPos(elem);
	        var width = elem.clientWidth;
	        var height = elem.clientHeight;
	        var cursor = {
	            x: cursorX(elem, e),
	            y: cursorY(elem, e)
	        };
	        var x = (cursor.x - offset.x) / width;
	        var y = (cursor.y - offset.y) / height;

	        cb({
	            x: isNaN(x)? 0: x,
	            y: isNaN(y)? 0: y,
	            cursor: cursor,
	            elem: elem,
	            e: e
	        });
	    }

	    // http://stackoverflow.com/questions/4394747/javascript-curry-function
	    function partial(fn) {
	        var slice = Array.prototype.slice;
	        var args = slice.apply(arguments, [1]);

	        return function() {
	            return fn.apply(null, args.concat(slice.apply(arguments)));
	        };
	    }

	    // http://www.quirksmode.org/js/findpos.html
	    function findPos(e) {
	        var r = e.getBoundingClientRect();

	        return {
	            x: r.left,
	            y: r.top
	        };
	    }

	    // http://javascript.about.com/library/blmousepos.htm
	    function cursorX(elem, evt) {
	        var evtPos = evt.touches ? evt.touches[evt.touches.length -1] : evt;
	        return evtPos.clientX;
	    }
	    function cursorY(elem, evt) {
	        var evtPos = evt.touches ? evt.touches[evt.touches.length -1] : evt;
	        return evtPos.clientY;
	    }
	})();
	        return drag;

	    }));
	});

	var oneColorAll = createCommonjsModule(function (module, exports) {
	!function(e,a){module.exports=a();}(commonjsGlobal,function(){function e(a){if(Array.isArray(a)){if("string"==typeof a[0]&&"function"==typeof e[a[0]])return new e[a[0]](a.slice(1,a.length));if(4===a.length)return new e.RGB(a[0]/255,a[1]/255,a[2]/255,a[3]/255)}else if("string"==typeof a){var r=a.toLowerCase();e.namedColors[r]&&(a="#"+e.namedColors[r]),"transparent"===r&&(a="rgba(0,0,0,0)");var o=a.match(i);if(o){var s=o[1].toUpperCase(),f=t(o[8])?o[8]:parseFloat(o[8]),u="H"===s[0],l=o[3]?100:u?360:255,h=o[5]||u?100:255,c=o[7]||u?100:255;if(t(e[s]))throw new Error("color."+s+" is not installed.");return new e[s](parseFloat(o[2])/l,parseFloat(o[4])/h,parseFloat(o[6])/c,f)}a.length<6&&(a=a.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var d=a.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(d)return new e.RGB(parseInt(d[1],16)/255,parseInt(d[2],16)/255,parseInt(d[3],16)/255);if(e.CMYK){var b=a.match(new RegExp("^cmyk\\("+n.source+","+n.source+","+n.source+","+n.source+"\\)$","i"));if(b)return new e.CMYK(parseFloat(b[1])/100,parseFloat(b[2])/100,parseFloat(b[3])/100,parseFloat(b[4])/100)}}else if("object"==typeof a&&a.isColor)return a;return !1}var a=[],t=function(e){return void 0===e},r=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,n=/\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,i=new RegExp("^(rgb|hsl|hsv)a?\\("+r.source+","+r.source+","+r.source+"(?:,"+/\s*(\.\d+|\d+(?:\.\d+)?)\s*/.source+")?\\)$","i");e.namedColors={},e.installColorSpace=function(r,n,i){function o(a,t){var r={};r[t.toLowerCase()]=function(){return this.rgb()[t.toLowerCase()]()},e[t].propertyNames.forEach(function(e){var a="black"===e?"k":e.charAt(0);r[e]=r[a]=function(a,r){return this[t.toLowerCase()]()[e](a,r)};});for(var n in r)r.hasOwnProperty(n)&&void 0===e[a].prototype[n]&&(e[a].prototype[n]=r[n]);}e[r]=function(e){var a=Array.isArray(e)?e:arguments;n.forEach(function(e,t){var i=a[t];if("alpha"===e)this._alpha=isNaN(i)||i>1?1:i<0?0:i;else{if(isNaN(i))throw new Error("["+r+"]: Invalid color: ("+n.join(",")+")");"hue"===e?this._hue=i<0?i-Math.floor(i):i%1:this["_"+e]=i<0?0:i>1?1:i;}},this);},e[r].propertyNames=n;var s=e[r].prototype;["valueOf","hex","hexa","css","cssa"].forEach(function(e){s[e]=s[e]||("RGB"===r?s.hex:function(){return this.rgb()[e]()});}),s.isColor=!0,s.equals=function(e,a){t(a)&&(a=1e-10),e=e[r.toLowerCase()]();for(var i=0;i<n.length;i+=1)if(Math.abs(this["_"+n[i]]-e["_"+n[i]])>a)return !1;return !0},s.toJSON=function(){return [r].concat(n.map(function(e){return this["_"+e]},this))};for(var f in i)if(i.hasOwnProperty(f)){var u=f.match(/^from(.*)$/);u?e[u[1].toUpperCase()].prototype[r.toLowerCase()]=i[f]:s[f]=i[f];}return s[r.toLowerCase()]=function(){return this},s.toString=function(){return "["+r+" "+n.map(function(e){return this["_"+e]},this).join(", ")+"]"},n.forEach(function(e){var a="black"===e?"k":e.charAt(0);s[e]=s[a]=function(a,t){return void 0===a?this["_"+e]:t?new this.constructor(n.map(function(t){return this["_"+t]+(e===t?a:0)},this)):new this.constructor(n.map(function(t){return e===t?a:this["_"+t]},this))};}),a.forEach(function(e){o(r,e),o(e,r);}),a.push(r),e},e.pluginList=[],e.use=function(a){return -1===e.pluginList.indexOf(a)&&(this.pluginList.push(a),a(e)),e},e.installMethod=function(t,r){return a.forEach(function(a){e[a].prototype[t]=r;}),this},e.installColorSpace("RGB",["red","green","blue","alpha"],{hex:function(){var e=(65536*Math.round(255*this._red)+256*Math.round(255*this._green)+Math.round(255*this._blue)).toString(16);return "#"+"00000".substr(0,6-e.length)+e},hexa:function(){var e=Math.round(255*this._alpha).toString(16);return "#"+"00".substr(0,2-e.length)+e+this.hex().substr(1,6)},css:function(){return "rgb("+Math.round(255*this._red)+","+Math.round(255*this._green)+","+Math.round(255*this._blue)+")"},cssa:function(){return "rgba("+Math.round(255*this._red)+","+Math.round(255*this._green)+","+Math.round(255*this._blue)+","+this._alpha+")"}});var o=e,s=function(e){e.installColorSpace("XYZ",["x","y","z","alpha"],{fromRgb:function(){var a=function(e){return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92},t=a(this._red),r=a(this._green),n=a(this._blue);return new e.XYZ(.4124564*t+.3575761*r+.1804375*n,.2126729*t+.7151522*r+.072175*n,.0193339*t+.119192*r+.9503041*n,this._alpha)},rgb:function(){var a=this._x,t=this._y,r=this._z,n=function(e){return e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e};return new e.RGB(n(3.2404542*a+-1.5371385*t+-.4985314*r),n(-.969266*a+1.8760108*t+.041556*r),n(.0556434*a+-.2040259*t+1.0572252*r),this._alpha)},lab:function(){var a=function(e){return e>.008856?Math.pow(e,1/3):7.787037*e+4/29},t=a(this._x/95.047),r=a(this._y/100),n=a(this._z/108.883);return new e.LAB(116*r-16,500*(t-r),200*(r-n),this._alpha)}});},f=function(e){e.use(s),e.installColorSpace("LAB",["l","a","b","alpha"],{fromRgb:function(){return this.xyz().lab()},rgb:function(){return this.xyz().rgb()},xyz:function(){var a=function(e){var a=Math.pow(e,3);return a>.008856?a:(e-16/116)/7.87},t=(this._l+16)/116,r=this._a/500+t,n=t-this._b/200;return new e.XYZ(95.047*a(r),100*a(t),108.883*a(n),this._alpha)}});},u=function(e){e.installColorSpace("HSV",["hue","saturation","value","alpha"],{rgb:function(){var a,t,r,n=this._hue,i=this._saturation,o=this._value,s=Math.min(5,Math.floor(6*n)),f=6*n-s,u=o*(1-i),l=o*(1-f*i),h=o*(1-(1-f)*i);switch(s){case 0:a=o,t=h,r=u;break;case 1:a=l,t=o,r=u;break;case 2:a=u,t=o,r=h;break;case 3:a=u,t=l,r=o;break;case 4:a=h,t=u,r=o;break;case 5:a=o,t=u,r=l;}return new e.RGB(a,t,r,this._alpha)},hsl:function(){var a,t=(2-this._saturation)*this._value,r=this._saturation*this._value,n=t<=1?t:2-t;return a=n<1e-9?0:r/n,new e.HSL(this._hue,a,t/2,this._alpha)},fromRgb:function(){var a,t=this._red,r=this._green,n=this._blue,i=Math.max(t,r,n),o=Math.min(t,r,n),s=i-o,f=0===i?0:s/i,u=i;if(0===s)a=0;else switch(i){case t:a=(r-n)/s/6+(r<n?1:0);break;case r:a=(n-t)/s/6+1/3;break;case n:a=(t-r)/s/6+2/3;}return new e.HSV(a,f,u,this._alpha)}});},l=function(e){e.use(u),e.installColorSpace("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var a,t=2*this._lightness,r=this._saturation*(t<=1?t:2-t);return a=t+r<1e-9?0:2*r/(t+r),new e.HSV(this._hue,a,(t+r)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}});},h=function(e){e.installColorSpace("CMYK",["cyan","magenta","yellow","black","alpha"],{rgb:function(){return new e.RGB(1-this._cyan*(1-this._black)-this._black,1-this._magenta*(1-this._black)-this._black,1-this._yellow*(1-this._black)-this._black,this._alpha)},fromRgb:function(){var a=this._red,t=this._green,r=this._blue,n=1-a,i=1-t,o=1-r,s=1;return a||t||r?(s=Math.min(n,Math.min(i,o)),n=(n-s)/(1-s),i=(i-s)/(1-s),o=(o-s)/(1-s)):s=1,new e.CMYK(n,i,o,s,this._alpha)}});},c=function(e){e.namedColors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};},d=function(e){e.installMethod("clearer",function(e){return this.alpha(isNaN(e)?-.1:-e,!0)});},b=function(e){e.use(l),e.installMethod("darken",function(e){return this.lightness(isNaN(e)?-.1:-e,!0)});},p=function(e){e.use(l),e.installMethod("desaturate",function(e){return this.saturation(isNaN(e)?-.1:-e,!0)});},g=function(e){function a(){var a=this.rgb(),t=.3*a._red+.59*a._green+.11*a._blue;return new e.RGB(t,t,t,a._alpha)}e.installMethod("greyscale",a).installMethod("grayscale",a);},_=function(e){e.use(l),e.installMethod("lighten",function(e){return this.lightness(isNaN(e)?.1:e,!0)});},m=function(e){e.installMethod("mix",function(a,t){a=e(a).rgb(),t=1-(isNaN(t)?.5:t);var r=2*t-1,n=this._alpha-a._alpha,i=((r*n==-1?r:(r+n)/(1+r*n))+1)/2,o=1-i,s=this.rgb();return new e.RGB(s._red*i+a._red*o,s._green*i+a._green*o,s._blue*i+a._blue*o,s._alpha*t+a._alpha*(1-t))});},w=function(e){e.installMethod("negate",function(){var a=this.rgb();return new e.RGB(1-a._red,1-a._green,1-a._blue,this._alpha)});},y=function(e){e.installMethod("opaquer",function(e){return this.alpha(isNaN(e)?.1:e,!0)});},v=function(e){e.use(l),e.installMethod("rotate",function(e){return this.hue((e||0)/360,!0)});},k=function(e){e.use(l),e.installMethod("saturate",function(e){return this.saturation(isNaN(e)?.1:e,!0)});},M=function(e){e.installMethod("toAlpha",function(e){var a=this.rgb(),t=e(e).rgb(),r=new e.RGB(0,0,0,a._alpha),n=["_red","_green","_blue"];return n.forEach(function(e){a[e]<1e-10?r[e]=a[e]:a[e]>t[e]?r[e]=(a[e]-t[e])/(1-t[e]):a[e]>t[e]?r[e]=(t[e]-a[e])/t[e]:r[e]=0;}),r._red>r._green?r._red>r._blue?a._alpha=r._red:a._alpha=r._blue:r._green>r._blue?a._alpha=r._green:a._alpha=r._blue,a._alpha<1e-10?a:(n.forEach(function(e){a[e]=(a[e]-t[e])/a._alpha+t[e];}),a._alpha*=r._alpha,a)});};return o.use(s).use(f).use(u).use(l).use(h).use(c).use(d).use(b).use(p).use(g).use(_).use(m).use(w).use(y).use(v).use(k).use(M)});

	});

	var div = partial(e, 'div');

	function e(type, klass, p) {
	    var elem = document.createElement(type);
	    elem.className = klass;
	    p.appendChild(elem);

	    return elem;
	}

	// http://stackoverflow.com/questions/4394747/javascript-curry-function
	function partial(fn) {
	    var slice = Array.prototype.slice;
	    var args = slice.apply(arguments, [1]);

	    return function() {
	        return fn.apply(null, args.concat(slice.apply(arguments)));
	    };
	}

	function labelInput(klass, n, p, maxLen) {
	    var id = "colorPickerInput" + Math.floor(Math.random() * 1001);
	    var d = div(klass, p);
	    var l = label(n, d, id);
	    var i = input('text', d, maxLen, id);

	    return {
	        label: l, 
	        input: i
	    };
	}

	function label(c, p, id) {
	    var elem = e('label', '', p);
	    elem.innerHTML = c;

	    if (id) {
	        elem.setAttribute('for', id);
	    }

	    return elem;
	}

	function input(t, p, maxLen, id) {
	    var elem = e('input', '', p);
	    elem.type = t;

	    if(maxLen) { 
	        elem.maxLength = maxLen;
	    }

	    if (id) {
	        elem.setAttribute('id', id);
	    }

	    if(maxLen) {
	        elem.maxLength = maxLen;
	    }

	    return elem;
	}

	function X(p, a) {
	    p.style.left = clamp(a * 100, 0, 100) + '%';
	}
	function Y(p, a) {
	    p.style.top = clamp(a * 100, 0, 100) + '%';
	}
	function BG(e, c) {
	    e.style.background = c;
	}

	function clamp(a, minValue, maxValue) {
	    return Math.min(Math.max(a, minValue), maxValue);
	}

	var utils = {
	    clamp: clamp,
	    e: e,
	    div: div,
	    partial: partial,
	    labelInput: labelInput,
	    X: X,
	    Y: Y,
	    BG: BG
	};

	function currentColor(p) {
	    var e1 = utils.div('currentColorContainer', p);
	    var e = utils.div('currentColor', e1);

	    return {
	        change: function(col) {
	            utils.BG(e, col.cssa());
	        }
	    };
	}

	function fields(p, joe, o) {
	    var cs = o.space;
	    var fac = o.limit || 255;
	    var fix = o.fix >= 0? o.fix: 0;
	    var inputLen = ('' + fac).length + fix;
	    inputLen = fix? inputLen + 1: inputLen;

	    var initials = cs.split('');
	    var useAlpha = cs[cs.length - 1] == 'A';
	    cs = useAlpha? cs.slice(0, -1): cs;

	    if(['RGB', 'HSL', 'HSV', 'CMYK'].indexOf(cs) < 0) {
	        return console.warn('Invalid field names', cs);
	    }

	    var c = utils.div('colorFields', p);
	    var elems = initials.map(function(n) {
	        n = n.toLowerCase();

	        var e = utils.labelInput('color ' + n, n, c, inputLen);
	        e.input.onblur = done;
	        e.input.onkeydown = validate;
	        e.input.onkeyup = update;

	        return {
	            name: n, 
	            e: e
	        };
	    });

	    function done() {
	        joe.done();
	    }

	    function validate(e) {
	        if (!(e.ctrlKey || e.altKey) && /^[a-zA-Z]$/.test(e.key)) {
	            e.preventDefault();
	        }
	    }

	    function update() {
	        var col = [cs];

	        elems.forEach(function(o) {col.push(o.e.input.value / fac);});

	        if(!useAlpha) {
	            col.push(joe.getAlpha());
	        }

	        joe.set(col);
	    }

	    return {
	        change: function(col) {
	            elems.forEach(function(o) {
	                o.e.input.value = (col[o.name]() * fac).toFixed(fix);
	            });
	        }
	    };
	}

	function alpha(p, joe) {
	    var e = dragjs_umd.slider({
	        parent: p,
	        'class': 'oned alpha',
	        cbs: {
	            begin: change,
	            change: change,
	            end: done
	        }
	    });

	    function done() {
	        joe.done();
	    }

	    function change(p) {
	        var val = utils.clamp(p.y, 0, 1);

	        utils.Y(p.pointer, val);
	        joe.setAlpha(1 - val);
	    }

	    return {
	        change: function(col) {
	            utils.Y(e.pointer, 1 - col.alpha());
	        }
	    };
	}

	function hex(p, joe, o) {
	    var e = utils.labelInput('hex', o.label || '', p, 7);
	    e.input.value = '#';

	    e.input.onkeyup = function(elem) {
	        var key = elem.keyCode || elem.which;
	        var val = elem.target.value;
	        val = val[0] == '#'? val: '#' + val;
	        val = pad(val, 7, '0');

	        if(key == 13) {
	            joe.set(val);
	        }
	    };

	    e.input.onblur = function(elem) {
	        joe.set(elem.target.value);
	        joe.done();
	    };

	    return {
	        change: function(col) {
	            e.input.value = e.input.value[0] == '#'? '#': '';
	            e.input.value += col.hex().slice(1);
	        }
	    };
	}

	function close(p, joe, o) {
	    var elem = utils.e('a', o['class'] || 'close', p);
	    elem.href = '#';
	    elem.innerHTML = o.label || 'Close';

	    elem.onclick = function(e) {
	        e.preventDefault();

	        joe.hide();
	    };
	}

	function pad(a, n, c) {
	    var ret = a;

	    for(var i = a.length; i < n; i++) {
	        ret += c;
	    }

	    return ret;
	}

	var extras = {
	    currentColor: currentColor,
	    fields: fields,
	    hex: hex,
	    alpha: alpha,
	    close: close
	};

	// Use the all build with cmyk and everything



	var colorjoe = function(cbs) {
	    if (!all(isFunction, [cbs.init, cbs.xy, cbs.z])) {
	        return console.warn("colorjoe: missing cb");
	    }

	    return function(element, initialColor, extras$$1) {
	        return setup({
	            e: element,
	            color: initialColor,
	            cbs: cbs,
	            extras: extras$$1,
	        });
	    };
	};

	/* pickers */
	colorjoe.rgb = colorjoe({
	    init: function(col, xy, z) {
	        var ret = oneColorAll(col).hsv();

	        this.xy(ret, { x: ret.saturation(), y: 1 - ret.value() }, xy, z);
	        this.z(ret, ret.hue(), xy, z);

	        return ret;
	    },
	    xy: function(col, p, xy) {
	        utils.X(xy.pointer, p.x);
	        utils.Y(xy.pointer, p.y);

	        return col.saturation(p.x).value(1 - p.y);
	    },
	    z: function(col, v, xy, z) {
	        utils.Y(z.pointer, v);
	        RGB_BG(xy.background, v);

	        return col.hue(v);
	    },
	});

	colorjoe.hsl = colorjoe({
	    init: function(col, xy, z) {
	        var ret = oneColorAll(col).hsl();

	        this.xy(ret, { x: ret.hue(), y: 1 - ret.saturation() }, xy, z);
	        this.z(ret, 1 - ret.lightness(), xy, z);

	        return ret;
	    },
	    xy: function(col, p, xy, z) {
	        utils.X(xy.pointer, p.x);
	        utils.Y(xy.pointer, p.y);
	        RGB_BG(z.background, p.x);

	        return col.hue(p.x).saturation(1 - p.y);
	    },
	    z: function(col, v, xy, z) {
	        utils.Y(z.pointer, v);

	        return col.lightness(1 - v);
	    },
	});

	colorjoe.extras = {};

	colorjoe.registerExtra = function(name, fn) {
	    if (name in colorjoe.extras) {
	        console.warn('Extra "' + name + '"has been registered already!');
	    }

	    colorjoe.extras[name] = fn;
	};

	for (var k in extras) {
	    colorjoe.registerExtra(k, extras[k]);
	}

	function RGB_BG(e, h) {
	    utils.BG(e, new oneColorAll.HSV(h, 1, 1).cssa());
	}

	function setup(o) {
	    if (!o.e) {
	        return console.warn("colorjoe: missing element");
	    }

	    var e = isString(o.e) ? document.getElementById(o.e) : o.e;
	    e.className = "colorPicker";

	    var cbs = o.cbs;

	    var xy = dragjs_umd.xyslider({
	        parent: e,
	        class: "twod",
	        cbs: {
	            begin: changeXY,
	            change: changeXY,
	            end: done,
	        },
	    });

	    function changeXY(p) {
	        col = cbs.xy(
	            col,
	            {
	                x: utils.clamp(p.x, 0, 1),
	                y: utils.clamp(p.y, 0, 1),
	            },
	            xy,
	            z
	        );
	        changed();
	    }

	    var z = dragjs_umd.slider({
	        parent: e,
	        class: "oned",
	        cbs: {
	            begin: changeZ,
	            change: changeZ,
	            end: done,
	        },
	    });

	    function changeZ(p) {
	        col = cbs.z(col, utils.clamp(p.y, 0, 1), xy, z);
	        changed();
	    }

	    // Initial color
	    var previous = getColor(o.color);
	    var col = cbs.init(previous, xy, z);
	    var listeners = { change: [], done: [] };

	    function changed(skip) {
	        skip = isArray(skip) ? skip : [];

	        var li = listeners.change;
	        var v;

	        for (var i = 0, len = li.length; i < len; i++) {
	            v = li[i];
	            if (skip.indexOf(v.name) == -1) {
	                v.fn(col);
	            }
	        }
	    }

	    function done() {
	        // Do not call done callback if the color did not change
	        if (previous.equals(col)) {
	            return;
	        }

	        for (var i = 0, len = listeners.done.length; i < len; i++) {
	            listeners.done[i].fn(col);
	        }

	        previous = col;
	    }

	    var ob = {
	        e: e,
	        done: function() {
	            done();

	            return this;
	        },
	        update: function(skip) {
	            changed(skip);

	            return this;
	        },
	        hide: function() {
	            e.style.display = "none";

	            return this;
	        },
	        show: function() {
	            e.style.display = "";

	            return this;
	        },
	        get: function() {
	            return col;
	        },
	        set: function(c) {
	            var oldCol = this.get();
	            col = cbs.init(getColor(c), xy, z);

	            if (!oldCol.equals(col)) {
	                this.update();
	            }

	            return this;
	        },
	        getAlpha: function() {
	            return col.alpha();
	        },
	        setAlpha: function(v) {
	            col = col.alpha(v);

	            this.update();

	            return this;
	        },
	        on: function(evt, cb, name) {
	            if (evt == "change" || evt == "done") {
	                listeners[evt].push({ name: name, fn: cb });
	            } else {
	                console.warn(
	                    'Passed invalid evt name "' + evt + '" to colorjoe.on'
	                );
	            }

	            return this;
	        },
	        removeAllListeners: function(evt) {
	            if (evt) {
	                delete listeners[evt];
	            } else {
	                for (var key in listeners) {
	                    delete listeners[key];
	                }
	            }

	            return this;
	        },
	    };

	    setupExtras(e, ob, o.extras);
	    changed();

	    return ob;
	}

	function getColor(c) {
	    if (!isDefined(c)) {
	        return oneColorAll("#000");
	    }
	    if (c.isColor) {
	        return c;
	    }

	    var ret = oneColorAll(c);

	    if (ret) {
	        return ret;
	    }

	    if (isDefined(c)) {
	        console.warn("Passed invalid color to colorjoe, using black instead");
	    }

	    return oneColorAll("#000");
	}

	function setupExtras(p, joe, extras$$1) {
	    if (!extras$$1) {
	        return;
	    }

	    var c = utils.div("extras", p);
	    var cbs;
	    var name;
	    var params;

	    extras$$1.forEach(function(e, i) {
	        if (isArray(e)) {
	            name = e[0];
	            params = e.length > 1 ? e[1] : {};
	        } else {
	            name = e;
	            params = {};
	        }
	        var extra = name in colorjoe.extras ? colorjoe.extras[name] : null;

	        if (extra) {
	            cbs = extra(c, extraProxy(joe, name + i), params);
	            for (var k in cbs) {
	                joe.on(k, cbs[k], name);
	            }
	        }
	    });
	}

	function extraProxy(joe, name) {
	    var ret = copy(joe);

	    ret.update = function() {
	        joe.update([name]);
	    };

	    return ret;
	}

	function copy(o) {
	    // returns a shallow copy
	    var ret = {};

	    for (var k in o) {
	        ret[k] = o[k];
	    }

	    return ret;
	}

	function all(cb, a) {
	    return a.map(cb).filter(id).length == a.length;
	}

	function isArray(o) {
	    return Object.prototype.toString.call(o) === "[object Array]";
	}
	function isString(o) {
	    return typeof o === "string";
	}
	function isDefined(input) {
	    return typeof input !== "undefined";
	}
	function isFunction(input) {
	    return typeof input === "function";
	}
	function id(a) {
	    return a;
	}

	var colorjoe_1 = colorjoe;

	return colorjoe_1;

})));
//# sourceMappingURL=colorjoe.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./canvas/index.js":
/*!*************************!*\
  !*** ./canvas/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var colorjoe = __webpack_require__(/*! colorjoe */ "../node_modules/colorjoe/dist/colorjoe.js");

var canvdiv = document.querySelector(".paintcanvas");
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
var isMouseDown = false;
var coords = [];
var radius = 3.5;
var timer = null;
var control = false;
var color = "black";
var offsetX = 45;
const joe = colorjoe.rgb("color_picker", "black");

function allowDraw(connections) {
  control = true;
  radius = 3.5;
  color = "black";
  console.log("AllowDraw clear");
  clear();
  let olddata = "";
  timer = setInterval(function () {
    let data = JSON.stringify(coords);
    coords = [];

    if (data != olddata && data != "[]") {
      for (let connect in connections[0]) {
        connections[0][connect][1].send(data);
      }
    }

    olddata = data.toString();
  }, 40);
  console.log("Drawing allowed");
}

function disableDraw() {
  control = false;
  console.log("DisableDraw clear");
  clear();
  clearInterval(timer);
  console.log("Drawing disabled");
  color = "black";
  document.querySelector(".chooswidthslider").value = "4.5";
  radius = 4.5;
}

function declareCanvDraw() {
  canv.width = canvdiv.offsetWidth;
  canv.height = canvdiv.offsetHeight;
  canv.addEventListener('mousedown', function (e) {
    if (control) {
      coords.push([e.clientX - offsetX, e.clientY]);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(e.clientX - offsetX, e.clientY, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX - offsetX, e.clientY);
    }

    return false;
  });
  document.addEventListener('mouseup', function (e) {
    isMouseDown = false;
    ctx.beginPath(); //Сбрасываю путь, чтобы линия не прорисовывалась из прошлой позиции, если пользователь поднял мышь

    coords.push('mouseup');
  });
  document.addEventListener('mousedown', function (e) {
    if (control) {
      isMouseDown = true;
    }
  });
  document.addEventListener('mouseup', function (e) {
    isMouseDown = false;
  });
  document.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
      clearSelection();
      coords.push([e.clientX - offsetX, e.clientY]);
      ctx.lineWidth = radius * 2;
      ctx.strokeStyle = color;
      ctx.lineTo(e.clientX - offsetX, e.clientY); //Рисую линию из текущей прошлой позиции в текущую

      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(e.clientX - offsetX, e.clientY, radius, 0, Math.PI * 2); //Дорисовываю круги, чтобы не было эффекта железной дороги (нужно, если линия толстая)

      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX - offsetX, e.clientY);
    }

    return false;
  });

  canv.onmouseout = function () {
    ctx.beginPath();
    coords.push("out");
  };

  declareCanvBind();
  console.log("Canvas declared");
}

function replay(coords) {
  while (true) {
    if (!coords.length) //Если координат нет
      {
        return false;
      }

    var crd = coords.shift(); //Удаляет первый элемент из coords и возвращает этот элемент в переменную crd

    if (crd == "out") {
      ctx.beginPath();
    } else if (crd == "clear") {
      console.log("Replay clear");
      clear(true);
    } else if (crd[0] == "#") {
      color = crd.slice(1);
    } else if (crd[0] == "*") {
      radius = crd.slice(1);
    } else {
      var e = {
        clientX: crd['0'],
        clientY: crd['1']
      }; //Код скопирован из обычного рисования

      ctx.lineWidth = radius * 2;
      ctx.strokeStyle = color;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  }
}

function declareCanvBind() {
  document.querySelector(".chooswidthslider").onchange = function (e) {
    radius = document.querySelector(".chooswidthslider").value;
    coords.push("*" + radius);
  };

  joe.on("done", color => {
    changeColor(color.css());
    console.log("Selecting " + color.css());
  });
  document.querySelector(".erase").addEventListener("click", function (event) {
    console.log("Erase clear");
    clear();
    return false;
  });
  document.querySelector("#color1").addEventListener("click", function (event) {
    changeColor("black");
    return false;
  });
  document.querySelector("#color2").addEventListener("click", function (event) {
    changeColor("#B10B0B");
    return false;
  });
  document.querySelector("#color3").addEventListener("click", function (event) {
    changeColor("#5C9226");
    return false;
  });
  document.querySelector("#color4").addEventListener("click", function (event) {
    changeColor("white");
    return false;
  });
  document.querySelector("#color5").addEventListener("click", function (event) {
    changeColor("#284AFF");
    return false;
  });
  document.querySelector(".choosecolor").addEventListener("click", function (event) {
    var colorPic = document.querySelector("#color_picker");

    if (colorPic.style.display == "block") {
      colorPic.style.display = "none";
    } else {
      colorPic.style.display = "block";
    }
  });
}

function changeColor(c) {
  color = c;
  coords.push("#" + c);
}
/*
function save()
{
	localStorage.setItem('coords', JSON.stringify(coords)); //Что такое localStorage - https://tproger.ru/articles/localstorage/
}
*/


function clear(replay = false) {
  console.log("---------Clear--------");
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.fillStyle = color;

  if (!replay) {
    coords.push("clear");
    console.log("---------Not Replay--------");
  }

  console.log(coords);
}

function getData(canv) {
  var data = canv.toDataURL();
  return data;
}

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    // старый IE
    document.selection.empty();
  }
}

exports.declareCanvDraw = declareCanvDraw;
exports.allowDraw = allowDraw;
exports.disableDraw = disableDraw;
exports.replay = replay;
exports.declareCanvDraw = declareCanvDraw;
exports.allowDraw = allowDraw;
exports.disableDraw = disableDraw;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS8uLi9ub2RlX21vZHVsZXMvY29sb3Jqb2UvZGlzdC9jb2xvcmpvZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vY2FudmFzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NhbnZhcy9pbmRleC5qc1wiKTtcbiIsIi8qISBjb2xvcmpvZSAtIHY0LjEuMCAtIEp1aG8gVmVwc2FsYWluZW4gPGJlYnJhd0BnbWFpbC5jb20+IC0gTUlUXG5odHRwczovL2JlYnJhdy5naXRodWIuY29tL2NvbG9yam9lIC0gMjAxOC0wNy0wMyAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLmNvbG9yam9lID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcblx0fVxuXG5cdHZhciBkcmFnanNfdW1kID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuXHQoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICB9KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdCAgICAgICAgLyohIGRyYWdqcyAtIHYwLjguMCAtIEp1aG8gVmVwc2FsYWluZW4gPGJlYnJhd0BnbWFpbC5jb20+IC0gTUlUXG5cdGh0dHBzOi8vYmVicmF3LmdpdGh1Yi5jb20vZHJhZ2pzIC0gMjAxOC0wNy0wMyAqL1xuXHR2YXIgZHJhZyA9IChmdW5jdGlvbigpIHtcblx0ICAgIGZ1bmN0aW9uIGRyYWcoZWxlbSwgY2JzKSB7XG5cdCAgICAgICAgaWYoIWVsZW0pIHtcblx0ICAgICAgICAgICAgY29uc29sZS53YXJuKCdkcmFnIGlzIG1pc3NpbmcgZWxlbSEnKTtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGRyYWdUZW1wbGF0ZShlbGVtLCBjYnMsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcpO1xuXHQgICAgICAgIGRyYWdUZW1wbGF0ZShlbGVtLCBjYnMsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24geHlzbGlkZXIobykge1xuXHQgICAgICAgIHZhciB0d29kID0gZGl2KG9bJ2NsYXNzJ10gfHwgJycsIG8ucGFyZW50KTtcblx0ICAgICAgICB2YXIgcG9pbnRlciA9IGRpdigncG9pbnRlcicsIHR3b2QpO1xuXHQgICAgICAgIGRpdignc2hhcGUgc2hhcGUxJywgcG9pbnRlcik7XG5cdCAgICAgICAgZGl2KCdzaGFwZSBzaGFwZTInLCBwb2ludGVyKTtcblx0ICAgICAgICBkaXYoJ2JnIGJnMScsIHR3b2QpO1xuXHQgICAgICAgIGRpdignYmcgYmcyJywgdHdvZCk7XG5cblx0ICAgICAgICBkcmFnKHR3b2QsIGF0dGFjaFBvaW50ZXIoby5jYnMsIHBvaW50ZXIpKTtcblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGJhY2tncm91bmQ6IHR3b2QsXG5cdCAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXJcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBzbGlkZXIobykge1xuXHQgICAgICAgIHZhciBvbmVkID0gZGl2KG9bJ2NsYXNzJ10sIG8ucGFyZW50KTtcblx0ICAgICAgICB2YXIgcG9pbnRlciA9IGRpdigncG9pbnRlcicsIG9uZWQpO1xuXHQgICAgICAgIGRpdignc2hhcGUnLCBwb2ludGVyKTtcblx0ICAgICAgICBkaXYoJ2JnJywgb25lZCk7XG5cblx0ICAgICAgICBkcmFnKG9uZWQsIGF0dGFjaFBvaW50ZXIoby5jYnMsIHBvaW50ZXIpKTtcblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGJhY2tncm91bmQ6IG9uZWQsXG5cdCAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXJcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBkcmFnLnh5c2xpZGVyID0geHlzbGlkZXI7XG5cdCAgICBkcmFnLnNsaWRlciA9IHNsaWRlcjtcblxuXHQgICAgcmV0dXJuIGRyYWc7XG5cblx0ICAgIGZ1bmN0aW9uIGF0dGFjaFBvaW50ZXIoY2JzLCBwb2ludGVyKSB7XG5cdCAgICAgICAgdmFyIHJldCA9IHt9O1xuXG5cdCAgICAgICAgZm9yKHZhciBuIGluIGNicykge1xuXHQgICAgICAgICAgcmV0W25dID0gd3JhcChjYnNbbl0pO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIHdyYXAoZm4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHApIHtcblx0ICAgICAgICAgICAgICAgIHAucG9pbnRlciA9IHBvaW50ZXI7XG5cdCAgICAgICAgICAgICAgICBmbihwKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfVxuXG5cdCAgICAvLyBtb3ZlIHRvIGVsZW11dGlscyBsaWI/XG5cdCAgICBmdW5jdGlvbiBkaXYoa2xhc3MsIHApIHtcblx0ICAgICAgICByZXR1cm4gZSgnZGl2Jywga2xhc3MsIHApO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBlKHR5cGUsIGtsYXNzLCBwKSB7XG5cdCAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHQgICAgICAgIGlmKGtsYXNzKSB7XG5cdCAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGtsYXNzO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBwLmFwcGVuZENoaWxkKGVsZW0pO1xuXG5cdCAgICAgICAgcmV0dXJuIGVsZW07XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGRyYWdUZW1wbGF0ZShlbGVtLCBjYnMsIGRvd24sIG1vdmUsIHVwKSB7XG5cblx0ICAgICAgICBjYnMgPSBnZXRDYnMoY2JzKTtcblxuXHQgICAgICAgIHZhciBiZWdpbkNiID0gY2JzLmJlZ2luO1xuXHQgICAgICAgIHZhciBjaGFuZ2VDYiA9IGNicy5jaGFuZ2U7XG5cdCAgICAgICAgdmFyIGVuZENiID0gY2JzLmVuZDtcblxuXHQgICAgICAgIG9uKGVsZW0sIGRvd24sIGZ1bmN0aW9uKGUpIHtcblxuXHQgICAgICAgICAgICB2YXIgbW92ZUhhbmRsZXIgPSBwYXJ0aWFsKGNhbGxDYiwgY2hhbmdlQ2IsIGVsZW0pO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiB1cEhhbmRsZXIoKSB7XG5cblx0ICAgICAgICAgICAgICAgIG9mZihkb2N1bWVudCwgbW92ZSwgbW92ZUhhbmRsZXIpO1xuXHQgICAgICAgICAgICAgICAgb2ZmKGRvY3VtZW50LCB1cCwgdXBIYW5kbGVyKTtcblxuXHQgICAgICAgICAgICAgICAgY2FsbENiKGVuZENiLCBlbGVtLCBlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG9uKGRvY3VtZW50LCBtb3ZlLCBtb3ZlSGFuZGxlcik7XG5cdCAgICAgICAgICAgIG9uKGRvY3VtZW50LCB1cCwgdXBIYW5kbGVyKTtcblxuXHQgICAgICAgICAgICBjYWxsQ2IoYmVnaW5DYiwgZWxlbSwgZSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG5cdCAgICBmdW5jdGlvbiBvbihlbGVtLCBldnQsIGhhbmRsZXIpIHtcblx0ICAgICAgICAvLyBUZXN0IHZpYSBhIGdldHRlciBpbiB0aGUgb3B0aW9ucyBvYmplY3QgdG8gc2VlIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkXG5cdCAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuXHQgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcblx0ICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cblx0ICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIG9mZihlbGVtLCBldnQsIGhhbmRsZXIpIHtcblx0ICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgZmFsc2UpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBnZXRDYnMoY2JzKSB7XG5cdCAgICAgICAgaWYoIWNicykge1xuXHQgICAgICAgICAgICB2YXIgaW5pdGlhbE9mZnNldDtcblx0ICAgICAgICAgICAgdmFyIGluaXRpYWxQb3M7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbihjKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldCA9IHt4OiBjLmVsZW0ub2Zmc2V0TGVmdCwgeTogYy5lbGVtLm9mZnNldFRvcH07XG5cdCAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFBvcyA9IGMuY3Vyc29yO1xuXHQgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oYykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN0eWxlKGMuZWxlbSwgJ2xlZnQnLCAoaW5pdGlhbE9mZnNldC54ICsgYy5jdXJzb3IueCAtIGluaXRpYWxQb3MueCkgKyAncHgnKTtcblx0ICAgICAgICAgICAgICAgICAgICBzdHlsZShjLmVsZW0sICd0b3AnLCAoaW5pdGlhbE9mZnNldC55ICsgYy5jdXJzb3IueSAtIGluaXRpYWxQb3MueSkgKyAncHgnKTtcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICBlbmQ6IGVtcHR5XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgYmVnaW46IGNicy5iZWdpbiB8fCBlbXB0eSxcblx0ICAgICAgICAgICAgICAgIGNoYW5nZTogY2JzLmNoYW5nZSB8fCBlbXB0eSxcblx0ICAgICAgICAgICAgICAgIGVuZDogY2JzLmVuZCB8fCBlbXB0eVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gVE9ETzogc2V0IGRyYWdnYWJsZSBjbGFzcyAoaGFuZHkgZm9yIGZ4KVxuXHQgICAgZnVuY3Rpb24gc3R5bGUoZSwgcHJvcCwgdmFsdWUpIHtcblx0ICAgICAgICBlLnN0eWxlW3Byb3BdID0gdmFsdWU7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGVtcHR5KCkge31cblxuXHQgICAgZnVuY3Rpb24gY2FsbENiKGNiLCBlbGVtLCBlKSB7XG5cdCAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdCAgICAgICAgdmFyIG9mZnNldCA9IGZpbmRQb3MoZWxlbSk7XG5cdCAgICAgICAgdmFyIHdpZHRoID0gZWxlbS5jbGllbnRXaWR0aDtcblx0ICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbS5jbGllbnRIZWlnaHQ7XG5cdCAgICAgICAgdmFyIGN1cnNvciA9IHtcblx0ICAgICAgICAgICAgeDogY3Vyc29yWChlbGVtLCBlKSxcblx0ICAgICAgICAgICAgeTogY3Vyc29yWShlbGVtLCBlKVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIHggPSAoY3Vyc29yLnggLSBvZmZzZXQueCkgLyB3aWR0aDtcblx0ICAgICAgICB2YXIgeSA9IChjdXJzb3IueSAtIG9mZnNldC55KSAvIGhlaWdodDtcblxuXHQgICAgICAgIGNiKHtcblx0ICAgICAgICAgICAgeDogaXNOYU4oeCk/IDA6IHgsXG5cdCAgICAgICAgICAgIHk6IGlzTmFOKHkpPyAwOiB5LFxuXHQgICAgICAgICAgICBjdXJzb3I6IGN1cnNvcixcblx0ICAgICAgICAgICAgZWxlbTogZWxlbSxcblx0ICAgICAgICAgICAgZTogZVxuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQzOTQ3NDcvamF2YXNjcmlwdC1jdXJyeS1mdW5jdGlvblxuXHQgICAgZnVuY3Rpb24gcGFydGlhbChmbikge1xuXHQgICAgICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblx0ICAgICAgICB2YXIgYXJncyA9IHNsaWNlLmFwcGx5KGFyZ3VtZW50cywgWzFdKTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KHNsaWNlLmFwcGx5KGFyZ3VtZW50cykpKTtcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2ZpbmRwb3MuaHRtbFxuXHQgICAgZnVuY3Rpb24gZmluZFBvcyhlKSB7XG5cdCAgICAgICAgdmFyIHIgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgeDogci5sZWZ0LFxuXHQgICAgICAgICAgICB5OiByLnRvcFxuXHQgICAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIC8vIGh0dHA6Ly9qYXZhc2NyaXB0LmFib3V0LmNvbS9saWJyYXJ5L2JsbW91c2Vwb3MuaHRtXG5cdCAgICBmdW5jdGlvbiBjdXJzb3JYKGVsZW0sIGV2dCkge1xuXHQgICAgICAgIHZhciBldnRQb3MgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzW2V2dC50b3VjaGVzLmxlbmd0aCAtMV0gOiBldnQ7XG5cdCAgICAgICAgcmV0dXJuIGV2dFBvcy5jbGllbnRYO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY3Vyc29yWShlbGVtLCBldnQpIHtcblx0ICAgICAgICB2YXIgZXZ0UG9zID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1tldnQudG91Y2hlcy5sZW5ndGggLTFdIDogZXZ0O1xuXHQgICAgICAgIHJldHVybiBldnRQb3MuY2xpZW50WTtcblx0ICAgIH1cblx0fSkoKTtcclxuXHQgICAgICAgIHJldHVybiBkcmFnO1xyXG5cclxuXHQgICAgfSkpO1xuXHR9KTtcblxuXHR2YXIgb25lQ29sb3JBbGwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG5cdCFmdW5jdGlvbihlLGEpe21vZHVsZS5leHBvcnRzPWEoKTt9KGNvbW1vbmpzR2xvYmFsLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtpZihBcnJheS5pc0FycmF5KGEpKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYVswXSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZVthWzBdXSlyZXR1cm4gbmV3IGVbYVswXV0oYS5zbGljZSgxLGEubGVuZ3RoKSk7aWYoND09PWEubGVuZ3RoKXJldHVybiBuZXcgZS5SR0IoYVswXS8yNTUsYVsxXS8yNTUsYVsyXS8yNTUsYVszXS8yNTUpfWVsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe3ZhciByPWEudG9Mb3dlckNhc2UoKTtlLm5hbWVkQ29sb3JzW3JdJiYoYT1cIiNcIitlLm5hbWVkQ29sb3JzW3JdKSxcInRyYW5zcGFyZW50XCI9PT1yJiYoYT1cInJnYmEoMCwwLDAsMClcIik7dmFyIG89YS5tYXRjaChpKTtpZihvKXt2YXIgcz1vWzFdLnRvVXBwZXJDYXNlKCksZj10KG9bOF0pP29bOF06cGFyc2VGbG9hdChvWzhdKSx1PVwiSFwiPT09c1swXSxsPW9bM10/MTAwOnU/MzYwOjI1NSxoPW9bNV18fHU/MTAwOjI1NSxjPW9bN118fHU/MTAwOjI1NTtpZih0KGVbc10pKXRocm93IG5ldyBFcnJvcihcImNvbG9yLlwiK3MrXCIgaXMgbm90IGluc3RhbGxlZC5cIik7cmV0dXJuIG5ldyBlW3NdKHBhcnNlRmxvYXQob1syXSkvbCxwYXJzZUZsb2F0KG9bNF0pL2gscGFyc2VGbG9hdChvWzZdKS9jLGYpfWEubGVuZ3RoPDYmJihhPWEucmVwbGFjZSgvXiM/KFswLTlhLWZdKShbMC05YS1mXSkoWzAtOWEtZl0pJC9pLFwiJDEkMSQyJDIkMyQzXCIpKTt2YXIgZD1hLm1hdGNoKC9eIz8oWzAtOWEtZl1bMC05YS1mXSkoWzAtOWEtZl1bMC05YS1mXSkoWzAtOWEtZl1bMC05YS1mXSkkL2kpO2lmKGQpcmV0dXJuIG5ldyBlLlJHQihwYXJzZUludChkWzFdLDE2KS8yNTUscGFyc2VJbnQoZFsyXSwxNikvMjU1LHBhcnNlSW50KGRbM10sMTYpLzI1NSk7aWYoZS5DTVlLKXt2YXIgYj1hLm1hdGNoKG5ldyBSZWdFeHAoXCJeY215a1xcXFwoXCIrbi5zb3VyY2UrXCIsXCIrbi5zb3VyY2UrXCIsXCIrbi5zb3VyY2UrXCIsXCIrbi5zb3VyY2UrXCJcXFxcKSRcIixcImlcIikpO2lmKGIpcmV0dXJuIG5ldyBlLkNNWUsocGFyc2VGbG9hdChiWzFdKS8xMDAscGFyc2VGbG9hdChiWzJdKS8xMDAscGFyc2VGbG9hdChiWzNdKS8xMDAscGFyc2VGbG9hdChiWzRdKS8xMDApfX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBhJiZhLmlzQ29sb3IpcmV0dXJuIGE7cmV0dXJuICExfXZhciBhPVtdLHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWV9LHI9L1xccyooXFwuXFxkK3xcXGQrKD86XFwuXFxkKyk/KSglKT9cXHMqLyxuPS9cXHMqKFxcLlxcZCt8MTAwfFxcZD9cXGQoPzpcXC5cXGQrKT8pJVxccyovLGk9bmV3IFJlZ0V4cChcIl4ocmdifGhzbHxoc3YpYT9cXFxcKFwiK3Iuc291cmNlK1wiLFwiK3Iuc291cmNlK1wiLFwiK3Iuc291cmNlK1wiKD86LFwiKy9cXHMqKFxcLlxcZCt8XFxkKyg/OlxcLlxcZCspPylcXHMqLy5zb3VyY2UrXCIpP1xcXFwpJFwiLFwiaVwiKTtlLm5hbWVkQ29sb3JzPXt9LGUuaW5zdGFsbENvbG9yU3BhY2U9ZnVuY3Rpb24ocixuLGkpe2Z1bmN0aW9uIG8oYSx0KXt2YXIgcj17fTtyW3QudG9Mb3dlckNhc2UoKV09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZ2IoKVt0LnRvTG93ZXJDYXNlKCldKCl9LGVbdF0ucHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPVwiYmxhY2tcIj09PWU/XCJrXCI6ZS5jaGFyQXQoMCk7cltlXT1yW2FdPWZ1bmN0aW9uKGEscil7cmV0dXJuIHRoaXNbdC50b0xvd2VyQ2FzZSgpXSgpW2VdKGEscil9O30pO2Zvcih2YXIgbiBpbiByKXIuaGFzT3duUHJvcGVydHkobikmJnZvaWQgMD09PWVbYV0ucHJvdG90eXBlW25dJiYoZVthXS5wcm90b3R5cGVbbl09cltuXSk7fWVbcl09ZnVuY3Rpb24oZSl7dmFyIGE9QXJyYXkuaXNBcnJheShlKT9lOmFyZ3VtZW50cztuLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgaT1hW3RdO2lmKFwiYWxwaGFcIj09PWUpdGhpcy5fYWxwaGE9aXNOYU4oaSl8fGk+MT8xOmk8MD8wOmk7ZWxzZXtpZihpc05hTihpKSl0aHJvdyBuZXcgRXJyb3IoXCJbXCIrcitcIl06IEludmFsaWQgY29sb3I6IChcIituLmpvaW4oXCIsXCIpK1wiKVwiKTtcImh1ZVwiPT09ZT90aGlzLl9odWU9aTwwP2ktTWF0aC5mbG9vcihpKTppJTE6dGhpc1tcIl9cIitlXT1pPDA/MDppPjE/MTppO319LHRoaXMpO30sZVtyXS5wcm9wZXJ0eU5hbWVzPW47dmFyIHM9ZVtyXS5wcm90b3R5cGU7W1widmFsdWVPZlwiLFwiaGV4XCIsXCJoZXhhXCIsXCJjc3NcIixcImNzc2FcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtzW2VdPXNbZV18fChcIlJHQlwiPT09cj9zLmhleDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJnYigpW2VdKCl9KTt9KSxzLmlzQ29sb3I9ITAscy5lcXVhbHM9ZnVuY3Rpb24oZSxhKXt0KGEpJiYoYT0xZS0xMCksZT1lW3IudG9Mb3dlckNhc2UoKV0oKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krPTEpaWYoTWF0aC5hYnModGhpc1tcIl9cIituW2ldXS1lW1wiX1wiK25baV1dKT5hKXJldHVybiAhMTtyZXR1cm4gITB9LHMudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIFtyXS5jb25jYXQobi5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXNbXCJfXCIrZV19LHRoaXMpKX07Zm9yKHZhciBmIGluIGkpaWYoaS5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIHU9Zi5tYXRjaCgvXmZyb20oLiopJC8pO3U/ZVt1WzFdLnRvVXBwZXJDYXNlKCldLnByb3RvdHlwZVtyLnRvTG93ZXJDYXNlKCldPWlbZl06c1tmXT1pW2ZdO31yZXR1cm4gc1tyLnRvTG93ZXJDYXNlKCldPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gXCJbXCIrcitcIiBcIituLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdGhpc1tcIl9cIitlXX0sdGhpcykuam9pbihcIiwgXCIpK1wiXVwifSxuLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIGE9XCJibGFja1wiPT09ZT9cImtcIjplLmNoYXJBdCgwKTtzW2VdPXNbYV09ZnVuY3Rpb24oYSx0KXtyZXR1cm4gdm9pZCAwPT09YT90aGlzW1wiX1wiK2VdOnQ/bmV3IHRoaXMuY29uc3RydWN0b3Iobi5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbXCJfXCIrdF0rKGU9PT10P2E6MCl9LHRoaXMpKTpuZXcgdGhpcy5jb25zdHJ1Y3RvcihuLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQ/YTp0aGlzW1wiX1wiK3RdfSx0aGlzKSl9O30pLGEuZm9yRWFjaChmdW5jdGlvbihlKXtvKHIsZSksbyhlLHIpO30pLGEucHVzaChyKSxlfSxlLnBsdWdpbkxpc3Q9W10sZS51c2U9ZnVuY3Rpb24oYSl7cmV0dXJuIC0xPT09ZS5wbHVnaW5MaXN0LmluZGV4T2YoYSkmJih0aGlzLnBsdWdpbkxpc3QucHVzaChhKSxhKGUpKSxlfSxlLmluc3RhbGxNZXRob2Q9ZnVuY3Rpb24odCxyKXtyZXR1cm4gYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2VbYV0ucHJvdG90eXBlW3RdPXI7fSksdGhpc30sZS5pbnN0YWxsQ29sb3JTcGFjZShcIlJHQlwiLFtcInJlZFwiLFwiZ3JlZW5cIixcImJsdWVcIixcImFscGhhXCJdLHtoZXg6ZnVuY3Rpb24oKXt2YXIgZT0oNjU1MzYqTWF0aC5yb3VuZCgyNTUqdGhpcy5fcmVkKSsyNTYqTWF0aC5yb3VuZCgyNTUqdGhpcy5fZ3JlZW4pK01hdGgucm91bmQoMjU1KnRoaXMuX2JsdWUpKS50b1N0cmluZygxNik7cmV0dXJuIFwiI1wiK1wiMDAwMDBcIi5zdWJzdHIoMCw2LWUubGVuZ3RoKStlfSxoZXhhOmZ1bmN0aW9uKCl7dmFyIGU9TWF0aC5yb3VuZCgyNTUqdGhpcy5fYWxwaGEpLnRvU3RyaW5nKDE2KTtyZXR1cm4gXCIjXCIrXCIwMFwiLnN1YnN0cigwLDItZS5sZW5ndGgpK2UrdGhpcy5oZXgoKS5zdWJzdHIoMSw2KX0sY3NzOmZ1bmN0aW9uKCl7cmV0dXJuIFwicmdiKFwiK01hdGgucm91bmQoMjU1KnRoaXMuX3JlZCkrXCIsXCIrTWF0aC5yb3VuZCgyNTUqdGhpcy5fZ3JlZW4pK1wiLFwiK01hdGgucm91bmQoMjU1KnRoaXMuX2JsdWUpK1wiKVwifSxjc3NhOmZ1bmN0aW9uKCl7cmV0dXJuIFwicmdiYShcIitNYXRoLnJvdW5kKDI1NSp0aGlzLl9yZWQpK1wiLFwiK01hdGgucm91bmQoMjU1KnRoaXMuX2dyZWVuKStcIixcIitNYXRoLnJvdW5kKDI1NSp0aGlzLl9ibHVlKStcIixcIit0aGlzLl9hbHBoYStcIilcIn19KTt2YXIgbz1lLHM9ZnVuY3Rpb24oZSl7ZS5pbnN0YWxsQ29sb3JTcGFjZShcIlhZWlwiLFtcInhcIixcInlcIixcInpcIixcImFscGhhXCJdLHtmcm9tUmdiOmZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGU+LjA0MDQ1P01hdGgucG93KChlKy4wNTUpLzEuMDU1LDIuNCk6ZS8xMi45Mn0sdD1hKHRoaXMuX3JlZCkscj1hKHRoaXMuX2dyZWVuKSxuPWEodGhpcy5fYmx1ZSk7cmV0dXJuIG5ldyBlLlhZWiguNDEyNDU2NCp0Ky4zNTc1NzYxKnIrLjE4MDQzNzUqbiwuMjEyNjcyOSp0Ky43MTUxNTIyKnIrLjA3MjE3NSpuLC4wMTkzMzM5KnQrLjExOTE5MipyKy45NTAzMDQxKm4sdGhpcy5fYWxwaGEpfSxyZ2I6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl94LHQ9dGhpcy5feSxyPXRoaXMuX3osbj1mdW5jdGlvbihlKXtyZXR1cm4gZT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhlLDEvMi40KS0uMDU1OjEyLjkyKmV9O3JldHVybiBuZXcgZS5SR0IobigzLjI0MDQ1NDIqYSstMS41MzcxMzg1KnQrLS40OTg1MzE0KnIpLG4oLS45NjkyNjYqYSsxLjg3NjAxMDgqdCsuMDQxNTU2KnIpLG4oLjA1NTY0MzQqYSstLjIwNDAyNTkqdCsxLjA1NzIyNTIqciksdGhpcy5fYWxwaGEpfSxsYWI6ZnVuY3Rpb24oKXt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gZT4uMDA4ODU2P01hdGgucG93KGUsMS8zKTo3Ljc4NzAzNyplKzQvMjl9LHQ9YSh0aGlzLl94Lzk1LjA0Nykscj1hKHRoaXMuX3kvMTAwKSxuPWEodGhpcy5fei8xMDguODgzKTtyZXR1cm4gbmV3IGUuTEFCKDExNipyLTE2LDUwMCoodC1yKSwyMDAqKHItbiksdGhpcy5fYWxwaGEpfX0pO30sZj1mdW5jdGlvbihlKXtlLnVzZShzKSxlLmluc3RhbGxDb2xvclNwYWNlKFwiTEFCXCIsW1wibFwiLFwiYVwiLFwiYlwiLFwiYWxwaGFcIl0se2Zyb21SZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54eXooKS5sYWIoKX0scmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueHl6KCkucmdiKCl9LHh5ejpmdW5jdGlvbigpe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciBhPU1hdGgucG93KGUsMyk7cmV0dXJuIGE+LjAwODg1Nj9hOihlLTE2LzExNikvNy44N30sdD0odGhpcy5fbCsxNikvMTE2LHI9dGhpcy5fYS81MDArdCxuPXQtdGhpcy5fYi8yMDA7cmV0dXJuIG5ldyBlLlhZWig5NS4wNDcqYShyKSwxMDAqYSh0KSwxMDguODgzKmEobiksdGhpcy5fYWxwaGEpfX0pO30sdT1mdW5jdGlvbihlKXtlLmluc3RhbGxDb2xvclNwYWNlKFwiSFNWXCIsW1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJ2YWx1ZVwiLFwiYWxwaGFcIl0se3JnYjpmdW5jdGlvbigpe3ZhciBhLHQscixuPXRoaXMuX2h1ZSxpPXRoaXMuX3NhdHVyYXRpb24sbz10aGlzLl92YWx1ZSxzPU1hdGgubWluKDUsTWF0aC5mbG9vcig2Km4pKSxmPTYqbi1zLHU9byooMS1pKSxsPW8qKDEtZippKSxoPW8qKDEtKDEtZikqaSk7c3dpdGNoKHMpe2Nhc2UgMDphPW8sdD1oLHI9dTticmVhaztjYXNlIDE6YT1sLHQ9byxyPXU7YnJlYWs7Y2FzZSAyOmE9dSx0PW8scj1oO2JyZWFrO2Nhc2UgMzphPXUsdD1sLHI9bzticmVhaztjYXNlIDQ6YT1oLHQ9dSxyPW87YnJlYWs7Y2FzZSA1OmE9byx0PXUscj1sO31yZXR1cm4gbmV3IGUuUkdCKGEsdCxyLHRoaXMuX2FscGhhKX0saHNsOmZ1bmN0aW9uKCl7dmFyIGEsdD0oMi10aGlzLl9zYXR1cmF0aW9uKSp0aGlzLl92YWx1ZSxyPXRoaXMuX3NhdHVyYXRpb24qdGhpcy5fdmFsdWUsbj10PD0xP3Q6Mi10O3JldHVybiBhPW48MWUtOT8wOnIvbixuZXcgZS5IU0wodGhpcy5faHVlLGEsdC8yLHRoaXMuX2FscGhhKX0sZnJvbVJnYjpmdW5jdGlvbigpe3ZhciBhLHQ9dGhpcy5fcmVkLHI9dGhpcy5fZ3JlZW4sbj10aGlzLl9ibHVlLGk9TWF0aC5tYXgodCxyLG4pLG89TWF0aC5taW4odCxyLG4pLHM9aS1vLGY9MD09PWk/MDpzL2ksdT1pO2lmKDA9PT1zKWE9MDtlbHNlIHN3aXRjaChpKXtjYXNlIHQ6YT0oci1uKS9zLzYrKHI8bj8xOjApO2JyZWFrO2Nhc2UgcjphPShuLXQpL3MvNisxLzM7YnJlYWs7Y2FzZSBuOmE9KHQtcikvcy82KzIvMzt9cmV0dXJuIG5ldyBlLkhTVihhLGYsdSx0aGlzLl9hbHBoYSl9fSk7fSxsPWZ1bmN0aW9uKGUpe2UudXNlKHUpLGUuaW5zdGFsbENvbG9yU3BhY2UoXCJIU0xcIixbXCJodWVcIixcInNhdHVyYXRpb25cIixcImxpZ2h0bmVzc1wiLFwiYWxwaGFcIl0se2hzdjpmdW5jdGlvbigpe3ZhciBhLHQ9Mip0aGlzLl9saWdodG5lc3Mscj10aGlzLl9zYXR1cmF0aW9uKih0PD0xP3Q6Mi10KTtyZXR1cm4gYT10K3I8MWUtOT8wOjIqci8odCtyKSxuZXcgZS5IU1YodGhpcy5faHVlLGEsKHQrcikvMix0aGlzLl9hbHBoYSl9LHJnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhzdigpLnJnYigpfSxmcm9tUmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaHN2KCkuaHNsKCl9fSk7fSxoPWZ1bmN0aW9uKGUpe2UuaW5zdGFsbENvbG9yU3BhY2UoXCJDTVlLXCIsW1wiY3lhblwiLFwibWFnZW50YVwiLFwieWVsbG93XCIsXCJibGFja1wiLFwiYWxwaGFcIl0se3JnYjpmdW5jdGlvbigpe3JldHVybiBuZXcgZS5SR0IoMS10aGlzLl9jeWFuKigxLXRoaXMuX2JsYWNrKS10aGlzLl9ibGFjaywxLXRoaXMuX21hZ2VudGEqKDEtdGhpcy5fYmxhY2spLXRoaXMuX2JsYWNrLDEtdGhpcy5feWVsbG93KigxLXRoaXMuX2JsYWNrKS10aGlzLl9ibGFjayx0aGlzLl9hbHBoYSl9LGZyb21SZ2I6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9yZWQsdD10aGlzLl9ncmVlbixyPXRoaXMuX2JsdWUsbj0xLWEsaT0xLXQsbz0xLXIscz0xO3JldHVybiBhfHx0fHxyPyhzPU1hdGgubWluKG4sTWF0aC5taW4oaSxvKSksbj0obi1zKS8oMS1zKSxpPShpLXMpLygxLXMpLG89KG8tcykvKDEtcykpOnM9MSxuZXcgZS5DTVlLKG4saSxvLHMsdGhpcy5fYWxwaGEpfX0pO30sYz1mdW5jdGlvbihlKXtlLm5hbWVkQ29sb3JzPXthbGljZWJsdWU6XCJmMGY4ZmZcIixhbnRpcXVld2hpdGU6XCJmYWViZDdcIixhcXVhOlwiMGZmXCIsYXF1YW1hcmluZTpcIjdmZmZkNFwiLGF6dXJlOlwiZjBmZmZmXCIsYmVpZ2U6XCJmNWY1ZGNcIixiaXNxdWU6XCJmZmU0YzRcIixibGFjazpcIjAwMFwiLGJsYW5jaGVkYWxtb25kOlwiZmZlYmNkXCIsYmx1ZTpcIjAwZlwiLGJsdWV2aW9sZXQ6XCI4YTJiZTJcIixicm93bjpcImE1MmEyYVwiLGJ1cmx5d29vZDpcImRlYjg4N1wiLGNhZGV0Ymx1ZTpcIjVmOWVhMFwiLGNoYXJ0cmV1c2U6XCI3ZmZmMDBcIixjaG9jb2xhdGU6XCJkMjY5MWVcIixjb3JhbDpcImZmN2Y1MFwiLGNvcm5mbG93ZXJibHVlOlwiNjQ5NWVkXCIsY29ybnNpbGs6XCJmZmY4ZGNcIixjcmltc29uOlwiZGMxNDNjXCIsY3lhbjpcIjBmZlwiLGRhcmtibHVlOlwiMDAwMDhiXCIsZGFya2N5YW46XCIwMDhiOGJcIixkYXJrZ29sZGVucm9kOlwiYjg4NjBiXCIsZGFya2dyYXk6XCJhOWE5YTlcIixkYXJrZ3JleTpcImE5YTlhOVwiLGRhcmtncmVlbjpcIjAwNjQwMFwiLGRhcmtraGFraTpcImJkYjc2YlwiLGRhcmttYWdlbnRhOlwiOGIwMDhiXCIsZGFya29saXZlZ3JlZW46XCI1NTZiMmZcIixkYXJrb3JhbmdlOlwiZmY4YzAwXCIsZGFya29yY2hpZDpcIjk5MzJjY1wiLGRhcmtyZWQ6XCI4YjAwMDBcIixkYXJrc2FsbW9uOlwiZTk5NjdhXCIsZGFya3NlYWdyZWVuOlwiOGZiYzhmXCIsZGFya3NsYXRlYmx1ZTpcIjQ4M2Q4YlwiLGRhcmtzbGF0ZWdyYXk6XCIyZjRmNGZcIixkYXJrc2xhdGVncmV5OlwiMmY0ZjRmXCIsZGFya3R1cnF1b2lzZTpcIjAwY2VkMVwiLGRhcmt2aW9sZXQ6XCI5NDAwZDNcIixkZWVwcGluazpcImZmMTQ5M1wiLGRlZXBza3libHVlOlwiMDBiZmZmXCIsZGltZ3JheTpcIjY5Njk2OVwiLGRpbWdyZXk6XCI2OTY5NjlcIixkb2RnZXJibHVlOlwiMWU5MGZmXCIsZmlyZWJyaWNrOlwiYjIyMjIyXCIsZmxvcmFsd2hpdGU6XCJmZmZhZjBcIixmb3Jlc3RncmVlbjpcIjIyOGIyMlwiLGZ1Y2hzaWE6XCJmMGZcIixnYWluc2Jvcm86XCJkY2RjZGNcIixnaG9zdHdoaXRlOlwiZjhmOGZmXCIsZ29sZDpcImZmZDcwMFwiLGdvbGRlbnJvZDpcImRhYTUyMFwiLGdyYXk6XCI4MDgwODBcIixncmV5OlwiODA4MDgwXCIsZ3JlZW46XCIwMDgwMDBcIixncmVlbnllbGxvdzpcImFkZmYyZlwiLGhvbmV5ZGV3OlwiZjBmZmYwXCIsaG90cGluazpcImZmNjliNFwiLGluZGlhbnJlZDpcImNkNWM1Y1wiLGluZGlnbzpcIjRiMDA4MlwiLGl2b3J5OlwiZmZmZmYwXCIsa2hha2k6XCJmMGU2OGNcIixsYXZlbmRlcjpcImU2ZTZmYVwiLGxhdmVuZGVyYmx1c2g6XCJmZmYwZjVcIixsYXduZ3JlZW46XCI3Y2ZjMDBcIixsZW1vbmNoaWZmb246XCJmZmZhY2RcIixsaWdodGJsdWU6XCJhZGQ4ZTZcIixsaWdodGNvcmFsOlwiZjA4MDgwXCIsbGlnaHRjeWFuOlwiZTBmZmZmXCIsbGlnaHRnb2xkZW5yb2R5ZWxsb3c6XCJmYWZhZDJcIixsaWdodGdyYXk6XCJkM2QzZDNcIixsaWdodGdyZXk6XCJkM2QzZDNcIixsaWdodGdyZWVuOlwiOTBlZTkwXCIsbGlnaHRwaW5rOlwiZmZiNmMxXCIsbGlnaHRzYWxtb246XCJmZmEwN2FcIixsaWdodHNlYWdyZWVuOlwiMjBiMmFhXCIsbGlnaHRza3libHVlOlwiODdjZWZhXCIsbGlnaHRzbGF0ZWdyYXk6XCI3ODlcIixsaWdodHNsYXRlZ3JleTpcIjc4OVwiLGxpZ2h0c3RlZWxibHVlOlwiYjBjNGRlXCIsbGlnaHR5ZWxsb3c6XCJmZmZmZTBcIixsaW1lOlwiMGYwXCIsbGltZWdyZWVuOlwiMzJjZDMyXCIsbGluZW46XCJmYWYwZTZcIixtYWdlbnRhOlwiZjBmXCIsbWFyb29uOlwiODAwMDAwXCIsbWVkaXVtYXF1YW1hcmluZTpcIjY2Y2RhYVwiLG1lZGl1bWJsdWU6XCIwMDAwY2RcIixtZWRpdW1vcmNoaWQ6XCJiYTU1ZDNcIixtZWRpdW1wdXJwbGU6XCI5MzcwZDhcIixtZWRpdW1zZWFncmVlbjpcIjNjYjM3MVwiLG1lZGl1bXNsYXRlYmx1ZTpcIjdiNjhlZVwiLG1lZGl1bXNwcmluZ2dyZWVuOlwiMDBmYTlhXCIsbWVkaXVtdHVycXVvaXNlOlwiNDhkMWNjXCIsbWVkaXVtdmlvbGV0cmVkOlwiYzcxNTg1XCIsbWlkbmlnaHRibHVlOlwiMTkxOTcwXCIsbWludGNyZWFtOlwiZjVmZmZhXCIsbWlzdHlyb3NlOlwiZmZlNGUxXCIsbW9jY2FzaW46XCJmZmU0YjVcIixuYXZham93aGl0ZTpcImZmZGVhZFwiLG5hdnk6XCIwMDAwODBcIixvbGRsYWNlOlwiZmRmNWU2XCIsb2xpdmU6XCI4MDgwMDBcIixvbGl2ZWRyYWI6XCI2YjhlMjNcIixvcmFuZ2U6XCJmZmE1MDBcIixvcmFuZ2VyZWQ6XCJmZjQ1MDBcIixvcmNoaWQ6XCJkYTcwZDZcIixwYWxlZ29sZGVucm9kOlwiZWVlOGFhXCIscGFsZWdyZWVuOlwiOThmYjk4XCIscGFsZXR1cnF1b2lzZTpcImFmZWVlZVwiLHBhbGV2aW9sZXRyZWQ6XCJkODcwOTNcIixwYXBheWF3aGlwOlwiZmZlZmQ1XCIscGVhY2hwdWZmOlwiZmZkYWI5XCIscGVydTpcImNkODUzZlwiLHBpbms6XCJmZmMwY2JcIixwbHVtOlwiZGRhMGRkXCIscG93ZGVyYmx1ZTpcImIwZTBlNlwiLHB1cnBsZTpcIjgwMDA4MFwiLHJlYmVjY2FwdXJwbGU6XCI2MzlcIixyZWQ6XCJmMDBcIixyb3N5YnJvd246XCJiYzhmOGZcIixyb3lhbGJsdWU6XCI0MTY5ZTFcIixzYWRkbGVicm93bjpcIjhiNDUxM1wiLHNhbG1vbjpcImZhODA3MlwiLHNhbmR5YnJvd246XCJmNGE0NjBcIixzZWFncmVlbjpcIjJlOGI1N1wiLHNlYXNoZWxsOlwiZmZmNWVlXCIsc2llbm5hOlwiYTA1MjJkXCIsc2lsdmVyOlwiYzBjMGMwXCIsc2t5Ymx1ZTpcIjg3Y2VlYlwiLHNsYXRlYmx1ZTpcIjZhNWFjZFwiLHNsYXRlZ3JheTpcIjcwODA5MFwiLHNsYXRlZ3JleTpcIjcwODA5MFwiLHNub3c6XCJmZmZhZmFcIixzcHJpbmdncmVlbjpcIjAwZmY3ZlwiLHN0ZWVsYmx1ZTpcIjQ2ODJiNFwiLHRhbjpcImQyYjQ4Y1wiLHRlYWw6XCIwMDgwODBcIix0aGlzdGxlOlwiZDhiZmQ4XCIsdG9tYXRvOlwiZmY2MzQ3XCIsdHVycXVvaXNlOlwiNDBlMGQwXCIsdmlvbGV0OlwiZWU4MmVlXCIsd2hlYXQ6XCJmNWRlYjNcIix3aGl0ZTpcImZmZlwiLHdoaXRlc21va2U6XCJmNWY1ZjVcIix5ZWxsb3c6XCJmZjBcIix5ZWxsb3dncmVlbjpcIjlhY2QzMlwifTt9LGQ9ZnVuY3Rpb24oZSl7ZS5pbnN0YWxsTWV0aG9kKFwiY2xlYXJlclwiLGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFscGhhKGlzTmFOKGUpPy0uMTotZSwhMCl9KTt9LGI9ZnVuY3Rpb24oZSl7ZS51c2UobCksZS5pbnN0YWxsTWV0aG9kKFwiZGFya2VuXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlnaHRuZXNzKGlzTmFOKGUpPy0uMTotZSwhMCl9KTt9LHA9ZnVuY3Rpb24oZSl7ZS51c2UobCksZS5pbnN0YWxsTWV0aG9kKFwiZGVzYXR1cmF0ZVwiLGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNhdHVyYXRpb24oaXNOYU4oZSk/LS4xOi1lLCEwKX0pO30sZz1mdW5jdGlvbihlKXtmdW5jdGlvbiBhKCl7dmFyIGE9dGhpcy5yZ2IoKSx0PS4zKmEuX3JlZCsuNTkqYS5fZ3JlZW4rLjExKmEuX2JsdWU7cmV0dXJuIG5ldyBlLlJHQih0LHQsdCxhLl9hbHBoYSl9ZS5pbnN0YWxsTWV0aG9kKFwiZ3JleXNjYWxlXCIsYSkuaW5zdGFsbE1ldGhvZChcImdyYXlzY2FsZVwiLGEpO30sXz1mdW5jdGlvbihlKXtlLnVzZShsKSxlLmluc3RhbGxNZXRob2QoXCJsaWdodGVuXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlnaHRuZXNzKGlzTmFOKGUpPy4xOmUsITApfSk7fSxtPWZ1bmN0aW9uKGUpe2UuaW5zdGFsbE1ldGhvZChcIm1peFwiLGZ1bmN0aW9uKGEsdCl7YT1lKGEpLnJnYigpLHQ9MS0oaXNOYU4odCk/LjU6dCk7dmFyIHI9Mip0LTEsbj10aGlzLl9hbHBoYS1hLl9hbHBoYSxpPSgocipuPT0tMT9yOihyK24pLygxK3IqbikpKzEpLzIsbz0xLWkscz10aGlzLnJnYigpO3JldHVybiBuZXcgZS5SR0Iocy5fcmVkKmkrYS5fcmVkKm8scy5fZ3JlZW4qaSthLl9ncmVlbipvLHMuX2JsdWUqaSthLl9ibHVlKm8scy5fYWxwaGEqdCthLl9hbHBoYSooMS10KSl9KTt9LHc9ZnVuY3Rpb24oZSl7ZS5pbnN0YWxsTWV0aG9kKFwibmVnYXRlXCIsZnVuY3Rpb24oKXt2YXIgYT10aGlzLnJnYigpO3JldHVybiBuZXcgZS5SR0IoMS1hLl9yZWQsMS1hLl9ncmVlbiwxLWEuX2JsdWUsdGhpcy5fYWxwaGEpfSk7fSx5PWZ1bmN0aW9uKGUpe2UuaW5zdGFsbE1ldGhvZChcIm9wYXF1ZXJcIixmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hbHBoYShpc05hTihlKT8uMTplLCEwKX0pO30sdj1mdW5jdGlvbihlKXtlLnVzZShsKSxlLmluc3RhbGxNZXRob2QoXCJyb3RhdGVcIixmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5odWUoKGV8fDApLzM2MCwhMCl9KTt9LGs9ZnVuY3Rpb24oZSl7ZS51c2UobCksZS5pbnN0YWxsTWV0aG9kKFwic2F0dXJhdGVcIixmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zYXR1cmF0aW9uKGlzTmFOKGUpPy4xOmUsITApfSk7fSxNPWZ1bmN0aW9uKGUpe2UuaW5zdGFsbE1ldGhvZChcInRvQWxwaGFcIixmdW5jdGlvbihlKXt2YXIgYT10aGlzLnJnYigpLHQ9ZShlKS5yZ2IoKSxyPW5ldyBlLlJHQigwLDAsMCxhLl9hbHBoYSksbj1bXCJfcmVkXCIsXCJfZ3JlZW5cIixcIl9ibHVlXCJdO3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXTwxZS0xMD9yW2VdPWFbZV06YVtlXT50W2VdP3JbZV09KGFbZV0tdFtlXSkvKDEtdFtlXSk6YVtlXT50W2VdP3JbZV09KHRbZV0tYVtlXSkvdFtlXTpyW2VdPTA7fSksci5fcmVkPnIuX2dyZWVuP3IuX3JlZD5yLl9ibHVlP2EuX2FscGhhPXIuX3JlZDphLl9hbHBoYT1yLl9ibHVlOnIuX2dyZWVuPnIuX2JsdWU/YS5fYWxwaGE9ci5fZ3JlZW46YS5fYWxwaGE9ci5fYmx1ZSxhLl9hbHBoYTwxZS0xMD9hOihuLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXT0oYVtlXS10W2VdKS9hLl9hbHBoYSt0W2VdO30pLGEuX2FscGhhKj1yLl9hbHBoYSxhKX0pO307cmV0dXJuIG8udXNlKHMpLnVzZShmKS51c2UodSkudXNlKGwpLnVzZShoKS51c2UoYykudXNlKGQpLnVzZShiKS51c2UocCkudXNlKGcpLnVzZShfKS51c2UobSkudXNlKHcpLnVzZSh5KS51c2UodikudXNlKGspLnVzZShNKX0pO1xuXG5cdH0pO1xuXG5cdHZhciBkaXYgPSBwYXJ0aWFsKGUsICdkaXYnKTtcblxuXHRmdW5jdGlvbiBlKHR5cGUsIGtsYXNzLCBwKSB7XG5cdCAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdCAgICBlbGVtLmNsYXNzTmFtZSA9IGtsYXNzO1xuXHQgICAgcC5hcHBlbmRDaGlsZChlbGVtKTtcblxuXHQgICAgcmV0dXJuIGVsZW07XG5cdH1cblxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQzOTQ3NDcvamF2YXNjcmlwdC1jdXJyeS1mdW5jdGlvblxuXHRmdW5jdGlvbiBwYXJ0aWFsKGZuKSB7XG5cdCAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cdCAgICB2YXIgYXJncyA9IHNsaWNlLmFwcGx5KGFyZ3VtZW50cywgWzFdKTtcblxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChzbGljZS5hcHBseShhcmd1bWVudHMpKSk7XG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbGFiZWxJbnB1dChrbGFzcywgbiwgcCwgbWF4TGVuKSB7XG5cdCAgICB2YXIgaWQgPSBcImNvbG9yUGlja2VySW5wdXRcIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDEpO1xuXHQgICAgdmFyIGQgPSBkaXYoa2xhc3MsIHApO1xuXHQgICAgdmFyIGwgPSBsYWJlbChuLCBkLCBpZCk7XG5cdCAgICB2YXIgaSA9IGlucHV0KCd0ZXh0JywgZCwgbWF4TGVuLCBpZCk7XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgbGFiZWw6IGwsIFxuXHQgICAgICAgIGlucHV0OiBpXG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbGFiZWwoYywgcCwgaWQpIHtcblx0ICAgIHZhciBlbGVtID0gZSgnbGFiZWwnLCAnJywgcCk7XG5cdCAgICBlbGVtLmlubmVySFRNTCA9IGM7XG5cblx0ICAgIGlmIChpZCkge1xuXHQgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBlbGVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5wdXQodCwgcCwgbWF4TGVuLCBpZCkge1xuXHQgICAgdmFyIGVsZW0gPSBlKCdpbnB1dCcsICcnLCBwKTtcblx0ICAgIGVsZW0udHlwZSA9IHQ7XG5cblx0ICAgIGlmKG1heExlbikgeyBcblx0ICAgICAgICBlbGVtLm1heExlbmd0aCA9IG1heExlbjtcblx0ICAgIH1cblxuXHQgICAgaWYgKGlkKSB7XG5cdCAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXHQgICAgfVxuXG5cdCAgICBpZihtYXhMZW4pIHtcblx0ICAgICAgICBlbGVtLm1heExlbmd0aCA9IG1heExlbjtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGVsZW07XG5cdH1cblxuXHRmdW5jdGlvbiBYKHAsIGEpIHtcblx0ICAgIHAuc3R5bGUubGVmdCA9IGNsYW1wKGEgKiAxMDAsIDAsIDEwMCkgKyAnJSc7XG5cdH1cblx0ZnVuY3Rpb24gWShwLCBhKSB7XG5cdCAgICBwLnN0eWxlLnRvcCA9IGNsYW1wKGEgKiAxMDAsIDAsIDEwMCkgKyAnJSc7XG5cdH1cblx0ZnVuY3Rpb24gQkcoZSwgYykge1xuXHQgICAgZS5zdHlsZS5iYWNrZ3JvdW5kID0gYztcblx0fVxuXG5cdGZ1bmN0aW9uIGNsYW1wKGEsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xuXHQgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGEsIG1pblZhbHVlKSwgbWF4VmFsdWUpO1xuXHR9XG5cblx0dmFyIHV0aWxzID0ge1xuXHQgICAgY2xhbXA6IGNsYW1wLFxuXHQgICAgZTogZSxcblx0ICAgIGRpdjogZGl2LFxuXHQgICAgcGFydGlhbDogcGFydGlhbCxcblx0ICAgIGxhYmVsSW5wdXQ6IGxhYmVsSW5wdXQsXG5cdCAgICBYOiBYLFxuXHQgICAgWTogWSxcblx0ICAgIEJHOiBCR1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGN1cnJlbnRDb2xvcihwKSB7XG5cdCAgICB2YXIgZTEgPSB1dGlscy5kaXYoJ2N1cnJlbnRDb2xvckNvbnRhaW5lcicsIHApO1xuXHQgICAgdmFyIGUgPSB1dGlscy5kaXYoJ2N1cnJlbnRDb2xvcicsIGUxKTtcblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGNvbCkge1xuXHQgICAgICAgICAgICB1dGlscy5CRyhlLCBjb2wuY3NzYSgpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZmllbGRzKHAsIGpvZSwgbykge1xuXHQgICAgdmFyIGNzID0gby5zcGFjZTtcblx0ICAgIHZhciBmYWMgPSBvLmxpbWl0IHx8IDI1NTtcblx0ICAgIHZhciBmaXggPSBvLmZpeCA+PSAwPyBvLmZpeDogMDtcblx0ICAgIHZhciBpbnB1dExlbiA9ICgnJyArIGZhYykubGVuZ3RoICsgZml4O1xuXHQgICAgaW5wdXRMZW4gPSBmaXg/IGlucHV0TGVuICsgMTogaW5wdXRMZW47XG5cblx0ICAgIHZhciBpbml0aWFscyA9IGNzLnNwbGl0KCcnKTtcblx0ICAgIHZhciB1c2VBbHBoYSA9IGNzW2NzLmxlbmd0aCAtIDFdID09ICdBJztcblx0ICAgIGNzID0gdXNlQWxwaGE/IGNzLnNsaWNlKDAsIC0xKTogY3M7XG5cblx0ICAgIGlmKFsnUkdCJywgJ0hTTCcsICdIU1YnLCAnQ01ZSyddLmluZGV4T2YoY3MpIDwgMCkge1xuXHQgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ0ludmFsaWQgZmllbGQgbmFtZXMnLCBjcyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBjID0gdXRpbHMuZGl2KCdjb2xvckZpZWxkcycsIHApO1xuXHQgICAgdmFyIGVsZW1zID0gaW5pdGlhbHMubWFwKGZ1bmN0aW9uKG4pIHtcblx0ICAgICAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuXG5cdCAgICAgICAgdmFyIGUgPSB1dGlscy5sYWJlbElucHV0KCdjb2xvciAnICsgbiwgbiwgYywgaW5wdXRMZW4pO1xuXHQgICAgICAgIGUuaW5wdXQub25ibHVyID0gZG9uZTtcblx0ICAgICAgICBlLmlucHV0Lm9ua2V5ZG93biA9IHZhbGlkYXRlO1xuXHQgICAgICAgIGUuaW5wdXQub25rZXl1cCA9IHVwZGF0ZTtcblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIG5hbWU6IG4sIFxuXHQgICAgICAgICAgICBlOiBlXG5cdCAgICAgICAgfTtcblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBkb25lKCkge1xuXHQgICAgICAgIGpvZS5kb25lKCk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGUpIHtcblx0ICAgICAgICBpZiAoIShlLmN0cmxLZXkgfHwgZS5hbHRLZXkpICYmIC9eW2EtekEtWl0kLy50ZXN0KGUua2V5KSkge1xuXHQgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdCAgICAgICAgdmFyIGNvbCA9IFtjc107XG5cblx0ICAgICAgICBlbGVtcy5mb3JFYWNoKGZ1bmN0aW9uKG8pIHtjb2wucHVzaChvLmUuaW5wdXQudmFsdWUgLyBmYWMpO30pO1xuXG5cdCAgICAgICAgaWYoIXVzZUFscGhhKSB7XG5cdCAgICAgICAgICAgIGNvbC5wdXNoKGpvZS5nZXRBbHBoYSgpKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBqb2Uuc2V0KGNvbCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihjb2wpIHtcblx0ICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChmdW5jdGlvbihvKSB7XG5cdCAgICAgICAgICAgICAgICBvLmUuaW5wdXQudmFsdWUgPSAoY29sW28ubmFtZV0oKSAqIGZhYykudG9GaXhlZChmaXgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWxwaGEocCwgam9lKSB7XG5cdCAgICB2YXIgZSA9IGRyYWdqc191bWQuc2xpZGVyKHtcblx0ICAgICAgICBwYXJlbnQ6IHAsXG5cdCAgICAgICAgJ2NsYXNzJzogJ29uZWQgYWxwaGEnLFxuXHQgICAgICAgIGNiczoge1xuXHQgICAgICAgICAgICBiZWdpbjogY2hhbmdlLFxuXHQgICAgICAgICAgICBjaGFuZ2U6IGNoYW5nZSxcblx0ICAgICAgICAgICAgZW5kOiBkb25lXG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG5cdCAgICAgICAgam9lLmRvbmUoKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gY2hhbmdlKHApIHtcblx0ICAgICAgICB2YXIgdmFsID0gdXRpbHMuY2xhbXAocC55LCAwLCAxKTtcblxuXHQgICAgICAgIHV0aWxzLlkocC5wb2ludGVyLCB2YWwpO1xuXHQgICAgICAgIGpvZS5zZXRBbHBoYSgxIC0gdmFsKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGNvbCkge1xuXHQgICAgICAgICAgICB1dGlscy5ZKGUucG9pbnRlciwgMSAtIGNvbC5hbHBoYSgpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaGV4KHAsIGpvZSwgbykge1xuXHQgICAgdmFyIGUgPSB1dGlscy5sYWJlbElucHV0KCdoZXgnLCBvLmxhYmVsIHx8ICcnLCBwLCA3KTtcblx0ICAgIGUuaW5wdXQudmFsdWUgPSAnIyc7XG5cblx0ICAgIGUuaW5wdXQub25rZXl1cCA9IGZ1bmN0aW9uKGVsZW0pIHtcblx0ICAgICAgICB2YXIga2V5ID0gZWxlbS5rZXlDb2RlIHx8IGVsZW0ud2hpY2g7XG5cdCAgICAgICAgdmFyIHZhbCA9IGVsZW0udGFyZ2V0LnZhbHVlO1xuXHQgICAgICAgIHZhbCA9IHZhbFswXSA9PSAnIyc/IHZhbDogJyMnICsgdmFsO1xuXHQgICAgICAgIHZhbCA9IHBhZCh2YWwsIDcsICcwJyk7XG5cblx0ICAgICAgICBpZihrZXkgPT0gMTMpIHtcblx0ICAgICAgICAgICAgam9lLnNldCh2YWwpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIGUuaW5wdXQub25ibHVyID0gZnVuY3Rpb24oZWxlbSkge1xuXHQgICAgICAgIGpvZS5zZXQoZWxlbS50YXJnZXQudmFsdWUpO1xuXHQgICAgICAgIGpvZS5kb25lKCk7XG5cdCAgICB9O1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oY29sKSB7XG5cdCAgICAgICAgICAgIGUuaW5wdXQudmFsdWUgPSBlLmlucHV0LnZhbHVlWzBdID09ICcjJz8gJyMnOiAnJztcblx0ICAgICAgICAgICAgZS5pbnB1dC52YWx1ZSArPSBjb2wuaGV4KCkuc2xpY2UoMSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlKHAsIGpvZSwgbykge1xuXHQgICAgdmFyIGVsZW0gPSB1dGlscy5lKCdhJywgb1snY2xhc3MnXSB8fCAnY2xvc2UnLCBwKTtcblx0ICAgIGVsZW0uaHJlZiA9ICcjJztcblx0ICAgIGVsZW0uaW5uZXJIVE1MID0gby5sYWJlbCB8fCAnQ2xvc2UnO1xuXG5cdCAgICBlbGVtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdCAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdCAgICAgICAgam9lLmhpZGUoKTtcblx0ICAgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwYWQoYSwgbiwgYykge1xuXHQgICAgdmFyIHJldCA9IGE7XG5cblx0ICAgIGZvcih2YXIgaSA9IGEubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdCAgICAgICAgcmV0ICs9IGM7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdH1cblxuXHR2YXIgZXh0cmFzID0ge1xuXHQgICAgY3VycmVudENvbG9yOiBjdXJyZW50Q29sb3IsXG5cdCAgICBmaWVsZHM6IGZpZWxkcyxcblx0ICAgIGhleDogaGV4LFxuXHQgICAgYWxwaGE6IGFscGhhLFxuXHQgICAgY2xvc2U6IGNsb3NlXG5cdH07XG5cblx0Ly8gVXNlIHRoZSBhbGwgYnVpbGQgd2l0aCBjbXlrIGFuZCBldmVyeXRoaW5nXG5cblxuXG5cdHZhciBjb2xvcmpvZSA9IGZ1bmN0aW9uKGNicykge1xuXHQgICAgaWYgKCFhbGwoaXNGdW5jdGlvbiwgW2Nicy5pbml0LCBjYnMueHksIGNicy56XSkpIHtcblx0ICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiY29sb3Jqb2U6IG1pc3NpbmcgY2JcIik7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmdW5jdGlvbihlbGVtZW50LCBpbml0aWFsQ29sb3IsIGV4dHJhcyQkMSkge1xuXHQgICAgICAgIHJldHVybiBzZXR1cCh7XG5cdCAgICAgICAgICAgIGU6IGVsZW1lbnQsXG5cdCAgICAgICAgICAgIGNvbG9yOiBpbml0aWFsQ29sb3IsXG5cdCAgICAgICAgICAgIGNiczogY2JzLFxuXHQgICAgICAgICAgICBleHRyYXM6IGV4dHJhcyQkMSxcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdH07XG5cblx0LyogcGlja2VycyAqL1xuXHRjb2xvcmpvZS5yZ2IgPSBjb2xvcmpvZSh7XG5cdCAgICBpbml0OiBmdW5jdGlvbihjb2wsIHh5LCB6KSB7XG5cdCAgICAgICAgdmFyIHJldCA9IG9uZUNvbG9yQWxsKGNvbCkuaHN2KCk7XG5cblx0ICAgICAgICB0aGlzLnh5KHJldCwgeyB4OiByZXQuc2F0dXJhdGlvbigpLCB5OiAxIC0gcmV0LnZhbHVlKCkgfSwgeHksIHopO1xuXHQgICAgICAgIHRoaXMueihyZXQsIHJldC5odWUoKSwgeHksIHopO1xuXG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0sXG5cdCAgICB4eTogZnVuY3Rpb24oY29sLCBwLCB4eSkge1xuXHQgICAgICAgIHV0aWxzLlgoeHkucG9pbnRlciwgcC54KTtcblx0ICAgICAgICB1dGlscy5ZKHh5LnBvaW50ZXIsIHAueSk7XG5cblx0ICAgICAgICByZXR1cm4gY29sLnNhdHVyYXRpb24ocC54KS52YWx1ZSgxIC0gcC55KTtcblx0ICAgIH0sXG5cdCAgICB6OiBmdW5jdGlvbihjb2wsIHYsIHh5LCB6KSB7XG5cdCAgICAgICAgdXRpbHMuWSh6LnBvaW50ZXIsIHYpO1xuXHQgICAgICAgIFJHQl9CRyh4eS5iYWNrZ3JvdW5kLCB2KTtcblxuXHQgICAgICAgIHJldHVybiBjb2wuaHVlKHYpO1xuXHQgICAgfSxcblx0fSk7XG5cblx0Y29sb3Jqb2UuaHNsID0gY29sb3Jqb2Uoe1xuXHQgICAgaW5pdDogZnVuY3Rpb24oY29sLCB4eSwgeikge1xuXHQgICAgICAgIHZhciByZXQgPSBvbmVDb2xvckFsbChjb2wpLmhzbCgpO1xuXG5cdCAgICAgICAgdGhpcy54eShyZXQsIHsgeDogcmV0Lmh1ZSgpLCB5OiAxIC0gcmV0LnNhdHVyYXRpb24oKSB9LCB4eSwgeik7XG5cdCAgICAgICAgdGhpcy56KHJldCwgMSAtIHJldC5saWdodG5lc3MoKSwgeHksIHopO1xuXG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0sXG5cdCAgICB4eTogZnVuY3Rpb24oY29sLCBwLCB4eSwgeikge1xuXHQgICAgICAgIHV0aWxzLlgoeHkucG9pbnRlciwgcC54KTtcblx0ICAgICAgICB1dGlscy5ZKHh5LnBvaW50ZXIsIHAueSk7XG5cdCAgICAgICAgUkdCX0JHKHouYmFja2dyb3VuZCwgcC54KTtcblxuXHQgICAgICAgIHJldHVybiBjb2wuaHVlKHAueCkuc2F0dXJhdGlvbigxIC0gcC55KTtcblx0ICAgIH0sXG5cdCAgICB6OiBmdW5jdGlvbihjb2wsIHYsIHh5LCB6KSB7XG5cdCAgICAgICAgdXRpbHMuWSh6LnBvaW50ZXIsIHYpO1xuXG5cdCAgICAgICAgcmV0dXJuIGNvbC5saWdodG5lc3MoMSAtIHYpO1xuXHQgICAgfSxcblx0fSk7XG5cblx0Y29sb3Jqb2UuZXh0cmFzID0ge307XG5cblx0Y29sb3Jqb2UucmVnaXN0ZXJFeHRyYSA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAobmFtZSBpbiBjb2xvcmpvZS5leHRyYXMpIHtcblx0ICAgICAgICBjb25zb2xlLndhcm4oJ0V4dHJhIFwiJyArIG5hbWUgKyAnXCJoYXMgYmVlbiByZWdpc3RlcmVkIGFscmVhZHkhJyk7XG5cdCAgICB9XG5cblx0ICAgIGNvbG9yam9lLmV4dHJhc1tuYW1lXSA9IGZuO1xuXHR9O1xuXG5cdGZvciAodmFyIGsgaW4gZXh0cmFzKSB7XG5cdCAgICBjb2xvcmpvZS5yZWdpc3RlckV4dHJhKGssIGV4dHJhc1trXSk7XG5cdH1cblxuXHRmdW5jdGlvbiBSR0JfQkcoZSwgaCkge1xuXHQgICAgdXRpbHMuQkcoZSwgbmV3IG9uZUNvbG9yQWxsLkhTVihoLCAxLCAxKS5jc3NhKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXAobykge1xuXHQgICAgaWYgKCFvLmUpIHtcblx0ICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiY29sb3Jqb2U6IG1pc3NpbmcgZWxlbWVudFwiKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGUgPSBpc1N0cmluZyhvLmUpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoby5lKSA6IG8uZTtcblx0ICAgIGUuY2xhc3NOYW1lID0gXCJjb2xvclBpY2tlclwiO1xuXG5cdCAgICB2YXIgY2JzID0gby5jYnM7XG5cblx0ICAgIHZhciB4eSA9IGRyYWdqc191bWQueHlzbGlkZXIoe1xuXHQgICAgICAgIHBhcmVudDogZSxcblx0ICAgICAgICBjbGFzczogXCJ0d29kXCIsXG5cdCAgICAgICAgY2JzOiB7XG5cdCAgICAgICAgICAgIGJlZ2luOiBjaGFuZ2VYWSxcblx0ICAgICAgICAgICAgY2hhbmdlOiBjaGFuZ2VYWSxcblx0ICAgICAgICAgICAgZW5kOiBkb25lLFxuXHQgICAgICAgIH0sXG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gY2hhbmdlWFkocCkge1xuXHQgICAgICAgIGNvbCA9IGNicy54eShcblx0ICAgICAgICAgICAgY29sLFxuXHQgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICB4OiB1dGlscy5jbGFtcChwLngsIDAsIDEpLFxuXHQgICAgICAgICAgICAgICAgeTogdXRpbHMuY2xhbXAocC55LCAwLCAxKSxcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgeHksXG5cdCAgICAgICAgICAgIHpcblx0ICAgICAgICApO1xuXHQgICAgICAgIGNoYW5nZWQoKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHogPSBkcmFnanNfdW1kLnNsaWRlcih7XG5cdCAgICAgICAgcGFyZW50OiBlLFxuXHQgICAgICAgIGNsYXNzOiBcIm9uZWRcIixcblx0ICAgICAgICBjYnM6IHtcblx0ICAgICAgICAgICAgYmVnaW46IGNoYW5nZVosXG5cdCAgICAgICAgICAgIGNoYW5nZTogY2hhbmdlWixcblx0ICAgICAgICAgICAgZW5kOiBkb25lLFxuXHQgICAgICAgIH0sXG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gY2hhbmdlWihwKSB7XG5cdCAgICAgICAgY29sID0gY2JzLnooY29sLCB1dGlscy5jbGFtcChwLnksIDAsIDEpLCB4eSwgeik7XG5cdCAgICAgICAgY2hhbmdlZCgpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBJbml0aWFsIGNvbG9yXG5cdCAgICB2YXIgcHJldmlvdXMgPSBnZXRDb2xvcihvLmNvbG9yKTtcblx0ICAgIHZhciBjb2wgPSBjYnMuaW5pdChwcmV2aW91cywgeHksIHopO1xuXHQgICAgdmFyIGxpc3RlbmVycyA9IHsgY2hhbmdlOiBbXSwgZG9uZTogW10gfTtcblxuXHQgICAgZnVuY3Rpb24gY2hhbmdlZChza2lwKSB7XG5cdCAgICAgICAgc2tpcCA9IGlzQXJyYXkoc2tpcCkgPyBza2lwIDogW107XG5cblx0ICAgICAgICB2YXIgbGkgPSBsaXN0ZW5lcnMuY2hhbmdlO1xuXHQgICAgICAgIHZhciB2O1xuXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgICAgIHYgPSBsaVtpXTtcblx0ICAgICAgICAgICAgaWYgKHNraXAuaW5kZXhPZih2Lm5hbWUpID09IC0xKSB7XG5cdCAgICAgICAgICAgICAgICB2LmZuKGNvbCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG5cdCAgICAgICAgLy8gRG8gbm90IGNhbGwgZG9uZSBjYWxsYmFjayBpZiB0aGUgY29sb3IgZGlkIG5vdCBjaGFuZ2Vcblx0ICAgICAgICBpZiAocHJldmlvdXMuZXF1YWxzKGNvbCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMuZG9uZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgICAgICBsaXN0ZW5lcnMuZG9uZVtpXS5mbihjb2wpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHByZXZpb3VzID0gY29sO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgb2IgPSB7XG5cdCAgICAgICAgZTogZSxcblx0ICAgICAgICBkb25lOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgZG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihza2lwKSB7XG5cdCAgICAgICAgICAgIGNoYW5nZWQoc2tpcCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBoaWRlOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjb2w7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uKGMpIHtcblx0ICAgICAgICAgICAgdmFyIG9sZENvbCA9IHRoaXMuZ2V0KCk7XG5cdCAgICAgICAgICAgIGNvbCA9IGNicy5pbml0KGdldENvbG9yKGMpLCB4eSwgeik7XG5cblx0ICAgICAgICAgICAgaWYgKCFvbGRDb2wuZXF1YWxzKGNvbCkpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIGdldEFscGhhOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGNvbC5hbHBoYSgpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0QWxwaGE6IGZ1bmN0aW9uKHYpIHtcblx0ICAgICAgICAgICAgY29sID0gY29sLmFscGhhKHYpO1xuXG5cdCAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBvbjogZnVuY3Rpb24oZXZ0LCBjYiwgbmFtZSkge1xuXHQgICAgICAgICAgICBpZiAoZXZ0ID09IFwiY2hhbmdlXCIgfHwgZXZ0ID09IFwiZG9uZVwiKSB7XG5cdCAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbZXZ0XS5wdXNoKHsgbmFtZTogbmFtZSwgZm46IGNiIH0pO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuXHQgICAgICAgICAgICAgICAgICAgICdQYXNzZWQgaW52YWxpZCBldnQgbmFtZSBcIicgKyBldnQgKyAnXCIgdG8gY29sb3Jqb2Uub24nXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKGV2dCkge1xuXHQgICAgICAgICAgICBpZiAoZXZ0KSB7XG5cdCAgICAgICAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2dF07XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbGlzdGVuZXJzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1trZXldO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgIH07XG5cblx0ICAgIHNldHVwRXh0cmFzKGUsIG9iLCBvLmV4dHJhcyk7XG5cdCAgICBjaGFuZ2VkKCk7XG5cblx0ICAgIHJldHVybiBvYjtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbG9yKGMpIHtcblx0ICAgIGlmICghaXNEZWZpbmVkKGMpKSB7XG5cdCAgICAgICAgcmV0dXJuIG9uZUNvbG9yQWxsKFwiIzAwMFwiKTtcblx0ICAgIH1cblx0ICAgIGlmIChjLmlzQ29sb3IpIHtcblx0ICAgICAgICByZXR1cm4gYztcblx0ICAgIH1cblxuXHQgICAgdmFyIHJldCA9IG9uZUNvbG9yQWxsKGMpO1xuXG5cdCAgICBpZiAocmV0KSB7XG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgaWYgKGlzRGVmaW5lZChjKSkge1xuXHQgICAgICAgIGNvbnNvbGUud2FybihcIlBhc3NlZCBpbnZhbGlkIGNvbG9yIHRvIGNvbG9yam9lLCB1c2luZyBibGFjayBpbnN0ZWFkXCIpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gb25lQ29sb3JBbGwoXCIjMDAwXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXBFeHRyYXMocCwgam9lLCBleHRyYXMkJDEpIHtcblx0ICAgIGlmICghZXh0cmFzJCQxKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgYyA9IHV0aWxzLmRpdihcImV4dHJhc1wiLCBwKTtcblx0ICAgIHZhciBjYnM7XG5cdCAgICB2YXIgbmFtZTtcblx0ICAgIHZhciBwYXJhbXM7XG5cblx0ICAgIGV4dHJhcyQkMS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcblx0ICAgICAgICBpZiAoaXNBcnJheShlKSkge1xuXHQgICAgICAgICAgICBuYW1lID0gZVswXTtcblx0ICAgICAgICAgICAgcGFyYW1zID0gZS5sZW5ndGggPiAxID8gZVsxXSA6IHt9O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIG5hbWUgPSBlO1xuXHQgICAgICAgICAgICBwYXJhbXMgPSB7fTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGV4dHJhID0gbmFtZSBpbiBjb2xvcmpvZS5leHRyYXMgPyBjb2xvcmpvZS5leHRyYXNbbmFtZV0gOiBudWxsO1xuXG5cdCAgICAgICAgaWYgKGV4dHJhKSB7XG5cdCAgICAgICAgICAgIGNicyA9IGV4dHJhKGMsIGV4dHJhUHJveHkoam9lLCBuYW1lICsgaSksIHBhcmFtcyk7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGsgaW4gY2JzKSB7XG5cdCAgICAgICAgICAgICAgICBqb2Uub24oaywgY2JzW2tdLCBuYW1lKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0cmFQcm94eShqb2UsIG5hbWUpIHtcblx0ICAgIHZhciByZXQgPSBjb3B5KGpvZSk7XG5cblx0ICAgIHJldC51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICBqb2UudXBkYXRlKFtuYW1lXSk7XG5cdCAgICB9O1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gY29weShvKSB7XG5cdCAgICAvLyByZXR1cm5zIGEgc2hhbGxvdyBjb3B5XG5cdCAgICB2YXIgcmV0ID0ge307XG5cblx0ICAgIGZvciAodmFyIGsgaW4gbykge1xuXHQgICAgICAgIHJldFtrXSA9IG9ba107XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhbGwoY2IsIGEpIHtcblx0ICAgIHJldHVybiBhLm1hcChjYikuZmlsdGVyKGlkKS5sZW5ndGggPT0gYS5sZW5ndGg7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0FycmF5KG8pIHtcblx0ICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBBcnJheV1cIjtcblx0fVxuXHRmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG5cdH1cblx0ZnVuY3Rpb24gaXNEZWZpbmVkKGlucHV0KSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIGlucHV0ICE9PSBcInVuZGVmaW5lZFwiO1xuXHR9XG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcblx0ICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIjtcblx0fVxuXHRmdW5jdGlvbiBpZChhKSB7XG5cdCAgICByZXR1cm4gYTtcblx0fVxuXG5cdHZhciBjb2xvcmpvZV8xID0gY29sb3Jqb2U7XG5cblx0cmV0dXJuIGNvbG9yam9lXzE7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xvcmpvZS5qcy5tYXBcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgY29sb3Jqb2UgPSByZXF1aXJlKFwiY29sb3Jqb2VcIik7XHJcblxyXG52YXIgY2FudmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFpbnRjYW52YXNcIik7XHJcbnZhciBjYW52ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG52YXIgY3R4ID0gY2Fudi5nZXRDb250ZXh0KCcyZCcpO1xyXG52YXIgaXNNb3VzZURvd24gPSBmYWxzZTtcclxudmFyIGNvb3JkcyA9IFtdO1xyXG52YXIgcmFkaXVzID0gMy41O1xyXG52YXIgdGltZXIgPSBudWxsO1xyXG52YXIgY29udHJvbCA9IGZhbHNlO1xyXG52YXIgY29sb3IgPSBcImJsYWNrXCI7XHJcbnZhciBvZmZzZXRYID0gNDU7XHJcbmNvbnN0IGpvZSA9IGNvbG9yam9lLnJnYihcImNvbG9yX3BpY2tlclwiLCBcImJsYWNrXCIpO1xyXG5cclxuZnVuY3Rpb24gYWxsb3dEcmF3KGNvbm5lY3Rpb25zKSB7XHJcblx0Y29udHJvbCA9IHRydWU7XHJcblx0cmFkaXVzID0gMy41O1xyXG5cdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdGNvbnNvbGUubG9nKFwiQWxsb3dEcmF3IGNsZWFyXCIpO1xyXG5cdGNsZWFyKCk7XHJcblx0bGV0IG9sZGRhdGEgPSBcIlwiO1xyXG5cdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgXHRcdGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoY29vcmRzKTtcclxuICBcdFx0Y29vcmRzID0gW107XHJcblx0ICBcdGlmICgoZGF0YSAhPSBvbGRkYXRhKSAmJiAoZGF0YSAhPSBcIltdXCIpKVxyXG5cdCAgXHR7XHJcblx0ICBcdFx0Zm9yIChsZXQgY29ubmVjdCBpbiBjb25uZWN0aW9uc1swXSlcclxuXHQgIFx0XHR7XHJcblx0ICBcdFx0XHRjb25uZWN0aW9uc1swXVtjb25uZWN0XVsxXS5zZW5kKGRhdGEpO1xyXG5cdCAgXHRcdH1cclxuXHQgIFx0XHRcclxuXHQgIFx0fVxyXG5cclxuXHQgIFx0b2xkZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcclxuXHR9LCA0MCk7XHJcblx0Y29uc29sZS5sb2coXCJEcmF3aW5nIGFsbG93ZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVEcmF3KCkge1xyXG5cdGNvbnRyb2wgPSBmYWxzZTtcclxuXHRjb25zb2xlLmxvZyhcIkRpc2FibGVEcmF3IGNsZWFyXCIpO1xyXG5cdGNsZWFyKCk7XHJcblx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0Y29uc29sZS5sb2coXCJEcmF3aW5nIGRpc2FibGVkXCIpO1xyXG5cdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3N3aWR0aHNsaWRlclwiKS52YWx1ZSA9IFwiNC41XCI7XHJcblx0cmFkaXVzID0gNC41O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNsYXJlQ2FudkRyYXcoKSB7XHJcblx0Y2Fudi53aWR0aCA9IGNhbnZkaXYub2Zmc2V0V2lkdGg7XHJcblx0Y2Fudi5oZWlnaHQgPSBjYW52ZGl2Lm9mZnNldEhlaWdodDtcclxuXHRjYW52LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChjb250cm9sKVxyXG5cdFx0e1xyXG5cdFx0XHRjb29yZHMucHVzaChbZS5jbGllbnRYIC0gb2Zmc2V0WCwgZS5jbGllbnRZXSk7XHJcblxyXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7ICBcclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG5cdFx0XHRjdHguYXJjKGUuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XHJcblx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTsgXHJcblx0XHRcdGN0eC5tb3ZlVG8oZS5jbGllbnRYIC0gb2Zmc2V0WCwgZS5jbGllbnRZKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlzTW91c2VEb3duID0gZmFsc2U7XHJcblx0XHRjdHguYmVnaW5QYXRoKCk7IC8v0KHQsdGA0LDRgdGL0LLQsNGOINC/0YPRgtGMLCDRh9GC0L7QsdGLINC70LjQvdC40Y8g0L3QtSDQv9GA0L7RgNC40YHQvtCy0YvQstCw0LvQsNGB0Ywg0LjQtyDQv9GA0L7RiNC70L7QuSDQv9C+0LfQuNGG0LjQuCwg0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0L7QtNC90Y/QuyDQvNGL0YjRjFxyXG5cdFx0Y29vcmRzLnB1c2goJ21vdXNldXAnKTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGNvbnRyb2wpXHJcblx0XHR7XHJcblx0XHRcdGlzTW91c2VEb3duID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlzTW91c2VEb3duID0gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChpc01vdXNlRG93bilcclxuXHRcdHtcclxuXHRcdFx0Y2xlYXJTZWxlY3Rpb24oKTtcclxuXHRcdFx0Y29vcmRzLnB1c2goW2UuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WV0pO1xyXG5cclxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHJhZGl1cyAqIDI7XHJcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG5cdFx0XHRjdHgubGluZVRvKGUuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WSk7IC8v0KDQuNGB0YPRjiDQu9C40L3QuNGOINC40Lcg0YLQtdC60YPRidC10Lkg0L/RgNC+0YjQu9C+0Lkg0L/QvtC30LjRhtC40Lgg0LIg0YLQtdC60YPRidGD0Y5cclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cclxuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpOyBcclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yOyBcclxuXHRcdFx0Y3R4LmFyYyhlLmNsaWVudFggLSBvZmZzZXRYLCBlLmNsaWVudFksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpOyAgLy/QlNC+0YDQuNGB0L7QstGL0LLQsNGOINC60YDRg9Cz0LgsINGH0YLQvtCx0Ysg0L3QtSDQsdGL0LvQviDRjdGE0YTQtdC60YLQsCDQttC10LvQtdC30L3QvtC5INC00L7RgNC+0LPQuCAo0L3Rg9C20L3Qviwg0LXRgdC70Lgg0LvQuNC90LjRjyDRgtC+0LvRgdGC0LDRjylcclxuXHRcdFx0Y3R4LmZpbGwoKTtcclxuXHJcblxyXG5cclxuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRjdHgubW92ZVRvKGUuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGNhbnYub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y29vcmRzLnB1c2goXCJvdXRcIik7XHJcblx0fTtcclxuICBcclxuICAgIGRlY2xhcmVDYW52QmluZCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ2FudmFzIGRlY2xhcmVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYXkoY29vcmRzKVxyXG57XHJcblx0d2hpbGUgKHRydWUpXHJcblx0e1xyXG5cdFx0aWYgKCFjb29yZHMubGVuZ3RoKSAvL9CV0YHQu9C4INC60L7QvtGA0LTQuNC90LDRgiDQvdC10YJcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjcmQgPSBjb29yZHMuc2hpZnQoKTsgLy/Qo9C00LDQu9GP0LXRgiDQv9C10YDQstGL0Lkg0Y3Qu9C10LzQtdC90YIg0LjQtyBjb29yZHMg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0Y3RgtC+0YIg0Y3Qu9C10LzQtdC90YIg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4gY3JkXHJcblx0XHRpZiAoY3JkID09IFwib3V0XCIpXHJcblx0XHR7XHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTsgIFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoY3JkID09IFwiY2xlYXJcIilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJSZXBsYXkgY2xlYXJcIik7XHJcblx0XHRcdGNsZWFyKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoY3JkWzBdID09IFwiI1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRjb2xvciA9IGNyZC5zbGljZSgxKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGNyZFswXSA9PSBcIipcIilcclxuXHRcdHtcclxuXHRcdFx0cmFkaXVzID0gY3JkLnNsaWNlKDEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR2YXJcdGUgPSB7XHJcblx0XHRcdFx0XHRjbGllbnRYOiBjcmRbJzAnXSxcclxuXHRcdFx0XHRcdGNsaWVudFk6IGNyZFsnMSddXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdC8v0JrQvtC0INGB0LrQvtC/0LjRgNC+0LLQsNC9INC40Lcg0L7QsdGL0YfQvdC+0LPQviDRgNC40YHQvtCy0LDQvdC40Y9cclxuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHJhZGl1cyAqIDI7XHJcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG5cdFx0XHRjdHgubGluZVRvKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cclxuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcblx0XHRcdGN0eC5hcmMoZS5jbGllbnRYLCBlLmNsaWVudFksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG5cdFx0XHRjdHguZmlsbCgpO1xyXG5cclxuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRjdHgubW92ZVRvKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY2xhcmVDYW52QmluZCgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zd2lkdGhzbGlkZXJcIikub25jaGFuZ2UgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRyYWRpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zd2lkdGhzbGlkZXJcIikudmFsdWU7XHJcblx0XHRjb29yZHMucHVzaChcIipcIiArIHJhZGl1cyk7XHJcblx0fTtcclxuXHJcblx0am9lLm9uKFwiZG9uZVwiLCBjb2xvciA9PiB7XHJcblx0XHRjaGFuZ2VDb2xvcihjb2xvci5jc3MoKSk7IFxyXG5cdFx0Y29uc29sZS5sb2coXCJTZWxlY3RpbmcgXCIgKyBjb2xvci5jc3MoKSk7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJhc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkVyYXNlIGNsZWFyXCIpO1xyXG5cdFx0Y2xlYXIoKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcjFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjaGFuZ2VDb2xvcihcImJsYWNrXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3IyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Y2hhbmdlQ29sb3IoXCIjQjEwQjBCXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGNoYW5nZUNvbG9yKFwiIzVDOTIyNlwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcjRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjaGFuZ2VDb2xvcihcIndoaXRlXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yNVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGNoYW5nZUNvbG9yKFwiIzI4NEFGRlwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9vc2Vjb2xvclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciBjb2xvclBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JfcGlja2VyXCIpO1xyXG5cclxuXHRcdGlmIChjb2xvclBpYy5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xyXG5cdFx0XHRjb2xvclBpYy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb2xvclBpYy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvcihjKSB7XHJcblx0Y29sb3IgPSBjO1xyXG5cdGNvb3Jkcy5wdXNoKFwiI1wiICsgYyk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIHNhdmUoKVxyXG57XHJcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb3JkcycsIEpTT04uc3RyaW5naWZ5KGNvb3JkcykpOyAvL9Cn0YLQviDRgtCw0LrQvtC1IGxvY2FsU3RvcmFnZSAtIGh0dHBzOi8vdHByb2dlci5ydS9hcnRpY2xlcy9sb2NhbHN0b3JhZ2UvXHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKHJlcGxheSA9IGZhbHNlKVxyXG57XHJcblx0Y29uc29sZS5sb2coXCItLS0tLS0tLS1DbGVhci0tLS0tLS0tXCIpO1xyXG5cdGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG5cdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52LndpZHRoLCBjYW52LmhlaWdodCk7XHJcblxyXG5cdGN0eC5iZWdpblBhdGgoKTtcclxuXHRjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcblx0aWYgKCFyZXBsYXkpIHtcclxuXHRcdGNvb3Jkcy5wdXNoKFwiY2xlYXJcIik7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLS0tLS0tLU5vdCBSZXBsYXktLS0tLS0tLVwiKTtcclxuXHR9XHJcblx0Y29uc29sZS5sb2coY29vcmRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YShjYW52KSB7XHJcblx0dmFyIGRhdGEgPSBjYW52LnRvRGF0YVVSTCgpO1xyXG5cdHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH0gZWxzZSB7IC8vINGB0YLQsNGA0YvQuSBJRVxyXG4gICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtkZWNsYXJlQ2FudkRyYXcsIGFsbG93RHJhdywgZGlzYWJsZURyYXcsIHJlcGxheX07XHJcblxyXG5leHBvcnRzLmRlY2xhcmVDYW52RHJhdyA9IGRlY2xhcmVDYW52RHJhdztcclxuZXhwb3J0cy5hbGxvd0RyYXcgPSBhbGxvd0RyYXc7XHJcbmV4cG9ydHMuZGlzYWJsZURyYXcgPSBkaXNhYmxlRHJhdzsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=