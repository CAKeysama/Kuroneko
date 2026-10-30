/* Kuro Neko · live store status, hours, copy address, mobile action bar.
   Edit STORE below when the hours change. Times are São Paulo local time. */

(function () {
  "use strict";

  var STORE = {
    timeZone: "America/Sao_Paulo",
    // 0 = domingo … 6 = sábado. Each day lists [open, close] pairs.
    hours: {
      0: [],
      1: [["09:00", "13:30"], ["14:30", "18:00"]],
      2: [["09:00", "13:30"], ["14:30", "18:00"]],
      3: [["09:00", "13:30"], ["14:30", "18:00"]],
      4: [["09:00", "13:30"], ["14:30", "18:00"]],
      5: [["09:00", "13:30"], ["14:30", "18:00"]],
      6: [["09:00", "13:30"], ["14:30", "18:00"]]
    },
    soonMinutes: 30
  };

  var DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  var WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  var PLAQUE = {
    open: { kanji: "営業中", word: "Aberta" },
    break: { kanji: "準備中", word: "Almoço" },
    closed: { kanji: "準備中", word: "Fechada" },
    dayoff: { kanji: "定休日", word: "Fechada" }
  };

  function toMinutes(hhmm) {
    var p = hhmm.split(":");
    return Number(p[0]) * 60 + Number(p[1]);
  }

  function spoken(min) {
    var h = Math.floor(min / 60);
    var m = min % 60;
    return h + "h" + (m ? String(m).padStart(2, "0") : "");
  }

  /* The current day and minute in São Paulo, whatever the device clock zone.
     ?agora=2026-11-02T13:45 pins a moment (read as São Paulo time) for demos. */
  function nowInStore() {
    var pinned = new URLSearchParams(location.search).get("agora");
    if (pinned) {
      var m = pinned.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
      if (m) {
        var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
        return { day: d.getUTCDay(), minute: +m[4] * 60 + +m[5] };
      }
    }
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: STORE.timeZone,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(new Date());
    var get = function (type) {
      for (var i = 0; i < parts.length; i++) if (parts[i].type === type) return parts[i].value;
      return "";
    };
    return { day: WEEKDAYS[get("weekday")], minute: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function nextOpening(day, minute) {
    for (var offset = 0; offset < 8; offset++) {
      var d = (day + offset) % 7;
      var slots = STORE.hours[d] || [];
      for (var i = 0; i < slots.length; i++) {
        var start = toMinutes(slots[i][0]);
        if (offset > 0 || start > minute) return { offset: offset, day: d, minute: start };
      }
    }
    return null;
  }

  function statusAt(now) {
    var slots = STORE.hours[now.day] || [];
    for (var i = 0; i < slots.length; i++) {
      var start = toMinutes(slots[i][0]);
      var end = toMinutes(slots[i][1]);
      if (now.minute >= start && now.minute < end) {
        var left = end - now.minute;
        var lunch = i < slots.length - 1;
        return {
          state: "open",
          main: "Aberta agora",
          detail: left <= STORE.soonMinutes
            ? "· fecha em " + left + " min"
            : "· fecha às " + spoken(end) + (lunch ? " para o almoço" : "")
        };
      }
    }

    var next = nextOpening(now.day, now.minute);
    if (!next) return { state: "closed", main: "Fechada agora", detail: "" };

    var wait = next.offset === 0 ? next.minute - now.minute : Infinity;
    var when = next.offset === 0 ? "hoje" : next.offset === 1 ? "amanhã" : DAY_NAMES[next.day];
    var detail = wait <= STORE.soonMinutes
      ? "· abre em " + wait + " min"
      : "· abre " + when + " às " + spoken(next.minute);

    var startedToday = slots.length && now.minute >= toMinutes(slots[0][0]);
    if (next.offset === 0 && startedToday) {
      return { state: "break", main: "Fechada para o almoço", detail: "· volta às " + spoken(next.minute) };
    }
    if (!slots.length) return { state: "dayoff", main: "Fechada hoje", detail: detail };
    return { state: "closed", main: "Fechada agora", detail: detail };
  }

  /* ── Rendering ──────────────────────────────── */

  var lastState = null;

  function paintPlaque(el, state) {
    var face = PLAQUE[state];
    el.setAttribute("data-state", state === "dayoff" ? "closed" : state);
    var kanji = el.querySelector("[data-plaque-kanji]");
    var word = el.querySelector("[data-plaque-word]");
    if (kanji) kanji.textContent = face.kanji;
    if (word) word.textContent = face.word;
  }

  function animate(el, className, ms) {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
    setTimeout(function () { el.classList.remove(className); }, ms);
  }

  function render() {
    var s = statusAt(nowInStore());
    document.documentElement.setAttribute("data-store-state", s.state === "dayoff" ? "closed" : s.state);

    document.querySelectorAll("[data-status]").forEach(function (el) {
      var main = el.querySelector("[data-status-main]");
      var detail = el.querySelector("[data-status-detail]");
      if (main && main.textContent !== s.main) main.textContent = s.main;
      if (detail && detail.textContent !== s.detail) detail.textContent = s.detail;
    });

    document.querySelectorAll("[data-plaque]").forEach(function (el) {
      if (el.hasAttribute("data-plaque-fixed")) return;
      if (el.tagName === "A") el.setAttribute("aria-label", s.main + ". Ver horário de funcionamento");
      if (lastState === null) {
        paintPlaque(el, s.state);
        animate(el, "is-swinging", 1400);
      } else if (lastState !== s.state) {
        animate(el, "is-flipping", 560);
        setTimeout(function () { paintPlaque(el, s.state); }, 260);
      }
    });

    var sleeping = s.state !== "open";
    document.querySelectorAll("[data-cat]").forEach(function (use) {
      use.setAttribute("href", sleeping ? "#kn-cat-sleep" : "#kn-cat");
    });

    var today = nowInStore().day;
    document.querySelectorAll("[data-hours] [data-day]").forEach(function (row) {
      var isToday = Number(row.getAttribute("data-day")) === today;
      row.classList.toggle("is-today", isToday);
      if (isToday) row.setAttribute("aria-current", "date");
      else row.removeAttribute("aria-current");
    });

    lastState = s.state;
  }

  /* ── Copy address ───────────────────────────── */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(area);
      ok ? resolve() : reject(new Error("copy failed"));
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var live = document.querySelector("[data-copy-status]");
    btn.addEventListener("click", function () {
      copyText(btn.getAttribute("data-copy")).then(function () {
        btn.classList.add("is-done");
        if (live) live.textContent = "Endereço copiado.";
        setTimeout(function () {
          btn.classList.remove("is-done");
          if (live) live.textContent = "";
        }, 2600);
      }, function () {
        if (live) live.textContent = "Não deu para copiar. O endereço é Rua Cesário Motta, 631, Centro, Matão‑SP.";
      });
    });
  });

  /* ── Mobile action bar: appears once the hero buttons scroll away ── */

  var bar = document.querySelector("[data-actionbar]");
  var heroActions = document.querySelector(".kn-hero__actions");
  var footer = document.querySelector(".kn-foot");
  if (bar && heroActions && "IntersectionObserver" in window) {
    var heroVisible = true;
    var footVisible = false;
    var sync = function () { bar.classList.toggle("is-visible", !heroVisible && !footVisible); };
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      sync();
    }).observe(heroActions);
    if (footer) {
      new IntersectionObserver(function (entries) {
        footVisible = entries[0].isIntersecting;
        sync();
      }).observe(footer);
    }
  }

  render();
  setInterval(render, 30000);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) render();
  });

  window.KuroNeko = { statusAt: statusAt, paintPlaque: paintPlaque, hours: STORE.hours };
})();
