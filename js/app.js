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
        let s = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = o ? `${o}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = s + "px"),
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
    s = !0,
    n = (t = 500) => {
      document.documentElement.classList.contains("lock") ? i(t) : l(t);
    },
    i = (t = 500) => {
      let e = document.querySelector("body");
      if (s) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (s = !1),
          setTimeout(function () {
            s = !0;
          }, t);
      }
    },
    l = (t = 500) => {
      let e = document.querySelector("body");
      if (s) {
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
          (s = !1),
          setTimeout(function () {
            s = !0;
          }, t);
      }
    };
  function a(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  function r(t, e) {
    const o = Array.from(t).filter(function (t, o, s) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (o.length) {
      const t = [];
      o.forEach((o) => {
        const s = {},
          n = o.dataset[e].split(",");
        (s.value = n[0]),
          (s.type = n[1] ? n[1].trim() : "max"),
          (s.item = o),
          t.push(s);
      });
      let s = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      s = (function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      })(s);
      const n = [];
      if (s.length)
        return (
          s.forEach((e) => {
            const o = e.split(","),
              s = o[1],
              i = o[2],
              l = window.matchMedia(o[0]),
              a = t.filter(function (t) {
                if (t.value === s && t.type === i) return !0;
              });
            n.push({ itemsArray: a, matchMedia: l });
          }),
          n
        );
    }
  }
  document.addEventListener("click", function (t) {
    t.target.classList.contains("header") &&
      (document.documentElement.classList.remove("menu-open"),
      i(),
      document.documentElement.classList.remove("menu-open"));
  });
  const c = (t, e) => {
      const o = document.querySelector(t);
      o &&
        (document.documentElement.classList.add("lock"),
        document.body.classList.add("bg-show-popap"),
        o.classList.add("show"),
        o.addEventListener("click", function (t) {
          let s = t.target;
          s.closest(".popup__close") &&
            (document.documentElement.classList.remove("lock"),
            document.body.classList.remove("bg-show-popap"),
            o.classList.remove("show"),
            (e.isModalShow = !1)),
            s.closest(".popup__wrapper") ||
              (document.documentElement.classList.remove("lock"),
              document.body.classList.remove("bg-show-popap"),
              o.classList.remove("show"),
              (e.isModalShow = !1));
        }));
    },
    d = (t) => {
      let e = { isModalShow: !1 },
        o = t;
      history.pushState({}, "", location.href),
        history.pushState({}, "", location.href),
        window.addEventListener("popstate", function () {
          e.isModalShow
            ? (location.href = o)
            : (c("#popup", e), (e.isModalShow = !0));
        });
    };
  class u {
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
        (this._out.minutesTitle = u.declensionNum(e, [
          "минута",
          "минуты",
          "минут",
        ])),
        (this._out.secondsTitle = u.declensionNum(o, [
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
  const m = () => {
      const t = document.querySelector(".timer .timer__minutes"),
        e = document.querySelector(".timer .timer__seconds"),
        o = new Date(Date.now() + 600999);
      t &&
        new u(
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
    h = () => {
      let t = document.querySelectorAll("input[data-tel-input]"),
        e = function (t) {
          return t.value.replace(/\D/g, "");
        },
        o = function (t) {
          let o = t.target,
            s = e(o),
            n = t.clipboardData || window.clipboardData;
          if (n) {
            let t = n.getData("Text");
            if (/\D/g.test(t)) return void (o.value = s);
          }
        },
        s = function (t) {
          let o = t.target,
            s = e(o),
            n = o.selectionStart,
            i = "";
          if (!s) return (o.value = "");
          if (o.value.length == n) {
            if (["5", "8", "9"].indexOf(s[0]) > -1) {
              "9" == s[0] && (s = "5" + s);
              let t = (s[0], "+506");
              (i = o.value = t + " "),
                s.length > 1 && (i += "(" + s.substring(1, 4)),
                s.length >= 5 && (i += ") " + s.substring(4, 7)),
                s.length >= 8 && (i += "-" + s.substring(7, 9)),
                s.length >= 10 && (i += "-" + s.substring(9, 11));
            } else i = "+" + s.substring(0, 16);
            o.value = i;
          } else t.data && /\D/g.test(t.data) && (o.value = s);
        },
        n = function (t) {
          let e = t.target.value.replace(/\D/g, "");
          8 == t.keyCode && 1 == e.length && (t.target.value = "");
        };
      for (let e of t)
        e.addEventListener("keydown", n),
          e.addEventListener("input", s, !1),
          e.addEventListener("paste", o, !1);
    },
    p = () => {
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
            let s = new FormData(t),
              n = {};
            s.forEach((t, e) => {
              n[e] = t;
            }),
              console.log(n),
              e("http://localhost:3000/posts", n);
          });
        });
      }
    };
  let f = (t, e = !1, o = 500, s = 0) => {
      const n = document.querySelector(t);
      if (n) {
        let l = "",
          r = 0;
        e &&
          ((l = "header.header"), (r = document.querySelector(l).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: o,
          header: l,
          offset: s,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", c);
        else {
          let t = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: r ? t - r : t, behavior: "smooth" });
        }
        a(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    },
    g = !1;
  setTimeout(() => {
    if (g) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (window.FLS = !1),
    t.any() && document.documentElement.classList.add("touch"),
    (function () {
      let t = document.querySelector(".icon-menu"),
        e = document.querySelector(".header-burger__close");
      t &&
        t.addEventListener("click", function (t) {
          s && (n(), document.documentElement.classList.add("menu-open"));
        }),
        e &&
          e.addEventListener("click", function (t) {
            s && (n(), document.documentElement.classList.remove("menu-open"));
          });
    })(),
    (function () {
      const t = document.querySelectorAll("[data-spollers]");
      if (t.length > 0) {
        const s = Array.from(t).filter(function (t, e, o) {
          return !t.dataset.spollers.split(",")[0];
        });
        s.length && i(s);
        let n = r(t, "spollers");
        function i(t, e = !1) {
          t.forEach((t) => {
            (t = e ? t.item : t),
              e.matches || !e
                ? (t.classList.add("_spoller-init"),
                  l(t),
                  t.addEventListener("click", a))
                : (t.classList.remove("_spoller-init"),
                  l(t, !1),
                  t.removeEventListener("click", a));
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
        function a(t) {
          const s = t.target;
          if (s.closest("[data-spoller]")) {
            const n = s.closest("[data-spoller]"),
              i = n.closest("[data-spollers]"),
              l = !!i.hasAttribute("data-one-spoller");
            i.querySelectorAll("._slide").length ||
              (l && !n.classList.contains("_spoller-active") && c(i),
              n.classList.toggle("_spoller-active"),
              ((t, s = 500) => {
                t.hidden ? o(t, s) : e(t, s);
              })(n.nextElementSibling, 500)),
              t.preventDefault();
          }
        }
        function c(t) {
          const o = t.querySelector("[data-spoller]._spoller-active");
          o &&
            (o.classList.remove("_spoller-active"),
            e(o.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((t) => {
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
              s = o.dataset.goto ? o.dataset.goto : "",
              n = !!o.hasAttribute("data-goto-header"),
              i = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            f(s, n, i), t.preventDefault();
          }
        } else if ("watcherCallback" === t.type && t.detail) {
          const e = t.detail.entry,
            o = e.target;
          if ("navigator" === o.dataset.watch) {
            const t = o.id,
              s =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${t}"]`));
            e.isIntersecting
              ? s && s.classList.add("_navigator-active")
              : s && s.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", t),
        document.addEventListener("watcherCallback", t);
    })(),
    (function () {
      g = !0;
      const t = document.querySelector("header.header"),
        e = t.hasAttribute("data-scroll-show"),
        o = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        s = t.dataset.scroll ? t.dataset.scroll : 1;
      let n,
        i = 0;
      document.addEventListener("windowScroll", function (l) {
        const a = window.scrollY;
        clearTimeout(n),
          a >= s
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              e &&
                (a > i
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, o))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              e &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (i = a <= 0 ? 0 : a);
      });
    })(),
    (g = !0),
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
              s = e.header + e.top,
              n = o.getBoundingClientRect().top + scrollY - s;
            document.addEventListener("windowScroll", function (i) {
              const l =
                t.offsetHeight +
                t.getBoundingClientRect().top +
                scrollY -
                (s + o.offsetHeight + e.bottom);
              let a = {
                position: "relative",
                bottom: "auto",
                top: "0px",
                left: "0px",
                width: "auto",
              };
              s + e.bottom + o.offsetHeight < window.innerHeight &&
                (scrollY >= n && scrollY <= l
                  ? ((a.position = "fixed"),
                    (a.bottom = "auto"),
                    (a.top = `${s}px`),
                    (a.left = `${o.getBoundingClientRect().left}px`),
                    (a.width = `${o.offsetWidth}px`))
                  : scrollY >= l &&
                    ((a.position = "absolute"),
                    (a.bottom = `${e.bottom}px`),
                    (a.top = "auto"),
                    (a.left = "0px"),
                    (a.width = `${o.offsetWidth}px`))),
                (function (t, e) {
                  t.style.cssText = `position:${e.position};bottom:${e.bottom};top:${e.top};left:${e.left};width:${e.width};`;
                })(o, a);
            });
          })(t, e);
        });
    })(),
    d("https://ya.ru"),
    m(),
    h(),
    p();
})();
