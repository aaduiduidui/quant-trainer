const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../data/problems.js'),'utf8'),context);
const problems = context.window.QUANT_DATA.chapters.flatMap(ch=>ch.topics.flatMap(tp=>tp.problems));
const egg = problems.find(p=>p.id==='5.3:generalized-egg-drop');
const tournament = problems.find(p=>p.id==='4.3:tournament-meeting-round');

function choose(n,k) {
  let value=1;
  for(let j=1;j<=k;j++) value=value*(n-j+1)/j;
  return Math.round(value);
}
function capacity(t,n) {
  let sum=0;
  for(let i=0;i<=Math.min(t,n);i++) sum+=choose(t,i);
  return sum;
}
function drops(n,h) {
  let t=0;
  while(capacity(t,n)<h) t++;
  return t;
}
const memo=new Map();
function minimax(candidates,balls) {
  if(candidates===1) return 0;
  if(balls===0) return Infinity;
  const key=candidates+':'+balls;
  if(memo.has(key)) return memo.get(key);
  let result=Infinity;
  for(let left=1;left<candidates;left++) {
    result=Math.min(result,1+Math.max(minimax(left,balls-1),minimax(candidates-left,balls)));
  }
  memo.set(key,result);
  return result;
}

test('user-provided problems are separate, bilingual verified entries with related families',()=>{
  assert(egg && tournament);
  for(const p of [egg,tournament]) {
    assert.equal(p.reviewStatus,'verified');
    assert.equal(p.difficulty,'hard');
    assert.equal(p.sources[0].type,'user');
    assert(p.verification.length && p.rubric.length && p.translations.zh.solution);
  }
  assert.equal(egg.familyId,'2.5:glass-balls-egg-drop');
  assert.equal(tournament.familyId,'4.2:chess-tournament');
});

test('generalized egg-drop answer uses H candidates and matches exhaustive minimax decisions',()=>{
  for(const solution of [egg.solution,egg.translations.zh.solution]) {
    assert(solution.includes('\\sum_{i=0}^{\\min(n,t)}\\binom{t}{i}\\ge H'));
    assert(solution.includes('H-1'));
  }
  assert.equal(drops(1,1),0);
  assert.equal(drops(1,10),9);
  assert.equal(drops(2,7),3);
  assert.equal(drops(2,100),14);
  for(let h=1;h<=40;h++) for(let n=1;n<=6;n++) assert.equal(drops(n,h),minimax(h,n));
});

test('proposed adaptive egg-drop split identifies every threshold within its budget',()=>{
  for(let h=1;h<=40;h++) for(let n=1;n<=6;n++) for(let x=1;x<=h;x++) {
    let lower=1,upper=h,balls=n,budget=drops(n,h);
    while(lower<upper) {
      assert(balls>0 && budget>0);
      const floor=Math.min(upper-1,lower+capacity(budget-1,balls-1)-1);
      if(floor>=x) {upper=floor;balls--;}
      else lower=floor+1;
      budget--;
      assert(upper-lower+1<=capacity(budget,balls));
    }
    assert.equal(lower,x);
  }
});

test('tournament closed form matches an independent tagged-pair survival recurrence including byes',()=>{
  for(const solution of [tournament.solution,tournament.translations.zh.solution]) {
    assert(solution.includes('2-\\frac{s_2(n-1)}{n-1}'));
    assert(solution.includes('P(A)'));
  }
  for(let n=2;n<=1024;n++) {
    let m=n,reach=1,meeting=0,weighted=0,round=1;
    while(m>1) {
      const paired=m%2 ? 1/m : 1/(m-1);
      // Both remain alive without meeting: include a tagged bye for odd m.
      const bothAdvance=m%2 ? (m+1)/(4*m) : (m-2)/(4*(m-1));
      meeting+=reach*paired;
      weighted+=round*reach*paired;
      reach*=bothAdvance;
      m=Math.ceil(m/2);
      round++;
    }
    const ones=(n-1).toString(2).replaceAll('0','').length;
    assert(Math.abs(meeting-2/n)<1e-12,`meeting n=${n}`);
    assert(Math.abs(weighted/meeting-(2-ones/(n-1)))<1e-12,`mean n=${n}`);
  }
});
