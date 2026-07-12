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
  const root = document.getElementById("adventure-app");
  if (!root) return;

  const PATHS = {
    adventure: {
      icon: "🌲", title: "A Spontaneous Adventure",
      blurb: "No plans, just curiosity and an open road.",
      intro: "Today we wake up and decide… no plans. Just curiosity.",
      questions: [
        { q: "First stop:", choices: [
          { icon: "🔍", label: "Find a hidden gem we've never been to", frag: "chasing down a hidden gem we'd never been to" },
          { icon: "🗺️", label: "Pick a random town on the map and explore", frag: "picking a random town on the map to explore" },
          { icon: "🚗", label: "Pack the car and head somewhere beautiful", frag: "packing the car and driving somewhere beautiful" },
          { icon: "🌅", label: "Chase a sunset with no destination in mind", frag: "chasing a sunset with no destination in mind" }
        ]},
        { q: "Along the way:", choices: [
          { icon: "🍿", label: "Get all the best snacks", frag: "grabbing all the best snacks" },
          { icon: "🍜", label: "Find the best local food spot", frag: "hunting down the best local food spot" },
          { icon: "✨", label: "Try something new", frag: "trying something neither of us had done before" },
          { icon: "💬", label: "Talk for hours about life, dreams, and random ideas", frag: "talking for hours about life, dreams, and half-baked ideas" }
        ]},
        { q: "The day ends with:", choices: [
          { icon: "🌌", label: "Stargazing", frag: "ending the night stargazing" },
          { icon: "🛖", label: "A cozy cabin weekend we accidentally discovered", frag: "accidentally turning it into a cozy cabin weekend" },
          { icon: "🍦", label: "Ice cream while walking around a new town", frag: "getting ice cream while wandering a new town" },
          { icon: "🌇", label: "Watching the sunset somewhere beautiful", frag: "watching the sun set somewhere beautiful" }
        ]}
      ],
      story: (f) => `Looks like we'd spend our Saturday ${f[0]}, ${f[1]}, and ${f[2]}. The kind of day where the plan is not having a plan — just finding little moments worth remembering.`
    },
    build: {
      icon: "🛠️", title: "Build Something Together",
      blurb: "Make something with our hands, side by side.",
      intro: "Today we create something instead of just consuming something.",
      questions: [
        { q: "What are we making?", choices: [
          { icon: "🌿", label: "Build a garden oasis", frag: "building a little garden oasis" },
          { icon: "🏚️", label: "Restore an old house / project space", frag: "restoring an old space into something ours" },
          { icon: "🏺", label: "Make pottery or something handmade", frag: "making pottery with our hands" },
          { icon: "🎨", label: "Start a creative side project together", frag: "starting a creative side project together" }
        ]},
        { q: "Our teamwork style:", choices: [
          { icon: "📐", label: "Carefully plan everything first", frag: "mapping out every detail first" },
          { icon: "🧭", label: "Figure it out as we go", frag: "figuring it out as we go" },
          { icon: "😄", label: "Make mistakes and laugh about them", frag: "making a mess of mistakes and laughing through them" },
          { icon: "🚀", label: "Turn it into a bigger project than expected", frag: "somehow turning it into a way bigger project than planned" }
        ]},
        { q: "We celebrate by:", choices: [
          { icon: "🍽️", label: "Having a nice dinner", frag: "having a nice dinner" },
          { icon: "🍷", label: "Sitting outside with a drink", frag: "sitting outside with a drink" },
          { icon: "👀", label: "Admiring what we created", frag: "just admiring what we made" },
          { icon: "🗓️", label: "Planning our next project", frag: "already planning the next one" }
        ]}
      ],
      story: (f) => `Looks like we'd spend the day ${f[0]}, ${f[1]}, and celebrating by ${f[2]}. Two people who'd rather make something together than just pass the time.`
    },
    relax: {
      icon: "☕", title: "A Relaxing Day With Small Surprises",
      blurb: "Slow, easy, and sprinkled with little delights.",
      intro: "No big agenda. Just a day that feels easy.",
      questions: [
        { q: "The morning starts with:", choices: [
          { icon: "☕", label: "Coffee and a slow morning", frag: "coffee and a slow morning" },
          { icon: "🧺", label: "Farmers market wandering", frag: "wandering the farmers market" },
          { icon: "🚶", label: "A walk somewhere beautiful", frag: "a long walk somewhere beautiful" },
          { icon: "📖", label: "Reading, music, and no alarms", frag: "reading, music, and no alarms" }
        ]},
        { q: "The surprise adventure:", choices: [
          { icon: "🍰", label: "Discover a new dessert", frag: "a new dessert we had to try" },
          { icon: "🥾", label: "Find a hidden trail", frag: "a hidden trail" },
          { icon: "🎁", label: "A surprise for each other", frag: "little surprises for each other" },
          { icon: "🐶", label: "Meet a new furry friend", frag: "a new furry friend" }
        ]},
        { q: "The perfect ending:", choices: [
          { icon: "🍳", label: "Cook dinner together", frag: "cooking dinner together" },
          { icon: "🎬", label: "Watch a movie with snacks", frag: "watching a movie with too many snacks" },
          { icon: "🌙", label: "Sit outside and talk", frag: "sitting outside just talking" },
          { icon: "📷", label: "Look through old photos and tell stories", frag: "flipping through old photos, telling stories" }
        ]}
      ],
      story: (f) => `Looks like we'd ease into the day with ${f[0]}, stumble into ${f[1]}, and end it ${f[2]}. Nothing fancy — just the kind of easy day you don't want to end.`
    },
    party: {
      icon: "🎉", title: "Host a Party",
      blurb: "Bring our people together for a good night.",
      intro: "Today we bring people together.",
      questions: [
        { q: "Our party theme:", choices: [
          { icon: "🍽️", label: "Backyard dinner party", frag: "a backyard dinner party" },
          { icon: "🎲", label: "Cozy game night", frag: "a cozy game night" },
          { icon: "🔥", label: "Bonfire with friends", frag: "a bonfire with friends" },
          { icon: "🏈", label: "Tailgate before an event", frag: "a tailgate before the big event" }
        ]},
        { q: "Our hosting roles:", choices: [
          { icon: "🥘", label: "It's a potluck", frag: "turning it into a potluck" },
          { icon: "🎈", label: "You welcome everyone, I decorate", frag: "you on welcomes and me on decorations" },
          { icon: "👩‍🍳", label: "We make everything from scratch", frag: "making everything from scratch" },
          { icon: "🤷", label: "We invite too many people and figure it out", frag: "inviting way too many people and figuring it out" }
        ]},
        { q: "The night ends with:", choices: [
          { icon: "⏰", label: "Everyone staying way later than planned", frag: "with everyone staying way later than planned" },
          { icon: "💃", label: "Dancing in the kitchen", frag: "dancing in the kitchen" },
          { icon: "🔥", label: "Deep conversations around the fire", frag: "deep in conversation around the fire" },
          { icon: "🗓️", label: "Planning the next gathering", frag: "already planning the next gathering" }
        ]}
      ],
      story: (f) => `Looks like we'd throw ${f[0]}, ${f[1]}, and end the night ${f[2]}. Turns out our idea of a perfect day is a house full of the people we love.`
    }
  };

  const state = { pathKey: null, step: 0, answers: [] };

  const clear = () => { root.innerHTML = ""; };
  const mount = (el) => { el.classList.add("adv-screen"); root.appendChild(el); };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };

  function renderLanding() {
    state.pathKey = null; state.step = 0; state.answers = [];
    clear();
    const wrap = el("div");
    wrap.appendChild(el("p", "adv-lead", "Four ways a Saturday together could go. Pick the one that sounds like you."));
    const cards = el("div", "adv-cards");
    Object.keys(PATHS).forEach((key) => {
      const p = PATHS[key];
      const btn = el("button", "adv-card"); btn.type = "button";
      btn.appendChild(el("span", "adv-card-icon", p.icon));
      const txt = el("div");
      txt.appendChild(el("h3", null, p.title));
      txt.appendChild(el("p", null, p.blurb));
      btn.appendChild(txt);
      btn.addEventListener("click", () => { state.pathKey = key; state.step = 0; state.answers = []; renderQuestion(); });
      cards.appendChild(btn);
    });
    wrap.appendChild(cards);
    mount(wrap);
  }

  function renderProgress() {
    const path = PATHS[state.pathKey];
    const prog = el("div", "adv-progress");
    path.questions.forEach((_, i) => {
      const dot = el("span", "adv-dot");
      if (i < state.step) dot.classList.add("done");
      else if (i === state.step) dot.classList.add("current");
      prog.appendChild(dot);
    });
    return prog;
  }

  function renderQuestion() {
    const path = PATHS[state.pathKey];
    const q = path.questions[state.step];
    clear();
    const wrap = el("div");

    const back = el("button", "adv-back", "← Back"); back.type = "button";
    back.addEventListener("click", () => {
      if (state.step === 0) renderLanding();
      else { state.step--; state.answers.pop(); renderQuestion(); }
    });
    wrap.appendChild(back);
    wrap.appendChild(renderProgress());

    if (state.step === 0) wrap.appendChild(el("p", "adv-intro", "“" + path.intro + "”"));
    wrap.appendChild(el("p", "adv-q", q.q));

    const choices = el("div", "adv-choices");
    q.choices.forEach((c, ci) => {
      const btn = el("button", "adv-choice"); btn.type = "button";
      btn.appendChild(el("span", "adv-choice-icon", c.icon));
      btn.appendChild(el("span", null, c.label));
      btn.addEventListener("click", () => {
        state.answers[state.step] = ci;
        if (state.step < path.questions.length - 1) { state.step++; renderQuestion(); }
        else renderSummary();
      });
      choices.appendChild(btn);
    });
    wrap.appendChild(choices);
    mount(wrap);
  }

  function renderSummary() {
    const path = PATHS[state.pathKey];
    const frags = state.answers.map((ci, i) => path.questions[i].choices[ci].frag);
    clear();
    const wrap = el("div", "adv-summary");
    wrap.appendChild(el("div", "adv-summary-badge", path.icon));
    wrap.appendChild(el("h3", null, "✨ Our day would look something like…"));
    wrap.appendChild(el("p", "adv-story", path.story(frags)));

    const tags = el("div", "adv-tags");
    tags.appendChild(el("span", "adv-tag", path.icon + " " + path.title));
    state.answers.forEach((ci, i) => {
      const c = path.questions[i].choices[ci];
      tags.appendChild(el("span", "adv-tag", c.icon + " " + c.label));
    });
    wrap.appendChild(tags);

    const actions = el("div", "adv-actions");
    const again = el("button", "adv-btn", "↻ Start over"); again.type = "button";
    again.addEventListener("click", renderLanding);
    const know = el("a", "adv-btn adv-btn-primary", "Get to know me next →"); know.href = "#game";
    actions.appendChild(again); actions.appendChild(know);
    wrap.appendChild(actions);
    mount(wrap);
  }

  renderLanding();
})();
