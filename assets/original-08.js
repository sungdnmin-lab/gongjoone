
(function(){
  'use strict';

  const AUDIO_DATA='assets/media-ad09d04bff8de13200a6.wav';
  const TEACHER_DATA='assets/media-0dae7d876b0a9803c8da.png';
  window.GONGJO_AI_TEACHER_DATA=TEACHER_DATA;
  const TARGET_SOURCE_ID='냉동_Q001';
  const cues=[
    {at:0,key:'intro',caption:'문제의 조건을 확인하고 계산 순서를 잡아보겠습니다.',lines:[]},
    {at:8,key:'conditions',caption:'먼저 냉매 순환량과 세 상태점의 엔탈피를 확인합니다.',lines:['냉매 순환량 G = 4,800 kg/h','h₄ = 438, h₁ = 608, h₂ = 666 kJ/kg']},
    {at:20,key:'effect',caption:'냉동효과는 h₁에서 h₄를 빼서 구합니다.',lines:['냉동효과 qₑ = h₁ − h₄','qₑ = 608 − 438 = 170 kJ/kg']},
    {at:35,key:'work',caption:'압축일은 h₂에서 h₁을 빼서 구합니다.',lines:['압축일 w = h₂ − h₁','w = 666 − 608 = 58 kJ/kg']},
    {at:49,key:'cop',caption:'이론 성적계수는 냉동효과를 압축일로 나눕니다.',lines:['COP = qₑ ÷ w','COP = 170 ÷ 58 = 2.93']},
    {at:64,key:'capacity',caption:'냉매 순환량을 초 단위로 환산하여 냉동능력을 계산합니다.',lines:['Qₑ = G × qₑ ÷ 3,600','Qₑ = 4,800 × 170 ÷ 3,600','Qₑ = 226.67 kW']},
    {at:77,key:'done',caption:'풀이가 끝났습니다. COP는 2.93, 냉동능력은 226.67 킬로와트입니다.',lines:[]}
  ];
  let audio=null;
  let activeCue='';
  let lessonActive=false;

  const css=`
  .ai-video-launch-wrap{margin-top:12px}
  .ai-video-launch{display:inline-flex;align-items:center;gap:7px;padding:11px 17px;border:0;border-radius:10px;background:#1f75c9;color:#fff;font-family:inherit;font-weight:900;cursor:pointer;box-shadow:0 4px 12px rgba(31,117,201,.2)}
  .ai-video-stage{position:fixed;z-index:190;right:500px;bottom:22px;display:none;width:164px}
  .ai-video-stage.open{display:block}
  .ai-video-teacher-column{display:flex;flex-direction:column;align-items:center;gap:9px}
  .ai-video-teacher{position:relative;overflow:hidden;width:148px;height:148px;border:4px solid #fff;border-radius:50%;background:#dfe8ef;box-shadow:0 8px 26px rgba(24,68,111,.28)}
  .ai-video-teacher img{width:100%;height:100%;object-fit:cover;object-position:center 23%;display:block}
  .ai-video-teacher.speaking{box-shadow:0 0 0 4px rgba(40,127,215,.28),0 8px 26px rgba(24,68,111,.28)}
  .ai-video-controls{display:grid;grid-template-columns:1fr 1fr;gap:7px}.ai-video-controls button{padding:9px 5px;border:0;border-radius:9px;background:#1f75c9;color:#fff;font-family:inherit;font-size:12px;font-weight:900;cursor:pointer}.ai-video-controls .end{background:#657789}
  .ai-video-memo-line{margin:0 0 8px;padding:7px 9px;border-left:3px solid #2f7fca;border-radius:4px;background:#f3f8fd;color:#243e57}
  .ai-video-memo-line.current{border-left-color:#e14634;background:#fff4f1;font-weight:900}
  .refrig-diagram{position:relative}.ai-video-overlay{position:absolute!important;inset:0;width:100%!important;height:100%!important;pointer-events:none;overflow:visible}.ai-video-mark{opacity:0;transition:opacity .3s ease}.ai-video-overlay[data-cue='conditions'] .conditions,.ai-video-overlay[data-cue='effect'] .effect,.ai-video-overlay[data-cue='work'] .work,.ai-video-overlay[data-cue='cop'] .effect,.ai-video-overlay[data-cue='cop'] .work,.ai-video-overlay[data-cue='capacity'] .effect{opacity:1}.ai-video-ring{fill:rgba(255,235,59,.24);stroke:#e14634;stroke-width:4}.ai-video-arrow{fill:none;stroke:#e14634;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;marker-end:url(#ai-video-arrow)}.ai-video-formula{fill:#fff;stroke:#e14634;stroke-width:2}.ai-video-formula-text{fill:#c93525;font:700 17px Arial,sans-serif}
  @media(max-width:1380px){.ai-video-stage{right:435px}}
  @media(max-width:1050px){.ai-video-stage{right:14px;bottom:14px;width:140px}.ai-video-teacher{width:122px;height:122px}.ai-video-controls button{font-size:11px;padding:8px 4px}}
  `;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

  function isTarget(){return typeof Q!=='undefined'&&typeof idx!=='undefined'&&Q[idx]&&Q[idx].sourceId===TARGET_SOURCE_ID;}
  function formatTime(value){const s=Math.max(0,Math.floor(value||0));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
  function overlayHtml(){return `<svg class="ai-video-overlay" viewBox="0 0 600 250" aria-hidden="true" data-cue="intro"><defs><marker id="ai-video-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#e14634"/></marker></defs><g class="ai-video-mark conditions"><circle class="ai-video-ring" cx="155" cy="170" r="17"/><circle class="ai-video-ring" cx="402" cy="170" r="17"/><circle class="ai-video-ring" cx="470" cy="82" r="17"/></g><g class="ai-video-mark effect"><path class="ai-video-arrow" d="M180 155 Q275 128 378 155"/><rect class="ai-video-formula" x="219" y="108" rx="8" width="143" height="34"/><text class="ai-video-formula-text" x="235" y="131">qₑ = h₁ − h₄</text><circle class="ai-video-ring" cx="155" cy="170" r="17"/><circle class="ai-video-ring" cx="402" cy="170" r="17"/></g><g class="ai-video-mark work"><path class="ai-video-arrow" d="M417 153 Q438 117 457 96"/><rect class="ai-video-formula" x="420" y="132" rx="8" width="137" height="34"/><text class="ai-video-formula-text" x="435" y="155">w = h₂ − h₁</text><circle class="ai-video-ring" cx="402" cy="170" r="17"/><circle class="ai-video-ring" cx="470" cy="82" r="17"/></g></svg>`;}
  function lessonHtml(){return `<div class="ai-video-launch-wrap" id="aiVideoWrap"><button type="button" class="ai-video-launch" id="aiVideoLaunch">▶ AI 동영상 해설</button><section class="ai-video-stage" id="aiVideoStage" aria-label="AI 음성 자동 풀이" aria-hidden="true"><div class="ai-video-teacher-column"><div class="ai-video-teacher" id="aiVideoTeacher"><img src="${TEACHER_DATA}" alt="30대 초반의 가상 여성 강사"></div><div class="ai-video-controls"><button type="button" id="aiVideoPause">❚❚ 일시정지</button><button type="button" class="end" id="aiVideoEnd">■ 종료</button></div></div></section></div>`;}
  function buildAudio(){if(audio)return;audio=new Audio(AUDIO_DATA);audio.preload='auto';audio.addEventListener('timeupdate',sync);audio.addEventListener('loadedmetadata',sync);audio.addEventListener('play',updateButtons);audio.addEventListener('pause',updateButtons);audio.addEventListener('ended',updateButtons);}
  function currentCue(){let cue=cues[0];for(const item of cues){if(audio&&audio.currentTime>=item.at)cue=item;}return cue;}
  function clearLessonMemo(){const memo=document.getElementById('memo');if(memo)memo.innerHTML='';if(typeof state!=='undefined'&&typeof idx!=='undefined'&&state[idx])state[idx].memo='';if(typeof savedRange!=='undefined')savedRange=null;}
  function writeMemo(cue){const memo=document.getElementById('memo');if(!memo)return;const lines=[];for(const item of cues){if(item.at>cue.at)break;for(const line of item.lines)lines.push(line);}memo.innerHTML=lines.map((line,i)=>`<div class="ai-video-memo-line${i===lines.length-1?' current':''}">${line}</div>`).join('');memo.scrollTop=memo.scrollHeight;if(typeof state!=='undefined'&&typeof idx!=='undefined'&&state[idx])state[idx].memo=memo.innerHTML;}
  function applyCue(force){if(!audio)return;const cue=currentCue();if(!force&&activeCue===cue.key)return;activeCue=cue.key;const overlay=document.querySelector('.ai-video-overlay');if(overlay)overlay.dataset.cue=cue.key;writeMemo(cue);}
  function sync(){if(!audio)return;applyCue(false);}
  function updateButtons(){const pause=document.getElementById('aiVideoPause');const teacher=document.getElementById('aiVideoTeacher');if(pause)pause.textContent=audio&&!audio.paused?'❚❚ 일시정지':'▶ 계속 재생';if(teacher)teacher.classList.toggle('speaking',!!audio&&!audio.paused);}
  function launch(){if(typeof window.stopAirTermsAi==='function')window.stopAirTermsAi();if(typeof window.stopCycleFlowAi==='function')window.stopCycleFlowAi();if(typeof window.stopRefrigerantAi==='function')window.stopRefrigerantAi();if(typeof window.stopEnthalpyAi==='function')window.stopEnthalpyAi();if(typeof window.stopHumidityAi==='function')window.stopHumidityAi();if(typeof window.stopSensibleLatentAi==='function')window.stopSensibleLatentAi();if(typeof window.stopCopAi==='function')window.stopCopAi();if(typeof window.stopSuperheatSubcoolAi==='function')window.stopSuperheatSubcoolAi();buildAudio();lessonActive=true;clearLessonMemo();addDiagramOverlay();const stage=document.getElementById('aiVideoStage');if(stage){stage.classList.add('open');stage.setAttribute('aria-hidden','false');}audio.currentTime=0;activeCue='';sync();audio.play().catch(function(){});}
  function pauseResume(){buildAudio();if(audio.paused){if(audio.ended)audio.currentTime=0;audio.play().catch(function(){});}else audio.pause();}
  function end(){if(audio){audio.pause();audio.currentTime=0;}activeCue='';const stage=document.getElementById('aiVideoStage');if(stage){stage.classList.remove('open');stage.setAttribute('aria-hidden','true');}const overlay=document.querySelector('.ai-video-overlay');if(overlay)overlay.dataset.cue='intro';clearLessonMemo();lessonActive=false;updateButtons();}
  function removeLesson(){if(audio&&!audio.paused)audio.pause();if(lessonActive)clearLessonMemo();lessonActive=false;document.getElementById('aiVideoWrap')?.remove();document.querySelectorAll('.ai-video-overlay').forEach(function(node){node.remove();});activeCue='';}
  function addDiagramOverlay(){const problem=document.getElementById('problem');const diagram=problem&&problem.querySelector('.refrig-diagram');if(diagram&&!diagram.querySelector('.ai-video-overlay'))diagram.insertAdjacentHTML('beforeend',overlayHtml());}
  function addLessonButton(){if(!isTarget()||document.getElementById('aiVideoWrap'))return;const answers=document.querySelector('#work .answer-grid');if(!answers)return;answers.insertAdjacentHTML('afterend',lessonHtml());document.getElementById('aiVideoLaunch')?.addEventListener('click',launch);document.getElementById('aiVideoPause')?.addEventListener('click',pauseResume);document.getElementById('aiVideoEnd')?.addEventListener('click',end);buildAudio();updateButtons();}

  const originalRender=window.render;
  if(typeof originalRender==='function')window.render=function(){removeLesson();const result=originalRender.apply(this,arguments);window.setTimeout(addLessonButton,0);return result;};
  ['showSiteView','showPracticeCategory','showLearningTopic','openInfoPage','closeInfoPage','startFullExam','startMock2Exam','startMock3Exam','startMock4Exam','startMock5Exam','startMock6Exam'].forEach(function(name){
    const original=window[name];
    if(typeof original==='function')window[name]=function(){removeLesson();return original.apply(this,arguments);};
  });
  addLessonButton();
})();
