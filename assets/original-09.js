
(function(){
  'use strict';
  const FUNDAMENTAL_AUDIO_DATA='assets/audio/lesson-01.mp3';
  const cues=[
    {at:0,cue:'intro'},
    {at:53.8,cue:'outdoor'},
    {at:68.3,cue:'return'},
    {at:77.7,cue:'ahu'},
    {at:100.3,cue:'supply'},
    {at:108.8,cue:'room'},
    {at:123.4,cue:'return'},
    {at:125.7,cue:'exhaust'},
    {at:135.5,cue:'done'}
  ];
  const audio=new Audio(FUNDAMENTAL_AUDIO_DATA);
  audio.preload='none';
  let active=false;
  let paused=false;

  function diagram(){return document.getElementById('fundamentalAirflow');}
  function teacher(){return document.getElementById('fundamentalAiTeacher');}
  function stage(){return document.getElementById('fundamentalAiStage');}
  function pauseButton(){return document.getElementById('fundamentalAiPause');}
  function setCue(cue){const node=diagram();if(node)node.dataset.cue=cue;}
  function setSpeaking(on){const node=teacher();if(node)node.classList.toggle('speaking',on);}
  function setPauseText(){const button=pauseButton();if(button)button.textContent=paused?'▶ 계속 재생':'❚❚ 일시정지';}
  function syncCue(){let current=cues[0];for(const item of cues){if(audio.currentTime>=item.at)current=item;else break;}setCue(current.cue);}
  function launch(){if(typeof window.stopAirTermsAi==='function')window.stopAirTermsAi();if(typeof window.stopCycleFlowAi==='function')window.stopCycleFlowAi();if(typeof window.stopRefrigerantAi==='function')window.stopRefrigerantAi();if(typeof window.stopEnthalpyAi==='function')window.stopEnthalpyAi();if(typeof window.stopHumidityAi==='function')window.stopHumidityAi();if(typeof window.stopSensibleLatentAi==='function')window.stopSensibleLatentAi();if(typeof window.stopCopAi==='function')window.stopCopAi();if(typeof window.stopSuperheatSubcoolAi==='function')window.stopSuperheatSubcoolAi();
    if(typeof window.stopRefrigerationAi==='function')window.stopRefrigerationAi();
    if(typeof window.stopCapacityAi==='function')window.stopCapacityAi();
    if(typeof window.stopTonAi==='function')window.stopTonAi();
    if(typeof window.stopPrincipleAi==='function')window.stopPrincipleAi();if(typeof window.stopComponentsAi==='function')window.stopComponentsAi();if(typeof window.stopEvapRelationAi==='function')window.stopEvapRelationAi();if(typeof window.stopCondRelationAi==='function')window.stopCondRelationAi();
    audio.pause();audio.currentTime=0;active=true;paused=false;setCue('intro');
    const node=stage();if(node){node.classList.add('open');node.setAttribute('aria-hidden','false');}
    setPauseText();audio.play().catch(function(){active=false;setSpeaking(false);});
  }
  function pauseResume(){
    if(!active)return;
    if(paused){audio.play().catch(function(){});paused=false;setSpeaking(true);}else{audio.pause();paused=true;setSpeaking(false);}
    setPauseText();
  }
  function finish(){
    audio.pause();audio.currentTime=0;active=false;paused=false;setSpeaking(false);setCue('intro');
    const node=stage();if(node){node.classList.remove('open');node.setAttribute('aria-hidden','true');}setPauseText();
  }
  function createStage(){
    if(document.getElementById('fundamentalAiStage'))return;
    const teacherData=window.GONGJO_AI_TEACHER_DATA||'';
    const html='<section class="fundamental-ai-stage" id="fundamentalAiStage" aria-label="AI 음성 설명" aria-hidden="true"><div class="fundamental-ai-teacher-column"><div class="fundamental-ai-teacher" id="fundamentalAiTeacher"><img src="'+teacherData+'" alt="30대 초반의 가상 여성 강사"></div><div class="fundamental-ai-controls"><button type="button" id="fundamentalAiPause">❚❚ 일시정지</button><button type="button" class="end" id="fundamentalAiEnd">■ 종료</button></div></div></section>';
    document.body.insertAdjacentHTML('beforeend',html);
    document.getElementById('fundamentalAiPause').addEventListener('click',pauseResume);
    document.getElementById('fundamentalAiEnd').addEventListener('click',finish);
  }
  audio.addEventListener('timeupdate',syncCue);
  audio.addEventListener('play',function(){if(active&&!paused)setSpeaking(true);});
  audio.addEventListener('pause',function(){setSpeaking(false);});
  audio.addEventListener('ended',finish);
  createStage();
  document.getElementById('fundamentalAiLaunch')?.addEventListener('click',launch);

  const originalLearning=window.showLearningTopic;
  if(typeof originalLearning==='function')window.showLearningTopic=function(event,topic){if(topic!=='fundamentals')finish();return originalLearning.apply(this,arguments);};
  const originalView=window.showSiteView;
  if(typeof originalView==='function')window.showSiteView=function(event,view){if(view!=='learning')finish();return originalView.apply(this,arguments);};
  window.stopFundamentalAi=finish;
  window.addEventListener('beforeunload',finish);
})();
