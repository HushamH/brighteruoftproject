/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
if (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = e.length, n = ot.type(e);
            return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (ot.isFunction(t))return ot.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType)return ot.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (pt.test(t))return ot.filter(t, e, n);
                t = ot.filter(t, e)
            }
            return ot.grep(e, function (e) {
                return ot.inArray(e, t) >= 0 !== n
            })
        }

        function o(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function r(e) {
            var t = xt[e] = {};
            return ot.each(e.match(bt) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), ot.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(kt, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? ot.parseJSON(n) : n
                    } catch (o) {
                    }
                    ot.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (ot.acceptData(e)) {
                var o, r, a = ot.expando, s = e.nodeType, l = s ? ot.cache : e, u = s ? e[a] : e[a] && a;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)return u || (u = s ? e[a] = J.pop() || ot.guid++ : a), l[u] || (l[u] = s ? {} : {toJSON: ot.noop}), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = ot.extend(l[u], t) : l[u].data = ot.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[ot.camelCase(t)])) : o = r, o
            }
        }

        function d(e, t, n) {
            if (ot.acceptData(e)) {
                var i, o, r = e.nodeType, a = r ? ot.cache : e, s = r ? e[ot.expando] : ot.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in i ? t = [t] : (t = ot.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;)delete i[t[o]];
                        if (n ? !u(i) : !ot.isEmptyObject(i))return
                    }
                    (n || (delete a[s].data, u(a[s]))) && (r ? ot.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return ht.activeElement
            } catch (e) {
            }
        }

        function m(e) {
            var t = qt.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, o = 0, r = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
            if (!r)for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)!t || ot.nodeName(i, t) ? r.push(i) : ot.merge(r, g(i, t));
            return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], r) : r
        }

        function v(e) {
            Dt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Xt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)ot._data(n, "globalEval", !t || ot._data(t[i], "globalEval"))
        }

        function C(e, t) {
            if (1 === t.nodeType && ot.hasData(e)) {
                var n, i, o, r = ot._data(e), a = ot._data(t, r), s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (i = 0, o = s[n].length; o > i; i++)ot.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ot.extend({}, a.data))
            }
        }

        function T(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[ot.expando]) {
                    o = ot._data(t);
                    for (i in o.events)ot.removeEvent(t, i, o.handle);
                    t.removeAttribute(ot.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Dt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function E(t, n) {
            var i, o = ot(n.createElement(t)).appendTo(n.body), r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
            return o.detach(), r
        }

        function k(e) {
            var t = ht, n = Zt[e];
            return n || (n = E(e, t), "none" !== n && n || (Kt = (Kt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Kt.detach()), Zt[e] = n), n
        }

        function N(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e)return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = fn.length; o--;)if (t = fn[o] + n, t in e)return t;
            return i
        }

        function $(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)i = e[a], i.style && (r[a] = ot._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (r[a] = ot._data(i, "olddisplay", k(i.nodeName)))) : (o = $t(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
            for (a = 0; s > a; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function j(e, t, n) {
            var i = un.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function D(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += ot.css(e, n + St[r], !0, o)), i ? ("content" === n && (a -= ot.css(e, "padding" + St[r], !0, o)), "margin" !== n && (a -= ot.css(e, "border" + St[r] + "Width", !0, o))) : (a += ot.css(e, "padding" + St[r], !0, o), "padding" !== n && (a += ot.css(e, "border" + St[r] + "Width", !0, o)));
            return a
        }

        function A(e, t, n) {
            var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = en(e), a = nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = tn(e, t, r), (0 > o || null == o) && (o = e.style[t]), on.test(o))return o;
                i = a && (nt.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + D(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function L(e, t, n, i, o) {
            return new L.prototype.init(e, t, n, i, o)
        }

        function H() {
            return setTimeout(function () {
                hn = void 0
            }), hn = ot.now()
        }

        function F(e, t) {
            var n, i = {height: e}, o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t)n = St[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function _(e, t, n) {
            for (var i, o = (xn[t] || []).concat(xn["*"]), r = 0, a = o.length; a > r; r++)if (i = o[r].call(n, t, e))return i
        }

        function q(e, t, n) {
            var i, o, r, a, s, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && $t(e), m = ot._data(e, "fxshow");
            n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ot.css(e, "display"), c = "none" === u ? ot._data(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)if (o = t[i], gn.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])continue;
                    h = !0
                }
                p[i] = m && m[i] || ot.style(e, i)
            } else u = void 0;
            if (ot.isEmptyObject(p))"inline" === ("none" === u ? k(e.nodeName) : u) && (f.display = u); else {
                m ? "hidden"in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}), r && (m.hidden = !h), h ? ot(e).show() : d.done(function () {
                    ot(e).hide()
                }), d.done(function () {
                    var t;
                    ot._removeData(e, "fxshow");
                    for (t in p)ot.style(e, t, p[t])
                });
                for (i in p)a = _(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(e, t) {
            var n, i, o, r, a;
            for (n in e)if (i = ot.camelCase(n), o = t[i], r = e[n], ot.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = ot.cssHooks[i], a && "expand"in a) {
                r = a.expand(r), delete e[i];
                for (n in r)n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
        }

        function O(e, t, n) {
            var i, o, r = 0, a = bn.length, s = ot.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var t = hn || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++)u.tweens[a].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = ot.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? u.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (M(c, u.opts.specialEasing); a > r; r++)if (i = bn[r].call(u, e, c, u.opts))return i;
            return ot.map(c, _, u), ot.isFunction(u.opts.start) && u.opts.start.call(e, u), ot.fx.timer(ot.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function P(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(bt) || [];
                if (ot.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function W(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, ot.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }

            var r = {}, a = e === zn;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function B(e, t) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in t)void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ot.extend(!0, e, n), e
        }

        function R(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)for (a in s)if (s[a] && s[a].test(o)) {
                l.unshift(a);
                break
            }
            if (l[0]in n)r = l[0]; else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function I(e, t, n, i) {
            var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                if (a = u[l + " " + r] || u["* " + r], !a)for (o in u)if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && e["throws"])t = a(t); else try {
                    t = a(t)
                } catch (d) {
                    return {state: "parsererror", error: a ? d : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: t}
        }

        function z(e, t, n, i) {
            var o;
            if (ot.isArray(t))ot.each(t, function (t, o) {
                n || Jn.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            }); else if (n || "object" !== ot.type(t))i(e, t); else for (o in t)z(e + "[" + o + "]", t[o], n, i)
        }

        function Q() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        }

        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function X(e) {
            return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }

        var J = [], V = J.slice, G = J.concat, Y = J.push, K = J.indexOf, Z = {}, et = Z.toString, tt = Z.hasOwnProperty, nt = {}, it = "1.11.2", ot = function (e, t) {
            return new ot.fn.init(e, t)
        }, rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, lt = function (e, t) {
            return t.toUpperCase()
        };
        ot.fn = ot.prototype = {
            jquery: it, constructor: ot, selector: "", length: 0, toArray: function () {
                return V.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
            }, pushStack: function (e) {
                var t = ot.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return ot.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(ot.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(V.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Y, sort: J.sort, splice: J.splice
        }, ot.extend = ot.fn.extend = function () {
            var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)if (null != (o = arguments[s]))for (i in o)e = a[i], n = o[i], a !== n && (u && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, r = e && ot.isArray(e) ? e : []) : r = e && ot.isPlainObject(e) ? e : {}, a[i] = ot.extend(u, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === ot.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === ot.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return !ot.isArray(e) && e - parseFloat(e) + 1 >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e))return !1;
                try {
                    if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)for (t in e)return tt.call(e, t);
                for (t in e);
                return void 0 === t || tt.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
            }, globalEval: function (t) {
                t && ot.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(at, "ms-").replace(st, lt)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, i) {
                var o, r = 0, a = e.length, s = n(e);
                if (i) {
                    if (s)for (; a > r && (o = t.apply(e[r], i), o !== !1); r++); else for (r in e)if (o = t.apply(e[r], i), o === !1)break
                } else if (s)for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++); else for (r in e)if (o = t.call(e[r], r, e[r]), o === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(rt, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (K)return K.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;)e[o++] = t[i++];
                if (n !== n)for (; void 0 !== t[i];)e[o++] = t[i++];
                return e.length = o, e
            }, grep: function (e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++)i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
            }, map: function (e, t, i) {
                var o, r = 0, a = e.length, s = n(e), l = [];
                if (s)for (; a > r; r++)o = t(e[r], r, i), null != o && l.push(o); else for (r in e)o = t(e[r], r, i), null != o && l.push(o);
                return G.apply([], l)
            }, guid: 1, proxy: function (e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), ot.isFunction(e) ? (n = V.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(V.call(arguments)))
                }, i.guid = e.guid = e.guid || ot.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var ut = /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
            function (e) {
                function t(e, t, n, i) {
                    var o, r, a, s, l, u, d, f, h, m;
                    if ((t ? t.ownerDocument || t : W) !== L && A(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
                    if (!i && F) {
                        if (11 !== s && (o = yt.exec(e)))if (a = o[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode)return n;
                                if (r.id === a)return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && O(t, r) && r.id === a)return n.push(r), n
                        } else {
                            if (o[2])return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && w.getElementsByClassName)return K.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (w.qsa && (!_ || !_.test(e))) {
                            if (f = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (u = k(e), (d = t.getAttribute("id")) ? f = d.replace(xt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + p(u[l]);
                                h = bt.test(e) && c(t.parentNode) || t, m = u.join(",")
                            }
                            if (m)try {
                                return K.apply(n, h.querySelectorAll(m)), n
                            } catch (g) {
                            } finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(lt, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }

                    var t = [];
                    return e
                }

                function i(e) {
                    return e[P] = !0, e
                }

                function o(e) {
                    var t = L.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i)return i;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;)n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir, o = n && "parentNode" === i, r = R++;
                    return t.first ? function (t, n, r) {
                        for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
                    } : function (t, n, a) {
                        var s, l, u = [B, r];
                        if (a) {
                            for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, a))return !0
                        } else for (; t = t[i];)if (1 === t.nodeType || o) {
                            if (l = t[P] || (t[P] = {}), (s = l[i]) && s[0] === B && s[1] === r)return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a))return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var o = 0, r = n.length; r > o; o++)t(e, n[o], i);
                    return i
                }

                function g(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), u && t.push(s));
                    return a
                }

                function v(e, t, n, o, r, a) {
                    return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, a)), i(function (i, a, s, l) {
                        var u, c, d, p = [], f = [], h = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : g(v, p, e, s, l), b = n ? r || (i ? e : h || o) ? [] : a : y;
                        if (n && n(y, b, s, l), o)for (u = g(b, f), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                        if (i) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                    r(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(d = b[c]) && (u = r ? et(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                            }
                        } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = f(function (e) {
                        return e === t
                    }, a, !0), u = f(function (e) {
                        return et(t, e) > -1
                    }, a, !0), c = [function (e, n, i) {
                        var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, o
                    }]; o > s; s++)if (n = C.relative[e[s].type])c = [f(h(c), n)]; else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                            for (i = ++s; o > i && !C.relative[e[i].type]; i++);
                            return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function b(e, n) {
                    var o = n.length > 0, r = e.length > 0, a = function (i, a, s, l, u) {
                        var c, d, p, f = 0, h = "0", m = i && [], v = [], y = $, b = i || r && C.find.TAG("*", u), x = B += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (u && ($ = a !== L && a); h !== w && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (d = 0; p = e[d++];)if (p(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                                u && (B = x)
                            }
                            o && ((c = !p && c) && f--, i && m.push(c))
                        }
                        if (f += h, o && h !== f) {
                            for (d = 0; p = n[d++];)p(m, v, a, s);
                            if (i) {
                                if (f > 0)for (; h--;)m[h] || v[h] || (v[h] = G.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = x, $ = y), m
                    };
                    return o ? i(a) : a
                }

                var x, w, C, T, E, k, N, S, $, j, D, A, L, H, F, _, q, M, O, P = "sizzle" + 1 * new Date, W = e.document, B = 0, R = 0, I = n(), z = n(), Q = n(), U = function (e, t) {
                    return e === t && (D = !0), 0
                }, X = 1 << 31, J = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, K = V.push, Z = V.slice, et = function (e, t) {
                    for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
                    return -1
                }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]", at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), pt = new RegExp(at), ft = new RegExp("^" + ot + "$"), ht = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Ct = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, Tt = function () {
                    A()
                };
                try {
                    K.apply(V = Z.call(W.childNodes), W.childNodes), V[W.childNodes.length].nodeType
                } catch (Et) {
                    K = {
                        apply: V.length ? function (e, t) {
                            Y.apply(e, Z.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, E = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, A = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : W;
                    return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), F = !E(i), w.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = o(function (e) {
                        return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = o(function (e) {
                        return H.appendChild(e).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                    }), w.getById ? (C.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && F) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(wt, Ct);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(wt, Ct);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [], o = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];)1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                        return F ? t.getElementsByClassName(e) : void 0
                    }, q = [], _ = [], (w.qsa = vt.test(i.querySelectorAll)) && (o(function (e) {
                        H.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + P + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || _.push(".#.+[+~]")
                    }), o(function (e) {
                        var t = i.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
                    })), (w.matchesSelector = vt.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
                        w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), q.push("!=", at)
                    }), _ = _.length && new RegExp(_.join("|")), q = q.length && new RegExp(q.join("|")), t = vt.test(H.compareDocumentPosition), O = t || vt.test(H.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t)return D = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === W && O(W, e) ? -1 : t === i || t.ownerDocument === W && O(W, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return D = !0, 0;
                        var n, o = 0, r = e.parentNode, s = t.parentNode, l = [e], u = [t];
                        if (!r || !s)return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : j ? et(j, e) - et(j, t) : 0;
                        if (r === s)return a(e, t);
                        for (n = e; n = n.parentNode;)l.unshift(n);
                        for (n = t; n = n.parentNode;)u.unshift(n);
                        for (; l[o] === u[o];)o++;
                        return o ? a(l[o], u[o]) : l[o] === W ? -1 : u[o] === W ? 1 : 0
                    }, i) : L
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== L && A(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !F || q && q.test(n) || _ && _.test(n)))try {
                        var i = M.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                    } catch (o) {
                    }
                    return t(n, L, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== L && A(e), O(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== L && A(e);
                    var n = C.attrHandle[t.toLowerCase()], i = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                    return void 0 !== i ? i : w.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], i = 0, o = 0;
                    if (D = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), D) {
                        for (; t = e[o++];)t === e[o] && (i = n.push(o));
                        for (; i--;)e.splice(n[i], 1)
                    }
                    return j = null, e
                }, T = t.getText = function (e) {
                    var t, n = "", i = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                        } else if (3 === o || 4 === o)return e.nodeValue
                    } else for (; t = e[i++];)n += T(t);
                    return n
                }, C = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ht,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(wt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(wt, Ct).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = I[e + " "];
                            return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && I(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, i) {
                            return function (o) {
                                var r = t.attr(o, e);
                                return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        }, CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === i && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (c = g[P] || (g[P] = {}), u = c[e] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)if (1 === d.nodeType && ++p && d === t) {
                                            c[e] = [B, f, p];
                                            break
                                        }
                                    } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === B)p = u[1]; else for (; (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[P] || (d[P] = {}))[e] = [B, p]), d !== t)););
                                    return p -= o, p === i || p % i === 0 && p / i >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return r[P] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, o = r(e, n), a = o.length; a--;)i = et(e, o[a]), e[i] = !(t[i] = o[a])
                            }) : function (e) {
                                return r(e, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [], n = [], o = N(e.replace(lt, "$1"));
                            return o[P] ? i(function (e, t, n, i) {
                                for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                            }) : function (e, i, r) {
                                return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                            }
                        }), has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: i(function (e) {
                            return e = e.replace(wt, Ct), function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                        }), lang: i(function (e) {
                            return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(), function (t) {
                                var n;
                                do if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === H
                        }, focus: function (e) {
                            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !C.pseudos.empty(e)
                        }, header: function (e) {
                            return gt.test(e.nodeName)
                        }, input: function (e) {
                            return mt.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (e, t) {
                            return [t - 1]
                        }), eq: u(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }), even: u(function (e, t) {
                            for (var n = 0; t > n; n += 2)e.push(n);
                            return e
                        }), odd: u(function (e, t) {
                            for (var n = 1; t > n; n += 2)e.push(n);
                            return e
                        }), lt: u(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                            return e
                        }), gt: u(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = s(x);
                for (x in{submit: !0, reset: !0})C.pseudos[x] = l(x);
                return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function (e, n) {
                    var i, o, r, a, s, l, u, c = z[e + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = C.preFilter; s;) {
                        (!i || (o = ut.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ct.exec(s)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(lt, " ")
                        }), s = s.slice(i.length));
                        for (a in C.filter)!(o = ht[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: a,
                            matches: o
                        }), s = s.slice(i.length));
                        if (!i)break
                    }
                    return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
                }, N = t.compile = function (e, t) {
                    var n, i = [], o = [], r = Q[e + " "];
                    if (!r) {
                        for (t || (t = k(e)), n = t.length; n--;)r = y(t[n]), r[P] ? i.push(r) : o.push(r);
                        r = Q(e, b(o, i)), r.selector = e
                    }
                    return r
                }, S = t.select = function (e, t, n, i) {
                    var o, r, a, s, l, u = "function" == typeof e && e, d = !i && k(e = u.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && F && C.relative[r[1].type]) {
                            if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t)return n;
                            u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = ht.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)if ((l = C.find[s]) && (i = l(a.matches[0].replace(wt, Ct), bt.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && p(r), !e)return K.apply(n, i), n;
                            break
                        }
                    }
                    return (u || N(e, d))(i, t, !F, n, bt.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!D, A(), w.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(L.createElement("div"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || r(tt, function (e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        ot.find = ut, ot.expr = ut.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ut.uniqueSort, ot.text = ut.getText, ot.isXMLDoc = ut.isXML, ot.contains = ut.contains;
        var ct = ot.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
        ot.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ot.fn.extend({
            find: function (e) {
                var t, n = [], i = this, o = i.length;
                if ("string" != typeof e)return this.pushStack(ot(e).filter(function () {
                    for (t = 0; o > t; t++)if (ot.contains(i[t], this))return !0
                }));
                for (t = 0; o > t; t++)ot.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(i(this, e || [], !0))
            }, is: function (e) {
                return !!i(this, "string" == typeof e && ct.test(e) ? ot(e) : e || [], !1).length
            }
        });
        var ft, ht = e.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = ot.fn.init = function (e, t) {
            var n, i;
            if (!e)return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && ot.isPlainObject(t))for (n in t)ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])return ft.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        };
        gt.prototype = ot.fn, ft = ot(ht);
        var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
        ot.extend({
            dir: function (e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));)1 === o.nodeType && i.push(o), o = o[t];
                return i
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), ot.fn.extend({
            has: function (e) {
                var t, n = ot(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)if (ot.contains(this, n[t]))return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, o = this.length, r = [], a = ct.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ot.unique(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ot.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return ot.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return ot.dir(e, "parentNode", n)
            }, next: function (e) {
                return o(e, "nextSibling")
            }, prev: function (e) {
                return o(e, "previousSibling")
            }, nextAll: function (e) {
                return ot.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return ot.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return ot.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return ot.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return ot.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return ot.sibling(e.firstChild)
            }, contents: function (e) {
                return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
            }
        }, function (e, t) {
            ot.fn[e] = function (n, i) {
                var o = ot.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[e] || (o = ot.unique(o)), vt.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g, xt = {};
        ot.Callbacks = function (e) {
            e = "string" == typeof e ? xt[e] || r(e) : ot.extend({}, e);
            var t, n, i, o, a, s, l = [], u = !e.once && [], c = function (r) {
                for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function r(t) {
                            ot.each(t, function (t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = i, c(n))
                    }
                    return this
                }, remove: function () {
                    return l && ot.each(arguments, function (e, n) {
                        for (var i; (i = ot.inArray(n, l, i)) > -1;)l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
                    }), this
                }, has: function (e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], o = 0, this
                }, disable: function () {
                    return l = u = n = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return u = void 0, n || d.disable(), this
                }, locked: function () {
                    return !u
                }, fireWith: function (e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, ot.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ot.Deferred(function (n) {
                            ot.each(t, function (t, r) {
                                var a = ot.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ot.extend(e, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, ot.each(t, function (e, r) {
                    var a = r[2], s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t, n, i, o = 0, r = V.call(arguments), a = r.length, s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0, l = 1 === s ? e : ot.Deferred(), u = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++)r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var wt;
        ot.fn.ready = function (e) {
            return ot.ready.promise().done(e), this
        }, ot.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? ot.readyWait++ : ot.ready(!0)
            }, ready: function (e) {
                if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!ht.body)return setTimeout(ot.ready);
                    ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (wt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
                }
            }
        }), ot.ready.promise = function (t) {
            if (!wt)if (wt = ot.Deferred(), "complete" === ht.readyState)setTimeout(ot.ready); else if (ht.addEventListener)ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1); else {
                ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ht.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function o() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        a(), ot.ready()
                    }
                }()
            }
            return wt.promise(t)
        };
        var Ct, Tt = "undefined";
        for (Ct in ot(nt))break;
        nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, ot(function () {
            var e, t, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), ot.acceptData = function (e) {
            var t = ot.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
        var Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kt = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !u(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), ot.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                        ot._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    ot.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ot.data(this, e, t)
                }) : r ? l(r, e, ot.data(r, e)) : void 0
            }, removeData: function (e) {
                return this.each(function () {
                    ot.removeData(this, e)
                })
            }
        }), ot.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ot._data(e, t), n && (!i || ot.isArray(n) ? i = ot._data(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = ot.queue(e, t), i = n.length, o = n.shift(), r = ot._queueHooks(e, t), a = function () {
                    ot.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ot._data(e, n) || ot._data(e, n, {
                        empty: ot.Callbacks("once memory").add(function () {
                            ot._removeData(e, t + "queue"), ot._removeData(e, n)
                        })
                    })
            }
        }), ot.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = ot.queue(this, e, t);
                    ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    ot.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = ot.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = ot._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, St = ["Top", "Right", "Bottom", "Left"], $t = function (e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        }, jt = ot.access = function (e, t, n, i, o, r, a) {
            var s = 0, l = e.length, u = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (s in n)ot.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(ot(e), n)
                })), t))for (; l > s; s++)t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        }, Dt = /^(?:checkbox|radio)$/i;
        !function () {
            var e = ht.createElement("input"), t = ht.createElement("div"), n = ht.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    nt.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(), function () {
            var t, n, i = ht.createElement("div");
            for (t in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var At = /^(?:input|select|textarea)$/i, Lt = /^key/, Ht = /^(?:mouse|pointer|contextmenu)|click/, Ft = /^(?:focusinfocus|focusoutblur)$/, _t = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, a, s, l, u, c, d, p, f, h, m, g = ot._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                        return typeof ot === Tt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;)r = _t.exec(t[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (u = ot.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ot.event.special[f] || {}, d = ot.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ot.event.global[f] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, o) {
                var r, a, s, l, u, c, d, p, f, h, m, g = ot.hasData(e) && ot._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(bt) || [""], u = t.length; u--;)if (s = _t.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = ot.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, f, g.handle), delete c[f])
                    } else for (f in c)ot.event.remove(e, f + t[u], n, i, !0);
                    ot.isEmptyObject(c) && (delete g.handle, ot._removeData(e, "events"))
                }
            },
            trigger: function (t, n, i, o) {
                var r, a, s, l, u, c, d, p = [i || ht], f = tt.call(t, "type") ? t.type : t, h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !Ft.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[ot.expando] ? t : new ot.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), u = ot.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !ot.isWindow(i)) {
                        for (l = u.delegateType || f, Ft.test(l + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), c = s;
                        c === (i.ownerDocument || ht) && p.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0; (s = p[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? l : u.bindType || f, r = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && ot.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && ot.acceptData(i) && a && i[f] && !ot.isWindow(i)) {
                        c = i[a], c && (i[a] = null), ot.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {
                        }
                        ot.event.triggered = void 0, c && (i[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = ot.event.fix(e);
                var t, n, i, o, r, a = [], s = V.call(arguments), l = (ot._data(this, "events") || {})[e.type] || [], u = ot.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = ot.event.handlers.call(this, e, l), t = 0; (o = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, a = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], r = 0; s > r; r++)i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && a.push({elem: l, handlers: o})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            fix: function (e) {
                if (e[ot.expando])return e;
                var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ht.test(o) ? this.mouseHooks : Lt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, o, r = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== h() && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return ot.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var o = ot.extend(new ot.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                i ? ot.event.trigger(o, null, t) : ot.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = ht.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Tt && (e[i] = null), e.detachEvent(i, n))
        }, ot.Event = function (e, t) {
            return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
        }, ot.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ot.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return (!o || o !== i && !ot.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function () {
                return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                    n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), ot._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function () {
                return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function () {
                return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ot.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
                })), !1) : void ot.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    At.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                    }), ot._data(t, "changeBubbles", !0))
                })
            }, handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return ot.event.remove(this, "._change"), !At.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                ot.event.simulate(t, e.target, ot.event.fix(e), !0)
            };
            ot.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, t);
                    o || i.addEventListener(e, n, !0), ot._data(i, t, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, t) - 1;
                    o ? ot._data(i, t, o) : (i.removeEventListener(e, n, !0), ot._removeData(i, t))
                }
            }
        }), ot.fn.extend({
            on: function (e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (r in e)this.on(r, t, n, e[r], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = f; else if (!i)return this;
                return 1 === o && (a = i, i = function (e) {
                    return ot().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function () {
                    ot.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e)this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function () {
                    ot.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    ot.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? ot.event.trigger(e, t, n, !0) : void 0
            }
        });
        var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Mt = / jQuery\d+="(?:null|\d+)"/g, Ot = new RegExp("<(?:" + qt + ")[\\s/>]", "i"), Pt = /^\s+/, Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Bt = /<([\w:]+)/, Rt = /<tbody/i, It = /<|&#?\w+;/, zt = /<(?:script|style|link)/i, Qt = /checked\s*(?:[^=]|=\s*.checked.)/i, Ut = /^$|\/(?:java|ecma)script/i, Xt = /^true\/(.*)/, Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Gt = m(ht), Yt = Gt.appendChild(ht.createElement("div"));
        Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td, ot.extend({
            clone: function (e, t, n) {
                var i, o, r, a, s, l = ot.contains(e.ownerDocument, e);
                if (nt.html5Clone || ot.isXMLDoc(e) || !Ot.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Yt.innerHTML = e.outerHTML, Yt.removeChild(r = Yt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))for (i = g(r), s = g(e), a = 0; null != (o = s[a]); ++a)i[a] && T(o, i[a]);
                if (t)if (n)for (s = s || g(e), i = i || g(r), a = 0; null != (o = s[a]); a++)C(o, i[a]); else C(e, r);
                return i = g(r, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = o = null, r
            }, buildFragment: function (e, t, n, i) {
                for (var o, r, a, s, l, u, c, d = e.length, p = m(t), f = [], h = 0; d > h; h++)if (r = e[h], r || 0 === r)if ("object" === ot.type(r))ot.merge(f, r.nodeType ? [r] : r); else if (It.test(r)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Bt.exec(r) || ["", ""])[1].toLowerCase(), c = Vt[l] || Vt._default, s.innerHTML = c[1] + r.replace(Wt, "<$1></$2>") + c[2], o = c[0]; o--;)s = s.lastChild;
                    if (!nt.leadingWhitespace && Pt.test(r) && f.push(t.createTextNode(Pt.exec(r)[0])), !nt.tbody)for (r = "table" !== l || Rt.test(r) ? "<table>" !== c[1] || Rt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;)ot.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (ot.merge(f, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = p.lastChild
                } else f.push(t.createTextNode(r));
                for (s && p.removeChild(s), nt.appendChecked || ot.grep(g(f, "input"), v), h = 0; r = f[h++];)if ((!i || -1 === ot.inArray(r, i)) && (a = ot.contains(r.ownerDocument, r), s = g(p.appendChild(r), "script"), a && w(s), n))for (o = 0; r = s[o++];)Ut.test(r.type || "") && n.push(r);
                return s = null, p
            }, cleanData: function (e, t) {
                for (var n, i, o, r, a = 0, s = ot.expando, l = ot.cache, u = nt.deleteExpando, c = ot.event.special; null != (n = e[a]); a++)if ((t || ot.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)for (i in r.events)c[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, J.push(o))
                }
            }
        }), ot.fn.extend({
            text: function (e) {
                return jt(this, function (e) {
                    return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, i = e ? ot.filter(e, this) : this, o = 0; null != (n = i[o]); o++)t || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && ot.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return ot.clone(this, e, t)
                })
            }, html: function (e) {
                return jt(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Mt, "") : void 0;
                    if (!("string" != typeof e || zt.test(e) || !nt.htmlSerialize && Ot.test(e) || !nt.leadingWhitespace && Pt.test(e) || Vt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Wt, "<$1></$2>");
                        try {
                            for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, ot.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = G.apply([], e);
                var n, i, o, r, a, s, l = 0, u = this.length, c = this, d = u - 1, p = e[0], f = ot.isFunction(p);
                if (f || u > 1 && "string" == typeof p && !nt.checkClone && Qt.test(p))return this.each(function (n) {
                    var i = c.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = ot.map(g(s, "script"), b), o = r.length; u > l; l++)i = s, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(r, g(i, "script"))), t.call(this[l], i, l);
                    if (o)for (a = r[r.length - 1].ownerDocument, ot.map(r, x), l = 0; o > l; l++)i = r[l], Ut.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(a, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Jt, "")));
                    s = n = null
                }
                return this
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ot.fn[e] = function (e) {
                for (var n, i = 0, o = [], r = ot(e), a = r.length - 1; a >= i; i++)n = i === a ? this : this.clone(!0), ot(r[i])[t](n), Y.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Kt, Zt = {};
        !function () {
            var e;
            nt.shrinkWrapBlocks = function () {
                if (null != e)return e;
                e = !1;
                var t, n, i;
                return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var en, tn, nn = /^margin/, on = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"), rn = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (en = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tn = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && nn.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function (e) {
            return e.currentStyle
        }, tn = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !rn.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), function () {
            function t() {
                var t, n, i, o;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, o = t.appendChild(ht.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
            }

            var n, i, o, r, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                }, boxSizingReliable: function () {
                    return null == a && t(), a
                }, pixelPosition: function () {
                    return null == r && t(), r
                }, reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), ot.swap = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t)a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t)e.style[r] = a[r];
            return o
        };
        var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, un = new RegExp("^(" + Nt + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + Nt + ")", "i"), dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, pn = {letterSpacing: "0", fontWeight: "400"}, fn = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = tn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = ot.camelCase(t), l = e.style;
                    if (t = ot.cssProps[s] || (ot.cssProps[s] = S(l, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n)return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                    if (r = typeof n, "string" === r && (o = cn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))try {
                        l[t] = n
                    } catch (u) {
                    }
                }
            },
            css: function (e, t, n, i) {
                var o, r, a, s = ot.camelCase(t);
                return t = ot.cssProps[s] || (ot.cssProps[s] = S(e.style, s)), a = ot.cssHooks[t] || ot.cssHooks[s], a && "get"in a && (r = a.get(e, !0, n)), void 0 === r && (r = tn(e, t, i)), "normal" === r && t in pn && (r = pn[t]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function (e, t) {
            ot.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, dn, function () {
                        return A(e, t, i)
                    }) : A(e, t, i) : void 0
                }, set: function (e, n, i) {
                    var o = i && en(e);
                    return j(e, n, i ? D(e, t, i, nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function (e, t) {
                return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, o = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(r) ? r.replace(an, o) : r + " " + o)
            }
        }), ot.cssHooks.marginRight = N(nt.reliableMarginRight, function (e, t) {
            return t ? ot.swap(e, {display: "inline-block"}, tn, [e, "marginRight"]) : void 0
        }), ot.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            ot.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + St[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, nn.test(e) || (ot.cssHooks[e + t].set = j)
        }), ot.fn.extend({
            css: function (e, t) {
                return jt(this, function (e, t, n) {
                    var i, o, r = {}, a = 0;
                    if (ot.isArray(t)) {
                        for (i = en(e), o = t.length; o > a; a++)r[t[a]] = ot.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return $(this, !0)
            }, hide: function () {
                return $(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    $t(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = L, L.prototype = {
            constructor: L, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = L.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ot.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ot.fx = L.prototype.init, ot.fx.step = {};
        var hn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [q], xn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), i = n.cur(), o = vn.exec(t), r = o && o[3] || (ot.cssNumber[e] ? "" : "px"), a = (ot.cssNumber[e] || "px" !== r && +i) && vn.exec(ot.css(n.elem, e)), s = 1, l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, ot.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        ot.Animation = ot.extend(O, {
            tweener: function (e, t) {
                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++)n = e[i], xn[n] = xn[n] || [], xn[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), ot.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? ot.extend({}, e) : {
                complete: n || !n && t || ot.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ot.isFunction(t) && t
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter($t).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = ot.isEmptyObject(e), r = ot.speed(t, n, i), a = function () {
                    var t = O(this, ot.extend({}, e), r);
                    (o || ot._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, o = null != e && e + "queueHooks", r = ot.timers, a = ot._data(this);
                    if (o)a[o] && a[o].stop && i(a[o]); else for (o in a)a[o] && a[o].stop && yn.test(o) && i(a[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && ot.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ot._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = ot.timers, a = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function (e, t) {
            var n = ot.fn[t];
            ot.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o)
            }
        }), ot.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            ot.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function () {
            var e, t = ot.timers, n = 0;
            for (hn = ot.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ot.fx.stop(), hn = void 0
        }, ot.fx.timer = function (e) {
            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function () {
            mn || (mn = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function () {
            clearInterval(mn), mn = null
        }, ot.fx.speeds = {slow: 600, fast: 200, _default: 400}, ot.fn.delay = function (e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var e, t, n, i, o;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
        var wn = /\r/g;
        ot.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                {
                    if (arguments.length)return i = ot.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return t = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
                }
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ot.find.attr(e, "value");
                        return null != t ? t : ot.trim(ot.text(e))
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), r)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, i, o = e.options, r = ot.makeArray(t), a = o.length; a--;)if (i = o[a], ot.inArray(ot.valHooks.option.get(i), r) >= 0)try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
                set: function (e, t) {
                    return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Cn, Tn, En = ot.expr.attrHandle, kn = /^(?:checked|selected)$/i, Nn = nt.getSetAttribute, Sn = nt.input;
        ot.fn.extend({
            attr: function (e, t) {
                return jt(this, ot.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    ot.removeAttr(this, e)
                })
            }
        }), ot.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r)return typeof e.getAttribute === Tt ? ot.prop(e, t, n) : (1 === r && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Tn : Cn)), void 0 === n ? i && "get"in i && null !== (o = i.get(e, t)) ? o : (o = ot.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, i, o = 0, r = t && t.match(bt);
                if (r && 1 === e.nodeType)for (; n = r[o++];)i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Sn && Nn || !kn.test(n) ? e[i] = !1 : e[ot.camelCase("default-" + n)] = e[i] = !1 : ot.attr(e, n, ""), e.removeAttribute(Nn ? n : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Tn = {
            set: function (e, t, n) {
                return t === !1 ? ot.removeAttr(e, n) : Sn && Nn || !kn.test(n) ? e.setAttribute(!Nn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = En[t] || ot.find.attr;
            En[t] = Sn && Nn || !kn.test(t) ? function (e, t, i) {
                var o, r;
                return i || (r = En[t], En[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, En[t] = r), o
            } : function (e, t, n) {
                return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Sn && Nn || (ot.attrHooks.value = {
            set: function (e, t, n) {
                return ot.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
            }
        }), Nn || (Cn = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, En.id = En.name = En.coords = function (e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            }, set: Cn.set
        }, ot.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Cn.set(e, "" === t ? !1 : t, n)
            }
        }, ot.each(["width", "height"], function (e, t) {
            ot.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var $n = /^(?:input|select|textarea|button|object)$/i, jn = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function (e, t) {
                return jt(this, ot.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = ot.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {
                    }
                })
            }
        }), ot.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                var i, o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)return r = 1 !== a || !ot.isXMLDoc(e), r && (t = ot.propFix[t] || t, o = ot.propHooks[t]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ot.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : $n.test(e.nodeName) || jn.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function (e, t) {
            ot.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Dn = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, a, s = 0, l = this.length, u = "string" == typeof e && e;
                if (ot.isFunction(e))return this.each(function (t) {
                    ot(this).addClass(e.call(this, t, this.className))
                });
                if (u)for (t = (e || "").match(bt) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : " ")) {
                    for (r = 0; o = t[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = ot.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof e && e;
                if (ot.isFunction(e))return this.each(function (t) {
                    ot(this).removeClass(e.call(this, t, this.className))
                });
                if (u)for (t = (e || "").match(bt) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : "")) {
                    for (r = 0; o = t[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    a = e ? ot.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function (n) {
                    ot(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function () {
                    if ("string" === n)for (var t, i = 0, o = ot(this), r = e.match(bt) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dn, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ot.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ot.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var An = ot.now(), Ln = /\?/, Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
            var n, i = null, o = ot.trim(t + "");
            return o && !ot.trim(o.replace(Hn, function (e, t, o, r) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + t)
        }, ot.parseXML = function (t) {
            var n, i;
            if (!t || "string" != typeof t)return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
        };
        var Fn, _n, qn = /#.*$/, Mn = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Wn = /^(?:GET|HEAD)$/, Bn = /^\/\//, Rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, In = {}, zn = {}, Qn = "*/".concat("*");
        try {
            _n = location.href
        } catch (Un) {
            _n = ht.createElement("a"), _n.href = "", _n = _n.href
        }
        Fn = Rn.exec(_n.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _n,
                type: "GET",
                isLocal: Pn.test(Fn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ot.parseJSON, "text xml": ot.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? B(B(e, ot.ajaxSettings), t) : B(ot.ajaxSettings, e)
            },
            ajaxPrefilter: P(In),
            ajaxTransport: P(zn),
            ajax: function (e, t) {
                function n(e, t, n, i) {
                    var o, c, v, y, x, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = R(d, w, n)), y = I(d, y, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (ot.etag[r] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", o ? h.resolveWith(p, [c, C, w]) : h.rejectWith(p, [w, C, v]), w.statusCode(g), g = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? c : v]), m.fireWith(p, [w, C]), l && (f.trigger("ajaxComplete", [w, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, s, l, u, c, d = ot.ajaxSetup({}, t), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event, h = ot.Deferred(), m = ot.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)for (c = {}; t = On.exec(a);)c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)g[t] = [g[t], e[t]]; else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _n) + "").replace(qn, "").replace(Bn, Fn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Rn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Fn[1] && i[2] === Fn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Fn[3] || ("http:" === Fn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), W(In, d, t, w), 2 === b)return w;
                l = ot.event && d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Wn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Ln.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mn.test(r) ? r.replace(Mn, "$1_=" + An++) : r + (Ln.test(r) ? "&" : "?") + "_=" + An++)), d.ifModified && (ot.lastModified[r] && w.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && w.setRequestHeader("If-None-Match", ot.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Qn + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers)w.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b))return w.abort();
                x = "abort";
                for (o in{success: 1, error: 1, complete: 1})w[o](d[o]);
                if (u = W(zn, d, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (C) {
                        if (!(2 > b))throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (e, t, n) {
                return ot.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ot.get(e, void 0, t, "script")
            }
        }), ot.each(["get", "post"], function (e, t) {
            ot[t] = function (e, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot._evalUrl = function (e) {
            return ot.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, ot.fn.extend({
            wrapAll: function (e) {
                if (ot.isFunction(e))return this.each(function (t) {
                    ot(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return this.each(ot.isFunction(e) ? function (t) {
                    ot(this).wrapInner(e.call(this, t))
                } : function () {
                    var t = ot(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = ot.isFunction(e);
                return this.each(function (n) {
                    ot(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
        }, ot.expr.filters.visible = function (e) {
            return !ot.expr.filters.hidden(e)
        };
        var Xn = /%20/g, Jn = /\[\]$/, Vn = /\r?\n/g, Gn = /^(?:submit|button|image|reset|file)$/i, Yn = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e))ot.each(e, function () {
                o(this.name, this.value)
            }); else for (n in e)z(n, e[n], t, o);
            return i.join("&").replace(Xn, "+")
        }, ot.fn.extend({
            serialize: function () {
                return ot.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = ot.prop(this, "elements");
                    return e ? ot.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ot(this).is(":disabled") && Yn.test(this.nodeName) && !Gn.test(e) && (this.checked || !Dt.test(e))
                }).map(function (e, t) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function (e) {
                        return {name: t.name, value: e.replace(Vn, "\r\n")}
                    }) : {name: t.name, value: n.replace(Vn, "\r\n")}
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || U()
        } : Q;
        var Kn = 0, Zn = {}, ei = ot.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
            for (var e in Zn)Zn[e](void 0, !0)
        }), nt.cors = !!ei && "withCredentials"in ei, ei = nt.ajax = !!ei, ei && ot.ajaxTransport(function (e) {
            if (!e.crossDomain || nt.cors) {
                var t;
                return {
                    send: function (n, i) {
                        var o, r = e.xhr(), a = ++Kn;
                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (o in e.xhrFields)r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), t = function (n, o) {
                            var s, l, u;
                            if (t && (o || 4 === r.readyState))if (delete Zn[a], t = void 0, r.onreadystatechange = ot.noop, o)4 !== r.readyState && r.abort(); else {
                                u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                            u && i(s, l, u, r.getAllResponseHeaders())
                        }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zn[a] = t : t()
                    }, abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return ot.globalEval(e), e
                }
            }
        }), ot.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ot.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = ht.head || ot("head")[0] || ht.documentElement;
                return {
                    send: function (i, o) {
                        t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var ti = [], ni = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = ti.pop() || ot.expando + "_" + An++;
                return this[e] = !0, e
            }
        }), ot.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o, r, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + o) : t.jsonp !== !1 && (t.url += (Ln.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                return a || ot.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
                a = arguments
            }, i.always(function () {
                e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, ti.push(o)), a && ot.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), ot.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ht;
            var i = dt.exec(e), o = !n && [];
            return i ? [t.createElement(i[1])] : (i = ot.buildFragment([e], t, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
        };
        var ii = ot.fn.load;
        ot.fn.load = function (e, t, n) {
            if ("string" != typeof e && ii)return ii.apply(this, arguments);
            var i, o, r, a = this, s = e.indexOf(" ");
            return s >= 0 && (i = ot.trim(e.slice(s, e.length)), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && ot.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
            }).complete(n && function (e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ot.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ot.expr.filters.animated = function (e) {
            return ot.grep(ot.timers, function (t) {
                return e === t.elem
            }).length
        };
        var oi = e.document.documentElement;
        ot.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, a, s, l, u, c = ot.css(e, "position"), d = ot(e), p = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), r = ot.css(e, "top"), l = ot.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ot.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using"in t ? t.using.call(e, p) : d.css(p)
            }
        }, ot.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    ot.offset.setOffset(this, e, t)
                });
                var t, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                if (r)return t = r.documentElement, ot.contains(t, o) ? (typeof o.getBoundingClientRect !== Tt && (i = o.getBoundingClientRect()), n = X(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ot.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ot.css(i, "marginTop", !0),
                        left: t.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || oi; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");)e = e.offsetParent;
                    return e || oi
                })
            }
        }), ot.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            ot.fn[e] = function (i) {
                return jt(this, function (e, i, o) {
                    var r = X(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function (e, t) {
            ot.cssHooks[t] = N(nt.pixelPosition, function (e, n) {
                return n ? (n = tn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
            })
        }), ot.each({Height: "height", Width: "width"}, function (e, t) {
            ot.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                ot.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return jt(this, function (t, n, i) {
                        var o;
                        return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ot.css(t, n, a) : ot.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), ot.fn.size = function () {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ot
        });
        var ri = e.jQuery, ai = e.$;
        return ot.noConflict = function (t) {
            return e.$ === ot && (e.$ = ai), t && e.jQuery === ot && (e.jQuery = ri), ot
        }, typeof t === Tt && (e.jQuery = e.$ = ot), ot
    }), /*!
     * jQuery Migrate - v1.2.1 - 2013-05-08
     * https://github.com/jquery/jquery-migrate
     * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
     */
        function (e, t, n) {
            function i(n) {
                var i = t.console;
                r[n] || (r[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn("JQMIGRATE: " + n), e.migrateTrace && i.trace && i.trace()))
            }

            function o(t, n, o, r) {
                if (Object.defineProperty)try {
                    return void Object.defineProperty(t, n, {
                        configurable: !0, enumerable: !0, get: function () {
                            return i(r), o
                        }, set: function (e) {
                            i(r), o = e
                        }
                    })
                } catch (a) {
                }
                e._definePropertyBroken = !0, t[n] = o
            }

            var r = {};
            e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
                r = {}, e.migrateWarnings.length = 0
            }, "BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
            var a = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, l = e.attrHooks.value && e.attrHooks.value.get || function () {
                    return null
                }, u = e.attrHooks.value && e.attrHooks.value.set || function () {
                    return n
                }, c = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
            o(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, o, r, l) {
                var u = o.toLowerCase(), h = t && t.nodeType;
                return l && (s.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(h) && (a ? o in a : e.isFunction(e.fn[o]))) ? e(t)[o](r) : ("type" === o && r !== n && c.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[u] && p.test(u) && (e.attrHooks[u] = {
                    get: function (t, i) {
                        var o, r = e.prop(t, i);
                        return r === !0 || "boolean" != typeof r && (o = t.getAttributeNode(i)) && o.nodeValue !== !1 ? i.toLowerCase() : n
                    }, set: function (t, n, i) {
                        var o;
                        return n === !1 ? e.removeAttr(t, i) : (o = e.propFix[i] || i, o in t && (t[o] = !0), t.setAttribute(i, i.toLowerCase())), i
                    }
                }, f.test(u) && i("jQuery.fn.attr('" + u + "') may use property instead of attribute")), s.call(e, t, o, r))
            }, e.attrHooks.value = {
                get: function (e, t) {
                    var n = (e.nodeName || "").toLowerCase();
                    return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
                }, set: function (e, t) {
                    var n = (e.nodeName || "").toLowerCase();
                    return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t))
                }
            };
            var h, m, g = e.fn.init, v = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
            e.fn.init = function (t, n, o) {
                var r;
                return t && "string" == typeof t && !e.isPlainObject(n) && (r = y.exec(e.trim(t))) && r[0] && ("<" !== t.charAt(0) && i("$(html) HTML strings must start with '<' character"), r[3] && i("$(html) HTML text after last tag is ignored"), "#" === r[0].charAt(0) && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? g.call(this, e.parseHTML(r[2], n, !0), n, o) : g.apply(this, arguments)
            }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
                return e || null === e ? v.apply(this, arguments) : (i("jQuery.parseJSON requires a valid JSON string"), null)
            }, e.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, e.browser || (h = e.uaMatch(navigator.userAgent), m = {}, h.browser && (m[h.browser] = !0, m.version = h.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), e.browser = m), o(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
                function t(e, n) {
                    return new t.fn.init(e, n)
                }

                e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (i, o) {
                    return o && o instanceof e && !(o instanceof t) && (o = t(o)), e.fn.init.call(this, i, o, n)
                }, t.fn.init.prototype = t.fn;
                var n = t(document);
                return i("jQuery.sub() is deprecated"), t
            }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
            var b = e.fn.data;
            e.fn.data = function (t) {
                var o, r, a = this[0];
                return !a || "events" !== t || 1 !== arguments.length || (o = e.data(a, t), r = e._data(a, t), o !== n && o !== r || r === n) ? b.apply(this, arguments) : (i("Use of jQuery.fn.data('events') is deprecated"), r)
            };
            var x = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
            e.fn.andSelf = function () {
                return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
            }, e.clean || (e.clean = function (t, n, o, r) {
                n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, i("jQuery.clean() is deprecated");
                var a, s, l, u, c = [];
                if (e.merge(c, e.buildFragment(t, n).childNodes), o)for (l = function (e) {
                    return !e.type || x.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : void 0
                }, a = 0; null != (s = c[a]); a++)e.nodeName(s, "script") && l(s) || (o.appendChild(s), "undefined" != typeof s.getElementsByTagName && (u = e.grep(e.merge([], s.getElementsByTagName("script")), l), c.splice.apply(c, [a + 1, 0].concat(u)), a += u.length));
                return c
            });
            var C = e.event.add, T = e.event.remove, E = e.event.trigger, k = e.fn.toggle, N = e.fn.live, S = e.fn.die, $ = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", j = new RegExp("\\b(?:" + $ + ")\\b"), D = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) {
                return "string" != typeof t || e.event.special.hover ? t : (D.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(D, "mouseenter$1 mouseleave$1"))
            };
            e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && o(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, o, r) {
                e !== document && j.test(t) && i("AJAX events should be attached to document: " + t), C.call(this, e, A(t || ""), n, o, r)
            }, e.event.remove = function (e, t, n, i, o) {
                T.call(this, e, A(t) || "", n, i, o)
            }, e.fn.error = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return i("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
            }, e.fn.toggle = function (t, n) {
                if (!e.isFunction(t) || !e.isFunction(n))return k.apply(this, arguments);
                i("jQuery.fn.toggle(handler, handler...) is deprecated");
                var o = arguments, r = t.guid || e.guid++, a = 0, s = function (n) {
                    var i = (e._data(this, "lastToggle" + t.guid) || 0) % a;
                    return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), o[i].apply(this, arguments) || !1
                };
                for (s.guid = r; a < o.length;)o[a++].guid = r;
                return this.click(s)
            }, e.fn.live = function (t, n, o) {
                return i("jQuery.fn.live() is deprecated"), N ? N.apply(this, arguments) : (e(this.context).on(t, this.selector, n, o), this)
            }, e.fn.die = function (t, n) {
                return i("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
            }, e.event.trigger = function (e, t, n, o) {
                return n || j.test(e) || i("Global events are undocumented and deprecated"), E.call(this, e, t, n || document, o)
            }, e.each($.split("|"), function (t, n) {
                e.event.special[n] = {
                    setup: function () {
                        var t = this;
                        return t !== document && (e.event.add(document, n + "." + e.guid, function () {
                            e.event.trigger(n, null, t, !0)
                        }), e._data(this, n, e.guid++)), !1
                    }, teardown: function () {
                        return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                    }
                }
            })
        }(jQuery, window), "undefined" == typeof jQuery)throw new Error("Bootstrap requires jQuery");
+function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]}
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, i = this;
        e(this).one(e.support.transition.end, function () {
            n = !0
        });
        var o = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function () {
        e.support.transition = t()
    })
}(jQuery), +function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function (n) {
        e(n).on("click", t, this.close)
    };
    n.prototype.close = function (t) {
        function n() {
            r.trigger("closed.bs.alert").remove()
        }

        var i = e(this), o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = e(o);
        t && t.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof t && o[t].call(i)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), +function (e) {
    "use strict";
    var t = function (n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i)
    };
    t.DEFAULTS = {loadingText: "loading..."}, t.prototype.setState = function (e) {
        var t = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", o = n.data();
        e += "Text", o.resetText || n.data("resetText", n[i]()), n[i](o[e] || this.options[e]), setTimeout(function () {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function () {
        var e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === t.prop("type") && e.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.button"), r = "object" == typeof n && n;
            o || i.data("bs.button", o = new t(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), +function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, t.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function (t) {
        var n = this, i = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function () {
            n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function (t, n) {
        var i = this.$element.find(".item.active"), o = n || i[t](), r = this.interval, a = "next" == t ? "left" : "right", s = "next" == t ? "first" : "last", l = this;
        if (!o.length) {
            if (!this.options.wrap)return;
            o = this.$element.find(".item")[s]()
        }
        this.sliding = !0, r && this.pause();
        var u = e.Event("slide.bs.carousel", {relatedTarget: o[0], direction: a});
        if (!o.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                    var t = e(l.$indicators.children()[l.getActiveIndex()]);
                    t && t.addClass("active")
                })), e.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(u), u.isDefaultPrevented())return;
                o.addClass(t), o[0].offsetWidth, i.addClass(a), o.addClass(a), i.one(e.support.transition.end, function () {
                    o.removeClass([t, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(u), u.isDefaultPrevented())return;
                i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return r && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.carousel"), r = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n), a = "string" == typeof n ? n : r.slide;
            o || i.data("bs.carousel", o = new t(this, r)), "number" == typeof n ? o.to(n) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n, i = e(this), o = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), r = e.extend({}, o.data(), i.data()), a = i.attr("data-slide-to");
        a && (r.interval = !1), o.carousel(r), (a = i.attr("data-slide-to")) && o.data("bs.carousel").to(a), t.preventDefault()
    }), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    var t = function (n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {toggle: !0}, t.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning)return;
                    n.collapse("hide"), i || n.data("bs.collapse", null)
                }
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                var r = function () {
                    this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition)return r.call(this);
                var a = e.camelCase(["scroll", o].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
            }
        }
    }, t.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.collapse"), r = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            o || i.data("bs.collapse", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (t) {
        var n, i = e(this), o = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), r = e(o), a = r.data("bs.collapse"), s = a ? "toggle" : i.data(), l = i.attr("data-parent"), u = l && e(l);
        a && a.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(s)
    })
}(jQuery), +function (e) {
    "use strict";
    function t() {
        e(i).remove(), e(o).each(function (t) {
            var i = n(e(this));
            i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown")), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    var i = ".dropdown-backdrop", o = "[data-toggle=dropdown]", r = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    r.prototype.toggle = function (i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o), a = r.hasClass("open");
            if (t(), !a) {
                if ("ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t), r.trigger(i = e.Event("show.bs.dropdown")), i.isDefaultPrevented())return;
                r.toggleClass("open").trigger("shown.bs.dropdown"), o.focus()
            }
            return !1
        }
    }, r.prototype.keydown = function (t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i), a = r.hasClass("open");
                if (!a || a && 27 == t.keyCode)return 27 == t.which && r.find(o).focus(), i.click();
                var s = e("[role=menu] li:not(.divider):visible a", r);
                if (s.length) {
                    var l = s.index(s.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).focus()
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this), i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ", [role=menu]", r.prototype.keydown)
}(jQuery), +function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    t.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, t.prototype.toggle = function (e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function (t) {
        var n = this, i = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function () {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = e.Event("shown.bs.modal", {relatedTarget: t});
            i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function () {
                n.$element.focus().trigger(o)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(o)
        }))
    }, t.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function (t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", e.proxy(function (e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
            i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function (n, i) {
        return this.each(function () {
            var o = e(this), r = o.data("bs.modal"), a = e.extend({}, t.DEFAULTS, o.data(), "object" == typeof n && n);
            r || o.data("bs.modal", r = new t(this, a)), "string" == typeof n ? r[n](i) : a.show && r.show(i)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this), i = n.attr("href"), o = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), r = o.data("modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, o.data(), n.data());
        t.preventDefault(), o.modal(r, this).one("hide", function () {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function () {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        e(document.body).removeClass("modal-open")
    })
}(jQuery), +function (e) {
    "use strict";
    var t = function (e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function (t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focus", l = "hover" == a ? "mouseleave" : "blur";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }, t.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, t.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented())return;
            var n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, o = /\s?auto?\s?/i, r = o.test(i);
            r && (i = i.replace(o, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var a = this.getPosition(), s = n[0].offsetWidth, l = n[0].offsetHeight;
            if (r) {
                var u = this.$element.parent(), c = i, d = document.documentElement.scrollTop || document.body.scrollTop, p = "body" == this.options.container ? window.innerWidth : u.outerWidth(), f = "body" == this.options.container ? window.innerHeight : u.outerHeight(), h = "body" == this.options.container ? 0 : u.offset().left;
                i = "bottom" == i && a.top + a.height + l - d > f ? "top" : "top" == i && a.top - d - l < 0 ? "bottom" : "right" == i && a.right + s > p ? "left" : "left" == i && a.left - s < h ? "right" : i, n.removeClass(c).addClass(i)
            }
            var m = this.getCalculatedOffset(i, a, s, l);
            this.applyPlacement(m, i), this.$element.trigger("shown.bs." + this.type)
        }
    }, t.prototype.applyPlacement = function (e, t) {
        var n, i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, a = parseInt(i.css("margin-top"), 10), s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, i.offset(e).addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        if ("top" == t && u != r && (n = !0, e.top = e.top + r - u), /bottom|top/.test(t)) {
            var c = 0;
            e.left < 0 && (c = -2 * e.left, e.left = 0, i.offset(e), l = i[0].offsetWidth, u = i[0].offsetHeight), this.replaceArrow(c - o + l, l, "left")
        } else this.replaceArrow(u - r, u, "top");
        n && i.offset(e)
    }, t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function () {
        function t() {
            "in" != n.hoverState && i.detach()
        }

        var n = this, i = this.tip(), o = e.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.$element.trigger("hidden.bs." + this.type), this)
    }, t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function () {
        return this.getTitle()
    }, t.prototype.getPosition = function () {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - i / 2, left: t.left - n} : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function () {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function () {
        this.enabled = !0
    }, t.prototype.disable = function () {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function (t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.tooltip"), r = "object" == typeof n && n;
            o || i.data("bs.tooltip", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(jQuery), +function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }, t.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function () {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.popover"), r = "object" == typeof n && n;
            o || i.data("bs.popover", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
    }
}(jQuery), +function (e) {
    "use strict";
    function t(n, i) {
        var o, r = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || (o = e(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }

    t.DEFAULTS = {offset: 10}, t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function () {
            var i = e(this), o = i.data("target") || i.attr("href"), r = /^#\w/.test(o) && e(o);
            return r && r.length && [[r[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), o]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
        if (t >= i)return a != (e = r.last()[0]) && this.activate(e);
        for (e = o.length; e--;)a != r[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, e(this.selector).parents(".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0], r = e.Event("show.bs.tab", {relatedTarget: o});
            if (t.trigger(r), !r.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.parent("li"), n), this.activate(a, a.parent(), function () {
                    t.trigger({type: "shown.bs.tab", relatedTarget: o})
                })
            }
        }
    }, t.prototype.activate = function (t, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }

        var r = n.find("> .active"), a = i && e.support.transition && r.hasClass("fade");
        a ? r.one(e.support.transition.end, o).emulateTransitionEnd(150) : o(), r.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new t(this)), "string" == typeof n && o[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), +function (e) {
    "use strict";
    var t = function (n, i) {
        this.options = e.extend({}, t.DEFAULTS, i), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {offset: 0}, t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = e(document).height(), i = this.$window.scrollTop(), o = this.$element.offset(), r = this.options.offset, a = r.top, s = r.bottom;
            "object" != typeof r && (s = a = r), "function" == typeof a && (a = r.top()), "function" == typeof s && (s = r.bottom());
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1;
            this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, this.unpin = "bottom" == l ? o.top - i : null, this.$element.removeClass(t.RESET).addClass("affix" + (l ? "-" + l : "")), "bottom" == l && this.$element.offset({top: document.body.offsetHeight - s - this.$element.height()}))
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function (n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.affix"), r = "object" == typeof n && n;
            o || i.data("bs.affix", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function () {
        return e.fn.affix = n, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this), n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery), $(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var t = this.hash, n = $(t);
        $("html, body").stop().animate({scrollTop: n.offset().top}, 900, "swing", function () {
            window.location.hash = t
        })
    })
}), $(".menu a").click(function () {
    $(this).addClass("active")
});