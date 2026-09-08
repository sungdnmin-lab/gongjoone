
function closeDropdowns(except){document.querySelectorAll('.nav-group.open').forEach(g=>{if(g!==except){g.classList.remove('open');g.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false')}})}
function toggleDropdown(e,b){e.preventDefault();e.stopPropagation();let g=b.closest('.nav-group'),o=!g.classList.contains('open');closeDropdowns(g);g.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o))}
function toggleSiteMenu(b){let o=document.getElementById('siteMenu').classList.toggle('open');b.setAttribute('aria-expanded',String(o));b.textContent=o?'×':'☰';b.setAttribute('aria-label',o?'전체 메뉴 닫기':'전체 메뉴 열기')}
document.addEventListener('click',e=>{if(!e.target.closest('.nav-group'))closeDropdowns()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDropdowns();document.getElementById('siteMenu')?.classList.remove('open');let b=document.querySelector('.menu-toggle');if(b){b.setAttribute('aria-expanded','false');b.textContent='☰'}}});
