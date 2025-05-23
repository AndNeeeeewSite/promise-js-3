!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).PNotifyMobile = {});
}(this, function(t) {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
    }
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
    }
    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function i(t, e) {
        return (i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? f(t) : e;
    }
    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function() {
            var n, r = o(t);
            if (e) {
                var i = o(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return c(this, n);
        };
    }
    function s(t) {
        return function(t) {
            if (Array.isArray(t)) return a(t);
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return a(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e);
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var n = 0, r = new Array(e); n < e; n++)r[n] = t[n];
        return r;
    }
    function l() {}
    function p(t) {
        return t();
    }
    function y() {
        return Object.create(null);
    }
    function d(t) {
        t.forEach(p);
    }
    function m(t) {
        return "function" == typeof t;
    }
    function h(t, n) {
        return t != t ? n == n : t !== n || t && "object" === e(t) || "function" == typeof t;
    }
    function v(t) {
        t.parentNode.removeChild(t);
    }
    function g(t) {
        return Array.from(t.childNodes);
    }
    var b;
    function _(t) {
        b = t;
    }
    function $() {
        if (!b) throw new Error("Function called outside component initialization");
        return b;
    }
    var w = [], P = [], x = [], O = [], j = Promise.resolve(), k = !1;
    function S(t) {
        x.push(t);
    }
    var E = !1, A = new Set;
    function D() {
        if (!E) {
            E = !0;
            do {
                for(var t = 0; t < w.length; t += 1){
                    var e = w[t];
                    _(e), T(e.$$);
                }
                for(_(null), w.length = 0; P.length;)P.pop()();
                for(var n = 0; n < x.length; n += 1){
                    var r = x[n];
                    A.has(r) || (A.add(r), r());
                }
                x.length = 0;
            }while (w.length);
            for(; O.length;)O.pop()();
            k = !1, E = !1, A.clear();
        }
    }
    function T(t) {
        if (null !== t.fragment) {
            t.update(), d(t.before_update);
            var e = t.dirty;
            t.dirty = [
                -1
            ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(S);
        }
    }
    var C = new Set;
    function M(t, e) {
        t && t.i && (C.delete(t), t.i(e));
    }
    var R = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
    function W(t, e, n) {
        var r = t.$$, o = r.fragment, i = r.on_mount, f = r.on_destroy, c = r.after_update;
        o && o.m(e, n), S(function() {
            var e = i.map(p).filter(m);
            f ? f.push.apply(f, s(e)) : d(e), t.$$.on_mount = [];
        }), c.forEach(S);
    }
    function q(t, e) {
        -1 === t.$$.dirty[0] && (w.push(t), k || (k = !0, j.then(D)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
    }
    var I = function() {
        function t() {
            n(this, t);
        }
        var e, o, i;
        return e = t, o = [
            {
                key: "$destroy",
                value: function() {
                    var t, e;
                    t = 1, null !== (e = this.$$).fragment && (d(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []), this.$destroy = l;
                }
            },
            {
                key: "$on",
                value: function(t, e) {
                    var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                    return n.push(e), function() {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1);
                    };
                }
            },
            {
                key: "$set",
                value: function(t) {
                    var e;
                    this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
                }
            }
        ], r(e.prototype, o), i && r(e, i), t;
    }(), L = R.window;
    function N(t) {
        var e, n;
        return {
            c: l,
            m: function(r, o) {
                var i, f, c, u;
                e || (i = L, f = "resize", c = t[3], i.addEventListener(f, c, u), n = function() {
                    return i.removeEventListener(f, c, u);
                }, e = !0);
            },
            p: l,
            i: l,
            o: l,
            d: function(t) {
                e = !1, n();
            }
        };
    }
    var z = {
        swipeDismiss: !0
    };
    function X(t, e, n) {
        var r, o = e.self, i = void 0 === o ? null : o, f = e.swipeDismiss, c = void 0 === f ? z.swipeDismiss : f, u = null, s = null, a = null, l = null, p = "left", y = "X", d = "Width", m = window.innerWidth, h = [];
        r = function() {
            h = [
                i.on("touchstart", function(t) {
                    if (c) {
                        var e = i.stack;
                        if (e) switch(e.dir1){
                            case "up":
                            case "down":
                                p = "left", y = "X", d = "Width";
                                break;
                            case "left":
                            case "right":
                                p = "top", y = "Y", d = "Height";
                        }
                        u = t.touches[0]["screen".concat(y)], a = i.refs.elem["scroll".concat(d)], l = window.getComputedStyle(i.refs.elem).opacity, n(1, i.refs.container.style[p] = 0, i);
                    }
                }),
                i.on("touchmove", function(t) {
                    if (u && c) {
                        var e = t.touches[0]["screen".concat(y)];
                        s = e - u;
                        var r = (1 - Math.abs(s) / a) * l;
                        n(1, i.refs.elem.style.opacity = r, i), n(1, i.refs.container.style[p] = "".concat(s, "px"), i);
                    }
                }),
                i.on("touchend", function() {
                    if (u && c) {
                        if (i.refs.container.classList.add("pnotify-mobile-animate-left"), Math.abs(s) > 40) {
                            var t = s < 0 ? -2 * a : 2 * a;
                            n(1, i.refs.elem.style.opacity = 0, i), n(1, i.refs.container.style[p] = "".concat(t, "px"), i), i.close();
                        } else i.refs.elem.style.removeProperty("opacity"), i.refs.container.style.removeProperty(p);
                        u = null, s = null, a = null, l = null;
                    }
                }),
                i.on("touchcancel", function() {
                    u && c && (i.refs.elem.style.removeProperty("opacity"), i.refs.container.style.removeProperty(p), u = null, s = null, a = null, l = null);
                }),
                i.on("pnotify:afterClose", function() {
                    c && (i.refs.elem.style.removeProperty("opacity"), i.refs.container.style.removeProperty("left"), i.refs.container.style.removeProperty("top"));
                })
            ];
        }, $().$$.on_mount.push(r), function(t) {
            $().$$.on_destroy.push(t);
        }(function() {
            h.forEach(function(t) {
                return t();
            });
        });
        return t.$$set = function(t) {
            "self" in t && n(1, i = t.self), "swipeDismiss" in t && n(2, c = t.swipeDismiss);
        }, t.$$.update = function() {
            if (3 & t.$$.dirty) {
                var e = i.stack;
                e && (m <= 480 ? "_m_spacing1" in e || (e._m_spacing1 = e.spacing1, e._m_firstpos1 = e.firstpos1, e._m_spacing2 = e.spacing2, e._m_firstpos2 = e.firstpos2, e.spacing1 = 0, e.firstpos1 = 0, e.spacing2 = 0, e.firstpos2 = 0, e.queuePosition()) : "_m_spacing1" in e && (e.spacing1 = e._m_spacing1, delete e._m_spacing1, e.firstpos1 = e._m_firstpos1, delete e._m_firstpos1, e.spacing2 = e._m_spacing2, delete e._m_spacing2, e.firstpos2 = e._m_firstpos2, delete e._m_firstpos2, e.queuePosition()));
            }
        }, [
            m,
            i,
            c,
            function() {
                return n(0, m = window.innerWidth);
            }
        ];
    }
    var F = function(t) {
        !function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e);
        }(r, t);
        var e = u(r);
        function r(t) {
            var o;
            return n(this, r), function(t, e, n, r, o, i) {
                var f = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [
                    -1
                ], c = b;
                _(t);
                var u = e.props || {}, s = t.$$ = {
                    fragment: null,
                    ctx: null,
                    props: i,
                    update: l,
                    not_equal: o,
                    bound: y(),
                    on_mount: [],
                    on_destroy: [],
                    before_update: [],
                    after_update: [],
                    context: new Map(c ? c.$$.context : []),
                    callbacks: y(),
                    dirty: f,
                    skip_bound: !1
                }, a = !1;
                if (s.ctx = n ? n(t, u, function(e, n) {
                    var r = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : n;
                    return s.ctx && o(s.ctx[e], s.ctx[e] = r) && (!s.skip_bound && s.bound[e] && s.bound[e](r), a && q(t, e)), n;
                }) : [], s.update(), a = !0, d(s.before_update), s.fragment = !!r && r(s.ctx), e.target) {
                    if (e.hydrate) {
                        var p = g(e.target);
                        s.fragment && s.fragment.l(p), p.forEach(v);
                    } else s.fragment && s.fragment.c();
                    e.intro && M(t.$$.fragment), W(t, e.target, e.anchor), D();
                }
                _(c);
            }(f(o = e.call(this)), t, X, N, h, {
                self: 1,
                swipeDismiss: 2
            }), o;
        }
        return r;
    }(I);
    t.default = F, t.defaults = z, t.position = "PrependContainer", Object.defineProperty(t, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=promise-js-3.e5d973f6.js.map
