var websock =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./websock/index.js");
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

/***/ }),

/***/ "./websock/index.js":
/*!**************************!*\
  !*** ./websock/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainroom = undefined;

var _canvas = __webpack_require__(/*! ../canvas */ "./canvas/index.js");

//var serverIp = "188.232.42.73";
var serverIp = "websock-serv.herokuapp.com"; //ngrok http --host-header=justdraw.com 80s

/*
$.ajax({
	url: "http://icanhazip.com",
	dataType: "html",
	type: "GET",
	async: false
})
.done(function(data) {
	let clientIp = data.replace("\n", "");
	console.log(clientIp);
	if (clientIp == serverIp)
	{
		serverIp = "192.168.0.2";
	}
})
.fail(function( xhr, status, errorThrown ) {
	console.log( "Error: " + errorThrown );
	console.log( "Status: " + status );
});
*/

var url = "WSS://" + serverIp;
console.log(url);
var socket = new WebSocket(url);

class room {
  constructor(name, round, maxround, players, maxplayers, roundtime, host = "") {
    this.name = name;
    this.host = host;
    this.round = round;
    this.maxround = maxround;
    this.players = 1;
    this.maxplayers = maxplayers;
    this.roundtime = roundtime;
    this.score = {};
    this.time = 0;
    this.word = [];
  }

}

var mainroom = new room(name = undefined); //Комната, в которой сейчас находится пользователь

var client = {};
client.name = "";
client.id = "";
var connections = {};
var keyword = "";
var control = true;
var roundtimer = false;
var pingtimer;
var pingtime = 0;

socket.onopen = function () {
  console.log("Соединение установлено.");
  pingtimer = setInterval(function () {
    send({
      type: "ping",
      client: client.name
    });
    pingtime = performance.now();
  }, 10000);
};

socket.onclose = function (event) {
  clearInterval(pingtimer);

  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения');
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
  }
};

socket.onmessage = function (message) {
  var data = message.data;
  console.log("Received message from WSS: \n" + data);
  data = JSON.parse(data);

  switch (data.type) {
    case "login":
      onLogin(data);
      break;

    case "offer":
      onOffer(data.offer, data.client);
      break;

    case "answer":
      onAnswer(data.answer, data.client);
      break;

    case "candidate":
      onCandidate(data.candidate, data.client);
      break;

    case "getrooms":
      onGetRooms(data);
      break;

    case "createroom":
      onCreateRoom(data);
      break;

    case "room":
      onRoom(data);
      break;

    case "roundstart":
      onRoundStart(data);
      break;

    case "words":
      onWords(data);
      break;

    case "win":
      onWin(data);
      break;

    case "roundend":
      onRoundEnd(data);
      break;

    case "players":
      onPlayers(data);
      break;

    case "keyword":
      onKeyword(data);
      break;

    case "pong":
      onPong(data);
      break;

    case "error":
      console.log(data.error);
      break;

    default:
      break;
  }
};

socket.onerror = function (error) {
  socket.close();
  console.log("Ошибка " + error.message);
};

function send(message) {
  message = JSON.stringify(message);
  socket.send(message);
}

function onCreateRoom(data) {
  if (data.success == 1) {
    document.querySelector("#round").innerHTML = mainroom.round;
    document.querySelector("#maxround").innerHTML = mainroom.maxround;
    let mydiv = document.createElement("div");
    mydiv.className = "players_player";
    mydiv.id = client.name;
    mydiv.innerHTML = `<div class="player_name"><b>${client.name}</b></div>
		<div class="player_points"><b>0</b></div>`;
    document.querySelector(".players_list_players").append(mydiv);
    document.querySelector(".toolpanel_mask").style.display = "none";
    document.querySelector("#roompage").style.display = "none";
    document.querySelector("#gamepage").style.display = "block";
    (0, _canvas.declareCanvDraw)();
    (0, _canvas.allowDraw)({
      0: connections
    });
  } else {
    mainroom.name = "";
    showEr(".roomtitleform", "Название комнаты занято");
  }
}

function onRoom(data) {
  if (data.success == 1) {
    document.querySelector("#round").innerHTML = mainroom.round;
    document.querySelector("#maxround").innerHTML = mainroom.maxround;
    closeCons();
    mainroom.score = data.clients;

    for (let receiver in data.clients) {
      if (receiver != client.name) {
        console.log(receiver);
        let connection = createCon(receiver);
        connection.createOffer(function (offer) {
          send({
            type: "offer",
            client: client.name,
            receiver: receiver,
            room: mainroom.name,
            offer: offer
          });
          connection.setLocalDescription(offer);
          console.log("Offer to client: " + receiver + " has been sended");
        }, function (error) {
          alert("An error has occurred.");
          return false;
        });
      }
    }

    document.querySelector(".password").style.display = "none";
    document.querySelector("#roompage").style.display = "none";
    document.querySelector("#gamepage").style.display = "block";
    (0, _canvas.declareCanvDraw)();
  } else {
    if (data.error == "Invalid password") {
      document.querySelector(".password_text").style.display = "none";
      showNickEr(".password_form_input", "Неверный пароль");
    } else {
      mainroom.name = "";
    }
  }
}

function onGetRooms(data) {
  removeChildrens(".rooms");
  let rooms = data.rooms;
  console.log("Got rooms\n", rooms);

  for (let room in rooms) {
    let mydiv = document.createElement("div");
    mydiv.className = "room";
    mydiv.id = room;
    mydiv.setAttribute("round", rooms[room].round);
    mydiv.setAttribute("maxround", rooms[room].maxround);
    mydiv.setAttribute("players", rooms[room].players);
    mydiv.setAttribute("maxplayers", rooms[room].maxplayers);
    mydiv.setAttribute("mode", rooms[room].mode);
    mydiv.setAttribute("roundtime", rooms[room].roundtime);
    mydiv.setAttribute("password", rooms[room].password);
    mydiv.innerHTML = `<div class="roomcrutch1 roomcrutch">
				<p class="roomattr roomattr1">${room}</p>
			</div>
			<div class="roomcrutch2 roomcrutch">
				<p class="roomattr">${rooms[room].mode}</p>
			</div>
			<div class="roomcrutch3 roomcrutch">
				<p class="roomattr">${rooms[room].round} / ${rooms[room].maxround}</p>
			</div>
			<div class="roomcrutch4 roomcrutch">
				<p class="roomattr">${rooms[room].players} / ${rooms[room].maxplayers}</p>
			</div>
			<div class="roomcrutch5 roomcrutch">
				<p class="roomattr">${rooms[room].password == "" ? '<img src="img/locked.svg" alt="public">' : '<img src="img/unlocked.svg" alt="private">'}</p>
			</div>`;
    mydiv.addEventListener("click", function () {
      mainroom.name = this.getAttribute("id");
      mainroom.maxplayers = this.getAttribute("maxplayers");
      mainroom.round = this.getAttribute("round");
      mainroom.mode = this.getAttribute("mode");
      mainroom.roundtime = this.getAttribute("roundtime");
      mainroom.players = this.getAttribute("players");
      mainroom.maxround = this.getAttribute("maxround");

      if (this.getAttribute("password") == "1") {
        document.querySelector(".password").style.display = "block";
        document.querySelector(".password_form_submit").addEventListener("click", function () {
          let password = document.querySelector(".password_form_input").value;
          send({
            type: "room",
            client: client.name,
            room: mainroom.name,
            password: password
          });
        });
      } else {
        send({
          type: "room",
          client: client.name,
          room: mainroom.name
        });
      }
    });
    document.querySelector(".rooms").append(mydiv);
  }
}

function getRooms() {
  send({
    type: "getrooms",
    client: client.name
  });
}

function onLogin(data) {
  if (data.success == 0) {
    console.log("Login error");
    showNickEr(".nickform", "Имя занято");
  } else {
    console.log("Login successful");
    document.querySelector("#nickpage").style.display = "none";
    document.querySelector("#roompage").style.display = "block";
    getRooms();
  }
}

function onRoundStart(data) {
  roundtimer = false;
  document.querySelector("#filler").style.width = 0 + "px";
  document.querySelector(".winscreen").style.display = "none";
  document.querySelector(".finalscreen").style.display = "none";
  mainroom.host = data.host;
  mainroom.round = data.round;
  document.querySelector("#keyword").innerHTML = "";
  changePlayerList(mainroom.score);
  document.querySelector("#round").innerHTML = mainroom.round;
}

function onRoundEnd(data) {
  document.querySelector("#color_picker").style.display = "none";

  if (data.lastround == "true") {
    changeFinalScore(data);
    document.querySelector(".finalscreen").style.display = "flex";
  } else {
    document.querySelector(".winscreen").style.display = "block";
  }

  document.querySelector(".toolpanel_mask").style.display = "block";
  document.querySelector(".chooswidthslider").value = "4.5";
  document.querySelector("#keywordshow").innerHTML = data.keyword;
  document.querySelector("#winnerNick").innerHTML = data.winner;
  document.querySelector("#drawerNick").innerHTML = data.painter;
  roundtimer = false;
  keyword = "";
  (0, _canvas.disableDraw)();
  changePlayerList(data.score);
}

function onWords(data) {
  if (mainroom.name != undefined) {
    var words = data.words;
    var elems = document.querySelector(".keywordslist").children;
    keyword = "";

    for (var i = 0; i < elems.length; i++) {
      elems[i].innerHTML = words[i];

      elems[i].onclick = function (event) {
        keyword = event.target.innerHTML;
        roundtimer = true;
        barAnimationStart();
        document.querySelector(".choosescreen").style.display = "none";
        send({
          type: "keyword",
          client: client.name,
          room: mainroom.name,
          keyword: keyword
        });

        for (let connect in connections) {
          connections[connect][1].send(JSON.stringify({
            type: "start"
          }));
        }

        setWord(keyword);
        (0, _canvas.allowDraw)({
          0: connections
        });
        document.querySelector(".toolpanel_mask").style.display = "none";
        console.log("Keyword: " + keyword);
      };
    }

    document.querySelector(".choosescreen").style.display = "block";
  }
}

function onKeyword(data) {
  if (mainroom.name != undefined) {
    document.querySelector(".choosescreen").style.display = "none";
    document.querySelector(".toolpanel_mask").style.display = "none";
    keyword = data.keyword;
    setWord(keyword);
    roundtimer = true;
    barAnimationStart();
    console.log(connections);

    for (let connect in connections) {
      try {
        connections[connect][1].send(JSON.stringify({
          type: "start"
        }));
      } catch (err) {
        console.log("RTC connection in close state");
      }
    }

    (0, _canvas.allowDraw)({
      0: connections
    });
    console.log("Keyword: " + keyword);
  }
}

function onPong(data) {//console.log("Ping " + (performance.now() - pingtime) + " ms");
}

function onPlayers(data) {
  changePlayerList(data.players);
}

function changePlayerList(players) {
  mainroom.players = Object.keys(players).length;
  mainroom.score = players;
  let playersList = document.querySelector(".players_list_players");
  let newList = document.createElement("div");
  newList.className = "players_list_players";

  for (let player in players) {
    let mydiv = document.createElement("div");
    mydiv.className = "players_player";
    mydiv.id = player;

    if (player == mainroom.host && player == client.name) {
      mydiv.innerHTML = `<img class="hostBrush" src="img/Brush.svg" alt="Художник">
			<div class="player_name"><b>${player}</b></div>
			<div class="player_points"><b>${players[player]}</b></div>`;
    } else if (player == mainroom.host) {
      mydiv.innerHTML = `<img class="hostBrush" src="img/Brush.svg" alt="Художник">
			<div class="player_name">${player}</div>
			<div class="player_points">${players[player]}</div>`;
    } else if (player == client.name) {
      mydiv.innerHTML = `<div class="player_name"><b>${player}</b></div>
			<div class="player_points"><b>${players[player]}</b></div>`;
    } else {
      mydiv.innerHTML = `<div class="player_name">${player}</div>
			<div class="player_points">${players[player]}</div>`;
    }

    newList.append(mydiv);
  }

  playersList.innerHTML = newList.innerHTML;
  document.querySelector(".messages").style.paddingTop = 46 + mainroom.players * 29 + "px";
}

function changeFinalScore(data) {
  let players = data.score;
  let playersList = document.querySelector("#final_score");
  document.querySelector("#final_keywordshow").innerHTML = data.keyword;
  document.querySelector("#final_drawerNick").innerHTML = data.painter;
  document.querySelector("#final_winnerNick").innerHTML = data.winner;
  let newList = document.createElement("div");
  newList.id = "final_score_list";
  let i = 1;

  for (let player in players) {
    let mydiv = document.createElement("div");
    mydiv.className = "players_player";
    mydiv.id = player;
    mydiv.innerHTML = `<div class="player_name">${i}. ${player}</div>
			<div class="player_points">${players[player]}</div>`;
    newList.append(mydiv);
    i++;
  }

  playersList.innerHTML = newList.innerHTML;
}

function closeCons() {
  for (let connect in connections) {
    connections[connect][0].close();
  }

  connections = {};
}

function removeChildrens(node) {
  var myNode = document.querySelector(node);
  var fc = myNode.firstChild;

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function barAnimationStart(time = 0) {
  let flag1 = true;
  let flag2 = true;
  let bar = document.querySelector("#filler");
  let max = document.querySelector("#bar").offsetWidth;
  let roundtime = mainroom.roundtime * 1000;
  let width = time / (roundtime / max);
  let start = Date.now();

  if (client.name == mainroom.host) {
    var word = generateWord();
    mainroom.word = word;
  }

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= roundtime - time || !roundtimer) {
      bar.style.width = max + "px";
      clearInterval(timer);
      mainroom.time = 0;
      return;
    }

    if (client.name == mainroom.host) {
      let k = timePassed / roundtime;

      if (k >= 0.3 && flag1 == true) {
        flag1 = false;

        for (let connect in connections) {
          connections[connect][1].send(JSON.stringify({
            type: "word",
            word: word[0]
          }));
        }
      } else if (k >= 0.6 && flag2 == true) {
        flag2 = false;

        for (let connect in connections) {
          connections[connect][1].send(JSON.stringify({
            type: "word",
            word: word[1]
          }));
        }
      }
    }

    bar.style.width = timePassed / (roundtime / max) + width + "px";
    mainroom.time = timePassed;
  }, 20);
}

function generateWord() {
  var word = [];
  var ans = [];

  for (let i = 0; i < keyword.length; i++) {
    word[i] = "&#160;";
  }

  ans[0] = Object.assign({}, word);
  var times = Math.ceil(Math.pow(keyword.length, 1 / 3));

  for (let i = 0; i < times; i++) {
    let n = getRandomInt(0, keyword.length - 1);

    if (word[n] == "&#160;") {
      word[n] = keyword[n];
    } else {
      i--;
    }
  }

  ans[1] = Object.assign({}, word);
  return ans;
}

function setWord(word) {
  word = Object.keys(word).map(key => word[key]);
  let html = "";

  for (let i = 0; i < word.length; i++) {
    html += `<li class="letter">${word[i]}</li>`;
  }

  document.querySelector("#keyword").innerHTML = html;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} //Skeleton


function createCon(receiver) {
  var configuration = {
    "iceServers": [{
      url: ["stun:stun.l.google.com:19302"]
    }]
  };
  connections[receiver] = [];
  connections[receiver].push(new webkitRTCPeerConnection(configuration));
  openDataChannel(receiver);
  console.log("RTCPeerConnection object was created: ");
  console.log(connections[receiver][0]);

  connections[receiver][0].onicecandidate = function (event) {
    console.log("Candidate created: " + JSON.stringify(event.candidate));

    if (event.candidate) {
      send({
        type: "candidate",
        client: client.name,
        receiver: receiver,
        room: mainroom.name,
        candidate: event.candidate
      });
    }
  };

  connections[receiver][0].ondatachannel = function (event) {
    event.channel.onopen = function (event) {
      console.log('Data channel open');

      if (keyword != "") {
        connections[receiver][1].send(JSON.stringify({
          type: "start",
          time: mainroom.time
        }));
        let k = mainroom.time / (mainroom.roundtime * 1000);

        if (k >= 0.6) {
          connections[receiver][1].send(JSON.stringify({
            type: "word",
            word: mainroom.word[1]
          }));
        } else if (k >= 0.3) {
          connections[receiver][1].send(JSON.stringify({
            type: "word",
            word: mainroom.word[0]
          }));
        }
      }
    };

    event.channel.onmessage = function (event) {
      let data = JSON.parse(event.data);
      console.log(data);

      if (data.type == "msg") {
        let mydiv = document.createElement("div");
        mydiv.className = "message";
        mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + data.client + ": </b>" + data.text + "</div>";
        document.querySelector(".messages").prepend(mydiv);

        if (client.name == mainroom.host) {
          if (data.text == keyword) {
            send({
              type: "win",
              client: client.name,
              room: mainroom.name,
              winner: data.client
            });
          }
        }
      } else if (data.type == "start") {
        roundtimer = true;

        if (data.time != undefined) {
          barAnimationStart(data.time);
        } else {
          barAnimationStart();
        }
      } else if (data.type == "word") {
        setWord(data.word);
      } else {
        (0, _canvas.replay)(data);
      }
    };
  };

  connections[receiver][0].onclose = function () {
    delete connections[receiver];
    console.log("Conection closed");
  };
  /*
  connections[receiver][0].oniceconnectionstatechange = function() {
     	if(connections[receiver][0].iceConnectionState == 'disconnected') {
     		delete connections[receiver];
     		console.log('Connection closed');
     	}
  };
  */


  return connections[receiver][0];
}

function onOffer(offer, sender) {
  console.log("Offer from " + sender + " received: " + JSON.stringify(offer));
  createCon(sender);
  connections[sender][0].setRemoteDescription(new RTCSessionDescription(offer));
  connections[sender][0].createAnswer(function (answer) {
    connections[sender][0].setLocalDescription(answer);
    send({
      type: "answer",
      client: client.name,
      receiver: sender,
      room: mainroom.name,
      answer: answer
    });
  }, function (error) {
    alert("oops...error");
    return true;
  });
}

function onAnswer(answer, sender) {
  console.log("Answer from " + sender + " received: " + JSON.stringify(answer));
  connections[sender][0].setRemoteDescription(new RTCSessionDescription(answer));
}

function onCandidate(candidate, sender) {
  connections[sender][0].addIceCandidate(new RTCIceCandidate(candidate));
  console.log("Candidate from " + sender + " received and added: " + JSON.stringify(candidate));
}

function openDataChannel(client) {
  connections[client][1] = connections[client][0].createDataChannel("myDataChannel");
  console.log("Data channel created");
}

document.querySelector(".exit").addEventListener("click", function (event) {
  location.reload(); //Временно

  console.log("Exit from room " + mainroom.name);
  closeCons();
  send({
    type: "exit",
    client: client.name,
    room: mainroom.name
  });
  roundtimer = false;
  mainroom.name = undefined;
  document.querySelector("#roompage").style.display = "block";
  document.querySelector("#gamepage").style.display = "none";
}); //-------------------------Nick page-------------------------//

document.querySelector(".nickbutton").addEventListener("click", function (event) {
  if (document.querySelector(".nickform").value.length >= 15) {
    showNickEr(".nickform", "Имя не длиннее 15 символов");
  } else if (document.querySelector(".nickform").value == "") {
    showNickEr(".nickform", "Введите имя");
  } else {
    client.name = document.querySelector(".nickform").value;
    document.querySelector(".usercontainer").innerHTML = client.name;
    send({
      type: "login",
      client: client.name
    });
  }
}); //-------------------------Room page-------------------------//
//Buttons

