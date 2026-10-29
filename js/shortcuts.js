/* Configurable navigation keys. Preferences are separate from study progress. */
(function () {
  const STORAGE_KEY = "qt_shortcuts_v1";
  const ACTIONS = ["previousProblem", "nextProblem"];
  const binding = code => ({ code, ctrl: false, alt: false, shift: false, meta: false });
  const DEFAULTS = {
    previousProblem: binding("ArrowLeft"), nextProblem: binding("ArrowRight")
  };
  const signature = b => b ? [b.code, b.ctrl, b.alt, b.shift, b.meta].join(":") : "";
  const validCode = code => typeof code === "string" && /^(Key[A-Z]|Digit[0-9]|Arrow(Left|Right|Up|Down)|F([1-9]|1[0-2])|Space|Enter|Backspace|Delete|Insert|Home|End|PageUp|PageDown|Comma|Period|Slash|Backslash|BracketLeft|BracketRight|Semicolon|Quote|Backquote|Minus|Equal|Numpad([0-9]|Add|Subtract|Multiply|Divide|Decimal|Enter))$/.test(code);

  function normalize(value) {
    if (!value || !validCode(value.code)) return null;
    if (["ctrl", "alt", "shift", "meta"].some(key => value[key] !== undefined && typeof value[key] !== "boolean")) return null;
    return { code: value.code, ctrl: !!value.ctrl, alt: !!value.alt, shift: !!value.shift, meta: !!value.meta };
  }
  function reserved(b) {
    return isSearchBinding(b) || ["F5", "F11", "F12"].includes(b.code) || ((b.ctrl || b.meta) &&
      ["KeyR", "KeyW", "KeyT", "KeyN", "KeyL", "KeyQ", "Tab"].includes(b.code));
  }
  function isSearchBinding(b) {
    return !!b && b.code === "KeyK" && (b.ctrl || b.meta) && !b.alt && !b.shift;
  }
  function legacySearchConflict() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return ACTIONS.some(action => isSearchBinding(normalize(saved?.[action])));
    } catch (_) { return false; }
  }
  function loadBindings() {
    let saved;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (_) {}
    const result = {};
    const used = new Set();
    for (const action of ACTIONS) {
      const value = saved && Object.prototype.hasOwnProperty.call(saved, action) ? saved[action] : DEFAULTS[action];
      let b = value === null ? null : normalize(value) || { ...DEFAULTS[action] };
      if (b && (reserved(b) || used.has(signature(b)))) b = null;
      if (b) used.add(signature(b));
      result[action] = b;
    }
    return result;
  }
  function fromEvent(event) {
    return normalize({ code: event.code, ctrl: event.ctrlKey, alt: event.altKey, shift: event.shiftKey, meta: event.metaKey });
  }
  function editable(target) {
    return !!target?.closest?.("input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox'], [role='combobox'], [role='slider'], audio, video");
  }
  function adjacent(entries, id, step) {
    const index = entries.findIndex(entry => entry.id === id);
    return index < 0 || ![-1, 1].includes(step) ? null : entries[index + step] || null;
  }
  function label(b) {
    if (!b) return "";
    const names = { ArrowLeft: "←", ArrowRight: "→", ArrowUp: "↑", ArrowDown: "↓", Space: "Space", BracketLeft: "[", BracketRight: "]", Comma: ",", Period: ".", Slash: "/", Backslash: "\\", Semicolon: ";", Quote: "'", Backquote: "`", Minus: "-", Equal: "=" };
    const key = names[b.code] || b.code.replace(/^(Key|Digit)/, "");
    return [b.ctrl && "Ctrl", b.alt && "Alt", b.shift && "Shift", b.meta && "⌘", key].filter(Boolean).join(" + ");
  }

  function init(navigate) {
    const t = (key, vars) => window.I18n.t(key, vars);
    const dialog = document.getElementById("shortcut-settings");
    const trigger = document.getElementById("btn-shortcuts");
    const rows = document.getElementById("shortcut-rows");
    const status = document.getElementById("shortcut-status");
    let bindings = loadBindings();
    let recording = null;
    let message = "shortcuts.storage";
    let messageVars;

    function render() {
      trigger.textContent = t("shortcuts.button");
      trigger.title = t("shortcuts.title");
      dialog.querySelectorAll("[data-shortcut-text]").forEach(el => { el.textContent = t(el.dataset.shortcutText); });
      rows.replaceChildren();
      for (const action of ACTIONS) {
        const row = document.createElement("div");
        row.className = "shortcut-row";
        const title = document.createElement("span");
        title.id = "shortcut-label-" + action;
        title.textContent = t("shortcuts." + action);
        const capture = document.createElement("button");
        capture.type = "button";
        capture.className = "shortcut-capture" + (recording === action ? " recording" : "");
        capture.dataset.action = action;
        capture.setAttribute("aria-labelledby", title.id + " shortcut-key-" + action);
        capture.setAttribute("aria-pressed", String(recording === action));
        capture.id = "shortcut-key-" + action;
        capture.textContent = recording === action ? t("shortcuts.pressKey") : label(bindings[action]) || t("shortcuts.unassigned");
        capture.addEventListener("click", () => {
          recording = action;
          message = "shortcuts.recording";
          render();
          rows.querySelector(`[data-action="${action}"]`).focus();
        });
        const clear = document.createElement("button");
        clear.type = "button";
        clear.className = "shortcut-clear tool-btn";
        clear.textContent = t("shortcuts.clear");
        clear.setAttribute("aria-label", t("shortcuts.clearAction", { action: title.textContent }));
        clear.disabled = !bindings[action];
        clear.addEventListener("click", () => {
          bindings[action] = null; recording = null; save();
          rows.querySelector(`[data-action="${action}"]`).focus();
        });
        row.append(title, capture, clear);
        rows.append(row);
      }
      status.textContent = t(message, messageVars);
      status.classList.toggle("shortcut-error", ["shortcuts.conflict", "shortcuts.reserved", "shortcuts.searchReserved", "shortcuts.searchConflict", "shortcuts.saveFailed"].includes(message));
      if (recording) rows.querySelector(`[data-action="${recording}"]`).focus();
    }
    function save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bindings));
        message = "shortcuts.saved";
      } catch (_) { message = "shortcuts.saveFailed"; }
      render();
    }
    function finishRecording() {
      const action = recording;
      recording = null;
      render();
      if (action) rows.querySelector(`[data-action="${action}"]`).focus();
    }
    trigger.addEventListener("click", () => {
      recording = null;
      message = legacySearchConflict() ? "shortcuts.searchConflict" : "shortcuts.storage";
      render();
      dialog.showModal();
    });
    dialog.querySelector("[data-shortcut-close]").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => { recording = null; trigger.focus(); });
    dialog.querySelector("[data-shortcut-reset]").addEventListener("click", () => {
      bindings = Object.fromEntries(ACTIONS.map(action => [action, { ...DEFAULTS[action] }]));
      recording = null;
      save();
      dialog.querySelector("[data-shortcut-reset]").focus();
    });
    window.I18n.onChange(render);
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229 || event.repeat) return;
      if (dialog.open) {
        if (!recording) return;
        if (event.key === "Tab") { message = "shortcuts.storage"; finishRecording(); return; }
        if (event.key === "Escape") {
          event.preventDefault(); event.stopPropagation();
          message = "shortcuts.storage"; finishRecording(); return;
        }
        const b = fromEvent(event);
        if (!b) return;
        event.preventDefault(); event.stopPropagation();
        const conflict = ACTIONS.find(action => action !== recording && signature(bindings[action]) === signature(b));
        if (reserved(b)) { message = isSearchBinding(b) ? "shortcuts.searchReserved" : "shortcuts.reserved"; render(); return; }
        if (conflict) {
          message = "shortcuts.conflict";
          messageVars = { action: t("shortcuts." + conflict) };
          render(); return;
        }
        const action = recording;
        bindings[action] = b;
        recording = null;
        save();
        rows.querySelector(`[data-action="${action}"]`).focus();
        return;
      }
      if (event.defaultPrevented || editable(event.target) || event.target?.closest?.("dialog[open], [role='dialog']")) return;
      if (window.getSelection()?.isCollapsed === false) return;
      if (["Space", "Enter"].includes(event.code) && event.target?.closest?.("button, a, summary")) return;
      const b = fromEvent(event);
      if (!b) return;
      const action = ACTIONS.find(action => bindings[action] && signature(bindings[action]) === signature(b));
      if (action && navigate(action)) event.preventDefault();
    });
    render();
  }

  window.Shortcuts = { init, loadBindings, fromEvent, editable, label, adjacent, isSearchBinding };
})();
