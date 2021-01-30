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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/plugins.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/plugins.min.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/plugins.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_13__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_14__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_15__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*****************************************************************************
  ____                                  _____ _
 / ___|___  ___ _ __ ___   ___  ___    |_   _| |__   ___ _ __ ___   ___  ___
| |   / _ \/ __| '_ ` _ \ / _ \/ __|_____| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
| |__| (_) \__ \ | | | | | (_) \__ \_____| | | | | |  __/ | | | | |  __/\__ \
 \____\___/|___/_| |_| |_|\___/|___/     |_| |_| |_|\___|_| |_| |_|\___||___/

******************************************************************************/

/************ Plugins JS **************************************

    Template Name: Jury - Resume/Vcard Template
    Author: cosmos-themes
    Envato Profile: https://themeforest.net/user/cosmos-themes
    version: 1.0
    Copyright: 2018

****************************************************************/

/*========== Popper JS ==========*/
!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function n(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function o(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;

      case "#document":
        return e.body;
    }

    var r = t(e),
        i = r.overflow,
        s = r.overflowX,
        f = r.overflowY;
    return /(auto|scroll|overlay)/.test(i + f + s) ? e : o(n(e));
  }

  function r(e) {
    return 11 === e ? q : 10 === e ? z : q || z;
  }

  function i(e) {
    if (!e) return document.documentElement;

    for (var n = r(10) ? document.body : null, o = e.offsetParent; o === n && e.nextElementSibling;) {
      o = (e = e.nextElementSibling).offsetParent;
    }

    var s = o && o.nodeName;
    return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) && "static" === t(o, "position") ? i(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }

  function f(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        o = n ? e : t,
        r = n ? t : e,
        a = document.createRange();
    a.setStart(o, 0), a.setEnd(r, 0);
    var p,
        l,
        u = a.commonAncestorContainer;
    if (e !== u && t !== u || o.contains(r)) return p = u, l = p.nodeName, "BODY" === l || "HTML" !== l && i(p.firstElementChild) !== p ? i(u) : u;
    var d = s(e);
    return d.host ? f(d.host, t) : f(e, s(t).host);
  }

  function a(e) {
    var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var o = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || o)[t];
    }

    return e[t];
  }

  function p(e, t) {
    var n = "x" === t ? "Left" : "Top",
        o = "Left" == n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10);
  }

  function l(e, t, n, o) {
    return W(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? n["offset" + e] + o["margin" + ("Height" === e ? "Top" : "Left")] + o["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }

  function u() {
    var e = document.body,
        t = document.documentElement,
        n = r(10) && getComputedStyle(t);
    return {
      height: l("Height", e, t, n),
      width: l("Width", e, t, n)
    };
  }

  function d(e) {
    return X({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function c(e) {
    var n = {};

    try {
      if (r(10)) {
        n = e.getBoundingClientRect();
        var o = a(e, "top"),
            i = a(e, "left");
        n.top += o, n.left += i, n.bottom += o, n.right += i;
      } else n = e.getBoundingClientRect();
    } catch (e) {}

    var s = {
      left: n.left,
      top: n.top,
      width: n.right - n.left,
      height: n.bottom - n.top
    },
        f = "HTML" === e.nodeName ? u() : {},
        l = f.width || e.clientWidth || s.right - s.left,
        c = f.height || e.clientHeight || s.bottom - s.top,
        h = e.offsetWidth - l,
        m = e.offsetHeight - c;

    if (h || m) {
      var g = t(e);
      h -= p(g, "x"), m -= p(g, "y"), s.width -= h, s.height -= m;
    }

    return d(s);
  }

  function h(e, n) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = r(10),
        f = "HTML" === n.nodeName,
        p = c(e),
        l = c(n),
        u = o(e),
        h = t(n),
        m = parseFloat(h.borderTopWidth, 10),
        g = parseFloat(h.borderLeftWidth, 10);
    i && "HTML" === n.nodeName && (l.top = W(l.top, 0), l.left = W(l.left, 0));
    var v = d({
      top: p.top - l.top - m,
      left: p.left - l.left - g,
      width: p.width,
      height: p.height
    });

    if (v.marginTop = 0, v.marginLeft = 0, !s && f) {
      var b = parseFloat(h.marginTop, 10),
          w = parseFloat(h.marginLeft, 10);
      v.top -= m - b, v.bottom -= m - b, v.left -= g - w, v.right -= g - w, v.marginTop = b, v.marginLeft = w;
    }

    return (s && !i ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (v = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          o = a(t, "top"),
          r = a(t, "left"),
          i = n ? -1 : 1;
      return e.top += o * i, e.bottom += o * i, e.left += r * i, e.right += r * i, e;
    }(v, n)), v;
  }

  function m(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var n = e.parentElement; n && "none" === t(n, "transform");) {
      n = n.parentElement;
    }

    return n || document.documentElement;
  }

  function g(e, r, i, s) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        l = {
      top: 0,
      left: 0
    },
        c = p ? m(e) : f(e, r);
    if ("viewport" === s) l = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          o = h(e, n),
          r = W(n.clientWidth, window.innerWidth || 0),
          i = W(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : a(n),
          f = t ? 0 : a(n, "left");
      return d({
        top: s - o.top + o.marginTop,
        left: f - o.left + o.marginLeft,
        width: r,
        height: i
      });
    }(c, p);else {
      var g;
      "scrollParent" === s ? "BODY" === (g = o(n(r))).nodeName && (g = e.ownerDocument.documentElement) : g = "window" === s ? e.ownerDocument.documentElement : s;
      var v = h(g, c, p);
      if ("HTML" !== g.nodeName || function e(o) {
        var r = o.nodeName;
        return "BODY" !== r && "HTML" !== r && ("fixed" === t(o, "position") || e(n(o)));
      }(c)) l = v;else {
        var b = u(),
            w = b.height,
            y = b.width;
        l.top += v.top - v.marginTop, l.bottom = w + v.top, l.left += v.left - v.marginLeft, l.right = y + v.left;
      }
    }
    return l.left += i, l.top += i, l.right -= i, l.bottom -= i, l;
  }

  function v(e, t, n, o, r) {
    var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = g(n, o, i, r),
        f = {
      top: {
        width: s.width,
        height: t.top - s.top
      },
      right: {
        width: s.right - t.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - t.bottom
      },
      left: {
        width: t.left - s.left,
        height: s.height
      }
    },
        a = Object.keys(f).map(function (e) {
      return X({
        key: e
      }, f[e], {
        area: (t = f[e], t.width * t.height)
      });
      var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        p = a.filter(function (e) {
      var t = e.width,
          o = e.height;
      return t >= n.clientWidth && o >= n.clientHeight;
    }),
        l = 0 < p.length ? p[0].key : a[0].key,
        u = e.split("-")[1];
    return l + (u ? "-" + u : "");
  }

  function b(e, t, n) {
    var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return h(n, o ? m(t) : f(t, n), o);
  }

  function w(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        o = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {
      width: e.offsetWidth + o,
      height: e.offsetHeight + n
    };
  }

  function y(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function E(e, t, n) {
    n = n.split("-")[0];
    var o = w(e),
        r = {
      width: o.width,
      height: o.height
    },
        i = -1 !== ["right", "left"].indexOf(n),
        s = i ? "top" : "left",
        f = i ? "left" : "top",
        a = i ? "height" : "width",
        p = i ? "width" : "height";
    return r[s] = t[s] + t[a] / 2 - o[a] / 2, r[f] = n === f ? t[f] - o[p] : t[y(f)], r;
  }

  function x(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function O(t, n, o) {
    return (void 0 === o ? t : t.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var o = x(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(o);
    }(t, "name", o))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var o = t["function"] || t.fn;
      t.enabled && e(o) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = o(n, t));
    }), n;
  }

  function L(e, t) {
    return e.some(function (e) {
      var n = e.name;
      return e.enabled && n === t;
    });
  }

  function T(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
      var r = t[o],
          i = r ? "" + r + n : e;
      if (void 0 !== document.body.style[i]) return i;
    }

    return null;
  }

  function D(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function N(e, t, n, r) {
    n.updateBound = r, D(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var i = o(e);
    return function e(t, n, r, i) {
      var s = "BODY" === t.nodeName,
          f = s ? t.ownerDocument.defaultView : t;
      f.addEventListener(n, r, {
        passive: !0
      }), s || e(o(f.parentNode), n, r, i), i.push(f);
    }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
  }

  function F() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, D(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }

  function k(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function C(e, t) {
    Object.keys(t).forEach(function (n) {
      var o = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && k(t[n]) && (o = "px"), e.style[n] = t[n] + o;
    });
  }

  function H(e, t, n) {
    var o = x(e, function (e) {
      return e.name === t;
    }),
        r = !!o && e.some(function (e) {
      return e.name === n && e.enabled && e.order < o.order;
    });

    if (!r) {
      var i = "`" + t + "`";
      console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
    }

    return r;
  }

  function S(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = K.indexOf(e),
        o = K.slice(n + 1).concat(K.slice(0, n));
    return t ? o.reverse() : o;
  }

  function A(e, t, n, o) {
    var r = [0, 0],
        i = -1 !== ["right", "left"].indexOf(o),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        f = s.indexOf(x(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    s[f] && -1 === s[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var a = /\s*,\s*|\s+/,
        p = -1 === f ? [s] : [s.slice(0, f).concat([s[f].split(a)[0]]), [s[f].split(a)[1]].concat(s.slice(f + 1))];
    return (p = p.map(function (e, o) {
      var r = (1 === o ? !i : i) ? "height" : "width",
          s = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, o) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              i = +r[1],
              s = r[2];
          if (!i) return e;

          if (0 === s.indexOf("%")) {
            var f;

            switch (s) {
              case "%p":
                f = n;
                break;

              case "%":
              case "%r":
              default:
                f = o;
            }

            return d(f)[t] / 100 * i;
          }

          return "vh" === s || "vw" === s ? ("vh" === s ? W(document.documentElement.clientHeight, window.innerHeight || 0) : W(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i;
        }(e, r, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, o) {
        k(n) && (r[t] += n * ("-" === e[o - 1] ? -1 : 1));
      });
    }), r;
  }

  for (var B = Math.min, M = Math.round, P = Math.floor, W = Math.max, j = "undefined" != typeof window && "undefined" != typeof document, R = ["Edge", "Trident", "Firefox"], I = 0, U = 0; U < R.length; U += 1) {
    if (j && 0 <= navigator.userAgent.indexOf(R[U])) {
      I = 1;
      break;
    }
  }

  var Y = j && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, I));
    };
  },
      q = j && !(!window.MSInputMethodContext || !document.documentMode),
      z = j && /MSIE 10/.test(navigator.userAgent),
      G = function G(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      V = function () {
    function e(e, t) {
      for (var n, o = 0; o < t.length; o++) {
        n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      _ = function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  },
      X = Object.assign || function (e) {
    for (var t, n = 1; n < arguments.length; n++) {
      for (var o in t = arguments[n], t) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }

    return e;
  },
      J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      K = J.slice(3),
      Q = "flip",
      Z = "clockwise",
      $ = "counterclockwise",
      ee = function () {
    function t(n, o) {
      var r = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      G(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(r.update);
      }, this.update = Y(this.update.bind(this)), this.options = X({}, t.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = n && n.jquery ? n[0] : n, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, i.modifiers)).forEach(function (e) {
        r.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return X({
          name: e
        }, r.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
      }), this.update();
      var s = this.options.eventsEnabled;
      s && this.enableEventListeners(), this.state.eventsEnabled = s;
    }

    return V(t, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            e.offsets.reference = b(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = E(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[T("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return F.call(this);
      }
    }]), t;
  }();

  return ee.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ee.placements = J, ee.Defaults = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              o = t.split("-")[1];

          if (o) {
            var r = e.offsets,
                i = r.reference,
                s = r.popper,
                f = -1 !== ["bottom", "top"].indexOf(n),
                a = f ? "left" : "top",
                p = f ? "width" : "height",
                l = {
              start: _({}, a, i[a]),
              end: _({}, a, i[a] + i[p] - s[p])
            };
            e.offsets.popper = X({}, s, l[o]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var n,
              o = t.offset,
              r = e.placement,
              i = e.offsets,
              s = i.popper,
              f = i.reference,
              a = r.split("-")[0];
          return n = k(+o) ? [+o, 0] : A(o, s, f, a), "left" === a ? (s.top += n[0], s.left -= n[1]) : "right" === a ? (s.top += n[0], s.left += n[1]) : "top" === a ? (s.left += n[0], s.top -= n[1]) : "bottom" === a && (s.left += n[0], s.top += n[1]), e.popper = s, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.boundariesElement || i(e.instance.popper);
          e.instance.reference === n && (n = i(n));
          var o = T("transform"),
              r = e.instance.popper.style,
              s = r.top,
              f = r.left,
              a = r[o];
          r.top = "", r.left = "", r[o] = "";
          var p = g(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
          r.top = s, r.left = f, r[o] = a, t.boundaries = p;
          var l = t.priority,
              u = e.offsets.popper,
              d = {
            primary: function primary(e) {
              var n = u[e];
              return u[e] < p[e] && !t.escapeWithReference && (n = W(u[e], p[e])), _({}, e, n);
            },
            secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  o = u[n];
              return u[e] > p[e] && !t.escapeWithReference && (o = B(u[n], p[e] - ("right" === e ? u.width : u.height))), _({}, n, o);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
            u = X({}, u, d[t](e));
          }), e.offsets.popper = u, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              o = t.reference,
              r = e.placement.split("-")[0],
              i = P,
              s = -1 !== ["top", "bottom"].indexOf(r),
              f = s ? "right" : "bottom",
              a = s ? "left" : "top",
              p = s ? "width" : "height";
          return n[f] < i(o[a]) && (e.offsets.popper[a] = i(o[a]) - n[p]), n[a] > i(o[f]) && (e.offsets.popper[a] = i(o[f])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, n) {
          var o;
          if (!H(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var r = n.element;

          if ("string" == typeof r) {
            if (!(r = e.instance.popper.querySelector(r))) return e;
          } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;

          var i = e.placement.split("-")[0],
              s = e.offsets,
              f = s.popper,
              a = s.reference,
              p = -1 !== ["left", "right"].indexOf(i),
              l = p ? "height" : "width",
              u = p ? "Top" : "Left",
              c = u.toLowerCase(),
              h = p ? "left" : "top",
              m = p ? "bottom" : "right",
              g = w(r)[l];
          a[m] - g < f[c] && (e.offsets.popper[c] -= f[c] - (a[m] - g)), a[c] + g > f[m] && (e.offsets.popper[c] += a[c] + g - f[m]), e.offsets.popper = d(e.offsets.popper);
          var v = a[c] + a[l] / 2 - g / 2,
              b = t(e.instance.popper),
              y = parseFloat(b["margin" + u], 10),
              E = parseFloat(b["border" + u + "Width"], 10),
              x = v - e.offsets.popper[c] - y - E;
          return x = W(B(f[l] - g, x), 0), e.arrowElement = r, e.offsets.arrow = (_(o = {}, c, M(x)), _(o, h, ""), o), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (L(e.instance.modifiers, "inner")) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var n = g(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              o = e.placement.split("-")[0],
              r = y(o),
              i = e.placement.split("-")[1] || "",
              s = [];

          switch (t.behavior) {
            case Q:
              s = [o, r];
              break;

            case Z:
              s = S(o);
              break;

            case $:
              s = S(o, !0);
              break;

            default:
              s = t.behavior;
          }

          return s.forEach(function (f, a) {
            if (o !== f || s.length === a + 1) return e;
            o = e.placement.split("-")[0], r = y(o);
            var p,
                l = e.offsets.popper,
                u = e.offsets.reference,
                d = P,
                c = "left" === o && d(l.right) > d(u.left) || "right" === o && d(l.left) < d(u.right) || "top" === o && d(l.bottom) > d(u.top) || "bottom" === o && d(l.top) < d(u.bottom),
                h = d(l.left) < d(n.left),
                m = d(l.right) > d(n.right),
                g = d(l.top) < d(n.top),
                v = d(l.bottom) > d(n.bottom),
                b = "left" === o && h || "right" === o && m || "top" === o && g || "bottom" === o && v,
                w = -1 !== ["top", "bottom"].indexOf(o),
                x = !!t.flipVariations && (w && "start" === i && h || w && "end" === i && m || !w && "start" === i && g || !w && "end" === i && v);
            (c || b || x) && (e.flipped = !0, (c || b) && (o = s[a + 1]), x && (i = "end" === (p = i) ? "start" : "start" === p ? "end" : p), e.placement = o + (i ? "-" + i : ""), e.offsets.popper = X({}, e.offsets.popper, E(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"));
          }), e;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              o = e.offsets,
              r = o.popper,
              i = o.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              f = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = i[n] - (f ? r[s ? "width" : "height"] : 0), e.placement = y(t), e.offsets.popper = d(r), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!H(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
              n = x(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;

          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.x,
              o = t.y,
              r = e.offsets.popper,
              s = x(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
          void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var f,
              a,
              p = void 0 === s ? t.gpuAcceleration : s,
              l = c(i(e.instance.popper)),
              u = {
            position: r.position
          },
              d = {
            left: P(r.left),
            top: M(r.top),
            bottom: M(r.bottom),
            right: P(r.right)
          },
              h = "bottom" === n ? "top" : "bottom",
              m = "right" === o ? "left" : "right",
              g = T("transform");
          if (a = "bottom" == h ? -l.height + d.bottom : d.top, f = "right" == m ? -l.width + d.right : d.left, p && g) u[g] = "translate3d(" + f + "px, " + a + "px, 0)", u[h] = 0, u[m] = 0, u.willChange = "transform";else {
            var v = "bottom" == h ? -1 : 1,
                b = "right" == m ? -1 : 1;
            u[h] = a * v, u[m] = f * b, u.willChange = h + ", " + m;
          }
          var w = {
            "x-placement": e.placement
          };
          return e.attributes = X({}, w, e.attributes), e.styles = X({}, u, e.styles), e.arrowStyles = X({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return C(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e]);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && C(e.arrowElement, e.arrowStyles), e;
          var t, n;
        },
        onLoad: function onLoad(e, t, n, o, r) {
          var i = b(r, t, e, n.positionFixed),
              s = v(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), C(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  }, ee;
});
/*========== Bootstrap JS ==========*/

!function (t, e) {
   true ? e(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) : undefined;
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function r(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      }))), i.forEach(function (e) {
        var i, r, o;
        i = t, o = n[r = e], r in i ? Object.defineProperty(i, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[r] = o;
      });
    }

    return t;
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, n = n && n.hasOwnProperty("default") ? n["default"] : n;

  var s,
      a,
      l,
      c,
      h,
      u,
      f,
      d,
      g,
      _,
      m,
      p,
      v,
      y,
      E,
      C,
      T,
      b,
      S,
      I,
      A,
      D,
      w,
      N,
      O,
      k,
      P,
      j,
      H,
      L,
      R,
      x,
      W,
      U,
      q,
      F,
      K,
      M,
      Q,
      B,
      V,
      Y,
      z,
      J,
      Z,
      G,
      $,
      X,
      tt,
      et,
      nt,
      it,
      rt,
      ot,
      st,
      at,
      lt,
      ct,
      ht,
      ut,
      ft,
      dt,
      gt,
      _t,
      mt,
      pt,
      vt,
      yt,
      Et,
      Ct,
      Tt,
      bt,
      St,
      It,
      At,
      Dt,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      jt,
      Ht,
      Lt,
      Rt,
      xt,
      Wt,
      Ut,
      qt,
      Ft,
      Kt,
      Mt,
      Qt,
      Bt,
      Vt,
      Yt,
      zt,
      Jt,
      Zt,
      Gt,
      $t,
      Xt,
      te,
      ee,
      ne,
      ie,
      re,
      oe,
      se,
      ae,
      le,
      ce,
      he,
      ue,
      fe,
      de,
      ge,
      _e,
      me,
      pe,
      ve,
      ye,
      Ee,
      Ce,
      Te,
      be,
      Se,
      Ie,
      Ae,
      De,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      je,
      He,
      Le,
      Re,
      xe,
      We,
      Ue,
      qe,
      Fe,
      Ke,
      Me,
      Qe,
      Be,
      Ve,
      Ye,
      ze,
      Je,
      Ze,
      Ge,
      $e,
      Xe,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      hn,
      un,
      fn,
      dn,
      gn,
      _n,
      mn,
      pn,
      vn,
      yn,
      En,
      Cn,
      Tn,
      bn,
      Sn,
      In,
      An,
      Dn,
      wn,
      Nn,
      On,
      kn = function (t) {
    var e = "transitionend";
    var n = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
          ;
        }

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");

        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
        if (!e) return 0;
        var n = t(e).css("transition-duration");
        return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, i) {
        for (var r in i) {
          if (Object.prototype.hasOwnProperty.call(i, r)) {
            var o = i[r],
                s = e[r],
                a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
          }
        }

        var l;
      }
    };
    return t.fn.emulateTransitionEnd = function (e) {
      var i = this,
          r = !1;
      return t(this).one(n.TRANSITION_END, function () {
        r = !0;
      }), setTimeout(function () {
        r || n.triggerTransitionEnd(i);
      }, e), this;
    }, t.event.special[n.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }, n;
  }(e),
      Pn = (a = "alert", c = "." + (l = "bs.alert"), h = (s = e).fn[a], u = {
    CLOSE: "close" + c,
    CLOSED: "closed" + c,
    CLICK_DATA_API: "click" + c + ".data-api"
  }, f = "alert", d = "fade", g = "show", _ = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      s.removeData(this._element, l), this._element = null;
    }, e._getRootElement = function (t) {
      var e = kn.getSelectorFromElement(t),
          n = !1;
      return e && (n = document.querySelector(e)), n || (n = s(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = s.Event(u.CLOSE);
      return s(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;

      if (s(t).removeClass(g), s(t).hasClass(d)) {
        var n = kn.getTransitionDurationFromElement(t);
        s(t).one(kn.TRANSITION_END, function (n) {
          return e._destroyElement(t, n);
        }).emulateTransitionEnd(n);
      } else this._destroyElement(t);
    }, e._destroyElement = function (t) {
      s(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = s(this),
            i = n.data(l);
        i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), t;
  }(), s(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), s.fn[a] = _._jQueryInterface, s.fn[a].Constructor = _, s.fn[a].noConflict = function () {
    return s.fn[a] = h, _._jQueryInterface;
  }, _),
      jn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", "btn", S = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', A = "input", D = ".active", w = ".btn", N = {
    CLICK_DATA_API: "click" + y + E,
    FOCUS_BLUR_DATA_API: (b = "focus") + y + E + " blur" + y + E
  }, O = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(I)[0];

      if (n) {
        var i = this._element.querySelector(A);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(T)) t = !1;else {
            var r = n.querySelector(D);
            r && m(r).removeClass(T);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(T), m(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T);
    }, e.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = m(this).data(v);
        n || (n = new t(this), m(this).data(v, n)), "toggle" === e && n[e]();
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), t;
  }(), m(document).on(N.CLICK_DATA_API, S, function (t) {
    t.preventDefault();
    var e = t.target;
    m(e).hasClass("btn") || (e = m(e).closest(w)), O._jQueryInterface.call(m(e), "toggle");
  }).on(N.FOCUS_BLUR_DATA_API, S, function (t) {
    var e = m(t.target).closest(w)[0];
    m(e).toggleClass(b, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = O._jQueryInterface, m.fn[p].Constructor = O, m.fn[p].noConflict = function () {
    return m.fn[p] = C, O._jQueryInterface;
  }, O),
      Hn = (P = "carousel", H = "." + (j = "bs.carousel"), L = ".data-api", R = (k = e).fn[P], x = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, W = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, U = "next", q = "prev", F = "left", K = "right", M = {
    SLIDE: "slide" + H,
    SLID: "slid" + H,
    KEYDOWN: "keydown" + H,
    MOUSEENTER: "mouseenter" + H,
    MOUSELEAVE: "mouseleave" + H,
    TOUCHEND: "touchend" + H,
    LOAD_DATA_API: "load" + H + L,
    CLICK_DATA_API: "click" + H + L
  }, Q = "carousel", B = "active", V = "slide", Y = "carousel-item-right", z = "carousel-item-left", J = "carousel-item-next", Z = "carousel-item-prev", G = ".active", $ = ".active.carousel-item", X = ".carousel-item", tt = ".carousel-item-next, .carousel-item-prev", et = ".carousel-indicators", nt = "[data-slide], [data-slide-to]", it = '[data-ride="carousel"]', rt = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = this._element.querySelector(et), this._addEventListeners();
    }

    var e = t.prototype;
    return e.next = function () {
      this._isSliding || this._slide(U);
    }, e.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(q);
    }, e.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(tt) && (kn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector($);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(M.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? U : q;

        this._slide(i, this._items[t]);
      }
    }, e.dispose = function () {
      k(this._element).off(H), k.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (t) {
      return t = o({}, x, t), kn.typeCheckConfig(P, t, W), t;
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && k(this._element).on(M.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (k(this._element).on(M.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(M.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), "ontouchstart" in document.documentElement && k(this._element).on(M.TOUCHEND, function () {
        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval);
      }));
    }, e._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(X)) : [], this._items.indexOf(t);
    }, e._getItemByDirection = function (t, e) {
      var n = t === U,
          i = t === q,
          r = this._getItemIndex(e),
          o = this._items.length - 1;

      if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
      var s = (r + (t === q ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector($)),
          r = k.Event(M.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return k(this._element).trigger(r), r;
    }, e._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(G));
        k(e).removeClass(B);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && k(n).addClass(B);
      }
    }, e._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = this._element.querySelector($),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (t === U ? (n = z, i = J, r = F) : (n = Y, i = Z, r = K), l && k(l).hasClass(B)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = k.Event(M.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: c
        });

        if (k(this._element).hasClass(V)) {
          k(l).addClass(i), kn.reflow(l), k(s).addClass(n), k(l).addClass(n);
          var f = kn.getTransitionDurationFromElement(s);
          k(s).one(kn.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(B), k(s).removeClass(B + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else k(s).removeClass(B), k(l).addClass(B), this._isSliding = !1, k(this._element).trigger(u);

        h && this.cycle();
      }
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this).data(j),
            i = o({}, x, k(this).data());
        "object" == typeof e && (i = o({}, i, e));
        var r = "string" == typeof e ? e : i.slide;
        if (n || (n = new t(this, i), k(this).data(j, n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
          n[r]();
        } else i.interval && (n.pause(), n.cycle());
      });
    }, t._dataApiClickHandler = function (e) {
      var n = kn.getSelectorFromElement(this);

      if (n) {
        var i = k(n)[0];

        if (i && k(i).hasClass(Q)) {
          var r = o({}, k(i).data(), k(this).data()),
              s = this.getAttribute("data-slide-to");
          s && (r.interval = !1), t._jQueryInterface.call(k(i), r), s && k(i).data(j).to(s), e.preventDefault();
        }
      }
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return x;
      }
    }]), t;
  }(), k(document).on(M.CLICK_DATA_API, nt, rt._dataApiClickHandler), k(window).on(M.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(it)), e = 0, n = t.length; e < n; e++) {
      var i = k(t[e]);

      rt._jQueryInterface.call(i, i.data());
    }
  }), k.fn[P] = rt._jQueryInterface, k.fn[P].Constructor = rt, k.fn[P].noConflict = function () {
    return k.fn[P] = R, rt._jQueryInterface;
  }, rt),
      Ln = (st = "collapse", lt = "." + (at = "bs.collapse"), ct = (ot = e).fn[st], ht = {
    toggle: !0,
    parent: ""
  }, ut = {
    toggle: "boolean",
    parent: "(string|element)"
  }, ft = {
    SHOW: "show" + lt,
    SHOWN: "shown" + lt,
    HIDE: "hide" + lt,
    HIDDEN: "hidden" + lt,
    CLICK_DATA_API: "click" + lt + ".data-api"
  }, dt = "show", gt = "collapse", _t = "collapsing", mt = "collapsed", pt = "width", "height", vt = ".show, .collapsing", yt = '[data-toggle="collapse"]', Et = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = ot.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(yt)), i = 0, r = n.length; i < r; i++) {
        var o = n[i],
            s = kn.getSelectorFromElement(o),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
          return e === t;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = t.prototype;
    return e.toggle = function () {
      ot(this._element).hasClass(dt) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          n,
          i = this;

      if (!(this._isTransitioning || ot(this._element).hasClass(dt) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(vt)).filter(function (t) {
        return t.getAttribute("data-parent") === i._config.parent;
      })).length && (e = null), e && (n = ot(e).not(this._selector).data(at)) && n._isTransitioning))) {
        var r = ot.Event(ft.SHOW);

        if (ot(this._element).trigger(r), !r.isDefaultPrevented()) {
          e && (t._jQueryInterface.call(ot(e).not(this._selector), "hide"), n || ot(e).data(at, null));

          var o = this._getDimension();

          ot(this._element).removeClass(gt).addClass(_t), this._element.style[o] = 0, this._triggerArray.length && ot(this._triggerArray).removeClass(mt).attr("aria-expanded", !0), this.setTransitioning(!0);
          var s = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              a = kn.getTransitionDurationFromElement(this._element);
          ot(this._element).one(kn.TRANSITION_END, function () {
            ot(i._element).removeClass(_t).addClass(gt).addClass(dt), i._element.style[o] = "", i.setTransitioning(!1), ot(i._element).trigger(ft.SHOWN);
          }).emulateTransitionEnd(a), this._element.style[o] = this._element[s] + "px";
        }
      }
    }, e.hide = function () {
      var t = this;

      if (!this._isTransitioning && ot(this._element).hasClass(dt)) {
        var e = ot.Event(ft.HIDE);

        if (ot(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", kn.reflow(this._element), ot(this._element).addClass(_t).removeClass(gt).removeClass(dt);
          var i = this._triggerArray.length;
          if (0 < i) for (var r = 0; r < i; r++) {
            var o = this._triggerArray[r],
                s = kn.getSelectorFromElement(o);
            null !== s && (ot([].slice.call(document.querySelectorAll(s))).hasClass(dt) || ot(o).addClass(mt).attr("aria-expanded", !1));
          }
          this.setTransitioning(!0), this._element.style[n] = "";
          var a = kn.getTransitionDurationFromElement(this._element);
          ot(this._element).one(kn.TRANSITION_END, function () {
            t.setTransitioning(!1), ot(t._element).removeClass(_t).addClass(gt).trigger(ft.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, e.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, e.dispose = function () {
      ot.removeData(this._element, at), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (t) {
      return (t = o({}, ht, t)).toggle = Boolean(t.toggle), kn.typeCheckConfig(st, t, ut), t;
    }, e._getDimension = function () {
      return ot(this._element).hasClass(pt) ? pt : "height";
    }, e._getParent = function () {
      var e = this,
          n = null;
      kn.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
      var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(n.querySelectorAll(i));
      return ot(r).each(function (n, i) {
        e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
      }), n;
    }, e._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = ot(t).hasClass(dt);
        e.length && ot(e).toggleClass(mt, !n).attr("aria-expanded", n);
      }
    }, t._getTargetFromElement = function (t) {
      var e = kn.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = ot(this),
            i = n.data(at),
            r = o({}, ht, n.data(), "object" == typeof e && e ? e : {});

        if (!i && r.toggle && /show|hide/.test(e) && (r.toggle = !1), i || (i = new t(this, r), n.data(at, i)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
          i[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return ht;
      }
    }]), t;
  }(), ot(document).on(ft.CLICK_DATA_API, yt, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var e = ot(this),
        n = kn.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(n));
    ot(i).each(function () {
      var t = ot(this),
          n = t.data(at) ? "toggle" : e.data();

      Et._jQueryInterface.call(t, n);
    });
  }), ot.fn[st] = Et._jQueryInterface, ot.fn[st].Constructor = Et, ot.fn[st].noConflict = function () {
    return ot.fn[st] = ct, Et._jQueryInterface;
  }, Et),
      Rn = (Tt = "dropdown", St = "." + (bt = "bs.dropdown"), It = ".data-api", At = (Ct = e).fn[Tt], Dt = new RegExp("38|40|27"), wt = {
    HIDE: "hide" + St,
    HIDDEN: "hidden" + St,
    SHOW: "show" + St,
    SHOWN: "shown" + St,
    CLICK: "click" + St,
    CLICK_DATA_API: "click" + St + It,
    KEYDOWN_DATA_API: "keydown" + St + It,
    KEYUP_DATA_API: "keyup" + St + It
  }, Nt = "disabled", Ot = "show", "dropup", kt = "dropright", Pt = "dropleft", jt = "dropdown-menu-right", Ht = "position-static", Lt = '[data-toggle="dropdown"]', Rt = ".dropdown form", xt = ".dropdown-menu", Wt = ".navbar-nav", Ut = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", qt = "top-start", Ft = "top-end", Kt = "bottom-start", Mt = "bottom-end", Qt = "right-start", Bt = "left-start", Vt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Yt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, zt = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = t.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !Ct(this._element).hasClass(Nt)) {
        var e = t._getParentFromElement(this._element),
            i = Ct(this._menu).hasClass(Ot);

        if (t._clearMenus(), !i) {
          var r = {
            relatedTarget: this._element
          },
              o = Ct.Event(wt.SHOW, r);

          if (Ct(e).trigger(o), !o.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var s = this._element;
              "parent" === this._config.reference ? s = e : kn.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && Ct(e).addClass(Ht), this._popper = new n(s, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === Ct(e).closest(Wt).length && Ct(document.body).children().on("mouseover", null, Ct.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ct(this._menu).toggleClass(Ot), Ct(e).toggleClass(Ot).trigger(Ct.Event(wt.SHOWN, r));
          }
        }
      }
    }, e.dispose = function () {
      Ct.removeData(this._element, bt), Ct(this._element).off(St), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      Ct(this._element).on(wt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (t) {
      return t = o({}, this.constructor.Default, Ct(this._element).data(), t), kn.typeCheckConfig(Tt, t, this.constructor.DefaultType), t;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = t._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(xt));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var t = Ct(this._element.parentNode),
          e = Kt;
      return t.hasClass("dropup") ? (e = qt, Ct(this._menu).hasClass(jt) && (e = Ft)) : t.hasClass(kt) ? e = Qt : t.hasClass(Pt) ? e = Bt : Ct(this._menu).hasClass(jt) && (e = Mt), e;
    }, e._detectNavbar = function () {
      return 0 < Ct(this._element).closest(".navbar").length;
    }, e._getPopperConfig = function () {
      var t = this,
          e = {};
      "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}), e;
      } : e.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: e,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = Ct(this).data(bt);

        if (n || (n = new t(this, "object" == typeof e ? e : null), Ct(this).data(bt, n)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll(Lt)), i = 0, r = n.length; i < r; i++) {
        var o = t._getParentFromElement(n[i]),
            s = Ct(n[i]).data(bt),
            a = {
          relatedTarget: n[i]
        };

        if (e && "click" === e.type && (a.clickEvent = e), s) {
          var l = s._menu;

          if (Ct(o).hasClass(Ot) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Ct.contains(o, e.target))) {
            var c = Ct.Event(wt.HIDE, a);
            Ct(o).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ct(document.body).children().off("mouseover", null, Ct.noop), n[i].setAttribute("aria-expanded", "false"), Ct(l).removeClass(Ot), Ct(o).removeClass(Ot).trigger(Ct.Event(wt.HIDDEN, a)));
          }
        }
      }
    }, t._getParentFromElement = function (t) {
      var e,
          n = kn.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, t._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Ct(e.target).closest(xt).length)) : Dt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Ct(this).hasClass(Nt))) {
        var n = t._getParentFromElement(this),
            i = Ct(n).hasClass(Ot);

        if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
          var r = [].slice.call(n.querySelectorAll(Ut));

          if (0 !== r.length) {
            var o = r.indexOf(e.target);
            38 === e.which && 0 < o && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
          }
        } else {
          if (27 === e.which) {
            var s = n.querySelector(Lt);
            Ct(s).trigger("focus");
          }

          Ct(this).trigger("click");
        }
      }
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Vt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yt;
      }
    }]), t;
  }(), Ct(document).on(wt.KEYDOWN_DATA_API, Lt, zt._dataApiKeydownHandler).on(wt.KEYDOWN_DATA_API, xt, zt._dataApiKeydownHandler).on(wt.CLICK_DATA_API + " " + wt.KEYUP_DATA_API, zt._clearMenus).on(wt.CLICK_DATA_API, Lt, function (t) {
    t.preventDefault(), t.stopPropagation(), zt._jQueryInterface.call(Ct(this), "toggle");
  }).on(wt.CLICK_DATA_API, Rt, function (t) {
    t.stopPropagation();
  }), Ct.fn[Tt] = zt._jQueryInterface, Ct.fn[Tt].Constructor = zt, Ct.fn[Tt].noConflict = function () {
    return Ct.fn[Tt] = At, zt._jQueryInterface;
  }, zt),
      xn = (Zt = "modal", $t = "." + (Gt = "bs.modal"), Xt = (Jt = e).fn[Zt], te = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, ee = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, ne = {
    HIDE: "hide" + $t,
    HIDDEN: "hidden" + $t,
    SHOW: "show" + $t,
    SHOWN: "shown" + $t,
    FOCUSIN: "focusin" + $t,
    RESIZE: "resize" + $t,
    CLICK_DISMISS: "click.dismiss" + $t,
    KEYDOWN_DISMISS: "keydown.dismiss" + $t,
    MOUSEUP_DISMISS: "mouseup.dismiss" + $t,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + $t,
    CLICK_DATA_API: "click" + $t + ".data-api"
  }, ie = "modal-scrollbar-measure", re = "modal-backdrop", oe = "modal-open", se = "fade", ae = "show", le = ".modal-dialog", ce = '[data-toggle="modal"]', he = '[data-dismiss="modal"]', ue = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", fe = ".sticky-top", de = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(le), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var e = t.prototype;
    return e.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, e.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        Jt(this._element).hasClass(se) && (this._isTransitioning = !0);
        var n = Jt.Event(ne.SHOW, {
          relatedTarget: t
        });
        Jt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Jt(document.body).addClass(oe), this._setEscapeEvent(), this._setResizeEvent(), Jt(this._element).on(ne.CLICK_DISMISS, he, function (t) {
          return e.hide(t);
        }), Jt(this._dialog).on(ne.MOUSEDOWN_DISMISS, function () {
          Jt(e._element).one(ne.MOUSEUP_DISMISS, function (t) {
            Jt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, e.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Jt.Event(ne.HIDE);

        if (Jt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = Jt(this._element).hasClass(se);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Jt(document).off(ne.FOCUSIN), Jt(this._element).removeClass(ae), Jt(this._element).off(ne.CLICK_DISMISS), Jt(this._dialog).off(ne.MOUSEDOWN_DISMISS), i) {
            var r = kn.getTransitionDurationFromElement(this._element);
            Jt(this._element).one(kn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      Jt.removeData(this._element, Gt), Jt(window, document, this._element, this._backdrop).off($t), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (t) {
      return t = o({}, te, t), kn.typeCheckConfig(Zt, t, ee), t;
    }, e._showElement = function (t) {
      var e = this,
          n = Jt(this._element).hasClass(se);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && kn.reflow(this._element), Jt(this._element).addClass(ae), this._config.focus && this._enforceFocus();

      var i = Jt.Event(ne.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Jt(e._element).trigger(i);
      };

      if (n) {
        var o = kn.getTransitionDurationFromElement(this._element);
        Jt(this._dialog).one(kn.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, e._enforceFocus = function () {
      var t = this;
      Jt(document).off(ne.FOCUSIN).on(ne.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === Jt(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? Jt(this._element).on(ne.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || Jt(this._element).off(ne.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? Jt(window).on(ne.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : Jt(window).off(ne.RESIZE);
    }, e._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Jt(document.body).removeClass(oe), t._resetAdjustments(), t._resetScrollbar(), Jt(t._element).trigger(ne.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && (Jt(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (t) {
      var e = this,
          n = Jt(this._element).hasClass(se) ? se : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = re, n && this._backdrop.classList.add(n), Jt(this._backdrop).appendTo(document.body), Jt(this._element).on(ne.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && kn.reflow(this._backdrop), Jt(this._backdrop).addClass(ae), !t) return;
        if (!n) return void t();
        var i = kn.getTransitionDurationFromElement(this._backdrop);
        Jt(this._backdrop).one(kn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Jt(this._backdrop).removeClass(ae);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (Jt(this._element).hasClass(se)) {
          var o = kn.getTransitionDurationFromElement(this._backdrop);
          Jt(this._backdrop).one(kn.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else t && t();
    }, e._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(ue)),
            n = [].slice.call(document.querySelectorAll(fe));
        Jt(e).each(function (e, n) {
          var i = n.style.paddingRight,
              r = Jt(n).css("padding-right");
          Jt(n).data("padding-right", i).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
        }), Jt(n).each(function (e, n) {
          var i = n.style.marginRight,
              r = Jt(n).css("margin-right");
          Jt(n).data("margin-right", i).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
        });
        var i = document.body.style.paddingRight,
            r = Jt(document.body).css("padding-right");
        Jt(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }
    }, e._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(ue));
      Jt(t).each(function (t, e) {
        var n = Jt(e).data("padding-right");
        Jt(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + fe));
      Jt(e).each(function (t, e) {
        var n = Jt(e).data("margin-right");
        void 0 !== n && Jt(e).css("margin-right", n).removeData("margin-right");
      });
      var n = Jt(document.body).data("padding-right");
      Jt(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = ie, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t._jQueryInterface = function (e, n) {
      return this.each(function () {
        var i = Jt(this).data(Gt),
            r = o({}, te, Jt(this).data(), "object" == typeof e && e ? e : {});

        if (i || (i = new t(this, r), Jt(this).data(Gt, i)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
          i[e](n);
        } else r.show && i.show(n);
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return te;
      }
    }]), t;
  }(), Jt(document).on(ne.CLICK_DATA_API, ce, function (t) {
    var e,
        n = this,
        i = kn.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var r = Jt(e).data(Gt) ? "toggle" : o({}, Jt(e).data(), Jt(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = Jt(e).one(ne.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(ne.HIDDEN, function () {
        Jt(n).is(":visible") && n.focus();
      });
    });

    de._jQueryInterface.call(Jt(e), r, this);
  }), Jt.fn[Zt] = de._jQueryInterface, Jt.fn[Zt].Constructor = de, Jt.fn[Zt].noConflict = function () {
    return Jt.fn[Zt] = Xt, de._jQueryInterface;
  }, de),
      Wn = (_e = "tooltip", pe = "." + (me = "bs.tooltip"), ve = (ge = e).fn[_e], ye = "bs-tooltip", Ee = new RegExp("(^|\\s)" + ye + "\\S+", "g"), be = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(Te = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(Ce = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, Ie = "out", Ae = {
    HIDE: "hide" + pe,
    HIDDEN: "hidden" + pe,
    SHOW: (Se = "show") + pe,
    SHOWN: "shown" + pe,
    INSERTED: "inserted" + pe,
    CLICK: "click" + pe,
    FOCUSIN: "focusin" + pe,
    FOCUSOUT: "focusout" + pe,
    MOUSEENTER: "mouseenter" + pe,
    MOUSELEAVE: "mouseleave" + pe
  }, De = "fade", we = "show", Ne = ".tooltip-inner", ".arrow", Oe = "hover", ke = "focus", "click", "manual", Pe = function () {
    function t(t, e) {
      if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var e = t.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = ge(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), ge(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (ge(this.getTipElement()).hasClass(we)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), ge.removeData(this.element, this.constructor.DATA_KEY), ge(this.element).off(this.constructor.EVENT_KEY), ge(this.element).closest(".modal").off("hide.bs.modal"), this.tip && ge(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === ge(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = ge.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        ge(this.element).trigger(e);
        var i = ge.contains(this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !i) return;
        var r = this.getTipElement(),
            o = kn.getUID(this.constructor.NAME);
        r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && ge(r).addClass(De);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);
        var l = !1 === this.config.container ? document.body : ge(document).find(this.config.container);
        ge(r).data(this.constructor.DATA_KEY, this), ge.contains(this.element.ownerDocument.documentElement, this.tip) || ge(r).appendTo(l), ge(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
          placement: a,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function onUpdate(e) {
            t._handlePopperPlacementChange(e);
          }
        }), ge(r).addClass(we), "ontouchstart" in document.documentElement && ge(document.body).children().on("mouseover", null, ge.noop);

        var c = function c() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, ge(t.element).trigger(t.constructor.Event.SHOWN), e === Ie && t._leave(null, t);
        };

        if (ge(this.tip).hasClass(De)) {
          var h = kn.getTransitionDurationFromElement(this.tip);
          ge(this.tip).one(kn.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, e.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = ge.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== Se && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), ge(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (ge(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (ge(n).removeClass(we), "ontouchstart" in document.documentElement && ge(document.body).children().off("mouseover", null, ge.noop), this._activeTrigger.click = !1, this._activeTrigger[ke] = !1, this._activeTrigger[Oe] = !1, ge(this.tip).hasClass(De)) {
          var o = kn.getTransitionDurationFromElement(n);
          ge(n).one(kn.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (t) {
      ge(this.getTipElement()).addClass(ye + "-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || ge(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(ge(t.querySelectorAll(Ne)), this.getTitle()), ge(t).removeClass(De + " " + we);
    }, e.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == typeof e && (e.nodeType || e.jquery) ? n ? ge(e).parent().is(t) || t.empty().append(e) : t.text(ge(e).text()) : t[n ? "html" : "text"](e);
    }, e.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, e._getAttachment = function (t) {
      return Te[t.toUpperCase()];
    }, e._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) ge(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = e === Oe ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = e === Oe ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          ge(t.element).on(n, t.config.selector, function (e) {
            return t._enter(e);
          }).on(i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
        ge(t.element).closest(".modal").on("hide.bs.modal", function () {
          return t.hide();
        });
      }), this.config.selector ? this.config = o({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || ge(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), ge(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? ke : Oe] = !0), ge(e.getTipElement()).hasClass(we) || e._hoverState === Se ? e._hoverState = Se : (clearTimeout(e._timeout), e._hoverState = Se, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === Se && e.show();
      }, e.config.delay.show) : e.show());
    }, e._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || ge(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), ge(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? ke : Oe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ie, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === Ie && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, e._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, e._getConfig = function (t) {
      return "number" == typeof (t = o({}, this.constructor.Default, ge(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), kn.typeCheckConfig(_e, t, this.constructor.DefaultType), t;
    }, e._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, e._cleanTipClass = function () {
      var t = ge(this.getTipElement()),
          e = t.attr("class").match(Ee);
      null !== e && e.length && t.removeClass(e.join(""));
    }, e._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, e._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (ge(t).removeClass(De), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = ge(this).data(me),
            i = "object" == typeof e && e;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), ge(this).data(me, n)), "string" == typeof e)) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "NAME",
      get: function get() {
        return _e;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return me;
      }
    }, {
      key: "Event",
      get: function get() {
        return Ae;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return pe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ce;
      }
    }]), t;
  }(), ge.fn[_e] = Pe._jQueryInterface, ge.fn[_e].Constructor = Pe, ge.fn[_e].noConflict = function () {
    return ge.fn[_e] = ve, Pe._jQueryInterface;
  }, Pe),
      Un = (He = "popover", Re = "." + (Le = "bs.popover"), xe = (je = e).fn[He], We = "bs-popover", Ue = new RegExp("(^|\\s)" + We + "\\S+", "g"), qe = o({}, Wn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), Fe = o({}, Wn.DefaultType, {
    content: "(string|element|function)"
  }), "fade", Ke = ".popover-header", Me = ".popover-body", Qe = {
    HIDE: "hide" + Re,
    HIDDEN: "hidden" + Re,
    SHOW: "show" + Re,
    SHOWN: "shown" + Re,
    INSERTED: "inserted" + Re,
    CLICK: "click" + Re,
    FOCUSIN: "focusin" + Re,
    FOCUSOUT: "focusout" + Re,
    MOUSEENTER: "mouseenter" + Re,
    MOUSELEAVE: "mouseleave" + Re
  }, Be = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      je(this.getTipElement()).addClass(We + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || je(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = je(this.getTipElement());
      this.setElementContent(t.find(Ke), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Me), e), t.removeClass("fade show");
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = je(this.getTipElement()),
          e = t.attr("class").match(Ue);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (t) {
      return this.each(function () {
        var e = je(this).data(Le),
            n = "object" == typeof t ? t : null;

        if ((e || !/destroy|hide/.test(t)) && (e || (e = new i(this, n), je(this).data(Le, e)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, r(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return He;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Le;
      }
    }, {
      key: "Event",
      get: function get() {
        return Qe;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Re;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Fe;
      }
    }]), i;
  }(Wn), je.fn[He] = Be._jQueryInterface, je.fn[He].Constructor = Be, je.fn[He].noConflict = function () {
    return je.fn[He] = xe, Be._jQueryInterface;
  }, Be),
      qn = (Ye = "scrollspy", Je = "." + (ze = "bs.scrollspy"), Ze = (Ve = e).fn[Ye], Ge = {
    offset: 10,
    method: "auto",
    target: ""
  }, $e = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, Xe = {
    ACTIVATE: "activate" + Je,
    SCROLL: "scroll" + Je,
    LOAD_DATA_API: "load" + Je + ".data-api"
  }, tn = "dropdown-item", en = "active", nn = '[data-spy="scroll"]', rn = ".active", on = ".nav, .list-group", sn = ".nav-link", an = ".nav-item", ln = ".list-group-item", cn = ".dropdown", hn = ".dropdown-item", un = ".dropdown-toggle", "offset", fn = "position", dn = function () {
    function t(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + sn + "," + this._config.target + " " + ln + "," + this._config.target + " " + hn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var e = t.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : fn,
          n = "auto" === this._config.method ? e : this._config.method,
          i = n === fn ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            r = kn.getSelectorFromElement(t);

        if (r && (e = document.querySelector(r)), e) {
          var o = e.getBoundingClientRect();
          if (o.width || o.height) return [Ve(e)[n]().top + i, r];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      Ve.removeData(this._element, ze), Ve(this._scrollElement).off(Je), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (t) {
      if ("string" != typeof (t = o({}, Ge, "object" == typeof t && t ? t : {})).target) {
        var e = Ve(t.target).attr("id");
        e || (e = kn.getUID(Ye), Ve(t.target).attr("id", e)), t.target = "#" + e;
      }

      return kn.typeCheckConfig(Ye, t, $e), t;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",");

      e = e.map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var n = Ve([].slice.call(document.querySelectorAll(e.join(","))));
      n.hasClass(tn) ? (n.closest(cn).find(un).addClass(en), n.addClass(en)) : (n.addClass(en), n.parents(on).prev(sn + ", " + ln).addClass(en), n.parents(on).prev(an).children(sn).addClass(en)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      var t = [].slice.call(document.querySelectorAll(this._selector));
      Ve(t).filter(rn).removeClass(en);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = Ve(this).data(ze);

        if (n || (n = new t(this, "object" == typeof e && e), Ve(this).data(ze, n)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ge;
      }
    }]), t;
  }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(nn)), e = t.length; e--;) {
      var n = Ve(t[e]);

      dn._jQueryInterface.call(n, n.data());
    }
  }), Ve.fn[Ye] = dn._jQueryInterface, Ve.fn[Ye].Constructor = dn, Ve.fn[Ye].noConflict = function () {
    return Ve.fn[Ye] = Ze, dn._jQueryInterface;
  }, dn),
      Fn = (mn = "." + (_n = "bs.tab"), pn = (gn = e).fn.tab, vn = {
    HIDE: "hide" + mn,
    HIDDEN: "hidden" + mn,
    SHOW: "show" + mn,
    SHOWN: "shown" + mn,
    CLICK_DATA_API: "click" + mn + ".data-api"
  }, yn = "dropdown-menu", En = "active", Cn = "disabled", "fade", Tn = "show", bn = ".dropdown", Sn = ".nav, .list-group", In = ".active", An = "> li > .active", Dn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', wn = ".dropdown-toggle", Nn = "> .dropdown-menu .active", On = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && gn(this._element).hasClass(En) || gn(this._element).hasClass(Cn))) {
        var e,
            n,
            i = gn(this._element).closest(Sn)[0],
            r = kn.getSelectorFromElement(this._element);

        if (i) {
          var o = "UL" === i.nodeName ? An : In;
          n = (n = gn.makeArray(gn(i).find(o)))[n.length - 1];
        }

        var s = gn.Event(vn.HIDE, {
          relatedTarget: this._element
        }),
            a = gn.Event(vn.SHOW, {
          relatedTarget: n
        });

        if (n && gn(n).trigger(s), gn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (e = document.querySelector(r)), this._activate(this._element, i);

          var l = function l() {
            var e = gn.Event(vn.HIDDEN, {
              relatedTarget: t._element
            }),
                i = gn.Event(vn.SHOWN, {
              relatedTarget: n
            });
            gn(n).trigger(e), gn(t._element).trigger(i);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      gn.removeData(this._element, _n), this._element = null;
    }, e._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? gn(e).find(An) : gn(e).children(In))[0],
          o = n && r && gn(r).hasClass("fade"),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };

      if (r && o) {
        var a = kn.getTransitionDurationFromElement(r);
        gn(r).one(kn.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, e._transitionComplete = function (t, e, n) {
      if (e) {
        gn(e).removeClass(Tn + " " + En);
        var i = gn(e.parentNode).find(Nn)[0];
        i && gn(i).removeClass(En), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (gn(t).addClass(En), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), kn.reflow(t), gn(t).addClass(Tn), t.parentNode && gn(t.parentNode).hasClass(yn)) {
        var r = gn(t).closest(bn)[0];

        if (r) {
          var o = [].slice.call(r.querySelectorAll(wn));
          gn(o).addClass(En);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = gn(this),
            i = n.data(_n);

        if (i || (i = new t(this), n.data(_n, i)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
          i[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), t;
  }(), gn(document).on(vn.CLICK_DATA_API, Dn, function (t) {
    t.preventDefault(), On._jQueryInterface.call(gn(this), "show");
  }), gn.fn.tab = On._jQueryInterface, gn.fn.tab.Constructor = On, gn.fn.tab.noConflict = function () {
    return gn.fn.tab = pn, On._jQueryInterface;
  }, On);

  !function (t) {
    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = kn, t.Alert = Pn, t.Button = jn, t.Carousel = Hn, t.Collapse = Ln, t.Dropdown = Rn, t.Modal = xn, t.Popover = Un, t.Scrollspy = qn, t.Tab = Fn, t.Tooltip = Wn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*========== Page Transition JS ==========*/

var PageTransitions = function () {
  var e,
      a,
      t = $("#main").children(".pt-page"),
      p = $(".nav-menu .pt-link"),
      o = 1,
      r = (t.length, 0),
      g = !1,
      s = !1,
      n = !1,
      c = {
    WebkitAnimation: "webkitAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd",
    animation: "animationend"
  }[Modernizr.prefixed("animation")],
      m = Modernizr.cssanimations,
      i = 0;

  function b() {
    t.each(function () {
      var e = $(this);
      e.data("originalClassList", e.attr("class"));
    }), t.eq(r).addClass("page-active"), p.length > 0 && (window.onhashchange = function () {
      var e = location.hash,
          a = [];
      p.each(function () {
        a.push($(this).attr("href"));
      }), a.indexOf(e) >= 0 && ($nextPageIndex = $(e).index(), o > 67 && (o = 1), p.removeClass("active"), p.eq(a.indexOf(e)).addClass("active"), function (e) {
        var a,
            p,
            b = $("html").data("randomAnimation"),
            l = $("html").data("animation");
        if (r === e) return !1;
        if (g = !0, !b) switch (l) {
          case 1:
            a = 1, p = 2;
            break;

          case 2:
            a = 3, p = 4;
            break;

          case 3:
            a = 5, p = 6;
            break;

          case 4:
            a = 7, p = 8;
            break;

          case 5:
            a = 9, p = 10;
            break;

          case 6:
            a = 11, p = 12;
            break;

          case 7:
            a = 13, p = 14;
            break;

          case 8:
            a = 15, p = 16;
            break;

          case 9:
            a = 17, p = 18;
            break;

          case 10:
            a = 19, p = 20;
            break;

          case 11:
            a = 21, p = 22;
            break;

          case 12:
            a = 23, p = 24;
            break;

          case 13:
            a = 25, p = 26;
            break;

          case 14:
            a = 27, p = 27;
            break;

          case 15:
            a = 28, p = 29;
            break;

          case 16:
            a = 31, p = 30;
            break;

          case 17:
            a = 32, p = 33;
            break;

          case 18:
            a = 34, p = 35;
            break;

          case 19:
            a = 36, p = 36;
            break;

          case 20:
            a = 37, p = 37;
            break;

          case 21:
            a = 38, p = 39;
            break;

          case 22:
            a = 40, p = 41;
            break;

          case 23:
            a = 42, p = 43;
            break;

          case 24:
            a = 44, p = 45;
            break;

          case 25:
            a = 46, p = 47;
            break;

          case 26:
            a = 48, p = 49;
            break;

          case 27:
            a = 51, p = 50;
            break;

          case 28:
            a = 53, p = 52;
            break;

          case 29:
            a = 54, p = 55;
            break;

          case 30:
            a = 56, p = 57;
            break;

          case 31:
            a = 58, p = 59;
            break;

          case 32:
            a = 60, p = 61;
            break;

          case 33:
            a = 62, p = 63;
            break;

          case 34:
            a = 64, p = 65;
            break;

          case 35:
            a = 66, p = 66;
            break;

          case 36:
            a = 67, p = 68;
            break;

          default:
            a = 1, p = 2;
        }
        b ? i = o : r < e ? i = a : r > e && (i = p);
        var d = t.eq(r);
        r = e;
        var v = t.eq(r).addClass("page-active"),
            f = "",
            u = "";

        switch (i) {
          case 1:
            f = "pt-page-moveToLeft", u = "pt-page-moveFromRight";
            break;

          case 2:
            f = "pt-page-moveToRight", u = "pt-page-moveFromLeft";
            break;

          case 3:
            f = "pt-page-moveToTop", u = "pt-page-moveFromBottom";
            break;

          case 4:
            f = "pt-page-moveToBottom", u = "pt-page-moveFromTop";
            break;

          case 5:
            f = "pt-page-fade", u = "pt-page-moveFromRight pt-page-ontop";
            break;

          case 6:
            f = "pt-page-fade", u = "pt-page-moveFromLeft pt-page-ontop";
            break;

          case 7:
            f = "pt-page-fade", u = "pt-page-moveFromBottom pt-page-ontop";
            break;

          case 8:
            f = "pt-page-fade", u = "pt-page-moveFromTop pt-page-ontop";
            break;

          case 9:
            f = "pt-page-moveToLeftFade", u = "pt-page-moveFromRightFade";
            break;

          case 10:
            f = "pt-page-moveToRightFade", u = "pt-page-moveFromLeftFade";
            break;

          case 11:
            f = "pt-page-moveToTopFade", u = "pt-page-moveFromBottomFade";
            break;

          case 12:
            f = "pt-page-moveToBottomFade", u = "pt-page-moveFromTopFade";
            break;

          case 13:
            f = "pt-page-moveToLeftEasing pt-page-ontop", u = "pt-page-moveFromRight";
            break;

          case 14:
            f = "pt-page-moveToRightEasing pt-page-ontop", u = "pt-page-moveFromLeft";
            break;

          case 15:
            f = "pt-page-moveToTopEasing pt-page-ontop", u = "pt-page-moveFromBottom";
            break;

          case 16:
            f = "pt-page-moveToBottomEasing pt-page-ontop", u = "pt-page-moveFromTop";
            break;

          case 17:
            f = "pt-page-scaleDown", u = "pt-page-moveFromRight pt-page-ontop";
            break;

          case 18:
            f = "pt-page-scaleDown", u = "pt-page-moveFromLeft pt-page-ontop";
            break;

          case 19:
            f = "pt-page-scaleDown", u = "pt-page-moveFromBottom pt-page-ontop";
            break;

          case 20:
            f = "pt-page-scaleDown", u = "pt-page-moveFromTop pt-page-ontop";
            break;

          case 21:
            f = "pt-page-scaleDown", u = "pt-page-scaleUpDown pt-page-delay300";
            break;

          case 22:
            f = "pt-page-scaleDownUp", u = "pt-page-scaleUp pt-page-delay300";
            break;

          case 23:
            f = "pt-page-moveToLeft pt-page-ontop", u = "pt-page-scaleUp";
            break;

          case 24:
            f = "pt-page-moveToRight pt-page-ontop", u = "pt-page-scaleUp";
            break;

          case 25:
            f = "pt-page-moveToTop pt-page-ontop", u = "pt-page-scaleUp";
            break;

          case 26:
            f = "pt-page-moveToBottom pt-page-ontop", u = "pt-page-scaleUp";
            break;

          case 27:
            f = "pt-page-scaleDownCenter", u = "pt-page-scaleUpCenter pt-page-delay400";
            break;

          case 28:
            f = "pt-page-rotateRightSideFirst", u = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop";
            break;

          case 29:
            f = "pt-page-rotateLeftSideFirst", u = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";
            break;

          case 30:
            f = "pt-page-rotateTopSideFirst", u = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop";
            break;

          case 31:
            f = "pt-page-rotateBottomSideFirst", u = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";
            break;

          case 32:
            f = "pt-page-flipOutRight", u = "pt-page-flipInLeft pt-page-delay500";
            break;

          case 33:
            f = "pt-page-flipOutLeft", u = "pt-page-flipInRight pt-page-delay500";
            break;

          case 34:
            f = "pt-page-flipOutTop", u = "pt-page-flipInBottom pt-page-delay500";
            break;

          case 35:
            f = "pt-page-flipOutBottom", u = "pt-page-flipInTop pt-page-delay500";
            break;

          case 36:
            f = "pt-page-rotateFall pt-page-ontop", u = "pt-page-scaleUp";
            break;

          case 37:
            f = "pt-page-rotateOutNewspaper", u = "pt-page-rotateInNewspaper pt-page-delay500";
            break;

          case 38:
            f = "pt-page-rotatePushLeft", u = "pt-page-moveFromRight";
            break;

          case 39:
            f = "pt-page-rotatePushRight", u = "pt-page-moveFromLeft pt-page-ontop";
            break;

          case 40:
            f = "pt-page-rotatePushTop ", u = "pt-page-moveFromBottom";
            break;

          case 41:
            f = "pt-page-rotatePushBottom ", u = "pt-page-moveFromTop pt-page-ontop";
            break;

          case 42:
            f = "pt-page-rotatePushLeft", u = "pt-page-rotatePullRight pt-page-delay180";
            break;

          case 43:
            f = "pt-page-rotatePushRight", u = "pt-page-rotatePullLeft pt-page-delay180";
            break;

          case 44:
            f = "pt-page-rotatePushTop", u = "pt-page-rotatePullBottom pt-page-delay180";
            break;

          case 45:
            f = "pt-page-rotatePushBottom", u = "pt-page-rotatePullTop pt-page-delay180";
            break;

          case 46:
            f = "pt-page-rotateFoldLeft", u = "pt-page-moveFromRightFade";
            break;

          case 47:
            f = "pt-page-rotateFoldRight", u = "pt-page-moveFromLeftFade";
            break;

          case 48:
            f = "pt-page-rotateFoldTop", u = "pt-page-moveFromBottomFade";
            break;

          case 49:
            f = "pt-page-rotateFoldBottom", u = "pt-page-moveFromTopFade";
            break;

          case 50:
            f = "pt-page-moveToRightFade", u = "pt-page-rotateUnfoldLeft";
            break;

          case 51:
            f = "pt-page-moveToLeftFade", u = "pt-page-rotateUnfoldRight";
            break;

          case 52:
            f = "pt-page-moveToBottomFade", u = "pt-page-rotateUnfoldTop";
            break;

          case 53:
            f = "pt-page-moveToTopFade", u = "pt-page-rotateUnfoldBottom";
            break;

          case 54:
            f = "pt-page-rotateRoomLeftOut pt-page-ontop", u = "pt-page-rotateRoomLeftIn";
            break;

          case 55:
            f = "pt-page-rotateRoomRightOut pt-page-ontop", u = "pt-page-rotateRoomRightIn";
            break;

          case 56:
            f = "pt-page-rotateRoomTopOut pt-page-ontop", u = "pt-page-rotateRoomTopIn";
            break;

          case 57:
            f = "pt-page-rotateRoomBottomOut pt-page-ontop", u = "pt-page-rotateRoomBottomIn";
            break;

          case 58:
            f = "pt-page-rotateCubeLeftOut pt-page-ontop", u = "pt-page-rotateCubeLeftIn";
            break;

          case 59:
            f = "pt-page-rotateCubeRightOut pt-page-ontop", u = "pt-page-rotateCubeRightIn";
            break;

          case 60:
            f = "pt-page-rotateCubeTopOut pt-page-ontop", u = "pt-page-rotateCubeTopIn";
            break;

          case 61:
            f = "pt-page-rotateCubeBottomOut pt-page-ontop", u = "pt-page-rotateCubeBottomIn";
            break;

          case 62:
            f = "pt-page-rotateCarouselLeftOut pt-page-ontop", u = "pt-page-rotateCarouselLeftIn";
            break;

          case 63:
            f = "pt-page-rotateCarouselRightOut pt-page-ontop", u = "pt-page-rotateCarouselRightIn";
            break;

          case 64:
            f = "pt-page-rotateCarouselTopOut pt-page-ontop", u = "pt-page-rotateCarouselTopIn";
            break;

          case 65:
            f = "pt-page-rotateCarouselBottomOut pt-page-ontop", u = "pt-page-rotateCarouselBottomIn";
            break;

          case 66:
            f = "pt-page-rotateSidesOut", u = "pt-page-rotateSidesIn pt-page-delay200";
            break;

          case 67:
            f = "pt-page-rotateSlideOutToLeft", u = "pt-page-rotateSlideInFromRight";
            break;

          case 68:
            f = "pt-page-rotateSlideOutToRight", u = "pt-page-rotateSlideInFromLeft";
        }

        d.addClass(f).on(c, function () {
          d.off(c), s = !0, n && k(d, v);
        }), v.addClass(u).on(c, function () {
          v.off(c), n = !0, s && k(d, v);
        }), m || k(d, v);
      }($nextPageIndex), o++);
    }, p.on("click", function (e) {
      if (g) return !1;
      p.removeClass("active"), $(this).addClass("active");
    }));
  }

  function k(e, a) {
    var t, p;
    s = !1, n = !1, p = a, (t = e).attr("class", t.data("originalClassList")), p.attr("class", p.data("originalClassList") + " page-active"), g = !1;
  }

  return e = [], a = location.hash, p.each(function () {
    e.push($(this).attr("href"));
  }), e.indexOf(a) >= 0 && (r = e.indexOf(a), p.removeClass("active"), p.eq(e.indexOf(a)).addClass("active")), b(), {
    init: b
  };
}();
/*========== Animated Headline JS ==========*/


jQuery(document).ready(function (s) {
  var e,
      a,
      n = 2500,
      t = 3800,
      d = t - 3e3,
      l = 50,
      r = 150,
      o = 500,
      c = o + 800,
      h = 600,
      p = 1500;

  function u(i) {
    var e = m(i);

    if (i.parents(".cd-headline").hasClass("type")) {
      var a = i.parent(".cd-words-wrapper");
      a.addClass("selected").removeClass("waiting"), setTimeout(function () {
        a.removeClass("selected"), i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");
      }, o), setTimeout(function () {
        f(e, r);
      }, c);
    } else if (i.parents(".cd-headline").hasClass("letters")) {
      var p = i.children("i").length >= e.children("i").length;
      !function i(e, a, t, d) {
        e.removeClass("in").addClass("out");
        e.is(":last-child") ? t && setTimeout(function () {
          u(m(a));
        }, n) : setTimeout(function () {
          i(e.next(), a, t, d);
        }, d);

        if (e.is(":last-child") && s("html").hasClass("no-csstransitions")) {
          var l = m(a);
          w(a, l);
        }
      }(i.find("i").eq(0), i, p, l), C(e.find("i").eq(0), e, p, l);
    } else i.parents(".cd-headline").hasClass("clip") ? i.parents(".cd-words-wrapper").animate({
      width: "2px"
    }, h, function () {
      w(i, e), f(e);
    }) : i.parents(".cd-headline").hasClass("loading-bar") ? (i.parents(".cd-words-wrapper").removeClass("is-loading"), w(i, e), setTimeout(function () {
      u(e);
    }, t), setTimeout(function () {
      i.parents(".cd-words-wrapper").addClass("is-loading");
    }, d)) : (w(i, e), setTimeout(function () {
      u(e);
    }, n));
  }

  function f(s, i) {
    s.parents(".cd-headline").hasClass("type") ? (C(s.find("i").eq(0), s, !1, i), s.addClass("is-visible").removeClass("is-hidden")) : s.parents(".cd-headline").hasClass("clip") && s.parents(".cd-words-wrapper").animate({
      width: s.width() + 10
    }, h, function () {
      setTimeout(function () {
        u(s);
      }, p);
    });
  }

  function C(s, i, e, a) {
    s.addClass("in").removeClass("out"), s.is(":last-child") ? (i.parents(".cd-headline").hasClass("type") && setTimeout(function () {
      i.parents(".cd-words-wrapper").addClass("waiting");
    }, 200), e || setTimeout(function () {
      u(i);
    }, n)) : setTimeout(function () {
      C(s.next(), i, e, a);
    }, a);
  }

  function m(s) {
    return s.is(":last-child") ? s.parent().children().eq(0) : s.next();
  }

  function w(s, i) {
    s.removeClass("is-visible").addClass("is-hidden"), i.removeClass("is-hidden").addClass("is-visible");
  }

  s(".cd-headline.letters").find("b").each(function () {
    var e = s(this),
        a = e.text().split(""),
        n = e.hasClass("is-visible");

    for (i in a) {
      e.parents(".rotate-2").length > 0 && (a[i] = "<em>" + a[i] + "</em>"), a[i] = n ? '<i class="in">' + a[i] + "</i>" : "<i>" + a[i] + "</i>";
    }

    var t = a.join("");
    e.html(t).css("opacity", 1);
  }), e = s(".cd-headline"), a = n, e.each(function () {
    var i = s(this);
    if (i.hasClass("loading-bar")) a = t, setTimeout(function () {
      i.find(".cd-words-wrapper").addClass("is-loading");
    }, d);else if (i.hasClass("clip")) {
      var e = i.find(".cd-words-wrapper"),
          n = e.width() + 10;
      e.css("width", n);
    } else if (!i.hasClass("type")) {
      var l = i.find(".cd-words-wrapper b"),
          r = 0;
      l.each(function () {
        var i = s(this).width();
        i > r && (r = i);
      }), i.find(".cd-words-wrapper").css("width", r);
    }
    setTimeout(function () {
      u(i.find(".is-visible").eq(0));
    }, a);
  });
});
/*========== Owl Carousel JS ==========*/

!function (t, e, i, s) {
  function n(e, i) {
    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
      this._handlers[i] = t.proxy(this[i], this);
    }, this)), t.each(n.Plugins, t.proxy(function (t, e) {
      this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
    }, this)), t.each(n.Workers, t.proxy(function (e, i) {
      this._pipe.push({
        filter: i.filter,
        run: t.proxy(i.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, n.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, n.Type = {
    Event: "event",
    State: "state"
  }, n.Plugins = {}, n.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      t.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      var e = this.settings.margin || "",
          i = !this.settings.autoWidth,
          s = this.settings.rtl,
          n = {
        width: "auto",
        "margin-left": s ? e : "",
        "margin-right": s ? "" : e
      };
      !i && this.$stage.children().css(n), t.css = n;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          i = null,
          s = this._items.length,
          n = !this.settings.autoWidth,
          o = [];

      for (t.items = {
        merge: !1,
        width: e
      }; s--;) {
        i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
      }

      this._widths = o;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var e = [],
          i = this._items,
          s = this.settings,
          n = Math.max(2 * s.items, 4),
          o = 2 * Math.ceil(i.length / 2),
          r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
          a = "",
          h = "";

      for (r /= 2; r > 0;) {
        e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h, r -= 1;
      }

      this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) {
        s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
      }

      this._coordinates = o;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var t = this.settings.stagePadding,
          e = this._coordinates,
          i = {
        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
        "padding-left": t || "",
        "padding-right": t || ""
      };
      this.$stage.css(i);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      var e = this._coordinates.length,
          i = !this.settings.autoWidth,
          s = this.$stage.children();
      if (i && t.items.merge) for (; e--;) {
        t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
      } else i && (t.css.width = t.items.width, s.css(t.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var t,
          e,
          i,
          s,
          n = this.settings.rtl ? 1 : -1,
          o = 2 * this.settings.stagePadding,
          r = this.coordinates(this.current()) + o,
          a = r + this.width() * n,
          h = [];

      for (i = 0, s = this._coordinates.length; i < s; i++) {
        t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], n.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
      "class": this.settings.stageClass
    }).wrap(t("<div/>", {
      "class": this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()));
  }, n.prototype.initializeItems = function () {
    var e = this.$element.find(".owl-item");
    if (e.length) return this._items = e.get().map(function (e) {
      return t(e);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, n.prototype.initialize = function () {
    var t, e, i;
    (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, n.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, n.prototype.setup = function () {
    var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;
    i ? (t.each(i, function (t) {
      t <= e && t > s && (s = Number(t));
    }), "function" == typeof (n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: n
      }
    }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, n.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, n.prototype.prepare = function (e) {
    var i = this.trigger("prepare", {
      content: e
    });
    return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
      content: i.data
    }), i.data;
  }, n.prototype.update = function () {
    for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
      return this[t];
    }, this._invalidated), n = {}; e < i;) {
      (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, n.prototype.width = function (t) {
    switch (t = t || n.Width.Default) {
      case n.Width.Inner:
      case n.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, n.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, n.prototype.onThrottledResize = function () {
    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, n.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, n.prototype.registerEventHandlers = function () {
    t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)));
  }, n.prototype.onDragStart = function (e) {
    var s = null;
    3 !== e.which && (t.support.transform ? s = {
      x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
      y: s[16 === s.length ? 13 : 5]
    } : (s = this.$stage.position(), s = {
      x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
      y: s.top
    }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
      var s = this.difference(this._drag.pointer, this.pointer(e));
      t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, n.prototype.onDragMove = function (t) {
    var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x));
  }, n.prototype.onDragEnd = function (e) {
    var s = this.difference(this._drag.pointer, this.pointer(e)),
        n = this._drag.stage.current,
        o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
    t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, n.prototype.closest = function (e, i) {
    var n = -1,
        o = this.width(),
        r = this.coordinates();
    return this.settings.freeDrag || t.each(r, t.proxy(function (t, a) {
      return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== s ? r[t + 1] : a - o) && (n = "left" === i ? t + 1 : t), -1 === n;
    }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n;
  }, n.prototype.animate = function (e) {
    var i = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
      transform: "translate3d(" + e + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : i ? this.$stage.animate({
      left: e + "px"
    }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: e + "px"
    });
  }, n.prototype.is = function (t) {
    return this._states.current[t] && this._states.current[t] > 0;
  }, n.prototype.current = function (t) {
    if (t === s) return this._current;
    if (0 === this._items.length) return s;

    if (t = this.normalize(t), this._current !== t) {
      var e = this.trigger("change", {
        property: {
          name: "position",
          value: t
        }
      });
      e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, n.prototype.invalidate = function (e) {
    return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
      return e;
    });
  }, n.prototype.reset = function (t) {
    (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
  }, n.prototype.normalize = function (t, e) {
    var i = this._items.length,
        n = e ? 0 : this._clones.length;
    return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t;
  }, n.prototype.relative = function (t) {
    return t -= this._clones.length / 2, this.normalize(t, !0);
  }, n.prototype.maximum = function (t) {
    var e,
        i,
        s,
        n = this.settings,
        o = this._coordinates.length;
    if (n.loop) o = this._clones.length / 2 + this._items.length - 1;else if (n.autoWidth || n.merge) {
      if (e = this._items.length) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s);) {
        ;
      }
      o = e + 1;
    } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
    return t && (o -= this._clones.length / 2), Math.max(o, 0);
  }, n.prototype.minimum = function (t) {
    return t ? 0 : this._clones.length / 2;
  }, n.prototype.items = function (t) {
    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]);
  }, n.prototype.mergers = function (t) {
    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]);
  }, n.prototype.clones = function (e) {
    var i = this._clones.length / 2,
        n = i + this._items.length,
        o = function o(t) {
      return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
    };

    return e === s ? t.map(this._clones, function (t, e) {
      return o(e);
    }) : t.map(this._clones, function (t, i) {
      return t === e ? o(i) : null;
    });
  }, n.prototype.speed = function (t) {
    return t !== s && (this._speed = t), this._speed;
  }, n.prototype.coordinates = function (e) {
    var i,
        n = 1,
        o = e - 1;
    return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
      return this.coordinates(e);
    }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i));
  }, n.prototype.duration = function (t, e, i) {
    return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
  }, n.prototype.to = function (t, e) {
    var i = this.current(),
        s = null,
        n = t - this.relative(i),
        o = (n > 0) - (n < 0),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update();
  }, n.prototype.next = function (t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t);
  }, n.prototype.prev = function (t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t);
  }, n.prototype.onTransitionEnd = function (t) {
    if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, n.prototype.viewport = function () {
    var s;
    return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s;
  }, n.prototype.replace = function (e) {
    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
      return 1 === this.nodeType;
    }).each(t.proxy(function (t, e) {
      e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, n.prototype.add = function (e, i) {
    var n = this.relative(this._current);
    i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
      content: e,
      position: i
    }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
      content: e,
      position: i
    });
  }, n.prototype.remove = function (t) {
    (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
      content: this._items[t],
      position: t
    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: t
    }));
  }, n.prototype.preloadAutoWidthImages = function (e) {
    e.each(t.proxy(function (e, i) {
      this.enter("pre-loading"), i = t(i), t(new Image()).one("load", t.proxy(function (t) {
        i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"));
    }, this));
  }, n.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));

    for (var s in this._plugins) {
      this._plugins[s].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, n.prototype.op = function (t, e, i) {
    var s = this.settings.rtl;

    switch (e) {
      case "<":
        return s ? t > i : t < i;

      case ">":
        return s ? t < i : t > i;

      case ">=":
        return s ? t <= i : t >= i;

      case "<=":
        return s ? t >= i : t <= i;
    }
  }, n.prototype.on = function (t, e, i, s) {
    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
  }, n.prototype.off = function (t, e, i, s) {
    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
  }, n.prototype.trigger = function (e, i, s, o, r) {
    var a = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        h = t.camelCase(t.grep(["on", e, s], function (t) {
      return t;
    }).join("-").toLowerCase()),
        l = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
      relatedTarget: this
    }, a, i));
    return this._supress[e] || (t.each(this._plugins, function (t, e) {
      e.onTrigger && e.onTrigger(l);
    }), this.register({
      type: n.Type.Event,
      name: e
    }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l;
  }, n.prototype.enter = function (e) {
    t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
      this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++;
    }, this));
  }, n.prototype.leave = function (e) {
    t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
      this._states.current[e]--;
    }, this));
  }, n.prototype.register = function (e) {
    if (e.type === n.Type.Event) {
      if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
        var i = t.event.special[e.name]._default;
        t.event.special[e.name]._default = function (t) {
          return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments);
        }, t.event.special[e.name].owl = !0;
      }
    } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, s) {
      return t.inArray(i, this._states.tags[e.name]) === s;
    }, this)));
  }, n.prototype.suppress = function (e) {
    t.each(e, t.proxy(function (t, e) {
      this._supress[e] = !0;
    }, this));
  }, n.prototype.release = function (e) {
    t.each(e, t.proxy(function (t, e) {
      delete this._supress[e];
    }, this));
  }, n.prototype.pointer = function (t) {
    var i = {
      x: null,
      y: null
    };
    return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i;
  }, n.prototype.isNumeric = function (t) {
    return !isNaN(parseFloat(t));
  }, n.prototype.difference = function (t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }, t.fn.owlCarousel = function (e) {
    var i = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var s = t(this),
          o = s.data("owl.carousel");
      o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
        o.register({
          type: n.Type.Event,
          name: i
        }), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
          t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]));
        }, o));
      })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
    });
  }, t.fn.owlCarousel.Constructor = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  n.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, n.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, n.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, n.prototype.destroy = function () {
    var t, i;
    e.clearInterval(this._interval);

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
          var i = this._core.settings,
              s = i.center && Math.ceil(i.items / 2) || i.items,
              n = i.center && -1 * s || 0,
              o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
              r = this._core.clones().length,
              a = t.proxy(function (t, e) {
            this.load(e);
          }, this);

          for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, s++)); n++ < s;) {
            this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++;
          }
        }
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  n.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, n.prototype.load = function (i) {
    var s = this._core.$stage.children().eq(i),
        n = s && s.find(".owl-lazy");

    !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
      var n,
          o = t(s),
          r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
      this._core.trigger("load", {
        element: o,
        url: r
      }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
        o.css("opacity", 1), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy");
      }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function () {
        this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy");
      }, this)).attr("srcset", r) : ((n = new Image()).onload = t.proxy(function () {
        o.css({
          "background-image": 'url("' + r + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy");
      }, this), n.src = r);
    }, this)), this._loaded.push(s.get(0)));
  }, n.prototype.destroy = function () {
    var t, e;

    for (t in this.handlers) {
      this._core.$element.off(t, this.handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(i) {
    this._core = i, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
      }, this),
      "loaded.owl.lazy": t.proxy(function (t) {
        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var s = this;
    t(e).on("load", function () {
      s._core.settings.autoHeight && s.update();
    }), t(e).resize(function () {
      s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId), s._intervalId = setTimeout(function () {
        s.update();
      }, 250));
    });
  };

  n.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, n.prototype.update = function () {
    var e = this._core._current,
        i = e + this._core.settings.items,
        s = this._core.settings.lazyLoad,
        n = this._core.$stage.children().toArray().slice(e, i),
        o = [],
        r = 0;

    t.each(n, function (e, i) {
      o.push(t(i).height());
    }), (r = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass);
  }, n.prototype.destroy = function () {
    var t, e;

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
      }, this),
      "refreshed.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": t.proxy(function (t) {
        t.namespace && "position" === t.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": t.proxy(function (e) {
        if (e.namespace) {
          var i = t(e.content).find(".owl-video");
          i.length && (i.css("display", "none"), this.fetch(i, t(e.content)));
        }
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
      this.play(t);
    }, this));
  };

  n.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, n.prototype.fetch = function (t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
        n = t.attr("data-width") || this._core.settings.videoWidth,
        o = t.attr("data-height") || this._core.settings.videoHeight,
        r = t.attr("href");

    if (!r) throw new Error("Missing video URL.");
    if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";else if (s[3].indexOf("vimeo") > -1) i = "vimeo";else {
      if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      i = "vzaar";
    }
    s = s[6], this._videos[r] = {
      type: i,
      id: s,
      width: n,
      height: o
    }, e.attr("data-video", r), this.thumbnail(t, this._videos[r]);
  }, n.prototype.thumbnail = function (e, i) {
    var s,
        n,
        o,
        r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
        a = e.find("img"),
        h = "src",
        l = "",
        c = this._core.settings,
        p = function p(i) {
      n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? t("<div/>", {
        "class": "owl-video-tn " + l,
        srcType: i
      }) : t("<div/>", {
        "class": "owl-video-tn",
        style: "opacity:1;background-image:url(" + i + ")"
      }), e.after(s), e.after(n);
    };

    if (e.wrap(t("<div/>", {
      "class": "owl-video-wrapper",
      style: r
    })), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length) return p(a.attr(h)), a.remove(), !1;
    "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", p(o)) : "vimeo" === i.type ? t.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(t) {
        o = t[0].thumbnail_large, p(o);
      }
    }) : "vzaar" === i.type && t.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(t) {
        o = t.framegrab_url, p(o);
      }
    });
  }, n.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, n.prototype.play = function (e) {
    var i,
        s = t(e.target).closest("." + this._core.settings.itemClass),
        n = this._videos[s.attr("data-video")],
        o = n.width || "100%",
        r = n.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"));
  }, n.prototype.isInFullScreen = function () {
    var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
    return e && t(e).parent().hasClass("owl-video-frame");
  }, n.prototype.destroy = function () {
    var t, e;

    this._core.$element.off("click.owl.video");

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Video = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
      "change.owl.carousel": t.proxy(function (t) {
        t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
        t.namespace && (this.swapping = "translated" == t.type);
      }, this),
      "translate.owl.carousel": t.proxy(function (t) {
        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  n.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, n.prototype.swap = function () {
    if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
      this.core.speed(0);
      var e,
          i = t.proxy(this.clear, this),
          s = this.core.$stage.children().eq(this.previous),
          n = this.core.$stage.children().eq(this.next),
          o = this.core.settings.animateIn,
          r = this.core.settings.animateOut;
      this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
        left: e + "px"
      }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o));
    }
  }, n.prototype.clear = function (e) {
    t(e.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, n.prototype.destroy = function () {
    var t, e;

    for (t in this.handlers) {
      this.core.$element.off(t, this.handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Animate = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": t.proxy(function (t) {
        t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": t.proxy(function (t, e, i) {
        t.namespace && this.play(e, i);
      }, this),
      "stop.owl.autoplay": t.proxy(function (t) {
        t.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": t.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": t.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": t.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": t.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options);
  };

  n.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, n.prototype._next = function (s) {
    this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed);
  }, n.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, n.prototype.play = function (i, s) {
    var n;
    this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - n);
  }, n.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"));
  }, n.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call));
  }, n.prototype.destroy = function () {
    var t, e;
    this.stop();

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  "use strict";

  var n = function n(e) {
    this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": t.proxy(function (e) {
        e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": t.proxy(function (t) {
        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
      }, this),
      "changed.owl.carousel": t.proxy(function (t) {
        t.namespace && "position" == t.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": t.proxy(function (t) {
        t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": t.proxy(function (t) {
        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  n.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, n.prototype.initialize = function () {
    var e,
        i = this._core.settings;
    this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
      this.prev(i.navSpeed);
    }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
      this.next(i.navSpeed);
    }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
      var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
      e.preventDefault(), this.to(s, i.dotsSpeed);
    }, this));

    for (e in this._overrides) {
      this._core[e] = t.proxy(this[e], this);
    }
  }, n.prototype.destroy = function () {
    var t, e, i, s, n;
    n = this._core.settings;

    for (t in this._handlers) {
      this.$element.off(t, this._handlers[t]);
    }

    for (e in this._controls) {
      "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
    }

    for (s in this.overides) {
      this._core[s] = this._overrides[s];
    }

    for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, n.prototype.update = function () {
    var t,
        e,
        i = this._core.clones().length / 2,
        s = i + this._core.items().length,
        n = this._core.maximum(!0),
        o = this._core.settings,
        r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;

    if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
      if (e >= r || 0 === e) {
        if (this._pages.push({
          start: Math.min(n, t - i),
          end: t - i + r - 1
        }), Math.min(n, t - i) === n) break;
        e = 0, 0;
      }

      e += this._core.mergers(this._core.relative(t));
    }
  }, n.prototype.draw = function () {
    var e,
        i = this._core.settings,
        s = this._core.items().length <= i.items,
        n = this._core.relative(this._core.current()),
        o = i.loop || i.rewind;

    this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"));
  }, n.prototype.onTrigger = function (e) {
    var i = this._core.settings;
    e.page = {
      index: t.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
    };
  }, n.prototype.current = function () {
    var e = this._core.relative(this._core.current());

    return t.grep(this._pages, t.proxy(function (t, i) {
      return t.start <= e && t.end >= e;
    }, this)).pop();
  }, n.prototype.getPosition = function (e) {
    var i,
        s,
        n = this._core.settings;
    return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i;
  }, n.prototype.next = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
  }, n.prototype.prev = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
  }, n.prototype.to = function (e, i, s) {
    var n;
    !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i);
  }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  "use strict";

  var n = function n(i) {
    this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": t.proxy(function (i) {
        i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": t.proxy(function (e) {
        if (e.namespace) {
          var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!i) return;
          this._hashes[i] = e.content;
        }
      }, this),
      "changed.owl.carousel": t.proxy(function (i) {
        if (i.namespace && "position" === i.property.name) {
          var s = this._core.items(this._core.relative(this._core.current())),
              n = t.map(this._hashes, function (t, e) {
            return t === s ? e : null;
          }).join();

          if (!n || e.location.hash.slice(1) === n) return;
          e.location.hash = n;
        }
      }, this)
    }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
      var i = e.location.hash.substring(1),
          s = this._core.$stage.children(),
          n = this._hashes[i] && s.index(this._hashes[i]);

      void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0);
    }, this));
  };

  n.Defaults = {
    URLhashListener: !1
  }, n.prototype.destroy = function () {
    var i, s;
    t(e).off("hashchange.owl.navigation");

    for (i in this._handlers) {
      this._core.$element.off(i, this._handlers[i]);
    }

    for (s in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[s] && (this[s] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Hash = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  function n(e, i) {
    var n = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
    return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
      if (r[e] !== s) return n = !i || e, !1;
    }), n;
  }

  function o(t) {
    return n(t, !0);
  }

  var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      h = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      l = function l() {
    return !!n("transform");
  },
      c = function c() {
    return !!n("perspective");
  },
      p = function p() {
    return !!n("animation");
  };

  (function () {
    return !!n("transition");
  })() && (t.support.transition = new String(o("transition")), t.support.transition.end = h.transition.end[t.support.transition]), p() && (t.support.animation = new String(o("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l() && (t.support.transform = new String(o("transform")), t.support.transform3d = c());
}(window.Zepto || window.jQuery, window, document);
/*========== Fitty JS ==========*/

!function (e, t) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var n; }
}(this, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }

    return e;
  };

  t["default"] = function (e) {
    function t(e, t) {
      var i = n({}, z, t),
          r = e.map(function (e) {
        var t = n({}, i, {
          element: e
        });
        return S(t), T(t), {
          element: e,
          fit: b(t, o.DIRTY),
          unsubscribe: w(t)
        };
      });
      return l(), r;
    }

    function i(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e ? t(r(document.querySelectorAll(e)), n) : t([e], n)[0];
    }

    if (e) {
      var r = function r(e) {
        return [].slice.call(e);
      },
          o = {
        IDLE: 0,
        DIRTY_CONTENT: 1,
        DIRTY_LAYOUT: 2,
        DIRTY: 3
      },
          u = [],
          a = null,
          l = "requestAnimationFrame" in e ? function () {
        e.cancelAnimationFrame(a), a = e.requestAnimationFrame(function () {
          s(u.filter(function (e) {
            return e.dirty;
          }));
        });
      } : function () {},
          c = function c(e) {
        return function () {
          u.forEach(function (t) {
            t.dirty = e;
          }), l();
        };
      },
          s = function s(e) {
        e.filter(function (e) {
          return !e.styleComputed;
        }).forEach(function (e) {
          e.styleComputed = p(e);
        }), e.filter(m).forEach(y), e.filter(d).forEach(f), e.forEach(v), e.forEach(h);
      },
          f = function f(e) {
        e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
      },
          d = function d(e) {
        return e.dirty !== o.DIRTY_LAYOUT || e.dirty === o.DIRTY_LAYOUT && e.element.parentNode.clientWidth !== e.availableWidth;
      },
          p = function p(t) {
        var n = e.getComputedStyle(t.element, null);
        t.currentFontSize = parseInt(n.getPropertyValue("font-size"), 10), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space");
      },
          m = function m(e) {
        var t = !1;
        return /inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), t;
      },
          v = function v(e) {
        y(e), e.dirty = o.IDLE;
      },
          y = function y(e) {
        e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px";
      },
          h = function h(e) {
        e.element.dispatchEvent(new CustomEvent("fit", {
          detail: {
            oldValue: e.previousFontSize,
            newValue: e.currentFontSize,
            scaleFactor: e.currentFontSize / e.previousFontSize
          }
        }));
      },
          b = function b(e, t) {
        return function () {
          e.dirty = t, l();
        };
      },
          S = function S(e) {
        e.newbie = !0, e.dirty = !0, u.push(e);
      },
          w = function w(e) {
        return function () {
          u = u.filter(function (t) {
            return t.element !== e.element;
          }), e.observeMutations && e.observer.disconnect(), e.element.style.cssText = e.originalStyle;
        };
      },
          T = function T(e) {
        e.observeMutations && (e.observer = new MutationObserver(b(e, o.DIRTY_CONTENT)), e.observer.observe(e.element, e.observeMutations));
      },
          z = {
        minSize: 16,
        maxSize: 512,
        multiLine: !0,
        observeMutations: "MutationObserver" in e && {
          subtree: !0,
          childList: !0,
          characterData: !0
        }
      },
          F = null,
          g = function g() {
        e.clearTimeout(F), F = e.setTimeout(c(o.DIRTY_LAYOUT), i.observeWindowDelay);
      },
          D = ["resize", "orientationchange"];

      return Object.defineProperty(i, "observeWindow", {
        set: function set(t) {
          var n = (t ? "add" : "remove") + "EventListener";
          D.forEach(function (t) {
            e[n](t, g);
          });
        }
      }), i.observeWindow = !0, i.observeWindowDelay = 100, i.fitAll = c(o.DIRTY), i;
    }
  }("undefined" == typeof window ? null : window), e.exports = t["default"];
});
/*========== Isotope JS ==========*/

