/* Local, bilingual question search. Only public question fields enter the index. */
(function () {
  const RECENT_KEY = "qt_search_recent_v1";
  const normalize = text => String(text || "").normalize("NFKC").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  const tokens = query => [...new Set(normalize(query).trim().slice(0, 200).split(/\s+/).filter(Boolean))];
  function plainText(text) {
    return String(text || "").replace(/^```[^\n]*$/gm, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]*>/g, " ").replace(/[`*$#]/g, "").replace(/\s+/g, " ").trim();
  }
  function buildIndex(data) {
    const index = [];
    for (const chapter of data.chapters) for (const topic of chapter.topics) for (const p of topic.problems) {
      if (p.placeholder) continue;
      const versions = {};
      for (const lang of ["en", "zh"]) {
        const question = lang === "zh" ? { ...p, ...p.translations?.zh } : p;
        const ch = lang === "zh" ? { ...chapter, ...chapter.translations?.zh } : chapter;
        const tp = lang === "zh" ? { ...topic, ...topic.translations?.zh } : topic;
        versions[lang] = {
          title: question.title, tags: [...(question.tags || [])], statement: plainText(question.statement),
          chapter: ch.title, topic: tp.title
        };
      }
      const title = Object.values(versions).map(v => normalize(v.title));
      index.push({
        id: topic.id + ":" + p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
        difficulty: p.difficulty, chapterNum: chapter.num, topicId: topic.id, versions,
        fields: {
          title, tags: Object.values(versions).map(v => normalize(v.tags.join(" "))),
          section: Object.values(versions).map(v => normalize(topic.id + " " + v.chapter + " " + v.topic)),
          statement: Object.values(versions).map(v => normalize(v.statement))
        }
      });
    }
    return index;
  }
  function search(index, query, limit = 20) {
    const words = tokens(query);
    if (!words.length) return [];
    const phrase = normalize(query).trim();
    const weights = { title: 120, tags: 70, section: 40, statement: 15 };
    return index.map((entry, order) => {
      let score = 0;
      for (const word of words) {
        const weight = Object.entries(weights).find(([field]) => entry.fields[field].some(text => text.includes(word)))?.[1];
        if (!weight) return null;
        score += weight;
      }
      score += entry.fields.title.some(t => t === phrase) ? 1000
        : entry.fields.title.some(t => t.startsWith(phrase)) ? 500
        : entry.fields.title.some(t => t.includes(phrase)) ? 250 : 0;
      return { entry, order, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score || a.order - b.order)
      .slice(0, limit).map(item => item.entry);
  }
  function snippet(entry, query, lang) {
    const words = tokens(query);
    const preferred = entry.versions[lang] || entry.versions.en;
    const other = entry.versions[lang === "zh" ? "en" : "zh"];
    const version = [preferred, other].find(v => words.some(word => normalize(v.statement).includes(word))) || preferred;
    const text = version.statement;
    const positions = words.map(word => normalize(text).indexOf(word)).filter(i => i >= 0);
    const start = positions.length ? Math.max(0, Math.min(...positions) - 32) : 0;
    return (start ? "…" : "") + text.slice(start, start + 150) + (text.length > start + 150 ? "…" : "");
  }
  function readRecent(index) {
    try {
      const saved = JSON.parse(localStorage.getItem(RECENT_KEY));
      if (!Array.isArray(saved)) return [];
      const ids = new Set(index.map(entry => entry.id));
      return [...new Set(saved.filter(id => typeof id === "string" && ids.has(id)))].slice(0, 5);
    } catch (_) { return []; }
  }
  function highlight(element, text, query) {
    const words = String(query).trim().split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);
    if (!words.length) { element.textContent = text; return; }
    const pattern = new RegExp(words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "giu");
    let end = 0;
    for (const match of text.matchAll(pattern)) {
      element.append(document.createTextNode(text.slice(end, match.index)));
      const mark = document.createElement("mark");
      mark.textContent = match[0];
      element.append(mark);
      end = match.index + match[0].length;
    }
    element.append(document.createTextNode(text.slice(end)));
  }

  function init(data, navigate) {
    const t = (key, vars) => window.I18n.t(key, vars);
    const index = buildIndex(data);
    const byId = new Map(index.map(entry => [entry.id, entry]));
    const dialog = document.getElementById("problem-search");
    const trigger = document.getElementById("btn-search");
    const input = document.getElementById("search-query");
    const list = document.getElementById("search-results");
    const status = document.getElementById("search-result-status");
    const empty = document.getElementById("search-empty");
    const clear = document.getElementById("search-clear");
    let recent = readRecent(index);
    let matches = [];
    let active = -1;
    let composing = false;
    let returnFocus;

    function setActive(position, scroll = false) {
      active = matches.length ? Math.max(0, Math.min(position, matches.length - 1)) : -1;
      list.querySelectorAll("[role='option']").forEach((el, i) => el.setAttribute("aria-selected", String(i === active)));
      if (active < 0) input.removeAttribute("aria-activedescendant");
      else {
        input.setAttribute("aria-activedescendant", "search-result-" + active);
        if (scroll) document.getElementById("search-result-" + active).scrollIntoView({ block: "nearest" });
      }
    }
    function select(position) {
      const entry = matches[position];
      if (!entry || composing) return;
      navigate(entry.id);
      dialog.close();
    }
    function render() {
      const query = input.value.trim();
      const lang = window.I18n.lang;
      matches = query ? search(index, query) : recent.map(id => byId.get(id)).filter(Boolean);
      list.replaceChildren();
      matches.forEach((entry, i) => {
        const version = entry.versions[lang] || entry.versions.en;
        const row = document.createElement("a");
        row.id = "search-result-" + i;
        row.className = "search-result";
        row.href = "#/problem/" + encodeURIComponent(entry.id);
        row.setAttribute("role", "option");
        row.setAttribute("tabindex", "-1");
        const heading = document.createElement("div");
        heading.className = "search-result-heading";
        const title = document.createElement("span");
        title.className = "search-result-title";
        highlight(title, version.title, query);
        const badge = document.createElement("span");
        badge.className = "badge d-" + entry.difficulty;
        badge.textContent = t("diff." + entry.difficulty);
        heading.append(title, badge);
        const path = document.createElement("div");
        path.className = "search-result-path";
        highlight(path, t("search.path", { chapter: entry.chapterNum, chapterTitle: version.chapter, topic: entry.topicId, title: version.topic }), query);
        const other = entry.versions[lang === "zh" ? "en" : "zh"];
        if (query && tokens(query).some(word => normalize(other.title).includes(word))) {
          const alias = document.createElement("span");
          alias.className = "search-result-alias";
          highlight(alias, other.title, query);
          path.append(" · ", alias);
        }
        const excerpt = document.createElement("div");
        excerpt.className = "search-result-snippet";
        highlight(excerpt, snippet(entry, query, lang), query);
        row.append(heading, path, excerpt);
        const matchedTags = [...new Set([...version.tags, ...other.tags])].filter(tag => tokens(query).some(word => normalize(tag).includes(word)));
        if (matchedTags.length) {
          const tags = document.createElement("div");
          tags.className = "search-result-tags";
          highlight(tags, matchedTags.join(" · "), query);
          row.append(tags);
        }
        row.addEventListener("pointermove", () => setActive(i));
        row.addEventListener("mousedown", event => { if (!event.metaKey && !event.ctrlKey) event.preventDefault(); });
        row.addEventListener("click", event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault(); select(i);
        });
        list.append(row);
      });
      status.textContent = query ? t("search.count", { count: matches.length }) : t("search.recent");
      empty.hidden = matches.length > 0;
      empty.textContent = t(query ? "search.noResults" : "search.start");
      clear.hidden = !input.value;
      setActive(0);
      list.scrollTop = 0;
    }
    function syncLanguage() {
      dialog.querySelectorAll("[data-search-text]").forEach(el => { el.textContent = t(el.dataset.searchText); });
      trigger.querySelector(".search-trigger-label").textContent = t("search.button");
      trigger.setAttribute("aria-label", t("search.open"));
      trigger.title = t("search.open") + " (⌘K)";
      input.placeholder = t("search.placeholder");
      input.setAttribute("aria-label", t("search.placeholder"));
      list.setAttribute("aria-label", t("search.results"));
      clear.setAttribute("aria-label", t("search.clear"));
      dialog.querySelector("[data-search-close]").setAttribute("aria-label", t("search.close"));
      render();
    }
    function open() {
      if (document.querySelector("dialog[open]")) return;
      returnFocus = document.activeElement;
      input.value = "";
      composing = false;
      render();
      dialog.showModal();
      input.setAttribute("aria-expanded", "true");
      input.focus();
    }
    trigger.addEventListener("click", open);
    clear.addEventListener("click", () => { input.value = ""; render(); input.focus(); });
    dialog.querySelector("[data-search-close]").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      composing = false;
      input.setAttribute("aria-expanded", "false");
      (returnFocus?.isConnected ? returnFocus : trigger).focus();
    });
    input.addEventListener("input", () => { if (!composing) render(); });
    input.addEventListener("compositionstart", () => { composing = true; });
    input.addEventListener("compositionend", () => { composing = false; render(); });
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229 || composing) return;
      if (window.Shortcuts.isSearchBinding(window.Shortcuts.fromEvent(event))) {
        if (document.querySelector("dialog[open]") && !dialog.open) return;
        event.preventDefault();
        event.stopPropagation();
        if (!event.repeat) { if (dialog.open) dialog.close(); else open(); }
        return;
      }
      if (!dialog.open || event.target !== input) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault(); event.stopPropagation();
        setActive(active + (event.key === "ArrowDown" ? 1 : -1), true);
      } else if (event.key === "Enter") {
        event.preventDefault(); event.stopPropagation();
        if (!event.repeat) select(active);
      }
    }, true);
    window.I18n.onChange(syncLanguage);
    syncLanguage();
    return {
      record(id) {
        if (!byId.has(id)) return;
        recent = [id, ...recent.filter(saved => saved !== id)].slice(0, 5);
        try { localStorage.setItem(RECENT_KEY, JSON.stringify(recent)); } catch (_) {}
      }
    };
  }

  window.ProblemSearch = { buildIndex, search, snippet, readRecent, init };
})();
