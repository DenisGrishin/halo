/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            u = o.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            h = f.toString,
            m = h.call(Object),
            g = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var i,
              r,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (i in x)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: C,
              constructor: E,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (E.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (s[t] = E.extend(c, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            E.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = s(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      h.call(n) === m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (S(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  s = [];
                if (S(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return l(s);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = o[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              b,
              x = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              E = le(),
              S = le(),
              k = le(),
              A = le(),
              L = function (e, t) {
                return e === t && (d = !0), 0;
              },
              O = {}.hasOwnProperty,
              D = [],
              M = D.pop,
              P = D.push,
              j = D.push,
              N = D.slice,
              $ = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              q = "[\\x20\\t\\r\\n\\f]",
              H =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              _ =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                H +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                q +
                "*\\]",
              B =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                _ +
                ")*)|.*)\\)|)",
              z = new RegExp(q + "+", "g"),
              R = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              G = new RegExp(q + "|>"),
              V = new RegExp(B),
              X = new RegExp("^" + H + "$"),
              U = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + _),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                p();
              },
              se = xe(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              j.apply((D = N.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (e) {
              j = {
                apply: D.length
                  ? function (e, t) {
                      P.apply(e, N.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var o,
                a,
                c,
                u,
                d,
                h,
                v,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return i;
              if (!r && (p(t), (t = t || f), m)) {
                if (11 !== w && (d = Z.exec(e)))
                  if ((o = d[1])) {
                    if (9 === w) {
                      if (!(c = t.getElementById(o))) return i;
                      if (c.id === o) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(o)) &&
                      b(t, c) &&
                      c.id === o
                    )
                      return i.push(c), i;
                  } else {
                    if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return j.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === w && (G.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(ie, re))
                          : t.setAttribute("id", (u = x))),
                        a = (h = s(e)).length;
                      a--;

                    )
                      h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return j.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    u === x && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(R, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[x] = !0), e;
            }
            function ue(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && se(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                      n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (o = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  s = e ? e.ownerDocument || e : w;
                return s != f && 9 === s.nodeType && s.documentElement
                  ? ((h = (f = s).documentElement),
                    (m = !o(f)),
                    w != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", oe, !1)
                        : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = ue(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !f.getElementsByName || !f.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              i,
                              r,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (o = r[i++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (g = []),
                    (n.qsa = J.test(f.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"
                            ),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", B);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(h.compareDocumentPosition)),
                    (b =
                      t || J.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == w && b(w, e))
                                ? -1
                                : t == f || (t.ownerDocument == w && b(w, t))
                                ? 1
                                : u
                                ? $(u, e) - $(u, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!r || !o)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : u
                              ? $(u, e) - $(u, t)
                              : 0;
                          if (r === o) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[i] === a[i]; ) i++;
                          return i
                            ? pe(s[i], a[i])
                            : s[i] == w
                            ? -1
                            : a[i] == w
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  m &&
                  !A[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && O.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !m)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(L),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + q + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            p,
                            f,
                            h,
                            m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (g) {
                            if (o) {
                              for (; m; ) {
                                for (p = t; (p = p[m]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? g.firstChild : g.lastChild]), s && y)
                            ) {
                              for (
                                b =
                                  (f =
                                    (c =
                                      (u =
                                        (d = (p = g)[x] || (p[x] = {}))[
                                          p.uniqueID
                                        ] || (d[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = f && g.childNodes[f];
                                (p =
                                  (++f && p && p[m]) || (b = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  u[e] = [T, f, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = f =
                                  (c =
                                    (u =
                                      (d = (p = t)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[m]) ||
                                  (b = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((u =
                                      (d = p[x] || (p[x] = {}))[p.uniqueID] ||
                                      (d[p.uniqueID] = {}))[e] = [T, b]),
                                  p !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[x]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, o = r(e, t), s = o.length; s--; )
                                e[(i = $(e, o[s]))] = !(n[i] = o[s]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(R, "$1"));
                    return i[x]
                      ? ce(function (e, t, n, r) {
                          for (
                            var o, s = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function xe(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = C++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((u =
                              (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = u[o]) && c[0] === T && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, r) {
              for (
                var o, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
              return s;
            }
            function Ce(e, t, n, i, r, o) {
              return (
                i && !i[x] && (i = Ce(i)),
                r && !r[x] && (r = Ce(r, o)),
                ce(function (o, s, a, l) {
                  var c,
                    u,
                    d,
                    p = [],
                    f = [],
                    h = s.length,
                    m =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || (!o && t) ? m : Te(m, p, e, a, l),
                    v = n ? (r || (o ? e : h || i) ? [] : s) : g;
                  if ((n && n(g, v, a, l), i))
                    for (c = Te(v, f), i(c, [], a, l), u = c.length; u--; )
                      (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (c = [], u = v.length; u--; )
                          (d = v[u]) && c.push((g[u] = d));
                        r(null, (v = []), c, l);
                      }
                      for (u = v.length; u--; )
                        (d = v[u]) &&
                          (c = r ? $(o, d) : p[u]) > -1 &&
                          (o[c] = !(s[c] = d));
                    }
                  } else (v = Te(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  s = i.relative[e[0].type],
                  a = s || i.relative[" "],
                  l = s ? 1 : 0,
                  u = xe(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  d = xe(
                    function (e) {
                      return $(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!s && (i || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [xe(we(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return Ce(
                      l > 1 && we(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(R, "$1"),
                      n,
                      l < r && Ee(e.slice(l, r)),
                      r < o && Ee((e = e.slice(r))),
                      r < o && be(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (s = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = S[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (s in ((n && !(r = W.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                    (n = !1),
                    (r = F.exec(a)) &&
                      ((n = r.shift()),
                      o.push({ value: n, type: r[0].replace(R, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = U[s].exec(a)) ||
                        (c[s] && !(r = c[s](r))) ||
                        ((n = r.shift()),
                        o.push({ value: n, type: s, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Ee(t[n]))[x] ? r.push(a) : o.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          o = function (o, s, a, l, u) {
                            var d,
                              h,
                              g,
                              v = 0,
                              y = "0",
                              b = o && [],
                              x = [],
                              w = c,
                              C = o || (r && i.find.TAG("*", u)),
                              E = (T += null == w ? 1 : Math.random() || 0.1),
                              S = C.length;
                            for (
                              u && (c = s == f || s || u);
                              y !== S && null != (d = C[y]);
                              y++
                            ) {
                              if (r && d) {
                                for (
                                  h = 0,
                                    s ||
                                      d.ownerDocument == f ||
                                      (p(d), (a = !m));
                                  (g = e[h++]);

                                )
                                  if (g(d, s || f, a)) {
                                    l.push(d);
                                    break;
                                  }
                                u && (T = E);
                              }
                              n && ((d = !g && d) && v--, o && b.push(d));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (g = t[h++]); ) g(b, x, s, a);
                              if (o) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || x[y] || (x[y] = M.call(l));
                                x = Te(x);
                              }
                              j.apply(l, x),
                                u &&
                                  !o &&
                                  x.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return u && ((T = E), (c = w)), b;
                          };
                        return n ? ce(o) : o;
                      })(o, r)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var o,
                    l,
                    c,
                    u,
                    d,
                    p = "function" == typeof e && e,
                    f = !r && s((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = U.needsContext.test(e) ? 0 : l.length;
                      o-- && ((c = l[o]), !i.relative[(u = c.type)]);

                    )
                      if (
                        (d = i.find[u]) &&
                        (r = d(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = r.length && be(l))))
                          return j.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, f))(
                      r,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(L).join("") === x),
              (n.detectDuplicates = !!d),
              p(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(I, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (E.find = k),
            (E.expr = k.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = k.uniqueSort),
            (E.text = k.getText),
            (E.isXMLDoc = k.isXML),
            (E.contains = k.contains),
            (E.escapeSelector = k.escape);
          var A = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && E(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            O = E.expr.match.needsContext;
          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var M =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function P(e, t, n) {
            return v(t)
              ? E.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? E.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : E.find.matches(
                    e,
                    E.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (E.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  E.find(e, r[t], n);
                return i > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(P(this, e || [], !0));
              },
              is: function (e) {
                return !!P(
                  this,
                  "string" == typeof e && O.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var j,
            N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || j), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : N.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  M.test(i[1]) && E.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (j = E(b));
          var $ = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && E(e);
              if (!O.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(E(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, i) {
                  var r = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = E.filter(i, r)),
                    this.length > 1 &&
                      (I[e] || E.uniqueSort(r), $.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var H = /[^\x20\t\r\n\f]+/g;
          function _(e) {
            return e;
          }
          function B(e) {
            throw e;
          }
          function z(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match(H) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        E.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function s(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < o)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, s(o, t, _, r), s(o, t, B, r))
                                      : (o++,
                                        c.call(
                                          i,
                                          s(o, t, _, r),
                                          s(o, t, B, r),
                                          s(o, t, _, t.notifyWith)
                                        ))
                                    : (n !== _ && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(i, u.stackTrace),
                                      e + 1 >= o &&
                                        (n !== B && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (E.Deferred.getStackHook &&
                                (u.stackTrace = E.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return E.Deferred(function (i) {
                        t[0][3].add(s(0, i, v(r) ? r : _, i.notifyWith)),
                          t[1][3].add(s(0, i, v(e) ? e : _)),
                          t[2][3].add(s(0, i, v(n) ? n : B));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  E.each(t, function (e, i) {
                    var s = i[2],
                      a = i[5];
                    (r[i[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      s.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  o = E.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (z(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) z(r[n], s(n), o.reject);
                return o.promise();
              },
            });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              R.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = E.Deferred();
          function F() {
            b.removeEventListener("DOMContentLoaded", F),
              i.removeEventListener("load", F),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || W.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(E.ready)
              : (b.addEventListener("DOMContentLoaded", F),
                i.addEventListener("load", F));
          var G = function (e, t, n, i, r, o, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === T(n))
                for (a in ((r = !0), n)) G(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(E(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(V, "ms-").replace(X, U);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = E.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[Y(t)] = n;
                else for (i in t) r[Y(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in i
                      ? [t]
                      : t.match(H) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || E.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var J = new K(),
            Z = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Z.get(o)),
                    1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = Y(i.slice(5))), ne(o, i, r[i]));
                    J.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : G(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = J.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = J.access(e, t, E.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = E._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = E.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = J.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            se = b.documentElement,
            ae = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function ue(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(E.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                E.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), E.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var de = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = de[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (de[i] = r),
              r)
            );
          }
          function fe(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = J.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[o] = pe(i)))
                  : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var he,
            me,
            ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (me = b.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            he.appendChild(me),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && D(e, t)) ? E.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            g.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((o = e[f]) || 0 === o)
                if ("object" === T(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (Te.test(o)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  E.merge(p, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; (o = p[f++]); )
              if (i && E.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = ae(o)),
                (s = xe(d.appendChild(o), "script")),
                c && we(s),
                n)
              )
                for (u = 0; (o = s[u++]); ) ye.test(o.type || "") && n.push(o);
            return d;
          }
          var Ee = /^([^.]*)(?:\.(.+)|)/;
          function Se() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Le(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Le(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = ke;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                (r = function (e) {
                  return E().off(e), s.apply(this, arguments);
                }),
                (r.guid = s.guid || (s.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, r, i, n);
              })
            );
          }
          function Oe(e, t, n) {
            n
              ? (J.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        J.set(this, t, o),
                        (i = n(this, t)),
                        this[t](),
                        o !== (r = J.get(this, t)) || i
                          ? J.set(this, t, !1)
                          : (r = {}),
                        o !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      o.length &&
                        (J.set(this, t, {
                          value: E.event.trigger(
                            E.extend(o[0], E.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && E.event.add(e, t, Se);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = J.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && E.find.matchesSelector(se, r),
                    n.guid || (n.guid = E.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (s = g.handle) ||
                      (s = g.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(H) || [""]).length;
                  c--;

                )
                  (f = m = (a = Ee.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = E.event.special[f] || {}),
                      (f = (r ? d.delegateType : d.bindType) || f),
                      (d = E.event.special[f] || {}),
                      (u = E.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && E.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                          (e.addEventListener && e.addEventListener(f, s))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (E.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = J.hasData(e) && J.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--; )
                  if (
                    ((f = m = (a = Ee.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = E.event.special[f] || {},
                        p =
                          l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = p.length;
                      o--;

                    )
                      (u = p[o]),
                        (!r && m !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(o, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    s &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        E.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) E.event.remove(e, f + t[c], n, i, !0);
                E.isEmptyObject(l) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                l = E.event.fix(e),
                c =
                  (J.get(this, "events") || Object.create(null))[l.type] || [],
                u = E.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = E.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (E.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? E(r, this).index(c) > -1
                          : E.find(r, this, null, [c]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Oe(t, "click", Se),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Oe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      J.get(t, "click")) ||
                    D(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Se
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Se),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Se),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Se),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return Oe(this, e, Ae), !1;
                },
                trigger: function () {
                  return Oe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === i || E.contains(i, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, i) {
                return Le(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Le(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    E(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function je(e, t) {
            return (
              (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Ne(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ie(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (a = J.get(e).events))
                for (r in (J.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    E.event.add(t, r, a[r][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (s = E.extend({}, o)), Z.set(t, s));
            }
          }
          function qe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function He(e, t, n, i) {
            t = l(t);
            var r,
              o,
              s,
              a,
              c,
              u,
              d = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              m = v(h);
            if (
              m ||
              (p > 1 && "string" == typeof h && !g.checkClone && Me.test(h))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                m && (t[0] = h.call(this, r, o.html())), He(o, t, n, i);
              });
            if (
              p &&
              ((o = (r = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (a = (s = E.map(xe(r, "script"), Ne)).length; d < p; d++)
                (c = r),
                  d !== f &&
                    ((c = E.clone(c, !0, !0)),
                    a && E.merge(s, xe(c, "script"))),
                  n.call(e[d], c, d);
              if (a)
                for (
                  u = s[s.length - 1].ownerDocument, E.map(s, $e), d = 0;
                  d < a;
                  d++
                )
                  (c = s[d]),
                    ye.test(c.type || "") &&
                      !J.access(c, "globalEval") &&
                      E.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !c.noModule &&
                          E._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : w(c.textContent.replace(Pe, ""), c, u));
            }
            return e;
          }
          function _e(e, t, n) {
            for (
              var i, r = t ? E.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || E.cleanData(xe(i)),
                i.parentNode &&
                  (n && ae(i) && we(xe(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (s = xe(a), i = 0, r = (o = xe(e)).length; i < r; i++)
                  qe(o[i], s[i]);
              if (t)
                if (n)
                  for (
                    o = o || xe(e), s = s || xe(a), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    Ie(o[i], s[i]);
                else Ie(e, a);
              return (
                (s = xe(a, "script")).length > 0 &&
                  we(s, !l && xe(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = E.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Q(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? E.event.remove(n, i)
                          : E.removeEvent(n, i, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return _e(this, e, !0);
              },
              remove: function (e) {
                return _e(this, e);
              },
              text: function (e) {
                return G(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return He(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    je(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return He(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return He(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return He(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return G(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return He(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 &&
                      (E.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, i = [], r = E(e), o = r.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      E(r[s])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            ze = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Re = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            We = new RegExp(oe.join("|"), "i");
          function Fe(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.style;
            return (
              (n = n || ze(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (s = E.style(e, t)),
                !g.pixelBoxStyles() &&
                  Be.test(s) &&
                  We.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (o = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (o = 12 === t(u.offsetWidth / 3)),
                  se.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              s,
              a,
              l,
              c = b.createElement("div"),
              u = b.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
              E.extend(g, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ve = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ue = {};
          function Ye(e) {
            var t = E.cssProps[e] || Ue[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ue[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                        n--;

                      )
                        if ((e = Ve[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Je = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += E.css(e, n + oe[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= E.css(e, "padding" + oe[s], !0, r)),
                    "margin" !== n &&
                      (l -= E.css(e, "border" + oe[s] + "Width", !0, r)))
                  : ((l += E.css(e, "padding" + oe[s], !0, r)),
                    "padding" !== n
                      ? (l += E.css(e, "border" + oe[s] + "Width", !0, r))
                      : (a += E.css(e, "border" + oe[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = ze(e),
              r =
                (!g.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, i),
              o = r,
              s = Fe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!g.boxSizingReliable() && r) ||
                (!g.reliableTrDimensions() && D(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === E.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === E.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                tt(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Fe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = Y(t),
                  l = Ke.test(t),
                  c = e.style;
                if (
                  (l || (t = Ye(a)),
                  (s = E.cssHooks[t] || E.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (o = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ue(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (E.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = Y(t);
              return (
                Ke.test(t) || (t = Ye(a)),
                (s = E.cssHooks[t] || E.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = Fe(e, t, i)),
                "normal" === r && t in Ze && (r = Ze[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Qe.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Re(e, Je, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = ze(e),
                    s = !g.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || i) && "border-box" === E.css(e, "boxSizing", !1, o),
                    l = i ? tt(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = Ge(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Re(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = et);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return G(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = ze(e), r = t.length; s < r; s++)
                        o[t[s]] = E.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = it.prototype.init),
            (E.fx.step = {});
          var rt,
            ot,
            st = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            ot &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, E.fx.interval),
              E.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function dt(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              o = 0,
              s = pt.prefilters.length,
              a = E.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = E.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = Y(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = E.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = pt.prefilters[o].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              E.map(u, dt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              E.fx.timer(
                E.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (E.Animation = E.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && ce(e),
                  g = J.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = E._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), st.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || E.style(e, i);
                  }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = J.get(e, "display")),
                    "none" === (u = E.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (fe([e], !0),
                          (c = e.style.display || c),
                          (u = E.css(e, "display")),
                          fe([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === E.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = J.access(e, "fxshow", { display: c })),
                      o && (g.hidden = !m),
                      m && fe([e], !0),
                      p.done(function () {
                        for (i in (m || fe([e]), J.remove(e, "fxshow"), f))
                          E.style(e, i, f[i]);
                      })),
                      (l = dt(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                E.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in E.fx.speeds
                      ? (i.duration = E.fx.speeds[i.duration])
                      : (i.duration = E.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && E.dequeue(this, i.queue);
                }),
                i
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = E.isEmptyObject(e),
                  o = E.speed(t, n, i),
                  s = function () {
                    var t = pt(this, E.extend({}, e), o);
                    (r || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = E.timers,
                      s = J.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = E.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            E.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (rt = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              ot || ((ot = !0), lt());
            }),
            (E.fx.stop = function () {
              ot = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ft,
            ht = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return G(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === o && E.isXMLDoc(e)) ||
                        (r =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = E.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && D(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(H);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || E.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = ht[s]),
                    (ht[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (ht[s] = o)),
                  r
                );
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(H) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(H)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return G(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (r = E.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    E(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    E(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, s;
                      if (i)
                        for (r = 0, o = E(this), s = bt(e); (t = s[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && J.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, E(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = E.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    E.valHooks[r.type] ||
                    E.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : vt(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = E.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        E.inArray(E.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in i);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                h = [n || b],
                m = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = p = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(m + E.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(m, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (d = E.event.special[m] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || m,
                      wt.test(l + m) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    h.push(s), (a = s);
                  a === (n.ownerDocument || b) &&
                    h.push(a.defaultView || a.parentWindow || i);
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                  (p = s),
                    (e.type = o > 1 ? l : d.bindType || m),
                    (u =
                      (J.get(s, "events") || Object.create(null))[e.type] &&
                      J.get(s, "handle")) && u.apply(s, t),
                    (u = c && s[c]) &&
                      u.apply &&
                      Q(s) &&
                      ((e.result = u.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      v(n[m]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (E.event.triggered = m),
                      e.isPropagationStopped() && p.addEventListener(m, Tt),
                      n[m](),
                      e.isPropagationStopped() && p.removeEventListener(m, Tt),
                      (E.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(i, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      J.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t) - 1;
                    r
                      ? J.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), J.remove(i, t));
                  },
                };
              });
          var Ct = i.location,
            Et = { guid: Date.now() },
            St = /\?/;
          E.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            At = /\r?\n/g,
            Lt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              E.each(t, function (t, r) {
                n || kt.test(e)
                  ? i(e, r)
                  : Dt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (r in t) Dt(e + "[" + r + "]", t[r], n, i);
          }
          (E.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, r);
            return i.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      Ot.test(this.nodeName) &&
                      !Lt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var Mt = /%20/g,
            Pt = /#.*$/,
            jt = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            qt = {},
            Ht = {},
            _t = "*/".concat("*"),
            Bt = b.createElement("a");
          function zt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(H) || [];
              if (v(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Rt(e, t, n, i) {
            var r = {},
              o = e === Ht;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                E.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Wt(e, t) {
            var n,
              i,
              r = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && E.extend(!0, e, i), e;
          }
          (Bt.href = Ct.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": _t,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, E.ajaxSettings), t) : Wt(E.ajaxSettings, e);
              },
              ajaxPrefilter: zt(qt),
              ajaxTransport: zt(Ht),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f = E.ajaxSetup({}, t),
                  h = f.context || f,
                  m = f.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  g = E.Deferred(),
                  v = E.Callbacks("once memory"),
                  y = f.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = Nt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (g.promise(C),
                  (f.url = ((e || f.url || Ct.href) + "").replace(
                    It,
                    Ct.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        Bt.protocol + "//" + Bt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = E.param(f.data, f.traditional)),
                  Rt(qt, f, t, C),
                  c)
                )
                  return C;
                for (d in ((u = E.event && f.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !$t.test(f.type)),
                (r = f.url.replace(Pt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Mt, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (St.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(jt, "$1")),
                      (p = (St.test(r) ? "&" : "?") + "_=" + Et.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (E.lastModified[r] &&
                    C.setRequestHeader("If-Modified-Since", E.lastModified[r]),
                  E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", f.contentType),
                C.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  C.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c))
                  return C.abort();
                if (
                  ((T = "abort"),
                  v.add(f.complete),
                  C.done(f.success),
                  C.fail(f.error),
                  (n = Rt(Ht, f, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), u && m.trigger("ajaxSend", [C, f]), c)
                  )
                    return C;
                  f.async &&
                    f.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      C.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), n.send(x, S);
                  } catch (e) {
                    if (c) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, s, l) {
                  var d,
                    p,
                    b,
                    x,
                    w,
                    T = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (x = (function (e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(f, C, s)),
                    !d &&
                      E.inArray("script", f.dataTypes) > -1 &&
                      E.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (x = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = u.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[r])
                                    : !0 !== c[r] &&
                                      ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, x, C, d)),
                    d
                      ? (f.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[r] = w),
                          (w = C.getResponseHeader("etag")) && (E.etag[r] = w)),
                        204 === e || "HEAD" === f.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = x.state), (p = x.data), (d = !(b = x.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    d
                      ? g.resolveWith(h, [p, T, C])
                      : g.rejectWith(h, [C, T, b]),
                    C.statusCode(y),
                    (y = void 0),
                    u &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        C,
                        f,
                        d ? p : b,
                      ]),
                    v.fireWith(h, [C, T]),
                    u &&
                      (m.trigger("ajaxComplete", [C, f]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Gt = E.ajaxSettings.xhr();
          (g.cors = !!Gt && "withCredentials" in Gt),
            (g.ajax = Gt = !!Gt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Gt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Ft[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Vt,
            Xt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || E.expando + "_" + Et.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Ut.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ut.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Ut, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return s || E.error(r + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? E(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Vt.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (o = !n && []),
                  (r = M.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Ce([e], t, o)),
                      o && o.length && E(o).remove(),
                      E.merge([], r.childNodes)));
              var i, r, o;
            }),
            (E.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  E.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          i ? E("<div>").append(E.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = E.css(e, "position"),
                  u = E(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (o = E.css(e, "top")),
                  (l = E.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = u.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, E.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === E.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - E.css(i, "marginTop", !0),
                    left: t.left - r.left - E.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (i) {
                  return G(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = Ge(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Fe(e, t)), Be.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  E.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return G(
                      this,
                      function (t, n, r) {
                        var o;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? E.css(t, n, a)
                          : E.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || E.guid++),
                r
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = D),
            (E.isFunction = v),
            (E.isWindow = y),
            (E.camelCase = Y),
            (E.type = T),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var Qt = i.jQuery,
            Kt = i.$;
          return (
            (E.noConflict = function (e) {
              return (
                i.$ === E && (i.$ = Kt),
                e && i.jQuery === E && (i.jQuery = Qt),
                E
              );
            }),
            void 0 === r && (i.jQuery = i.$ = E),
            E
          );
        });
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (() => {
    "use strict";
    var e = n(755);
    function t(e) {
      this.type = e;
    }
    (t.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(n[0].trim())),
          (i.breakpoint = n[1] ? n[1].trim() : "767"),
          (i.place = n[2] ? n[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          i = String.prototype.split.call(n, ","),
          r = window.matchMedia(i[0]),
          o = i[1],
          s = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === o;
          });
        r.addListener(function () {
          e.mediaHandler(r, s);
        }),
          this.mediaHandler(r, s);
      }
    }),
      (t.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (t.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (t.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (t.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (t.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new t("max").init();
    let i = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      };
    function s(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function a(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function l(e) {
      return e instanceof a(e).Element || e instanceof Element;
    }
    function c(e) {
      return e instanceof a(e).HTMLElement || e instanceof HTMLElement;
    }
    function u(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof a(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    var d = Math.max,
      p = Math.min,
      f = Math.round;
    function h() {
      var e = navigator.userAgentData;
      return null != e && e.brands
        ? e.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function m() {
      return !/^((?!chrome|android).)*safari/i.test(h());
    }
    function g(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !1);
      var i = e.getBoundingClientRect(),
        r = 1,
        o = 1;
      t &&
        c(e) &&
        ((r = (e.offsetWidth > 0 && f(i.width) / e.offsetWidth) || 1),
        (o = (e.offsetHeight > 0 && f(i.height) / e.offsetHeight) || 1));
      var s = (l(e) ? a(e) : window).visualViewport,
        u = !m() && n,
        d = (i.left + (u && s ? s.offsetLeft : 0)) / r,
        p = (i.top + (u && s ? s.offsetTop : 0)) / o,
        h = i.width / r,
        g = i.height / o;
      return {
        width: h,
        height: g,
        top: p,
        right: d + h,
        bottom: p + g,
        left: d,
        x: d,
        y: p,
      };
    }
    function v(e) {
      var t = a(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function y(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function b(e) {
      return ((l(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function x(e) {
      return g(b(e)).left + v(e).scrollLeft;
    }
    function w(e) {
      return a(e).getComputedStyle(e);
    }
    function T(e) {
      var t = w(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + r + i);
    }
    function C(e, t, n) {
      void 0 === n && (n = !1);
      var i,
        r,
        o = c(t),
        s =
          c(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              n = f(t.width) / e.offsetWidth || 1,
              i = f(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== i;
          })(t),
        l = b(t),
        u = g(e, s, n),
        d = { scrollLeft: 0, scrollTop: 0 },
        p = { x: 0, y: 0 };
      return (
        (o || (!o && !n)) &&
          (("body" !== y(t) || T(l)) &&
            (d =
              (i = t) !== a(i) && c(i)
                ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                : v(i)),
          c(t)
            ? (((p = g(t, !0)).x += t.clientLeft), (p.y += t.clientTop))
            : l && (p.x = x(l))),
        {
          x: u.left + d.scrollLeft - p.x,
          y: u.top + d.scrollTop - p.y,
          width: u.width,
          height: u.height,
        }
      );
    }
    function E(e) {
      var t = g(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
      );
    }
    function S(e) {
      return "html" === y(e)
        ? e
        : e.assignedSlot || e.parentNode || (u(e) ? e.host : null) || b(e);
    }
    function k(e) {
      return ["html", "body", "#document"].indexOf(y(e)) >= 0
        ? e.ownerDocument.body
        : c(e) && T(e)
        ? e
        : k(S(e));
    }
    function A(e, t) {
      var n;
      void 0 === t && (t = []);
      var i = k(e),
        r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
        o = a(i),
        s = r ? [o].concat(o.visualViewport || [], T(i) ? i : []) : i,
        l = t.concat(s);
      return r ? l : l.concat(A(S(s)));
    }
    function L(e) {
      return ["table", "td", "th"].indexOf(y(e)) >= 0;
    }
    function O(e) {
      return c(e) && "fixed" !== w(e).position ? e.offsetParent : null;
    }
    function D(e) {
      for (var t = a(e), n = O(e); n && L(n) && "static" === w(n).position; )
        n = O(n);
      return n &&
        ("html" === y(n) || ("body" === y(n) && "static" === w(n).position))
        ? t
        : n ||
            (function (e) {
              var t = /firefox/i.test(h());
              if (/Trident/i.test(h()) && c(e) && "fixed" === w(e).position)
                return null;
              var n = S(e);
              for (
                u(n) && (n = n.host);
                c(n) && ["html", "body"].indexOf(y(n)) < 0;

              ) {
                var i = w(n);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return n;
                n = n.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var M = "top",
      P = "bottom",
      j = "right",
      N = "left",
      $ = "auto",
      I = [M, P, j, N],
      q = "start",
      H = "end",
      _ = "viewport",
      B = "popper",
      z = I.reduce(function (e, t) {
        return e.concat([t + "-" + q, t + "-" + H]);
      }, []),
      R = [].concat(I, [$]).reduce(function (e, t) {
        return e.concat([t, t + "-" + q, t + "-" + H]);
      }, []),
      W = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function F(e) {
      var t = new Map(),
        n = new Set(),
        i = [];
      function r(e) {
        n.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!n.has(e)) {
                var i = t.get(e);
                i && r(i);
              }
            }),
          i.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          n.has(e.name) || r(e);
        }),
        i
      );
    }
    var G = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function V() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function X(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.defaultModifiers,
        i = void 0 === n ? [] : n,
        r = t.defaultOptions,
        o = void 0 === r ? G : r;
      return function (e, t, n) {
        void 0 === n && (n = o);
        var r,
          s,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, G, o),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          c = [],
          u = !1,
          d = {
            state: a,
            setOptions: function (n) {
              var r = "function" == typeof n ? n(a.options) : n;
              p(),
                (a.options = Object.assign({}, o, a.options, r)),
                (a.scrollParents = {
                  reference: l(e)
                    ? A(e)
                    : e.contextElement
                    ? A(e.contextElement)
                    : [],
                  popper: A(t),
                });
              var s = (function (e) {
                var t = F(e);
                return W.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(i, a.options.modifiers))
              );
              return (
                (a.orderedModifiers = s.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options,
                    i = void 0 === n ? {} : n,
                    r = e.effect;
                  if ("function" == typeof r) {
                    var o = r({ state: a, name: t, instance: d, options: i }),
                      s = function () {};
                    c.push(o || s);
                  }
                }),
                d.update()
              );
            },
            forceUpdate: function () {
              if (!u) {
                var e = a.elements,
                  t = e.reference,
                  n = e.popper;
                if (V(t, n)) {
                  (a.rects = {
                    reference: C(t, D(n), "fixed" === a.options.strategy),
                    popper: E(n),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (e) {
                      return (a.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var r = a.orderedModifiers[i],
                        o = r.fn,
                        s = r.options,
                        l = void 0 === s ? {} : s,
                        c = r.name;
                      "function" == typeof o &&
                        (a =
                          o({ state: a, options: l, name: c, instance: d }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((r = function () {
                return new Promise(function (e) {
                  d.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  s ||
                    (s = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (s = void 0), e(r());
                      });
                    })),
                  s
                );
              }),
            destroy: function () {
              p(), (u = !0);
            },
          };
        if (!V(e, t)) return d;
        function p() {
          c.forEach(function (e) {
            return e();
          }),
            (c = []);
        }
        return (
          d.setOptions(n).then(function (e) {
            !u && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
          d
        );
      };
    }
    var U = { passive: !0 };
    const Y = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          n = e.instance,
          i = e.options,
          r = i.scroll,
          o = void 0 === r || r,
          s = i.resize,
          l = void 0 === s || s,
          c = a(t.elements.popper),
          u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          o &&
            u.forEach(function (e) {
              e.addEventListener("scroll", n.update, U);
            }),
          l && c.addEventListener("resize", n.update, U),
          function () {
            o &&
              u.forEach(function (e) {
                e.removeEventListener("scroll", n.update, U);
              }),
              l && c.removeEventListener("resize", n.update, U);
          }
        );
      },
      data: {},
    };
    function Q(e) {
      return e.split("-")[0];
    }
    function K(e) {
      return e.split("-")[1];
    }
    function J(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function Z(e) {
      var t,
        n = e.reference,
        i = e.element,
        r = e.placement,
        o = r ? Q(r) : null,
        s = r ? K(r) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;
      switch (o) {
        case M:
          t = { x: a, y: n.y - i.height };
          break;
        case P:
          t = { x: a, y: n.y + n.height };
          break;
        case j:
          t = { x: n.x + n.width, y: l };
          break;
        case N:
          t = { x: n.x - i.width, y: l };
          break;
        default:
          t = { x: n.x, y: n.y };
      }
      var c = o ? J(o) : null;
      if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (s) {
          case q:
            t[c] = t[c] - (n[u] / 2 - i[u] / 2);
            break;
          case H:
            t[c] = t[c] + (n[u] / 2 - i[u] / 2);
        }
      }
      return t;
    }
    var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function te(e) {
      var t,
        n = e.popper,
        i = e.popperRect,
        r = e.placement,
        o = e.variation,
        s = e.offsets,
        l = e.position,
        c = e.gpuAcceleration,
        u = e.adaptive,
        d = e.roundOffsets,
        p = e.isFixed,
        h = s.x,
        m = void 0 === h ? 0 : h,
        g = s.y,
        v = void 0 === g ? 0 : g,
        y = "function" == typeof d ? d({ x: m, y: v }) : { x: m, y: v };
      (m = y.x), (v = y.y);
      var x = s.hasOwnProperty("x"),
        T = s.hasOwnProperty("y"),
        C = N,
        E = M,
        S = window;
      if (u) {
        var k = D(n),
          A = "clientHeight",
          L = "clientWidth";
        if (
          (k === a(n) &&
            "static" !== w((k = b(n))).position &&
            "absolute" === l &&
            ((A = "scrollHeight"), (L = "scrollWidth")),
          r === M || ((r === N || r === j) && o === H))
        )
          (E = P),
            (v -=
              (p && k === S && S.visualViewport
                ? S.visualViewport.height
                : k[A]) - i.height),
            (v *= c ? 1 : -1);
        if (r === N || ((r === M || r === P) && o === H))
          (C = j),
            (m -=
              (p && k === S && S.visualViewport
                ? S.visualViewport.width
                : k[L]) - i.width),
            (m *= c ? 1 : -1);
      }
      var O,
        $ = Object.assign({ position: l }, u && ee),
        I =
          !0 === d
            ? (function (e) {
                var t = e.x,
                  n = e.y,
                  i = window.devicePixelRatio || 1;
                return { x: f(t * i) / i || 0, y: f(n * i) / i || 0 };
              })({ x: m, y: v })
            : { x: m, y: v };
      return (
        (m = I.x),
        (v = I.y),
        c
          ? Object.assign(
              {},
              $,
              (((O = {})[E] = T ? "0" : ""),
              (O[C] = x ? "0" : ""),
              (O.transform =
                (S.devicePixelRatio || 1) <= 1
                  ? "translate(" + m + "px, " + v + "px)"
                  : "translate3d(" + m + "px, " + v + "px, 0)"),
              O)
            )
          : Object.assign(
              {},
              $,
              (((t = {})[E] = T ? v + "px" : ""),
              (t[C] = x ? m + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    const ne = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            i = t.attributes[e] || {},
            r = t.elements[e];
          c(r) &&
            y(r) &&
            (Object.assign(r.style, n),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                r = t.attributes[e] || {},
                o = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              c(i) &&
                y(i) &&
                (Object.assign(i.style, o),
                Object.keys(r).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const ie = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name,
          r = n.offset,
          o = void 0 === r ? [0, 0] : r,
          s = R.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var i = Q(e),
                  r = [N, M].indexOf(i) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  s = o[0],
                  a = o[1];
                return (
                  (s = s || 0),
                  (a = (a || 0) * r),
                  [N, j].indexOf(i) >= 0 ? { x: a, y: s } : { x: s, y: a }
                );
              })(n, t.rects, o)),
              e
            );
          }, {}),
          a = s[t.placement],
          l = a.x,
          c = a.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[i] = s);
      },
    };
    var re = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function oe(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return re[e];
      });
    }
    var se = { start: "end", end: "start" };
    function ae(e) {
      return e.replace(/start|end/g, function (e) {
        return se[e];
      });
    }
    function le(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && u(n)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function ce(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function ue(e, t, n) {
      return t === _
        ? ce(
            (function (e, t) {
              var n = a(e),
                i = b(e),
                r = n.visualViewport,
                o = i.clientWidth,
                s = i.clientHeight,
                l = 0,
                c = 0;
              if (r) {
                (o = r.width), (s = r.height);
                var u = m();
                (u || (!u && "fixed" === t)) &&
                  ((l = r.offsetLeft), (c = r.offsetTop));
              }
              return { width: o, height: s, x: l + x(e), y: c };
            })(e, n)
          )
        : l(t)
        ? (function (e, t) {
            var n = g(e, !1, "fixed" === t);
            return (
              (n.top = n.top + e.clientTop),
              (n.left = n.left + e.clientLeft),
              (n.bottom = n.top + e.clientHeight),
              (n.right = n.left + e.clientWidth),
              (n.width = e.clientWidth),
              (n.height = e.clientHeight),
              (n.x = n.left),
              (n.y = n.top),
              n
            );
          })(t, n)
        : ce(
            (function (e) {
              var t,
                n = b(e),
                i = v(e),
                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                o = d(
                  n.scrollWidth,
                  n.clientWidth,
                  r ? r.scrollWidth : 0,
                  r ? r.clientWidth : 0
                ),
                s = d(
                  n.scrollHeight,
                  n.clientHeight,
                  r ? r.scrollHeight : 0,
                  r ? r.clientHeight : 0
                ),
                a = -i.scrollLeft + x(e),
                l = -i.scrollTop;
              return (
                "rtl" === w(r || n).direction &&
                  (a += d(n.clientWidth, r ? r.clientWidth : 0) - o),
                { width: o, height: s, x: a, y: l }
              );
            })(b(e))
          );
    }
    function de(e, t, n, i) {
      var r =
          "clippingParents" === t
            ? (function (e) {
                var t = A(S(e)),
                  n =
                    ["absolute", "fixed"].indexOf(w(e).position) >= 0 && c(e)
                      ? D(e)
                      : e;
                return l(n)
                  ? t.filter(function (e) {
                      return l(e) && le(e, n) && "body" !== y(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        o = [].concat(r, [n]),
        s = o[0],
        a = o.reduce(function (t, n) {
          var r = ue(e, n, i);
          return (
            (t.top = d(r.top, t.top)),
            (t.right = p(r.right, t.right)),
            (t.bottom = p(r.bottom, t.bottom)),
            (t.left = d(r.left, t.left)),
            t
          );
        }, ue(e, s, i));
      return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
      );
    }
    function pe(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function fe(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    function he(e, t) {
      void 0 === t && (t = {});
      var n = t,
        i = n.placement,
        r = void 0 === i ? e.placement : i,
        o = n.strategy,
        s = void 0 === o ? e.strategy : o,
        a = n.boundary,
        c = void 0 === a ? "clippingParents" : a,
        u = n.rootBoundary,
        d = void 0 === u ? _ : u,
        p = n.elementContext,
        f = void 0 === p ? B : p,
        h = n.altBoundary,
        m = void 0 !== h && h,
        v = n.padding,
        y = void 0 === v ? 0 : v,
        x = pe("number" != typeof y ? y : fe(y, I)),
        w = f === B ? "reference" : B,
        T = e.rects.popper,
        C = e.elements[m ? w : f],
        E = de(l(C) ? C : C.contextElement || b(e.elements.popper), c, d, s),
        S = g(e.elements.reference),
        k = Z({ reference: S, element: T, strategy: "absolute", placement: r }),
        A = ce(Object.assign({}, T, k)),
        L = f === B ? A : S,
        O = {
          top: E.top - L.top + x.top,
          bottom: L.bottom - E.bottom + x.bottom,
          left: E.left - L.left + x.left,
          right: L.right - E.right + x.right,
        },
        D = e.modifiersData.offset;
      if (f === B && D) {
        var N = D[r];
        Object.keys(O).forEach(function (e) {
          var t = [j, P].indexOf(e) >= 0 ? 1 : -1,
            n = [M, P].indexOf(e) >= 0 ? "y" : "x";
          O[e] += N[n] * t;
        });
      }
      return O;
    }
    function me(e, t, n) {
      return d(e, p(t, n));
    }
    const ge = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name,
          r = n.mainAxis,
          o = void 0 === r || r,
          s = n.altAxis,
          a = void 0 !== s && s,
          l = n.boundary,
          c = n.rootBoundary,
          u = n.altBoundary,
          f = n.padding,
          h = n.tether,
          m = void 0 === h || h,
          g = n.tetherOffset,
          v = void 0 === g ? 0 : g,
          y = he(t, {
            boundary: l,
            rootBoundary: c,
            padding: f,
            altBoundary: u,
          }),
          b = Q(t.placement),
          x = K(t.placement),
          w = !x,
          T = J(b),
          C = "x" === T ? "y" : "x",
          S = t.modifiersData.popperOffsets,
          k = t.rects.reference,
          A = t.rects.popper,
          L =
            "function" == typeof v
              ? v(Object.assign({}, t.rects, { placement: t.placement }))
              : v,
          O =
            "number" == typeof L
              ? { mainAxis: L, altAxis: L }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
          $ = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          I = { x: 0, y: 0 };
        if (S) {
          if (o) {
            var H,
              _ = "y" === T ? M : N,
              B = "y" === T ? P : j,
              z = "y" === T ? "height" : "width",
              R = S[T],
              W = R + y[_],
              F = R - y[B],
              G = m ? -A[z] / 2 : 0,
              V = x === q ? k[z] : A[z],
              X = x === q ? -A[z] : -k[z],
              U = t.elements.arrow,
              Y = m && U ? E(U) : { width: 0, height: 0 },
              Z = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              ee = Z[_],
              te = Z[B],
              ne = me(0, k[z], Y[z]),
              ie = w
                ? k[z] / 2 - G - ne - ee - O.mainAxis
                : V - ne - ee - O.mainAxis,
              re = w
                ? -k[z] / 2 + G + ne + te + O.mainAxis
                : X + ne + te + O.mainAxis,
              oe = t.elements.arrow && D(t.elements.arrow),
              se = oe
                ? "y" === T
                  ? oe.clientTop || 0
                  : oe.clientLeft || 0
                : 0,
              ae = null != (H = null == $ ? void 0 : $[T]) ? H : 0,
              le = R + re - ae,
              ce = me(m ? p(W, R + ie - ae - se) : W, R, m ? d(F, le) : F);
            (S[T] = ce), (I[T] = ce - R);
          }
          if (a) {
            var ue,
              de = "x" === T ? M : N,
              pe = "x" === T ? P : j,
              fe = S[C],
              ge = "y" === C ? "height" : "width",
              ve = fe + y[de],
              ye = fe - y[pe],
              be = -1 !== [M, N].indexOf(b),
              xe = null != (ue = null == $ ? void 0 : $[C]) ? ue : 0,
              we = be ? ve : fe - k[ge] - A[ge] - xe + O.altAxis,
              Te = be ? fe + k[ge] + A[ge] - xe - O.altAxis : ye,
              Ce =
                m && be
                  ? (function (e, t, n) {
                      var i = me(e, t, n);
                      return i > n ? n : i;
                    })(we, fe, Te)
                  : me(m ? we : ve, fe, m ? Te : ye);
            (S[C] = Ce), (I[C] = Ce - fe);
          }
          t.modifiersData[i] = I;
        }
      },
      requiresIfExists: ["offset"],
    };
    const ve = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          i = e.name,
          r = e.options,
          o = n.elements.arrow,
          s = n.modifiersData.popperOffsets,
          a = Q(n.placement),
          l = J(a),
          c = [N, j].indexOf(a) >= 0 ? "height" : "width";
        if (o && s) {
          var u = (function (e, t) {
              return pe(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : fe(e, I)
              );
            })(r.padding, n),
            d = E(o),
            p = "y" === l ? M : N,
            f = "y" === l ? P : j,
            h =
              n.rects.reference[c] +
              n.rects.reference[l] -
              s[l] -
              n.rects.popper[c],
            m = s[l] - n.rects.reference[l],
            g = D(o),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            y = h / 2 - m / 2,
            b = u[p],
            x = v - d[c] - u[f],
            w = v / 2 - d[c] / 2 + y,
            T = me(b, w, x),
            C = l;
          n.modifiersData[i] = (((t = {})[C] = T), (t.centerOffset = T - w), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          n = e.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i &&
          ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
          le(t.elements.popper, i) &&
          (t.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function ye(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function be(e) {
      return [M, j, P, N].some(function (t) {
        return e[t] >= 0;
      });
    }
    var xe = X({
        defaultModifiers: [
          Y,
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = Z({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                i = n.gpuAcceleration,
                r = void 0 === i || i,
                o = n.adaptive,
                s = void 0 === o || o,
                a = n.roundOffsets,
                l = void 0 === a || a,
                c = {
                  placement: Q(t.placement),
                  variation: K(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: r,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  te(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: s,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    te(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          ne,
          ie,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                i = e.name;
              if (!t.modifiersData[i]._skip) {
                for (
                  var r = n.mainAxis,
                    o = void 0 === r || r,
                    s = n.altAxis,
                    a = void 0 === s || s,
                    l = n.fallbackPlacements,
                    c = n.padding,
                    u = n.boundary,
                    d = n.rootBoundary,
                    p = n.altBoundary,
                    f = n.flipVariations,
                    h = void 0 === f || f,
                    m = n.allowedAutoPlacements,
                    g = t.options.placement,
                    v = Q(g),
                    y =
                      l ||
                      (v === g || !h
                        ? [oe(g)]
                        : (function (e) {
                            if (Q(e) === $) return [];
                            var t = oe(e);
                            return [ae(e), t, ae(t)];
                          })(g)),
                    b = [g].concat(y).reduce(function (e, n) {
                      return e.concat(
                        Q(n) === $
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var n = t,
                                i = n.placement,
                                r = n.boundary,
                                o = n.rootBoundary,
                                s = n.padding,
                                a = n.flipVariations,
                                l = n.allowedAutoPlacements,
                                c = void 0 === l ? R : l,
                                u = K(i),
                                d = u
                                  ? a
                                    ? z
                                    : z.filter(function (e) {
                                        return K(e) === u;
                                      })
                                  : I,
                                p = d.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = d);
                              var f = p.reduce(function (t, n) {
                                return (
                                  (t[n] = he(e, {
                                    placement: n,
                                    boundary: r,
                                    rootBoundary: o,
                                    padding: s,
                                  })[Q(n)]),
                                  t
                                );
                              }, {});
                              return Object.keys(f).sort(function (e, t) {
                                return f[e] - f[t];
                              });
                            })(t, {
                              placement: n,
                              boundary: u,
                              rootBoundary: d,
                              padding: c,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : n
                      );
                    }, []),
                    x = t.rects.reference,
                    w = t.rects.popper,
                    T = new Map(),
                    C = !0,
                    E = b[0],
                    S = 0;
                  S < b.length;
                  S++
                ) {
                  var k = b[S],
                    A = Q(k),
                    L = K(k) === q,
                    O = [M, P].indexOf(A) >= 0,
                    D = O ? "width" : "height",
                    H = he(t, {
                      placement: k,
                      boundary: u,
                      rootBoundary: d,
                      altBoundary: p,
                      padding: c,
                    }),
                    _ = O ? (L ? j : N) : L ? P : M;
                  x[D] > w[D] && (_ = oe(_));
                  var B = oe(_),
                    W = [];
                  if (
                    (o && W.push(H[A] <= 0),
                    a && W.push(H[_] <= 0, H[B] <= 0),
                    W.every(function (e) {
                      return e;
                    }))
                  ) {
                    (E = k), (C = !1);
                    break;
                  }
                  T.set(k, W);
                }
                if (C)
                  for (
                    var F = function (e) {
                        var t = b.find(function (t) {
                          var n = T.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (E = t), "break";
                      },
                      G = h ? 3 : 1;
                    G > 0;
                    G--
                  ) {
                    if ("break" === F(G)) break;
                  }
                t.placement !== E &&
                  ((t.modifiersData[i]._skip = !0),
                  (t.placement = E),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          ge,
          ve,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                i = t.rects.reference,
                r = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                s = he(t, { elementContext: "reference" }),
                a = he(t, { altBoundary: !0 }),
                l = ye(s, i),
                c = ye(a, r, o),
                u = be(l),
                d = be(c);
              (t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": u,
                  "data-popper-escaped": d,
                }));
            },
          },
        ],
      }),
      we = "tippy-content",
      Te = "tippy-backdrop",
      Ce = "tippy-arrow",
      Ee = "tippy-svg-arrow",
      Se = { passive: !0, capture: !0 },
      ke = function () {
        return document.body;
      };
    function Ae(e, t, n) {
      if (Array.isArray(e)) {
        var i = e[t];
        return null == i ? (Array.isArray(n) ? n[t] : n) : i;
      }
      return e;
    }
    function Le(e, t) {
      var n = {}.toString.call(e);
      return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
    }
    function Oe(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function De(e, t) {
      return 0 === t
        ? e
        : function (i) {
            clearTimeout(n),
              (n = setTimeout(function () {
                e(i);
              }, t));
          };
      var n;
    }
    function Me(e) {
      return [].concat(e);
    }
    function Pe(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function je(e) {
      return e.split("-")[0];
    }
    function Ne(e) {
      return [].slice.call(e);
    }
    function $e(e) {
      return Object.keys(e).reduce(function (t, n) {
        return void 0 !== e[n] && (t[n] = e[n]), t;
      }, {});
    }
    function Ie() {
      return document.createElement("div");
    }
    function qe(e) {
      return ["Element", "Fragment"].some(function (t) {
        return Le(e, t);
      });
    }
    function He(e) {
      return Le(e, "MouseEvent");
    }
    function _e(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function Be(e) {
      return qe(e)
        ? [e]
        : (function (e) {
            return Le(e, "NodeList");
          })(e)
        ? Ne(e)
        : Array.isArray(e)
        ? e
        : Ne(document.querySelectorAll(e));
    }
    function ze(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function Re(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function We(e) {
      var t,
        n = Me(e)[0];
      return null != n && null != (t = n.ownerDocument) && t.body
        ? n.ownerDocument
        : document;
    }
    function Fe(e, t, n) {
      var i = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[i](t, n);
      });
    }
    function Ge(e, t) {
      for (var n = t; n; ) {
        var i;
        if (e.contains(n)) return !0;
        n =
          null == n.getRootNode || null == (i = n.getRootNode())
            ? void 0
            : i.host;
      }
      return !1;
    }
    var Ve = { isTouch: !1 },
      Xe = 0;
    function Ue() {
      Ve.isTouch ||
        ((Ve.isTouch = !0),
        window.performance && document.addEventListener("mousemove", Ye));
    }
    function Ye() {
      var e = performance.now();
      e - Xe < 20 &&
        ((Ve.isTouch = !1), document.removeEventListener("mousemove", Ye)),
        (Xe = e);
    }
    function Qe() {
      var e = document.activeElement;
      if (_e(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var Ke =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var Je = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      Ze = Object.assign(
        {
          appendTo: ke,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        Je,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      et = Object.keys(Ze);
    function tt(e) {
      var t = (e.plugins || []).reduce(function (t, n) {
        var i,
          r = n.name,
          o = n.defaultValue;
        r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = Ze[r]) ? i : o);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function nt(e, t) {
      var n = Object.assign(
        {},
        t,
        { content: Oe(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(tt(Object.assign({}, Ze, { plugins: t }))) : et
              ).reduce(function (t, n) {
                var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                if (!i) return t;
                if ("content" === n) t[n] = i;
                else
                  try {
                    t[n] = JSON.parse(i);
                  } catch (e) {
                    t[n] = i;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (n.aria = Object.assign({}, Ze.aria, n.aria)),
        (n.aria = {
          expanded:
            "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
          content:
            "auto" === n.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : n.aria.content,
        }),
        n
      );
    }
    function it(e, t) {
      e.innerHTML = t;
    }
    function rt(e) {
      var t = Ie();
      return (
        !0 === e
          ? (t.className = Ce)
          : ((t.className = Ee), qe(e) ? t.appendChild(e) : it(t, e)),
        t
      );
    }
    function ot(e, t) {
      qe(t.content)
        ? (it(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? it(e, t.content) : (e.textContent = t.content));
    }
    function st(e) {
      var t = e.firstElementChild,
        n = Ne(t.children);
      return {
        box: t,
        content: n.find(function (e) {
          return e.classList.contains(we);
        }),
        arrow: n.find(function (e) {
          return e.classList.contains(Ce) || e.classList.contains(Ee);
        }),
        backdrop: n.find(function (e) {
          return e.classList.contains(Te);
        }),
      };
    }
    function at(e) {
      var t = Ie(),
        n = Ie();
      (n.className = "tippy-box"),
        n.setAttribute("data-state", "hidden"),
        n.setAttribute("tabindex", "-1");
      var i = Ie();
      function r(n, i) {
        var r = st(t),
          o = r.box,
          s = r.content,
          a = r.arrow;
        i.theme
          ? o.setAttribute("data-theme", i.theme)
          : o.removeAttribute("data-theme"),
          "string" == typeof i.animation
            ? o.setAttribute("data-animation", i.animation)
            : o.removeAttribute("data-animation"),
          i.inertia
            ? o.setAttribute("data-inertia", "")
            : o.removeAttribute("data-inertia"),
          (o.style.maxWidth =
            "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
          i.role ? o.setAttribute("role", i.role) : o.removeAttribute("role"),
          (n.content === i.content && n.allowHTML === i.allowHTML) ||
            ot(s, e.props),
          i.arrow
            ? a
              ? n.arrow !== i.arrow &&
                (o.removeChild(a), o.appendChild(rt(i.arrow)))
              : o.appendChild(rt(i.arrow))
            : a && o.removeChild(a);
      }
      return (
        (i.className = we),
        i.setAttribute("data-state", "hidden"),
        ot(i, e.props),
        t.appendChild(n),
        n.appendChild(i),
        r(e.props, e.props),
        { popper: t, onUpdate: r }
      );
    }
    at.$$tippy = !0;
    var lt = 1,
      ct = [],
      ut = [];
    function dt(e, t) {
      var n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u = nt(e, Object.assign({}, Ze, tt($e(t)))),
        d = !1,
        p = !1,
        f = !1,
        h = !1,
        m = [],
        g = De(X, u.interactiveDebounce),
        v = lt++,
        y = (c = u.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        b = {
          id: v,
          reference: e,
          popper: Ie(),
          popperInstance: null,
          props: u,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: y,
          clearDelayTimeouts: function () {
            clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
          },
          setProps: function (t) {
            0;
            if (b.state.isDestroyed) return;
            j("onBeforeUpdate", [b, t]), G();
            var n = b.props,
              i = nt(e, Object.assign({}, n, $e(t), { ignoreAttributes: !0 }));
            (b.props = i),
              F(),
              n.interactiveDebounce !== i.interactiveDebounce &&
                (I(), (g = De(X, i.interactiveDebounce)));
            n.triggerTarget && !i.triggerTarget
              ? Me(n.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : i.triggerTarget && e.removeAttribute("aria-expanded");
            $(), P(), T && T(n, i);
            b.popperInstance &&
              (K(),
              Z().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            j("onAfterUpdate", [b, t]);
          },
          setContent: function (e) {
            b.setProps({ content: e });
          },
          show: function () {
            0;
            var e = b.state.isVisible,
              t = b.state.isDestroyed,
              n = !b.state.isEnabled,
              i = Ve.isTouch && !b.props.touch,
              r = Ae(b.props.duration, 0, Ze.duration);
            if (e || t || n || i) return;
            if (L().hasAttribute("disabled")) return;
            if ((j("onShow", [b], !1), !1 === b.props.onShow(b))) return;
            (b.state.isVisible = !0), A() && (w.style.visibility = "visible");
            P(), B(), b.state.isMounted || (w.style.transition = "none");
            if (A()) {
              var o = D(),
                s = o.box,
                l = o.content;
              ze([s, l], 0);
            }
            (a = function () {
              var e;
              if (b.state.isVisible && !h) {
                if (
                  ((h = !0),
                  w.offsetHeight,
                  (w.style.transition = b.props.moveTransition),
                  A() && b.props.animation)
                ) {
                  var t = D(),
                    n = t.box,
                    i = t.content;
                  ze([n, i], r), Re([n, i], "visible");
                }
                N(),
                  $(),
                  Pe(ut, b),
                  null == (e = b.popperInstance) || e.forceUpdate(),
                  j("onMount", [b]),
                  b.props.animation &&
                    A() &&
                    (function (e, t) {
                      R(e, t);
                    })(r, function () {
                      (b.state.isShown = !0), j("onShown", [b]);
                    });
              }
            }),
              (function () {
                var e,
                  t = b.props.appendTo,
                  n = L();
                e =
                  (b.props.interactive && t === ke) || "parent" === t
                    ? n.parentNode
                    : Oe(t, [n]);
                e.contains(w) || e.appendChild(w);
                (b.state.isMounted = !0), K(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !b.state.isVisible,
              t = b.state.isDestroyed,
              n = !b.state.isEnabled,
              i = Ae(b.props.duration, 1, Ze.duration);
            if (e || t || n) return;
            if ((j("onHide", [b], !1), !1 === b.props.onHide(b))) return;
            (b.state.isVisible = !1),
              (b.state.isShown = !1),
              (h = !1),
              (d = !1),
              A() && (w.style.visibility = "hidden");
            if ((I(), z(), P(!0), A())) {
              var r = D(),
                o = r.box,
                s = r.content;
              b.props.animation && (ze([o, s], i), Re([o, s], "hidden"));
            }
            N(),
              $(),
              b.props.animation
                ? A() &&
                  (function (e, t) {
                    R(e, function () {
                      !b.state.isVisible &&
                        w.parentNode &&
                        w.parentNode.contains(w) &&
                        t();
                    });
                  })(i, b.unmount)
                : b.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            O().addEventListener("mousemove", g), Pe(ct, g), g(e);
          },
          enable: function () {
            b.state.isEnabled = !0;
          },
          disable: function () {
            b.hide(), (b.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            b.state.isVisible && b.hide();
            if (!b.state.isMounted) return;
            J(),
              Z().forEach(function (e) {
                e._tippy.unmount();
              }),
              w.parentNode && w.parentNode.removeChild(w);
            (ut = ut.filter(function (e) {
              return e !== b;
            })),
              (b.state.isMounted = !1),
              j("onHidden", [b]);
          },
          destroy: function () {
            0;
            if (b.state.isDestroyed) return;
            b.clearDelayTimeouts(),
              b.unmount(),
              G(),
              delete e._tippy,
              (b.state.isDestroyed = !0),
              j("onDestroy", [b]);
          },
        };
      if (!u.render) return b;
      var x = u.render(b),
        w = x.popper,
        T = x.onUpdate;
      w.setAttribute("data-tippy-root", ""),
        (w.id = "tippy-" + b.id),
        (b.popper = w),
        (e._tippy = b),
        (w._tippy = b);
      var C = y.map(function (e) {
          return e.fn(b);
        }),
        E = e.hasAttribute("aria-expanded");
      return (
        F(),
        $(),
        P(),
        j("onCreate", [b]),
        u.showOnCreate && ee(),
        w.addEventListener("mouseenter", function () {
          b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
        }),
        w.addEventListener("mouseleave", function () {
          b.props.interactive &&
            b.props.trigger.indexOf("mouseenter") >= 0 &&
            O().addEventListener("mousemove", g);
        }),
        b
      );
      function S() {
        var e = b.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function k() {
        return "hold" === S()[0];
      }
      function A() {
        var e;
        return !(null == (e = b.props.render) || !e.$$tippy);
      }
      function L() {
        return l || e;
      }
      function O() {
        var e = L().parentNode;
        return e ? We(e) : document;
      }
      function D() {
        return st(w);
      }
      function M(e) {
        return (b.state.isMounted && !b.state.isVisible) ||
          Ve.isTouch ||
          (o && "focus" === o.type)
          ? 0
          : Ae(b.props.delay, e ? 0 : 1, Ze.delay);
      }
      function P(e) {
        void 0 === e && (e = !1),
          (w.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
          (w.style.zIndex = "" + b.props.zIndex);
      }
      function j(e, t, n) {
        var i;
        (void 0 === n && (n = !0),
        C.forEach(function (n) {
          n[e] && n[e].apply(n, t);
        }),
        n) && (i = b.props)[e].apply(i, t);
      }
      function N() {
        var t = b.props.aria;
        if (t.content) {
          var n = "aria-" + t.content,
            i = w.id;
          Me(b.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(n);
            if (b.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
            else {
              var r = t && t.replace(i, "").trim();
              r ? e.setAttribute(n, r) : e.removeAttribute(n);
            }
          });
        }
      }
      function $() {
        !E &&
          b.props.aria.expanded &&
          Me(b.props.triggerTarget || e).forEach(function (e) {
            b.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  b.state.isVisible && e === L() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function I() {
        O().removeEventListener("mousemove", g),
          (ct = ct.filter(function (e) {
            return e !== g;
          }));
      }
      function q(t) {
        if (!Ve.isTouch || (!f && "mousedown" !== t.type)) {
          var n = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!b.props.interactive || !Ge(w, n)) {
            if (
              Me(b.props.triggerTarget || e).some(function (e) {
                return Ge(e, n);
              })
            ) {
              if (Ve.isTouch) return;
              if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                return;
            } else j("onClickOutside", [b, t]);
            !0 === b.props.hideOnClick &&
              (b.clearDelayTimeouts(),
              b.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              b.state.isMounted || z());
          }
        }
      }
      function H() {
        f = !0;
      }
      function _() {
        f = !1;
      }
      function B() {
        var e = O();
        e.addEventListener("mousedown", q, !0),
          e.addEventListener("touchend", q, Se),
          e.addEventListener("touchstart", _, Se),
          e.addEventListener("touchmove", H, Se);
      }
      function z() {
        var e = O();
        e.removeEventListener("mousedown", q, !0),
          e.removeEventListener("touchend", q, Se),
          e.removeEventListener("touchstart", _, Se),
          e.removeEventListener("touchmove", H, Se);
      }
      function R(e, t) {
        var n = D().box;
        function i(e) {
          e.target === n && (Fe(n, "remove", i), t());
        }
        if (0 === e) return t();
        Fe(n, "remove", s), Fe(n, "add", i), (s = i);
      }
      function W(t, n, i) {
        void 0 === i && (i = !1),
          Me(b.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, n, i),
              m.push({ node: e, eventType: t, handler: n, options: i });
          });
      }
      function F() {
        k() &&
          (W("touchstart", V, { passive: !0 }),
          W("touchend", U, { passive: !0 })),
          (function (e) {
            return e.split(/\s+/).filter(Boolean);
          })(b.props.trigger).forEach(function (e) {
            if ("manual" !== e)
              switch ((W(e, V), e)) {
                case "mouseenter":
                  W("mouseleave", U);
                  break;
                case "focus":
                  W(Ke ? "focusout" : "blur", Y);
                  break;
                case "focusin":
                  W("focusout", Y);
              }
          });
      }
      function G() {
        m.forEach(function (e) {
          var t = e.node,
            n = e.eventType,
            i = e.handler,
            r = e.options;
          t.removeEventListener(n, i, r);
        }),
          (m = []);
      }
      function V(e) {
        var t,
          n = !1;
        if (b.state.isEnabled && !Q(e) && !p) {
          var i = "focus" === (null == (t = o) ? void 0 : t.type);
          (o = e),
            (l = e.currentTarget),
            $(),
            !b.state.isVisible &&
              He(e) &&
              ct.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (b.props.trigger.indexOf("mouseenter") < 0 || d) &&
            !1 !== b.props.hideOnClick &&
            b.state.isVisible
              ? (n = !0)
              : ee(e),
            "click" === e.type && (d = !n),
            n && !i && te(e);
        }
      }
      function X(e) {
        var t = e.target,
          n = L().contains(t) || w.contains(t);
        if ("mousemove" !== e.type || !n) {
          var i = Z()
            .concat(w)
            .map(function (e) {
              var t,
                n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return n
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: n,
                    props: u,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var n = t.clientX,
              i = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                r = e.popperState,
                o = e.props.interactiveBorder,
                s = je(r.placement),
                a = r.modifiersData.offset;
              if (!a) return !0;
              var l = "bottom" === s ? a.top.y : 0,
                c = "top" === s ? a.bottom.y : 0,
                u = "right" === s ? a.left.x : 0,
                d = "left" === s ? a.right.x : 0,
                p = t.top - i + l > o,
                f = i - t.bottom - c > o,
                h = t.left - n + u > o,
                m = n - t.right - d > o;
              return p || f || h || m;
            });
          })(i, e) && (I(), te(e));
        }
      }
      function U(e) {
        Q(e) ||
          (b.props.trigger.indexOf("click") >= 0 && d) ||
          (b.props.interactive ? b.hideWithInteractivity(e) : te(e));
      }
      function Y(e) {
        (b.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
          (b.props.interactive &&
            e.relatedTarget &&
            w.contains(e.relatedTarget)) ||
          te(e);
      }
      function Q(e) {
        return !!Ve.isTouch && k() !== e.type.indexOf("touch") >= 0;
      }
      function K() {
        J();
        var t = b.props,
          n = t.popperOptions,
          i = t.placement,
          r = t.offset,
          o = t.getReferenceClientRect,
          s = t.moveTransition,
          l = A() ? st(w).arrow : null,
          c = o
            ? {
                getBoundingClientRect: o,
                contextElement: o.contextElement || L(),
              }
            : e,
          u = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (A()) {
                var n = D().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? n.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? n.setAttribute("data-" + e, "")
                    : n.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          d = [
            { name: "offset", options: { offset: r } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !s } },
            u,
          ];
        A() &&
          l &&
          d.push({ name: "arrow", options: { element: l, padding: 3 } }),
          d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
          (b.popperInstance = xe(
            c,
            w,
            Object.assign({}, n, {
              placement: i,
              onFirstUpdate: a,
              modifiers: d,
            })
          ));
      }
      function J() {
        b.popperInstance &&
          (b.popperInstance.destroy(), (b.popperInstance = null));
      }
      function Z() {
        return Ne(w.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        b.clearDelayTimeouts(), e && j("onTrigger", [b, e]), B();
        var t = M(!0),
          i = S(),
          r = i[0],
          o = i[1];
        Ve.isTouch && "hold" === r && o && (t = o),
          t
            ? (n = setTimeout(function () {
                b.show();
              }, t))
            : b.show();
      }
      function te(e) {
        if (
          (b.clearDelayTimeouts(), j("onUntrigger", [b, e]), b.state.isVisible)
        ) {
          if (
            !(
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              b.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              d
            )
          ) {
            var t = M(!1);
            t
              ? (i = setTimeout(function () {
                  b.state.isVisible && b.hide();
                }, t))
              : (r = requestAnimationFrame(function () {
                  b.hide();
                }));
          }
        } else z();
      }
    }
    function pt(e, t) {
      void 0 === t && (t = {});
      var n = Ze.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", Ue, Se),
        window.addEventListener("blur", Qe);
      var i = Object.assign({}, t, { plugins: n }),
        r = Be(e).reduce(function (e, t) {
          var n = t && dt(t, i);
          return n && e.push(n), e;
        }, []);
      return qe(e) ? r[0] : r;
    }
    (pt.defaultProps = Ze),
      (pt.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          Ze[t] = e[t];
        });
      }),
      (pt.currentInput = Ve);
    Object.assign({}, ne, {
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
      },
    });
    pt.setDefaultProps({ render: at });
    const ft = pt;
    function ht(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function mt(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : ht(t[n]) &&
            ht(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            mt(e[n], t[n]);
      });
    }
    ft("#user-tel", {
      content: "Пример телефона:+7123456789",
      trigger: "click",
      placement: "top-end",
    }),
      ft("#user-name", {
        content: "Пример имени: Луначарский Василий",
        trigger: "click",
        placement: "top-end",
      });
    const gt = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function vt() {
      const e = "undefined" != typeof document ? document : {};
      return mt(e, gt), e;
    }
    const yt = {
      document: gt,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function bt() {
      const e = "undefined" != typeof window ? window : {};
      return mt(e, yt), e;
    }
    class xt extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function wt(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...wt(e)) : t.push(e);
        }),
        t
      );
    }
    function Tt(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function Ct(e, t) {
      const n = bt(),
        i = vt();
      let r = [];
      if (!t && e instanceof xt) return e;
      if (!e) return new xt(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        } else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof xt) return e;
        r = e;
      }
      return new xt(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    Ct.fn = xt.prototype;
    const Et = "resize scroll".split(" ");
    function St(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            Et.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : Ct(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    St("click"),
      St("blur"),
      St("focus"),
      St("focusin"),
      St("focusout"),
      St("keyup"),
      St("keydown"),
      St("keypress"),
      St("submit"),
      St("change"),
      St("mousedown"),
      St("mousemove"),
      St("mouseup"),
      St("mouseenter"),
      St("mouseleave"),
      St("mouseout"),
      St("mouseover"),
      St("touchstart"),
      St("touchend"),
      St("touchmove"),
      St("resize"),
      St("scroll");
    const kt = {
      addClass: function (...e) {
        const t = wt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = wt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = wt(e.map((e) => e.split(" ")));
        return (
          Tt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = wt(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, r] = e;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), Ct(t).is(n))) i.apply(t, r);
          else {
            const e = Ct(t).parents();
            for (let t = 0; t < e.length; t += 1)
              Ct(e[t]).is(n) && i.apply(e[t], r);
          }
        }
        function s(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: s }),
                t.addEventListener(e, s, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, r] = e;
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const o = this[e];
            let s;
            if (
              (!n && o.dom7Listeners
                ? (s = o.dom7Listeners[t])
                : n && o.dom7LiveListeners && (s = o.dom7LiveListeners[t]),
              s && s.length)
            )
              for (let e = s.length - 1; e >= 0; e -= 1) {
                const n = s[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (o.removeEventListener(t, n.proxyListener, r),
                    s.splice(e, 1))
                  : i ||
                    (o.removeEventListener(t, n.proxyListener, r),
                    s.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = bt(),
          n = e[0].split(" "),
          i = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const o = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(o, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = bt();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = bt(),
            t = vt(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            o = n.clientTop || r.clientTop || 0,
            s = n.clientLeft || r.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - o, left: i.left + l - s };
        }
        return null;
      },
      css: function (e, t) {
        const n = bt();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = bt(),
          n = vt(),
          i = this[0];
        let r, o;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (r = Ct(e), o = 0; o < r.length; o += 1)
            if (r[o] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof xt) {
          for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
            if (r[o] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return Ct([]);
        if (e < 0) {
          const n = t + e;
          return Ct(n < 0 ? [] : [this[n]]);
        }
        return Ct([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = vt();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof xt)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = vt();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof xt)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Ct(this[0].nextElementSibling).is(e)
              ? Ct([this[0].nextElementSibling])
              : Ct([])
            : this[0].nextElementSibling
            ? Ct([this[0].nextElementSibling])
            : Ct([])
          : Ct([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return Ct([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? Ct(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Ct(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && Ct(t.previousElementSibling).is(e)
              ? Ct([t.previousElementSibling])
              : Ct([])
            : t.previousElementSibling
            ? Ct([t.previousElementSibling])
            : Ct([]);
        }
        return Ct([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return Ct([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? Ct(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Ct(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? Ct(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return Ct(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? Ct(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return Ct(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? Ct([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return Ct(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !Ct(i[n]).is(e)) || t.push(i[n]);
        }
        return Ct(t);
      },
      filter: function (e) {
        return Ct(Tt(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(kt).forEach((e) => {
      Object.defineProperty(Ct.fn, e, { value: kt[e], writable: !0 });
    });
    const At = Ct;
    function Lt(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function Ot() {
      return Date.now();
    }
    function Dt(e, t) {
      void 0 === t && (t = "x");
      const n = bt();
      let i, r, o;
      const s = (function (e) {
        const t = bt();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = s.transform || s.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((o =
              s.MozTransform ||
              s.OTransform ||
              s.MsTransform ||
              s.msTransform ||
              s.transform ||
              s
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = o.toString().split(","))),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? o.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? o.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function Mt(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function Pt(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function jt() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != i && !Pt(i)) {
          const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, r = n.length; t < r; t += 1) {
            const r = n[t],
              o = Object.getOwnPropertyDescriptor(i, r);
            void 0 !== o &&
              o.enumerable &&
              (Mt(e[r]) && Mt(i[r])
                ? i[r].__swiper__
                  ? (e[r] = i[r])
                  : jt(e[r], i[r])
                : !Mt(e[r]) && Mt(i[r])
                ? ((e[r] = {}),
                  i[r].__swiper__ ? (e[r] = i[r]) : jt(e[r], i[r]))
                : (e[r] = i[r]));
          }
        }
      }
      return e;
    }
    function Nt(e, t, n) {
      e.style.setProperty(t, n);
    }
    function $t(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const r = bt(),
        o = -t.translate;
      let s,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const c = n > o ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        d = () => {
          (s = new Date().getTime()), null === a && (a = s);
          const e = Math.max(Math.min((s - a) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = o + c * (n - o);
          if ((u(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), u(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(d);
        };
      d();
    }
    let It, qt, Ht;
    function _t() {
      return (
        It ||
          (It = (function () {
            const e = bt(),
              t = vt();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        It
      );
    }
    function Bt(e) {
      return (
        void 0 === e && (e = {}),
        qt ||
          (qt = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = _t(),
              i = bt(),
              r = i.navigator.platform,
              o = t || i.navigator.userAgent,
              s = { ios: !1, android: !1 },
              a = i.screen.width,
              l = i.screen.height,
              c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = o.match(/(iPad).*OS\s([\d_]+)/);
            const d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !u && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === r;
            let h = "MacIntel" === r;
            return (
              !u &&
                h &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((u = o.match(/(Version)\/([\d.]+)/)),
                u || (u = [0, 1, "13_0_0"]),
                (h = !1)),
              c && !f && ((s.os = "android"), (s.android = !0)),
              (u || p || d) && ((s.os = "ios"), (s.ios = !0)),
              s
            );
          })(e)),
        qt
      );
    }
    function zt() {
      return (
        Ht ||
          (Ht = (function () {
            const e = bt();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        Ht
      );
    }
    const Rt = {
      on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
            o[s] = arguments[s];
          t.apply(i, o);
        }
        return (r.__emitterProxy = t), i.on(e, r, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, r) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(r, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
          o[s] = arguments[s];
        "string" == typeof o[0] || Array.isArray(o[0])
          ? ((t = o[0]), (n = o.slice(1, o.length)), (i = e))
          : ((t = o[0].events), (n = o[0].data), (i = o[0].context || e)),
          n.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          e
        );
      },
    };
    const Wt = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          { $wrapperEl: r, size: o, rtlTranslate: s, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          u = r.children(`.${e.params.slideClass}`),
          d = l ? e.virtual.slides.length : u.length;
        let p = [];
        const f = [],
          h = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = i.spaceBetween,
          x = -m,
          w = 0,
          T = 0;
        if (void 0 === o) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * o),
          (e.virtualSize = -b),
          s
            ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (Nt(e.wrapperEl, "--swiper-centered-offset-before", ""),
            Nt(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(d);
        const S =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let r = 0; r < d; r += 1) {
          E = 0;
          const s = u.eq(r);
          if (
            (C && e.grid.updateSlide(r, s, d, t), "none" !== s.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              S && (u[r].style[t("width")] = "");
              const o = getComputedStyle(s[0]),
                a = s[0].style.transform,
                l = s[0].style.webkitTransform;
              if (
                (a && (s[0].style.transform = "none"),
                l && (s[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
              else {
                const e = n(o, "width"),
                  t = n(o, "padding-left"),
                  i = n(o, "padding-right"),
                  r = n(o, "margin-left"),
                  a = n(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + r + a;
                else {
                  const { clientWidth: n, offsetWidth: o } = s[0];
                  E = e + t + i + r + a + (o - n);
                }
              }
              a && (s[0].style.transform = a),
                l && (s[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (o - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                u[r] && (u[r].style[t("width")] = `${E}px`);
            u[r] && (u[r].swiperSlideSize = E),
              h.push(E),
              i.centeredSlides
                ? ((x = x + E / 2 + w / 2 + b),
                  0 === w && 0 !== r && (x = x - o / 2 - b),
                  0 === r && (x = x - o / 2 - b),
                  Math.abs(x) < 0.001 && (x = 0),
                  i.roundLengths && (x = Math.floor(x)),
                  T % i.slidesPerGroup == 0 && p.push(x),
                  f.push(x))
                : (i.roundLengths && (x = Math.floor(x)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(x),
                  f.push(x),
                  (x = x + E + b)),
              (e.virtualSize += E + b),
              (w = E),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + g),
          s &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let r = p[n];
            i.roundLengths && (r = Math.floor(r)),
              p[n] <= e.virtualSize - o && t.push(r);
          }
          (p = t),
            Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - o);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
          u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
            [n]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - o;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < o)
          ) {
            const t = (o - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          Nt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            Nt(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (d !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          d <= i.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let r,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const s = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || At([])).each((e) => {
              n.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !i) break;
              n.push(s(e));
            }
        else n.push(s(t.activeIndex));
        for (r = 0; r < n.length; r += 1)
          if (void 0 !== n[r]) {
            const e = n[r].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: r, snapGrid: o } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let s = -e;
        r && (s = e),
          i.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (s + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u =
              (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            d = -(s - l),
            p = d + t.slidesSizesGrid[e];
          ((d >= 0 && d < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (d <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = r ? -c : c),
            (a.originalProgress = r ? -u : u);
        }
        t.visibleSlides = At(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: o, isEnd: s } = t;
        const a = o,
          l = s;
        0 === i
          ? ((r = 0), (o = !0), (s = !0))
          : ((r = (e - t.minTranslate()) / i), (o = r <= 0), (s = r >= 1)),
          Object.assign(t, { progress: r, isBeginning: o, isEnd: s }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !a && t.emit("reachBeginning toEdge"),
          s && !l && t.emit("reachEnd toEdge"),
          ((a && !o) || (l && !s)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: r,
            realIndex: o,
          } = e,
          s = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = s
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${r}"]`
              )
            : t.eq(r)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            c.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: r,
            params: o,
            activeIndex: s,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          u = e;
        if (void 0 === u) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (u = e)
                : n >= i[e] && n < i[e + 1] && (u = e + 1)
              : n >= i[e] && (u = e);
          o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
        }
        if (r.indexOf(n) >= 0) c = r.indexOf(n);
        else {
          const e = Math.min(o.slidesPerGroupSkip, u);
          c = e + Math.floor((u - e) / o.slidesPerGroup);
        }
        if ((c >= r.length && (c = r.length - 1), u === s))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const d = parseInt(
          t.slides.eq(u).attr("data-swiper-slide-index") || u,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: d,
          previousIndex: s,
          activeIndex: u,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== d && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = At(e).closest(`.${n.slideClass}`)[0];
        let r,
          o = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (o = !0), (r = e);
              break;
            }
        if (!i || !o)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                At(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const Ft = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: r,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let o = Dt(r[0], e);
        return n && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: r,
            $wrapperEl: o,
            wrapperEl: s,
            progress: a,
          } = n;
        let l,
          c = 0,
          u = 0;
        n.isHorizontal() ? (c = i ? -e : e) : (u = e),
          r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
          r.cssMode
            ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -u)
            : r.virtualTranslate ||
              o.transform(`translate3d(${c}px, ${u}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : u);
        const d = n.maxTranslate() - n.minTranslate();
        (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, i, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === i && (i = !0);
        const o = this,
          { params: s, wrapperEl: a } = o;
        if (o.animating && s.preventInteractionOnTransition) return !1;
        const l = o.minTranslate(),
          c = o.maxTranslate();
        let u;
        if (
          ((u = i && e > l ? l : i && e < c ? c : e),
          o.updateProgress(u),
          s.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
          else {
            if (!o.support.smoothScroll)
              return (
                $t({ swiper: o, targetPosition: -u, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(u),
              n &&
                (o.emit("beforeTransitionStart", t, r),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(u),
              n &&
                (o.emit("beforeTransitionStart", t, r),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      n && o.emit("transitionEnd"));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Gt(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
      const { activeIndex: o, previousIndex: s } = t;
      let a = i;
      if (
        (a || (a = o > s ? "next" : o < s ? "prev" : "reset"),
        t.emit(`transition${r}`),
        n && o !== s)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === a
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    const Vt = {
      slideTo: function (e, t, n, i, r) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const o = this;
        let s = e;
        s < 0 && (s = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: u,
          activeIndex: d,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = o;
        if (
          (o.animating && a.preventInteractionOnTransition) ||
          (!h && !i && !r)
        )
          return !1;
        const m = Math.min(o.params.slidesPerGroupSkip, s);
        let g = m + Math.floor((s - m) / o.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (d || a.initialSlide || 0) === (u || 0) &&
            n &&
            o.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((o.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < i - (i - n) / 2
                ? (s = e)
                : t >= n && t < i && (s = e + 1)
              : t >= n && (s = e);
          }
        if (o.initialized && s !== d) {
          if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            v > o.translate &&
            v > o.maxTranslate() &&
            (d || 0) !== s
          )
            return !1;
        }
        let y;
        if (
          ((y = s > d ? "next" : s < d ? "prev" : "reset"),
          (p && -v === o.translate) || (!p && v === o.translate))
        )
          return (
            o.updateActiveIndex(s),
            a.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== a.effect && o.setTranslate(v),
            "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = o.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._swiperImmediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                $t({ swiper: o, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(v),
          o.updateActiveIndex(s),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, i),
          o.transitionStart(n, y),
          0 === t
            ? o.transitionEnd(n, y)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(n, y));
                }),
              o.$wrapperEl[0].addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "string" == typeof e)
        ) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        return r.params.loop && (o += r.loopedSlides), r.slideTo(o, t, n, i);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: r, enabled: o, params: s } = i;
        if (!o) return i;
        let a = s.slidesPerGroup;
        "auto" === s.slidesPerView &&
          1 === s.slidesPerGroup &&
          s.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a;
        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return s.rewind && i.isEnd
          ? i.slideTo(0, e, t, n)
          : i.slideTo(i.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: r,
            animating: o,
            snapGrid: s,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (r.loop) {
          if (o && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const d = u(l ? i.translate : -i.translate),
          p = s.map((e) => u(e));
        let f = s[p.indexOf(d) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          s.forEach((t, n) => {
            d >= t && (e = n);
          }),
            void 0 !== e && (f = s[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = a.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          r.rewind && i.isBeginning)
        ) {
          const r =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(r, e, t, n);
        }
        return i.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const r = this;
        let o = r.activeIndex;
        const s = Math.min(r.params.slidesPerGroupSkip, o),
          a = s + Math.floor((o - s) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[a]) {
          const e = r.snapGrid[a];
          l - e > (r.snapGrid[a + 1] - e) * i && (o += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[a - 1];
          l - e <= (r.snapGrid[a] - e) * i && (o -= r.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, r.slidesGrid.length - 1)),
          r.slideTo(o, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          o = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            At(e.clickedSlide).attr("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? o < e.loopedSlides - i / 2 ||
                o > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (o = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Lt(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - i
              ? (e.loopFix(),
                (o = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Lt(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    };
    const Xt = {
      loopCreate: function () {
        const e = this,
          t = vt(),
          { params: n, $wrapperEl: i } = e,
          r = i.children().length > 0 ? At(i.children()[0].parentNode) : i;
        r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let o = r.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (o.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = At(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              r.append(e);
            }
            o = r.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = o.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > o.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = o.length);
        const s = [],
          a = [];
        o.each((e, t) => {
          At(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / o.length) * o.length;
          a.push(o.eq(e)[0]), s.unshift(o.eq(o.length - e - 1)[0]);
        }
        for (let e = 0; e < a.length; e += 1)
          r.append(At(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = s.length - 1; e >= 0; e -= 1)
          r.prepend(At(s[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: r,
          allowSlideNext: o,
          snapGrid: s,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -s[t] - e.getTranslate();
        if (t < i) {
          (l = n.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= n.length - i) {
          (l = -n.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = r), (e.allowSlideNext = o), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function Ut(e) {
      const t = this,
        n = vt(),
        i = bt(),
        r = t.touchEventsData,
        { params: o, touches: s, enabled: a } = t;
      if (!a) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = At(l.target);
      if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === l.type),
        !r.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!r.isTouchEvent && "button" in l && l.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      !!o.noSwipingClass &&
        "" !== o.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = At(e.path[0]));
      const u = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        d = !(!l.target || !l.target.shadowRoot);
      if (
        o.noSwiping &&
        (d
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === vt() || n === bt()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const i = n.closest(e);
                  return i || n.getRootNode
                    ? i || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(u, c[0])
          : c.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
      (s.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (s.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = s.currentX,
        f = s.currentY,
        h = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== h) return;
        e.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (s.startX = p),
        (s.startY = f),
        (r.touchStartTime = Ot()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(r.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
          n.activeElement &&
            At(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function Yt(e) {
      const t = vt(),
        n = this,
        i = n.touchEventsData,
        { params: r, touches: o, rtlTranslate: s, enabled: a } = n;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        u = "touchmove" === l.type ? c.pageX : l.pageX,
        d = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (o.startX = u), void (o.startY = d);
      if (!n.allowTouchMove)
        return (
          At(l.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(o, {
              startX: u,
              startY: d,
              currentX: u,
              currentY: d,
            }),
            (i.touchStartTime = Ot()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (d < o.startY && n.translate <= n.maxTranslate()) ||
            (d > o.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < o.startX && n.translate <= n.maxTranslate()) ||
          (u > o.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        At(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (o.currentX = u), (o.currentY = d);
      const p = o.currentX - o.startX,
        f = o.currentY - o.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && o.currentY === o.startY) ||
        (n.isVertical() && o.currentX === o.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let h = n.isHorizontal() ? p : f;
      (o.diff = h),
        (h *= r.touchRatio),
        s && (h = -h),
        (n.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let m = !0,
        g = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (g = 0),
        h > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + h) ** g))
          : h < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - h) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (i.currentTranslate = i.startTranslate),
            void (o.diff = n.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function Qt(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: o,
          slidesGrid: s,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = Ot(),
        u = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          u < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = Ot()),
        Lt(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let d;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (d = i.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: d });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < s.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== s[e + t]
          ? d >= s[e] && d < s[e + t] && ((p = e), (f = s[e + t] - s[e]))
          : d >= s[e] && ((p = e), (f = s[s.length - 1] - s[s.length - 2]));
      }
      let h = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (d - s[p]) / f,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (u > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function Kt() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: o } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    function Jt(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Zt() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const o = e.maxTranslate() - e.minTranslate();
      (r = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
        r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let en = !1;
    function tn() {}
    const nn = (e, t) => {
      const n = vt(),
        {
          params: i,
          touchEvents: r,
          el: o,
          wrapperEl: s,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[u](r.start, e.onTouchStart, t),
          o[u](
            r.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          o[u](r.end, e.onTouchEnd, t),
          r.cancel && o[u](r.cancel, e.onTouchEnd, t);
      } else
        o[u](r.start, e.onTouchStart, !1),
          n[u](r.move, e.onTouchMove, c),
          n[u](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        o[u]("click", e.onClick, !0),
        i.cssMode && s[u]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Kt,
              !0
            )
          : e[d]("observerUpdate", Kt, !0);
    };
    const rn = {
        attachEvents: function () {
          const e = this,
            t = vt(),
            { params: n, support: i } = e;
          (e.onTouchStart = Ut.bind(e)),
            (e.onTouchMove = Yt.bind(e)),
            (e.onTouchEnd = Qt.bind(e)),
            n.cssMode && (e.onScroll = Zt.bind(e)),
            (e.onClick = Jt.bind(e)),
            i.touch && !en && (t.addEventListener("touchstart", tn), (en = !0)),
            nn(e, "on");
        },
        detachEvents: function () {
          nn(this, "off");
        },
      },
      on = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const sn = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: r,
            $el: o,
          } = e,
          s = r.breakpoints;
        if (!s || (s && 0 === Object.keys(s).length)) return;
        const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in s ? s[a] : void 0) || e.originalParams,
          c = on(e, r),
          u = on(e, l),
          d = r.enabled;
        c && !u
          ? (o.removeClass(
              `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            u &&
            (o.addClass(`${r.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === r.grid.fill)) &&
              o.addClass(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = r[t] && r[t].enabled,
              i = l[t] && l[t].enabled;
            n && !i && e[t].disable(), !n && i && e[t].enable();
          });
        const p = l.direction && l.direction !== r.direction,
          f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
        p && n && e.changeDirection(), jt(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          d && !h ? e.disable() : !d && h && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let i = !1;
        const r = bt(),
          o = "window" === t ? r.innerHeight : n.clientHeight,
          s = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: o * t, point: e };
            }
            return { value: e, point: e };
          });
        s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < s.length; e += 1) {
          const { point: o, value: a } = s[e];
          "window" === t
            ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = o)
            : a <= n.clientWidth && (i = o);
        }
        return i || "max";
      },
    };
    const an = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: r,
            device: o,
            support: s,
          } = e,
          a = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !s.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: i },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: o.android },
              { ios: o.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ln = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function cn(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                jt(t, n))
              : jt(t, n))
          : jt(t, n);
      };
    }
    const un = {
        eventsEmitter: Rt,
        update: Wt,
        translate: Ft,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              Gt({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                Gt({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Vt,
        loop: Xt,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: rn,
        breakpoints: sn,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: an,
        images: {
          loadImage: function (e, t, n, i, r, o) {
            const s = bt();
            let a;
            function l() {
              o && o();
            }
            At(e).parent("picture")[0] || (e.complete && r)
              ? l()
              : t
              ? ((a = new s.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      dn = {};
    class pn {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
          i[r] = arguments[r];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = jt({}, t)),
          e && !t.el && (t.el = e),
          t.el && At(t.el).length > 1)
        ) {
          const e = [];
          return (
            At(t.el).each((n) => {
              const i = jt({}, t, { el: n });
              e.push(new pn(i));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = _t()),
          (o.device = Bt({ userAgent: t.userAgent })),
          (o.browser = zt()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const s = {};
        o.modules.forEach((e) => {
          e({
            swiper: o,
            extendParams: cn(t, s),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const a = jt({}, ln, s);
        return (
          (o.params = jt({}, a, dn, t)),
          (o.originalParams = jt({}, o.params)),
          (o.passedParams = jt({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          (o.$ = At),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: At(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (o.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (o.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                o.support.touch || !o.params.simulateTouch
                  ? o.touchEventsTouch
                  : o.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: Ot(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          r = (n.maxTranslate() - i) * e + i;
        n.translateTo(r, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: o,
          size: s,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? r[e] + o[e] - r[a] < s : r[e] - r[a] < s) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            r[a] - r[e] < s && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              r || i()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = At(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = At(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(i()) : At(n).children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = vt().createElement("div");
          (r = At(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, $el: r, $wrapperEl: o, slides: s } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              o.removeAttr("style"),
              s &&
                s.length &&
                s
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        jt(dn, e);
      }
      static get extendedDefaults() {
        return dn;
      }
      static get defaults() {
        return ln;
      }
      static installModule(e) {
        pn.prototype.__modules__ || (pn.prototype.__modules__ = []);
        const t = pn.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => pn.installModule(e)), pn)
          : (pn.installModule(e), pn);
      }
    }
    Object.keys(un).forEach((e) => {
      Object.keys(un[e]).forEach((t) => {
        pn.prototype[t] = un[e][t];
      });
    }),
      pn.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const r = bt();
          let o = null,
            s = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((o = new ResizeObserver((e) => {
                  s = r.requestAnimationFrame(() => {
                    const { width: n, height: i } = t;
                    let r = n,
                      o = i;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: i, target: s } = e;
                      (s && s !== t.el) ||
                        ((r = i ? i.width : (n[0] || n).inlineSize),
                        (o = i ? i.height : (n[0] || n).blockSize));
                    }),
                      (r === n && o === i) || a();
                  });
                })),
                o.observe(t.el))
              : (r.addEventListener("resize", a),
                r.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              s && r.cancelAnimationFrame(s),
                o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
                r.removeEventListener("resize", a),
                r.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: r } = e;
          const o = [],
            s = bt(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const t = function () {
                    r("observerUpdate", e[0]);
                  };
                  s.requestAnimationFrame
                    ? s.requestAnimationFrame(t)
                    : s.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                o.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              o.forEach((e) => {
                e.disconnect();
              }),
                o.splice(0, o.length);
            });
        },
      ]);
    const fn = pn;
    function hn(e, t, n, i) {
      const r = vt();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((o) => {
            if (!n[o] && !0 === n.auto) {
              let s = e.$el.children(`.${i[o]}`)[0];
              s ||
                ((s = r.createElement("div")),
                (s.className = i[o]),
                e.$el.append(s)),
                (n[o] = s),
                (t[o] = s);
            }
          }),
        n
      );
    }
    function mn(e) {
      let { swiper: t, extendParams: n, on: i, emit: r } = e;
      function o(e) {
        let n;
        return (
          e &&
            ((n = At(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function s(e, n) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function a() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        s(n, t.isBeginning && !t.params.rewind),
          s(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), r("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), r("navigationNext"));
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = hn(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = o(e.nextEl),
          i = o(e.prevEl);
        n && n.length > 0 && n.on("click", c),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function d() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", l),
            n.removeClass(t.params.navigation.disabledClass));
      }
      n({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? p() : (u(), a());
        }),
        i("toEdge fromEdge lock unlock", () => {
          a();
        }),
        i("destroy", () => {
          d();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, n) => {
          const { $nextEl: i, $prevEl: o } = t.navigation,
            s = n.target;
          if (t.params.navigation.hideOnClick && !At(s).is(o) && !At(s).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === s || t.pagination.el.contains(s))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : o && (e = o.hasClass(t.params.navigation.hiddenClass)),
              r(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              o && o.toggleClass(t.params.navigation.hiddenClass);
          }
        });
      const p = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), d();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass),
            u(),
            a();
        },
        disable: p,
        update: a,
        init: u,
        destroy: d,
      });
    }
    function gn(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function vn(e) {
      let { swiper: t, extendParams: n, on: i, emit: r } = e;
      const o = "swiper-pagination";
      let s;
      n({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${o}-bullet`,
          bulletActiveClass: `${o}-bullet-active`,
          modifierClass: `${o}-`,
          currentClass: `${o}-current`,
          totalClass: `${o}-total`,
          hiddenClass: `${o}-hidden`,
          progressbarFillClass: `${o}-progressbar-fill`,
          progressbarOppositeClass: `${o}-progressbar-opposite`,
          clickableClass: `${o}-clickable`,
          lockClass: `${o}-lock`,
          horizontalClass: `${o}-horizontal`,
          verticalClass: `${o}-vertical`,
          paginationDisabledClass: `${o}-disabled`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, n) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
      }
      function u() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          o = t.pagination.$el;
        let u;
        const d = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((u = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              u > i - 1 - 2 * t.loopedSlides && (u -= i - 2 * t.loopedSlides),
              u > d - 1 && (u -= d),
              u < 0 && "bullets" !== t.params.paginationType && (u = d + u))
            : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let r, l, d;
          if (
            (n.dynamicBullets &&
              ((s = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              o.css(
                t.isHorizontal() ? "width" : "height",
                s * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += u - (t.previousIndex - t.loopedSlides || 0)),
                a > n.dynamicMainBullets - 1
                  ? (a = n.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (r = Math.max(u - a, 0)),
              (l = r + (Math.min(i.length, n.dynamicMainBullets) - 1)),
              (d = (l + r) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            o.length > 1)
          )
            i.each((e) => {
              const t = At(e),
                i = t.index();
              i === u && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (i >= r &&
                    i <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  i === r && c(t, "prev"),
                  i === l && c(t, "next"));
            });
          else {
            const e = i.eq(u),
              o = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = i.eq(r),
                s = i.eq(l);
              for (let e = r; e <= l; e += 1)
                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (o >= i.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                  i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(s, "next");
              else c(e, "prev"), c(s, "next");
            }
          }
          if (n.dynamicBullets) {
            const r = Math.min(i.length, n.dynamicMainBullets + 4),
              o = (s * r - s) / 2 - d * s,
              a = e ? "right" : "left";
            i.css(t.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (o.find(gn(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
            o.find(gn(n.totalClass)).text(n.formatFractionTotal(d))),
          "progressbar" === n.type)
        ) {
          let e;
          e = n.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (u + 1) / d;
          let r = 1,
            s = 1;
          "horizontal" === e ? (r = i) : (s = i),
            o
              .find(gn(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (o.html(n.renderCustom(t, u + 1, d)), r("paginationRender", o[0]))
          : r("paginationUpdate", o[0]),
          t.params.watchOverflow &&
            t.enabled &&
            o[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function d() {
        const e = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let o = "";
        if ("bullets" === e.type) {
          let r = t.params.loop
            ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            r > n &&
            (r = n);
          for (let n = 0; n < r; n += 1)
            e.renderBullet
              ? (o += e.renderBullet.call(t, n, e.bulletClass))
              : (o += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(o), (t.pagination.bullets = i.find(gn(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((o = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(o)),
          "progressbar" === e.type &&
            ((o = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(o)),
          "custom" !== e.type && r("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = hn(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let n = At(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => At(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
          n.addClass(e.modifierClass + e.type),
          n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            n.addClass(e.progressbarOppositeClass),
          e.clickable &&
            n.on("click", gn(e.bulletClass), function (e) {
              e.preventDefault();
              let n = At(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides), t.slideTo(n);
            }),
          Object.assign(t.pagination, { $el: n, el: n[0] }),
          t.enabled || n.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        const n = t.pagination.$el;
        n.removeClass(e.hiddenClass),
          n.removeClass(e.modifierClass + e.type),
          n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && n.off("click", gn(e.bulletClass));
      }
      i("init", () => {
        !1 === t.params.pagination.enabled ? h() : (p(), d(), u());
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && u();
        }),
        i("snapIndexChange", () => {
          t.params.loop || u();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (d(), u());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (d(), u());
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          u();
        }),
        i("click", (e, n) => {
          const i = n.target,
            { $el: o } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            o &&
            o.length > 0 &&
            !At(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = o.hasClass(t.params.pagination.hiddenClass);
            r(!0 === e ? "paginationShow" : "paginationHide"),
              o.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.removeClass(
                t.params.pagination.paginationDisabledClass
              ),
            p(),
            d(),
            u();
        },
        disable: h,
        render: d,
        update: u,
        init: p,
        destroy: f,
      });
    }
    function yn() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      yn(),
        document.querySelector(".slider-reviews") &&
          new fn(".slider-reviews", {
            modules: [mn, vn, vn],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 35,
            speed: 800,
            loop: !0,
            pagination: { el: ".slider-reviews__dots", clickable: !0 },
            navigation: {
              nextEl: ".slider-reviews__nav .slider-reviews__item_next",
              prevEl: ".slider-reviews__nav .slider-reviews__item_prev",
            },
            on: {},
          });
    });
    let bn = (e, t = !1, n = 500, i = 0) => {
        const o = document.querySelector(e);
        if (o) {
          let a = "",
            l = 0;
          t &&
            ((a = "header.header"),
            (l = document.querySelector(a).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: n,
            header: a,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (r(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(o, "", c);
          else {
            let e = o.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
          }
          s(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else s(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      },
      xn = !1;
    setTimeout(() => {
      if (xn) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      document.addEventListener("DOMContentLoaded", function () {
        e(document).ready(function (e) {
          e(window).width() < 768 &&
            e(".compound__body").each(function () {
              let t = e(this).find(".compound__show-more"),
                n = e(this).find(".hide");
              n.hide(),
                t.click(function () {
                  n.slideToggle(),
                    t.text("Скрыть" == t.text() ? "Показать еще" : "Скрыть");
                });
            });
        });
        const t = document.querySelector(".timer .timer__minutes"),
          n = document.querySelector(".timer .timer__seconds"),
          i = new Date(Date.now() + 1800999);
        new wn(
          i,
          (e) => {
            (t.textContent = e.minutes),
              (n.textContent = e.seconds),
              (t.dataset.title = e.minutesTitle),
              (n.dataset.title = e.secondsTitle);
          },
          () => {
            document.querySelector(".timer .timer__result").textContent =
              "Не успел!";
          }
        );
        document.querySelectorAll('input[name="user_phone"]').forEach((e) => {
          e.addEventListener("input", () => {
            e.value = e.value.replace(/\D/, "");
          });
        });
        document.querySelectorAll("form").forEach((e) => {
          e.addEventListener("submit", function (t) {
            t.preventDefault();
            let n = new FormData(e),
              i = {};
            n.forEach((e, t) => {
              i[t] = e;
            }),
              console.log(i),
              (async function (e, t) {
                let n = await fetch(`${e}`, {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(t),
                });
                if (!n.ok)
                  throw new Error(`Could not fetch ${e}, status:${n.status} `);
                await n.json();
              })("http://localhost:3000/posts", i);
          });
        });
      });
    class wn {
      constructor(e, t, n) {
        (this._deadline = e),
          (this._cbChange = t),
          (this._cbComplete = n),
          (this._timerId = null),
          (this._out = {
            minutes: "",
            seconds: "",
            daysTitle: "",
            hoursTitle: "",
            minutesTitle: "",
            secondsTitle: "",
          }),
          this._start();
      }
      static declensionNum(e, t) {
        return t[
          e % 100 > 4 && e % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]
        ];
      }
      _start() {
        this._calc(), (this._timerId = setInterval(this._calc.bind(this), 1e3));
      }
      _calc() {
        const e = this._deadline - new Date(),
          t = e > 0 ? Math.floor(e / 1e3 / 60) % 60 : 0,
          n = e > 0 ? Math.floor(e / 1e3) % 60 : 0;
        (this._out.minutes = t < 10 ? "0" + t : t),
          (this._out.seconds = n < 10 ? "0" + n : n),
          this._cbChange && this._cbChange(this._out),
          e <= 0 &&
            (clearInterval(this._timerId),
            this._cbComplete && this._cbComplete());
      }
    }
    (window.FLS = !0),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            i &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? r(e)
                  : o(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                i = n.dataset.goto ? n.dataset.goto : "",
                r = !!n.hasAttribute("data-goto-header"),
                o = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              bn(i, r, o), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              n = t.target;
            if ("navigator" === n.dataset.watch) {
              const e = n.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
