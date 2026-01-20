/* ============================
   COUNTDOWN TIMER
============================ */

const targetDate = new Date("2026-02-07T18:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.innerText = Math.floor((diff / (1000 * 60)) % 60);
  seconds.innerText = Math.floor((diff / 1000) % 60);
}, 1000);


/* ============================
   FLOATING HEARTS ANIMATION
============================ */

const heartsContainer = document.getElementById("hearts");
const heartColors = ["#d6336c", "#7b2cbf"]; // red + violet

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 95 + "vw";
  heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.fontSize = "16px";
  heart.style.animationDuration = (5 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);

}, 500);
