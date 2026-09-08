
(function(){
  const memo=document.getElementById('memo');
  if(!memo) return;

  function directChild(node){
    if(!node) return null;
    // 첫째 줄의 루트 텍스트 노드도 하나의 정상 계산 줄로 취급한다.
    if(node.nodeType===3 && node.parentNode!==memo) node=node.parentNode;
    while(node && node!==memo && node.parentNode!==memo) node=node.parentNode;
    return node && node!==memo && node.parentNode===memo ? node : null;
  }

  function currentRowFromSelection(){
    const sel=window.getSelection();
    if(!sel || !sel.rangeCount) return null;
    let direct=directChild(sel.anchorNode);
    if(!direct) return null;

    if(direct.nodeType===1 && (direct.tagName==='DIV'||direct.tagName==='P'||direct.classList.contains('calc-line'))){
      direct.classList.add('calc-line');
      return direct;
    }

    // 루트에 직접 있는 분수/텍스트를 현재 줄 DIV로만 묶는다.
    const row=document.createElement('div');
    row.className='calc-line';

    let start=direct, end=direct;
    // BR 또는 블록 요소를 경계로 같은 줄만 수집
    while(start.previousSibling){
      const p=start.previousSibling;
      if(p.nodeType===1 && (p.tagName==='BR'||p.tagName==='DIV'||p.tagName==='P'||p.classList?.contains('calc-line'))) break;
      start=p;
    }
    while(end.nextSibling){
      const n=end.nextSibling;
      if(n.nodeType===1 && (n.tagName==='BR'||n.tagName==='DIV'||n.tagName==='P'||n.classList?.contains('calc-line'))) break;
      end=n;
    }

    memo.insertBefore(row,start);
    let cur=start;
    while(cur){
      const next=cur.nextSibling;
      row.appendChild(cur);
      if(cur===end) break;
      cur=next;
    }
    return row;
  }

  // capture 단계에서 Ctrl+Enter를 먼저 잡아 기존 핸들러가 다음 줄에 결과를 만드는 것을 차단.
  memo.addEventListener('keydown', function(e){
    if(!(e.ctrlKey && e.key==='Enter')) return;

    const row=currentRowFromSelection();
    if(!row) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    // 기존 결과가 있으면 제거 후 재계산
    row.querySelectorAll(':scope > .inline-answer').forEach(x=>x.remove());

    // 기존 calculateLine을 사용하되, selection을 해당 row 안에 강제로 둬서
    // ensureCurrentCalcLine이 다른 줄을 선택할 여지를 없앤다.
    const sel=window.getSelection();
    const r=document.createRange();
    r.selectNodeContents(row);
    r.collapse(false);
    sel.removeAllRanges();
    sel.addRange(r);

    if(typeof window.calculateLine==='function'){
      window.calculateLine(row);
    } else if(typeof calculateLine==='function'){
      calculateLine(row);
    }
  }, true);
})();
