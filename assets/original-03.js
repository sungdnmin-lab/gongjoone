
(function(){
  function alignExamSidePanels(){
    const topBar=document.querySelector('#examTop .top');
    if(!topBar)return;
    const alignedTop=Math.max(8,Math.round(topBar.getBoundingClientRect().bottom));
    document.documentElement.style.setProperty('--exam-tools-top',alignedTop+'px');
  }

  function questionStatus(i){
    if(!details[i]) return {kind:'ungraded',mark:'△',label:'아직 채점하지 않음'};
    const items=details[i]||[];
    if(items.length && items.every(x=>x.status==='correct')){
      return {kind:'correct',mark:'○',label:'정답'};
    }
    if(items.some(x=>x.status==='partial'||x.status==='review')){
      return {kind:'partial',mark:'△',label:'부분정답 또는 직접 확인 필요'};
    }
    return {kind:'wrong',mark:'×',label:'오답 있음'};
  }

  window.renderQuestionNavigator=function(){
    alignExamSidePanels();
    const navigator=document.getElementById('questionNavigator');
    const list=document.getElementById('questionNavList');
    if(!list || !navigator || typeof Q==='undefined') return;
    const isQuickPractice=isQuickSessionTitle(currentSessionTitle);
    navigator.style.display=isQuickPractice?'none':'';
    document.body.classList.toggle('quick-practice-session',isQuickPractice);
    if(isQuickPractice){
      list.innerHTML='';
      const tools=document.getElementById('floatingAnnotTools');
      if(tools)tools.style.height='';
      return;
    }
    list.innerHTML=Q.map((q,i)=>{
      const s=questionStatus(i);
      const current=i===idx?' current':'';
      const aria=i===idx?' aria-current="page"':'';
      return `<button type="button" class="${s.kind}${current}" onclick="jumpToQuestion(${i})" title="${q.id}번 · ${s.label}"${aria}><span>${q.id}번</span><span class="nav-status" aria-label="${s.label}">${s.mark}</span></button>`;
    }).join('');
    requestAnimationFrame(()=>{
      alignExamSidePanels();
      const tools=document.getElementById('floatingAnnotTools');
      if(tools&&navigator.offsetHeight)tools.style.height=navigator.offsetHeight+'px';
    });
  };

  window.jumpToQuestion=function(i){
    if(i===idx){ window.scrollTo({top:0,behavior:'smooth'}); return; }
    save();
    idx=i;
    render();
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const baseRender=window.render;
  window.render=function(){
    const result=baseRender.apply(this,arguments);
    renderQuestionNavigator();
    return result;
  };

  const baseGrade=window.gradeCurrent;
  window.gradeCurrent=function(){
    const result=baseGrade.apply(this,arguments);
    renderQuestionNavigator();
    return result;
  };

  window.addEventListener('resize',alignExamSidePanels);
  window.addEventListener('scroll',alignExamSidePanels,{passive:true});

  renderQuestionNavigator();
})();