!function (t) {
  function e() {}

  function i(t) {
    if (t) {
      var i = "undefined" == typeof console ? e : function (t) {
        console.error(t);
      };
      return t.bridget = function (e, n) {
        var r, s, a;
        (a = n).prototype.option || (a.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
        }), r = e, s = n, t.fn[r] = function (e) {
          if ("string" == typeof e) {
            for (var n = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
              var p = this[a],
                  h = t.data(p, r);
              if (h) {
                if (t.isFunction(h[e]) && "_" !== e.charAt(0)) {
                  var f = h[e].apply(h, n);
                  if (void 0 !== f) return f;
                } else i("no such method '" + e + "' for " + r + " instance");
              } else i("cannot call methods on " + r + " prior to initialization; attempted to call '" + e + "'");
            }

            return this;
          }

          return this.each(function () {
            var i = t.data(this, r);
            i ? (i.option(e), i._init()) : (i = new s(this, e), t.data(this, r, i));
          });
        };
      }, t.bridget;
    }
  }

  var o = Array.prototype.slice;
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window), function (t) {
  function e(e) {
    var i = t.event;
    return i.target = i.target || i.srcElement || e, i;
  }

  var i = document.documentElement,
      o = function o() {};

  i.addEventListener ? o = function o(t, e, i) {
    t.addEventListener(e, i, !1);
  } : i.attachEvent && (o = function o(t, i, _o) {
    t[i + _o] = _o.handleEvent ? function () {
      var i = e(t);

      _o.handleEvent.call(_o, i);
    } : function () {
      var i = e(t);

      _o.call(t, i);
    }, t.attachEvent("on" + i, t[i + _o]);
  });

  var n = function n() {};

  i.removeEventListener ? n = function n(t, e, i) {
    t.removeEventListener(e, i, !1);
  } : i.detachEvent && (n = function n(t, e, i) {
    t.detachEvent("on" + e, t[e + i]);

    try {
      delete t[e + i];
    } catch (o) {
      t[e + i] = void 0;
    }
  });
  var r = {
    bind: o,
    unbind: n
  };
   true ? !(__WEBPACK_LOCAL_MODULE_1__factory = (r), (__WEBPACK_LOCAL_MODULE_1__module = { id: "eventie/eventie", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : undefined;
}(window), function () {
  "use strict";

  function t() {}

  function e(t, e) {
    for (var i = t.length; i--;) {
      if (t[i].listener === e) return i;
    }

    return -1;
  }

  function i(t) {
    return function () {
      return this[t].apply(this, arguments);
    };
  }

  var o = t.prototype,
      n = this,
      r = n.EventEmitter;
  o.getListeners = function (t) {
    var e,
        i,
        o = this._getEvents();

    if (t instanceof RegExp) {
      e = {};

      for (i in o) {
        o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
      }
    } else e = o[t] || (o[t] = []);

    return e;
  }, o.flattenListeners = function (t) {
    var e,
        i = [];

    for (e = 0; e < t.length; e += 1) {
      i.push(t[e].listener);
    }

    return i;
  }, o.getListenersAsObject = function (t) {
    var e,
        i = this.getListeners(t);
    return i instanceof Array && ((e = {})[t] = i), e || i;
  }, o.addListener = function (t, i) {
    var o,
        n = this.getListenersAsObject(t),
        r = "object" == typeof i;

    for (o in n) {
      n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
        listener: i,
        once: !1
      });
    }

    return this;
  }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
    return this.addListener(t, {
      listener: e,
      once: !0
    });
  }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
    return this.getListeners(t), this;
  }, o.defineEvents = function (t) {
    for (var e = 0; e < t.length; e += 1) {
      this.defineEvent(t[e]);
    }

    return this;
  }, o.removeListener = function (t, i) {
    var o,
        n,
        r = this.getListenersAsObject(t);

    for (n in r) {
      r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
    }

    return this;
  }, o.off = i("removeListener"), o.addListeners = function (t, e) {
    return this.manipulateListeners(!1, t, e);
  }, o.removeListeners = function (t, e) {
    return this.manipulateListeners(!0, t, e);
  }, o.manipulateListeners = function (t, e, i) {
    var o,
        n,
        r = t ? this.removeListener : this.addListener,
        s = t ? this.removeListeners : this.addListeners;
    if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--;) {
      r.call(this, e, i[o]);
    } else for (o in e) {
      e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
    }
    return this;
  }, o.removeEvent = function (t) {
    var e,
        i = typeof t,
        o = this._getEvents();

    if ("string" === i) delete o[t];else if (t instanceof RegExp) for (e in o) {
      o.hasOwnProperty(e) && t.test(e) && delete o[e];
    } else delete this._events;
    return this;
  }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
    var i,
        o,
        n,
        r,
        s = this.getListenersAsObject(t);

    for (n in s) {
      if (s.hasOwnProperty(n)) for (o = s[n].length; o--;) {
        i = s[n][o], !0 === i.once && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
      }
    }

    return this;
  }, o.trigger = i("emitEvent"), o.emit = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e);
  }, o.setOnceReturnValue = function (t) {
    return this._onceReturnValue = t, this;
  }, o._getOnceReturnValue = function () {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  }, o._getEvents = function () {
    return this._events || (this._events = {});
  }, t.noConflict = function () {
    return n.EventEmitter = r, t;
  },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_2__ = ((function () {
    return t;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}.call(this), function (t) {
  function e(t) {
    if (t) {
      if ("string" == typeof o[t]) return t;
      t = t.charAt(0).toUpperCase() + t.slice(1);

      for (var e, n = 0, r = i.length; r > n; n++) {
        if (e = i[n] + t, "string" == typeof o[e]) return e;
      }
    }
  }

  var i = "Webkit Moz ms Ms O".split(" "),
      o = document.documentElement.style;
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_3__ = ((function () {
    return e;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window), function (t, e) {
  function i(t) {
    var e = parseFloat(t);
    return -1 === t.indexOf("%") && !isNaN(e) && e;
  }

  function o(e) {
    function o(e, i) {
      if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
      var o = e.style,
          n = o.left,
          r = e.runtimeStyle,
          s = r && r.left;
      return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i;
    }

    var s,
        a,
        u,
        p = !1;
    return function (h) {
      if (function () {
        if (!p) {
          p = !0;
          var o = t.getComputedStyle;

          if (l = o ? function (t) {
            return o(t, null);
          } : function (t) {
            return t.currentStyle;
          }, s = function s(t) {
            var e = l(t);
            return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
          }, a = e("boxSizing")) {
            var r = document.createElement("div");
            r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[a] = "border-box";
            var h = document.body || document.documentElement;
            h.appendChild(r);
            var f = s(r);
            u = 200 === i(f.width), h.removeChild(r);
          }
        }

        var l;
      }(), "string" == typeof h && (h = document.querySelector(h)), h && "object" == typeof h && h.nodeType) {
        var f = s(h);
        if ("none" === f.display) return function () {
          for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, e = 0, i = r.length; i > e; e++) {
            t[r[e]] = 0;
          }

          return t;
        }();
        var l = {};
        l.width = h.offsetWidth, l.height = h.offsetHeight;

        for (var d = l.isBorderBox = !(!a || !f[a] || "border-box" !== f[a]), c = 0, y = r.length; y > c; c++) {
          var m = r[c],
              g = f[m];
          g = o(h, g);
          var v = parseFloat(g);
          l[m] = isNaN(v) ? 0 : v;
        }

        var _ = l.paddingLeft + l.paddingRight,
            I = l.paddingTop + l.paddingBottom,
            z = l.marginLeft + l.marginRight,
            L = l.marginTop + l.marginBottom,
            x = l.borderLeftWidth + l.borderRightWidth,
            E = l.borderTopWidth + l.borderBottomWidth,
            b = d && u,
            S = i(f.width);

        !1 !== S && (l.width = S + (b ? 0 : _ + x));
        var T = i(f.height);
        return !1 !== T && (l.height = T + (b ? 0 : I + E)), l.innerWidth = l.width - (_ + x), l.innerHeight = l.height - (I + E), l.outerWidth = l.width + z, l.outerHeight = l.height + L, l;
      }
    };
  }

  var n = "undefined" == typeof console ? function () {} : function (t) {
    console.error(t);
  },
      r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_LOCAL_MODULE_4__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window), function (t) {
  function e(t) {
    "function" == typeof t && (e.isReady ? t() : s.push(t));
  }

  function i(t) {
    var i = "readystatechange" === t.type && "complete" !== r.readyState;
    e.isReady || i || o();
  }

  function o() {
    e.isReady = !0;

    for (var t = 0, i = s.length; i > t; t++) {
      (0, s[t])();
    }
  }

  function n(n) {
    return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e;
  }

  var r = t.document,
      s = [];
  e.isReady = !1,  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window), function (t) {
  "use strict";

  function e(t, e) {
    return t[n](e);
  }

  function i(t) {
    t.parentNode || document.createDocumentFragment().appendChild(t);
  }

  var o,
      n = function () {
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
      var n = e[i] + "MatchesSelector";
      if (t[n]) return n;
    }
  }();

  if (n) {
    var r = e(document.createElement("div"), "div");
    o = r ? e : function (t, o) {
      return i(t), e(t, o);
    };
  } else o = function o(t, e) {
    i(t);

    for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++) {
      if (o[n] === t) return !0;
    }

    return !1;
  };

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_6__ = ((function () {
    return o;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(Element.prototype), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_5__, __WEBPACK_LOCAL_MODULE_6__], __WEBPACK_LOCAL_MODULE_7__ = ((function (i, o) {
    return e(t, i, o);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function (t, e, i) {
  var o = {
    extend: function extend(t, e) {
      for (var i in e) {
        t[i] = e[i];
      }

      return t;
    },
    modulo: function modulo(t, e) {
      return (t % e + e) % e;
    }
  },
      n = Object.prototype.toString;
  o.isArray = function (t) {
    return "[object Array]" == n.call(t);
  }, o.makeArray = function (t) {
    var e = [];
    if (o.isArray(t)) e = t;else if (t && "number" == typeof t.length) for (var i = 0, n = t.length; n > i; i++) {
      e.push(t[i]);
    } else e.push(t);
    return e;
  }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e);
  } : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++) {
      if (t[i] === e) return i;
    }

    return -1;
  }, o.removeFrom = function (t, e) {
    var i = o.indexOf(t, e);
    -1 != i && t.splice(i, 1);
  }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
    return t instanceof HTMLElement;
  } : function (t) {
    return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName;
  }, o.setText = function () {
    var t;
    return function (e, i) {
      e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i;
    };
  }(), o.getParent = function (t, e) {
    for (; t != document.body;) {
      if (t = t.parentNode, i(t, e)) return t;
    }
  }, o.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, o.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, o.filterFindElements = function (t, e) {
    for (var n = [], r = 0, s = (t = o.makeArray(t)).length; s > r; r++) {
      var a = t[r];
      if (o.isElement(a)) if (e) {
        i(a, e) && n.push(a);

        for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++) {
          n.push(u[p]);
        }
      } else n.push(a);
    }

    return n;
  }, o.debounceMethod = function (t, e, i) {
    var o = t.prototype[e],
        n = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[n];
      t && clearTimeout(t);
      var e = arguments,
          r = this;
      this[n] = setTimeout(function () {
        o.apply(r, e), delete r[n];
      }, i || 100);
    };
  }, o.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var r = t.console;
  return o.htmlInit = function (i, n) {
    e(function () {
      for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
        var h,
            f = s[u],
            l = f.getAttribute(a);

        try {
          h = l && JSON.parse(l);
        } catch (t) {
          r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + t);
          continue;
        }

        var d = new i(f, h),
            c = t.jQuery;
        c && c.data(f, n, d);
      }
    });
  }, o;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_7__], __WEBPACK_LOCAL_MODULE_8__ = ((function (i, o, n, r) {
    return e(t, i, o, n, r);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function (t, e, i, o, n) {
  "use strict";

  function r(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  var s = t.getComputedStyle,
      a = s ? function (t) {
    return s(t, null);
  } : function (t) {
    return t.currentStyle;
  },
      u = o("transition"),
      p = o("transform"),
      h = u && p,
      f = !!o("perspective"),
      l = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "otransitionend",
    transition: "transitionend"
  }[u],
      d = ["transform", "transition", "transitionDuration", "transitionProperty"],
      c = function () {
    for (var t = {}, e = 0, i = d.length; i > e; e++) {
      var n = d[e],
          r = o(n);
      r && r !== n && (t[n] = r);
    }

    return t;
  }();

  n.extend(r.prototype, e.prototype), r.prototype._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, r.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, r.prototype.getSize = function () {
    this.size = i(this.element);
  }, r.prototype.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      e[c[i] || i] = t[i];
    }
  }, r.prototype.getPosition = function () {
    var t = a(this.element),
        e = this.layout.options,
        i = e.isOriginLeft,
        o = e.isOriginTop,
        n = t[i ? "left" : "right"],
        r = t[o ? "top" : "bottom"],
        s = this.layout.size,
        u = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
        p = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
    u = isNaN(u) ? 0 : u, p = isNaN(p) ? 0 : p, u -= i ? s.paddingLeft : s.paddingRight, p -= o ? s.paddingTop : s.paddingBottom, this.position.x = u, this.position.y = p;
  }, r.prototype.layoutPosition = function () {
    var t = this.layout.size,
        e = this.layout.options,
        i = {},
        o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
        n = e.isOriginLeft ? "left" : "right",
        r = e.isOriginLeft ? "right" : "left",
        s = this.position.x + t[o];
    i[n] = this.getXValue(s), i[r] = "";
    var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
        u = e.isOriginTop ? "top" : "bottom",
        p = e.isOriginTop ? "bottom" : "top",
        h = this.position.y + t[a];
    i[u] = this.getYValue(h), i[p] = "", this.css(i), this.emitEvent("layout", [this]);
  }, r.prototype.getXValue = function (t) {
    var e = this.layout.options;
    return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, r.prototype.getYValue = function (t) {
    var e = this.layout.options;
    return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, r.prototype._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        o = this.position.y,
        n = parseInt(t, 10),
        r = parseInt(e, 10),
        s = n === this.position.x && r === this.position.y;

    if (this.setPosition(t, e), !s || this.isTransitioning) {
      var a = t - i,
          u = e - o,
          p = {};
      p.transform = this.getTranslate(a, u), this.transition({
        to: p,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      });
    } else this.layoutPosition();
  }, r.prototype.getTranslate = function (t, e) {
    var i = this.layout.options;
    return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, f ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)";
  }, r.prototype.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, r.prototype.moveTo = h ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, r.prototype._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, r.prototype._transition = function (t) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var e = this._transn;

      for (var i in t.onTransitionEnd) {
        e.onEnd[i] = t.onTransitionEnd[i];
      }

      for (i in t.to) {
        e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
      }

      if (t.from) {
        this.css(t.from);
        this.element.offsetHeight;
        null;
      }

      this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    } else this._nonTransition(t);
  };
  var y = "opacity," + (c.transform || "transform").replace(/([A-Z])/g, function (t) {
    return "-" + t.toLowerCase();
  });
  r.prototype.enableTransition = function () {
    this.isTransitioning || (this.css({
      transitionProperty: y,
      transitionDuration: this.layout.options.transitionDuration
    }), this.element.addEventListener(l, this, !1));
  }, r.prototype.transition = r.prototype[u ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, r.prototype.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var m = {
    "-webkit-transform": "transform",
    "-moz-transform": "transform",
    "-o-transform": "transform"
  };
  r.prototype.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          i = m[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[i], function (t) {
        for (var e in t) {
          return !1;
        }

        return !0;
      }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
      this.emitEvent("transitionEnd", [this]);
    }
  }, r.prototype.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1;
  }, r.prototype._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var g = {
    transitionProperty: "",
    transitionDuration: ""
  };
  return r.prototype.removeTransitionStyles = function () {
    this.css(g);
  }, r.prototype.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, r.prototype.remove = function () {
    if (u && parseFloat(this.layout.options.transitionDuration)) {
      var t = this;
      this.once("transitionEnd", function () {
        t.removeElem();
      }), this.hide();
    } else this.removeElem();
  }, r.prototype.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {};
    e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, r.prototype.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, r.prototype.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, r.prototype.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {};
    e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, r.prototype.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, r.prototype.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, r;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_8__], __WEBPACK_LOCAL_MODULE_9__ = ((function (i, o, n, r, s) {
    return e(t, i, o, n, r, s);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function (t, e, i, o, n, r) {
  "use strict";

  function s(t, e) {
    var i = n.getQueryElement(t);

    if (i) {
      this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
      var o = ++h;
      this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout();
    } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
  }

  var a = t.console,
      u = t.jQuery,
      p = function p() {},
      h = 0,
      f = {};

  return s.namespace = "outlayer", s.Item = r, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    isInitLayout: !0,
    isOriginLeft: !0,
    isOriginTop: !0,
    isResizeBound: !0,
    isResizingContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  }, n.extend(s.prototype, i.prototype), s.prototype.option = function (t) {
    n.extend(this.options, t);
  }, s.prototype._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
  }, s.prototype.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, s.prototype._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
      var s = new i(e[n], this);
      o.push(s);
    }

    return o;
  }, s.prototype._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }, s.prototype.getItemElements = function () {
    for (var t = [], e = 0, i = this.items.length; i > e; e++) {
      t.push(this.items[e].element);
    }

    return t;
  }, s.prototype.layout = function () {
    this._resetLayout(), this._manageStamps();
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, t), this._isLayoutInited = !0;
  }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
    this.getSize();
  }, s.prototype.getSize = function () {
    this.size = o(this.element);
  }, s.prototype._getMeasurement = function (t, e) {
    var i,
        r = this.options[t];
    r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0;
  }, s.prototype.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, s.prototype._getItemsForLayout = function (t) {
    for (var e = [], i = 0, o = t.length; o > i; i++) {
      var n = t[i];
      n.isIgnored || e.push(n);
    }

    return e;
  }, s.prototype._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      for (var i = [], o = 0, n = t.length; n > o; o++) {
        var r = t[o],
            s = this._getItemLayoutPosition(r);

        s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s);
      }

      this._processLayoutQueue(i);
    }
  }, s.prototype._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, s.prototype._processLayoutQueue = function (t) {
    for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];

      this._positionItem(o.item, o.x, o.y, o.isInstant);
    }
  }, s.prototype._positionItem = function (t, e, i, o) {
    o ? t.goTo(e, i) : t.moveTo(e, i);
  }, s.prototype._postLayout = function () {
    this.resizeContainer();
  }, s.prototype.resizeContainer = function () {
    if (this.options.isResizingContainer) {
      var t = this._getContainerSize();

      t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
    }
  }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, s.prototype._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }

    function o() {
      ++s === r && i();
    }

    var n = this,
        r = e.length;
    if (e && r) for (var s = 0, a = 0, u = e.length; u > a; a++) {
      e[a].once(t, o);
    } else i();
  }, s.prototype.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), u) if (this.$element = this.$element || u(this.element), e) {
      var n = u.Event(e);
      n.type = t, this.$element.trigger(n, i);
    } else this.$element.trigger(t, i);
  }, s.prototype.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, s.prototype.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, s.prototype.stamp = function (t) {
    if (t = this._find(t)) {
      this.stamps = this.stamps.concat(t);

      for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        this.ignore(o);
      }
    }
  }, s.prototype.unstamp = function (t) {
    if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];
      n.removeFrom(this.stamps, o), this.unignore(o);
    }
  }, s.prototype._find = function (t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
  }, s.prototype._manageStamps = function () {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();

      for (var t = 0, e = this.stamps.length; e > t; t++) {
        var i = this.stamps[t];

        this._manageStamp(i);
      }
    }
  }, s.prototype._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        i = this._boundingRect,
        n = o(t);
    return {
      left: e.left - i.left - n.marginLeft,
      top: e.top - i.top - n.marginTop,
      right: i.right - e.right - n.marginRight,
      bottom: i.bottom - e.bottom - n.marginBottom
    };
  }, s.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, s.prototype.bindResize = function () {
    this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0);
  }, s.prototype.unbindResize = function () {
    this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1;
  }, s.prototype.onresize = function () {
    this.resizeTimeout && clearTimeout(this.resizeTimeout);
    var t = this;
    this.resizeTimeout = setTimeout(function () {
      t.resize(), delete t.resizeTimeout;
    }, 100);
  }, s.prototype.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, s.prototype.needsResizeLayout = function () {
    var t = o(this.element);
    return this.size && t && t.innerWidth !== this.size.innerWidth;
  }, s.prototype.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, s.prototype.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, s.prototype.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, s.prototype.reveal = function (t) {
    this._emitCompleteOnItems("reveal", t);

    for (var e = t && t.length, i = 0; e && e > i; i++) {
      t[i].reveal();
    }
  }, s.prototype.hide = function (t) {
    this._emitCompleteOnItems("hide", t);

    for (var e = t && t.length, i = 0; e && e > i; i++) {
      t[i].hide();
    }
  }, s.prototype.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, s.prototype.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, s.prototype.getItem = function (t) {
    for (var e = 0, i = this.items.length; i > e; e++) {
      var o = this.items[e];
      if (o.element === t) return o;
    }
  }, s.prototype.getItems = function (t) {
    for (var e = [], i = 0, o = (t = n.makeArray(t)).length; o > i; i++) {
      var r = t[i],
          s = this.getItem(r);
      s && e.push(s);
    }

    return e;
  }, s.prototype.remove = function (t) {
    var e = this.getItems(t);
    if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, o = e.length; o > i; i++) {
      var r = e[i];
      r.remove(), n.removeFrom(this.items, r);
    }
  }, s.prototype.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "";

    for (var e = 0, i = this.items.length; i > e; e++) {
      this.items[e].destroy();
    }

    this.unbindResize();
    var o = this.element.outlayerGUID;
    delete f[o], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
    return e && f[e];
  }, s.create = function (t, e) {
    function i() {
      s.apply(this, arguments);
    }

    return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function () {
      r.apply(this, arguments);
    }, i.Item.prototype = new r(), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
  }, s.Item = r, s;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_10__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments);
  }

  e.prototype = new t.Item(), e.prototype._create = function () {
    this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {};
  }, e.prototype.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
          e = this.layout._sorters;

      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this);
      }
    }
  };
  var i = e.prototype.destroy;
  return e.prototype.destroy = function () {
    i.apply(this, arguments), this.css({
      display: ""
    });
  }, e;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_11__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }

  return function () {
    function t(t) {
      return function () {
        return e.prototype[t].apply(this.isotope, arguments);
      };
    }

    for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
      var s = o[n];
      i.prototype[s] = t(s);
    }
  }(), i.prototype.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element);
    return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight;
  }, i.prototype._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, i.prototype.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, i.prototype.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, i.prototype.getSegmentSize = function (t, e) {
    var i = t + e,
        o = "outer" + e;

    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e];
    }
  }, i.prototype.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }, i.prototype.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, i.prototype.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function o() {
      i.apply(this, arguments);
    }

    return o.prototype = new i(), e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o;
  }, i;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_7__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_12__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t, e, i) {
  var o = t.create("masonry");
  return o.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
    var t = this.cols;

    for (this.colYs = []; t--;) {
      this.colYs.push(0);
    }

    this.maxY = 0;
  }, o.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var o = this.columnWidth += this.gutter,
        n = this.containerWidth + this.gutter,
        r = n / o,
        s = o - n % o;
    r = Math[s && 1 > s ? "round" : "floor"](r), this.cols = Math.max(r, 1);
  }, o.prototype.getContainerWidth = function () {
    var t = this.options.isFitWidth ? this.element.parentNode : this.element,
        i = e(t);
    this.containerWidth = i && i.innerWidth;
  }, o.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        o = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);

    for (var n = this._getColGroup(o), r = Math.min.apply(Math, n), s = i.indexOf(n, r), a = {
      x: this.columnWidth * s,
      y: r
    }, u = r + t.size.outerHeight, p = this.cols + 1 - n.length, h = 0; p > h; h++) {
      this.colYs[s + h] = u;
    }

    return a;
  }, o.prototype._getColGroup = function (t) {
    if (2 > t) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
      var n = this.colYs.slice(o, o + t);
      e[o] = Math.max.apply(Math, n);
    }

    return e;
  }, o.prototype._manageStamp = function (t) {
    var i = e(t),
        o = this._getElementOffset(t),
        n = this.options.isOriginLeft ? o.left : o.right,
        r = n + i.outerWidth,
        s = Math.floor(n / this.columnWidth);

    s = Math.max(0, s);
    var a = Math.floor(r / this.columnWidth);
    a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);

    for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) {
      this.colYs[p] = Math.max(u, this.colYs[p]);
    }
  }, o.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t;
  }, o.prototype._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, o.prototype.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t !== this.containerWidth;
  }, o;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_11__, __WEBPACK_LOCAL_MODULE_12__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_13__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t, e) {
  "use strict";

  var i = t.create("masonry"),
      o = i.prototype._getElementOffset,
      n = i.prototype.layout,
      r = i.prototype._getMeasurement;
  (function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
  })(i.prototype, e.prototype), i.prototype._getElementOffset = o, i.prototype.layout = n, i.prototype._getMeasurement = r;
  var s = i.prototype.measureColumns;

  i.prototype.measureColumns = function () {
    this.items = this.isotope.filteredItems, s.call(this);
  };

  var a = i.prototype._manageStamp;
  return i.prototype._manageStamp = function () {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments);
  }, i;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_11__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_14__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t) {
  "use strict";

  var e = t.create("fitRows");
  return e.prototype._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
  }, e.prototype._getContainerSize = function () {
    return {
      height: this.maxY
    };
  }, e;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_11__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_15__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t) {
  "use strict";

  var e = t.create("vertical", {
    horizontalAlignment: 0
  });
  return e.prototype._resetLayout = function () {
    this.y = 0;
  }, e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    };
  }, e.prototype._getContainerSize = function () {
    return {
      height: this.y
    };
  }, e;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_10__, __WEBPACK_LOCAL_MODULE_11__, __WEBPACK_LOCAL_MODULE_13__, __WEBPACK_LOCAL_MODULE_14__, __WEBPACK_LOCAL_MODULE_15__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i, o, n, r, s, a) {
    return e(t, i, o, n, r, s, a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function (t, e, i, o, n, r, s) {
  var a = t.jQuery,
      u = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      p = document.documentElement.textContent ? function (t) {
    return t.textContent;
  } : function (t) {
    return t.innerText;
  },
      h = e.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  h.Item = r, h.LayoutMode = s, h.prototype._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];

    for (var t in s.modes) {
      this._initLayoutMode(t);
    }
  }, h.prototype.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, h.prototype._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
      t[i].id = this.itemGUID++;
    }

    return this._updateItemsSortData(t), t;
  }, h.prototype._initLayoutMode = function (t) {
    var e = s.modes[t],
        i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, h.prototype.layout = function () {
    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
  }, h.prototype._layout = function () {
    var t = this._getIsInstant();

    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, h.prototype.arrange = function (t) {
    function e() {
      o.reveal(i.needReveal), o.hide(i.needHide);
    }

    this.option(t), this._getIsInstant();

    var i = this._filter(this.items);

    this.filteredItems = i.matches;
    var o = this;
    this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout();
  }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function () {
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = t, t;
  }, h.prototype._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }

    var e,
        i,
        o,
        n = this;
    this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      o = !0, t();
    });
  }, h.prototype._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";

    for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
      var u = t[s];

      if (!u.isIgnored) {
        var p = r(u);
        p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u);
      }
    }

    return {
      matches: i,
      needReveal: o,
      needHide: n
    };
  }, h.prototype._getFilterTest = function (t) {
    return a && this.options.isJQueryFiltering ? function (e) {
      return a(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return o(e.element, t);
    };
  }, h.prototype.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, h.prototype._getSorters = function () {
    var t = this.options.getSortData;

    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }, h.prototype._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && e > i; i++) {
      t[i].updateSortData();
    }
  };

  var f = function () {
    return function (t) {
      if ("string" != typeof t) return t;
      var e,
          i,
          o = u(t).split(" "),
          n = o[0],
          r = n.match(/^\[(.+)\]$/),
          s = r && r[1],
          a = (i = n, (e = s) ? function (t) {
        return t.getAttribute(e);
      } : function (t) {
        var e = t.querySelector(i);
        return e && p(e);
      }),
          f = h.sortDataParsers[o[1]];
      return f ? function (t) {
        return t && f(a(t));
      } : function (t) {
        return t && a(t);
      };
    };
  }();

  h.sortDataParsers = {
    parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }),
    parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    })
  }, h.prototype._sort = function () {
    var t,
        e,
        i = this.options.sortBy;

    if (i) {
      var o = [].concat.apply(i, this.sortHistory),
          n = (t = o, e = this.options.sortAscending, function (i, o) {
        for (var n = 0, r = t.length; r > n; n++) {
          var s = t[n],
              a = i.sortData[s],
              u = o.sortData[s];

          if (a > u || u > a) {
            var p = void 0 !== e[s] ? e[s] : e;
            return (a > u ? 1 : -1) * (p ? 1 : -1);
          }
        }

        return 0;
      });
      this.filteredItems.sort(n), i != this.sortHistory[0] && this.sortHistory.unshift(i);
    }
  }, h.prototype._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e;
  }, h.prototype._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, h.prototype._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, h.prototype._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, h.prototype._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, h.prototype.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, h.prototype.appended = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i = this._filterRevealAdded(e);

      this.filteredItems = this.filteredItems.concat(i);
    }
  }, h.prototype.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      this._resetLayout(), this._manageStamps();

      var i = this._filterRevealAdded(e);

      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, h.prototype._filterRevealAdded = function (t) {
    var e = this._filter(t);

    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, h.prototype.insert = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i,
          o,
          n = e.length;

      for (i = 0; n > i; i++) {
        o = e[i], this.element.appendChild(o.element);
      }

      var r = this._filter(e).matches;

      for (i = 0; n > i; i++) {
        e[i].isLayoutInstant = !0;
      }

      for (this.arrange(), i = 0; n > i; i++) {
        delete e[i].isLayoutInstant;
      }

      this.reveal(r);
    }
  };
  var l = h.prototype.remove;
  return h.prototype.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    l.call(this, t);
    var i = e && e.length;
    if (i) for (var o = 0; i > o; o++) {
      var r = e[o];
      n.removeFrom(this.filteredItems, r);
    }
  }, h.prototype.shuffle = function () {
    for (var t = 0, e = this.items.length; e > t; t++) {
      this.items[t].sortData.random = Math.random();
    }

    this.options.sortBy = "random", this._sort(), this._layout();
  }, h.prototype._noTransition = function (t) {
    var e = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var i = t.call(this);
    return this.options.transitionDuration = e, i;
  }, h.prototype.getFilteredItemElements = function () {
    for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) {
      t.push(this.filteredItems[e].element);
    }

    return t;
  }, h;
});
!function (t) {
  "use strict";

  function i(t) {
    var i = t.create("moduloColumns");
    i.prototype._resetLayout = function () {
      this.getColumnWidth(), this._getMeasurement("gutter", "outerHeight"), this.getSize();
      var t = this.options.gutter || 0,
          i = this.size.innerWidth;
      this.columnWidth += t;
      var o = this.cols = Math.floor((i + t) / this.columnWidth) || 1;

      for (this.columnHeights = []; o--;) {
        this.columnHeights.push(0);
      }

      this.currentColumn = 0;
    }, i.prototype._getItemLayoutPosition = function (t) {
      t.getSize();
      var i = t.size.outerWidth,
          o = t.size.outerHeight,
          e = Math.min(this.cols, Math.ceil(i / this.columnWidth));
      this.currentColumn + e > this.cols && (this.currentColumn = 0);

      for (var n = 0, h = 0; h < e; h++) {
        n = Math.max(n, this.columnHeights[this.currentColumn + h]);
      }

      var s = n + o;

      for (h = 0; h < e; h++) {
        this.columnHeights[this.currentColumn + h] = s;
      }

      var u = {
        x: this.currentColumn * this.columnWidth,
        y: n
      };
      return this.currentColumn += e, this.currentColumn > this.cols && (this.currentColumn = 0), u;
    }, i.prototype._getContainerSize = function () {
      return {
        height: Math.max.apply(Math, this.columnHeights)
      };
    };
  }

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_11__], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window);
/*========== Magnific Popup JS ==========*/

