
(function(){
  const guideDraw={tool:'pencil',drawing:false,start:null,last:null,history:[],snapshot:null};
  function calcCanvasSize(){
    const img=document.getElementById('guidePsychImage'), canvas=document.getElementById('guidePsychCanvas');
    if(!img||!canvas||!img.clientWidth||!img.clientHeight)return;
    const ratio=window.devicePixelRatio||1;
    const old=document.createElement('canvas'); old.width=canvas.width; old.height=canvas.height;
    if(canvas.width&&canvas.height) old.getContext('2d').drawImage(canvas,0,0);
    canvas.width=Math.round(img.clientWidth*ratio); canvas.height=Math.round(img.clientHeight*ratio);
    canvas.style.width=img.clientWidth+'px'; canvas.style.height=img.clientHeight+'px';
    const ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0);
    if(old.width&&old.height) ctx.drawImage(old,0,0,old.width,old.height,0,0,img.clientWidth,img.clientHeight);
  }
  function initGuidePsych(){
    const img=document.getElementById('guidePsychImage'), canvas=document.getElementById('guidePsychCanvas');
    if(!img||!canvas)return;
    if(typeof IMGS!=='undefined'&&IMGS.psych) img.src=IMGS.psych;
    img.addEventListener('load',calcCanvasSize,{once:false});
    window.addEventListener('resize',calcCanvasSize);
    canvas.addEventListener('pointerdown',guidePointerDown);
    canvas.addEventListener('pointermove',guidePointerMove);
    canvas.addEventListener('pointerup',guidePointerUp);
    canvas.addEventListener('pointercancel',guidePointerUp);
    setGuideDrawTool('pencil');
  }
  function pos(e){const c=document.getElementById('guidePsychCanvas'),r=c.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}
  function ctx(){const c=document.getElementById('guidePsychCanvas'),x=c.getContext('2d'),ratio=window.devicePixelRatio||1;x.setTransform(ratio,0,0,ratio,0,0);x.lineCap='round';x.lineJoin='round';return x;}
  function saveHistory(){const c=document.getElementById('guidePsychCanvas');guideDraw.history.push(c.toDataURL());if(guideDraw.history.length>30)guideDraw.history.shift();}
  function restore(url){const c=document.getElementById('guidePsychCanvas'),x=ctx(),img=new Image();img.onload=()=>{x.clearRect(0,0,c.clientWidth,c.clientHeight);x.drawImage(img,0,0,c.clientWidth,c.clientHeight)};img.src=url;}
  function guidePointerDown(e){e.preventDefault();const c=e.currentTarget;c.setPointerCapture(e.pointerId);saveHistory();guideDraw.drawing=true;guideDraw.start=guideDraw.last=pos(e);if(guideDraw.tool==='point'){drawPoint(guideDraw.last);guideDraw.drawing=false;}else if(['solid','dash'].includes(guideDraw.tool)){guideDraw.snapshot=c.toDataURL();}}
  function guidePointerMove(e){if(!guideDraw.drawing)return;e.preventDefault();const p=pos(e),x=ctx();if(['solid','dash'].includes(guideDraw.tool)){restore(guideDraw.snapshot);setTimeout(()=>drawLine(guideDraw.start,p,guideDraw.tool),0);}else{drawFree(guideDraw.last,p,guideDraw.tool);guideDraw.last=p;}}
  function guidePointerUp(e){if(!guideDraw.drawing)return;const p=pos(e);if(['solid','dash'].includes(guideDraw.tool)){restore(guideDraw.snapshot);setTimeout(()=>drawLine(guideDraw.start,p,guideDraw.tool),0);}guideDraw.drawing=false;guideDraw.snapshot=null;}
  function style(x,tool){x.globalCompositeOperation=tool==='eraser'?'destination-out':'source-over';x.strokeStyle=tool==='highlighter'?'rgba(255,220,0,.38)':'#1f2937';x.fillStyle=x.strokeStyle;x.lineWidth=tool==='highlighter'?14:tool==='eraser'?22:2.2;x.setLineDash(tool==='dash'?[9,7]:[]);}
  function drawFree(a,b,tool){const x=ctx();style(x,tool);x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}
  function drawLine(a,b,tool){const x=ctx();style(x,tool);x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}
  function drawPoint(p){const x=ctx();style(x,'pencil');x.beginPath();x.arc(p.x,p.y,5,0,Math.PI*2);x.fill();}
  window.setGuideDrawTool=function(tool){guideDraw.tool=tool;document.querySelectorAll('[data-guide-tool]').forEach(b=>b.classList.toggle('active',b.dataset.guideTool===tool));};
  window.undoGuideDraw=function(){const u=guideDraw.history.pop();if(u)restore(u);};
  window.clearGuideDraw=function(){const c=document.getElementById('guidePsychCanvas');if(!c)return;saveHistory();ctx().clearRect(0,0,c.clientWidth,c.clientHeight);};
  window.runGuideCalculator=function(){
    const input=document.getElementById('guideCalcMemo'),out=document.getElementById('guideCalcResult');
    const lines=input.value.split(/\n/).map(v=>v.trim()).filter(Boolean);if(!lines.length){out.textContent='계산식을 입력해 주세요.';return;}
    const results=[];
    for(const line of lines){
      try{
        let exp=line.replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**').replace(/√\s*\(/g,'sqrt(');
        if(!/^[0-9+\-*/().,%\s*a-zA-Z]+$/.test(exp))throw new Error();
        exp=exp.replace(/\bsqrt\b/g,'Math.sqrt').replace(/\bpi\b/gi,'Math.PI');
        if(/[^0-9+\-*/().,%\sMathsqrtPI]/.test(exp.replace(/Math\.sqrt|Math\.PI/g,'')))throw new Error();
        const value=Function('"use strict";return ('+exp+')')();if(!Number.isFinite(value))throw new Error();
        results.push(line+' = '+Number(value.toFixed(10)));
      }catch(_){results.push(line+' = 계산식 확인 필요');}
    }
    out.textContent=results.join('\n');
  };
  window.clearGuideCalculator=function(){document.getElementById('guideCalcMemo').value='';document.getElementById('guideCalcResult').textContent='계산 결과가 여기에 표시됩니다.';};
  document.addEventListener('DOMContentLoaded',initGuidePsych);
})();
