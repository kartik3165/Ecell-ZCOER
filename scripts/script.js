(() => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __markAsModule = (target) => __defProp(target, "__esModule", {
		value: true
	});
	var __commonJS = (cb, mod) => function __require() {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
			exports: {}
		}).exports, mod), mod.exports;
	};
	var __reExport = (target, module, copyDefault, desc) => {
		if (module && typeof module === "object" || typeof module === "function") {
			for (let key of __getOwnPropNames(module))
				if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
					__defProp(target, key, {
						get: () => module[key],
						enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
					});
		}
		return target;
	};
	var __toESM = (module, isNodeMode) => {
		return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? {
			get: () => module.default,
			enumerable: true
		} : {
			value: module,
			enumerable: true
		})), module);
	};

	// ns-hugo:/opt/build/repo/assets/scripts/libraries/splide.min.js
	var require_splide_min = __commonJS({
		"ns-hugo:/opt/build/repo/assets/scripts/libraries/splide.min.js"(exports, module) {
			function _defineProperties(n, t) {
				for (var e = 0; e < t.length; e++) {
					var i = t[e];
					i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(n, i.key, i);
				}
			}

			function _createClass(n, t, e) {
				return t && _defineProperties(n.prototype, t), e && _defineProperties(n, e), Object.defineProperty(n, "prototype", {
					writable: false
				}), n;
			}! function(n, t) {
				typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (n = typeof globalThis != "undefined" ? globalThis : n || self).Splide = t();
			}(exports, function() {
				"use strict";
				var d = "(prefers-reduced-motion: reduce)",
					R = 4,
					W = 5,
					n = {
						CREATED: 1,
						MOUNTED: 2,
						IDLE: 3,
						MOVING: R,
						SCROLLING: W,
						DRAGGING: 6,
						DESTROYED: 7
					};

				function x(n2) {
					n2.length = 0;
				}

				function _(n2, t2, e2) {
					return Array.prototype.slice.call(n2, t2, e2);
				}

				function D(n2) {
					return n2.bind.apply(n2, [null].concat(_(arguments, 1)));
				}

				function G() {}
				var v = setTimeout;

				function p(n2) {
					return requestAnimationFrame(n2);
				}

				function t(n2, t2) {
					return typeof t2 === n2;
				}

				function X(n2) {
					return !r(n2) && t("object", n2);
				}
				var o = Array.isArray,
					w = D(t, "function"),
					M = D(t, "string"),
					z = D(t, "undefined");

				function r(n2) {
					return n2 === null;
				}

				function g(n2) {
					return n2 instanceof HTMLElement;
				}

				function m(n2) {
					return o(n2) ? n2 : [n2];
				}

				function y(n2, t2) {
					m(n2).forEach(t2);
				}

				function b(n2, t2) {
					return -1 < n2.indexOf(t2);
				}

				function E(n2, t2) {
					return n2.push.apply(n2, m(t2)), n2;
				}

				function L(t2, n2, e2) {
					t2 && y(n2, function(n3) {
						n3 && t2.classList[e2 ? "add" : "remove"](n3);
					});
				}

				function P(n2, t2) {
					L(n2, M(t2) ? t2.split(" ") : t2, true);
				}

				function C(n2, t2) {
					y(t2, n2.appendChild.bind(n2));
				}

				function k(n2, e2) {
					y(n2, function(n3) {
						var t2 = (e2 || n3).parentNode;
						t2 && t2.insertBefore(n3, e2);
					});
				}

				function B(n2, t2) {
					return g(n2) && (n2.msMatchesSelector || n2.matches).call(n2, t2);
				}

				function S(n2, t2) {
					n2 = n2 ? _(n2.children) : [];
					return t2 ? n2.filter(function(n3) {
						return B(n3, t2);
					}) : n2;
				}

				function A(n2, t2) {
					return t2 ? S(n2, t2)[0] : n2.firstElementChild;
				}
				var h = Object.keys;

				function N(n2, t2, e2) {
					if (n2)
						for (var i2 = h(n2), i2 = e2 ? i2.reverse() : i2, o2 = 0; o2 < i2.length; o2++) {
							var r2 = i2[o2];
							if (r2 !== "__proto__" && t2(n2[r2], r2) === false)
								break;
						}
					return n2;
				}

				function T(i2) {
					return _(arguments, 1).forEach(function(e2) {
						N(e2, function(n2, t2) {
							i2[t2] = e2[t2];
						});
					}), i2;
				}

				function O(e2) {
					return _(arguments, 1).forEach(function(n2) {
						N(n2, function(n3, t2) {
							o(n3) ? e2[t2] = n3.slice() : X(n3) ? e2[t2] = O({}, X(e2[t2]) ? e2[t2] : {}, n3) : e2[t2] = n3;
						});
					}), e2;
				}

				function I(t2, n2) {
					m(n2 || h(t2)).forEach(function(n3) {
						delete t2[n3];
					});
				}

				function F(n2, e2) {
					y(n2, function(t2) {
						y(e2, function(n3) {
							t2 && t2.removeAttribute(n3);
						});
					});
				}

				function j(e2, t2, i2) {
					X(t2) ? N(t2, function(n2, t3) {
						j(e2, t3, n2);
					}) : y(e2, function(n2) {
						r(i2) || i2 === "" ? F(n2, t2) : n2.setAttribute(t2, String(i2));
					});
				}

				function H(n2, t2, e2) {
					n2 = document.createElement(n2);
					return t2 && (M(t2) ? P : j)(n2, t2), e2 && C(e2, n2), n2;
				}

				function Y(n2, t2, e2) {
					if (z(e2))
						return getComputedStyle(n2)[t2];
					r(e2) || (n2.style[t2] = "" + e2);
				}

				function q(n2, t2) {
					Y(n2, "display", t2);
				}

				function U(n2) {
					n2.setActive && n2.setActive() || n2.focus({
						preventScroll: true
					});
				}

				function K(n2, t2) {
					return n2.getAttribute(t2);
				}

				function J(n2, t2) {
					return n2 && n2.classList.contains(t2);
				}

				function Q(n2) {
					return n2.getBoundingClientRect();
				}

				function V(n2) {
					y(n2, function(n3) {
						n3 && n3.parentNode && n3.parentNode.removeChild(n3);
					});
				}

				function Z(n2) {
					return A(new DOMParser().parseFromString(n2, "text/html").body);
				}

				function $(n2, t2) {
					n2.preventDefault(), t2 && (n2.stopPropagation(), n2.stopImmediatePropagation());
				}

				function nn(n2, t2) {
					return n2 && n2.querySelector(t2);
				}

				function tn(n2, t2) {
					return t2 ? _(n2.querySelectorAll(t2)) : [];
				}

				function en(n2, t2) {
					L(n2, t2, false);
				}

				function on(n2) {
					return n2.timeStamp;
				}

				function rn(n2) {
					return M(n2) ? n2 : n2 ? n2 + "px" : "";
				}
				var un = "splide",
					i = "data-" + un;

				function sn(n2, t2) {
					if (!n2)
						throw new Error("[" + un + "] " + (t2 || ""));
				}
				var cn = Math.min,
					an = Math.max,
					fn = Math.floor,
					ln = Math.ceil,
					dn = Math.abs;

				function pn(n2, t2, e2) {
					return dn(n2 - t2) < e2;
				}

				function hn(n2, t2, e2, i2) {
					var o2 = cn(t2, e2),
						e2 = an(t2, e2);
					return i2 ? o2 < n2 && n2 < e2 : o2 <= n2 && n2 <= e2;
				}

				function vn(n2, t2, e2) {
					var i2 = cn(t2, e2),
						e2 = an(t2, e2);
					return cn(an(i2, n2), e2);
				}

				function gn(n2) {
					return (0 < n2) - (n2 < 0);
				}

				function mn(t2, n2) {
					return y(n2, function(n3) {
						t2 = t2.replace("%s", "" + n3);
					}), t2;
				}

				function yn(n2) {
					return n2 < 10 ? "0" + n2 : "" + n2;
				}
				var bn = {};

				function wn() {
					var s2 = [];

					function e2(n2, e3, i2) {
						y(n2, function(t2) {
							t2 && y(e3, function(n3) {
								n3.split(" ").forEach(function(n4) {
									n4 = n4.split(".");
									i2(t2, n4[0], n4[1]);
								});
							});
						});
					}
					return {
						bind: function(n2, t2, r2, u2) {
							e2(n2, t2, function(n3, t3, e3) {
								var i2 = "addEventListener" in n3,
									o2 = i2 ? n3.removeEventListener.bind(n3, t3, r2, u2) : n3.removeListener.bind(n3, r2);
								i2 ? n3.addEventListener(t3, r2, u2) : n3.addListener(r2), s2.push([n3, t3, e3, r2, o2]);
							});
						},
						unbind: function(n2, t2, o2) {
							e2(n2, t2, function(t3, e3, i2) {
								s2 = s2.filter(function(n3) {
									return !!(n3[0] !== t3 || n3[1] !== e3 || n3[2] !== i2 || o2 && n3[3] !== o2) || (n3[4](), false);
								});
							});
						},
						dispatch: function(n2, t2, e3) {
							var i2;
							return typeof CustomEvent == "function" ? i2 = new CustomEvent(t2, {
								bubbles: true,
								detail: e3
							}) : (i2 = document.createEvent("CustomEvent")).initCustomEvent(t2, true, false, e3), n2.dispatchEvent(i2), i2;
						},
						destroy: function() {
							s2.forEach(function(n2) {
								n2[4]();
							}), x(s2);
						}
					};
				}
				var En = "mounted",
					Sn = "move",
					xn = "moved",
					_n = "shifted",
					Pn = "click",
					Cn = "active",
					kn = "inactive",
					Ln = "visible",
					An = "hidden",
					Dn = "slide:keydown",
					Mn = "refresh",
					zn = "updated",
					Nn = "resize",
					Tn = "resized",
					On = "scroll",
					In = "scrolled",
					u = "destroy",
					Fn = "navigation:mounted",
					jn = "autoplay:play",
					Rn = "autoplay:pause",
					Wn = "lazyload:loaded";

				function Gn(n2) {
					var e2 = n2 ? n2.event.bus : document.createDocumentFragment(),
						i2 = wn();
					return n2 && n2.event.on(u, i2.destroy), T(i2, {
						bus: e2,
						on: function(n3, t2) {
							i2.bind(e2, m(n3).join(" "), function(n4) {
								t2.apply(t2, o(n4.detail) ? n4.detail : []);
							});
						},
						off: D(i2.unbind, e2),
						emit: function(n3) {
							i2.dispatch(e2, n3, _(arguments, 1));
						}
					});
				}

				function Xn(t2, n2, e2, i2) {
					var o2, r2, u2 = Date.now,
						s2 = 0,
						c2 = true,
						a2 = 0;

					function f2() {
						if (!c2) {
							if (s2 = t2 ? cn((u2() - o2) / t2, 1) : 1, e2 && e2(s2), 1 <= s2 && (n2(), o2 = u2(), i2 && ++a2 >= i2))
								return l2();
							p(f2);
						}
					}

					function l2() {
						c2 = true;
					}

					function d2() {
						r2 && cancelAnimationFrame(r2), c2 = !(r2 = s2 = 0);
					}
					return {
						start: function(n3) {
							n3 || d2(), o2 = u2() - (n3 ? s2 * t2 : 0), c2 = false, p(f2);
						},
						rewind: function() {
							o2 = u2(), s2 = 0, e2 && e2(s2);
						},
						pause: l2,
						cancel: d2,
						set: function(n3) {
							t2 = n3;
						},
						isPaused: function() {
							return c2;
						}
					};
				}

				function s(n2) {
					var t2 = n2;
					return {
						set: function(n3) {
							t2 = n3;
						},
						is: function(n3) {
							return b(m(n3), t2);
						}
					};
				}
				var e = "Arrow",
					Bn = e + "Left",
					Hn = e + "Right",
					c = e + "Up",
					a = e + "Down",
					Yn = "ttb",
					f = {
						width: ["height"],
						left: ["top", "right"],
						right: ["bottom", "left"],
						x: ["y"],
						X: ["Y"],
						Y: ["X"],
						ArrowLeft: [c, Hn],
						ArrowRight: [a, Bn]
					};
				var qn = "role",
					Un = "tabindex",
					e = "aria-",
					Kn = e + "controls",
					Jn = e + "current",
					Qn = e + "selected",
					Vn = e + "label",
					Zn = e + "labelledby",
					$n = e + "hidden",
					nt = e + "orientation",
					tt = e + "roledescription",
					l = e + "live",
					et = e + "relevant",
					it = [qn, Un, "disabled", Kn, Jn, Vn, Zn, $n, nt, tt],
					ot = un,
					rt = un + "__track",
					ut = un + "__list",
					st = un + "__slide",
					ct = st + "--clone",
					at = st + "__container",
					ft = un + "__arrows",
					lt = un + "__arrow",
					dt = lt + "--prev",
					pt = lt + "--next",
					ht = un + "__pagination",
					vt = ht + "__page",
					gt = un + "__progress__bar",
					mt = un + "__toggle",
					yt = un + "__sr",
					bt = "is-active",
					wt = "is-prev",
					Et = "is-next",
					St = "is-visible",
					xt = "is-loading",
					_t = "is-focus-in",
					Pt = [bt, St, wt, Et, xt, _t];
				var Ct = "touchstart mousedown",
					kt = "touchmove mousemove",
					Lt = "touchend touchcancel mouseup";
				var At = "slide",
					Dt = "loop",
					Mt = "fade";

				function zt(o2, e2, t2, r2) {
					var i2, n2 = Gn(o2),
						u2 = n2.on,
						s2 = n2.emit,
						c2 = n2.bind,
						a2 = o2.Components,
						f2 = o2.root,
						l2 = o2.options,
						d2 = l2.isNavigation,
						p2 = l2.updateOnMove,
						h2 = l2.i18n,
						v2 = l2.pagination,
						g2 = l2.slideFocus,
						m2 = a2.Direction.resolve,
						y2 = K(r2, "style"),
						b2 = K(r2, Vn),
						w2 = -1 < t2,
						E2 = A(r2, "." + at),
						S2 = tn(r2, l2.focusableNodes || "");

					function x2() {
						var n3 = o2.splides.map(function(n4) {
							n4 = n4.splide.Components.Slides.getAt(e2);
							return n4 ? n4.slide.id : "";
						}).join(" ");
						j(r2, Vn, mn(h2.slideX, (w2 ? t2 : e2) + 1)), j(r2, Kn, n3), j(r2, qn, g2 ? "button" : ""), g2 && F(r2, tt);
					}

					function _2() {
						i2 || P2();
					}

					function P2() {
						var n3, t3;
						i2 || (n3 = o2.index, (t3 = C2()) !== J(r2, bt) && (L(r2, bt, t3), j(r2, Jn, d2 && t3 || ""), s2(t3 ? Cn : kn, k2)), function() {
							var n4 = function() {
									if (o2.is(Mt))
										return C2();
									var n5 = Q(a2.Elements.track),
										t5 = Q(r2),
										e3 = m2("left"),
										i3 = m2("right");
									return fn(n5[e3]) <= ln(t5[e3]) && fn(t5[i3]) <= ln(n5[i3]);
								}(),
								t4 = !n4 && (!C2() || w2);
							o2.state.is([R, W]) || j(r2, $n, t4 || "");
							j(S2, Un, t4 ? -1 : ""), g2 && j(r2, Un, t4 ? -1 : 0);
							n4 !== J(r2, St) && (L(r2, St, n4), s2(n4 ? Ln : An, k2));
							n4 || document.activeElement !== r2 || (n4 = a2.Slides.getAt(o2.index)) && U(n4.slide);
						}(), L(r2, wt, e2 === n3 - 1), L(r2, Et, e2 === n3 + 1));
					}

					function C2() {
						var n3 = o2.index;
						return n3 === e2 || l2.cloneStatus && n3 === t2;
					}
					var k2 = {
						index: e2,
						slideIndex: t2,
						slide: r2,
						container: E2,
						isClone: w2,
						mount: function() {
							w2 || (r2.id = f2.id + "-slide" + yn(e2 + 1), j(r2, qn, v2 ? "tabpanel" : "group"), j(r2, tt, h2.slide), j(r2, Vn, b2 || mn(h2.slideLabel, [e2 + 1, o2.length]))), c2(r2, "click", D(s2, Pn, k2)), c2(r2, "keydown", D(s2, Dn, k2)), u2([xn, _n, In], P2), u2(Fn, x2), p2 && u2(Sn, _2);
						},
						destroy: function() {
							i2 = true, n2.destroy(), en(r2, Pt), F(r2, it), j(r2, "style", y2), j(r2, Vn, b2 || "");
						},
						update: P2,
						style: function(n3, t3, e3) {
							Y(e3 && E2 || r2, n3, t3);
						},
						isWithin: function(n3, t3) {
							return n3 = dn(n3 - e2), (n3 = !w2 && (l2.rewind || o2.is(Dt)) ? cn(n3, o2.length - n3) : n3) <= t3;
						}
					};
					return k2;
				}
				var Nt = i + "-interval";
				var Tt = {
					passive: false,
					capture: true
				};
				var Ot = {
					Spacebar: " ",
					Right: Hn,
					Left: Bn,
					Up: c,
					Down: a
				};

				function It(n2) {
					return n2 = M(n2) ? n2 : n2.key, Ot[n2] || n2;
				}
				var Ft = "keydown";
				var jt = i + "-lazy",
					Rt = jt + "-srcset",
					Wt = "[" + jt + "], [" + Rt + "]";
				var Gt = [" ", "Enter"];
				var Xt = Object.freeze({
						__proto__: null,
						Media: function(i2, n2, o2) {
							var r2 = i2.state,
								t2 = o2.breakpoints || {},
								u2 = o2.reducedMotion || {},
								e2 = wn(),
								s2 = [];

							function c2(n3) {
								n3 && e2.destroy();
							}

							function a2(n3, t3) {
								t3 = matchMedia(t3);
								e2.bind(t3, "change", f2), s2.push([n3, t3]);
							}

							function f2() {
								var n3 = r2.is(7),
									t3 = o2.direction,
									e3 = s2.reduce(function(n4, t4) {
										return O(n4, t4[1].matches ? t4[0] : {});
									}, {});
								I(o2), l2(e3), o2.destroy ? i2.destroy(o2.destroy === "completely") : n3 ? (c2(true), i2.mount()) : t3 !== o2.direction && i2.refresh();
							}

							function l2(n3, t3) {
								O(o2, n3), t3 && O(Object.getPrototypeOf(o2), n3), r2.is(1) || i2.emit(zn, o2);
							}
							return {
								setup: function() {
									var e3 = o2.mediaQuery === "min";
									h(t2).sort(function(n3, t3) {
										return e3 ? +n3 - +t3 : +t3 - +n3;
									}).forEach(function(n3) {
										a2(t2[n3], "(" + (e3 ? "min" : "max") + "-width:" + n3 + "px)");
									}), a2(u2, d), f2();
								},
								destroy: c2,
								reduce: function(n3) {
									matchMedia(d).matches && (n3 ? O(o2, u2) : I(o2, h(u2)));
								},
								set: l2
							};
						},
						Direction: function(n2, t2, o2) {
							return {
								resolve: function(n3, t3, e2) {
									var i2 = (e2 = e2 || o2.direction) !== "rtl" || t3 ? e2 === Yn ? 0 : -1 : 1;
									return f[n3] && f[n3][i2] || n3.replace(/width|left|right/i, function(n4, t4) {
										n4 = f[n4.toLowerCase()][i2] || n4;
										return 0 < t4 ? n4.charAt(0).toUpperCase() + n4.slice(1) : n4;
									});
								},
								orient: function(n3) {
									return n3 * (o2.direction === "rtl" ? 1 : -1);
								}
							};
						},
						Elements: function(n2, t2, e2) {
							var i2, o2, r2, u2 = Gn(n2),
								s2 = u2.on,
								c2 = u2.bind,
								a2 = n2.root,
								f2 = e2.i18n,
								l2 = {},
								d2 = [],
								p2 = [],
								h2 = [];

							function v2() {
								i2 = y2("." + rt), o2 = A(i2, "." + ut), sn(i2 && o2, "A track/list element is missing."), E(d2, S(o2, "." + st + ":not(." + ct + ")")), N({
										arrows: ft,
										pagination: ht,
										prev: dt,
										next: pt,
										bar: gt,
										toggle: mt
									}, function(n3, t3) {
										l2[t3] = y2("." + n3);
									}), T(l2, {
										root: a2,
										track: i2,
										list: o2,
										slides: d2
									}),
									function() {
										var n3 = a2.id || function(n4) {
												return "" + n4 + yn(bn[n4] = (bn[n4] || 0) + 1);
											}(un),
											t3 = e2.role;
										a2.id = n3, i2.id = i2.id || n3 + "-track", o2.id = o2.id || n3 + "-list", !K(a2, qn) && a2.tagName !== "SECTION" && t3 && j(a2, qn, t3);
										j(a2, tt, f2.carousel), j(o2, qn, "presentation");
									}(), m2();
							}

							function g2(n3) {
								var t3 = it.concat("style");
								x(d2), en(a2, p2), en(i2, h2), F([i2, o2], t3), F(a2, n3 ? t3 : ["style", tt]);
							}

							function m2() {
								en(a2, p2), en(i2, h2), p2 = b2(ot), h2 = b2(rt), P(a2, p2), P(i2, h2), j(a2, Vn, e2.label), j(a2, Zn, e2.labelledby);
							}

							function y2(n3) {
								n3 = nn(a2, n3);
								return n3 && function(n4, t3) {
									if (w(n4.closest))
										return n4.closest(t3);
									for (var e3 = n4; e3 && e3.nodeType === 1 && !B(e3, t3);)
										e3 = e3.parentElement;
									return e3;
								}(n3, "." + ot) === a2 ? n3 : void 0;
							}

							function b2(n3) {
								return [n3 + "--" + e2.type, n3 + "--" + e2.direction, e2.drag && n3 + "--draggable", e2.isNavigation && n3 + "--nav", n3 === ot && bt];
							}
							return T(l2, {
								setup: v2,
								mount: function() {
									s2(Mn, g2), s2(Mn, v2), s2(zn, m2), c2(document, Ct + " keydown", function(n3) {
										r2 = n3.type === "keydown";
									}, {
										capture: true
									}), c2(a2, "focusin", function() {
										L(a2, _t, !!r2);
									});
								},
								destroy: g2
							});
						},
						Slides: function(i2, o2, r2) {
							var n2 = Gn(i2),
								t2 = n2.on,
								u2 = n2.emit,
								s2 = n2.bind,
								c2 = (n2 = o2.Elements).slides,
								a2 = n2.list,
								f2 = [];

							function e2() {
								c2.forEach(function(n3, t3) {
									d2(n3, t3, -1);
								});
							}

							function l2() {
								h2(function(n3) {
									n3.destroy();
								}), x(f2);
							}

							function d2(n3, t3, e3) {
								n3 = zt(i2, t3, e3, n3);
								n3.mount(), f2.push(n3);
							}

							function p2(n3) {
								return n3 ? v2(function(n4) {
									return !n4.isClone;
								}) : f2;
							}

							function h2(n3, t3) {
								p2(t3).forEach(n3);
							}

							function v2(t3) {
								return f2.filter(w(t3) ? t3 : function(n3) {
									return M(t3) ? B(n3.slide, t3) : b(m(t3), n3.index);
								});
							}
							return {
								mount: function() {
									e2(), t2(Mn, l2), t2(Mn, e2), t2([En, Mn], function() {
										f2.sort(function(n3, t3) {
											return n3.index - t3.index;
										});
									});
								},
								destroy: l2,
								update: function() {
									h2(function(n3) {
										n3.update();
									});
								},
								register: d2,
								get: p2,
								getIn: function(n3) {
									var t3 = o2.Controller,
										e3 = t3.toIndex(n3),
										i3 = t3.hasFocus() ? 1 : r2.perPage;
									return v2(function(n4) {
										return hn(n4.index, e3, e3 + i3 - 1);
									});
								},
								getAt: function(n3) {
									return v2(n3)[0];
								},
								add: function(n3, o3) {
									y(n3, function(n4) {
										var t3, e3, i3;
										g(n4 = M(n4) ? Z(n4) : n4) && ((t3 = c2[o3]) ? k(n4, t3) : C(a2, n4), P(n4, r2.classes.slide), n4 = n4, e3 = D(u2, Nn), n4 = tn(n4, "img"), (i3 = n4.length) ? n4.forEach(function(n5) {
											s2(n5, "load error", function() {
												--i3 || e3();
											});
										}) : e3());
									}), u2(Mn);
								},
								remove: function(n3) {
									V(v2(n3).map(function(n4) {
										return n4.slide;
									})), u2(Mn);
								},
								forEach: h2,
								filter: v2,
								style: function(t3, e3, i3) {
									h2(function(n3) {
										n3.style(t3, e3, i3);
									});
								},
								getLength: function(n3) {
									return (n3 ? c2 : f2).length;
								},
								isEnough: function() {
									return f2.length > r2.perPage;
								}
							};
						},
						Layout: function(n2, t2, e2) {
							var i2, o2, r2 = (c2 = Gn(n2)).on,
								u2 = c2.bind,
								s2 = c2.emit,
								c2 = t2.Slides,
								a2 = t2.Direction.resolve,
								f2 = (t2 = t2.Elements).root,
								l2 = t2.track,
								d2 = t2.list,
								p2 = c2.getAt,
								h2 = c2.style;

							function v2() {
								o2 = null, i2 = e2.direction === Yn, Y(f2, "maxWidth", rn(e2.width)), Y(l2, a2("paddingLeft"), m2(false)), Y(l2, a2("paddingRight"), m2(true)), g2();
							}

							function g2() {
								var n3 = Q(f2);
								o2 && o2.width === n3.width && o2.height === n3.height || (Y(l2, "height", function() {
									var n4 = "";
									i2 && (sn(n4 = y2(), "height or heightRatio is missing."), n4 = "calc(" + n4 + " - " + m2(false) + " - " + m2(true) + ")");
									return n4;
								}()), h2(a2("marginRight"), rn(e2.gap)), h2("width", e2.autoWidth ? null : rn(e2.fixedWidth) || (i2 ? "" : b2())), h2("height", rn(e2.fixedHeight) || (i2 ? e2.autoHeight ? null : b2() : y2()), true), o2 = n3, s2(Tn));
							}

							function m2(n3) {
								var t3 = e2.padding,
									n3 = a2(n3 ? "right" : "left");
								return t3 && rn(t3[n3] || (X(t3) ? 0 : t3)) || "0px";
							}

							function y2() {
								return rn(e2.height || Q(d2).width * e2.heightRatio);
							}

							function b2() {
								var n3 = rn(e2.gap);
								return "calc((100%" + (n3 && " + " + n3) + ")/" + (e2.perPage || 1) + (n3 && " - " + n3) + ")";
							}

							function w2(n3, t3) {
								var e3 = p2(n3);
								if (e3) {
									n3 = Q(e3.slide)[a2("right")], e3 = Q(d2)[a2("left")];
									return dn(n3 - e3) + (t3 ? 0 : E2());
								}
								return 0;
							}

							function E2() {
								var n3 = p2(0);
								return n3 && parseFloat(Y(n3.slide, a2("marginRight"))) || 0;
							}
							return {
								mount: function() {
									var n3, t3, e3;
									v2(), u2(window, "resize load", (n3 = D(s2, Nn), function() {
										e3 || (e3 = Xn(t3 || 0, function() {
											n3(), e3 = null;
										}, null, 1)).start();
									})), r2([zn, Mn], v2), r2(Nn, g2);
								},
								listSize: function() {
									return Q(d2)[a2("width")];
								},
								slideSize: function(n3, t3) {
									return (n3 = p2(n3 || 0)) ? Q(n3.slide)[a2("width")] + (t3 ? 0 : E2()) : 0;
								},
								sliderSize: function() {
									return w2(n2.length - 1, true) - w2(-1, true);
								},
								totalSize: w2,
								getPadding: function(n3) {
									return parseFloat(Y(l2, a2("padding" + (n3 ? "Right" : "Left")))) || 0;
								}
							};
						},
						Clones: function(s2, e2, c2) {
							var n2, t2 = Gn(s2),
								i2 = t2.on,
								o2 = t2.emit,
								a2 = e2.Elements,
								f2 = e2.Slides,
								r2 = e2.Direction.resolve,
								l2 = [];

							function u2() {
								(n2 = h2()) && (function(o3) {
									var r3 = f2.get().slice(),
										u3 = r3.length;
									if (u3) {
										for (; r3.length < o3;)
											E(r3, r3);
										E(r3.slice(-o3), r3.slice(0, o3)).forEach(function(n3, t3) {
											var e3 = t3 < o3,
												i3 = function(n4, t4) {
													n4 = n4.cloneNode(true);
													return P(n4, c2.classes.clone), n4.id = s2.root.id + "-clone" + yn(t4 + 1), n4;
												}(n3.slide, t3);
											e3 ? k(i3, r3[0].slide) : C(a2.list, i3), E(l2, i3), f2.register(i3, t3 - o3 + (e3 ? 0 : u3), n3.index);
										});
									}
								}(n2), o2(Nn));
							}

							function d2() {
								V(l2), x(l2);
							}

							function p2() {
								n2 < h2() && o2(Mn);
							}

							function h2() {
								var n3, t3 = c2.clones;
								return s2.is(Dt) ? t3 || (t3 = (n3 = c2[r2("fixedWidth")] && e2.Layout.slideSize(0)) && ln(Q(a2.track)[r2("width")] / n3) || c2[r2("autoWidth")] && s2.length || 2 * c2.perPage) : t3 = 0, t3;
							}
							return {
								mount: function() {
									u2(), i2(Mn, d2), i2(Mn, u2), i2([zn, Nn], p2);
								},
								destroy: d2
							};
						},
						Move: function(i2, s2, o2) {
							var c2, n2 = Gn(i2),
								t2 = n2.on,
								a2 = n2.emit,
								f2 = i2.state.set,
								r2 = (n2 = s2.Layout).slideSize,
								e2 = n2.getPadding,
								u2 = n2.totalSize,
								l2 = n2.listSize,
								d2 = n2.sliderSize,
								p2 = (n2 = s2.Direction).resolve,
								h2 = n2.orient,
								v2 = (n2 = s2.Elements).list,
								g2 = n2.track;

							function m2() {
								s2.Controller.isBusy() || (s2.Scroll.cancel(), y2(i2.index), s2.Slides.update());
							}

							function y2(n3) {
								b2(S2(n3, true));
							}

							function b2(n3, t3) {
								i2.is(Mt) || (t3 = t3 ? n3 : function(n4) {
									{
										var t4, e3;
										i2.is(Dt) && (e3 = h2(n4 - x2()), t4 = P2(false, n4) && e3 < 0, e3 = P2(true, n4) && 0 < e3, (t4 || e3) && (n4 = w2(n4, e3)));
									}
									return n4;
								}(n3), Y(v2, "transform", "translate" + p2("X") + "(" + t3 + "px)"), n3 !== t3 && a2(_n));
							}

							function w2(n3, t3) {
								var e3 = n3 - _2(t3),
									i3 = d2();
								return n3 -= h2(i3 * (ln(dn(e3) / i3) || 1)) * (t3 ? 1 : -1);
							}

							function E2() {
								b2(x2()), c2.cancel();
							}

							function S2(n3, t3) {
								var e3 = h2(u2(n3 - 1) - (e3 = n3, (n3 = o2.focus) === "center" ? (l2() - r2(e3, true)) / 2 : +n3 * r2(e3) || 0));
								return t3 ? function(n4) {
									o2.trimSpace && i2.is(At) && (n4 = vn(n4, 0, h2(d2() - l2())));
									return n4;
								}(e3) : e3;
							}

							function x2() {
								var n3 = p2("left");
								return Q(v2)[n3] - Q(g2)[n3] + h2(e2(false));
							}

							function _2(n3) {
								return S2(n3 ? s2.Controller.getEnd() : 0, !!o2.trimSpace);
							}

							function P2(n3, t3) {
								t3 = z(t3) ? x2() : t3;
								var e3 = n3 !== true && h2(t3) < h2(_2(false)),
									t3 = n3 !== false && h2(t3) > h2(_2(true));
								return e3 || t3;
							}
							return {
								mount: function() {
									c2 = s2.Transition, t2([En, Tn, zn, Mn], m2);
								},
								move: function(n3, t3, e3, i3) {
									var o3, r3, u3 = x2();
									n3 !== t3 && (o3 = t3 < n3, r3 = h2(w2(x2(), o3)), o3 ? 0 <= r3 : r3 <= v2["scroll" + p2("Width")] - Q(g2)[p2("width")]) && (E2(), b2(w2(u3, t3 < n3), true)), f2(R), a2(Sn, t3, e3, n3), c2.start(t3, function() {
										f2(3), a2(xn, t3, e3, n3), i3 && i3();
									});
								},
								jump: y2,
								translate: b2,
								shift: w2,
								cancel: E2,
								toIndex: function(n3) {
									for (var t3 = s2.Slides.get(), e3 = 0, i3 = 1 / 0, o3 = 0; o3 < t3.length; o3++) {
										var r3 = t3[o3].index,
											u3 = dn(S2(r3, true) - n3);
										if (!(u3 <= i3))
											break;
										i3 = u3, e3 = r3;
									}
									return e3;
								},
								toPosition: S2,
								getPosition: x2,
								getLimit: _2,
								exceededLimit: P2,
								reposition: m2
							};
						},
						Controller: function(r2, o2, u2) {
							var s2, i2, c2, n2 = Gn(r2).on,
								a2 = o2.Move,
								f2 = a2.getPosition,
								l2 = a2.getLimit,
								d2 = a2.toPosition,
								t2 = o2.Slides,
								p2 = t2.isEnough,
								e2 = t2.getLength,
								h2 = r2.is(Dt),
								v2 = r2.is(At),
								g2 = D(E2, false),
								m2 = D(E2, true),
								y2 = u2.start || 0,
								b2 = y2;

							function w2() {
								s2 = e2(true), i2 = u2.perMove, c2 = u2.perPage;
								var n3 = vn(y2, 0, s2 - 1);
								n3 !== y2 && (y2 = n3, a2.reposition());
							}

							function E2(n3, t3) {
								var e3 = i2 || (L2() ? 1 : c2),
									e3 = S2(y2 + e3 * (n3 ? -1 : 1), y2, !(i2 || L2()));
								return e3 === -1 && v2 && !pn(f2(), l2(!n3), 1) ? n3 ? 0 : _2() : t3 ? e3 : x2(e3);
							}

							function S2(n3, t3, e3) {
								var i3, o3;
								return p2() ? (i3 = _2(), (o3 = function(n4) {
									if (v2 && u2.trimSpace === "move" && n4 !== y2)
										for (var t4 = f2(); t4 === d2(n4, true) && hn(n4, 0, r2.length - 1, !u2.rewind);)
											n4 < y2 ? --n4 : ++n4;
									return n4;
								}(n3)) !== n3 && (t3 = n3, n3 = o3, e3 = false), n3 < 0 || i3 < n3 ? n3 = hn(0, n3, t3, true) || hn(i3, t3, n3, true) ? P2(C2(n3)) : h2 ? e3 ? n3 < 0 ? -(s2 % c2 || c2) : s2 : n3 : u2.rewind ? n3 < 0 ? i3 : 0 : -1 : e3 && n3 !== t3 && (n3 = P2(C2(t3) + (n3 < t3 ? -1 : 1)))) : n3 = -1, n3;
							}

							function x2(n3) {
								return h2 ? (n3 + s2) % s2 || 0 : n3;
							}

							function _2() {
								return an(s2 - (L2() || h2 && i2 ? 1 : c2), 0);
							}

							function P2(n3) {
								return vn(L2() ? n3 : c2 * n3, 0, _2());
							}

							function C2(n3) {
								return L2() ? n3 : fn((n3 >= _2() ? s2 - 1 : n3) / c2);
							}

							function k2(n3) {
								n3 !== y2 && (b2 = y2, y2 = n3);
							}

							function L2() {
								return !z(u2.focus) || u2.isNavigation;
							}

							function A2() {
								return r2.state.is([R, W]) && !!u2.waitForTransition;
							}
							return {
								mount: function() {
									w2(), n2([zn, Mn], w2);
								},
								go: function(n3, t3, e3) {
									var i3;
									A2() || -1 < (n3 = x2(i3 = function(n4) {
										var t4 = y2;
										{
											var e4, i4;
											M(n4) ? (i4 = n4.match(/([+\-<>])(\d+)?/) || [], e4 = i4[1], i4 = i4[2], e4 === "+" || e4 === "-" ? t4 = S2(y2 + +("" + e4 + (+i4 || 1)), y2) : e4 === ">" ? t4 = i4 ? P2(+i4) : g2(true) : e4 === "<" && (t4 = m2(true))) : t4 = h2 ? n4 : vn(n4, 0, _2());
										}
										return t4;
									}(n3))) && (t3 || n3 !== y2) && (k2(n3), a2.move(i3, n3, b2, e3));
								},
								scroll: function(n3, t3, e3, i3) {
									o2.Scroll.scroll(n3, t3, e3, function() {
										k2(x2(a2.toIndex(a2.getPosition()))), i3 && i3();
									});
								},
								getNext: g2,
								getPrev: m2,
								getAdjacent: E2,
								getEnd: _2,
								setIndex: k2,
								getIndex: function(n3) {
									return n3 ? b2 : y2;
								},
								toIndex: P2,
								toPage: C2,
								toDest: function(n3) {
									return n3 = a2.toIndex(n3), v2 ? vn(n3, 0, _2()) : n3;
								},
								hasFocus: L2,
								isBusy: A2
							};
						},
						Arrows: function(o2, n2, t2) {
							var e2, i2, r2 = Gn(o2),
								u2 = r2.on,
								s2 = r2.bind,
								c2 = r2.emit,
								a2 = t2.classes,
								f2 = t2.i18n,
								l2 = n2.Elements,
								d2 = n2.Controller,
								p2 = l2.arrows,
								h2 = l2.track,
								v2 = p2,
								g2 = l2.prev,
								m2 = l2.next,
								y2 = {};

							function b2() {
								! function() {
									var n3 = t2.arrows;
									!n3 || g2 && m2 || (v2 = p2 || H("div", a2.arrows), g2 = x2(true), m2 = x2(false), e2 = true, C(v2, [g2, m2]), p2 || k(v2, h2));
									g2 && m2 && (T(y2, {
										prev: g2,
										next: m2
									}), q(v2, n3 ? "" : "none"), P(v2, i2 = ft + "--" + t2.direction), n3 && (u2([xn, Mn, In], _2), s2(m2, "click", D(S2, ">")), s2(g2, "click", D(S2, "<")), _2(), j([g2, m2], Kn, h2.id), c2("arrows:mounted", g2, m2)));
								}(), u2(zn, w2);
							}

							function w2() {
								E2(), b2();
							}

							function E2() {
								r2.destroy(), en(v2, i2), e2 ? (V(p2 ? [g2, m2] : v2), g2 = m2 = null) : F([g2, m2], it);
							}

							function S2(n3) {
								d2.go(n3, true);
							}

							function x2(n3) {
								return Z('<button class="' + a2.arrow + " " + (n3 ? a2.prev : a2.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (t2.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
							}

							function _2() {
								var n3 = o2.index,
									t3 = d2.getPrev(),
									e3 = d2.getNext(),
									i3 = -1 < t3 && n3 < t3 ? f2.last : f2.prev,
									n3 = -1 < e3 && e3 < n3 ? f2.first : f2.next;
								g2.disabled = t3 < 0, m2.disabled = e3 < 0, j(g2, Vn, i3), j(m2, Vn, n3), c2("arrows:updated", g2, m2, t3, e3);
							}
							return {
								arrows: y2,
								mount: b2,
								destroy: E2
							};
						},
						Autoplay: function(n2, t2, e2) {
							var i2, o2, r2 = Gn(n2),
								u2 = r2.on,
								s2 = r2.bind,
								c2 = r2.emit,
								a2 = Xn(e2.interval, n2.go.bind(n2, ">"), function(n3) {
									var t3 = l2.bar;
									t3 && Y(t3, "width", 100 * n3 + "%"), c2("autoplay:playing", n3);
								}),
								f2 = a2.isPaused,
								l2 = t2.Elements,
								d2 = (n2 = t2.Elements).root,
								p2 = n2.toggle,
								h2 = e2.autoplay,
								v2 = h2 === "pause";

							function g2() {
								f2() && t2.Slides.isEnough() && (a2.start(!e2.resetProgress), o2 = i2 = v2 = false, b2(), c2(jn));
							}

							function m2(n3) {
								v2 = !!(n3 = n3 === void 0 ? true : n3), b2(), f2() || (a2.pause(), c2(Rn));
							}

							function y2() {
								v2 || (i2 || o2 ? m2(false) : g2());
							}

							function b2() {
								p2 && (L(p2, bt, !v2), j(p2, Vn, e2.i18n[v2 ? "play" : "pause"]));
							}

							function w2(n3) {
								n3 = t2.Slides.getAt(n3);
								a2.set(n3 && +K(n3.slide, Nt) || e2.interval);
							}
							return {
								mount: function() {
									h2 && (function() {
										e2.pauseOnHover && s2(d2, "mouseenter mouseleave", function(n3) {
											i2 = n3.type === "mouseenter", y2();
										});
										e2.pauseOnFocus && s2(d2, "focusin focusout", function(n3) {
											o2 = n3.type === "focusin", y2();
										});
										p2 && s2(p2, "click", function() {
											v2 ? g2() : m2(true);
										});
										u2([Sn, On, Mn], a2.rewind), u2(Sn, w2);
									}(), p2 && j(p2, Kn, l2.track.id), v2 || g2(), b2());
								},
								destroy: a2.cancel,
								play: g2,
								pause: m2,
								isPaused: f2
							};
						},
						Cover: function(n2, t2, e2) {
							var i2 = Gn(n2).on;

							function o2(e3) {
								t2.Slides.forEach(function(n3) {
									var t3 = A(n3.container || n3.slide, "img");
									t3 && t3.src && r2(e3, t3, n3);
								});
							}

							function r2(n3, t3, e3) {
								e3.style("background", n3 ? 'center/cover no-repeat url("' + t3.src + '")' : "", true), q(t3, n3 ? "none" : "");
							}
							return {
								mount: function() {
									e2.cover && (i2(Wn, D(r2, true)), i2([En, zn, Mn], D(o2, true)));
								},
								destroy: D(o2, false)
							};
						},
						Scroll: function(r2, s2, u2) {
							var c2, a2, n2 = Gn(r2),
								t2 = n2.on,
								f2 = n2.emit,
								l2 = r2.state.set,
								d2 = s2.Move,
								p2 = d2.getPosition,
								h2 = d2.getLimit,
								v2 = d2.exceededLimit,
								g2 = d2.translate,
								m2 = 1;

							function y2(n3, t3, e3, i2, o2) {
								var r3 = p2();
								E2(), e3 && (e3 = s2.Layout.sliderSize(), u3 = gn(n3) * e3 * fn(dn(n3) / e3) || 0, n3 = d2.toPosition(s2.Controller.toDest(n3 % e3)) + u3);
								var u3 = pn(r3, n3, 1);
								m2 = 1, t3 = u3 ? 0 : t3 || an(dn(n3 - r3) / 1.5, 800), a2 = i2, c2 = Xn(t3, b2, D(w2, r3, n3, o2), 1), l2(W), f2(On), c2.start();
							}

							function b2() {
								l2(3), a2 && a2(), f2(In);
							}

							function w2(n3, t3, e3, i2) {
								var o2 = p2(),
									n3 = (n3 + (t3 - n3) * (n3 = i2, (i2 = u2.easingFunc) ? i2(n3) : 1 - Math.pow(1 - n3, 4)) - o2) * m2;
								g2(o2 + n3), r2.is(At) && !e3 && v2() && (m2 *= 0.6, dn(n3) < 10 && y2(h2(v2(true)), 600, false, void 0, true));
							}

							function E2() {
								c2 && c2.cancel();
							}

							function e2() {
								c2 && !c2.isPaused() && (E2(), b2());
							}
							return {
								mount: function() {
									t2(Sn, E2), t2([zn, Mn], e2);
								},
								destroy: E2,
								scroll: y2,
								cancel: e2
							};
						},
						Drag: function(r2, i2, u2) {
							var s2, t2, o2, c2, a2, f2, l2, d2, n2 = Gn(r2),
								e2 = n2.on,
								p2 = n2.emit,
								h2 = n2.bind,
								v2 = n2.unbind,
								g2 = r2.state,
								m2 = i2.Move,
								y2 = i2.Scroll,
								b2 = i2.Controller,
								w2 = i2.Elements.track,
								E2 = i2.Media.reduce,
								S2 = (n2 = i2.Direction).resolve,
								x2 = n2.orient,
								_2 = m2.getPosition,
								P2 = m2.exceededLimit,
								C2 = false;

							function k2() {
								var n3 = u2.drag;
								j2(!n3), c2 = n3 === "free";
							}

							function L2(n3) {
								var t3, e3, i3;
								f2 = false, l2 || (t3 = F2(n3), e3 = n3.target, i3 = u2.noDrag, B(e3, "." + vt + ", ." + lt) || i3 && B(e3, i3) || !t3 && n3.button || (b2.isBusy() ? $(n3, true) : (d2 = t3 ? w2 : window, a2 = g2.is([R, W]), o2 = null, h2(d2, kt, A2, Tt), h2(d2, Lt, D2, Tt), m2.cancel(), y2.cancel(), z2(n3))));
							}

							function A2(n3) {
								var t3, e3, i3, o3;
								g2.is(6) || (g2.set(6), p2("drag")), n3.cancelable && (a2 ? (m2.translate(s2 + N2(n3) / (C2 && r2.is(At) ? 5 : 1)), e3 = 200 < T2(n3), i3 = C2 !== (C2 = P2()), (e3 || i3) && z2(n3), f2 = true, p2("dragging"), $(n3)) : dn(N2(o3 = n3)) > dn(N2(o3, true)) && (t3 = n3, e3 = u2.dragMinThreshold, i3 = X(e3), o3 = i3 && e3.mouse || 0, e3 = (i3 ? e3.touch : +e3) || 10, a2 = dn(N2(t3)) > (F2(t3) ? e3 : o3), $(n3)));
							}

							function D2(n3) {
								g2.is(6) && (g2.set(3), p2("dragged")), a2 && (function(n4) {
									var t3 = function(n5) {
											if (r2.is(Dt) || !C2) {
												var t4 = T2(n5);
												if (t4 && t4 < 200)
													return N2(n5) / t4;
											}
											return 0;
										}(n4),
										e3 = function(n5) {
											return _2() + gn(n5) * cn(dn(n5) * (u2.flickPower || 600), c2 ? 1 / 0 : i2.Layout.listSize() * (u2.flickMaxPages || 1));
										}(t3),
										n4 = u2.rewind && u2.rewindByDrag;
									E2(false), c2 ? b2.scroll(e3, 0, u2.snap) : r2.is(Mt) ? b2.go(x2(gn(t3)) < 0 ? n4 ? "<" : "-" : n4 ? ">" : "+") : r2.is(At) && C2 && n4 ? b2.go(P2(true) ? ">" : "<") : b2.go(b2.toDest(e3), true);
									E2(true);
								}(n3), $(n3)), v2(d2, kt, A2), v2(d2, Lt, D2), a2 = false;
							}

							function M2(n3) {
								!l2 && f2 && $(n3, true);
							}

							function z2(n3) {
								o2 = t2, t2 = n3, s2 = _2();
							}

							function N2(n3, t3) {
								return I2(n3, t3) - I2(O2(n3), t3);
							}

							function T2(n3) {
								return on(n3) - on(O2(n3));
							}

							function O2(n3) {
								return t2 === n3 && o2 || t2;
							}

							function I2(n3, t3) {
								return (F2(n3) ? n3.changedTouches[0] : n3)["page" + S2(t3 ? "Y" : "X")];
							}

							function F2(n3) {
								return typeof TouchEvent != "undefined" && n3 instanceof TouchEvent;
							}

							function j2(n3) {
								l2 = n3;
							}
							return {
								mount: function() {
									h2(w2, kt, G, Tt), h2(w2, Lt, G, Tt), h2(w2, Ct, L2, Tt), h2(w2, "click", M2, {
										capture: true
									}), h2(w2, "dragstart", $), e2([En, zn], k2);
								},
								disable: j2,
								isDragging: function() {
									return a2;
								}
							};
						},
						Keyboard: function(t2, n2, e2) {
							var i2, o2, r2 = Gn(t2),
								u2 = r2.on,
								s2 = r2.bind,
								c2 = r2.unbind,
								a2 = t2.root,
								f2 = n2.Direction.resolve;

							function l2() {
								var n3 = e2.keyboard;
								n3 && (i2 = n3 === "global" ? window : a2, s2(i2, Ft, h2));
							}

							function d2() {
								c2(i2, Ft);
							}

							function p2() {
								var n3 = o2;
								o2 = true, v(function() {
									o2 = n3;
								});
							}

							function h2(n3) {
								o2 || ((n3 = It(n3)) === f2(Bn) ? t2.go("<") : n3 === f2(Hn) && t2.go(">"));
							}
							return {
								mount: function() {
									l2(), u2(zn, d2), u2(zn, l2), u2(Sn, p2);
								},
								destroy: d2,
								disable: function(n3) {
									o2 = n3;
								}
							};
						},
						LazyLoad: function(e2, n2, o2) {
							var t2 = Gn(e2),
								i2 = t2.on,
								r2 = t2.off,
								u2 = t2.bind,
								s2 = t2.emit,
								c2 = o2.lazyLoad === "sequential",
								a2 = [En, Mn, xn, In],
								f2 = [];

							function l2() {
								x(f2), n2.Slides.forEach(function(i3) {
									tn(i3.slide, Wt).forEach(function(n3) {
										var t3 = K(n3, jt),
											e3 = K(n3, Rt);
										t3 === n3.src && e3 === n3.srcset || (t3 = o2.classes.spinner, e3 = A(e3 = n3.parentElement, "." + t3) || H("span", t3, e3), f2.push([n3, i3, e3]), n3.src || q(n3, "none"));
									});
								}), c2 && v2();
							}

							function d2() {
								(f2 = f2.filter(function(n3) {
									var t3 = o2.perPage * ((o2.preloadPages || 1) + 1) - 1;
									return !n3[1].isWithin(e2.index, t3) || p2(n3);
								})).length || r2(a2);
							}

							function p2(n3) {
								var t3 = n3[0];
								P(n3[1].slide, xt), u2(t3, "load error", D(h2, n3)), j(t3, "src", K(t3, jt)), j(t3, "srcset", K(t3, Rt)), F(t3, jt), F(t3, Rt);
							}

							function h2(n3, t3) {
								var e3 = n3[0],
									i3 = n3[1];
								en(i3.slide, xt), t3.type !== "error" && (V(n3[2]), q(e3, ""), s2(Wn, e3, i3), s2(Nn)), c2 && v2();
							}

							function v2() {
								f2.length && p2(f2.shift());
							}
							return {
								mount: function() {
									o2.lazyLoad && (l2(), i2(Mn, l2), c2 || i2(a2, d2));
								},
								destroy: D(x, f2)
							};
						},
						Pagination: function(f2, n2, l2) {
							var d2, p2, t2 = Gn(f2),
								e2 = t2.on,
								i2 = t2.emit,
								h2 = t2.bind,
								v2 = n2.Slides,
								g2 = n2.Elements,
								o2 = n2.Controller,
								m2 = o2.hasFocus,
								r2 = o2.getIndex,
								u2 = o2.go,
								s2 = n2.Direction.resolve,
								y2 = [];

							function c2() {
								d2 && (V(g2.pagination ? _(d2.children) : d2), en(d2, p2), x(y2), d2 = null), t2.destroy();
							}

							function b2(n3) {
								u2(">" + n3, true);
							}

							function w2(n3, t3) {
								var e3 = y2.length,
									i3 = It(t3),
									o3 = E2(),
									r3 = -1;
								i3 === s2(Hn, false, o3) ? r3 = ++n3 % e3 : i3 === s2(Bn, false, o3) ? r3 = (--n3 + e3) % e3 : i3 === "Home" ? r3 = 0 : i3 === "End" && (r3 = e3 - 1);
								e3 = y2[r3];
								e3 && (U(e3.button), u2(">" + r3), $(t3, true));
							}

							function E2() {
								return l2.paginationDirection || l2.direction;
							}

							function a2(n3) {
								return y2[o2.toPage(n3)];
							}

							function S2() {
								var n3, t3 = a2(r2(true)),
									e3 = a2(r2());
								t3 && (en(n3 = t3.button, bt), F(n3, Qn), j(n3, Un, -1)), e3 && (P(n3 = e3.button, bt), j(n3, Qn, true), j(n3, Un, "")), i2("pagination:updated", {
									list: d2,
									items: y2
								}, t3, e3);
							}
							return {
								items: y2,
								mount: function n3() {
									c2(), e2([zn, Mn], n3), l2.pagination && v2.isEnough() && (e2([Sn, On, In], S2), function() {
										var n4 = f2.length,
											t3 = l2.classes,
											e3 = l2.i18n,
											i3 = l2.perPage,
											o3 = m2() ? n4 : ln(n4 / i3);
										P(d2 = g2.pagination || H("ul", t3.pagination, g2.track.parentElement), p2 = ht + "--" + E2()), j(d2, qn, "tablist"), j(d2, Vn, e3.select), j(d2, nt, E2() === Yn ? "vertical" : "");
										for (var r3 = 0; r3 < o3; r3++) {
											var u3 = H("li", null, d2),
												s3 = H("button", {
													class: t3.page,
													type: "button"
												}, u3),
												c3 = v2.getIn(r3).map(function(n5) {
													return n5.slide.id;
												}),
												a3 = !m2() && 1 < i3 ? e3.pageX : e3.slideX;
											h2(s3, "click", D(b2, r3)), l2.paginationKeyboard && h2(s3, "keydown", D(w2, r3)), j(u3, qn, "presentation"), j(s3, qn, "tab"), j(s3, Kn, c3.join(" ")), j(s3, Vn, mn(a3, r3 + 1)), j(s3, Un, -1), y2.push({
												li: u3,
												button: s3,
												page: r3
											});
										}
									}(), S2(), i2("pagination:mounted", {
										list: d2,
										items: y2
									}, a2(f2.index)));
								},
								destroy: c2,
								getAt: a2,
								update: S2
							};
						},
						Sync: function(e2, n2, t2) {
							var i2 = t2.isNavigation,
								o2 = t2.slideFocus,
								r2 = [];

							function u2() {
								var n3, t3;
								e2.splides.forEach(function(n4) {
									n4.isParent || (c2(e2, n4.splide), c2(n4.splide, e2));
								}), i2 && (n3 = Gn(e2), (t3 = n3.on)(Pn, f2), t3(Dn, l2), t3([En, zn], a2), r2.push(n3), n3.emit(Fn, e2.splides));
							}

							function s2() {
								r2.forEach(function(n3) {
									n3.destroy();
								}), x(r2);
							}

							function c2(n3, i3) {
								n3 = Gn(n3);
								n3.on(Sn, function(n4, t3, e3) {
									i3.go(i3.is(Dt) ? e3 : n4);
								}), r2.push(n3);
							}

							function a2() {
								j(n2.Elements.list, nt, t2.direction === Yn ? "vertical" : "");
							}

							function f2(n3) {
								e2.go(n3.index);
							}

							function l2(n3, t3) {
								b(Gt, It(t3)) && (f2(n3), $(t3));
							}
							return {
								setup: function() {
									e2.options = {
										slideFocus: z(o2) ? i2 : o2
									};
								},
								mount: u2,
								destroy: s2,
								remount: function() {
									s2(), u2();
								}
							};
						},
						Wheel: function(u2, s2, c2) {
							var n2 = Gn(u2).bind,
								a2 = 0;

							function t2(n3) {
								var t3, e2, i2, o2, r2;
								n3.cancelable && (r2 = (t3 = n3.deltaY) < 0, e2 = on(n3), i2 = c2.wheelMinThreshold || 0, o2 = c2.wheelSleep || 0, dn(t3) > i2 && o2 < e2 - a2 && (u2.go(r2 ? "<" : ">"), a2 = e2), r2 = r2, c2.releaseWheel && !u2.state.is(R) && s2.Controller.getAdjacent(r2) === -1 || $(n3));
							}
							return {
								mount: function() {
									c2.wheel && n2(s2.Elements.track, "wheel", t2, Tt);
								}
							};
						},
						Live: function(n2, t2, e2) {
							var i2 = Gn(n2).on,
								o2 = t2.Elements.track,
								r2 = e2.live && !e2.isNavigation,
								u2 = H("span", yt);

							function s2(n3) {
								r2 && j(o2, l, n3 ? "off" : "polite");
							}
							return {
								mount: function() {
									r2 && (s2(!t2.Autoplay.isPaused()), j(o2, et, "additions"), u2.textContent = "\u2026", i2(jn, D(s2, true)), i2(Rn, D(s2, false)), i2([xn, In], D(C, o2, u2)));
								},
								disable: s2,
								destroy: function() {
									F(o2, [l, et]), V(u2);
								}
							};
						}
					}),
					Bt = {
						type: "slide",
						role: "region",
						speed: 400,
						perPage: 1,
						cloneStatus: true,
						arrows: true,
						pagination: true,
						paginationKeyboard: true,
						interval: 5e3,
						pauseOnHover: true,
						pauseOnFocus: true,
						resetProgress: true,
						easing: "cubic-bezier(0.25, 1, 0.5, 1)",
						drag: true,
						direction: "ltr",
						trimSpace: true,
						focusableNodes: "a, button, textarea, input, select, iframe",
						live: true,
						classes: {
							slide: st,
							clone: ct,
							arrows: ft,
							arrow: lt,
							prev: dt,
							next: pt,
							pagination: ht,
							page: vt,
							spinner: un + "__spinner"
						},
						i18n: {
							prev: "Previous slide",
							next: "Next slide",
							first: "Go to first slide",
							last: "Go to last slide",
							slideX: "Go to slide %s",
							pageX: "Go to page %s",
							play: "Start autoplay",
							pause: "Pause autoplay",
							carousel: "carousel",
							slide: "slide",
							select: "Select a slide to show",
							slideLabel: "%s of %s"
						},
						reducedMotion: {
							speed: 0,
							rewindSpeed: 0,
							autoplay: "pause"
						}
					};

				function Ht(n2, i2, t2) {
					var e2 = Gn(n2).on;
					return {
						mount: function() {
							e2([En, Mn], function() {
								v(function() {
									i2.Slides.style("transition", "opacity " + t2.speed + "ms " + t2.easing);
								});
							});
						},
						start: function(n3, t3) {
							var e3 = i2.Elements.track;
							Y(e3, "height", rn(Q(e3).height)), v(function() {
								t3(), Y(e3, "height", "");
							});
						},
						cancel: G
					};
				}

				function Yt(r2, n2, u2) {
					var s2, t2 = Gn(r2).bind,
						c2 = n2.Move,
						a2 = n2.Controller,
						f2 = n2.Scroll,
						e2 = n2.Elements.list,
						l2 = D(Y, e2, "transition");

					function i2() {
						l2(""), f2.cancel();
					}
					return {
						mount: function() {
							t2(e2, "transitionend", function(n3) {
								n3.target === e2 && s2 && (i2(), s2());
							});
						},
						start: function(n3, t3) {
							var e3 = c2.toPosition(n3, true),
								i3 = c2.getPosition(),
								o2 = function(n4) {
									var t4 = u2.rewindSpeed;
									if (r2.is(At) && t4) {
										var e4 = a2.getIndex(true),
											i4 = a2.getEnd();
										if (e4 === 0 && i4 <= n4 || i4 <= e4 && n4 === 0)
											return t4;
									}
									return u2.speed;
								}(n3);
							1 <= dn(e3 - i3) && 1 <= o2 ? u2.useScroll ? f2.scroll(e3, o2, false, t3) : (l2("transform " + o2 + "ms " + u2.easing), c2.translate(e3, true), s2 = t3) : (c2.jump(n3), t3());
						},
						cancel: i2
					};
				}
				a = function() {
					function e2(n3, t2) {
						this.event = Gn(), this.Components = {}, this.state = s(1), this.splides = [], this._o = {}, this._E = {};
						n3 = M(n3) ? nn(document, n3) : n3;
						sn(n3, n3 + " is invalid."), t2 = O({
							label: K(this.root = n3, Vn) || "",
							labelledby: K(n3, Zn) || ""
						}, Bt, e2.defaults, t2 || {});
						try {
							O(t2, JSON.parse(K(n3, i)));
						} catch (n4) {
							sn(false, "Invalid JSON");
						}
						this._o = Object.create(O({}, t2));
					}
					var n2 = e2.prototype;
					return n2.mount = function(n3, t2) {
						var e3 = this,
							i2 = this.state,
							o2 = this.Components;
						return sn(i2.is([1, 7]), "Already mounted!"), i2.set(1), this._C = o2, this._T = t2 || this._T || (this.is(Mt) ? Ht : Yt), this._E = n3 || this._E, N(T({}, Xt, this._E, {
							Transition: this._T
						}), function(n4, t3) {
							n4 = n4(e3, o2, e3._o);
							(o2[t3] = n4).setup && n4.setup();
						}), N(o2, function(n4) {
							n4.mount && n4.mount();
						}), this.emit(En), P(this.root, "is-initialized"), i2.set(3), this.emit("ready"), this;
					}, n2.sync = function(n3) {
						return this.splides.push({
							splide: n3
						}), n3.splides.push({
							splide: this,
							isParent: true
						}), this.state.is(3) && (this._C.Sync.remount(), n3.Components.Sync.remount()), this;
					}, n2.go = function(n3) {
						return this._C.Controller.go(n3), this;
					}, n2.on = function(n3, t2) {
						return this.event.on(n3, t2), this;
					}, n2.off = function(n3) {
						return this.event.off(n3), this;
					}, n2.emit = function(n3) {
						var t2;
						return (t2 = this.event).emit.apply(t2, [n3].concat(_(arguments, 1))), this;
					}, n2.add = function(n3, t2) {
						return this._C.Slides.add(n3, t2), this;
					}, n2.remove = function(n3) {
						return this._C.Slides.remove(n3), this;
					}, n2.is = function(n3) {
						return this._o.type === n3;
					}, n2.refresh = function() {
						return this.emit(Mn), this;
					}, n2.destroy = function(t2) {
						t2 === void 0 && (t2 = true);
						var n3 = this.event,
							e3 = this.state;
						return e3.is(1) ? Gn(this).on("ready", this.destroy.bind(this, t2)) : (N(this._C, function(n4) {
							n4.destroy && n4.destroy(t2);
						}, true), n3.emit(u), n3.destroy(), t2 && x(this.splides), e3.set(7)), this;
					}, _createClass(e2, [{
						key: "options",
						get: function() {
							return this._o;
						},
						set: function(n3) {
							this._C.Media.set(n3, true);
						}
					}, {
						key: "length",
						get: function() {
							return this._C.Slides.getLength(true);
						}
					}, {
						key: "index",
						get: function() {
							return this._C.Controller.getIndex();
						}
					}]), e2;
				}();
				return a.defaults = {}, a.STATES = n, a;
			});
		}
	});

	// ns-hugo:/opt/build/repo/assets/scripts/libraries/smooth-scroll.js
	var require_smooth_scroll = __commonJS({
		"ns-hugo:/opt/build/repo/assets/scripts/libraries/smooth-scroll.js"(exports, module) {
			"use strict";

			function polyfill() {
				var w = window;
				var d = document;
				if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
					return;
				}
				var Element = w.HTMLElement || w.Element;
				var SCROLL_TIME = 468;
				var original = {
					scroll: w.scroll || w.scrollTo,
					scrollBy: w.scrollBy,
					elementScroll: Element.prototype.scroll || scrollElement,
					scrollIntoView: Element.prototype.scrollIntoView
				};
				var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

				function isMicrosoftBrowser(userAgent) {
					var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
					return new RegExp(userAgentPatterns.join("|")).test(userAgent);
				}
				var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

				function scrollElement(x, y) {
					this.scrollLeft = x;
					this.scrollTop = y;
				}

				function ease(k) {
					return 0.5 * (1 - Math.cos(Math.PI * k));
				}

				function shouldBailOut(firstArg) {
					if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
						return true;
					}
					if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
						return false;
					}
					throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
				}

				function hasScrollableSpace(el, axis) {
					if (axis === "Y") {
						return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
					}
					if (axis === "X") {
						return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
					}
				}

				function canOverflow(el, axis) {
					var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
					return overflowValue === "auto" || overflowValue === "scroll";
				}

				function isScrollable(el) {
					var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
					var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
					return isScrollableY || isScrollableX;
				}

				function findScrollableParent(el) {
					while (el !== d.body && isScrollable(el) === false) {
						el = el.parentNode || el.host;
					}
					return el;
				}

				function step(context) {
					var time = now();
					var value;
					var currentX;
					var currentY;
					var elapsed = (time - context.startTime) / SCROLL_TIME;
					elapsed = elapsed > 1 ? 1 : elapsed;
					value = ease(elapsed);
					currentX = context.startX + (context.x - context.startX) * value;
					currentY = context.startY + (context.y - context.startY) * value;
					context.method.call(context.scrollable, currentX, currentY);
					if (currentX !== context.x || currentY !== context.y) {
						w.requestAnimationFrame(step.bind(w, context));
					}
				}

				function smoothScroll(el, x, y) {
					var scrollable;
					var startX;
					var startY;
					var method;
					var startTime = now();
					if (el === d.body) {
						scrollable = w;
						startX = w.scrollX || w.pageXOffset;
						startY = w.scrollY || w.pageYOffset;
						method = original.scroll;
					} else {
						scrollable = el;
						startX = el.scrollLeft;
						startY = el.scrollTop;
						method = scrollElement;
					}
					step({
						scrollable,
						method,
						startTime,
						startX,
						startY,
						x,
						y
					});
				}
				w.scroll = w.scrollTo = function() {
					if (arguments[0] === void 0) {
						return;
					}
					if (shouldBailOut(arguments[0]) === true) {
						original.scroll.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset);
						return;
					}
					smoothScroll.call(w, d.body, arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
				};
				w.scrollBy = function() {
					if (arguments[0] === void 0) {
						return;
					}
					if (shouldBailOut(arguments[0])) {
						original.scrollBy.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
						return;
					}
					smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
				};
				Element.prototype.scroll = Element.prototype.scrollTo = function() {
					if (arguments[0] === void 0) {
						return;
					}
					if (shouldBailOut(arguments[0]) === true) {
						if (typeof arguments[0] === "number" && arguments[1] === void 0) {
							throw new SyntaxError("Value could not be converted");
						}
						original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
						return;
					}
					var left = arguments[0].left;
					var top = arguments[0].top;
					smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
				};
				Element.prototype.scrollBy = function() {
					if (arguments[0] === void 0) {
						return;
					}
					if (shouldBailOut(arguments[0]) === true) {
						original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
						return;
					}
					this.scroll({
						left: ~~arguments[0].left + this.scrollLeft,
						top: ~~arguments[0].top + this.scrollTop,
						behavior: arguments[0].behavior
					});
				};
				Element.prototype.scrollIntoView = function() {
					if (shouldBailOut(arguments[0]) === true) {
						original.scrollIntoView.call(this, arguments[0] === void 0 ? true : arguments[0]);
						return;
					}
					var scrollableParent = findScrollableParent(this);
					var parentRects = scrollableParent.getBoundingClientRect();
					var clientRects = this.getBoundingClientRect();
					var clientLeft = clientRects.left - parseInt(w.getComputedStyle(this).scrollMarginLeft, 10);
					var clientTop = clientRects.top - parseInt(w.getComputedStyle(this).scrollMarginTop, 10);
					if (scrollableParent !== d.body) {
						smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientLeft - parentRects.left, scrollableParent.scrollTop + clientTop - parentRects.top);
						if (w.getComputedStyle(scrollableParent).position !== "fixed") {
							w.scrollBy({
								left: parentRects.left,
								top: parentRects.top,
								behavior: "smooth"
							});
						}
					} else {
						w.scrollBy({
							left: clientLeft,
							top: clientTop,
							behavior: "smooth"
						});
					}
				};
			}
			if (typeof exports === "object" && typeof module !== "undefined") {
				module.exports = {
					polyfill
				};
			} else {
				polyfill();
			}
		}
	});

	// ns-hugo:/opt/build/repo/assets/scripts/common/accordions.js
	var Accordions = class {
		constructor() {
			document.addEventListener("DOMContentLoaded", () => {
				try {
					const accordions = document.querySelectorAll(".expand-wrapper");
					accordions.forEach((item) => {
						const button = item.parentNode.querySelector(".expand-button");
						button.addEventListener("click", () => this.handleButtonClick(item));
						console.log(item);
					});
				} catch (error) {
					console.error(error);
				}
				try {
					const accordions = document.querySelectorAll(".capabilities-expand-wrapper");
					accordions.forEach((item) => {
						const button = item.parentNode.querySelector(".capabilities-expand-button");
						button.addEventListener("click", () => {
							if (!item.classList.contains("expanded")) {
								const expanded = document.querySelectorAll(".capabilities-expand-wrapper.expanded");
								expanded.forEach((exp) => {
									this.handleButtonClick(exp, true);
								});
							}
							setTimeout(() => {
								this.handleButtonClick(item);
							}, 0);
						});
						console.log(item);
					});
				} catch (error) {
					console.error(error);
				}
			});
			setTimeout(() => {
				const initExpanded = document.querySelector(".capabilities-expand-wrapper.expanded");
				if (!initExpanded)
					return;
				const content = initExpanded.querySelector(".capabilities-expand-content");
				if (content) {
					const height = content.getBoundingClientRect().height;
					initExpanded.style.height = `${height + 10}px`;
				}
			}, 50);
		}
		handleButtonClick(wrapper, forceClose) {
			if (forceClose || wrapper.classList.contains("expanded")) {
				wrapper.classList.remove("expanded");
				wrapper.style.height = "0px";
			} else {
				wrapper.classList.add("expanded");
				const content = wrapper.querySelector(".expand-content") || wrapper.querySelector(".capabilities-expand-content");
				if (content) {
					const height = content.getBoundingClientRect().height;
					wrapper.style.height = `${height + 10}px`;
				}
			}
		}
	};
	var accordions_default = Accordions;

	// ns-hugo:/opt/build/repo/assets/scripts/common/careers.js
	function htmlDecode(input) {
		var doc = new DOMParser().parseFromString(input, "text/html");
		return doc.documentElement.textContent;
	}
	var Careers = class {
		constructor() {
			var target = window.location.hash,
				target = target.replace("#", "");
			window.location.hash = "";
			if (target == "open-roles") {
				setTimeout(function() {
					window.scrollTo(0, 0);
					let elem = document.getElementById("open-roles");
					window.scrollTo(0, elem.offsetTop);
				}, 100);
			}
			this.screenWidth = window.innerWidth;;
			this.openPositions = [];
			document.addEventListener("DOMContentLoaded", this.init);
			window.addEventListener("resize", this.handleCareerResize);
		}
		handleCareerResize = () => {
			const w = window.innerWidth;
			if (w == this.screenWidth) {
				return;
			}
			this.screenWidth = w;
			this.forceClearIntroState();
			try {
				const accordions = document.querySelectorAll(".careers-expand-wrapper");
				accordions.forEach((item) => {
					const button = item.parentNode.querySelector(".careers-open-role-toggle");
					this.handleButtonClick(item, true);
				});
			} catch (error) {
				console.error(error);
			}
		};
		clearIntroState = () => {
			const video = document.getElementById("careers-curiosity-video");
			video.pause();
			video.currentTime = 0;
			const wrapper = document.getElementById("careers-intro-wrapper");
			wrapper.classList.remove("kindred-spirits-active");
			wrapper.classList.remove("misfits-active");
			wrapper.classList.remove("good-active");
			wrapper.classList.remove("passion-active");
			wrapper.classList.remove("curiosity-active");
		};
		addIntroLinkKindredSpirits = () => {
			document.getElementById("careers-intro-wrapper").classList.add("kindred-spirits-active");
		};
		addIntroLinkMisfits = () => {
			document.getElementById("careers-intro-wrapper").classList.add("misfits-active");
		};
		addIntroLinkGood = () => {
			document.getElementById("careers-intro-wrapper").classList.add("good-active");
		};
		addIntroLinkPassion = () => {
			document.getElementById("careers-intro-wrapper").classList.add("passion-active");
		};
		addIntroLinkCuriosity = () => {
			document.getElementById("careers-intro-wrapper").classList.add("curiosity-active");
			setTimeout(() => {
				const video = document.getElementById("careers-curiosity-video");
				video.play();
			}, 500);
		};
		updateIntroState = () => {
			this.clearIntroState();
			if (this.activeIntroLink == "intro-link-kindred-spirits") {
				this.addIntroLinkKindredSpirits();
			} else if (this.activeIntroLink == "intro-link-misfits") {
				this.addIntroLinkMisfits();
			} else if (this.activeIntroLink == "intro-link-good") {
				this.addIntroLinkGood();
			} else if (this.activeIntroLink == "intro-link-passion") {
				this.addIntroLinkPassion();
			} else if (this.activeIntroLink == "intro-link-curiosity") {
				this.addIntroLinkCuriosity();
			} else if (this.activeIntroLink == "intro-link-humor") {}
		};
		forceClearIntroState = () => {
			this.activeIntroLink = null;
			this.clearIntroState();
		};
		handleCareersIntroLinkClick = (e) => {
			const id = e.currentTarget.id;
			if (this.activeIntroLink === id) {
				this.activeIntroLink = null;
			} else {
				this.activeIntroLink = id;
			}
			this.updateIntroState();
		};
		transformScroll = (event) => {
			if (!event.deltaY) {
				return;
			}
			event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
			event.preventDefault();
		};
		init = async () => {
			this.activeIntroLink = null;
			this.activeIntroElement = null;
			await this.fetchOpenPositions();
			this.handleInitOpenPositions();
			document.querySelectorAll(".careers-intro-link").forEach((el) => el.addEventListener("click", this.handleCareersIntroLinkClick));
			document.querySelectorAll(".careers-intro-modal-close-button").forEach((el) => el.addEventListener("click", this.forceClearIntroState));
			document.getElementById("careers-intro-misfits-modal-content").addEventListener("wheel", this.transformScroll);
			document.getElementById("careers-intro-misfits-modal-wrapper").addEventListener("click", this.forceClearIntroState);
			document.getElementById("careers-intro-passion-content").addEventListener("wheel", this.transformScroll);
			document.querySelectorAll(".modal-dismiss-area ").forEach((el) => {
				el.addEventListener("click", this.forceClearIntroState);
			});
		};
		fetchOpenPositions = async () => {
			const positions = await fetch("https://boards-api.greenhouse.io/v1/boards/sylvain/jobs?content=true");
			let parsedPositions;
			try {
				parsedPositions = await positions.json();
			} catch (error) {
				console.error(error);
				return;
			}
			if (!parsedPositions.jobs || !parsedPositions.jobs[0]) {
				console.warning("no jobs found");
				return null;
			}
			let tempString = parsedPositions.jobs.map((job) => {
				const employmentType = job.metadata.find(({
					name
				}) => name == "Employment Type");
				return `
    <div class="careers-open-role-wrapper">
			<div class="careers-expand-wrapper">
				<div class="careers-expand-content">
					<div class="careers-open-role-description">${htmlDecode(job.content)}</div>
					<a target="_blank" class="button careers-open-role-apply-link" href="${job.absolute_url}">
						<div>
							<p>Apply Now</p>
						</div>
					</a>	
				</div>
			</div>
      <button class="careers-open-role-toggle">
				<span class="careers-open-role-title">${job.title}</span>
				<span class="careers-open-role-status">${employmentType ? employmentType.value + ", " : ""}${job.location.name}</span>
        <div class="careers-expand-icon-wrapper">
					<svg
						class="careers-expand-icon"
						width="23"
						height="23.5"
						viewBox="0 0 46 47"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
						class="careers-expand-plus"
						d="M24.1232 22.0952H45.2184V25.1232H24.1232V46.2184H21.0952V25.1232H0V22.0952H21.0952V1H24.1232V22.0952Z"
						fill="#7A787D"
						/>
						<path
						class="careers-expand-minus"
						d="M21 21.8768L21 0.781612H24.028L24.028 21.8768V24.9048V46H21V24.9048V21.8768Z"
						fill="#7A787D"
						/>
					</svg>
				</div>
			</button>
		</div>
    `;
			}).reduce((acc, val) => acc + val, "");
			document.getElementById("careers-open-roles-content").insertAdjacentHTML("beforeend", tempString);
		};
		handleInitOpenPositions = () => {
			try {
				const accordions = document.querySelectorAll(".careers-expand-wrapper");
				accordions.forEach((item) => {
					const button = item.parentNode.querySelector(".careers-open-role-toggle");
					button.addEventListener("click", () => this.handleButtonClick(item));
				});
			} catch (error) {
				console.error(error);
			}
		};
		handleButtonClick(wrapper, forceClose) {
			if (forceClose || wrapper.classList.contains("expanded")) {
				wrapper.classList.remove("expanded");
				wrapper.style.height = "0px";
			} else {
				wrapper.classList.add("expanded");
				const content = wrapper.querySelector(".careers-expand-content");
				if (content) {
					const height = content.getBoundingClientRect().height;
					wrapper.style.height = `${height + 10}px`;
				}
			}
		}
	};
	var careers_default = Careers;

	// ns-hugo:/opt/build/repo/assets/scripts/common/carousels.js
	var import_splide_min = __toESM(require_splide_min());
	var Carousels = class {
		constructor() {
			document.addEventListener("DOMContentLoaded", () => {
				try {
					const splides = document.querySelectorAll(".splide");
					splides.forEach((s) => {
						const splide = new import_splide_min.default(s);
						splide.on("pagination:mounted", function(data) {
							data.list.classList.add("splide__pagination--custom");
							data.items.forEach(function(item) {
								item.button.textContent = `0${String(item.page + 1)}/0${data.items.length}`;
							});
						});
						splide.mount();
						setTimeout(function() {
							splide.refresh();
						}, 1e3);
					});
					this.resizeSplides();
					this.handleSplideResize();
				} catch (error) {}
			});
		}
		resizeSplides() {
			const splides = document.querySelectorAll(".splide");
			splides.forEach((splide) => {
				const slide = splide.querySelector(".splide__slide picture");
				const arrows = splide.querySelectorAll(".splide__arrow");
				if (!slide || !arrows.length)
					return;
				const height = slide.getBoundingClientRect().height;
				arrows.forEach((arrow) => {
					arrow.style.height = `${height}px`;
				});
				const pagination = splide.querySelector(".splide__pagination--custom");
				if (!pagination)
					return;
				pagination.style.top = `${height}px`;
			});
		}
		handleSplideResize() {
			window.addEventListener("resize", this.resizeSplides);
		}
	};
	var carousels_default = Carousels;

	// ns-hugo:/opt/build/repo/assets/scripts/utilities/focus.js
	var ShowFocusClass = "focus";
	var Focus = class {
		constructor() {
			ShowFocusOnTabPress();
			RemoveFocusOnClick();
		}
	};
	var ShowFocusOnTabPress = () => {
		document.addEventListener("keydown", (event) => {
			if (event.key == "Tab")
				document.documentElement.classList.add(ShowFocusClass);
		});
	};
	var RemoveFocusOnClick = () => {
		document.addEventListener("click", (event) => {
			if (event.clientX == 0 && event.clientY == 0)
				return;
			document.documentElement.classList.remove(ShowFocusClass);
		});
	};

	// ns-hugo:/opt/build/repo/assets/scripts/common/header.js
	var headerHeightVar = "--header--height";
	var headerMinHeightVar = "--header--height--min";
	var filterHeightVar = "--filter--height";
	var contactOpenClass = "contact--open";
	var navInvertedClass = "nav--invert";
	var invertedClass = "invert";
	var navStickyClass = "nav--sticky";
	var navClosedClass = "nav--closed";
	var navOpeningClass = "nav--opening";
	var navOpenClass = "nav--open";
	var navHidingClass = "nav--hiding";
	var navHiddenClass = "nav--hidden";
	var navPreHiddenClass = "nav--pre";
	var homeClass = "home";
	var navKey = "navOpen";
	var autoCollapse = 1e3;
	var Header = class {
		constructor() {
			document.addEventListener("DOMContentLoaded", () => {
				this.body = document.body.classList;
				this.header = document.querySelector("body > header");
				this.nav = document.querySelector("body > header > nav");
				this.contact = document.querySelector("body > header details");
				this.stickyNav = document.querySelector("body > aside");
				this.contactTray = document.querySelector("body > address");
				this.main = document.querySelector("body > main");
				this.updatesFilter = document.querySelector("body.updates #filter");
				this.homePage = true;
				this.mobileHeader = true;
				this.contactTrayOpen = false;
				this.stickyNavOpen = false;
				this.fixedNavOpen = false;
				this.navOpen = true;
				this.autoHideNav();
				this.getHeaderNavDimensions();
				this.toggleContactTray();
				this.navInvertedScroll();
				this.headerEvents();
				this.mainEvents();
				this.stickyNavScroll();
				this.stickyNavButton();
			});
			window.addEventListener("load", () => {
				this.preventScrollChaining(this.header, this.contactTray, this.updatesFilter);
			});
		}
		getHeaderNavDimensions() {
			let headerHeight = this.header.scrollHeight;
			let headerWidth = this.header.scrollWidth;
			let headerMinHeight = this.nav.querySelector("div").scrollHeight + this.nav.querySelector("menu").scrollHeight;
			let filterHeight;
			if (this.updatesFilter)
				filterHeight = this.updatesFilter.querySelector("header").scrollHeight;
			this.mobileHeader = headerHeight < headerWidth;
			document.body.style.setProperty(headerHeightVar, ` ${headerHeight / 10}rem`);
			document.body.style.setProperty(headerMinHeightVar, ` ${headerMinHeight / 10}rem`);
			if (this.updatesFilter)
				document.body.style.setProperty(filterHeightVar, ` ${filterHeight / 10}rem`);
			window.addEventListener("resize", () => {
				headerHeight = this.header.scrollHeight;
				headerWidth = this.header.scrollWidth;
				this.mobileHeader = headerHeight < headerWidth;
				document.body.style.setProperty(headerHeightVar, ` ${headerHeight / 10}rem`);
				document.body.style.setProperty(headerMinHeightVar, ` ${headerMinHeight / 10}rem`);
				if (this.updatesFilter)
					document.body.style.setProperty(filterHeightVar, ` ${filterHeight / 10}rem`);
			});
		}
		showContactTray() {
			if (!this.contactTrayOpen) {
				this.body.add(contactOpenClass);
				this.contactTray.ontransitionend = () => {
					this.contactTrayOpen = true;
					this.contactTray.ontransitionend = void 0;
				};
			}
		}
		hideContactTray() {
			if (this.contactTrayOpen) {
				this.contact.open = false;
				this.body.remove(contactOpenClass);
				this.contactTray.ontransitionend = () => {
					this.contactTrayOpen = false;
					this.contactTray.scrollTo(0, 0);
					this.contactTray.ontransitionend = void 0;
				};
			}
		}
		toggleContactTray() {
			this.contact.addEventListener("toggle", (event) => {
				this.contact.open ? this.showContactTray() : this.hideContactTray();
			});
		}
		preventScrollChaining(...elements) {
			if (navigator.userAgent.includes("AppleWebKit") && !navigator.userAgent.includes("Chrome")) {
				const smoothScroll = (element, amount) => element.scrollBy({
					top: amount,
					left: 0,
					behavior: "smooth"
				});
				const scrollWatcher = (element, offset) => {
					element.onscroll = () => {
						let scrollPosition = element.scrollTop;
						if (scrollPosition == 0)
							smoothScroll(element, 1);
						if (scrollPosition == offset)
							smoothScroll(element, -1);
					};
				};
				elements.forEach((element) => {
					if (element) {
						smoothScroll(element, 1);
						let elementHeight = element.scrollHeight;
						let elementWidth = element.scrollWidth;
						let viewportHeight = element.clientHeight;
						if (elementHeight > elementWidth)
							scrollWatcher(element, elementHeight - viewportHeight);
						window.addEventListener("resize", () => {
							elementHeight = element.scrollHeight;
							elementWidth = element.scrollWidth;
							viewportHeight = element.clientHeight;
							if (elementHeight > elementWidth) {
								scrollWatcher(element, elementHeight - viewportHeight);
							} else {
								element.onscroll = void 0;
							}
						});
					}
				});
			}
		}
		navInvertedScroll() {
			let invertedVisibility = {};
			const invertedAreas = document.querySelectorAll(`.${invertedClass}`);
			const stickyNavHeight = getComputedStyle(document.body).getPropertyValue("--sticky--width").replace("rem", "") * 10;
			invertedAreas.forEach((element, index) => {
				const observer = new IntersectionObserver((entries) => {
					const [entry] = entries;
					invertedVisibility[index] = entry.isIntersecting;
					Object.keys(invertedVisibility).some((index2) => invertedVisibility[index2]) ? this.body.add(navInvertedClass) : this.body.remove(navInvertedClass);
				}, {
					rootMargin: `-${stickyNavHeight - 1}px 0% -90%`
				});
				observer.observe(element);
			});
		}
		headerEvents() {
			const headerLinks = this.header.querySelectorAll("a");
			headerLinks.forEach((element) => {
				element.onclick = (event) => {
					if (this.contactTrayOpen) {
						event.stopPropagation();
						event.preventDefault();
						this.hideContactTray();
						this.main.ontransitionend = () => window.location.href = element.href;
					}
				};
			});
			this.header.onclick = (event) => {
				if (this.contactTrayOpen) {
					event.stopPropagation();
					event.preventDefault();
					this.hideContactTray();
				}
			};
			document.addEventListener("keydown", (event) => {
				if (event.key === "Escape")
					this.hideContactTray();
			});
		}
		mainEvents() {
			const closeSequence = () => {
				if (!this.homePage && this.navOpen) {
					if (this.mobileHeader && !this.stickyNavOpen) {
						if (this.contactTrayOpen) {
							this.hideContactTray();
							setTimeout(() => this.hideNav(), 600);
						} else {
							this.hideNav();
						}
					} else {
						this.hideNav();
						this.hideContactTray();
					}
				} else if (this.contactTrayOpen) {
					this.hideContactTray();
					setTimeout(() => this.hideFixedNav(), 600);
				} else {
					this.hideFixedNav();
				}
			};
			window.onscroll = () => {
				closeSequence();
			};
			this.main.onclick = () => {
				closeSequence();
			};
		}
		stickyNavScroll() {
			const mainObserver = new IntersectionObserver((entries) => {
				const [entry] = entries;
				entry.isIntersecting ? this.body.add(navStickyClass) : this.body.remove(navStickyClass);
				if (entry.isIntersecting)
					this.header.scrollTo(0, 0);
				this.stickyNavOpen = entry.isIntersecting;
			}, {
				rootMargin: "0% 0% -100%"
			});
			mainObserver.observe(this.main);
		}
		showFixedNav() {
			if (!this.fixedNavOpen) {
				this.body.remove(navStickyClass);
				this.body.add(navOpeningClass);
				this.body.add(navClosedClass);
				this.body.add(navOpenClass);
				setTimeout(() => {
					this.body.remove(navOpeningClass);
					this.body.remove(navClosedClass);
					this.fixedNavOpen = true;
					this.header.ontransitionend = void 0;
				}, 500);
			}
		}
		hideFixedNav() {
			if (this.fixedNavOpen) {
				this.fixedNavOpen = false;
				this.body.add(navClosedClass);
				this.header.ontransitionend = () => {
					this.body.remove(navClosedClass);
					this.body.remove(navOpenClass);
					this.header.scrollTo(0, 0);
					this.header.ontransitionend = void 0;
					if (this.stickyNavOpen)
						this.body.add(navStickyClass);
				};
			}
		}
		stickyNavButton() {
			this.stickyNav.querySelector("button").onclick = () => {
				if (!this.navOpen) {
					if (!this.stickyNavOpen || !this.mobileHeader) {
						this.showNav();
					} else {
						this.showFixedNav();
					}
				} else {
					this.showFixedNav();
				}
			};
		}
		showNav() {
			if (!this.navOpen) {
				this.body.add(navHidingClass);
				this.body.remove(navHiddenClass);
				this.main.ontransitionend = () => {
					this.navOpen = true;
					localStorage.setItem(navKey, this.navOpen);
					this.body.remove(navHidingClass);
					this.main.ontransitionend = void 0;
				};
			}
		}
		hideNav() {
			if (this.navOpen) {
				this.body.add(navHidingClass);
				this.main.ontransitionend = () => {
					this.body.add(navHiddenClass);
					this.body.remove(navHidingClass);
					this.main.ontransitionend = void 0;
					this.stickyNav.ontransitionend = () => {
						this.navOpen = false;
						localStorage.setItem(navKey, this.navOpen);
						this.header.scrollTo(0, 0);
						this.stickyNav.ontransitionend = void 0;
						if (navigator.userAgent.includes("AppleWebKit") && !navigator.userAgent.includes("Chrome")) {
							setTimeout(() => {
								document.body.style.setProperty("overflow", "hidden");
								setTimeout(() => document.body.style.removeProperty("overflow"), 10);
							}, 500);
						}
					};
				};
			}
		}
		autoHideNav() {
			this.homePage = this.body.contains(homeClass);
			if (localStorage[navKey])
				this.navOpen = JSON.parse(localStorage.getItem(navKey));
			if (!this.homePage) {
				if (!this.navOpen) {
					this.body.add(navHiddenClass);
					setTimeout(() => this.body.remove(navPreHiddenClass), 10);
				} else {
					this.body.remove(navPreHiddenClass);
					setTimeout(() => this.hideNav(), autoCollapse);
				}
			} else {
				this.navOpen = true;
				localStorage.setItem(navKey, this.navOpen);
			}
		}
	};
	var header_default = Header;

	// ns-hugo:/opt/build/repo/assets/scripts/common/memberBios.js
	function htmlToElements(html2) {
		var template = document.createElement("template");
		template.innerHTML = html2;
		return template.content.childNodes;
	}
	var MemberBios = class {
		constructor() {
			document.addEventListener("DOMContentLoaded", () => {
				this.body = document.body.classList;
				this.header = document.querySelector("body > header");
				this.main = document.querySelector("body > main");
				this.team = document.querySelector("#team");
				if (!this.team)
					return null;
				this.teamMembers = document.querySelectorAll(".team-member.has-bio");
				this.teamBioWrapper = document.querySelector("#team-bio-wrapper");
				this.initTeamMembers();
			});
		}
		clearSelectedBios = () => {
			this.teamBioWrapper.parentElement.classList.remove("bio-active");
			const activeTeamMembers = document.querySelectorAll(".team-member.active");
			activeTeamMembers.forEach((member) => {
				member.classList.remove("active");
			});
			this.teamBioWrapper.innerHTML = "";
		};
		setSelectedBio = (target) => {
			target.classList.add("active");
			const $figcaption = target.querySelector("figure > figcaption");
			const $bio = target.querySelector(".bio");
			if (!$bio || !$figcaption)
				return;
			const caption = $figcaption.outerHTML;
			let bioHTML = $bio.innerHTML || "";
			bioHTML = bioHTML.trim();
			if (!bioHTML.startsWith("<p")) {
				bioHTML = `<p>${bioHTML}</p>`;
			}
			bioHTML = bioHTML.replace(/<p><\/p>/g, "");
			const bio = `<div class="bio-content">${bioHTML}</div>`;
			this.setTeamBioWrapperContent(caption, bio);
			this.teamBioWrapper.parentElement.classList.add("bio-active");
		};
		handleTeamMemberClick = (e) => {
			if (e.target.nodeName === "A")
				return;
			this.clearSelectedBios();
			this.setSelectedBio(e.currentTarget);
		};
		scrollToBio() {
			if (window.matchMedia("(min-width: 568px)").matches)
				return;
			this.teamBioWrapper.scrollIntoView(true, {
				behavior: "smooth",
				block: "start"
			});
		}
		setTeamBioWrapperContent(caption, bio) {
			const buttonElements = htmlToElements(`<button class="bio-content-close-button"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 20 20.799.201l1.414 1.414-19.799 19.8L1 20Z" fill="#F15F3C"/><path d="m2 0 19.799 19.799-1.414 1.414L.585 1.414 2 0Z" fill="#F15F3C"/></svg></button>`);
			buttonElements.forEach((el) => {
				this.teamBioWrapper.appendChild(el);
			});
			const button = document.querySelector(".bio-content-close-button");
			button.addEventListener("click", this.clearSelectedBios);
			const captionElements = htmlToElements(caption);
			captionElements.forEach((el) => {
				this.teamBioWrapper.appendChild(el);
			});
			const bioElements = htmlToElements(bio);
			bioElements.forEach((el) => {
				this.teamBioWrapper.appendChild(el);
			});
			this.scrollToBio();
		}
		initTeamMembers() {
			this.teamMembers.forEach((item, i) => {
				item.addEventListener("click", this.handleTeamMemberClick);
			});
		}
	};
	var memberBios_default = MemberBios;

	// <stdin>
	var import_smooth_scroll = __toESM(require_smooth_scroll());
	var import_splide_min2 = __toESM(require_splide_min());

	// ns-hugo:/opt/build/repo/assets/scripts/common/videoPosters.js
	var VideoPosters = class {
		constructor() {
			document.addEventListener("DOMContentLoaded", () => {
				this.posters = document.querySelectorAll(".video-poster");
				this.posters.forEach((poster) => {
					poster.addEventListener("click", function(e) {
						e.currentTarget.classList.add("active");
						const parent = e.currentTarget.parentNode;
						const video = parent.querySelector("video");
						video.setAttribute("controls", true);
						video.play();
					});
				});
			});
		}
	};
	var videoPosters_default = VideoPosters;

	// ns-hugo:/opt/build/repo/assets/scripts/utilities/viewporter.js
	var html = document.documentElement;
	var vhOffset = 0;
	var checkElementDims = (cssProperties) => {
		const testElement = document.createElement("div");
		testElement.style.cssText = cssProperties;
		html.insertBefore(testElement, html.firstChild);
		const testElementDims = {
			"width": testElement.offsetWidth,
			"height": testElement.offsetHeight
		};
		html.removeChild(testElement);
		return testElementDims;
	};
	var updateValue = (cssVariable, cssValue) => {
		cssValue ? html.style.setProperty(cssVariable, ` ${cssValue}px`) : html.style.removeProperty(cssVariable);
	};
	var updateVhOffset = () => {
		const initialVisibleHeight = checkElementDims("position: fixed; top: 0; bottom: 0;")["height"];
		const visibleHeight = window.innerHeight;
		const vh100 = checkElementDims("position: fixed; top: 0; height: 100vh")["height"];
		vhOffset = vh100 - Math.min(initialVisibleHeight, visibleHeight);
		updateValue("--vh--offset", vhOffset);
		if (vhOffset)
			updateValue("--vh--initial", visibleHeight);
	};
	var updateInnerHeight = () => {
		if (vhOffset)
			updateValue("--inner-height", window.innerHeight);
	};
	var updateScrollbarWidth = () => {
		html.style.setProperty(`overflow-y`, ` scroll`);
		const percent100 = checkElementDims("position: fixed; top: 0; width: 100%; height: 200vh;")["width"];
		const scrollbarWidth = window.innerWidth - percent100;
		html.style.removeProperty(`overflow-y`);
		updateValue("--scrollbar", scrollbarWidth);
	};
	var orientationDirection = () => {
		if (navigator.userAgent.includes("AppleWebKit") && !navigator.userAgent.includes("Chrome")) {
			window.orientation == 90 ? html.classList.add("counter-clockwise") : html.classList.remove("counter-clockwise");
			window.orientation == -90 ? html.classList.add("clockwise") : html.classList.remove("clockwise");
		}
	};
	var Viewporter = class {
		constructor() {
			this.orientationChanged = false;
			document.addEventListener("DOMContentLoaded", () => {
				if (navigator.appVersion.includes("Win"))
					html.classList.add("windows");
				updateVhOffset();
				updateInnerHeight();
				updateScrollbarWidth();
				orientationDirection();
			});
			window.addEventListener("orientationchange", () => {
				this.orientationChanged = true;
				orientationDirection();
				setTimeout(() => window.dispatchEvent(new Event("resize")), 250);
				setTimeout(() => this.orientationChanged = false, 750);
			});
			window.addEventListener("resize", () => {
				updateScrollbarWidth();
				updateInnerHeight();
				if (this.orientationChanged)
					updateVhOffset();
			});
		}
	};

	// <stdin>
	new Focus();
	new Viewporter();
	new header_default();
	new accordions_default();
	new careers_default();
	new carousels_default();
	new memberBios_default();
	new videoPosters_default();
	new import_smooth_scroll.default.polyfill();
})();