!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (e) {
  var t,
      n,
      i,
      o,
      a,
      r,
      s = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      d = "Open",
      u = "Change",
      p = "mfp",
      f = "." + p,
      m = "mfp-ready",
      g = "mfp-removing",
      h = "mfp-prevent-close",
      v = function v() {},
      C = !!window.jQuery,
      y = e(window),
      w = function w(e, n) {
    t.ev.on(p + e + f, n);
  },
      b = function b(t, n, i, o) {
    var a = document.createElement("div");
    return a.className = "mfp-" + t, i && (a.innerHTML = i), o ? n && n.appendChild(a) : (a = e(a), n && a.appendTo(n)), a;
  },
      I = function I(n, i) {
    t.ev.triggerHandler(p + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      x = function x(n) {
    return n === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), r = n), t.currTemplate.closeBtn;
  },
      k = function k() {
    e.magnificPopup.instance || ((t = new v()).init(), e.magnificPopup.instance = t);
  };

  v.prototype = {
    constructor: v,
    init: function init() {
      var n = navigator.appVersion;
      t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = function () {
        var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition) return !0;

        for (; t.length;) {
          if (t.pop() + "Transition" in e) return !0;
        }

        return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
    },
    open: function open(n) {
      var o;

      if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;
        var r,
            s = n.items;

        for (o = 0; o < s.length; o++) {
          if (r = s[o], r.parsed && (r = r.el[0]), r === n.el[0]) {
            t.index = o;
            break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;

      if (!t.isOpen) {
        t.types = [], a = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = b("bg").on("click" + f, function () {
          t.close();
        }), t.wrap = b("wrap").attr("tabindex", -1).on("click" + f, function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = b("container", t.wrap)), t.contentContainer = b("content"), t.st.preloader && (t.preloader = b("preloader", t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;

        for (o = 0; o < l.length; o++) {
          var u = l[o];
          u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t);
        }

        I("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(c, function (e, t, n, i) {
          n.close_replaceWith = x(i.type);
        }), a += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
          overflow: t.st.overflowY,
          overflowX: "hidden",
          overflowY: t.st.overflowY
        }) : t.wrap.css({
          top: y.scrollTop(),
          position: "absolute"
        }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
          height: i.height(),
          position: "absolute"
        }), t.st.enableEscapeKey && i.on("keyup" + f, function (e) {
          27 === e.keyCode && t.close();
        }), y.on("resize" + f, function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
        var p = t.wH = y.height(),
            g = {};

        if (t.fixedContentPos && t._hasScrollBar(p)) {
          var h = t._getScrollbarSize();

          h && (g.marginRight = h);
        }

        t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");
        var v = t.st.mainClass;
        return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), I("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), i.on("focusin" + f, t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(p), I(d), n;
      }

      t.updateItemHTML();
    },
    close: function close() {
      t.isOpen && (I(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    },
    _close: function _close() {
      I(s);
      var n = g + " " + m + " ";

      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var o = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
      }

      i.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, I("AfterClose");
    },
    updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
        t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || y.height();

      t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
      var i = n.type;

      if (I("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var a = !!t.st[i] && t.st[i].markup;
        I("FirstMarkupParse", a), t.currTemplate[i] = !a || e(a);
      }

      o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
      var r = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
      t.appendContent(r, i), n.preloaded = !0, I(u, n), o = n.type, t.container.prepend(t.contentContainer), I("AfterChange");
    },
    appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", I("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    },
    parseEl: function parseEl(n) {
      var i,
          o = t.items[n];

      if (o.tagName ? o = {
        el: e(o)
      } : (i = o.type, o = {
        data: o,
        src: o.src
      }), o.el) {
        for (var a = t.types, r = 0; r < a.length; r++) {
          if (o.el.hasClass("mfp-" + a[r])) {
            i = a[r];
            break;
          }
        }

        o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }

      return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, I("ElementParse", o), t.items[n];
    },
    addGroup: function addGroup(e, n) {
      var i = function (_i) {
        function i(_x3) {
          return _i.apply(this, arguments);
        }

        i.toString = function () {
          return _i.toString();
        };

        return i;
      }(function (i) {
        i.mfpEl = this, t._openClick(i, e, n);
      });

      n || (n = {});
      var o = "click.magnificPopup";
      n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    },
    _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (a) if (e.isFunction(a)) {
          if (!a.call(t)) return !0;
        } else if (y.width() < a) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    },
    updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i
        };
        I("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    },
    _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass(h)) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;

        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || y.height());
    },
    _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)), I(c, [t, n, i]), e.each(n, function (e, n) {
        if (void 0 === n || !1 === n) return !0;

        if ((o = e.split("_")).length > 1) {
          var i = t.find(f + "-" + o[0]);

          if (i.length > 0) {
            var a = o[1];
            "replaceWith" === a ? i[0] !== n[0] && i.replaceWith(n) : "img" === a ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n);
          }
        } else t.find(f + "-" + e).html(n);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }

      return t.scrollbarSize;
    }
  }, e.magnificPopup = {
    instance: null,
    proto: v.prototype,
    modules: [],
    open: function open(t, n) {
      return k(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = n || 0, this.instance.open(t);
    },
    close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    },
    registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, e.fn.magnificPopup = function (n) {
    k();
    var i = e(this);
    if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            a = C ? i.data("magnificPopup") : i[0].magnificPopup,
            r = parseInt(arguments[1], 10) || 0;
        a.items ? o = a.items[r] : (o = i, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
          mfpEl: o
        }, i, a);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), C ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
    return i;
  };

  var T,
      E,
      _,
      S = "inline",
      P = function P() {
    _ && (E.after(_.addClass(T)).detach(), _ = null);
  };

  e.magnificPopup.registerModule(S, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        t.types.push(S), w(s + "." + S, function () {
          P();
        });
      },
      getInline: function getInline(n, i) {
        if (P(), n.src) {
          var o = t.st.inline,
              a = e(n.src);

          if (a.length) {
            var r = a[0].parentNode;
            r && r.tagName && (E || (T = o.hiddenClass, E = b(T), T = "mfp-" + T), _ = a.after(E).detach().removeClass(T)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), a = e("<div>");

          return n.inlineElement = a, a;
        }

        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      }
    }
  });

  var O,
      z = "ajax",
      M = function M() {
    O && e(document.body).removeClass(O);
  },
      B = function B() {
    M(), t.req && t.req.abort();
  };

  e.magnificPopup.registerModule(z, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        t.types.push(z), O = t.st.ajax.cursor, w(s + "." + z, B), w("BeforeChange." + z, B);
      },
      getAjax: function getAjax(n) {
        O && e(document.body).addClass(O), t.updateStatus("loading");
        var i = e.extend({
          url: n.src,
          success: function success(i, o, a) {
            var r = {
              data: i,
              xhr: a
            };
            I("ParseAjax", r), t.appendContent(e(r.data), z), n.finished = !0, M(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass(m);
            }, 16), t.updateStatus("ready"), I("AjaxContentAdded");
          },
          error: function error() {
            M(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(i), "";
      }
    }
  });
  var F;
  e.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var n = t.st.image,
            i = ".image";
        t.types.push("image"), w(d + i, function () {
          "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
        }), w(s + i, function () {
          n.cursor && e(document.body).removeClass(n.cursor), y.off("resize" + f);
        }), w("Resize" + i, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage);
      },
      resizeImage: function resizeImage() {
        var e = t.currItem;

        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, I("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      },
      findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(a) {
          F && clearInterval(F), F = setInterval(function () {
            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(F), void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)));
          }, a);
        };

        o(1);
      },
      getImage: function getImage(n, i) {
        var o = 0,
            a = function a() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, I("ImageLoadComplete")) : 200 > ++o ? setTimeout(a, 100) : r());
        },
            r = function r() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            s = t.st.image,
            l = i.find(".mfp-img");

        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }

        return t._parseMarkup(i, {
          title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = t.st.image.titleSrc;

            if (i) {
              if (e.isFunction(i)) return i.call(t, n);
              if (n.el) return n.el.attr(i) || "";
            }

            return "";
          }(n),
          img_replaceWith: n.img
        }, n), t.resizeImage(), n.hasSize ? (F && clearInterval(F), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      }
    }
  });
  var L;
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";

        if (n.enabled && t.supportsTransition) {
          var o,
              a,
              r = n.duration,
              c = function c(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                a = "transition";
            return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = i, t.css(o), t;
          },
              d = function d() {
            t.content.css("visibility", "visible");
          };

          w("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void d();
              (a = c(e)).css(t._getOffset()), t.wrap.append(a), o = setTimeout(function () {
                a.css(t._getOffset(!0)), o = setTimeout(function () {
                  d(), setTimeout(function () {
                    a.remove(), e = a = null, I("ZoomAnimationEnded");
                  }, 16);
                }, r);
              }, 16);
            }
          }), w(l + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = r, !e) {
                if (!(e = t._getItemToZoom())) return;
                a = c(e);
              }

              a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function () {
                a.css(t._getOffset());
              }, 16);
            }
          }), w(s + i, function () {
            t._allowZoom() && (d(), a && a.remove(), e = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            a = parseInt(i.css("padding-top"), 10),
            r = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - a;
        var s = {
          width: i.width(),
          height: (C ? i.innerHeight() : i[0].offsetHeight) - r - a
        };
        return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      }
    }
  });

  var H = "iframe",
      A = function A(e) {
    if (t.currTemplate[H]) {
      var n = t.currTemplate[H].find("iframe");
      n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };

  e.magnificPopup.registerModule(H, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        t.types.push(H), w("BeforeChange", function (e, t, n) {
          t !== n && (t === H ? A() : n === H && A(!0));
        }), w(s + "." + H, function () {
          A();
        });
      },
      getIframe: function getIframe(n, i) {
        var o = n.src,
            a = t.st.iframe;
        e.each(a.patterns, function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0;
        });
        var r = {};
        return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(i, r, n), t.updateStatus("ready"), i;
      }
    }
  });

  var j = function j(e) {
    var n = t.items.length;
    return e > n - 1 ? e - n : 0 > e ? n + e : e;
  },
      N = function N(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };

  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var n = t.st.gallery,
            o = ".mfp-gallery",
            r = Boolean(e.fn.mfpFastClick);
        return t.direction = !0, !(!n || !n.enabled) && (a += " mfp-gallery", w(d + o, function () {
          n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
            return t.items.length > 1 ? (t.next(), !1) : void 0;
          }), i.on("keydown" + o, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), w("UpdateStatus" + o, function (e, n) {
          n.text && (n.text = N(n.text, t.currItem.index, t.items.length));
        }), w(c + o, function (e, i, o, a) {
          var r = t.items.length;
          o.counter = r > 1 ? N(n.tCounter, a.index, r) : "";
        }), w("BuildControls" + o, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(h),
                a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(h),
                s = r ? "mfpFastClick" : "click";
            o[s](function () {
              t.prev();
            }), a[s](function () {
              t.next();
            }), t.isIE7 && (b("b", o[0], !1, !0), b("a", o[0], !1, !0), b("b", a[0], !1, !0), b("a", a[0], !1, !0)), t.container.append(o.add(a));
          }
        }), w(u + o, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), void w(s + o, function () {
          i.off(o), t.wrap.off("click" + o), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null;
        }));
      },
      next: function next() {
        t.direction = !0, t.index = j(t.index + 1), t.updateItemHTML();
      },
      prev: function prev() {
        t.direction = !1, t.index = j(t.index - 1), t.updateItemHTML();
      },
      goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);

        for (e = 1; e <= (t.direction ? o : i); e++) {
          t._preloadItem(t.index + e);
        }

        for (e = 1; e <= (t.direction ? i : o); e++) {
          t._preloadItem(t.index - e);
        }
      },
      _preloadItem: function _preloadItem(n) {
        if (n = j(n), !t.items[n].preloaded) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)), I("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, I("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      }
    }
  });
  var W,
      R,
      Z,
      q = "retina";
  e.magnificPopup.registerModule(q, {
    options: {
      replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;
          (n = isNaN(n) ? n() : n) > 1 && (w("ImageHasSize." + q, function (e, t) {
            t.img.css({
              "max-width": t.img[0].naturalWidth / n,
              width: "100%"
            });
          }), w("ElementParse." + q, function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      }
    }
  }), W = "ontouchstart" in window, R = function R() {
    y.off("touchmove" + Z + " touchend" + Z);
  }, Z = ".mfpFastClick", e.fn.mfpFastClick = function (t) {
    return e(this).each(function () {
      var n,
          i,
          o,
          a,
          r,
          s,
          l,
          c = e(this);
      W && c.on("touchstart" + Z, function (e) {
        r = !1, l = 1, s = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], o = s.clientX, a = s.clientY, y.on("touchmove" + Z, function (e) {
          s = e.originalEvent ? e.originalEvent.touches : e.touches, l = s.length, s = s[0], (Math.abs(s.clientX - o) > 10 || Math.abs(s.clientY - a) > 10) && (r = !0, R());
        }).on("touchend" + Z, function (e) {
          R(), r || l > 1 || (n = !0, e.preventDefault(), clearTimeout(i), i = setTimeout(function () {
            n = !1;
          }, 1e3), t());
        });
      }), c.on("click" + Z, function () {
        n || t();
      });
    });
  }, e.fn.destroyMfpFastClick = function () {
    e(this).off("touchstart" + Z + " click" + Z), W && y.off("touchmove" + Z + " touchend" + Z);
  }, k();
});
/*========== SimpleBar JS ==========*/

