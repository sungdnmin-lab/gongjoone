
(function(){
  document.addEventListener('keydown',function(e){
    const memo=document.querySelector('#info-guide #memo');
    if(!memo || !memo.contains(e.target) || !(e.ctrlKey&&e.key==='Enter'))return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if(typeof calculateLine==='function')calculateLine();
  },true);
})();
