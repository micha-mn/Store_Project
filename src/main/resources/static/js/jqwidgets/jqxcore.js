/*
jQWidgets v13.1.0 (2021-Nov)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

var oldBrowser = document.all && !document.addEventListener;
if (!oldBrowser) {
	(function(bd, G) {
		var q, an, ak = bd.document,
			bo = bd.location,
			bt = bd.navigator,
			ax = bd.JQXLite,
			X = bd.$,
			aR = Array.prototype.push,
			aD = Array.prototype.slice,
			aA = Array.prototype.indexOf,
			y = Object.prototype.toString,
			b = Object.prototype.hasOwnProperty,
			aw = String.prototype.trim,
			C = function(bu, bv) {
				return new C.fn.init(bu, bv, q)
			},
			aE = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
			at = /\S/,
			a8 = /\s+/,
			S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			aF = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
			e = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			j = /^[\],:{}\s]*$/,
			t = /(?:^|:|,)(?:\s*\[)+/g,
			a5 = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			K = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
			au = /^-ms-/,
			aS = /-([\da-z])/gi,
			m = function(bu, bv) {
				return (bv + "").toUpperCase()
			},
			a4 = function() {
				if (ak.addEventListener) {
					ak.removeEventListener("DOMContentLoaded", a4, false);
					C.ready()
				} else {
					if (ak.readyState === "complete") {
						ak.detachEvent("onreadystatechange", a4);
						C.ready()
					}
				}
			},
			a0 = {};
		C.fn = C.prototype = {
			constructor: C,
			init: function(bu, bx, by) {
				var bw, bz, bv, bA;
				if (!bu) {
					return this
				}
				if (bu.nodeType) {
					this.context = this[0] = bu;
					this.length = 1;
					return this
				}
				if (typeof bu === "string") {
					if (bu.charAt(0) === "<" && bu.charAt(bu.length - 1) === ">" && bu.length >= 3) {
						bw = [null, bu, null]
					} else {
						bw = aF.exec(bu)
					}
					if (bw && (bw[1] || !bx)) {
						if (bw[1]) {
							bx = bx instanceof C ? bx[0] : bx;
							bA = (bx && bx.nodeType ? bx.ownerDocument || bx : ak);
							bu = C.parseHTML(bw[1], bA, true);
							if (e.test(bw[1]) && C.isPlainObject(bx)) {
								this.attr.call(bu, bx, true)
							}
							return C.merge(this, bu)
						} else {
							bz = ak.getElementById(bw[2]);
							if (bz && bz.parentNode) {
								if (bz.id !== bw[2]) {
									return by.find(bu)
								}
								this.length = 1;
								this[0] = bz
							}
							this.context = ak;
							this.selector = bu;
							return this
						}
					} else {
						if (!bx || bx.jqx) {
							return (bx || by).find(bu)
						} else {
							return this.constructor(bx).find(bu)
						}
					}
				} else {
					if (C.isFunction(bu)) {
						return by.ready(bu)
					}
				}
				if (bu.selector !== G) {
					this.selector = bu.selector;
					this.context = bu.context
				}
				return C.makeArray(bu, this)
			},
			selector: "",
			jqx: "4.5.0",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return aD.call(this)
			},
			get: function(bu) {
				return bu == null ? this.toArray() : (bu < 0 ? this[this.length + bu] : this[bu])
			},
			pushStack: function(bv, bx, bu) {
				var bw = C.merge(this.constructor(), bv);
				bw.prevObject = this;
				bw.context = this.context;
				if (bx === "find") {
					bw.selector = this.selector + (this.selector ? " " : "") + bu
				} else {
					if (bx) {
						bw.selector = this.selector + "." + bx + "(" + bu + ")"
					}
				}
				return bw
			},
			each: function(bv, bu) {
				return C.each(this, bv, bu)
			},
			ready: function(bu) {
				C.ready.promise().done(bu);
				return this
			},
			eq: function(bu) {
				bu = +bu;
				return bu === -1 ? this.slice(bu) : this.slice(bu, bu + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			slice: function() {
				return this.pushStack(aD.apply(this, arguments), "slice", aD.call(arguments).join(","))
			},
			map: function(bu) {
				return this.pushStack(C.map(this, function(bw, bv) {
					return bu.call(bw, bv, bw)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: aR,
			sort: [].sort,
			splice: [].splice
		};
		C.fn.init.prototype = C.fn;
		C.extend = C.fn.extend = function() {
			var bD, bw, bu, bv, bA, bB, bz = arguments[0] || {},
				by = 1,
				bx = arguments.length,
				bC = false;
			if (typeof bz === "boolean") {
				bC = bz;
				bz = arguments[1] || {};
				by = 2
			}
			if (typeof bz !== "object" && !C.isFunction(bz)) {
				bz = {}
			}
			if (bx === by) {
				bz = this;
				--by
			}
			for (; by < bx; by++) {
				if ((bD = arguments[by]) != null) {
					for (bw in bD) {
						bu = bz[bw];
						bv = bD[bw];
						if (bz === bv) {
							continue
						}
						if (bC && bv && (C.isPlainObject(bv) || (bA = C.isArray(bv)))) {
							if (bA) {
								bA = false;
								bB = bu && C.isArray(bu) ? bu : []
							} else {
								bB = bu && C.isPlainObject(bu) ? bu : {}
							}
							bz[bw] = C.extend(bC, bB, bv)
						} else {
							if (bv !== G) {
								bz[bw] = bv
							}
						}
					}
				}
			}
			return bz
		};
		C.extend({
			noConflict: function(bu) {
				if (bd.$ === C) {
					bd.$ = X
				}
				if (bu && bd.JQXLite === C) {
					bd.JQXLite = ax
				}
				return C
			},
			isReady: false,
			readyWait: 1,
			holdReady: function(bu) {
				if (bu) {
					C.readyWait++
				} else {
					C.ready(true)
				}
			},
			ready: function(bu) {
				if (bu === true ? --C.readyWait : C.isReady) {
					return
				}
				if (!ak.body) {
					return setTimeout(C.ready, 1)
				}
				C.isReady = true;
				if (bu !== true && --C.readyWait > 0) {
					return
				}
				an.resolveWith(ak, [C]);
				if (C.fn.trigger) {
					C(ak).trigger("ready").off("ready")
				}
			},
			isFunction: function(bu) {
				return C.type(bu) === "function"
			},
			isArray: Array.isArray || function(bu) {
				return C.type(bu) === "array"
			},
			isWindow: function(bu) {
				return bu != null && bu == bu.window
			},
			isNumeric: function(bu) {
				return !isNaN(parseFloat(bu)) && isFinite(bu)
			},
			type: function(bu) {
				return bu == null ? String(bu) : a0[y.call(bu)] || "object"
			},
			isPlainObject: function(bw) {
				if (!bw || C.type(bw) !== "object" || bw.nodeType || C.isWindow(bw)) {
					return false
				}
				try {
					if (bw.constructor && !b.call(bw, "constructor") && !b.call(bw.constructor.prototype, "isPrototypeOf")) {
						return false
					}
				} catch (bv) {
					return false
				}
				var bu;
				for (bu in bw) {}
				return bu === G || b.call(bw, bu)
			},
			isEmptyObject: function(bv) {
				var bu;
				for (bu in bv) {
					return false
				}
				return true
			},
			error: function(bu) {
				throw new Error(bu)
			},
			parseHTML: function(bx, bw, bu) {
				var bv;
				if (!bx || typeof bx !== "string") {
					return null
				}
				if (typeof bw === "boolean") {
					bu = bw;
					bw = 0
				}
				bw = bw || ak;
				if ((bv = e.exec(bx))) {
					return [bw.createElement(bv[1])]
				}
				bv = C.buildFragment([bx], bw, bu ? null : []);
				return C.merge([], (bv.cacheable ? C.clone(bv.fragment) : bv.fragment).childNodes)
			},
			parseJSON: function(bu) {
				if (!bu || typeof bu !== "string") {
					return null
				}
				bu = C.trim(bu);
				if (bd.JSON && bd.JSON.parse) {
					return bd.JSON.parse(bu)
				}
				if (j.test(bu.replace(a5, "@").replace(K, "]").replace(t, ""))) {
					return (new Function("return " + bu))()
				}
				C.error("Invalid JSON: " + bu)
			},
			parseXML: function(bw) {
				var bu, bv;
				if (!bw || typeof bw !== "string") {
					return null
				}
				try {
					if (bd.DOMParser) {
						bv = new DOMParser();
						bu = bv.parseFromString(bw, "text/xml")
					} else {
						bu = new ActiveXObject("Microsoft.XMLDOM");
						bu.async = "false";
						bu.loadXML(bw)
					}
				} catch (bx) {
					bu = G
				}
				if (!bu || !bu.documentElement || bu.getElementsByTagName("parsererror").length) {
					C.error("Invalid XML: " + bw)
				}
				return bu
			},
			noop: function() {},
			globalEval: function(bu) {
				if (bu && at.test(bu)) {
					(bd.execScript || function(bv) {
						bd["eval"].call(bd, bv)
					})(bu)
				}
			},
			camelCase: function(bu) {
				return bu.replace(au, "ms-").replace(aS, m)
			},
			nodeName: function(bv, bu) {
				return bv.nodeName && bv.nodeName.toLowerCase() === bu.toLowerCase()
			},
			each: function(bz, bA, bw) {
				var bv, bx = 0,
					by = bz.length,
					bu = by === G || C.isFunction(bz);
				if (bw) {
					if (bu) {
						for (bv in bz) {
							if (bA.apply(bz[bv], bw) === false) {
								break
							}
						}
					} else {
						for (; bx < by;) {
							if (bA.apply(bz[bx++], bw) === false) {
								break
							}
						}
					}
				} else {
					if (bu) {
						for (bv in bz) {
							if (bA.call(bz[bv], bv, bz[bv]) === false) {
								break
							}
						}
					} else {
						for (; bx < by;) {
							if (bA.call(bz[bx], bx, bz[bx++]) === false) {
								break
							}
						}
					}
				}
				return bz
			},
			trim: aw && !aw.call("\uFEFF\xA0") ? function(bu) {
				return bu == null ? "" : aw.call(bu)
			} : function(bu) {
				return bu == null ? "" : (bu + "").replace(S, "")
			},
			makeArray: function(bu, bw) {
				var bx, bv = bw || [];
				if (bu != null) {
					bx = C.type(bu);
					if (bu.length == null || bx === "string" || bx === "function" || bx === "regexp" || C.isWindow(bu)) {
						aR.call(bv, bu)
					} else {
						C.merge(bv, bu)
					}
				}
				return bv
			},
			inArray: function(bx, bv, bw) {
				var bu;
				if (bv) {
					if (aA) {
						return aA.call(bv, bx, bw)
					}
					bu = bv.length;
					bw = bw ? bw < 0 ? Math.max(0, bu + bw) : bw : 0;
					for (; bw < bu; bw++) {
						if (bw in bv && bv[bw] === bx) {
							return bw
						}
					}
				}
				return -1
			},
			merge: function(by, bw) {
				var bu = bw.length,
					bx = by.length,
					bv = 0;
				if (typeof bu === "number") {
					for (; bv < bu; bv++) {
						by[bx++] = bw[bv]
					}
				} else {
					while (bw[bv] !== G) {
						by[bx++] = bw[bv++]
					}
				}
				by.length = bx;
				return by
			},
			grep: function(bv, bA, bu) {
				var bz, bw = [],
					bx = 0,
					by = bv.length;
				bu = !!bu;
				for (; bx < by; bx++) {
					bz = !!bA(bv[bx], bx);
					if (bu !== bz) {
						bw.push(bv[bx])
					}
				}
				return bw
			},
			map: function(bu, bB, bC) {
				var bz, bA, by = [],
					bw = 0,
					bv = bu.length,
					bx = bu instanceof C || bv !== G && typeof bv === "number" && ((bv > 0 && bu[0] && bu[bv - 1]) || bv === 0 || C.isArray(bu));
				if (bx) {
					for (; bw < bv; bw++) {
						bz = bB(bu[bw], bw, bC);
						if (bz != null) {
							by[by.length] = bz
						}
					}
				} else {
					for (bA in bu) {
						bz = bB(bu[bA], bA, bC);
						if (bz != null) {
							by[by.length] = bz
						}
					}
				}
				return by.concat.apply([], by)
			},
			guid: 1,
			proxy: function(by, bx) {
				var bw, bu, bv;
				if (typeof bx === "string") {
					bw = by[bx];
					bx = by;
					by = bw
				}
				if (!C.isFunction(by)) {
					return G
				}
				bu = aD.call(arguments, 2);
				bv = function() {
					return by.apply(bx, bu.concat(aD.call(arguments)))
				};
				bv.guid = by.guid = by.guid || C.guid++;
				return bv
			},
			access: function(bu, bA, bD, bB, by, bE, bC) {
				var bw, bz = bD == null,
					bx = 0,
					bv = bu.length;
				if (bD && typeof bD === "object") {
					for (bx in bD) {
						C.access(bu, bA, bx, bD[bx], 1, bE, bB)
					}
					by = 1
				} else {
					if (bB !== G) {
						bw = bC === G && C.isFunction(bB);
						if (bz) {
							if (bw) {
								bw = bA;
								bA = function(bG, bF, bH) {
									return bw.call(C(bG), bH)
								}
							} else {
								bA.call(bu, bB);
								bA = null
							}
						}
						if (bA) {
							for (; bx < bv; bx++) {
								bA(bu[bx], bD, bw ? bB.call(bu[bx], bx, bA(bu[bx], bD)) : bB, bC)
							}
						}
						by = 1
					}
				}
				return by ? bu : bz ? bA.call(bu) : bv ? bA(bu[0], bD) : bE
			},
			now: function() {
				return (new Date()).getTime()
			}
		});
		C.ready.promise = function(bx) {
			if (!an) {
				an = C.Deferred();
				if (ak.readyState === "complete") {
					setTimeout(C.ready, 1)
				} else {
					if (ak.addEventListener) {
						ak.addEventListener("DOMContentLoaded", a4, false);
						bd.addEventListener("load", C.ready, false)
					} else {
						ak.attachEvent("onreadystatechange", a4);
						bd.attachEvent("onload", C.ready);
						var bw = false;
						try {
							bw = bd.frameElement == null && ak.documentElement
						} catch (bv) {}
						if (bw && bw.doScroll) {
							(function bu() {
								if (!C.isReady) {
									try {
										bw.doScroll("left")
									} catch (by) {
										return setTimeout(bu, 50)
									}
									C.ready()
								}
							})()
						}
					}
				}
			}
			return an.promise(bx)
		};
		C.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(bv, bu) {
			a0["[object " + bu + "]"] = bu.toLowerCase()
		});
		q = C(ak);
		var aX = {};

		function B(bv) {
			var bu = aX[bv] = {};
			C.each(bv.split(a8), function(bx, bw) {
				bu[bw] = true
			});
			return bu
		}
		C.Callbacks = function(bE) {
			bE = typeof bE === "string" ? (aX[bE] || B(bE)) : C.extend({}, bE);
			var bx, bu, by, bw, bz, bA, bB = [],
				bC = !bE.once && [],
				bv = function(bF) {
					bx = bE.memory && bF;
					bu = true;
					bA = bw || 0;
					bw = 0;
					bz = bB.length;
					by = true;
					for (; bB && bA < bz; bA++) {
						if (bB[bA].apply(bF[0], bF[1]) === false && bE.stopOnFalse) {
							bx = false;
							break
						}
					}
					by = false;
					if (bB) {
						if (bC) {
							if (bC.length) {
								bv(bC.shift())
							}
						} else {
							if (bx) {
								bB = []
							} else {
								bD.disable()
							}
						}
					}
				},
				bD = {
					add: function() {
						if (bB) {
							var bG = bB.length;
							(function bF(bH) {
								C.each(bH, function(bJ, bI) {
									var bK = C.type(bI);
									if (bK === "function") {
										if (!bE.unique || !bD.has(bI)) {
											bB.push(bI)
										}
									} else {
										if (bI && bI.length && bK !== "string") {
											bF(bI)
										}
									}
								})
							})(arguments);
							if (by) {
								bz = bB.length
							} else {
								if (bx) {
									bw = bG;
									bv(bx)
								}
							}
						}
						return this
					},
					remove: function() {
						if (bB) {
							C.each(arguments, function(bH, bF) {
								var bG;
								while ((bG = C.inArray(bF, bB, bG)) > -1) {
									bB.splice(bG, 1);
									if (by) {
										if (bG <= bz) {
											bz--
										}
										if (bG <= bA) {
											bA--
										}
									}
								}
							})
						}
						return this
					},
					has: function(bF) {
						return C.inArray(bF, bB) > -1
					},
					empty: function() {
						bB = [];
						return this
					},
					disable: function() {
						bB = bC = bx = G;
						return this
					},
					disabled: function() {
						return !bB
					},
					lock: function() {
						bC = G;
						if (!bx) {
							bD.disable()
						}
						return this
					},
					locked: function() {
						return !bC
					},
					fireWith: function(bG, bF) {
						bF = bF || [];
						bF = [bG, bF.slice ? bF.slice() : bF];
						if (bB && (!bu || bC)) {
							if (by) {
								bC.push(bF)
							} else {
								bv(bF)
							}
						}
						return this
					},
					fire: function() {
						bD.fireWith(this, arguments);
						return this
					},
					fired: function() {
						return !!bu
					}
				};
			return bD
		};
		C.extend({
			Deferred: function(bw) {
				var bv = [
						["resolve", "done", C.Callbacks("once memory"), "resolved"],
						["reject", "fail", C.Callbacks("once memory"), "rejected"],
						["notify", "progress", C.Callbacks("memory")]
					],
					bx = "pending",
					by = {
						state: function() {
							return bx
						},
						always: function() {
							bu.done(arguments).fail(arguments);
							return this
						},
						then: function() {
							var bz = arguments;
							return C.Deferred(function(bA) {
								C.each(bv, function(bC, bB) {
									var bE = bB[0],
										bD = bz[bC];
									bu[bB[1]](C.isFunction(bD) ? function() {
										var bF = bD.apply(this, arguments);
										if (bF && C.isFunction(bF.promise)) {
											bF.promise().done(bA.resolve).fail(bA.reject).progress(bA.notify)
										} else {
											bA[bE + "With"](this === bu ? bA : this, [bF])
										}
									} : bA[bE])
								});
								bz = null
							}).promise()
						},
						promise: function(bz) {
							return bz != null ? C.extend(bz, by) : by
						}
					},
					bu = {};
				by.pipe = by.then;
				C.each(bv, function(bA, bz) {
					var bC = bz[2],
						bB = bz[3];
					by[bz[1]] = bC.add;
					if (bB) {
						bC.add(function() {
							bx = bB
						}, bv[bA ^ 1][2].disable, bv[2][2].lock)
					}
					bu[bz[0]] = bC.fire;
					bu[bz[0] + "With"] = bC.fireWith
				});
				by.promise(bu);
				if (bw) {
					bw.call(bu, bu)
				}
				return bu
			},
			when: function(by) {
				var bw = 0,
					bA = aD.call(arguments),
					bu = bA.length,
					bv = bu !== 1 || (by && C.isFunction(by.promise)) ? bu : 0,
					bD = bv === 1 ? by : C.Deferred(),
					bx = function(bF, bG, bE) {
						return function(bH) {
							bG[bF] = this;
							bE[bF] = arguments.length > 1 ? aD.call(arguments) : bH;
							if (bE === bC) {
								bD.notifyWith(bG, bE)
							} else {
								if (!(--bv)) {
									bD.resolveWith(bG, bE)
								}
							}
						}
					},
					bC, bz, bB;
				if (bu > 1) {
					bC = new Array(bu);
					bz = new Array(bu);
					bB = new Array(bu);
					for (; bw < bu; bw++) {
						if (bA[bw] && C.isFunction(bA[bw].promise)) {
							bA[bw].promise().done(bx(bw, bB, bA)).fail(bD.reject).progress(bx(bw, bz, bC))
						} else {
							--bv
						}
					}
				}
				if (!bv) {
					bD.resolveWith(bB, bA)
				}
				return bD.promise()
			}
		});
		C.support = (function() {
			var bG, bF, bD, bE, bx, bC, bB, bz, by, bw, bu, bv = ak.createElement("div");
			bv.setAttribute("className", "t");
			bv.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			bF = bv.getElementsByTagName("*");
			bD = bv.getElementsByTagName("a")[0];
			if (!bF || !bD || !bF.length) {
				return {}
			}
			bE = ak.createElement("select");
			bx = bE.appendChild(ak.createElement("option"));
			bC = bv.getElementsByTagName("input")[0];
			bD.style.cssText = "top:1px;float:left;opacity:.5";
			bG = {
				leadingWhitespace: (bv.firstChild.nodeType === 3),
				tbody: !bv.getElementsByTagName("tbody").length,
				htmlSerialize: !!bv.getElementsByTagName("link").length,
				style: /top/.test(bD.getAttribute("style")),
				hrefNormalized: (bD.getAttribute("href") === "/a"),
				opacity: /^0.5/.test(bD.style.opacity),
				cssFloat: !!bD.style.cssFloat,
				checkOn: (bC.value === "on"),
				optSelected: bx.selected,
				getSetAttribute: bv.className !== "t",
				enctype: !!ak.createElement("form").enctype,
				html5Clone: ak.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
				boxModel: (ak.compatMode === "CSS1Compat"),
				submitBubbles: true,
				changeBubbles: true,
				focusinBubbles: false,
				deleteExpando: true,
				noCloneEvent: true,
				inlineBlockNeedsLayout: false,
				shrinkWrapBlocks: false,
				reliableMarginRight: true,
				boxSizingReliable: true,
				pixelPosition: false
			};
			bC.checked = true;
			bG.noCloneChecked = bC.cloneNode(true).checked;
			bE.disabled = true;
			bG.optDisabled = !bx.disabled;
			try {
				delete bv.test
			} catch (bA) {
				bG.deleteExpando = false
			}
			if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
				bv.attachEvent("onclick", bu = function() {
					bG.noCloneEvent = false
				});
				bv.cloneNode(true).fireEvent("onclick");
				bv.detachEvent("onclick", bu)
			}
			bC = ak.createElement("input");
			bC.value = "t";
			bC.setAttribute("type", "radio");
			bG.radioValue = bC.value === "t";
			bC.setAttribute("checked", "checked");
			bC.setAttribute("name", "t");
			bv.appendChild(bC);
			bB = ak.createDocumentFragment();
			bB.appendChild(bv.lastChild);
			bG.checkClone = bB.cloneNode(true).cloneNode(true).lastChild.checked;
			bG.appendChecked = bC.checked;
			bB.removeChild(bC);
			bB.appendChild(bv);
			if (bv.attachEvent) {
				for (by in {
						submit: true,
						change: true,
						focusin: true
					}) {
					bz = "on" + by;
					bw = (bz in bv);
					if (!bw) {
						bv.setAttribute(bz, "return;");
						bw = (typeof bv[bz] === "function")
					}
					bG[by + "Bubbles"] = bw
				}
			}
			C(function() {
				var bI, bM, bK, bL, bJ = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
					bH = ak.getElementsByTagName("body")[0];
				if (!bH) {
					return
				}
				bI = ak.createElement("div");
				bI.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
				bH.insertBefore(bI, bH.firstChild);
				bM = ak.createElement("div");
				bI.appendChild(bM);
				bM.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				bK = bM.getElementsByTagName("td");
				bK[0].style.cssText = "padding:0;margin:0;border:0;display:none";
				bw = (bK[0].offsetHeight === 0);
				bK[0].style.display = "";
				bK[1].style.display = "none";
				bG.reliableHiddenOffsets = bw && (bK[0].offsetHeight === 0);
				bM.innerHTML = "";
				bM.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
				bG.boxSizing = (bM.offsetWidth === 4);
				bG.doesNotIncludeMarginInBodyOffset = (bH.offsetTop !== 1);
				if (bd.getComputedStyle) {
					bG.pixelPosition = (bd.getComputedStyle(bM, null) || {}).top !== "1%";
					bG.boxSizingReliable = (bd.getComputedStyle(bM, null) || {
						width: "4px"
					}).width === "4px";
					bL = ak.createElement("div");
					bL.style.cssText = bM.style.cssText = bJ;
					bL.style.marginRight = bL.style.width = "0";
					bM.style.width = "1px";
					bM.appendChild(bL);
					bG.reliableMarginRight = !parseFloat((bd.getComputedStyle(bL, null) || {}).marginRight)
				}
				if (typeof bM.style.zoom !== "undefined") {
					bM.innerHTML = "";
					bM.style.cssText = bJ + "width:1px;padding:1px;display:inline;zoom:1";
					bG.inlineBlockNeedsLayout = (bM.offsetWidth === 3);
					bM.style.display = "block";
					bM.style.overflow = "visible";
					bM.innerHTML = "<div></div>";
					bM.firstChild.style.width = "5px";
					bG.shrinkWrapBlocks = (bM.offsetWidth !== 3);
					bI.style.zoom = 1
				}
				bH.removeChild(bI);
				bI = bM = bK = bL = null
			});
			bB.removeChild(bv);
			bF = bD = bE = bx = bC = bB = bv = null;
			return bG
		})();
		var aK = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			aq = /([A-Z])/g;
		C.extend({
			cache: {},
			deletedIds: [],
			uuid: 0,
			expando: "JQXLite" + (C.fn.jqx + Math.random()).replace(/\D/g, ""),
			noData: {
				embed: true,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet: true
			},
			hasData: function(bu) {
				bu = bu.nodeType ? C.cache[bu[C.expando]] : bu[C.expando];
				return !!bu && !M(bu)
			},
			data: function(bx, bv, bz, by) {
				if (!C.acceptData(bx)) {
					return
				}
				var bA, bC, bD = C.expando,
					bB = typeof bv === "string",
					bE = bx.nodeType,
					bu = bE ? C.cache : bx,
					bw = bE ? bx[bD] : bx[bD] && bD;
				if ((!bw || !bu[bw] || (!by && !bu[bw].data)) && bB && bz === G) {
					return
				}
				if (!bw) {
					if (bE) {
						bx[bD] = bw = C.deletedIds.pop() || C.guid++
					} else {
						bw = bD
					}
				}
				if (!bu[bw]) {
					bu[bw] = {};
					if (!bE) {
						bu[bw].toJSON = C.noop
					}
				}
				if (typeof bv === "object" || typeof bv === "function") {
					if (by) {
						bu[bw] = C.extend(bu[bw], bv)
					} else {
						bu[bw].data = C.extend(bu[bw].data, bv)
					}
				}
				bA = bu[bw];
				if (!by) {
					if (!bA.data) {
						bA.data = {}
					}
					bA = bA.data
				}
				if (bz !== G) {
					bA[C.camelCase(bv)] = bz
				}
				if (bB) {
					bC = bA[bv];
					if (bC == null) {
						bC = bA[C.camelCase(bv)]
					}
				} else {
					bC = bA
				}
				return bC
			},
			removeData: function(bx, bv, by) {
				if (!C.acceptData(bx)) {
					return
				}
				var bB, bA, bz, bC = bx.nodeType,
					bu = bC ? C.cache : bx,
					bw = bC ? bx[C.expando] : C.expando;
				if (!bu[bw]) {
					return
				}
				if (bv) {
					bB = by ? bu[bw] : bu[bw].data;
					if (bB) {
						if (!C.isArray(bv)) {
							if (bv in bB) {
								bv = [bv]
							} else {
								bv = C.camelCase(bv);
								if (bv in bB) {
									bv = [bv]
								} else {
									bv = bv.split(" ")
								}
							}
						}
						for (bA = 0, bz = bv.length; bA < bz; bA++) {
							delete bB[bv[bA]]
						}
						if (!(by ? M : C.isEmptyObject)(bB)) {
							return
						}
					}
				}
				if (!by) {
					delete bu[bw].data;
					if (!M(bu[bw])) {
						return
					}
				}
				if (bC) {
					C.cleanData([bx], true)
				} else {
					if (C.support.deleteExpando || bu != bu.window) {
						delete bu[bw]
					} else {
						bu[bw] = null
					}
				}
			},
			_data: function(bv, bu, bw) {
				return C.data(bv, bu, bw, true)
			},
			acceptData: function(bv) {
				var bu = bv.nodeName && C.noData[bv.nodeName.toLowerCase()];
				return !bu || bu !== true && bv.getAttribute("classid") === bu
			}
		});
		C.fn.extend({
			data: function(bD, bC) {
				var by, bv, bB, bu, bx, bw = this[0],
					bA = 0,
					bz = null;
				if (bD === G) {
					if (this.length) {
						bz = C.data(bw);
						if (bw.nodeType === 1 && !C._data(bw, "parsedAttrs")) {
							bB = bw.attributes;
							for (bx = bB.length; bA < bx; bA++) {
								bu = bB[bA].name;
								if (!bu.indexOf("data-")) {
									bu = C.camelCase(bu.substring(5));
									a9(bw, bu, bz[bu])
								}
							}
							C._data(bw, "parsedAttrs", true)
						}
					}
					return bz
				}
				if (typeof bD === "object") {
					return this.each(function() {
						C.data(this, bD)
					})
				}
				by = bD.split(".", 2);
				by[1] = by[1] ? "." + by[1] : "";
				bv = by[1] + "!";
				return C.access(this, function(bE) {
					if (bE === G) {
						bz = this.triggerHandler("getData" + bv, [by[0]]);
						if (bz === G && bw) {
							bz = C.data(bw, bD);
							bz = a9(bw, bD, bz)
						}
						return bz === G && by[1] ? this.data(by[0]) : bz
					}
					by[1] = bE;
					this.each(function() {
						var bF = C(this);
						bF.triggerHandler("setData" + bv, by);
						C.data(this, bD, bE);
						bF.triggerHandler("changeData" + bv, by)
					})
				}, null, bC, arguments.length > 1, null, false)
			},
			removeData: function(bu) {
				return this.each(function() {
					C.removeData(this, bu)
				})
			}
		});

		function a9(bw, bv, bx) {
			if (bx === G && bw.nodeType === 1) {
				var bu = "data-" + bv.replace(aq, "-$1").toLowerCase();
				bx = bw.getAttribute(bu);
				if (typeof bx === "string") {
					try {
						bx = bx === "true" ? true : bx === "false" ? false : bx === "null" ? null : +bx + "" === bx ? +bx : aK.test(bx) ? C.parseJSON(bx) : bx
					} catch (by) {}
					C.data(bw, bv, bx)
				} else {
					bx = G
				}
			}
			return bx
		}

		function M(bv) {
			var bu;
			for (bu in bv) {
				if (bu === "data" && C.isEmptyObject(bv[bu])) {
					continue
				}
				if (bu !== "toJSON") {
					return false
				}
			}
			return true
		}
		C.extend({
			queue: function(bw, bv, bx) {
				var bu;
				if (bw) {
					bv = (bv || "fx") + "queue";
					bu = C._data(bw, bv);
					if (bx) {
						if (!bu || C.isArray(bx)) {
							bu = C._data(bw, bv, C.makeArray(bx))
						} else {
							bu.push(bx)
						}
					}
					return bu || []
				}
			},
			dequeue: function(bz, by) {
				by = by || "fx";
				var bv = C.queue(bz, by),
					bA = bv.length,
					bx = bv.shift(),
					bu = C._queueHooks(bz, by),
					bw = function() {
						C.dequeue(bz, by)
					};
				if (bx === "inprogress") {
					bx = bv.shift();
					bA--
				}
				if (bx) {
					if (by === "fx") {
						bv.unshift("inprogress")
					}
					delete bu.stop;
					bx.call(bz, bw, bu)
				}
				if (!bA && bu) {
					bu.empty.fire()
				}
			},
			_queueHooks: function(bw, bv) {
				var bu = bv + "queueHooks";
				return C._data(bw, bu) || C._data(bw, bu, {
					empty: C.Callbacks("once memory").add(function() {
						C.removeData(bw, bv + "queue", true);
						C.removeData(bw, bu, true)
					})
				})
			}
		});
		C.fn.extend({
			queue: function(bu, bv) {
				var bw = 2;
				if (typeof bu !== "string") {
					bv = bu;
					bu = "fx";
					bw--
				}
				if (arguments.length < bw) {
					return C.queue(this[0], bu)
				}
				return bv === G ? this : this.each(function() {
					var bx = C.queue(this, bu, bv);
					C._queueHooks(this, bu);
					if (bu === "fx" && bx[0] !== "inprogress") {
						C.dequeue(this, bu)
					}
				})
			},
			dequeue: function(bu) {
				return this.each(function() {
					C.dequeue(this, bu)
				})
			},
			delay: function(bv, bu) {
				bv = C.fx ? C.fx.speeds[bv] || bv : bv;
				bu = bu || "fx";
				return this.queue(bu, function(bx, bw) {
					var by = setTimeout(bx, bv);
					bw.stop = function() {
						clearTimeout(by)
					}
				})
			},
			clearQueue: function(bu) {
				return this.queue(bu || "fx", [])
			},
			promise: function(bw, bA) {
				var bv, bx = 1,
					bB = C.Deferred(),
					bz = this,
					bu = this.length,
					by = function() {
						if (!(--bx)) {
							bB.resolveWith(bz, [bz])
						}
					};
				if (typeof bw !== "string") {
					bA = bw;
					bw = G
				}
				bw = bw || "fx";
				while (bu--) {
					bv = C._data(bz[bu], bw + "queueHooks");
					if (bv && bv.empty) {
						bx++;
						bv.empty.add(by)
					}
				}
				by();
				return bB.promise(bA)
			}
		});
		var bh, aT, ay, aI = /[\t\r\n]/g,
			aP = /\r/g,
			d = /^(?:button|input)$/i,
			z = /^(?:button|input|object|select|textarea)$/i,
			h = /^a(?:rea|)$/i,
			ae = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			A = C.support.getSetAttribute;
		C.fn.extend({
			attr: function(bu, bv) {
				return C.access(this, C.attr, bu, bv, arguments.length > 1)
			},
			removeAttr: function(bu) {
				return this.each(function() {
					C.removeAttr(this, bu)
				})
			},
			prop: function(bu, bv) {
				return C.access(this, C.prop, bu, bv, arguments.length > 1)
			},
			removeProp: function(bu) {
				bu = C.propFix[bu] || bu;
				return this.each(function() {
					try {
						this[bu] = G;
						delete this[bu]
					} catch (bv) {}
				})
			},
			addClass: function(by) {
				var bA, bw, bv, bx, bz, bB, bu;
				if (C.isFunction(by)) {
					return this.each(function(bC) {
						C(this).addClass(by.call(this, bC, this.className))
					})
				}
				if (by && typeof by === "string") {
					bA = by.split(a8);
					for (bw = 0, bv = this.length; bw < bv; bw++) {
						bx = this[bw];
						if (bx.nodeType === 1) {
							if (!bx.className && bA.length === 1) {
								bx.className = by
							} else {
								bz = " " + bx.className + " ";
								for (bB = 0, bu = bA.length; bB < bu; bB++) {
									if (bz.indexOf(" " + bA[bB] + " ") < 0) {
										bz += bA[bB] + " "
									}
								}
								bx.className = C.trim(bz)
							}
						}
					}
				}
				return this
			},
			removeClass: function(bA) {
				var bx, by, bz, bB, bv, bw, bu;
				if (C.isFunction(bA)) {
					return this.each(function(bC) {
						C(this).removeClass(bA.call(this, bC, this.className))
					})
				}
				if ((bA && typeof bA === "string") || bA === G) {
					bx = (bA || "").split(a8);
					for (bw = 0, bu = this.length; bw < bu; bw++) {
						bz = this[bw];
						if (bz.nodeType === 1 && bz.className) {
							by = (" " + bz.className + " ").replace(aI, " ");
							for (bB = 0, bv = bx.length; bB < bv; bB++) {
								while (by.indexOf(" " + bx[bB] + " ") >= 0) {
									by = by.replace(" " + bx[bB] + " ", " ")
								}
							}
							bz.className = bA ? C.trim(by) : ""
						}
					}
				}
				return this
			},
			toggleClass: function(bx, bv) {
				var bw = typeof bx,
					bu = typeof bv === "boolean";
				if (C.isFunction(bx)) {
					return this.each(function(by) {
						C(this).toggleClass(bx.call(this, by, this.className, bv), bv)
					})
				}
				return this.each(function() {
					if (bw === "string") {
						var bA, bz = 0,
							by = C(this),
							bB = bv,
							bC = bx.split(a8);
						while ((bA = bC[bz++])) {
							bB = bu ? bB : !by.hasClass(bA);
							by[bB ? "addClass" : "removeClass"](bA)
						}
					} else {
						if (bw === "undefined" || bw === "boolean") {
							if (this.className) {
								C._data(this, "__className__", this.className)
							}
							this.className = this.className || bx === false ? "" : C._data(this, "__className__") || ""
						}
					}
				})
			},
			hasClass: function(bu) {
				var bx = " " + bu + " ",
					bw = 0,
					bv = this.length;
				for (; bw < bv; bw++) {
					if (this[bw].nodeType === 1 && (" " + this[bw].className + " ").replace(aI, " ").indexOf(bx) >= 0) {
						return true
					}
				}
				return false
			},
			val: function(bx) {
				var bu, bv, by, bw = this[0];
				if (!arguments.length) {
					if (bw) {
						bu = C.valHooks[bw.type] || C.valHooks[bw.nodeName.toLowerCase()];
						if (bu && "get" in bu && (bv = bu.get(bw, "value")) !== G) {
							return bv
						}
						bv = bw.value;
						return typeof bv === "string" ? bv.replace(aP, "") : bv == null ? "" : bv
					}
					return
				}
				by = C.isFunction(bx);
				return this.each(function(bA) {
					var bB, bz = C(this);
					if (this.nodeType !== 1) {
						return
					}
					if (by) {
						bB = bx.call(this, bA, bz.val())
					} else {
						bB = bx
					}
					if (bB == null) {
						bB = ""
					} else {
						if (typeof bB === "number") {
							bB += ""
						} else {
							if (C.isArray(bB)) {
								bB = C.map(bB, function(bC) {
									return bC == null ? "" : bC + ""
								})
							}
						}
					}
					bu = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()];
					if (!bu || !("set" in bu) || bu.set(this, bB, "value") === G) {
						this.value = bB
					}
				})
			}
		});
		C.extend({
			valHooks: {
				option: {
					get: function(bu) {
						var bv = bu.attributes.value;
						return !bv || bv.specified ? bu.value : bu.text
					}
				},
				select: {
					get: function(bu) {
						var bA, bw, bC = bu.options,
							by = bu.selectedIndex,
							bx = bu.type === "select-one" || by < 0,
							bB = bx ? null : [],
							bz = bx ? by + 1 : bC.length,
							bv = by < 0 ? bz : bx ? by : 0;
						for (; bv < bz; bv++) {
							bw = bC[bv];
							if ((bw.selected || bv === by) && (C.support.optDisabled ? !bw.disabled : bw.getAttribute("disabled") === null) && (!bw.parentNode.disabled || !C.nodeName(bw.parentNode, "optgroup"))) {
								bA = C(bw).val();
								if (bx) {
									return bA
								}
								bB.push(bA)
							}
						}
						return bB
					},
					set: function(bv, bw) {
						var bu = C.makeArray(bw);
						C(bv).find("option").each(function() {
							this.selected = C.inArray(C(this).val(), bu) >= 0
						});
						if (!bu.length) {
							bv.selectedIndex = -1
						}
						return bu
					}
				}
			},
			attrFn: {},
			attr: function(bA, bx, bB, bz) {
				var bw, bu, by, bv = bA.nodeType;
				if (!bA || bv === 3 || bv === 8 || bv === 2) {
					return
				}
				if (bz && C.isFunction(C.fn[bx])) {
					return C(bA)[bx](bB)
				}
				if (typeof bA.getAttribute === "undefined") {
					return C.prop(bA, bx, bB)
				}
				by = bv !== 1 || !C.isXMLDoc(bA);
				if (by) {
					bx = bx.toLowerCase();
					bu = C.attrHooks[bx] || (ae.test(bx) ? aT : bh)
				}
				if (bB !== G) {
					if (bB === null) {
						C.removeAttr(bA, bx);
						return
					} else {
						if (bu && "set" in bu && by && (bw = bu.set(bA, bB, bx)) !== G) {
							return bw
						} else {
							bA.setAttribute(bx, bB + "");
							return bB
						}
					}
				} else {
					if (bu && "get" in bu && by && (bw = bu.get(bA, bx)) !== null) {
						return bw
					} else {
						bw = bA.getAttribute(bx);
						return bw === null ? G : bw
					}
				}
			},
			removeAttr: function(bx, bz) {
				var by, bA, bv, bu, bw = 0;
				if (bz && bx.nodeType === 1) {
					bA = bz.split(a8);
					for (; bw < bA.length; bw++) {
						bv = bA[bw];
						if (bv) {
							by = C.propFix[bv] || bv;
							bu = ae.test(bv);
							if (!bu) {
								C.attr(bx, bv, "")
							}
							bx.removeAttribute(A ? bv : by);
							if (bu && by in bx) {
								bx[by] = false
							}
						}
					}
				}
			},
			attrHooks: {
				type: {
					set: function(bu, bv) {
						if (d.test(bu.nodeName) && bu.parentNode) {
							C.error("type property can't be changed")
						} else {
							if (!C.support.radioValue && bv === "radio" && C.nodeName(bu, "input")) {
								var bw = bu.value;
								bu.setAttribute("type", bv);
								if (bw) {
									bu.value = bw
								}
								return bv
							}
						}
					}
				},
				value: {
					get: function(bv, bu) {
						if (bh && C.nodeName(bv, "button")) {
							return bh.get(bv, bu)
						}
						return bu in bv ? bv.value : null
					},
					set: function(bv, bw, bu) {
						if (bh && C.nodeName(bv, "button")) {
							return bh.set(bv, bw, bu)
						}
						bv.value = bw
					}
				}
			},
			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			prop: function(bz, bx, bA) {
				var bw, bu, by, bv = bz.nodeType;
				if (!bz || bv === 3 || bv === 8 || bv === 2) {
					return
				}
				by = bv !== 1 || !C.isXMLDoc(bz);
				if (by) {
					bx = C.propFix[bx] || bx;
					bu = C.propHooks[bx]
				}
				if (bA !== G) {
					if (bu && "set" in bu && (bw = bu.set(bz, bA, bx)) !== G) {
						return bw
					} else {
						return (bz[bx] = bA)
					}
				} else {
					if (bu && "get" in bu && (bw = bu.get(bz, bx)) !== null) {
						return bw
					} else {
						return bz[bx]
					}
				}
			},
			propHooks: {
				tabIndex: {
					get: function(bv) {
						var bu = bv.getAttributeNode("tabindex");
						return bu && bu.specified ? parseInt(bu.value, 10) : z.test(bv.nodeName) || h.test(bv.nodeName) && bv.href ? 0 : G
					}
				}
			}
		});
		aT = {
			get: function(bv, bu) {
				var bx, bw = C.prop(bv, bu);
				return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(bu)) && bx.nodeValue !== false ? bu.toLowerCase() : G
			},
			set: function(bv, bx, bu) {
				var bw;
				if (bx === false) {
					C.removeAttr(bv, bu)
				} else {
					bw = C.propFix[bu] || bu;
					if (bw in bv) {
						bv[bw] = true
					}
					bv.setAttribute(bu, bu.toLowerCase())
				}
				return bu
			}
		};
		if (!C.support.enctype) {
			C.propFix.enctype = "encoding"
		}
		var bf = /^(?:textarea|input|select)$/i,
			n = /^([^\.]*|)(?:\.(.+)|)$/,
			F = /(?:^|\s)hover(\.\S+|)\b/,
			aH = /^key/,
			bi = /^(?:mouse|contextmenu)|click/,
			N = /^(?:focusinfocus|focusoutblur)$/,
			bs = function(bu) {
				return C.event.special.hover ? bu : bu.replace(F, "mouseenter$1 mouseleave$1")
			};
		C.event = {
			add: function(bx, bB, bI, bz, by) {
				var bC, bA, bJ, bH, bG, bE, bu, bF, bv, bw, bD;
				if (bx.nodeType === 3 || bx.nodeType === 8 || !bB || !bI || !(bC = C._data(bx))) {
					return
				}
				if (bI.handler) {
					bv = bI;
					bI = bv.handler;
					by = bv.selector
				}
				if (!bI.guid) {
					bI.guid = C.guid++
				}
				bJ = bC.events;
				if (!bJ) {
					bC.events = bJ = {}
				}
				bA = bC.handle;
				if (!bA) {
					bC.handle = bA = function(bK) {
						return typeof C !== "undefined" && (!bK || C.event.triggered !== bK.type) ? C.event.dispatch.apply(bA.elem, arguments) : G
					};
					bA.elem = bx
				}
				bB = C.trim(bs(bB)).split(" ");
				for (bH = 0; bH < bB.length; bH++) {
					bG = n.exec(bB[bH]) || [];
					bE = bG[1];
					bu = (bG[2] || "").split(".").sort();
					bD = C.event.special[bE] || {};
					bE = (by ? bD.delegateType : bD.bindType) || bE;
					bD = C.event.special[bE] || {};
					bF = C.extend({
						type: bE,
						origType: bG[1],
						data: bz,
						handler: bI,
						guid: bI.guid,
						selector: by,
						needsContext: by && C.expr.match.needsContext.test(by),
						namespace: bu.join(".")
					}, bv);
					bw = bJ[bE];
					if (!bw) {
						bw = bJ[bE] = [];
						bw.delegateCount = 0;
						if (!bD.setup || bD.setup.call(bx, bz, bu, bA) === false) {
							if (bx.addEventListener) {
								if (bz && bz.passive !== G) {
									bx.addEventListener(bE, bA, bz)
								} else {
									bx.addEventListener(bE, bA, false)
								}
							} else {
								if (bx.attachEvent) {
									bx.attachEvent("on" + bE, bA)
								}
							}
						}
					}
					if (bD.add) {
						bD.add.call(bx, bF);
						if (!bF.handler.guid) {
							bF.handler.guid = bI.guid
						}
					}
					if (by) {
						bw.splice(bw.delegateCount++, 0, bF)
					} else {
						bw.push(bF)
					}
					C.event.global[bE] = true
				}
				bx = null
			},
			global: {},
			remove: function(bx, bC, bI, by, bB) {
				var bJ, bK, bF, bw, bv, bz, bA, bH, bE, bu, bG, bD = C.hasData(bx) && C._data(bx);
				if (!bD || !(bH = bD.events)) {
					return
				}
				bC = C.trim(bs(bC || "")).split(" ");
				for (bJ = 0; bJ < bC.length; bJ++) {
					bK = n.exec(bC[bJ]) || [];
					bF = bw = bK[1];
					bv = bK[2];
					if (!bF) {
						for (bF in bH) {
							C.event.remove(bx, bF + bC[bJ], bI, by, true)
						}
						continue
					}
					bE = C.event.special[bF] || {};
					bF = (by ? bE.delegateType : bE.bindType) || bF;
					bu = bH[bF] || [];
					bz = bu.length;
					bv = bv ? new RegExp("(^|\\.)" + bv.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
					for (bA = 0; bA < bu.length; bA++) {
						bG = bu[bA];
						if ((bB || bw === bG.origType) && (!bI || bI.guid === bG.guid) && (!bv || bv.test(bG.namespace)) && (!by || by === bG.selector || by === "**" && bG.selector)) {
							bu.splice(bA--, 1);
							if (bG.selector) {
								bu.delegateCount--
							}
							if (bE.remove) {
								bE.remove.call(bx, bG)
							}
						}
					}
					if (bu.length === 0 && bz !== bu.length) {
						if (!bE.teardown || bE.teardown.call(bx, bv, bD.handle) === false) {
							C.removeEvent(bx, bF, bD.handle)
						}
						delete bH[bF]
					}
				}
				if (C.isEmptyObject(bH)) {
					delete bD.handle;
					C.removeData(bx, "events", true)
				}
			},
			customEvent: {
				getData: true,
				setData: true,
				changeData: true
			},
			trigger: function(bv, bC, bA, bJ) {
				if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
					return
				}
				var bu, bx, bD, bH, bz, by, bF, bE, bB, bI, bG = bv.type || bv,
					bw = [];
				if (N.test(bG + C.event.triggered)) {
					return
				}
				if (bG.indexOf("!") >= 0) {
					bG = bG.slice(0, -1);
					bx = true
				}
				if (bG.indexOf(".") >= 0) {
					bw = bG.split(".");
					bG = bw.shift();
					bw.sort()
				}
				if ((!bA || C.event.customEvent[bG]) && !C.event.global[bG]) {
					return
				}
				bv = typeof bv === "object" ? bv[C.expando] ? bv : new C.Event(bG, bv) : new C.Event(bG);
				bv.type = bG;
				bv.isTrigger = true;
				bv.exclusive = bx;
				bv.namespace = bw.join(".");
				bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bw.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
				by = bG.indexOf(":") < 0 ? "on" + bG : "";
				if (!bA) {
					bu = C.cache;
					for (bD in bu) {
						if (bu[bD].events && bu[bD].events[bG]) {
							C.event.trigger(bv, bC, bu[bD].handle.elem, true)
						}
					}
					return
				}
				bv.result = G;
				if (!bv.target) {
					bv.target = bA
				}
				bC = bC != null ? C.makeArray(bC) : [];
				bC.unshift(bv);
				bF = C.event.special[bG] || {};
				if (bF.trigger && bF.trigger.apply(bA, bC) === false) {
					return
				}
				bB = [
					[bA, bF.bindType || bG]
				];
				if (!bJ && !bF.noBubble && !C.isWindow(bA)) {
					bI = bF.delegateType || bG;
					bH = N.test(bI + bG) ? bA : bA.parentNode;
					for (bz = bA; bH; bH = bH.parentNode) {
						bB.push([bH, bI]);
						bz = bH
					}
					if (bz === (bA.ownerDocument || ak)) {
						bB.push([bz.defaultView || bz.parentWindow || bd, bI])
					}
				}
				for (bD = 0; bD < bB.length && !bv.isPropagationStopped(); bD++) {
					bH = bB[bD][0];
					bv.type = bB[bD][1];
					bE = (C._data(bH, "events") || {})[bv.type] && C._data(bH, "handle");
					if (bE) {
						bE.apply(bH, bC)
					}
					bE = by && bH[by];
					if (bE && C.acceptData(bH) && bE.apply && bE.apply(bH, bC) === false) {
						bv.preventDefault()
					}
				}
				bv.type = bG;
				if (!bJ && !bv.isDefaultPrevented()) {
					if ((!bF._default || bF._default.apply(bA.ownerDocument, bC) === false) && !(bG === "click" && C.nodeName(bA, "a")) && C.acceptData(bA)) {
						if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0) && !C.isWindow(bA)) {
							bz = bA[by];
							if (bz) {
								bA[by] = null
							}
							C.event.triggered = bG;
							bA[bG]();
							C.event.triggered = G;
							if (bz) {
								bA[by] = bz
							}
						}
					}
				}
				return bv.result
			},
			dispatch: function(bu) {
				bu = C.event.fix(bu || bd.event);
				var bB, bA, bK, bE, bD, bv, bC, bI, bx, bJ, by = ((C._data(this, "events") || {})[bu.type] || []),
					bz = by.delegateCount,
					bG = aD.call(arguments),
					bw = !bu.exclusive && !bu.namespace,
					bF = C.event.special[bu.type] || {},
					bH = [];
				bG[0] = bu;
				bu.delegateTarget = this;
				if (bF.preDispatch && bF.preDispatch.call(this, bu) === false) {
					return
				}
				if (bz && !(bu.button && bu.type === "click")) {
					for (bK = bu.target; bK != this; bK = bK.parentNode || this) {
						if (bK.disabled !== true || bu.type !== "click") {
							bD = {};
							bC = [];
							for (bB = 0; bB < bz; bB++) {
								bI = by[bB];
								bx = bI.selector;
								if (bD[bx] === G) {
									bD[bx] = bI.needsContext ? C(bx, this).index(bK) >= 0 : C.find(bx, this, null, [bK]).length
								}
								if (bD[bx]) {
									bC.push(bI)
								}
							}
							if (bC.length) {
								bH.push({
									elem: bK,
									matches: bC
								})
							}
						}
					}
				}
				if (by.length > bz) {
					bH.push({
						elem: this,
						matches: by.slice(bz)
					})
				}
				for (bB = 0; bB < bH.length && !bu.isPropagationStopped(); bB++) {
					bv = bH[bB];
					bu.currentTarget = bv.elem;
					for (bA = 0; bA < bv.matches.length && !bu.isImmediatePropagationStopped(); bA++) {
						bI = bv.matches[bA];
						if (bw || (!bu.namespace && !bI.namespace) || bu.namespace_re && bu.namespace_re.test(bI.namespace)) {
							bu.data = bI.data;
							bu.handleObj = bI;
							bE = ((C.event.special[bI.origType] || {}).handle || bI.handler).apply(bv.elem, bG);
							if (bE !== G) {
								bu.result = bE;
								if (bE === false) {
									bu.preventDefault();
									bu.stopPropagation()
								}
							}
						}
					}
				}
				if (bF.postDispatch) {
					bF.postDispatch.call(this, bu)
				}
				return bu.result
			},
			props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(bv, bu) {
					if (bv.which == null) {
						bv.which = bu.charCode != null ? bu.charCode : bu.keyCode
					}
					return bv
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(bx, bw) {
					var by, bz, bu, bv = bw.button,
						bA = bw.fromElement;
					if (bx.pageX == null && bw.clientX != null) {
						by = bx.target.ownerDocument || ak;
						bz = by.documentElement;
						bu = by.body;
						bx.pageX = bw.clientX + (bz && bz.scrollLeft || bu && bu.scrollLeft || 0) - (bz && bz.clientLeft || bu && bu.clientLeft || 0);
						bx.pageY = bw.clientY + (bz && bz.scrollTop || bu && bu.scrollTop || 0) - (bz && bz.clientTop || bu && bu.clientTop || 0)
					}
					if (!bx.relatedTarget && bA) {
						bx.relatedTarget = bA === bx.target ? bw.toElement : bA
					}
					if (!bx.which && bv !== G) {
						bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)))
					}
					return bx
				}
			},
			fix: function(bw) {
				if (bw[C.expando]) {
					return bw
				}
				var bv, bz, bu = bw,
					bx = C.event.fixHooks[bw.type] || {},
					by = bx.props ? this.props.concat(bx.props) : this.props;
				bw = C.Event(bu);
				for (bv = by.length; bv;) {
					bz = by[--bv];
					bw[bz] = bu[bz]
				}
				if (!bw.target) {
					bw.target = bu.srcElement || ak
				}
				if (bw.target.nodeType === 3) {
					bw.target = bw.target.parentNode
				}
				bw.metaKey = !!bw.metaKey;
				return bx.filter ? bx.filter(bw, bu) : bw
			},
			special: {
				load: {
					noBubble: true
				},
				focus: {
					delegateType: "focusin"
				},
				blur: {
					delegateType: "focusout"
				},
				beforeunload: {
					setup: function(bw, bv, bu) {
						if (C.isWindow(this)) {
							this.onbeforeunload = bu
						}
					},
					teardown: function(bv, bu) {
						if (this.onbeforeunload === bu) {
							this.onbeforeunload = null
						}
					}
				}
			},
			simulate: function(bv, bx, bw, bu) {
				var by = C.extend(new C.Event(), bw, {
					type: bv,
					isSimulated: true,
					originalEvent: {}
				});
				if (bu) {
					C.event.trigger(by, null, bx)
				} else {
					C.event.dispatch.call(bx, by)
				}
				if (by.isDefaultPrevented()) {
					bw.preventDefault()
				}
			}
		};
		C.event.handle = C.event.dispatch;
		C.removeEvent = ak.removeEventListener ? function(bv, bu, bw) {
			if (bv.removeEventListener) {
				bv.removeEventListener(bu, bw, false)
			}
		} : function(bw, bv, bx) {
			var bu = "on" + bv;
			if (bw.detachEvent) {
				if (typeof bw[bu] === "undefined") {
					bw[bu] = null
				}
				bw.detachEvent(bu, bx)
			}
		};
		C.Event = function(bv, bu) {
			if (!(this instanceof C.Event)) {
				return new C.Event(bv, bu)
			}
			if (bv && bv.type) {
				this.originalEvent = bv;
				this.type = bv.type;
				this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? f : bn
			} else {
				this.type = bv
			}
			if (bu) {
				C.extend(this, bu)
			}
			this.timeStamp = bv && bv.timeStamp || C.now();
			this[C.expando] = true
		};

		function bn() {
			return false
		}

		function f() {
			return true
		}
		C.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = f;
				var bu = this.originalEvent;
				if (!bu) {
					return
				}
				if (bu.preventDefault) {
					bu.preventDefault()
				} else {
					bu.returnValue = false
				}
			},
			stopPropagation: function() {
				this.isPropagationStopped = f;
				var bu = this.originalEvent;
				if (!bu) {
					return
				}
				if (bu.stopPropagation) {
					bu.stopPropagation()
				}
				bu.cancelBubble = true
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = f;
				this.stopPropagation()
			},
			isDefaultPrevented: bn,
			isPropagationStopped: bn,
			isImmediatePropagationStopped: bn
		};
		C.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(bv, bu) {
			C.event.special[bv] = {
				delegateType: bu,
				bindType: bu,
				handle: function(bz) {
					var bx, bB = this,
						bA = bz.relatedTarget,
						by = bz.handleObj,
						bw = by.selector;
					if (!bA || (bA !== bB && !C.contains(bB, bA))) {
						bz.type = by.origType;
						bx = by.handler.apply(this, arguments);
						bz.type = bu
					}
					return bx
				}
			}
		});
		C.fn.extend({
			on: function(bw, bu, bz, by, bv) {
				var bA, bx;
				if (typeof bw === "object") {
					if (typeof bu !== "string") {
						bz = bz || bu;
						bu = G
					}
					for (bx in bw) {
						this.on(bx, bu, bz, bw[bx], bv)
					}
					return this
				}
				if (bz == null && by == null) {
					by = bu;
					bz = bu = G
				} else {
					if (by == null) {
						if (typeof bu === "string") {
							by = bz;
							bz = G
						} else {
							by = bz;
							bz = bu;
							bu = G
						}
					}
				}
				if (by === false) {
					by = bn
				} else {
					if (!by) {
						return this
					}
				}
				if (bv === 1) {
					bA = by;
					by = function(bB) {
						C().off(bB);
						return bA.apply(this, arguments)
					};
					by.guid = bA.guid || (bA.guid = C.guid++)
				}
				return this.each(function() {
					C.event.add(this, bw, by, bz, bu)
				})
			},
			off: function(bw, bu, by) {
				var bv, bx;
				if (bw && bw.preventDefault && bw.handleObj) {
					bv = bw.handleObj;
					C(bw.delegateTarget).off(bv.namespace ? bv.origType + "." + bv.namespace : bv.origType, bv.selector, bv.handler);
					return this
				}
				if (typeof bw === "object") {
					for (bx in bw) {
						this.off(bx, bu, bw[bx])
					}
					return this
				}
				if (bu === false || typeof bu === "function") {
					by = bu;
					bu = G
				}
				if (by === false) {
					by = bn
				}
				return this.each(function() {
					C.event.remove(this, bw, by, bu)
				})
			},
			delegate: function(bu, bv, bx, bw) {
				return this.on(bv, bu, bx, bw)
			},
			undelegate: function(bu, bv, bw) {
				return arguments.length === 1 ? this.off(bu, "**") : this.off(bv, bu || "**", bw)
			},
			trigger: function(bu, bv) {
				return this.each(function() {
					C.event.trigger(bu, bv, this)
				})
			},
			triggerHandler: function(bu, bv) {
				if (this[0]) {
					return C.event.trigger(bu, bv, this[0], true)
				}
			},
			toggle: function(bx) {
				var bv = arguments,
					bu = bx.guid || C.guid++,
					bw = 0,
					by = function(bz) {
						var bA = (C._data(this, "lastToggle" + bx.guid) || 0) % bw;
						C._data(this, "lastToggle" + bx.guid, bA + 1);
						bz.preventDefault();
						return bv[bA].apply(this, arguments) || false
					};
				by.guid = bu;
				while (bw < bv.length) {
					bv[bw++].guid = bu
				}
				return this.click(by)
			},
			hover: function(bu, bv) {
				return this.mouseenter(bu).mouseleave(bv || bu)
			}
		});
		C.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(bv, bu) {
			C.fn[bu] = function(bx, bw) {
				if (bw == null) {
					bw = bx;
					bx = null
				}
				return arguments.length > 0 ? this.on(bu, null, bx, bw) : this.trigger(bu)
			};
			if (aH.test(bu)) {
				C.event.fixHooks[bu] = C.event.keyHooks
			}
			if (bi.test(bu)) {
				C.event.fixHooks[bu] = C.event.mouseHooks
			}
		});
		/*!
		 * Sizzle CSS Selector Engine
		 * Copyright 2012 JQXLite Foundation and other contributors
		 * Released under the MIT license
		 * http://sizzlejs.com/
		 */
		(function(cn, bM) {
			var cs, bF, cg, bv, bR, b5, bI, bL, bH, ce, bE = true,
				bZ = "undefined",
				cu = ("sizcache" + Math.random()).replace(".", ""),
				bz = String,
				bD = cn.document,
				bG = bD.documentElement,
				bW = 0,
				bK = 0,
				b9 = [].pop,
				cr = [].push,
				bQ = [].slice,
				bT = [].indexOf || function(cE) {
					var cD = 0,
						cC = this.length;
					for (; cD < cC; cD++) {
						if (this[cD] === cE) {
							return cD
						}
					}
					return -1
				},
				cw = function(cC, cD) {
					cC[cu] = cD == null || cD;
					return cC
				},
				cA = function() {
					var cC = {},
						cD = [];
					return cw(function(cE, cF) {
						if (cD.push(cE) > cg.cacheLength) {
							delete cC[cD.shift()]
						}
						return (cC[cE + " "] = cF)
					}, cC)
				},
				cp = cA(),
				cq = cA(),
				bS = cA(),
				b3 = "[\\x20\\t\\r\\n\\f]",
				bP = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
				bN = bP.replace("w", "w#"),
				cz = "([*^$|!~]?=)",
				ck = "\\[" + b3 + "*(" + bP + ")" + b3 + "*(?:" + cz + b3 + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + bN + ")|)|)" + b3 + "*\\]",
				cB = ":(" + bP + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ck + ")|[^:]|\\\\.)*|.*))\\)|)",
				b4 = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + b3 + "*((?:-\\d)?\\d*)" + b3 + "*\\)|)(?=[^-]|$)",
				co = new RegExp("^" + b3 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + b3 + "+$", "g"),
				bA = new RegExp("^" + b3 + "*," + b3 + "*"),
				cc = new RegExp("^" + b3 + "*([\\x20\\t\\r\\n\\f>+~])" + b3 + "*"),
				ch = new RegExp(cB),
				cj = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
				b8 = /^:not/,
				cm = /[\x20\t\r\n\f]*[+~]/,
				cv = /:not\($/,
				bX = /h\d/i,
				ci = /input|select|textarea|button/i,
				bY = /\\(?!\\)/g,
				cb = {
					ID: new RegExp("^#(" + bP + ")"),
					CLASS: new RegExp("^\\.(" + bP + ")"),
					NAME: new RegExp("^\\[name=['\"]?(" + bP + ")['\"]?\\]"),
					TAG: new RegExp("^(" + bP.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ck),
					PSEUDO: new RegExp("^" + cB),
					POS: new RegExp(b4, "i"),
					CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + b3 + "*(even|odd|(([+-]|)(\\d*)n|)" + b3 + "*(?:([+-]|)" + b3 + "*(\\d+)|))" + b3 + "*\\)|)", "i"),
					needsContext: new RegExp("^" + b3 + "*[>+~]|" + b4, "i")
				},
				cf = function(cC) {
					var cE = bD.createElement("div");
					try {
						return cC(cE)
					} catch (cD) {
						return false
					} finally {
						cE = null
					}
				},
				bC = cf(function(cC) {
					cC.appendChild(bD.createComment(""));
					return !cC.getElementsByTagName("*").length
				}),
				b7 = cf(function(cC) {
					cC.innerHTML = "<a href='#'></a>";
					return cC.firstChild && typeof cC.firstChild.getAttribute !== bZ && cC.firstChild.getAttribute("href") === "#"
				}),
				bV = cf(function(cD) {
					cD.innerHTML = "<select></select>";
					var cC = typeof cD.lastChild.getAttribute("multiple");
					return cC !== "boolean" && cC !== "string"
				}),
				b6 = cf(function(cC) {
					cC.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
					if (!cC.getElementsByClassName || !cC.getElementsByClassName("e").length) {
						return false
					}
					cC.lastChild.className = "e";
					return cC.getElementsByClassName("e").length === 2
				}),
				bu = cf(function(cD) {
					cD.id = cu + 0;
					cD.innerHTML = "<a name='" + cu + "'></a><div name='" + cu + "'></div>";
					bG.insertBefore(cD, bG.firstChild);
					var cC = bD.getElementsByName && bD.getElementsByName(cu).length === 2 + bD.getElementsByName(cu + 0).length;
					bF = !bD.getElementById(cu);
					bG.removeChild(cD);
					return cC
				});
			try {
				bQ.call(bG.childNodes, 0)[0].nodeType
			} catch (cy) {
				bQ = function(cD) {
					var cE, cC = [];
					for (;
						(cE = this[cD]); cD++) {
						cC.push(cE)
					}
					return cC
				}
			}

			function cl(cF, cC, cH, cK) {
				cH = cH || [];
				cC = cC || bD;
				var cI, cD, cJ, cE, cG = cC.nodeType;
				if (!cF || typeof cF !== "string") {
					return cH
				}
				if (cG !== 1 && cG !== 9) {
					return []
				}
				cJ = bR(cC);
				if (!cJ && !cK) {
					if ((cI = cj.exec(cF))) {
						if ((cE = cI[1])) {
							if (cG === 9) {
								cD = cC.getElementById(cE);
								if (cD && cD.parentNode) {
									if (cD.id === cE) {
										cH.push(cD);
										return cH
									}
								} else {
									return cH
								}
							} else {
								if (cC.ownerDocument && (cD = cC.ownerDocument.getElementById(cE)) && b5(cC, cD) && cD.id === cE) {
									cH.push(cD);
									return cH
								}
							}
						} else {
							if (cI[2]) {
								cr.apply(cH, bQ.call(cC.getElementsByTagName(cF), 0));
								return cH
							} else {
								if ((cE = cI[3]) && b6 && cC.getElementsByClassName) {
									cr.apply(cH, bQ.call(cC.getElementsByClassName(cE), 0));
									return cH
								}
							}
						}
					}
				}
				return ct(cF.replace(co, "$1"), cC, cH, cK, cJ)
			}
			cl.matches = function(cD, cC) {
				return cl(cD, null, null, cC)
			};
			cl.matchesSelector = function(cC, cD) {
				return cl(cD, null, null, [cC]).length > 0
			};

			function cd(cC) {
				return function(cE) {
					var cD = cE.nodeName.toLowerCase();
					return cD === "input" && cE.type === cC
				}
			}

			function by(cC) {
				return function(cE) {
					var cD = cE.nodeName.toLowerCase();
					return (cD === "input" || cD === "button") && cE.type === cC
				}
			}

			function ca(cC) {
				return cw(function(cD) {
					cD = +cD;
					return cw(function(cE, cI) {
						var cG, cF = cC([], cE.length, cD),
							cH = cF.length;
						while (cH--) {
							if (cE[(cG = cF[cH])]) {
								cE[cG] = !(cI[cG] = cE[cG])
							}
						}
					})
				})
			}
			bv = cl.getText = function(cG) {
				var cF, cD = "",
					cE = 0,
					cC = cG.nodeType;
				if (cC) {
					if (cC === 1 || cC === 9 || cC === 11) {
						if (typeof cG.textContent === "string") {
							return cG.textContent
						} else {
							for (cG = cG.firstChild; cG; cG = cG.nextSibling) {
								cD += bv(cG)
							}
						}
					} else {
						if (cC === 3 || cC === 4) {
							return cG.nodeValue
						}
					}
				} else {
					for (;
						(cF = cG[cE]); cE++) {
						cD += bv(cF)
					}
				}
				return cD
			};
			bR = cl.isXML = function(cC) {
				var cD = cC && (cC.ownerDocument || cC).documentElement;
				return cD ? cD.nodeName !== "HTML" : false
			};
			b5 = cl.contains = bG.contains ? function(cD, cC) {
				var cF = cD.nodeType === 9 ? cD.documentElement : cD,
					cE = cC && cC.parentNode;
				return cD === cE || !!(cE && cE.nodeType === 1 && cF.contains && cF.contains(cE))
			} : bG.compareDocumentPosition ? function(cD, cC) {
				return cC && !!(cD.compareDocumentPosition(cC) & 16)
			} : function(cD, cC) {
				while ((cC = cC.parentNode)) {
					if (cC === cD) {
						return true
					}
				}
				return false
			};
			cl.attr = function(cE, cD) {
				var cF, cC = bR(cE);
				if (!cC) {
					cD = cD.toLowerCase()
				}
				if ((cF = cg.attrHandle[cD])) {
					return cF(cE)
				}
				if (cC || bV) {
					return cE.getAttribute(cD)
				}
				cF = cE.getAttributeNode(cD);
				return cF ? typeof cE[cD] === "boolean" ? cE[cD] ? cD : null : cF.specified ? cF.value : null : null
			};
			cg = cl.selectors = {
				cacheLength: 50,
				createPseudo: cw,
				match: cb,
				attrHandle: b7 ? {} : {
					href: function(cC) {
						return cC.getAttribute("href", 2)
					},
					type: function(cC) {
						return cC.getAttribute("type")
					}
				},
				find: {
					ID: bF ? function(cF, cE, cD) {
						if (typeof cE.getElementById !== bZ && !cD) {
							var cC = cE.getElementById(cF);
							return cC && cC.parentNode ? [cC] : []
						}
					} : function(cF, cE, cD) {
						if (typeof cE.getElementById !== bZ && !cD) {
							var cC = cE.getElementById(cF);
							return cC ? cC.id === cF || typeof cC.getAttributeNode !== bZ && cC.getAttributeNode("id").value === cF ? [cC] : bM : []
						}
					},
					TAG: bC ? function(cC, cD) {
						if (typeof cD.getElementsByTagName !== bZ) {
							return cD.getElementsByTagName(cC)
						}
					} : function(cC, cG) {
						var cF = cG.getElementsByTagName(cC);
						if (cC === "*") {
							var cH, cE = [],
								cD = 0;
							for (;
								(cH = cF[cD]); cD++) {
								if (cH.nodeType === 1) {
									cE.push(cH)
								}
							}
							return cE
						}
						return cF
					},
					NAME: bu && function(cC, cD) {
						if (typeof cD.getElementsByName !== bZ) {
							return cD.getElementsByName(name)
						}
					},
					CLASS: b6 && function(cE, cD, cC) {
						if (typeof cD.getElementsByClassName !== bZ && !cC) {
							return cD.getElementsByClassName(cE)
						}
					}
				},
				relative: {
					">": {
						dir: "parentNode",
						first: true
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: true
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(cC) {
						cC[1] = cC[1].replace(bY, "");
						cC[3] = (cC[4] || cC[5] || "").replace(bY, "");
						if (cC[2] === "~=") {
							cC[3] = " " + cC[3] + " "
						}
						return cC.slice(0, 4)
					},
					CHILD: function(cC) {
						cC[1] = cC[1].toLowerCase();
						if (cC[1] === "nth") {
							if (!cC[2]) {
								cl.error(cC[0])
							}
							cC[3] = +(cC[3] ? cC[4] + (cC[5] || 1) : 2 * (cC[2] === "even" || cC[2] === "odd"));
							cC[4] = +((cC[6] + cC[7]) || cC[2] === "odd")
						} else {
							if (cC[2]) {
								cl.error(cC[0])
							}
						}
						return cC
					},
					PSEUDO: function(cD) {
						var cE, cC;
						if (cb.CHILD.test(cD[0])) {
							return null
						}
						if (cD[3]) {
							cD[2] = cD[3]
						} else {
							if ((cE = cD[4])) {
								if (ch.test(cE) && (cC = bw(cE, true)) && (cC = cE.indexOf(")", cE.length - cC) - cE.length)) {
									cE = cE.slice(0, cC);
									cD[0] = cD[0].slice(0, cC)
								}
								cD[2] = cE
							}
						}
						return cD.slice(0, 3)
					}
				},
				filter: {
					ID: bF ? function(cC) {
						cC = cC.replace(bY, "");
						return function(cD) {
							return cD.getAttribute("id") === cC
						}
					} : function(cC) {
						cC = cC.replace(bY, "");
						return function(cE) {
							var cD = typeof cE.getAttributeNode !== bZ && cE.getAttributeNode("id");
							return cD && cD.value === cC
						}
					},
					TAG: function(cC) {
						if (cC === "*") {
							return function() {
								return true
							}
						}
						cC = cC.replace(bY, "").toLowerCase();
						return function(cD) {
							return cD.nodeName && cD.nodeName.toLowerCase() === cC
						}
					},
					CLASS: function(cC) {
						var cD = cp[cu][cC + " "];
						return cD || (cD = new RegExp("(^|" + b3 + ")" + cC + "(" + b3 + "|$)")) && cp(cC, function(cE) {
							return cD.test(cE.className || (typeof cE.getAttribute !== bZ && cE.getAttribute("class")) || "")
						})
					},
					ATTR: function(cE, cD, cC) {
						return function(cH, cG) {
							var cF = cl.attr(cH, cE);
							if (cF == null) {
								return cD === "!="
							}
							if (!cD) {
								return true
							}
							cF += "";
							return cD === "=" ? cF === cC : cD === "!=" ? cF !== cC : cD === "^=" ? cC && cF.indexOf(cC) === 0 : cD === "*=" ? cC && cF.indexOf(cC) > -1 : cD === "$=" ? cC && cF.substr(cF.length - cC.length) === cC : cD === "~=" ? (" " + cF + " ").indexOf(cC) > -1 : cD === "|=" ? cF === cC || cF.substr(0, cC.length + 1) === cC + "-" : false
						}
					},
					CHILD: function(cC, cE, cF, cD) {
						if (cC === "nth") {
							return function(cI) {
								var cH, cJ, cG = cI.parentNode;
								if (cF === 1 && cD === 0) {
									return true
								}
								if (cG) {
									cJ = 0;
									for (cH = cG.firstChild; cH; cH = cH.nextSibling) {
										if (cH.nodeType === 1) {
											cJ++;
											if (cI === cH) {
												break
											}
										}
									}
								}
								cJ -= cD;
								return cJ === cF || (cJ % cF === 0 && cJ / cF >= 0)
							}
						}
						return function(cH) {
							var cG = cH;
							switch (cC) {
								case "only":
								case "first":
									while ((cG = cG.previousSibling)) {
										if (cG.nodeType === 1) {
											return false
										}
									}
									if (cC === "first") {
										return true
									}
									cG = cH;
								case "last":
									while ((cG = cG.nextSibling)) {
										if (cG.nodeType === 1) {
											return false
										}
									}
									return true
							}
						}
					},
					PSEUDO: function(cF, cE) {
						var cC, cD = cg.pseudos[cF] || cg.setFilters[cF.toLowerCase()] || cl.error("unsupported pseudo: " + cF);
						if (cD[cu]) {
							return cD(cE)
						}
						if (cD.length > 1) {
							cC = [cF, cF, "", cE];
							return cg.setFilters.hasOwnProperty(cF.toLowerCase()) ? cw(function(cI, cK) {
								var cH, cG = cD(cI, cE),
									cJ = cG.length;
								while (cJ--) {
									cH = bT.call(cI, cG[cJ]);
									cI[cH] = !(cK[cH] = cG[cJ])
								}
							}) : function(cG) {
								return cD(cG, 0, cC)
							}
						}
						return cD
					}
				},
				pseudos: {
					not: cw(function(cC) {
						var cD = [],
							cE = [],
							cF = bI(cC.replace(co, "$1"));
						return cF[cu] ? cw(function(cH, cM, cK, cI) {
							var cL, cG = cF(cH, null, cI, []),
								cJ = cH.length;
							while (cJ--) {
								if ((cL = cG[cJ])) {
									cH[cJ] = !(cM[cJ] = cL)
								}
							}
						}) : function(cI, cH, cG) {
							cD[0] = cI;
							cF(cD, null, cG, cE);
							return !cE.pop()
						}
					}),
					has: cw(function(cC) {
						return function(cD) {
							return cl(cC, cD).length > 0
						}
					}),
					contains: cw(function(cC) {
						return function(cD) {
							return (cD.textContent || cD.innerText || bv(cD)).indexOf(cC) > -1
						}
					}),
					enabled: function(cC) {
						return cC.disabled === false
					},
					disabled: function(cC) {
						return cC.disabled === true
					},
					checked: function(cC) {
						var cD = cC.nodeName.toLowerCase();
						return (cD === "input" && !!cC.checked) || (cD === "option" && !!cC.selected)
					},
					selected: function(cC) {
						if (cC.parentNode) {
							cC.parentNode.selectedIndex
						}
						return cC.selected === true
					},
					parent: function(cC) {
						return !cg.pseudos.empty(cC)
					},
					empty: function(cD) {
						var cC;
						cD = cD.firstChild;
						while (cD) {
							if (cD.nodeName > "@" || (cC = cD.nodeType) === 3 || cC === 4) {
								return false
							}
							cD = cD.nextSibling
						}
						return true
					},
					header: function(cC) {
						return bX.test(cC.nodeName)
					},
					text: function(cE) {
						var cD, cC;
						return cE.nodeName.toLowerCase() === "input" && (cD = cE.type) === "text" && ((cC = cE.getAttribute("type")) == null || cC.toLowerCase() === cD)
					},
					radio: cd("radio"),
					checkbox: cd("checkbox"),
					file: cd("file"),
					password: cd("password"),
					image: cd("image"),
					submit: by("submit"),
					reset: by("reset"),
					button: function(cD) {
						var cC = cD.nodeName.toLowerCase();
						return cC === "input" && cD.type === "button" || cC === "button"
					},
					input: function(cC) {
						return ci.test(cC.nodeName)
					},
					focus: function(cC) {
						var cD = cC.ownerDocument;
						return cC === cD.activeElement && (!cD.hasFocus || cD.hasFocus()) && !!(cC.type || cC.href || ~cC.tabIndex)
					},
					active: function(cC) {
						return cC === cC.ownerDocument.activeElement
					},
					first: ca(function() {
						return [0]
					}),
					last: ca(function(cC, cD) {
						return [cD - 1]
					}),
					eq: ca(function(cC, cE, cD) {
						return [cD < 0 ? cD + cE : cD]
					}),
					even: ca(function(cC, cE) {
						for (var cD = 0; cD < cE; cD += 2) {
							cC.push(cD)
						}
						return cC
					}),
					odd: ca(function(cC, cE) {
						for (var cD = 1; cD < cE; cD += 2) {
							cC.push(cD)
						}
						return cC
					}),
					lt: ca(function(cC, cF, cE) {
						for (var cD = cE < 0 ? cE + cF : cE; --cD >= 0;) {
							cC.push(cD)
						}
						return cC
					}),
					gt: ca(function(cC, cF, cE) {
						for (var cD = cE < 0 ? cE + cF : cE; ++cD < cF;) {
							cC.push(cD)
						}
						return cC
					})
				}
			};

			function bx(cD, cC, cE) {
				if (cD === cC) {
					return cE
				}
				var cF = cD.nextSibling;
				while (cF) {
					if (cF === cC) {
						return -1
					}
					cF = cF.nextSibling
				}
				return 1
			}
			bL = bG.compareDocumentPosition ? function(cD, cC) {
				if (cD === cC) {
					bH = true;
					return 0
				}
				return (!cD.compareDocumentPosition || !cC.compareDocumentPosition ? cD.compareDocumentPosition : cD.compareDocumentPosition(cC) & 4) ? -1 : 1
			} : function(cK, cJ) {
				if (cK === cJ) {
					bH = true;
					return 0
				} else {
					if (cK.sourceIndex && cJ.sourceIndex) {
						return cK.sourceIndex - cJ.sourceIndex
					}
				}
				var cH, cD, cE = [],
					cC = [],
					cG = cK.parentNode,
					cI = cJ.parentNode,
					cL = cG;
				if (cG === cI) {
					return bx(cK, cJ)
				} else {
					if (!cG) {
						return -1
					} else {
						if (!cI) {
							return 1
						}
					}
				}
				while (cL) {
					cE.unshift(cL);
					cL = cL.parentNode
				}
				cL = cI;
				while (cL) {
					cC.unshift(cL);
					cL = cL.parentNode
				}
				cH = cE.length;
				cD = cC.length;
				for (var cF = 0; cF < cH && cF < cD; cF++) {
					if (cE[cF] !== cC[cF]) {
						return bx(cE[cF], cC[cF])
					}
				}
				return cF === cH ? bx(cK, cC[cF], -1) : bx(cE[cF], cJ, 1)
			};
			[0, 0].sort(bL);
			bE = !bH;
			cl.uniqueSort = function(cE) {
				var cF, cG = [],
					cD = 1,
					cC = 0;
				bH = bE;
				cE.sort(bL);
				if (bH) {
					for (;
						(cF = cE[cD]); cD++) {
						if (cF === cE[cD - 1]) {
							cC = cG.push(cD)
						}
					}
					while (cC--) {
						cE.splice(cG[cC], 1)
					}
				}
				return cE
			};
			cl.error = function(cC) {
				throw new Error("Syntax error, unrecognized expression: " + cC)
			};

			function bw(cG, cL) {
				var cD, cH, cJ, cK, cI, cE, cC, cF = cq[cu][cG + " "];
				if (cF) {
					return cL ? 0 : cF.slice(0)
				}
				cI = cG;
				cE = [];
				cC = cg.preFilter;
				while (cI) {
					if (!cD || (cH = bA.exec(cI))) {
						if (cH) {
							cI = cI.slice(cH[0].length) || cI
						}
						cE.push(cJ = [])
					}
					cD = false;
					if ((cH = cc.exec(cI))) {
						cJ.push(cD = new bz(cH.shift()));
						cI = cI.slice(cD.length);
						cD.type = cH[0].replace(co, " ")
					}
					for (cK in cg.filter) {
						if ((cH = cb[cK].exec(cI)) && (!cC[cK] || (cH = cC[cK](cH)))) {
							cJ.push(cD = new bz(cH.shift()));
							cI = cI.slice(cD.length);
							cD.type = cK;
							cD.matches = cH
						}
					}
					if (!cD) {
						break
					}
				}
				return cL ? cI.length : cI ? cl.error(cG) : cq(cG, cE).slice(0)
			}

			function b1(cG, cE, cF) {
				var cC = cE.dir,
					cH = cF && cE.dir === "parentNode",
					cD = bK++;
				return cE.first ? function(cK, cJ, cI) {
					while ((cK = cK[cC])) {
						if (cH || cK.nodeType === 1) {
							return cG(cK, cJ, cI)
						}
					}
				} : function(cL, cK, cJ) {
					if (!cJ) {
						var cI, cM = bW + " " + cD + " ",
							cN = cM + cs;
						while ((cL = cL[cC])) {
							if (cH || cL.nodeType === 1) {
								if ((cI = cL[cu]) === cN) {
									return cL.sizset
								} else {
									if (typeof cI === "string" && cI.indexOf(cM) === 0) {
										if (cL.sizset) {
											return cL
										}
									} else {
										cL[cu] = cN;
										if (cG(cL, cK, cJ)) {
											cL.sizset = true;
											return cL
										}
										cL.sizset = false
									}
								}
							}
						}
					} else {
						while ((cL = cL[cC])) {
							if (cH || cL.nodeType === 1) {
								if (cG(cL, cK, cJ)) {
									return cL
								}
							}
						}
					}
				}
			}

			function bJ(cC) {
				return cC.length > 1 ? function(cG, cF, cD) {
					var cE = cC.length;
					while (cE--) {
						if (!cC[cE](cG, cF, cD)) {
							return false
						}
					}
					return true
				} : cC[0]
			}

			function b0(cC, cD, cE, cF, cI) {
				var cG, cL = [],
					cH = 0,
					cJ = cC.length,
					cK = cD != null;
				for (; cH < cJ; cH++) {
					if ((cG = cC[cH])) {
						if (!cE || cE(cG, cF, cI)) {
							cL.push(cG);
							if (cK) {
								cD.push(cH)
							}
						}
					}
				}
				return cL
			}

			function cx(cE, cD, cG, cF, cH, cC) {
				if (cF && !cF[cu]) {
					cF = cx(cF)
				}
				if (cH && !cH[cu]) {
					cH = cx(cH, cC)
				}
				return cw(function(cS, cP, cK, cR) {
					var cU, cQ, cM, cL = [],
						cT = [],
						cJ = cP.length,
						cI = cS || bU(cD || "*", cK.nodeType ? [cK] : cK, []),
						cN = cE && (cS || !cD) ? b0(cI, cL, cE, cK, cR) : cI,
						cO = cG ? cH || (cS ? cE : cJ || cF) ? [] : cP : cN;
					if (cG) {
						cG(cN, cO, cK, cR)
					}
					if (cF) {
						cU = b0(cO, cT);
						cF(cU, [], cK, cR);
						cQ = cU.length;
						while (cQ--) {
							if ((cM = cU[cQ])) {
								cO[cT[cQ]] = !(cN[cT[cQ]] = cM)
							}
						}
					}
					if (cS) {
						if (cH || cE) {
							if (cH) {
								cU = [];
								cQ = cO.length;
								while (cQ--) {
									if ((cM = cO[cQ])) {
										cU.push((cN[cQ] = cM))
									}
								}
								cH(null, (cO = []), cU, cR)
							}
							cQ = cO.length;
							while (cQ--) {
								if ((cM = cO[cQ]) && (cU = cH ? bT.call(cS, cM) : cL[cQ]) > -1) {
									cS[cU] = !(cP[cU] = cM)
								}
							}
						}
					} else {
						cO = b0(cO === cP ? cO.splice(cJ, cO.length) : cO);
						if (cH) {
							cH(null, cP, cO, cR)
						} else {
							cr.apply(cP, cO)
						}
					}
				})
			}

			function b2(cI) {
				var cD, cG, cE, cH = cI.length,
					cL = cg.relative[cI[0].type],
					cM = cL || cg.relative[" "],
					cF = cL ? 1 : 0,
					cJ = b1(function(cN) {
						return cN === cD
					}, cM, true),
					cK = b1(function(cN) {
						return bT.call(cD, cN) > -1
					}, cM, true),
					cC = [function(cP, cO, cN) {
						return (!cL && (cN || cO !== ce)) || ((cD = cO).nodeType ? cJ(cP, cO, cN) : cK(cP, cO, cN))
					}];
				for (; cF < cH; cF++) {
					if ((cG = cg.relative[cI[cF].type])) {
						cC = [b1(bJ(cC), cG)]
					} else {
						cG = cg.filter[cI[cF].type].apply(null, cI[cF].matches);
						if (cG[cu]) {
							cE = ++cF;
							for (; cE < cH; cE++) {
								if (cg.relative[cI[cE].type]) {
									break
								}
							}
							return cx(cF > 1 && bJ(cC), cF > 1 && cI.slice(0, cF - 1).join("").replace(co, "$1"), cG, cF < cE && b2(cI.slice(cF, cE)), cE < cH && b2((cI = cI.slice(cE))), cE < cH && cI.join(""))
						}
						cC.push(cG)
					}
				}
				return bJ(cC)
			}

			function bB(cF, cE) {
				var cC = cE.length > 0,
					cG = cF.length > 0,
					cD = function(cQ, cK, cP, cO, cW) {
						var cL, cM, cR, cV = [],
							cU = 0,
							cN = "0",
							cH = cQ && [],
							cS = cW != null,
							cT = ce,
							cJ = cQ || cG && cg.find.TAG("*", cW && cK.parentNode || cK),
							cI = (bW += cT == null ? 1 : Math.E);
						if (cS) {
							ce = cK !== bD && cK;
							cs = cD.el
						}
						for (;
							(cL = cJ[cN]) != null; cN++) {
							if (cG && cL) {
								for (cM = 0;
									(cR = cF[cM]); cM++) {
									if (cR(cL, cK, cP)) {
										cO.push(cL);
										break
									}
								}
								if (cS) {
									bW = cI;
									cs = ++cD.el
								}
							}
							if (cC) {
								if ((cL = !cR && cL)) {
									cU--
								}
								if (cQ) {
									cH.push(cL)
								}
							}
						}
						cU += cN;
						if (cC && cN !== cU) {
							for (cM = 0;
								(cR = cE[cM]); cM++) {
								cR(cH, cV, cK, cP)
							}
							if (cQ) {
								if (cU > 0) {
									while (cN--) {
										if (!(cH[cN] || cV[cN])) {
											cV[cN] = b9.call(cO)
										}
									}
								}
								cV = b0(cV)
							}
							cr.apply(cO, cV);
							if (cS && !cQ && cV.length > 0 && (cU + cE.length) > 1) {
								cl.uniqueSort(cO)
							}
						}
						if (cS) {
							bW = cI;
							ce = cT
						}
						return cH
					};
				cD.el = 0;
				return cC ? cw(cD) : cD
			}
			bI = cl.compile = function(cC, cH) {
				var cE, cD = [],
					cG = [],
					cF = bS[cu][cC + " "];
				if (!cF) {
					if (!cH) {
						cH = bw(cC)
					}
					cE = cH.length;
					while (cE--) {
						cF = b2(cH[cE]);
						if (cF[cu]) {
							cD.push(cF)
						} else {
							cG.push(cF)
						}
					}
					cF = bS(cC, bB(cG, cD))
				}
				return cF
			};

			function bU(cD, cG, cF) {
				var cE = 0,
					cC = cG.length;
				for (; cE < cC; cE++) {
					cl(cD, cG[cE], cF)
				}
				return cF
			}

			function ct(cE, cC, cG, cK, cJ) {
				var cH, cN, cD, cM, cL, cI = bw(cE),
					cF = cI.length;
				if (!cK) {
					if (cI.length === 1) {
						cN = cI[0] = cI[0].slice(0);
						if (cN.length > 2 && (cD = cN[0]).type === "ID" && cC.nodeType === 9 && !cJ && cg.relative[cN[1].type]) {
							cC = cg.find.ID(cD.matches[0].replace(bY, ""), cC, cJ)[0];
							if (!cC) {
								return cG
							}
							cE = cE.slice(cN.shift().length)
						}
						for (cH = cb.POS.test(cE) ? -1 : cN.length - 1; cH >= 0; cH--) {
							cD = cN[cH];
							if (cg.relative[(cM = cD.type)]) {
								break
							}
							if ((cL = cg.find[cM])) {
								if ((cK = cL(cD.matches[0].replace(bY, ""), cm.test(cN[0].type) && cC.parentNode || cC, cJ))) {
									cN.splice(cH, 1);
									cE = cK.length && cN.join("");
									if (!cE) {
										cr.apply(cG, bQ.call(cK, 0));
										return cG
									}
									break
								}
							}
						}
					}
				}
				bI(cE, cI)(cK, cC, cJ, cG, cm.test(cE));
				return cG
			}
			if (bD.querySelectorAll) {
				(function() {
					var cH, cI = ct,
						cG = /'|\\/g,
						cE = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
						cD = [":focus"],
						cC = [":active"],
						cF = bG.matchesSelector || bG.mozMatchesSelector || bG.webkitMatchesSelector || bG.oMatchesSelector || bG.msMatchesSelector;
					cf(function(cJ) {
						cJ.innerHTML = "<select><option selected=''></option></select>";
						if (!cJ.querySelectorAll("[selected]").length) {
							cD.push("\\[" + b3 + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
						}
						if (!cJ.querySelectorAll(":checked").length) {
							cD.push(":checked")
						}
					});
					cf(function(cJ) {
						cJ.innerHTML = "<p test=''></p>";
						if (cJ.querySelectorAll("[test^='']").length) {
							cD.push("[*^$]=" + b3 + "*(?:\"\"|'')")
						}
						cJ.innerHTML = "<input type='hidden'/>";
						if (!cJ.querySelectorAll(":enabled").length) {
							cD.push(":enabled", ":disabled")
						}
					});
					cD = new RegExp(cD.join("|"));
					ct = function(cP, cK, cR, cU, cT) {
						if (!cU && !cT && !cD.test(cP)) {
							var cN, cS, cM = true,
								cJ = cu,
								cL = cK,
								cQ = cK.nodeType === 9 && cP;
							if (cK.nodeType === 1 && cK.nodeName.toLowerCase() !== "object") {
								cN = bw(cP);
								if ((cM = cK.getAttribute("id"))) {
									cJ = cM.replace(cG, "\\$&")
								} else {
									cK.setAttribute("id", cJ)
								}
								cJ = "[id='" + cJ + "'] ";
								cS = cN.length;
								while (cS--) {
									cN[cS] = cJ + cN[cS].join("")
								}
								cL = cm.test(cP) && cK.parentNode || cK;
								cQ = cN.join(",")
							}
							if (cQ) {
								try {
									cr.apply(cR, bQ.call(cL.querySelectorAll(cQ), 0));
									return cR
								} catch (cO) {} finally {
									if (!cM) {
										cK.removeAttribute("id")
									}
								}
							}
						}
						return cI(cP, cK, cR, cU, cT)
					};
					if (cF) {
						cf(function(cK) {
							cH = cF.call(cK, "div");
							try {
								cF.call(cK, "[test!='']:sizzle");
								cC.push("!=", cB)
							} catch (cJ) {}
						});
						cC = new RegExp(cC.join("|"));
						cl.matchesSelector = function(cK, cM) {
							cM = cM.replace(cE, "='$1']");
							if (!bR(cK) && !cC.test(cM) && !cD.test(cM)) {
								try {
									var cJ = cF.call(cK, cM);
									if (cJ || cH || cK.document && cK.document.nodeType !== 11) {
										return cJ
									}
								} catch (cL) {}
							}
							return cl(cM, null, null, [cK]).length > 0
						}
					}
				})()
			}
			cg.pseudos.nth = cg.pseudos.eq;

			function bO() {}
			cg.filters = bO.prototype = cg.pseudos;
			cg.setFilters = new bO();
			cl.attr = C.attr;
			C.find = cl;
			C.expr = cl.selectors;
			C.expr[":"] = C.expr.pseudos;
			C.unique = cl.uniqueSort;
			C.text = cl.getText;
			C.isXMLDoc = cl.isXML;
			C.contains = cl.contains
		})(bd);
		var U = /Until$/,
			ag = /^(?:parents|prev(?:Until|All))/,
			bq = /^.[^:#\[\.,]*$/,
			aQ = C.expr.match.needsContext,
			ao = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};
		C.fn.extend({
			find: function(bu) {
				var by, bv, bA, bB, bz, bx, bw = this;
				if (typeof bu !== "string") {
					return C(bu).filter(function() {
						for (by = 0, bv = bw.length; by < bv; by++) {
							if (C.contains(bw[by], this)) {
								return true
							}
						}
					})
				}
				bx = this.pushStack("", "find", bu);
				for (by = 0, bv = this.length; by < bv; by++) {
					bA = bx.length;
					C.find(bu, this[by], bx);
					if (by > 0) {
						for (bB = bA; bB < bx.length; bB++) {
							for (bz = 0; bz < bA; bz++) {
								if (bx[bz] === bx[bB]) {
									bx.splice(bB--, 1);
									break
								}
							}
						}
					}
				}
				return bx
			},
			has: function(bx) {
				var bw, bv = C(bx, this),
					bu = bv.length;
				return this.filter(function() {
					for (bw = 0; bw < bu; bw++) {
						if (C.contains(this, bv[bw])) {
							return true
						}
					}
				})
			},
			not: function(bu) {
				return this.pushStack(az(this, bu, false), "not", bu)
			},
			filter: function(bu) {
				return this.pushStack(az(this, bu, true), "filter", bu)
			},
			is: function(bu) {
				return !!bu && (typeof bu === "string" ? aQ.test(bu) ? C(bu, this.context).index(this[0]) >= 0 : C.filter(bu, this).length > 0 : this.filter(bu).length > 0)
			},
			closest: function(by, bx) {
				var bz, bw = 0,
					bu = this.length,
					bv = [],
					bA = aQ.test(by) || typeof by !== "string" ? C(by, bx || this.context) : 0;
				for (; bw < bu; bw++) {
					bz = this[bw];
					while (bz && bz.ownerDocument && bz !== bx && bz.nodeType !== 11) {
						if (bA ? bA.index(bz) > -1 : C.find.matchesSelector(bz, by)) {
							bv.push(bz);
							break
						}
						bz = bz.parentNode
					}
				}
				bv = bv.length > 1 ? C.unique(bv) : bv;
				return this.pushStack(bv, "closest", by)
			},
			index: function(bu) {
				if (!bu) {
					return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
				}
				if (typeof bu === "string") {
					return C.inArray(this[0], C(bu))
				}
				return C.inArray(bu.jqx ? bu[0] : bu, this)
			},
			add: function(bu, bv) {
				var bx = typeof bu === "string" ? C(bu, bv) : C.makeArray(bu && bu.nodeType ? [bu] : bu),
					bw = C.merge(this.get(), bx);
				return this.pushStack(x(bx[0]) || x(bw[0]) ? bw : C.unique(bw))
			},
			addBack: function(bu) {
				return this.add(bu == null ? this.prevObject : this.prevObject.filter(bu))
			}
		});
		C.fn.andSelf = C.fn.addBack;

		function x(bu) {
			return !bu || !bu.parentNode || bu.parentNode.nodeType === 11
		}

		function aB(bv, bu) {
			do {
				bv = bv[bu]
			} while (bv && bv.nodeType !== 1);
			return bv
		}
		C.each({
			parent: function(bv) {
				var bu = bv.parentNode;
				return bu && bu.nodeType !== 11 ? bu : null
			},
			parents: function(bu) {
				return C.dir(bu, "parentNode")
			},
			parentsUntil: function(bv, bu, bw) {
				return C.dir(bv, "parentNode", bw)
			},
			next: function(bu) {
				return aB(bu, "nextSibling")
			},
			prev: function(bu) {
				return aB(bu, "previousSibling")
			},
			nextAll: function(bu) {
				return C.dir(bu, "nextSibling")
			},
			prevAll: function(bu) {
				return C.dir(bu, "previousSibling")
			},
			nextUntil: function(bv, bu, bw) {
				return C.dir(bv, "nextSibling", bw)
			},
			prevUntil: function(bv, bu, bw) {
				return C.dir(bv, "previousSibling", bw)
			},
			siblings: function(bu) {
				return C.sibling((bu.parentNode || {}).firstChild, bu)
			},
			children: function(bu) {
				return C.sibling(bu.firstChild)
			},
			contents: function(bu) {
				return C.nodeName(bu, "iframe") ? bu.contentDocument || bu.contentWindow.document : C.merge([], bu.childNodes)
			}
		}, function(bu, bv) {
			C.fn[bu] = function(by, bw) {
				var bx = C.map(this, bv, by);
				if (!U.test(bu)) {
					bw = by
				}
				if (bw && typeof bw === "string") {
					bx = C.filter(bw, bx)
				}
				bx = this.length > 1 && !ao[bu] ? C.unique(bx) : bx;
				if (this.length > 1 && ag.test(bu)) {
					bx = bx.reverse()
				}
				return this.pushStack(bx, bu, aD.call(arguments).join(","))
			}
		});
		C.extend({
			filter: function(bw, bu, bv) {
				if (bv) {
					bw = ":not(" + bw + ")"
				}
				return bu.length === 1 ? C.find.matchesSelector(bu[0], bw) ? [bu[0]] : [] : C.find.matches(bw, bu)
			},
			dir: function(bw, bv, by) {
				var bu = [],
					bx = bw[bv];
				while (bx && bx.nodeType !== 9 && (by === G || bx.nodeType !== 1 || !C(bx).is(by))) {
					if (bx.nodeType === 1) {
						bu.push(bx)
					}
					bx = bx[bv]
				}
				return bu
			},
			sibling: function(bw, bv) {
				var bu = [];
				for (; bw; bw = bw.nextSibling) {
					if (bw.nodeType === 1 && bw !== bv) {
						bu.push(bw)
					}
				}
				return bu
			}
		});

		function az(bx, bw, bu) {
			bw = bw || 0;
			if (C.isFunction(bw)) {
				return C.grep(bx, function(bz, by) {
					var bA = !!bw.call(bz, by, bz);
					return bA === bu
				})
			} else {
				if (bw.nodeType) {
					return C.grep(bx, function(bz, by) {
						return (bz === bw) === bu
					})
				} else {
					if (typeof bw === "string") {
						var bv = C.grep(bx, function(by) {
							return by.nodeType === 1
						});
						if (bq.test(bw)) {
							return C.filter(bw, bv, !bu)
						} else {
							bw = C.filter(bw, bv)
						}
					}
				}
			}
			return C.grep(bx, function(bz, by) {
				return (C.inArray(bz, bw) >= 0) === bu
			})
		}

		function a(bu) {
			var bw = aJ.split("|"),
				bv = bu.createDocumentFragment();
			if (bv.createElement) {
				while (bw.length) {
					bv.createElement(bw.pop())
				}
			}
			return bv
		}
		var aJ = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			aa = / JQXLite\d+="(?:null|\d+)"/g,
			ah = /^\s+/,
			L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			c = /<([\w:]+)/,
			v = /<tbody/i,
			P = /<|&#?\w+;/,
			W = /<(?:script|style|link)/i,
			I = /<(?:script|object|embed|option|style)/i,
			ac = new RegExp("<(?:" + aJ + ")[\\s/>]", "i"),
			R = /^(?:checkbox|radio)$/,
			o = /checked\s*(?:[^=]|=\s*.checked.)/i,
			bp = /\/(java|ecma)script/i,
			aG = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
			am = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				area: [1, "<map>", "</map>"],
				_default: [0, "", ""]
			},
			T = a(ak),
			bg = T.appendChild(ak.createElement("div"));
		am.optgroup = am.option;
		am.tbody = am.tfoot = am.colgroup = am.caption = am.thead;
		am.th = am.td;
		if (!C.support.htmlSerialize) {
			am._default = [1, "X<div>", "</div>"]
		}
		C.fn.extend({
			text: function(bu) {
				return C.access(this, function(bv) {
					return bv === G ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ak).createTextNode(bv))
				}, null, bu, arguments.length)
			},
			wrapAll: function(bu) {
				if (C.isFunction(bu)) {
					return this.each(function(bw) {
						C(this).wrapAll(bu.call(this, bw))
					})
				}
				if (this[0]) {
					var bv = C(bu, this[0].ownerDocument).eq(0).clone(true);
					if (this[0].parentNode) {
						bv.insertBefore(this[0])
					}
					bv.map(function() {
						var bw = this;
						while (bw.firstChild && bw.firstChild.nodeType === 1) {
							bw = bw.firstChild
						}
						return bw
					}).append(this)
				}
				return this
			},
			wrapInner: function(bu) {
				if (C.isFunction(bu)) {
					return this.each(function(bv) {
						C(this).wrapInner(bu.call(this, bv))
					})
				}
				return this.each(function() {
					var bv = C(this),
						bw = bv.contents();
					if (bw.length) {
						bw.wrapAll(bu)
					} else {
						bv.append(bu)
					}
				})
			},
			wrap: function(bu) {
				var bv = C.isFunction(bu);
				return this.each(function(bw) {
					C(this).wrapAll(bv ? bu.call(this, bw) : bu)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					if (!C.nodeName(this, "body")) {
						C(this).replaceWith(this.childNodes)
					}
				}).end()
			},
			append: function() {
				return this.domManip(arguments, true, function(bu) {
					if (this.nodeType === 1 || this.nodeType === 11) {
						this.appendChild(bu)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, true, function(bu) {
					if (this.nodeType === 1 || this.nodeType === 11) {
						this.insertBefore(bu, this.firstChild)
					}
				})
			},
			before: function() {
				if (!x(this[0])) {
					return this.domManip(arguments, false, function(bv) {
						this.parentNode.insertBefore(bv, this)
					})
				}
				if (arguments.length) {
					var bu = C.clean(arguments);
					return this.pushStack(C.merge(bu, this), "before", this.selector)
				}
			},
			after: function() {
				if (!x(this[0])) {
					return this.domManip(arguments, false, function(bv) {
						this.parentNode.insertBefore(bv, this.nextSibling)
					})
				}
				if (arguments.length) {
					var bu = C.clean(arguments);
					return this.pushStack(C.merge(this, bu), "after", this.selector)
				}
			},
			remove: function(bu, bx) {
				var bw, bv = 0;
				for (;
					(bw = this[bv]) != null; bv++) {
					if (!bu || C.filter(bu, [bw]).length) {
						if (!bx && bw.nodeType === 1) {
							C.cleanData(bw.getElementsByTagName("*"));
							C.cleanData([bw])
						}
						if (bw.parentNode) {
							bw.parentNode.removeChild(bw)
						}
					}
				}
				return this
			},
			empty: function() {
				var bv, bu = 0;
				for (;
					(bv = this[bu]) != null; bu++) {
					if (bv.nodeType === 1) {
						C.cleanData(bv.getElementsByTagName("*"))
					}
					while (bv.firstChild) {
						bv.removeChild(bv.firstChild)
					}
				}
				return this
			},
			clone: function(bv, bu) {
				bv = bv == null ? false : bv;
				bu = bu == null ? bv : bu;
				return this.map(function() {
					return C.clone(this, bv, bu)
				})
			},
			html: function(bu) {
				return C.access(this, function(by) {
					var bx = this[0] || {},
						bw = 0,
						bv = this.length;
					if (by === G) {
						return bx.nodeType === 1 ? bx.innerHTML.replace(aa, "") : G
					}
					if (typeof by === "string" && !W.test(by) && (C.support.htmlSerialize || !ac.test(by)) && (C.support.leadingWhitespace || !ah.test(by)) && !am[(c.exec(by) || ["", ""])[1].toLowerCase()]) {
						by = by.replace(L, "<$1></$2>");
						try {
							for (; bw < bv; bw++) {
								bx = this[bw] || {};
								if (bx.nodeType === 1) {
									C.cleanData(bx.getElementsByTagName("*"));
									bx.innerHTML = by
								}
							}
							bx = 0
						} catch (bz) {}
					}
					if (bx) {
						this.empty().append(by)
					}
				}, null, bu, arguments.length)
			},
			replaceWith: function(bu) {
				if (!x(this[0])) {
					if (C.isFunction(bu)) {
						return this.each(function(bx) {
							var bw = C(this),
								bv = bw.html();
							bw.replaceWith(bu.call(this, bx, bv))
						})
					}
					if (typeof bu !== "string") {
						bu = C(bu).detach()
					}
					return this.each(function() {
						var bw = this.nextSibling,
							bv = this.parentNode;
						C(this).remove();
						if (bw) {
							C(bw).before(bu)
						} else {
							C(bv).append(bu)
						}
					})
				}
				return this.length ? this.pushStack(C(C.isFunction(bu) ? bu() : bu), "replaceWith", bu) : this
			},
			detach: function(bu) {
				return this.remove(bu, true)
			},
			domManip: function(bA, bE, bD) {
				bA = [].concat.apply([], bA);
				var bw, by, bz, bC, bx = 0,
					bB = bA[0],
					bv = [],
					bu = this.length;
				if (!C.support.checkClone && bu > 1 && typeof bB === "string" && o.test(bB)) {
					return this.each(function() {
						C(this).domManip(bA, bE, bD)
					})
				}
				if (C.isFunction(bB)) {
					return this.each(function(bG) {
						var bF = C(this);
						bA[0] = bB.call(this, bG, bE ? bF.html() : G);
						bF.domManip(bA, bE, bD)
					})
				}
				if (this[0]) {
					bw = C.buildFragment(bA, this, bv);
					bz = bw.fragment;
					by = bz.firstChild;
					if (bz.childNodes.length === 1) {
						bz = by
					}
					if (by) {
						bE = bE && C.nodeName(by, "tr");
						for (bC = bw.cacheable || bu - 1; bx < bu; bx++) {
							bD.call(bE && C.nodeName(this[bx], "table") ? a3(this[bx], "tbody") : this[bx], bx === bC ? bz : C.clone(bz, true, true))
						}
					}
					bz = by = null;
					if (bv.length) {
						C.each(bv, function(bF, bG) {
							if (bG.src) {
								if (C.ajax) {
									C.ajax({
										url: bG.src,
										type: "GET",
										dataType: "script",
										async: false,
										global: false,
										"throws": true
									})
								} else {
									C.error("no ajax")
								}
							} else {
								C.globalEval((bG.text || bG.textContent || bG.innerHTML || "").replace(aG, ""))
							}
							if (bG.parentNode) {
								bG.parentNode.removeChild(bG)
							}
						})
					}
				}
				return this
			}
		});

		function a3(bv, bu) {
			return bv.getElementsByTagName(bu)[0] || bv.appendChild(bv.ownerDocument.createElement(bu))
		}

		function r(bB, bv) {
			if (bv.nodeType !== 1 || !C.hasData(bB)) {
				return
			}
			var by, bx, bu, bA = C._data(bB),
				bz = C._data(bv, bA),
				bw = bA.events;
			if (bw) {
				delete bz.handle;
				bz.events = {};
				for (by in bw) {
					for (bx = 0, bu = bw[by].length; bx < bu; bx++) {
						C.event.add(bv, by, bw[by][bx])
					}
				}
			}
			if (bz.data) {
				bz.data = C.extend({}, bz.data)
			}
		}

		function ab(bv, bu) {
			var bw;
			if (bu.nodeType !== 1) {
				return
			}
			if (bu.clearAttributes) {
				bu.clearAttributes()
			}
			if (bu.mergeAttributes) {
				bu.mergeAttributes(bv)
			}
			bw = bu.nodeName.toLowerCase();
			if (bw === "object") {
				if (bu.parentNode) {
					bu.outerHTML = bv.outerHTML
				}
				if (C.support.html5Clone && (bv.innerHTML && !C.trim(bu.innerHTML))) {
					bu.innerHTML = bv.innerHTML
				}
			} else {
				if (bw === "input" && R.test(bv.type)) {
					bu.defaultChecked = bu.checked = bv.checked;
					if (bu.value !== bv.value) {
						bu.value = bv.value
					}
				} else {
					if (bw === "option") {
						bu.selected = bv.defaultSelected
					} else {
						if (bw === "input" || bw === "textarea") {
							bu.defaultValue = bv.defaultValue
						} else {
							if (bw === "script" && bu.text !== bv.text) {
								bu.text = bv.text
							}
						}
					}
				}
			}
			bu.removeAttribute(C.expando)
		}
		C.buildFragment = function(bx, by, bv) {
			var bw, bu, bz, bA = bx[0];
			by = by || ak;
			by = !by.nodeType && by[0] || by;
			by = by.ownerDocument || by;
			if (bx.length === 1 && typeof bA === "string" && bA.length < 512 && by === ak && bA.charAt(0) === "<" && !I.test(bA) && (C.support.checkClone || !o.test(bA)) && (C.support.html5Clone || !ac.test(bA))) {
				bu = true;
				bw = C.fragments[bA];
				bz = bw !== G
			}
			if (!bw) {
				bw = by.createDocumentFragment();
				C.clean(bx, by, bw, bv);
				if (bu) {
					C.fragments[bA] = bz && bw
				}
			}
			return {
				fragment: bw,
				cacheable: bu
			}
		};
		C.fragments = {};
		C.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(bu, bv) {
			C.fn[bu] = function(bw) {
				var by, bA = 0,
					bz = [],
					bC = C(bw),
					bx = bC.length,
					bB = this.length === 1 && this[0].parentNode;
				if ((bB == null || bB && bB.nodeType === 11 && bB.childNodes.length === 1) && bx === 1) {
					bC[bv](this[0]);
					return this
				} else {
					for (; bA < bx; bA++) {
						by = (bA > 0 ? this.clone(true) : this).get();
						C(bC[bA])[bv](by);
						bz = bz.concat(by)
					}
					return this.pushStack(bz, bu, bC.selector)
				}
			}
		});

		function bk(bu) {
			if (typeof bu.getElementsByTagName !== "undefined") {
				return bu.getElementsByTagName("*")
			} else {
				if (typeof bu.querySelectorAll !== "undefined") {
					return bu.querySelectorAll("*")
				} else {
					return []
				}
			}
		}

		function al(bu) {
			if (R.test(bu.type)) {
				bu.defaultChecked = bu.checked
			}
		}
		C.extend({
			clone: function(by, bA, bw) {
				var bu, bv, bx, bz;
				if (C.support.html5Clone || C.isXMLDoc(by) || !ac.test("<" + by.nodeName + ">")) {
					bz = by.cloneNode(true)
				} else {
					bg.innerHTML = by.outerHTML;
					bg.removeChild(bz = bg.firstChild)
				}
				if ((!C.support.noCloneEvent || !C.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11) && !C.isXMLDoc(by)) {
					ab(by, bz);
					bu = bk(by);
					bv = bk(bz);
					for (bx = 0; bu[bx]; ++bx) {
						if (bv[bx]) {
							ab(bu[bx], bv[bx])
						}
					}
				}
				if (bA) {
					r(by, bz);
					if (bw) {
						bu = bk(by);
						bv = bk(bz);
						for (bx = 0; bu[bx]; ++bx) {
							r(bu[bx], bv[bx])
						}
					}
				}
				bu = bv = null;
				return bz
			},
			clean: function(bH, bw, bu, bx) {
				var bE, bD, bG, bL, bA, bK, bB, by, bv, bF, bJ, bC, bz = bw === ak && T,
					bI = [];
				if (!bw || typeof bw.createDocumentFragment === "undefined") {
					bw = ak
				}
				for (bE = 0;
					(bG = bH[bE]) != null; bE++) {
					if (typeof bG === "number") {
						bG += ""
					}
					if (!bG) {
						continue
					}
					if (typeof bG === "string") {
						if (!P.test(bG)) {
							bG = bw.createTextNode(bG)
						} else {
							bz = bz || a(bw);
							bB = bw.createElement("div");
							bz.appendChild(bB);
							bG = bG.replace(L, "<$1></$2>");
							bL = (c.exec(bG) || ["", ""])[1].toLowerCase();
							bA = am[bL] || am._default;
							bK = bA[0];
							bB.innerHTML = bA[1] + bG + bA[2];
							while (bK--) {
								bB = bB.lastChild
							}
							if (!C.support.tbody) {
								by = v.test(bG);
								bv = bL === "table" && !by ? bB.firstChild && bB.firstChild.childNodes : bA[1] === "<table>" && !by ? bB.childNodes : [];
								for (bD = bv.length - 1; bD >= 0; --bD) {
									if (C.nodeName(bv[bD], "tbody") && !bv[bD].childNodes.length) {
										bv[bD].parentNode.removeChild(bv[bD])
									}
								}
							}
							if (!C.support.leadingWhitespace && ah.test(bG)) {
								bB.insertBefore(bw.createTextNode(ah.exec(bG)[0]), bB.firstChild)
							}
							bG = bB.childNodes;
							bB.parentNode.removeChild(bB)
						}
					}
					if (bG.nodeType) {
						bI.push(bG)
					} else {
						C.merge(bI, bG)
					}
				}
				if (bB) {
					bG = bB = bz = null
				}
				if (!C.support.appendChecked) {
					for (bE = 0;
						(bG = bI[bE]) != null; bE++) {
						if (C.nodeName(bG, "input")) {
							al(bG)
						} else {
							if (typeof bG.getElementsByTagName !== "undefined") {
								C.grep(bG.getElementsByTagName("input"), al)
							}
						}
					}
				}
				if (bu) {
					bJ = function(bM) {
						if (!bM.type || bp.test(bM.type)) {
							return bx ? bx.push(bM.parentNode ? bM.parentNode.removeChild(bM) : bM) : bu.appendChild(bM)
						}
					};
					for (bE = 0;
						(bG = bI[bE]) != null; bE++) {
						if (!(C.nodeName(bG, "script") && bJ(bG))) {
							bu.appendChild(bG);
							if (typeof bG.getElementsByTagName !== "undefined") {
								bC = C.grep(C.merge([], bG.getElementsByTagName("script")), bJ);
								bI.splice.apply(bI, [bE + 1, 0].concat(bC));
								bE += bC.length
							}
						}
					}
				}
				return bI
			},
			cleanData: function(bv, bD) {
				var by, bw, bx, bC, bz = 0,
					bE = C.expando,
					bu = C.cache,
					bA = C.support.deleteExpando,
					bB = C.event.special;
				for (;
					(bx = bv[bz]) != null; bz++) {
					if (bD || C.acceptData(bx)) {
						bw = bx[bE];
						by = bw && bu[bw];
						if (by) {
							if (by.events) {
								for (bC in by.events) {
									if (bB[bC]) {
										C.event.remove(bx, bC)
									} else {
										C.removeEvent(bx, bC, by.handle)
									}
								}
							}
							if (bu[bw]) {
								delete bu[bw];
								if (bA) {
									delete bx[bE]
								} else {
									if (bx.removeAttribute) {
										bx.removeAttribute(bE)
									} else {
										bx[bE] = null
									}
								}
								C.deletedIds.push(bw)
							}
						}
					}
				}
			}
		});
		(function() {
			var bu, bv;
			C.uaMatch = function(bx) {
				bx = bx.toLowerCase();
				var bw = /(chrome)[ \/]([\w.]+)/.exec(bx) || /(webkit)[ \/]([\w.]+)/.exec(bx) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(bx) || /(msie) ([\w.]+)/.exec(bx) || bx.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(bx) || [];
				return {
					browser: bw[1] || "",
					version: bw[2] || "0"
				}
			};
			bu = C.uaMatch(bt.userAgent);
			bv = {};
			if (bu.browser) {
				bv[bu.browser] = true;
				bv.version = bu.version
			}
			if (bv.chrome) {
				bv.webkit = true
			} else {
				if (bv.webkit) {
					bv.safari = true
				}
			}
			C.browser = bv;
			C.sub = function() {
				function bx(bz, bA) {
					return new bx.fn.init(bz, bA)
				}
				C.extend(true, bx, this);
				bx.superclass = this;
				bx.fn = bx.prototype = this();
				bx.fn.constructor = bx;
				bx.sub = this.sub;
				bx.fn.init = function by(bz, bA) {
					if (bA && bA instanceof C && !(bA instanceof bx)) {
						bA = bx(bA)
					}
					return C.fn.init.call(this, bz, bA, bw)
				};
				bx.fn.init.prototype = bx.fn;
				var bw = bx(ak);
				return bx
			}
		})();
		var Q, bc, l, ad = /alpha\([^)]*\)/i,
			aj = /opacity=([^)]*)/,
			w = /^(top|right|bottom|left)$/,
			ai = /^(none|table(?!-c[ea]).+)/,
			av = /^margin/,
			i = new RegExp("^(" + aE + ")(.*)$", "i"),
			aV = new RegExp("^(" + aE + ")(?!px)[a-z%]+$", "i"),
			E = new RegExp("^([-+])=(" + aE + ")", "i"),
			J = {
				BODY: "block"
			},
			ba = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			aL = {
				letterSpacing: 0,
				fontWeight: 400
			},
			D = ["Top", "Right", "Bottom", "Left"],
			O = ["Webkit", "O", "Moz", "ms"],
			be = C.fn.toggle;

		function a2(bx, bv) {
			if (bv in bx) {
				return bv
			}
			var by = bv.charAt(0).toUpperCase() + bv.slice(1),
				bu = bv,
				bw = O.length;
			while (bw--) {
				bv = O[bw] + by;
				if (bv in bx) {
					return bv
				}
			}
			return bu
		}

		function ap(bv, bu) {
			bv = bu || bv;
			return C.css(bv, "display") === "none" || !C.contains(bv.ownerDocument, bv)
		}

		function bb(bz, bu) {
			var by, bA, bv = [],
				bw = 0,
				bx = bz.length;
			for (; bw < bx; bw++) {
				by = bz[bw];
				if (!by.style) {
					continue
				}
				bv[bw] = C._data(by, "olddisplay");
				if (bu) {
					if (!bv[bw] && by.style.display === "none") {
						by.style.display = ""
					}
					if (by.style.display === "" && ap(by)) {
						bv[bw] = C._data(by, "olddisplay", aN(by.nodeName))
					}
				} else {
					bA = Q(by, "display");
					if (!bv[bw] && bA !== "none") {
						C._data(by, "olddisplay", bA)
					}
				}
			}
			for (bw = 0; bw < bx; bw++) {
				by = bz[bw];
				if (!by.style) {
					continue
				}
				if (!bu || by.style.display === "none" || by.style.display === "") {
					by.style.display = bu ? bv[bw] || "" : "none"
				}
			}
			return bz
		}
		C.fn.extend({
			css: function(bu, bv) {
				return C.access(this, function(bx, bw, by) {
					return by !== G ? C.style(bx, bw, by) : C.css(bx, bw)
				}, bu, bv, arguments.length > 1)
			},
			show: function() {
				return bb(this, true)
			},
			hide: function() {
				return bb(this)
			},
			toggle: function(bw, bv) {
				var bu = typeof bw === "boolean";
				if (C.isFunction(bw) && C.isFunction(bv)) {
					return be.apply(this, arguments)
				}
				return this.each(function() {
					if (bu ? bw : ap(this)) {
						C(this).show()
					} else {
						C(this).hide()
					}
				})
			}
		});
		C.extend({
			cssHooks: {
				opacity: {
					get: function(bw, bv) {
						if (bv) {
							var bu = Q(bw, "opacity");
							return bu === "" ? "1" : bu
						}
					}
				}
			},
			cssNumber: {
				fillOpacity: true,
				fontWeight: true,
				lineHeight: true,
				opacity: true,
				orphans: true,
				widows: true,
				zIndex: true,
				zoom: true
			},
			cssProps: {
				"float": C.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(bw, bv, bC, bx) {
				if (!bw || bw.nodeType === 3 || bw.nodeType === 8 || !bw.style) {
					return
				}
				var bA, bB, bD, by = C.camelCase(bv),
					bu = bw.style;
				bv = C.cssProps[by] || (C.cssProps[by] = a2(bu, by));
				bD = C.cssHooks[bv] || C.cssHooks[by];
				if (bC !== G) {
					bB = typeof bC;
					if (bB === "string" && (bA = E.exec(bC))) {
						bC = (bA[1] + 1) * bA[2] + parseFloat(C.css(bw, bv));
						bB = "number"
					}
					if (bC == null || bB === "number" && isNaN(bC)) {
						return
					}
					if (bB === "number" && !C.cssNumber[by]) {
						bC += "px"
					}
					if (!bD || !("set" in bD) || (bC = bD.set(bw, bC, bx)) !== G) {
						try {
							bu[bv] = bC
						} catch (bz) {}
					}
				} else {
					if (bD && "get" in bD && (bA = bD.get(bw, false, bx)) !== G) {
						return bA
					}
					return bu[bv]
				}
			},
			css: function(bA, by, bz, bv) {
				var bB, bx, bu, bw = C.camelCase(by);
				by = C.cssProps[bw] || (C.cssProps[bw] = a2(bA.style, bw));
				bu = C.cssHooks[by] || C.cssHooks[bw];
				if (bu && "get" in bu) {
					bB = bu.get(bA, true, bv)
				}
				if (bB === G) {
					bB = Q(bA, by)
				}
				if (bB === "normal" && by in aL) {
					bB = aL[by]
				}
				if (bz || bv !== G) {
					bx = parseFloat(bB);
					return bz || C.isNumeric(bx) ? bx || 0 : bB
				}
				return bB
			},
			swap: function(by, bx, bz) {
				var bw, bv, bu = {};
				for (bv in bx) {
					bu[bv] = by.style[bv];
					by.style[bv] = bx[bv]
				}
				bw = bz.call(by);
				for (bv in bx) {
					by.style[bv] = bu[bv]
				}
				return bw
			}
		});
		if (bd.getComputedStyle) {
			Q = function(bB, bv) {
				var bu, by, bx, bA, bz = bd.getComputedStyle(bB, null),
					bw = bB.style;
				if (bz) {
					bu = bz.getPropertyValue(bv) || bz[bv];
					if (bu === "" && !C.contains(bB.ownerDocument, bB)) {
						bu = C.style(bB, bv)
					}
					if (aV.test(bu) && av.test(bv)) {
						by = bw.width;
						bx = bw.minWidth;
						bA = bw.maxWidth;
						bw.minWidth = bw.maxWidth = bw.width = bu;
						bu = bz.width;
						bw.width = by;
						bw.minWidth = bx;
						bw.maxWidth = bA
					}
				}
				return bu
			}
		} else {
			if (ak.documentElement.currentStyle) {
				Q = function(by, bw) {
					var bz, bu, bv = by.currentStyle && by.currentStyle[bw],
						bx = by.style;
					if (bv == null && bx && bx[bw]) {
						bv = bx[bw]
					}
					if (aV.test(bv) && !w.test(bw)) {
						bz = bx.left;
						bu = by.runtimeStyle && by.runtimeStyle.left;
						if (bu) {
							by.runtimeStyle.left = by.currentStyle.left
						}
						bx.left = bw === "fontSize" ? "1em" : bv;
						bv = bx.pixelLeft + "px";
						bx.left = bz;
						if (bu) {
							by.runtimeStyle.left = bu
						}
					}
					return bv === "" ? "auto" : bv
				}
			}
		}

		function aO(bu, bw, bx) {
			var bv = i.exec(bw);
			return bv ? Math.max(0, bv[1] - (bx || 0)) + (bv[2] || "px") : bw
		}

		function aZ(bx, bv, bu, bz) {
			var bw = bu === (bz ? "border" : "content") ? 4 : bv === "width" ? 1 : 0,
				by = 0;
			for (; bw < 4; bw += 2) {
				if (bu === "margin") {
					by += C.css(bx, bu + D[bw], true)
				}
				if (bz) {
					if (bu === "content") {
						by -= parseFloat(Q(bx, "padding" + D[bw])) || 0
					}
					if (bu !== "margin") {
						by -= parseFloat(Q(bx, "border" + D[bw] + "Width")) || 0
					}
				} else {
					by += parseFloat(Q(bx, "padding" + D[bw])) || 0;
					if (bu !== "padding") {
						by += parseFloat(Q(bx, "border" + D[bw] + "Width")) || 0
					}
				}
			}
			return by
		}

		function Y(bx, bv, bu) {
			var by = bv === "width" ? bx.offsetWidth : bx.offsetHeight,
				bw = true,
				bz = C.support.boxSizing && C.css(bx, "boxSizing") === "border-box";
			if (by <= 0 || by == null) {
				by = Q(bx, bv);
				if (by < 0 || by == null) {
					by = bx.style[bv]
				}
				if (aV.test(by)) {
					return by
				}
				bw = bz && (C.support.boxSizingReliable || by === bx.style[bv]);
				by = parseFloat(by) || 0
			}
			return (by + aZ(bx, bv, bu || (bz ? "border" : "content"), bw)) + "px"
		}

		function aN(bw) {
			if (J[bw]) {
				return J[bw]
			}
			var bu = C("<" + bw + ">").appendTo(ak.body),
				bv = bu.css("display");
			bu.remove();
			if (bv === "none" || bv === "") {
				bc = ak.body.appendChild(bc || C.extend(ak.createElement("iframe"), {
					frameBorder: 0,
					width: 0,
					height: 0
				}));
				if (!l || !bc.createElement) {
					l = (bc.contentWindow || bc.contentDocument).document;
					l.write("<!doctype html><html><body>");
					l.close()
				}
				bu = l.body.appendChild(l.createElement(bw));
				bv = Q(bu, "display");
				ak.body.removeChild(bc)
			}
			J[bw] = bv;
			return bv
		}
		C.each(["height", "width"], function(bv, bu) {
			C.cssHooks[bu] = {
				get: function(by, bx, bw) {
					if (bx) {
						if (by.offsetWidth === 0 && ai.test(Q(by, "display"))) {
							return C.swap(by, ba, function() {
								return Y(by, bu, bw)
							})
						} else {
							return Y(by, bu, bw)
						}
					}
				},
				set: function(bx, by, bw) {
					return aO(bx, by, bw ? aZ(bx, bu, bw, C.support.boxSizing && C.css(bx, "boxSizing") === "border-box") : 0)
				}
			}
		});
		if (!C.support.opacity) {
			C.cssHooks.opacity = {
				get: function(bv, bu) {
					return aj.test((bu && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : bu ? "1" : ""
				},
				set: function(by, bz) {
					var bx = by.style,
						bv = by.currentStyle,
						bu = C.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")" : "",
						bw = bv && bv.filter || bx.filter || "";
					bx.zoom = 1;
					if (bz >= 1 && C.trim(bw.replace(ad, "")) === "" && bx.removeAttribute) {
						bx.removeAttribute("filter");
						if (bv && !bv.filter) {
							return
						}
					}
					bx.filter = ad.test(bw) ? bw.replace(ad, bu) : bw + " " + bu
				}
			}
		}
		C(function() {
			if (!C.support.reliableMarginRight) {
				C.cssHooks.marginRight = {
					get: function(bv, bu) {
						return C.swap(bv, {
							display: "inline-block"
						}, function() {
							if (bu) {
								return Q(bv, "marginRight")
							}
						})
					}
				}
			}
			if (!C.support.pixelPosition && C.fn.position) {
				C.each(["top", "left"], function(bu, bv) {
					C.cssHooks[bv] = {
						get: function(by, bx) {
							if (bx) {
								var bw = Q(by, bv);
								return aV.test(bw) ? C(by).position()[bv] + "px" : bw
							}
						}
					}
				})
			}
		});
		if (C.expr && C.expr.filters) {
			C.expr.filters.hidden = function(bu) {
				return (bu.offsetWidth === 0 && bu.offsetHeight === 0) || (!C.support.reliableHiddenOffsets && ((bu.style && bu.style.display) || Q(bu, "display")) === "none")
			};
			C.expr.filters.visible = function(bu) {
				return !C.expr.filters.hidden(bu)
			}
		}
		C.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(bu, bv) {
			C.cssHooks[bu + bv] = {
				expand: function(by) {
					var bx, bz = typeof by === "string" ? by.split(" ") : [by],
						bw = {};
					for (bx = 0; bx < 4; bx++) {
						bw[bu + D[bx] + bv] = bz[bx] || bz[bx - 2] || bz[0]
					}
					return bw
				}
			};
			if (!av.test(bu)) {
				C.cssHooks[bu + bv].set = aO
			}
		});
		var g = /%20/g,
			af = /\[\]$/,
			br = /\r?\n/g,
			aU = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
			p = /^(?:select|textarea)/i;
		C.fn.extend({
			serialize: function() {
				return C.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					return this.elements ? C.makeArray(this.elements) : this
				}).filter(function() {
					return this.name && !this.disabled && (this.checked || p.test(this.nodeName) || aU.test(this.type))
				}).map(function(bu, bv) {
					var bw = C(this).val();
					return bw == null ? null : C.isArray(bw) ? C.map(bw, function(by, bx) {
						return {
							name: bv.name,
							value: by.replace(br, "\r\n")
						}
					}) : {
						name: bv.name,
						value: bw.replace(br, "\r\n")
					}
				}).get()
			}
		});
		C.param = function(bu, bw) {
			var bx, bv = [],
				by = function(bz, bA) {
					bA = C.isFunction(bA) ? bA() : (bA == null ? "" : bA);
					bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA)
				};
			if (bw === G) {
				bw = C.ajaxSettings && C.ajaxSettings.traditional
			}
			if (C.isArray(bu) || (bu.jqx && !C.isPlainObject(bu))) {
				C.each(bu, function() {
					by(this.name, this.value)
				})
			} else {
				for (bx in bu) {
					s(bx, bu[bx], bw, by)
				}
			}
			return bv.join("&").replace(g, "+")
		};

		function s(bw, by, bv, bx) {
			var bu;
			if (C.isArray(by)) {
				C.each(by, function(bA, bz) {
					if (bv || af.test(bw)) {
						bx(bw, bz)
					} else {
						s(bw + "[" + (typeof bz === "object" ? bA : "") + "]", bz, bv, bx)
					}
				})
			} else {
				if (!bv && C.type(by) === "object") {
					for (bu in by) {
						s(bw + "[" + bu + "]", by[bu], bv, bx)
					}
				} else {
					bx(bw, by)
				}
			}
		}
		if (C.support.ajax) {
			C.ajaxTransport(function(bu) {
				if (!bu.crossDomain || C.support.cors) {
					var bv;
					return {
						send: function(bB, bw) {
							var bz, by, bA = bu.xhr();
							if (bu.username) {
								bA.open(bu.type, bu.url, bu.async, bu.username, bu.password)
							} else {
								bA.open(bu.type, bu.url, bu.async)
							}
							if (bu.xhrFields) {
								for (by in bu.xhrFields) {
									bA[by] = bu.xhrFields[by]
								}
							}
							if (bu.mimeType && bA.overrideMimeType) {
								bA.overrideMimeType(bu.mimeType)
							}
							if (!bu.crossDomain && !bB["X-Requested-With"]) {
								bB["X-Requested-With"] = "XMLHttpRequest"
							}
							try {
								for (by in bB) {
									bA.setRequestHeader(by, bB[by])
								}
							} catch (bx) {}
							bA.send((bu.hasContent && bu.data) || null);
							bv = function(bK, bE) {
								var bF, bD, bC, bI, bH;
								try {
									if (bv && (bE || bA.readyState === 4)) {
										bv = G;
										if (bz) {
											bA.onreadystatechange = C.noop;
											if (xhrOnUnloadAbort) {
												delete xhrCallbacks[bz]
											}
										}
										if (bE) {
											if (bA.readyState !== 4) {
												bA.abort()
											}
										} else {
											bF = bA.status;
											bC = bA.getAllResponseHeaders();
											bI = {};
											bH = bA.responseXML;
											if (bH && bH.documentElement) {
												bI.xml = bH
											}
											try {
												bI.text = bA.responseText
											} catch (bJ) {}
											try {
												bD = bA.statusText
											} catch (bJ) {
												bD = ""
											}
											if (!bF && bu.isLocal && !bu.crossDomain) {
												bF = bI.text ? 200 : 404
											} else {
												if (bF === 1223) {
													bF = 204
												}
											}
										}
									}
								} catch (bG) {
									if (!bE) {
										bw(-1, bG)
									}
								}
								if (bI) {
									bw(bF, bD, bI, bC)
								}
							};
							if (!bu.async) {
								bv()
							} else {
								if (bA.readyState === 4) {
									setTimeout(bv, 0)
								} else {
									bz = ++xhrId;
									if (xhrOnUnloadAbort) {
										if (!xhrCallbacks) {
											xhrCallbacks = {};
											C(bd).unload(xhrOnUnloadAbort)
										}
										xhrCallbacks[bz] = bv
									}
									bA.onreadystatechange = bv
								}
							}
						},
						abort: function() {
							if (bv) {
								bv(0, 1)
							}
						}
					}
				}
			})
		}
		var a6, a1, ar = /^(?:toggle|show|hide)$/,
			aM = new RegExp("^(?:([-+])=|)(" + aE + ")([a-z%]*)$", "i"),
			a7 = /queueHooks$/,
			k = [bm],
			H = {
				"*": [function(bu, bB) {
					var bx, bC, bD = this.createTween(bu, bB),
						by = aM.exec(bB),
						bz = bD.cur(),
						bv = +bz || 0,
						bw = 1,
						bA = 20;
					if (by) {
						bx = +by[2];
						bC = by[3] || (C.cssNumber[bu] ? "" : "px");
						if (bC !== "px" && bv) {
							bv = C.css(bD.elem, bu, true) || bx || 1;
							do {
								bw = bw || ".5";
								bv = bv / bw;
								C.style(bD.elem, bu, bv + bC)
							} while (bw !== (bw = bD.cur() / bz) && bw !== 1 && --bA)
						}
						bD.unit = bC;
						bD.start = bv;
						bD.end = by[1] ? bv + (by[1] + 1) * bx : bx
					}
					return bD
				}]
			};

		function bl() {
			setTimeout(function() {
				a6 = G
			}, 0);
			return (a6 = C.now())
		}

		function Z(bv, bu) {
			C.each(bu, function(bA, by) {
				var bz = (H[bA] || []).concat(H["*"]),
					bw = 0,
					bx = bz.length;
				for (; bw < bx; bw++) {
					if (bz[bw].call(bv, bA, by)) {
						return
					}
				}
			})
		}

		function bj(bw, bA, bD) {
			var bE, bz = 0,
				bu = 0,
				bv = k.length,
				bC = C.Deferred().always(function() {
					delete by.elem
				}),
				by = function() {
					var bK = a6 || bl(),
						bH = Math.max(0, bx.startTime + bx.duration - bK),
						bF = bH / bx.duration || 0,
						bJ = 1 - bF,
						bG = 0,
						bI = bx.tweens.length;
					for (; bG < bI; bG++) {
						bx.tweens[bG].run(bJ)
					}
					bC.notifyWith(bw, [bx, bJ, bH]);
					if (bJ < 1 && bI) {
						return bH
					} else {
						bC.resolveWith(bw, [bx]);
						return false
					}
				},
				bx = bC.promise({
					elem: bw,
					props: C.extend({}, bA),
					opts: C.extend(true, {
						specialEasing: {}
					}, bD),
					originalProperties: bA,
					originalOptions: bD,
					startTime: a6 || bl(),
					duration: bD.duration,
					tweens: [],
					createTween: function(bI, bF, bH) {
						var bG = C.Tween(bw, bx.opts, bI, bF, bx.opts.specialEasing[bI] || bx.opts.easing);
						bx.tweens.push(bG);
						return bG
					},
					stop: function(bG) {
						var bF = 0,
							bH = bG ? bx.tweens.length : 0;
						for (; bF < bH; bF++) {
							bx.tweens[bF].run(1)
						}
						if (bG) {
							bC.resolveWith(bw, [bx, bG])
						} else {
							bC.rejectWith(bw, [bx, bG])
						}
						return this
					}
				}),
				bB = bx.props;
			aW(bB, bx.opts.specialEasing);
			for (; bz < bv; bz++) {
				bE = k[bz].call(bx, bw, bB, bx.opts);
				if (bE) {
					return bE
				}
			}
			Z(bx, bB);
			if (C.isFunction(bx.opts.start)) {
				bx.opts.start.call(bw, bx)
			}
			C.fx.timer(C.extend(by, {
				anim: bx,
				queue: bx.opts.queue,
				elem: bw
			}));
			return bx.progress(bx.opts.progress).done(bx.opts.done, bx.opts.complete).fail(bx.opts.fail).always(bx.opts.always)
		}

		function aW(bx, bz) {
			var bw, bv, bA, by, bu;
			for (bw in bx) {
				bv = C.camelCase(bw);
				bA = bz[bv];
				by = bx[bw];
				if (C.isArray(by)) {
					bA = by[1];
					by = bx[bw] = by[0]
				}
				if (bw !== bv) {
					bx[bv] = by;
					delete bx[bw]
				}
				bu = C.cssHooks[bv];
				if (bu && "expand" in bu) {
					by = bu.expand(by);
					delete bx[bv];
					for (bw in by) {
						if (!(bw in bx)) {
							bx[bw] = by[bw];
							bz[bw] = bA
						}
					}
				} else {
					bz[bv] = bA
				}
			}
		}
		C.Animation = C.extend(bj, {
			tweener: function(bv, by) {
				if (C.isFunction(bv)) {
					by = bv;
					bv = ["*"]
				} else {
					bv = bv.split(" ")
				}
				var bx, bu = 0,
					bw = bv.length;
				for (; bu < bw; bu++) {
					bx = bv[bu];
					H[bx] = H[bx] || [];
					H[bx].unshift(by)
				}
			},
			prefilter: function(bv, bu) {
				if (bu) {
					k.unshift(bv)
				} else {
					k.push(bv)
				}
			}
		});

		function bm(by, bE, bu) {
			var bD, bw, bG, bx, bK, bA, bJ, bI, bH, bz = this,
				bv = by.style,
				bF = {},
				bC = [],
				bB = by.nodeType && ap(by);
			if (!bu.queue) {
				bI = C._queueHooks(by, "fx");
				if (bI.unqueued == null) {
					bI.unqueued = 0;
					bH = bI.empty.fire;
					bI.empty.fire = function() {
						if (!bI.unqueued) {
							bH()
						}
					}
				}
				bI.unqueued++;
				bz.always(function() {
					bz.always(function() {
						bI.unqueued--;
						if (!C.queue(by, "fx").length) {
							bI.empty.fire()
						}
					})
				})
			}
			if (by.nodeType === 1 && ("height" in bE || "width" in bE)) {
				bu.overflow = [bv.overflow, bv.overflowX, bv.overflowY];
				if (C.css(by, "display") === "inline" && C.css(by, "float") === "none") {
					if (!C.support.inlineBlockNeedsLayout || aN(by.nodeName) === "inline") {
						bv.display = "inline-block"
					} else {
						bv.zoom = 1
					}
				}
			}
			if (bu.overflow) {
				bv.overflow = "hidden";
				if (!C.support.shrinkWrapBlocks) {
					bz.done(function() {
						bv.overflow = bu.overflow[0];
						bv.overflowX = bu.overflow[1];
						bv.overflowY = bu.overflow[2]
					})
				}
			}
			for (bD in bE) {
				bG = bE[bD];
				if (ar.exec(bG)) {
					delete bE[bD];
					bA = bA || bG === "toggle";
					if (bG === (bB ? "hide" : "show")) {
						continue
					}
					bC.push(bD)
				}
			}
			bx = bC.length;
			if (bx) {
				bK = C._data(by, "fxshow") || C._data(by, "fxshow", {});
				if ("hidden" in bK) {
					bB = bK.hidden
				}
				if (bA) {
					bK.hidden = !bB
				}
				if (bB) {
					C(by).show()
				} else {
					bz.done(function() {
						C(by).hide()
					})
				}
				bz.done(function() {
					var bL;
					C.removeData(by, "fxshow", true);
					for (bL in bF) {
						C.style(by, bL, bF[bL])
					}
				});
				for (bD = 0; bD < bx; bD++) {
					bw = bC[bD];
					bJ = bz.createTween(bw, bB ? bK[bw] : 0);
					bF[bw] = bK[bw] || C.style(by, bw);
					if (!(bw in bK)) {
						bK[bw] = bJ.start;
						if (bB) {
							bJ.end = bJ.start;
							bJ.start = bw === "width" || bw === "height" ? 1 : 0
						}
					}
				}
			}
		}

		function u(bw, bv, by, bu, bx) {
			return new u.prototype.init(bw, bv, by, bu, bx)
		}
		C.Tween = u;
		u.prototype = {
			constructor: u,
			init: function(bx, bv, bz, bu, by, bw) {
				this.elem = bx;
				this.prop = bz;
				this.easing = by || "swing";
				this.options = bv;
				this.start = this.now = this.cur();
				this.end = bu;
				this.unit = bw || (C.cssNumber[bz] ? "" : "px")
			},
			cur: function() {
				var bu = u.propHooks[this.prop];
				return bu && bu.get ? bu.get(this) : u.propHooks._default.get(this)
			},
			run: function(bw) {
				var bv, bu = u.propHooks[this.prop];
				if (this.options.duration) {
					this.pos = bv = C.easing[this.easing](bw, this.options.duration * bw, 0, 1, this.options.duration)
				} else {
					this.pos = bv = bw
				}
				this.now = (this.end - this.start) * bv + this.start;
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this)
				}
				if (bu && bu.set) {
					bu.set(this)
				} else {
					u.propHooks._default.set(this)
				}
				return this
			}
		};
		u.prototype.init.prototype = u.prototype;
		u.propHooks = {
			_default: {
				get: function(bv) {
					var bu;
					if (bv.elem[bv.prop] != null && (!bv.elem.style || bv.elem.style[bv.prop] == null)) {
						return bv.elem[bv.prop]
					}
					bu = C.css(bv.elem, bv.prop, false, "");
					return !bu || bu === "auto" ? 0 : bu
				},
				set: function(bu) {
					if (C.fx.step[bu.prop]) {
						C.fx.step[bu.prop](bu)
					} else {
						if (bu.elem.style && (bu.elem.style[C.cssProps[bu.prop]] != null || C.cssHooks[bu.prop])) {
							C.style(bu.elem, bu.prop, bu.now + bu.unit)
						} else {
							bu.elem[bu.prop] = bu.now
						}
					}
				}
			}
		};
		u.propHooks.scrollTop = u.propHooks.scrollLeft = {
			set: function(bu) {
				if (bu.elem.nodeType && bu.elem.parentNode) {
					bu.elem[bu.prop] = bu.now
				}
			}
		};
		C.each(["toggle", "show", "hide"], function(bv, bu) {
			var bw = C.fn[bu];
			C.fn[bu] = function(bx, bz, by) {
				return bx == null || typeof bx === "boolean" || (!bv && C.isFunction(bx) && C.isFunction(bz)) ? bw.apply(this, arguments) : this.animate(aY(bu, true), bx, bz, by)
			}
		});
		C.fn.extend({
			fadeTo: function(bu, bx, bw, bv) {
				return this.filter(ap).css("opacity", 0).show().end().animate({
					opacity: bx
				}, bu, bw, bv)
			},
			animate: function(bA, bx, bz, by) {
				var bw = C.isEmptyObject(bA),
					bu = C.speed(bx, bz, by),
					bv = function() {
						var bB = bj(this, C.extend({}, bA), bu);
						if (bw) {
							bB.stop(true)
						}
					};
				return bw || bu.queue === false ? this.each(bv) : this.queue(bu.queue, bv)
			},
			stop: function(bw, bv, bu) {
				var bx = function(by) {
					var bz = by.stop;
					delete by.stop;
					bz(bu)
				};
				if (typeof bw !== "string") {
					bu = bv;
					bv = bw;
					bw = G
				}
				if (bv && bw !== false) {
					this.queue(bw || "fx", [])
				}
				return this.each(function() {
					var bB = true,
						by = bw != null && bw + "queueHooks",
						bA = C.timers,
						bz = C._data(this);
					if (by) {
						if (bz[by] && bz[by].stop) {
							bx(bz[by])
						}
					} else {
						for (by in bz) {
							if (bz[by] && bz[by].stop && a7.test(by)) {
								bx(bz[by])
							}
						}
					}
					for (by = bA.length; by--;) {
						if (bA[by].elem === this && (bw == null || bA[by].queue === bw)) {
							bA[by].anim.stop(bu);
							bB = false;
							bA.splice(by, 1)
						}
					}
					if (bB || !bu) {
						C.dequeue(this, bw)
					}
				})
			}
		});

		function aY(bw, by) {
			var bx, bu = {
					height: bw
				},
				bv = 0;
			by = by ? 1 : 0;
			for (; bv < 4; bv += 2 - by) {
				bx = D[bv];
				bu["margin" + bx] = bu["padding" + bx] = bw
			}
			if (by) {
				bu.opacity = bu.width = bw
			}
			return bu
		}
		C.each({
			slideDown: aY("show"),
			slideUp: aY("hide"),
			slideToggle: aY("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(bu, bv) {
			C.fn[bu] = function(bw, by, bx) {
				return this.animate(bv, bw, by, bx)
			}
		});
		C.speed = function(bw, bx, bv) {
			var bu = bw && typeof bw === "object" ? C.extend({}, bw) : {
				complete: bv || !bv && bx || C.isFunction(bw) && bw,
				duration: bw,
				easing: bv && bx || bx && !C.isFunction(bx) && bx
			};
			bu.duration = C.fx.off ? 0 : typeof bu.duration === "number" ? bu.duration : bu.duration in C.fx.speeds ? C.fx.speeds[bu.duration] : C.fx.speeds._default;
			if (bu.queue == null || bu.queue === true) {
				bu.queue = "fx"
			}
			bu.old = bu.complete;
			bu.complete = function() {
				if (C.isFunction(bu.old)) {
					bu.old.call(this)
				}
				if (bu.queue) {
					C.dequeue(this, bu.queue)
				}
			};
			return bu
		};
		C.easing = {
			linear: function(bu) {
				return bu
			},
			swing: function(bu) {
				return 0.5 - Math.cos(bu * Math.PI) / 2
			}
		};
		C.timers = [];
		C.fx = u.prototype.init;
		C.fx.tick = function() {
			var bw, bv = C.timers,
				bu = 0;
			a6 = C.now();
			for (; bu < bv.length; bu++) {
				bw = bv[bu];
				if (!bw() && bv[bu] === bw) {
					bv.splice(bu--, 1)
				}
			}
			if (!bv.length) {
				C.fx.stop()
			}
			a6 = G
		};
		C.fx.timer = function(bu) {
			if (bu() && C.timers.push(bu) && !a1) {
				a1 = setInterval(C.fx.tick, C.fx.interval)
			}
		};
		C.fx.interval = 13;
		C.fx.stop = function() {
			clearInterval(a1);
			a1 = null
		};
		C.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		};
		C.fx.step = {};
		if (C.expr && C.expr.filters) {
			C.expr.filters.animated = function(bu) {
				return C.grep(C.timers, function(bv) {
					return bu === bv.elem
				}).length
			}
		}
		var V = /^(?:body|html)$/i;
		C.fn.offset = function(bE) {
			if (arguments.length) {
				return bE === G ? this : this.each(function(bF) {
					C.offset.setOffset(this, bE, bF)
				})
			}
			var bv, bA, bB, by, bC, bu, bx, bz = {
					top: 0,
					left: 0
				},
				bw = this[0],
				bD = bw && bw.ownerDocument;
			if (!bD) {
				return
			}
			if ((bA = bD.body) === bw) {
				return C.offset.bodyOffset(bw)
			}
			bv = bD.documentElement;
			if (!C.contains(bv, bw)) {
				return bz
			}
			if (typeof bw.getBoundingClientRect !== "undefined") {
				bz = bw.getBoundingClientRect()
			}
			bB = aC(bD);
			by = bv.clientTop || bA.clientTop || 0;
			bC = bv.clientLeft || bA.clientLeft || 0;
			bu = bB.pageYOffset || bv.scrollTop;
			bx = bB.pageXOffset || bv.scrollLeft;
			return {
				top: bz.top + bu - by,
				left: bz.left + bx - bC
			}
		};
		C.offset = {
			bodyOffset: function(bu) {
				var bw = bu.offsetTop,
					bv = bu.offsetLeft;
				if (C.support.doesNotIncludeMarginInBodyOffset) {
					bw += parseFloat(C.css(bu, "marginTop")) || 0;
					bv += parseFloat(C.css(bu, "marginLeft")) || 0
				}
				return {
					top: bw,
					left: bv
				}
			},
			setOffset: function(bx, bG, bA) {
				var bB = C.css(bx, "position");
				if (bB === "static") {
					bx.style.position = "relative"
				}
				var bz = C(bx),
					bv = bz.offset(),
					bu = C.css(bx, "top"),
					bE = C.css(bx, "left"),
					bF = (bB === "absolute" || bB === "fixed") && C.inArray("auto", [bu, bE]) > -1,
					bD = {},
					bC = {},
					bw, by;
				if (bF) {
					bC = bz.position();
					bw = bC.top;
					by = bC.left
				} else {
					bw = parseFloat(bu) || 0;
					by = parseFloat(bE) || 0
				}
				if (C.isFunction(bG)) {
					bG = bG.call(bx, bA, bv)
				}
				if (bG.top != null) {
					bD.top = (bG.top - bv.top) + bw
				}
				if (bG.left != null) {
					bD.left = (bG.left - bv.left) + by
				}
				if ("using" in bG) {
					bG.using.call(bx, bD)
				} else {
					bz.css(bD)
				}
			}
		};
		C.fn.extend({
			isRendered: function() {
				var bv = this;
				var bu = this[0];
				if (bu.parentNode == null || (bu.offsetWidth === 0 || bu.offsetHeight === 0)) {
					return false
				}
				return true
			},
			getSizeFromStyle: function() {
				var by = this;
				var bx = null;
				var bu = null;
				var bw = this[0];
				var bv;
				if (bw.style.width) {
					bx = bw.style.width
				}
				if (bw.style.height) {
					bu = bw.style.height
				}
				if (bd.getComputedStyle) {
					bv = getComputedStyle(bw, null)
				} else {
					bv = bw.currentStyle
				}
				if (bv) {
					if (bv.width) {
						bx = bv.width
					}
					if (bv.height) {
						bu = bv.height
					}
				}
				if (bx === "0px") {
					bx = 0
				}
				if (bu === "0px") {
					bu = 0
				}
				if (bx === null) {
					bx = 0
				}
				if (bu === null) {
					bu = 0
				}
				return {
					width: bx,
					height: bu
				}
			},
			initAnimate: function() {},
			sizeStyleChanged: function(bx) {
				var bw = this;
				var by;
				var bu = function(bz) {
					var bA = by;
					if (bz && bz[0] && bz[0].attributeName === "style" && bz[0].type === "attributes") {
						if (bA.element.offsetWidth !== bA.offsetWidth || bA.element.offsetHeight !== bA.offsetHeight) {
							bA.offsetWidth = bA.element.offsetWidth;
							bA.offsetHeight = bA.element.offsetHeight;
							if (bw.isRendered()) {
								bA.callback()
							}
						}
					}
				};
				by = {
					element: bw[0],
					offsetWidth: bw[0].offsetWidth,
					offsetHeight: bw[0].offsetHeight,
					callback: bx
				};
				try {
					if (!bw.elementStyleObserver) {
						bw.elementStyleObserver = new MutationObserver(bu);
						bw.elementStyleObserver.observe(bw[0], {
							attributes: true,
							childList: false,
							characterData: false
						})
					}
				} catch (bv) {}
			},
			position: function() {
				if (!this[0]) {
					return
				}
				var bw = this[0],
					bv = this.offsetParent(),
					bx = this.offset(),
					bu = V.test(bv[0].nodeName) ? {
						top: 0,
						left: 0
					} : bv.offset();
				bx.top -= parseFloat(C.css(bw, "marginTop")) || 0;
				bx.left -= parseFloat(C.css(bw, "marginLeft")) || 0;
				bu.top += parseFloat(C.css(bv[0], "borderTopWidth")) || 0;
				bu.left += parseFloat(C.css(bv[0], "borderLeftWidth")) || 0;
				return {
					top: bx.top - bu.top,
					left: bx.left - bu.left
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var bu = this.offsetParent || ak.body;
					while (bu && (!V.test(bu.nodeName) && C.css(bu, "position") === "static")) {
						bu = bu.offsetParent
					}
					return bu || ak.body
				})
			}
		});
		C.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(bw, bv) {
			var bu = /Y/.test(bv);
			C.fn[bw] = function(bx) {
				return C.access(this, function(by, bB, bA) {
					var bz = aC(by);
					if (bA === G) {
						return bz ? (bv in bz) ? bz[bv] : bz.document.documentElement[bB] : by[bB]
					}
					if (bz) {
						bz.scrollTo(!bu ? bA : C(bz).scrollLeft(), bu ? bA : C(bz).scrollTop())
					} else {
						by[bB] = bA
					}
				}, bw, bx, arguments.length, null)
			}
		});

		function aC(bu) {
			return C.isWindow(bu) ? bu : bu.nodeType === 9 ? bu.defaultView || bu.parentWindow : false
		}
		C.each({
			Height: "height",
			Width: "width"
		}, function(bu, bv) {
			C.each({
				padding: "inner" + bu,
				content: bv,
				"": "outer" + bu
			}, function(bw, bx) {
				C.fn[bx] = function(bB, bA) {
					var bz = arguments.length && (bw || typeof bB !== "boolean"),
						by = bw || (bB === true || bA === true ? "margin" : "border");
					return C.access(this, function(bD, bC, bE) {
						var bF;
						if (C.isWindow(bD)) {
							return bD.document.documentElement["client" + bu]
						}
						if (bD.nodeType === 9) {
							bF = bD.documentElement;
							return Math.max(bD.body["scroll" + bu], bF["scroll" + bu], bD.body["offset" + bu], bF["offset" + bu], bF["client" + bu])
						}
						return bE === G ? C.css(bD, bC, bE, by) : C.style(bD, bC, bE, by)
					}, bv, bz ? bB : G, bz, null)
				}
			})
		});
		bd.JQXLite = bd.jqxHelper = C;
		if (typeof define === "function" && define.amd && define.amd.JQXLite) {
			define("jqx", [], function() {
				return C
			})
		}
	})(window)
}(function(a) {
	if (a.jqxCore) {
		a.$$ = a.minQuery = a.JQXLite;
		if (!a.$) {
			a.$ = a.minQuery
		}
		return
	}
	if (a.jQuery) {
		a.minQuery = a.JQXLite = a.jQuery;
		return
	}
	if (!a.$) {
		a.$ = a.minQuery = a.JQXLite
	} else {
		a.minQuery = a.JQXLite = a.$
	}
})(window);
JQXLite.generateID = function() {
	var a = function() {
		return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
	};
	var b = "";
	do {
		b = "jqx" + a() + a() + a()
	} while ($("#" + b).length > 0);
	return b
};
var jqxBaseFramework = window.jqxBaseFramework = window.minQuery || window.jQuery;
(function(b) {
	b.jqx = b.jqx || {};
	window.jqx = b.jqx;
	var a = {
		createInstance: function(c, e, g) {
			if (e == "jqxDataAdapter") {
				var f = g[0];
				var d = g[1] || {};
				return new b.jqx.dataAdapter(f, d)
			}
			b(c)[e](g || {});
			return b(c)[e]("getInstance")
		}
	};
	window.jqwidgets = a;
	b.jqx.define = function(c, d, e) {
		c[d] = function() {
			if (this.baseType) {
				this.base = new c[this.baseType]();
				this.base.defineInstance()
			}
			this.defineInstance();
			this.metaInfo()
		};
		c[d].prototype.defineInstance = function() {};
		c[d].prototype.metaInfo = function() {};
		c[d].prototype.base = null;
		c[d].prototype.baseType = undefined;
		if (e && c[e]) {
			c[d].prototype.baseType = e
		}
	};
	b.jqx.invoke = function(f, e) {
		if (e.length == 0) {
			return
		}
		var g = typeof(e) == Array || e.length > 0 ? e[0] : e;
		var d = typeof(e) == Array || e.length > 1 ? Array.prototype.slice.call(e, 1) : b({}).toArray();
		while (f[g] == undefined && f.base != null) {
			if (f[g] != undefined && b.isFunction(f[g])) {
				return f[g].apply(f, d)
			}
			if (typeof g == "string") {
				var c = g.toLowerCase();
				if (f[c] != undefined && b.isFunction(f[c])) {
					return f[c].apply(f, d)
				}
			}
			f = f.base
		}
		if (f[g] != undefined && b.isFunction(f[g])) {
			return f[g].apply(f, d)
		}
		if (typeof g == "string") {
			var c = g.toLowerCase();
			if (f[c] != undefined && b.isFunction(f[c])) {
				return f[c].apply(f, d)
			}
		}
		return
	};
	b.jqx.getByPriority = function(c) {
		var e = undefined;
		for (var d = 0; d < c.length && e == undefined; d++) {
			if (e == undefined && c[d] != undefined) {
				e = c[d]
			}
		}
		return e
	};
	b.jqx.hasProperty = function(d, c) {
		if (typeof(c) == "object") {
			for (var f in c) {
				var e = d;
				while (e) {
					if (e.hasOwnProperty(f)) {
						return true
					}
					if (e.hasOwnProperty(f.toLowerCase())) {
						return true
					}
					e = e.base
				}
				return false
			}
		} else {
			while (d) {
				if (d.hasOwnProperty(c)) {
					return true
				}
				if (d.hasOwnProperty(c.toLowerCase())) {
					return true
				}
				d = d.base
			}
		}
		return false
	};
	b.jqx.hasFunction = function(f, e) {
		if (e.length == 0) {
			return false
		}
		if (f == undefined) {
			return false
		}
		var g = typeof(e) == Array || e.length > 0 ? e[0] : e;
		var d = typeof(e) == Array || e.length > 1 ? Array.prototype.slice.call(e, 1) : {};
		while (f[g] == undefined && f.base != null) {
			if (f[g] && b.isFunction(f[g])) {
				return true
			}
			if (typeof g == "string") {
				var c = g.toLowerCase();
				if (f[c] && b.isFunction(f[c])) {
					return true
				}
			}
			f = f.base
		}
		if (f[g] && b.isFunction(f[g])) {
			return true
		}
		if (typeof g == "string") {
			var c = g.toLowerCase();
			if (f[c] && b.isFunction(f[c])) {
				return true
			}
		}
		return false
	};
	b.jqx.isPropertySetter = function(d, c) {
		if (c.length == 1 && typeof(c[0]) == "object") {
			return true
		}
		if (c.length == 2 && typeof(c[0]) == "string" && !b.jqx.hasFunction(d, c)) {
			return true
		}
		return false
	};
	b.jqx.validatePropertySetter = function(g, e, c) {
		if (!b.jqx.propertySetterValidation) {
			return true
		}
		if (e.length == 1 && typeof(e[0]) == "object") {
			for (var f in e[0]) {
				var h = g;
				while (!h.hasOwnProperty(f) && h.base) {
					h = h.base
				}
				if (!h || !h.hasOwnProperty(f)) {
					if (!c) {
						var d = h.hasOwnProperty(f.toString().toLowerCase());
						if (!d) {
							throw "Invalid property: " + f
						} else {
							return true
						}
					}
					return false
				}
			}
			return true
		}
		if (e.length != 2) {
			if (!c) {
				throw "Invalid property: " + e.length >= 0 ? e[0] : ""
			}
			return false
		}
		while (!g.hasOwnProperty(e[0]) && g.base) {
			g = g.base
		}
		if (!g || !g.hasOwnProperty(e[0])) {
			if (!c) {
				throw "Invalid property: " + e[0]
			}
			return false
		}
		return true
	};
	if (!Object.keys) {
		Object.keys = (function() {
			var e = Object.prototype.hasOwnProperty,
				f = !({
					toString: null
				}).propertyIsEnumerable("toString"),
				d = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				c = d.length;
			return function(j) {
				if (typeof j !== "object" && (typeof j !== "function" || j === null)) {
					throw new TypeError("Object.keys called on non-object")
				}
				var g = [],
					k, h;
				for (k in j) {
					if (e.call(j, k)) {
						g.push(k)
					}
				}
				if (f) {
					for (h = 0; h < c; h++) {
						if (e.call(j, d[h])) {
							g.push(d[h])
						}
					}
				}
				return g
			}
		}())
	}
	b.jqx.set = function(f, i) {
		var d = 0;
		if (i.length == 1 && typeof(i[0]) == "object") {
			if (f.isInitialized && Object.keys && Object.keys(i[0]).length > 1) {
				var g = !f.base ? f.element : f.base.element;
				var c = b.data(g, f.widgetName).initArgs;
				if (c && JSON && JSON.stringify && i[0] && c[0]) {
					try {
						if (JSON.stringify(i[0]) == JSON.stringify(c[0])) {
							var h = true;
							b.each(i[0], function(l, m) {
								if (f[l] != m) {
									h = false;
									return false
								}
							});
							if (h) {
								return
							}
						}
					} catch (e) {}
				}
				f.batchUpdate = i[0];
				var j = {};
				var k = {};
				b.each(i[0], function(l, m) {
					var n = f;
					while (!n.hasOwnProperty(l) && n.base != null) {
						n = n.base
					}
					if (n.hasOwnProperty(l)) {
						if (f[l] != m) {
							j[l] = f[l];
							k[l] = m;
							d++
						}
					} else {
						if (n.hasOwnProperty(l.toLowerCase())) {
							if (f[l.toLowerCase()] != m) {
								j[l.toLowerCase()] = f[l.toLowerCase()];
								k[l.toLowerCase()] = m;
								d++
							}
						}
					}
				});
				if (d < 2) {
					f.batchUpdate = null
				}
			}
			b.each(i[0], function(l, m) {
				var n = f;
				while (!n.hasOwnProperty(l) && n.base != null) {
					n = n.base
				}
				if (n.hasOwnProperty(l)) {
					b.jqx.setvalueraiseevent(n, l, m)
				} else {
					if (n.hasOwnProperty(l.toLowerCase())) {
						b.jqx.setvalueraiseevent(n, l.toLowerCase(), m)
					} else {
						if (b.jqx.propertySetterValidation) {
							throw "jqxCore: invalid property '" + l + "'"
						}
					}
				}
			});
			if (f.batchUpdate != null) {
				f.batchUpdate = null;
				if (f.propertiesChangedHandler && d > 1) {
					f.propertiesChangedHandler(f, j, k)
				}
			}
		} else {
			if (i.length == 2) {
				while (!f.hasOwnProperty(i[0]) && f.base) {
					f = f.base
				}
				if (f.hasOwnProperty(i[0])) {
					b.jqx.setvalueraiseevent(f, i[0], i[1])
				} else {
					if (f.hasOwnProperty(i[0].toLowerCase())) {
						b.jqx.setvalueraiseevent(f, i[0].toLowerCase(), i[1])
					} else {
						if (b.jqx.propertySetterValidation) {
							throw "jqxCore: invalid property '" + i[0] + "'"
						}
					}
				}
			}
		}
	};
	b.jqx.setvalueraiseevent = function(d, e, f) {
		var c = d[e];
		d[e] = f;
		if (!d.isInitialized) {
			return
		}
		if (d.propertyChangedHandler != undefined) {
			d.propertyChangedHandler(d, e, c, f)
		}
		if (d.propertyChangeMap != undefined && d.propertyChangeMap[e] != undefined) {
			d.propertyChangeMap[e](d, e, c, f)
		}
	};
	b.jqx.get = function(f, e) {
		if (e == undefined || e == null) {
			return undefined
		}
		if (f.propertyMap) {
			var d = f.propertyMap(e);
			if (d != null) {
				return d
			}
		}
		if (f.hasOwnProperty(e)) {
			return f[e]
		}
		if (f.hasOwnProperty(e.toLowerCase())) {
			return f[e.toLowerCase()]
		}
		var c = undefined;
		if (typeof(e) == Array) {
			if (e.length != 1) {
				return undefined
			}
			c = e[0]
		} else {
			if (typeof(e) == "string") {
				c = e
			}
		}
		while (!f.hasOwnProperty(c) && f.base) {
			f = f.base
		}
		if (f) {
			return f[c]
		}
		return undefined
	};
	b.jqx.serialize = function(f) {
		var c = "";
		if (b.isArray(f)) {
			c = "[";
			for (var e = 0; e < f.length; e++) {
				if (e > 0) {
					c += ", "
				}
				c += b.jqx.serialize(f[e])
			}
			c += "]"
		} else {
			if (typeof(f) == "object") {
				c = "{";
				var d = 0;
				for (var e in f) {
					if (d++ > 0) {
						c += ", "
					}
					c += e + ": " + b.jqx.serialize(f[e])
				}
				c += "}"
			} else {
				c = f.toString()
			}
		}
		return c
	};
	b.jqx.propertySetterValidation = true;
	b.jqx.jqxWidgetProxy = function(h, d, c) {
		var e = b(d);
		var g = b.data(d, h);
		if (g == undefined) {
			return undefined
		}
		var f = g.instance;
		if (b.jqx.hasFunction(f, c)) {
			return b.jqx.invoke(f, c)
		}
		if (b.jqx.isPropertySetter(f, c)) {
			if (b.jqx.validatePropertySetter(f, c)) {
				b.jqx.set(f, c);
				return undefined
			}
		} else {
			if (typeof(c) == "object" && c.length == 0) {
				return
			} else {
				if (typeof(c) == "object" && c.length == 1 && b.jqx.hasProperty(f, c[0])) {
					return b.jqx.get(f, c[0])
				} else {
					if (typeof(c) == "string" && b.jqx.hasProperty(f, c[0])) {
						return b.jqx.get(f, c)
					}
				}
			}
		}
		throw "jqxCore: Invalid parameter '" + b.jqx.serialize(c) + "' does not exist."
	};
	b.jqx.applyWidget = function(d, f, l, m) {
		var h = false;
		try {
			h = window.MSApp != undefined
		} catch (g) {}
		var n = b(d);
		if (!m) {
			m = new b.jqx["_" + f]()
		} else {
			m.host = n;
			m.element = d
		}
		if (d.id == "") {
			d.id = b.jqx.utilities.createId()
		}
		var k = {
			host: n,
			element: d,
			instance: m,
			initArgs: l
		};
		m.widgetName = f;
		b.data(d, f, k);
		b.data(d, "jqxWidget", k.instance);
		var j = new Array();
		var m = k.instance;
		while (m) {
			m.isInitialized = false;
			j.push(m);
			m = m.base
		}
		j.reverse();
		j[0].theme = b.jqx.theme || "";
		b.jqx.jqxWidgetProxy(f, d, l);
		for (var c in j) {
			m = j[c];
			if (c == 0) {
				m.host = n;
				m.element = d;
				m.WinJS = h
			}
			if (m != undefined) {
				if (m.definedInstance) {
					m.definedInstance()
				}
				if (m.createInstance != null) {
					if (h) {
						MSApp.execUnsafeLocalFunction(function() {
							m.createInstance(l)
						})
					} else {
						m.createInstance(l)
					}
				}
			}
		}
		for (var c in j) {
			if (j[c] != undefined) {
				j[c].isInitialized = true
			}
		}
		if (h) {
			MSApp.execUnsafeLocalFunction(function() {
				k.instance.refresh(true)
			})
		} else {
			k.instance.refresh(true)
		}
	};
	b.jqx.jqxWidget = function(c, d, g) {
		var j = false;
		try {
			var l = Array.prototype.slice.call(g, 0)
		} catch (i) {
			var l = ""
		}
		try {
			j = window.MSApp != undefined
		} catch (i) {}
		var h = c;
		var m = "";
		if (d) {
			m = "_" + d
		}
		b.jqx.define(b.jqx, "_" + h, m);
		var k = new Array();
		if (!window[h]) {
			var f = function(n) {
				if (n == null) {
					return ""
				}
				var e = b.type(n);
				switch (e) {
					case "string":
					case "number":
					case "date":
					case "boolean":
					case "bool":
						if (n === null) {
							return ""
						}
						return n.toString()
				}
				var o = "";
				b.each(n, function(q, r) {
					var t = r;
					if (q > 0) {
						o += ", "
					}
					o += "[";
					var p = 0;
					if (b.type(t) == "object") {
						for (var s in t) {
							if (p > 0) {
								o += ", "
							}
							o += "{" + s + ":" + t[s] + "}";
							p++
						}
					} else {
						if (p > 0) {
							o += ", "
						}
						o += "{" + q + ":" + t + "}";
						p++
					}
					o += "]"
				});
				return o
			};
			a[h] = window[h] = function(e, s) {
				var n = [];
				if (!s) {
					s = {}
				}
				n.push(s);
				var o = e;
				if (b.type(o) === "object" && e[0]) {
					o = e[0].id;
					if (o === "") {
						o = e[0].id = b.jqx.utilities.createId()
					}
				} else {
					if (b.type(e) === "object" && e && e.nodeName) {
						o = e.id;
						if (o === "") {
							o = e.id = b.jqx.utilities.createId()
						}
					}
				}
				if (window.jqxWidgets && window.jqxWidgets[o]) {
					if (s) {
						b.each(window.jqxWidgets[o], function(t) {
							var u = b(this.element).data();
							if (u && u.jqxWidget) {
								b(this.element)[h](s)
							}
						})
					}
					if (window.jqxWidgets[o].length == 1) {
						var q = b(window.jqxWidgets[o][0].widgetInstance.element).data();
						if (q && q.jqxWidget) {
							return window.jqxWidgets[o][0]
						}
					}
					var q = b(window.jqxWidgets[o][0].widgetInstance.element).data();
					if (q && q.jqxWidget) {
						return window.jqxWidgets[o]
					}
				}
				var p = b(e);
				if (p.length === 0) {
					p = b("<div></div>");
					if (h === "jqxInput" || h === "jqxPasswordInput" || h === "jqxMaskedInput") {
						p = b("<input/>")
					}
					if (h === "jqxTextArea") {
						p = b("<textarea></textarea>")
					}
					if (h === "jqxButton" || h === "jqxRepeatButton" || h === "jqxToggleButton") {
						p = b("<button/>")
					}
					if (h === "jqxSplitter") {
						p = b("<div><div>Panel 1</div><div>Panel 2</div></div>")
					}
					if (h === "jqxTabs") {
						p = b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")
					}
					if (h === "jqxRibbon") {
						p = b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")
					}
					if (h === "jqxDocking") {
						p = b("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")
					}
					if (h === "jqxWindow") {
						p = b("<div><div>Title 1</div><div>Content 1</div></div>")
					}
				}
				var r = [];
				b.each(p, function(w) {
					var y = p[w];
					b.jqx.applyWidget(y, h, n, undefined);
					if (!k[h]) {
						var u = b.data(y, "jqxWidget");
						var x = b.jqx["_" + h].prototype.defineInstance();
						var v = {};
						if (b.jqx["_" + h].prototype.metaInfo) {
							v = b.jqx["_" + h].prototype.metaInfo()
						}
						if (h == "jqxDockingLayout") {
							x = b.extend(x, b.jqx._jqxLayout.prototype.defineInstance())
						}
						if (h == "jqxToggleButton" || h == "jqxRepeatButton") {
							x = b.extend(x, b.jqx._jqxButton.prototype.defineInstance())
						}
						if (h == "jqxTreeGrid") {
							x = b.extend(x, b.jqx._jqxDataTable.prototype.defineInstance())
						}
						var t = function(A) {
							var z = b.data(A, "jqxWidget");
							this.widgetInstance = z;
							var B = b.extend(this, z);
							B.on = B.addEventListener = function(D, E) {
								B.addHandler(!B.base ? B.host : B.base.host, D, E)
							};
							B.off = B.removeEventListener = function(D) {
								B.removeHandler(!B.base ? B.host : B.base.host, D)
							};
							for (var C in z) {
								if (b.type(z[C]) == "function") {
									B[C] = b.proxy(z[C], z)
								}
							}
							return B
						};
						k[h] = t;
						b.each(x, function(A, z) {
							Object.defineProperty(t.prototype, A, {
								get: function() {
									if (this.widgetInstance) {
										return this.widgetInstance[A]
									}
									return z
								},
								set: function(H) {
									if (this.widgetInstance && (this.widgetInstance[A] != H || A === "width" || A === "height")) {
										var F = this.widgetInstance[A];
										var E = H;
										var D = b.type(F);
										var B = b.type(E);
										var G = false;
										if (D != B || A === "source" || A === "width" || A === "height") {
											G = true
										}
										if (G || (f(F) != f(E))) {
											var C = {};
											C[A] = H;
											if (this.widgetInstance.host) {
												this.widgetInstance.host[h](C)
											} else {
												this.widgetInstance.base.host[h](C)
											}
											this.widgetInstance[A] = H;
											if (this.widgetInstance.propertyUpdated) {
												this.widgetInstance.propertyUpdated(A, F, H)
											}
										}
									}
								}
							})
						})
					}
					var u = new k[h](y);
					r.push(u);
					if (!window.jqxWidgets) {
						window.jqxWidgets = new Array()
					}
					if (!window.jqxWidgets[o]) {
						window.jqxWidgets[o] = new Array()
					}
					window.jqxWidgets[o].push(u)
				});
				if (r.length === 1) {
					return r[0]
				}
				return r
			}
		}
		b.fn[h] = function() {
			var e = Array.prototype.slice.call(arguments, 0);
			if (e.length == 0 || (e.length == 1 && typeof(e[0]) == "object")) {
				if (this.length == 0) {
					if (this.selector) {
						throw new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.")
					} else {
						throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")
					}
				}
				return this.each(function() {
					var q = b(this);
					var p = this;
					var r = b.data(p, h);
					if (r == null) {
						b.jqx.applyWidget(p, h, e, undefined)
					} else {
						b.jqx.jqxWidgetProxy(h, this, e)
					}
				})
			} else {
				if (this.length == 0) {
					if (this.selector) {
						throw new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.")
					} else {
						throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")
					}
				}
				var o = null;
				var n = 0;
				this.each(function() {
					var p = b.jqx.jqxWidgetProxy(h, this, e);
					if (n == 0) {
						o = p;
						n++
					} else {
						if (n == 1) {
							var q = [];
							q.push(o);
							o = q
						}
						o.push(p)
					}
				})
			}
			return o
		};
		try {
			b.extend(b.jqx["_" + h].prototype, Array.prototype.slice.call(g, 0)[0])
		} catch (i) {}
		b.extend(b.jqx["_" + h].prototype, {
			toThemeProperty: function(e, n) {
				return b.jqx.toThemeProperty(this, e, n)
			},
			isMaterialized: function() {
				if (!this.theme) {
					return false
				}
				if (this.theme === "light") {
					return true
				}
				if (this.theme === "dark") {
					return true
				}
				if (this.theme === "deepblue") {
					return true
				}
				if (this.theme.indexOf("material") >= 0) {
					return true
				}
			},
			isModern: function() {
				if (!this.theme) {
					return false
				}
				if (this.theme.indexOf("light") >= 0) {
					return true
				}
				if (this.theme === "dark") {
					return true
				}
			},
			_addBarAndLabel: function(p) {
				var o = this;
				var e = b("<label></label");
				e[0].innerHTML = this.placeHolder;
				e.addClass(o.toThemeProperty("jqx-input-label"));
				p.after(e);
				o.label = e;
				var n = b("<span></span>");
				p.after(n);
				n.addClass(o.toThemeProperty("jqx-input-bar"));
				o.bar = n;
				o.bar.css("top", this.host.height())
			}
		});
		b.jqx["_" + h].prototype.refresh = function() {
			if (this.base) {
				this.base.refresh(true)
			}
		};
		b.jqx["_" + h].prototype.createInstance = function() {};
		b.jqx.isPassiveSupported = function() {
			var o = this;
			if (o.supportsPassive !== undefined) {
				return o.supportsPassive
			}
			o.supportsPassive = false;
			try {
				var n = Object.defineProperty({}, "passive", {
					get: function() {
						o.supportsPassive = true
					}
				});
				window.addEventListener("testPassive", null, n);
				window.removeEventListener("testPassive", null, n)
			} catch (p) {}
			return o.supportsPassive
		};
		b.jqx["_" + h].prototype.addEventHandler = function(n, e) {
			if (this.base) {
				this.base.host.on(n, e)
			} else {
				this.host.on(n, e)
			}
		};
		b.jqx["_" + h].prototype.removeEventHandler = function(n, e) {
			if (this.base) {
				this.base.host.off(n)
			} else {
				this.host.off(n)
			}
		};
		b.jqx["_" + h].prototype.applyTo = function(o, n) {
			if (!(n instanceof Array)) {
				var e = [];
				e.push(n);
				n = e
			}
			b.jqx.applyWidget(o, h, n, this)
		};
		b.jqx["_" + h].prototype.getInstance = function() {
			return this
		};
		b.jqx["_" + h].prototype.propertyChangeMap = {};
		b.jqx["_" + h].prototype.addHandler = function(p, e, n, o) {
			b.jqx.addHandler(b(p), e, n, o)
		};
		b.jqx["_" + h].prototype.removeHandler = function(o, e, n) {
			b.jqx.removeHandler(b(o), e, n)
		};
		b.jqx["_" + h].prototype.setOptions = function() {
			if (!this.host || !this.host.length || this.host.length != 1) {
				return
			}
			return b.jqx.jqxWidgetProxy(h, this.host[0], arguments)
		}
	};
	b.jqx.toThemeProperty = function(d, e, j) {
		if (d.theme == "") {
			return e
		}
		var h = e.split(" ");
		var c = "";
		for (var g = 0; g < h.length; g++) {
			if (g > 0) {
				c += " "
			}
			var f = h[g];
			if (j != null && j) {
				c += f + "-" + d.theme
			} else {
				c += f + " " + f + "-" + d.theme
			}
		}
		return c
	};
	b.jqx.addHandler = function(h, j, f, g) {
		var d = j.split(" ");
		for (var c = 0; c < d.length; c++) {
			var e = d[c];
			if (window.addEventListener && h[0]) {
				switch (e) {
					case "mousewheel":
						if (b.jqx.browser.mozilla) {
							h[0].addEventListener("DOMMouseScroll", f, b.jqx.isPassiveSupported() ? {
								passive: false
							} : false)
						} else {
							h[0].addEventListener("mousewheel", f, b.jqx.isPassiveSupported() ? {
								passive: false
							} : false)
						}
						continue;
					case "mousemove":
						if (!g) {
							h[0].addEventListener("mousemove", f, false);
							continue
						}
						break;
					case "touchmove":
						if (!g) {
							h[0].addEventListener("touchmove", f, false);
							continue
						} else {
							if (g && g.passive) {
								h[0].addEventListener("touchmove", f, g);
								continue
							}
						}
						break
				}
			}
			if (g == undefined || g == null) {
				if (h.on) {
					h.on(e, f)
				} else {
					h.bind(e, f)
				}
			} else {
				if (h.on) {
					h.on(e, g, f)
				} else {
					h.bind(e, g, f)
				}
			}
		}
	};
	b.jqx.removeHandler = function(g, h, f) {
		if (!h) {
			if (g.off) {
				g.off()
			} else {
				g.unbind()
			}
			return
		}
		var d = h.split(" ");
		for (var c = 0; c < d.length; c++) {
			var e = d[c];
			if (window.removeEventListener) {
				switch (e) {
					case "mousewheel":
						if (b.jqx.browser.mozilla) {
							g[0].removeEventListener("DOMMouseScroll", f, false)
						} else {
							g[0].removeEventListener("mousewheel", f, false)
						}
						continue;
					case "mousemove":
						if (f) {
							g[0].removeEventListener("mousemove", f, false);
							continue
						}
						break;
					case "touchmove":
						if (f) {
							g[0].removeEventListener("touchmove", f, false);
							continue
						}
						break
				}
			}
			if (e == undefined) {
				if (g.off) {
					g.off()
				} else {
					g.unbind()
				}
				continue
			}
			if (f == undefined) {
				if (g.off) {
					g.off(e)
				} else {
					g.unbind(e)
				}
			} else {
				if (g.off) {
					g.off(e, f)
				} else {
					g.unbind(e, f)
				}
			}
		}
	};
	b.jqx.credits = b.jqx.credits || "";
	b.jqx.theme = b.jqx.theme || "";
	b.jqx.scrollAnimation = b.jqx.scrollAnimation || false;
	b.jqx.resizeDelay = b.jqx.resizeDelay || 10;
	b.jqx.ready = function() {
		b(window).trigger("jqxReady")
	};
	b.jqx.init = function() {
		b.each(arguments[0], function(c, d) {
			if (c == "theme") {
				b.jqx.theme = d
			}
			if (c == "scrollBarSize") {
				b.jqx.utilities.scrollBarSize = d
			}
			if (c == "touchScrollBarSize") {
				b.jqx.utilities.touchScrollBarSize = d
			}
			if (c == "scrollBarButtonsVisibility") {
				b.jqx.utilities.scrollBarButtonsVisibility = d
			}
		})
	};
	b.jqx.utilities = b.jqx.utilities || {};
	b.extend(b.jqx.utilities, {
		scrollBarSize: 13,
		touchScrollBarSize: 8,
		scrollBarButtonsVisibility: "visible",
		createId: function() {
			var c = function() {
				return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
			};
			return "jqxWidget" + c() + c() + c()
		},
		setTheme: function(g, h, f) {
			if (typeof f === "undefined") {
				return
			}
			if (!f[0].className.split) {
				return
			}
			if (g === undefined) {
				g = ""
			}
			if (h === undefined) {
				h = ""
			}
			var j = f[0].className.split(" "),
				c = [],
				k = [],
				e = f.children();
			for (var d = 0; d < j.length; d += 1) {
				if (j[d].indexOf(g) >= 0) {
					if (g.length > 0) {
						c.push(j[d]);
						k.push(j[d].replace(g, h))
					} else {
						k.push(j[d].replace("-" + h, "") + "-" + h)
					}
				}
			}
			this._removeOldClasses(c, f);
			this._addNewClasses(k, f);
			for (var d = 0; d < e.length; d += 1) {
				this.setTheme(g, h, b(e[d]))
			}
		},
		_removeOldClasses: function(e, d) {
			for (var c = 0; c < e.length; c += 1) {
				d.removeClass(e[c])
			}
		},
		_addNewClasses: function(e, d) {
			for (var c = 0; c < e.length; c += 1) {
				d.addClass(e[c])
			}
		},
		getOffset: function(c) {
			var e = b.jqx.mobile.getLeftPos(c[0]);
			var d = b.jqx.mobile.getTopPos(c[0]);
			return {
				top: d,
				left: e
			}
		},
		resize: function(h, t, q, p) {
			if (p === undefined) {
				p = true
			}
			var m = -1;
			var l = this;
			var e = function(v) {
				if (!l.hiddenWidgets) {
					return -1
				}
				var w = -1;
				for (var u = 0; u < l.hiddenWidgets.length; u++) {
					if (v.id) {
						if (l.hiddenWidgets[u].id == v.id) {
							w = u;
							break
						}
					} else {
						if (l.hiddenWidgets[u].id == v[0].id) {
							w = u;
							break
						}
					}
				}
				return w
			};
			if (this.resizeHandlers) {
				for (var j = 0; j < this.resizeHandlers.length; j++) {
					if (h.id) {
						if (this.resizeHandlers[j].id == h.id) {
							m = j;
							break
						}
					} else {
						if (this.resizeHandlers[j].id == h[0].id) {
							m = j;
							break
						}
					}
				}
				if (q === true) {
					if (m != -1) {
						this.resizeHandlers.splice(m, 1);
						if (this.watchedElementData && this.watchedElementData.length > 0) {
							this.watchedElementData.splice(m, 1)
						}
					}
					if (this.resizeHandlers.length == 0) {
						var o = b(window);
						if (o.off) {
							o.off("resize.jqx");
							o.off("orientationchange.jqx");
							o.off("orientationchanged.jqx")
						} else {
							o.unbind("resize.jqx");
							o.unbind("orientationchange.jqx");
							o.unbind("orientationchanged.jqx")
						}
						this.resizeHandlers = null
					}
					var c = e(h);
					if (c != -1 && this.hiddenWidgets) {
						this.hiddenWidgets.splice(c, 1)
					}
					return
				}
			} else {
				if (q === true) {
					var c = e(h);
					if (c != -1 && this.hiddenWidgets) {
						this.hiddenWidgets.splice(c, 1)
					}
					return
				}
			}
			var l = this;
			var n = function(w, F) {
				if (!l.resizeHandlers) {
					return
				}
				var G = function(J) {
					var i = -1;
					var K = J.parentNode;
					while (K) {
						i++;
						K = K.parentNode
					}
					return i
				};
				var v = function(L, J) {
					if (!L.widget || !J.widget) {
						return 0
					}
					var K = G(L.widget[0]);
					var i = G(J.widget[0]);
					try {
						if (K < i) {
							return -1
						}
						if (K > i) {
							return 1
						}
					} catch (M) {
						var N = M
					}
					return 0
				};
				var x = function(J) {
					if (l.hiddenWidgets.length > 0) {
						l.hiddenWidgets.sort(v);
						var i = function() {
							var L = false;
							var N = new Array();
							for (var M = 0; M < l.hiddenWidgets.length; M++) {
								var K = l.hiddenWidgets[M];
								if (b.jqx.isHidden(K.widget)) {
									L = true;
									N.push(K)
								} else {
									if (K.callback) {
										K.callback(F)
									}
								}
							}
							l.hiddenWidgets = N;
							if (!L) {
								clearInterval(l.__resizeInterval)
							}
						};
						if (J == false) {
							i();
							if (l.__resizeInterval) {
								clearInterval(l.__resizeInterval)
							}
							return
						}
						if (l.__resizeInterval) {
							clearInterval(l.__resizeInterval)
						}
						l.__resizeInterval = setInterval(function() {
							i()
						}, 100)
					}
				};
				if (l.hiddenWidgets && l.hiddenWidgets.length > 0) {
					x(false)
				}
				l.hiddenWidgets = new Array();
				l.resizeHandlers.sort(v);
				for (var C = 0; C < l.resizeHandlers.length; C++) {
					var I = l.resizeHandlers[C];
					var E = I.widget;
					var B = I.data;
					if (!B) {
						continue
					}
					if (!B.jqxWidget) {
						continue
					}
					var u = B.jqxWidget.width;
					var H = B.jqxWidget.height;
					if (B.jqxWidget.base) {
						if (u == undefined) {
							u = B.jqxWidget.base.width
						}
						if (H == undefined) {
							H = B.jqxWidget.base.height
						}
					}
					if (u === undefined && H === undefined) {
						u = B.jqxWidget.element.style.width;
						H = B.jqxWidget.element.style.height
					}
					var D = false;
					if (u != null && u.toString().indexOf("%") != -1) {
						D = true
					}
					if (H != null && H.toString().indexOf("%") != -1) {
						D = true
					}
					if (b.jqx.isHidden(E)) {
						if (e(E) === -1) {
							if (D || w === true) {
								if (I.data.nestedWidget !== true) {
									l.hiddenWidgets.push(I)
								}
							}
						}
					} else {
						if (w === undefined || w !== true) {
							if (D) {
								I.callback(F);
								if (l.watchedElementData) {
									for (var z = 0; z < l.watchedElementData.length; z++) {
										if (l.watchedElementData[z].element == B.jqxWidget.element) {
											l.watchedElementData[z].offsetWidth = B.jqxWidget.element.offsetWidth;
											l.watchedElementData[z].offsetHeight = B.jqxWidget.element.offsetHeight;
											break
										}
									}
								}
								if (l.hiddenWidgets.indexOf(I) >= 0) {
									l.hiddenWidgets.splice(l.hiddenWidgets.indexOf(I), 1)
								}
							}
							if (B.jqxWidget.element) {
								var y = B.jqxWidget.element.className;
								if (y.indexOf("dropdownlist") >= 0 || y.indexOf("datetimeinput") >= 0 || y.indexOf("combobox") >= 0 || y.indexOf("menu") >= 0) {
									if (B.jqxWidget.isOpened) {
										var A = B.jqxWidget.isOpened();
										if (A) {
											if (F && F == "resize" && b.jqx.mobile.isTouchDevice()) {
												continue
											}
											B.jqxWidget.close()
										}
									}
								}
							}
						}
					}
				}
				x()
			};
			if (!this.resizeHandlers) {
				this.resizeHandlers = new Array();
				var o = b(window);
				if (o.on) {
					this._resizeTimer = null;
					this._initResize = null;
					o.on("resize.jqx", function(i) {
						if (l._resizeTimer != undefined) {
							clearTimeout(l._resizeTimer)
						}
						if (!l._initResize) {
							l._initResize = true;
							n(null, "resize")
						} else {
							l._resizeTimer = setTimeout(function() {
								n(null, "resize")
							}, b.jqx.resizeDelay)
						}
					});
					o.on("orientationchange.jqx", function(i) {
						n(null, "orientationchange")
					});
					o.on("orientationchanged.jqx", function(i) {
						n(null, "orientationchange")
					})
				} else {
					o.bind("resize.jqx", function(i) {
						n(null, "orientationchange")
					});
					o.bind("orientationchange.jqx", function(i) {
						n(null, "orientationchange")
					});
					o.bind("orientationchanged.jqx", function(i) {
						n(null, "orientationchange")
					})
				}
			}
			var f = h.data();
			if (p) {
				if (m === -1) {
					this.resizeHandlers.push({
						id: h[0].id,
						widget: h,
						callback: t,
						data: f
					})
				}
			}
			try {
				var d = f.jqxWidget.width;
				var s = f.jqxWidget.height;
				if (f.jqxWidget.base) {
					if (d == undefined) {
						d = f.jqxWidget.base.width
					}
					if (s == undefined) {
						s = f.jqxWidget.base.height
					}
				}
				if (d === undefined && s === undefined) {
					d = f.jqxWidget.element.style.width;
					s = f.jqxWidget.element.style.height
				}
				var k = false;
				if (d != null && d.toString().indexOf("%") != -1) {
					k = true
				}
				if (s != null && s.toString().indexOf("%") != -1) {
					k = true
				}
				if (k) {
					if (!this.watchedElementData) {
						this.watchedElementData = []
					}
					var l = this;
					var g = function(i) {
						if (l.watchedElementData.forEach) {
							l.watchedElementData.forEach(function(u) {
								if (u.element.offsetWidth !== u.offsetWidth || u.element.offsetHeight !== u.offsetHeight) {
									u.offsetWidth = u.element.offsetWidth;
									u.offsetHeight = u.element.offsetHeight;
									if (u.timer) {
										clearTimeout(u.timer)
									}
									u.timer = setTimeout(function() {
										if (!b.jqx.isHidden(b(u.element))) {
											u.callback()
										} else {
											u.timer = setInterval(function() {
												if (!b.jqx.isHidden(b(u.element))) {
													clearInterval(u.timer);
													u.callback()
												}
											}, 100)
										}
									})
								}
							})
						}
					};
					l.watchedElementData.push({
						element: h[0],
						offsetWidth: h[0].offsetWidth,
						offsetHeight: h[0].offsetHeight,
						callback: t
					});
					if (!l.observer) {
						l.observer = new MutationObserver(g);
						l.observer.observe(document.body, {
							attributes: true,
							childList: true,
							characterData: true
						})
					}
				}
			} catch (r) {}
			if (b.jqx.isHidden(h) && p === true) {
				n(true)
			}
			b.jqx.resize = function() {
				n(null, "resize")
			}
		},
		parseJSON: function(e) {
			if (!e || typeof e !== "string") {
				return null
			}
			var c = /^[\],:{}\s]*$/,
				g = /(?:^|:|,)(?:\s*\[)+/g,
				d = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
				f = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;
			e = b.trim(e);
			if (window.JSON && window.JSON.parse) {
				return window.JSON.parse(e)
			}
			if (c.test(e.replace(d, "@").replace(f, "]").replace(g, ""))) {
				return (new Function("return " + e))()
			}
			throw new Error("Invalid JSON: " + e)
		},
		html: function(d, e) {
			if (!b(d).on) {
				return b(d).html(e)
			}
			try {
				return b.access(d, function(s) {
					var f = d[0] || {},
						m = 0,
						j = d.length;
					if (s === undefined) {
						return f.nodeType === 1 ? f.innerHTML.replace(rinlinejQuery, "") : undefined
					}
					var r = /<(?:script|style|link)/i,
						n = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
						h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
						p = /<([\w:]+)/,
						g = /<(?:script|object|embed|option|style)/i,
						k = new RegExp("<(?:" + n + ")[\\s/>]", "i"),
						q = /^\s+/,
						t = {
							option: [1, "<select multiple='multiple'>", "</select>"],
							legend: [1, "<fieldset>", "</fieldset>"],
							thead: [1, "<table>", "</table>"],
							tr: [2, "<table><tbody>", "</tbody></table>"],
							td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
							col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
							area: [1, "<map>", "</map>"],
							_default: [0, "", ""]
						};
					if (typeof s === "string" && !r.test(s) && (b.support.htmlSerialize || !k.test(s)) && (b.support.leadingWhitespace || !q.test(s)) && !t[(p.exec(s) || ["", ""])[1].toLowerCase()]) {
						s = s.replace(h, "<$1></$2>");
						try {
							for (; m < j; m++) {
								f = this[m] || {};
								if (f.nodeType === 1) {
									b.cleanData(f.getElementsByTagName("*"));
									f.innerHTML = s
								}
							}
							f = 0
						} catch (o) {}
					}
					if (f) {
						d.empty().append(s)
					}
				}, null, e, arguments.length)
			} catch (c) {
				return b(d).html(e)
			}
		},
		hasTransform: function(e) {
			var d = "";
			d = e.css("transform");
			if (d == "" || d == "none") {
				d = e.parents().css("transform");
				if (d == "" || d == "none") {
					var c = b.jqx.utilities.getBrowser();
					if (c.browser == "msie") {
						d = e.css("-ms-transform");
						if (d == "" || d == "none") {
							d = e.parents().css("-ms-transform")
						}
					} else {
						if (c.browser == "chrome") {
							d = e.css("-webkit-transform");
							if (d == "" || d == "none") {
								d = e.parents().css("-webkit-transform")
							}
						} else {
							if (c.browser == "opera") {
								d = e.css("-o-transform");
								if (d == "" || d == "none") {
									d = e.parents().css("-o-transform")
								}
							} else {
								if (c.browser == "mozilla") {
									d = e.css("-moz-transform");
									if (d == "" || d == "none") {
										d = e.parents().css("-moz-transform")
									}
								}
							}
						}
					}
				} else {
					return d != "" && d != "none"
				}
			}
			if (d == "" || d == "none") {
				d = b(document.body).css("transform")
			}
			return d != "" && d != "none" && d != null
		},
		getBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = /(chrome)[ \/]([\w.]+)/.exec(d) || /(webkit)[ \/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [];
			var e = {
				browser: c[1] || "",
				version: c[2] || "0"
			};
			if (d.indexOf("rv:11.0") >= 0 && d.indexOf(".net4.0c") >= 0) {
				e.browser = "msie";
				e.version = "11";
				c[1] = "msie"
			}
			if (d.indexOf("edge") >= 0) {
				e.browser = "msie";
				e.version = "12";
				c[1] = "msie"
			}
			e[c[1]] = c[1];
			return e
		}
	});
	b.jqx.browser = b.jqx.utilities.getBrowser();
	b.jqx.isHidden = function(d) {
		if (!d || !d[0]) {
			return false
		}
		var c = d[0].offsetWidth,
			e = d[0].offsetHeight;
		if (c === 0 || e === 0) {
			return true
		} else {
			return false
		}
	};
	b.jqx.ariaEnabled = true;
	b.jqx.aria = function(d, f, e) {
		if (!b.jqx.ariaEnabled) {
			return
		}
		if (f == undefined) {
			b.each(d.aria, function(h, i) {
				var k = !d.base ? d.host.attr(h) : d.base.host.attr(h);
				if (k != undefined && !b.isFunction(k)) {
					var j = k;
					switch (i.type) {
						case "number":
							j = new Number(k);
							if (isNaN(j)) {
								j = k
							}
							break;
						case "boolean":
							j = k == "true" ? true : false;
							break;
						case "date":
							j = new Date(k);
							if (j == "Invalid Date" || isNaN(j)) {
								j = k
							}
							break
					}
					d[i.name] = j
				} else {
					var k = d[i.name];
					if (b.isFunction(k)) {
						k = d[i.name]()
					}
					if (k == undefined) {
						k = ""
					}
					try {
						!d.base ? d.host.attr(h, k.toString()) : d.base.host.attr(h, k.toString())
					} catch (g) {}
				}
			})
		} else {
			try {
				if (d.host) {
					if (!d.base) {
						if (d.host) {
							if (d.element.setAttribute) {
								d.element.setAttribute(f, e.toString())
							} else {
								d.host.attr(f, e.toString())
							}
						} else {
							d.attr(f, e.toString())
						}
					} else {
						if (d.base.host) {
							d.base.host.attr(f, e.toString())
						} else {
							d.attr(f, e.toString())
						}
					}
				} else {
					if (d.setAttribute) {
						d.setAttribute(f, e.toString())
					}
				}
			} catch (c) {}
		}
	};
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(d) {
			var c = this.length;
			var e = Number(arguments[1]) || 0;
			e = (e < 0) ? Math.ceil(e) : Math.floor(e);
			if (e < 0) {
				e += c
			}
			for (; e < c; e++) {
				if (e in this && this[e] === d) {
					return e
				}
			}
			return -1
		}
	}
	b.jqx.mobile = b.jqx.mobile || {};
	b.jqx.position = function(c) {
		var f = parseInt(c.pageX);
		var e = parseInt(c.pageY);
		if (b.jqx.mobile.isTouchDevice()) {
			var d = b.jqx.mobile.getTouches(c);
			var g = d[0];
			f = parseInt(g.pageX);
			e = parseInt(g.pageY)
		}
		return {
			left: f,
			top: e
		}
	};
	b.extend(b.jqx.mobile, {
		_touchListener: function(i, g) {
			var c = function(j, l) {
				var k = document.createEvent("MouseEvents");
				k.initMouseEvent(j, l.bubbles, l.cancelable, l.view, l.detail, l.screenX, l.screenY, l.clientX, l.clientY, l.ctrlKey, l.altKey, l.shiftKey, l.metaKey, l.button, l.relatedTarget);
				k._pageX = l.pageX;
				k._pageY = l.pageY;
				return k
			};
			var h = {
				mousedown: "touchstart",
				mouseup: "touchend",
				mousemove: "touchmove"
			};
			var f = c(h[i.type], i);
			i.target.dispatchEvent(f);
			var d = i.target["on" + h[i.type]];
			if (typeof d === "function") {
				d(i)
			}
		},
		setMobileSimulator: function(d, f) {
			if (this.isTouchDevice()) {
				return
			}
			this.simulatetouches = true;
			if (f == false) {
				this.simulatetouches = false
			}
			var e = {
				mousedown: "touchstart",
				mouseup: "touchend",
				mousemove: "touchmove"
			};
			var c = this;
			if (window.addEventListener) {
				var g = function() {
					for (var h in e) {
						if (d.addEventListener) {
							d.removeEventListener(h, c._touchListener);
							d.addEventListener(h, c._touchListener, false)
						}
					}
				};
				if (b.jqx.browser.msie) {
					g()
				} else {
					g()
				}
			}
		},
		isTouchDevice: function() {
			if (this.touchDevice != undefined) {
				return this.touchDevice
			}
			var d = "Browser CodeName: " + navigator.appCodeName + "";
			d += "Browser Name: " + navigator.appName + "";
			d += "Browser Version: " + navigator.appVersion + "";
			d += "Platform: " + navigator.platform + "";
			d += "User-agent header: " + navigator.userAgent + "";
			if (navigator.maxTouchPoints > 1) {}
			if (d.indexOf("Android") != -1) {
				return true
			}
			if (d.indexOf("IEMobile") != -1) {
				return true
			}
			if (d.indexOf("Windows Phone") != -1) {
				return true
			}
			if (d.indexOf("WPDesktop") != -1) {
				return true
			}
			if (d.indexOf("ZuneWP7") != -1) {
				return true
			}
			if (d.indexOf("BlackBerry") != -1 && d.indexOf("Mobile Safari") != -1) {
				return true
			}
			if (d.indexOf("ipod") != -1) {
				return true
			}
			if (d.indexOf("nokia") != -1 || d.indexOf("Nokia") != -1) {
				return true
			}
			if (d.indexOf("Chrome/17") != -1) {
				return false
			}
			if (d.indexOf("CrOS") != -1) {
				return false
			}
			if (d.indexOf("Opera") != -1 && d.indexOf("Mobi") == -1 && d.indexOf("Mini") == -1 && d.indexOf("Platform: Win") != -1) {
				return false
			}
			if (d.indexOf("HybridDeviceTouch") != -1) {
				return true
			}
			if (d.indexOf("HybridDeviceMouse") != -1) {
				return false
			}
			if (d.indexOf("Opera") != -1 && d.indexOf("Mobi") != -1 && d.indexOf("Opera Mobi") != -1) {
				return true
			}
			if (d.indexOf("Mozilla/5.0 (X11; Linux x86_64)") != -1) {
				return false
			}
			var f = {
				ios: "i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",
				android: "(Android |HTC_|Silk/)",
				blackberry: "BlackBerry(?:.*)Version/",
				rimTablet: "RIM Tablet OS ",
				webos: "(?:webOS|hpwOS)/",
				bada: "Bada/"
			};
			try {
				if (this.touchDevice != undefined) {
					return this.touchDevice
				}
				this.touchDevice = false;
				for (var h in f) {
					if (f.hasOwnProperty(h)) {
						var k = f[h];
						var g = d.match(new RegExp("(?:" + k + ")([^\\s;]+)"));
						if (g) {
							if (h.toString() == "blackberry") {
								this.touchDevice = false;
								return false
							}
							this.touchDevice = true;
							return true
						}
					}
				}
				var j = navigator.userAgent;
				if (navigator.platform.toLowerCase().indexOf("win") != -1) {
					if (j.indexOf("Windows Phone") >= 0 || j.indexOf("WPDesktop") >= 0 || j.indexOf("IEMobile") >= 0 || j.indexOf("ZuneWP7") >= 0) {
						this.touchDevice = true;
						return true
					} else {
						if (j.indexOf("Touch") >= 0) {
							var c = ("MSPointerDown" in window) || ("pointerdown" in window);
							if (c) {
								this.touchDevice = true;
								return true
							}
							if (j.indexOf("ARM") >= 0) {
								this.touchDevice = true;
								return true
							}
							this.touchDevice = false;
							return false
						}
					}
				}
				if (navigator.platform.toLowerCase().indexOf("win") != -1) {
					this.touchDevice = false;
					return false
				}
				if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
					this.touchDevice = true
				}
				return this.touchDevice
			} catch (l) {
				this.touchDevice = false;
				return false
			}
		},
		getLeftPos: function(c) {
			var d = c.offsetLeft;
			while ((c = c.offsetParent) != null) {
				if (c.tagName != "HTML") {
					d += c.offsetLeft;
					if (document.all) {
						d += c.clientLeft
					}
				}
			}
			return d
		},
		getTopPos: function(d) {
			var f = d.offsetTop;
			var c = b(d).coord();
			while ((d = d.offsetParent) != null) {
				if (d.tagName != "HTML") {
					f += (d.offsetTop - d.scrollTop);
					if (document.all) {
						f += d.clientTop
					}
				}
			}
			var e = navigator.userAgent.toLowerCase();
			var g = (e.indexOf("windows phone") != -1 || e.indexOf("WPDesktop") != -1 || e.indexOf("ZuneWP7") != -1 || e.indexOf("msie 9") != -1 || e.indexOf("msie 11") != -1 || e.indexOf("msie 10") != -1) && e.indexOf("touch") != -1;
			if (g) {
				return c.top
			}
			if (this.isSafariMobileBrowser()) {
				if (this.isSafari4MobileBrowser() && this.isIPadSafariMobileBrowser()) {
					return f
				}
				if (e.indexOf("version/7") != -1) {
					return c.top
				}
				if (e.indexOf("version/6") != -1 || e.indexOf("version/5") != -1) {
					f = f + b(window).scrollTop()
				}
				if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
					return f + b(window).scrollTop()
				}
				if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
					return f + b(window).scrollTop()
				}
				return c.top
			}
			return f
		},
		isChromeMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("android") != -1;
			return c
		},
		isOperaMiniMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("opera mini") != -1 || d.indexOf("opera mobi") != -1;
			return c
		},
		isOperaMiniBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("opera mini") != -1;
			return c
		},
		isNewSafariMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("ipad") != -1 || d.indexOf("iphone") != -1 || d.indexOf("ipod") != -1;
			c = c && (d.indexOf("version/5") != -1);
			return c
		},
		isSafari4MobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("ipad") != -1 || d.indexOf("iphone") != -1 || d.indexOf("ipod") != -1;
			c = c && (d.indexOf("version/4") != -1);
			return c
		},
		isWindowsPhone: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = (d.indexOf("windows phone") != -1 || d.indexOf("WPDesktop") != -1 || d.indexOf("ZuneWP7") != -1 || d.indexOf("msie 9") != -1 || d.indexOf("msie 11") != -1 || d.indexOf("msie 10") != -1 && d.indexOf("touch") != -1);
			return c
		},
		isSafariMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
				return true
			}
			if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
				return true
			}
			var c = d.indexOf("ipad") != -1 || d.indexOf("iphone") != -1 || d.indexOf("ipod") != -1 || d.indexOf("mobile safari") != -1;
			return c
		},
		isIPadSafariMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("ipad") != -1;
			return c
		},
		isMobileBrowser: function() {
			var d = navigator.userAgent.toLowerCase();
			var c = d.indexOf("ipad") != -1 || d.indexOf("iphone") != -1 || d.indexOf("android") != -1;
			return c
		},
		getTouches: function(c) {
			if (c.originalEvent) {
				if (c.originalEvent.touches && c.originalEvent.touches.length) {
					return c.originalEvent.touches
				} else {
					if (c.originalEvent.changedTouches && c.originalEvent.changedTouches.length) {
						return c.originalEvent.changedTouches
					}
				}
			}
			if (!c.touches) {
				c.touches = new Array();
				c.touches[0] = c.originalEvent != undefined ? c.originalEvent : c;
				if (c.originalEvent != undefined && c.pageX) {
					c.touches[0] = c
				}
				if (c.type == "mousemove") {
					c.touches[0] = c
				}
			}
			return c.touches
		},
		getTouchEventName: function(c) {
			if (this.isWindowsPhone()) {
				var d = navigator.userAgent.toLowerCase();
				if (d.indexOf("windows phone 7") != -1) {
					if (c.toLowerCase().indexOf("start") != -1) {
						return "MSPointerDown"
					}
					if (c.toLowerCase().indexOf("move") != -1) {
						return "MSPointerMove"
					}
					if (c.toLowerCase().indexOf("end") != -1) {
						return "MSPointerUp"
					}
				}
				if (c.toLowerCase().indexOf("start") != -1) {
					return "pointerdown"
				}
				if (c.toLowerCase().indexOf("move") != -1) {
					return "pointermove"
				}
				if (c.toLowerCase().indexOf("end") != -1) {
					return "pointerup"
				}
			} else {
				return c
			}
		},
		dispatchMouseEvent: function(c, g, f) {
			if (this.simulatetouches) {
				return
			}
			var d = document.createEvent("MouseEvent");
			d.initMouseEvent(c, true, true, g.view, 1, g.screenX, g.screenY, g.clientX, g.clientY, false, false, false, false, 0, null);
			if (f != null) {
				f.dispatchEvent(d)
			}
		},
		getRootNode: function(c) {
			while (c.nodeType !== 1) {
				c = c.parentNode
			}
			return c
		},
		setTouchScroll: function(c, d) {
			if (!this.enableScrolling) {
				this.enableScrolling = []
			}
			this.enableScrolling[d] = c
		},
		touchScroll: function(B, M, Z, H, x, n) {
			if (B == null) {
				return
			}
			var G = this;
			var f = 0;
			var r = 0;
			var g = 0;
			var i = 0;
			var t = 0;
			var j = 0;
			if (!this.scrolling) {
				this.scrolling = []
			}
			this.scrolling[H] = false;
			var k = false;
			var p = b(B);
			var R = ["select", "input", "textarea"];
			var X = 0;
			var J = 0;
			if (!this.enableScrolling) {
				this.enableScrolling = []
			}
			this.enableScrolling[H] = true;
			var H = H;
			var w = this.getTouchEventName("touchstart") + ".touchScroll";
			var D = this.getTouchEventName("touchend") + ".touchScroll";
			var ab = this.getTouchEventName("touchmove") + ".touchScroll";
			var l, W, z, ah, V, Y, aj, Q, aa, d, F, ad, af, O, e, v, u, S, c, E, ag, o;
			Q = M;
			var aj = 0;
			var aa = 0;
			var h = 0;
			var T = 0;
			var ai = 0;
			var Y = x.jqxScrollBar("max");
			var o = 325;

			function A(am) {
				if (am.targetTouches && (am.targetTouches.length >= 1)) {
					return am.targetTouches[0].clientY
				} else {
					if (am.originalEvent && am.originalEvent.clientY !== undefined) {
						return am.originalEvent.clientY
					} else {
						var al = G.getTouches(am);
						return al[0].clientY
					}
				}
			}

			function ae(am) {
				if (am.targetTouches && (am.targetTouches.length >= 1)) {
					return am.targetTouches[0].clientX
				} else {
					if (am.originalEvent && am.originalEvent.clientX !== undefined) {
						return am.originalEvent.clientX
					} else {
						var al = G.getTouches(am);
						return al[0].clientX
					}
				}
			}
			var I = function() {
				var ap, am, aq, ao;
				ap = Date.now();
				am = ap - v;
				v = ap;
				aq = aa - e;
				var an = h - ah;
				e = aa;
				ah = h;
				F = true;
				ao = 1000 * aq / (1 + am);
				var al = 1000 * an / (1 + am);
				af = 0.8 * ao + 0.2 * af;
				O = 0.8 * al + 0.2 * O
			};
			var C = false;
			var X = function(am) {
				if (!G.enableScrolling[H]) {
					return true
				}
				if (b.inArray(am.target.tagName.toLowerCase(), R) !== -1) {
					return
				}
				aa = n.jqxScrollBar("value");
				h = x.jqxScrollBar("value");
				var an = G.getTouches(am);
				var ao = an[0];
				if (an.length == 1) {
					G.dispatchMouseEvent("mousedown", ao, G.getRootNode(ao.target))
				}
				Y = x.jqxScrollBar("max");
				Q = n.jqxScrollBar("max");

				function al(ap) {
					C = false;
					F = true;
					d = A(ap);
					ag = ae(ap);
					af = S = O = 0;
					e = aa;
					ah = h;
					v = Date.now();
					clearInterval(u);
					u = setInterval(I, 100);
					T = aa;
					ai = h;
					if (aa > 0 && aa < Q && n[0].style.visibility != "hidden") {}
				}
				al(am);
				k = false;
				r = ao.pageY;
				t = ao.pageX;
				if (G.simulatetouches) {
					if (ao._pageY != undefined) {
						r = ao._pageY;
						t = ao._pageX
					}
				}
				G.scrolling[H] = true;
				f = 0;
				i = 0;
				return true
			};
			if (p.on) {
				p.on(w, X)
			} else {
				p.bind(w, X)
			}
			var ac = function(am, al) {
				aa = (am > Q) ? Q : (am < aj) ? aj : am;
				Z(null, am, 0, 0, al);
				return (am > Q) ? "max" : (am < aj) ? "min" : "value"
			};
			var m = function(am, al) {
				h = (am > Y) ? Y : (am < aj) ? aj : am;
				Z(am, null, 0, 0, al);
				return (am > Y) ? "max" : (am < aj) ? "min" : "value"
			};

			function U() {
				var al, am;
				if (S) {
					al = Date.now() - v;
					am = -S * Math.exp(-al / o);
					if (am > 0.5 || am < -0.5) {
						ac(c + am);
						requestAnimationFrame(U)
					} else {
						ac(c)
					}
				}
			}

			function N() {
				var al, am;
				if (S) {
					al = Date.now() - v;
					am = -S * Math.exp(-al / o);
					if (am > 0.5 || am < -0.5) {
						m(E + am);
						requestAnimationFrame(N)
					} else {
						m(E)
					}
				}
			}
			var y = function(al) {
				if (!G.enableScrolling[H]) {
					return true
				}
				if (!G.scrolling[H]) {
					return true
				}
				if (C) {
					al.preventDefault();
					al.stopPropagation()
				}
				var aq = G.getTouches(al);
				if (aq.length > 1) {
					return true
				}
				var am = aq[0].pageY;
				var ao = aq[0].pageX;
				if (G.simulatetouches) {
					if (aq[0]._pageY != undefined) {
						am = aq[0]._pageY;
						ao = aq[0]._pageX
					}
				}
				var au = am - r;
				var av = ao - t;
				J = am;
				var at = ao;
				g = au - f;
				j = av - i;
				k = true;
				f = au;
				i = av;
				var an = x != null ? x[0].style.visibility != "hidden" : true;
				var ar = n != null ? n[0].style.visibility != "hidden" : true;

				function ap(ay) {
					var aA, az, ax;
					if (F) {
						aA = A(ay);
						ax = ae(ay);
						az = d - aA;
						V = ag - ax;
						var aw = "value";
						if (az > 2 || az < -2) {
							d = aA;
							aw = ac(aa + az, ay);
							I();
							if (aw == "min" && T === 0) {
								return true
							}
							if (aw == "max" && T === Q) {
								return true
							}
							if (!ar) {
								return true
							}
							ay.preventDefault();
							ay.stopPropagation();
							C = true;
							return false
						} else {
							if (V > 2 || V < -2) {
								ag = ax;
								aw = m(h + V, ay);
								I();
								if (aw == "min" && ai === 0) {
									return true
								}
								if (aw == "max" && ai === Y) {
									return true
								}
								if (!an) {
									return true
								}
								C = true;
								ay.preventDefault();
								ay.stopPropagation();
								return false
							}
						}
						ay.preventDefault()
					}
				}
				if (an || ar) {
					if ((an) || (ar)) {
						ap(al)
					}
				}
			};
			if (p.on) {
				p.on(ab, y)
			} else {
				p.bind(ab, y)
			}
			var s = function(am) {
				if (!G.enableScrolling[H]) {
					return true
				}
				var an = G.getTouches(am)[0];
				if (!G.scrolling[H]) {
					return true
				}
				F = false;
				clearInterval(u);
				if (af > 10 || af < -10) {
					S = 0.8 * af;
					c = Math.round(aa + S);
					v = Date.now();
					requestAnimationFrame(U)
				} else {
					if (O > 10 || O < -10) {
						S = 0.8 * O;
						E = Math.round(h + S);
						v = Date.now();
						requestAnimationFrame(N)
					} else {}
				}
				G.scrolling[H] = false;
				if (k) {
					G.dispatchMouseEvent("mouseup", an, am.target)
				} else {
					var an = G.getTouches(am)[0],
						al = G.getRootNode(an.target);
					G.dispatchMouseEvent("mouseup", an, al);
					G.dispatchMouseEvent("click", an, al);
					return true
				}
			};
			if (this.simulatetouches) {
				var q = b(window).on != undefined || b(window).bind;
				var P = function(al) {
					try {
						s(al)
					} catch (am) {}
					G.scrolling[H] = false
				};
				b(window).on != undefined ? b(document).on("mouseup.touchScroll", P) : b(document).bind("mouseup.touchScroll", P);
				if (window.frameElement) {
					if (window.top != null) {
						var L = function(al) {
							try {
								s(al)
							} catch (am) {}
							G.scrolling[H] = false
						};
						if (window.top.document) {
							b(window.top.document).on ? b(window.top.document).on("mouseup", L) : b(window.top.document).bind("mouseup", L)
						}
					}
				}
				var ak = b(document).on != undefined || b(document).bind;
				var K = function(al) {
					if (!G.scrolling[H]) {
						return true
					}
					G.scrolling[H] = false;
					var an = G.getTouches(al)[0],
						am = G.getRootNode(an.target);
					G.dispatchMouseEvent("mouseup", an, am);
					G.dispatchMouseEvent("click", an, am)
				};
				b(document).on != undefined ? b(document).on("touchend", K) : b(document).bind("touchend", K)
			}
			if (p.on) {
				p.on("dragstart", function(al) {
					al.preventDefault()
				});
				p.on("selectstart", function(al) {
					al.preventDefault()
				})
			}
			p.on ? p.on(D + " touchcancel.touchScroll", s) : p.bind(D + " touchcancel.touchScroll", s)
		}
	});
	b.jqx.cookie = b.jqx.cookie || {};
	b.extend(b.jqx.cookie, {
		cookie: function(f, g, d) {
			if (arguments.length > 1 && String(g) !== "[object Object]") {
				d = b.extend({}, d);
				if (g === null || g === undefined) {
					d.expires = -1
				}
				if (typeof d.expires === "number") {
					var i = d.expires,
						e = d.expires = new Date();
					e.setDate(e.getDate() + i)
				}
				g = String(g);
				return (document.cookie = [encodeURIComponent(f), "=", d.raw ? g : encodeURIComponent(g), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join(""))
			}
			d = g || {};
			var c, h = d.raw ? function(j) {
				return j
			} : decodeURIComponent;
			return (c = new RegExp("(?:^|; )" + encodeURIComponent(f) + "=([^;]*)").exec(document.cookie)) ? h(c[1]) : null
		}
	});
	b.jqx.string = b.jqx.string || {};
	b.extend(b.jqx.string, {
		replace: function(g, e, f) {
			if (e === f) {
				return this
			}
			var c = g;
			var d = c.indexOf(e);
			while (d != -1) {
				c = c.replace(e, f);
				d = c.indexOf(e)
			}
			return c
		},
		contains: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			return c.indexOf(d) != -1
		},
		containsIgnoreCase: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			return c.toString().toUpperCase().indexOf(d.toString().toUpperCase()) != -1
		},
		equals: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			c = this.normalize(c);
			if (d.length == c.length) {
				return c.slice(0, d.length) == d
			}
			return false
		},
		equalsIgnoreCase: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			c = this.normalize(c);
			if (d.length == c.length) {
				return c.toUpperCase().slice(0, d.length) == d.toUpperCase()
			}
			return false
		},
		startsWith: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			return c.slice(0, d.length) == d
		},
		startsWithIgnoreCase: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			return c.toUpperCase().slice(0, d.length) == d.toUpperCase()
		},
		normalize: function(c) {
			if (c.charCodeAt(c.length - 1) == 65279) {
				c = c.substring(0, c.length - 1)
			}
			return c
		},
		endsWith: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			c = this.normalize(c);
			return c.slice(-d.length) == d
		},
		endsWithIgnoreCase: function(c, d) {
			if (c == null || d == null) {
				return false
			}
			c = this.normalize(c);
			return c.toUpperCase().slice(-d.length) == d.toUpperCase()
		}
	});
	b.extend(b.easing, {
		easeOutBack: function(f, g, e, j, i, h) {
			if (h == undefined) {
				h = 1.70158
			}
			return j * ((g = g / i - 1) * g * ((h + 1) * g + h) + 1) + e
		},
		easeInQuad: function(f, g, e, i, h) {
			return i * (g /= h) * g + e
		},
		easeInOutCirc: function(f, g, e, i, h) {
			if ((g /= h / 2) < 1) {
				return -i / 2 * (Math.sqrt(1 - g * g) - 1) + e
			}
			return i / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + e
		},
		easeInOutSine: function(f, g, e, i, h) {
			return -i / 2 * (Math.cos(Math.PI * g / h) - 1) + e
		},
		easeInCubic: function(f, g, e, i, h) {
			return i * (g /= h) * g * g + e
		},
		easeOutCubic: function(f, g, e, i, h) {
			return i * ((g = g / h - 1) * g * g + 1) + e
		},
		easeInOutCubic: function(f, g, e, i, h) {
			if ((g /= h / 2) < 1) {
				return i / 2 * g * g * g + e
			}
			return i / 2 * ((g -= 2) * g * g + 2) + e
		},
		easeInSine: function(f, g, e, i, h) {
			return -i * Math.cos(g / h * (Math.PI / 2)) + i + e
		},
		easeOutSine: function(f, g, e, i, h) {
			return i * Math.sin(g / h * (Math.PI / 2)) + e
		},
		easeInOutSine: function(f, g, e, i, h) {
			return -i / 2 * (Math.cos(Math.PI * g / h) - 1) + e
		}
	})
})(jqxBaseFramework);
(function(b) {
	if (b.event && b.event.special) {
		b.extend(b.event.special, {
			close: {
				noBubble: true
			},
			open: {
				noBubble: true
			},
			cellclick: {
				noBubble: true
			},
			rowclick: {
				noBubble: true
			},
			tabclick: {
				noBubble: true
			},
			selected: {
				noBubble: true
			},
			expanded: {
				noBubble: true
			},
			collapsed: {
				noBubble: true
			},
			valuechanged: {
				noBubble: true
			},
			expandedItem: {
				noBubble: true
			},
			collapsedItem: {
				noBubble: true
			},
			expandingItem: {
				noBubble: true
			},
			collapsingItem: {
				noBubble: true
			}
		})
	}
	if (b.fn.extend) {
		b.fn.extend({
			ischildof: function(g) {
				if (!b(this).parents) {
					var c = g.element.contains(this.element);
					return c
				}
				var e = b(this).parents().get();
				for (var d = 0; d < e.length; d++) {
					if (typeof g != "string") {
						var f = e[d];
						if (g !== undefined) {
							if (f == g[0]) {
								return true
							}
						}
					} else {
						if (g !== undefined) {
							if (b(e[d]).is(g)) {
								return true
							}
						}
					}
				}
				return false
			}
		})
	}
	b.fn.jqxProxy = function() {
		var e = b(this).data().jqxWidget;
		var c = Array.prototype.slice.call(arguments, 0);
		var d = e.element;
		if (!d) {
			d = e.base.element
		}
		return b.jqx.jqxWidgetProxy(e.widgetName, d, c)
	};
	var a = b.originalVal = b.fn.val;
	b.fn.val = function(d) {
		if (typeof d == "undefined") {
			if (b(this).hasClass("jqx-widget") || b(this).hasClass("jqx-input-group")) {
				var c = b(this).data().jqxWidget;
				if (c && c.val) {
					return c.val()
				}
			}
			if (this[0] && this[0].tagName.toLowerCase().indexOf("angular") >= 0) {
				var c = b(this).find(".jqx-widget").data().jqxWidget;
				if (c && c.val) {
					return c.val()
				}
			}
			return a.call(this)
		} else {
			if (b(this).hasClass("jqx-widget") || b(this).hasClass("jqx-input-group")) {
				var c = b(this).data().jqxWidget;
				if (c && c.val) {
					if (arguments.length != 2) {
						return c.val(d)
					} else {
						return c.val(d, arguments[1])
					}
				}
			}
			if (this[0] && this[0].tagName.toLowerCase().indexOf("angular") >= 0) {
				var c = b(this).find(".jqx-widget").data().jqxWidget;
				if (c && c.val) {
					if (arguments.length != 2) {
						return c.val(d)
					} else {
						return c.val(d, arguments[1])
					}
				}
			}
			return a.call(this, d)
		}
	};
	if (b.fn.modal && b.fn.modal.Constructor) {
		b.fn.modal.Constructor.prototype.enforceFocus = function() {
			b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(c) {
				if (this.$element[0] !== c.target && !this.$element.has(c.target).length) {
					if (b(c.target).parents().hasClass("jqx-popup")) {
						return true
					}
					this.$element.trigger("focus")
				}
			}, this))
		}
	}
	b.fn.coord = function(n) {
		var e, j, i = {
				top: 0,
				left: 0
			},
			f = this[0],
			l = f && f.ownerDocument;
		if (!l) {
			return
		}
		e = l.documentElement;
		if (!b.contains(e, f)) {
			return i
		}
		if (typeof f.getBoundingClientRect !== undefined) {
			i = f.getBoundingClientRect()
		}
		var d = function(o) {
			return b.isWindow(o) ? o : o.nodeType === 9 ? o.defaultView || o.parentWindow : false
		};
		j = d(l);
		var h = 0;
		var c = 0;
		var g = navigator.userAgent.toLowerCase();
		var m = g.indexOf("ipad") != -1 || g.indexOf("iphone") != -1;
		if (m) {
			h = 2
		}
		if (true == n) {
			if (document.body.style.position != "static" && document.body.style.position != "") {
				var k = b(document.body).coord();
				h = -k.left;
				c = -k.top
			}
		}
		return {
			top: c + i.top + (j.pageYOffset || e.scrollTop) - (e.clientTop || 0),
			left: h + i.left + (j.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
		}
	};
	b.jqx.ripplers = [];
	b.jqx.ripple = function(f, e, o) {
		if (!e) {
			e = f
		}
		var h = b(f);
		var j = false;
		h.append("<span class='ink'></span>");
		var p = h.find(".ink");
		var c = false;
		for (var g = 0; g < b.jqx.ripplers.length; g++) {
			var k = b.jqx.ripplers[g];
			if (k.element[0] === f[0]) {
				c = true;
				break
			}
		}
		if (!c) {
			b.jqx.ripplers.push({
				ink: p,
				element: f,
				hostElement: e,
				hostElementType: o
			})
		}
		if (o === "checkbox" || o === "radiobutton") {
			var l = Math.max(h.outerWidth(), h.outerHeight());
			p.css({
				height: l,
				width: l
			});
			var n = h.width() / 2 - p.width() / 2;
			var m = h.height() / 2 - p.height() / 2;
			p.css({
				top: m + "px",
				left: n + "px"
			})
		}
		if (b.jqx.ripplers.length === 1) {
			b(document).on("mouseup", function(r) {
				b.jqx.ripple.mouseCaptured = false;
				for (var q = 0; q < b.jqx.ripplers.length; q++) {
					var d = b.jqx.ripplers[q];
					d.ink.removeClass("active");
					d.element.removeClass("active");
					if (o !== "checkbox" && o !== "radiobutton") {
						if (d.ink.hasClass("animate")) {
							d.ink.removeClass("animate")
						}
					}
				}
			})
		}
		e.off("mousedown.ripple");
		e.on("mousedown.ripple", function(i) {
			var d = b(f);
			b.jqx.ripple.mouseCaptured = true;
			setTimeout(function() {
				if (d.find(".ink").length == 0) {
					d.append("<span class='ink'></span>")
				}
				var r = d.find(".ink");
				r.removeClass("animate");
				if (!r.height() && !r.width()) {
					var s = Math.max(d.outerWidth(), d.outerHeight());
					r.css({
						height: s,
						width: s
					})
				}
				if (o === "checkbox" || o === "radiobutton") {
					if (o === "checkbox") {
						if (e.jqxCheckBox("disabled")) {
							return
						}
					}
					if (o === "radiobutton") {
						if (e.jqxRadioButton("disabled")) {
							return
						}
					}
					var q = d.width() / 2 - r.width() / 2;
					var t = d.height() / 2 - r.height() / 2;
					r.css({
						top: t + "px",
						left: q + "px"
					}).addClass("animate");
					r.on("animationend", function() {
						if (b.jqx.ripple.mouseCaptured) {
							r.removeClass("animate");
							r.addClass("active");
							f.addClass("active")
						}
					});
					return
				}
				var q = i.pageX - d.offset().left - r.width() / 2;
				var t = i.pageY - d.offset().top - r.height() / 2;
				r.css({
					top: t + "px",
					left: q + "px"
				}).addClass("animate")
			})
		})
	}
})(jqxBaseFramework);