!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  var t = function t(_t2) {
    return "object" == typeof _t2 ? null !== _t2 : "function" == typeof _t2;
  },
      e = function e(_e2) {
    if (!t(_e2)) throw TypeError(_e2 + " is not an object!");
    return _e2;
  },
      n = function n(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
      i = !n(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function o(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var s = o(function (t) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e);
  }),
      c = s.document,
      a = t(c) && t(c.createElement),
      l = function l(t) {
    return a ? c.createElement(t) : {};
  },
      u = !i && !n(function () {
    return 7 != Object.defineProperty(l("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      h = Object.defineProperty,
      f = {
    f: i ? Object.defineProperty : function (n, i, r) {
      if (e(n), i = function (e, n) {
        if (!t(e)) return e;
        var i, r;
        if (n && "function" == typeof (i = e.toString) && !t(r = i.call(e))) return r;
        if ("function" == typeof (i = e.valueOf) && !t(r = i.call(e))) return r;
        if (!n && "function" == typeof (i = e.toString) && !t(r = i.call(e))) return r;
        throw TypeError("Can't convert object to primitive value");
      }(i, !0), e(r), u) try {
        return h(n, i, r);
      } catch (t) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (n[i] = r.value), n;
    }
  },
      d = function d(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      v = i ? function (t, e, n) {
    return f.f(t, e, d(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  },
      p = {}.hasOwnProperty,
      b = function b(t, e) {
    return p.call(t, e);
  },
      y = 0,
      m = Math.random(),
      g = function g(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++y + m).toString(36));
  },
      E = o(function (t) {
    var e = t.exports = {
      version: "2.5.6"
    };
    "number" == typeof __e && (__e = e);
  }),
      S = (E.version, o(function (t) {
    var e = g("src"),
        n = "toString",
        i = Function[n],
        r = ("" + i).split(n);
    E.inspectSource = function (t) {
      return i.call(t);
    }, (t.exports = function (t, n, i, o) {
      var c = "function" == typeof i;
      c && (b(i, "name") || v(i, "name", n)), t[n] !== i && (c && (b(i, e) || v(i, e, t[n] ? "" + t[n] : r.join(String(n)))), t === s ? t[n] = i : o ? t[n] ? t[n] = i : v(t, n, i) : (delete t[n], v(t, n, i)));
    })(Function.prototype, n, function () {
      return "function" == typeof this && this[e] || i.call(this);
    });
  })),
      w = function w(t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t;
  },
      O = o(function (t) {
    var e = "__core-js_shared__",
        n = s[e] || (s[e] = {});
    (t.exports = function (t, e) {
      return n[t] || (n[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: E.version,
      mode: "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  }),
      _ = o(function (t) {
    var e = O("wks"),
        n = s.Symbol,
        i = "function" == typeof n;
    (t.exports = function (t) {
      return e[t] || (e[t] = i && n[t] || (i ? n : g)("Symbol." + t));
    }).store = e;
  }),
      k = function k(t, e, i) {
    var r = _(t),
        o = i(w, r, ""[t]),
        s = o[0],
        c = o[1];

    n(function () {
      var e = {};
      return e[r] = function () {
        return 7;
      }, 7 != ""[t](e);
    }) && (S(String.prototype, t, s), v(RegExp.prototype, r, 2 == e ? function (t, e) {
      return c.call(t, this, e);
    } : function (t) {
      return c.call(t, this);
    }));
  };

  k("replace", 2, function (t, e, n) {
    return [function (i, r) {
      var o = t(this),
          s = void 0 == i ? void 0 : i[e];
      return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r);
    }, n];
  });
  var x = f.f,
      L = Function.prototype,
      M = /^\s*function ([^ (]*)/,
      A = "name";
  A in L || i && x(L, A, {
    configurable: !0,
    get: function get() {
      try {
        return ("" + this).match(M)[1];
      } catch (t) {
        return "";
      }
    }
  }), k("match", 1, function (t, e, n) {
    return [function (n) {
      var i = t(this),
          r = void 0 == n ? void 0 : n[e];
      return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i));
    }, n];
  });

  var T = _("unscopables"),
      z = Array.prototype;

  void 0 == z[T] && v(z, T, {});

  var C = function C(t) {
    z[T][t] = !0;
  },
      j = function j(t, e) {
    return {
      value: e,
      done: !!t
    };
  },
      D = {},
      Y = {}.toString,
      N = function N(t) {
    return Y.call(t).slice(8, -1);
  },
      X = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == N(t) ? t.split("") : Object(t);
  },
      R = function R(t) {
    return X(w(t));
  },
      W = function W(t, e, n) {
    if (function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
    }(t), void 0 === e) return t;

    switch (n) {
      case 1:
        return function (n) {
          return t.call(e, n);
        };

      case 2:
        return function (n, i) {
          return t.call(e, n, i);
        };

      case 3:
        return function (n, i, r) {
          return t.call(e, n, i, r);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  },
      P = "prototype",
      B = function B(t, e, n) {
    var i,
        r,
        o,
        c,
        a = t & B.F,
        l = t & B.G,
        u = t & B.S,
        h = t & B.P,
        f = t & B.B,
        d = l ? s : u ? s[e] || (s[e] = {}) : (s[e] || {})[P],
        p = l ? E : E[e] || (E[e] = {}),
        b = p[P] || (p[P] = {});
    l && (n = e);

    for (i in n) {
      o = ((r = !a && d && void 0 !== d[i]) ? d : n)[i], c = f && r ? W(o, s) : h && "function" == typeof o ? W(Function.call, o) : o, d && S(d, i, o, t & B.U), p[i] != o && v(p, i, c), h && b[i] != o && (b[i] = o);
    }
  };

  s.core = E, B.F = 1, B.G = 2, B.S = 4, B.P = 8, B.B = 16, B.W = 32, B.U = 64, B.R = 128;

  var V,
      F = B,
      q = Math.ceil,
      H = Math.floor,
      G = function G(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? H : q)(t);
  },
      I = Math.min,
      U = function U(t) {
    return t > 0 ? I(G(t), 9007199254740991) : 0;
  },
      $ = Math.max,
      J = Math.min,
      K = O("keys"),
      Q = function Q(t) {
    return K[t] || (K[t] = g(t));
  },
      Z = (V = !1, function (t, e, n) {
    var i,
        r,
        o,
        s = R(t),
        c = U(s.length),
        a = (r = c, (i = G(i = n)) < 0 ? $(i + r, 0) : J(i, r));

    if (V && e != e) {
      for (; c > a;) {
        if ((o = s[a++]) != o) return !0;
      }
    } else for (; c > a; a++) {
      if ((V || a in s) && s[a] === e) return V || a || 0;
    }

    return !V && -1;
  }),
      tt = Q("IE_PROTO"),
      et = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
      nt = Object.keys || function (t) {
    return function (t, e) {
      var n,
          i = R(t),
          r = 0,
          o = [];

      for (n in i) {
        n != tt && b(i, n) && o.push(n);
      }

      for (; e.length > r;) {
        b(i, n = e[r++]) && (~Z(o, n) || o.push(n));
      }

      return o;
    }(t, et);
  },
      it = i ? Object.defineProperties : function (t, n) {
    e(t);

    for (var i, r = nt(n), o = r.length, s = 0; o > s;) {
      f.f(t, i = r[s++], n[i]);
    }

    return t;
  },
      rt = s.document,
      ot = rt && rt.documentElement,
      st = Q("IE_PROTO"),
      ct = function ct() {},
      at = "prototype",
      _lt = function lt() {
    var t,
        e = l("iframe"),
        n = et.length;

    for (e.style.display = "none", ot.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _lt = t.F; n--;) {
      delete _lt[at][et[n]];
    }

    return _lt();
  },
      ut = Object.create || function (t, n) {
    var i;
    return null !== t ? (ct[at] = e(t), i = new ct(), ct[at] = null, i[st] = t) : i = _lt(), void 0 === n ? i : it(i, n);
  },
      ht = f.f,
      ft = _("toStringTag"),
      dt = function dt(t, e, n) {
    t && !b(t = n ? t : t.prototype, ft) && ht(t, ft, {
      configurable: !0,
      value: e
    });
  },
      vt = {};

  v(vt, _("iterator"), function () {
    return this;
  });

  var pt = function pt(t) {
    return Object(w(t));
  },
      bt = Q("IE_PROTO"),
      yt = Object.prototype,
      mt = Object.getPrototypeOf || function (t) {
    return t = pt(t), b(t, bt) ? t[bt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? yt : null;
  },
      gt = _("iterator"),
      Et = !([].keys && "next" in [].keys()),
      St = "values",
      wt = function wt() {
    return this;
  },
      Ot = function (t, e, n, i, r, o, s) {
    var c, a, l;
    a = e, l = i, (c = n).prototype = ut(vt, {
      next: d(1, l)
    }), dt(c, a + " Iterator");

    var u,
        h,
        f,
        p = function p(t) {
      if (!Et && t in g) return g[t];

      switch (t) {
        case "keys":
        case St:
          return function () {
            return new n(this, t);
          };
      }

      return function () {
        return new n(this, t);
      };
    },
        b = e + " Iterator",
        y = r == St,
        m = !1,
        g = t.prototype,
        E = g[gt] || g["@@iterator"] || r && g[r],
        w = E || p(r),
        O = r ? y ? p("entries") : w : void 0,
        _ = "Array" == e && g.entries || E;

    if (_ && (f = mt(_.call(new t()))) !== Object.prototype && f.next && (dt(f, b, !0), "function" != typeof f[gt] && v(f, gt, wt)), y && E && E.name !== St && (m = !0, w = function w() {
      return E.call(this);
    }), (Et || m || !g[gt]) && v(g, gt, w), D[e] = w, D[b] = wt, r) if (u = {
      values: y ? w : p(St),
      keys: o ? w : p("keys"),
      entries: O
    }, s) for (h in u) {
      h in g || S(g, h, u[h]);
    } else F(F.P + F.F * (Et || m), e, u);
    return u;
  }(Array, "Array", function (t, e) {
    this._t = R(t), this._i = 0, this._k = e;
  }, function () {
    var t = this._t,
        e = this._k,
        n = this._i++;
    return !t || n >= t.length ? (this._t = void 0, j(1)) : j(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
  }, "values");

  D.Arguments = D.Array, C("keys"), C("values"), C("entries");

  for (var _t = _("iterator"), kt = _("toStringTag"), xt = D.Array, Lt = {
    CSSRuleList: !0,
    CSSStyleDeclaration: !1,
    CSSValueList: !1,
    ClientRectList: !1,
    DOMRectList: !1,
    DOMStringList: !1,
    DOMTokenList: !0,
    DataTransferItemList: !1,
    FileList: !1,
    HTMLAllCollection: !1,
    HTMLCollection: !1,
    HTMLFormElement: !1,
    HTMLSelectElement: !1,
    MediaList: !0,
    MimeTypeArray: !1,
    NamedNodeMap: !1,
    NodeList: !0,
    PaintRequestList: !1,
    Plugin: !1,
    PluginArray: !1,
    SVGLengthList: !1,
    SVGNumberList: !1,
    SVGPathSegList: !1,
    SVGPointList: !1,
    SVGStringList: !1,
    SVGTransformList: !1,
    SourceBufferList: !1,
    StyleSheetList: !0,
    TextTrackCueList: !1,
    TextTrackList: !1,
    TouchList: !1
  }, Mt = nt(Lt), At = 0; At < Mt.length; At++) {
    var Tt,
        zt = Mt[At],
        Ct = Lt[zt],
        jt = s[zt],
        Dt = jt && jt.prototype;
    if (Dt && (Dt[_t] || v(Dt, _t, xt), Dt[kt] || v(Dt, kt, zt), D[zt] = xt, Ct)) for (Tt in Ot) {
      Dt[Tt] || S(Dt, Tt, Ot[Tt], !0);
    }
  }

  var Yt = function Yt(t, n, i, r) {
    try {
      return r ? n(e(i)[0], i[1]) : n(i);
    } catch (n) {
      var o = t["return"];
      throw void 0 !== o && e(o.call(t)), n;
    }
  },
      Nt = _("iterator"),
      Xt = Array.prototype,
      Rt = function Rt(t, e, n) {
    e in t ? f.f(t, e, d(0, n)) : t[e] = n;
  },
      Wt = _("toStringTag"),
      Pt = "Arguments" == N(function () {
    return arguments;
  }()),
      Bt = _("iterator"),
      Vt = E.getIteratorMethod = function (t) {
    if (void 0 != t) return t[Bt] || t["@@iterator"] || D[(e = t, void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(n = Object(e), Wt)) ? i : Pt ? N(n) : "Object" == (r = N(n)) && "function" == typeof n.callee ? "Arguments" : r)];
    var e, n, i, r;
  },
      Ft = _("iterator"),
      qt = !1;

  try {
    [7][Ft]()["return"] = function () {
      qt = !0;
    };
  } catch (t) {}

  F(F.S + F.F * !function (t, e) {
    if (!e && !qt) return !1;
    var n = !1;

    try {
      var i = [7],
          r = i[Ft]();
      r.next = function () {
        return {
          done: n = !0
        };
      }, i[Ft] = function () {
        return r;
      }, t(i);
    } catch (t) {}

    return n;
  }(function (t) {}), "Array", {
    from: function from(t) {
      var e,
          n,
          i,
          r,
          o,
          s = pt(t),
          c = "function" == typeof this ? this : Array,
          a = arguments.length,
          l = a > 1 ? arguments[1] : void 0,
          u = void 0 !== l,
          h = 0,
          f = Vt(s);
      if (u && (l = W(l, a > 2 ? arguments[2] : void 0, 2)), void 0 != f && (c != Array || void 0 === (o = f) || D.Array !== o && Xt[Nt] !== o)) for (r = f.call(s), n = new c(); !(i = r.next()).done; h++) {
        Rt(n, h, u ? Yt(r, l, [i.value, h], !0) : i.value);
      } else for (n = new c(e = U(s.length)); e > h; h++) {
        Rt(n, h, u ? l(s[h], h) : s[h]);
      }
      return n.length = h, n;
    }
  });
  var Ht = {
    f: Object.getOwnPropertySymbols
  },
      Gt = {
    f: {}.propertyIsEnumerable
  },
      It = Object.assign,
      Ut = !It || n(function () {
    var t = {},
        e = {},
        n = Symbol(),
        i = "abcdefghijklmnopqrst";
    return t[n] = 7, i.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != It({}, t)[n] || Object.keys(It({}, e)).join("") != i;
  }) ? function (t, e) {
    for (var n = pt(t), i = arguments.length, r = 1, o = Ht.f, s = Gt.f; i > r;) {
      for (var c, a = X(arguments[r++]), l = o ? nt(a).concat(o(a)) : nt(a), u = l.length, h = 0; u > h;) {
        s.call(a, c = l[h++]) && (n[c] = a[c]);
      }
    }

    return n;
  } : It;

  function $t(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  F(F.S + F.F, "Object", {
    assign: Ut
  });

  var Jt = o(function (t, e) {
    t.exports = function () {
      if ("undefined" == typeof document) return 0;
      var t,
          e = document.body,
          n = document.createElement("div"),
          i = n.style;
      return i.position = "absolute", i.top = i.left = "-9999px", i.width = i.height = "100px", i.overflow = "scroll", e.appendChild(n), t = n.offsetWidth - n.clientWidth, e.removeChild(n), t;
    };
  }),
      Kt = "Expected a function",
      Qt = NaN,
      Zt = "[object Symbol]",
      te = /^\s+|\s+$/g,
      ee = /^[-+]0x[0-9a-f]+$/i,
      ne = /^0b[01]+$/i,
      ie = /^0o[0-7]+$/i,
      re = parseInt,
      oe = "object" == typeof r && r && r.Object === Object && r,
      se = "object" == typeof self && self && self.Object === Object && self,
      ce = oe || se || Function("return this")(),
      ae = Object.prototype.toString,
      le = Math.max,
      ue = Math.min,
      he = function he() {
    return ce.Date.now();
  };

  function fe(t, e, n) {
    var i,
        r,
        o,
        s,
        c,
        a,
        l = 0,
        u = !1,
        h = !1,
        f = !0;
    if ("function" != typeof t) throw new TypeError(Kt);

    function d(e) {
      var n = i,
          o = r;
      return i = r = void 0, l = e, s = t.apply(o, n);
    }

    function v(t) {
      var n = t - a;
      return void 0 === a || n >= e || n < 0 || h && t - l >= o;
    }

    function p() {
      var t,
          n,
          i = he();
      if (v(i)) return b(i);
      c = setTimeout(p, (n = e - ((t = i) - a), h ? ue(n, o - (t - l)) : n));
    }

    function b(t) {
      return c = void 0, f && i ? d(t) : (i = r = void 0, s);
    }

    function y() {
      var t,
          n = he(),
          o = v(n);

      if (i = arguments, r = this, a = n, o) {
        if (void 0 === c) return l = t = a, c = setTimeout(p, e), u ? d(t) : s;
        if (h) return c = setTimeout(p, e), d(a);
      }

      return void 0 === c && (c = setTimeout(p, e)), s;
    }

    return e = ve(e) || 0, de(n) && (u = !!n.leading, o = (h = "maxWait" in n) ? le(ve(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f), y.cancel = function () {
      void 0 !== c && clearTimeout(c), l = 0, i = a = r = c = void 0;
    }, y.flush = function () {
      return void 0 === c ? s : b(he());
    }, y;
  }

  function de(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }

  function ve(t) {
    if ("number" == typeof t) return t;
    if ("symbol" == typeof (e = t) || (n = e) && "object" == typeof n && ae.call(e) == Zt) return Qt;
    var e, n;

    if (de(t)) {
      var i = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = de(i) ? i + "" : i;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(te, "");
    var r = ne.test(t);
    return r || ie.test(t) ? re(t.slice(2), r ? 2 : 8) : ee.test(t) ? Qt : +t;
  }

  var pe = function pe(t, e, n) {
    var i = !0,
        r = !0;
    if ("function" != typeof t) throw new TypeError(Kt);
    return de(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), fe(t, e, {
      leading: i,
      maxWait: e,
      trailing: r
    });
  },
      be = function () {
    if ("undefined" != typeof Map) return Map;

    function t(t, e) {
      var n = -1;
      return t.some(function (t, i) {
        return t[0] === e && (n = i, !0);
      }), n;
    }

    return function () {
      function e() {
        this.__entries__ = [];
      }

      var n = {
        size: {
          configurable: !0
        }
      };
      return n.size.get = function () {
        return this.__entries__.length;
      }, e.prototype.get = function (e) {
        var n = t(this.__entries__, e),
            i = this.__entries__[n];
        return i && i[1];
      }, e.prototype.set = function (e, n) {
        var i = t(this.__entries__, e);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n]);
      }, e.prototype["delete"] = function (e) {
        var n = this.__entries__,
            i = t(n, e);
        ~i && n.splice(i, 1);
      }, e.prototype.has = function (e) {
        return !!~t(this.__entries__, e);
      }, e.prototype.clear = function () {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function (t, e) {
        void 0 === e && (e = null);

        for (var n = 0, i = this.__entries__; n < i.length; n += 1) {
          var r = i[n];
          t.call(e, r[1], r[0]);
        }
      }, Object.defineProperties(e.prototype, n), e;
    }();
  }(),
      ye = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
      me = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
      ge = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(me) : function (t) {
    return setTimeout(function () {
      return t(Date.now());
    }, 1e3 / 60);
  },
      Ee = 2,
      Se = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      we = "undefined" != typeof MutationObserver,
      Oe = function Oe() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
      var n = !1,
          i = !1,
          r = 0;

      function o() {
        n && (n = !1, t()), i && c();
      }

      function s() {
        ge(o);
      }

      function c() {
        var t = Date.now();

        if (n) {
          if (t - r < Ee) return;
          i = !0;
        } else n = !0, i = !1, setTimeout(s, e);

        r = t;
      }

      return c;
    }(this.refresh.bind(this), 20);
  };

  Oe.prototype.addObserver = function (t) {
    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
  }, Oe.prototype.removeObserver = function (t) {
    var e = this.observers_,
        n = e.indexOf(t);
    ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
  }, Oe.prototype.refresh = function () {
    this.updateObservers_() && this.refresh();
  }, Oe.prototype.updateObservers_ = function () {
    var t = this.observers_.filter(function (t) {
      return t.gatherActive(), t.hasActive();
    });
    return t.forEach(function (t) {
      return t.broadcastActive();
    }), t.length > 0;
  }, Oe.prototype.connect_ = function () {
    ye && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), we ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, Oe.prototype.disconnect_ = function () {
    ye && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, Oe.prototype.onTransitionEnd_ = function (t) {
    var e = t.propertyName;
    void 0 === e && (e = ""), Se.some(function (t) {
      return !!~e.indexOf(t);
    }) && this.refresh();
  }, Oe.getInstance = function () {
    return this.instance_ || (this.instance_ = new Oe()), this.instance_;
  }, Oe.instance_ = null;

  var _e = function _e(t, e) {
    for (var n = 0, i = Object.keys(e); n < i.length; n += 1) {
      var r = i[n];
      Object.defineProperty(t, r, {
        value: e[r],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }

    return t;
  },
      ke = function ke(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView || me;
  },
      xe = Ce(0, 0, 0, 0);

  function Le(t) {
    return parseFloat(t) || 0;
  }

  function Me(t) {
    for (var e = [], n = arguments.length - 1; n-- > 0;) {
      e[n] = arguments[n + 1];
    }

    return e.reduce(function (e, n) {
      return e + Le(t["border-" + n + "-width"]);
    }, 0);
  }

  function Ae(t) {
    var e = t.clientWidth,
        n = t.clientHeight;
    if (!e && !n) return xe;

    var i,
        r = ke(t).getComputedStyle(t),
        o = function (t) {
      for (var e = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n += 1) {
        var r = i[n],
            o = t["padding-" + r];
        e[r] = Le(o);
      }

      return e;
    }(r),
        s = o.left + o.right,
        c = o.top + o.bottom,
        a = Le(r.width),
        l = Le(r.height);

    if ("border-box" === r.boxSizing && (Math.round(a + s) !== e && (a -= Me(r, "left", "right") + s), Math.round(l + c) !== n && (l -= Me(r, "top", "bottom") + c)), (i = t) !== ke(i).document.documentElement) {
      var u = Math.round(a + s) - e,
          h = Math.round(l + c) - n;
      1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(h) && (l -= h);
    }

    return Ce(o.left, o.top, a, l);
  }

  var Te = "undefined" != typeof SVGGraphicsElement ? function (t) {
    return t instanceof ke(t).SVGGraphicsElement;
  } : function (t) {
    return t instanceof ke(t).SVGElement && "function" == typeof t.getBBox;
  };

  function ze(t) {
    return ye ? Te(t) ? Ce(0, 0, (e = t.getBBox()).width, e.height) : Ae(t) : xe;
    var e;
  }

  function Ce(t, e, n, i) {
    return {
      x: t,
      y: e,
      width: n,
      height: i
    };
  }

  var je = function je(t) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ce(0, 0, 0, 0), this.target = t;
  };

  je.prototype.isActive = function () {
    var t = ze(this.target);
    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }, je.prototype.broadcastRect = function () {
    var t = this.contentRect_;
    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
  };

  var De = function De(t, e) {
    var n,
        i,
        r,
        o,
        s,
        c,
        a,
        l = (i = (n = e).x, r = n.y, o = n.width, s = n.height, c = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, a = Object.create(c.prototype), _e(a, {
      x: i,
      y: r,
      width: o,
      height: s,
      top: r,
      right: i + o,
      bottom: s + r,
      left: i
    }), a);

    _e(this, {
      target: t,
      contentRect: l
    });
  },
      Ye = function Ye(t, e, n) {
    if (this.activeObservations_ = [], this.observations_ = new be(), "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n;
  };

  Ye.prototype.observe = function (t) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

    if ("undefined" != typeof Element && Element instanceof Object) {
      if (!(t instanceof ke(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var e = this.observations_;
      e.has(t) || (e.set(t, new je(t)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, Ye.prototype.unobserve = function (t) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

    if ("undefined" != typeof Element && Element instanceof Object) {
      if (!(t instanceof ke(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var e = this.observations_;
      e.has(t) && (e["delete"](t), e.size || this.controller_.removeObserver(this));
    }
  }, Ye.prototype.disconnect = function () {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, Ye.prototype.gatherActive = function () {
    var t = this;
    this.clearActive(), this.observations_.forEach(function (e) {
      e.isActive() && t.activeObservations_.push(e);
    });
  }, Ye.prototype.broadcastActive = function () {
    if (this.hasActive()) {
      var t = this.callbackCtx_,
          e = this.activeObservations_.map(function (t) {
        return new De(t.target, t.broadcastRect());
      });
      this.callback_.call(t, e, t), this.clearActive();
    }
  }, Ye.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  }, Ye.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  var Ne = "undefined" != typeof WeakMap ? new WeakMap() : new be(),
      Xe = function Xe(t) {
    if (!(this instanceof Xe)) throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    var e = Oe.getInstance(),
        n = new Ye(t, e, this);
    Ne.set(this, n);
  };

  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    Xe.prototype[t] = function () {
      return (e = Ne.get(this))[t].apply(e, arguments);
      var e;
    };
  });

  var Re = void 0 !== me.ResizeObserver ? me.ResizeObserver : Xe,
      We = !("undefined" == typeof window || !window.document || !window.document.createElement),
      Pe = function () {
    function t(e, n) {
      var i = this;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.onScrollX = function () {
        i.scrollXTicking || (window.requestAnimationFrame(i.scrollX), i.scrollXTicking = !0);
      }, this.onScrollY = function () {
        i.scrollYTicking || (window.requestAnimationFrame(i.scrollY), i.scrollYTicking = !0);
      }, this.scrollX = function () {
        i.showScrollbar("x"), i.positionScrollbar("x"), i.scrollXTicking = !1;
      }, this.scrollY = function () {
        i.showScrollbar("y"), i.positionScrollbar("y"), i.scrollYTicking = !1;
      }, this.onMouseEnter = function () {
        i.showScrollbar("x"), i.showScrollbar("y");
      }, this.onWindowResize = function () {
        i.hideNativeScrollbar();
      }, this.hideScrollbars = function () {
        i.scrollbarX.classList.remove("visible"), i.scrollbarY.classList.remove("visible"), i.isVisible.x = !1, i.isVisible.y = !1, window.clearTimeout(i.flashTimeout);
      }, this.onMouseDown = function (t) {
        var e = i.scrollbarY.getBoundingClientRect();
        t.pageX >= e.x && t.clientX <= e.x + e.width && t.clientY >= e.y && t.clientY <= e.y + e.height && (t.preventDefault(), i.onDrag(t, "y"));
      }, this.drag = function (t) {
        var e, n, r;
        t.preventDefault(), "y" === i.currentAxis ? (e = t.pageY, n = i.trackY, r = i.scrollContentEl) : (e = t.pageX, n = i.trackX, r = i.contentEl);
        var o = (e - n.getBoundingClientRect()[i.offsetAttr[i.currentAxis]] - i.dragOffset[i.currentAxis]) / n[i.sizeAttr[i.currentAxis]] * i.contentEl[i.scrollSizeAttr[i.currentAxis]];
        r[i.scrollOffsetAttr[i.currentAxis]] = o;
      }, this.onEndDrag = function () {
        document.removeEventListener("mousemove", i.drag), document.removeEventListener("mouseup", i.onEndDrag);
      }, this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
        x: 0,
        y: 0
      }, this.isEnabled = {
        x: !0,
        y: !0
      }, this.isVisible = {
        x: !1,
        y: !1
      }, this.scrollOffsetAttr = {
        x: "scrollLeft",
        y: "scrollTop"
      }, this.sizeAttr = {
        x: "offsetWidth",
        y: "offsetHeight"
      }, this.scrollSizeAttr = {
        x: "scrollWidth",
        y: "scrollHeight"
      }, this.offsetAttr = {
        x: "left",
        y: "top"
      }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.scrollbarWidth, this.options = Object.assign({}, t.defaultOptions, n), this.isRtl = "rtl" === this.options.direction, this.classNames = this.options.classNames, this.offsetSize = 20, this.recalculate = pe(this.recalculate.bind(this), 1e3), this.init();
    }

    var e, n, i;
    return e = t, i = [{
      key: "initHtmlApi",
      value: function value() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function (e) {
          e.forEach(function (e) {
            Array.from(e.addedNodes).forEach(function (e) {
              1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function (e) {
                !e.SimpleBar && new t(e, t.getElOptions(e));
              }));
            }), Array.from(e.removedNodes).forEach(function (t) {
              1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function (t) {
                t.SimpleBar && t.SimpleBar.unMount();
              }));
            });
          });
        }), this.globalObserver.observe(document, {
          childList: !0,
          subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
      }
    }, {
      key: "getElOptions",
      value: function value(t) {
        return Array.from(t.attributes).reduce(function (t, e) {
          var n = e.name.match(/data-simplebar-(.+)/);

          if (n) {
            var i = n[1].replace(/\W+(.)/g, function (t, e) {
              return e.toUpperCase();
            });

            switch (e.value) {
              case "true":
                t[i] = !0;
                break;

              case "false":
                t[i] = !1;
                break;

              case void 0:
                t[i] = !0;
                break;

              default:
                t[i] = e.value;
            }
          }

          return t;
        }, {});
      }
    }, {
      key: "removeObserver",
      value: function value() {
        this.globalObserver.disconnect();
      }
    }, {
      key: "initDOMLoadedElements",
      value: function value() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function (e) {
          e.SimpleBar || new t(e, t.getElOptions(e));
        });
      }
    }, {
      key: "defaultOptions",
      get: function get() {
        return {
          autoHide: !0,
          forceVisible: !1,
          classNames: {
            content: "simplebar-content",
            scrollContent: "simplebar-scroll-content",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track"
          },
          scrollbarMinSize: 25,
          scrollbarMaxSize: 0,
          direction: "ltr",
          timeout: 1e3
        };
      }
    }], (n = [{
      key: "init",
      value: function value() {
        this.el.SimpleBar = this, this.initDOM(), We && (this.hideNativeScrollbar(), this.render(), this.initListeners());
      }
    }, {
      key: "initDOM",
      value: function value() {
        var t = this;
        if (Array.from(this.el.children).filter(function (e) {
          return e.classList.contains(t.classNames.scrollContent);
        }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content));else {
          for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) {
            this.contentEl.appendChild(this.el.firstChild);
          }

          this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl);
        }

        if (!this.trackX || !this.trackY) {
          var e = document.createElement("div"),
              n = document.createElement("div");
          e.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), this.options.autoHide || n.classList.add("visible"), e.appendChild(n), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild);
        }

        this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.el.setAttribute("data-simplebar", "init");
      }
    }, {
      key: "initListeners",
      value: function value() {
        var t = this;
        this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mousedown", this.onMouseDown), this.contentEl.addEventListener("scroll", this.onScrollX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), window.addEventListener("resize", this.onWindowResize), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function (e) {
          e.forEach(function (e) {
            (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate();
          });
        }), this.mutationObserver.observe(this.el, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })), this.resizeObserver = new Re(this.recalculate), this.resizeObserver.observe(this.el);
      }
    }, {
      key: "recalculate",
      value: function value() {
        this.render();
      }
    }, {
      key: "render",
      value: function value() {
        this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.trackXSize = this.trackX[this.sizeAttr.x], this.trackYSize = this.trackY[this.sizeAttr.y], this.isEnabled.x = this.trackXSize < this.contentSizeX, this.isEnabled.y = this.trackYSize < this.contentSizeY, this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
      }
    }, {
      key: "resizeScrollbar",
      value: function value() {
        var t,
            e,
            n,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";

        if (this.isEnabled[i] || this.options.forceVisible) {
          "x" === i ? (t = this.scrollbarX, e = this.contentSizeX, n = this.trackXSize) : (t = this.scrollbarY, e = this.contentSizeY, n = this.trackYSize);
          var r = n / e;
          this.handleSize = Math.max(~~(r * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (this.handleSize = Math.min(this.handleSize, this.options.scrollbarMaxSize)), "x" === i ? t.style.width = "".concat(this.handleSize, "px") : t.style.height = "".concat(this.handleSize, "px");
        }
      }
    }, {
      key: "positionScrollbar",
      value: function value() {
        var t,
            e,
            n,
            i,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
        "x" === r ? (t = this.scrollbarX, e = this.contentEl[this.scrollOffsetAttr[r]], n = this.contentSizeX, i = this.trackXSize) : (t = this.scrollbarY, e = this.scrollContentEl[this.scrollOffsetAttr[r]], n = this.contentSizeY, i = this.trackYSize);
        var o = e / (n - i),
            s = ~~((i - this.handleSize) * o);
        (this.isEnabled[r] || this.options.forceVisible) && (t.style.transform = "x" === r ? "translate3d(".concat(s, "px, 0, 0)") : "translate3d(0, ".concat(s, "px, 0)"));
      }
    }, {
      key: "toggleTrackVisibility",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y",
            e = "y" === t ? this.trackY : this.trackX,
            n = "y" === t ? this.scrollbarY : this.scrollbarX;
        this.isEnabled[t] || this.options.forceVisible ? e.style.visibility = "visible" : e.style.visibility = "hidden", this.options.forceVisible && (this.isEnabled[t] ? n.style.visibility = "visible" : n.style.visibility = "hidden");
      }
    }, {
      key: "hideNativeScrollbar",
      value: function value() {
        this.scrollbarWidth = Jt(), this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px"));
      }
    }, {
      key: "showScrollbar",
      value: function value() {
        var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
        this.isVisible[e] || (t = "x" === e ? this.scrollbarX : this.scrollbarY, this.isEnabled[e] && (t.classList.add("visible"), this.isVisible[e] = !0), this.options.autoHide && (this.flashTimeout = window.setTimeout(this.hideScrollbars, this.options.timeout)));
      }
    }, {
      key: "onDrag",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y";
        t.preventDefault();
        var n = "y" === e ? this.scrollbarY : this.scrollbarX,
            i = "y" === e ? t.pageY : t.pageX;
        this.dragOffset[e] = i - n.getBoundingClientRect()[this.offsetAttr[e]], this.currentAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag);
      }
    }, {
      key: "getScrollElement",
      value: function value() {
        return "y" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl;
      }
    }, {
      key: "getContentElement",
      value: function value() {
        return this.contentEl;
      }
    }, {
      key: "removeListeners",
      value: function value() {
        this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect();
      }
    }, {
      key: "unMount",
      value: function value() {
        this.removeListeners(), this.el.SimpleBar = null;
      }
    }, {
      key: "isChildNode",
      value: function value(t) {
        return null !== t && (t === this.el || this.isChildNode(t.parentNode));
      }
    }]) && $t(e.prototype, n), i && $t(e, i), t;
  }();

  return We && Pe.initHtmlApi(), Pe;
});
/*========== Tilt JS ==========*/

"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
  return typeof t;
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  return t.fn.tilt = function (i) {
    var s = function s() {
      this.ticking || (requestAnimationFrame(h.bind(this)), this.ticking = !0);
    },
        e = function e() {
      var i = this;
      void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
        transition: this.settings.speed + "ms " + this.settings.easing
      }), this.settings.glare && this.glareElement.css({
        transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
      }), this.timeout = setTimeout(function () {
        t(i).css({
          transition: ""
        }), i.settings.glare && i.glareElement.css({
          transition: ""
        });
      }, this.settings.speed);
    },
        n = function n(i) {
      this.ticking = !1, t(this).css({
        "will-change": "transform"
      }), e.call(this), t(this).trigger("tilt.mouseEnter");
    },
        a = function a(i) {
      return void 0 === i && (i = {
        pageX: t(this).offset().left + t(this).outerWidth() / 2,
        pageY: t(this).offset().top + t(this).outerHeight() / 2
      }), {
        x: i.pageX,
        y: i.pageY
      };
    },
        r = function r(t) {
      this.mousePositions = a(t), s.call(this);
    },
        o = function o() {
      e.call(this), this.reset = !0, s.call(this), t(this).trigger("tilt.mouseLeave");
    },
        l = function l() {
      var i = t(this).outerWidth(),
          s = t(this).outerHeight(),
          e = t(this).offset().left,
          n = t(this).offset().top,
          a = (this.mousePositions.x - e) / i,
          r = (this.mousePositions.y - n) / s;
      return {
        tiltX: (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
        tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
        percentageX: 100 * a,
        percentageY: 100 * r,
        angle: Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI)
      };
    },
        h = function h() {
      return this.transforms = l.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void (this.ticking = !1));
    },
        g = function g() {
      this.glareElement.css({
        width: "" + 2 * t(this).outerWidth(),
        height: "" + 2 * t(this).outerWidth()
      });
    };

    return t.fn.tilt.destroy = function () {
      t(this).each(function () {
        t(this).find(".js-tilt-glare").remove(), t(this).css({
          "will-change": "",
          transform: ""
        }), t(this).off("mousemove mouseenter mouseleave");
      });
    }, t.fn.tilt.getValues = function () {
      var i = [];
      return t(this).each(function () {
        this.mousePositions = a.call(this), i.push(l.call(this));
      }), i;
    }, t.fn.tilt.reset = function () {
      t(this).each(function () {
        var i = this;
        this.mousePositions = a.call(this), this.settings = t(this).data("settings"), o.call(this), setTimeout(function () {
          i.reset = !1;
        }, this.settings.transition);
      });
    }, this.each(function () {
      var s = this;
      this.settings = t.extend({
        maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
        perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
        easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
        scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
        speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
        transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
        disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
        axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
        reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
        glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
        maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
      }, i), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function () {
        t(s).data("settings", s.settings), s.settings.glare && function () {
          var i = this.settings.glarePrerender;
          i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), i || (this.glareElementWrapper.css({
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }).css({
            overflow: "hidden",
            "pointer-events": "none"
          }), this.glareElement.css({
            position: "absolute",
            top: "50%",
            left: "50%",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            width: "" + 2 * t(this).outerWidth(),
            height: "" + 2 * t(this).outerWidth(),
            transform: "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            opacity: "0"
          }));
        }.call(s), function () {
          t(this).on("mousemove", r), t(this).on("mouseenter", n), this.settings.reset && t(this).on("mouseleave", o), this.settings.glare && t(window).on("resize", g.bind(this));
        }.call(s);
      }, this.init();
    });
  }, t("[data-tilt]").tilt(), !0;
});
/*========== Particles JS ==========*/

