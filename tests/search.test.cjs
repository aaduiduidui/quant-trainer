const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={window:{},localStorage:{getItem:()=>null}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/problems.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(path.join(root,'js/search.js'),'utf8'),context);
const api=context.window.ProblemSearch;
const index=api.buildIndex(context.window.QUANT_DATA);
const ids=rows=>Array.from(rows,row=>row.id);

test('all real questions enter the search index with canonical route IDs',()=>{
  assert.equal(index.length,241);
  assert.equal(new Set(ids(index)).size,241);
  assert(index.find(e=>e.id==='5.3:generalized-egg-drop'));
});

test('English and Chinese titles, section names, tags and statement phrases are searchable',()=>{
  assert.equal(api.search(index,'Generalized Egg Drop')[0].id,'5.3:generalized-egg-drop');
  assert.equal(api.search(index,'玻璃球推广')[0].id,'5.3:generalized-egg-drop');
  assert(api.search(index,'淘汰赛 相遇').some(e=>e.id==='4.3:tournament-meeting-round'));
  assert(api.search(index,'binomial coefficients').some(e=>e.id==='5.3:generalized-egg-drop'));
  assert(api.search(index,'first breaking floor').some(e=>e.id==='5.3:generalized-egg-drop'));
  assert(api.search(index,'准确确定').some(e=>e.id==='5.3:generalized-egg-drop'));
  assert(api.search(index,'问题简化').every(e=>e.topicId==='2.1'));
  assert(api.search(index,'Problem Simplification').every(e=>e.topicId==='2.1'));
  assert(api.search(index,'ItosMadeUpWord').length===0);
  assert.equal(api.search(index,'').length,0);
  assert(api.search(index,'probability').length<=20);
});

function fixture(title,statement,extra={}) {
  return {title,statement,difficulty:'medium',tags:[],...extra,translations:{zh:{title:'示例标题',statement:'示例题干',tags:[]}}};
}
function bank(problems) {return {chapters:[{num:1,title:'Example chapter',topics:[{id:'1.1',title:'Example topic',problems}]}]};}

test('exact and partial title hits outrank tags and body hits; ties keep catalog order',()=>{
  const ranked=api.buildIndex(bank([
    fixture('Body Match','A coin appears here.'),
    fixture('Tagged Match','Other statement.',{tags:['coin']}),
    fixture('Coin Game','Statement.'),fixture('Coin','Statement.'),fixture('Another Coin','Statement.')
  ]));
  assert.deepEqual(ids(api.search(ranked,'coin')),['1.1:coin','1.1:coin-game','1.1:another-coin','1.1:tagged-match','1.1:body-match']);
  assert.equal(api.search(ranked,'coin absent').length,0);
  assert.deepEqual(ids(api.search(ranked,'statement')),['1.1:tagged-match','1.1:coin-game','1.1:coin','1.1:another-coin']);
});

test('answer, hint, key idea, rubric, sources and verification never enter the index',()=>{
  const secret=api.buildIndex(bank([fixture('Question','Visible prompt.',{
    solution:'solutionsecret',hint:'hintsecret',keyIdea:'ideasecret',rubric:['rubricsecret'],
    sources:[{reference:'sourcesecret'}],verification:['verificationsecret']
  })]));
  for(const word of ['solutionsecret','hintsecret','ideasecret','rubricsecret','sourcesecret','verificationsecret']){
    assert.equal(api.search(secret,word).length,0,word);
    assert(!JSON.stringify(secret).includes(word),word);
  }
});

test('normalization supports case, full-width Latin text, accents and regex metacharacters literally',()=>{
  assert.equal(api.search(index,'ＧＥＮＥＲＡＬＩＺＥＤ ＥＧＧ ＤＲＯＰ')[0].id,'5.3:generalized-egg-drop');
  assert(api.search(index,"ito's").some(e=>e.id==='5.4:it-s-lemma'));
  assert.equal(api.search(index,'[').length<=20,true);
  assert.equal(api.search(index,'.* definitelyabsent').length,0);
});

test('snippets use question text, show context for the matching language, and remain bounded',()=>{
  const entry=index.find(e=>e.id==='5.3:generalized-egg-drop');
  assert(api.snippet(entry,'first breaking floor','zh').includes('first breaking floor'));
  assert(api.snippet(entry,'临界楼层','en').includes('临界楼层'));
  assert(api.snippet(entry,'','zh').length<=152);
});

test('recent questions tolerate invalid storage and remove stale or duplicate IDs',()=>{
  const id=index[0].id;
  for(const saved of ['invalid','null','{}','42']){
    context.localStorage.getItem=()=>saved;
    assert.equal(api.readRecent(index).length,0);
  }
  context.localStorage.getItem=()=>JSON.stringify([id,id,'missing',9,...ids(index).slice(1,10)]);
  assert.deepEqual(Array.from(api.readRecent(index)),ids(index).slice(0,5));
  context.localStorage.getItem=()=>{throw Error('denied');};
  assert.equal(api.readRecent(index).length,0);
});