document.querySelector("#quickplay").addEventListener("click", function (event) {
  location.reload();
});
document.querySelector(".refresh").addEventListener("click", function (event) {
  getRooms();
});
document.querySelector(".modwords_close").addEventListener("click", function (event) {
  document.querySelector(".modwords").style.display = "none";
  let e = new Event("click");
  document.querySelector(".classic").dispatchEvent(e);
});
document.querySelector(".modwords_background").addEventListener("click", function (event) {
  document.querySelector(".modwords").style.display = "none";
  let e = new Event("click");
  document.querySelector(".classic").dispatchEvent(e);
});
document.querySelector(".password_close").addEventListener("click", function (event) {
  document.querySelector(".password").style.display = "none";
  document.querySelector(".password_form_input").value = "";
  remEr(".password_form_input");
  document.querySelector(".password_text").style.display = "block";
});
document.querySelector(".password_background").addEventListener("click", function (event) {
  document.querySelector(".password").style.display = "none";
  document.querySelector(".password_form_input").value = "";
  remEr(".password_form_input");
  document.querySelector(".password_text").style.display = "block";
});
document.querySelector(".modwords_form_submit").addEventListener("click", function (event) {
  document.querySelector(".modwords").style.display = "none";
  console.log(document.querySelector(".modwords_form_input").value.split(/, *|\n+| +/g));
});
document.querySelector(".roomtitleform").addEventListener("blur", function (event) {
  if (document.querySelector(".roomtitleform").value.length > 17) {
    showEr(".roomtitleform", "Название не длиннее 17 символов");
  } else {
    remEr(".roomtitleform");
  }
});
document.querySelector("#roompassword").addEventListener("blur", function (event) {
  if (document.querySelector("#roompassword").value.length > 10) {
    showEr("#roompassword", "Пароль не длиннее 10 символов");
  } else {
    remEr("#roompassword");
  }
});
document.querySelector("#createroom").addEventListener("click", function (event) {
  this.style.display = "none";
  document.querySelector(".createroommenu").style.display = "block";
  document.querySelector("#accept").style.display = "block";
  document.querySelector("#refuse").style.display = "block";
});
document.querySelector("#accept").addEventListener("click", function (event) {
  if (document.querySelector(".roomtitleform").value.length == 0) {
    showEr(".roomtitleform", "Укажите название комнаты");
  } else if (document.querySelector(".roomtitleform").value.length > 15) {
    showEr(".roomtitleform", "Название не длиннее 15 символов");
  } else if (document.querySelector("#roompassword").value.length > 10) {
    showEr("#roompassword", "Пароль не длиннее 10 символов");
  } else {
    var mode = "";
    var words = [];
    var roomname = document.querySelector(".roomtitleform").value;
    var maxround = document.querySelector("#rounds").value;
    var roundtime = document.querySelector("#roundtime").value;
    var maxplayers = document.querySelector("#maxplayers").value;
    var password = document.querySelector("#roompassword").value;
    mainroom.name = roomname;
    mainroom.maxround = maxround;
    mainroom.roundtime = roundtime;
    mainroom.maxplayers = maxplayers;
    mainroom.score[client.name] = 0;
    mainroom.round = 0;

    if (document.querySelector("#radioclassic").checked) {
      mode = "classic";
    } else {
      mode = "modded";
      words = document.querySelector(".modwords_form_input").value.split(/, *|\n+| +/g);
      console.log(words);
    }

    send({
      type: "createroom",
      client: client.name,
      room: roomname,
      mode: mode,
      roundtime: roundtime,
      maxround: maxround,
      maxplayers: maxplayers,
      password: password,
      words: words
    });
  }
});
document.querySelector("#refuse").addEventListener("click", function (event) {
  document.querySelector(".createroommenu").style.display = "none";
  document.querySelector("#accept").style.display = "none";
  document.querySelector("#refuse").style.display = "none";
  document.querySelector("#createroom").style.display = "block";
});
document.querySelector("#maxplayers_reduce").addEventListener("click", function (event) {
  if (document.querySelector("#maxplayers").value > 2) {
    document.querySelector("#maxplayers").value -= 1;
  }
});
document.querySelector("#maxplayers_increase").addEventListener("click", function (event) {
  if (document.querySelector("#maxplayers").value < 8) {
    document.querySelector("#maxplayers").value++;
  }
});
document.querySelector("#rounds_reduce").addEventListener("click", function (event) {
  if (document.querySelector("#rounds").value > 5) {
    document.querySelector("#rounds").value -= 1;
  }
});
document.querySelector("#rounds_increase").addEventListener("click", function (event) {
  if (document.querySelector("#rounds").value < 50) {
    document.querySelector("#rounds").value++;
  }
});
document.querySelector("#roundtime").addEventListener("blur", function (event) {
  event.target.value = event.target.value % 1000;

  if (event.target.value < 20) {
    event.target.value = 20;
  } else if (event.target.value > 720) {
    event.target.value = 720;
  }
});
document.querySelector("#maxplayers").addEventListener("blur", function (event) {
  event.target.value = event.target.value % 100;

  if (event.target.value < 2) {
    event.target.value = 2;
  } else if (event.target.value > 8) {
    event.target.value = 8;
  }
});
document.querySelector("#rounds").addEventListener("blur", function (event) {
  event.target.value = event.target.value % 100;

  if (event.target.value < 5) {
    event.target.value = 5;
  } else if (event.target.value > 50) {
    event.target.value = 50;
  }
});
document.querySelector(".modded").addEventListener("click", function (event) {
  document.querySelector(".toggler").style.left = 66 + "px";
  document.querySelector(".classic").style.color = "#4C4C4C";
  document.querySelector(".modded").style.color = "#fff";
  document.querySelector(".classic").style.cursor = "pointer";
  document.querySelector(".modded").style.cursor = "default";
  document.querySelector(".modwords").style.display = "block";
});
document.querySelector(".classic").addEventListener("click", function (event) {
  document.querySelector(".toggler").style.left = -2 + "px";
  document.querySelector(".classic").style.color = "#fff";
  document.querySelector(".modded").style.color = "#4C4C4C";
  document.querySelector(".classic").style.cursor = "default";
  document.querySelector(".modded").style.cursor = "pointer";
}); //-------------------------Game page-------------------------//

document.querySelector(".msgform").onsubmit = function (event) {
  var message = document.querySelector(".inputmessage").value;

  if (message == "") {
    console.log("Please, enter message");
    return false;
  }

  let mydiv = document.createElement("div");
  mydiv.className = "message";
  mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + client.name + ": </b>" + message + "</div>";
  document.querySelector(".messages").prepend(mydiv);

  for (let connect in connections) {
    connections[connect][1].send(JSON.stringify({
      type: "msg",
      text: message,
      client: client.name
    }));
  }

  document.querySelector(".inputmessage").value = "";
  return false;
};

document.querySelector(".sendmsg").addEventListener("click", function (event) {
  var message = document.querySelector(".inputmessage").value;
  console.log(message);

  if (message == "") {
    console.log("Please, enter message");
    return false;
  }

  let mydiv = document.createElement("div");
  mydiv.className = "message";
  mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + client.name + ": </b>" + message + "</div>";
  console.log(mydiv);
  document.querySelector(".messages").prepend(mydiv);

  for (let connect in connections) {
    connections[connect][1].send(JSON.stringify({
      type: "msg",
      text: message,
      client: client.name
    }));
  }

  document.querySelector(".inputmessage").value = "";
}); //-------------------------Functions-------------------------//

function showEr(selector, error, above = true) {
  remEr(selector);
  var elem = document.querySelector(selector);
  elem.className += " erinput";
  var coords = getCoords(elem);
  var div = document.createElement('div');
  div.className = "error";
  div.innerHTML = error;
  div.style.textAlign = "left";
  div.style.paddingLeft = 5 + "px";
  div.style.left = coords.left + "px";

  if (above) {
    div.style.top = coords.top - 14 + "px";
  } else {
    div.style.top = coords.top + 4 + "px";
  }

  elem.parentNode.insertBefore(div, elem.nextElementSibling);
}

function showNickEr(selector, error, above = true) {
  remEr(selector);
  var elem = document.querySelector(selector);
  elem.className += " erinput";
  var coords = getCoords(elem);
  var div = document.createElement('div');
  div.className = "error";
  div.innerHTML = error;
  div.style.width = 100 + "%";

  if (above) {
    div.style.top = coords.top - 18 + "px";
  } else {
    div.style.top = coords.top + 4 + "px";
  }

  elem.parentNode.insertBefore(div, elem.nextElementSibling);
}

function remEr(selector) {
  let elem = document.querySelector(selector);

  if (elem.nextElementSibling !== null) {
    if (elem.nextElementSibling.className == "error") {
      elem.nextElementSibling.remove();
    }
  }

  elem.className = elem.className.replace(/ ?erinput/g, "");
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: top,
    left: left
  };
}

