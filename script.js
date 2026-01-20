// Loader + Music
const loader=document.getElementById("loader");
const music=document.getElementById("bgMusic");
loader.onclick=()=>{
  loader.style.display="none";
  music.play();
};

// Floating Hearts
for(let i=0;i<30;i++){
  const h=document.createElement("span");
  h.innerHTML="💜❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDelay=Math.random()*5+"s";
  document.getElementById("hearts").appendChild(h);
}

// Reveal on scroll
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top<window.innerHeight-80){
      r.classList.add("show");
    }
  });
});

// Countdown
const target=new Date("2026-02-07T18:00:00").getTime();
setInterval(()=>{
  const now=new Date().getTime();
  const diff=target-now;
  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor(diff/(1000*60*60)%24);
  const m=Math.floor(diff/(1000*60)%60);
  const s=Math.floor(diff/1000%60);
  document.getElementById("timer").innerHTML=
  `<div>${d}<br>Days</div>
   <div>${h}<br>Hours</div>
   <div>${m}<br>Minutes</div>
   <div>${s}<br>Seconds</div>`;
},1000);
