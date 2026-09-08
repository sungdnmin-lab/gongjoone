
(function(){
  'use strict';
  const normalTitle=document.title;
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  const normalTheme=themeMeta?.getAttribute('content')||'#2f86e8';

  function isExamView(){return document.body.classList.contains('view-exam')}
  function syncOfficeModeUi(){
    const active=document.body.classList.contains('office-mode');
    const visible=active&&isExamView();
    const button=document.getElementById('officeModeToggle');
    const chrome=document.getElementById('officeModeChrome');
    const timerPrefix=document.getElementById('timerPrefix');
    const gradeButton=document.getElementById('gradeCurrentButton');
    if(button){
      button.textContent=active?'▦ 일반 화면':'▦ 업무 화면';
      button.setAttribute('aria-pressed',String(active));
      button.title=active?'기존 문제풀이 화면으로 돌아가기':'엑셀 형태의 업무 화면으로 전환';
    }
    if(chrome)chrome.setAttribute('aria-hidden',String(!visible));
    if(timerPrefix)timerPrefix.textContent=active?'작업 시간':'전체 시간';
    if(gradeButton)gradeButton.textContent=active?'검토 실행':'현재 문제 채점';
    document.title=visible?'냉방부하_검토자료.xlsx - Excel':normalTitle;
    if(themeMeta)themeMeta.setAttribute('content',visible?'#217346':normalTheme);
    requestAnimationFrame(function(){
      if(typeof window.renderQuestionNavigator==='function')window.renderQuestionNavigator();
      window.dispatchEvent(new Event('resize'));
    });
  }

  window.toggleOfficeMode=function(force){
    const active=typeof force==='boolean'?force:!document.body.classList.contains('office-mode');
    document.body.classList.toggle('office-mode',active);
    try{sessionStorage.setItem('gongjoOfficeMode',active?'1':'0')}catch(_){ }
    syncOfficeModeUi();
  };

  const baseShowSiteView=window.showSiteView;
  if(typeof baseShowSiteView==='function'){
    window.showSiteView=function(){
      const result=baseShowSiteView.apply(this,arguments);
      syncOfficeModeUi();
      return result;
    };
  }

  let saved=false;
  try{saved=sessionStorage.getItem('gongjoOfficeMode')==='1'}catch(_){ }
  document.body.classList.toggle('office-mode',saved);
  syncOfficeModeUi();
})();