function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == typeof r) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
        x: a ? a.pos_x : Math.random() * i.canvas.w,
        y: a ? a.pos_y : Math.random() * i.canvas.h
      })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};
/*========== Super Slides JS ==========*/

(function (i, t) {
  var n,
      e = "superslides";
  n = function n(_n2, e) {
    this.options = t.extend({
      play: !1,
      animation_speed: 600,
      animation_easing: "swing",
      animation: "slide",
      inherit_width_from: i,
      inherit_height_from: i,
      pagination: !0,
      hashchange: !1,
      scrollable: !0,
      elements: {
        preserve: ".preserve",
        nav: ".slides-navigation",
        container: ".slides-container",
        pagination: ".slides-pagination"
      }
    }, e);
    var s = this,
        o = t("<div>", {
      "class": "slides-control"
    }),
        a = 1;
    this.$el = t(_n2), this.$container = this.$el.find(this.options.elements.container);

    var r = function r() {
      return a = s._findMultiplier(), s.$el.on("click", s.options.elements.nav + " a", function (i) {
        i.preventDefault(), s.stop(), t(this).hasClass("next") ? s.animate("next", function () {
          s.start();
        }) : s.animate("prev", function () {
          s.start();
        });
      }), t(document).on("keyup", function (i) {
        37 === i.keyCode && s.animate("prev"), 39 === i.keyCode && s.animate("next");
      }), t(i).on("resize", function () {
        setTimeout(function () {
          var i = s.$container.children();
          s.width = s._findWidth(), s.height = s._findHeight(), i.css({
            width: s.width,
            left: s.width
          }), s.css.containers(), s.css.images();
        }, 10);
      }), s.options.hashchange && t(i).on("hashchange", function () {
        var i,
            t = s._parseHash();

        i = s._upcomingSlide(t), i >= 0 && i !== s.current && s.animate(i);
      }), s.pagination._events(), s.start(), s;
    },
        h = {
      containers: function containers() {
        s.init ? (s.$el.css({
          height: s.height
        }), s.$control.css({
          width: s.width * a,
          left: -s.width
        }), s.$container.css({})) : (t("body").css({
          margin: 0
        }), s.$el.css({
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: s.height
        }), s.$control.css({
          position: "relative",
          transform: "translate3d(0)",
          height: "100%",
          width: s.width * a,
          left: -s.width
        }), s.$container.css({
          display: "none",
          margin: "0",
          padding: "0",
          listStyle: "none",
          position: "relative",
          height: "100%"
        })), 1 === s.size() && s.$el.find(s.options.elements.nav).hide();
      },
      images: function images() {
        var i = s.$container.find("img").not(s.options.elements.preserve);
        i.removeAttr("width").removeAttr("height").css({
          "-webkit-backface-visibility": "hidden",
          "-ms-interpolation-mode": "bicubic",
          position: "absolute",
          left: "0",
          top: "0",
          "z-index": "-1",
          "max-width": "none"
        }), i.each(function () {
          var i = s.image._aspectRatio(this),
              n = this;

          if (t.data(this, "processed")) s.image._scale(n, i), s.image._center(n, i);else {
            var e = new Image();
            e.onload = function () {
              s.image._scale(n, i), s.image._center(n, i), t.data(n, "processed", !0);
            }, e.src = this.src;
          }
        });
      },
      children: function children() {
        var i = s.$container.children();
        i.is("img") && (i.each(function () {
          if (t(this).is("img")) {
            t(this).wrap("<div>");
            var i = t(this).attr("id");
            t(this).removeAttr("id"), t(this).parent().attr("id", i);
          }
        }), i = s.$container.children()), s.init || i.css({
          display: "none",
          left: 2 * s.width
        }), i.css({
          position: "absolute",
          overflow: "hidden",
          height: "100%",
          width: s.width,
          top: 0,
          zIndex: 0
        });
      }
    },
        c = {
      slide: function slide(i, t) {
        var n = s.$container.children(),
            e = n.eq(i.upcoming_slide);
        e.css({
          left: i.upcoming_position,
          display: "block"
        }), s.$control.animate({
          left: i.offset
        }, s.options.animation_speed, s.options.animation_easing, function () {
          s.size() > 1 && (s.$control.css({
            left: -s.width
          }), n.eq(i.upcoming_slide).css({
            left: s.width,
            zIndex: 2
          }), i.outgoing_slide >= 0 && n.eq(i.outgoing_slide).css({
            left: s.width,
            display: "none",
            zIndex: 0
          })), t();
        });
      },
      fade: function fade(i, t) {
        var n = this,
            e = n.$container.children(),
            s = e.eq(i.outgoing_slide),
            o = e.eq(i.upcoming_slide);
        o.css({
          left: this.width,
          opacity: 0,
          display: "block"
        }).animate({
          opacity: 1
        }, n.options.animation_speed, n.options.animation_easing), i.outgoing_slide >= 0 ? s.animate({
          opacity: 0
        }, n.options.animation_speed, n.options.animation_easing, function () {
          n.size() > 1 && (e.eq(i.upcoming_slide).css({
            zIndex: 2
          }), i.outgoing_slide >= 0 && e.eq(i.outgoing_slide).css({
            opacity: 1,
            display: "none",
            zIndex: 0
          })), t();
        }) : (o.css({
          zIndex: 2
        }), t());
      }
    };

    c = t.extend(c, t.fn.superslides.fx);
    var d = {
      _centerY: function _centerY(i) {
        var n = t(i);
        n.css({
          top: (s.height - n.height()) / 2
        });
      },
      _centerX: function _centerX(i) {
        var n = t(i);
        n.css({
          left: (s.width - n.width()) / 2
        });
      },
      _center: function _center(i) {
        s.image._centerX(i), s.image._centerY(i);
      },
      _aspectRatio: function _aspectRatio(i) {
        if (!i.naturalHeight && !i.naturalWidth) {
          var t = new Image();
          t.src = i.src, i.naturalHeight = t.height, i.naturalWidth = t.width;
        }

        return i.naturalHeight / i.naturalWidth;
      },
      _scale: function _scale(i, n) {
        n = n || s.image._aspectRatio(i);
        var e = s.height / s.width,
            o = t(i);
        e > n ? o.css({
          height: s.height,
          width: s.height / n
        }) : o.css({
          height: s.width * n,
          width: s.width
        });
      }
    },
        l = {
      _setCurrent: function _setCurrent(i) {
        if (s.$pagination) {
          var t = s.$pagination.children();
          t.removeClass("current"), t.eq(i).addClass("current");
        }
      },
      _addItem: function _addItem(i) {
        var n = i + 1,
            e = n,
            o = s.$container.children().eq(i),
            a = o.attr("id");
        a && (e = a);
        var r = t("<a>", {
          href: "#" + e,
          text: e
        });
        r.appendTo(s.$pagination);
      },
      _setup: function _setup() {
        if (s.options.pagination && 1 !== s.size()) {
          var i = t("<nav>", {
            "class": s.options.elements.pagination.replace(/^\./, "")
          });
          s.$pagination = i.appendTo(s.$el);

          for (var n = 0; s.size() > n; n++) {
            s.pagination._addItem(n);
          }
        }
      },
      _events: function _events() {
        s.$el.on("click", s.options.elements.pagination + " a", function (i) {
          i.preventDefault();

          var t,
              n = s._parseHash(this.hash);

          t = s._upcomingSlide(n, !0), t !== s.current && s.animate(t, function () {
            s.start();
          });
        });
      }
    };
    return this.css = h, this.image = d, this.pagination = l, this.fx = c, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(o).parent(".slides-control"), s._findPositions(), s.width = s._findWidth(), s.height = s._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), r();
  }, n.prototype = {
    _findWidth: function _findWidth() {
      return t(this.options.inherit_width_from).width();
    },
    _findHeight: function _findHeight() {
      return t(this.options.inherit_height_from).height();
    },
    _findMultiplier: function _findMultiplier() {
      return 1 === this.size() ? 1 : 3;
    },
    _upcomingSlide: function _upcomingSlide(i, t) {
      if (t && !isNaN(i) && (i -= 1), /next/.test(i)) return this._nextInDom();
      if (/prev/.test(i)) return this._prevInDom();
      if (/\d/.test(i)) return +i;

      if (i && /\w/.test(i)) {
        var n = this._findSlideById(i);

        return n >= 0 ? n : 0;
      }

      return 0;
    },
    _findSlideById: function _findSlideById(i) {
      return this.$container.find("#" + i).index();
    },
    _findPositions: function _findPositions(i, t) {
      t = t || this, void 0 === i && (i = -1), t.current = i, t.next = t._nextInDom(), t.prev = t._prevInDom();
    },
    _nextInDom: function _nextInDom() {
      var i = this.current + 1;
      return i === this.size() && (i = 0), i;
    },
    _prevInDom: function _prevInDom() {
      var i = this.current - 1;
      return 0 > i && (i = this.size() - 1), i;
    },
    _parseHash: function _parseHash(t) {
      return t = t || i.location.hash, t = t.replace(/^#/, ""), t && !isNaN(+t) && (t = +t), t;
    },
    size: function size() {
      return this.$container.children().length;
    },
    destroy: function destroy() {
      return this.$el.removeData();
    },
    update: function update() {
      this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides");
    },
    stop: function stop() {
      clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides");
    },
    start: function start() {
      var n = this;
      n.options.hashchange ? t(i).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function () {
        n.animate();
      }, this.options.play)), this.$el.trigger("started.slides");
    },
    animate: function animate(t, n) {
      var e = this,
          s = {};

      if (!(this.animating || (this.animating = !0, void 0 === t && (t = "next"), s.upcoming_slide = this._upcomingSlide(t), s.upcoming_slide >= this.size()))) {
        if (s.outgoing_slide = this.current, s.upcoming_position = 2 * this.width, s.offset = -s.upcoming_position, ("prev" === t || s.outgoing_slide > t) && (s.upcoming_position = 0, s.offset = 0), e.size() > 1 && e.pagination._setCurrent(s.upcoming_slide), e.options.hashchange) {
          var o = s.upcoming_slide + 1,
              a = e.$container.children(":eq(" + s.upcoming_slide + ")").attr("id");
          i.location.hash = a ? a : o;
        }

        e.$el.trigger("animating.slides", [s]), e.animation(s, function () {
          e._findPositions(s.upcoming_slide, e), "function" == typeof n && n(), e.animating = !1, e.$el.trigger("animated.slides"), e.init || (e.$el.trigger("init.slides"), e.init = !0, e.$container.fadeIn("fast"));
        });
      }
    }
  }, t.fn[e] = function (i, s) {
    var o = [];
    return this.each(function () {
      var a, r, h;
      return a = t(this), r = a.data(e), h = "object" == typeof i && i, r || (o = a.data(e, r = new n(this, h))), "string" == typeof i && (o = r[i], "function" == typeof o) ? o = o.call(r, s) : void 0;
    }), o;
  }, t.fn[e].fx = {};
})(this, jQuery);
/*========== Vide JS ==========*/


