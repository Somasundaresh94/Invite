// ================= LOADER + MUSIC =================
const loader = document.getElementById("loader");
const music = document.getElementById("bgMusic");

loader.onclick = () => {
  loader.style.display = "none";
  music.play();
};

// ================= FLOATING HEARTS (EVEN & CLEAN) =================
const heartsContainer = document.getElementById("hearts");
const heartColors = ["#f5c542", "#7b2cbf"]; // yellow & violet
const HEART_COUNT = 24; // even distribution

function createHearts() {
  heartsContainer.innerHTML = "";

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement("span");
    // heart.innerHTML = "❤";
     heart.innerHTML="💜❤️";

    // Even horizontal spacing
    const leftPos = (i + 0.5) * (100 / HEART_COUNT);
    heart.style.left = leftPos + "vw";

    // Alternate colors
    heart.style.color = heartColors[i % heartColors.length];

    // Speed variation (smooth)
    const duration = 6 + Math.random() * 4;
    heart.style.animation = `floatUp ${duration}s linear infinite`;

    heartsContainer.appendChild(heart);
  }
}

createHearts();

// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 80) {
      r.classList.add("show");
    }
  });
});

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

