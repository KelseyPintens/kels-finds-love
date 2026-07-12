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

// "Spend a day with me" — choose your own adventure
(function adventure() {
  const root = document.getElementById("cyoa");
  if (!root) return;

  const STORY = {
    start: {
      scene: "It's a golden Saturday morning in Madison. I hand you a mug I made and grin: “You're mine for the whole day — where do we start?”",
      choices: [{ label: "🌸 Farmers market for flowers & coffee", to: "market" }, { label: "🚗 Hit the road for an adventure", to: "road" }]
    },
    market: {
      scene: "We wander the stalls, I fill your arms with dahlias, and we split a still-warm pastry. Mid-bite I ask: “Cozy afternoon, or should we chase something?”",
      choices: [{ label: "🏺 Cozy — take me to your studio", to: "studio" }, { label: "🥾 Chase it — let's find a trail", to: "trail" }]
    },
    road: {
      scene: "Windows down, my very serious playlist on. Two hours in, there's a fork in the road: “Mountains, or water?”",
      choices: [{ label: "⛰️ Mountains — a national park it is", to: "park" }, { label: "🌊 Water — find us a lake", to: "lake" }]
    },
    studio: {
      scene: "Clay everywhere. I cover your hands with mine on the wheel; it wobbles, collapses, and we laugh until we cry. As evening rolls in I ask: “Cook here, or go out?”",
      choices: [{ label: "🍳 Cook together", to: "end_cook" }, { label: "🌇 Golden-hour walk first", to: "end_sunset" }]
    },
    trail: {
      scene: "We find a quiet path and talk about everything and nothing, reaching an overlook just as the light turns gold. “Stay for the stars,” I ask, “or head back for dinner?”",
      choices: [{ label: "✨ Stay for the stars", to: "end_stars" }, { label: "🍝 Dinner it is", to: "end_cook" }]
    },
    park: {
      scene: "Towering trees, that pine smell, a view that makes us both go quiet. “This is my reset button,” I whisper. We hike till our legs ache, then—",
      choices: [{ label: "🌅 Sunset from the summit", to: "end_sunset" }, { label: "✨ Find a spot to stargaze", to: "end_stars" }]
    },
    lake: {
      scene: "We skip rocks and dip our toes, and I win the skipping contest (I always do). As the sun dips over the water—",
      choices: [{ label: "🌅 Linger for the sunset", to: "end_sunset" }, { label: "🔥 Little fire, stay for the stars", to: "end_stars" }]
    },
    end_cook: { ending: "🍳 We cook something a little too ambitious, mostly pull it off, and eat it on the floor because the table's covered in ceramics. You didn't run. I think this might be the start of something." },
    end_sunset: { ending: "🌅 We stop for the sunset — obviously — and I make you name every color with me. Bonus points earned. I'd do this whole day over in a heartbeat." },
    end_stars: { ending: "✨ We lie back and watch the stars come out, trading stories until it's late and neither of us wants to leave. I'm already planning the next adventure." }
  };

  function render(id) {
    const node = STORY[id];
    root.innerHTML = "";
    const card = document.createElement("div");
    card.className = "cyoa-card";

    if (node.ending) {
      const p = document.createElement("p");
      p.className = "cyoa-ending";
      p.textContent = node.ending;
      card.appendChild(p);

      const sign = document.createElement("p");
      sign.className = "cyoa-sign";
      sign.textContent = "— Kelsey";
      card.appendChild(sign);

      const actions = document.createElement("div");
      actions.className = "cyoa-actions";
      const again = document.createElement("button");
      again.type = "button";
      again.className = "cyoa-btn";
      again.textContent = "↻ Play again";
      again.addEventListener("click", () => render("start"));
      actions.appendChild(again);
      const hi = document.createElement("a");
      hi.className = "cyoa-btn cyoa-hi";
      hi.href = "#say-hi";
      hi.textContent = "💌 Say hi";
      actions.appendChild(hi);
      card.appendChild(actions);
    } else {
      const p = document.createElement("p");
      p.className = "cyoa-scene";
      p.textContent = node.scene;
      card.appendChild(p);

      const choices = document.createElement("div");
      choices.className = "cyoa-choices";
      node.choices.forEach((c) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cyoa-btn";
        btn.textContent = c.label;
        btn.addEventListener("click", () => render(c.to));
        choices.appendChild(btn);
      });
      card.appendChild(choices);
    }

    root.appendChild(card);

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    card.style.opacity = 0;
    requestAnimationFrame(() => { card.style.transition = "opacity .3s ease"; card.style.opacity = 1; });
  }

  render("start");
})();
