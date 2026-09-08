(function(){
 const initialHash=window.GONGJO_INITIAL_HASH||'';
 const file=location.pathname.split('/').pop();
 const routes={refrigeration:startRefrigerationPractice,airconditioning:startAirConditioningPractice,load:startCoolingHeatingLoadPractice,duct:startDuctBlowerPractice,descriptive:startDescriptivePractice};
 const exams=[null,startFullExam,startMock2Exam,startMock3Exam,startMock4Exam,startMock5Exam,startMock6Exam,startMock7Exam];
 function routeHash(hash){
   if(hash.startsWith('#learning-')){location.replace('learning-'+hash.slice(10)+'.html');return;}
   const quick=hash.startsWith('#quick-')&&routes[hash.slice(7)];
   if(quick){quick(null);history.replaceState(null,'',hash);return;}
   if(hash==='#practice'){showSiteView(null,'practice');return;}
   if(!hash||hash==='#home'){showSiteView(null,'home');history.replaceState(null,'',location.pathname+location.search+(hash||''));return;}
   if(['#privacy','#terms','#contact','#copyright','#about','#guide','#grading','#updates','#faq'].includes(hash))openInfoPage(null,hash.slice(1));
 }
 function init(){
   const m=file.match(/^exam-([1-7])\.html$/);
   if(m){exams[Number(m[1])](null);history.replaceState(null,'',location.pathname+location.search);return;}
   routeHash(initialHash);
 }
 window.showLearningTopic=function(e,t){if(e)e.preventDefault();location.href='learning-'+t+'.html';};
 // Same-document anchors do not reload the page. Dispatch their routes on click.
 document.addEventListener('click',function(e){
   if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
   const a=e.target.closest('a[href]');if(!a||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
   const url=new URL(a.href,location.href);
   if(url.origin!==location.origin||url.pathname!==location.pathname||url.search!==location.search)return;
   if(file&&file!=='index.html')return;
   if(!(url.hash.startsWith('#quick-')||url.hash==='#practice'||url.hash==='#home'||url.hash===''))return;
   e.preventDefault();
   if(location.hash!==url.hash)history.pushState(null,'',url.href);
   routeHash(url.hash);
 });
 // Browser back/forward and manually edited fragment URLs also select the correct view.
 window.addEventListener('hashchange',function(e){
   if(file&&file!=='index.html')return;
   routeHash(e.newURL?new URL(e.newURL).hash:location.hash);
 });
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