!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (a) {
  "use strict";

  function b(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = {};

    for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) {
      b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e;
    }

    return null == d && null == e ? a : i;
  }

  function c(a) {
    a = "" + a;
    var b,
        c,
        d,
        e = a.split(/\s+/),
        f = "50%",
        g = "50%";

    for (d = 0, b = e.length; d < b; d++) {
      c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c;
    }

    return {
      x: f,
      y: g
    };
  }

  function d(b, c) {
    var d = function d() {
      c(this.src);
    };

    a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d);
  }

  function e(c, d, e) {
    if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");else if ("object" == typeof d) for (var f in d) {
      d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
    }
    this.settings = a.extend({}, g, e), this.path = d;

    try {
      this.init();
    } catch (i) {
      if (i.message !== h) throw i;
    }
  }

  var f = "vide",
      g = {
    volume: 1,
    playbackRate: 1,
    muted: !0,
    loop: !0,
    autoplay: !0,
    position: "50% 50%",
    posterType: "detect",
    resizing: !0,
    bgColor: "transparent",
    className: ""
  },
      h = "Not implemented";
  e.prototype.init = function () {
    var b,
        e,
        f = this,
        g = f.path,
        i = g,
        j = "",
        k = f.$element,
        l = f.settings,
        m = c(l.position),
        n = l.posterType;
    e = f.$wrapper = a("<div>").addClass(l.className).css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-color": l.bgColor,
      "background-repeat": "no-repeat",
      "background-position": m.x + " " + m.y
    }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function (a) {
      e.css("background-image", "url(" + a + ")");
    }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>');

    try {
      b.prop({
        autoplay: l.autoplay,
        loop: l.loop,
        volume: l.volume,
        muted: l.muted,
        defaultMuted: l.muted,
        playbackRate: l.playbackRate,
        defaultPlaybackRate: l.playbackRate
      });
    } catch (o) {
      throw new Error(h);
    }

    b.css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: m.y,
      left: m.x,
      "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")",
      "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")",
      "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")",
      transform: "translate(-" + m.x + ", -" + m.y + ")",
      visibility: "hidden",
      opacity: 0
    }).one("canplaythrough.vide", function () {
      f.resize();
    }).one("playing.vide", function () {
      b.css({
        visibility: "visible",
        opacity: 1
      }), e.css("background-image", "none");
    }), k.on("resize.vide", function () {
      l.resizing && f.resize();
    }), e.append(b);
  }, e.prototype.getVideoObject = function () {
    return this.$video[0];
  }, e.prototype.resize = function () {
    if (this.$video) {
      var a = this.$wrapper,
          b = this.$video,
          c = b[0],
          d = c.videoHeight,
          e = c.videoWidth,
          f = a.height(),
          g = a.width();
      g / e > f / d ? b.css({
        width: g + 2,
        height: "auto"
      }) : b.css({
        width: "auto",
        height: f + 2
      });
    }
  }, e.prototype.destroy = function () {
    delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove();
  }, a[f] = {
    lookup: []
  }, a.fn[f] = function (b, c) {
    var d;
    return this.each(function () {
      d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d);
    }), this;
  }, a(document).ready(function () {
    var b = a(window);
    b.on("resize.vide", function () {
      for (var b, c = a[f].lookup.length, d = 0; d < c; d++) {
        b = a[f].lookup[d], b && b.settings.resizing && b.resize();
      }
    }), b.on("unload.vide", function () {
      return !1;
    }), a(document).find("[data-vide-bg]").each(function (b, c) {
      var d = a(c),
          e = d.data("vide-options"),
          g = d.data("vide-bg");
      d[f](g, e);
    });
  });
});
/*========== YTPlayer JS ==========*/

