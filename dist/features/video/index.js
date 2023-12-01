"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/vanilla-lazyload@17.8.5/node_modules/vanilla-lazyload/dist/lazyload.min.js
  var require_lazyload_min = __commonJS({
    "node_modules/.pnpm/vanilla-lazyload@17.8.5/node_modules/vanilla-lazyload/dist/lazyload.min.js"(exports, module) {
      init_live_reload();
      !function(n, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t();
      }(exports, function() {
        "use strict";
        function n() {
          return n = Object.assign || function(n2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var e2 = arguments[t2];
              for (var i2 in e2)
                Object.prototype.hasOwnProperty.call(e2, i2) && (n2[i2] = e2[i2]);
            }
            return n2;
          }, n.apply(this, arguments);
        }
        var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = { elements_selector: ".lazy", container: e || t ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", data_bg_hidpi: "bg-hidpi", data_bg_multi: "bg-multi", data_bg_multi_hidpi: "bg-multi-hidpi", data_bg_set: "bg-set", data_poster: "poster", class_applied: "applied", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_entered: "entered", class_exited: "exited", unobserve_completed: true, unobserve_entered: false, cancel_on_exit: true, callback_enter: null, callback_exit: null, callback_applied: null, callback_loading: null, callback_loaded: null, callback_error: null, callback_finish: null, callback_cancel: null, use_native: false, restore_on_error: false }, c = function(t2) {
          return n({}, r, t2);
        }, l = function(n2, t2) {
          var e2, i2 = "LazyLoad::Initialized", o2 = new n2(t2);
          try {
            e2 = new CustomEvent(i2, { detail: { instance: o2 } });
          } catch (n3) {
            (e2 = document.createEvent("CustomEvent")).initCustomEvent(i2, false, false, { instance: o2 });
          }
          window.dispatchEvent(e2);
        }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n2, t2) {
          return n2.getAttribute(E + t2);
        }, k = function(n2) {
          return y(n2, I);
        }, w = function(n2, t2) {
          return function(n3, t3, e2) {
            var i2 = "data-ll-status";
            null !== e2 ? n3.setAttribute(i2, e2) : n3.removeAttribute(i2);
          }(n2, 0, t2);
        }, A = function(n2) {
          return w(n2, null);
        }, L = function(n2) {
          return null === k(n2);
        }, O = function(n2) {
          return k(n2) === h;
        }, x = [v, b, p, m], C = function(n2, t2, e2, i2) {
          n2 && "function" == typeof n2 && (void 0 === i2 ? void 0 === e2 ? n2(t2) : n2(t2, e2) : n2(t2, e2, i2));
        }, N = function(n2, t2) {
          o ? n2.classList.add(t2) : n2.className += (n2.className ? " " : "") + t2;
        }, M = function(n2, t2) {
          o ? n2.classList.remove(t2) : n2.className = n2.className.replace(new RegExp("(^|\\s+)" + t2 + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
        }, z = function(n2) {
          return n2.llTempImage;
        }, T = function(n2, t2) {
          if (t2) {
            var e2 = t2._observer;
            e2 && e2.unobserve(n2);
          }
        }, R = function(n2, t2) {
          n2 && (n2.loadingCount += t2);
        }, G = function(n2, t2) {
          n2 && (n2.toLoadCount = t2);
        }, j = function(n2) {
          for (var t2, e2 = [], i2 = 0; t2 = n2.children[i2]; i2 += 1)
            "SOURCE" === t2.tagName && e2.push(t2);
          return e2;
        }, D = function(n2, t2) {
          var e2 = n2.parentNode;
          e2 && "PICTURE" === e2.tagName && j(e2).forEach(t2);
        }, H = function(n2, t2) {
          j(n2).forEach(t2);
        }, V = [u], F = [u, f], B = [u, s, d], J = [g], P = function(n2) {
          return !!n2[_];
        }, S = function(n2) {
          return n2[_];
        }, U = function(n2) {
          return delete n2[_];
        }, $ = function(n2, t2) {
          if (!P(n2)) {
            var e2 = {};
            t2.forEach(function(t3) {
              e2[t3] = n2.getAttribute(t3);
            }), n2[_] = e2;
          }
        }, q = function(n2, t2) {
          if (P(n2)) {
            var e2 = S(n2);
            t2.forEach(function(t3) {
              !function(n3, t4, e3) {
                e3 ? n3.setAttribute(t4, e3) : n3.removeAttribute(t4);
              }(n2, t3, e2[t3]);
            });
          }
        }, K = function(n2, t2, e2) {
          N(n2, t2.class_applied), w(n2, p), e2 && (t2.unobserve_completed && T(n2, t2), C(t2.callback_applied, n2, e2));
        }, Q = function(n2, t2, e2) {
          N(n2, t2.class_loading), w(n2, v), e2 && (R(e2, 1), C(t2.callback_loading, n2, e2));
        }, W = function(n2, t2, e2) {
          e2 && n2.setAttribute(t2, e2);
        }, X = function(n2, t2) {
          W(n2, d, y(n2, t2.data_sizes)), W(n2, s, y(n2, t2.data_srcset)), W(n2, u, y(n2, t2.data_src));
        }, Y = { IMG: function(n2, t2) {
          D(n2, function(n3) {
            $(n3, B), X(n3, t2);
          }), $(n2, B), X(n2, t2);
        }, IFRAME: function(n2, t2) {
          $(n2, V), W(n2, u, y(n2, t2.data_src));
        }, VIDEO: function(n2, t2) {
          H(n2, function(n3) {
            $(n3, V), W(n3, u, y(n3, t2.data_src));
          }), $(n2, F), W(n2, f, y(n2, t2.data_poster)), W(n2, u, y(n2, t2.data_src)), n2.load();
        }, OBJECT: function(n2, t2) {
          $(n2, J), W(n2, g, y(n2, t2.data_src));
        } }, Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"], nn = function(n2, t2) {
          !t2 || function(n3) {
            return n3.loadingCount > 0;
          }(t2) || function(n3) {
            return n3.toLoadCount > 0;
          }(t2) || C(n2.callback_finish, t2);
        }, tn = function(n2, t2, e2) {
          n2.addEventListener(t2, e2), n2.llEvLisnrs[t2] = e2;
        }, en = function(n2, t2, e2) {
          n2.removeEventListener(t2, e2);
        }, on = function(n2) {
          return !!n2.llEvLisnrs;
        }, an = function(n2) {
          if (on(n2)) {
            var t2 = n2.llEvLisnrs;
            for (var e2 in t2) {
              var i2 = t2[e2];
              en(n2, e2, i2);
            }
            delete n2.llEvLisnrs;
          }
        }, rn = function(n2, t2, e2) {
          !function(n3) {
            delete n3.llTempImage;
          }(n2), R(e2, -1), function(n3) {
            n3 && (n3.toLoadCount -= 1);
          }(e2), M(n2, t2.class_loading), t2.unobserve_completed && T(n2, e2);
        }, cn = function(n2, t2, e2) {
          var i2 = z(n2) || n2;
          on(i2) || function(n3, t3, e3) {
            on(n3) || (n3.llEvLisnrs = {});
            var i3 = "VIDEO" === n3.tagName ? "loadeddata" : "load";
            tn(n3, i3, t3), tn(n3, "error", e3);
          }(i2, function(o2) {
            !function(n3, t3, e3, i3) {
              var o3 = O(t3);
              rn(t3, e3, i3), N(t3, e3.class_loaded), w(t3, b), C(e3.callback_loaded, t3, i3), o3 || nn(e3, i3);
            }(0, n2, t2, e2), an(i2);
          }, function(o2) {
            !function(n3, t3, e3, i3) {
              var o3 = O(t3);
              rn(t3, e3, i3), N(t3, e3.class_error), w(t3, m), C(e3.callback_error, t3, i3), e3.restore_on_error && q(t3, B), o3 || nn(e3, i3);
            }(0, n2, t2, e2), an(i2);
          });
        }, ln = function(n2, t2, e2) {
          !function(n3) {
            return Z.indexOf(n3.tagName) > -1;
          }(n2) ? function(n3, t3, e3) {
            !function(n4) {
              n4.llTempImage = document.createElement("IMG");
            }(n3), cn(n3, t3, e3), function(n4) {
              P(n4) || (n4[_] = { backgroundImage: n4.style.backgroundImage });
            }(n3), function(n4, t4, e4) {
              var i2 = y(n4, t4.data_bg), o2 = y(n4, t4.data_bg_hidpi), r2 = a && o2 ? o2 : i2;
              r2 && (n4.style.backgroundImage = 'url("'.concat(r2, '")'), z(n4).setAttribute(u, r2), Q(n4, t4, e4));
            }(n3, t3, e3), function(n4, t4, e4) {
              var i2 = y(n4, t4.data_bg_multi), o2 = y(n4, t4.data_bg_multi_hidpi), r2 = a && o2 ? o2 : i2;
              r2 && (n4.style.backgroundImage = r2, K(n4, t4, e4));
            }(n3, t3, e3), function(n4, t4, e4) {
              var i2 = y(n4, t4.data_bg_set);
              if (i2) {
                var o2 = i2.split("|"), a2 = o2.map(function(n5) {
                  return "image-set(".concat(n5, ")");
                });
                n4.style.backgroundImage = a2.join(), "" === n4.style.backgroundImage && (a2 = o2.map(function(n5) {
                  return "-webkit-image-set(".concat(n5, ")");
                }), n4.style.backgroundImage = a2.join()), K(n4, t4, e4);
              }
            }(n3, t3, e3);
          }(n2, t2, e2) : function(n3, t3, e3) {
            cn(n3, t3, e3), function(n4, t4, e4) {
              var i2 = Y[n4.tagName];
              i2 && (i2(n4, t4), Q(n4, t4, e4));
            }(n3, t3, e3);
          }(n2, t2, e2);
        }, un = function(n2) {
          n2.removeAttribute(u), n2.removeAttribute(s), n2.removeAttribute(d);
        }, sn = function(n2) {
          D(n2, function(n3) {
            q(n3, B);
          }), q(n2, B);
        }, dn = { IMG: sn, IFRAME: function(n2) {
          q(n2, V);
        }, VIDEO: function(n2) {
          H(n2, function(n3) {
            q(n3, V);
          }), q(n2, F), n2.load();
        }, OBJECT: function(n2) {
          q(n2, J);
        } }, fn = function(n2, t2) {
          (function(n3) {
            var t3 = dn[n3.tagName];
            t3 ? t3(n3) : function(n4) {
              if (P(n4)) {
                var t4 = S(n4);
                n4.style.backgroundImage = t4.backgroundImage;
              }
            }(n3);
          })(n2), function(n3, t3) {
            L(n3) || O(n3) || (M(n3, t3.class_entered), M(n3, t3.class_exited), M(n3, t3.class_applied), M(n3, t3.class_loading), M(n3, t3.class_loaded), M(n3, t3.class_error));
          }(n2, t2), A(n2), U(n2);
        }, _n = ["IMG", "IFRAME", "VIDEO"], gn = function(n2) {
          return n2.use_native && "loading" in HTMLImageElement.prototype;
        }, vn = function(n2, t2, e2) {
          n2.forEach(function(n3) {
            return function(n4) {
              return n4.isIntersecting || n4.intersectionRatio > 0;
            }(n3) ? function(n4, t3, e3, i2) {
              var o2 = function(n5) {
                return x.indexOf(k(n5)) >= 0;
              }(n4);
              w(n4, "entered"), N(n4, e3.class_entered), M(n4, e3.class_exited), function(n5, t4, e4) {
                t4.unobserve_entered && T(n5, e4);
              }(n4, e3, i2), C(e3.callback_enter, n4, t3, i2), o2 || ln(n4, e3, i2);
            }(n3.target, n3, t2, e2) : function(n4, t3, e3, i2) {
              L(n4) || (N(n4, e3.class_exited), function(n5, t4, e4, i3) {
                e4.cancel_on_exit && function(n6) {
                  return k(n6) === v;
                }(n5) && "IMG" === n5.tagName && (an(n5), function(n6) {
                  D(n6, function(n7) {
                    un(n7);
                  }), un(n6);
                }(n5), sn(n5), M(n5, e4.class_loading), R(i3, -1), A(n5), C(e4.callback_cancel, n5, t4, i3));
              }(n4, t3, e3, i2), C(e3.callback_exit, n4, t3, i2));
            }(n3.target, n3, t2, e2);
          });
        }, bn = function(n2) {
          return Array.prototype.slice.call(n2);
        }, pn = function(n2) {
          return n2.container.querySelectorAll(n2.elements_selector);
        }, mn = function(n2) {
          return function(n3) {
            return k(n3) === m;
          }(n2);
        }, hn = function(n2, t2) {
          return function(n3) {
            return bn(n3).filter(L);
          }(n2 || pn(t2));
        }, En = function(n2, e2) {
          var o2 = c(n2);
          this._settings = o2, this.loadingCount = 0, function(n3, t2) {
            i && !gn(n3) && (t2._observer = new IntersectionObserver(function(e3) {
              vn(e3, n3, t2);
            }, function(n4) {
              return { root: n4.container === document ? null : n4.container, rootMargin: n4.thresholds || n4.threshold + "px" };
            }(n3)));
          }(o2, this), function(n3, e3) {
            t && (e3._onlineHandler = function() {
              !function(n4, t2) {
                var e4;
                (e4 = pn(n4), bn(e4).filter(mn)).forEach(function(t3) {
                  M(t3, n4.class_error), A(t3);
                }), t2.update();
              }(n3, e3);
            }, window.addEventListener("online", e3._onlineHandler));
          }(o2, this), this.update(e2);
        };
        return En.prototype = { update: function(n2) {
          var t2, o2, a2 = this._settings, r2 = hn(n2, a2);
          G(this, r2.length), !e && i ? gn(a2) ? function(n3, t3, e2) {
            n3.forEach(function(n4) {
              -1 !== _n.indexOf(n4.tagName) && function(n5, t4, e3) {
                n5.setAttribute("loading", "lazy"), cn(n5, t4, e3), function(n6, t5) {
                  var e4 = Y[n6.tagName];
                  e4 && e4(n6, t5);
                }(n5, t4), w(n5, h);
              }(n4, t3, e2);
            }), G(e2, 0);
          }(r2, a2, this) : (o2 = r2, function(n3) {
            n3.disconnect();
          }(t2 = this._observer), function(n3, t3) {
            t3.forEach(function(t4) {
              n3.observe(t4);
            });
          }(t2, o2)) : this.loadAll(r2);
        }, destroy: function() {
          this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), pn(this._settings).forEach(function(n2) {
            U(n2);
          }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
        }, loadAll: function(n2) {
          var t2 = this, e2 = this._settings;
          hn(n2, e2).forEach(function(n3) {
            T(n3, t2), ln(n3, e2, t2);
          });
        }, restoreAll: function() {
          var n2 = this._settings;
          pn(n2).forEach(function(t2) {
            fn(t2, n2);
          });
        } }, En.load = function(n2, t2) {
          var e2 = c(t2);
          ln(n2, e2);
        }, En.resetStatus = function(n2) {
          A(n2);
        }, t && function(n2, t2) {
          if (t2)
            if (t2.length)
              for (var e2, i2 = 0; e2 = t2[i2]; i2 += 1)
                l(n2, e2);
            else
              l(n2, t2);
        }(En, window.lazyLoadOptions), En;
      });
    }
  });

  // src/features/video/index.ts
  init_live_reload();
  var import_vanilla_lazyload = __toESM(require_lazyload_min(), 1);
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    new import_vanilla_lazyload.default({});
  });
})();
//# sourceMappingURL=index.js.map
