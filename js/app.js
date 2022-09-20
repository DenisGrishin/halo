(() => {
  "use strict";
  let t = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
      );
    },
  };
  let e = (t, e = 500, o = 0) => {
      t.classList.contains("_slide") ||
        (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = o ? `${o}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !o),
            !o && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !o && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
    },
    o = (t, e = 500, o = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          o && t.style.removeProperty("height");
        let n = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = o ? `${o}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = n + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    },
    n = !0,
    s = (t = 500) => {
      document.documentElement.classList.contains("lock") ? i(t) : l(t);
    },
    i = (t = 500) => {
      let e = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, t);
      }
    },
    l = (t = 500) => {
      let e = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < o.length; t++) {
          o[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, t);
      }
    };
  function r(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  function a(t, e) {
    const o = Array.from(t).filter(function (t, o, n) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (o.length) {
      const t = [];
      o.forEach((o) => {
        const n = {},
          s = o.dataset[e].split(",");
        (n.value = s[0]),
          (n.type = s[1] ? s[1].trim() : "max"),
          (n.item = o),
          t.push(n);
      });
      let n = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      n = (function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      })(n);
      const s = [];
      if (n.length)
        return (
          n.forEach((e) => {
            const o = e.split(","),
              n = o[1],
              i = o[2],
              l = window.matchMedia(o[0]),
              r = t.filter(function (t) {
                if (t.value === n && t.type === i) return !0;
              });
            s.push({ itemsArray: r, matchMedia: l });
          }),
          s
        );
    }
  }
  document.addEventListener("click", function (t) {
    t.target.classList.contains("header") &&
      (document.documentElement.classList.remove("menu-open"),
      i(),
      document.documentElement.classList.remove("menu-open"));
  });
  let c = (t, e = !1, o = 500, n = 0) => {
      const s = document.querySelector(t);
      if (s) {
        let l = "",
          a = 0;
        e &&
          ((l = "header.header"), (a = document.querySelector(l).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: o,
          header: l,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(s, "", c);
        else {
          let t = s.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? t - a : t, behavior: "smooth" });
        }
        r(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    },
    d = !1;
  setTimeout(() => {
    if (d) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0);
  const u = () => {
    const t = document.querySelector("#popup");
    let e = !0;
    t &&
      (document.documentElement.addEventListener("mouseout", function (o) {
        o.pageY - window.pageYOffset < 0 &&
          e &&
          ((e = !1),
          document.documentElement.classList.add("lock"),
          document.body.classList.add("bg-show-popap"),
          t.classList.add("show"));
      }),
      t.addEventListener("click", function (e) {
        let o = e.target;
        o.closest(".popup__close") &&
          (document.documentElement.classList.remove("lock"),
          document.body.classList.remove("bg-show-popap"),
          t.classList.remove("show")),
          o.closest(".popup__wrapper") ||
            (document.documentElement.classList.remove("lock"),
            document.body.classList.remove("bg-show-popap"),
            t.classList.remove("show"));
      }));
  };
  class m {
    constructor(t, e, o) {
      (this._deadline = t),
        (this._cbChange = e),
        (this._cbComplete = o),
        (this._timerId = null),
        (this._out = {
          minutes: "",
          seconds: "",
          minutesTitle: "",
          secondsTitle: "",
        }),
        this._start();
    }
    static declensionNum(t, e) {
      return e[
        t % 100 > 4 && t % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][t % 10 < 5 ? t % 10 : 5]
      ];
    }
    _start() {
      this._calc(), (this._timerId = setInterval(this._calc.bind(this), 1e3));
    }
    _calc() {
      const t = this._deadline - new Date(),
        e = t > 0 ? Math.floor(t / 1e3 / 60) % 60 : 0,
        o = t > 0 ? Math.floor(t / 1e3) % 60 : 0;
      (this._out.minutes = e < 10 ? "0" + e : e),
        (this._out.seconds = o < 10 ? "0" + o : o),
        (this._out.minutesTitle = m.declensionNum(e, [
          "минута",
          "минуты",
          "минут",
        ])),
        (this._out.secondsTitle = m.declensionNum(o, [
          "секунда",
          "секунды",
          "секунд",
        ])),
        this._cbChange && this._cbChange(this._out),
        t <= 0 &&
          (clearInterval(this._timerId),
          this._cbComplete && this._cbComplete());
    }
  }
  const h = () => {
      const t = document.querySelector(".timer .timer__minutes"),
        e = document.querySelector(".timer .timer__seconds"),
        o = new Date(Date.now() + 600999);
      t &&
        new m(
          o,
          (o) => {
            (t.textContent = o.minutes),
              (e.textContent = o.seconds),
              (t.dataset.title = o.minutesTitle),
              (e.dataset.title = o.secondsTitle);
          },
          () => {
            document.querySelector(".timer-1 .timer__result").textContent =
              "Таймер завершился!";
          }
        );
    },
    p = () => {
      let t = document.querySelectorAll("input[data-tel-input]"),
        e = function (t) {
          return t.value.replace(/\D/g, "");
        },
        o = function (t) {
          let o = t.target,
            n = e(o),
            s = t.clipboardData || window.clipboardData;
          if (s) {
            let t = s.getData("Text");
            if (/\D/g.test(t)) return void (o.value = n);
          }
        },
        n = function (t) {
          let o = t.target,
            n = e(o),
            s = o.selectionStart,
            i = "";
          if (!n) return (o.value = "");
          if (o.value.length == s) {
            if (["5", "8", "9"].indexOf(n[0]) > -1) {
              "9" == n[0] && (n = "5" + n);
              let t = (n[0], "+506");
              (i = o.value = t + " "),
                n.length > 1 && (i += "(" + n.substring(1, 4)),
                n.length >= 5 && (i += ") " + n.substring(4, 7)),
                n.length >= 8 && (i += "-" + n.substring(7, 9)),
                n.length >= 10 && (i += "-" + n.substring(9, 11));
            } else i = "+" + n.substring(0, 16);
            o.value = i;
          } else t.data && /\D/g.test(t.data) && (o.value = n);
        },
        s = function (t) {
          let e = t.target.value.replace(/\D/g, "");
          8 == t.keyCode && 1 == e.length && (t.target.value = "");
        };
      for (let e of t)
        e.addEventListener("keydown", s),
          e.addEventListener("input", n, !1),
          e.addEventListener("paste", o, !1);
    },
    f = () => {
      const t = document.querySelectorAll("form");
      if (t) {
        async function e(t, e) {
          let o = await fetch(`${t}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(e),
          });
          if (!o.ok)
            throw new Error(`Could not fetch ${t}, status:${o.status} `);
          return await o.json();
        }
        t.forEach((t) => {
          t.addEventListener("submit", function (o) {
            o.preventDefault();
            let n = new FormData(t),
              s = {};
            n.forEach((t, e) => {
              s[e] = t;
            }),
              console.log(s),
              e("http://localhost:3000/posts", s);
          });
        });
      }
    };
  (window.FLS = !1),
    t.any() && document.documentElement.classList.add("touch"),
    (function () {
      let t = document.querySelector(".icon-menu"),
        e = document.querySelector(".header-burger__close");
      t &&
        t.addEventListener("click", function (t) {
          n && (s(), document.documentElement.classList.add("menu-open"));
        }),
        e &&
          e.addEventListener("click", function (t) {
            n && (s(), document.documentElement.classList.remove("menu-open"));
          });
    })(),
    (function () {
      const t = document.querySelectorAll("[data-spollers]");
      if (t.length > 0) {
        const n = Array.from(t).filter(function (t, e, o) {
          return !t.dataset.spollers.split(",")[0];
        });
        n.length && i(n);
        let s = a(t, "spollers");
        function i(t, e = !1) {
          t.forEach((t) => {
            (t = e ? t.item : t),
              e.matches || !e
                ? (t.classList.add("_spoller-init"),
                  l(t),
                  t.addEventListener("click", r))
                : (t.classList.remove("_spoller-init"),
                  l(t, !1),
                  t.removeEventListener("click", r));
          });
        }
        function l(t, e = !0) {
          const o = t.querySelectorAll("[data-spoller]");
          o.length > 0 &&
            o.forEach((t) => {
              e
                ? (t.removeAttribute("tabindex"),
                  t.classList.contains("_spoller-active") ||
                    (t.nextElementSibling.hidden = !0))
                : (t.setAttribute("tabindex", "-1"),
                  (t.nextElementSibling.hidden = !1));
            });
        }
        function r(t) {
          const n = t.target;
          if (n.closest("[data-spoller]")) {
            const s = n.closest("[data-spoller]"),
              i = s.closest("[data-spollers]"),
              l = !!i.hasAttribute("data-one-spoller");
            i.querySelectorAll("._slide").length ||
              (l && !s.classList.contains("_spoller-active") && c(i),
              s.classList.toggle("_spoller-active"),
              ((t, n = 500) => {
                t.hidden ? o(t, n) : e(t, n);
              })(s.nextElementSibling, 500)),
              t.preventDefault();
          }
        }
        function c(t) {
          const o = t.querySelector("[data-spoller]._spoller-active");
          o &&
            (o.classList.remove("_spoller-active"),
            e(o.nextElementSibling, 500));
        }
        s &&
          s.length &&
          s.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              i(t.itemsArray, t.matchMedia);
            }),
              i(t.itemsArray, t.matchMedia);
          });
      }
    })(),
    (function () {
      function t(t) {
        if ("click" === t.type) {
          const e = t.target;
          if (e.closest("[data-goto]")) {
            const o = e.closest("[data-goto]"),
              n = o.dataset.goto ? o.dataset.goto : "",
              s = !!o.hasAttribute("data-goto-header"),
              i = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            c(n, s, i), t.preventDefault();
          }
        } else if ("watcherCallback" === t.type && t.detail) {
          const e = t.detail.entry,
            o = e.target;
          if ("navigator" === o.dataset.watch) {
            const t = o.id,
              n =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${t}"]`));
            e.isIntersecting
              ? n && n.classList.add("_navigator-active")
              : n && n.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", t),
        document.addEventListener("watcherCallback", t);
    })(),
    (function () {
      d = !0;
      const t = document.querySelector("header.header"),
        e = t.hasAttribute("data-scroll-show"),
        o = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        n = t.dataset.scroll ? t.dataset.scroll : 1;
      let s,
        i = 0;
      document.addEventListener("windowScroll", function (l) {
        const r = window.scrollY;
        clearTimeout(s),
          r >= n
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              e &&
                (r > i
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (s = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, o))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              e &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (i = r <= 0 ? 0 : r);
      });
    })(),
    (d = !0),
    (function () {
      const t = document.querySelectorAll("[data-sticky]");
      t.length &&
        t.forEach((t) => {
          let e = {
            top: t.dataset.stickyTop ? parseInt(t.dataset.stickyTop) : 0,
            bottom: t.dataset.stickyBottom
              ? parseInt(t.dataset.stickyBottom)
              : 0,
            header: t.hasAttribute("data-sticky-header")
              ? document.querySelector("header.header").offsetHeight
              : 0,
          };
          !(function (t, e) {
            const o = t.querySelector("[data-sticky-item]"),
              n = e.header + e.top,
              s = o.getBoundingClientRect().top + scrollY - n;
            document.addEventListener("windowScroll", function (i) {
              const l =
                t.offsetHeight +
                t.getBoundingClientRect().top +
                scrollY -
                (n + o.offsetHeight + e.bottom);
              let r = {
                position: "relative",
                bottom: "auto",
                top: "0px",
                left: "0px",
                width: "auto",
              };
              n + e.bottom + o.offsetHeight < window.innerHeight &&
                (scrollY >= s && scrollY <= l
                  ? ((r.position = "fixed"),
                    (r.bottom = "auto"),
                    (r.top = `${n}px`),
                    (r.left = `${o.getBoundingClientRect().left}px`),
                    (r.width = `${o.offsetWidth}px`))
                  : scrollY >= l &&
                    ((r.position = "absolute"),
                    (r.bottom = `${e.bottom}px`),
                    (r.top = "auto"),
                    (r.left = "0px"),
                    (r.width = `${o.offsetWidth}px`))),
                (function (t, e) {
                  t.style.cssText = `position:${e.position};bottom:${e.bottom};top:${e.top};left:${e.left};width:${e.width};`;
                })(o, r);
            });
          })(t, e);
        });
    })(),
    u(),
    h(),
    p(),
    f();
})();
