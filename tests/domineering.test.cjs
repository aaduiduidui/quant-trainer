const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../data/problems.js'),'utf8'),context);
const question = context.window.QUANT_DATA.chapters.flatMap(c=>c.topics.flatMap(t=>t.problems)).find(p=>p.id==='4.1:domineering');

// Independent row-mask solver: generate moves from adjacent free cells rather
// than precomputing domino masks on the flattened board used in the solution.
function solver(n) {
  const memo=new Map();
  function win(top,bottom,verticalTurn) {
    const key=top+':'+bottom+':'+verticalTurn;
    if(memo.has(key)) return memo.get(key);
    let won=false;
    if(verticalTurn) {
      for(let c=0;c<n && !won;c++) {
        const bit=1<<c;
        if(!((top|bottom)&bit)) won=!win(top|bit,bottom|bit,false);
      }
    } else {
      for(let c=0;c<n-1 && !won;c++) {
        const pair=3<<c;
        if(!(top&pair)) won=!win(top|pair,bottom,true);
        if(!won && !(bottom&pair)) won=!win(top,bottom|pair,true);
      }
    }
    memo.set(key,won);
    return won;
  }
  return win;
}

test('exact independent search confirms all finite bases including the width-13 second-player win',()=>{
  for(let n=1;n<=13;n++) {
    const win=solver(n);
    assert.equal(win(0,0,false),![1,5,9,13].includes(n),'horizontal starts, n='+n);
    assert.equal(win(0,0,true),![4,8,12,13].includes(n),'vertical starts, n='+n);
  }
});

test('the explicit width-4 opening and all stated responses leave vertical without a win',()=>{
  const win=solver(4);
  assert.equal(win(0b0110,0,true),false); // A opens at top 2–3.
  assert.equal(win(0b0111,0b1101,true),false); // B column 1, A bottom 3–4.
  assert.equal(win(0b1110,0b1011,true),false); // B column 4, A bottom 1–2.
  assert.equal(win(0b1110,0b0010,true),false); // B starts column 2, A top 3–4.
  assert.equal(win(0b0111,0b0100,true),false); // Symmetric response to column 3.
});

test('both published solutions contain the same executable finite certificate and current review metadata',()=>{
  assert.equal(question.reviewStatus,'verified');
  assert(question.rubric.length>=4 && question.verification.length>=2);
  const code=solution=>solution.split('```python\n')[1].split('```')[0];
  assert.equal(code(question.solution),code(question.translations.zh.solution));
  assert(question.hint && question.keyIdea && question.translations.zh.hint && question.translations.zh.keyIdea);
});
