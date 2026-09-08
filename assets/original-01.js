
const IMGS={"mock6Wall":"assets/media-249261e136b8041049c9.png","mock5_wall":"assets/media-823f70e7b3288cded408.png","psych":"assets/media-ba646156032afe5dcdeb.jpg"};
const approvedMock1AmmoniaDiagram='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="760" viewBox="0 0 1400 760">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L8,4 L0,8 Z" fill="#111"/>
    </marker>
    <style>
      .device { fill: #fff; stroke: #111; stroke-width: 2.2; }
      .pipe { fill: none; stroke: #111; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
      .flow { fill: none; stroke: #111; stroke-width: 2.2; marker-end: url(#arrow); }
      .label { font-family: "Noto Sans KR", sans-serif; font-size: 23px; fill: #111; }
    </style>
  </defs>
  <rect width="1400" height="760" fill="#fff"/>
  <rect class="device" x="335" y="135" width="72" height="150" rx="29"/>
  <line class="flow" x1="355" y1="135" x2="355" y2="95"/>
  <line class="flow" x1="388" y1="95" x2="388" y2="135"/>
  <line class="flow" x1="455" y1="200" x2="407" y2="200"/>
  <line class="flow" x1="371" y1="285" x2="371" y2="330"/>
  <text class="label" x="425" y="252">저압수액기</text>
  <rect class="device" x="925" y="95" width="145" height="94"/>
  <path class="pipe" d="M925 112 H1038 Q1055 112 1055 128 Q1055 144 1038 144 H957 Q940 144 940 159 Q940 174 957 174 H1070"/>
  <line class="flow" x1="925" y1="112" x2="875" y2="112"/>
  <line class="flow" x1="875" y1="174" x2="925" y2="174"/>
  <text class="label" x="1090" y="153">증발기</text>
  <rect class="device" x="735" y="303" width="27" height="43"/>
  <rect class="device" x="721" y="315" width="14" height="25"/>
  <rect class="device" x="712" y="346" width="65" height="12"/>
  <line class="flow" x1="670" y1="328" x2="721" y2="328"/>
  <line class="flow" x1="749" y1="303" x2="749" y2="259"/>
  <text class="label" x="712" y="390">액펌프</text>
  <circle class="device" cx="950" cy="326" r="18"/>
  <line class="pipe" x1="938" y1="314" x2="962" y2="338"/>
  <line class="pipe" x1="962" y1="314" x2="938" y2="338"/>
  <line class="flow" x1="950" y1="375" x2="950" y2="344"/>
  <line class="flow" x1="950" y1="308" x2="950" y2="271"/>
  <text class="label" x="977" y="334">팽창밸브</text>
  <rect class="device" x="445" y="405" width="62" height="88" rx="23"/>
  <line class="flow" x1="395" y1="432" x2="445" y2="432"/>
  <line class="flow" x1="507" y1="432" x2="557" y2="432"/>
  <text class="label" x="433" y="533">유분리기</text>
  <path class="device" d="M315 570 L315 548 H365 L365 570 C389 590 397 614 385 640 C372 670 337 684 308 666 C279 649 274 615 291 590 Z"/>
  <line class="flow" x1="327" y1="512" x2="327" y2="548"/>
  <line class="flow" x1="353" y1="548" x2="353" y2="512"/>
  <text class="label" x="295" y="710">압축기</text>
  <rect class="device" x="675" y="507" width="145" height="40" rx="20"/>
  <line class="flow" x1="748" y1="462" x2="748" y2="507"/>
  <text class="label" x="585" y="535">응축기</text>
  <line class="pipe" x1="748" y1="547" x2="748" y2="563"/>
  <path class="device" d="M738 563 L758 563 L748 574 Z"/>
  <path class="device" d="M738 585 L758 585 L748 574 Z"/>
  <line class="flow" x1="748" y1="585" x2="748" y2="610"/>
  <rect class="device" x="675" y="610" width="145" height="42" rx="21"/>
  <text class="label" x="585" y="639">수액기</text>
  <line class="pipe" x1="748" y1="652" x2="748" y2="668"/>
  <path class="device" d="M738 668 L758 668 L748 679 Z"/>
  <path class="device" d="M738 690 L758 690 L748 679 Z"/>
  <line class="flow" x1="748" y1="690" x2="748" y2="728"/>
</svg>`);

const Q=[{"id":1,"type":"calc","points":7,"title":"응축기 계산","images":["q1"],"fields":[{"label":"(1) 응축기 방열량","v":175,"tol":0.5,"units":["kw","킬로와트"],"p":2.5},{"label":"(2) 전열면 열통과율","v":777.78,"tol":1.5,"units":["w/m2k","w/m²k","w/(m2k)","w/(m²k)"],"p":2.5},{"label":"(3) 수측 오염계수","v":0.00016,"tol":1e-05,"units":["m2k/w","m²k/w","m2·k/w","m²·k/w"],"p":2.0}]},{"id":2,"type":"calc_chart","points":8,"title":"냉방 설계 및 습공기선도","images":["q2"],"chart":"psych","fields":[{"label":"(1) 실내 현열비 SHF","v":0.76,"tol":0.02,"units":["","shf"],"p":1.2},{"label":"(2-1) 취출공기 온도","v":14,"tol":0.8,"units":["c","℃","°c"],"p":1.2},{"label":"(2-2) 취출공기 엔탈피","v":37,"tol":2,"units":["kj/kg","kj/kgda"],"p":1.2},{"label":"(3) 급기량","v":3500,"tol":80,"units":["m3/h","m³/h","㎥/h"],"p":1.6},{"label":"(4-1) 혼합공기 건구온도","v":27.58,"tol":0.8,"units":["c","℃","°c"],"p":1.0},{"label":"(4-2) 혼합공기 엔탈피","v":60.31,"tol":2,"units":["kj/kg","kj/kgda"],"p":0.9},{"label":"(5) 냉각코일 냉각열량","v":27.2,"tol":0.8,"units":["kw","킬로와트"],"p":0.9}]},{"id":3,"type":"calc","points":10,"title":"사무실 냉방부하","images":["q3a","q3b","q3c","q3d"],"fields":[{"label":"(1-1) 실내 현열부하","v":10499.22,"tol":30,"units":["w","와트"],"p":3.0},{"label":"(1-2) 실내 잠열부하","v":3219.51,"tol":20,"units":["w","와트"],"p":2.5},{"label":"(2-1) 외기 현열부하","v":1050.4,"tol":10,"units":["w","와트"],"p":2.0},{"label":"(2-2) 외기 잠열부하","v":4551.82,"tol":20,"units":["w","와트"],"p":2.5}]},{"id":4,"type":"calc","points":5,"title":"덕트 풍속 및 풍량","images":["q4"],"fields":[{"label":"(1) 덕트 내 풍속","v":15.66,"tol":0.2,"units":["m/s","mps"],"p":2.5},{"label":"(2) 풍량","v":7.87,"tol":0.15,"units":["m3/s","m³/s","㎥/s"],"p":2.5}],"solutionImages":["a4"]},{"id":5,"type":"calc","points":10,"title":"2단 압축 1단 팽창 냉동장치","images":["q5"],"solutionImages":["a5a","a5b"],"fields":[{"label":"(1-1) 저단 압축기 피스톤 배출량","v":323.5,"tol":1.0,"units":["m3/h","m³/h","㎥/h"],"p":2.5},{"label":"(1-2) 고단 압축기 피스톤 배출량","v":107.89,"tol":1.0,"units":["m3/h","m³/h","㎥/h"],"p":2.5},{"label":"(2) 저단 : 고단 기통수비","v":3,"tol":0.08,"units":["3:1",""],"p":2.0},{"label":"(3) 압축기 실제 소요동력","v":37.37,"tol":0.3,"units":["kw","킬로와트"],"p":3.0}]},{"id":6,"type":"duct_table","points":12,"title":"정압법 덕트 설계","images":["q6a","q6b"],"solutionImages":["a6"],"tableRows":[{"section":"H-A-B","flow":24000,"resistance":1,"diameter":90,"velocity":10},{"section":"B-C-D(B-D′)","flow":12000,"resistance":1,"diameter":71,"velocity":8.4},{"section":"D-E(D′-E′)","flow":9000,"resistance":1,"diameter":64,"velocity":7.8},{"section":"E-F(E′-F′)","flow":6000,"resistance":1,"diameter":54,"velocity":7.1},{"section":"F-G(F′-G′)","flow":3000,"resistance":1,"diameter":42,"velocity":6.0}],"fanPressure":240.97}];
IMGS.duct='assets/media-95462e603e90acd4ead9.png';
Q.find(q=>q.id===6).chart='duct';
/* 7·8번 자체 제작 흑백 도면: 원본 캡처 대신 별도 SVG 사용 */
/* v46: reviewed clean diagrams embedded below; each placeholder is replaced with a data URI during build. */
IMGS.q5='assets/media-06e8f0a755e05f08dbde.svg';
IMGS.q6='assets/media-e0888bdb26ba795e0f45.svg';
IMGS.q7='assets/media-d3f979c1d77c735fbc8b.svg';
IMGS.a7='assets/media-1235b50d355282bd1a00.svg';
IMGS.q8='assets/media-7563d284d134665ae5cb.svg';
IMGS.a8='assets/media-6331ce5d5da156c8c86f.png';
IMGS.q10='assets/media-a96c4f8b2fe46c9a1419.png';
IMGS.q13='assets/media-606b47e31dec034e7d56.svg';

/* v106: 승인된 암모니아 강제순환 문제 도안으로 최종 교체 */
IMGS.q8=approvedMock1AmmoniaDiagram;

/* v67: 제1회 2단 압축 문제 도면을 제2회 흑백 선도 기준으로 교체 */
IMGS.q5='assets/media-e06323d9eecfe9d124b4.svg';
Q.push(
 {id:7,type:'annot_drawing',points:5,title:'팬코일 유닛 리버스리턴 배관',images:['q7'],solutionImages:['a7'],drawPoints:5,manualRef:'해설도와 같이 FCS(냉수공급), FCR(냉수환수), FCD(드레인)를 각 팬코일 유닛에 리버스리턴 방식으로 연결했는지 확인하세요.'},
 {id:8,type:'annot_drawing_desc',points:8,title:'암모니아 냉동 강제순환 계통도',images:['q8'],solutionImages:['a8'],drawPoints:5,manualRef:'해설도와 같이 실선은 저압측, 점선은 고압측으로 연결하고 냉매 흐름 방향이 올바른지 확인하세요.',desc:[{label:'(2) 냉매 강제순환 방식의 장점 2가지',p:3,need:2,groups:[['배관내순환','순환양호','전열양호','열전달양호','냉각능력우수'],['1대액펌프','여러대증발기','여러증발기','냉매공급가능','제상자동화'],['대용량','대용량설비'],['액백없','액백방지','액백이일어나지않']],ref:'① 배관 내 순환이 양호하여 냉각능력이 우수하다. ② 1대의 액펌프로 여러 증발기에 냉매를 공급할 수 있고 제상 자동화가 쉽다. ③ 대용량 설비에 적합하다. ④ 액백이 일어나지 않는다.'}]}
,{id:9,type:'desc',points:8,title:'겨울철 응축압력 저하',images:['q9'],solutionImages:['a9'],desc:[
  {label:'(1) 응축압력이 낮아지는 원인',p:2,need:1,groups:[['외기온도하강','외기온도저하','외기온도가낮','겨울철외기','응축능력증가','과하게응축','과응축']],ref:'겨울철 외기온도가 하강하면 응축능력이 증가하여(과하게 응축하여) 응축압력이 낮아진다.'},
  {label:'(2) 응축압력 저하의 영향 3가지',p:3,need:3,groups:[['팽창밸브능력감소','팽창밸브용량감소','팽창밸브의능력저하'],['냉매공급량감소','냉매순환량감소','증발기냉매공급감소'],['냉동능력감소','냉동능력저하'],['단위냉동톤당소요동력증대','단위냉동톤당소요동력증가','소요동력증대','소요동력증가']],ref:'① 팽창밸브의 능력 감소 ② 증발기로의 냉매 공급량(순환량) 감소 ③ 냉동능력 감소 ④ 단위 냉동톤당 소요동력 증대 (이 중 3가지)'},
  {label:'(3) 겨울철 증발식 응축기의 압력 저하 대책 3가지',p:3,need:3,groups:[['풍량조절','공기량조절','송풍량조절'],['응축압력조정밸브','토출압력조정밸브','압력조정밸브설치'],['팬작동교대로절환','팬교대운전','팬대수제어','팬단속운전'],['전열면적감소','유효전열면적감소','액면높게유지','응축기액면높게'],['정압조절밸브','정압조정밸브','유량조절밸브'],['압력스위치','압력스위치를이용','송풍기정지']],ref:'① 공기량 조절 ② 응축기 출구배관에 응축압력조정밸브 설치 ③ 팬 작동 교대 ④ 응축기 액면을 높여 유효전열면적 감소 ⑤ 출구에 정압조절밸브 설치 ⑥ 압력스위치로 설정치 이하에서 송풍기 정지 (이 중 3가지)'}
 ]}
,{id:10,type:'annot_drawing_calc',points:10,title:'2단압축 2단팽창 냉동장치',images:['q10'],solutionImages:['a10a','a10b'],drawPoints:5,manualRef:'해설 p-h선도와 같이 a→b→c→d→e→f→g→h→i→j→k→a의 상태 변화가 올바르게 표시되었는지 확인하세요. 해설에서 c→d 과정은 수냉 중간냉각기의 냉각과정이므로 제외합니다.',fields:[{label:'(2) 이론 성적계수 COP',v:2.879,tol:0.015,units:['','cop'],p:5}]}
,{id:11,type:'desc',points:4,title:'저온공조시스템',images:['q11'],solutionImages:['a11'],desc:[
  {label:'(1) 작동 원리',p:2,need:3,groups:[['저온냉수','낮은온도의냉수','냉수온도를낮','1~4℃낮','1~4도낮'],['입출구온도차증가','냉수온도차증가','온도차를크게','10~12k','10~12℃'],['코일을통과','공조기냉수코일','냉수코일'],['저온공기','취출공기온도낮','13~16℃','13~16도']],ref:'기존 공조시스템보다 1~4℃ 낮은 냉수를 공급하고, 냉수 입·출구 온도차를 10~12 K로 크게 하여 코일을 통과한 13~16℃의 낮은 온도 공기를 공급한다.'},
  {label:'(2) 장점 2가지',p:2,need:2,groups:[['냉수유량감소','유량감소','펌프동력절감','펌프동력감소'],['덕트배관감소','덕트배관감소효과','덕트배관축소'],['공급풍량감소','풍량감소','송풍기동력절감','송풍동력절감'],['덕트크기감소','덕트사이즈감소','덕트축소'],['에너지소비량감소','에너지절약','에너지절감']],ref:'① 냉수 유량 감소로 펌프동력 절감 ② 냉수 유량 감소로 덕트·배관 감소 ③ 공급 풍량 감소로 송풍기동력 절감 ④ 풍량 감소로 덕트 크기 감소 ⑤ 에너지 소비량 감소 (이 중 2가지)'}
 ]}
,{id:12,type:'calc',points:4,title:'원통 다관형 열교환기 전열면적',images:['q12'],solutionImages:['a12'],fields:[
  {label:'관의 전열면적',v:7.35,tol:0.08,units:['m2','m²','㎡'],p:4}
 ]}
,{id:13,type:'calc',points:6,title:'예열·혼합·순환수분무가습·가열 장치',images:['q13'],solutionImages:['a13'],fields:[
  {label:'(1) 전체 순환공기량',v:15120,tol:20,units:['kg/h','kg/hr','kgh'],p:1.5},
  {label:'(2) 예열부하',v:5.36,tol:0.08,units:['kw','킬로와트'],p:1.5},
  {label:'(3) 외기부하',v:29.82,tol:0.15,units:['kw','킬로와트'],p:1.5},
  {label:'(4) 난방코일부하',v:87.36,tol:0.15,units:['kw','킬로와트'],p:1.5}
 ]}
,{id:14,type:'desc',points:3,title:'브라인의 구비조건',images:['q14'],solutionImages:['a14'],desc:[
  {label:'브라인의 구비조건 5가지',p:3,need:5,groups:[['비열이클','열용량이커','열용량이크'],['열전도율이클','열전도율이크','열전도성이좋'],['점성이작','점도가낮','점도가작','순환펌프동력소비가적'],['동결점이낮','어는점이낮','냉동장치운전온도보다5~6℃낮','냉동장치운전온도보다5~6도낮','운전온도보다낮'],['냉동장치의구성부분을부식시키지않','부식시키지않','부식성이없','비부식성'],['증기압이낮','증기압력이낮'],['각온도에서액체상태','사용온도에서액체상태','액체상태일것'],['화학적으로안정','화학적안정'],['값이싸','가격이싸','구하기쉬','취급이용이'],['독성이없','무독성']],ref:'① 비열이 클 것 ② 열전도율이 클 것 ③ 점성이 작고 순환펌프 동력이 작을 것 ④ 동결점이 낮을 것 ⑤ 증기압이 낮을 것 ⑥ 사용 온도에서 액체일 것 ⑦ 화학적으로 안정할 것 ⑧ 값이 싸고 구하기 쉬우며 취급이 용이할 것 ⑨ 독성이 없을 것 ⑩ 장치 구성품을 부식시키지 않을 것 (이 중 5가지)'}
 ]}
);
Object.assign(Q[0],{
 title:'응축기 성능 계산 · 자체 제작 변형',images:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>수랭식 응축기의 운전 자료를 이용하여 다음 값을 구하시오.</h2><div class="conditions"><h3>운전 조건</h3><ol><li>냉각수 유량: 600 L/min</li><li>냉각수 비열: 4.19 kJ/(kg·K)</li><li>냉각수 입구온도: 29℃</li><li>냉각수 출구온도: 34℃</li><li>응축온도: 41.5℃</li><li>응축기 전열면적: 35 m²</li><li>냉매 측 열전달률: 1,200 W/(m²·K)</li><li>수 측 열전달률: 1,800 W/(m²·K)</li><li>기타 열손실은 없고, 냉각수 온도차는 산술평균을 적용한다.</li></ol></div><ol class="asks"><li>응축기의 방열량 [kW]</li><li>응축기 전열면의 열통과율 [W/(m²·K)]</li><li>수 측 오염계수 [m²·K/W] (소수점 다섯째 자리까지)</li></ol></div>`,
 fields:[
  {label:'(1) 응축기 방열량',v:209.5,tol:0.5,units:['kw','킬로와트'],p:2.5},
  {label:'(2) 전열면 열통과율',v:598.57,tol:1.5,units:['w/m2k','w/m²k','w/(m2k)','w/(m²k)'],p:2.5},
  {label:'(3) 수측 오염계수',v:0.00028,tol:1e-5,units:['m2k/w','m²k/w','m2·k/w','m²·k/w'],p:2.0}
 ],
 explanation:`[자체 해설]
(1) Q = (600/60) × 4.19 × (34-29) = 209.5 kW
(2) 냉각수 평균온도 = (29+34)/2 = 31.5℃, 평균온도차 = 41.5-31.5 = 10 K
    K = 209,500/(35×10) = 598.57 W/(m²·K)
(3) f = 1/K - 1/1,200 - 1/1,800 = 0.0002818 ≒ 0.00028 m²·K/W`
});
Object.assign(Q[1],{
 title:'냉방 공기조화 설계 · 자체 제작 변형',images:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>아래 조건의 사무공간을 냉방하려 한다. 습공기선도를 이용하여 물음에 답하시오.</h2><div class="conditions"><h3>설계 조건</h3><ol><li>실내: 27℃ DB, 50% RH, h₁ = 55.6 kJ/kg(DA)</li><li>외기: 34℃ DB, 27℃ WB, h₂ = 85.5 kJ/kg(DA)</li><li>실내 현열부하: 15 kW</li><li>실내 잠열부하: 5 kW</li><li>필요 외기량: 900 m³/h</li><li>냉각코일 출구 공기의 상대습도: 90%</li><li>공기 밀도: 1.2 kg/m³</li></ol></div><ol class="asks"><li>실내 현열비(SHF)</li><li>송풍기 선정을 위한 취출공기의 온도와 엔탈피</li><li>취출공기량 [m³/h]</li><li>혼합공기의 건구온도와 엔탈피</li><li>냉각코일의 냉각열량 [kW]</li></ol></div>`,
 fields:[
  {label:'(1) 실내 현열비 SHF',v:0.75,tol:0.02,units:['','shf'],p:1.2},
  {label:'(2-1) 취출공기 온도',v:14.5,tol:0.8,units:['c','℃','°c'],p:1.2},
  {label:'(2-2) 취출공기 엔탈피',v:38.9,tol:2,units:['kj/kg','kj/kgda'],p:1.2},
  {label:'(3) 급기량',v:3600,tol:80,units:['m3/h','m³/h','㎥/h'],p:1.6},
  {label:'(4-1) 혼합공기 건구온도',v:28.75,tol:0.8,units:['c','℃','°c'],p:1.0},
  {label:'(4-2) 혼합공기 엔탈피',v:63.08,tol:2,units:['kj/kg','kj/kgda'],p:0.9},
  {label:'(5) 냉각코일 냉각열량',v:29.01,tol:0.8,units:['kw','킬로와트'],p:0.9}
 ],
 explanation:`[자체 해설]
(1) SHF = 15/(15+5) = 0.75
(2) 실내 상태점에서 SHF 0.75선을 긋고 RH 90%선과 만나는 점을 읽으면 약 14.5℃, 38.9 kJ/kg(DA)
(3) V = 15×3,600/[1.2×(27-14.5)] = 3,600 m³/h
(4) 외기비 = 900/3,600 = 0.25
    tₘ = 27×0.75 + 34×0.25 = 28.75℃
    hₘ = 55.6×0.75 + 85.5×0.25 = 63.08 kJ/kg(DA)
(5) Qc = 1.2×3,600/3,600×(63.08-38.9) = 29.01 kW`
});
Object.assign(Q[2],{
 title:'사무실 냉방부하 · 자체 제작 변형',images:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>A 사무실의 7월 23일 14:00 냉방부하를 계산하시오.</h2><p class="q3-lead">실내부하는 현열과 잠열로 구분하고, 외기부하도 현열과 잠열로 구분한다. 바닥을 통한 열취득은 무시한다.</p><div class="q3-plan" role="img" aria-label="서측 복도와 남측 및 동측 창이 있는 가로 12미터, 세로 7미터 사무실 평면도"><div class="q3-corridor">비공조 복도 30℃</div><div class="q3-room"><div class="q3-north">N</div><div><strong>A 사무실</strong><small>12 m × 7 m × 높이 3 m<br>재실 인원 16명 · 문 0.9 m × 2.0 m</small></div><i class="q3-window s1"></i><i class="q3-window s2"></i><i class="q3-window s3"></i><i class="q3-window e1"></i><i class="q3-window e2"></i><span class="q3-dim-s">남측 12 m</span><span class="q3-dim-e">동측 7 m</span></div></div><div class="q3-legend"><span>남측 창 3개: 각 1.5 m × 1.5 m</span><span>동측 창 2개: 각 1.5 m × 1.5 m</span></div><div class="conditions"><h3>기본 설계조건</h3><ol><li>실내: 26℃ DB, 50% RH, 절대습도 xᵢ = 0.0105 kg/kg(DA)</li><li>외기: 34℃ DB, 60% RH, 절대습도 xₒ = 0.0200 kg/kg(DA)</li><li>북측은 동일 조건의 공조실이며, 서측 복도는 비공조 공간이다.</li><li>남측·동측 창은 맑은 복층유리이고 밝은색 블라인드를 설치한다.</li></ol></div><button type="button" class="q3-all-toggle" onclick="toggleAllQ3Resources(this)">참고자료 전체 펼치기</button><div class="q3-resources"><details class="q3-resource"><summary>① 구조체·창 조건</summary><div class="resource-body"><table class="q3-table"><thead><tr><th>구조체</th><th>면적 조건</th><th>열관류율 K</th><th>적용 온도차</th></tr></thead><tbody><tr><td>지붕</td><td>84 m²</td><td>0.45 W/(m²·K)</td><td>상당온도차 14 K</td></tr><tr><td>남측 외벽</td><td>총 36 m²에서 창 면적 제외</td><td>0.58 W/(m²·K)</td><td>상당온도차 7 K</td></tr><tr><td>동측 외벽</td><td>총 21 m²에서 창 면적 제외</td><td>0.58 W/(m²·K)</td><td>상당온도차 9 K</td></tr><tr><td>복층유리</td><td>남 6.75 m², 동 4.50 m²</td><td>3.40 W/(m²·K)</td><td>실내외 온도차 8 K</td></tr><tr><td>서측 복도벽</td><td>21 m²에서 문 1.8 m² 제외</td><td>2.10 W/(m²·K)</td><td>복도-실내 4 K</td></tr></tbody></table></div></details><details class="q3-resource"><summary>② 일사·인체·조명 조건</summary><div class="resource-body"><table class="q3-table"><thead><tr><th>항목</th><th>남측</th><th>동측</th><th>비고</th></tr></thead><tbody><tr><td>창 표준일사열취득</td><td>120 W/m²</td><td>60 W/m²</td><td>차폐계수 0.65</td></tr><tr><td>인체 발열</td><td colspan="2">현열 58 W/인, 잠열 74 W/인</td><td>사무업무 16명</td></tr><tr><td>조명</td><td colspan="2">25 W/m²</td><td>조명계수 1.20</td></tr></tbody></table></div></details><details class="q3-resource"><summary>③ 틈새바람·외기·계산상수</summary><div class="resource-body"><table class="q3-table"><thead><tr><th>항목</th><th>값</th></tr></thead><tbody><tr><td>틈새바람 환기횟수</td><td>0.60 회/h</td></tr><tr><td>필요 외기량</td><td>25 m³/(h·인)</td></tr><tr><td>공기 밀도</td><td>1.20 kg/m³</td></tr><tr><td>건조공기 정압비열</td><td>1.01 kJ/(kg·K)</td></tr><tr><td>수분 증발잠열</td><td>2,501 kJ/kg</td></tr></tbody></table><p class="q3-note">틈새바람은 실내부하에 포함하고, 필요 외기량에 의한 부하는 외기부하로 별도 계산한다.</p></div></details></div><ol class="asks"><li>실내 현열부하 [W]</li><li>실내 잠열부하 [W]</li><li>외기 현열부하 [W]</li><li>외기 잠열부하 [W]</li></ol></div>`,
 fields:[
  {label:'(1) 실내 현열부하',v:5758.60,tol:12,units:['w','와트'],p:3.0},
  {label:'(2) 실내 잠열부하',v:2381.48,tol:10,units:['w','와트'],p:2.5},
  {label:'(3) 외기 현열부하',v:1077.33,tol:8,units:['w','와트'],p:2.0},
  {label:'(4) 외기 잠열부하',v:3167.93,tol:12,units:['w','와트'],p:2.5}
 ],
 explanation:`[자체 해설]
1. 실내 현열부하
① 창 일사 = 6.75×120×0.65 + 4.50×60×0.65 = 702.00 W
② 지붕 = 84×0.45×14 = 529.20 W
③ 남측 외벽 = (36-6.75)×0.58×7 = 118.76 W
④ 동측 외벽 = (21-4.50)×0.58×9 = 86.13 W
⑤ 유리 전도 = (6.75+4.50)×3.40×(34-26) = 306.00 W
⑥ 복도벽 = (21-1.80)×2.10×(30-26) = 161.28 W
⑦ 틈새바람 현열 = 0.60×(12×7×3)×1.20×1.01×8/3.6 = 407.23 W
⑧ 인체 현열 = 16×58 = 928.00 W
⑨ 조명 = 12×7×25×1.20 = 2,520.00 W
합계 = 5,758.60 W

2. 실내 잠열부하
① 틈새바람 잠열 = 0.60×252×1.20×(0.0200-0.0105)×2,501/3.6 = 1,197.48 W
② 인체 잠열 = 16×74 = 1,184.00 W
합계 = 2,381.48 W

3. 외기부하 (필요 외기량 = 25×16 = 400 m³/h)
① 외기 현열 = 400×1.20×1.01×8/3.6 = 1,077.33 W
② 외기 잠열 = 400×1.20×(0.0200-0.0105)×2,501/3.6 = 3,167.93 W`
});
Object.assign(Q[2],{
 title:'사무실 냉방부하 · 기출 흐름 유지 변형',images:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>다음 건물의 A실에 대하여 7월 23일 14:00의 냉방부하를 계산하시오.</h2><p class="q3-lead">실내부하는 현열과 잠열로 구분하고, 외기부하도 현열과 잠열로 구분한다. 바닥을 통한 열취득은 무시한다.</p><div class="q3-plan q3-exam-plan" role="img" aria-label="북측 인접 공조실, 북동측 비공조 복도, 동측 인접 공조실에 접하고 서측과 남측에 창이 있는 A실 평면도"><div class="adjacent-top">인접실 · 냉방조건 동일</div><div class="corridor-zone">복도<br>30℃</div><div class="q3-room"><div class="q3-north">N</div><div><strong>A실</strong><small>12 m × 7.5 m<br>층고 3.5 m · 천장고 2.9 m<br>창 높이 1.4 m</small></div><i class="q3-window w1"></i><i class="q3-window w2"></i><i class="q3-window w3"></i><i class="q3-window s1"></i><i class="q3-window s2"></i><i class="q3-window s3"></i><i class="q3-window s4"></i><i class="q3-window s5"></i><i class="q3-door">문 1.8×2 m</i><span class="q3-dim-s">남측 12 m</span><span class="q3-dim-w">서측 7.5 m</span></div><div class="adjacent-right">인접실 · 냉방조건 동일</div></div><div class="q3-legend"><span>서측 창 3개: 각 1.4 m × 1.4 m</span><span>남측 창 5개: 각 1.4 m × 1.4 m</span></div><div class="conditions"><h3>기본 조건</h3><ol><li>실내: 26℃ DB, 50% RH, 절대습도 xᵢ = 0.0105 kg/kg(DA)</li><li>외기: 33℃ DB, 70% RH, 절대습도 xₒ = 0.0210 kg/kg(DA)</li><li>비공조 복도를 제외한 인접실은 A실과 같은 냉방조건이다.</li><li>창은 맑은 복층유리이며 밝은색 블라인드를 사용한다.</li><li>공기 밀도 1.20 kg/m³, 정압비열 1.01 kJ/(kg·K), 수분 증발잠열 2,501 kJ/kg</li><li>필요 외기량은 25 m³/(h·인)이다.</li></ol></div><button type="button" class="q3-all-toggle" onclick="toggleAllQ3Resources(this)">참고자료 전체 펼치기</button><div class="q3-resources"><details class="q3-resource"><summary>① 유리·구조체 및 방위 조건</summary><div class="resource-body"><div class="q3-mini-grid"><table class="q3-table"><thead><tr><th>구분</th><th>열관류율 K</th></tr></thead><tbody><tr><td>맑은 복층유리</td><td>3.30 W/(m²·K)</td></tr><tr><td>출입문</td><td>2.20 W/(m²·K)</td></tr><tr><td>외벽 · 타입 Ⅴ</td><td>0.58 W/(m²·K)</td></tr><tr><td>내벽</td><td>3.00 W/(m²·K)</td></tr><tr><td>지붕</td><td>0.46 W/(m²·K)</td></tr></tbody></table><table class="q3-table"><thead><tr><th>방위</th><th>N</th><th>E</th><th>W</th><th>S</th></tr></thead><tbody><tr><td>방위계수</td><td>1.20</td><td>1.10</td><td>1.10</td><td>1.00</td></tr></tbody></table></div><p class="q3-note">이번 조건에서 외벽과 지붕의 상당온도차는 아래 ④ 자료에 이미 방위·시각을 반영해 제시한다.</p></div></details><details class="q3-resource"><summary>② 차폐계수·유리 일사열취득</summary><div class="resource-body"><table class="q3-table"><thead><tr><th rowspan="2">유리</th><th colspan="3">블라인드 조건별 차폐계수</th></tr><tr><th>없음</th><th>밝은색</th><th>중간색</th></tr></thead><tbody><tr><td>보통 단층</td><td>1.00</td><td>0.65</td><td>0.75</td></tr><tr><td>맑은 복층</td><td>0.90</td><td>0.60</td><td>0.70</td></tr><tr><td>흡열 복층</td><td>0.75</td><td>0.55</td><td>0.65</td></tr></tbody></table><table class="q3-table" style="margin-top:10px"><thead><tr><th>시각</th><th colspan="4">표준 일사열취득 [W/m²]</th></tr><tr><th>태양시</th><th>N</th><th>E</th><th>W</th><th>S</th></tr></thead><tbody><tr><td>12시</td><td>50</td><td>50</td><td>50</td><td>120</td></tr><tr><td>13시</td><td>49</td><td>45</td><td>255</td><td>90</td></tr><tr><td>14시</td><td>45</td><td>40</td><td>380</td><td>70</td></tr><tr><td>15시</td><td>40</td><td>33</td><td>420</td><td>55</td></tr><tr><td>16시</td><td>33</td><td>25</td><td>390</td><td>42</td></tr></tbody></table></div></details><details class="q3-resource"><summary>③ 인체·인원·조명 조건</summary><div class="resource-body"><div class="q3-mini-grid"><table class="q3-table"><thead><tr><th>작업상태</th><th>현열 Hs</th><th>잠열 Hl</th></tr></thead><tbody><tr><td>극장</td><td>57</td><td>46</td></tr><tr><td>사무 업무</td><td>62</td><td>70</td></tr><tr><td>가벼운 작업</td><td>72</td><td>148</td></tr><tr><td>보행</td><td>96</td><td>197</td></tr></tbody></table><table class="q3-table"><thead><tr><th>방의 종류</th><th>바닥면적 [m²/인]</th><th>조명밀도 [W/m²]</th></tr></thead><tbody><tr><td>사무실</td><td>5.0</td><td>25</td></tr><tr><td>은행 영업실</td><td>5.0</td><td>65</td></tr><tr><td>레스토랑</td><td>1.5</td><td>25</td></tr><tr><td>상점</td><td>3.0</td><td>30</td></tr></tbody></table></div><p class="q3-note">조명계수는 1.25를 적용한다.</p></div></details><details class="q3-resource"><summary>④ 상당온도차·환기 조건</summary><div class="resource-body"><table class="q3-table"><thead><tr><th>구조체</th><th>방위</th><th>12시</th><th>13시</th><th>14시</th><th>15시</th><th>16시</th></tr></thead><tbody><tr><td rowspan="2">외벽 타입 Ⅴ</td><td>S</td><td>5.6</td><td>7.1</td><td>8.0</td><td>8.5</td><td>9.1</td></tr><tr><td>W</td><td>4.3</td><td>8.4</td><td>16.0</td><td>19.6</td><td>21.0</td></tr><tr><td>지붕</td><td>수평</td><td>12.0</td><td>15.0</td><td>18.0</td><td>20.0</td><td>21.0</td></tr></tbody></table><table class="q3-table" style="margin-top:10px"><thead><tr><th>실용적 [m³]</th><th>500 미만</th><th>500~1,000</th><th>1,000~1,500</th><th>1,500 이상</th></tr></thead><tbody><tr><td>환기횟수 [회/h]</td><td>0.70</td><td>0.60</td><td>0.55</td><td>0.50</td></tr></tbody></table><ul class="q3-formula-list"><li>틈새바람은 실내부하에 포함한다.</li><li>필요 외기에 의한 부하는 외기부하로 별도 계산한다.</li><li>실용적은 바닥면적 × 천장고로 계산한다.</li></ul></div></details></div><ol class="asks"><li>실내 현열부하 [W]</li><li>실내 잠열부하 [W]</li><li>외기 현열부하 [W]</li><li>외기 잠열부하 [W]</li></ol></div>`,
 fields:[
  {label:'(1-1) 실내 현열부하',v:7629.63,tol:20,units:['w','와트'],p:3.0},
  {label:'(1-2) 실내 잠열부하',v:2859.26,tol:15,units:['w','와트'],p:2.5},
  {label:'(2-1) 외기 현열부하',v:1060.50,tol:10,units:['w','와트'],p:2.0},
  {label:'(2-2) 외기 잠열부하',v:3939.08,tol:15,units:['w','와트'],p:2.5}
 ],
 explanation:`[자체 해설]
바닥면적 A = 12×7.5 = 90 m²
실용적 V = 90×2.9 = 261 m³
인원 = 90/5 = 18명
창 면적: 남측 = 5×1.4×1.4 = 9.80 m², 서측 = 3×1.4×1.4 = 5.88 m²

1. 실내 현열부하
① 유리창 일사 = (9.80×70 + 5.88×380)×0.60 = 1,752.24 W
② 지붕 = 90×0.46×18 = 745.20 W
③ 남측 외벽 = (12×3.5-9.80)×0.58×8 = 149.41 W
④ 서측 외벽 = (7.5×3.5-5.88)×0.58×16 = 189.03 W
⑤ 유리 전도 = (9.80+5.88)×3.30×(33-26) = 362.21 W
⑥ 복도 내벽 = (2×3.5-1.8×2)×3.00×(30-26) = 40.80 W
⑦ 출입문 = 1.8×2×2.20×(30-26) = 31.68 W
⑧ 틈새바람 현열 = (0.70×261)×1.20×1.01×(33-26)/3.6 = 430.56 W
⑨ 인체 현열 = 18×62 = 1,116.00 W
⑩ 조명 = 90×25×1.25 = 2,812.50 W
합계 = 7,629.63 W

2. 실내 잠열부하
① 틈새바람 잠열 = (0.70×261)×1.20×(0.0210-0.0105)×2,501/3.6 = 1,599.26 W
② 인체 잠열 = 18×70 = 1,260.00 W
합계 = 2,859.26 W

3. 외기부하
필요 외기량 = 25×18 = 450 m³/h
① 외기 현열 = 450×1.20×1.01×(33-26)/3.6 = 1,060.50 W
② 외기 잠열 = 450×1.20×(0.0210-0.0105)×2,501/3.6 = 3,939.08 W`
});
Object.assign(Q[3],{
 title:'덕트 풍속 및 풍량 · 자체 제작 변형',images:[],solutionImages:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>원형 송풍덕트의 측정값을 이용하여 다음 값을 계산하시오.</h2><div class="conditions"><h3>측정 조건</h3><ol><li>덕트 안지름: 0.75 m</li><li>속도압: 129.6 Pa</li><li>공기 밀도: 1.20 kg/m³</li></ol></div><ol class="asks"><li>덕트 내 평균 풍속 [m/s]</li><li>덕트를 통과하는 풍량 [m³/s]</li></ol></div>`,
 fields:[
  {label:'(1) 덕트 내 평균 풍속',v:14.70,tol:0.2,units:['m/s','mps'],p:2.5},
  {label:'(2) 풍량',v:6.49,tol:0.12,units:['m3/s','m³/s','㎥/s'],p:2.5}
 ],
 explanation:`[자체 해설]\n(1) 속도압 Pv = ρv²/2 이므로\n    v = √(2Pv/ρ) = √(2×129.6/1.20) = 14.70 m/s\n(2) Q = Av = (π×0.75²/4)×14.70 = 6.49 m³/s`
});
Object.assign(Q[4],{
 title:'2단 압축 1단 팽창 냉동장치 · 기출 흐름 유지 변형',
 images:['q5'],
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 상태도 유지</span><h2>R-22를 사용하는 2단 압축·1단 팽창 냉동장치의 운전점을 아래 상태도에 표시하였다.</h2><div class="conditions"><h3>조건</h3><ol><li>냉동능력: 15 RT</li><li>저단·고단 압축기의 체적효율: 0.75</li><li>저단·고단 압축기의 압축효율: 0.73</li><li>저단·고단 압축기의 기계효율: 0.90</li><li>1 RT = 3.86 kW</li></ol></div><p>상태도에 제시된 엔탈피와 비체적을 사용하여 각 물음에 답하시오.</p></div>`,
 solutionImages:[],
 explanation:`[자체 해설]\n① 저단 냉매순환량 GL = 15×3.86×3,600/(618-429) = 1,102.86 kg/h\n   저단 피스톤 배출량 = GL×0.22/0.75 = 323.50 m³/h\n② 실제 저단 토출엔탈피 h₂′ = 618+(660-618)/0.73 = 675.53 kJ/kg\n   고단 냉매순환량 GH = GL×(675.53-429)/(634-466) = 1,618.40 kg/h\n   고단 피스톤 배출량 = GH×0.05/0.75 = 107.89 m³/h\n③ 기통수비 = 323.50:107.89 ≒ 3:1\n④ 저단동력 = 1,102.86×(660-618)/(3,600×0.73×0.90) = 19.58 kW\n   고단동력 = 1,618.40×(660-634)/(3,600×0.73×0.90) = 17.79 kW\n   실제 소요동력 = 19.58+17.79 = 37.37 kW`
});
IMGS.q6='assets/media-86b875dbc99b9ab28541.svg';
Object.assign(Q[5],{
 title:'정압법 덕트 설계 · 기출 흐름 유지 변형',images:['q6'],solutionImages:[],
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 덕트 그림 유지</span><h2>동일한 취출구 8개가 설치된 공장 덕트를 정압법으로 설계한다.</h2><div class="conditions"><h3>설계 조건</h3><ol><li>각 취출구 풍량: 3,000 m³/h</li><li>주덕트 H-A-B의 최대 풍속: 10 m/s</li><li>덕트 마찰저항: 1 Pa/m</li><li>공기 밀도: 1.20 kg/m³</li><li>공기 흡입구 50 Pa, 공기 취출구 50 Pa, 댐퍼 등 기타 저항 30 Pa</li><li>국부저항: (a) ξ₁=V₃/V₁, (b) ξ₂=0.33, (c)·(d) ξ₃=0.33</li></ol></div><ol class="asks"><li>구간별 풍량·원형덕트 지름·풍속을 표에 기입하시오.</li><li>송풍기의 필요 정압 [Pa]을 계산하시오.</li></ol></div>`,
 explanation:`[검산 수정 해설]\n구간 풍량은 취출구 누적 개수에 따라 24,000 → 12,000 → 9,000 → 6,000 → 3,000 m³/h이다.\n덕트선도 판독값은 약 90 cm·10 m/s, 71 cm·8.4 m/s, 64 cm·7.8 m/s, 54 cm·7.1 m/s, 42 cm·6.0 m/s이다. 첫 구간의 이론 지름은 약 92 cm이며, 90 cm는 선도 판독·반올림값이다.\n(a) ξ₁=8.4/10=0.84, ΔPₐ=0.84×(1.20×10²/2)=50.40 Pa\n(b) ΔPᵦ=0.33×(1.20×8.4²/2)=13.97 Pa\n(c),(d) ΔP=0.33×(1.20×10²/2)=19.80 Pa씩\n국부저항 합계 = 50.40+13.97+19.80+19.80 = 103.97 Pa\n직선덕트 저항 = (5+2+5+5+20+6+8+8+8)×1 = 67 Pa\n송풍기 전압 = 103.97+67+50+50+30 = 300.97 Pa\n송풍기 정압 = 300.97-(1.20×10²/2) = 240.97 Pa`
});
Object.assign(Q[6],{
 title:'팬코일 유닛 리버스리턴 배관 · 기출 흐름 유지 변형',
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 기기 그림 유지</span><h2>6대의 팬코일 유닛에 냉수를 공급하는 배관을 완성하시오.</h2><p>모든 유닛의 왕복 배관길이가 같아지도록 리버스리턴 방식으로 FCS(냉수공급), FCR(냉수환수), FCD(드레인)를 연결하고 흐름 방향을 표시한다.</p></div>`,
 manualRef:'FCS는 첫 번째 FCU부터 차례로 공급하고, FCR은 마지막 FCU에서 시작해 반대 방향으로 환수하여 각 유닛의 왕복 배관길이가 같아졌는지 확인하세요. FCD도 각 유닛에서 드레인 주관으로 연결되어야 합니다.'
});
Object.assign(Q[7],{
 title:'암모니아 냉동 강제순환 계통도 · 기출 흐름 유지 변형',
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 기기 그림 유지</span><h2>저압수액기에서 액펌프로 냉매를 보내는 암모니아 강제순환 냉동계통을 완성하시오.</h2><p>저압측은 실선, 고압측은 점선으로 연결하고 냉매의 흐름 방향을 표시한 뒤, 강제순환 방식의 장점 2가지를 쓰시오.</p></div>`,
 manualRef:'저압수액기→액펌프→증발기→저압수액기의 저압 순환회로와 압축기→유분리기→응축기→수액기→팽창밸브→저압수액기의 고압측 연결이 올바른지 확인하세요.'
});
Object.assign(Q[8],{
 title:'겨울철 응축압력 저하 · 자체 제작 변형',images:[],solutionImages:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>겨울철 외기온도가 크게 낮아진 날, 증발식 응축기를 사용하는 냉동설비의 응축압력이 정상 범위 아래로 떨어졌다.</h2><ol class="asks"><li>이 현상이 발생하는 주된 원인을 설명하시오.</li><li>냉동장치에 나타날 수 있는 영향을 3가지 쓰시오.</li><li>응축압력을 안정적으로 유지하기 위한 운전·설비 대책을 3가지 쓰시오.</li></ol></div>`
});
IMGS.mock1q10ph='assets/media-95d2f87795f774bcdb4b.svg';
Object.assign(Q[9],{
 title:'2단 압축 2단 팽창 냉동장치 · 기출 흐름 유지 변형',
 images:['q10'],solutionImages:['mock1q10ph'],
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 계통도 유지</span><h2>수냉 중간냉각기와 증발기를 사용하는 2단 압축·2단 팽창 냉동장치이다.</h2><div class="conditions"><h3>상태점 엔탈피 [kJ/kg]</h3><ol><li>hₐ = 373, hᵦ = 1,624, h𝚌 = 1,813</li><li>h𝚍 = 1,758, hₑ = 1,670, h𝚐 = 1,871</li><li>hᵢ = 536</li></ol></div><ol class="asks"><li>계통도의 상태점 a~k를 아래 p-h선도에 순서대로 표시하시오.</li><li>제시된 엔탈피값으로 이론 성적계수(COP)를 계산하시오.</li></ol><p><strong>※ 채점 후 수정된 P-h 선도와 계산 해설이 표시됩니다.</strong></p></div>`,
 manualRef:'a→b 증발, b→c 저단압축, c→d 수냉 중간냉각, d와 j에서 분리된 플래시가스의 혼합→e, e→f 고단압축, f=g 배관 구간, g→h 응축, h=i 수액기 구간, i→j 제1팽창, j에서 기액분리, 액체→k, k→a 제2팽창 과정을 확인하세요.'
});
Object.assign(Q[10],{
 title:'저온공조시스템 · 자체 제작 변형',images:[],solutionImages:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>일반 공조방식보다 낮은 온도의 냉수와 공급공기를 사용하는 저온공조시스템에 대하여 답하시오.</h2><ol class="asks"><li>냉수와 공급공기의 온도 특성을 포함하여 작동 원리를 설명하시오.</li><li>일반 공조방식과 비교한 장점 2가지를 쓰시오.</li></ol></div>`
});
Object.assign(Q[11],{
 title:'원통 다관형 열교환기 전열면적 · 자체 제작 변형',images:[],solutionImages:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>증기 가열식 원통 다관형 열교환기의 필요한 전열면적을 계산하시오.</h2><div class="conditions"><h3>조건</h3><ol><li>열교환량: 2,520 MJ/h</li><li>물 입구온도: 62℃</li><li>물 출구온도: 72℃</li><li>응축증기 온도: 105℃로 일정</li><li>총괄 열관류율: 2.0 kW/(m²·K)</li><li>대수평균온도차를 적용한다.</li></ol></div></div>`,
 fields:[{label:'관의 전열면적',v:9.26,tol:0.10,units:['m2','m²','㎡'],p:4}],
 explanation:`[자체 해설]\n열교환량 q = 2,520×10³/3,600 = 700 kW\nΔt₁ = 105-62 = 43 K, Δt₂ = 105-72 = 33 K\nLMTD = (43-33)/ln(43/33) = 37.78 K\nA = q/(K×LMTD) = 700/(2.0×37.78) = 9.26 m²`
});
Object.assign(Q[12],{
 title:'예열·혼합·순환수분무가습·가열 장치 · 기출 흐름 유지 변형',
 images:['q13'],
 promptHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제 · 공기선도 그림 유지</span><h2>외기를 예열한 뒤 환기와 혼합하고, 순환수 분무가습과 가열을 거쳐 실내로 공급하는 공조장치이다.</h2><p>실내 현열부하 48 kW, 잠열부하 15 kW이며 외기량은 전체 순환공기량의 25%이다. 그림에 표시된 각 상태점의 엔탈피를 이용하여 물음에 답하시오.</p><ol class="asks"><li>전체 순환공기량 [kg/h]</li><li>예열부하 [kW]</li><li>외기부하 [kW]</li><li>가열코일부하 [kW]</li></ol></div>`,
 solutionImages:[],
 explanation:`[자체 해설]\n(1) G = (48+15)/(53-38)×3,600 = 15,120 kg/h\n(2) 예열부하 = 15,120×0.25×(14.7-9.6)/3,600 = 5.36 kW\n(3) 외기부하 = 15,120×0.25×(38-9.6)/3,600 = 29.82 kW\n(4) 순환수 분무가습은 단열변화이므로 h₄=h₅이다.\n    가열코일부하 = 15,120×(53-32.2)/3,600 = 87.36 kW`
});
Object.assign(Q[13],{
 title:'브라인의 구비조건 · 자체 제작 변형',images:[],solutionImages:[],
 problemHtml:`<div class="variant-sheet"><span class="variant-kicker">기출유형 자체 제작 변형문제</span><h2>간접식 냉동설비에서 2차 냉매로 사용하는 브라인을 선정할 때 요구되는 성질을 5가지 쓰시오.</h2></div>`
});

/* v46: calculation explanations use stacked fractions instead of slash-style division. */
function SFR(num,den){
 return `<span class="solution-frac" role="math" aria-label="${esc(String(num))} 나누기 ${esc(String(den))}"><span class="solution-num">${esc(String(num))}</span><span class="solution-den">${esc(String(den))}</span></span>`;
}
function SROOT(radicand){
 const label=String(radicand).replace(/<[^>]*>/g,'').trim();
 return `<span class="solution-root" role="math" aria-label="${esc(label)}의 제곱근"><span class="solution-root-symbol" aria-hidden="true">√</span><span class="solution-radicand">${radicand}</span></span>`;
}
function rootFormattedText(text){
  const source=String(text||'');
  if(!source.includes('√'))return null;
  let output='';
  let cursor=0;
  let changed=false;
  const pairs={'(':')','{':'}','[':']'};

  for(let i=0;i<source.length;i++){
    if(source[i]!=='√')continue;
    let start=i+1;
    while(source[start]===' ')start++;
    let radicand='';
    let end=start;
    const opener=source[start];
    if(pairs[opener]){
      const closer=pairs[opener];
      let depth=0;
      let matched=-1;
      for(let j=start;j<source.length;j++){
        if(source[j]===opener)depth++;
        else if(source[j]===closer){
          depth--;
          if(depth===0){matched=j;break;}
        }
      }
      if(matched<0)continue;
      radicand=source.slice(start+1,matched);
      end=matched+1;
    }else{
      const token=source.slice(start).match(/^[\p{L}\p{N}._,₀-₉²³⁴ᵢₐₑᵥ𝚌ᴸᴴ′πρληΔΣ]+/u);
      if(!token)continue;
      radicand=token[0];
      end=start+radicand.length;
    }
    output+=esc(source.slice(cursor,i));
    output+=SROOT(esc(radicand));
    cursor=end;
    i=end-1;
    changed=true;
  }
  if(!changed)return null;
  output+=esc(source.slice(cursor));
  return output;
}

function formatRootsInSolutionHtml(html){
  const template=document.createElement('template');
  template.innerHTML=html||'';
  const walker=document.createTreeWalker(template.content,NodeFilter.SHOW_TEXT);
  const targets=[];
  while(walker.nextNode()){
    const node=walker.currentNode;
    if(node.parentElement?.closest('.solution-root,script,style'))continue;
    if(node.nodeValue?.includes('√'))targets.push(node);
  }
  targets.forEach(node=>{
    const converted=rootFormattedText(node.nodeValue);
    if(!converted)return;
    const holder=document.createElement('template');
    holder.innerHTML=converted;
    node.replaceWith(holder.content);
  });
  return template.innerHTML;
}
function SH(text){return `<div class="solution-heading">${esc(text)}</div>`}
function SL(html){return `<div class="solution-step">${html}</div>`}

Q[0].explanationHtml=
 SH('[자체 해설]')+
 SL(`(1) Q = ${SFR('600','60')} × 4.19 × (34−29) = 209.5 kW`)+
 SL(`(2) 냉각수 평균온도 = ${SFR('29+34','2')} = 31.5℃, 평균온도차 = 41.5−31.5 = 10 K`)+
 SL(`K = ${SFR('209,500','35×10')} = 598.57 W/(m²·K)`)+
 SL(`(3) f = ${SFR('1','K')} − ${SFR('1','1,200')} − ${SFR('1','1,800')} = 0.0002818 ≒ 0.00028 m²·K/W`);

Q[1].explanationHtml=
 SH('[자체 해설]')+
 SL(`(1) SHF = ${SFR('15','15+5')} = 0.75`)+
 SL('(2) 실내 상태점에서 SHF 0.75선을 긋고 RH 90%선과 만나는 점을 읽으면 약 14.5℃, 38.9 kJ/kg(DA)')+
 SL(`(3) V = ${SFR('15×3,600','1.2×(27−14.5)')} = 3,600 m³/h`)+
 SL(`(4) 외기비 = ${SFR('900','3,600')} = 0.25`)+
 SL('tₘ = 27×0.75 + 34×0.25 = 28.75℃')+
 SL('hₘ = 55.6×0.75 + 85.5×0.25 = 63.08 kJ/kg(DA)')+
 SL(`(5) Qc = ${SFR('1.2×3,600','3,600')} × (63.08−38.9) = 29.01 kW`);

Q[2].explanationHtml=
 SH('[자체 해설]')+
 SL('바닥면적 A = 12×7.5 = 90 m²')+
 SL('실용적 V = 90×2.9 = 261 m³')+
 SL(`인원 = ${SFR('90','5')} = 18명`)+
 SL('창 면적: 남측 = 5×1.4×1.4 = 9.80 m², 서측 = 3×1.4×1.4 = 5.88 m²')+
 SH('1. 실내 현열부하')+
 SL('① 유리창 일사 = (9.80×70 + 5.88×380)×0.60 = 1,752.24 W')+
 SL('② 지붕 = 90×0.46×18 = 745.20 W')+
 SL('③ 남측 외벽 = (12×3.5−9.80)×0.58×8 = 149.41 W')+
 SL('④ 서측 외벽 = (7.5×3.5−5.88)×0.58×16 = 189.03 W')+
 SL('⑤ 유리 전도 = (9.80+5.88)×3.30×(33−26) = 362.21 W')+
 SL('⑥ 복도 내벽 = (2×3.5−1.8×2)×3.00×(30−26) = 40.80 W')+
 SL('⑦ 출입문 = 1.8×2×2.20×(30−26) = 31.68 W')+
 SL(`⑧ 틈새바람 현열 = ${SFR('(0.70×261)×1.20×1.01×(33−26)','3.6')} = 430.56 W`)+
 SL('⑨ 인체 현열 = 18×62 = 1,116.00 W')+
 SL('⑩ 조명 = 90×25×1.25 = 2,812.50 W')+
 SL('합계 = 7,629.63 W')+
 SH('2. 실내 잠열부하')+
 SL(`① 틈새바람 잠열 = ${SFR('(0.70×261)×1.20×(0.0210−0.0105)×2,501','3.6')} = 1,599.26 W`)+
 SL('② 인체 잠열 = 18×70 = 1,260.00 W')+
 SL('합계 = 2,859.26 W')+
 SH('3. 외기부하')+
 SL('필요 외기량 = 25×18 = 450 m³/h')+
 SL(`① 외기 현열 = ${SFR('450×1.20×1.01×(33−26)','3.6')} = 1,060.50 W`)+
 SL(`② 외기 잠열 = ${SFR('450×1.20×(0.0210−0.0105)×2,501','3.6')} = 3,939.08 W`);

Q[3].explanationHtml=
 SH('[자체 해설]')+
 SL(`(1) 속도압 Pᵥ = ${SFR('ρv²','2')} 이므로`)+
 SL(`v = ${SROOT(SFR('2Pᵥ','ρ'))} = ${SROOT(SFR('2×129.6','1.20'))} = 14.70 m/s`)+
 SL(`(2) Q = Av = (${SFR('π×0.75²','4')})×14.70 = 6.49 m³/s`);

Q[4].explanationHtml=
 SH('[자체 해설]')+
 SL(`① 저단 냉매순환량 Gᴸ = ${SFR('15×3.86×3,600','618−429')} = 1,102.86 kg/h`)+
 SL(`저단 피스톤 배출량 = ${SFR('Gᴸ×0.22','0.75')} = 323.50 m³/h`)+
 SL(`② 실제 저단 토출엔탈피 h₂′ = 618 + ${SFR('660−618','0.73')} = 675.53 kJ/kg`)+
 SL(`고단 냉매순환량 Gᴴ = ${SFR('Gᴸ×(675.53−429)','634−466')} = 1,618.40 kg/h`)+
 SL(`고단 피스톤 배출량 = ${SFR('Gᴴ×0.05','0.75')} = 107.89 m³/h`)+
 SL('③ 기통수비 = 323.50 : 107.89 ≒ 3 : 1')+
 SL(`④ 저단동력 = ${SFR('1,102.86×(660−618)','3,600×0.73×0.90')} = 19.58 kW`)+
 SL(`고단동력 = ${SFR('1,618.40×(660−634)','3,600×0.73×0.90')} = 17.79 kW`)+
 SL('실제 소요동력 = 19.58 + 17.79 = 37.37 kW');

Q[5].explanationHtml=
 SH('[검산 수정 해설]')+
 SL('① 구간별 풍량: H–A–B = 24,000, B–C–D(B–D′) = 12,000, D–E(D′–E′) = 9,000, E–F(E′–F′) = 6,000, F–G(F′–G′) = 3,000 m³/h')+
 SL('② 덕트선도 판독값: 약 90 cm·10 m/s, 71 cm·8.4 m/s, 64 cm·7.8 m/s, 54 cm·7.1 m/s, 42 cm·6.0 m/s')+
 SL(`첫 구간을 식으로 계산하면 D = ${SROOT(SFR('4×(24,000/3,600)','π×10'))} = 0.921 m ≒ 92 cm이다. 표의 90 cm·10 m/s는 덕트선도 판독·반올림값이다.`)+
 SL(`③ (a) 저항계수 ξ₁ = ${SFR('V₃','V₁')} = ${SFR('8.4','10')} = 0.84`)+
 SL(`ΔPₐ = 0.84×${SFR('1.20×10²','2')} = 50.40 Pa`)+
 SL(`④ ΔPᵦ = 0.33×${SFR('1.20×8.4²','2')} = 13.97 Pa`)+
 SL(`⑤ ΔP𝚌 = ΔP𝚍 = 0.33×${SFR('1.20×10²','2')} = 19.80 Pa`)+
 SL('국부저항 합계 = 50.40 + 13.97 + 19.80 + 19.80 = 103.97 Pa')+
 SL('⑥ 최장경로 직선덕트 길이 = H구간 5 + 송풍기 전 2 + 송풍기–A 5 + A–B 5 + B–C 20 + C–D 6 + D–E 8 + E–F 8 + F–G 8 = 67 m')+
 SL('직선덕트 저항 = 67 m × 1 Pa/m = 67 Pa')+
 SL('⑦ 송풍기 전압 = 103.97 + 67 + 흡입구 50 + 취출구 50 + 기타 30 = 300.97 Pa')+
 SL(`송풍기 토출 속도압 = ${SFR('1.20×10²','2')} = 60 Pa`)+
 SL('송풍기 정압 = 300.97 − 60 = 240.97 Pa');

Q[9].explanationHtml=
 SH('[수정 해설 · P-h 선도 포함]')+
 SL('작도: a→b 증발, b→c 저단압축, c→d 수냉 중간냉각, d와 플래시가스의 혼합→e, e→f 고단압축, f=g, g→h 응축, h=i, i→j 제1팽창, j에서 기액분리, 액체→k, k→a 제2팽창')+
 SL('중간냉각기 에너지수지: Gᴸh𝚍 + Gᴴhⱼ = Gᴴhₑ + Gᴸhₖ')+
 SL(`냉매순환량비 r = ${SFR('Gᴴ','Gᴸ')} = ${SFR('h𝚍−hₖ','hₑ−hⱼ')} = ${SFR('1,758−373','1,670−536')} = 1.221`)+
 SL(`COP = ${SFR('hᵦ−hₐ','(h𝚌−hᵦ) + r×(h𝚐−hₑ)')}`)+
 SL(`COP = ${SFR('1,624−373','(1,813−1,624) + 1.221×(1,871−1,670)')} = 2.879 ≒ 2.88`)+
 SL('※ hⱼ=hᵢ=536 kJ/kg, hₖ=hₐ=373 kJ/kg이며, 수냉 중간냉각기를 통과한 d점의 엔탈피 1,758 kJ/kg을 중간냉각기 에너지수지에 사용한다.');

Q[11].explanationHtml=
 SH('[자체 해설]')+
 SL(`열교환량 q = ${SFR('2,520×10³','3,600')} = 700 kW`)+
 SL('Δt₁ = 105−62 = 43 K, Δt₂ = 105−72 = 33 K')+
 SL(`온도차비 = ${SFR('43','33')} = 1.3030`)+
 SL(`LMTD = ${SFR('43−33','ln(1.3030)')} = 37.78 K`)+
 SL(`A = ${SFR('700','2.0×37.78')} = 9.26 m²`);

Q[12].explanationHtml=
 SH('[자체 해설]')+
 SL(`(1) G = ${SFR('48+15','53−38')} × 3,600 = 15,120 kg/h`)+
 SL(`(2) 예열부하 = ${SFR('15,120×0.25×(14.7−9.6)','3,600')} = 5.36 kW`)+
 SL(`(3) 외기부하 = ${SFR('15,120×0.25×(38−9.6)','3,600')} = 29.82 kW`)+
 SL('(4) 순환수 분무가습은 단열변화이므로 h₄ = h₅이다.')+
 SL(`가열코일부하 = ${SFR('15,120×(53−32.2)','3,600')} = 87.36 kW`);

function toggleAllQ3Resources(button){
 const sheet=button.closest('.variant-sheet');
 const items=[...sheet.querySelectorAll('.q3-resource')];
 const shouldOpen=items.some(item=>!item.open);
 items.forEach(item=>item.open=shouldOpen);
 button.textContent=shouldOpen?'참고자료 전체 접기':'참고자료 전체 펼치기';
}
let idx=0,start=Date.now(),timerId=setInterval(()=>document.getElementById('timer').textContent=fmt(Date.now()-start),250);
let state=Q.map(q=>({memo:'',answers:[],manual:[],draw:[],redo:[],chartDraw:[],chartZoom:1,drawGrade:null,annots:{},annotRedo:{}}));
let scores=Q.map(()=>0), details=Q.map(()=>null);
let currentSessionTitle=document.getElementById('examTitle')?.textContent||'문제풀이';
let sessionCompletionTracked=false;

function sendAnalyticsEvent(eventName,parameters){
  if(typeof window.gtag!=='function')return;
  window.gtag('event',eventName,parameters||{});
}
function trackVirtualPage(path,title){
  if(typeof window.gtag!=='function')return;
  window.gtag('event','page_view',{
    page_title:title,
    page_location:new URL(path,window.location.origin).href
  });
}
function isQuickSessionTitle(title){
  return typeof title==='string' && (title.includes('빠른문제 ')||title.includes('빠른 문제풀이'));
}
function sessionAnalyticsPath(title){
  const mock=title.match(/(?:제(\d+)회 모의고사|실전 모의고사\s*(\d+))/);
  if(mock)return '/exam/mock-'+(mock[1]||mock[2]);
  const quickMap={
    '냉동':'refrigeration',
    '공기조화':'air-conditioning',
    '냉난방부하':'cooling-heating-load',
    '덕트·송풍기':'duct-blower',
    '서술형':'descriptive'
  };
  const quick=Object.keys(quickMap).find(name=>title.includes('빠른문제 '+name)||title.includes('빠른 문제풀이 · '+name));
  if(quick)return '/practice/'+quickMap[quick];
  return '/exam/session';
}
function fmt(ms){const t=Math.floor(ms/1000);return [Math.floor(t/3600),Math.floor(t%3600/60),t%60].map(x=>String(x).padStart(2,'0')).join(':')}
function esc(s){return (s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function norm(s){return (s||'').toLowerCase().replace(/\s+/g,'').replace(/㎥|m³|m\^3/g,'m3').replace(/㎡|m²|m\^2/g,'m2').replace(/·/g,'').replace(/hr/g,'h').replace(/킬로와트/g,'kw').replace(/와트/g,'w').replace(/파스칼/g,'pa').replace(/센티미터/g,'cm')}
function parseAns(raw){const t=(raw||'').trim();const m=t.match(/[-+]?\d[\d,]*(?:\.\d+)?(?:[eE][-+]?\d+)?/);if(!m)return {v:NaN,u:t};return {v:Number(m[0].replace(/,/g,'')),u:(t.slice(0,m.index).trim()||t.slice(m.index+m[0].length).trim())}}
function unitOK(u,acc){
 const x=norm(u),a=(acc||[]).map(norm);
 if(a.includes(''))return x===''||x==='cop'||a.includes(x);

 // 온도 단위: 시험 답안에서 '도'만 입력해도 ℃/°C/C와 같은 의미로 인정
 const tempAliases=['c','℃','°c','도','도씨','섭씨','섭씨도'];
 const expectsTemp=a.some(v=>tempAliases.includes(v));
 if(expectsTemp && tempAliases.includes(x))return true;

 return a.includes(x);
}

/* v1.3: 계산·선도 유형별 허용오차와 동등 단위 환산을 한곳에서 관리한다. */
function gradingUnitKey(unit){
 let x=norm(String(unit||''))
  .replace(/／/g,'/')
  .replace(/[()]/g,'')
  .replace(/°/g,'')
  .replace(/킬로그램\/시간/g,'kg/h')
  .replace(/킬로그램\/초/g,'kg/s')
  .replace(/리터\/분/g,'l/min')
  .replace(/리터\/초/g,'l/s');
 const aliases={
  '킬로와트':'kw','와트':'w','mps':'m/s','cmh':'m3/h','㎥/h':'m3/h','㎥/s':'m3/s',
  'kgh':'kg/h','kg/sec':'kg/s','kgs':'kg/s','kjkg':'kj/kg','킬로줄/킬로그램':'kj/kg',
  '㎜':'mm','밀리미터':'mm','센티미터':'cm','미터':'m','메가파스칼':'mpa','킬로파스칼':'kpa','파스칼':'pa'
 };
 return aliases[x]||x;
}

function gradingUnitMeta(unit){
 const key=gradingUnitKey(unit);
 const map={
  'w':['power',1],'kw':['power',1000],'mw':['power',1000000],
  'm':['length',1],'cm':['length',0.01],'mm':['length',0.001],
  'm2':['area',1],'cm2':['area',0.0001],'mm2':['area',0.000001],
  'm3/s':['volume-flow',1],'m3/h':['volume-flow',1/3600],'l/s':['volume-flow',0.001],'l/min':['volume-flow',1/60000],
  'kg/s':['mass-flow',1],'kg/h':['mass-flow',1/3600],'kg/min':['mass-flow',1/60],
  'pa':['pressure',1],'kpa':['pressure',1000],'mpa':['pressure',1000000],'bar':['pressure',100000],
  'j/kg':['specific-energy',1],'kj/kg':['specific-energy',1000],
  'w/m2k':['heat-transfer',1],'kw/m2k':['heat-transfer',1000],
  'm2k/w':['thermal-resistance',1],'m2k/kw':['thermal-resistance',0.001]
 };
 const value=map[key];
 return value?{key,family:value[0],factor:value[1]}:null;
}

function answerValueInExpectedUnit(parsed,field){
 if(!Number.isFinite(parsed.v))return NaN;
 if(unitOK(parsed.u,field.units))return parsed.v;
 const input=gradingUnitMeta(parsed.u);
 if(!input)return NaN;
 const accepted=Array.isArray(field.units)?field.units:[];
 for(const unit of accepted){
  const target=gradingUnitMeta(unit);
  if(target&&target.family===input.family)return parsed.v*input.factor/target.factor;
 }
 return NaN;
}

function roundingMinimumTolerance(value){
 const text=String(value);
 if(/[eE]/.test(text))return 0;
 const dot=text.indexOf('.');
 if(dot<0)return 0;
 const decimals=text.length-dot-1;
 return decimals>0?0.5*(10**(-decimals)):0;
}

function exactAnswerField(field){
 const label=String(field?.label||'');
 return field?.tol===0||(
  Number.isInteger(field?.v)&&/개수|수량|선택번호|번호 입력|필요 열수|발생시간|유리한 사이클/.test(label)
 );
}

function gradingTolerance(question,field){
 const answer=Math.abs(Number(field?.v)||0);
 const label=String(field?.label||'');
 if(exactAnswerField(field))return 0;

 if(question?.chart==='psych'){
  if(/절대습도/.test(label))return 0.0005;
  if(/상대습도/.test(label))return 3;
  if(/엔탈피/.test(label))return 2;
  if(/온도|건구|습구/.test(label))return 1;
  return Math.max(answer*0.05,roundingMinimumTolerance(field.v));
 }

 if(question?.chart==='duct'){
  const rate=/저항|압력|정압|손실/.test(label)?0.10:0.05;
  return Math.max(answer*rate,roundingMinimumTolerance(field.v));
 }

 const phIdentity=`${question?.title||''} ${question?.sourceId||''} ${(question?.images||[]).join(' ')}`;
 if(/엔탈피/.test(label)&&/p.?h|phchart|압력.?엔탈피/i.test(phIdentity)){
  return Math.max(2,answer*0.01,roundingMinimumTolerance(field.v));
 }

 return Math.max(answer*0.01,roundingMinimumTolerance(field.v));
}


function renderDuctTableAnswer(q){
 if(!q||q.type!=='duct_table')return;
 const work=document.getElementById('work');
 if(!work)return;

 const st=state[idx]||{memo:'',answers:{}};

 let h=`
 <div class="calc-memo-panel">
 <div class="memo-panel-heading"><h3>계산과정 메모장</h3><span class="memo-sticky-label">화면 고정</span></div>
 <div class="toolbar">
   <button onclick="insertText('×')">×</button>
   <button onclick="insertText('÷')">÷</button>
   <button onclick="insertFraction()">분수</button>
   <button onclick="insertText('√(')">√</button>
   <button onclick="insertText('ln(')">ln</button>
   <button onclick="insertPower()">제곱</button>
   <button onclick="solveCurrentLine()">Solve</button>
   <button onclick="clearMemo()">전체 지우기</button>
   <button class="primary" onclick="calculateLine()">계산하기</button>
 </div>
 <div class="hint">단축키: *→×, /→÷, Ctrl+/→분수, Ctrl+R→√, Ctrl+I→ln, Ctrl+P→제곱, Ctrl+S→Solve, Ctrl+Enter→계산 · 분수 안에서는 → 또는 Tab으로 분자→분모→일반 입력 이동 · 지수 입력 후 → 또는 Tab을 누르면 일반 입력으로 이동</div>
 <div id="memo" class="memo" contenteditable="true">${st.memo||''}</div>
 </div>

 <h3>(1) 정압법(1Pa/m)에 의한 풍량, 풍속, 원형 덕트의 크기를 구하시오.</h3>
 <table class="duct-answer-table">
   <thead>
     <tr>
       <th>구간</th>
       <th>풍량 [m³/h]</th>
       <th>저항 [Pa/m]</th>
       <th>원형 덕트 [cm]</th>
       <th>풍속 [m/s]</th>
     </tr>
   </thead>
   <tbody>`;

 q.tableRows.forEach(function(r,i){
   h += `<tr>
     <td>${r.section}</td>
     <td><input id="d6f${i}" inputmode="decimal" value="${st.answers['d6f'+i]||''}" aria-label="${r.section} 풍량"></td>
     <td>${r.resistance}</td>
     <td><input id="d6d${i}" inputmode="decimal" value="${st.answers['d6d'+i]||''}" aria-label="${r.section} 원형 덕트"></td>
     <td><input id="d6v${i}" inputmode="decimal" value="${st.answers['d6v'+i]||''}" aria-label="${r.section} 풍속"></td>
   </tr>`;
 });

 h += `</tbody></table>
 <div class="duct-pressure-answer">
   <b>(2) 송풍기의 필요정압(Pa)을 구하시오.</b>
   <input id="d6p" inputmode="decimal" value="${st.answers['d6p']||''}" placeholder="정답 입력">
   <span>Pa</span>
 </div>
 ${chartUI(q)}`;

 work.innerHTML=h;
}

function gradeDuctTable(q){
 const n=v=>Number(String(v||'').replace(/,/g,'').trim());
 const items=[];
 q.tableRows.forEach((r,i)=>{
   [
     ['풍량', 'd6f'+i, r.flow, Math.abs(r.flow)*0.05],
     ['원형 덕트', 'd6d'+i, r.diameter, Math.abs(r.diameter)*0.05],
     ['풍속', 'd6v'+i, r.velocity, Math.abs(r.velocity)*0.05]
   ].forEach(x=>{
     const el=document.getElementById(x[1]);
     const val=n(el?.value);
     const ok=Number.isFinite(val)&&Math.abs(val-x[2])<=x[3];
     if(el){el.classList.toggle('duct-ok',ok);el.classList.toggle('duct-bad',!ok);}
     items.push({label:r.section+' '+x[0],ok});
   });
 });
 const pe=document.getElementById('d6p');
 const pv=n(pe?.value);
 const pok=Number.isFinite(pv)&&Math.abs(pv-q.fanPressure)<=Math.abs(q.fanPressure)*0.10;
 if(pe){pe.classList.toggle('duct-ok',pok);pe.classList.toggle('duct-bad',!pok);}
 items.push({label:'(2) 송풍기 필요정압',ok:pok});

 const unit=q.points/items.length;
 const out=items.map(it=>({
   label:it.label,
   status:it.ok?'correct':'wrong',
   score:it.ok?Math.round(unit*100)/100:0,
   max:Math.round(unit*100)/100
 }));
 const score=Math.round(out.reduce((s,x)=>s+x.score,0)*10)/10;
 return {score,out};
}
function matchingUI(q,st){
 const links=st.matchingLinks||(st.matchingLinks={});
 return `<style>
  .matching-answer{margin-top:8px;padding:18px;border:1px solid #cbd5e1;border-radius:14px;background:#f8fafc}
  .matching-board{position:relative;display:grid;grid-template-columns:minmax(180px,1fr) minmax(180px,1fr);gap:120px;max-width:820px;margin:16px auto;padding:8px 0}
  .matching-col{display:flex;flex-direction:column;gap:14px;position:relative;z-index:2}
  .matching-node{min-height:48px;padding:10px 16px;border:2px solid #94a3b8;border-radius:10px;background:#fff;color:#172033;font-size:16px;text-align:left;cursor:pointer;transition:.15s}
  .matching-right .matching-node{text-align:right}
  .matching-node:hover,.matching-node.selected{border-color:#1769aa;background:#eaf4ff}
  .matching-node.connected{border-color:#3b82f6;background:#eff6ff}
  .matching-lines{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;overflow:visible}
  .matching-lines line{stroke:#1769aa;stroke-width:3;stroke-linecap:round}
  .matching-actions{display:flex;justify-content:center;gap:8px;align-items:center;flex-wrap:wrap}
  @media(max-width:680px){.matching-board{gap:46px;grid-template-columns:minmax(125px,1fr) minmax(125px,1fr)}.matching-node{font-size:14px;padding:8px}.matching-lines line{stroke-width:2.5}}
 </style>
 <div class="matching-answer">
  <h3>선 연결 답안</h3>
  <div class="hint">왼쪽 용어를 먼저 누른 뒤, 관계있는 오른쪽 항목을 누르세요. 연결을 바꾸려면 같은 방법으로 다시 선택하세요.</div>
  <div class="matching-board" id="matchingBoard">
   <svg class="matching-lines" id="matchingLines" aria-hidden="true"></svg>
   <div class="matching-col matching-left">${q.matchingLeft.map((v,i)=>`<button type="button" class="matching-node${links[i]!=null?' connected':''}" data-match-left="${i}" onclick="selectMatchingLeft(${i})">${esc(v)}</button>`).join('')}</div>
   <div class="matching-col matching-right">${q.matchingRight.map((v,i)=>`<button type="button" class="matching-node${Object.values(links).some(right=>Number(right)===i)?' connected':''}" data-match-right="${i}" onclick="connectMatchingRight(${i})">${esc(v)}</button>`).join('')}</div>
  </div>
  <div class="matching-actions"><button type="button" onclick="clearMatchingLinks()">연결 모두 지우기</button><span id="matchingCount">${Object.keys(links).length} / ${q.matchingLeft.length} 연결</span></div>
 </div>`;
}
function selectMatchingLeft(i){
 const st=state[idx];st.matchingSelected=i;
 document.querySelectorAll('[data-match-left]').forEach(el=>el.classList.toggle('selected',Number(el.dataset.matchLeft)===i));
}
function connectMatchingRight(j){
 const st=state[idx],q=Q[idx];
 if(st.matchingSelected==null){
  const linked=Object.entries(st.matchingLinks||{}).find(([,right])=>Number(right)===j);
  if(linked)selectMatchingLeft(Number(linked[0]));
  return;
 }
 if(!st.matchingLinks)st.matchingLinks={};
 Object.keys(st.matchingLinks).forEach(left=>{if(Number(st.matchingLinks[left])===j)delete st.matchingLinks[left];});
 st.matchingLinks[st.matchingSelected]=j;
 st.matchingSelected=null;
 document.querySelectorAll('[data-match-left]').forEach(el=>{el.classList.remove('selected');el.classList.toggle('connected',st.matchingLinks[el.dataset.matchLeft]!=null);});
 document.querySelectorAll('[data-match-right]').forEach(el=>el.classList.toggle('connected',Object.values(st.matchingLinks).some(right=>Number(right)===Number(el.dataset.matchRight))));
 const count=document.getElementById('matchingCount');if(count)count.textContent=`${Object.keys(st.matchingLinks).length} / ${q.matchingLeft.length} 연결`;
 drawMatchingLines();
}
function clearMatchingLinks(){
 const st=state[idx];st.matchingLinks={};st.matchingSelected=null;
 document.querySelectorAll('.matching-node').forEach(el=>el.classList.remove('selected','connected'));
 const count=document.getElementById('matchingCount');if(count)count.textContent=`0 / ${Q[idx].matchingLeft.length} 연결`;
 drawMatchingLines();
}
function drawMatchingLines(){
 const board=document.getElementById('matchingBoard'),svg=document.getElementById('matchingLines');
 if(!board||!svg)return;
 const br=board.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${br.width} ${br.height}`);svg.innerHTML='';
 const links=state[idx].matchingLinks||{};
 Object.entries(links).forEach(([left,right])=>{
  const a=board.querySelector(`[data-match-left="${left}"]`),b=board.querySelector(`[data-match-right="${right}"]`);if(!a||!b)return;
  const ar=a.getBoundingClientRect(),rr=b.getBoundingClientRect(),line=document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('x1',ar.right-br.left);line.setAttribute('y1',ar.top+ar.height/2-br.top);line.setAttribute('x2',rr.left-br.left);line.setAttribute('y2',rr.top+rr.height/2-br.top);svg.appendChild(line);
 });
}
function render(){
 const sp=document.getElementById('solutionPanel'); if(sp)sp.classList.remove('show');

 const q=Q[idx], st=state[idx];
 chartDraw=st.chartDraw;
 chartZoom=st.chartZoom||1;
 document.getElementById('prog').textContent=`${idx+1} / ${Q.length}`;
 document.getElementById('meta').innerHTML=`<span class="badge">${q.id}번 · ${q.points}점</span><span class="badge type">${typeName(q.type)}</span><b>${q.title}</b>`;
 const problemEl=document.getElementById('problem');
 problemEl.className='problem '+((q.problemHtml||q.promptHtml)?'variant-problem ':((q.images||[]).length>1?'multi ':''))+(q.problemClass||'');
 problemEl.innerHTML=q.problemHtml||((q.promptHtml||'')+(q.images||[]).map((k,i)=>`
   <div class="problem-img-wrap" data-img-index="${i}">
     <img src="${IMGS[k]}" alt="${q.id}번 문제" onclick="openImgModal(this.src)">
     <svg class="problem-note-svg" data-img-index="${i}"></svg>
   </div>`).join(''));
 if(/^실전 모의고사\s*[1-6]$/.test(String(currentSessionTitle||''))){
   problemEl.querySelectorAll('.variant-kicker').forEach(el=>el.remove());
 }
 problemEl.innerHTML=formatRootsInSolutionHtml(problemEl.innerHTML);
 if(needsGeneralProblemMarkup(q)){
   problemEl.classList.add('general-markup-surface');
   problemEl.insertAdjacentHTML('beforeend',`<svg class="problem-note-svg problem-markup-svg" data-img-index="${GENERAL_PROBLEM_MARKUP_INDEX}" aria-label="문제 제목, 설계조건 및 질문에 직접 표시하는 필기 영역"></svg>`);
 }
 let w='';
 if(Array.isArray(q.answerOrder)) w+=orderedCalcDescUI(q,st);
 else{
  if(q.type.includes('calc')||q.showCalcMemo) w+=calcUI(q,st);
  if(q.type.includes('desc')) w+=descUI(q,st);
 }
 if(q.type==='desc'&&!q.showCalcMemo) w=descUI(q,st);
 if(q.type==='drawing') w=drawUI(q,st);
 if(q.type==='drawing_desc') w=drawUI(q,st)+descUI(q,st);
 if(q.type==='drawing_calc') w=drawUI(q,st)+calcUI(q,st);
 if(q.type.startsWith('annot_drawing')){ const drawTargetHint=q.chart==='psych'?'아래 습공기선도를 클릭한 뒤 화면 왼쪽의 통합 그리기 도구로 상태점과 상태변화 과정을 작성하세요.':'문제 도면을 클릭한 뒤 화면 왼쪽의 통합 그리기 도구로 배관과 냉매 흐름을 작성하세요.'; w=`<div class="hint" style="margin:10px 0 14px"><b>작도 답안:</b> ${drawTargetHint}</div>`+w; }
 if(q.chart) w+=chartUI(q);
 if(q.type==='compare_table') w=compareTableUI(q,st);
 if(q.type==='matching') w=matchingUI(q,st);
 document.getElementById('work').innerHTML=w;
 document.body.classList.toggle('has-calc-memo',q.type.includes('calc')||q.showCalcMemo||q.type==='duct_table');
 if(q.type.includes('drawing')) setTimeout(()=>initDrawing(q),0);
 if(q.chart) setTimeout(()=>{initChartDrawingSurface();setActiveDrawSurface('chart');setUnifiedTool(unifiedTool);zoomChart(0);renderChartDraw()},0);
 setTimeout(()=>initProblemAnnotations(),0);
 if(q.type==='matching')setTimeout(drawMatchingLines,0);
 document.getElementById('feedback').className='feedback';
 document.getElementById('feedback').innerHTML='';
 document.getElementById('result').className='result';
 document.getElementById('prev').disabled=idx===0;
 document.getElementById('next').textContent=idx===Q.length-1?'처음으로':'다음 →';

renderDuctTableAnswer(Q[idx]);
}
const GENERAL_PROBLEM_MARKUP_INDEX=9999;
function needsGeneralProblemMarkup(q){
 return q.allowProblemMarkup===true || (!q.chart && !String(q.type||'').includes('drawing'));
}
function typeName(t){return {calc:'계산형',calc_desc:'계산+서술형',calc_chart:'계산+선도형',desc:'서술형',drawing:'작도형',drawing_desc:'작도+서술형',drawing_calc:'작도+계산형',annot_drawing:'작도형',annot_drawing_desc:'작도+서술형',annot_drawing_calc:'작도+계산형',duct_table:'표입력 계산형',compare_table:'표입력형',matching:'선 연결형'}[t]||t}
function compareTableUI(q,st){
 return `<h3>비교표 답안</h3><table class="mock5-compare-table"><thead><tr><th>비교항목</th><th>R-22</th><th>암모니아(NH₃)</th></tr></thead><tbody>${(q.compareRows||[]).map((r,i)=>`<tr><td>${r.label}</td><td><input id="cmp_r_${i}" inputmode="numeric" maxlength="1" value="${esc(st.answers['cmp_r_'+i]||'')}" placeholder="①/②"></td><td><input id="cmp_n_${i}" inputmode="numeric" maxlength="1" value="${esc(st.answers['cmp_n_'+i]||'')}" placeholder="①/②"></td></tr>`).join('')}</tbody></table><div class="hint">숫자 1·2 또는 기호 ①·②로 입력할 수 있습니다.</div>`;
}
function normalizeChoice(v){return String(v||'').trim().replace('①','1').replace('②','2');}

function finalAnswerUnitForLabel(field){
 const units=Array.isArray(field?.units)?field.units:(field?.units?[field.units]:[]);
 const raw=units.find(unit=>String(unit).trim())||'';
 const key=String(raw).toLowerCase();
 const known={
  'kw':'kW','w':'W','kj/h':'kJ/h','kj/kg':'kJ/kg','kjkg':'kJ/kg',
  'kw/m2k':'kW/(m²·K)','kw/m²k':'kW/(m²·K)','kw/(m2k)':'kW/(m²·K)','kw/(m²k)':'kW/(m²·K)',
  'w/m2k':'W/(m²·K)','w/m²k':'W/(m²·K)','w/m²·k':'W/(m²·K)','w/(m2k)':'W/(m²·K)','w/(m²k)':'W/(m²·K)',
  'm2k/w':'m²·K/W','m²k/w':'m²·K/W','m2·k/w':'m²·K/W','m²·k/w':'m²·K/W',
  'm2k/kw':'m²·K/kW','m²k/kw':'m²·K/kW','m2·k/kw':'m²·K/kW','m²·k/kw':'m²·K/kW',
  'm2':'m²','m²':'m²','m³/s':'m³/s','m3/s':'m³/s','m/s':'m/s',
  'm³/h':'m³/h','m3/h':'m³/h','kg/s':'kg/s','kg/h':'kg/h','kg/kg':'kg/kg','l/min':'L/min',
  'rt':'RT','pa':'Pa','kpa':'kPa','mpa':'MPa','℃':'℃','c':'℃','cm':'cm','mm':'mm','m':'m',
  '%':'%','a':'A','rpm':'rpm','개':'개','원':'원','시':'시','열':'열'
 };
 return known[key]||raw;
}

function finalAnswerLabelWithUnit(field){
 const label=String(field?.label||'정답');
 if(!/^실전 모의고사\s*[1-6]$/.test(String(currentSessionTitle||'')))return label;
 if(/\[[^\]]+\]\s*$/.test(label))return label;
 const unit=finalAnswerUnitForLabel(field);
 const unitKey=String(unit||'').trim().toLowerCase();
 const unitless=new Set(['','cop','shf','무단위','배','번','3:1']);
 return unitless.has(unitKey)?label:`${label} [${unit}]`;
}

function mock6Q13TableAnswerUI(q,st){
 const sections=['P–Q','Q–R','R–S','Q–T','T–W','W–X'];
 const headings=['풍량','지름','저항'];
 const rows=sections.map((section,row)=>{
  const cells=headings.map((heading,offset)=>{
   const i=row*3+offset;
   return `<td><input class="answer" id="a${i}" inputmode="decimal" value="${esc(st.answers[i]||'')}" placeholder="숫자 입력" aria-label="${section} ${heading}"></td>`;
  }).join('');
  return `<tr><td>${section}</td>${cells}</tr>`;
 }).join('');
 return `<h3>최종답</h3><table class="m6q13-answer m6q13-input-table" aria-label="13번 구간별 최종답 입력표"><thead><tr><th>구간</th><th>풍량 (m³/h)</th><th>지름 (cm)</th><th>저항 (Pa)</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function calcUI(q,st){
 const finalAnswerUi=(q.fields||[]).length?(q.sourceId==='mock6-equal-friction-duct-01'?mock6Q13TableAnswerUI(q,st):`<h3>최종답</h3><div class="answer-grid">${q.fields.map((f,i)=>`<div class="ans"><label>${finalAnswerLabelWithUnit(f)}</label><input class="answer" id="a${i}" value="${esc(st.answers[i]||'')}" placeholder="숫자와 단위를 함께 입력"></div>`).join('')}</div>`):'';
 return `<div class="calc-memo-panel">
 <div class="memo-panel-heading"><h3>계산과정 메모장</h3><span class="memo-sticky-label">화면 고정</span></div>
 <div class="toolbar"><button onclick="insertText('×')">×</button><button onclick="insertText('÷')">÷</button><button onclick="insertFraction()">분수</button><button onclick="insertText('√(')">√</button><button onclick="insertText('ln(')">ln</button><button onclick="insertPower()">제곱</button><button onclick="solveCurrentLine()">Solve</button><button onclick="clearMemo()">전체 지우기</button><button class="primary" onclick="calculateLine()">계산하기</button></div>
 <div class="hint">단축키: *→×, /→÷, Ctrl+/→분수, Ctrl+R→√, Ctrl+I→ln, Ctrl+P→제곱, Ctrl+S→Solve, Ctrl+Enter→계산 · 분수 안에서는 → 또는 Tab으로 분자→분모→일반 입력 이동 · 지수 입력 후 → 또는 Tab을 누르면 일반 입력으로 이동</div>
 <div id="memo" class="memo" contenteditable="true">${st.memo||''}</div>
 </div>${finalAnswerUi}`;
}
function orderedCalcDescUI(q,st){
 const memo=calcUI(Object.assign({},q,{fields:[]}),st);
 const answers=(q.answerOrder||[]).map(key=>{
  if(/^a\d+$/.test(key)){
   const i=Number(key.slice(1)),f=(q.fields||[])[i];
   return f?`<div class="ans"><label>${finalAnswerLabelWithUnit(f)}</label><input class="answer" id="a${i}" value="${esc(st.answers[i]||'')}" placeholder="숫자와 단위를 함께 입력"></div>`:'';
  }
  if(/^d\d+$/.test(key)){
   const i=Number(key.slice(1)),d=(q.desc||[])[i];
   return d?`<div class="desc"><label>${d.label}</label><textarea id="d${i}" placeholder="답안을 작성하세요.">${esc(st.answers['d'+i]||'')}</textarea></div>`:'';
  }
  return '';
 }).join('');
 return `${memo}<h3>답안</h3><div class="ordered-answer-list">${answers}</div>`;
}
function descUI(q,st){
 return `<h3>서술형 답안</h3>${(q.desc||[]).map((d,i)=>`<div class="desc"><label>${d.label}</label><textarea id="d${i}" placeholder="답안을 작성하세요.">${esc(st.answers['d'+i]||'')}</textarea></div>`).join('')}`;
}
function chartUI(q){
 const isDuct=q.chart==='duct';
 const stageStyle=isDuct?'position:relative;display:inline-block;width:583px;max-width:100%;min-width:0':'position:relative;display:inline-block;min-width:100%';
 return `<div class="chartbox ${isDuct?'duct-chart':''}"><h3>${q.chart==='psych'?'습공기선도':'덕트선도 답안작성'}</h3>
<div class="zoomrow"><button onclick="zoomChart(-.2)">축소</button><button onclick="zoomChart(.2)">확대</button><button onclick="zoomReset()">100%</button><span id="zoomlabel">100%</span></div>
<div class="chartviewport" id="chartview"><div id="chartstage" data-chart="${q.chart}" style="${stageStyle}"><img id="chartimg" src="${IMGS[q.chart]}" style="width:100%;display:block"><svg id="chartsvg" style="position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair"></svg></div></div>
<div class="hint">화면 왼쪽의 통합 그리기 도구를 사용하세요. 선도를 클릭하면 도구의 작업 대상이 이 선도로 바뀝니다.</div></div>`;
}
function drawUI(q,st){
 return `<div class="drawbox"><h3>작도 답안</h3><div class="drawtools" id="drawtools">
 <button data-tool="line" onclick="setTool('line')">직선</button><button data-tool="arrow" onclick="setTool('arrow')">화살표</button><button data-tool="point" onclick="setTool('point')">점</button><button data-tool="text" onclick="setTool('text')">텍스트</button><button data-tool="erase" onclick="setTool('erase')">지우개</button><button onclick="undoDraw()">실행취소</button><button onclick="redoDraw()">다시실행</button><button onclick="clearDraw()">전체삭제</button>
 </div><div class="drawstage" id="drawstage"><img class="bg" id="drawbg" src="${IMGS[q.drawBg]}"><svg id="drawsvg"></svg></div><div class="hint">직선/화살표는 시작점과 끝점을 차례로 클릭하세요. 텍스트는 버튼을 누른 뒤 원하는 위치를 클릭하세요.</div></div>`;
}
function save(){
 const q=Q[idx],st=state[idx],m=document.getElementById('memo'); if(m)st.memo=m.innerHTML;
 (q.fields||[]).forEach((_,i)=>st.answers[i]=document.getElementById('a'+i)?.value||'');
 (q.desc||[]).forEach((_,i)=>st.answers['d'+i]=document.getElementById('d'+i)?.value||'');

 if(q.type==='compare_table'){
   (q.compareRows||[]).forEach((_,i)=>{
     st.answers['cmp_r_'+i]=document.getElementById('cmp_r_'+i)?.value||'';
     st.answers['cmp_n_'+i]=document.getElementById('cmp_n_'+i)?.value||'';
   });
 }

 if(q.type==='duct_table'){
   for(let i=0;i<5;i++){
     st.answers['d6f'+i]=document.getElementById('d6f'+i)?.value||'';
     st.answers['d6d'+i]=document.getElementById('d6d'+i)?.value||'';
     st.answers['d6v'+i]=document.getElementById('d6v'+i)?.value||'';
   }
   st.answers['d6p']=document.getElementById('d6p')?.value||'';
 }
}

function appendSolutionImages(q){
  const panel=document.getElementById('solutionPanel');
  const content=document.getElementById('solutionContent');
  if(!panel||!content||!q) return;
  const old=content.querySelector('.solution-images');
  if(old) old.remove();
  if(Array.isArray(q.solutionImages)&&q.solutionImages.length){
    const box=document.createElement('div');
    box.className='solution-images';
    q.solutionImages.forEach(function(key){
      if(IMGS[key]){
        const img=document.createElement('img');
        img.src=IMGS[key];
        img.alt='정답 해설';
        img.onclick=function(){ openImgModal(this.src); };
        box.appendChild(img);
      }
    });
    content.appendChild(box);
  }
}

function gradeCurrent(){
 save(); const q=Q[idx]; let total=0,out=[];
 if(q.fields){
 q.fields.forEach((f,i)=>{const raw=state[idx].answers[i]||'';let ok=false;
   if(f.text) ok=f.text.some(t=>norm(raw)===norm(t));
   else{
    const p=parseAns(raw);
    const converted=answerValueInExpectedUnit(p,f);
    const tolerance=gradingTolerance(q,f);
    ok=Number.isFinite(converted)&&Math.abs(converted-f.v)<=tolerance;
   }
   if(ok)total+=f.p;out.push({label:f.label,status:ok?'correct':'wrong',score:ok?f.p:0,max:f.p,raw,answerKey:'a'+i});
  });
 }
 if(q.desc){
  q.desc.forEach((d,i)=>{const txt=state[idx].answers['d'+i]||'',hits=d.groups.filter(g=>g.some(k=>norm(txt).includes(norm(k)))).length,ratio=Math.min(hits,d.need)/d.need;
   let status=hits>=d.need?'correct':hits>0?'partial':'wrong',sc=status==='correct'?d.p:status==='partial'?Math.round(d.p*ratio*10)/10:0;
   const ov=state[idx].manual[i]; if(ov==='correct'){status='correct';sc=d.p} if(ov==='wrong'){status='wrong';sc=0}
   total+=sc;out.push({label:d.label,status,score:sc,max:d.p,hits,need:d.need,ref:d.ref,descIndex:i,answerKey:'d'+i});
  });
 }
 if(Array.isArray(q.answerOrder)){
  const order=new Map(q.answerOrder.map((key,i)=>[key,i]));
  out.sort((a,b)=>(order.get(a.answerKey)??999)-(order.get(b.answerKey)??999));
 }
 if(q.type==='compare_table'){
  total=0;out=[];
  const cellPoint=q.points/((q.compareRows||[]).length*2);
  (q.compareRows||[]).forEach((r,i)=>{
    [['R-22','cmp_r_'+i,r.r22],['암모니아','cmp_n_'+i,r.nh3]].forEach(([name,key,ans])=>{
      const raw=state[idx].answers[key]||'';
      const ok=normalizeChoice(raw)===ans;
      const el=document.getElementById(key);
      if(el){el.classList.toggle('duct-ok',ok);el.classList.toggle('duct-bad',!ok);}
      if(ok) total+=cellPoint;
      out.push({label:r.label+' · '+name,status:ok?'correct':'wrong',score:ok?cellPoint:0,max:cellPoint,raw});
    });
  });
 }
 if(q.type==='matching'){
  total=0;out=[];
  const links=state[idx].matchingLinks||{};
  (q.matchingLeft||[]).forEach((label,i)=>{
   const right=links[i],ok=Number(right)===Number(q.matchingAnswer[i]),point=Number(q.matchingPoints?.[i]||0);
   if(ok)total+=point;
   out.push({label:`${label} ↔ ${right==null?'미연결':q.matchingRight[right]}`,status:ok?'correct':'wrong',score:ok?point:0,max:point});
  });
 }
 if(q.type.includes('drawing')){
  const dp=q.drawPoints??q.points-(q.fields||[]).reduce((s,f)=>s+f.p,0)-(q.desc||[]).reduce((s,d)=>s+d.p,0);
  let sc=state[idx].drawGrade==='correct'?dp:state[idx].drawGrade==='partial'?Math.round(dp*.5*10)/10:0;
  total+=sc;out.push({label:'작도 답안',status:state[idx].drawGrade||'review',score:sc,max:dp,draw:true,ref:q.manualRef});
 }
 if(q.type==='duct_table'){
  const dg=gradeDuctTable(q);
  total=dg.score;
  out=dg.out;
}
scores[idx]=Math.round(total*10)/10;details[idx]=out;showFeedback(q,out);
 if(idx===Q.length-1)finish();

  appendSolutionImages(Q[idx]);
}
function showFeedback(q,out){
 const f=document.getElementById('feedback'),sym=s=>s==='correct'?'○':s==='partial'?'△':s==='wrong'?'×':'?';
 f.className='feedback show '+(out.every(x=>x.status==='correct')?'ok':'warn');
 f.innerHTML=`<b>현재 문제: ${scores[idx]} / ${q.points}점</b><br><br>`+out.map(x=>{
  if(x.draw)return `${sym(x.status)} ${x.label} · ${x.score}/${x.max}점<div class="manual-review"><b>직접 확인:</b> ${x.ref}<div style="margin-top:7px"><button class="good" onclick="drawJudge('correct')">정답</button> <button onclick="drawJudge('partial')">부분정답</button> <button class="bad" onclick="drawJudge('wrong')">오답</button></div></div>`;
  let review=x.status==='partial'?`<div class="manual-review"><b>△ 직접 확인</b><br>모범답안: ${x.ref}<div style="margin-top:7px"><button class="good" onclick="manualJudge(${x.descIndex},'correct')">정답으로 인정</button> <button class="bad" onclick="manualJudge(${x.descIndex},'wrong')">오답 처리</button> <button onclick="manualJudge(${x.descIndex},null)">자동판정 복귀</button></div></div>`:'';
  return `${sym(x.status)} ${x.label} · ${x.score}/${x.max}점${x.hits!=null?` · 핵심항목 ${x.hits}/${x.need}`:''}${review}`;
 }).join('<br><br>');
}
function manualJudge(i,v){state[idx].manual[i]=v;gradeCurrent()}
function drawJudge(v){state[idx].drawGrade=v;gradeCurrent()}
function finish(){
 clearInterval(timerId);const total=Math.round(scores.reduce((a,b)=>a+b,0)*10)/10,maxTotal=Math.round(Q.reduce((a,q)=>a+q.points,0)*10)/10,rate=maxTotal?Math.round(total/maxTotal*1000)/10:0,elapsed=Date.now()-start;
 const rows=Q.map((q,i)=>`<tr><td>${i+1}</td><td>${typeName(q.type)}</td><td>${scores[i]} / ${q.points}</td></tr>`).join('');
 const isFull=Q.length===14;
 const r=document.getElementById('result');r.className='result show';r.innerHTML=`<div class="score">${total} / ${maxTotal}점</div><b>${isFull?(rate>=60?'합격':'불합격'):'정답률 '+rate+'%'}</b><div style="margin-top:7px">총 소요시간 ${fmt(elapsed)}</div><table><tr><th>문제</th><th>유형</th><th>득점</th></tr>${rows}</table><div class="hint">${isFull?'실전 모의고사 합격 기준은 60점입니다.':'빠른 문제풀이는 연습용이며 합격·불합격을 표시하지 않습니다.'}</div>`;
 if(!sessionCompletionTracked){
  const isQuick=isQuickSessionTitle(currentSessionTitle);
  sendAnalyticsEvent(isQuick?'quick_practice_complete':'exam_complete',{
   session_name:currentSessionTitle,
   question_count:Q.length,
   score:total,
   max_score:maxTotal,
   score_rate:rate,
   elapsed_seconds:Math.round(elapsed/1000)
  });
  sessionCompletionTracked=true;
 }
}
function go(d){save();idx=(idx+d+Q.length)%Q.length;render();window.scrollTo({top:0,behavior:'smooth'})}
window.addEventListener('resize',()=>{if(Q[idx]?.type==='matching')drawMatchingLines()});
let chartZoom=1,chartTool='pencil',chartPending=null,chartDraw=[];
let chartDragging=false,chartStart=null,chartPreview=null;
let selectedChartIndex=-1,moveStart=null,moveOriginal=null;
let chartGestureSvg=null;

/*
 * 시험 화면과 이용안내 화면에 같은 chart* id가 존재하므로,
 * 현재 사용 중인 화면 안에서만 선도 요소를 찾는다.
 */
function activeChartElement(id){
  const guide=document.querySelector(`#info-guide.show #${id}`);
  if(guide)return guide;
  const exam=document.querySelector(`#work #${id}`);
  if(exam)return exam;
  return document.getElementById(id);
}

function zoomChart(d){
  chartZoom=Math.max(.5,Math.min(3,chartZoom+d));
  const st=activeChartElement('chartstage');
  if(st){
    if(st.dataset.chart==='duct'){
      st.style.width=(583*chartZoom)+'px';
      st.style.maxWidth=chartZoom===1?'100%':'none';
    }else{
      st.style.width=(chartZoom*100)+'%';
    }
  }
  if(state[idx])state[idx].chartZoom=chartZoom;
  const z=activeChartElement('zoomlabel');
  if(z)z.textContent=Math.round(chartZoom*100)+'%';
}
function zoomReset(){chartZoom=1;zoomChart(0)}

function setChartTool(t){
  chartTool=t;
  chartPending=null;
  chartDragging=false;
  chartStart=null;
  chartPreview=null;
  moveStart=null;
  moveOriginal=null;
  if(t!=='select') selectedChartIndex=-1;
  renderChartDraw();
}

function chartPointFromEvent(ev,sourceSvg){
  const svg=sourceSvg||activeChartElement('chartsvg');
  if(!svg)return null;
  const r=svg.getBoundingClientRect();
  return {
    x:(ev.clientX-r.left)/r.width*100,
    y:(ev.clientY-r.top)/r.height*100
  };
}

function distToSegment(p,o){
  const x1=o.x1,y1=o.y1,x2=o.x2,y2=o.y2;
  const vx=x2-x1,vy=y2-y1;
  const wx=p.x-x1,wy=p.y-y1;
  const len2=vx*vx+vy*vy || 1;
  let t=(wx*vx+wy*vy)/len2;
  t=Math.max(0,Math.min(1,t));
  const px=x1+t*vx,py=y1+t*vy;
  return Math.hypot(p.x-px,p.y-py);
}

function findNearestChartObject(p,maxDist=4){
  let best=-1,bd=999;
  chartDraw.forEach((o,i)=>{
    let d;
    if(o.t==='point'){
      d=Math.hypot(o.x-p.x,o.y-p.y);
    }else if(o.t==='pencil'||o.t==='highlighter'){
      d=strokeDistance(p,o);
    }else{
      d=distToSegment(p,o);
    }
    if(d<bd){bd=d;best=i}
  });
  return (best>=0 && bd<=maxDist)?best:-1;
}

function chartSvgFromPointerEvent(e){
  const target=e?.target;
  if(!target||typeof target.closest!=='function')return null;
  return target.closest('#work #chartsvg')||target.closest('#info-guide.show #chartsvg');
}

function claimChartPointerEvent(e){
  if(!e||e.__chartDrawingHandled)return false;
  e.__chartDrawingHandled=true;
  return true;
}

function onChartPointerDown(e,sourceSvg){
  const svg=sourceSvg||e.currentTarget;
  if(!svg||svg.id!=='chartsvg'||!claimChartPointerEvent(e))return;
  e.preventDefault();
  const p=chartPointFromEvent(e,svg);
  if(!p)return;
  chartGestureSvg=svg;
  setActiveDrawSurface('chart');

  if(chartTool==='select'){
    const hit=findNearestChartObject(p,5);
    selectedChartIndex=hit;
    if(hit>=0){
      moveStart=p;
      moveOriginal=JSON.parse(JSON.stringify(chartDraw[hit]));
      chartDragging=true;
      try{svg.setPointerCapture(e.pointerId)}catch(_){}
      renderChartDraw();
    }else{
      chartGestureSvg=null;
      renderChartDraw();
    }
    return;
  }

  if(chartTool==='point'){
    chartDraw.push({t:'point',...p});
    selectedChartIndex=chartDraw.length-1;
    chartGestureSvg=null;
    renderChartDraw();
    return;
  }

  if(chartTool==='erase'){
    eraseChartNearest(p);
    chartGestureSvg=null;
    return;
  }

  if(chartTool==='pencil'||chartTool==='highlighter'){
    chartDragging=true;
    chartPreview={t:chartTool,pts:[p]};
    try{svg.setPointerCapture(e.pointerId)}catch(_){}
    renderChartDraw();
    return;
  }

  chartDragging=true;
  chartStart=p;
  chartPreview={t:chartTool==='dash'?'dash':'solid',x1:p.x,y1:p.y,x2:p.x,y2:p.y};
  try{svg.setPointerCapture(e.pointerId)}catch(_){}
  renderChartDraw();
}

function onChartPointerMove(e,sourceSvg){
  if(!chartDragging)return;
  const svg=sourceSvg||chartGestureSvg||e.currentTarget;
  if(!svg||svg.id!=='chartsvg'||!claimChartPointerEvent(e))return;
  e.preventDefault();
  const p=chartPointFromEvent(e,svg);
  if(!p)return;

  if(chartTool==='select' && selectedChartIndex>=0 && moveStart && moveOriginal){
    const dx=p.x-moveStart.x,dy=p.y-moveStart.y;
    const o=chartDraw[selectedChartIndex];
    if(moveOriginal.t==='point'){
      o.x=moveOriginal.x+dx;
      o.y=moveOriginal.y+dy;
    }else if(moveOriginal.t==='pencil'||moveOriginal.t==='highlighter'){
      o.pts=moveOriginal.pts.map(pt=>({x:pt.x+dx,y:pt.y+dy}));
    }else{
      o.x1=moveOriginal.x1+dx;
      o.y1=moveOriginal.y1+dy;
      o.x2=moveOriginal.x2+dx;
      o.y2=moveOriginal.y2+dy;
    }
    renderChartDraw();
    return;
  }

  if((chartTool==='pencil'||chartTool==='highlighter') && chartPreview){
    chartPreview.pts.push(p);
    renderChartDraw();
    return;
  }

  if(chartStart){
    chartPreview={
      t:chartTool==='dash'?'dash':'solid',
      x1:chartStart.x,y1:chartStart.y,
      x2:p.x,y2:p.y
    };
    renderChartDraw();
  }
}

function onChartPointerUp(e,sourceSvg){
  if(!chartDragging){chartGestureSvg=null;return}
  const svg=sourceSvg||chartGestureSvg||e.currentTarget;
  if(!svg||svg.id!=='chartsvg'||!claimChartPointerEvent(e))return;
  e.preventDefault();

  if(chartTool==='select'){
    chartDragging=false;
    moveStart=null;
    moveOriginal=null;
    chartGestureSvg=null;
    try{svg?.releasePointerCapture(e.pointerId)}catch(_){}
    renderChartDraw();
    return;
  }

  if((chartTool==='pencil'||chartTool==='highlighter') && chartPreview){
    if(chartPreview.pts.length>1){
      chartDraw.push(chartPreview);
      selectedChartIndex=chartDraw.length-1;
    }
    chartDragging=false;
    chartPreview=null;
    chartGestureSvg=null;
    try{svg?.releasePointerCapture(e.pointerId)}catch(_){}
    renderChartDraw();
    return;
  }

  if(!chartStart){chartGestureSvg=null;return}
  const p=chartPointFromEvent(e,svg);
  chartDragging=false;

  if(p){
    const dx=p.x-chartStart.x,dy=p.y-chartStart.y;
    if(Math.hypot(dx,dy)>.3){
      chartDraw.push({
        t:chartTool==='dash'?'dash':'solid',
        x1:chartStart.x,y1:chartStart.y,
        x2:p.x,y2:p.y
      });
      selectedChartIndex=chartDraw.length-1;
    }
  }

  chartStart=null;
  chartPreview=null;
  chartGestureSvg=null;
  try{svg?.releasePointerCapture(e.pointerId)}catch(_){}
  renderChartDraw();
}

function initChartDrawingSurface(){
  const svg=activeChartElement('chartsvg');
  if(!svg||svg.dataset.chartDrawingBound==='1')return;
  svg.dataset.chartDrawingBound='1';
  svg.addEventListener('pointerdown',onChartPointerDown);
  svg.addEventListener('pointermove',onChartPointerMove);
  svg.addEventListener('pointerup',onChartPointerUp);
  svg.addEventListener('pointercancel',onChartPointerUp);
}

/*
 * 일부 브라우저/내장 뷰어에서 동적으로 만든 SVG의 직접 리스너가 누락되는
 * 경우를 대비한다. 캡처 단계에서 실제 시험용 선도 SVG를 다시 찾아 같은
 * 포인터 동작으로 전달하며, 처리 표식으로 직접 리스너와의 중복 실행을 막는다.
 */
(function bindChartDrawingCaptureFallback(){
  if(document.documentElement.dataset.chartCaptureBound==='1')return;
  document.documentElement.dataset.chartCaptureBound='1';
  document.addEventListener('pointerdown',e=>{
    const svg=chartSvgFromPointerEvent(e);
    if(svg)onChartPointerDown(e,svg);
  },true);
  document.addEventListener('pointermove',e=>{
    if(chartDragging&&chartGestureSvg)onChartPointerMove(e,chartGestureSvg);
  },true);
  document.addEventListener('pointerup',e=>{
    if(chartDragging&&chartGestureSvg)onChartPointerUp(e,chartGestureSvg);
  },true);
  document.addEventListener('pointercancel',e=>{
    if(chartDragging&&chartGestureSvg)onChartPointerUp(e,chartGestureSvg);
  },true);
})();

function addChartShape(svg,o,index,preview=false){
  let el;
  if(o.t==='point'){
    el=document.createElementNS('http://www.w3.org/2000/svg','circle');
    el.setAttribute('cx',o.x+'%');
    el.setAttribute('cy',o.y+'%');
    el.setAttribute('r','.25');
    el.setAttribute('fill',preview?'#2563eb':(index===selectedChartIndex?'#7c3aed':'#d00'));
  }else if(o.t==='pencil'||o.t==='highlighter'){
    el=document.createElementNS('http://www.w3.org/2000/svg','path');
    el.setAttribute('d',pathD(o.pts));
    el.setAttribute('fill','none');
    el.setAttribute('stroke-linecap','round');
    el.setAttribute('stroke-linejoin','round');
    el.setAttribute('stroke',o.t==='highlighter'?'rgba(255,235,59,.58)':'#202020');
    el.setAttribute('stroke-width',o.t==='highlighter'?'14':'2.5');
    if(index===selectedChartIndex)el.setAttribute('filter','drop-shadow(0 0 2px #7c3aed)');
  }else{
    el=document.createElementNS('http://www.w3.org/2000/svg','line');
    ['x1','y1','x2','y2'].forEach(k=>el.setAttribute(k,o[k]+'%'));
    el.setAttribute('stroke',preview?'#2563eb':'#d00');
    el.setAttribute('stroke-width',index===selectedChartIndex?'4.5':(preview?'3.5':'2.5'));
    if(o.t==='dash')el.setAttribute('stroke-dasharray','8 6');
    if(index===selectedChartIndex){
      el.setAttribute('filter','drop-shadow(0 0 2px #7c3aed)');
      el.setAttribute('stroke','#7c3aed');
    }
    if(preview)el.setAttribute('opacity','0.95');
  }
  el.setAttribute('vector-effect','non-scaling-stroke');
  el.style.pointerEvents='none';
  svg.appendChild(el);
}

function renderChartDraw(){
  const svg=activeChartElement('chartsvg');
  if(!svg)return;
  svg.setAttribute('viewBox','0 0 100 100');
  svg.setAttribute('preserveAspectRatio','none');
  svg.innerHTML='';
  chartDraw.forEach((o,i)=>addChartShape(svg,o,i,false));
  if(chartPreview)addChartShape(svg,chartPreview,-1,true);
}

function eraseChartNearest(p){
  const best=findNearestChartObject(p,5);
  if(best>=0){
    chartDraw.splice(best,1);
    if(selectedChartIndex===best)selectedChartIndex=-1;
    else if(selectedChartIndex>best)selectedChartIndex--;
    renderChartDraw();
  }
}

function undoChartDraw(){
  chartDraw.pop();
  selectedChartIndex=-1;
  chartStart=null;
  chartPreview=null;
  renderChartDraw();
}
function clearChartDraw(){
  chartDraw=[];
  if(state[idx])state[idx].chartDraw=chartDraw;
  selectedChartIndex=-1;
  chartStart=null;
  chartPreview=null;
  renderChartDraw();
}


// ---------- 문제 이미지와 선도에서 함께 쓰는 통합 그리기 도구 ----------
let unifiedTool='pencil';
let annotTool='pencil';
let activeDrawSurface={type:'problem',imgIndex:0};
let annotDrawing=false;
let annotCurrent=null;
let annotPointerId=null;

function setActiveDrawSurface(type,imgIndex=0){
  activeDrawSurface={type,imgIndex};
  const label=document.getElementById('drawTargetLabel');
  if(label){
    const q=Q[idx];
    label.textContent='그리기 도구';
    label.title=type==='chart'
      ?`작업 대상: ${q?.chart==='psych'?'습공기선도':'덕트선도'}`
      :type==='question'
        ?'작업 대상: 문제 제목·설계조건·질문 전체'
        :`작업 대상: 문제 이미지${(q?.images||[]).length>1?' '+(imgIndex+1):''}`;
  }
}

function setUnifiedTool(t){
  unifiedTool=t;
  annotTool=t;
  setChartTool(t==='browse'?'select':t==='eraser'?'erase':t);
  document.querySelectorAll('#floatingAnnotTools [data-annot]').forEach(b=>{
    b.classList.toggle('active',b.dataset.annot===t);
  });
  document.querySelectorAll('.problem-note-svg').forEach(svg=>{
    const reading=t==='browse';
    svg.classList.toggle('is-reading',reading);
    svg.style.cursor=reading?'auto':t==='eraser'?'cell':t==='select'?'move':'crosshair';
  });
  const chartSvg=activeChartElement('chartsvg');
  if(chartSvg){
    chartSvg.style.pointerEvents=t==='browse'?'none':'auto';
    chartSvg.style.cursor=t==='browse'?'auto':t==='eraser'?'cell':t==='select'?'move':'crosshair';
  }
}
function setAnnotTool(t){setUnifiedTool(t)}
setTimeout(()=>setUnifiedTool('pencil'),0);

function annotPoint(ev,svg){
  const r=svg.getBoundingClientRect();
  return {
    x:(ev.clientX-r.left)/r.width*100,
    y:(ev.clientY-r.top)/r.height*100
  };
}

function getAnnotList(imgIndex){
  const st=state[idx];
  if(!st.annots)st.annots={};
  if(!st.annotRedo)st.annotRedo={};
  if(!st.annots[imgIndex])st.annots[imgIndex]=[];
  if(!st.annotRedo[imgIndex])st.annotRedo[imgIndex]=[];
  return st.annots[imgIndex];
}

function initProblemAnnotations(){
  document.querySelectorAll('.problem-note-svg').forEach(svg=>{
    const i=Number(svg.dataset.imgIndex);
    renderAnnotSvg(svg,i);

    svg.addEventListener('pointerdown',onAnnotDown);
    svg.addEventListener('pointermove',onAnnotMove);
    svg.addEventListener('pointerup',onAnnotUp);
    svg.addEventListener('pointercancel',onAnnotUp);
  });
  const questionLayer=document.querySelector('.problem-markup-svg');
  if(!Q[idx].chart){
    setActiveDrawSurface(questionLayer?'question':'problem',questionLayer?GENERAL_PROBLEM_MARKUP_INDEX:0);
  }
  if(questionLayer)unifiedTool='browse';
  else if(unifiedTool==='browse')unifiedTool='pencil';
  setUnifiedTool(unifiedTool);
}

function onAnnotDown(e){
  const svg=e.currentTarget;
  const i=Number(svg.dataset.imgIndex);
  const p=annotPoint(e,svg);
  setActiveDrawSurface(svg.classList.contains('problem-markup-svg')?'question':'problem',i);

  if(annotTool==='browse')return;

  if(annotTool==='eraser'){
    eraseAnnotNearest(i,p);
    return;
  }
  if(annotTool==='point'){
    getAnnotList(i).push({tool:'point',pts:[p]});
    state[idx].annotRedo[i]=[];
    renderAnnotSvg(svg,i);
    return;
  }
  if(annotTool==='select'){
    const hit=findNearestAnnot(i,p,4.5);
    if(hit<0)return;
    annotDrawing=true;
    annotPointerId=e.pointerId;
    annotCurrent={tool:'select',selectIndex:hit,start:p,original:JSON.parse(JSON.stringify(getAnnotList(i)[hit]))};
    try{svg.setPointerCapture(e.pointerId)}catch(_){}
    return;
  }

  annotDrawing=true;
  annotPointerId=e.pointerId;
  annotCurrent={tool:annotTool,pts:(annotTool==='solid'||annotTool==='dash')?[p,p]:[p]};
  try{svg.setPointerCapture(e.pointerId)}catch(_){}
}

function onAnnotMove(e){
  if(!annotDrawing || e.pointerId!==annotPointerId || !annotCurrent)return;
  const svg=e.currentTarget;
  const p=annotPoint(e,svg);
  const i=Number(svg.dataset.imgIndex);
  if(annotCurrent.tool==='select'){
    const dx=p.x-annotCurrent.start.x,dy=p.y-annotCurrent.start.y;
    const moved=JSON.parse(JSON.stringify(annotCurrent.original));
    moved.pts=moved.pts.map(pt=>({x:pt.x+dx,y:pt.y+dy}));
    getAnnotList(i)[annotCurrent.selectIndex]=moved;
    renderAnnotSvg(svg,i);
    return;
  }
  if(annotCurrent.tool==='solid'||annotCurrent.tool==='dash')annotCurrent.pts[1]=p;
  else annotCurrent.pts.push(p);
  renderAnnotSvg(svg,i,annotCurrent);
}

function onAnnotUp(e){
  if(!annotDrawing || e.pointerId!==annotPointerId || !annotCurrent)return;
  const svg=e.currentTarget;
  const i=Number(svg.dataset.imgIndex);
  if(annotCurrent.tool==='select'){
    state[idx].annotRedo[i]=[];
  }else if(annotCurrent.pts.length>1){
    getAnnotList(i).push(annotCurrent);
    state[idx].annotRedo[i]=[];
  }
  annotDrawing=false;
  annotPointerId=null;
  annotCurrent=null;
  try{svg.releasePointerCapture(e.pointerId)}catch(_){}
  renderAnnotSvg(svg,i);
}

function pathD(pts){
  if(!pts?.length)return '';
  return pts.map((p,j)=>(j?'L':'M')+p.x+' '+p.y).join(' ');
}

function renderAnnotSvg(svg,imgIndex,preview=null){
  if(!svg)return;
  svg.setAttribute('viewBox','0 0 100 100');
  svg.setAttribute('preserveAspectRatio','none');
  svg.innerHTML='';

  const arr=[...getAnnotList(imgIndex)];
  if(preview)arr.push(preview);

  arr.forEach(a=>{
    const isQuestionLayer=svg.classList.contains('problem-markup-svg');
    if(a.tool==='point'){
      const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',a.pts[0].x);
      c.setAttribute('cy',a.pts[0].y);
      c.setAttribute('r',isQuestionLayer?'0.5':'0.25');
      c.setAttribute('fill','#d00');
      c.style.pointerEvents='none';
      svg.appendChild(c);
      return;
    }
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',pathD(a.pts));
    p.setAttribute('fill','none');
    p.setAttribute('stroke-linecap','round');
    p.setAttribute('stroke-linejoin','round');
    p.style.pointerEvents='none';
    if(isQuestionLayer)p.setAttribute('vector-effect','non-scaling-stroke');

    if(a.tool==='highlighter'){
      p.setAttribute('stroke','rgba(255,235,59,.55)');
      p.setAttribute('stroke-width',isQuestionLayer?'18':'3.8');
    }else if(a.tool==='solid'||a.tool==='dash'){
      p.setAttribute('stroke','#d00');
      p.setAttribute('stroke-width',isQuestionLayer?'3':'0.55');
      if(a.tool==='dash')p.setAttribute('stroke-dasharray',isQuestionLayer?'10 8':'1.6 1.2');
    }else{
      p.setAttribute('stroke','#202020');
      p.setAttribute('stroke-width',isQuestionLayer?'3':'0.55');
    }
    svg.appendChild(p);
  });
}

function pointToSegmentDist(p,a,b){
  const vx=b.x-a.x,vy=b.y-a.y,wx=p.x-a.x,wy=p.y-a.y;
  const len2=vx*vx+vy*vy||1;
  let t=(wx*vx+wy*vy)/len2;t=Math.max(0,Math.min(1,t));
  const q={x:a.x+t*vx,y:a.y+t*vy};
  return Math.hypot(p.x-q.x,p.y-q.y);
}

function annotDistance(p,a){
  if(a.tool==='point')return Math.hypot(p.x-a.pts[0].x,p.y-a.pts[0].y);
  let best=999;
  for(let i=1;i<a.pts.length;i++){
    best=Math.min(best,pointToSegmentDist(p,a.pts[i-1],a.pts[i]));
  }
  return best;
}

function strokeDistance(p,a){return annotDistance(p,a)}

function findNearestAnnot(imgIndex,p,maxDist=4){
  let best=-1,bd=999;
  getAnnotList(imgIndex).forEach((a,i)=>{
    const d=annotDistance(p,a);
    if(d<bd){bd=d;best=i}
  });
  return best>=0&&bd<=maxDist?best:-1;
}

function eraseAnnotNearest(imgIndex,p){
  const arr=getAnnotList(imgIndex);
  let best=-1,bd=999;
  arr.forEach((a,i)=>{
    const d=annotDistance(p,a);
    if(d<bd){bd=d;best=i}
  });
  if(best>=0 && bd<3.5){
    const removed=arr.splice(best,1)[0];
    state[idx].annotRedo[imgIndex].push(removed);
    const svg=document.querySelector(`.problem-note-svg[data-img-index="${imgIndex}"]`);
    renderAnnotSvg(svg,imgIndex);
  }
}

function undoAnnot(target=activeDrawSurface.imgIndex){
  const st=state[idx];
  if(target==null||target<0)return;
  if(!st.annots?.[target]?.length)return;
  const arr=st.annots[target];
  const removed=arr.pop();
  if(removed){
    if(!st.annotRedo[target])st.annotRedo[target]=[];
    st.annotRedo[target].push(removed);
  }
  const svg=document.querySelector(`.problem-note-svg[data-img-index="${target}"]`);
  renderAnnotSvg(svg,target);
}

function clearAnnot(target=activeDrawSurface.imgIndex){
  if(target==null||target<0)return;
  state[idx].annots[target]=[];
  state[idx].annotRedo[target]=[];
  const svg=document.querySelector(`.problem-note-svg[data-img-index="${target}"]`);
  renderAnnotSvg(svg,target);
}

function undoUnifiedDraw(){
  if(activeDrawSurface.type==='chart')undoChartDraw();
  else undoAnnot(activeDrawSurface.imgIndex);
}

function clearUnifiedDraw(){
  const q=Q[idx];
  const target=activeDrawSurface.type==='chart'
    ?(q?.chart==='psych'?'습공기선도':'덕트선도')
    :activeDrawSurface.type==='question'
      ?'문제 필기'
      :`문제 이미지${(q?.images||[]).length>1?' '+(activeDrawSurface.imgIndex+1):''}`;
  if(!confirm(`${target}에 그린 내용을 모두 지울까요?`))return;
  if(activeDrawSurface.type==='chart')clearChartDraw();
  else clearAnnot(activeDrawSurface.imgIndex);
}

// 이미지 클릭 확대
function openImgModal(src){
  // 표시 도구 사용 중 SVG가 클릭을 받으므로, 직접 호출될 때만 확대
  const modal=document.getElementById('imgModal');
  document.getElementById('imgModalImg').src=src;
  modal.classList.add('show');
}
function closeImgModal(e){
  if(e)e.stopPropagation();
  document.getElementById('imgModal').classList.remove('show');
}

// calculator
let savedRange=null;
document.addEventListener('selectionchange',()=>{const e=document.getElementById('memo'),s=window.getSelection();if(e&&s.rangeCount&&e.contains(s.anchorNode))savedRange=s.getRangeAt(0).cloneRange()});
function rr(){const e=document.getElementById('memo');if(!e)return null;e.focus();const s=window.getSelection();if(savedRange){try{s.removeAllRanges();s.addRange(savedRange);return savedRange}catch(x){}}const r=document.createRange();r.selectNodeContents(e);r.collapse(false);s.removeAllRanges();s.addRange(r);return r}
function insertText(t){const r=rr();if(!r)return;r.deleteContents();const n=document.createTextNode(t);r.insertNode(n);r.setStartAfter(n);r.collapse(true);const s=window.getSelection();s.removeAllRanges();s.addRange(r);savedRange=r.cloneRange()}
function insertFraction(){const r=rr();if(!r)return;const f=document.createElement('span');f.className='frac';f.contentEditable='false';const n=document.createElement('span');n.className='num';n.contentEditable='true';const d=document.createElement('span');d.className='den';d.contentEditable='true';f.append(n,d);r.insertNode(f);f.after(document.createTextNode('\u00a0'));const nr=document.createRange();nr.selectNodeContents(n);nr.collapse(true);const s=window.getSelection();s.removeAllRanges();s.addRange(nr);savedRange=nr.cloneRange()}
function inlineTextAfter(el){
 let next=el.nextSibling;
 // 분수·지수 뒤에 일반 높이의 커서 착지 공간을 둔다. 일반 공백보다 NBSP가
 // contenteditable에서 사라지지 않아 방향키 이동 위치가 눈에도 보인다.
 if(!next||next.nodeType!==3){next=document.createTextNode('\u00a0');el.parentNode.insertBefore(next,el.nextSibling)}
 else if(next.textContent==='')next.textContent='\u00a0';
 return next;
}
function setSavedCaret(r){
 const s=window.getSelection();s.removeAllRanges();s.addRange(r);savedRange=r.cloneRange();
}
function caretAfterInline(el){
 const next=inlineTextAfter(el),r=document.createRange();
 // 앞쪽 공백을 지난 지점에 놓아 커서가 위첨자 높이에 남아 보이지 않게 한다.
 const leading=(next.textContent.match(/^[\s\u00a0\u200b\u2060]*/)||[''])[0].length;
 r.setStart(next,leading);r.collapse(true);setSavedCaret(r);
}
function caretBeforeInline(el){
 const r=document.createRange();r.setStartBefore(el);r.collapse(true);setSavedCaret(r);
}
function closestFractionPart(node){
 if(!node)return null;
 const el=node.nodeType===1?node:node.parentElement;
 const part=el?.closest?.('.frac>.num,.frac>.den');
 return part&&document.getElementById('memo')?.contains(part)?part:null;
}
function caretInsideFractionPart(part,atEnd){
 if(!part)return;
 const r=document.createRange();r.selectNodeContents(part);r.collapse(!atEnd);setSavedCaret(r);
}
function moveCaretAcrossFraction(e,sel,r){
 const part=closestFractionPart(sel.anchorNode);
 if(!part)return false;
 const frac=part.parentElement;
 const num=frac.querySelector(':scope>.num');
 const den=frac.querySelector(':scope>.den');
 const forward=e.key==='ArrowRight'||(e.key==='Tab'&&!e.shiftKey);
 const backward=e.key==='ArrowLeft'||(e.key==='Tab'&&e.shiftKey);

 if(forward&&caretAtTextEdge(part,r,true)){
   e.preventDefault();
   if(part===num)caretInsideFractionPart(den,false);
   else caretAfterInline(frac);
   return true;
 }
 if(backward&&caretAtTextEdge(part,r,false)){
   e.preventDefault();
   if(part===den)caretInsideFractionPart(num,true);
   else caretBeforeInline(frac);
   return true;
 }
 return false;
}
function closestMathExp(node){
 if(!node)return null;
 return node.nodeType===1?node.closest?.('.math-exp'):node.parentElement?.closest?.('.math-exp');
}
function mathExpFromCaret(sel){
 if(!sel||!sel.rangeCount||!sel.isCollapsed)return null;
 let exp=closestMathExp(sel.anchorNode);
 if(exp)return exp;
 const c=sel.anchorNode,off=sel.anchorOffset;
 // 일부 브라우저는 지수 끝의 커서를 span 내부가 아니라 부모 경계로 보고한다.
 if(c&&c.nodeType===1){
   const left=c.childNodes[off-1],right=c.childNodes[off];
   if(left?.nodeType===1&&left.classList?.contains('math-exp'))return left;
   if(right?.nodeType===1&&right.classList?.contains('math-exp'))return right;
 }
 return null;
}
function caretAtTextEdge(el,r,atEnd){
 if(!el.contains(r.startContainer))return false;
 const before=document.createRange();before.selectNodeContents(el);before.setEnd(r.startContainer,r.startOffset);
 return atEnd?before.toString().length===(el.textContent||'').length:before.toString().length===0;
}
function insertPower(){
 const p=prompt('지수 입력','2');if(!p)return;
 const r=rr();if(!r)return;r.deleteContents();
 const sp=document.createElement('span');sp.className='math-exp';sp.dataset.power=p;sp.textContent=p;
 r.insertNode(sp);inlineTextAfter(sp);
 const pr=document.createRange();pr.selectNodeContents(sp);pr.collapse(false);setSavedCaret(pr);
}
function clearMemo(){const e=document.getElementById('memo');if(e){e.innerHTML='';savedRange=null;e.focus()}}
function nodeText(n){if(n.nodeType===3)return n.textContent||'';if(n.nodeType!==1)return'';if(n.classList.contains('frac'))return `((${childrenText(n.querySelector(':scope>.num'))})/(${childrenText(n.querySelector(':scope>.den'))}))`;if(n.classList.contains('math-exp'))return '^'+((n.textContent||'').trim()||n.dataset.power);if(n.tagName==='BR')return'\n';let t=childrenText(n);if(['DIV','P'].includes(n.tagName))t+='\n';return t}
function childrenText(e){return e?Array.from(e.childNodes).map(nodeText).join(''):''}


function directChildOfMemo(node){
  const ed=document.getElementById('memo');
  if(!ed||!node)return null;
  // 첫 입력 줄은 브라우저에 따라 memo 바로 아래의 텍스트 노드로 생성된다.
  // 이 텍스트 노드를 memo 자체로 바꾸면 현재 줄을 찾지 못하므로 그대로 사용한다.
  if(node.nodeType===3&&node.parentNode!==ed)node=node.parentNode;
  while(node&&node!==ed&&node.parentNode!==ed)node=node.parentNode;
  return (node&&node!==ed&&node.parentNode===ed)?node:null;
}

function topLevelLineFromNode(node){
  const ed=document.getElementById('memo');
  if(!ed || !node)return null;
  const direct=directChildOfMemo(node);
  if(!direct)return null;

  // 이미 DIV/P/calc-line 안에 있으면 그것이 계산 한 줄이다.
  if(direct.tagName==='DIV'||direct.tagName==='P'||direct.classList?.contains('calc-line')) return direct;

  // 루트에 직접 놓인 분수/문자/지수는 아래 ensureCurrentCalcLine에서
  // 현재 커서 주변의 인라인 노드만 한 줄로 묶는다.
  return null;
}

function ensureCurrentCalcLine(){
  const ed=document.getElementById('memo');
  if(!ed)return null;
  const sel=window.getSelection();
  // 계산하기 버튼을 누르면 포커스가 버튼으로 옮겨질 수 있으므로,
  // 현재 selection이 memo 밖이면 마지막으로 저장한 memo 커서를 사용한다.
  let anchorNode=(sel&&sel.rangeCount&&ed.contains(sel.anchorNode))?sel.anchorNode:null;
  if(!anchorNode&&savedRange&&ed.contains(savedRange.startContainer)){
    anchorNode=savedRange.startContainer;
  }

  if(anchorNode){
    const line=topLevelLineFromNode(anchorNode);
    if(line){
      line.classList.add('calc-line');
      return line;
    }

    // 핵심 수정:
    // 커서가 메모장 루트에 직접 놓인 분수/문자 안에 있을 때
    // 메모장 전체를 감싸지 않고 '현재 계산식에 해당하는 인라인 노드들만' DIV로 묶는다.
    const direct=directChildOfMemo(anchorNode);
    if(direct){
      const div=document.createElement('div');
      div.className='calc-line';

      // 현재 direct 노드를 기준으로, 앞/뒤의 인라인 형제만 같은 계산식으로 묶는다.
      let start=direct, end=direct;
      while(start.previousSibling){
        const p=start.previousSibling;
        if(p.nodeType===1 && ['DIV','P'].includes(p.tagName))break;
        if(p.nodeType===1 && p.classList?.contains('calc-line'))break;
        if(p.nodeType===1 && p.classList?.contains('inline-answer'))break;
        start=p;
      }
      while(end.nextSibling){
        const n=end.nextSibling;
        if(n.nodeType===1 && ['DIV','P'].includes(n.tagName))break;
        if(n.nodeType===1 && n.classList?.contains('calc-line'))break;
        if(n.nodeType===1 && n.classList?.contains('inline-answer'))break;
        end=n;
      }

      ed.insertBefore(div,start);
      let cur=start;
      while(cur){
        const next=cur.nextSibling;
        div.appendChild(cur);
        if(cur===end)break;
        cur=next;
      }
      return div;
    }
  }

  // 커서 정보를 못 얻은 경우 마지막 블록만 사용
  const last=ed.lastElementChild;
  if(last && last.parentNode===ed && (last.tagName==='DIV'||last.tagName==='P')){
    last.classList.add('calc-line');
    return last;
  }

  if(ed.childNodes.length){
    const div=document.createElement('div');
    div.className='calc-line';
    while(ed.firstChild)div.appendChild(ed.firstChild);
    ed.appendChild(div);
    return div;
  }
  return null;
}

function removeResultFromLine(line){
  if(!line)return;
  line.querySelectorAll(':scope > .inline-answer').forEach(x=>x.remove());
}

function expressionTextFromLine(line){
  if(!line)return '';
  const clone=line.cloneNode(true);
  clone.querySelectorAll('.inline-answer').forEach(x=>x.remove());

  // line 자체가 분수/지수 요소인 예외까지 수식 구조를 보존한다.
  // 기존 childrenText(clone)는 line 자체가 frac일 때 분자·분모를 단순 연결해
  // 14/(14+4.4)가 1414+4.4처럼 계산되는 원인이 됐다.
  if(clone.classList && (clone.classList.contains('frac') || clone.classList.contains('math-exp')))
    return nodeText(clone).trim();
  return childrenText(clone).trim();
}

function calculateLine(){
  const ed=document.getElementById('memo');
  if(!ed)return;

  const lineEl=ensureCurrentCalcLine();
  if(!lineEl)return;

  // 현재 계산 줄의 기존 결과만 지운다.
  // 다른 줄에서 완료된 계산 결과는 그대로 유지한다.
  removeResultFromLine(lineEl);

  let line=expressionTextFromLine(lineEl);
  if(!line)return;

  // q=뿐 아니라 "12시 실내 부하 = 5+5"처럼 띄어쓴 설명도 허용한다.
  // 등호 왼쪽에 글자가 있고 사칙연산 기호가 없을 때만 설명으로 판단하여,
  // 일반 비교식이나 완성된 계산식을 잘못 잘라내지 않는다.
  const eqIndex=line.indexOf('=');
  if(eqIndex>=0){
    const left=line.slice(0,eqIndex).trim();
    const right=line.slice(eqIndex+1).trim();
    const labelLike=/[A-Za-z가-힣]/.test(left) && !/[+*\/÷×^]/.test(left);
    if(right && labelLike) line=right;
  }

  // 사용자가 계산식 끝에 '='를 붙여도 정상 계산
  line=line.replace(/=\s*$/,'').trim();

  let ex=line
    .replace(/,/g,'')
    .replace(/×/g,'*')
    .replace(/÷/g,'/')
    .replace(/√\(/g,'Math.sqrt(')
    .replace(/ln\(/g,'Math.log(')
    .replace(/\^/g,'**')
    .trim();

  try{
    const v=Function('"use strict";return ('+ex+')')();
    if(!Number.isFinite(v))throw new Error('invalid');

    const sp=document.createElement('span');
    sp.className='inline-answer';
    sp.contentEditable='false';
    sp.dataset.generated='1';
    sp.textContent=' = '+(Math.round(v*1e10)/1e10);

    // 결과는 현재 계산식과 같은 calc-line 안, 식 바로 오른쪽에 붙인다.
    lineEl.classList.add('calc-line');
    lineEl.appendChild(sp);

    const sel=window.getSelection();
    const r=document.createRange();
    r.setStartBefore(sp);
    r.collapse(true);
    sel.removeAllRanges();
    sel.addRange(r);
    savedRange=r.cloneRange();
  }catch(x){
    alert('계산식을 확인하세요.');
  }
}

function shouldInvalidateResult(e){
  // Enter는 새 계산 줄을 만드는 동작이므로 기존 결과 유지
  if(e.inputType==='insertParagraph' || e.inputType==='insertLineBreak') return false;
  return true;
}

document.addEventListener('beforeinput',e=>{
  const ed=document.getElementById('memo');
  if(!ed || !ed.contains(e.target))return;
  if(!shouldInvalidateResult(e))return;

  // 수정한 "그 줄"의 결과만 제거한다.
  // 다른 줄의 완료된 계산값은 절대 지우지 않는다.
  const sel=window.getSelection();
  const line=(sel&&sel.rangeCount)?topLevelLineFromNode(sel.anchorNode):null;
  if(line)removeResultFromLine(line);
});


function normalizeSolveExpr(txt){
  return (txt||'')
    .replace(/,/g,'')
    .replace(/×/g,'*')
    .replace(/÷/g,'/')
    .replace(/√\(/g,'Math.sqrt(')
    .replace(/ln\(/g,'Math.log(')
    .replace(/\^/g,'**')
    .trim();
}

function evalWithX(expr,x){
  const ex=normalizeSolveExpr(expr);
  return Function('x','"use strict";return ('+ex+')')(x);
}

function solveCurrentLine(){
  const ed=document.getElementById('memo');
  if(!ed)return;

  const lineEl=ensureCurrentCalcLine();
  if(!lineEl)return;

  // Solve 결과는 현재 줄의 기존 결과만 갱신
  removeResultFromLine(lineEl);

  let line=expressionTextFromLine(lineEl);
  if(!line || !line.includes('=')){
    alert('예: 2×x+3=7 처럼 등식으로 입력하세요.');
    return;
  }

  const parts=line.split('=');
  if(parts.length<2){
    alert('방정식을 확인하세요.');
    return;
  }

  const left=parts.slice(0,-1).join('=').trim();
  const right=parts[parts.length-1].trim();

  if(!/[xX]/.test(left+right)){
    alert('미지수 x를 포함한 식을 입력하세요.');
    return;
  }

  const f=(x)=>{
    const l=evalWithX(left.replace(/X/g,'x'),x);
    const r=evalWithX(right.replace(/X/g,'x'),x);
    return l-r;
  };

  try{
    // 1) Broad scan to bracket roots.
    let a=-1e6,b=1e6,fa=f(a),fb=f(b),root=null;

    if(Number.isFinite(fa) && Math.abs(fa)<1e-10) root=a;
    if(root===null && Number.isFinite(fb) && Math.abs(fb)<1e-10) root=b;

    // Scan logarithmically and linearly for sign changes / near-zero.
    // 정수 지점만 검사하면 x=0.1925처럼 0과 1 사이에 있는 해를 놓치므로,
    // 매우 작은 값부터 큰 값까지 1·2·5 간격의 로그 지점도 함께 검사한다.
    if(root===null){
      const pts=[];
      for(let i=-100;i<=100;i++) pts.push(i);
      for(let exp=-12;exp<=6;exp++){
        const base=10**exp;
        [1,2,5].forEach(mult=>{
          const v=base*mult;
          pts.push(v,-v);
        });
      }
      pts.sort((x,y)=>x-y);

      // 중복 지점을 제거해 불필요한 반복 계산을 줄인다.
      const scanPts=pts.filter((v,i,arr)=>i===0||v!==arr[i-1]);

      let prevX=null,prevF=null;
      for(const x of scanPts){
        let y;
        try{y=f(x)}catch(_){prevX=null;prevF=null;continue}
        // x=0 또는 로그·제곱근의 정의역 밖처럼 계산할 수 없는 지점은
        // 연속 구간의 경계로 취급해 불연속점을 해로 오인하지 않게 한다.
        if(!Number.isFinite(y)){
          prevX=null;
          prevF=null;
          continue;
        }
        if(Math.abs(y)<1e-9){root=x;break}
        if(prevX!==null && prevF*y<0){
          a=prevX;b=x;fa=prevF;fb=y;
          // Bisection
          for(let k=0;k<100;k++){
            const m=(a+b)/2, fm=f(m);
            if(!Number.isFinite(fm)) break;
            if(Math.abs(fm)<1e-12){a=b=m;break}
            if(fa*fm<=0){b=m;fb=fm}else{a=m;fa=fm}
          }
          root=(a+b)/2;
          break;
        }
        prevX=x;prevF=y;
      }
    }

    // 2) Newton fallback from several seeds.
    if(root===null){
      const seeds=[0,0.001,-0.001,0.01,-0.01,0.1,-0.1,0.5,-0.5,1,-1,10,-10,100,-100];
      outer:
      for(let x0 of seeds){
        let x=x0;
        for(let k=0;k<60;k++){
          const fx=f(x);
          if(!Number.isFinite(fx)) break;
          if(Math.abs(fx)<1e-10){root=x;break outer}
          const h=Math.max(1e-6,Math.abs(x)*1e-6);
          const d=(f(x+h)-f(x-h))/(2*h);
          if(!Number.isFinite(d) || Math.abs(d)<1e-12) break;
          const nx=x-fx/d;
          if(!Number.isFinite(nx)) break;
          if(Math.abs(nx-x)<1e-10){x=nx;root=x;break outer}
          x=nx;
        }
      }
    }

    if(root===null || !Number.isFinite(root)){
      alert('해를 찾지 못했습니다. 식을 확인하세요.');
      return;
    }

    const rounded=Math.abs(root)<1e-12?0:Math.round(root*1e10)/1e10;
    const sp=document.createElement('span');
    sp.className='inline-answer';
    sp.contentEditable='false';
    sp.dataset.generated='1';
    sp.textContent=' → x = '+rounded;
    lineEl.appendChild(sp);

    const sel=window.getSelection();
    const r=document.createRange();
    r.setStartAfter(sp);
    r.collapse(true);
    sel.removeAllRanges();
    sel.addRange(r);
    savedRange=r.cloneRange();
  }catch(e){
    alert('방정식을 확인하세요.');
  }
}

document.addEventListener('keydown',e=>{
  const ed=document.getElementById('memo');
  if(!ed || (document.activeElement!==ed && !ed.contains(document.activeElement)))return;

  // 분수는 분자→분모→일반 입력 순서로 이동하고, 지수 끝에서는 일반 입력으로 이동한다.
  if(!e.ctrlKey&&!e.metaKey&&(e.key==='ArrowRight'||e.key==='ArrowLeft'||e.key==='Tab')){
    const sel=window.getSelection();
    if(sel.rangeCount&&sel.isCollapsed){
      const r=sel.getRangeAt(0);
      if(moveCaretAcrossFraction(e,sel,r))return;
      const exp=mathExpFromCaret(sel);
      if(exp&&ed.contains(exp)){
        if((e.key==='ArrowRight'||e.key==='Tab')&&
           (closestMathExp(sel.anchorNode)===null||caretAtTextEdge(exp,r,true))){
          e.preventDefault();caretAfterInline(exp);return;
        }
        if(e.key==='ArrowLeft'&&caretAtTextEdge(exp,r,false)){
          e.preventDefault();caretBeforeInline(exp);return;
        }
      }
    }
  }

  if(!e.ctrlKey&&!e.metaKey&&e.key==='*'){e.preventDefault();insertText('×');return}
  if(!e.ctrlKey&&!e.metaKey&&e.key==='/'){e.preventDefault();insertText('÷');return}
  if((e.ctrlKey||e.metaKey)&&e.key==='/'){e.preventDefault();insertFraction();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='r'){e.preventDefault();insertText('√(');return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='i'){e.preventDefault();insertText('ln(');return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='p'){e.preventDefault();insertPower();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();solveCurrentLine();return}
  if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();calculateLine();return}

  // 계산 완료 후 일반 Enter: 이전 결과는 유지하고 새 계산 줄로 이동
  if(!e.ctrlKey&&!e.metaKey&&e.key==='Enter'){
    const sel=window.getSelection();
    const line=sel&&sel.rangeCount?topLevelLineFromNode(sel.anchorNode):null;
    if(line && line.querySelector(':scope > .inline-answer')){
      e.preventDefault();
      const div=document.createElement('div');
      div.appendChild(document.createElement('br'));
      line.after(div);
      const r=document.createRange();
      r.setStart(div,0);
      r.collapse(true);
      sel.removeAllRanges();
      sel.addRange(r);
      savedRange=r.cloneRange();
      return;
    }
  }

  if(e.key==='Backspace'||e.key==='Delete'){
    const sel=window.getSelection();
    if(!sel.rangeCount)return;
    const r=sel.getRangeAt(0);

    // Case A: caret is inside an empty fraction -> remove the whole fraction.
    let n=sel.anchorNode;
    let frac=n?.nodeType===1 ? n.closest?.('.frac') : n?.parentElement?.closest?.('.frac');
    if(frac && ed.contains(frac) && !(frac.innerText||'').trim()){
      e.preventDefault();
      const parent=frac.parentNode;
      const next=frac.nextSibling;
      frac.remove();
      const nr=document.createRange();
      if(next && next.parentNode===parent) nr.setStartBefore(next);
      else { nr.selectNodeContents(parent); nr.collapse(false); }
      nr.collapse(true);
      sel.removeAllRanges();sel.addRange(nr);savedRange=nr.cloneRange();
      return;
    }

    // Case B: caret is directly after/before a fraction -> Delete/Backspace removes fraction as one object.
    if(r.collapsed){
      const c=r.startContainer,off=r.startOffset;
      let target=null;

      if(c.nodeType===3){
        // insertFraction()이 분수 뒤에 공백 텍스트 노드를 넣으므로,
        // 그 공백 안 어디에 커서가 있어도 Backspace로 바로 앞 분수를 삭제한다.
        if(e.key==='Backspace'){
          if(!c.textContent.trim()){
            target=c.previousSibling;
          }else if(off===0){
            target=c.previousSibling;
          }
        }
        if(e.key==='Delete'){
          if(!c.textContent.trim()){
            target=c.nextSibling;
          }else if(off===c.textContent.length){
            target=c.nextSibling;
          }
        }
      }else if(c.nodeType===1){
        if(e.key==='Backspace' && off>0) target=c.childNodes[off-1];
        if(e.key==='Delete' && off<c.childNodes.length) target=c.childNodes[off];
      }

      // 공백 노드가 하나 더 끼어 있어도 분수까지 건너간다.
      while(target && target.nodeType===3 && !target.textContent.trim()){
        target = e.key==='Backspace' ? target.previousSibling : target.nextSibling;
      }

      if(target?.nodeType===1 && target.classList.contains('frac')){
        e.preventDefault();
        target.remove();
        removeGeneratedAnswers();
        savedRange=null;
        ed.focus();
        return;
      }
    }
  }
});

// drawing SVG
let tool='line',pending=null;
function initDrawing(q){setTool('line');redraw()}
function setTool(t){tool=t;pending=null;document.querySelectorAll('#drawtools [data-tool]').forEach(b=>b.classList.toggle('active',b.dataset.tool===t))}
function svgPoint(ev){const s=document.getElementById('drawsvg'),r=s.getBoundingClientRect();return {x:(ev.clientX-r.left)/r.width*100,y:(ev.clientY-r.top)/r.height*100}}
document.addEventListener('click',e=>{const s=document.getElementById('drawsvg');if(!s||e.target!==s)return;const p=svgPoint(e),st=state[idx];
 if(tool==='point')pushDraw({t:'point',...p});
 else if(tool==='text'){const text=prompt('텍스트 입력','A');if(text)pushDraw({t:'text',...p,text})}
 else if(tool==='erase')eraseNearest(p);
 else{if(!pending)pending=p;else{pushDraw({t:tool,x1:pending.x,y1:pending.y,x2:p.x,y2:p.y});pending=null}}
});
function pushDraw(o){state[idx].draw.push(o);state[idx].redo=[];redraw()}
function redraw(){const s=document.getElementById('drawsvg');if(!s)return;s.innerHTML=`<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#d00"/></marker></defs>`;state[idx].draw.forEach((o,i)=>{let el;if(o.t==='line'||o.t==='arrow'){el=document.createElementNS('http://www.w3.org/2000/svg','line');['x1','y1','x2','y2'].forEach(k=>el.setAttribute(k,o[k]+'%'));el.setAttribute('stroke','#d00');el.setAttribute('stroke-width','2.5');if(o.t==='arrow')el.setAttribute('marker-end','url(#arr)')}else if(o.t==='point'){el=document.createElementNS('http://www.w3.org/2000/svg','circle');el.setAttribute('cx',o.x+'%');el.setAttribute('cy',o.y+'%');el.setAttribute('r','5');el.setAttribute('fill','#d00')}else{el=document.createElementNS('http://www.w3.org/2000/svg','text');el.setAttribute('x',o.x+'%');el.setAttribute('y',o.y+'%');el.setAttribute('fill','#d00');el.setAttribute('font-size','20');el.setAttribute('font-weight','700');el.textContent=o.text}el.dataset.i=i;s.appendChild(el)})}
function eraseNearest(p){let best=-1,bd=999;state[idx].draw.forEach((o,i)=>{const x=o.x??((o.x1+o.x2)/2),y=o.y??((o.y1+o.y2)/2),d=Math.hypot(x-p.x,y-p.y);if(d<bd){bd=d;best=i}});if(best>=0&&bd<12){state[idx].draw.splice(best,1);redraw()}}
function undoDraw(){const a=state[idx].draw.pop();if(a)state[idx].redo.push(a);redraw()}function redoDraw(){const a=state[idx].redo.pop();if(a)state[idx].draw.push(a);redraw()}function clearDraw(){if(confirm('그림을 모두 지울까요?')){state[idx].draw=[];state[idx].redo=[];redraw()}}

document.addEventListener('dblclick',e=>{
  const svg=e.target.closest?.('.problem-note-svg');
  if(!svg)return;
  const wrap=svg.closest('.problem-img-wrap');
  const img=wrap?.querySelector('img');
  if(img)openImgModal(img.src);
});

render();

/* v17 rebuild-test: reveal answer/solution after current-question grading */
(function(){
  const oldGrade = window.gradeCurrent;
  if(typeof oldGrade === 'function'){
    window.gradeCurrent = function(){
      const r = oldGrade.apply(this, arguments);
      try{
        const q = (typeof Q !== 'undefined' && typeof idx !== 'undefined') ? Q[idx] : null;
        const panel = document.getElementById('solutionPanel');
        const content = document.getElementById('solutionContent');
        if(panel && content && q){
          let blocks = [];
          /* 계산형은 구조화된 해설의 '4. 최종 답'에서만 정답을 표시한다. */
          if(Array.isArray(q.answerOrder)){
            blocks.push(...q.answerOrder.map(key => {
              if(/^a\d+$/.test(key)){
                const f=(q.fields||[])[Number(key.slice(1))];
                return f ? `<div class="solution-step"><b>${esc(f.label)}:</b> ${esc(String(f.v))}${(f.units && f.units[0]) ? ' ' + esc(f.units[0]) : ''}</div>` : '';
              }
              if(/^d\d+$/.test(key)){
                const d=(q.desc||[])[Number(key.slice(1))];
                return d ? `<div class="solution-step"><b>${esc(d.label)} 모범답안:</b> ${esc(d.ref)}</div>` : '';
              }
              return '';
            }).filter(Boolean));
          }else{
            if(Array.isArray(q.fields) && !q._formulaExplanationV12){
              blocks.push(...q.fields.map(f => `<div class="solution-step"><b>${esc(f.label)}:</b> ${esc(String(f.v))}${(f.units && f.units[0]) ? ' ' + esc(f.units[0]) : ''}</div>`));
            }
            if(Array.isArray(q.desc)){
              blocks.push(...q.desc.map(d => `<div class="solution-step"><b>${esc(d.label)} 모범답안:</b> ${esc(d.ref)}</div>`));
            }
          }
          if(q.solution) blocks.push(`<div class="solution-step">${esc(String(q.solution)).replace(/\n/g,'<br>')}</div>`);
          if(q.explanationHtml) blocks.push(q.explanationHtml);
          else if(q.explanation) blocks.push(`<div class="solution-step">${esc(String(q.explanation)).replace(/\n/g,'<br>')}</div>`);
          if(q.manualRef && !q.explanationHtml) blocks.push(`<div class="solution-step"><b>작도 확인:</b> ${esc(q.manualRef)}</div>`);
          content.innerHTML = blocks.length ? blocks.join('') : '정답 확인 완료. 해설 이미지가 포함된 문제는 문제 자료의 해설 기준으로 확인하세요.';
          appendSolutionImages(q);
          panel.classList.add('show');
        }
      }catch(e){}
      return r;
    };
  }
  const oldGo = window.go;
  if(typeof oldGo === 'function'){
    window.go = function(){
      const panel = document.getElementById('solutionPanel');
      if(panel) panel.classList.remove('show');
      return oldGo.apply(this, arguments);
    };
  }
})();