var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"));
}

var getYTPVideoID = function getYTPVideoID(e) {
  var r, t;
  return e.indexOf("youtu.be") > 0 ? r = (t = (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : e.indexOf("http") > -1 ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : t = (r = e.length > 15 ? null : e) ? null : e, {
    videoID: r,
    playlistID: t
  };
};

function uncamel(e) {
  return e.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase();
  });
}

function setUnit(e, r) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e;
}

function setFilter(e, r, t) {
  var a = uncamel(r),
      o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r];
}

!function (jQuery, ytp) {
  jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.0.8",
    build: "5878",
    author: "Matteo Bicocchi",
    apiKey: "",
    defaults: {
      containment: "body",
      ratio: "auto",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 50,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      mobileFallbackImage: null,
      gaTrack: !0,
      optimizeDisplay: !0,
      align: "center,center",
      onReady: function onReady(e) {}
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y"
    },
    controlBar: null,
    loading: null,
    locationProtocol: "https:",
    filters: {
      grayscale: {
        value: 0,
        unit: "%"
      },
      hue_rotate: {
        value: 0,
        unit: "deg"
      },
      invert: {
        value: 0,
        unit: "%"
      },
      opacity: {
        value: 0,
        unit: "%"
      },
      saturate: {
        value: 0,
        unit: "%"
      },
      sepia: {
        value: 0,
        unit: "%"
      },
      brightness: {
        value: 0,
        unit: "%"
      },
      contrast: {
        value: 0,
        unit: "%"
      },
      blur: {
        value: 0,
        unit: "px"
      }
    },
    buildPlayer: function buildPlayer(options) {
      return this.each(function () {
        var YTPlayer = this,
            $YTPlayer = jQuery(YTPlayer);
        YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime(), $YTPlayer.addClass("mb_YTPlayer");
        var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
        void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;

        var isIframe = function isIframe() {
          var e = !1;

          try {
            self.location.href != top.location.href && (e = !0);
          } catch (r) {
            e = !0;
          }

          return e;
        };

        YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + new Date().getTime());
        var playerID = "mbYTP_" + YTPlayer.id;
        YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
        var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID,
            playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
        YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
        var playerVars = {
          modestbranding: 1,
          autoplay: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations
        };

        if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
          html5: 1
        }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = "self" == YTPlayer.opt.containment ? jQuery(this) : jQuery(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
          YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, YTPlayer.isPlayer = !1, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
          var overlay = jQuery("<div/>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }).addClass("YTPOverlay");
          YTPlayer.isPlayer && overlay.on("click", function () {
            $YTPlayer.YTPTogglePlay();
          });
          var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
          wrapper.css({
            position: "absolute",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            opacity: 0
          });
          var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
          if (playerBox.css({
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden"
          }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative");
          }), YTPlayer.isBackground ? (jQuery("body").css({
            boxSizing: "border-box"
          }), wrapper.css({
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0
          }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
            position: "relative"
          }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
            opacity: 1
          }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
            YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible");
          }).on("mouseleave", function () {
            YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible");
          }), ytp.YTAPIReady) setTimeout(function () {
            jQuery(document).trigger("YTAPIReady");
          }, 100);else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script><\/script>").attr({
              src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
              id: "YTAPI"
            });
            jQuery("head").prepend(tag);
          }
          if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && YTPlayer.opt.containment.css({
            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }), $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
          jQuery(document).on("YTAPIReady", function () {
            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
              if (!YTPlayer.isInit) if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                  YTPlayer.opt.containment.css({
                    maxWidth: "100%"
                  });
                  var h = .563 * YTPlayer.opt.containment.outerWidth();
                  YTPlayer.opt.containment.css({
                    maxHeight: h
                  });
                }

                new YT.Player(playerID, {
                  videoId: YTPlayer.videoID.toString(),
                  width: "100%",
                  height: h,
                  playerVars: playerVars,
                  events: {
                    onReady: function onReady(e) {
                      YTPlayer.player = e.target, playerBox.css({
                        opacity: 1
                      }), YTPlayer.wrapper.css({
                        opacity: 1
                      });
                    }
                  }
                });
              } else new YT.Player(playerID, {
                videoId: YTPlayer.videoID.toString(),
                playerVars: playerVars,
                events: {
                  onReady: function onReady(e) {
                    YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                      $YTPlayer.optimizeDisplay();
                    }), jQuery.mbYTPlayer.checkForState(YTPlayer));
                  },
                  onStateChange: function onStateChange(event) {
                    if ("function" == typeof event.target.getPlayerState) {
                      var state = event.target.getPlayerState();
                      if (YTPlayer.preventTrigger) YTPlayer.preventTrigger = !1;else {
                        var eventType;

                        switch (YTPlayer.state = state, state) {
                          case -1:
                            eventType = "YTPUnstarted";
                            break;

                          case 0:
                            eventType = "YTPEnd";
                            break;

                          case 1:
                            eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                            break;

                          case 2:
                            eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;

                          case 3:
                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;

                          case 5:
                            eventType = "YTPCued";
                        }

                        var YTPEvent = jQuery.Event(eventType);
                        YTPEvent.time = YTPlayer.currentTime, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent);
                      }
                    }
                  },
                  onPlaybackQualityChange: function onPlaybackQualityChange(e) {
                    var r = e.target.getPlaybackQuality(),
                        t = jQuery.Event("YTPQualityChange");
                    t.quality = r, jQuery(YTPlayer).trigger(t);
                  },
                  onError: function onError(e) {
                    150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e);
                  }
                }
              });
            }));
          }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer);
        }
      });
    },
    getDataFromAPI: function getDataFromAPI(e) {
      if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
        if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
          var r = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
          e.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + r + ") center center",
            backgroundSize: "cover"
          }), e.opt.backgroundUrl = r;
        }
      }), e.videoData) setTimeout(function () {
        e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
        var r = jQuery.Event("YTPData");
        r.prop = {};

        for (var t in e.videoData) {
          r.prop[t] = e.videoData[t];
        }

        jQuery(e).trigger(r);
      }, 500), e.hasData = !0;else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (r) {
        var t;
        e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), t = r.items[0].snippet, e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData), e.hasData = !0;
        var a = jQuery.Event("YTPData");
        a.prop = {};

        for (var o in e.videoData) {
          a.prop[o] = e.videoData[o];
        }

        jQuery(e).trigger(a);
      });else {
        if (setTimeout(function () {
          jQuery(e).trigger("YTPChanged");
        }, 50), e.isPlayer && !e.opt.autoPlay) {
          var r = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
          e.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + r + ") center center",
            backgroundSize: "cover"
          }), e.opt.backgroundUrl = r;
        }

        e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio;
      }
      !e.isPlayer || e.opt.autoPlay || jQuery.browser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn());
    },
    removeStoredData: function removeStoredData() {
      jQuery.mbStorage.remove();
    },
    getVideoData: function getVideoData() {
      return this.get(0).videoData;
    },
    getVideoID: function getVideoID() {
      return this.get(0).videoID || !1;
    },
    setVideoQuality: function setVideoQuality(e) {
      this.get(0).player.setPlaybackQuality(e);
    },
    playlist: function playlist(e, r, t, a) {
      var o = this.get(0);
      return o.isPlayList = !0, r && (e = jQuery.shuffle(e)), o.videoID || (o.videos = e, o.videoCounter = 0, o.videoLength = e.length, jQuery(o).data("property", e[0]), jQuery(o).mb_YTPlayer()), "function" == typeof t && jQuery(o).one("YTPChanged", function () {
        t(o);
      }), jQuery(o).on("YTPEnd", function () {
        a = void 0 === a || a, jQuery(o).playNext(a);
      }), this;
    },
    playNext: function playNext(e) {
      var r = this.get(0);
      return r.checkForStartAt && (clearTimeout(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter++, r.videoCounter >= r.videoLength && e && (r.videoCounter = 0), r.videoCounter < r.videoLength ? jQuery(r).changeMovie(r.videos[r.videoCounter]) : r.videoCounter--, this;
    },
    playPrev: function playPrev() {
      var e = this.get(0);
      return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter]), this;
    },
    playIndex: function playIndex(e) {
      var r = this.get(0);
      return e -= 1, r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength - 1 && (r.videoCounter = r.videoLength - 1), jQuery(r).changeMovie(r.videos[r.videoCounter]), this;
    },
    changeMovie: function changeMovie(e) {
      var r = this.get(0);
      r.opt.startAt = 0, r.opt.stopAt = 0, r.opt.mask = !1, r.opt.mute = !0, r.hasData = !1, r.hasChanged = !0, r.player.loopTime = void 0, e && jQuery.extend(r.opt, e), r.videoID = getYTPVideoID(r.opt.videoURL).videoID, "true" == r.opt.loop && (r.opt.loop = 9999), jQuery(r.playerEl).CSSAnimate({
        opacity: 0
      }, 200, function () {
        var e = jQuery.Event("YTPChangeMovie");
        e.time = r.currentTime, e.videoId = r.videoID, jQuery(r).trigger(e), jQuery(r).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + r.videoID), 1, r.opt.quality), jQuery(r).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(r), jQuery.mbYTPlayer.getDataFromAPI(r);
      }), jQuery.mbYTPlayer.applyMask(r);
    },
    getPlayer: function getPlayer() {
      return jQuery(this).get(0).player;
    },
    playerDestroy: function playerDestroy() {
      var e = this.get(0);
      return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this;
    },
    fullscreen: function fullscreen(real) {
      var YTPlayer = this.get(0);
      void 0 === real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
      var controls = jQuery("#controlBar_" + YTPlayer.id),
          fullScreenBtn = controls.find(".mb_OnlyYT"),
          videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;

      if (real) {
        var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
          RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
            opacity: YTPlayer.opt.opacity
          }, 500), videoWrapper.css({
            zIndex: 0
          }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
        });
      }

      if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
        cursor: "auto"
      }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
        opacity: YTPlayer.opt.opacity
      }, 500), videoWrapper.css({
        zIndex: 0
      })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;else {
        var hideMouse = function hideMouse() {
          YTPlayer.overlay.css({
            cursor: "none"
          });
        };

        jQuery(document).on("mousemove.YTPlayer", function (e) {
          YTPlayer.overlay.css({
            cursor: "auto"
          }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
        }), hideMouse(), real ? (videoWrapper.css({
          opacity: 0
        }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
          videoWrapper.CSSAnimate({
            opacity: 1
          }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0);
        }, 500)) : videoWrapper.css({
          zIndex: 1e4
        }).CSSAnimate({
          opacity: 1
        }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0;
      }

      function RunPrefixMethod(e, r) {
        for (var t, a, o = ["webkit", "moz", "ms", "o", ""], i = 0; i < o.length && !e[t];) {
          if (t = r, "" == o[i] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[i] + t])) return o = [o[i]], "function" == a ? e[t]() : e[t];
          i++;
        }
      }

      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen");
      }

      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen");
      }

      return this;
    },
    toggleLoops: function toggleLoops() {
      var e = this.get(0),
          r = e.opt;
      return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this;
    },
    play: function play() {
      var e = this.get(0);
      return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
        opacity: e.isAlone ? 1 : e.opt.opacity
      }, 2e3), jQuery(e.playerEl).CSSAnimate({
        opacity: 1
      }, 1e3), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, jQuery(e).css("background-image", "none"), this) : this;
    },
    togglePlay: function togglePlay(e) {
      var r = this.get(0);
      return 1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state), this;
    },
    stop: function stop() {
      var e = this.get(0);
      return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this;
    },
    pause: function pause() {
      var e = this.get(0);
      return e.player.pauseVideo(), e.state = 2, this;
    },
    seekTo: function seekTo(e) {
      return this.get(0).player.seekTo(e, !0), this;
    },
    setVolume: function setVolume(e) {
      var r = this.get(0);
      return e || r.opt.vol || 0 != r.player.getVolume() ? !e && r.player.getVolume() > 0 || e && r.opt.vol == e ? r.isMute ? jQuery(r).YTPUnmute() : jQuery(r).YTPMute() : (r.opt.vol = e, r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)) : jQuery(r).YTPUnmute(), this;
    },
    toggleVolume: function toggleVolume() {
      var e = this.get(0);
      if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1);
    },
    mute: function mute() {
      var e = this.get(0);

      if (!e.isMute) {
        e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
        var r = jQuery.Event("YTPMuted");
        return r.time = e.currentTime, e.canTrigger && jQuery(e).trigger(r), this;
      }
    },
    unmute: function unmute() {
      var e = this.get(0);

      if (e.isMute) {
        e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
        var r = jQuery.Event("YTPUnmuted");
        return r.time = e.currentTime, e.canTrigger && jQuery(e).trigger(r), this;
      }
    },
    applyFilter: function applyFilter(e, r) {
      return this.each(function () {
        this.filters[e].value = r, this.filtersEnabled && jQuery(this).YTPEnableFilters();
      });
    },
    applyFilters: function applyFilters(e) {
      return this.each(function () {
        var r = this;

        if (r.isReady) {
          for (var t in e) {
            jQuery(r).YTPApplyFilter(t, e[t]);
          }

          jQuery(r).trigger("YTPFiltersApplied");
        } else jQuery(r).on("YTPReady", function () {
          jQuery(r).YTPApplyFilters(e);
        });
      });
    },
    toggleFilter: function toggleFilter(e, r) {
      return this.each(function () {
        this.filters[e].value ? this.filters[e].value = 0 : this.filters[e].value = r, this.filtersEnabled && jQuery(this).YTPEnableFilters();
      });
    },
    toggleFilters: function toggleFilters(e) {
      return this.each(function () {
        var r = this;
        r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled);
      });
    },
    disableFilters: function disableFilters() {
      return this.each(function () {
        var e = jQuery(this.playerEl);
        e.css("-webkit-filter", ""), e.css("filter", ""), this.filtersEnabled = !1;
      });
    },
    enableFilters: function enableFilters() {
      return this.each(function () {
        var e = this,
            r = jQuery(e.playerEl),
            t = "";

        for (var a in e.filters) {
          e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
        }

        r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0;
      });
    },
    removeFilter: function removeFilter(e, r) {
      return this.each(function () {
        if ("function" == typeof e && (r = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof r && r(e);else for (var t in this.filters) {
          jQuery(this).YTPApplyFilter(t, 0), "function" == typeof r && r(t);
        }
      });
    },
    getFilters: function getFilters() {
      return this.get(0).filters;
    },
    addMask: function addMask(e) {
      var r = this.get(0),
          t = r.overlay;
      e || (e = r.actualMask);
      var a = jQuery("<img/>").attr("src", e).on("load", function () {
        t.CSSAnimate({
          opacity: 0
        }, 500, function () {
          r.hasMask = !0, a.remove(), t.css({
            backgroundImage: "url(" + e + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }), t.CSSAnimate({
            opacity: 1
          }, 500);
        });
      });
      return this;
    },
    removeMask: function removeMask() {
      var e = this.get(0),
          r = e.overlay;
      return r.CSSAnimate({
        opacity: 0
      }, 500, function () {
        e.hasMask = !1, r.css({
          backgroundImage: "",
          backgroundRepeat: "",
          backgroundPosition: "",
          backgroundSize: ""
        }), r.CSSAnimate({
          opacity: 1
        }, 500);
      }), this;
    },
    applyMask: function applyMask(e) {
      var r = jQuery(e);
      if (r.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) r.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask;else if ("object" == typeof e.opt.mask) {
        for (var t in e.opt.mask) {
          if (e.opt.mask[t]) jQuery("<img/>").attr("src", e.opt.mask[t]);
        }

        e.opt.mask[0] && r.YTPAddMask(e.opt.mask[0]), r.on("YTPTime.mask", function (t) {
          for (var a in e.opt.mask) {
            t.time == a && (e.opt.mask[a] ? (r.YTPAddMask(e.opt.mask[a]), e.actualMask = e.opt.mask[a]) : r.YTPRemoveMask());
          }
        });
      }
    },
    toggleMask: function toggleMask() {
      var e = this.get(0),
          r = $(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this;
    },
    manageProgress: function manageProgress() {
      var e = this.get(0),
          r = jQuery("#controlBar_" + e.id),
          t = r.find(".mb_YTPProgress"),
          a = r.find(".mb_YTPLoaded"),
          o = r.find(".mb_YTPseekbar"),
          i = t.outerWidth(),
          l = Math.floor(e.player.getCurrentTime()),
          n = Math.floor(e.player.getDuration()),
          s = l * i / n,
          u = 100 * e.player.getVideoLoadedFraction();
      return a.css({
        left: 0,
        width: u + "%"
      }), o.css({
        left: 0,
        width: s
      }), {
        totalTime: n,
        currentTime: l
      };
    },
    buildControls: function buildControls(YTPlayer) {
      var data = YTPlayer.opt;

      if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
        YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
          whiteSpace: "noWrap",
          position: YTPlayer.isBackground ? "fixed" : "absolute",
          zIndex: YTPlayer.isBackground ? 1e4 : 1e3
        }).hide();
        var buttonBar = jQuery("<div/>").addClass("buttonBar"),
            playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
          1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay();
        }),
            MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
          0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute();
        }),
            volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
          display: "inline-block"
        });
        YTPlayer.volumeBar = volumeBar;
        var idx = jQuery("<span/>").addClass("mb_YTPTime"),
            vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
        var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
          window.open(vURL, "viewOnYT");
        }),
            onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
          jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
        }),
            progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
          timeBar.css({
            width: e.clientX - timeBar.offset().left
          }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
            width: 0
          });
          var r = Math.floor(YTPlayer.player.getDuration());
          YTPlayer["goto"] = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
            width: 0
          });
        }),
            loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
            timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
          initialval: YTPlayer.opt.vol,
          scale: 100,
          orientation: "h",
          callback: function callback(e) {
            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
          }
        });
      }
    },
    checkForState: function checkForState(YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 400;
      if (clearInterval(YTPlayer.getState), !jQuery.contains(document, YTPlayer)) return jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
      jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function () {
        var prog = jQuery(YTPlayer).YTPManageProgress(),
            $YTPlayer = jQuery(YTPlayer),
            data = YTPlayer.opt,
            startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
            stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;

        if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
          var YTPEvent = jQuery.Event("YTPTime");
          YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent);
        }

        if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
          if (YTPlayer.isEnded) return;

          if (YTPlayer.isEnded = !0, setTimeout(function () {
            YTPlayer.isEnded = !1;
          }, 1e3), YTPlayer.isPlayList) {
            if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
              YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
              var YTPEnd = jQuery.Event("YTPEnd");
              return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd);
            }
          } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
            opacity: 0
          }, 500, function () {
            YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
            var e = jQuery.Event("YTPEnd");
            e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
              background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
              backgroundSize: "cover"
            });
          });

          YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay();
        }
      }, interval);
    },
    getTime: function getTime() {
      var e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime);
    },
    getTotalTime: function getTotalTime() {
      var e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.totalTime);
    },
    checkForStart: function checkForStart(e) {
      var r = jQuery(e);

      if (jQuery.contains(document, e)) {
        if (e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
          var t = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
          e.overlay.addClass(e.isRetina ? t + " retina" : t);
        } else e.overlay.removeClass(function (e, r) {
          var t = r.split(" "),
              a = [];
          return jQuery.each(t, function (e, r) {
            /raster.*/.test(r) && a.push(r);
          }), a.push("retina"), a.join(" ");
        });

        var a = e.opt.startAt ? e.opt.startAt : 1;
        e.player.playVideo(), e.player.seekTo(a, !0), e.checkForStartAt = setInterval(function () {
          jQuery(e).YTPMute();
          var t = e.player.getVideoLoadedFraction() >= a / e.player.getDuration();

          if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= a && t) {
            clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
            var o = jQuery.Event("YTPReady");

            if (o.time = e.currentTime, jQuery(e).trigger(o), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
              var i = jQuery.Event("YTPStart");
              i.time = e.currentTime, jQuery(e).trigger(i), r.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                opacity: 1
              }, 1e3), r.YTPPlay(), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
              }, 1e3), jQuery.browser.safari && (e.safariPlay = setInterval(function () {
                1 != e.state ? r.YTPPlay() : clearInterval(e.safariPlay);
              }, 10)), r.on("YTPReady", function () {
                r.YTPPlay();
              });
            } else e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
              opacity: 1
            }, 500), e.wrapper.CSSAnimate({
              opacity: e.isAlone ? 1 : e.opt.opacity
            }, 500)), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);

            e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function () {
              e.loading.fadeOut();
            }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3);
          } else jQuery.browser.safari && (e.player.playVideo(), a >= 0 && e.player.seekTo(a, !0));
        }, 1);
      } else jQuery(e).YTPPlayerDestroy();
    },
    setAlign: function setAlign(e) {
      this.optimizeDisplay(e);
    },
    getAlign: function getAlign() {
      return this.get(0).opt.align;
    },
    formatTime: function formatTime(e) {
      var r = Math.floor(e / 60),
          t = Math.floor(e - 60 * r);
      return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t);
    }
  }, jQuery.fn.optimizeDisplay = function (e) {
    var r = this.get(0),
        t = jQuery(r.playerEl),
        a = {};
    r.opt.align = e || r.opt.align, r.opt.align = "undefined " != typeof r.opt.align ? r.opt.align : "center,center";
    var o = r.opt.align.split(",");

    if (r.opt.optimizeDisplay) {
      var i = {},
          l = r.wrapper;
      i.width = l.outerWidth(), i.height = l.outerHeight(), a.width = i.width, a.height = "16/9" == r.opt.ratio ? Math.ceil(i.width * (9 / 16)) : Math.ceil(.75 * i.width), a.width = i.width, a.height = "16/9" == r.opt.ratio ? Math.ceil(i.width * (9 / 16)) : Math.ceil(.75 * i.width), a.marginTop = -(a.height - i.height) / 2, a.marginLeft = 0;
      var n = a.height < i.height;
      n && (a.height = i.height, a.width = "16/9" == r.opt.ratio ? Math.floor(i.height * (16 / 9)) : Math.floor(i.height * (4 / 3)), a.marginTop = 0, a.marginLeft = -(a.width - i.width) / 2);

      for (var s in o) {
        switch (o[s].trim()) {
          case "top":
            a.marginTop = n ? -(a.height - i.height) / 2 : 0;
            break;

          case "bottom":
            a.marginTop = n ? 0 : -(a.height - i.height);
            break;

          case "left":
            a.marginLeft = 0;
            break;

          case "right":
            a.marginLeft = n ? -(a.width - i.width) : 0;
        }
      }
    } else a.width = "100%", a.height = "100%", a.marginTop = 0, a.marginLeft = 0;

    t.css({
      width: a.width,
      height: a.height,
      marginTop: a.marginTop,
      marginLeft: a.marginLeft
    });
  }, jQuery.shuffle = function (e) {
    for (var r = e.slice(), t = r.length, a = t; a--;) {
      var o = parseInt(Math.random() * t),
          i = r[a];
      r[a] = r[o], r[o] = i;
    }

    return r;
  }, jQuery.fn.unselectable = function () {
    return this.each(function () {
      jQuery(this).css({
        "-moz-user-select": "none",
        "-webkit-user-select": "none",
        "user-select": "none"
      }).attr("unselectable", "on");
    });
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign, jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;
}(jQuery, ytp), jQuery.support.CSStransition = function () {
  var e = (document.body || document.documentElement).style;
  return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition;
}(), jQuery.CSS = {
  name: "mb.CSSAnimate",
  author: "Matteo Bicocchi",
  version: "2.0.0",
  transitionEnd: "transitionEnd",
  sfx: "",
  filters: {
    blur: {
      min: 0,
      max: 100,
      unit: "px"
    },
    brightness: {
      min: 0,
      max: 400,
      unit: "%"
    },
    contrast: {
      min: 0,
      max: 400,
      unit: "%"
    },
    grayscale: {
      min: 0,
      max: 100,
      unit: "%"
    },
    hueRotate: {
      min: 0,
      max: 360,
      unit: "deg"
    },
    invert: {
      min: 0,
      max: 100,
      unit: "%"
    },
    saturate: {
      min: 0,
      max: 400,
      unit: "%"
    },
    sepia: {
      min: 0,
      max: 100,
      unit: "%"
    }
  },
  normalizeCss: function normalizeCss(e) {
    var r = jQuery.extend(!0, {}, e);
    jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");

    for (var t in r) {
      "transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]);
      var a = "";
      "x" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]), "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t]);
    }

    return r;
  },
  getProp: function getProp(e) {
    var r = [];

    for (var t in e) {
      r.indexOf(t) < 0 && r.push(uncamel(t));
    }

    return r.join(",");
  },
  animate: function animate(e, r, t, a, o) {
    return this.each(function () {
      function i() {
        l.called = !0, l.CSSAIsRunning = !1, n.off(jQuery.CSS.transitionEnd + "." + l.id), clearTimeout(l.timeout), n.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof o && o.apply(l), "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null);
      }

      var l = this,
          n = jQuery(this);
      l.id = l.id || "CSSA_" + new Date().getTime();
      var s = s || {
        type: "noEvent"
      };
      if (l.CSSAIsRunning && l.eventType == s.type && !jQuery.browser.msie && jQuery.browser.version <= 9) l.CSSqueue = function () {
        n.CSSAnimate(e, r, t, a, o);
      };else if (l.CSSqueue = null, l.eventType = s.type, 0 !== n.length && e) {
        if (e = jQuery.normalizeCss(e), l.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (a = t, t = 0), "string" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r) for (var u in jQuery.fx.speeds) {
          if (r == u) {
            r = jQuery.fx.speeds[u];
            break;
          }

          r = jQuery.fx.speeds._default;
        }

        if (r || (r = jQuery.fx.speeds._default), "string" == typeof o && (a = o, o = null), !jQuery.support.CSStransition) {
          for (var y in e) {
            if ("transform" === y && delete e[y], "filter" === y && delete e[y], "transform-origin" === y && delete e[y], "auto" === e[y] && delete e[y], "x" === y) {
              var c = e[y];
              e["left"] = c, delete e[y];
            }

            if ("y" === y) {
              c = e[y];
              e["top"] = c, delete e[y];
            }

            ("-ms-transform" === y || "-ms-filter" === y) && delete e[y];
          }

          return void n.delay(t).animate(e, r, o);
        }

        var p = {
          "default": "ease",
          "in": "ease-in",
          out: "ease-out",
          "in-out": "ease-in-out",
          snap: "cubic-bezier(0,1,.5,1)",
          easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
          easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
          easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
          easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
          easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
          easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
          easeOutExpo: "cubic-bezier(.19,1,.22,1)",
          easeInOutExpo: "cubic-bezier(1,0,0,1)",
          easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
          easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
          easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
          easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
          easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
          easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
          easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
          easeOutQuint: "cubic-bezier(.23,1,.32,1)",
          easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
          easeInSine: "cubic-bezier(.47,0,.745,.715)",
          easeOutSine: "cubic-bezier(.39,.575,.565,1)",
          easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
          easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
          easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
          easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        };
        p[a] && (a = p[a]), n.off(jQuery.CSS.transitionEnd + "." + l.id);
        var d = jQuery.CSS.getProp(e),
            T = {};
        jQuery.extend(T, e), T[jQuery.CSS.sfx + "transition-property"] = d, T[jQuery.CSS.sfx + "transition-duration"] = r + "ms", T[jQuery.CSS.sfx + "transition-delay"] = t + "ms", T[jQuery.CSS.sfx + "transition-timing-function"] = a, setTimeout(function () {
          n.one(jQuery.CSS.transitionEnd + "." + l.id, i), n.css(T);
        }, 1), l.timeout = setTimeout(function () {
          return l.called || !o ? (l.called = !1, void (l.CSSAIsRunning = !1)) : (n.css(jQuery.CSS.sfx + "transition", ""), o.apply(l), l.CSSAIsRunning = !1, void ("function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)));
        }, r + t + 10);
      }
    });
  }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
  return this.each(function () {
    var r = jQuery(this),
        t = jQuery.normalizeCss(e);
    r.css(t);
  });
};
var nAgt = navigator.userAgent;

if (!jQuery.browser) {
  var nameOffset, verOffset, ix;
  if (jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end);
  } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
  -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
}

jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), function (e) {
  var r = (/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()), "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1);
  e.simpleSlider = {
    defaults: {
      initialval: 0,
      scale: 100,
      orientation: "h",
      readonly: !1,
      callback: !1
    },
    events: {
      start: r ? "touchstart" : "mousedown",
      end: r ? "touchend" : "mouseup",
      move: r ? "touchmove" : "mousemove"
    },
    init: function init(t) {
      return this.each(function () {
        var a = this,
            o = e(a);
        o.addClass("simpleSlider"), a.opt = {}, e.extend(a.opt, e.simpleSlider.defaults, t), e.extend(a.opt, o.data());
        var i = "h" == a.opt.orientation ? "horizontal" : "vertical",
            l = e("<div/>").addClass("level").addClass(i);
        o.prepend(l), a.level = l, o.css({
          cursor: "default"
        }), "auto" == a.opt.scale && (a.opt.scale = e(a).outerWidth()), o.updateSliderVal(), a.opt.readonly || (o.on(e.simpleSlider.events.start, function (e) {
          r && (e = e.changedTouches[0]), a.canSlide = !0, o.updateSliderVal(e), o.css({
            cursor: "col-resize"
          }), e.preventDefault(), e.stopPropagation();
        }), e(document).on(e.simpleSlider.events.move, function (t) {
          r && (t = t.changedTouches[0]), a.canSlide && (e(document).css({
            cursor: "default"
          }), o.updateSliderVal(t), t.preventDefault(), t.stopPropagation());
        }).on(e.simpleSlider.events.end, function () {
          e(document).css({
            cursor: "auto"
          }), a.canSlide = !1, o.css({
            cursor: "auto"
          });
        }));
      });
    },
    updateSliderVal: function updateSliderVal(r) {
      function t(e, r) {
        return Math.floor(100 * e / r);
      }

      var a = this,
          o = a.get(0);

      if (o.opt) {
        o.opt.initialval = "number" == typeof o.opt.initialval ? o.opt.initialval : o.opt.initialval(o);
        var i = e(o).outerWidth(),
            l = e(o).outerHeight();
        o.x = "object" == typeof r ? r.clientX + document.body.scrollLeft - a.offset().left : "number" == typeof r ? r * i / o.opt.scale : o.opt.initialval * i / o.opt.scale, o.y = "object" == typeof r ? r.clientY + document.body.scrollTop - a.offset().top : "number" == typeof r ? (o.opt.scale - o.opt.initialval - r) * l / o.opt.scale : o.opt.initialval * l / o.opt.scale, o.y = a.outerHeight() - o.y, o.scaleX = o.x * o.opt.scale / i, o.scaleY = o.y * o.opt.scale / l, o.outOfRangeX = o.scaleX > o.opt.scale ? o.scaleX - o.opt.scale : o.scaleX < 0 ? o.scaleX : 0, o.outOfRangeY = o.scaleY > o.opt.scale ? o.scaleY - o.opt.scale : o.scaleY < 0 ? o.scaleY : 0, o.outOfRange = "h" == o.opt.orientation ? o.outOfRangeX : o.outOfRangeY, o.value = void 0 !== r ? "h" == o.opt.orientation ? o.x >= a.outerWidth() ? o.opt.scale : o.x <= 0 ? 0 : o.scaleX : o.y >= a.outerHeight() ? o.opt.scale : o.y <= 0 ? 0 : o.scaleY : "h" == o.opt.orientation ? o.scaleX : o.scaleY, "h" == o.opt.orientation ? o.level.width(t(o.x, i) + "%") : o.level.height(t(o.y, l)), "function" == typeof o.opt.callback && o.opt.callback(o);
      }
    }
  }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal;
}(jQuery), function (e) {
  e.mbCookie = {
    set: function set(e, r, t, a) {
      r = JSON.stringify(r), t || (t = 7), a = a ? "; domain=" + a : "";
      var o,
          i = new Date();
      i.setTime(i.getTime() + 864e5 * t), o = "; expires=" + i.toGMTString(), document.cookie = e + "=" + r + o + "; path=/" + a;
    },
    get: function get(e) {
      for (var r = e + "=", t = document.cookie.split(";"), a = 0; a < t.length; a++) {
        for (var o = t[a]; " " == o.charAt(0);) {
          o = o.substring(1, o.length);
        }

        if (0 == o.indexOf(r)) return JSON.parse(o.substring(r.length, o.length));
      }

      return null;
    },
    remove: function remove(r) {
      e.mbCookie.set(r, "", -1);
    }
  }, e.mbStorage = {
    set: function set(e, r) {
      r = JSON.stringify(r), localStorage.setItem(e, r);
    },
    get: function get(e) {
      return localStorage[e] ? JSON.parse(localStorage[e]) : null;
    },
    remove: function remove(e) {
      e ? localStorage.removeItem(e) : localStorage.clear();
    }
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=plugins-9a9c9141a59457814186.js.map