// Loader & Music
const loader=document.getElementById("loader");
const music=document.getElementById("bgMusic");

loader.onclick=()=>{
  loader.style.display="none";
  music.play();
};

// Hearts (non-overlapping)
const heartContainer=document.getElementById("hearts");
const usedPositions=[];

for(let i=0;i<28;i++){
  let pos;
  do{
    pos=Math.floor(Math.random()*90);
  }while(usedPositions.some(p=>Math.abs(p-pos)<4));

  usedPositions.push(pos);

  const h=document.createElement("span");
  h.innerHTML=Math.random()>0.5?"💜":"❤️";
  h.style.left=pos+"vw";
  h.style.fontSize=14+Math.random()*10+"px";
  h.style.animationDelay=Math.random()*5+"s";
  heartContainer.appendChild(h);
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
  const diff=target-now;
  if(diff<0)return;

  days.innerText=Math.floor(diff/(1000*60*60*24));
  hours.innerText=Math.floor((diff/(1000*60*60))%24);
  minutes.innerText=Math.floor((diff/(1000*60))%60);
  seconds.innerText=Math.floor((diff/1000)%60);
},1000);
