// Kelsey · Finds Love — light interactions

// Reveal sections as they scroll into view
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

// "Guess my answer" game
(function guessGame() {
  const quiz = document.getElementById("quiz");
  if (!quiz) return;

  const QUESTIONS = [
    { q: "My ideal Saturday morning?", options: ["Sleeping in until noon", "Farmers market + a good coffee", "Brunch reservations downtown", "Gym, then errands"], answer: 1, note: "Farmers market morning, every time — flowers, coffee, and nowhere to be." },
    { q: "Where's my happy place?", options: ["A rooftop bar", "A national park trail", "A shopping mall", "The couch, all weekend"], answer: 1, note: "Give me a trail and a view. Parks are my reset button." },
    { q: "What am I most likely making right now?", options: ["A spreadsheet", "A ceramic mug", "A sourdough starter", "A TikTok"], answer: 1, note: "Currently obsessed with ceramics — maybe a little lifestyle brand someday." },
    { q: "My honest take on having kids?", options: ["I want a big family", "Not for me — I'm chasing other dreams", "Totally undecided", "Just give me pets"], answer: 1, note: "Not looking to have kids — I've got a long list of dreams I'd rather chase." },
    { q: "Golden sunset ahead — do we stop?", options: ["Keep driving, we're late", "Always stop", "Only if I can get a photo", "Eh, depends"], answer: 1, note: "Every single time. Bonus points if you'll let me convince you it's worth it." },
    { q: "Fastest way to my heart?", options: ["Expensive gifts", "Something handmade + a handwritten note", "Grand public gestures", "A perfectly-timed meme"], answer: 1, note: "Thoughtful and handmade wins — it's the effort I fall for." }
  ];

  const total = QUESTIONS.length;
  let answered = 0, score = 0;
  const pill = document.getElementById("score-pill");
  const resultBox = document.getElementById("quiz-result");

  QUESTIONS.forEach((item, qi) => {
    const card = document.createElement("div");
    card.className = "quiz-q";

    const h = document.createElement("h3");
    h.textContent = (qi + 1) + ". " + item.q;
    card.appendChild(h);

    const opts = document.createElement("div");
    opts.className = "opts";
    item.options.forEach((text, oi) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.textContent = text;
      btn.addEventListener("click", () => choose(card, opts, oi, item));
      opts.appendChild(btn);
    });
    card.appendChild(opts);

    const reveal = document.createElement("p");
    reveal.className = "reveal";
    const strong = document.createElement("strong");
    strong.textContent = "My answer: ";
    reveal.appendChild(strong);
    reveal.appendChild(document.createTextNode(item.options[item.answer] + " — " + item.note));
    card.appendChild(reveal);

    quiz.appendChild(card);
  });

  function choose(card, opts, oi, item) {
    if (card.dataset.done) return;
    card.dataset.done = "1";
    opts.querySelectorAll(".opt").forEach((b, i) => {
      b.disabled = true;
      if (i === item.answer) b.classList.add("correct");
      else if (i === oi) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    card.querySelector(".reveal").classList.add("show");
    answered++;
    if (oi === item.answer) score++;
    pill.textContent = "You know me: " + score + " / " + total;
    if (answered === total) finish();
  }

  function finish() {
    let title, note;
    if (score === total) { title = "Soulmates, clearly 💚"; note = "You got every single one. Okay — now you have to say hi."; }
    else if (score >= total - 2) { title = "You really get me ☕"; note = "That's a seriously good read. I think we'd get along."; }
    else if (score >= 2) { title = "Off to a promising start 🌱"; note = "You've got the gist — we can figure out the rest over coffee."; }
    else { title = "…we should talk more 😄"; note = "Plot twist! Looks like you'll just have to get to know me."; }
    document.getElementById("quiz-result-title").textContent = title;
    document.getElementById("quiz-result-note").textContent = note;
    resultBox.classList.add("show");
  }
})();
