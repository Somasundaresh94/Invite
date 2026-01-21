// ================= LOADER + MUSIC =================
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

loader.onclick = () => {
  loader.style.display = "none";
  music.play().catch(() => {});
};

// ================= FLOATING HEARTS (PAIRED, EVEN, NO OVERLAP) =================
const heartsContainer = document.getElementById("hearts");
const HEART_COUNT = 20;   // balanced & clean

function createHearts() {
  heartsContainer.innerHTML = "";

  const spacing = 100 / HEART_COUNT;

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement("span");

    // Paired hearts (DO NOT SPLIT)
    heart.innerHTML = "💜❤️";

    // Equal horizontal spacing
    heart.style.left = (i * spacing + spacing / 2) + "vw";

    // Smooth vertical speed (no crossing)
    const duration = 7 + (i % 3);
    heart.style.animation = `floatUp ${duration}s linear infinite`;

    heartsContainer.appendChild(heart);
  }
}

createHearts();

// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 80) {
      r.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= COUNTDOWN =================
const target = new Date("2026-02-07T18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML = `
    <div>${d}<br>Days</div>
    <div>${h}<br>Hours</div>
    <div>${m}<br>Minutes</div>
    <div>${s}<br>Seconds</div>
  `;
}, 1000);
