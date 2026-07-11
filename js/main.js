// Kelsey · Finds Love — light interactions

// 1) Reveal sections as they scroll into view
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".section").forEach((el) => io.observe(el));

// 2) Gentle floating hearts in the background
(function floatHearts() {
  const layer = document.querySelector(".hearts");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const emojis = ["💕", "💗", "💖", "🤍", "💞"];
  const COUNT = 14;

  for (let i = 0; i < COUNT; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = 14 + Math.random() * 22 + "px";
    s.style.animationDuration = 10 + Math.random() * 14 + "s";
    s.style.animationDelay = Math.random() * 12 + "s";
    layer.appendChild(s);
  }
})();
