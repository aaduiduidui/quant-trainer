const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/daily.js'),'utf8'),context);
const {createPicker, localDate} = context.window.DailyProblem;
function storage(saved) {
  return {value:saved, getItem(){return this.value;}, setItem(key,value){this.value=value;}};
}
const at = day => new Date(2026,9,day,12);

test('daily selection survives reload and changes on the next local calendar day',()=>{
  const saved=storage(null);
  let date=at(29);
  const picker=createPicker(['a','b','c'],saved,()=>date);
  const first=picker.choose();
  assert.equal(first.date,'2026-10-29');
  assert.equal(picker.choose().id,first.id);
  assert.equal(createPicker(['a','b','c'],saved,()=>date).choose().id,first.id);
  date=at(30);
  assert.notEqual(picker.choose().id,first.id);
  assert.equal(localDate(new Date(2026,0,2,0,1)),'2026-01-02');
});

test('swapping avoids repeats until the pool is exhausted and persists the replacement',()=>{
  const saved=storage(null);
  const picker=createPicker(['a','b','c'],saved,()=>at(29),()=>0);
  const selected=[picker.choose().id,picker.choose(true).id,picker.choose(true).id];
  assert.equal(new Set(selected).size,3);
  const next=picker.choose(true).id;
  assert.notEqual(next,selected[2]);
  assert.equal(createPicker(['a','b','c'],saved,()=>at(29)).choose().id,next);
});

test('invalid storage, removed questions and unavailable storage recover safely',()=>{
  for(const initial of ['invalid','null','42','{}',JSON.stringify({date:'2026-10-29',id:'removed'})]){
    assert.equal(createPicker(['only'],storage(initial),()=>at(29)).choose().id,'only');
  }
  const denied={getItem(){throw Error('denied');},setItem(){throw Error('denied');}};
  const picker=createPicker(['a','b'],denied,()=>at(29),()=>0);
  const first=picker.choose().id;
  assert.notEqual(picker.choose(true).id,first);
  assert.equal(createPicker([],denied,()=>at(29)).choose().id,null);
  const single=createPicker(['only'],denied,()=>at(29));
  assert.equal(single.choose(true).id,'only');
});
