/* Daily selection is independent of study progress and never marks an answer. */
(function () {
  const KEY = "qt_daily_v1";
  function localDate(date = new Date()) {
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
  }
  function createPicker(ids, storage, now = () => new Date(), random = Math.random) {
    const pool = [...new Set(ids)];
    let state;
    try { state = JSON.parse(storage.getItem(KEY)); } catch (_) {}
    function choose(change = false) {
      const date = localDate(now());
      if (!state || state.date !== date || !pool.includes(state.id)) {
        let hash = 0;
        for (const char of date) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
        const candidates = pool.filter(id => id !== state?.id);
        const available = candidates.length ? candidates : pool;
        const id = available.length ? available[hash % available.length] : null;
        state = { date, id, seen: id ? [id] : [] };
      } else if (change && pool.length > 1) {
        const seen = new Set(Array.isArray(state.seen) ? state.seen.filter(id => pool.includes(id)) : []);
        seen.add(state.id);
        let available = pool.filter(id => !seen.has(id));
        if (!available.length) {
          available = pool.filter(id => id !== state.id);
          seen.clear();
        }
        const id = available[Math.min(available.length - 1, Math.max(0, Math.floor(random() * available.length)))];
        state = { date, id, seen: [...seen, id] };
      }
      try { storage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
      return { date: state.date, id: state.id };
    }
    return { choose };
  }
  window.DailyProblem = { localDate, createPicker };
})();
