! function(n) {
	"use strict";

	function r(n, r, t) {
		return t.a = n, t.f = r, t
	}

	function e(t) {
		return r(2, t, function(r) {
			return function(n) {
				return t(r, n)
			}
		})
	}

	function f(e) {
		return r(3, e, function(t) {
			return function(r) {
				return function(n) {
					return e(t, r, n)
				}
			}
		})
	}

	function t(u) {
		return r(4, u, function(e) {
			return function(t) {
				return function(r) {
					return function(n) {
						return u(e, t, r, n)
					}
				}
			}
		})
	}

	function u(a) {
		return r(5, a, function(u) {
			return function(e) {
				return function(t) {
					return function(r) {
						return function(n) {
							return a(u, e, t, r, n)
						}
					}
				}
			}
		})
	}

	function a(i) {
		return r(6, i, function(a) {
			return function(u) {
				return function(e) {
					return function(t) {
						return function(r) {
							return function(n) {
								return i(a, u, e, t, r, n)
							}
						}
					}
				}
			}
		})
	}

	function i(o) {
		return r(7, o, function(i) {
			return function(a) {
				return function(u) {
					return function(e) {
						return function(t) {
							return function(r) {
								return function(n) {
									return o(i, a, u, e, t, r, n)
								}
							}
						}
					}
				}
			}
		})
	}

	function m(n, r, t) {
		return 2 === n.a ? n.f(r, t) : n(r)(t)
	}

	function p(n, r, t, e) {
		return 3 === n.a ? n.f(r, t, e) : n(r)(t)(e)
	}

	function v(n, r, t, e, u) {
		return 4 === n.a ? n.f(r, t, e, u) : n(r)(t)(e)(u)
	}

	function l(n, r, t, e, u, a) {
		return 5 === n.a ? n.f(r, t, e, u, a) : n(r)(t)(e)(u)(a)
	}

	function s(n, r, t, e, u, a, i, o) {
		return 7 === n.a ? n.f(r, t, e, u, a, i, o) : n(r)(t)(e)(u)(a)(i)(o)
	}
	var d = {
		$: 0
	};

	function b(n, r) {
		return {
			$: 1,
			a: n,
			b: r
		}
	}
	var o = e(b);

	function h(n) {
		for (var r = d, t = n.length; t--;) r = b(n[t], r);
		return r
	}

	function c(n) {
		for (var r = []; n.b; n = n.b) r.push(n.a);
		return r
	}
	var g = f(function(n, r, t) {
		for (var e = []; r.b && t.b; r = r.b, t = t.b) e.push(m(n, r.a, t.a));
		return h(e)
	});

	function w(n, r) {
		for (var t, e = [], u = $(n, r, 0, e); u && (t = e.pop()); u = $(t.a, t.b, 0, e));
		return u
	}

	function $(n, r, t, e) {
		if (100 < t) return e.push(k(n, r)), !0;
		if (n === r) return !0;
		if ("object" != typeof n || null === n || null === r) return "function" == typeof n && L(5), !1;
		for (var u in n.$ < 0 && (n = Or(n), r = Or(r)), n)
			if (!$(n[u], r[u], t + 1, e)) return !1;
		return !0
	}

	function x(n, r, t) {
		if ("object" != typeof n) return n === r ? 0 : n < r ? -1 : 1;
		if (!n.$) return (t = x(n.a, r.a)) ? t : (t = x(n.b, r.b)) ? t : x(n.c, r.c);
		for (; n.b && r.b && !(t = x(n.a, r.a)); n = n.b, r = r.b);
		return t || (n.b ? 1 : r.b ? -1 : 0)
	}
	var C = e(function(n, r) {
			var t = x(n, r);
			return t < 0 ? Lr : t ? jr : Tr
		}),
		y = 0;

	function k(n, r) {
		return {
			a: n,
			b: r
		}
	}

	function A(n) {
		return n
	}

	function E(n, r) {
		if ("string" == typeof n) return n + r;
		if (!n.b) return r;
		var t = b(n.a, r);
		n = n.b;
		for (var e = t; n.b; n = n.b) e = e.b = b(n.a, r);
		return t
	}
	var T = f(function(n, r, t) {
			for (var e = Array(n), u = 0; u < n; u++) e[u] = t(r + u);
			return e
		}),
		j = e(function(n, r) {
			for (var t = Array(n), e = 0; e < n && r.b; e++) t[e] = r.a, r = r.b;
			return t.length = e, k(t, r)
		});

	function L(n) {
		throw Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
	}
	var _ = Math.ceil,
		N = Math.floor,
		O = Math.log;
	var R = e(function(n, r) {
			return r.split(n)
		}),
		S = e(function(n, r) {
			return r.join(n)
		});
	var q = e(function(n, r) {
		for (var t = r.length; t--;) {
			var e = r[t],
				u = r.charCodeAt(t);
			if (u < 56320 || 57343 < u || (e = r[--t] + e), !n(A(e))) return !1
		}
		return !0
	});

	function H(n) {
		return n + ""
	}
	var F = e(function(n, r) {
		return {
			$: 10,
			d: n,
			b: r
		}
	});

	function P(n, r) {
		return {
			$: 13,
			f: n,
			g: r
		}
	}
	var z = e(function(n, r) {
		return {
			$: 14,
			b: r,
			h: n
		}
	});
	var B = e(function(n, r) {
			return P(n, [r])
		}),
		M = t(function(n, r, t, e) {
			return P(n, [r, t, e])
		}),
		D = i(function(n, r, t, e, u, a, i) {
			return P(n, [r, t, e, u, a, i])
		}),
		I = e(function(n, r) {
			try {
				console.log('r',r)
				return J(n, JSON.parse(r))
			} catch (n) {
				return Kr(m(rt, "This is not valid JSON! " + n.message, Z(r)))
			}
		}),
		W = e(function(n, r) {
			return J(n, K(r))
		});

	function J(n, r) {
		switch (n.$) {
			case 3:
				return "boolean" == typeof r ? nt(r) : G("a BOOL", r);
			case 2:
				return "number" != typeof r ? G("an INT", r) : -2147483647 < r && r < 2147483647 && (0 | r) === r ? nt(r) : !
					isFinite(r) || r % 1 ? G("an INT", r) : nt(r);
			case 4:
				return "number" == typeof r ? nt(r) : G("a FLOAT", r);
			case 6:
				return "string" == typeof r ? nt(r) : r instanceof String ? nt(r + "") : G("a STRING", r);
			case 9:
				return null === r ? nt(n.c) : G("null", r);
			case 5:
				return nt(Z(r));
			case 7:
				return Array.isArray(r) ? U(n.b, r, h) : G("a LIST", r);
			case 8:
				return Array.isArray(r) ? U(n.b, r, Y) : G("an ARRAY", r);
			case 10:
				var t = n.d;
				if ("object" != typeof r || null === r || !(t in r)) return G("an OBJECT with a field named `" + t + "`", r);
				var e = J(n.b, r[t]);
				return Er(e) ? e : Kr(m(tt, t, e.a));
			case 11:
				var u = n.e;
				if (!Array.isArray(r)) return G("an ARRAY", r);
				if (r.length <= u) return G("a LONGER array. Need index " + u + " but only see " + r.length + " entries", r);
				e = J(n.b, r[u]);
				return Er(e) ? e : Kr(m(et, u, e.a));
			case 12:
				if ("object" != typeof r || null === r || Array.isArray(r)) return G("an OBJECT", r);
				var a = d;
				for (var i in r)
					if (r.hasOwnProperty(i)) {
						e = J(n.b, r[i]);
						if (!Er(e)) return Kr(m(tt, i, e.a));
						a = b(k(i, e.a), a)
					} return nt(Mr(a));
			case 13:
				for (var o = n.f, f = n.g, c = 0; c < f.length; c++) {
					e = J(f[c], r);
					if (!Er(e)) return e;
					o = o(e.a)
				}
				return nt(o);
			case 14:
				e = J(n.b, r);
				return Er(e) ? J(n.h(e.a), r) : e;
			case 15:
				for (var s = d, v = n.g; v.b; v = v.b) {
					e = J(v.a, r);
					if (Er(e)) return e;
					s = b(e.a, s)
				}
				return Kr(ut(Mr(s)));
			case 1:
				return Kr(m(rt, n.a, Z(r)));
			case 0:
				return nt(n.a)
		}
	}

	function U(n, r, t) {
		for (var e = r.length, u = Array(e), a = 0; a < e; a++) {
			var i = J(n, r[a]);
			if (!Er(i)) return Kr(m(et, a, i.a));
			u[a] = i.a
		}
		return nt(t(u))
	}

	function Y(r) {
		return m(Xr, r.length, function(n) {
			return r[n]
		})
	}

	function G(n, r) {
		return Kr(m(rt, "Expecting " + n, Z(r)))
	}

	function Q(n, r) {
		if (n === r) return !0;
		if (n.$ !== r.$) return !1;
		switch (n.$) {
			case 0:
			case 1:
				return n.a === r.a;
			case 3:
			case 2:
			case 4:
			case 6:
			case 5:
				return !0;
			case 9:
				return n.c === r.c;
			case 7:
			case 8:
			case 12:
				return Q(n.b, r.b);
			case 10:
				return n.d === r.d && Q(n.b, r.b);
			case 11:
				return n.e === r.e && Q(n.b, r.b);
			case 13:
				return n.f === r.f && V(n.g, r.g);
			case 14:
				return n.h === r.h && Q(n.b, r.b);
			case 15:
				return V(n.g, r.g)
		}
	}

	function V(n, r) {
		var t = n.length;
		if (t !== r.length) return !1;
		for (var e = 0; e < t; e++)
			if (!Q(n[e], r[e])) return !1;
		return !0
	}
	var X = e(function(n, r) {
		return JSON.stringify(K(r), null, n) + ""
	});

	function Z(n) {
		return n
	}

	function K(n) {
		return n
	}
	var nn = Z(null);

	function rn(n) {
		return {
			$: 0,
			a: n
		}
	}

	function tn(n) {
		return {
			$: 1,
			a: n
		}
	}

	function en(n) {
		return {
			$: 2,
			b: n,
			c: null
		}
	}
	var un = e(function(n, r) {
			return {
				$: 3,
				b: n,
				d: r
			}
		}),
		an = e(function(n, r) {
			return {
				$: 4,
				b: n,
				d: r
			}
		});
	var on = 0;

	function fn(n) {
		var r = {
			$: 0,
			e: on++,
			f: n,
			g: null,
			h: []
		};
		return bn(r), r
	}

	function cn(r) {
		return en(function(n) {
			n(rn(fn(r)))
		})
	}

	function sn(n, r) {
		n.h.push(r), bn(n)
	}
	var vn = !1,
		dn = [];

	function bn(n) {
		if (dn.push(n), !vn) {
			for (vn = !0; n = dn.shift();) ln(n);
			vn = !1
		}
	}

	function ln(r) {
		for (; r.f;) {
			var n = r.f.$;
			if (0 === n || 1 === n) {
				for (; r.g && r.g.$ !== n;) r.g = r.g.i;
				if (!r.g) return;
				r.f = r.g.b(r.f.a), r.g = r.g.i
			} else {
				if (2 === n) return void(r.f.c = r.f.b(function(n) {
					r.f = n, bn(r)
				}));
				if (5 === n) {
					if (0 === r.h.length) return;
					r.f = r.f.b(r.h.shift())
				} else r.g = {
					$: 3 === n ? 0 : 1,
					b: r.f.b,
					i: r.g
				}, r.f = r.f.d
			}
		}
	}

	function hn(t) {
		return en(function(n) {
			var r = setTimeout(function() {
				n(rn(y))
			}, t);
			return function() {
				clearTimeout(r)
			}
		})
	}

	function gn(n, r, t, e, u, a) {
		var i = m(W, n, Z(r ? r.flags : void 0));
		Er(i) || L(2);
		var o = {},
			f = (i = t(i.a)).a,
			c = a(v, f),
			s = function(n, r) {
				var t;
				for (var e in $n) {
					var u = $n[e];
					u.a && ((t = t || {})[e] = u.a(e, r)), n[e] = mn(u, r)
				}
				return t
			}(o, v);

		function v(n, r) {
			c(f = (i = m(e, n, f)).a, r), xn(o, i.b, u(f))
		}
		return xn(o, i.b, u(f)), s ? {
			ports: s
		} : {}
	}
	var $n = {};

	function mn(n, r) {
		var e = {
				g: r,
				h: void 0
			},
			u = n.c,
			a = n.d,
			i = n.e,
			o = n.f;

		function f(t) {
			return m(un, f, {
				$: 5,
				b: function(n) {
					var r = n.a;
					return 0 === n.$ ? p(a, e, r, t) : i && o ? v(u, e, r.i, r.j, t) : p(u, e, i ? r.i : r.j, t)
				}
			})
		}
		return e.h = fn(m(un, f, n.b))
	}
	var pn = e(function(r, t) {
		return en(function(n) {
			r.g(t), n(rn(y))
		})
	});

	function wn(r) {
		return function(n) {
			return {
				$: 1,
				k: r,
				l: n
			}
		}
	}

	function xn(n, r, t) {
		var e = {};
		for (var u in Cn(!0, r, e, null), Cn(!1, t, e, null), n) sn(n[u], {
			$: "fx",
			a: e[u] || {
				i: d,
				j: d
			}
		})
	}

	function Cn(n, r, t, e) {
		switch (r.$) {
			case 1:
				var u = r.k,
					a = function(n, r, t, e) {
						function u(n) {
							for (var r = t; r; r = r.q) n = r.p(n);
							return n
						}
						return m(n ? $n[r].e : $n[r].f, u, e)
					}(n, u, e, r.l);
				return void(t[u] = function(n, r, t) {
					return t = t || {
						i: d,
						j: d
					}, n ? t.i = b(r, t.i) : t.j = b(r, t.j), t
				}(n, a, t[u]));
			case 2:
				for (var i = r.m; i.b; i = i.b) Cn(n, i.a, t, e);
				return;
			case 3:
				return void Cn(n, r.o, t, {
					p: r.n,
					q: e
				})
		}
	}

	function yn(n) {
		$n[n] && L(3)
	}

	function kn(n, r) {
		return yn(n), $n[n] = {
			e: An,
			r: r,
			a: En
		}, wn(n)
	}
	var An = e(function(n, r) {
		return r
	});

	function En(n) {
		var a = [],
			i = $n[n].r,
			o = hn(0);
		return $n[n].b = o, $n[n].c = f(function(n, r) {
			for (; r.b; r = r.b)
				for (var t = a, e = K(i(r.a)), u = 0; u < t.length; u++) t[u](e);
			return o
		}), {
			subscribe: function(n) {
				a.push(n)
			},
			unsubscribe: function(n) {
				var r = (a = a.slice()).indexOf(n);
				r < 0 || a.splice(r, 1)
			}
		}
	}
	var Tn = e(function(r, t) {
		return function(n) {
			return r(t(n))
		}
	});

	function jn(n, u) {
		var a = d,
			i = $n[n].r,
			t = rn(null);
		return $n[n].b = t, $n[n].c = f(function(n, r) {
			return a = r, t
		}), {
			send: function(n) {
				var r = m(W, i, Z(n));
				Er(r) || L(4);
				for (var t = r.a, e = a; e.b; e = e.b) u(e.a(t))
			}
		}
	}
	var Ln = e(function(e, u) {
		return en(function(r) {
			var n = new XMLHttpRequest;
			! function(n, r) {
				if (!Ee(r)) return;
				n.addEventListener("progress", function(n) {
					n.lengthComputable && fn(r.a({
						aO: n.loaded,
						aP: n.total
					}))
				})
			}(n, u), n.addEventListener("error", function() {
				r(tn(_e))
			}), n.addEventListener("timeout", function() {
				r(tn(Ne))
			}), n.addEventListener("load", function() {
				r(function(n, r) {
					var t = function(n) {
						return {
							a6: n.responseURL,
							aI: {
								aR: n.status,
								a_: n.statusText
							},
							O: function(n) {
								var r = ve;
								if (!n) return r;
								for (var t = n.split("\r\n"), e = t.length; e--;) {
									var u = t[e],
										a = u.indexOf(": ");
									if (0 < a) {
										var i = u.substring(0, a),
											o = u.substring(a + 2);
										r = p(Ae, i, function(n) {
											return Zr(Ee(n) ? o + ", " + n.a : o)
										}, r)
									}
								}
								return r
							}(n.getAllResponseHeaders()),
							aN: n.response
						}
					}(n);
					if (n.status < 200 || 300 <= n.status) return t.body = n.responseText, tn(je(t));
					console.log('t.body', t.body)
					console.log('n.responseText', n.responseText)
					var e = r(t);
					console.log('Er(e) ? rn(e.a) : (t.body = n.responseText, tn(m(Te, e.a, t)))', Er(e) ? rn(e.a) : (t.body =
						n.responseText, tn(m(Te, e.a, t))))
					return Er(e) ? rn(e.a) : (t.body = n.responseText, tn(m(Te, e.a, t)))
				}(n, e.S.a))
			});
			try {
				n.open(e.Y, e.a6, !0)
			} catch (n) {
				return r(tn(Le(e.a6)))
			}! function(n, r) {
				for (var t = r.O; t.b; t = t.b) n.setRequestHeader(t.a.a, t.a.b);
				n.responseType = r.S.b, n.withCredentials = r.ai, Ee(r.ag) && (n.timeout = r.ag.a)
			}(n, e);
			var t = e.aN;
			return n.send(Oe(t) ? (n.setRequestHeader("Content-Type", t.a), t.b) : t.a),
				function() {
					n.abort()
				}
		})
	});
	var _n;
	var Nn = "undefined" != typeof document ? document : {};

	function On(n, r) {
		n.appendChild(r)
	}

	function Rn(n) {
		return {
			$: 0,
			a: n
		}
	}
	var Sn = e(function(a, i) {
			return e(function(n, r) {
				for (var t = [], e = 0; r.b; r = r.b) {
					var u = r.a;
					e += u.b || 0, t.push(u)
				}
				return e += t.length, {
					$: 1,
					c: i,
					d: Un(n),
					e: t,
					f: a,
					b: e
				}
			})
		})(void 0),
		qn = e(function(a, i) {
			return e(function(n, r) {
				for (var t = [], e = 0; r.b; r = r.b) {
					var u = r.a;
					e += u.b.b || 0, t.push(u)
				}
				return e += t.length, {
					$: 2,
					c: i,
					d: Un(n),
					e: t,
					f: a,
					b: e
				}
			})
		})(void 0);

	function Hn(n, r) {
		return {
			$: 5,
			l: n,
			m: r,
			k: void 0
		}
	}
	var Fn = f(function(n, r, t) {
			return Hn([n, r, t], function() {
				return m(n, r, t)
			})
		}),
		Pn = t(function(n, r, t, e) {
			return Hn([n, r, t, e], function() {
				return p(n, r, t, e)
			})
		}),
		zn = e(function(n, r) {
			return {
				$: "a0",
				n: n,
				o: r
			}
		}),
		Bn = e(function(n, r) {
			return {
				$: "a1",
				n: n,
				o: r
			}
		}),
		Mn = e(function(n, r) {
			return {
				$: "a2",
				n: n,
				o: r
			}
		}),
		Dn = e(function(n, r) {
			return {
				$: "a3",
				n: n,
				o: r
			}
		});

	function In(n) {
		return "script" == n ? "p" : n
	}

	function Wn(n) {
		return /^\s*(javascript:|data:text\/html)/i.test(n) ? "" : n
	}
	var Jn;

	function Un(n) {
		for (var r = {}; n.b; n = n.b) {
			var t = n.a,
				e = t.$,
				u = t.n,
				a = t.o;
			if ("a2" !== e) {
				var i = r[e] || (r[e] = {});
				"a3" === e && "class" === u ? Yn(i, u, a) : i[u] = a
			} else "className" === u ? Yn(r, u, K(a)) : r[u] = K(a)
		}
		return r
	}

	function Yn(n, r, t) {
		var e = n[r];
		n[r] = e ? e + " " + t : t
	}

	function Gn(n, r) {
		var t = n.$;
		if (5 === t) return Gn(n.k || (n.k = n.m()), r);
		if (0 === t) return Nn.createTextNode(n.a);
		if (4 === t) {
			for (var e = n.k, u = n.j; 4 === e.$;) "object" != typeof u ? u = [u, e.j] : u.push(e.j), e = e.k;
			var a = {
				j: u,
				p: r
			};
			return (i = Gn(e, a)).elm_event_node_ref = a, i
		}
		if (3 === t) return Qn(i = n.h(n.g), r, n.d), i;
		var i = n.f ? Nn.createElementNS(n.f, n.c) : Nn.createElement(n.c);
		_n && "a" == n.c && i.addEventListener("click", _n(i)), Qn(i, r, n.d);
		for (var o = n.e, f = 0; f < o.length; f++) On(i, Gn(1 === t ? o[f] : o[f].b, r));
		return i
	}

	function Qn(n, r, t) {
		for (var e in t) {
			var u = t[e];
			"a1" === e ? Vn(n, u) : "a0" === e ? Kn(n, r, u) : "a3" === e ? Xn(n, u) : "a4" === e ? Zn(n, u) : ("value" !== e ||
				"checked" !== e || n[e] !== u) && (n[e] = u)
		}
	}

	function Vn(n, r) {
		var t = n.style;
		for (var e in r) t[e] = r[e]
	}

	function Xn(n, r) {
		for (var t in r) {
			var e = r[t];
			e ? n.setAttribute(t, e) : n.removeAttribute(t)
		}
	}

	function Zn(n, r) {
		for (var t in r) {
			var e = r[t],
				u = e.f,
				a = e.o;
			a ? n.setAttributeNS(u, t, a) : n.removeAttributeNS(u, t)
		}
	}

	function Kn(n, r, t) {
		var e = n.elmFs || (n.elmFs = {});
		for (var u in t) {
			var a = t[u],
				i = e[u];
			if (a) {
				if (i) {
					if (i.q.$ === a.$) {
						i.q = a;
						continue
					}
					n.removeEventListener(u, i)
				}
				i = nr(r, a), n.addEventListener(u, i, Jn && {
					passive: nu(a) < 2
				}), e[u] = i
			} else n.removeEventListener(u, i), e[u] = void 0
		}
	}
	try {
		window.addEventListener("t", null, Object.defineProperty({}, "passive", {
			get: function() {
				Jn = !0
			}
		}))
	} catch (n) {}

	function nr(s, n) {
		function v(n) {
			var r = v.q,
				t = J(r.a, n);
			if (Er(t)) {
				for (var e, u = nu(r), a = t.a, i = u ? u < 3 ? a.a : a.a_ : a, o = 1 == u ? a.b : 3 == u && a.ab, f = (o && n.stopPropagation(),
						(2 == u ? a.b : 3 == u && a._) && n.preventDefault(), s); e = f.j;) {
					if ("function" == typeof e) i = e(i);
					else
						for (var c = e.length; c--;) i = e[c](i);
					f = f.p
				}
				f(i, o)
			}
		}
		return v.q = n, v
	}

	function rr(n, r) {
		return n.$ == r.$ && Q(n.a, r.a)
	}

	function tr(n, r) {
		var t = [];
		return ur(n, r, t, 0), t
	}

	function er(n, r, t, e) {
		var u = {
			$: r,
			r: t,
			s: e,
			t: void 0,
			u: void 0
		};
		return n.push(u), u
	}

	function ur(n, r, t, e) {
		if (n !== r) {
			var u = n.$,
				a = r.$;
			if (u !== a) {
				if (1 !== u || 2 !== a) return void er(t, 0, e, r);
				r = function(n) {
					for (var r = n.e, t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = r[u].b;
					return {
						$: 1,
						c: n.c,
						d: n.d,
						e: e,
						f: n.f,
						b: n.b
					}
				}(r), a = 1
			}
			switch (a) {
				case 5:
					for (var i = n.l, o = r.l, f = i.length, c = f === o.length; c && f--;) c = i[f] === o[f];
					if (c) return void(r.k = n.k);
					r.k = r.m();
					var s = [];
					return ur(n.k, r.k, s, 0), void(0 < s.length && er(t, 1, e, s));
				case 4:
					for (var v = n.j, d = r.j, b = !1, l = n.k; 4 === l.$;) b = !0, "object" != typeof v ? v = [v, l.j] : v.push(l.j),
						l = l.k;
					for (var h = r.k; 4 === h.$;) b = !0, "object" != typeof d ? d = [d, h.j] : d.push(h.j), h = h.k;
					return b && v.length !== d.length ? void er(t, 0, e, r) : ((b ? function(n, r) {
						for (var t = 0; t < n.length; t++)
							if (n[t] !== r[t]) return !1;
						return !0
					}(v, d) : v === d) || er(t, 2, e, d), void ur(l, h, t, e + 1));
				case 0:
					return void(n.a !== r.a && er(t, 3, e, r.a));
				case 1:
					return void ar(n, r, t, e, or);
				case 2:
					return void ar(n, r, t, e, fr);
				case 3:
					if (n.h !== r.h) return void er(t, 0, e, r);
					var g = ir(n.d, r.d);
					g && er(t, 4, e, g);
					var $ = r.i(n.g, r.g);
					return void($ && er(t, 5, e, $))
			}
		}
	}

	function ar(n, r, t, e, u) {
		if (n.c === r.c && n.f === r.f) {
			var a = ir(n.d, r.d);
			a && er(t, 4, e, a), u(n, r, t, e)
		} else er(t, 0, e, r)
	}

	function ir(n, r, t) {
		var e;
		for (var u in n)
			if ("a1" !== u && "a0" !== u && "a3" !== u && "a4" !== u)
				if (u in r) {
					var a = n[u],
						i = r[u];
					a === i && "value" !== u && "checked" !== u || "a0" === t && rr(a, i) || ((e = e || {})[u] = i)
				} else(e = e || {})[u] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
					f: n[u].f,
					o: void 0
				} : "string" == typeof n[u] ? "" : null;
		else {
			var o = ir(n[u], r[u] || {}, u);
			o && ((e = e || {})[u] = o)
		}
		for (var f in r) f in n || ((e = e || {})[f] = r[f]);
		return e
	}

	function or(n, r, t, e) {
		var u = n.e,
			a = r.e,
			i = u.length,
			o = a.length;
		o < i ? er(t, 6, e, {
			v: o,
			i: i - o
		}) : i < o && er(t, 7, e, {
			v: i,
			e: a
		});
		for (var f = i < o ? i : o, c = 0; c < f; c++) {
			var s = u[c];
			ur(s, a[c], t, ++e), e += s.b || 0
		}
	}

	function fr(n, r, t, e) {
		for (var u = [], a = {}, i = [], o = n.e, f = r.e, c = o.length, s = f.length, v = 0, d = 0, b = e; v < c && d < s;) {
			var l = (E = o[v]).a,
				h = (T = f[d]).a,
				g = E.b,
				$ = T.b;
			if (l !== h) {
				var m = o[v + 1],
					p = f[d + 1];
				if (m) var w = m.a,
					x = m.b,
					C = h === w;
				if (p) var y = p.a,
					k = p.b,
					A = l === y;
				if (A && C) ur(g, k, u, ++b), sr(a, u, l, $, d, i), b += g.b || 0, vr(a, u, l, x, ++b), b += x.b || 0, v += 2, d +=
					2;
				else if (A) b++, sr(a, u, h, $, d, i), ur(g, k, u, b), b += g.b || 0, v += 1, d += 2;
				else if (C) vr(a, u, l, g, ++b), b += g.b || 0, ur(x, $, u, ++b), b += x.b || 0, v += 2, d += 1;
				else {
					if (!m || w !== y) break;
					vr(a, u, l, g, ++b), sr(a, u, h, $, d, i), b += g.b || 0, ur(x, k, u, ++b), b += x.b || 0, v += 2, d += 2
				}
			} else ur(g, $, u, ++b), b += g.b || 0, v++, d++
		}
		for (; v < c;) {
			var E;
			vr(a, u, (E = o[v]).a, g = E.b, ++b), b += g.b || 0, v++
		}
		for (; d < s;) {
			var T, j = j || [];
			sr(a, u, (T = f[d]).a, T.b, void 0, j), d++
		}(0 < u.length || 0 < i.length || j) && er(t, 8, e, {
			w: u,
			x: i,
			y: j
		})
	}
	var cr = "_elmW6BL";

	function sr(n, r, t, e, u, a) {
		var i = n[t];
		if (!i) return a.push({
			r: u,
			A: i = {
				c: 0,
				z: e,
				r: u,
				s: void 0
			}
		}), void(n[t] = i);
		if (1 === i.c) {
			a.push({
				r: u,
				A: i
			}), i.c = 2;
			var o = [];
			return ur(i.z, e, o, i.r), i.r = u, void(i.s.s = {
				w: o,
				A: i
			})
		}
		sr(n, r, t + cr, e, u, a)
	}

	function vr(n, r, t, e, u) {
		var a = n[t];
		if (a) {
			if (0 === a.c) {
				a.c = 2;
				var i = [];
				return ur(e, a.z, i, u), void er(r, 9, u, {
					w: i,
					A: a
				})
			}
			vr(n, r, t + cr, e, u)
		} else {
			var o = er(r, 9, u, void 0);
			n[t] = {
				c: 1,
				z: e,
				r: u,
				s: o
			}
		}
	}

	function dr(n, r, t, e) {
		! function n(r, t, e, u, a, i, o) {
			var f = e[u];
			var c = f.r;
			for (; c === a;) {
				var s = f.$;
				if (1 === s) dr(r, t.k, f.s, o);
				else if (8 === s) {
					f.t = r, f.u = o;
					var v = f.s.w;
					0 < v.length && n(r, t, v, 0, a, i, o)
				} else if (9 === s) {
					f.t = r, f.u = o;
					var d = f.s;
					if (d) {
						d.A.s = r;
						var v = d.w;
						0 < v.length && n(r, t, v, 0, a, i, o)
					}
				} else f.t = r, f.u = o;
				if (!(f = e[++u]) || (c = f.r) > i) return u
			}
			var b = t.$;
			if (4 === b) {
				for (var l = t.k; 4 === l.$;) l = l.k;
				return n(r, l, e, u, a + 1, i, r.elm_event_node_ref)
			}
			var h = t.e;
			var g = r.childNodes;
			for (var $ = 0; $ < h.length; $++) {
				var m = 1 === b ? h[$] : h[$].b,
					p = ++a + (m.b || 0);
				if (a <= c && c <= p && (u = n(g[$], m, e, u, a, p, o), !(f = e[u]) || (c = f.r) > i)) return u;
				a = p
			}
			return u
		}(n, r, t, 0, 0, r.b, e)
	}

	function br(n, r, t, e) {
		return 0 === t.length ? n : (dr(n, r, t, e), lr(n, t))
	}

	function lr(n, r) {
		for (var t = 0; t < r.length; t++) {
			var e = r[t],
				u = e.t,
				a = hr(u, e);
			u === n && (n = a)
		}
		return n
	}

	function hr(n, r) {
		switch (r.$) {
			case 0:
				return function(n, r, t) {
					var e = n.parentNode,
						u = Gn(r, t);
					u.elm_event_node_ref || (u.elm_event_node_ref = n.elm_event_node_ref);
					e && u !== n && e.replaceChild(u, n);
					return u
				}(n, r.s, r.u);
			case 4:
				return Qn(n, r.u, r.s), n;
			case 3:
				return n.replaceData(0, n.length, r.s), n;
			case 1:
				return lr(n, r.s);
			case 2:
				return n.elm_event_node_ref ? n.elm_event_node_ref.j = r.s : n.elm_event_node_ref = {
					j: r.s,
					p: r.u
				}, n;
			case 6:
				for (var t = r.s, e = 0; e < t.i; e++) n.removeChild(n.childNodes[t.v]);
				return n;
			case 7:
				for (var u = (t = r.s).e, a = n.childNodes[e = t.v]; e < u.length; e++) n.insertBefore(Gn(u[e], r.u), a);
				return n;
			case 9:
				if (!(t = r.s)) return n.parentNode.removeChild(n), n;
				var i = t.A;
				return void 0 !== i.r && n.parentNode.removeChild(n), i.s = lr(n, t.w), n;
			case 8:
				return function(n, r) {
					var t = r.s,
						e = function(n, r) {
							if (!n) return;
							for (var t = Nn.createDocumentFragment(), e = 0; e < n.length; e++) {
								var u = n[e],
									a = u.A;
								On(t, 2 === a.c ? a.s : Gn(a.z, r.u))
							}
							return t
						}(t.y, r);
					n = lr(n, t.w);
					for (var u = t.x, a = 0; a < u.length; a++) {
						var i = u[a],
							o = i.A,
							f = 2 === o.c ? o.s : Gn(o.z, r.u);
						n.insertBefore(f, n.childNodes[i.r])
					}
					e && On(n, e);
					return n
				}(n, r);
			case 5:
				return r.s(n);
			default:
				L(10)
		}
	}

	function gr(n) {
		if (3 === n.nodeType) return Rn(n.textContent);
		if (1 !== n.nodeType) return Rn("");
		for (var r = d, t = n.attributes, e = t.length; e--;) {
			var u = t[e];
			r = b(m(Dn, u.name, u.value), r)
		}
		var a = n.tagName.toLowerCase(),
			i = d,
			o = n.childNodes;
		for (e = o.length; e--;) i = b(gr(o[e]), i);
		return p(Sn, a, r, i)
	}
	var $r = t(function(r, n, t, o) {
			return gn(n, o, r.aZ, r.a5, r.a4, function(e, n) {
				var u = r.a7,
					a = o.node,
					i = gr(a);
				return pr(n, function(n) {
					var r = u(n),
						t = tr(i, r);
					a = br(a, i, t, e), i = r
				})
			})
		}),
		mr = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
			setTimeout(n, 1e3 / 60)
		};

	function pr(t, e) {
		e(t);
		var u = 0;

		function a() {
			u = 1 === u ? 0 : (mr(a), e(t), 1)
		}
		return function(n, r) {
			t = n, r ? (e(t), 2 === u && (u = 1)) : (0 === u && mr(a), u = 2)
			
		}
	}
	var wr = {
		addEventListener: function() {},
		removeEventListener: function() {}
	};
	"undefined" != typeof document && document, "undefined" != typeof window && window;
	var xr, Cr, yr, kr = function(n) {
			return {
				$: 0,
				a: n
			}
		},
		Ar = {
			$: 1
		},
		Er = function(n) {
			return !n.$
		},
		Tr = 1,
		jr = 2,
		Lr = 0,
		_r = f(function(n, r, t) {
			for (;;) {
				if (-2 === t.$) return r;
				var e = t.d,
					u = n,
					a = p(n, t.b, t.c, p(_r, n, r, t.e));
				n = u, r = a, t = e
			}
		}),
		Nr = o,
		Or = function(n) {
			return p(_r, f(function(n, r, t) {
				return m(Nr, k(n, r), t)
			}), d, n)
		},
		Rr = t(function(n, r, t, e) {
			return {
				$: 0,
				a: n,
				b: r,
				c: t,
				d: e
			}
		}),
		Sr = _,
		qr = e(function(n, r) {
			return O(r) / O(n)
		}),
		Hr = Sr(m(qr, 2, 32)),
		Fr = [],
		Pr = v(Rr, 0, Hr, Fr, Fr),
		zr = j,
		Br = f(function(n, r, t) {
			for (;;) {
				if (!t.b) return r;
				var e = t.b,
					u = n,
					a = m(n, t.a, r);
				n = u, r = a, t = e
			}
		}),
		Mr = function(n) {
			return p(Br, Nr, d, n)
		},
		Dr = e(function(n, r) {
			for (;;) {
				var t = m(zr, 32, n),
					e = t.b,
					u = m(Nr, {
						$: 0,
						a: t.a
					}, r);
				if (!e.b) return Mr(u);
				n = e, r = u
			}
		}),
		Ir = function(n) {
			return n.a
		},
		Wr = e(function(n, r) {
			for (;;) {
				var t = Sr(r / 32);
				if (1 === t) return m(zr, 32, n).a;
				n = m(Dr, n, d), r = t
			}
		}),
		Jr = N,
		Ur = e(function(n, r) {
			return 0 < x(n, r) ? n : r
		}),
		Yr = function(n) {
			return n.length
		},
		Gr = e(function(n, r) {
			if (r.a) {
				var t = 32 * r.a,
					e = Jr(m(qr, 32, t - 1)),
					u = n ? Mr(r.e) : r.e,
					a = m(Wr, u, r.a);
				return v(Rr, Yr(r.d) + t, m(Ur, 5, e * Hr), a, r.d)
			}
			return v(Rr, Yr(r.d), Hr, Fr, r.d)
		}),
		Qr = T,
		Vr = u(function(n, r, t, e, u) {
			for (;;) {
				if (r < 0) return m(Gr, !1, {
					e: e,
					a: t / 32 | 0,
					d: u
				});
				var a = {
					$: 1,
					a: p(Qr, 32, r, n)
				};
				n = n, r = r - 32, t = t, e = m(Nr, a, e), u = u
			}
		}),
		Xr = e(function(n, r) {
			if (0 < n) {
				var t = n % 32;
				return l(Vr, r, n - t - 32, n, d, p(Qr, t, n - t, r))
			}
			return Pr
		}),
		Zr = function(n) {
			return {
				$: 0,
				a: n
			}
		},
		Kr = function(n) {
			return {
				$: 1,
				a: n
			}
		},
		nt = function(n) {
			return {
				$: 0,
				a: n
			}
		},
		rt = e(function(n, r) {
			return {
				$: 3,
				a: n,
				b: r
			}
		}),
		tt = e(function(n, r) {
			return {
				$: 0,
				a: n,
				b: r
			}
		}),
		et = e(function(n, r) {
			return {
				$: 1,
				a: n,
				b: r
			}
		}),
		ut = function(n) {
			return {
				$: 2,
				a: n
			}
		},
		at = function(n) {
			var r = n.charCodeAt(0);
			return r < 55296 || 56319 < r ? r : 1024 * (r - 55296) + n.charCodeAt(1) - 56320 + 65536
		},
		it = function(n) {
			var r = at(n);
			return 97 <= r && r <= 122
		},
		ot = function(n) {
			var r = at(n);
			return r <= 90 && 65 <= r
		},
		ft = function(n) {
			return it(n) || ot(n)
		},
		ct = function(n) {
			return it(n) || ot(n) || function(n) {
				var r = at(n);
				return r <= 57 && 48 <= r
			}(n)
		},
		st = function(n) {
			return p(Br, e(function(n, r) {
				return r + 1
			}), 0, n)
		},
		vt = g,
		dt = f(function(n, r, t) {
			for (;;) {
				if (1 <= x(n, r)) return t;
				var e = n,
					u = r - 1,
					a = m(Nr, r, t);
				n = e, r = u, t = a
			}
		}),
		bt = e(function(n, r) {
			return p(dt, n, r, d)
		}),
		lt = e(function(n, r) {
			return p(vt, n, m(bt, 0, st(r) - 1), r)
		}),
		ht = q,
		gt = H,
		$t = e(function(n, r) {
			return m(S, n, c(r))
		}),
		mt = function(n) {
			var r = n.charCodeAt(0);
			return r ? Zr(r < 55296 || 56319 < r ? k(A(n[0]), n.slice(1)) : k(A(n[0] + n[1]), n.slice(2))) : Ar
		},
		pt = e(function(n, r) {
			return h(m(R, n, r))
		}),
		wt = function(n) {
			return m($t, "\n    ", m(pt, "\n", n))
		},
		xt = X,
		Ct = e(function(n, r) {
			return "\n\n(" + gt(n + 1) + ") " + wt(yt(r))
		}),
		yt = function(n) {
			return m(kt, n, d)
		},
		kt = e(function(n, r) {
			n: for (;;) switch (n.$) {
				case 0:
					var e = n.a,
						t = n.b,
						u = function() {
							var n = mt(e);
							if (1 === n.$) return !1;
							var r = n.a,
								t = r.b;
							return ft(r.a) && m(ht, ct, t)
						}();
					n = t, r = m(Nr, u ? "." + e : "['" + e + "']", r);
					continue n;
				case 1:
					t = n.b;
					var a = "[" + gt(n.a) + "]";
					n = t, r = m(Nr, a, r);
					continue n;
				case 2:
					var i = n.a;
					if (i.b) {
						if (i.b.b) {
							var o = (r.b ? "The Json.Decode.oneOf at json" + m($t, "", Mr(r)) : "Json.Decode.oneOf") +
								" failed in the following " + gt(st(i)) + " ways:";
							return m($t, "\n\n", m(Nr, o, m(lt, Ct, i)))
						}
						n = t = i.a, r = r;
						continue n
					}
					return "Ran into a Json.Decode.oneOf with no possibilities" + (r.b ? " at json" + m($t, "", Mr(r)) : "!");
				default:
					var f = n.a,
						c = n.b;
					return (o = r.b ? "Problem with the value at json" + m($t, "", Mr(r)) + ":\n\n    " :
						"Problem with the given value:\n\n") + (wt(m(xt, 4, c)) + "\n\n") + f
			}
		}),
		At = function(n) {
			return {
				$: 2,
				m: n
			}
		}(d),
		Et = z,
		Tt = F,
		jt = {
			$: 4
		},
		Lt = {
			$: 6
		},
		_t = function(n) {
			return {
				$: 0,
				a: n
			}
		},
		Nt = {
			$: 5
		},
		Ot = (xr = "mouseEvent", Cr = m(Et, function(a) {
			return m(Et, function(u) {
				return m(Et, function(e) {
					return m(Et, function(t) {
						return m(Et, function(r) {
							return m(Et, function(n) {
								return _t({
									w: n,
									r: r,
									W: t,
									A: e,
									m: u,
									o: a
								})
							}, m(Tt, "kind", Lt))
						}, m(Tt, "lang", Lt))
					}, m(Tt, "link", Nt))
				}, m(Tt, "rect", m(Et, function(o) {
					return m(Et, function(i) {
						return m(Et, function(a) {
							return m(Et, function(u) {
								return m(Et, function(e) {
									return m(Et, function(t) {
										return m(Et, function(r) {
											return m(Et, function(n) {
												return _t({
													ak: n,
													i: r,
													x: t,
													aF: e,
													C: u,
													p: a,
													P: i,
													Q: o
												})
											}, m(Tt, "bottom", jt))
										}, m(Tt, "height", jt))
									}, m(Tt, "left", jt))
								}, m(Tt, "right", jt))
							}, m(Tt, "top", jt))
						}, m(Tt, "width", jt))
					}, m(Tt, "x", jt))
				}, m(Tt, "y", jt))))
			}, m(Tt, "title", Lt))
		}, m(Tt, "viewport", m(Et, function(r) {
			return m(Et, function(n) {
				return _t({
					aG: n,
					o: r
				})
			}, m(Tt, "scene", m(Et, function(r) {
				return m(Et, function(n) {
					return _t({
						i: n,
						p: r
					})
				}, m(Tt, "height", jt))
			}, m(Tt, "width", jt))))
		}, m(Tt, "viewport", m(Et, function(e) {
			return m(Et, function(t) {
				return m(Et, function(r) {
					return m(Et, function(n) {
						return _t({
							i: n,
							p: r,
							P: t,
							Q: e
						})
					}, m(Tt, "height", jt))
				}, m(Tt, "width", jt))
			}, m(Tt, "x", jt))
		}, m(Tt, "y", jt)))))), yn(xr), $n[xr] = {
			f: Tn,
			r: Cr,
			a: jn
		}, wn(xr)),
		Rt = function(n) {
			var r = {
				b: n.W,
				r: n.r,
				A: n.A,
				m: n.m,
				o: n.o
			};
			return "enter" === n.w ? {
				$: 0,
				a: r
			} : function(n) {
				return {
					$: 1,
					a: n
				}
			}(r)
		},
		St = f(function(n, r, t) {
			return {
				$: 1,
				a: n,
				b: r,
				c: t
			}
		}),
		qt = function(n) {
			return {
				$: 5,
				a: n
			}
		},
		Ht = e(function(n, r) {
			return {
				$: 7,
				a: n,
				b: r
			}
		}),
		Ft = hn,
		Pt = function(n) {
			return n
		},
		zt = rn,
		Bt = zt(0),
		Mt = t(function(n, r, t, e) {
			if (e.b) {
				var u = e.a,
					a = e.b;
				if (a.b) {
					var i = a.a,
						o = a.b;
					if (o.b) {
						var f = o.a,
							c = o.b;
						if (c.b) {
							var s = c.b;
							return m(n, u, m(n, i, m(n, f, m(n, c.a, 500 < t ? p(Br, n, r, Mr(s)) : v(Mt, n, r, t + 1, s)))))
						}
						return m(n, u, m(n, i, m(n, f, r)))
					}
					return m(n, u, m(n, i, r))
				}
				return m(n, u, r)
			}
			return r
		}),
		Dt = f(function(n, r, t) {
			return v(Mt, n, r, 0, t)
		}),
		It = e(function(t, n) {
			return p(Dt, e(function(n, r) {
				return m(Nr, t(n), r)
			}), d, n)
		}),
		Wt = un,
		Jt = e(function(r, n) {
			return m(Wt, function(n) {
				return zt(r(n))
			}, n)
		}),
		Ut = f(function(t, n, e) {
			return m(Wt, function(r) {
				return m(Wt, function(n) {
					return zt(m(t, r, n))
				}, e)
			}, n)
		}),
		Yt = pn,
		Gt = e(function(n, r) {
			var t = r;
			return cn(m(Wt, Yt(n), t))
		});
	$n.Task = {
		b: Bt,
		c: f(function(n, r) {
			return m(Jt, function() {
				return 0
			}, (t = m(It, Gt(n), r), p(Dt, Ut(Nr), zt(d), t)));
			var t
		}),
		d: f(function() {
			return zt(0)
		}),
		e: e(function(n, r) {
			return m(Jt, n, r)
		}),
		f: yr
	};
	var Qt, Vt, Xt = wn("Task"),
		Zt = e(function(n, r) {
			return Xt(m(Jt, n, r))
		}),
		Kt = function(n) {
			return m(Zt, function() {
				return n
			}, Ft(300))
		},
		ne = function(n) {
			return m(Zt, function() {
				return {
					$: 6,
					a: n
				}
			}, Ft(150))
		},
		re = a(function(n, r, t, e, u, a) {
			return {
				am: t,
				an: e,
				aS: a,
				aT: r,
				ad: u,
				m: n
			}
		}),
		te = function(n) {
			return {
				$: 1,
				a: n
			}
		},
		ee = m(Et, function(n) {
			switch (n) {
				case "ltr":
					return _t(0);
				case "rtl":
					return _t(1);
				default:
					return te("Unknown language direction: " + n)
			}
		}, Lt),
		ue = v(M, f(function(n, r, t) {
			return {
				i: t,
				aH: n,
				p: r
			}
		}), m(Tt, "source", Lt), m(Tt, "width", jt), m(Tt, "height", jt));
		console.log('ue',ue)
		var ae = B,
		ie = function(n) {
			return {
				$: 15,
				g: n
			}
		},
		oe = s(D, re, m(Tt, "title", Lt), m(Tt, "displaytitle", Lt), m(Tt, "extract_html", Lt), m(Tt, "extract", Lt), m(Tt,
			"thumbnail", ie(h([m(ae, Zr, ue), _t(Ar)]))), m(Tt, "dir", ee)),
		
		fe = e(function(n, r) {
			return "https://ktd4869.github.io/Tool/include/"+r+".json"
			//return "https://" + n + ".wikipedia.org/api/rest_v1/page/summary/" + r
		}),
		ce = {
			$: 0
		},
		se = {
			$: -2
		},
		ve = se,
		de = C,
		be = e(function(n, r) {
			n: for (;;) {
				if (-2 === r.$) return Ar;
				var t = r.c,
					e = r.d,
					u = r.e;
				switch (m(de, n, r.b)) {
					case 0:
						n = n, r = e;
						continue n;
					case 1:
						return Zr(t);
					default:
						n = n, r = u;
						continue n
				}
			}
		}),
		le = u(function(n, r, t, e, u) {
			return {
				$: -1,
				a: n,
				b: r,
				c: t,
				d: e,
				e: u
			}
		}),
		he = u(function(n, r, t, e, u) {
			if (-1 !== u.$ || u.a) {
				if (-1 !== e.$ || e.a || -1 !== e.d.$ || e.d.a) return l(le, n, r, t, e, u);
				var a = e.d;
				s = e.e;
				return l(le, 0, e.b, e.c, l(le, 1, a.b, a.c, a.d, a.e), l(le, 1, r, t, s, u))
			}
			var i = u.b,
				o = u.c,
				f = u.d,
				c = u.e;
			if (-1 !== e.$ || e.a) return l(le, n, i, o, l(le, 0, r, t, e, f), c);
			var s;
			return l(le, 0, r, t, l(le, 1, e.b, e.c, e.d, s = e.e), l(le, 1, i, o, f, c))
		}),
		ge = f(function(n, r, t) {
			if (-2 === t.$) return l(le, 0, n, r, se, se);
			var e = t.a,
				u = t.b,
				a = t.c,
				i = t.d,
				o = t.e;
			switch (m(de, n, u)) {
				case 0:
					return l(he, e, u, a, p(ge, n, r, i), o);
				case 1:
					return l(le, e, u, r, i, o);
				default:
					return l(he, e, u, a, i, p(ge, n, r, o))
			}
		}),
		$e = f(function(n, r, t) {
			var e = p(ge, n, r, t);
			if (-1 !== e.$ || e.a) return e;
			return l(le, 1, e.b, e.c, e.d, e.e)
		}),
		me = function(n) {
			if (-1 !== n.$ || -1 !== n.d.$ || -1 !== n.e.$) return n;
			if (-1 !== n.e.d.$ || n.e.d.a) {
				var r = n.d,
					t = n.e;
				i = t.b, o = t.c, e = t.d, s = t.e;
				return l(le, 1, n.b, n.c, l(le, 0, r.b, r.c, r.d, r.e), l(le, 0, i, o, e, s))
			}
			var e, u = n.d,
				a = n.e,
				i = a.b,
				o = a.c,
				f = (e = a.d, e.d),
				c = e.e,
				s = a.e;
			return l(le, 0, e.b, e.c, l(le, 1, n.b, n.c, l(le, 0, u.b, u.c, u.d, u.e), f), l(le, 1, i, o, c, s))
		},
		pe = function(n) {
			if (-1 !== n.$ || -1 !== n.d.$ || -1 !== n.e.$) return n;
			if (-1 !== n.d.d.$ || n.d.d.a) {
				var r = n.d,
					t = r.d,
					e = n.e;
				s = e.b, v = e.c, d = e.d, b = e.e;
				return l(le, 1, u = n.b, a = n.c, l(le, 0, r.b, r.c, t, f = r.e), l(le, 0, s, v, d, b))
			}
			var u = n.b,
				a = n.c,
				i = n.d,
				o = i.d,
				f = i.e,
				c = n.e,
				s = c.b,
				v = c.c,
				d = c.d,
				b = c.e;
			return l(le, 0, i.b, i.c, l(le, 1, o.b, o.c, o.d, o.e), l(le, 1, u, a, f, l(le, 0, s, v, d, b)))
		},
		we = i(function(n, r, t, e, u, a, i) {
			if (-1 !== a.$ || a.a) {
				n: for (; - 1 === i.$ && 1 === i.a;) {
					if (-1 === i.d.$) {
						if (1 !== i.d.a) break n;
						return pe(r)
					}
					return pe(r)
				}
				return r
			}
			return l(le, t, a.b, a.c, a.d, l(le, 0, e, u, a.e, i))
		}),
		xe = function(n) {
			if (-1 !== n.$ || -1 !== n.d.$) return se;
			var r = n.a,
				t = n.b,
				e = n.c,
				u = n.d,
				a = u.d,
				i = n.e;
			if (1 !== u.a) return l(le, r, t, e, xe(u), i);
			if (-1 !== a.$ || a.a) {
				var o = me(n);
				if (-1 !== o.$) return se;
				var f = o.e;
				return l(he, o.a, o.b, o.c, xe(o.d), f)
			}
			return l(le, r, t, e, xe(u), i)
		},
		Ce = e(function(n, r) {
			if (-2 === r.$) return se;
			var t = r.a,
				e = r.b,
				u = r.c,
				a = r.d,
				i = r.e;
			if (x(n, e) < 0) {
				if (-1 !== a.$ || 1 !== a.a) return l(le, t, e, u, m(Ce, n, a), i);
				var o = a.d;
				if (-1 !== o.$ || o.a) {
					var f = me(r);
					if (-1 !== f.$) return se;
					var c = f.e;
					return l(he, f.a, f.b, f.c, m(Ce, n, f.d), c)
				}
				return l(le, t, e, u, m(Ce, n, a), i)
			}
			return m(ye, n, s(we, n, r, t, e, u, a, i))
		}),
		ye = e(function(n, r) {
			if (-1 !== r.$) return se;
			var t = r.a,
				e = r.b,
				u = r.c,
				a = r.d,
				i = r.e;
			if (w(n, e)) {
				var o = function(n) {
					for (;;) {
						if (-1 !== n.$ || -1 !== n.d.$) return n;
						n = n.d
					}
				}(i);
				return -1 !== o.$ ? se : l(he, t, o.b, o.c, a, xe(i))
			}
			return l(he, t, e, u, a, m(Ce, n, i))
		}),
		ke = e(function(n, r) {
			var t = m(Ce, n, r);
			if (-1 !== t.$ || t.a) return t;
			return l(le, 1, t.b, t.c, t.d, t.e)
		}),
		Ae = f(function(n, r, t) {
			var e = r(m(be, n, t));
			return e.$ ? m(ke, n, t) : p($e, n, e.a, t)
		}),
		Ee = function(n) {
			return !n.$
		},
		Te = e(function(n, r) {
			return {
				$: 4,
				a: n,
				b: r
			}
		}),
		je = function(n) {
			return {
				$: 3,
				a: n
			}
		},
		Le = function(n) {
			return {
				$: 0,
				a: n
			}
		},
		_e = {
			$: 2
		},
		Ne = {
			$: 1
		},
		Oe = function(n) {
			return 1 === n.$
		},
		Re = function(n) {
			return {
				$: 0,
				b: "text",
				a: n
			}
		},
		Se = I,
		qe = Pt,
		He = e(function(n, r) {
			return qe({
				aN: ce,
				S: function(t) {
					return Re(function(n) {
						var r = m(Se, t, n.aN);
						return 1 !== r.$ ? nt(r.a) : Kr(yt(r.a))
					})
				}(r),
				O: d,
				Y: "GET",
				ag: Ar,
				a6: n,
				ai: !1
			})
		}),
		Fe = e(function(n, r) {
			return m(He, m(fe, n, r), oe)
		}),
		Pe = e(function(n, r) {
			return k(kr(r.$ ? Ar : Zr(k(n, r.a))), At)
		}),
		ze = Z,
		Be = kn("log", ze),
		Me = function(n) {
			return k(n, At)
		},
		De = nn,
		Ie = kn("renderHTML", function() {
			return De
		}),
		We = f(function(n, r, t) {
			return n(r(t))
		}),
		Je = an,
		Ue = e(function(n, r) {
			return Xt(m(Je, m(We, m(We, zt, n), Kr), m(Wt, m(We, m(We, zt, n), nt), r)))
		}),
		Ye = e(function(n, r) {
			return m(Ue, n, m(Ln, r, Ar))
		}),
		Ge = e(function(n, r) {
			var t = k(r, n);
			n: for (;;) switch (t.b.$) {
				case 8:
					if (t.a.$ || t.a.a.$) break n;
					return Me(kr(Ar));
				case 0:
					return k(p(St, g = t.b.a, 0, Ar), ne(g));
				case 6:
					if (1 !== t.a.$ || t.a.b || 1 !== t.a.c.$) break n;
					var e = t.a;
					return w(e.a.b, (g = t.b.a).b) ? k(r, m(Ye, Ht(g), m(Fe, g.r, g.m))) : Me(r);
				case 7:
					if (1 !== t.a.$ || 1 !== t.a.c.$) break n;
					var u = t.a,
						a = u.b,
						i = t.b,
						o = i.b;
					if (w(u.a.b, (g = i.a).b)) {
						if (o.$) {
							var f = o.a,
								c = function() {
									switch (f.$) {
										case 0:
											return "Bad URL: " + f.a;
										case 1:
											return "Request timed out";
										case 2:
											return "Network error";
										case 3:
											return "Status error: " + gt((n = f.a).aI.aR) + " - " + n.aI.a_;
										default:
											var n = f.b;
											return "Payload error:\n" + f.a
									}
								}();
							return k(kr(Ar), Be("Request failed\n" + c))
						}
						return k(p(St, g, a, Zr(v = o.a)), Ie(0))
					}
					return Me(r);
				case 1:
					if (1 !== t.a.$ || t.a.b) break n;
					var s = t.a,
						v = s.c;
					return w(s.a.b, (g = t.b.a).b) ? k(p(St, g, 1, v), Kt({
						$: 2,
						a: g
					})) : Me(r);
				case 2:
					if (1 !== t.a.$ || 1 !== t.a.b) break n;
					var d = t.a;
					v = d.c;
					return w(d.a.b, (g = t.b.a).b) ? m(Pe, g, v) : Me(r);
				case 3:
					if (1 !== t.a.$) break n;
					switch (t.a.b) {
						case 1:
							var b = t.a;
							v = b.c;
							return w(b.a.b, (g = t.b.a).b) ? Me(p(St, g, 2, v)) : Me(r);
						case 3:
							var l = t.a;
							v = l.c;
							return w(l.a.b, (g = t.b.a).b) ? Me(p(St, g, 2, v)) : Me(r);
						default:
							break n
					}
				case 4:
					if (1 !== t.a.$ || 2 !== t.a.b) break n;
					var h = t.a;
					v = h.c;
					return w(h.a.b, (g = t.b.a).b) ? k(p(St, g, 3, v), Kt(qt(g))) : Me(r);
				default:
					if (1 !== t.a.$ || 3 !== t.a.b) break n;
					var g, $ = t.a;
					v = $.c;
					return w($.a.b, (g = t.b.a).b) ? m(Pe, g, v) : Me(r)
			}
			return Me(r)
		}),
		Qe = H,
		Ve = function(n) {
			return Qe(n) + "px"
		},
		Xe = e(function(n, r) {
			return r.$ ? Ar : Zr(n(r.a))
		}),
		Ze = e(function(n, r) {
			return r.$ ? n : r.a
		}),
		Ke = f(function(n, r, t) {
			var e = r.o,
				u = t.ad,
				a = n.C + e.Q + n.i,
				i = n.x + e.P,
				o = m(Ze, !0, m(Xe, function(n) {
					return 0 < x(n.i, n.p)
				}, u)),
				f = o ? 0 : 1,
				c = o ? 260 : 320,
				s = o ? 0 : 1,
				v = o ? "100%" : Ve(190),
				d = o ? {
					ac: "max-height",
					ah: 250
				} : {
					ac: "max-width",
					ah: 320
				},
				b = function() {
					if (u.$) return k(0, 0);
					var n = u.a;
					return o ? k(250, 250 * n.p / n.i) : k(320, 320 * n.i / n.p)
				}(),
				l = b.a,
				h = b.b,
				g = o ? k(h, l) : k(l, h);
			return {
				R: d,
				T: v,
				U: s,
				V: c,
				w: f,
				x: i,
				ae: g.b,
				af: g.a,
				C: a
			}
		}),
		nu = function(n) {
			switch (n.$) {
				case 0:
					return 0;
				case 1:
					return 1;
				case 2:
					return 2;
				default:
					return 3
			}
		},
		ru = e(function(n, r) {
			return m(Dn, function(n) {
				return /^(on|formAction$)/i.test(n) ? "data-" + n : n
			}(n), Wn(r))
		}),
		tu = Sn("img"),
		eu = e(function(n, r) {
			return m(Mn, n, ze(r))
		}),
		uu = eu("className"),
		au = m(tu, h([uu("ContextCardLogo"), (Qt =
			"https://ktd4869.github.io/Tool/figure/logo.png", m(eu, "src", Wn(Qt)))]), d),
		iu = Sn("div"),
		ou = Bn,
		fu = e(function(n, r) {
			//console.log('n',n)
			//console.log('m',r)
			return m(iu, h([uu("ContextCardThumbnail"), m(ou, "background-image", "url(" + r.aH + ")"), m(ou, "width", Ve(n.af)),
			//return m(iu, h([uu("ContextCardThumbnail"), m(ou, "background-image", "url(https://ktd4869.github.io/Tool/include/" + r.m + ".jpg)"), m(ou, "width", Ve(n.af)),
				m(ou, "height", Ve(n.ae))
			]), d)
		}),
		cu = Rn,
		su = e(function(n, r) {
			//console.log('n2',n)
			//console.log('r2',r)
			var t, e = r.ad,
				u = n.R,
				a = n.w,
				i = n.V,
				o = n.T,
				f = h([m(ou, "order", gt(n.U)), m(ou, "width", Ve(i)), m(ou, "max-height", o)]),
				c = h([m(ou, "flex-direction", a ? "column" : "row"), m(ou, u.ac, Ve(u.ah))]);
			console.log('m',r.an)
			return m(iu, m(Nr, uu("ContextCardSummary"), c), h([m(iu, m(Nr, uu("ContextCardExtract"), f), h([au, m(iu, h([(t =
				r.am, m(ru, "inner-html", t))]), h([cu(r.an)]))])), e.$ ? cu("") : m(fu, n, e.a)]))
		}),
		vu = e(function(t, n) {
			return p(Dt, e(function(n, r) {
				return t(n) ? m(Nr, n, r) : r
			}), d, n)
		}),
		du = function(n) {
			return n.b
		},
		bu = zn,
		lu = e(function(n, r) {
			return m(bu, n, {
				$: 0,
				a: r
			})
		}),
		hu = Fn,
		gu = f(function(n, r, t) {
			if (r.$) return cu("");
			var e, u, a, i = r.a,
				o = p(Ke, n.A, n.o, i);
			return m(iu, h([(a = h([k("ContextCard", !0), k("ContextCardDismissed", t)]), uu(m($t, " ", m(It, Ir, m(vu, du, a))))),
				m(ou, "top", Ve(o.C)), m(ou, "left", Ve(o.x)), (u = n, e = {
					$: 3,
					a: u
				}, m(lu, "mouseenter", _t(e))),
				function(n) {
					return m(lu, "mouseleave", _t(n))
				}(function(n) {
					return {
						$: 4,
						a: n
					}
				}(n))
			]), h([p(hu, su, o, i)]))
		}),
		$u = function(n) {
			return Sn(In(n))
		},
		mu = eu("id"),
		pu = function(n) {
			return qn(In(n))
		},
		wu = Pn,
		xu = $r({
			aZ: function() {
				return k(kr(Ar), At)
			},
			a4: function() {
				return Ot(Rt)
			},
			a5: Ge,
			a7: function(r) {
				var t = f(function(n, r, t) {
					return h([k(n.r + " " + n.m, v(wu, gu, n, r, t))])
				});
				
				return p(pu, "div", h([mu("ContextCardsContainer")]), E(h([k("styles", p($u, "style", d, h([cu(
					"\n    @keyframes contextCardsFadeIn {\n        from {\n            opacity: 0;\n            transform: translate3d(0, 50%, 0);\n        }\n\n        to {\n            opacity: 1;\n            transform: translate3d(0, 0, 0);\n        }\n    }\n    @keyframes contextCardsFadeOut {\n        from {\n            opacity: 1;\n            transform: translate3d(0, 0, 0);\n        }\n\n        to {\n            opacity: 0;\n            transform: translate3d(0, 50%, 0);\n        }\n    }\n    .ContextCard, .ContextCard * {\n        box-sizing: border-box;\n    }\n\n    .ContextCard {\n        position: absolute;\n        z-index: 10000;\n        background-color: white;\n        box-shadow: 0 30px 90px -20px rgba( 0, 0, 0, 0.3 ), 0 0 1px #a2a9b1;\n        animation-name: contextCardsFadeIn;\n        animation-duration: 300ms;\n        animation-fill-mode: both;\n        border-radius: 2px;\n        overflow: hidden;\n    }\n    .ContextCard.ContextCardDismissed {\n        animation-name: contextCardsFadeOut;\n        pointer-events: none;\n    }\n    .ContextCardLogo {\n        height: 15px;\n    }\n    .ContextCardSummary {\n        display: flex;\n    }\n    .ContextCardExtract {\n        padding: 1em;\n        overflow: hidden;\n        position: relative;\n        font-size: 14px;\n        line-height: 1.4;\n    }\n    .ContextCardExtract p {\n        margin: 0.4em 0;\n    }\n    .ContextCardExtract:before, .ContextCardExtract:after {\n        content: '';\n        display: block;\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), linear-gradient(to bottom right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 3em;\n    }\n    .ContextCardThumbnail {\n        flex-shrink: 0;\n        background-position: center center;\n        background-size: 110%;\n    }\n    "
				)])))]), function() {
					if (r.$) return p(t, r.a, r.c, !1);
					if (1 === r.a.$) return d;
					var n = r.a.a;
					return p(t, n.a, Zr(n.b), !0)
					
				}()))
			}
		});
	Vt = {
		ContextCards: {
			init: xu(_t(0))(0)
		}
	}, n.Elm ? function n(r, t) {
		for (var e in t) e in r ? "init" == e ? L(6) : n(r[e], t[e]) : r[e] = t[e]
	}(n.Elm, Vt) : n.Elm = Vt
}(this), window.ContextCards = function() {
	var i = null;

	function r() {
		for (var n = document.querySelectorAll("a[data-wiki-title]"), r = 0; r < n.length; r++) {
			var t = n[r];
			"events-set" !== t.dataset.wikiPreviewEventsBound && (t.dataset.wikiPreviewEventsBound = "events-set", e(t))
		}
	}

	function e(n) {
		n.addEventListener("mouseenter", function(n) {
			t("enter", n)
		}), n.addEventListener("mouseout", function(n) {
			t("leave", n)
		})
	}

	function t(n, r) {
		var t, e, u = r.target,
			a = {
				kind: n,
				link: u,
				title: u.dataset.wikiTitle,
				lang: u.dataset.wikiLang,
				rect: u.getBoundingClientRect(),
				viewport: {
					scene: (t = document.body, e = document.documentElement, {
						width: Math.max(t.scrollWidth, t.offsetWidth, e.scrollWidth, e.offsetWidth, e.clientWidth),
						height: Math.max(t.scrollHeight, t.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight)
					}),
					viewport: {
						x: window.pageXOffset,
						y: window.pageYOffset,
						width: document.documentElement.clientWidth,
						height: document.documentElement.clientHeight
					}
				}
			};
		i.ports.mouseEvent.send(a)
	}

	function u() {
		(window.requestAnimationFrame || function(n) {
			setTimeout(n, 16)
		})(function() {
			for (var n = document.querySelectorAll(".ContextCard [inner-html]"), r = 0; r < n.length; r++) {
				var t = n[r];
				t.innerHTML = t.getAttribute("inner-html"), t.removeAttribute("inner-html")
			}
		})
	}
	
	//junchen modified
	//load all the txt
	function loadPage() {
		$("#dic").load("https://ktd4869.github.io/Tool/data/Dic_auto.html", function (responseTxt, statusTxt, xhr) {
			if (statusTxt == "success") {
				loadAllpopup();
			}
			if (statusTxt == "error") {
				alert("Error: " + xhr.status + ": " + xhr.statusText);
			}
		});
	}
	//end modify

	function loadAllpopup() {
		console.log('start listen')
		var n = document.createElement("div");
		document.body.appendChild(n), (i = Elm.ContextCards.init({
			node: n
		})).ports.renderHTML.subscribe(u), i.ports.log.subscribe(console.log), r()
	}

	loadPage();
}();
