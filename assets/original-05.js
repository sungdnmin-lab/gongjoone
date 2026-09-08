
const infoPageIds=['privacy','terms','contact','copyright','about','guide','grading','updates','faq'];
let lastInfoTrigger=null;
let infoReturnHash='#home';

function activateGuideMemo(){
  const guide=document.getElementById('guideMemo');
  if(!guide)return;
  const exam=document.querySelector('#examTop #memo');
  if(exam){exam.id='examMemoPaused';exam.dataset.memoPaused='1';}
  guide.id='memo';
  guide.dataset.guideMemoActive='1';
  savedRange=null;
  setTimeout(()=>guide.focus(),0);
}
function deactivateGuideMemo(){
  const guide=document.querySelector('#info-guide [data-guide-memo-active="1"]');
  if(guide){guide.id='guideMemo';delete guide.dataset.guideMemoActive;}
  const exam=document.querySelector('#examTop [data-memo-paused="1"]');
  if(exam){exam.id='memo';delete exam.dataset.memoPaused;}
  savedRange=null;
}

function openInfoPage(event,pageId){
  if(event) event.preventDefault();
  const page=document.getElementById('info-'+pageId);
  if(!page) return;
  if(event) infoReturnHash=document.body.classList.contains('view-exam')?'#examTop':document.body.classList.contains('view-practice')?'#practice':'#home';
  closeSiteMenu();
  document.querySelectorAll('.info-page.show').forEach(el=>el.classList.remove('show'));
  lastInfoTrigger=event&&event.currentTarget?event.currentTarget:document.activeElement;
  page.classList.add('show');
  document.body.classList.add('info-page-open');
  history.replaceState(null,'','#'+pageId);
  if(event){
    const pageTitle=page.querySelector('h1')?.textContent.trim()||pageId;
    trackVirtualPage('/info/'+pageId,pageTitle);
    sendAnalyticsEvent('info_page_view',{page_name:pageTitle,page_id:pageId});
  }
  page.scrollTop=0;
  if(pageId==='guide') setTimeout(function(){
    activateGuideMemo();
    const guidePage=document.getElementById('info-guide');
    const img=guidePage?guidePage.querySelector('#chartimg'):null;
    if(img&&typeof IMGS!=='undefined'&&IMGS.psych) img.src=IMGS.psych;
    chartDraw=[]; chartPreview=null; chartStart=null; selectedChartIndex=-1; chartZoom=1;
    initChartDrawingSurface(); setActiveDrawSurface('chart'); setUnifiedTool('pencil'); zoomReset(); renderChartDraw();
  },0);
  const back=page.querySelector('.info-back');
  if(back) back.focus();
}

function closeInfoPage(event){
  if(event) event.preventDefault();
  deactivateGuideMemo();
  document.querySelectorAll('.info-page.show').forEach(el=>el.classList.remove('show'));
  document.body.classList.remove('info-page-open');
  history.replaceState(null,'',infoReturnHash);
  if(lastInfoTrigger&&typeof lastInfoTrigger.focus==='function') lastInfoTrigger.focus();
  lastInfoTrigger=null;
}

document.addEventListener('keydown',function(event){
  if(event.key==='Escape'&&document.querySelector('.info-page.show')) closeInfoPage(event);
});

window.addEventListener('hashchange',function(){
  const pageId=location.hash.slice(1);
  if(infoPageIds.includes(pageId)) openInfoPage(null,pageId);
  else if(document.querySelector('.info-page.show')) closeInfoPage(null);
});

(function openInitialInfoPage(){
  const pageId=location.hash.slice(1);
  if(infoPageIds.includes(pageId)) openInfoPage(null,pageId);
})();
