// Loader + Music
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");
loader.onclick = ()=>{
  loader.style.display="none";
  music.play();
};

// Floating Hearts
for(let i=0;i<25;i++){
  const h=document.createElement("span");
  h.innerHTML="💛";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDelay=Math.random()*10+"s";
  document.getElementById("hearts").appendChild(h);
}

// Reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top<window.innerHeight-100){
      r.classList.add("show");
    }
  });
});

// Countdown
const target=new Date("2026-02-07T18:00:00").getTime();
setInterval(()=>{
  const now=new Date().getTime();
  const d=Math.floor((target-now)/(1000*60*60*24));
  const h=Math.floor((target-now)/(1000*60*60)%24);
  const m=Math.floor((target-now)/(1000*60)%60);
  const s=Math.floor((target-now)/1000%60);
  document.getElementById("timer").innerHTML=
  `<div>${d}<br>நாள்</div>
   <div>${h}<br>மணி</div>
   <div>${m}<br>நிமிடம்</div>
   <div>${s}<br>விநாடி</div>`;
},1000);
