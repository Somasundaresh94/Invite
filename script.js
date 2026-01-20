/* ---------- LOADER + MUSIC ---------- */
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

loader.addEventListener("click",()=>{
  loader.style.display="none";
  music.play();
});

/* ---------- FLOATING HEARTS (NO OVERLAP) ---------- */
const heartsContainer = document.getElementById("hearts");
const heartColors = ["#8A2BE2","#C71585","#FF1493","#9400D3","#FF416C"];
const totalHearts = 30;

for(let i=0;i<totalHearts;i++){
  const heart = document.createElement("span");
  heart.innerHTML = "💜❤️";

  heart.style.left = (i*(100/totalHearts))+"vw";
  heart.style.color = heartColors[i % heartColors.length];
  heart.style.animationDuration = (8+Math.random()*6)+"s";
  heart.style.animationDelay = (Math.random()*5)+"s";

  heartsContainer.appendChild(heart);
}

/* ---------- REVEAL ---------- */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add("show");
    }
  });
});

/* ---------- COUNTDOWN ---------- */
const target = new Date("2026-02-07T18:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = target-now;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);

  document.getElementById("timer").innerHTML =
   `<div>${d}<br>Days</div>
    <div>${h}<br>Hours</div>
    <div>${m}<br>Min</div>
    <div>${s}<br>Sec</div>`;
},1000);
