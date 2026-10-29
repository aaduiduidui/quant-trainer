const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'js/shortcuts.js'), 'utf8');
const plain = value => JSON.parse(JSON.stringify(value));
const key = (code, patch = {}) => ({code, ctrl:false, alt:false, shift:false, meta:false, ...patch});
function shortcuts(saved) {
  const context = {window:{}, localStorage:{getItem:()=>saved}};
  vm.runInNewContext(script, context);
  return context.window.Shortcuts;
}

test('only previous and next are available, defaulting to the arrow keys', () => {
  const prefs = plain(shortcuts(null).loadBindings());
  assert.deepEqual(prefs, {previousProblem:key('ArrowLeft'), nextProblem:key('ArrowRight')});
});

test('custom combinations and cleared bindings survive loading; extra actions are ignored', () => {
  const saved = {previousProblem:key('KeyJ', {alt:true}), nextProblem:null, nextChapter:key('KeyK')};
  assert.deepEqual(plain(shortcuts(JSON.stringify(saved)).loadBindings()), {
    previousProblem:key('KeyJ', {alt:true}), nextProblem:null
  });
});

test('malformed storage and invalid key data recover without breaking navigation', () => {
  for (const saved of ['{bad', 'null', '42', '[]']) {
    assert.equal(shortcuts(saved).loadBindings().nextProblem.code, 'ArrowRight');
  }
  const invalid = {previousProblem:{code:'KeyJ', ctrl:'false'}, nextProblem:{code:'<script>'}};
  assert.equal(shortcuts(JSON.stringify(invalid)).loadBindings().previousProblem.code, 'ArrowLeft');
  assert.equal(shortcuts(JSON.stringify(invalid)).loadBindings().nextProblem.code, 'ArrowRight');
});

test('duplicate or browser-reserved stored combinations cannot silently shadow actions', () => {
  const duplicate = {previousProblem:key('KeyJ'), nextProblem:key('KeyJ')};
  assert.equal(shortcuts(JSON.stringify(duplicate)).loadBindings().nextProblem, null);
  const reserved = {nextProblem:key('KeyR', {ctrl:true})};
  assert.equal(shortcuts(JSON.stringify(reserved)).loadBindings().nextProblem, null);
});

test('key matching distinguishes exact modifiers and ignores unsupported modifier-only keys', () => {
  const api = shortcuts(null);
  const event = {code:'KeyK', ctrlKey:false, altKey:true, shiftKey:true, metaKey:false};
  assert.deepEqual(plain(api.fromEvent(event)), key('KeyK', {alt:true,shift:true}));
  assert.equal(api.fromEvent({code:'ShiftLeft',shiftKey:true}), null);
  assert.equal(api.label(api.fromEvent(event)), 'Alt + Shift + K');
});

test('question order crosses sections and chapters in both directions without wrapping', () => {
  const context = {window:{}};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'data/problems.js'), 'utf8'), context);
  const entries = context.window.QUANT_DATA.chapters.flatMap(ch => ch.topics.flatMap(tp =>
    tp.problems.map(p => ({id:p.id, chapter:ch.num, topic:tp.id}))));
  const api = shortcuts(null);
  for (const field of ['topic','chapter']) {
    const i = entries.findIndex((entry,index) => index && entry[field] !== entries[index-1][field]);
    assert(i > 0);
    assert.equal(api.adjacent(entries,entries[i-1].id,1).id,entries[i].id);
    assert.equal(api.adjacent(entries,entries[i].id,-1).id,entries[i-1].id);
  }
  assert.equal(api.adjacent(entries,entries[0].id,-1),null);
  assert.equal(api.adjacent(entries,entries.at(-1).id,1),null);
  assert.equal(api.adjacent(entries,'unknown',1),null);
  assert.equal(api.adjacent(entries,entries[0].id,0),null);
});

test('global search combinations are reserved and legacy navigation bindings are disabled',()=>{
  const api=shortcuts(null);
  assert.equal(api.isSearchBinding(key('KeyK',{meta:true})),true);
  assert.equal(api.isSearchBinding(key('KeyK',{ctrl:true})),true);
  assert.equal(api.isSearchBinding(key('KeyK',{alt:true})),false);
  assert.equal(api.isSearchBinding(key('KeyK',{meta:true,shift:true})),false);
  const saved={previousProblem:key('KeyJ',{alt:true}),nextProblem:key('KeyK',{meta:true})};
  const restored=shortcuts(JSON.stringify(saved)).loadBindings();
  assert.equal(restored.nextProblem,null);
  assert.equal(restored.previousProblem.code,'KeyJ');
});
