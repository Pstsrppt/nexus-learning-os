
(() => {
const {tracks, sourceLabels, curriculum, trackOrder} = window.NEXUS_DATA;
const state = {
  lang: localStorage.getItem("nexus.lang") || "th",
  page: localStorage.getItem("nexus.page") || "home",
  selected: Number(localStorage.getItem("nexus.selected") || 20),
  search: "",
  track: "all",
  focus: false,
  lessonTab: "concept",
  mode: "study",
  quizChoice: null,
  quizChecked: false,
  token: "B",
  temp: .8,
};
const progress = loadJSON("nexus.progress", {
  completed: Array.from({length:19},(_,i)=>i+1),
  quiz: {},
  notes: {},
  observations: {},
  projectTasks: {},
  chat: [],
  activity: [{at:Date.now(), text:{th:"เปิด NEXUS Learning OS",en:"Opened NEXUS Learning OS"}}],
  visits: []
});
trackVisit();

const UI = {
th:{
home:"หน้าแรก",curriculum:"หลักสูตร",learn:"เรียน",labs:"แลบ",projects:"โปรเจกต์",progress:"ความก้าวหน้า",assistant:"ผู้ช่วย AI",
search:"ค้นหา session, track หรือหัวข้อ...",dashboard:"ศูนย์ควบคุมการเรียนรู้",greet:"สวัสดีตอนเย็น PHONG",
hero:"แพลตฟอร์มเรียนรู้ 2 ภาษา สำหรับ Data, ML, Blockchain, LLM, RAG, AI Agents และ Full-Stack AI",
continue:"เรียนต่อ",openMap:"เปิดแผนผังหลักสูตร",mission:"ภารกิจปัจจุบัน",nextLesson:"บทเรียนถัดไปที่ระบบแนะนำ",
totalXp:"XP รวม",level:"เลเวลปัจจุบัน",done:"เซสชันที่จบแล้ว",badges:"แบดจ์ที่ได้รับ",journey:"เส้นทางการเรียนรู้",
journeyText:"มองภาพใหญ่ก่อน แล้วค่อยเดินทีละก้าว",all:"ทั้งหมด",sessions:"เซสชัน",source:"ที่มา",open:"เปิดบทเรียน",
concept:"แนวคิด",visual:"ภาพอธิบาย",example:"ตัวอย่าง",lab:"มินิแลบ",quiz:"ควิซ",recap:"สรุป",study:"โหมดเรียน",exam:"โหมดสอบ",
focus:"โหมดโฟกัส",exitFocus:"ออกจากโหมดโฟกัส",key:"ประเด็นสำคัญ",save:"บันทึก",saved:"บันทึกแล้ว",complete:"เรียนจบ Session นี้",
completed:"เรียนจบแล้ว",prev:"ก่อนหน้า",next:"ถัดไป",check:"ตรวจคำตอบ",correct:"ถูกต้อง! +50 XP",wrong:"ยังไม่ถูก ลองทบทวนอีกครั้ง",
notes:"โน้ตของฉัน",observation:"สิ่งที่สังเกต",projectTrack:"เส้นทางโปรเจกต์",skillProfile:"โปรไฟล์ทักษะ",reset:"รีเซ็ตความก้าวหน้า",
export:"Export Progress",activity:"กิจกรรมล่าสุด",send:"ส่ง",assistantTitle:"ผู้ช่วยติว AI",assistantDesc:"ถามจากบริบทของ Session ปัจจุบันได้ทันที",
quick:["อธิบายให้ง่ายขึ้น","ยกตัวอย่าง","เปรียบเทียบกับบทก่อน","ทำโน้ตสำหรับสอบ"], examNote:"ในโหมดสอบ ระบบจะเน้นคำศัพท์และกรอบจากเนื้อหาในคอร์สก่อนความรู้ต่อยอด",
},
en:{
home:"Home",curriculum:"Curriculum",learn:"Learn",labs:"Labs",projects:"Projects",progress:"Progress",assistant:"AI Assistant",
search:"Search sessions, tracks, or topics...",dashboard:"Learning Command Center",greet:"Good Evening, PHONG",
hero:"A bilingual learning platform for Data, ML, Blockchain, LLM, RAG, AI Agents, and Full-Stack AI.",
continue:"Continue Learning",openMap:"Open Curriculum Map",mission:"Current Mission",nextLesson:"Your next recommended lesson",
totalXp:"Total XP",level:"Current Level",done:"Sessions Completed",badges:"Badges Earned",journey:"Learning Journey",
journeyText:"See the big picture, then move one step at a time.",all:"All",sessions:"Sessions",source:"Source",open:"Open Lesson",
concept:"Concept",visual:"Visual",example:"Example",lab:"Mini Lab",quiz:"Quiz",recap:"Recap",study:"Study Mode",exam:"Exam Mode",
focus:"Focus Mode",exitFocus:"Exit Focus",key:"Key Points",save:"Save",saved:"Saved",complete:"Complete This Session",
completed:"Completed",prev:"Previous",next:"Next",check:"Check Answer",correct:"Correct! +50 XP",wrong:"Not yet. Review the concept and try again.",
notes:"My Notes",observation:"Observation",projectTrack:"Project Track",skillProfile:"Skill Profile",reset:"Reset Progress",
export:"Export Progress",activity:"Recent Activity",send:"Send",assistantTitle:"AI Study Assistant",assistantDesc:"Ask questions using the current session as context.",
quick:["Explain more simply","Give an example","Compare with previous topic","Create exam notes"], examNote:"Exam Mode prioritizes course wording and exam-oriented framing before practical extension.",
}};
const t=()=>UI[state.lang], tr=(o)=>o?.[state.lang] ?? o?.en ?? "", session=()=>curriculum.find(s=>s.id===state.selected)||curriculum[19];

function loadJSON(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
function save(){localStorage.setItem("nexus.progress",JSON.stringify(progress));localStorage.setItem("nexus.lang",state.lang);localStorage.setItem("nexus.page",state.page);localStorage.setItem("nexus.selected",state.selected)}
function trackVisit(){const d=new Date().toISOString().slice(0,10); if(!progress.visits.includes(d)){progress.visits.push(d);progress.visits=progress.visits.slice(-30);save()}}
function xp(){let base=progress.completed.length*100; Object.values(progress.quiz).forEach(q=>base+=Number(q.best||0)*25); return base}
function level(){return Math.max(1,Math.floor(xp()/500)+1)}
function streak(){const ds=[...progress.visits].sort().reverse();let n=0,cur=new Date();for(const d of ds){const k=cur.toISOString().slice(0,10);if(d===k){n++;cur.setDate(cur.getDate()-1)}else break}return Math.max(n,1)}
function pct(){return Math.round(progress.completed.length/curriculum.length*100)}
function isDone(id){return progress.completed.includes(id)}
function status(id){if(isDone(id))return"done";const max=Math.max(0,...progress.completed);return id===max+1?"current":"locked"}
function toast(msg){const root=document.getElementById("toast-root"),el=document.createElement("div");el.className="toast";el.textContent=msg;root.appendChild(el);setTimeout(()=>el.remove(),2600)}
function addActivity(th,en){progress.activity.unshift({at:Date.now(),text:{th,en}});progress.activity=progress.activity.slice(0,20);save()}
function openLesson(id){state.selected=id;state.page="lesson";state.lessonTab="concept";state.quizChoice=null;state.quizChecked=false;save();render()}
function setPage(p){state.page=p;save();render()}
function sourceLabel(s){return tr(sourceLabels[s])}
function trackLabel(c){return tr(tracks[c])}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
function fmtDate(ts){return new Intl.DateTimeFormat(state.lang==="th"?"th-TH":"en-US",{dateStyle:"medium",timeStyle:"short"}).format(new Date(ts))}
function filtered(){const q=state.search.trim().toLowerCase();return curriculum.filter(s=>(state.track==="all"||s.track===state.track)&&(!q||[s.id,tr(s.title),tr(s.summary),trackLabel(s.track),...s.keyPoints].join(" ").toLowerCase().includes(q)))}

function chrome(content){
return `<div class="app ${state.focus?"focus":""}">
${state.focus?"":`<aside class="sidebar"><div class="brand"><div class="brandMark">N</div><div><strong>NEXUS</strong><small>${state.lang==="th"?"ระบบเรียนรู้ AI":"AI LEARNING OS"}</small></div></div>
<nav class="menu">${[["home",t().home],["curriculum",t().curriculum],["lesson",t().learn],["labs",t().labs],["projects",t().projects],["progress",t().progress],["assistant",t().assistant]].map(([p,l])=>`<button data-page="${p}" class="${state.page===p?"active":""}"><span class="menuDot"></span>${l}</button>`).join("")}</nav>
<div class="sideCard"><div class="sideTop"><span>${t().level} ${level()}</span><b>${pct()}%</b></div><div class="bar"><i style="width:${pct()}%"></i></div><small>${progress.completed.length}/${curriculum.length} ${t().sessions}</small></div></aside>`}
<section class="main">
${state.focus?"":`<header class="topbar"><div class="searchWrap"><input id="globalSearch" value="${esc(state.search)}" placeholder="${t().search}"><div id="searchResults" class="searchResults hidden"></div></div>
<div class="topActions"><div class="lang"><button data-lang="th" class="${state.lang==="th"?"active":""}">TH</button><button data-lang="en" class="${state.lang==="en"?"active":""}">EN</button></div><span class="pill">🔥 ${streak()} Day Streak</span><div class="user"><div class="avatar">P</div><div><b>PHONG</b><small>Lv. ${level()}</small></div></div></div></header>`}
${content}</section></div>`
}
function home(){
const cur=curriculum.find(s=>!isDone(s.id))||curriculum[curriculum.length-1];
return `<div class="page">
<section class="hero"><div><span class="eyebrow">${t().dashboard}</span><h1>${t().greet}</h1><p>${t().hero}</p><div class="actions"><button class="primary" data-open="${cur.id}">${t().continue} →</button><button class="ghost" data-page="curriculum">${t().openMap}</button></div></div>
<div class="heroSide"><div class="ring" style="--p:${pct()}%"><b>${pct()}%</b></div><ul>${trackOrder.map(c=>`<li><b>${trackLabel(c)}</b><span>${curriculum.filter(s=>s.track===c).length} ${t().sessions}</span></li>`).join("")}</ul></div></section>
<div class="grid2"><article class="card"><div class="sectionHead"><div><span class="eyebrow">${t().mission}</span><h2>${t().nextLesson}</h2></div><span class="chip">${trackLabel(cur.track)}</span></div><div class="mission"><div class="missionIcon">✦</div><div><h3>${t().sessions.slice(0,-1)||"Session"} ${cur.id} — ${tr(cur.title)}</h3><p class="muted">${tr(cur.summary)}</p><div class="bar"><i style="width:${isDone(cur.id)?100:35}%"></i></div><div class="actions"><button class="primary" data-open="${cur.id}">${t().continue} →</button></div></div></div></article>
<article class="card stats">${[[t().totalXp,xp(),"✦"],[t().level,level(),"🏆"],[t().done,progress.completed.length,"◈"],[t().badges,progress.completed.length,"⬡"]].map(([a,b,c])=>`<div class="stat"><span>${c}</span><strong>${b}</strong><small>${a}</small></div>`).join("")}</article></div>
<div class="grid2 equal"><article class="card"><div class="sectionHead"><div><span class="eyebrow">${t().journey}</span><h2>${t().journeyText}</h2></div></div><div class="journey">${trackOrder.map((c,i)=>`<div class="jn"><div class="jc ${i<4?"done":i===4?"current":""}">${i<4?"✓":i===4?"◉":"◇"}</div><b>${trackLabel(c)}</b></div>`).join("")}</div></article>
<article class="card stack"><div class="stackItem"><span class="eyebrow">${state.lang==="th"?"สิ่งที่ควรทำต่อ":"Next Best Action"}</span><p class="muted">${state.lang==="th"?"เรียน Session ปัจจุบันให้จบ แล้วระบบจะอัปเดต XP, Badge และ Progress อัตโนมัติ":"Finish the current session and the system will update XP, badge, and progress automatically."}</p></div><div class="stackItem"><span class="eyebrow">${state.lang==="th"?"ระบบบันทึกอัตโนมัติ":"Auto Save"}</span><p class="muted">${state.lang==="th"?"โน้ต ควิซ ความคืบหน้า และโปรเจกต์ถูกเก็บไว้ในเครื่องนี้ด้วย Local Storage":"Notes, quiz history, progress, and project tasks are saved locally in your browser."}</p></div></article></div>
</div>`}
function curriculumPage(){
const groups=trackOrder.map(c=>({c,items:filtered().filter(s=>s.track===c)})).filter(g=>g.items.length);
return `<div class="page"><div class="pageHead"><span class="eyebrow">NEXUS CURRICULUM</span><h1>${state.lang==="th"?"หลักสูตร 2 ภาษา 44 Sessions":"Bilingual 44-Session Curriculum"}</h1><p>${state.lang==="th"?"จัดเป็นการ์ดอ่านง่าย ค้นหาได้ กรองตาม Track ได้ และกดเข้าเรียนได้ทุก Session":"Clean cards, searchable content, track filters, and direct access to every lesson."}</p></div>
<div class="filters"><button data-track="all" class="${state.track==="all"?"active":""}">${t().all}</button>${trackOrder.map(c=>`<button data-track="${c}" class="${state.track===c?"active":""}">${trackLabel(c)}</button>`).join("")}</div>
<div class="trackStack">${groups.map(g=>`<article class="card"><div class="sectionHead"><div><span class="eyebrow">${trackLabel(g.c)}</span><h2>${trackLabel(g.c)}</h2></div><span class="chip">${g.items.length} ${t().sessions}</span></div><div class="sessionGrid">${g.items.map(s=>`<button class="sessionCard ${status(s.id)}" data-open="${s.id}"><div class="sessionTop"><span class="snum">S${s.id}</span><span>${status(s.id)==="done"?"✓":status(s.id)==="current"?"◉":"◇"}</span></div><h3>${tr(s.title)}</h3><p>${tr(s.summary)}</p><div class="smeta"><span>${sourceLabel(s.source)}</span><b>${t().open} →</b></div></button>`).join("")}</div></article>`).join("")||`<div class="card">${state.lang==="th"?"ไม่พบผลลัพธ์":"No results found"}</div>`}</div></div>`}
function recipe(s){return{
concept: state.lang==="th"?`${tr(s.title)} คือหัวข้อที่ช่วยให้คุณเข้าใจภาพรวม หลักคิด ขั้นตอน และข้อควรระวัง ก่อนเชื่อมไปสู่การใช้งานจริงใน ${trackLabel(s.track)}`:`${tr(s.title)} builds the mental model, workflow, and cautions needed before applying the topic in ${trackLabel(s.track)}.`,
visual:s.keyPoints.slice(0,5),
code:`// ${s.title.en}\nconst keyPoints = ${JSON.stringify(s.keyPoints,null,2)};\n\nfunction learnSession() {\n  return {\n    session: ${s.id},\n    track: "${s.track}",\n    focus: keyPoints[0]\n  };\n}`,
answers: state.lang==="th"?["เป็นเพียงศัพท์ที่ต้องท่องจำ","เป็นแนวคิดหลักที่เชื่อมความเข้าใจไปสู่การตัดสินใจและการลงมือทำจริง","ใช้เฉพาะในข้อสอบ","ไม่มีผลกับระบบจริง"]:["It is only memorization","It connects understanding to correct practical decisions","It only matters in exams","It has no real-world relevance"]
}}
function lessonPage(){
const s=session(),r=recipe(s),note=progress.notes[s.id]||"",obs=progress.observations[s.id]||"",done=isDone(s.id),idx=curriculum.findIndex(x=>x.id===s.id),prev=curriculum[Math.max(0,idx-1)],next=curriculum[Math.min(curriculum.length-1,idx+1)];
let body="";
if(state.lessonTab==="concept")body=`<div class="panel2"><article><h2>${t().concept}</h2><p class="muted">${r.concept}</p>${state.mode==="exam"?`<div class="note"><b>${t().exam}</b><p class="muted">${t().examNote}</p></div>`:""}<div class="note"><b>${t().key}</b><ul>${s.keyPoints.map(k=>`<li>${esc(k)}</li>`).join("")}</ul></div><h3>${t().notes}</h3><textarea id="noteArea" class="noteArea" rows="7">${esc(note)}</textarea><div class="actions"><button id="saveNote" class="primary">${t().save}</button></div></article><aside class="assist"><span class="eyebrow">${t().assistantTitle}</span><p class="muted">${t().assistantDesc}</p><div class="promptRow">${t().quick.map(q=>`<button class="prompt" data-quick="${esc(q)}">${esc(q)}</button>`).join("")}</div></aside></div>`;
if(state.lessonTab==="visual")body=s.id===20?attention():`<h2>${t().visual}</h2><div class="flow">${r.visual.map((x,i)=>`${i?'<span class="arrow">→</span>':''}<div class="flowNode">${esc(x)}</div>`).join("")}</div>`;
if(state.lessonTab==="example")body=`<h2>${t().example}</h2><pre>${esc(r.code)}</pre>`;
if(state.lessonTab==="lab")body=`<h2>${t().lab}</h2>${labInner()}<div class="obs"><b>${t().observation}</b><textarea id="obsArea" rows="5">${esc(obs)}</textarea><div class="actions"><button id="saveObs" class="primary">${t().save}</button></div></div>`;
if(state.lessonTab==="quiz")body=quizInner(s,r);
if(state.lessonTab==="recap")body=`<div class="recap"><div><span class="eyebrow">${t().recap}</span><h2>${tr(s.title)}</h2><p class="muted">${tr(s.summary)}</p><ul class="checkList">${s.keyPoints.map(k=>`<li>✓ ${esc(k)}</li>`).join("")}</ul><div class="actions"><button id="completeSession" class="${done?"ghost":"primary"}">${done?t().completed:t().complete}</button></div></div><div class="badgePanel"><span class="eyebrow">${state.lang==="th"?"แบดจ์ประจำ Session":"Session Badge"}</span><div class="big">◈</div><strong>${tr(s.badge)}</strong></div></div>`;
return `<div class="page"><section class="lessonHeader"><div><span class="eyebrow">${trackLabel(s.track)} · Session ${s.id}</span><h1>${tr(s.title)}</h1><p class="muted">${tr(s.summary)}</p><div class="lessonMeta"><span class="chip">${t().source}: ${sourceLabel(s.source)}</span><span class="chip">${state.mode==="study"?t().study:t().exam}</span><span class="chip">${done?"✓ "+t().completed:"60%"}</span></div></div><div><div class="modeToggle"><button data-mode="study" class="${state.mode==="study"?"active":""}">${t().study}</button><button data-mode="exam" class="${state.mode==="exam"?"active":""}">${t().exam}</button></div><div class="actions"><button id="focusBtn" class="ghost">${state.focus?t().exitFocus:t().focus}</button></div></div></section>
<div class="lessonTabs">${[["concept",t().concept],["visual",t().visual],["example",t().example],["lab",t().lab],["quiz",t().quiz],["recap",t().recap]].map(([k,l])=>`<button data-tab="${k}" class="${state.lessonTab===k?"active":""}">${l}</button>`).join("")}</div>
<section class="lessonPanel">${body}</section><div class="footerNav"><button class="ghost" data-open="${prev.id}">← ${t().prev}</button><button class="primary" data-open="${next.id}">${t().next} →</button></div></div>`}
function attention(){const vals=[25,74,41,88,35,62].map(v=>Math.min(100,Math.round(v*state.temp)));return `<h2>Self-Attention</h2><div class="tokenRow">${["The","cat","sat","on","the","mat"].map((x,i)=>`<span class="${i===2?"active":""}">${x}</span>`).join("")}</div><div class="heat">${vals.map((v,i)=>`<div class="hrow"><span>${i+1}</span><div><i style="width:${v}%"></i></div></div>`).join("")}</div>`}
function labInner(){const vals=[22,68,45,92,37,58].map(v=>Math.min(100,Math.round(v*state.temp)));return `<div class="labGrid"><div class="card labControls"><label>${state.lang==="th"?"เลือก Token":"Choose Token"}</label><select id="labToken">${["A","B","C"].map(x=>`<option ${state.token===x?"selected":""}>${x}</option>`).join("")}</select><label>${state.lang==="th"?"ปรับ Temperature":"Adjust Temperature"}: ${state.temp.toFixed(1)}</label><input id="labTemp" type="range" min=".4" max="1.6" step=".1" value="${state.temp}"><p class="muted">${state.lang==="th"?"ลองปรับค่าแล้วดูการกระจายน้ำหนักเปลี่ยนทันที":"Adjust the control and watch the distribution change instantly."}</p></div><div class="card heat">${vals.map((v,i)=>`<div class="hrow"><span>${i+1}</span><div><i style="width:${v}%"></i></div></div>`).join("")}</div></div>`}
function quizInner(s,r){const q=progress.quiz[s.id]||{},checked=state.quizChecked,correct=1;return `<h2>${state.lang==="th"?"หัวข้อนี้สำคัญเพราะอะไร?":"Why is this topic important?"}</h2><div class="answers">${r.answers.map((a,i)=>`<button data-choice="${i}" class="${state.quizChoice===i?"selected":""} ${checked&&i===correct?"correct":""} ${checked&&state.quizChoice===i&&i!==correct?"wrong":""}">${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join("")}</div>${checked?`<div class="feedback"><b>${state.quizChoice===correct?t().correct:t().wrong}</b><p class="muted">${state.lang==="th"?`บทนี้เป็นพื้นฐานสำคัญของ ${trackLabel(s.track)}`:`This lesson is an important foundation inside ${trackLabel(s.track)}.`}</p></div>`:`<button id="checkQuiz" class="primary" ${state.quizChoice===null?"disabled":""}>${t().check}</button>`}${q.best?`<p class="muted">${state.lang==="th"?"คะแนนดีที่สุด":"Best score"}: ${q.best}/2 · ${fmtDate(q.at)}</p>`:""}`}
function labsPage(){return `<div class="page"><div class="pageHead"><span class="eyebrow">INTERACTIVE LAB</span><h1>${t().lab}</h1><p>${state.lang==="th"?"ทดลองแนวคิดแบบ interactive และบันทึก observation ได้จริง":"Interact with simplified concepts and save your observations."}</p></div>${labInner()}</div>`}
function projectsPage(){const ps=[["AI Decision Platform","Full-Stack AI",["Architecture","Dataset Inspector","ML Engine","RAG","Agent"]],["RAG Knowledge System","AI Core",["Upload Docs","Chunking","Embeddings","Search","Citations"]],["Smart Contract Lab","Blockchain",["State","Functions","Access Control","Payment","Integration"]]];return `<div class="page"><div class="pageHead"><span class="eyebrow">PROJECT TRACK</span><h1>${t().projectTrack}</h1><p>${state.lang==="th"?"เช็กลิสต์โปรเจกต์ถูกบันทึกจริงและเอาไว้ติดตามงานได้":"Project checklists are persisted and can be used to track real work."}</p></div><div class="projectGrid">${ps.map((p,pi)=>`<article class="card project"><div class="projectIcon">⚙</div><h2>${p[0]}</h2><p class="muted">${p[1]}</p>${p[2].map((task,ti)=>{const k=`${pi}-${ti}`,on=!!progress.projectTasks[k];return `<label class="projectTask"><input type="checkbox" data-project-task="${k}" ${on?"checked":""}><span>${task}</span></label>`}).join("")}<div class="bar"><i style="width:${Math.round(p[2].filter((_,ti)=>progress.projectTasks[`${pi}-${ti}`]).length/p[2].length*100)}%"></i></div></article>`).join("")}</div></div>`}
function progressPage(){const byTrack=trackOrder.map(c=>{const ss=curriculum.filter(s=>s.track===c),d=ss.filter(s=>isDone(s.id)).length;return[c,Math.round(d/ss.length*100)]});return `<div class="page"><div class="pageHead"><span class="eyebrow">PROFILE</span><h1>${t().skillProfile}</h1><p>${state.lang==="th"?"คำนวณจากความก้าวหน้าจริงที่บันทึกในเครื่องนี้":"Calculated from the progress saved in this browser."}</p></div><div class="progressLayout"><article class="card"><div class="mission"><div class="avatar">P</div><div><h2>PHONG</h2><p class="muted">Lv. ${level()} · ${xp().toLocaleString()} XP</p></div></div><div class="skillStack">${byTrack.map(([c,p])=>`<div><div class="skillTop"><span>${trackLabel(c)}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div></div>`).join("")}</div></article><article class="card"><span class="eyebrow">BADGES</span><div class="badgeGrid">${curriculum.filter(s=>isDone(s.id)).slice(-8).map(s=>`<div class="badge"><b>◈ ${tr(s.badge)}</b><small class="muted">Session ${s.id}</small></div>`).join("")}</div><div class="actions"><button id="exportProgress" class="ghost">${t().export}</button><button id="resetProgress" class="danger">${t().reset}</button></div></article></div><div class="card" style="margin-top:18px"><span class="eyebrow">${t().activity}</span><div class="activity">${progress.activity.slice(0,8).map(a=>`<div class="activityItem"><b>${esc(tr(a.text))}</b><small>${fmtDate(a.at)}</small></div>`).join("")}</div></div></div>`}
function assistantPage(){const s=session();return `<div class="page"><div class="pageHead"><span class="eyebrow">AI STUDY ASSISTANT</span><h1>${t().assistantTitle}</h1><p>${t().assistantDesc}</p></div><div class="assistantLayout"><article class="card"><div class="chat" id="chatLog">${progress.chat.map(m=>`<div class="bubble ${m.role}">${esc(m.text)}</div>`).join("")||`<div class="bubble ai">${state.lang==="th"?"ลองถามเกี่ยวกับ Session ปัจจุบันได้เลย":"Ask anything about the current session."}</div>`}</div><div class="promptRow">${t().quick.map(q=>`<button class="prompt" data-assistant-quick="${esc(q)}">${esc(q)}</button>`).join("")}</div><div class="chatInput"><input id="assistantInput" placeholder="${state.lang==="th"?"ถามเกี่ยวกับบทนี้...":"Ask about this lesson..."}"><button id="sendAssistant" class="primary">${t().send}</button></div></article><aside class="card"><span class="eyebrow">CURRENT SESSION</span><h3>${tr(s.title)}</h3><p class="muted">${tr(s.summary)}</p><div class="note"><b>${t().key}</b><ul>${s.keyPoints.map(k=>`<li>${esc(k)}</li>`).join("")}</ul></div></aside></div></div>`}
function assistantAnswer(q){const s=session(),low=q.toLowerCase();if(low.includes("สอบ")||low.includes("exam"))return state.lang==="th"?`สำหรับข้อสอบ ให้จำคำหลักของ ${tr(s.title)}: ${s.keyPoints.join(", ")}`:`For exams, remember these key terms for ${tr(s.title)}: ${s.keyPoints.join(", ")}`;if(low.includes("ตัวอย่าง")||low.includes("example"))return state.lang==="th"?`ตัวอย่างการมอง ${tr(s.title)}: เริ่มจาก ${s.keyPoints[0]} แล้วเชื่อมไปยัง ${s.keyPoints[1]||s.keyPoints[0]} ก่อนนำไปใช้จริง`:`Example: start with ${s.keyPoints[0]} and connect it to ${s.keyPoints[1]||s.keyPoints[0]} before implementation.`;return state.lang==="th"?`${tr(s.title)} แบบง่าย: ${tr(s.summary)} จุดที่ควรจำที่สุดคือ ${s.keyPoints.slice(0,3).join(", ")}`:`Simple explanation: ${tr(s.summary)} The most important points are ${s.keyPoints.slice(0,3).join(", ")}.`}
function render(){
let content=state.page==="home"?home():state.page==="curriculum"?curriculumPage():state.page==="lesson"?lessonPage():state.page==="labs"?labsPage():state.page==="projects"?projectsPage():state.page==="progress"?progressPage():assistantPage();
document.getElementById("app").innerHTML=chrome(content);bind()}
function bind(){
document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>setPage(b.dataset.page));
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;save();render()});
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.open)));
document.querySelectorAll("[data-track]").forEach(b=>b.onclick=()=>{state.track=b.dataset.track;render()});
document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.lessonTab=b.dataset.tab;render()});
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{state.mode=b.dataset.mode;render()});
document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>{if(!state.quizChecked){state.quizChoice=Number(b.dataset.choice);render()}});
document.querySelectorAll("[data-project-task]").forEach(c=>c.onchange=()=>{progress.projectTasks[c.dataset.projectTask]=c.checked;save();addActivity(state.lang==="th"?"อัปเดตเช็กลิสต์โปรเจกต์":"Updated project checklist",state.lang==="th"?"อัปเดตเช็กลิสต์โปรเจกต์":"Updated project checklist");render()});
const sr=document.getElementById("globalSearch");if(sr){const box=document.getElementById("searchResults");sr.oninput=e=>{state.search=e.target.value;const q=state.search.trim().toLowerCase(),hits=q?curriculum.filter(s=>[s.id,tr(s.title),tr(s.summary),trackLabel(s.track),...s.keyPoints].join(" ").toLowerCase().includes(q)).slice(0,8):[];box.innerHTML=hits.map(s=>`<button class="searchItem" data-search-open="${s.id}"><b>S${s.id} · ${tr(s.title)}</b><small>${trackLabel(s.track)}</small></button>`).join("");box.classList.toggle("hidden",!hits.length);box.querySelectorAll("[data-search-open]").forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.searchOpen)));};sr.onkeydown=e=>{if(e.key==="Enter"){state.page="curriculum";render()}}}
const f=document.getElementById("focusBtn");if(f)f.onclick=()=>{state.focus=!state.focus;render()};
const nt=document.getElementById("noteArea"),sn=document.getElementById("saveNote");if(sn)sn.onclick=()=>{progress.notes[state.selected]=nt.value;save();addActivity(state.lang==="th"?"บันทึกโน้ต Session":"Saved session note","Saved session note");toast(t().saved)};
const oa=document.getElementById("obsArea"),so=document.getElementById("saveObs");if(so)so.onclick=()=>{progress.observations[state.selected]=oa.value;save();toast(t().saved)};
const ct=document.getElementById("completeSession");if(ct)ct.onclick=()=>{if(!isDone(state.selected)){progress.completed.push(state.selected);progress.completed.sort((a,b)=>a-b);addActivity(state.lang==="th"?`เรียนจบ Session ${state.selected}`:`Completed Session ${state.selected}`,`Completed Session ${state.selected}`);save();toast(t().completed)}render()};
const cq=document.getElementById("checkQuiz");if(cq)cq.onclick=()=>{state.quizChecked=true;if(state.quizChoice===1){const q=progress.quiz[state.selected]||{best:0};q.best=Math.max(q.best,2);q.at=Date.now();progress.quiz[state.selected]=q;addActivity(state.lang==="th"?`ทำควิซ Session ${state.selected} ถูกต้อง`:`Passed quiz for Session ${state.selected}`,`Passed quiz for Session ${state.selected}`);save()}render()};
const lt=document.getElementById("labToken");if(lt)lt.onchange=e=>{state.token=e.target.value;render()};const tp=document.getElementById("labTemp");if(tp)tp.oninput=e=>{state.temp=Number(e.target.value);render()};
document.querySelectorAll("[data-quick]").forEach(b=>b.onclick=()=>{state.page="assistant";progress.chat.push({role:"user",text:b.dataset.quick});progress.chat.push({role:"ai",text:assistantAnswer(b.dataset.quick)});save();render()});
document.querySelectorAll("[data-assistant-quick]").forEach(b=>b.onclick=()=>sendChat(b.dataset.assistantQuick));
const send=document.getElementById("sendAssistant");if(send)send.onclick=()=>{const i=document.getElementById("assistantInput");sendChat(i.value)};
const ai=document.getElementById("assistantInput");if(ai)ai.onkeydown=e=>{if(e.key==="Enter")sendChat(ai.value)};
const ex=document.getElementById("exportProgress");if(ex)ex.onclick=()=>{const blob=new Blob([JSON.stringify(progress,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="nexus-learning-progress.json";a.click();URL.revokeObjectURL(a.href);toast(t().export)};
const rp=document.getElementById("resetProgress");if(rp)rp.onclick=()=>{if(confirm(state.lang==="th"?"รีเซ็ตความก้าวหน้าทั้งหมด?":"Reset all progress?")){localStorage.removeItem("nexus.progress");location.reload()}};
}
function sendChat(q){q=(q||"").trim();if(!q)return;progress.chat.push({role:"user",text:q});progress.chat.push({role:"ai",text:assistantAnswer(q)});progress.chat=progress.chat.slice(-30);save();render()}
render();
})();
