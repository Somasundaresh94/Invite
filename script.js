// ================= LOADER + MUSIC =================
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

loader.onclick = () => {
  loader.style.display = "none";
  music.play().catch(() => {});
};

// ================= FLOATING HEARTS (PAIRED, RANDOM, NO OVERLAP) =================
const heartsContainer = document.getElementById("hearts");
const HEART_COUNT = 18; // premium density

function createHearts() {
  heartsContainer.innerHTML = "";

  const columnWidth = 100 / HEART_COUNT;

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement("span");

    // 💜❤️ stays together
    heart.innerHTML = "💜❤️";

    // Random X but inside its own column (NO OVERLAP)
    const min = i * columnWidth;
    const max = min + columnWidth;
    heart.style.left = (min + Math.random() * (max - min)) + "vw";

    // Calm premium speed
    const duration = 9 + Math.random() * 4;
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
