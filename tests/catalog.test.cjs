const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data/problems.js'), 'utf8'), context, { timeout: 1000 });
const data = JSON.parse(JSON.stringify(context.window.QUANT_DATA));
const flat = data.chapters.flatMap(ch => ch.topics.flatMap(tp => tp.problems.map(p => ({...p, topicId: tp.id}))));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const local = id => flat.find(p => p.sources.some(s => s.type === 'local' && s.locator === id));

test('all entries have content, unique route IDs and valid metadata', () => {
  const ids = new Set();
  for (const p of flat) {
    assert.equal(p.id, p.topicId + ':' + slug(p.title));
    assert(!ids.has(p.id), `duplicate ID: ${p.id}`); ids.add(p.id);
    for (const field of ['title','statement','solution']) assert(p[field].trim(), `${p.id}: ${field}`);
    assert(!p.placeholder);
    assert(['math','programming'].includes(p.kind));
    assert(['verified','pending'].includes(p.reviewStatus));
    assert(['easy','medium','hard'].includes(p.difficulty));
    assert(!('localIds' in p));
    assert(p.familyId && Array.isArray(p.tags) && p.sources.length);
    if (p.reviewStatus === 'verified') assert(p.verification.length && p.rubric.length);
  }
});

test('accepted local sources remain traceable without legacy route aliases', () => {
  const aliases = flat.flatMap(p => p.sources.filter(s => s.type === 'local').map(s => s.locator));
  assert.equal(aliases.length, data.meta.localIntegration.accepted);
  assert.equal(new Set(aliases).size, aliases.length);
  for (const id of ['q0084','q0203','q0152','q0224','q0180','q0182','q0211','q0212','q0213']) assert(!aliases.includes(id));
});

test('same general fair-coin construction retains both source citations', () => {
  assert.equal(local('q0007').id, local('q0107').id);
  assert.equal(local('q0107').reviewStatus, 'verified');
  assert(local('q0107').followups.some(s => s.includes('0.7')));
});

test('candy drawing events and bridge-time variants are not falsely merged', () => {
  const upstreamCandy = flat.find(p => p.title === 'Candies in a Jar');
  assert.notEqual(upstreamCandy.id, local('q0111').id);
  assert.match(upstreamCandy.statement, /remain/);
  assert.match(local('q0111').statement, /already been drawn/);
  const upstreamBridge = flat.find(p => p.title === 'River Crossing');
  assert.notEqual(upstreamBridge.id, local('q0068').id);
  assert.match(upstreamBridge.statement, /5 min/);
  assert.match(local('q0068').statement, /8/);
});

test('corrected local explanations and Markdown code survive conversion', () => {
  assert.equal(local('q0071').reviewStatus, 'verified');
  assert.match(local('q0071').solution, /1\/14/);
  assert.match(local('q0148').solution, /71/);
  assert.match(local('q0223').solution, /4\/9/);
  for (const id of ['q0064','q0089','q0144','q0219']) assert.match(local(id).solution, /^```python\n/);
});

test('only concrete mathematical tasks are retained from finance chapter', () => {
  const chapter = data.chapters.find(ch => ch.num === 6);
  const expected = new Set(['Put-Call Parity','Black-Scholes-Merton Differential Equation','Delta','Binary Options','Exchange Options','Portfolio Optimization']);
  const found = chapter.topics.flatMap(t => t.problems);
  assert.equal(found.length, expected.size);
  for (const p of found) assert(expected.has(p.title));
  assert(!flat.some(p => p.title === 'Dynamic Programming (DP) Algorithm'));
});

function storageContext() {
  const map = new Map();
  const ctx = { window: {}, console, localStorage: {
    getItem: k => map.get(k) || null, setItem: (k,v) => map.set(k,v), removeItem: k => map.delete(k)
  }};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'js/storage.js'), 'utf8'), ctx);
  return ctx.window.Store;
}

test('upstream browser store persists notes, stars and self-marked progress', () => {
  const store = storageContext();
  const id = flat[0].id;
  store.set(id, {status:'attempting',starred:true,notes:'测试笔记\n第二行'});
  assert.equal(store.get(id).status, 'attempting');
  assert.equal(store.get(id).starred, true);
  const saved = store.exportData();
  store.reset(); assert.equal(store.get(id).status, 'unseen');
  store.importData(saved);
  assert.equal(store.get(id).notes, '测试笔记\n第二行');
  assert.equal(store.getStreak(), 1);
});

// Actual Git paths in source references may contain Chinese; question content must not.
test('question content uses short English titles and complete difficulty tags', () => {
  const check = (value, label) => {
    if (typeof value === 'string') assert(!/[\u3400-\u9fff]/u.test(value), label);
    else if (Array.isArray(value)) value.forEach(v => check(v, label));
    else if (value && typeof value === 'object') Object.entries(value).forEach(([k,v]) => {
      if (k !== 'sources' && k !== 'translations') check(v, `${label}.${k}`);
    });
  };
  check(data, 'catalog');
  for (const p of flat) {
    assert(!/^Q\d+\b/i.test(p.title), p.title);
    assert(p.title.length <= 65 && p.title.split(/\s+/).length <= 7, p.title);
  }
});

test('every question has complete Chinese display content with shared code and identity', () => {
  for (const p of flat) {
    const zh = p.translations.zh;
    assert.deepEqual(Object.keys(zh).sort(), ['title','statement','hint','solution','keyIdea','tags'].sort());
    for (const field of ['title','statement','hint','solution','keyIdea']) {
      assert.equal(typeof zh[field], 'string', `${p.id}: ${field}`);
      assert.equal(Boolean(zh[field]), Boolean(p[field]), `${p.id}: ${field} coverage`);
      if (p[field]) assert(/[\u3400-\u9fff]/u.test(zh[field]), `${p.id}: ${field} untranslated`);
    }
    assert.equal(zh.tags.length, p.tags.length);
    const code = s => s.match(/```[^\n]*\n[\s\S]*?```/g) || [];
    assert.deepEqual(code(zh.solution), code(p.solution), `${p.id}: shared solution code`);
    assert.equal(p.id, p.topicId + ':' + slug(p.title));
    assert(!('id' in zh) && !('difficulty' in zh));
  }
  assert.match(local('q0133').translations.zh.solution, /50\/199/);
  assert.match(local('q0223').translations.zh.solution, /4\/9/);
});

test('chapter and topic Chinese titles and introductions have complete coverage', () => {
  for (const ch of data.chapters) {
    assert(/[\u3400-\u9fff]/u.test(ch.translations.zh.title));
    assert(/[\u3400-\u9fff]/u.test(ch.translations.zh.blurb));
    for (const tp of ch.topics) {
      assert(/[\u3400-\u9fff]/u.test(tp.translations.zh.title), tp.id);
      assert.equal(Boolean(tp.translations.zh.note), Boolean(tp.note), tp.id);
      if (tp.note) assert(/[\u3400-\u9fff]/u.test(tp.translations.zh.note), tp.id);
    }
  }
});
