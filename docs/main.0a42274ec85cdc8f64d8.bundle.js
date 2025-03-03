(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        function (t, e, r) {
            t.exports = r(5);
        },
        function (t, e, r) {
            var n = r(2),
                o = r(3);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[t.i, o, ""]]);
            var a = { insert: "head", singleton: !1 },
                i = (n(o, a), o.locals ? o.locals : {});
            t.exports = i;
        },
        function (t, e, r) {
            "use strict";
            var n,
                o = function () {
                    return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
                },
                a = (function () {
                    var t = {};
                    return function (e) {
                        if (void 0 === t[e]) {
                            var r = document.querySelector(e);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                                try {
                                    r = r.contentDocument.head;
                                } catch (t) {
                                    r = null;
                                }
                            t[e] = r;
                        }
                        return t[e];
                    };
                })(),
                i = [];
            function u(t) {
                for (var e = -1, r = 0; r < i.length; r++)
                    if (i[r].identifier === t) {
                        e = r;
                        break;
                    }
                return e;
            }
            function c(t, e) {
                for (var r = {}, n = [], o = 0; o < t.length; o++) {
                    var a = t[o],
                        c = e.base ? a[0] + e.base : a[0],
                        l = r[c] || 0,
                        s = "".concat(c, " ").concat(l);
                    r[c] = l + 1;
                    var f = u(s),
                        p = { css: a[1], media: a[2], sourceMap: a[3] };
                    -1 !== f ? (i[f].references++, i[f].updater(p)) : i.push({ identifier: s, updater: h(p, e), references: 1 }), n.push(s);
                }
                return n;
            }
            function l(t) {
                var e = document.createElement("style"),
                    n = t.attributes || {};
                if (void 0 === n.nonce) {
                    var o = r.nc;
                    o && (n.nonce = o);
                }
                if (
                    (Object.keys(n).forEach(function (t) {
                        e.setAttribute(t, n[t]);
                    }),
                    "function" == typeof t.insert)
                )
                    t.insert(e);
                else {
                    var i = a(t.insert || "head");
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(e);
                }
                return e;
            }
            var s,
                f =
                    ((s = []),
                    function (t, e) {
                        return (s[t] = e), s.filter(Boolean).join("\n");
                    });
            function p(t, e, r, n) {
                var o = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
                if (t.styleSheet) t.styleSheet.cssText = f(e, o);
                else {
                    var a = document.createTextNode(o),
                        i = t.childNodes;
                    i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(a, i[e]) : t.appendChild(a);
                }
            }
            function y(t, e, r) {
                var n = r.css,
                    o = r.media,
                    a = r.sourceMap;
                if (
                    (o ? t.setAttribute("media", o) : t.removeAttribute("media"), a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleSheet)
                )
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            }
            var d = null,
                b = 0;
            function h(t, e) {
                var r, n, o;
                if (e.singleton) {
                    var a = b++;
                    (r = d || (d = l(e))), (n = p.bind(null, r, a, !1)), (o = p.bind(null, r, a, !0));
                } else
                    (r = l(e)),
                        (n = y.bind(null, r, e)),
                        (o = function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(r);
                        });
                return (
                    n(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            n((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function (t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
                var r = c((t = t || []), e);
                return function (t) {
                    if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                        for (var n = 0; n < r.length; n++) {
                            var o = u(r[n]);
                            i[o].references--;
                        }
                        for (var a = c(t, e), l = 0; l < r.length; l++) {
                            var s = u(r[l]);
                            0 === i[s].references && (i[s].updater(), i.splice(s, 1));
                        }
                        r = a;
                    }
                };
            };
        },
        function (t, e, r) {
            (e = r(4)(!0)).push([t.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "index.scss" }]), (t.exports = e);
        },
        function (t, e, r) {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var r = (function (t, e) {
                                var r = t[1] || "",
                                    n = t[3];
                                if (!n) return r;
                                if (e && "function" == typeof btoa) {
                                    var o = ((i = n), (u = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u)), "/*# ".concat(c, " */")),
                                        a = n.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */");
                                        });
                                    return [r].concat(a).concat([o]).join("\n");
                                }
                                var i, u, c;
                                return [r].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
                        }).join("");
                    }),
                    (e.i = function (t, r, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var o = {};
                        if (n)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (o[i] = !0);
                            }
                        for (var u = 0; u < t.length; u++) {
                            var c = [].concat(t[u]);
                            (n && o[c[0]]) || (r && (c[2] ? (c[2] = "".concat(r, " and ").concat(c[2])) : (c[2] = r)), e.push(c));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, r) {
            "use strict";
            r.r(e);
            r.p, r(1);
            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            var o = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t);
                }
                var e, r, o;
                return (
                    (e = t),
                    (o = [
                        {
                            key: "setItem",
                            value: function (t, e) {
                                localStorage.setItem(t, JSON.stringify(e));
                            },
                        },
                        {
                            key: "getItem",
                            value: function (t) {
                                return JSON.parse(localStorage.getItem(t));
                            },
                        },
                    ]),
                    (r = null) && n(e.prototype, r),
                    o && n(e, o),
                    t
                );
            })();
            function a(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return i(t);
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return i(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var u = [].concat(
                    a(Array(2).fill("b")),
                    a(Array(3).fill("c")),
                    a(Array(6).fill("d")),
                    a(Array(2).fill("f")),
                    a(Array(3).fill("g")),
                    a(Array(2).fill("h")),
                    a(Array(1).fill("j")),
                    a(Array(1).fill("k")),
                    a(Array(5).fill("l")),
                    a(Array(4).fill("m")),
                    a(Array(8).fill("n")),
                    a(Array(4).fill("p")),
                    a(Array(1).fill("q")),
                    a(Array(9).fill("r")),
                    a(Array(9).fill("s")),
                    a(Array(9).fill("t")),
                    a(Array(1).fill("v")),
                    a(Array(1).fill("w")),
                    a(Array(1).fill("x")),
                    a(Array(1).fill("y")),
                    a(Array(1).fill("z"))
                ),
                c = [
                    { word: "IBUMPETS", clue: "Not a smoooth ride", answer: "Bumpiest" },
                    { word: "IDLEPOOS", clue: "My favourite way to relax", answer: "Poolside" },
                    { word: "NOBALARM", clue: "That's not right!", answer: "Abnormal" },
                    { word: "SENDBUMS", clue: "I like them thick", answer: "Dumbness" },
                    { word: "NEATPOLE", clue: "Watch out for the horn!", answer: "Antelope" },
                    { word: "VOTEARSE", clue: "Shove it all in", answer: "Overeats" },
                    { word: "PENISTIP", clue: "Fancy a quick one?", answer: "Nippiest" },
                    { word: "FREEDUMP", clue: "Smells pretty goood!", answer: "Perfumed" },
                    { word: "GIANTLOG", clue: "I'm just showing off", answer: "Gloating" },
                    { word: "SHITPOLL", clue: "The only way is up", answer: "Hilltops" },
                    { word: "ORALNITE", clue: "Keep it in the family", answer: "Relation" },
                    { word: "LIKEWANG", clue: "A bit soft", answer: "Weakling" },
                    { word: "TASTENIP", clue: "There's probably a waiting list", answer: "Patients" },
                    { word: "TITSLUBE", clue: "My gran needs this", answer: "Subtitle" },
                    { word: "BUMNIGHT", clue: "Stick it right up", answer: "Thumbing" },
                ];
            function l(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return s(t);
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return s(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var f = [].concat(l(Array(15).fill("a")), l(Array(21).fill("e")), l(Array(13).fill("i")), l(Array(13).fill("o")), l(Array(5).fill("u")));
            function p(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return y(t);
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return y(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var d = [25, 50, 75, 100],
                b = [].concat(
                    p(Array(2).fill(1)),
                    p(Array(2).fill(2)),
                    p(Array(2).fill(3)),
                    p(Array(2).fill(4)),
                    p(Array(2).fill(5)),
                    p(Array(2).fill(6)),
                    p(Array(2).fill(7)),
                    p(Array(2).fill(8)),
                    p(Array(2).fill(9)),
                    p(Array(2).fill(10))
                );
            function h(t) {
                return (h =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function v(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function g(t, e) {
                return !e || ("object" !== h(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function w(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (w = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n);
                    }
                    function n() {
                        return O(t, arguments, j(this).constructor);
                    }
                    return (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), A(n, t);
                })(t);
            }
            function O(t, e, r) {
                return (O = S()
                    ? Reflect.construct
                    : function (t, e, r) {
                          var n = [null];
                          n.push.apply(n, e);
                          var o = new (Function.bind.apply(t, n))();
                          return r && A(o, r.prototype), o;
                      }).apply(null, arguments);
            }
            function S() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function A(t, e) {
                return (A =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function j(t) {
                return (j = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var k = function (t) {
                    return t
                        .map(function (t) {
                            return [Math.random(), t];
                        })
                        .sort(function (t, e) {
                            return t[0] - e[0];
                        })
                        .map(function (t) {
                            return t[1];
                        });
                },
                E = "new-game-created",
                P = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && A(t, e);
                    })(l, t);
                    var e,
                        r,
                        n,
                        a,
                        i =
                            ((e = l),
                            function () {
                                var t,
                                    r = j(e);
                                if (S()) {
                                    var n = j(this).constructor;
                                    t = Reflect.construct(r, arguments, n);
                                } else t = r.apply(this, arguments);
                                return g(this, t);
                            });
                    function l() {
                        return m(this, l), i.apply(this, arguments);
                    }
                    return (
                        (r = l),
                        (a = [
                            {
                                key: "observedAttributes",
                                get: function () {
                                    return ["state"];
                                },
                            },
                        ]),
                        (n = [
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    this.game ? this.loadGame() : this.createNewGame(),
                                        this.addEventListener("click", function (e) {
                                            e.target.matches('[value="new"]') && t.createNewGame(),
                                                e.target.matches('[value="reset"]') && (t.video.pause(), (t.video.currentTime = 0)),
                                                e.target.matches('[value="play"]') && t.video.play(),
                                                e.target.matches('[value="pause"]') && t.video.pause(),
                                                e.target.matches('[value="fullscreen"]') && document.documentElement.requestFullscreen(),
                                                e.target.matches('[value="letters"]') && (t.state = "letters"),
                                                e.target.matches('[value="numbers"]') && (t.state = "numbers"),
                                                e.target.matches('[value="conundrum"]') && (t.state = "conundrum");
                                        });
                                },
                            },
                            {
                                key: "attributeChangedCallback",
                                value: function (t) {
                                    if ("state" === t) {
                                        var e = this.game;
                                        (e.state = this.state), (this.game = e);
                                    }
                                },
                            },
                            {
                                key: "loadGame",
                                value: function () {
                                    this.state = this.game.state;
                                },
                            },
                            {
                                key: "createNewGame",
                                value: function () {
                                    (this.game = { consonants: k(u), conundrums: k(c), vowels: k(f), boardLetters: [], state: "letters", largeNumbers: k(d), smallNumbers: k(b), boardNumbers: [], target: 0, boardConundrum: null }),
                                        this.dispatchEvent(new Event(E)),
                                        (this.state = this.game.state);
                                },
                            },
                            {
                                key: "game",
                                get: function () {
                                    return o.getItem("game");
                                },
                                set: function (t) {
                                    o.setItem("game", t);
                                },
                            },
                            {
                                key: "video",
                                get: function () {
                                    return this.querySelector("video");
                                },
                            },
                            {
                                key: "state",
                                get: function () {
                                    return this.getAttribute("state");
                                },
                                set: function (t) {
                                    return this.setAttribute("state", t);
                                },
                            },
                        ]) && v(r.prototype, n),
                        a && v(r, a),
                        l
                    );
                })(w(HTMLElement));
            function T(t) {
                return (T =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function I(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function N(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function R(t, e) {
                return !e || ("object" !== T(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function C(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (C = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n);
                    }
                    function n() {
                        return M(t, arguments, B(this).constructor);
                    }
                    return (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), _(n, t);
                })(t);
            }
            function M(t, e, r) {
                return (M = L()
                    ? Reflect.construct
                    : function (t, e, r) {
                          var n = [null];
                          n.push.apply(n, e);
                          var o = new (Function.bind.apply(t, n))();
                          return r && _(o, r.prototype), o;
                      }).apply(null, arguments);
            }
            function L() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function _(t, e) {
                return (_ =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function B(t) {
                return (B = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var x = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _(t, e);
                })(i, t);
                var e,
                    r,
                    n,
                    o,
                    a =
                        ((e = i),
                        function () {
                            var t,
                                r = B(e);
                            if (L()) {
                                var n = B(this).constructor;
                                t = Reflect.construct(r, arguments, n);
                            } else t = r.apply(this, arguments);
                            return R(this, t);
                        });
                function i() {
                    return I(this, i), a.apply(this, arguments);
                }
                return (
                    (r = i),
                    (n = [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.addEventListener("click", function (e) {
                                    e.target.matches('[value="reveal"]') && (t.state = "reveal"),
                                        e.target.matches('[value="new"]') && (e.stopPropagation(), (t.state = ""), t.getNewConundrum()),
                                        e.target.matches('[value="clear"]') && t.reset();
                                }),
                                    this.app.addEventListener(E, function () {
                                        t.updateBoard();
                                    }),
                                    this.updateBoard();
                            },
                        },
                        {
                            key: "getNewConundrum",
                            value: function () {
                                var t = this.app.game;
                                t.conundrums.length < 1 || ((t.boardConundrum = t.conundrums.pop()), (this.app.game = t), this.updateBoard());
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                var t = this.app.game;
                                (t.boardConundrum = null), (this.app.game = t), this.updateBoard();
                            },
                        },
                        {
                            key: "updateBoard",
                            value: function () {
                                var t = this;
                                if (!this.app.game.boardConundrum) return this.conundrumBoard.reset(), void this.answerBoard.reset();
                                this.app.game.boardConundrum.word.split("").forEach(function (e, r) {
                                    t.conundrumBoard.querySelectorAll("input")[r].value = e;
                                }),
                                    this.app.game.boardConundrum.answer.split("").forEach(function (e, r) {
                                        t.answerBoard.querySelectorAll("input")[r].value = e;
                                    });
                            },
                        },
                        {
                            key: "state",
                            get: function () {
                                return this.getAttribute("state");
                            },
                            set: function (t) {
                                return this.setAttribute("state", t);
                            },
                        },
                        {
                            key: "conundrumBoard",
                            get: function () {
                                return this.querySelector(".conundrum-board");
                            },
                        },
                        {
                            key: "answerBoard",
                            get: function () {
                                return this.querySelector(".answer-board");
                            },
                        },
                        {
                            key: "app",
                            get: function () {
                                return this.closest("countdown-app");
                            },
                        },
                    ]) && N(r.prototype, n),
                    o && N(r, o),
                    i
                );
            })(C(HTMLElement));
            function D(t) {
                return (D =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function q(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function U(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? q(Object(r), !0).forEach(function (e) {
                              F(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : q(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            function F(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function G(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return H(t);
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return H(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function H(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function J(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function $(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function V(t, e) {
                return !e || ("object" !== D(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function W(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (W = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n);
                    }
                    function n() {
                        return K(t, arguments, X(this).constructor);
                    }
                    return (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), Q(n, t);
                })(t);
            }
            function K(t, e, r) {
                return (K = z()
                    ? Reflect.construct
                    : function (t, e, r) {
                          var n = [null];
                          n.push.apply(n, e);
                          var o = new (Function.bind.apply(t, n))();
                          return r && Q(o, r.prototype), o;
                      }).apply(null, arguments);
            }
            function z() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function Q(t, e) {
                return (Q =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function X(t) {
                return (X = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var Y = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Q(t, e);
                })(i, t);
                var e,
                    r,
                    n,
                    o,
                    a =
                        ((e = i),
                        function () {
                            var t,
                                r = X(e);
                            if (z()) {
                                var n = X(this).constructor;
                                t = Reflect.construct(r, arguments, n);
                            } else t = r.apply(this, arguments);
                            return V(this, t);
                        });
                function i() {
                    return J(this, i), a.apply(this, arguments);
                }
                return (
                    (r = i),
                    (n = [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.addEventListener("click", function (e) {
                                    e.target.matches('[value="clear"]') && t.reset(), e.target.matches('[value="consonant"]') && t.takeConsonant(), e.target.matches('[value="vowel"]') && t.takeVowel();
                                }),
                                    this.board.addEventListener("keydown", function (t) {
                                        return t.preventDefault();
                                    }),
                                    this.app.addEventListener(E, function () {
                                        t.updateBoard();
                                    }),
                                    this.updateBoard();
                            },
                        },
                        {
                            key: "updateBoard",
                            value: function () {
                                this.board.reset();
                                var t = G(this.board.querySelectorAll("input"));
                                this.app.game.boardLetters.forEach(function (e, r) {
                                    t[r].value = e;
                                });
                            },
                        },
                        {
                            key: "takeConsonant",
                            value: function () {
                                var t = U({}, this.app.game);
                                if (!(t.boardLetters.length > 8)) {
                                    var e = t.consonants.pop();
                                    t.boardLetters.push(e), (this.app.game = t), this.updateBoard();
                                }
                            },
                        },
                        {
                            key: "takeVowel",
                            value: function () {
                                var t = U({}, this.app.game);
                                if (!(t.boardLetters.length > 8)) {
                                    var e = t.vowels.pop();
                                    t.boardLetters.push(e), (this.app.game = t), this.updateBoard();
                                }
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                var t = U({}, this.app.game);
                                (t.boardLetters = []), (this.app.game = t), this.updateBoard();
                            },
                        },
                        {
                            key: "board",
                            get: function () {
                                return this.querySelector(".letter-selection");
                            },
                        },
                        {
                            key: "app",
                            get: function () {
                                return this.closest("countdown-app");
                            },
                        },
                    ]) && $(r.prototype, n),
                    o && $(r, o),
                    i
                );
            })(W(HTMLElement));
            function Z(t) {
                return (Z =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function tt(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return et(t);
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return et(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return et(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function et(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function rt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function nt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? rt(Object(r), !0).forEach(function (e) {
                              ot(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : rt(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            function ot(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function at(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function it(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function ut(t, e) {
                return !e || ("object" !== Z(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function ct(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (ct = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n);
                    }
                    function n() {
                        return lt(t, arguments, pt(this).constructor);
                    }
                    return (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), ft(n, t);
                })(t);
            }
            function lt(t, e, r) {
                return (lt = st()
                    ? Reflect.construct
                    : function (t, e, r) {
                          var n = [null];
                          n.push.apply(n, e);
                          var o = new (Function.bind.apply(t, n))();
                          return r && ft(o, r.prototype), o;
                      }).apply(null, arguments);
            }
            function st() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function ft(t, e) {
                return (ft =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function pt(t) {
                return (pt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var yt = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ft(t, e);
                })(i, t);
                var e,
                    r,
                    n,
                    o,
                    a =
                        ((e = i),
                        function () {
                            var t,
                                r = pt(e);
                            if (st()) {
                                var n = pt(this).constructor;
                                t = Reflect.construct(r, arguments, n);
                            } else t = r.apply(this, arguments);
                            return ut(this, t);
                        });
                function i() {
                    return at(this, i), a.apply(this, arguments);
                }
                return (
                    (r = i),
                    (n = [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var t = this;
                                this.addEventListener("click", function (e) {
                                    e.target.matches('[value="clear"]') && t.reset(),
                                        e.target.matches('[value="large"]') && t.takeLarge(),
                                        e.target.matches('[value="small"]') && t.takeSmall(),
                                        e.target.matches('[value="target"]') && t.setTarget();
                                }),
                                    this.app.addEventListener(E, function () {
                                        t.updateBoard();
                                    }),
                                    this.updateBoard();
                            },
                        },
                        {
                            key: "setTarget",
                            value: function () {
                                var t = this,
                                    e = 100;
                                !(function r() {
                                    if (((t.target = Math.floor(900 * Math.random() + 100)), --e < 1)) {
                                        var n = nt({}, t.app.game);
                                        return (n.target = t.target), void (t.app.game = n);
                                    }
                                    requestAnimationFrame(r);
                                })();
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                var t = nt({}, this.app.game);
                                (t.target = this.target = 0), (t.boardNumbers = []), (t.largeNumbers = k(d)), (t.smallNumbers = k(b)), (this.app.game = t), this.updateBoard();
                            },
                        },
                        {
                            key: "takeLarge",
                            value: function () {
                                var t = nt({}, this.app.game);
                                if (!(t.boardNumbers.length > 5) && 0 !== t.largeNumbers.length) {
                                    var e = t.largeNumbers.pop();
                                    t.boardNumbers.push(e), (this.app.game = t), this.updateBoard();
                                }
                            },
                        },
                        {
                            key: "takeSmall",
                            value: function () {
                                var t = nt({}, this.app.game);
                                if (!(t.boardNumbers.length > 5) && 0 !== t.smallNumbers.length) {
                                    var e = t.smallNumbers.pop();
                                    t.boardNumbers.push(e), (this.app.game = t), this.updateBoard();
                                }
                            },
                        },
                        {
                            key: "updateBoard",
                            value: function () {
                                (this.target = this.app.game.target), this.board.reset();
                                var t = tt(this.selectionInputs);
                                this.app.game.boardNumbers.forEach(function (e, r) {
                                    t[r].value = e;
                                });
                            },
                        },
                        {
                            key: "board",
                            get: function () {
                                return this.querySelector(".board form");
                            },
                        },
                        {
                            key: "selectionInputs",
                            get: function () {
                                return this.querySelectorAll(".number-selection input");
                            },
                        },
                        {
                            key: "target",
                            get: function () {
                                return this.querySelector(".target").value;
                            },
                            set: function (t) {
                                this.querySelector(".target").value = t;
                            },
                        },
                        {
                            key: "app",
                            get: function () {
                                return this.closest("countdown-app");
                            },
                        },
                    ]) && it(r.prototype, n),
                    o && it(r, o),
                    i
                );
            })(ct(HTMLElement));
            customElements.define("countdown-app", P), customElements.define("conundrum-board", x), customElements.define("letter-board", Y), customElements.define("number-board", yt);
        },
    ],
    [[0, 1]],
]);