exports.mainroom = mainroom;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL2NvbG9yam9lL2Rpc3QvY29sb3Jqb2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi93ZWJzb2NrL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnNvY2svaW5kZXguanNcIik7XG4iLCIvKiEgY29sb3Jqb2UgLSB2NC4xLjAgLSBKdWhvIFZlcHNhbGFpbmVuIDxiZWJyYXdAZ21haWwuY29tPiAtIE1JVFxuaHR0cHM6Ly9iZWJyYXcuZ2l0aHViLmNvbS9jb2xvcmpvZSAtIDIwMTgtMDctMDMgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5jb2xvcmpvZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0XHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG5cdH1cblxuXHR2YXIgZHJhZ2pzX3VtZCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcblx0KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgfShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xyXG5cclxuXHQgICAgICAgIC8qISBkcmFnanMgLSB2MC44LjAgLSBKdWhvIFZlcHNhbGFpbmVuIDxiZWJyYXdAZ21haWwuY29tPiAtIE1JVFxuXHRodHRwczovL2JlYnJhdy5naXRodWIuY29tL2RyYWdqcyAtIDIwMTgtMDctMDMgKi9cblx0dmFyIGRyYWcgPSAoZnVuY3Rpb24oKSB7XG5cdCAgICBmdW5jdGlvbiBkcmFnKGVsZW0sIGNicykge1xuXHQgICAgICAgIGlmKCFlbGVtKSB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUud2FybignZHJhZyBpcyBtaXNzaW5nIGVsZW0hJyk7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBkcmFnVGVtcGxhdGUoZWxlbSwgY2JzLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnKTtcblx0ICAgICAgICBkcmFnVGVtcGxhdGUoZWxlbSwgY2JzLCAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJyk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHh5c2xpZGVyKG8pIHtcblx0ICAgICAgICB2YXIgdHdvZCA9IGRpdihvWydjbGFzcyddIHx8ICcnLCBvLnBhcmVudCk7XG5cdCAgICAgICAgdmFyIHBvaW50ZXIgPSBkaXYoJ3BvaW50ZXInLCB0d29kKTtcblx0ICAgICAgICBkaXYoJ3NoYXBlIHNoYXBlMScsIHBvaW50ZXIpO1xuXHQgICAgICAgIGRpdignc2hhcGUgc2hhcGUyJywgcG9pbnRlcik7XG5cdCAgICAgICAgZGl2KCdiZyBiZzEnLCB0d29kKTtcblx0ICAgICAgICBkaXYoJ2JnIGJnMicsIHR3b2QpO1xuXG5cdCAgICAgICAgZHJhZyh0d29kLCBhdHRhY2hQb2ludGVyKG8uY2JzLCBwb2ludGVyKSk7XG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0d29kLFxuXHQgICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyXG5cdCAgICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gc2xpZGVyKG8pIHtcblx0ICAgICAgICB2YXIgb25lZCA9IGRpdihvWydjbGFzcyddLCBvLnBhcmVudCk7XG5cdCAgICAgICAgdmFyIHBvaW50ZXIgPSBkaXYoJ3BvaW50ZXInLCBvbmVkKTtcblx0ICAgICAgICBkaXYoJ3NoYXBlJywgcG9pbnRlcik7XG5cdCAgICAgICAgZGl2KCdiZycsIG9uZWQpO1xuXG5cdCAgICAgICAgZHJhZyhvbmVkLCBhdHRhY2hQb2ludGVyKG8uY2JzLCBwb2ludGVyKSk7XG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvbmVkLFxuXHQgICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyXG5cdCAgICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgZHJhZy54eXNsaWRlciA9IHh5c2xpZGVyO1xuXHQgICAgZHJhZy5zbGlkZXIgPSBzbGlkZXI7XG5cblx0ICAgIHJldHVybiBkcmFnO1xuXG5cdCAgICBmdW5jdGlvbiBhdHRhY2hQb2ludGVyKGNicywgcG9pbnRlcikge1xuXHQgICAgICAgIHZhciByZXQgPSB7fTtcblxuXHQgICAgICAgIGZvcih2YXIgbiBpbiBjYnMpIHtcblx0ICAgICAgICAgIHJldFtuXSA9IHdyYXAoY2JzW25dKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiB3cmFwKGZuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihwKSB7XG5cdCAgICAgICAgICAgICAgICBwLnBvaW50ZXIgPSBwb2ludGVyO1xuXHQgICAgICAgICAgICAgICAgZm4ocCk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgLy8gbW92ZSB0byBlbGVtdXRpbHMgbGliP1xuXHQgICAgZnVuY3Rpb24gZGl2KGtsYXNzLCBwKSB7XG5cdCAgICAgICAgcmV0dXJuIGUoJ2RpdicsIGtsYXNzLCBwKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZSh0eXBlLCBrbGFzcywgcCkge1xuXHQgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0ICAgICAgICBpZihrbGFzcykge1xuXHQgICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBrbGFzcztcblx0ICAgICAgICB9XG5cdCAgICAgICAgcC5hcHBlbmRDaGlsZChlbGVtKTtcblxuXHQgICAgICAgIHJldHVybiBlbGVtO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBkcmFnVGVtcGxhdGUoZWxlbSwgY2JzLCBkb3duLCBtb3ZlLCB1cCkge1xuXG5cdCAgICAgICAgY2JzID0gZ2V0Q2JzKGNicyk7XG5cblx0ICAgICAgICB2YXIgYmVnaW5DYiA9IGNicy5iZWdpbjtcblx0ICAgICAgICB2YXIgY2hhbmdlQ2IgPSBjYnMuY2hhbmdlO1xuXHQgICAgICAgIHZhciBlbmRDYiA9IGNicy5lbmQ7XG5cblx0ICAgICAgICBvbihlbGVtLCBkb3duLCBmdW5jdGlvbihlKSB7XG5cblx0ICAgICAgICAgICAgdmFyIG1vdmVIYW5kbGVyID0gcGFydGlhbChjYWxsQ2IsIGNoYW5nZUNiLCBlbGVtKTtcblx0ICAgICAgICAgICAgZnVuY3Rpb24gdXBIYW5kbGVyKCkge1xuXG5cdCAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsIG1vdmUsIG1vdmVIYW5kbGVyKTtcblx0ICAgICAgICAgICAgICAgIG9mZihkb2N1bWVudCwgdXAsIHVwSGFuZGxlcik7XG5cblx0ICAgICAgICAgICAgICAgIGNhbGxDYihlbmRDYiwgZWxlbSwgZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBvbihkb2N1bWVudCwgbW92ZSwgbW92ZUhhbmRsZXIpO1xuXHQgICAgICAgICAgICBvbihkb2N1bWVudCwgdXAsIHVwSGFuZGxlcik7XG5cblx0ICAgICAgICAgICAgY2FsbENiKGJlZ2luQ2IsIGVsZW0sIGUpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZCNmZWF0dXJlLWRldGVjdGlvblxuXHQgICAgZnVuY3Rpb24gb24oZWxlbSwgZXZ0LCBoYW5kbGVyKSB7XG5cdCAgICAgICAgLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuXHQgICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0ICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XG5cdCAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcblx0ICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG5cdCAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBvZmYoZWxlbSwgZXZ0LCBoYW5kbGVyKSB7XG5cdCAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGZhbHNlKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZ2V0Q2JzKGNicykge1xuXHQgICAgICAgIGlmKCFjYnMpIHtcblx0ICAgICAgICAgICAgdmFyIGluaXRpYWxPZmZzZXQ7XG5cdCAgICAgICAgICAgIHZhciBpbml0aWFsUG9zO1xuXG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24oYykge1xuXHQgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXQgPSB7eDogYy5lbGVtLm9mZnNldExlZnQsIHk6IGMuZWxlbS5vZmZzZXRUb3B9O1xuXHQgICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3MgPSBjLmN1cnNvcjtcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdHlsZShjLmVsZW0sICdsZWZ0JywgKGluaXRpYWxPZmZzZXQueCArIGMuY3Vyc29yLnggLSBpbml0aWFsUG9zLngpICsgJ3B4Jyk7XG5cdCAgICAgICAgICAgICAgICAgICAgc3R5bGUoYy5lbGVtLCAndG9wJywgKGluaXRpYWxPZmZzZXQueSArIGMuY3Vyc29yLnkgLSBpbml0aWFsUG9zLnkpICsgJ3B4Jyk7XG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgZW5kOiBlbXB0eVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIGJlZ2luOiBjYnMuYmVnaW4gfHwgZW1wdHksXG5cdCAgICAgICAgICAgICAgICBjaGFuZ2U6IGNicy5jaGFuZ2UgfHwgZW1wdHksXG5cdCAgICAgICAgICAgICAgICBlbmQ6IGNicy5lbmQgfHwgZW1wdHlcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIFRPRE86IHNldCBkcmFnZ2FibGUgY2xhc3MgKGhhbmR5IGZvciBmeClcblx0ICAgIGZ1bmN0aW9uIHN0eWxlKGUsIHByb3AsIHZhbHVlKSB7XG5cdCAgICAgICAgZS5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBlbXB0eSgpIHt9XG5cblx0ICAgIGZ1bmN0aW9uIGNhbGxDYihjYiwgZWxlbSwgZSkge1xuXHQgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXHQgICAgICAgIHZhciBvZmZzZXQgPSBmaW5kUG9zKGVsZW0pO1xuXHQgICAgICAgIHZhciB3aWR0aCA9IGVsZW0uY2xpZW50V2lkdGg7XG5cdCAgICAgICAgdmFyIGhlaWdodCA9IGVsZW0uY2xpZW50SGVpZ2h0O1xuXHQgICAgICAgIHZhciBjdXJzb3IgPSB7XG5cdCAgICAgICAgICAgIHg6IGN1cnNvclgoZWxlbSwgZSksXG5cdCAgICAgICAgICAgIHk6IGN1cnNvclkoZWxlbSwgZSlcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciB4ID0gKGN1cnNvci54IC0gb2Zmc2V0LngpIC8gd2lkdGg7XG5cdCAgICAgICAgdmFyIHkgPSAoY3Vyc29yLnkgLSBvZmZzZXQueSkgLyBoZWlnaHQ7XG5cblx0ICAgICAgICBjYih7XG5cdCAgICAgICAgICAgIHg6IGlzTmFOKHgpPyAwOiB4LFxuXHQgICAgICAgICAgICB5OiBpc05hTih5KT8gMDogeSxcblx0ICAgICAgICAgICAgY3Vyc29yOiBjdXJzb3IsXG5cdCAgICAgICAgICAgIGVsZW06IGVsZW0sXG5cdCAgICAgICAgICAgIGU6IGVcblx0ICAgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mzk0NzQ3L2phdmFzY3JpcHQtY3VycnktZnVuY3Rpb25cblx0ICAgIGZ1bmN0aW9uIHBhcnRpYWwoZm4pIHtcblx0ICAgICAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cdCAgICAgICAgdmFyIGFyZ3MgPSBzbGljZS5hcHBseShhcmd1bWVudHMsIFsxXSk7XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChzbGljZS5hcHBseShhcmd1bWVudHMpKSk7XG5cdCAgICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9maW5kcG9zLmh0bWxcblx0ICAgIGZ1bmN0aW9uIGZpbmRQb3MoZSkge1xuXHQgICAgICAgIHZhciByID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIHg6IHIubGVmdCxcblx0ICAgICAgICAgICAgeTogci50b3Bcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICAvLyBodHRwOi8vamF2YXNjcmlwdC5hYm91dC5jb20vbGlicmFyeS9ibG1vdXNlcG9zLmh0bVxuXHQgICAgZnVuY3Rpb24gY3Vyc29yWChlbGVtLCBldnQpIHtcblx0ICAgICAgICB2YXIgZXZ0UG9zID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1tldnQudG91Y2hlcy5sZW5ndGggLTFdIDogZXZ0O1xuXHQgICAgICAgIHJldHVybiBldnRQb3MuY2xpZW50WDtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGN1cnNvclkoZWxlbSwgZXZ0KSB7XG5cdCAgICAgICAgdmFyIGV2dFBvcyA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbZXZ0LnRvdWNoZXMubGVuZ3RoIC0xXSA6IGV2dDtcblx0ICAgICAgICByZXR1cm4gZXZ0UG9zLmNsaWVudFk7XG5cdCAgICB9XG5cdH0pKCk7XHJcblx0ICAgICAgICByZXR1cm4gZHJhZztcclxuXHJcblx0ICAgIH0pKTtcblx0fSk7XG5cblx0dmFyIG9uZUNvbG9yQWxsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuXHQhZnVuY3Rpb24oZSxhKXttb2R1bGUuZXhwb3J0cz1hKCk7fShjb21tb25qc0dsb2JhbCxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGFbMF0mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGVbYVswXV0pcmV0dXJuIG5ldyBlW2FbMF1dKGEuc2xpY2UoMSxhLmxlbmd0aCkpO2lmKDQ9PT1hLmxlbmd0aClyZXR1cm4gbmV3IGUuUkdCKGFbMF0vMjU1LGFbMV0vMjU1LGFbMl0vMjU1LGFbM10vMjU1KX1lbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXt2YXIgcj1hLnRvTG93ZXJDYXNlKCk7ZS5uYW1lZENvbG9yc1tyXSYmKGE9XCIjXCIrZS5uYW1lZENvbG9yc1tyXSksXCJ0cmFuc3BhcmVudFwiPT09ciYmKGE9XCJyZ2JhKDAsMCwwLDApXCIpO3ZhciBvPWEubWF0Y2goaSk7aWYobyl7dmFyIHM9b1sxXS50b1VwcGVyQ2FzZSgpLGY9dChvWzhdKT9vWzhdOnBhcnNlRmxvYXQob1s4XSksdT1cIkhcIj09PXNbMF0sbD1vWzNdPzEwMDp1PzM2MDoyNTUsaD1vWzVdfHx1PzEwMDoyNTUsYz1vWzddfHx1PzEwMDoyNTU7aWYodChlW3NdKSl0aHJvdyBuZXcgRXJyb3IoXCJjb2xvci5cIitzK1wiIGlzIG5vdCBpbnN0YWxsZWQuXCIpO3JldHVybiBuZXcgZVtzXShwYXJzZUZsb2F0KG9bMl0pL2wscGFyc2VGbG9hdChvWzRdKS9oLHBhcnNlRmxvYXQob1s2XSkvYyxmKX1hLmxlbmd0aDw2JiYoYT1hLnJlcGxhY2UoL14jPyhbMC05YS1mXSkoWzAtOWEtZl0pKFswLTlhLWZdKSQvaSxcIiQxJDEkMiQyJDMkM1wiKSk7dmFyIGQ9YS5tYXRjaCgvXiM/KFswLTlhLWZdWzAtOWEtZl0pKFswLTlhLWZdWzAtOWEtZl0pKFswLTlhLWZdWzAtOWEtZl0pJC9pKTtpZihkKXJldHVybiBuZXcgZS5SR0IocGFyc2VJbnQoZFsxXSwxNikvMjU1LHBhcnNlSW50KGRbMl0sMTYpLzI1NSxwYXJzZUludChkWzNdLDE2KS8yNTUpO2lmKGUuQ01ZSyl7dmFyIGI9YS5tYXRjaChuZXcgUmVnRXhwKFwiXmNteWtcXFxcKFwiK24uc291cmNlK1wiLFwiK24uc291cmNlK1wiLFwiK24uc291cmNlK1wiLFwiK24uc291cmNlK1wiXFxcXCkkXCIsXCJpXCIpKTtpZihiKXJldHVybiBuZXcgZS5DTVlLKHBhcnNlRmxvYXQoYlsxXSkvMTAwLHBhcnNlRmxvYXQoYlsyXSkvMTAwLHBhcnNlRmxvYXQoYlszXSkvMTAwLHBhcnNlRmxvYXQoYls0XSkvMTAwKX19ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgYSYmYS5pc0NvbG9yKXJldHVybiBhO3JldHVybiAhMX12YXIgYT1bXSx0PWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lfSxyPS9cXHMqKFxcLlxcZCt8XFxkKyg/OlxcLlxcZCspPykoJSk/XFxzKi8sbj0vXFxzKihcXC5cXGQrfDEwMHxcXGQ/XFxkKD86XFwuXFxkKyk/KSVcXHMqLyxpPW5ldyBSZWdFeHAoXCJeKHJnYnxoc2x8aHN2KWE/XFxcXChcIityLnNvdXJjZStcIixcIityLnNvdXJjZStcIixcIityLnNvdXJjZStcIig/OixcIisvXFxzKihcXC5cXGQrfFxcZCsoPzpcXC5cXGQrKT8pXFxzKi8uc291cmNlK1wiKT9cXFxcKSRcIixcImlcIik7ZS5uYW1lZENvbG9ycz17fSxlLmluc3RhbGxDb2xvclNwYWNlPWZ1bmN0aW9uKHIsbixpKXtmdW5jdGlvbiBvKGEsdCl7dmFyIHI9e307clt0LnRvTG93ZXJDYXNlKCldPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmdiKClbdC50b0xvd2VyQ2FzZSgpXSgpfSxlW3RdLnByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgYT1cImJsYWNrXCI9PT1lP1wia1wiOmUuY2hhckF0KDApO3JbZV09clthXT1mdW5jdGlvbihhLHIpe3JldHVybiB0aGlzW3QudG9Mb3dlckNhc2UoKV0oKVtlXShhLHIpfTt9KTtmb3IodmFyIG4gaW4gcilyLmhhc093blByb3BlcnR5KG4pJiZ2b2lkIDA9PT1lW2FdLnByb3RvdHlwZVtuXSYmKGVbYV0ucHJvdG90eXBlW25dPXJbbl0pO31lW3JdPWZ1bmN0aW9uKGUpe3ZhciBhPUFycmF5LmlzQXJyYXkoZSk/ZTphcmd1bWVudHM7bi5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGk9YVt0XTtpZihcImFscGhhXCI9PT1lKXRoaXMuX2FscGhhPWlzTmFOKGkpfHxpPjE/MTppPDA/MDppO2Vsc2V7aWYoaXNOYU4oaSkpdGhyb3cgbmV3IEVycm9yKFwiW1wiK3IrXCJdOiBJbnZhbGlkIGNvbG9yOiAoXCIrbi5qb2luKFwiLFwiKStcIilcIik7XCJodWVcIj09PWU/dGhpcy5faHVlPWk8MD9pLU1hdGguZmxvb3IoaSk6aSUxOnRoaXNbXCJfXCIrZV09aTwwPzA6aT4xPzE6aTt9fSx0aGlzKTt9LGVbcl0ucHJvcGVydHlOYW1lcz1uO3ZhciBzPWVbcl0ucHJvdG90eXBlO1tcInZhbHVlT2ZcIixcImhleFwiLFwiaGV4YVwiLFwiY3NzXCIsXCJjc3NhXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7c1tlXT1zW2VdfHwoXCJSR0JcIj09PXI/cy5oZXg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZ2IoKVtlXSgpfSk7fSkscy5pc0NvbG9yPSEwLHMuZXF1YWxzPWZ1bmN0aW9uKGUsYSl7dChhKSYmKGE9MWUtMTApLGU9ZVtyLnRvTG93ZXJDYXNlKCldKCk7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKz0xKWlmKE1hdGguYWJzKHRoaXNbXCJfXCIrbltpXV0tZVtcIl9cIituW2ldXSk+YSlyZXR1cm4gITE7cmV0dXJuICEwfSxzLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiBbcl0uY29uY2F0KG4ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzW1wiX1wiK2VdfSx0aGlzKSl9O2Zvcih2YXIgZiBpbiBpKWlmKGkuaGFzT3duUHJvcGVydHkoZikpe3ZhciB1PWYubWF0Y2goL15mcm9tKC4qKSQvKTt1P2VbdVsxXS50b1VwcGVyQ2FzZSgpXS5wcm90b3R5cGVbci50b0xvd2VyQ2FzZSgpXT1pW2ZdOnNbZl09aVtmXTt9cmV0dXJuIHNbci50b0xvd2VyQ2FzZSgpXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIFwiW1wiK3IrXCIgXCIrbi5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXNbXCJfXCIrZV19LHRoaXMpLmpvaW4oXCIsIFwiKStcIl1cIn0sbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPVwiYmxhY2tcIj09PWU/XCJrXCI6ZS5jaGFyQXQoMCk7c1tlXT1zW2FdPWZ1bmN0aW9uKGEsdCl7cmV0dXJuIHZvaWQgMD09PWE/dGhpc1tcIl9cIitlXTp0P25ldyB0aGlzLmNvbnN0cnVjdG9yKG4ubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW1wiX1wiK3RdKyhlPT09dD9hOjApfSx0aGlzKSk6bmV3IHRoaXMuY29uc3RydWN0b3Iobi5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGU9PT10P2E6dGhpc1tcIl9cIit0XX0sdGhpcykpfTt9KSxhLmZvckVhY2goZnVuY3Rpb24oZSl7byhyLGUpLG8oZSxyKTt9KSxhLnB1c2gociksZX0sZS5wbHVnaW5MaXN0PVtdLGUudXNlPWZ1bmN0aW9uKGEpe3JldHVybiAtMT09PWUucGx1Z2luTGlzdC5pbmRleE9mKGEpJiYodGhpcy5wbHVnaW5MaXN0LnB1c2goYSksYShlKSksZX0sZS5pbnN0YWxsTWV0aG9kPWZ1bmN0aW9uKHQscil7cmV0dXJuIGEuZm9yRWFjaChmdW5jdGlvbihhKXtlW2FdLnByb3RvdHlwZVt0XT1yO30pLHRoaXN9LGUuaW5zdGFsbENvbG9yU3BhY2UoXCJSR0JcIixbXCJyZWRcIixcImdyZWVuXCIsXCJibHVlXCIsXCJhbHBoYVwiXSx7aGV4OmZ1bmN0aW9uKCl7dmFyIGU9KDY1NTM2Kk1hdGgucm91bmQoMjU1KnRoaXMuX3JlZCkrMjU2Kk1hdGgucm91bmQoMjU1KnRoaXMuX2dyZWVuKStNYXRoLnJvdW5kKDI1NSp0aGlzLl9ibHVlKSkudG9TdHJpbmcoMTYpO3JldHVybiBcIiNcIitcIjAwMDAwXCIuc3Vic3RyKDAsNi1lLmxlbmd0aCkrZX0saGV4YTpmdW5jdGlvbigpe3ZhciBlPU1hdGgucm91bmQoMjU1KnRoaXMuX2FscGhhKS50b1N0cmluZygxNik7cmV0dXJuIFwiI1wiK1wiMDBcIi5zdWJzdHIoMCwyLWUubGVuZ3RoKStlK3RoaXMuaGV4KCkuc3Vic3RyKDEsNil9LGNzczpmdW5jdGlvbigpe3JldHVybiBcInJnYihcIitNYXRoLnJvdW5kKDI1NSp0aGlzLl9yZWQpK1wiLFwiK01hdGgucm91bmQoMjU1KnRoaXMuX2dyZWVuKStcIixcIitNYXRoLnJvdW5kKDI1NSp0aGlzLl9ibHVlKStcIilcIn0sY3NzYTpmdW5jdGlvbigpe3JldHVybiBcInJnYmEoXCIrTWF0aC5yb3VuZCgyNTUqdGhpcy5fcmVkKStcIixcIitNYXRoLnJvdW5kKDI1NSp0aGlzLl9ncmVlbikrXCIsXCIrTWF0aC5yb3VuZCgyNTUqdGhpcy5fYmx1ZSkrXCIsXCIrdGhpcy5fYWxwaGErXCIpXCJ9fSk7dmFyIG89ZSxzPWZ1bmN0aW9uKGUpe2UuaW5zdGFsbENvbG9yU3BhY2UoXCJYWVpcIixbXCJ4XCIsXCJ5XCIsXCJ6XCIsXCJhbHBoYVwiXSx7ZnJvbVJnYjpmdW5jdGlvbigpe3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBlPi4wNDA0NT9NYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpOmUvMTIuOTJ9LHQ9YSh0aGlzLl9yZWQpLHI9YSh0aGlzLl9ncmVlbiksbj1hKHRoaXMuX2JsdWUpO3JldHVybiBuZXcgZS5YWVooLjQxMjQ1NjQqdCsuMzU3NTc2MSpyKy4xODA0Mzc1Km4sLjIxMjY3MjkqdCsuNzE1MTUyMipyKy4wNzIxNzUqbiwuMDE5MzMzOSp0Ky4xMTkxOTIqcisuOTUwMzA0MSpuLHRoaXMuX2FscGhhKX0scmdiOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5feCx0PXRoaXMuX3kscj10aGlzLl96LG49ZnVuY3Rpb24oZSl7cmV0dXJuIGU+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coZSwxLzIuNCktLjA1NToxMi45MiplfTtyZXR1cm4gbmV3IGUuUkdCKG4oMy4yNDA0NTQyKmErLTEuNTM3MTM4NSp0Ky0uNDk4NTMxNCpyKSxuKC0uOTY5MjY2KmErMS44NzYwMTA4KnQrLjA0MTU1NipyKSxuKC4wNTU2NDM0KmErLS4yMDQwMjU5KnQrMS4wNTcyMjUyKnIpLHRoaXMuX2FscGhhKX0sbGFiOmZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGU+LjAwODg1Nj9NYXRoLnBvdyhlLDEvMyk6Ny43ODcwMzcqZSs0LzI5fSx0PWEodGhpcy5feC85NS4wNDcpLHI9YSh0aGlzLl95LzEwMCksbj1hKHRoaXMuX3ovMTA4Ljg4Myk7cmV0dXJuIG5ldyBlLkxBQigxMTYqci0xNiw1MDAqKHQtciksMjAwKihyLW4pLHRoaXMuX2FscGhhKX19KTt9LGY9ZnVuY3Rpb24oZSl7ZS51c2UocyksZS5pbnN0YWxsQ29sb3JTcGFjZShcIkxBQlwiLFtcImxcIixcImFcIixcImJcIixcImFscGhhXCJdLHtmcm9tUmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueHl6KCkubGFiKCl9LHJnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnh5eigpLnJnYigpfSx4eXo6ZnVuY3Rpb24oKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgYT1NYXRoLnBvdyhlLDMpO3JldHVybiBhPi4wMDg4NTY/YTooZS0xNi8xMTYpLzcuODd9LHQ9KHRoaXMuX2wrMTYpLzExNixyPXRoaXMuX2EvNTAwK3Qsbj10LXRoaXMuX2IvMjAwO3JldHVybiBuZXcgZS5YWVooOTUuMDQ3KmEociksMTAwKmEodCksMTA4Ljg4MyphKG4pLHRoaXMuX2FscGhhKX19KTt9LHU9ZnVuY3Rpb24oZSl7ZS5pbnN0YWxsQ29sb3JTcGFjZShcIkhTVlwiLFtcImh1ZVwiLFwic2F0dXJhdGlvblwiLFwidmFsdWVcIixcImFscGhhXCJdLHtyZ2I6ZnVuY3Rpb24oKXt2YXIgYSx0LHIsbj10aGlzLl9odWUsaT10aGlzLl9zYXR1cmF0aW9uLG89dGhpcy5fdmFsdWUscz1NYXRoLm1pbig1LE1hdGguZmxvb3IoNipuKSksZj02Km4tcyx1PW8qKDEtaSksbD1vKigxLWYqaSksaD1vKigxLSgxLWYpKmkpO3N3aXRjaChzKXtjYXNlIDA6YT1vLHQ9aCxyPXU7YnJlYWs7Y2FzZSAxOmE9bCx0PW8scj11O2JyZWFrO2Nhc2UgMjphPXUsdD1vLHI9aDticmVhaztjYXNlIDM6YT11LHQ9bCxyPW87YnJlYWs7Y2FzZSA0OmE9aCx0PXUscj1vO2JyZWFrO2Nhc2UgNTphPW8sdD11LHI9bDt9cmV0dXJuIG5ldyBlLlJHQihhLHQscix0aGlzLl9hbHBoYSl9LGhzbDpmdW5jdGlvbigpe3ZhciBhLHQ9KDItdGhpcy5fc2F0dXJhdGlvbikqdGhpcy5fdmFsdWUscj10aGlzLl9zYXR1cmF0aW9uKnRoaXMuX3ZhbHVlLG49dDw9MT90OjItdDtyZXR1cm4gYT1uPDFlLTk/MDpyL24sbmV3IGUuSFNMKHRoaXMuX2h1ZSxhLHQvMix0aGlzLl9hbHBoYSl9LGZyb21SZ2I6ZnVuY3Rpb24oKXt2YXIgYSx0PXRoaXMuX3JlZCxyPXRoaXMuX2dyZWVuLG49dGhpcy5fYmx1ZSxpPU1hdGgubWF4KHQscixuKSxvPU1hdGgubWluKHQscixuKSxzPWktbyxmPTA9PT1pPzA6cy9pLHU9aTtpZigwPT09cylhPTA7ZWxzZSBzd2l0Y2goaSl7Y2FzZSB0OmE9KHItbikvcy82KyhyPG4/MTowKTticmVhaztjYXNlIHI6YT0obi10KS9zLzYrMS8zO2JyZWFrO2Nhc2UgbjphPSh0LXIpL3MvNisyLzM7fXJldHVybiBuZXcgZS5IU1YoYSxmLHUsdGhpcy5fYWxwaGEpfX0pO30sbD1mdW5jdGlvbihlKXtlLnVzZSh1KSxlLmluc3RhbGxDb2xvclNwYWNlKFwiSFNMXCIsW1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJsaWdodG5lc3NcIixcImFscGhhXCJdLHtoc3Y6ZnVuY3Rpb24oKXt2YXIgYSx0PTIqdGhpcy5fbGlnaHRuZXNzLHI9dGhpcy5fc2F0dXJhdGlvbioodDw9MT90OjItdCk7cmV0dXJuIGE9dCtyPDFlLTk/MDoyKnIvKHQrciksbmV3IGUuSFNWKHRoaXMuX2h1ZSxhLCh0K3IpLzIsdGhpcy5fYWxwaGEpfSxyZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oc3YoKS5yZ2IoKX0sZnJvbVJnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhzdigpLmhzbCgpfX0pO30saD1mdW5jdGlvbihlKXtlLmluc3RhbGxDb2xvclNwYWNlKFwiQ01ZS1wiLFtcImN5YW5cIixcIm1hZ2VudGFcIixcInllbGxvd1wiLFwiYmxhY2tcIixcImFscGhhXCJdLHtyZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUuUkdCKDEtdGhpcy5fY3lhbiooMS10aGlzLl9ibGFjayktdGhpcy5fYmxhY2ssMS10aGlzLl9tYWdlbnRhKigxLXRoaXMuX2JsYWNrKS10aGlzLl9ibGFjaywxLXRoaXMuX3llbGxvdyooMS10aGlzLl9ibGFjayktdGhpcy5fYmxhY2ssdGhpcy5fYWxwaGEpfSxmcm9tUmdiOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fcmVkLHQ9dGhpcy5fZ3JlZW4scj10aGlzLl9ibHVlLG49MS1hLGk9MS10LG89MS1yLHM9MTtyZXR1cm4gYXx8dHx8cj8ocz1NYXRoLm1pbihuLE1hdGgubWluKGksbykpLG49KG4tcykvKDEtcyksaT0oaS1zKS8oMS1zKSxvPShvLXMpLygxLXMpKTpzPTEsbmV3IGUuQ01ZSyhuLGksbyxzLHRoaXMuX2FscGhhKX19KTt9LGM9ZnVuY3Rpb24oZSl7ZS5uYW1lZENvbG9ycz17YWxpY2VibHVlOlwiZjBmOGZmXCIsYW50aXF1ZXdoaXRlOlwiZmFlYmQ3XCIsYXF1YTpcIjBmZlwiLGFxdWFtYXJpbmU6XCI3ZmZmZDRcIixhenVyZTpcImYwZmZmZlwiLGJlaWdlOlwiZjVmNWRjXCIsYmlzcXVlOlwiZmZlNGM0XCIsYmxhY2s6XCIwMDBcIixibGFuY2hlZGFsbW9uZDpcImZmZWJjZFwiLGJsdWU6XCIwMGZcIixibHVldmlvbGV0OlwiOGEyYmUyXCIsYnJvd246XCJhNTJhMmFcIixidXJseXdvb2Q6XCJkZWI4ODdcIixjYWRldGJsdWU6XCI1ZjllYTBcIixjaGFydHJldXNlOlwiN2ZmZjAwXCIsY2hvY29sYXRlOlwiZDI2OTFlXCIsY29yYWw6XCJmZjdmNTBcIixjb3JuZmxvd2VyYmx1ZTpcIjY0OTVlZFwiLGNvcm5zaWxrOlwiZmZmOGRjXCIsY3JpbXNvbjpcImRjMTQzY1wiLGN5YW46XCIwZmZcIixkYXJrYmx1ZTpcIjAwMDA4YlwiLGRhcmtjeWFuOlwiMDA4YjhiXCIsZGFya2dvbGRlbnJvZDpcImI4ODYwYlwiLGRhcmtncmF5OlwiYTlhOWE5XCIsZGFya2dyZXk6XCJhOWE5YTlcIixkYXJrZ3JlZW46XCIwMDY0MDBcIixkYXJra2hha2k6XCJiZGI3NmJcIixkYXJrbWFnZW50YTpcIjhiMDA4YlwiLGRhcmtvbGl2ZWdyZWVuOlwiNTU2YjJmXCIsZGFya29yYW5nZTpcImZmOGMwMFwiLGRhcmtvcmNoaWQ6XCI5OTMyY2NcIixkYXJrcmVkOlwiOGIwMDAwXCIsZGFya3NhbG1vbjpcImU5OTY3YVwiLGRhcmtzZWFncmVlbjpcIjhmYmM4ZlwiLGRhcmtzbGF0ZWJsdWU6XCI0ODNkOGJcIixkYXJrc2xhdGVncmF5OlwiMmY0ZjRmXCIsZGFya3NsYXRlZ3JleTpcIjJmNGY0ZlwiLGRhcmt0dXJxdW9pc2U6XCIwMGNlZDFcIixkYXJrdmlvbGV0OlwiOTQwMGQzXCIsZGVlcHBpbms6XCJmZjE0OTNcIixkZWVwc2t5Ymx1ZTpcIjAwYmZmZlwiLGRpbWdyYXk6XCI2OTY5NjlcIixkaW1ncmV5OlwiNjk2OTY5XCIsZG9kZ2VyYmx1ZTpcIjFlOTBmZlwiLGZpcmVicmljazpcImIyMjIyMlwiLGZsb3JhbHdoaXRlOlwiZmZmYWYwXCIsZm9yZXN0Z3JlZW46XCIyMjhiMjJcIixmdWNoc2lhOlwiZjBmXCIsZ2FpbnNib3JvOlwiZGNkY2RjXCIsZ2hvc3R3aGl0ZTpcImY4ZjhmZlwiLGdvbGQ6XCJmZmQ3MDBcIixnb2xkZW5yb2Q6XCJkYWE1MjBcIixncmF5OlwiODA4MDgwXCIsZ3JleTpcIjgwODA4MFwiLGdyZWVuOlwiMDA4MDAwXCIsZ3JlZW55ZWxsb3c6XCJhZGZmMmZcIixob25leWRldzpcImYwZmZmMFwiLGhvdHBpbms6XCJmZjY5YjRcIixpbmRpYW5yZWQ6XCJjZDVjNWNcIixpbmRpZ286XCI0YjAwODJcIixpdm9yeTpcImZmZmZmMFwiLGtoYWtpOlwiZjBlNjhjXCIsbGF2ZW5kZXI6XCJlNmU2ZmFcIixsYXZlbmRlcmJsdXNoOlwiZmZmMGY1XCIsbGF3bmdyZWVuOlwiN2NmYzAwXCIsbGVtb25jaGlmZm9uOlwiZmZmYWNkXCIsbGlnaHRibHVlOlwiYWRkOGU2XCIsbGlnaHRjb3JhbDpcImYwODA4MFwiLGxpZ2h0Y3lhbjpcImUwZmZmZlwiLGxpZ2h0Z29sZGVucm9keWVsbG93OlwiZmFmYWQyXCIsbGlnaHRncmF5OlwiZDNkM2QzXCIsbGlnaHRncmV5OlwiZDNkM2QzXCIsbGlnaHRncmVlbjpcIjkwZWU5MFwiLGxpZ2h0cGluazpcImZmYjZjMVwiLGxpZ2h0c2FsbW9uOlwiZmZhMDdhXCIsbGlnaHRzZWFncmVlbjpcIjIwYjJhYVwiLGxpZ2h0c2t5Ymx1ZTpcIjg3Y2VmYVwiLGxpZ2h0c2xhdGVncmF5OlwiNzg5XCIsbGlnaHRzbGF0ZWdyZXk6XCI3ODlcIixsaWdodHN0ZWVsYmx1ZTpcImIwYzRkZVwiLGxpZ2h0eWVsbG93OlwiZmZmZmUwXCIsbGltZTpcIjBmMFwiLGxpbWVncmVlbjpcIjMyY2QzMlwiLGxpbmVuOlwiZmFmMGU2XCIsbWFnZW50YTpcImYwZlwiLG1hcm9vbjpcIjgwMDAwMFwiLG1lZGl1bWFxdWFtYXJpbmU6XCI2NmNkYWFcIixtZWRpdW1ibHVlOlwiMDAwMGNkXCIsbWVkaXVtb3JjaGlkOlwiYmE1NWQzXCIsbWVkaXVtcHVycGxlOlwiOTM3MGQ4XCIsbWVkaXVtc2VhZ3JlZW46XCIzY2IzNzFcIixtZWRpdW1zbGF0ZWJsdWU6XCI3YjY4ZWVcIixtZWRpdW1zcHJpbmdncmVlbjpcIjAwZmE5YVwiLG1lZGl1bXR1cnF1b2lzZTpcIjQ4ZDFjY1wiLG1lZGl1bXZpb2xldHJlZDpcImM3MTU4NVwiLG1pZG5pZ2h0Ymx1ZTpcIjE5MTk3MFwiLG1pbnRjcmVhbTpcImY1ZmZmYVwiLG1pc3R5cm9zZTpcImZmZTRlMVwiLG1vY2Nhc2luOlwiZmZlNGI1XCIsbmF2YWpvd2hpdGU6XCJmZmRlYWRcIixuYXZ5OlwiMDAwMDgwXCIsb2xkbGFjZTpcImZkZjVlNlwiLG9saXZlOlwiODA4MDAwXCIsb2xpdmVkcmFiOlwiNmI4ZTIzXCIsb3JhbmdlOlwiZmZhNTAwXCIsb3JhbmdlcmVkOlwiZmY0NTAwXCIsb3JjaGlkOlwiZGE3MGQ2XCIscGFsZWdvbGRlbnJvZDpcImVlZThhYVwiLHBhbGVncmVlbjpcIjk4ZmI5OFwiLHBhbGV0dXJxdW9pc2U6XCJhZmVlZWVcIixwYWxldmlvbGV0cmVkOlwiZDg3MDkzXCIscGFwYXlhd2hpcDpcImZmZWZkNVwiLHBlYWNocHVmZjpcImZmZGFiOVwiLHBlcnU6XCJjZDg1M2ZcIixwaW5rOlwiZmZjMGNiXCIscGx1bTpcImRkYTBkZFwiLHBvd2RlcmJsdWU6XCJiMGUwZTZcIixwdXJwbGU6XCI4MDAwODBcIixyZWJlY2NhcHVycGxlOlwiNjM5XCIscmVkOlwiZjAwXCIscm9zeWJyb3duOlwiYmM4ZjhmXCIscm95YWxibHVlOlwiNDE2OWUxXCIsc2FkZGxlYnJvd246XCI4YjQ1MTNcIixzYWxtb246XCJmYTgwNzJcIixzYW5keWJyb3duOlwiZjRhNDYwXCIsc2VhZ3JlZW46XCIyZThiNTdcIixzZWFzaGVsbDpcImZmZjVlZVwiLHNpZW5uYTpcImEwNTIyZFwiLHNpbHZlcjpcImMwYzBjMFwiLHNreWJsdWU6XCI4N2NlZWJcIixzbGF0ZWJsdWU6XCI2YTVhY2RcIixzbGF0ZWdyYXk6XCI3MDgwOTBcIixzbGF0ZWdyZXk6XCI3MDgwOTBcIixzbm93OlwiZmZmYWZhXCIsc3ByaW5nZ3JlZW46XCIwMGZmN2ZcIixzdGVlbGJsdWU6XCI0NjgyYjRcIix0YW46XCJkMmI0OGNcIix0ZWFsOlwiMDA4MDgwXCIsdGhpc3RsZTpcImQ4YmZkOFwiLHRvbWF0bzpcImZmNjM0N1wiLHR1cnF1b2lzZTpcIjQwZTBkMFwiLHZpb2xldDpcImVlODJlZVwiLHdoZWF0OlwiZjVkZWIzXCIsd2hpdGU6XCJmZmZcIix3aGl0ZXNtb2tlOlwiZjVmNWY1XCIseWVsbG93OlwiZmYwXCIseWVsbG93Z3JlZW46XCI5YWNkMzJcIn07fSxkPWZ1bmN0aW9uKGUpe2UuaW5zdGFsbE1ldGhvZChcImNsZWFyZXJcIixmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hbHBoYShpc05hTihlKT8tLjE6LWUsITApfSk7fSxiPWZ1bmN0aW9uKGUpe2UudXNlKGwpLGUuaW5zdGFsbE1ldGhvZChcImRhcmtlblwiLGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpZ2h0bmVzcyhpc05hTihlKT8tLjE6LWUsITApfSk7fSxwPWZ1bmN0aW9uKGUpe2UudXNlKGwpLGUuaW5zdGFsbE1ldGhvZChcImRlc2F0dXJhdGVcIixmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zYXR1cmF0aW9uKGlzTmFOKGUpPy0uMTotZSwhMCl9KTt9LGc9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gYSgpe3ZhciBhPXRoaXMucmdiKCksdD0uMyphLl9yZWQrLjU5KmEuX2dyZWVuKy4xMSphLl9ibHVlO3JldHVybiBuZXcgZS5SR0IodCx0LHQsYS5fYWxwaGEpfWUuaW5zdGFsbE1ldGhvZChcImdyZXlzY2FsZVwiLGEpLmluc3RhbGxNZXRob2QoXCJncmF5c2NhbGVcIixhKTt9LF89ZnVuY3Rpb24oZSl7ZS51c2UobCksZS5pbnN0YWxsTWV0aG9kKFwibGlnaHRlblwiLGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpZ2h0bmVzcyhpc05hTihlKT8uMTplLCEwKX0pO30sbT1mdW5jdGlvbihlKXtlLmluc3RhbGxNZXRob2QoXCJtaXhcIixmdW5jdGlvbihhLHQpe2E9ZShhKS5yZ2IoKSx0PTEtKGlzTmFOKHQpPy41OnQpO3ZhciByPTIqdC0xLG49dGhpcy5fYWxwaGEtYS5fYWxwaGEsaT0oKHIqbj09LTE/cjoocituKS8oMStyKm4pKSsxKS8yLG89MS1pLHM9dGhpcy5yZ2IoKTtyZXR1cm4gbmV3IGUuUkdCKHMuX3JlZCppK2EuX3JlZCpvLHMuX2dyZWVuKmkrYS5fZ3JlZW4qbyxzLl9ibHVlKmkrYS5fYmx1ZSpvLHMuX2FscGhhKnQrYS5fYWxwaGEqKDEtdCkpfSk7fSx3PWZ1bmN0aW9uKGUpe2UuaW5zdGFsbE1ldGhvZChcIm5lZ2F0ZVwiLGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5yZ2IoKTtyZXR1cm4gbmV3IGUuUkdCKDEtYS5fcmVkLDEtYS5fZ3JlZW4sMS1hLl9ibHVlLHRoaXMuX2FscGhhKX0pO30seT1mdW5jdGlvbihlKXtlLmluc3RhbGxNZXRob2QoXCJvcGFxdWVyXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWxwaGEoaXNOYU4oZSk/LjE6ZSwhMCl9KTt9LHY9ZnVuY3Rpb24oZSl7ZS51c2UobCksZS5pbnN0YWxsTWV0aG9kKFwicm90YXRlXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuaHVlKChlfHwwKS8zNjAsITApfSk7fSxrPWZ1bmN0aW9uKGUpe2UudXNlKGwpLGUuaW5zdGFsbE1ldGhvZChcInNhdHVyYXRlXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2F0dXJhdGlvbihpc05hTihlKT8uMTplLCEwKX0pO30sTT1mdW5jdGlvbihlKXtlLmluc3RhbGxNZXRob2QoXCJ0b0FscGhhXCIsZnVuY3Rpb24oZSl7dmFyIGE9dGhpcy5yZ2IoKSx0PWUoZSkucmdiKCkscj1uZXcgZS5SR0IoMCwwLDAsYS5fYWxwaGEpLG49W1wiX3JlZFwiLFwiX2dyZWVuXCIsXCJfYmx1ZVwiXTtyZXR1cm4gbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV08MWUtMTA/cltlXT1hW2VdOmFbZV0+dFtlXT9yW2VdPShhW2VdLXRbZV0pLygxLXRbZV0pOmFbZV0+dFtlXT9yW2VdPSh0W2VdLWFbZV0pL3RbZV06cltlXT0wO30pLHIuX3JlZD5yLl9ncmVlbj9yLl9yZWQ+ci5fYmx1ZT9hLl9hbHBoYT1yLl9yZWQ6YS5fYWxwaGE9ci5fYmx1ZTpyLl9ncmVlbj5yLl9ibHVlP2EuX2FscGhhPXIuX2dyZWVuOmEuX2FscGhhPXIuX2JsdWUsYS5fYWxwaGE8MWUtMTA/YToobi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09KGFbZV0tdFtlXSkvYS5fYWxwaGErdFtlXTt9KSxhLl9hbHBoYSo9ci5fYWxwaGEsYSl9KTt9O3JldHVybiBvLnVzZShzKS51c2UoZikudXNlKHUpLnVzZShsKS51c2UoaCkudXNlKGMpLnVzZShkKS51c2UoYikudXNlKHApLnVzZShnKS51c2UoXykudXNlKG0pLnVzZSh3KS51c2UoeSkudXNlKHYpLnVzZShrKS51c2UoTSl9KTtcblxuXHR9KTtcblxuXHR2YXIgZGl2ID0gcGFydGlhbChlLCAnZGl2Jyk7XG5cblx0ZnVuY3Rpb24gZSh0eXBlLCBrbGFzcywgcCkge1xuXHQgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHQgICAgZWxlbS5jbGFzc05hbWUgPSBrbGFzcztcblx0ICAgIHAuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cblx0ICAgIHJldHVybiBlbGVtO1xuXHR9XG5cblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mzk0NzQ3L2phdmFzY3JpcHQtY3VycnktZnVuY3Rpb25cblx0ZnVuY3Rpb24gcGFydGlhbChmbikge1xuXHQgICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXHQgICAgdmFyIGFyZ3MgPSBzbGljZS5hcHBseShhcmd1bWVudHMsIFsxXSk7XG5cblx0ICAgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoc2xpY2UuYXBwbHkoYXJndW1lbnRzKSkpO1xuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxhYmVsSW5wdXQoa2xhc3MsIG4sIHAsIG1heExlbikge1xuXHQgICAgdmFyIGlkID0gXCJjb2xvclBpY2tlcklucHV0XCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAxKTtcblx0ICAgIHZhciBkID0gZGl2KGtsYXNzLCBwKTtcblx0ICAgIHZhciBsID0gbGFiZWwobiwgZCwgaWQpO1xuXHQgICAgdmFyIGkgPSBpbnB1dCgndGV4dCcsIGQsIG1heExlbiwgaWQpO1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGxhYmVsOiBsLCBcblx0ICAgICAgICBpbnB1dDogaVxuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxhYmVsKGMsIHAsIGlkKSB7XG5cdCAgICB2YXIgZWxlbSA9IGUoJ2xhYmVsJywgJycsIHApO1xuXHQgICAgZWxlbS5pbm5lckhUTUwgPSBjO1xuXG5cdCAgICBpZiAoaWQpIHtcblx0ICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZWxlbTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlucHV0KHQsIHAsIG1heExlbiwgaWQpIHtcblx0ICAgIHZhciBlbGVtID0gZSgnaW5wdXQnLCAnJywgcCk7XG5cdCAgICBlbGVtLnR5cGUgPSB0O1xuXG5cdCAgICBpZihtYXhMZW4pIHsgXG5cdCAgICAgICAgZWxlbS5tYXhMZW5ndGggPSBtYXhMZW47XG5cdCAgICB9XG5cblx0ICAgIGlmIChpZCkge1xuXHQgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblx0ICAgIH1cblxuXHQgICAgaWYobWF4TGVuKSB7XG5cdCAgICAgICAgZWxlbS5tYXhMZW5ndGggPSBtYXhMZW47XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBlbGVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gWChwLCBhKSB7XG5cdCAgICBwLnN0eWxlLmxlZnQgPSBjbGFtcChhICogMTAwLCAwLCAxMDApICsgJyUnO1xuXHR9XG5cdGZ1bmN0aW9uIFkocCwgYSkge1xuXHQgICAgcC5zdHlsZS50b3AgPSBjbGFtcChhICogMTAwLCAwLCAxMDApICsgJyUnO1xuXHR9XG5cdGZ1bmN0aW9uIEJHKGUsIGMpIHtcblx0ICAgIGUuc3R5bGUuYmFja2dyb3VuZCA9IGM7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGFtcChhLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcblx0ICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChhLCBtaW5WYWx1ZSksIG1heFZhbHVlKTtcblx0fVxuXG5cdHZhciB1dGlscyA9IHtcblx0ICAgIGNsYW1wOiBjbGFtcCxcblx0ICAgIGU6IGUsXG5cdCAgICBkaXY6IGRpdixcblx0ICAgIHBhcnRpYWw6IHBhcnRpYWwsXG5cdCAgICBsYWJlbElucHV0OiBsYWJlbElucHV0LFxuXHQgICAgWDogWCxcblx0ICAgIFk6IFksXG5cdCAgICBCRzogQkdcblx0fTtcblxuXHRmdW5jdGlvbiBjdXJyZW50Q29sb3IocCkge1xuXHQgICAgdmFyIGUxID0gdXRpbHMuZGl2KCdjdXJyZW50Q29sb3JDb250YWluZXInLCBwKTtcblx0ICAgIHZhciBlID0gdXRpbHMuZGl2KCdjdXJyZW50Q29sb3InLCBlMSk7XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihjb2wpIHtcblx0ICAgICAgICAgICAgdXRpbHMuQkcoZSwgY29sLmNzc2EoKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpZWxkcyhwLCBqb2UsIG8pIHtcblx0ICAgIHZhciBjcyA9IG8uc3BhY2U7XG5cdCAgICB2YXIgZmFjID0gby5saW1pdCB8fCAyNTU7XG5cdCAgICB2YXIgZml4ID0gby5maXggPj0gMD8gby5maXg6IDA7XG5cdCAgICB2YXIgaW5wdXRMZW4gPSAoJycgKyBmYWMpLmxlbmd0aCArIGZpeDtcblx0ICAgIGlucHV0TGVuID0gZml4PyBpbnB1dExlbiArIDE6IGlucHV0TGVuO1xuXG5cdCAgICB2YXIgaW5pdGlhbHMgPSBjcy5zcGxpdCgnJyk7XG5cdCAgICB2YXIgdXNlQWxwaGEgPSBjc1tjcy5sZW5ndGggLSAxXSA9PSAnQSc7XG5cdCAgICBjcyA9IHVzZUFscGhhPyBjcy5zbGljZSgwLCAtMSk6IGNzO1xuXG5cdCAgICBpZihbJ1JHQicsICdIU0wnLCAnSFNWJywgJ0NNWUsnXS5pbmRleE9mKGNzKSA8IDApIHtcblx0ICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCdJbnZhbGlkIGZpZWxkIG5hbWVzJywgY3MpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgYyA9IHV0aWxzLmRpdignY29sb3JGaWVsZHMnLCBwKTtcblx0ICAgIHZhciBlbGVtcyA9IGluaXRpYWxzLm1hcChmdW5jdGlvbihuKSB7XG5cdCAgICAgICAgbiA9IG4udG9Mb3dlckNhc2UoKTtcblxuXHQgICAgICAgIHZhciBlID0gdXRpbHMubGFiZWxJbnB1dCgnY29sb3IgJyArIG4sIG4sIGMsIGlucHV0TGVuKTtcblx0ICAgICAgICBlLmlucHV0Lm9uYmx1ciA9IGRvbmU7XG5cdCAgICAgICAgZS5pbnB1dC5vbmtleWRvd24gPSB2YWxpZGF0ZTtcblx0ICAgICAgICBlLmlucHV0Lm9ua2V5dXAgPSB1cGRhdGU7XG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBuYW1lOiBuLCBcblx0ICAgICAgICAgICAgZTogZVxuXHQgICAgICAgIH07XG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gZG9uZSgpIHtcblx0ICAgICAgICBqb2UuZG9uZSgpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShlKSB7XG5cdCAgICAgICAgaWYgKCEoZS5jdHJsS2V5IHx8IGUuYWx0S2V5KSAmJiAvXlthLXpBLVpdJC8udGVzdChlLmtleSkpIHtcblx0ICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXHQgICAgICAgIHZhciBjb2wgPSBbY3NdO1xuXG5cdCAgICAgICAgZWxlbXMuZm9yRWFjaChmdW5jdGlvbihvKSB7Y29sLnB1c2goby5lLmlucHV0LnZhbHVlIC8gZmFjKTt9KTtcblxuXHQgICAgICAgIGlmKCF1c2VBbHBoYSkge1xuXHQgICAgICAgICAgICBjb2wucHVzaChqb2UuZ2V0QWxwaGEoKSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgam9lLnNldChjb2wpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oY29sKSB7XG5cdCAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZnVuY3Rpb24obykge1xuXHQgICAgICAgICAgICAgICAgby5lLmlucHV0LnZhbHVlID0gKGNvbFtvLm5hbWVdKCkgKiBmYWMpLnRvRml4ZWQoZml4KTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFscGhhKHAsIGpvZSkge1xuXHQgICAgdmFyIGUgPSBkcmFnanNfdW1kLnNsaWRlcih7XG5cdCAgICAgICAgcGFyZW50OiBwLFxuXHQgICAgICAgICdjbGFzcyc6ICdvbmVkIGFscGhhJyxcblx0ICAgICAgICBjYnM6IHtcblx0ICAgICAgICAgICAgYmVnaW46IGNoYW5nZSxcblx0ICAgICAgICAgICAgY2hhbmdlOiBjaGFuZ2UsXG5cdCAgICAgICAgICAgIGVuZDogZG9uZVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBkb25lKCkge1xuXHQgICAgICAgIGpvZS5kb25lKCk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGNoYW5nZShwKSB7XG5cdCAgICAgICAgdmFyIHZhbCA9IHV0aWxzLmNsYW1wKHAueSwgMCwgMSk7XG5cblx0ICAgICAgICB1dGlscy5ZKHAucG9pbnRlciwgdmFsKTtcblx0ICAgICAgICBqb2Uuc2V0QWxwaGEoMSAtIHZhbCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihjb2wpIHtcblx0ICAgICAgICAgICAgdXRpbHMuWShlLnBvaW50ZXIsIDEgLSBjb2wuYWxwaGEoKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhleChwLCBqb2UsIG8pIHtcblx0ICAgIHZhciBlID0gdXRpbHMubGFiZWxJbnB1dCgnaGV4Jywgby5sYWJlbCB8fCAnJywgcCwgNyk7XG5cdCAgICBlLmlucHV0LnZhbHVlID0gJyMnO1xuXG5cdCAgICBlLmlucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbihlbGVtKSB7XG5cdCAgICAgICAgdmFyIGtleSA9IGVsZW0ua2V5Q29kZSB8fCBlbGVtLndoaWNoO1xuXHQgICAgICAgIHZhciB2YWwgPSBlbGVtLnRhcmdldC52YWx1ZTtcblx0ICAgICAgICB2YWwgPSB2YWxbMF0gPT0gJyMnPyB2YWw6ICcjJyArIHZhbDtcblx0ICAgICAgICB2YWwgPSBwYWQodmFsLCA3LCAnMCcpO1xuXG5cdCAgICAgICAgaWYoa2V5ID09IDEzKSB7XG5cdCAgICAgICAgICAgIGpvZS5zZXQodmFsKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBlLmlucHV0Lm9uYmx1ciA9IGZ1bmN0aW9uKGVsZW0pIHtcblx0ICAgICAgICBqb2Uuc2V0KGVsZW0udGFyZ2V0LnZhbHVlKTtcblx0ICAgICAgICBqb2UuZG9uZSgpO1xuXHQgICAgfTtcblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGNvbCkge1xuXHQgICAgICAgICAgICBlLmlucHV0LnZhbHVlID0gZS5pbnB1dC52YWx1ZVswXSA9PSAnIyc/ICcjJzogJyc7XG5cdCAgICAgICAgICAgIGUuaW5wdXQudmFsdWUgKz0gY29sLmhleCgpLnNsaWNlKDEpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZShwLCBqb2UsIG8pIHtcblx0ICAgIHZhciBlbGVtID0gdXRpbHMuZSgnYScsIG9bJ2NsYXNzJ10gfHwgJ2Nsb3NlJywgcCk7XG5cdCAgICBlbGVtLmhyZWYgPSAnIyc7XG5cdCAgICBlbGVtLmlubmVySFRNTCA9IG8ubGFiZWwgfHwgJ0Nsb3NlJztcblxuXHQgICAgZWxlbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHQgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXHQgICAgICAgIGpvZS5oaWRlKCk7XG5cdCAgICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFkKGEsIG4sIGMpIHtcblx0ICAgIHZhciByZXQgPSBhO1xuXG5cdCAgICBmb3IodmFyIGkgPSBhLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHQgICAgICAgIHJldCArPSBjO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHR9XG5cblx0dmFyIGV4dHJhcyA9IHtcblx0ICAgIGN1cnJlbnRDb2xvcjogY3VycmVudENvbG9yLFxuXHQgICAgZmllbGRzOiBmaWVsZHMsXG5cdCAgICBoZXg6IGhleCxcblx0ICAgIGFscGhhOiBhbHBoYSxcblx0ICAgIGNsb3NlOiBjbG9zZVxuXHR9O1xuXG5cdC8vIFVzZSB0aGUgYWxsIGJ1aWxkIHdpdGggY215ayBhbmQgZXZlcnl0aGluZ1xuXG5cblxuXHR2YXIgY29sb3Jqb2UgPSBmdW5jdGlvbihjYnMpIHtcblx0ICAgIGlmICghYWxsKGlzRnVuY3Rpb24sIFtjYnMuaW5pdCwgY2JzLnh5LCBjYnMuel0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcImNvbG9yam9lOiBtaXNzaW5nIGNiXCIpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZnVuY3Rpb24oZWxlbWVudCwgaW5pdGlhbENvbG9yLCBleHRyYXMkJDEpIHtcblx0ICAgICAgICByZXR1cm4gc2V0dXAoe1xuXHQgICAgICAgICAgICBlOiBlbGVtZW50LFxuXHQgICAgICAgICAgICBjb2xvcjogaW5pdGlhbENvbG9yLFxuXHQgICAgICAgICAgICBjYnM6IGNicyxcblx0ICAgICAgICAgICAgZXh0cmFzOiBleHRyYXMkJDEsXG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHR9O1xuXG5cdC8qIHBpY2tlcnMgKi9cblx0Y29sb3Jqb2UucmdiID0gY29sb3Jqb2Uoe1xuXHQgICAgaW5pdDogZnVuY3Rpb24oY29sLCB4eSwgeikge1xuXHQgICAgICAgIHZhciByZXQgPSBvbmVDb2xvckFsbChjb2wpLmhzdigpO1xuXG5cdCAgICAgICAgdGhpcy54eShyZXQsIHsgeDogcmV0LnNhdHVyYXRpb24oKSwgeTogMSAtIHJldC52YWx1ZSgpIH0sIHh5LCB6KTtcblx0ICAgICAgICB0aGlzLnoocmV0LCByZXQuaHVlKCksIHh5LCB6KTtcblxuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9LFxuXHQgICAgeHk6IGZ1bmN0aW9uKGNvbCwgcCwgeHkpIHtcblx0ICAgICAgICB1dGlscy5YKHh5LnBvaW50ZXIsIHAueCk7XG5cdCAgICAgICAgdXRpbHMuWSh4eS5wb2ludGVyLCBwLnkpO1xuXG5cdCAgICAgICAgcmV0dXJuIGNvbC5zYXR1cmF0aW9uKHAueCkudmFsdWUoMSAtIHAueSk7XG5cdCAgICB9LFxuXHQgICAgejogZnVuY3Rpb24oY29sLCB2LCB4eSwgeikge1xuXHQgICAgICAgIHV0aWxzLlkoei5wb2ludGVyLCB2KTtcblx0ICAgICAgICBSR0JfQkcoeHkuYmFja2dyb3VuZCwgdik7XG5cblx0ICAgICAgICByZXR1cm4gY29sLmh1ZSh2KTtcblx0ICAgIH0sXG5cdH0pO1xuXG5cdGNvbG9yam9lLmhzbCA9IGNvbG9yam9lKHtcblx0ICAgIGluaXQ6IGZ1bmN0aW9uKGNvbCwgeHksIHopIHtcblx0ICAgICAgICB2YXIgcmV0ID0gb25lQ29sb3JBbGwoY29sKS5oc2woKTtcblxuXHQgICAgICAgIHRoaXMueHkocmV0LCB7IHg6IHJldC5odWUoKSwgeTogMSAtIHJldC5zYXR1cmF0aW9uKCkgfSwgeHksIHopO1xuXHQgICAgICAgIHRoaXMueihyZXQsIDEgLSByZXQubGlnaHRuZXNzKCksIHh5LCB6KTtcblxuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9LFxuXHQgICAgeHk6IGZ1bmN0aW9uKGNvbCwgcCwgeHksIHopIHtcblx0ICAgICAgICB1dGlscy5YKHh5LnBvaW50ZXIsIHAueCk7XG5cdCAgICAgICAgdXRpbHMuWSh4eS5wb2ludGVyLCBwLnkpO1xuXHQgICAgICAgIFJHQl9CRyh6LmJhY2tncm91bmQsIHAueCk7XG5cblx0ICAgICAgICByZXR1cm4gY29sLmh1ZShwLngpLnNhdHVyYXRpb24oMSAtIHAueSk7XG5cdCAgICB9LFxuXHQgICAgejogZnVuY3Rpb24oY29sLCB2LCB4eSwgeikge1xuXHQgICAgICAgIHV0aWxzLlkoei5wb2ludGVyLCB2KTtcblxuXHQgICAgICAgIHJldHVybiBjb2wubGlnaHRuZXNzKDEgLSB2KTtcblx0ICAgIH0sXG5cdH0pO1xuXG5cdGNvbG9yam9lLmV4dHJhcyA9IHt9O1xuXG5cdGNvbG9yam9lLnJlZ2lzdGVyRXh0cmEgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHQgICAgaWYgKG5hbWUgaW4gY29sb3Jqb2UuZXh0cmFzKSB7XG5cdCAgICAgICAgY29uc29sZS53YXJuKCdFeHRyYSBcIicgKyBuYW1lICsgJ1wiaGFzIGJlZW4gcmVnaXN0ZXJlZCBhbHJlYWR5IScpO1xuXHQgICAgfVxuXG5cdCAgICBjb2xvcmpvZS5leHRyYXNbbmFtZV0gPSBmbjtcblx0fTtcblxuXHRmb3IgKHZhciBrIGluIGV4dHJhcykge1xuXHQgICAgY29sb3Jqb2UucmVnaXN0ZXJFeHRyYShrLCBleHRyYXNba10pO1xuXHR9XG5cblx0ZnVuY3Rpb24gUkdCX0JHKGUsIGgpIHtcblx0ICAgIHV0aWxzLkJHKGUsIG5ldyBvbmVDb2xvckFsbC5IU1YoaCwgMSwgMSkuY3NzYSgpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldHVwKG8pIHtcblx0ICAgIGlmICghby5lKSB7XG5cdCAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcImNvbG9yam9lOiBtaXNzaW5nIGVsZW1lbnRcIik7XG5cdCAgICB9XG5cblx0ICAgIHZhciBlID0gaXNTdHJpbmcoby5lKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8uZSkgOiBvLmU7XG5cdCAgICBlLmNsYXNzTmFtZSA9IFwiY29sb3JQaWNrZXJcIjtcblxuXHQgICAgdmFyIGNicyA9IG8uY2JzO1xuXG5cdCAgICB2YXIgeHkgPSBkcmFnanNfdW1kLnh5c2xpZGVyKHtcblx0ICAgICAgICBwYXJlbnQ6IGUsXG5cdCAgICAgICAgY2xhc3M6IFwidHdvZFwiLFxuXHQgICAgICAgIGNiczoge1xuXHQgICAgICAgICAgICBiZWdpbjogY2hhbmdlWFksXG5cdCAgICAgICAgICAgIGNoYW5nZTogY2hhbmdlWFksXG5cdCAgICAgICAgICAgIGVuZDogZG9uZSxcblx0ICAgICAgICB9LFxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIGNoYW5nZVhZKHApIHtcblx0ICAgICAgICBjb2wgPSBjYnMueHkoXG5cdCAgICAgICAgICAgIGNvbCxcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgeDogdXRpbHMuY2xhbXAocC54LCAwLCAxKSxcblx0ICAgICAgICAgICAgICAgIHk6IHV0aWxzLmNsYW1wKHAueSwgMCwgMSksXG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHh5LFxuXHQgICAgICAgICAgICB6XG5cdCAgICAgICAgKTtcblx0ICAgICAgICBjaGFuZ2VkKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciB6ID0gZHJhZ2pzX3VtZC5zbGlkZXIoe1xuXHQgICAgICAgIHBhcmVudDogZSxcblx0ICAgICAgICBjbGFzczogXCJvbmVkXCIsXG5cdCAgICAgICAgY2JzOiB7XG5cdCAgICAgICAgICAgIGJlZ2luOiBjaGFuZ2VaLFxuXHQgICAgICAgICAgICBjaGFuZ2U6IGNoYW5nZVosXG5cdCAgICAgICAgICAgIGVuZDogZG9uZSxcblx0ICAgICAgICB9LFxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIGNoYW5nZVoocCkge1xuXHQgICAgICAgIGNvbCA9IGNicy56KGNvbCwgdXRpbHMuY2xhbXAocC55LCAwLCAxKSwgeHksIHopO1xuXHQgICAgICAgIGNoYW5nZWQoKTtcblx0ICAgIH1cblxuXHQgICAgLy8gSW5pdGlhbCBjb2xvclxuXHQgICAgdmFyIHByZXZpb3VzID0gZ2V0Q29sb3Ioby5jb2xvcik7XG5cdCAgICB2YXIgY29sID0gY2JzLmluaXQocHJldmlvdXMsIHh5LCB6KTtcblx0ICAgIHZhciBsaXN0ZW5lcnMgPSB7IGNoYW5nZTogW10sIGRvbmU6IFtdIH07XG5cblx0ICAgIGZ1bmN0aW9uIGNoYW5nZWQoc2tpcCkge1xuXHQgICAgICAgIHNraXAgPSBpc0FycmF5KHNraXApID8gc2tpcCA6IFtdO1xuXG5cdCAgICAgICAgdmFyIGxpID0gbGlzdGVuZXJzLmNoYW5nZTtcblx0ICAgICAgICB2YXIgdjtcblxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgICAgICB2ID0gbGlbaV07XG5cdCAgICAgICAgICAgIGlmIChza2lwLmluZGV4T2Yodi5uYW1lKSA9PSAtMSkge1xuXHQgICAgICAgICAgICAgICAgdi5mbihjb2wpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBkb25lKCkge1xuXHQgICAgICAgIC8vIERvIG5vdCBjYWxsIGRvbmUgY2FsbGJhY2sgaWYgdGhlIGNvbG9yIGRpZCBub3QgY2hhbmdlXG5cdCAgICAgICAgaWYgKHByZXZpb3VzLmVxdWFscyhjb2wpKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmRvbmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICAgICAgbGlzdGVuZXJzLmRvbmVbaV0uZm4oY29sKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBwcmV2aW91cyA9IGNvbDtcblx0ICAgIH1cblxuXHQgICAgdmFyIG9iID0ge1xuXHQgICAgICAgIGU6IGUsXG5cdCAgICAgICAgZG9uZTogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIGRvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oc2tpcCkge1xuXHQgICAgICAgICAgICBjaGFuZ2VkKHNraXApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgaGlkZTogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gY29sO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbihjKSB7XG5cdCAgICAgICAgICAgIHZhciBvbGRDb2wgPSB0aGlzLmdldCgpO1xuXHQgICAgICAgICAgICBjb2wgPSBjYnMuaW5pdChnZXRDb2xvcihjKSwgeHksIHopO1xuXG5cdCAgICAgICAgICAgIGlmICghb2xkQ29sLmVxdWFscyhjb2wpKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXRBbHBoYTogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjb2wuYWxwaGEoKTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldEFscGhhOiBmdW5jdGlvbih2KSB7XG5cdCAgICAgICAgICAgIGNvbCA9IGNvbC5hbHBoYSh2KTtcblxuXHQgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgb246IGZ1bmN0aW9uKGV2dCwgY2IsIG5hbWUpIHtcblx0ICAgICAgICAgICAgaWYgKGV2dCA9PSBcImNoYW5nZVwiIHx8IGV2dCA9PSBcImRvbmVcIikge1xuXHQgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2V2dF0ucHVzaCh7IG5hbWU6IG5hbWUsIGZuOiBjYiB9KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihcblx0ICAgICAgICAgICAgICAgICAgICAnUGFzc2VkIGludmFsaWQgZXZ0IG5hbWUgXCInICsgZXZ0ICsgJ1wiIHRvIGNvbG9yam9lLm9uJ1xuXHQgICAgICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihldnQpIHtcblx0ICAgICAgICAgICAgaWYgKGV2dCkge1xuXHQgICAgICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tldnRdO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGxpc3RlbmVycykge1xuXHQgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNba2V5XTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cdCAgICB9O1xuXG5cdCAgICBzZXR1cEV4dHJhcyhlLCBvYiwgby5leHRyYXMpO1xuXHQgICAgY2hhbmdlZCgpO1xuXG5cdCAgICByZXR1cm4gb2I7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb2xvcihjKSB7XG5cdCAgICBpZiAoIWlzRGVmaW5lZChjKSkge1xuXHQgICAgICAgIHJldHVybiBvbmVDb2xvckFsbChcIiMwMDBcIik7XG5cdCAgICB9XG5cdCAgICBpZiAoYy5pc0NvbG9yKSB7XG5cdCAgICAgICAgcmV0dXJuIGM7XG5cdCAgICB9XG5cblx0ICAgIHZhciByZXQgPSBvbmVDb2xvckFsbChjKTtcblxuXHQgICAgaWYgKHJldCkge1xuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpc0RlZmluZWQoYykpIHtcblx0ICAgICAgICBjb25zb2xlLndhcm4oXCJQYXNzZWQgaW52YWxpZCBjb2xvciB0byBjb2xvcmpvZSwgdXNpbmcgYmxhY2sgaW5zdGVhZFwiKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIG9uZUNvbG9yQWxsKFwiIzAwMFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldHVwRXh0cmFzKHAsIGpvZSwgZXh0cmFzJCQxKSB7XG5cdCAgICBpZiAoIWV4dHJhcyQkMSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGMgPSB1dGlscy5kaXYoXCJleHRyYXNcIiwgcCk7XG5cdCAgICB2YXIgY2JzO1xuXHQgICAgdmFyIG5hbWU7XG5cdCAgICB2YXIgcGFyYW1zO1xuXG5cdCAgICBleHRyYXMkJDEuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG5cdCAgICAgICAgaWYgKGlzQXJyYXkoZSkpIHtcblx0ICAgICAgICAgICAgbmFtZSA9IGVbMF07XG5cdCAgICAgICAgICAgIHBhcmFtcyA9IGUubGVuZ3RoID4gMSA/IGVbMV0gOiB7fTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBuYW1lID0gZTtcblx0ICAgICAgICAgICAgcGFyYW1zID0ge307XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBleHRyYSA9IG5hbWUgaW4gY29sb3Jqb2UuZXh0cmFzID8gY29sb3Jqb2UuZXh0cmFzW25hbWVdIDogbnVsbDtcblxuXHQgICAgICAgIGlmIChleHRyYSkge1xuXHQgICAgICAgICAgICBjYnMgPSBleHRyYShjLCBleHRyYVByb3h5KGpvZSwgbmFtZSArIGkpLCBwYXJhbXMpO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBrIGluIGNicykge1xuXHQgICAgICAgICAgICAgICAgam9lLm9uKGssIGNic1trXSwgbmFtZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dHJhUHJveHkoam9lLCBuYW1lKSB7XG5cdCAgICB2YXIgcmV0ID0gY29weShqb2UpO1xuXG5cdCAgICByZXQudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgam9lLnVwZGF0ZShbbmFtZV0pO1xuXHQgICAgfTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvcHkobykge1xuXHQgICAgLy8gcmV0dXJucyBhIHNoYWxsb3cgY29weVxuXHQgICAgdmFyIHJldCA9IHt9O1xuXG5cdCAgICBmb3IgKHZhciBrIGluIG8pIHtcblx0ICAgICAgICByZXRba10gPSBvW2tdO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWxsKGNiLCBhKSB7XG5cdCAgICByZXR1cm4gYS5tYXAoY2IpLmZpbHRlcihpZCkubGVuZ3RoID09IGEubGVuZ3RoO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNBcnJheShvKSB7XG5cdCAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cdH1cblx0ZnVuY3Rpb24gaXNTdHJpbmcobykge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xuXHR9XG5cdGZ1bmN0aW9uIGlzRGVmaW5lZChpbnB1dCkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBpbnB1dCAhPT0gXCJ1bmRlZmluZWRcIjtcblx0fVxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGlucHV0KSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSBcImZ1bmN0aW9uXCI7XG5cdH1cblx0ZnVuY3Rpb24gaWQoYSkge1xuXHQgICAgcmV0dXJuIGE7XG5cdH1cblxuXHR2YXIgY29sb3Jqb2VfMSA9IGNvbG9yam9lO1xuXG5cdHJldHVybiBjb2xvcmpvZV8xO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sb3Jqb2UuanMubWFwXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwidmFyIGNvbG9yam9lID0gcmVxdWlyZShcImNvbG9yam9lXCIpO1xyXG5cclxudmFyIGNhbnZkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhaW50Y2FudmFzXCIpO1xyXG52YXIgY2FudiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxudmFyIGN0eCA9IGNhbnYuZ2V0Q29udGV4dCgnMmQnKTtcclxudmFyIGlzTW91c2VEb3duID0gZmFsc2U7XHJcbnZhciBjb29yZHMgPSBbXTtcclxudmFyIHJhZGl1cyA9IDMuNTtcclxudmFyIHRpbWVyID0gbnVsbDtcclxudmFyIGNvbnRyb2wgPSBmYWxzZTtcclxudmFyIGNvbG9yID0gXCJibGFja1wiO1xyXG52YXIgb2Zmc2V0WCA9IDQ1O1xyXG5jb25zdCBqb2UgPSBjb2xvcmpvZS5yZ2IoXCJjb2xvcl9waWNrZXJcIiwgXCJibGFja1wiKTtcclxuXHJcbmZ1bmN0aW9uIGFsbG93RHJhdyhjb25uZWN0aW9ucykge1xyXG5cdGNvbnRyb2wgPSB0cnVlO1xyXG5cdHJhZGl1cyA9IDMuNTtcclxuXHRjb2xvciA9IFwiYmxhY2tcIjtcclxuXHRjb25zb2xlLmxvZyhcIkFsbG93RHJhdyBjbGVhclwiKTtcclxuXHRjbGVhcigpO1xyXG5cdGxldCBvbGRkYXRhID0gXCJcIjtcclxuXHR0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gIFx0XHRsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvb3Jkcyk7XHJcbiAgXHRcdGNvb3JkcyA9IFtdO1xyXG5cdCAgXHRpZiAoKGRhdGEgIT0gb2xkZGF0YSkgJiYgKGRhdGEgIT0gXCJbXVwiKSlcclxuXHQgIFx0e1xyXG5cdCAgXHRcdGZvciAobGV0IGNvbm5lY3QgaW4gY29ubmVjdGlvbnNbMF0pXHJcblx0ICBcdFx0e1xyXG5cdCAgXHRcdFx0Y29ubmVjdGlvbnNbMF1bY29ubmVjdF1bMV0uc2VuZChkYXRhKTtcclxuXHQgIFx0XHR9XHJcblx0ICBcdFx0XHJcblx0ICBcdH1cclxuXHJcblx0ICBcdG9sZGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XHJcblx0fSwgNDApO1xyXG5cdGNvbnNvbGUubG9nKFwiRHJhd2luZyBhbGxvd2VkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlRHJhdygpIHtcclxuXHRjb250cm9sID0gZmFsc2U7XHJcblx0Y29uc29sZS5sb2coXCJEaXNhYmxlRHJhdyBjbGVhclwiKTtcclxuXHRjbGVhcigpO1xyXG5cdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdGNvbnNvbGUubG9nKFwiRHJhd2luZyBkaXNhYmxlZFwiKTtcclxuXHRjb2xvciA9IFwiYmxhY2tcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zd2lkdGhzbGlkZXJcIikudmFsdWUgPSBcIjQuNVwiO1xyXG5cdHJhZGl1cyA9IDQuNTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjbGFyZUNhbnZEcmF3KCkge1xyXG5cdGNhbnYud2lkdGggPSBjYW52ZGl2Lm9mZnNldFdpZHRoO1xyXG5cdGNhbnYuaGVpZ2h0ID0gY2FudmRpdi5vZmZzZXRIZWlnaHQ7XHJcblx0Y2Fudi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoY29udHJvbClcclxuXHRcdHtcclxuXHRcdFx0Y29vcmRzLnB1c2goW2UuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WV0pO1xyXG5cclxuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpOyAgXHJcblx0XHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuXHRcdFx0Y3R4LmFyYyhlLmNsaWVudFggLSBvZmZzZXRYLCBlLmNsaWVudFksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG5cdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7IFxyXG5cdFx0XHRjdHgubW92ZVRvKGUuY2xpZW50WCAtIG9mZnNldFgsIGUuY2xpZW50WSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpc01vdXNlRG93biA9IGZhbHNlO1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpOyAvL9Ch0LHRgNCw0YHRi9Cy0LDRjiDQv9GD0YLRjCwg0YfRgtC+0LHRiyDQu9C40L3QuNGPINC90LUg0L/RgNC+0YDQuNGB0L7QstGL0LLQsNC70LDRgdGMINC40Lcg0L/RgNC+0YjQu9C+0Lkg0L/QvtC30LjRhtC40LgsINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9C+0LTQvdGP0Lsg0LzRi9GI0YxcclxuXHRcdGNvb3Jkcy5wdXNoKCdtb3VzZXVwJyk7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChjb250cm9sKVxyXG5cdFx0e1xyXG5cdFx0XHRpc01vdXNlRG93biA9IHRydWU7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpc01vdXNlRG93biA9IGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoaXNNb3VzZURvd24pXHJcblx0XHR7XHJcblx0XHRcdGNsZWFyU2VsZWN0aW9uKCk7XHJcblx0XHRcdGNvb3Jkcy5wdXNoKFtlLmNsaWVudFggLSBvZmZzZXRYLCBlLmNsaWVudFldKTtcclxuXHJcblx0XHRcdGN0eC5saW5lV2lkdGggPSByYWRpdXMgKiAyO1xyXG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuXHRcdFx0Y3R4LmxpbmVUbyhlLmNsaWVudFggLSBvZmZzZXRYLCBlLmNsaWVudFkpOyAvL9Cg0LjRgdGD0Y4g0LvQuNC90LjRjiDQuNC3INGC0LXQutGD0YnQtdC5INC/0YDQvtGI0LvQvtC5INC/0L7Qt9C40YbQuNC4INCyINGC0LXQutGD0YnRg9GOXHJcblx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTsgXHJcblx0XHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvcjsgXHJcblx0XHRcdGN0eC5hcmMoZS5jbGllbnRYIC0gb2Zmc2V0WCwgZS5jbGllbnRZLCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTsgIC8v0JTQvtGA0LjRgdC+0LLRi9Cy0LDRjiDQutGA0YPQs9C4LCDRh9GC0L7QsdGLINC90LUg0LHRi9C70L4g0Y3RhNGE0LXQutGC0LAg0LbQtdC70LXQt9C90L7QuSDQtNC+0YDQvtCz0LggKNC90YPQttC90L4sINC10YHQu9C4INC70LjQvdC40Y8g0YLQvtC70YHRgtCw0Y8pXHJcblx0XHRcdGN0eC5maWxsKCk7XHJcblxyXG5cclxuXHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Y3R4Lm1vdmVUbyhlLmNsaWVudFggLSBvZmZzZXRYLCBlLmNsaWVudFkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHRjYW52Lm9ubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGNvb3Jkcy5wdXNoKFwib3V0XCIpO1xyXG5cdH07XHJcbiAgXHJcbiAgICBkZWNsYXJlQ2FudkJpbmQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkNhbnZhcyBkZWNsYXJlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGF5KGNvb3Jkcylcclxue1xyXG5cdHdoaWxlICh0cnVlKVxyXG5cdHtcclxuXHRcdGlmICghY29vcmRzLmxlbmd0aCkgLy/QldGB0LvQuCDQutC+0L7RgNC00LjQvdCw0YIg0L3QtdGCXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY3JkID0gY29vcmRzLnNoaWZ0KCk7IC8v0KPQtNCw0LvRj9C10YIg0L/QtdGA0LLRi9C5INGN0LvQtdC80LXQvdGCINC40LcgY29vcmRzINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGN0YLQvtGCINGN0LvQtdC80LXQvdGCINCyINC/0LXRgNC10LzQtdC90L3Rg9GOIGNyZFxyXG5cdFx0aWYgKGNyZCA9PSBcIm91dFwiKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7ICBcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGNyZCA9PSBcImNsZWFyXCIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVwbGF5IGNsZWFyXCIpO1xyXG5cdFx0XHRjbGVhcih0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGNyZFswXSA9PSBcIiNcIilcclxuXHRcdHtcclxuXHRcdFx0Y29sb3IgPSBjcmQuc2xpY2UoMSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChjcmRbMF0gPT0gXCIqXCIpXHJcblx0XHR7XHJcblx0XHRcdHJhZGl1cyA9IGNyZC5zbGljZSgxKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dmFyXHRlID0ge1xyXG5cdFx0XHRcdFx0Y2xpZW50WDogY3JkWycwJ10sXHJcblx0XHRcdFx0XHRjbGllbnRZOiBjcmRbJzEnXVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHQvL9Ca0L7QtCDRgdC60L7Qv9C40YDQvtCy0LDQvSDQuNC3INC+0LHRi9GH0L3QvtCz0L4g0YDQuNGB0L7QstCw0L3QuNGPXHJcblx0XHRcdGN0eC5saW5lV2lkdGggPSByYWRpdXMgKiAyO1xyXG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuXHRcdFx0Y3R4LmxpbmVUbyhlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG5cdFx0XHRjdHguYXJjKGUuY2xpZW50WCwgZS5jbGllbnRZLCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuXHRcdFx0Y3R4LmZpbGwoKTtcclxuXHJcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Y3R4Lm1vdmVUbyhlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNsYXJlQ2FudkJpbmQoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9vc3dpZHRoc2xpZGVyXCIpLm9uY2hhbmdlID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0cmFkaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9vc3dpZHRoc2xpZGVyXCIpLnZhbHVlO1xyXG5cdFx0Y29vcmRzLnB1c2goXCIqXCIgKyByYWRpdXMpO1xyXG5cdH07XHJcblxyXG5cdGpvZS5vbihcImRvbmVcIiwgY29sb3IgPT4ge1xyXG5cdFx0Y2hhbmdlQ29sb3IoY29sb3IuY3NzKCkpOyBcclxuXHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0aW5nIFwiICsgY29sb3IuY3NzKCkpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVyYXNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJFcmFzZSBjbGVhclwiKTtcclxuXHRcdGNsZWFyKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3IxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Y2hhbmdlQ29sb3IoXCJibGFja1wiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGNoYW5nZUNvbG9yKFwiI0IxMEIwQlwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcjNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjaGFuZ2VDb2xvcihcIiM1QzkyMjZcIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3I0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Y2hhbmdlQ29sb3IoXCJ3aGl0ZVwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcjVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjaGFuZ2VDb2xvcihcIiMyODRBRkZcIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlY29sb3JcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHR2YXIgY29sb3JQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yX3BpY2tlclwiKTtcclxuXHJcblx0XHRpZiAoY29sb3JQaWMuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcclxuXHRcdFx0Y29sb3JQaWMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29sb3JQaWMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoYykge1xyXG5cdGNvbG9yID0gYztcclxuXHRjb29yZHMucHVzaChcIiNcIiArIGMpO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBzYXZlKClcclxue1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29yZHMnLCBKU09OLnN0cmluZ2lmeShjb29yZHMpKTsgLy/Qp9GC0L4g0YLQsNC60L7QtSBsb2NhbFN0b3JhZ2UgLSBodHRwczovL3Rwcm9nZXIucnUvYXJ0aWNsZXMvbG9jYWxzdG9yYWdlL1xyXG59XHJcbiovXHJcblxyXG5mdW5jdGlvbiBjbGVhcihyZXBsYXkgPSBmYWxzZSlcclxue1xyXG5cdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tQ2xlYXItLS0tLS0tLVwiKTtcclxuXHRjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuXHRjdHguZmlsbFJlY3QoMCwgMCwgY2Fudi53aWR0aCwgY2Fudi5oZWlnaHQpO1xyXG5cclxuXHRjdHguYmVnaW5QYXRoKCk7XHJcblx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG5cdGlmICghcmVwbGF5KSB7XHJcblx0XHRjb29yZHMucHVzaChcImNsZWFyXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS0tLS0tLS1Ob3QgUmVwbGF5LS0tLS0tLS1cIik7XHJcblx0fVxyXG5cdGNvbnNvbGUubG9nKGNvb3Jkcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGEoY2Fudikge1xyXG5cdHZhciBkYXRhID0gY2Fudi50b0RhdGFVUkwoKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICB9IGVsc2UgeyAvLyDRgdGC0LDRgNGL0LkgSUVcclxuICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGVjbGFyZUNhbnZEcmF3LCBhbGxvd0RyYXcsIGRpc2FibGVEcmF3LCByZXBsYXl9O1xyXG5cclxuZXhwb3J0cy5kZWNsYXJlQ2FudkRyYXcgPSBkZWNsYXJlQ2FudkRyYXc7XHJcbmV4cG9ydHMuYWxsb3dEcmF3ID0gYWxsb3dEcmF3O1xyXG5leHBvcnRzLmRpc2FibGVEcmF3ID0gZGlzYWJsZURyYXc7IiwiaW1wb3J0IHtkZWNsYXJlQ2FudkRyYXcsIGFsbG93RHJhdywgZGlzYWJsZURyYXcsIHJlcGxheX0gZnJvbSBcIi4uL2NhbnZhc1wiO1xyXG5cclxuLy92YXIgc2VydmVySXAgPSBcIjE4OC4yMzIuNDIuNzNcIjtcclxudmFyIHNlcnZlcklwID0gXCJ3ZWJzb2NrLXNlcnYuaGVyb2t1YXBwLmNvbVwiO1xyXG4vL25ncm9rIGh0dHAgLS1ob3N0LWhlYWRlcj1qdXN0ZHJhdy5jb20gODBzXHJcblxyXG4vKlxyXG4kLmFqYXgoe1xyXG5cdHVybDogXCJodHRwOi8vaWNhbmhhemlwLmNvbVwiLFxyXG5cdGRhdGFUeXBlOiBcImh0bWxcIixcclxuXHR0eXBlOiBcIkdFVFwiLFxyXG5cdGFzeW5jOiBmYWxzZVxyXG59KVxyXG4uZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcblx0bGV0IGNsaWVudElwID0gZGF0YS5yZXBsYWNlKFwiXFxuXCIsIFwiXCIpO1xyXG5cdGNvbnNvbGUubG9nKGNsaWVudElwKTtcclxuXHRpZiAoY2xpZW50SXAgPT0gc2VydmVySXApXHJcblx0e1xyXG5cdFx0c2VydmVySXAgPSBcIjE5Mi4xNjguMC4yXCI7XHJcblx0fVxyXG59KVxyXG4uZmFpbChmdW5jdGlvbiggeGhyLCBzdGF0dXMsIGVycm9yVGhyb3duICkge1xyXG5cdGNvbnNvbGUubG9nKCBcIkVycm9yOiBcIiArIGVycm9yVGhyb3duICk7XHJcblx0Y29uc29sZS5sb2coIFwiU3RhdHVzOiBcIiArIHN0YXR1cyApO1xyXG59KTtcclxuKi9cclxuXHJcbnZhciB1cmwgPSBcIldTUzovL1wiICsgc2VydmVySXBcclxuY29uc29sZS5sb2codXJsKTtcclxudmFyIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuXHJcbmNsYXNzIHJvb20ge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHJvdW5kLCBtYXhyb3VuZCwgcGxheWVycywgbWF4cGxheWVycywgcm91bmR0aW1lLCBob3N0ID0gXCJcIikge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuaG9zdCA9IGhvc3Q7XHJcblx0XHR0aGlzLnJvdW5kID0gcm91bmQ7XHJcblx0XHR0aGlzLm1heHJvdW5kID0gbWF4cm91bmQ7XHJcblx0XHR0aGlzLnBsYXllcnMgPSAxO1xyXG5cdFx0dGhpcy5tYXhwbGF5ZXJzID0gbWF4cGxheWVycztcclxuXHRcdHRoaXMucm91bmR0aW1lID0gcm91bmR0aW1lO1xyXG5cdFx0dGhpcy5zY29yZSA9IHt9O1xyXG5cdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdHRoaXMud29yZCA9IFtdO1xyXG5cdH1cclxufVxyXG5cclxudmFyIG1haW5yb29tID0gbmV3IHJvb20obmFtZSA9IHVuZGVmaW5lZCk7IC8v0JrQvtC80L3QsNGC0LAsINCyINC60L7RgtC+0YDQvtC5INGB0LXQudGH0LDRgSDQvdCw0YXQvtC00LjRgtGB0Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXHJcblxyXG52YXIgY2xpZW50ID0ge307XHJcbmNsaWVudC5uYW1lID0gXCJcIjtcclxuY2xpZW50LmlkID0gXCJcIjtcclxuXHJcbnZhciBjb25uZWN0aW9ucyA9IHt9O1xyXG52YXIga2V5d29yZCA9IFwiXCI7XHJcbnZhciBjb250cm9sID0gdHJ1ZTtcclxudmFyIHJvdW5kdGltZXIgPSBmYWxzZTtcclxuXHJcbnZhciBwaW5ndGltZXI7XHJcbnZhciBwaW5ndGltZSA9IDA7XHJcblxyXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc29sZS5sb2coXCLQodC+0LXQtNC40L3QtdC90LjQtSDRg9GB0YLQsNC90L7QstC70LXQvdC+LlwiKTtcclxuXHJcblx0cGluZ3RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRzZW5kKHtcclxuXHRcdFx0XHR0eXBlOlwicGluZ1wiLFxyXG5cdFx0XHRcdGNsaWVudDogY2xpZW50Lm5hbWVcclxuXHRcdFx0fSk7XHJcblx0XHRwaW5ndGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cdH0sIDEwMDAwKVxyXG59O1xyXG4gXHJcbnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRjbGVhckludGVydmFsKHBpbmd0aW1lcilcclxuXHRpZiAoZXZlbnQud2FzQ2xlYW4pIHtcclxuXHRcdGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDQt9Cw0LrRgNGL0YLQviDRh9C40YHRgtC+Jyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKCfQntCx0YDRi9CyINGB0L7QtdC00LjQvdC10L3QuNGPJyk7XHJcblx0XHRjb25zb2xlLmxvZygn0JrQvtC0OiAnICsgZXZlbnQuY29kZSArICcg0L/RgNC40YfQuNC90LA6ICcgKyBldmVudC5yZWFzb24pO1xyXG5cdH1cclxufTtcclxuXHJcbnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0dmFyIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcblx0Y29uc29sZS5sb2coXCJSZWNlaXZlZCBtZXNzYWdlIGZyb20gV1NTOiBcXG5cIiArIGRhdGEpO1xyXG5cdGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gXHRzd2l0Y2goZGF0YS50eXBlKSB7IFxyXG5cdCAgICBjYXNlIFwibG9naW5cIjogXHJcblx0ICAgIFx0b25Mb2dpbihkYXRhKTsgXHJcblx0ICAgICBcdGJyZWFrOyBcclxuXHRcdGNhc2UgXCJvZmZlclwiOiBcclxuXHQgXHRcdG9uT2ZmZXIoZGF0YS5vZmZlciwgZGF0YS5jbGllbnQpOyBcclxuXHQgXHRcdGJyZWFrOyBcclxuXHRcdGNhc2UgXCJhbnN3ZXJcIjogXHJcblx0IFx0XHRvbkFuc3dlcihkYXRhLmFuc3dlciwgZGF0YS5jbGllbnQpOyBcclxuXHQgXHRcdGJyZWFrOyBcclxuXHRcdGNhc2UgXCJjYW5kaWRhdGVcIjogXHJcblx0IFx0XHRvbkNhbmRpZGF0ZShkYXRhLmNhbmRpZGF0ZSwgZGF0YS5jbGllbnQpOyBcclxuXHQgXHRcdGJyZWFrO1xyXG5cdCBcdGNhc2UgXCJnZXRyb29tc1wiOlxyXG5cdCBcdFx0b25HZXRSb29tcyhkYXRhKTtcclxuXHQgXHRcdGJyZWFrO1xyXG5cdCBcdGNhc2UgXCJjcmVhdGVyb29tXCI6XHJcblx0IFx0XHRvbkNyZWF0ZVJvb20oZGF0YSk7XHJcblx0IFx0XHRicmVhaztcclxuXHQgXHRjYXNlIFwicm9vbVwiOlxyXG5cdCBcdFx0b25Sb29tKGRhdGEpO1xyXG5cdCBcdFx0YnJlYWs7XHJcblx0IFx0Y2FzZSBcInJvdW5kc3RhcnRcIjpcclxuXHQgXHRcdG9uUm91bmRTdGFydChkYXRhKTtcclxuXHQgXHRcdGJyZWFrO1xyXG5cdCBcdGNhc2UgXCJ3b3Jkc1wiOlxyXG5cdCBcdFx0b25Xb3JkcyhkYXRhKTtcclxuXHQgXHRcdGJyZWFrO1xyXG5cdCBcdGNhc2UgXCJ3aW5cIjpcclxuXHQgXHRcdG9uV2luKGRhdGEpO1xyXG5cdCBcdFx0YnJlYWs7XHJcblx0IFx0Y2FzZSBcInJvdW5kZW5kXCI6XHJcblx0IFx0XHRvblJvdW5kRW5kKGRhdGEpO1xyXG5cdCBcdFx0YnJlYWs7XHJcblx0IFx0Y2FzZSBcInBsYXllcnNcIjpcclxuXHQgXHRcdG9uUGxheWVycyhkYXRhKTtcclxuXHQgXHRcdGJyZWFrO1xyXG5cdCBcdGNhc2UgXCJrZXl3b3JkXCI6XHJcblx0IFx0XHRvbktleXdvcmQoZGF0YSk7XHJcblx0IFx0XHRicmVhaztcclxuXHQgXHRjYXNlIFwicG9uZ1wiOlxyXG5cdCBcdFx0b25Qb25nKGRhdGEpO1xyXG5cdCBcdFx0YnJlYWs7XHJcblx0IFx0Y2FzZSBcImVycm9yXCI6XHJcblx0IFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHQgXHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDogXHJcblx0IFx0XHRicmVhazsgXHJcblx0fSBcclxufTtcclxuXHJcbnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRzb2NrZXQuY2xvc2UoKTtcclxuIFx0Y29uc29sZS5sb2coXCLQntGI0LjQsdC60LAgXCIgKyBlcnJvci5tZXNzYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XHJcblx0bWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG5cdHNvY2tldC5zZW5kKG1lc3NhZ2UpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gb25DcmVhdGVSb29tKGRhdGEpIHtcclxuXHRpZiAoZGF0YS5zdWNjZXNzID09IDEpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm91bmRcIikuaW5uZXJIVE1MID0gbWFpbnJvb20ucm91bmQ7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heHJvdW5kXCIpLmlubmVySFRNTCA9IG1haW5yb29tLm1heHJvdW5kO1xyXG5cdFx0bGV0IG15ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG15ZGl2LmNsYXNzTmFtZSA9IFwicGxheWVyc19wbGF5ZXJcIjtcclxuXHRcdG15ZGl2LmlkID0gY2xpZW50Lm5hbWU7XHJcblx0XHRteWRpdi5pbm5lckhUTUwgPSBcclxuXHRcdGA8ZGl2IGNsYXNzPVwicGxheWVyX25hbWVcIj48Yj4ke2NsaWVudC5uYW1lfTwvYj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwbGF5ZXJfcG9pbnRzXCI+PGI+MDwvYj48L2Rpdj5gO1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyc19saXN0X3BsYXllcnNcIikuYXBwZW5kKG15ZGl2KTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHBhbmVsX21hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbXBhZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0ZGVjbGFyZUNhbnZEcmF3KCk7XHJcblx0XHRhbGxvd0RyYXcoezA6IGNvbm5lY3Rpb25zfSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG1haW5yb29tLm5hbWUgPSBcIlwiO1xyXG5cdFx0c2hvd0VyKFwiLnJvb210aXRsZWZvcm1cIiwgXCLQndCw0LfQstCw0L3QuNC1INC60L7QvNC90LDRgtGLINC30LDQvdGP0YLQvlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUm9vbShkYXRhKSB7XHJcblx0aWYgKGRhdGEuc3VjY2VzcyA9PSAxKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kXCIpLmlubmVySFRNTCA9IG1haW5yb29tLnJvdW5kO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhyb3VuZFwiKS5pbm5lckhUTUwgPSBtYWlucm9vbS5tYXhyb3VuZDtcclxuXHRcdGNsb3NlQ29ucygpO1xyXG5cdFx0bWFpbnJvb20uc2NvcmUgPSBkYXRhLmNsaWVudHM7XHJcblx0XHRmb3IgKGxldCByZWNlaXZlciBpbiBkYXRhLmNsaWVudHMpIHtcclxuXHRcdFx0aWYgKHJlY2VpdmVyICE9IGNsaWVudC5uYW1lKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVjZWl2ZXIpO1xyXG5cdFx0XHRcdGxldCBjb25uZWN0aW9uID0gY3JlYXRlQ29uKHJlY2VpdmVyKTtcclxuXHRcdFx0XHRjb25uZWN0aW9uLmNyZWF0ZU9mZmVyKGZ1bmN0aW9uKG9mZmVyKSB7XHJcblx0XHRcdCAgICBcdHNlbmQoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcIm9mZmVyXCIsXHJcblx0XHRcdFx0XHRcdGNsaWVudDogY2xpZW50Lm5hbWUsXHJcblx0XHRcdFx0XHRcdHJlY2VpdmVyOiByZWNlaXZlcixcclxuXHRcdFx0XHRcdFx0cm9vbTogbWFpbnJvb20ubmFtZSxcclxuXHRcdFx0XHRcdFx0b2ZmZXI6IG9mZmVyXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0ICAgIFx0Y29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTsgXHJcblx0XHRcdCAgICBcdGNvbnNvbGUubG9nKFwiT2ZmZXIgdG8gY2xpZW50OiBcIiArIHJlY2VpdmVyICsgXCIgaGFzIGJlZW4gc2VuZGVkXCIpO1xyXG5cdFx0XHRcdH0sIFxyXG5cdFx0XHRcdGZ1bmN0aW9uIChlcnJvcikgeyBcclxuXHRcdFx0IFx0XHRhbGVydChcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIik7IFxyXG5cdFx0XHQgXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21wYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZXBhZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGRlY2xhcmVDYW52RHJhdygpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoZGF0YS5lcnJvciA9PSBcIkludmFsaWQgcGFzc3dvcmRcIikge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkX3RleHRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRzaG93Tmlja0VyKFwiLnBhc3N3b3JkX2Zvcm1faW5wdXRcIiwgXCLQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1haW5yb29tLm5hbWUgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25HZXRSb29tcyhkYXRhKSB7XHJcblx0cmVtb3ZlQ2hpbGRyZW5zKFwiLnJvb21zXCIpO1xyXG5cdGxldCByb29tcyA9IGRhdGEucm9vbXM7XHJcblx0Y29uc29sZS5sb2coXCJHb3Qgcm9vbXNcXG5cIiwgcm9vbXMpO1xyXG5cdGZvciAobGV0IHJvb20gaW4gcm9vbXMpXHJcblx0e1xyXG5cdFx0bGV0IG15ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG15ZGl2LmNsYXNzTmFtZSA9IFwicm9vbVwiO1xyXG5cdFx0bXlkaXYuaWQgPSByb29tO1xyXG5cdFx0bXlkaXYuc2V0QXR0cmlidXRlKFwicm91bmRcIiwgcm9vbXNbcm9vbV0ucm91bmQpO1xyXG5cdFx0bXlkaXYuc2V0QXR0cmlidXRlKFwibWF4cm91bmRcIiwgcm9vbXNbcm9vbV0ubWF4cm91bmQpO1xyXG5cdFx0bXlkaXYuc2V0QXR0cmlidXRlKFwicGxheWVyc1wiLCByb29tc1tyb29tXS5wbGF5ZXJzKTtcclxuXHRcdG15ZGl2LnNldEF0dHJpYnV0ZShcIm1heHBsYXllcnNcIiwgcm9vbXNbcm9vbV0ubWF4cGxheWVycyk7XHJcblx0XHRteWRpdi5zZXRBdHRyaWJ1dGUoXCJtb2RlXCIsIHJvb21zW3Jvb21dLm1vZGUpO1xyXG5cdFx0bXlkaXYuc2V0QXR0cmlidXRlKFwicm91bmR0aW1lXCIsIHJvb21zW3Jvb21dLnJvdW5kdGltZSk7XHJcblx0XHRteWRpdi5zZXRBdHRyaWJ1dGUoXCJwYXNzd29yZFwiLCByb29tc1tyb29tXS5wYXNzd29yZCk7XHJcblx0XHRteWRpdi5pbm5lckhUTUwgPSBcclxuXHRcdCAgIGA8ZGl2IGNsYXNzPVwicm9vbWNydXRjaDEgcm9vbWNydXRjaFwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwicm9vbWF0dHIgcm9vbWF0dHIxXCI+JHtyb29tfTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyb29tY3J1dGNoMiByb29tY3J1dGNoXCI+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJyb29tYXR0clwiPiR7cm9vbXNbcm9vbV0ubW9kZX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm9vbWNydXRjaDMgcm9vbWNydXRjaFwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwicm9vbWF0dHJcIj4ke3Jvb21zW3Jvb21dLnJvdW5kfSAvICR7cm9vbXNbcm9vbV0ubWF4cm91bmR9PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJvb21jcnV0Y2g0IHJvb21jcnV0Y2hcIj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cInJvb21hdHRyXCI+JHtyb29tc1tyb29tXS5wbGF5ZXJzfSAvICR7cm9vbXNbcm9vbV0ubWF4cGxheWVyc308L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm9vbWNydXRjaDUgcm9vbWNydXRjaFwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwicm9vbWF0dHJcIj4ke3Jvb21zW3Jvb21dLnBhc3N3b3JkID09IFwiXCIgPyAnPGltZyBzcmM9XCJpbWcvbG9ja2VkLnN2Z1wiIGFsdD1cInB1YmxpY1wiPicgOiBcclxuXHRcdFx0XHQnPGltZyBzcmM9XCJpbWcvdW5sb2NrZWQuc3ZnXCIgYWx0PVwicHJpdmF0ZVwiPid9PC9wPlxyXG5cdFx0XHQ8L2Rpdj5gO1xyXG5cdFx0XHJcblx0XHRteWRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1haW5yb29tLm5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cdFx0XHRtYWlucm9vbS5tYXhwbGF5ZXJzID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJtYXhwbGF5ZXJzXCIpO1xyXG5cdFx0XHRtYWlucm9vbS5yb3VuZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwicm91bmRcIik7XHJcblx0XHRcdG1haW5yb29tLm1vZGUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm1vZGVcIik7XHJcblx0XHRcdG1haW5yb29tLnJvdW5kdGltZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwicm91bmR0aW1lXCIpO1xyXG5cdFx0XHRtYWlucm9vbS5wbGF5ZXJzID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJwbGF5ZXJzXCIpO1xyXG5cdFx0XHRtYWlucm9vbS5tYXhyb3VuZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibWF4cm91bmRcIik7XHJcblx0XHRcdGlmICh0aGlzLmdldEF0dHJpYnV0ZShcInBhc3N3b3JkXCIpID09IFwiMVwiKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfZm9ybV9zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9mb3JtX2lucHV0XCIpLnZhbHVlO1xyXG5cdFx0XHRcdFx0c2VuZCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwicm9vbVwiLFxyXG5cdFx0XHRcdFx0XHRjbGllbnQ6IGNsaWVudC5uYW1lLFxyXG5cdFx0XHRcdFx0XHRyb29tOiBtYWlucm9vbS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogcGFzc3dvcmRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNlbmQoe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJyb29tXCIsXHJcblx0XHRcdFx0XHRjbGllbnQ6IGNsaWVudC5uYW1lLFxyXG5cdFx0XHRcdFx0cm9vbTogbWFpbnJvb20ubmFtZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vbXNcIikuYXBwZW5kKG15ZGl2KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJvb21zKCkgXHJcbntcclxuXHRzZW5kKHtcclxuXHRcdHR5cGU6IFwiZ2V0cm9vbXNcIixcclxuXHRcdGNsaWVudDogY2xpZW50Lm5hbWVcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvbkxvZ2luKGRhdGEpIHtcclxuICAgXHRpZiAoZGF0YS5zdWNjZXNzID09IDApIFxyXG4gICBcdHsgXHJcbiAgICAgXHRjb25zb2xlLmxvZyhcIkxvZ2luIGVycm9yXCIpOyBcclxuXHRcdHNob3dOaWNrRXIoXCIubmlja2Zvcm1cIiwgXCLQmNC80Y8g0LfQsNC90Y/RgtC+XCIpO1xyXG4gICBcdH0gXHJcbiAgIFx0ZWxzZSBcclxuICAgXHR7IFxyXG4gICBcdFx0Y29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xyXG4gICBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuaWNrcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21wYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgIFx0XHRnZXRSb29tcygpO1xyXG5cdH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUm91bmRTdGFydChkYXRhKSB7XHJcblx0cm91bmR0aW1lciA9IGZhbHNlO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbGVyXCIpLnN0eWxlLndpZHRoID0gMCArIFwicHhcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbnNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5hbHNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0bWFpbnJvb20uaG9zdCA9IGRhdGEuaG9zdDtcclxuXHRtYWlucm9vbS5yb3VuZCA9IGRhdGEucm91bmQ7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrZXl3b3JkXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0Y2hhbmdlUGxheWVyTGlzdChtYWlucm9vbS5zY29yZSk7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZFwiKS5pbm5lckhUTUwgPSBtYWlucm9vbS5yb3VuZDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Sb3VuZEVuZChkYXRhKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvcl9waWNrZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdGlmIChkYXRhLmxhc3Ryb3VuZCA9PSBcInRydWVcIikge1xyXG5cdFx0Y2hhbmdlRmluYWxTY29yZShkYXRhKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmluYWxzY3JlZW5cIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbnNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b29scGFuZWxfbWFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3N3aWR0aHNsaWRlclwiKS52YWx1ZSA9IFwiNC41XCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrZXl3b3Jkc2hvd1wiKS5pbm5lckhUTUwgPSBkYXRhLmtleXdvcmQ7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5uZXJOaWNrXCIpLmlubmVySFRNTCA9IGRhdGEud2lubmVyO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJhd2VyTmlja1wiKS5pbm5lckhUTUwgPSBkYXRhLnBhaW50ZXI7XHJcblxyXG5cdHJvdW5kdGltZXIgPSBmYWxzZTtcclxuXHRrZXl3b3JkID0gXCJcIjtcclxuXHRkaXNhYmxlRHJhdygpO1xyXG5cdGNoYW5nZVBsYXllckxpc3QoZGF0YS5zY29yZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uV29yZHMoZGF0YSkge1xyXG5cdGlmIChtYWlucm9vbS5uYW1lICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0dmFyIHdvcmRzID0gZGF0YS53b3JkcztcclxuXHRcdHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2V5d29yZHNsaXN0XCIpLmNoaWxkcmVuO1xyXG5cdFx0a2V5d29yZCA9IFwiXCI7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGVsZW1zW2ldLmlubmVySFRNTCA9IHdvcmRzW2ldO1xyXG5cclxuXHRcdFx0ZWxlbXNbaV0ub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0a2V5d29yZCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcblx0XHRcdFx0cm91bmR0aW1lciA9IHRydWU7XHJcblx0XHRcdFx0YmFyQW5pbWF0aW9uU3RhcnQoKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZXNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdFx0c2VuZCh7IFxyXG5cdFx0XHQgICAgICAgICAgIFx0dHlwZTogXCJrZXl3b3JkXCIsXHJcblx0XHRcdCAgXHRcdFx0Y2xpZW50OiBjbGllbnQubmFtZSxcclxuXHRcdFx0ICBcdFx0XHRyb29tOiBtYWlucm9vbS5uYW1lLFxyXG5cdFx0XHQgICAgXHQgICBcdGtleXdvcmQ6IGtleXdvcmRcclxuXHRcdCAgICAgICAgXHR9KTtcclxuXHRcdFx0XHRmb3IgKGxldCBjb25uZWN0IGluIGNvbm5lY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRjb25uZWN0aW9uc1tjb25uZWN0XVsxXS5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJzdGFydFwiLFxyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZXRXb3JkKGtleXdvcmQpO1xyXG5cdFx0XHRcdGFsbG93RHJhdyh7MDogY29ubmVjdGlvbnN9KTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvb2xwYW5lbF9tYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIktleXdvcmQ6IFwiICsga2V5d29yZCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZXNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25LZXl3b3JkKGRhdGEpIHtcclxuXHRpZiAobWFpbnJvb20ubmFtZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3Nlc2NyZWVuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHBhbmVsX21hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0a2V5d29yZCA9IGRhdGEua2V5d29yZDtcclxuXHRcdHNldFdvcmQoa2V5d29yZCk7XHJcblx0XHRyb3VuZHRpbWVyID0gdHJ1ZTtcclxuXHRcdGJhckFuaW1hdGlvblN0YXJ0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhjb25uZWN0aW9ucyk7XHJcblx0XHRmb3IgKGxldCBjb25uZWN0IGluIGNvbm5lY3Rpb25zKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbm5lY3Rpb25zW2Nvbm5lY3RdWzFdLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzdGFydFwiXHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUlRDIGNvbm5lY3Rpb24gaW4gY2xvc2Ugc3RhdGVcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0YWxsb3dEcmF3KHswOiBjb25uZWN0aW9uc30pO1xyXG5cdFx0Y29uc29sZS5sb2coXCJLZXl3b3JkOiBcIiArIGtleXdvcmQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Qb25nKGRhdGEpIHtcclxuXHQvL2NvbnNvbGUubG9nKFwiUGluZyBcIiArIChwZXJmb3JtYW5jZS5ub3coKSAtIHBpbmd0aW1lKSArIFwiIG1zXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblBsYXllcnMoZGF0YSkge1xyXG5cdGNoYW5nZVBsYXllckxpc3QoZGF0YS5wbGF5ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGxheWVyTGlzdChwbGF5ZXJzKSB7XHJcblx0bWFpbnJvb20ucGxheWVycyA9IChPYmplY3Qua2V5cyhwbGF5ZXJzKSkubGVuZ3RoO1xyXG5cdG1haW5yb29tLnNjb3JlID0gcGxheWVycztcclxuXHRsZXQgcGxheWVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcnNfbGlzdF9wbGF5ZXJzXCIpO1xyXG5cclxuXHRsZXQgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bmV3TGlzdC5jbGFzc05hbWUgPSBcInBsYXllcnNfbGlzdF9wbGF5ZXJzXCI7XHJcblxyXG5cdGZvciAobGV0IHBsYXllciBpbiBwbGF5ZXJzKSB7XHJcblx0XHRsZXQgbXlkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0bXlkaXYuY2xhc3NOYW1lID0gXCJwbGF5ZXJzX3BsYXllclwiO1xyXG5cdFx0bXlkaXYuaWQgPSBwbGF5ZXI7XHJcblx0XHRpZiAoKHBsYXllciA9PSBtYWlucm9vbS5ob3N0KSAmJiAocGxheWVyID09IGNsaWVudC5uYW1lKSkge1xyXG5cdFx0XHRteWRpdi5pbm5lckhUTUwgPSBcclxuXHRcdCAgIGA8aW1nIGNsYXNzPVwiaG9zdEJydXNoXCIgc3JjPVwiaW1nL0JydXNoLnN2Z1wiIGFsdD1cItCl0YPQtNC+0LbQvdC40LpcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBsYXllcl9uYW1lXCI+PGI+JHtwbGF5ZXJ9PC9iPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGxheWVyX3BvaW50c1wiPjxiPiR7cGxheWVyc1twbGF5ZXJdfTwvYj48L2Rpdj5gO1xyXG5cdFx0fSBlbHNlIGlmIChwbGF5ZXIgPT0gbWFpbnJvb20uaG9zdCkge1xyXG5cdFx0XHRteWRpdi5pbm5lckhUTUwgPSBcclxuXHRcdCAgIGA8aW1nIGNsYXNzPVwiaG9zdEJydXNoXCIgc3JjPVwiaW1nL0JydXNoLnN2Z1wiIGFsdD1cItCl0YPQtNC+0LbQvdC40LpcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBsYXllcl9uYW1lXCI+JHtwbGF5ZXJ9PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwbGF5ZXJfcG9pbnRzXCI+JHtwbGF5ZXJzW3BsYXllcl19PC9kaXY+YDtcclxuXHRcdH0gZWxzZSBpZiAocGxheWVyID09IGNsaWVudC5uYW1lKSB7XHJcblx0XHRcdG15ZGl2LmlubmVySFRNTCA9IFxyXG5cdFx0ICAgYDxkaXYgY2xhc3M9XCJwbGF5ZXJfbmFtZVwiPjxiPiR7cGxheWVyfTwvYj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBsYXllcl9wb2ludHNcIj48Yj4ke3BsYXllcnNbcGxheWVyXX08L2I+PC9kaXY+YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG15ZGl2LmlubmVySFRNTCA9IFxyXG5cdFx0ICAgYDxkaXYgY2xhc3M9XCJwbGF5ZXJfbmFtZVwiPiR7cGxheWVyfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGxheWVyX3BvaW50c1wiPiR7cGxheWVyc1twbGF5ZXJdfTwvZGl2PmA7XHJcblx0XHR9XHJcblx0XHRuZXdMaXN0LmFwcGVuZChteWRpdik7XHJcblx0fVxyXG5cclxuXHRwbGF5ZXJzTGlzdC5pbm5lckhUTUwgPSBuZXdMaXN0LmlubmVySFRNTDtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VzXCIpLnN0eWxlLnBhZGRpbmdUb3AgPSA0NiArIG1haW5yb29tLnBsYXllcnMgKiAyOSArIFwicHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRmluYWxTY29yZShkYXRhKSB7XHJcblx0bGV0IHBsYXllcnMgPSBkYXRhLnNjb3JlO1xyXG5cdGxldCBwbGF5ZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluYWxfc2NvcmVcIik7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5hbF9rZXl3b3Jkc2hvd1wiKS5pbm5lckhUTUwgPSBkYXRhLmtleXdvcmQ7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5hbF9kcmF3ZXJOaWNrXCIpLmlubmVySFRNTCA9IGRhdGEucGFpbnRlcjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbmFsX3dpbm5lck5pY2tcIikuaW5uZXJIVE1MID0gZGF0YS53aW5uZXI7XHJcblxyXG5cdGxldCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuZXdMaXN0LmlkID0gXCJmaW5hbF9zY29yZV9saXN0XCI7XHJcblx0bGV0IGkgPSAxO1xyXG5cclxuXHRmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xyXG5cdFx0bGV0IG15ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG15ZGl2LmNsYXNzTmFtZSA9IFwicGxheWVyc19wbGF5ZXJcIjtcclxuXHRcdG15ZGl2LmlkID0gcGxheWVyO1xyXG5cdFx0bXlkaXYuaW5uZXJIVE1MID0gXHJcblx0XHQgICBgPGRpdiBjbGFzcz1cInBsYXllcl9uYW1lXCI+JHtpfS4gJHtwbGF5ZXJ9PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwbGF5ZXJfcG9pbnRzXCI+JHtwbGF5ZXJzW3BsYXllcl19PC9kaXY+YDtcclxuXHRcdG5ld0xpc3QuYXBwZW5kKG15ZGl2KTtcclxuXHRcdGkrKztcclxuXHR9XHJcblxyXG5cdHBsYXllcnNMaXN0LmlubmVySFRNTCA9IG5ld0xpc3QuaW5uZXJIVE1MO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUNvbnMoKSB7XHJcblx0Zm9yIChsZXQgY29ubmVjdCBpbiBjb25uZWN0aW9ucylcclxuXHR7XHJcblx0XHRjb25uZWN0aW9uc1tjb25uZWN0XVswXS5jbG9zZSgpO1xyXG5cdH1cclxuXHRjb25uZWN0aW9ucyA9IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbnMobm9kZSkge1xyXG5cdHZhciBteU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGUpO1xyXG5cdHZhciBmYyA9IG15Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuXHR3aGlsZSAobXlOb2RlLmZpcnN0Q2hpbGQpIHtcclxuICAgIFx0bXlOb2RlLnJlbW92ZUNoaWxkKG15Tm9kZS5maXJzdENoaWxkKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhckFuaW1hdGlvblN0YXJ0KHRpbWUgPSAwKSB7XHJcblx0bGV0IGZsYWcxID0gdHJ1ZTtcclxuXHRsZXQgZmxhZzIgPSB0cnVlO1xyXG5cdGxldCBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGxlclwiKTtcclxuXHRsZXQgbWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXJcIikub2Zmc2V0V2lkdGg7XHJcblx0bGV0IHJvdW5kdGltZSA9IG1haW5yb29tLnJvdW5kdGltZSAqIDEwMDA7XHJcblx0bGV0IHdpZHRoID0gdGltZSAvIChyb3VuZHRpbWUgLyBtYXgpO1xyXG5cdGxldCBzdGFydCA9IERhdGUubm93KCk7XHJcblxyXG5cdGlmIChjbGllbnQubmFtZSA9PSBtYWlucm9vbS5ob3N0KSB7XHJcblx0XHR2YXIgd29yZCA9IGdlbmVyYXRlV29yZCgpO1xyXG5cdFx0bWFpbnJvb20ud29yZCA9IHdvcmQ7XHJcblx0fVxyXG5cclxuXHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0aW1lUGFzc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xyXG5cclxuXHQgIFx0aWYgKCh0aW1lUGFzc2VkID49IChyb3VuZHRpbWUgLSB0aW1lKSkgfHwgKCFyb3VuZHRpbWVyKSkge1xyXG5cdFx0XHRiYXIuc3R5bGUud2lkdGggPSBtYXggKyBcInB4XCI7XHJcblx0ICAgIFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0ICAgIFx0bWFpbnJvb20udGltZSA9IDA7XHJcblx0ICAgIFx0cmV0dXJuO1xyXG5cdCAgXHR9XHJcblxyXG5cdCAgXHRpZiAoY2xpZW50Lm5hbWUgPT0gbWFpbnJvb20uaG9zdCkge1xyXG5cdCAgXHRcdGxldCBrID0gdGltZVBhc3NlZCAvIHJvdW5kdGltZTtcclxuXHQgIFx0XHRpZiAoKGsgPj0gMC4zKSAmJiAoZmxhZzEgPT0gdHJ1ZSkpIHtcclxuXHQgIFx0XHRcdGZsYWcxID0gZmFsc2U7XHJcblx0XHRcdFx0Zm9yIChsZXQgY29ubmVjdCBpbiBjb25uZWN0aW9ucylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25uZWN0aW9uc1tjb25uZWN0XVsxXS5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ3b3JkXCIsXHJcblx0XHRcdFx0XHRcdHdvcmQ6IHdvcmRbMF1cclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR9XHJcblx0ICBcdFx0fSBlbHNlIGlmICgoayA+PSAwLjYpICYmIChmbGFnMiA9PSB0cnVlKSkge1xyXG5cdCAgXHRcdFx0ZmxhZzIgPSBmYWxzZTtcclxuXHRcdFx0XHRmb3IgKGxldCBjb25uZWN0IGluIGNvbm5lY3Rpb25zKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbm5lY3Rpb25zW2Nvbm5lY3RdWzFdLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcIndvcmRcIixcclxuXHRcdFx0XHRcdFx0d29yZDogd29yZFsxXVxyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH1cclxuXHQgIFx0XHR9XHJcblx0ICBcdH1cclxuXHJcblx0XHRiYXIuc3R5bGUud2lkdGggPSB0aW1lUGFzc2VkIC8gKHJvdW5kdGltZSAvIG1heCkgKyB3aWR0aCArIFwicHhcIjtcclxuXHRcdG1haW5yb29tLnRpbWUgPSB0aW1lUGFzc2VkO1xyXG5cdH0sIDIwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkKCkge1xyXG5cdHZhciB3b3JkID0gW107XHJcblx0dmFyIGFucyA9IFtdO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5d29yZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0d29yZFtpXSA9IFwiJiMxNjA7XCI7XHJcblx0fVxyXG5cclxuXHRhbnNbMF0gPSBPYmplY3QuYXNzaWduKHt9LCB3b3JkKTtcclxuXHRcclxuXHR2YXIgdGltZXMgPSBNYXRoLmNlaWwoTWF0aC5wb3coa2V5d29yZC5sZW5ndGgsIDEvMykpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspIHtcclxuXHRcdGxldCBuID0gZ2V0UmFuZG9tSW50KDAsIGtleXdvcmQubGVuZ3RoIC0gMSk7XHJcblx0XHRpZiAod29yZFtuXSA9PSBcIiYjMTYwO1wiKSB7XHJcblx0XHRcdHdvcmRbbl0gPSBrZXl3b3JkW25dO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aS0tO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YW5zWzFdID0gT2JqZWN0LmFzc2lnbih7fSwgd29yZCk7XHJcblx0XHJcblx0cmV0dXJuIGFucztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V29yZCh3b3JkKSB7XHJcblx0d29yZCA9IE9iamVjdC5rZXlzKHdvcmQpLm1hcChrZXkgPT4gd29yZFtrZXldKTtcclxuXHRsZXQgaHRtbCA9IFwiXCI7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRodG1sICs9IGA8bGkgY2xhc3M9XCJsZXR0ZXJcIj4ke3dvcmRbaV19PC9saT5gO1xyXG5cdH1cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tleXdvcmRcIikuaW5uZXJIVE1MID0gaHRtbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG59XHJcblxyXG4vL1NrZWxldG9uXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb24gKHJlY2VpdmVyKSB7XHJcblx0dmFyIGNvbmZpZ3VyYXRpb24gPSB7IFxyXG4gICAgIFx0XCJpY2VTZXJ2ZXJzXCI6IFt7IHVybDogW1wic3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMlwiXSB9XSAgXHJcbiBcdH07IFxyXG5cclxuXHRjb25uZWN0aW9uc1tyZWNlaXZlcl0gPSBbXTtcclxuIFx0Y29ubmVjdGlvbnNbcmVjZWl2ZXJdLnB1c2gobmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pKTtcclxuIFx0b3BlbkRhdGFDaGFubmVsKHJlY2VpdmVyKTtcclxuXHJcblx0Y29uc29sZS5sb2coXCJSVENQZWVyQ29ubmVjdGlvbiBvYmplY3Qgd2FzIGNyZWF0ZWQ6IFwiKTsgXHJcblx0Y29uc29sZS5sb2coY29ubmVjdGlvbnNbcmVjZWl2ZXJdWzBdKTtcclxuXHJcblx0Y29ubmVjdGlvbnNbcmVjZWl2ZXJdWzBdLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkNhbmRpZGF0ZSBjcmVhdGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGV2ZW50LmNhbmRpZGF0ZSkpO1xyXG4gICAgXHRpZiAoZXZlbnQuY2FuZGlkYXRlKSBcclxuICAgIFx0eyBcclxuXHQgICAgICAgIHNlbmQoeyBcclxuXHQgICAgICAgICAgIFx0dHlwZTogXCJjYW5kaWRhdGVcIixcclxuXHQgIFx0XHRcdGNsaWVudDogY2xpZW50Lm5hbWUsXHJcblx0ICBcdFx0XHRyZWNlaXZlcjogcmVjZWl2ZXIsXHJcblx0ICBcdFx0XHRyb29tOiBtYWlucm9vbS5uYW1lLFxyXG5cdCAgICBcdCAgIFx0Y2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGVcclxuXHQgICAgICAgIH0pO1xyXG4gICAgIFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbm5lY3Rpb25zW3JlY2VpdmVyXVswXS5vbmRhdGFjaGFubmVsID0gIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0ICBcdGV2ZW50LmNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHQgIFx0XHRjb25zb2xlLmxvZygnRGF0YSBjaGFubmVsIG9wZW4nKTtcclxuXHQgIFx0XHRpZiAoa2V5d29yZCAhPSBcIlwiKSB7XHJcblx0XHRcdFx0Y29ubmVjdGlvbnNbcmVjZWl2ZXJdWzFdLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzdGFydFwiLFxyXG5cdFx0XHRcdFx0dGltZTogbWFpbnJvb20udGltZVxyXG5cdFx0XHRcdH0pKTtcclxuXHJcblx0XHRcdFx0bGV0IGsgPSBtYWlucm9vbS50aW1lIC8gKG1haW5yb29tLnJvdW5kdGltZSAqIDEwMDApO1xyXG5cdFx0ICBcdFx0aWYgKGsgPj0gMC42KSB7XHJcblx0XHQgIFx0XHRcdGNvbm5lY3Rpb25zW3JlY2VpdmVyXVsxXS5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ3b3JkXCIsXHJcblx0XHRcdFx0XHRcdHdvcmQ6IG1haW5yb29tLndvcmRbMV1cclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdCAgXHRcdH0gZWxzZSBpZiAoayA+PSAwLjMpIHtcclxuXHRcdCAgXHRcdFx0Y29ubmVjdGlvbnNbcmVjZWl2ZXJdWzFdLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcIndvcmRcIixcclxuXHRcdFx0XHRcdFx0d29yZDogbWFpbnJvb20ud29yZFswXVxyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0ICBcdFx0fVxyXG5cdFx0XHR9XHJcblx0ICBcdH07XHJcblxyXG5cdCAgXHRldmVudC5jaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCl7XHJcblx0XHRcdGxldCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLnR5cGUgPT0gXCJtc2dcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBteWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0bXlkaXYuY2xhc3NOYW1lID0gXCJtZXNzYWdlXCI7XHJcblx0XHRcdFx0bXlkaXYuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtc2d0ZXh0XCI+PGIgY2xhc3M9XCJtc2dzZW5kZXJcIj4nICsgZGF0YS5jbGllbnQgKyBcIjogPC9iPlwiICsgZGF0YS50ZXh0ICsgXCI8L2Rpdj5cIjtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VzXCIpLnByZXBlbmQobXlkaXYpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChjbGllbnQubmFtZSA9PSBtYWlucm9vbS5ob3N0KSB7XHJcblx0XHRcdFx0XHRpZiAoZGF0YS50ZXh0ID09IGtleXdvcmQpIHtcclxuXHRcdFx0XHRcdFx0c2VuZCh7IFxyXG5cdFx0XHRcdCAgICAgICAgXHR0eXBlOiBcIndpblwiLFxyXG5cdFx0XHRcdCAgICAgICAgIFx0Y2xpZW50OiBjbGllbnQubmFtZSxcclxuXHRcdFx0XHQgIFx0XHRcdHJvb206IG1haW5yb29tLm5hbWUsXHJcblx0XHRcdFx0ICAgICAgICBcdHdpbm5lcjogZGF0YS5jbGllbnRcclxuXHRcdFx0XHQgICAgXHR9KTsgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGRhdGEudHlwZSA9PSBcInN0YXJ0XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyb3VuZHRpbWVyID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoZGF0YS50aW1lICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0YmFyQW5pbWF0aW9uU3RhcnQoZGF0YS50aW1lKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YmFyQW5pbWF0aW9uU3RhcnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZGF0YS50eXBlID09IFwid29yZFwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2V0V29yZChkYXRhLndvcmQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdCAgXHRcdFx0cmVwbGF5KGRhdGEpO1xyXG5cdCAgXHRcdH1cclxuXHQgIFx0fTtcclxuXHJcblx0fTtcclxuXHJcblxyXG5cdGNvbm5lY3Rpb25zW3JlY2VpdmVyXVswXS5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRkZWxldGUgY29ubmVjdGlvbnNbcmVjZWl2ZXJdO1xyXG5cdFx0Y29uc29sZS5sb2coXCJDb25lY3Rpb24gY2xvc2VkXCIpO1xyXG5cdH07XHJcblxyXG5cdC8qXHJcblx0Y29ubmVjdGlvbnNbcmVjZWl2ZXJdWzBdLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcdGlmKGNvbm5lY3Rpb25zW3JlY2VpdmVyXVswXS5pY2VDb25uZWN0aW9uU3RhdGUgPT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcclxuICAgIFx0XHRkZWxldGUgY29ubmVjdGlvbnNbcmVjZWl2ZXJdO1xyXG4gICAgXHRcdGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIGNsb3NlZCcpO1xyXG4gICAgXHR9XHJcblx0fTtcclxuXHQqL1xyXG5cclxuXHRyZXR1cm4gY29ubmVjdGlvbnNbcmVjZWl2ZXJdWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk9mZmVyKG9mZmVyLCBzZW5kZXIpIHtcclxuXHRjb25zb2xlLmxvZyhcIk9mZmVyIGZyb20gXCIgKyBzZW5kZXIgKyBcIiByZWNlaXZlZDogXCIgKyBKU09OLnN0cmluZ2lmeShvZmZlcikpO1xyXG5cdGNyZWF0ZUNvbihzZW5kZXIpO1xyXG5cdGNvbm5lY3Rpb25zW3NlbmRlcl1bMF0uc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihvZmZlcikpO1xyXG5cclxuXHRjb25uZWN0aW9uc1tzZW5kZXJdWzBdLmNyZWF0ZUFuc3dlcihmdW5jdGlvbiAoYW5zd2VyKSB7IFxyXG4gIFx0XHRjb25uZWN0aW9uc1tzZW5kZXJdWzBdLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKTsgXHJcbiAgICBcdHNlbmQoeyBcclxuICAgICAgICBcdHR5cGU6IFwiYW5zd2VyXCIsXHJcbiAgICAgICAgIFx0Y2xpZW50OiBjbGllbnQubmFtZSxcclxuICBcdFx0XHRyZWNlaXZlcjogc2VuZGVyLFxyXG4gIFx0XHRcdHJvb206IG1haW5yb29tLm5hbWUsXHJcbiAgICAgICAgXHRhbnN3ZXI6IGFuc3dlciBcclxuICAgIFx0fSk7IFxyXG5cdH0sIGZ1bmN0aW9uIChlcnJvcikgeyBcclxuICBcdFx0YWxlcnQoXCJvb3BzLi4uZXJyb3JcIik7XHJcbiAgXHRcdHJldHVybiB0cnVlOyBcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25BbnN3ZXIoYW5zd2VyLCBzZW5kZXIpIHtcclxuXHRjb25zb2xlLmxvZyhcIkFuc3dlciBmcm9tIFwiICsgc2VuZGVyICsgXCIgcmVjZWl2ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYW5zd2VyKSk7XHJcblx0Y29ubmVjdGlvbnNbc2VuZGVyXVswXS5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGFuc3dlcikpO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIG9uQ2FuZGlkYXRlKGNhbmRpZGF0ZSwgc2VuZGVyKSB7XHJcblx0Y29ubmVjdGlvbnNbc2VuZGVyXVswXS5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKTtcclxuXHRjb25zb2xlLmxvZyhcIkNhbmRpZGF0ZSBmcm9tIFwiICsgc2VuZGVyICsgXCIgcmVjZWl2ZWQgYW5kIGFkZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRGF0YUNoYW5uZWwoY2xpZW50KSB7IFxyXG5cdGNvbm5lY3Rpb25zW2NsaWVudF1bMV0gPSBjb25uZWN0aW9uc1tjbGllbnRdWzBdLmNyZWF0ZURhdGFDaGFubmVsKFwibXlEYXRhQ2hhbm5lbFwiKTtcclxuXHRjb25zb2xlLmxvZyhcIkRhdGEgY2hhbm5lbCBjcmVhdGVkXCIpO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0bG9jYXRpb24ucmVsb2FkKCk7IC8v0JLRgNC10LzQtdC90L3QvlxyXG5cdGNvbnNvbGUubG9nKFwiRXhpdCBmcm9tIHJvb20gXCIgKyBtYWlucm9vbS5uYW1lKTtcclxuXHRjbG9zZUNvbnMoKTtcclxuXHRzZW5kKHtcclxuXHQgICAgICBcdHR5cGU6IFwiZXhpdFwiLFxyXG5cdCAgICAgIFx0Y2xpZW50OiBjbGllbnQubmFtZSxcclxuXHQgICAgICBcdHJvb206IG1haW5yb29tLm5hbWVcclxuXHQgICBcdH0pO1xyXG5cdHJvdW5kdGltZXIgPSBmYWxzZTtcclxuXHRtYWlucm9vbS5uYW1lID0gdW5kZWZpbmVkO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbXBhZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVwYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OaWNrIHBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmlja2J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaWNrZm9ybVwiKS52YWx1ZS5sZW5ndGggPj0gMTUpXHJcblx0e1xyXG5cdFx0c2hvd05pY2tFcihcIi5uaWNrZm9ybVwiLCBcItCY0LzRjyDQvdC1INC00LvQuNC90L3QtdC1IDE1INGB0LjQvNCy0L7Qu9C+0LJcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmlja2Zvcm1cIikudmFsdWUgPT0gXCJcIilcclxuXHR7XHJcblx0XHRzaG93Tmlja0VyKFwiLm5pY2tmb3JtXCIsIFwi0JLQstC10LTQuNGC0LUg0LjQvNGPXCIpO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Y2xpZW50Lm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5pY2tmb3JtXCIpLnZhbHVlO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGNsaWVudC5uYW1lO1xyXG5cdFx0c2VuZCh7XHJcblx0ICAgICAgXHRcdHR5cGU6IFwibG9naW5cIixcclxuXHQgICAgICBcdFx0Y2xpZW50OiBjbGllbnQubmFtZVxyXG5cdCAgICB9KTtcclxuXHR9XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Sb29tIHBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbi8vQnV0dG9uc1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWlja3BsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0bG9jYXRpb24ucmVsb2FkKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWZyZXNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdGdldFJvb21zKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R3b3Jkc19jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHdvcmRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRsZXQgZSA9IG5ldyBFdmVudChcImNsaWNrXCIpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xhc3NpY1wiKS5kaXNwYXRjaEV2ZW50KGUpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kd29yZHNfYmFja2dyb3VuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHdvcmRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRsZXQgZSA9IG5ldyBFdmVudChcImNsaWNrXCIpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xhc3NpY1wiKS5kaXNwYXRjaEV2ZW50KGUpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9mb3JtX2lucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuXHRyZW1FcihcIi5wYXNzd29yZF9mb3JtX2lucHV0XCIpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfYmFja2dyb3VuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkX2Zvcm1faW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG5cdHJlbUVyKFwiLnBhc3N3b3JkX2Zvcm1faW5wdXRcIik7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF90ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R3b3Jkc19mb3JtX3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHdvcmRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZHdvcmRzX2Zvcm1faW5wdXRcIikudmFsdWUuc3BsaXQoLywgKnxcXG4rfCArL2cpKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvb210aXRsZWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb29tdGl0bGVmb3JtXCIpLnZhbHVlLmxlbmd0aCA+IDE3KVxyXG5cdHtcclxuXHRcdHNob3dFcihcIi5yb29tdGl0bGVmb3JtXCIsIFwi0J3QsNC30LLQsNC90LjQtSDQvdC1INC00LvQuNC90L3QtdC1IDE3INGB0LjQvNCy0L7Qu9C+0LJcIik7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRyZW1FcihcIi5yb29tdGl0bGVmb3JtXCIpO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21wYXNzd29yZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21wYXNzd29yZFwiKS52YWx1ZS5sZW5ndGggPiAxMClcclxuXHR7XHJcblx0XHRzaG93RXIoXCIjcm9vbXBhc3N3b3JkXCIsIFwi0J/QsNGA0L7Qu9GMINC90LUg0LTQu9C40L3QvdC10LUgMTAg0YHQuNC80LLQvtC70L7QslwiKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHJlbUVyKFwiI3Jvb21wYXNzd29yZFwiKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVyb29tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlcm9vbW1lbnVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FjY2VwdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVmdXNlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY2NlcHRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vbXRpdGxlZm9ybVwiKS52YWx1ZS5sZW5ndGggPT0gMClcclxuXHR7XHJcblx0XHRzaG93RXIoXCIucm9vbXRpdGxlZm9ybVwiLCBcItCj0LrQsNC20LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0LrQvtC80L3QsNGC0YtcIik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vbXRpdGxlZm9ybVwiKS52YWx1ZS5sZW5ndGggPiAxNSlcclxuXHR7XHJcblx0XHRzaG93RXIoXCIucm9vbXRpdGxlZm9ybVwiLCBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtSDQtNC70LjQvdC90LXQtSAxNSDRgdC40LzQstC+0LvQvtCyXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21wYXNzd29yZFwiKS52YWx1ZS5sZW5ndGggPiAxMClcclxuXHR7XHJcblx0XHRzaG93RXIoXCIjcm9vbXBhc3N3b3JkXCIsIFwi0J/QsNGA0L7Qu9GMINC90LUg0LTQu9C40L3QvdC10LUgMTAg0YHQuNC80LLQvtC70L7QslwiKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHZhciBtb2RlID0gXCJcIjtcclxuXHRcdHZhciB3b3JkcyA9IFtdO1xyXG5cdFx0dmFyIHJvb21uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb29tdGl0bGVmb3JtXCIpLnZhbHVlO1xyXG5cdFx0dmFyIG1heHJvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZHNcIikudmFsdWU7XHJcblx0XHR2YXIgcm91bmR0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZHRpbWVcIikudmFsdWU7XHJcblx0XHR2YXIgbWF4cGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4cGxheWVyc1wiKS52YWx1ZTtcclxuXHRcdHZhciBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbXBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdG1haW5yb29tLm5hbWUgPSByb29tbmFtZTtcclxuXHRcdG1haW5yb29tLm1heHJvdW5kID0gbWF4cm91bmQ7XHJcblx0XHRtYWlucm9vbS5yb3VuZHRpbWUgPSByb3VuZHRpbWU7XHJcblx0XHRtYWlucm9vbS5tYXhwbGF5ZXJzID0gbWF4cGxheWVycztcclxuXHRcdG1haW5yb29tLnNjb3JlW2NsaWVudC5uYW1lXSA9IDA7XHJcblx0XHRtYWlucm9vbS5yb3VuZCA9IDA7XHJcblxyXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaW9jbGFzc2ljXCIpLmNoZWNrZWQpXHJcblx0XHR7XHJcblx0XHRcdG1vZGUgPSBcImNsYXNzaWNcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bW9kZSA9IFwibW9kZGVkXCI7XHJcblx0XHRcdHdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R3b3Jkc19mb3JtX2lucHV0XCIpLnZhbHVlLnNwbGl0KC8sICp8XFxuK3wgKy9nKTtcclxuXHRcdFx0Y29uc29sZS5sb2cod29yZHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbmQoe1xyXG4gIFx0XHRcdHR5cGU6IFwiY3JlYXRlcm9vbVwiLFxyXG4gIFx0XHRcdGNsaWVudDogY2xpZW50Lm5hbWUsXHJcbiAgXHRcdFx0cm9vbTogcm9vbW5hbWUsXHJcbiAgXHRcdFx0bW9kZTogbW9kZSxcclxuICBcdFx0XHRyb3VuZHRpbWU6IHJvdW5kdGltZSxcclxuICBcdFx0XHRtYXhyb3VuZDogbWF4cm91bmQsXHJcbiAgXHRcdFx0bWF4cGxheWVyczogbWF4cGxheWVycyxcclxuICBcdFx0XHRwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgXHRcdFx0d29yZHM6IHdvcmRzXHJcblx0ICBcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZnVzZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZXJvb21tZW51XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FjY2VwdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWZ1c2VcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlcm9vbVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4cGxheWVyc19yZWR1Y2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4cGxheWVyc1wiKS52YWx1ZSA+IDIpXHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhwbGF5ZXJzXCIpLnZhbHVlIC09IDE7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4cGxheWVyc19pbmNyZWFzZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhwbGF5ZXJzXCIpLnZhbHVlICA8IDgpXHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhwbGF5ZXJzXCIpLnZhbHVlICsrO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kc19yZWR1Y2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm91bmRzXCIpLnZhbHVlID4gNSlcclxuXHR7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kc1wiKS52YWx1ZSAtPSAxO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kc19pbmNyZWFzZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZHNcIikudmFsdWUgIDwgNTApXHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZHNcIikudmFsdWUgKys7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm91bmR0aW1lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0ZXZlbnQudGFyZ2V0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlICUgMTAwMDtcclxuXHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlIDwgMjApXHJcblx0e1xyXG5cdFx0ZXZlbnQudGFyZ2V0LnZhbHVlID0gMjA7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA+IDcyMClcclxuXHR7XHJcblx0XHRldmVudC50YXJnZXQudmFsdWUgPSA3MjA7XHJcblx0fVxyXG5cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heHBsYXllcnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRldmVudC50YXJnZXQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUgJSAxMDA7XHJcblx0aWYgKGV2ZW50LnRhcmdldC52YWx1ZSA8IDIpXHJcblx0e1xyXG5cdFx0ZXZlbnQudGFyZ2V0LnZhbHVlID0gMjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID4gOClcclxuXHR7XHJcblx0XHRldmVudC50YXJnZXQudmFsdWUgPSA4O1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdGV2ZW50LnRhcmdldC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZSAlIDEwMDtcclxuXHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlIDwgNSlcclxuXHR7XHJcblx0XHRldmVudC50YXJnZXQudmFsdWUgPSA1O1xyXG5cdH1cclxuXHRlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUgPiA1MClcclxuXHR7XHJcblx0XHRldmVudC50YXJnZXQudmFsdWUgPSA1MDtcclxuXHR9XHJcblxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kZGVkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlclwiKS5zdHlsZS5sZWZ0ID0gNjYgKyBcInB4XCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGFzc2ljXCIpLnN0eWxlLmNvbG9yID0gXCIjNEM0QzRDXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RkZWRcIikuc3R5bGUuY29sb3IgPSBcIiNmZmZcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsYXNzaWNcIikuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RkZWRcIikuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R3b3Jkc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xhc3NpY1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZXJcIikuc3R5bGUubGVmdCA9IC0yICsgXCJweFwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xhc3NpY1wiKS5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kZGVkXCIpLnN0eWxlLmNvbG9yID0gXCIjNEM0QzRDXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGFzc2ljXCIpLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kZGVkXCIpLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG59KTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdhbWUgcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZ2Zvcm1cIikub25zdWJtaXQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdHZhciBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dG1lc3NhZ2VcIikudmFsdWU7XHJcblxyXG5cdGlmIChtZXNzYWdlID09IFwiXCIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2coXCJQbGVhc2UsIGVudGVyIG1lc3NhZ2VcIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZXQgbXlkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG15ZGl2LmNsYXNzTmFtZSA9IFwibWVzc2FnZVwiO1xyXG5cdG15ZGl2LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibXNndGV4dFwiPjxiIGNsYXNzPVwibXNnc2VuZGVyXCI+JyArIGNsaWVudC5uYW1lICsgXCI6IDwvYj5cIiArIG1lc3NhZ2UgKyBcIjwvZGl2PlwiO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZXNcIikucHJlcGVuZChteWRpdik7XHJcblxyXG5cdGZvciAobGV0IGNvbm5lY3QgaW4gY29ubmVjdGlvbnMpXHJcblx0e1xyXG5cdFx0Y29ubmVjdGlvbnNbY29ubmVjdF1bMV0uc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdHR5cGU6IFwibXNnXCIsXHJcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXHJcblx0XHRcdGNsaWVudDogY2xpZW50Lm5hbWVcclxuXHRcdH0pKTtcclxuXHR9XHJcbiAgXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0bWVzc2FnZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbmRtc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0dmFyIG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0bWVzc2FnZVwiKS52YWx1ZTtcclxuXHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRpZiAobWVzc2FnZSA9PSBcIlwiKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUubG9nKFwiUGxlYXNlLCBlbnRlciBtZXNzYWdlXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGV0IG15ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRteWRpdi5jbGFzc05hbWUgPSBcIm1lc3NhZ2VcIjtcclxuXHRteWRpdi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1zZ3RleHRcIj48YiBjbGFzcz1cIm1zZ3NlbmRlclwiPicgKyBjbGllbnQubmFtZSArIFwiOiA8L2I+XCIgKyBtZXNzYWdlICsgXCI8L2Rpdj5cIjtcclxuXHRjb25zb2xlLmxvZyhteWRpdik7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlc1wiKS5wcmVwZW5kKG15ZGl2KTtcclxuXHJcblx0Zm9yIChsZXQgY29ubmVjdCBpbiBjb25uZWN0aW9ucylcclxuXHR7XHJcblx0XHRjb25uZWN0aW9uc1tjb25uZWN0XVsxXS5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0dHlwZTogXCJtc2dcIixcclxuXHRcdFx0dGV4dDogbWVzc2FnZSxcclxuXHRcdFx0Y2xpZW50OiBjbGllbnQubmFtZVxyXG5cdFx0fSkpO1xyXG5cdH1cclxuICBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRtZXNzYWdlXCIpLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1GdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbmZ1bmN0aW9uIHNob3dFcihzZWxlY3RvciwgZXJyb3IsIGFib3ZlID0gdHJ1ZSkgXHJcbntcclxuXHRyZW1FcihzZWxlY3Rvcik7XHJcblxyXG5cdHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0ZWxlbS5jbGFzc05hbWUgKz0gXCIgZXJpbnB1dFwiO1xyXG5cdHZhciBjb29yZHMgPSBnZXRDb29yZHMoZWxlbSk7XHJcblxyXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRkaXYuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG5cdGRpdi5pbm5lckhUTUwgPSBlcnJvcjtcclxuXHRkaXYuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcblx0ZGl2LnN0eWxlLnBhZGRpbmdMZWZ0ID0gNSArIFwicHhcIjtcclxuXHRkaXYuc3R5bGUubGVmdCA9IGNvb3Jkcy5sZWZ0ICsgXCJweFwiO1xyXG5cclxuXHRpZiAoYWJvdmUpXHJcblx0e1xyXG5cdFx0ZGl2LnN0eWxlLnRvcCA9IGNvb3Jkcy50b3AgLSAxNCArIFwicHhcIjtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGRpdi5zdHlsZS50b3AgPSBjb29yZHMudG9wICsgNCArIFwicHhcIjtcclxuXHR9XHJcblxyXG5cdGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGl2LCBlbGVtLm5leHRFbGVtZW50U2libGluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOaWNrRXIoc2VsZWN0b3IsIGVycm9yLCBhYm92ZSA9IHRydWUpXHJcbntcclxuXHRyZW1FcihzZWxlY3Rvcik7XHJcblxyXG5cdHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0ZWxlbS5jbGFzc05hbWUgKz0gXCIgZXJpbnB1dFwiO1xyXG5cdHZhciBjb29yZHMgPSBnZXRDb29yZHMoZWxlbSk7XHJcblxyXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRkaXYuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG5cdGRpdi5pbm5lckhUTUwgPSBlcnJvcjtcclxuXHRkaXYuc3R5bGUud2lkdGggPSAxMDAgKyBcIiVcIjtcclxuXHJcblx0aWYgKGFib3ZlKVxyXG5cdHtcclxuXHRcdGRpdi5zdHlsZS50b3AgPSBjb29yZHMudG9wIC0gMTggKyBcInB4XCI7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRkaXYuc3R5bGUudG9wID0gY29vcmRzLnRvcCArIDQgKyBcInB4XCI7XHJcblx0fVxyXG5cclxuXHRlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgZWxlbS5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1FcihzZWxlY3Rvcilcclxue1xyXG5cdGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0aWYgKGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBudWxsKVxyXG5cdHtcclxuXHRcdGlmIChlbGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPT0gXCJlcnJvclwiKVxyXG5cdFx0e1xyXG5cdFx0XHRlbGVtLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKC8gP2VyaW5wdXQvZywgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcblx0dmFyIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHR2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xyXG5cdHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xyXG5cclxuXHR2YXIgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XHJcblx0dmFyIGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuXHR2YXIgdG9wID0gYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcDtcclxuXHR2YXIgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IHRvcCxcclxuXHRcdGxlZnQ6IGxlZnRcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQge21haW5yb29tfTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEvQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7QUFkQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9