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

// ---- inline line icons (Untitled-UI / Feather style) ----
var ICONS = {
  cake: '<path d="M3 20h18M4 20v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"/><path d="M4 15c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 2 1"/><path d="M12 8V5"/><circle cx="12" cy="3.5" r="1"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  ruler: '<path d="M4 8l4-4 12 12-4 4z"/><path d="M8.5 7.5l1.5 1.5M11.5 10.5l1.5 1.5M14.5 13.5l1.5 1.5"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9 16.2 7.8"/>',
  tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
  coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><line x1="6" y1="2" x2="6" y2="5"/><line x1="10" y1="2" x2="10" y2="5"/><line x1="14" y1="2" x2="14" y2="5"/>',
  gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  map: '<polygon points="2 6 9 3 15 6 22 3 22 18 15 21 9 18 2 21 2 6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
  car: '<path d="M5 13l1.6-4.5A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.5L19 13"/><path d="M4 13h16v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0h-4a2 2 0 0 1-4 0H5a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="16.5" r="1.2"/><circle cx="16.5" cy="16.5" r="1.2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  bag: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  utensils: '<path d="M4 2v7a2.5 2.5 0 0 0 5 0V2"/><line x1="6.5" y1="9" x2="6.5" y2="22"/><path d="M17 2c-1.5 0-2.5 2-2.5 5s1 5 2.5 5"/><line x1="17" y1="2" x2="17" y2="22"/>',
  sparkles: '<path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5 10.2 7.7 12 3z"/><path d="M19 14l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
  home: '<path d="M3 10l9-7 9 7"/><path d="M5 9v11a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9"/>',
  icecream: '<path d="M8 11a4 4 0 0 1 8 0"/><path d="M8 11h8l-4 10-4-10z"/>',
  star: '<polygon points="12 3 14.6 8.6 21 9.3 16.2 13.6 17.6 20 12 16.6 6.4 20 7.8 13.6 3 9.3 9.4 8.6 12 3"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  chair: '<path d="M6 20v-3M18 20v-3M6 13h12M7.5 13V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7M5 17h14"/>',
  bulb: '<path d="M9 18h6M10 21.5h4M8.5 14a6 6 0 1 1 7 0 3 3 0 0 0-1 2v.5h-5V16a3 3 0 0 0-1-2z"/>',
  palette: '<path d="M12 2a10 10 0 0 0 0 20 2 2 0 0 0 2-2 2 2 0 0 1 2-2h1.5A4.5 4.5 0 0 0 22 13.5 10 10 0 0 0 12 2z"/><circle cx="7.5" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="11" r="1"/>',
  heart: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.3 1.8 3.5 1.8 3.5-1.8 3.5-1.8"/><line x1="9" y1="9.5" x2="9.01" y2="9.5"/><line x1="15" y1="9.5" x2="15.01" y2="9.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.7A6 6 0 1 0 6 15.5"/><path d="M6 19h11.5"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>',
  film: '<rect x="2" y="3" width="20" height="18" rx="2"/><line x1="7" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="17" y2="21"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="2" y1="15" x2="22" y2="15"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  flame: '<path d="M12 2s5 3.5 5 9a5 5 0 0 1-10 0c0-1.7.8-2.9 1.7-3.9C9.4 8 10 6 9.5 4.5c2 .8 3 2.3 3.2 3.8C13.7 6.7 13 4 12 2z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.2 9a3 3 0 0 1 5.6 1c0 2-2.8 2.6-2.8 4"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="3" y1="9.5" x2="21" y2="9.5"/>',
  paw: '<circle cx="7" cy="10" r="1.7"/><circle cx="12" cy="8" r="1.7"/><circle cx="17" cy="10" r="1.7"/><path d="M8.5 15a3.5 3.5 0 0 1 7 0c0 2-1.6 3.2-3.5 3.2S8.5 17 8.5 15z"/>',
  leaf: '<path d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16z"/><path d="M4 20c3-5 7-8 12-9"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  gamepad: '<rect x="2" y="7" width="20" height="11" rx="5"/><line x1="7" y1="11" x2="7" y2="14"/><line x1="5.5" y1="12.5" x2="8.5" y2="12.5"/><circle cx="15.5" cy="11.5" r="1"/><circle cx="18" cy="13.5" r="1"/>',
  flower: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5a2.5 2.5 0 1 0-2.5-2.5M12 9.5a2.5 2.5 0 1 1 2.5-2.5M12 14.5a2.5 2.5 0 1 0-2.5 2.5M12 14.5a2.5 2.5 0 1 1 2.5 2.5M9.5 12a2.5 2.5 0 1 1-2.5 2.5M14.5 12a2.5 2.5 0 1 0 2.5 2.5"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7l1.3-2.2a1 1 0 0 1 .9-.5h2.6a1 1 0 0 1 .9.5L15.5 7"/><circle cx="12" cy="13.5" r="3.5"/>',
  inbox: '<path d="M3 12h5l2 3h4l2-3h5"/><path d="M5.4 5.6A1 1 0 0 1 6.3 5h11.4a1 1 0 0 1 .9.6L21 12v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z"/>'
};
function svg(name) {
  return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.star) + '</svg>';
}


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
      icon: "compass", title: "A spontaneous adventure",
      blurb: "No plans, just curiosity and an open road.",
      intro: "Today we wake up and decide… no plans. Just curiosity.",
      questions: [
        { q: "First stop:", choices: [
          { icon: "search", label: "Find a hidden gem we've never been to", frag: "chasing down a hidden gem we'd never been to" },
          { icon: "map", label: "Pick a random town on the map and explore", frag: "picking a random town on the map to explore" },
          { icon: "car", label: "Pack the car and head somewhere beautiful", frag: "packing the car and driving somewhere beautiful" },
          { icon: "sun", label: "Chase a sunset with no destination in mind", frag: "chasing a sunset with no destination in mind" }
        ]},
        { q: "Along the way:", choices: [
          { icon: "bag", label: "Get all the best snacks", frag: "grabbing all the best snacks" },
          { icon: "utensils", label: "Find the best local food spot", frag: "hunting down the best local food spot" },
          { icon: "sparkles", label: "Try something new", frag: "trying something neither of us had done before" },
          { icon: "message", label: "Talk for hours about life, dreams, and random ideas", frag: "talking for hours about life, dreams, and half-baked ideas" }
        ]},
        { q: "The day ends with:", choices: [
          { icon: "home", label: "Book a cozy cabin because neither of us wants the day to end", frag: "booking a cozy cabin because neither of us wanted the day to end" },
          { icon: "icecream", label: "Stop for ice cream even though we're full", frag: "stopping for ice cream even though we were full" },
          { icon: "star", label: "Pull over somewhere quiet to watch the stars", frag: "pulling over somewhere quiet to watch the stars" },
          { icon: "navigation", label: "Roll the windows down and take the scenic route home", frag: "rolling the windows down for the scenic route home" }
        ]}
      ],
      story: (f) => `Looks like we'd spend our Saturday ${f[0]}, ${f[1]}, and ${f[2]}. The kind of day where the plan is not having a plan — just finding little moments worth remembering.`
    },
    build: {
      icon: "tool", title: "Build something together",
      blurb: "Make something with our hands, side by side.",
      intro: "Today we create something instead of just consuming something.",
      questions: [
        { q: "What are we making?", choices: [
          { icon: "chair", label: "A piece of furniture we'll proudly point out every time someone visits", frag: "building a piece of furniture we'd proudly point out to every visitor" },
          { icon: "bulb", label: "A business idea we've been talking about", frag: "chasing a business idea we'd been talking about" },
          { icon: "palette", label: "Something just for the fun of making it", frag: "making something just for the fun of it" },
          { icon: "heart", label: "Something that makes someone else's day a little better", frag: "making something that brightens someone else's day" }
        ]},
        { q: "Our teamwork style:", choices: [
          { icon: "ruler", label: "Carefully plan everything first", frag: "mapping out every detail first" },
          { icon: "compass", label: "Figure it out as we go", frag: "figuring it out as we go" },
          { icon: "smile", label: "Make mistakes and laugh about them", frag: "making a mess of mistakes and laughing through them" },
          { icon: "sparkles", label: "Turn it into a bigger project than expected", frag: "somehow turning it into a way bigger project than planned" }
        ]},
        { q: "The best part is:", choices: [
          { icon: "users", label: "Building it together", frag: "building it together" },
          { icon: "sparkles", label: "Getting excited when it starts working", frag: "getting excited when it started working" },
          { icon: "eye", label: "Looking back at how far we came", frag: "looking back at how far we'd come" },
          { icon: "cloud", label: "Dreaming about what we'll create next", frag: "dreaming about what we'd create next" }
        ]}
      ],
      story: (f) => `Looks like we'd spend the day ${f[0]}, ${f[1]}, and the best part would be ${f[2]}. Two people who'd rather make something together than just pass the time.`
    },
    relax: {
      icon: "coffee", title: "A relaxing day with small surprises",
      blurb: "Slow, easy, and sprinkled with little delights.",
      intro: "No big agenda. Just a day that feels easy.",
      questions: [
        { q: "The morning starts with:", choices: [
          { icon: "coffee", label: "Coffee and a slow morning", frag: "coffee and a slow morning" },
          { icon: "bag", label: "Farmers market wandering", frag: "wandering the farmers market" },
          { icon: "navigation", label: "A walk somewhere beautiful", frag: "a long walk somewhere beautiful" },
          { icon: "utensils", label: "Make breakfast together", frag: "making breakfast together" }
        ]},
        { q: "The surprise adventure:", choices: [
          { icon: "navigation", label: "We take a spontaneous detour just to see where it leads", frag: "a spontaneous detour just to see where it led" },
          { icon: "map", label: "One of us has a surprise destination in mind", frag: "a surprise destination one of us had in mind" },
          { icon: "leaf", label: "We stumble across some unexpected wildlife", frag: "some unexpected wildlife" },
          { icon: "utensils", label: "We discover a new favorite restaurant or food", frag: "a new favorite restaurant" }
        ]},
        { q: "The perfect ending:", choices: [
          { icon: "disc", label: "Put on a record and slow dance in the kitchen", frag: "putting on a record and slow dancing in the kitchen" },
          { icon: "star", label: "Sit outside talking until the stars come out", frag: "sitting outside talking until the stars came out" },
          { icon: "film", label: "Curl up with a movie and dessert", frag: "curling up with a movie and dessert" },
          { icon: "grid", label: "Play cards or a board game", frag: "playing cards at the table" }
        ]}
      ],
      story: (f) => `Looks like we'd ease into the day with ${f[0]}, stumble into ${f[1]}, and end it ${f[2]}. Nothing fancy — just the kind of easy day you don't want to end.`
    },
    party: {
      icon: "gift", title: "Host a party",
      blurb: "Bring our people together for a good night.",
      intro: "Today we bring people together.",
      questions: [
        { q: "Our party theme:", choices: [
          { icon: "utensils", label: "Backyard dinner party", frag: "a backyard dinner party" },
          { icon: "grid", label: "Cozy game night", frag: "a cozy game night" },
          { icon: "flame", label: "Bonfire with friends", frag: "a bonfire with friends" },
          { icon: "gift", label: "Holiday celebration", frag: "a holiday celebration" }
        ]},
        { q: "Our hosting roles:", choices: [
          { icon: "utensils", label: "It's a potluck — everyone brings a dish", frag: "turning it into a potluck where everyone brings a dish" },
          { icon: "sparkles", label: "You welcome everyone, I decorate", frag: "you on welcomes and me on decorations" },
          { icon: "smile", label: "We make everything from scratch", frag: "making everything from scratch" },
          { icon: "help", label: "We invite too many people and figure it out", frag: "inviting way too many people and figuring it out" }
        ]},
        { q: "The night ends with:", choices: [
          { icon: "home", label: "We collapse on the couch, happy and completely exhausted", frag: "collapsing on the couch, happy and completely exhausted" },
          { icon: "smile", label: "We laugh about the funniest moment of the night", frag: "laughing about the funniest moment of the night" },
          { icon: "clock", label: "Everyone stays way later than planned", frag: "with everyone staying way later than planned" },
          { icon: "calendar", label: "We start planning the next gathering before everyone leaves", frag: "already planning the next gathering before anyone left" }
        ]}
      ],
      story: (f) => `Looks like we'd throw ${f[0]}, ${f[1]}, and end the night ${f[2]}. Turns out our idea of a perfect day is a house full of the people we love.`
    }
  };

  const state = { pathKey: null, step: 0, answers: [] };
  const clear = () => { root.innerHTML = ""; };
  // Guard against the mobile "ghost tap": tapping re-renders the screen and the
  // same tap can fall through onto the freshly-placed button underneath, auto-
  // selecting the next option. Ignore taps for a beat after every screen change.
  let navLock = 0;
  const isLocked = () => Date.now() < navLock;
  const mount = (e) => { e.classList.add("adv-screen"); root.appendChild(e); navLock = Date.now() + 450; };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const iconEl = (tag, cls, name) => { const n = document.createElement(tag); if (cls) n.className = cls; n.innerHTML = svg(name); return n; };

  function renderLanding() {
    state.pathKey = null; state.step = 0; state.answers = [];
    clear();
    const wrap = el("div");
    const cards = el("div", "adv-cards");
    Object.keys(PATHS).forEach((key) => {
      const p = PATHS[key];
      const btn = el("button", "adv-card"); btn.type = "button";
      btn.appendChild(iconEl("span", "adv-card-icon", p.icon));
      const txt = el("div");
      txt.appendChild(el("h3", null, p.title));
      txt.appendChild(el("p", null, p.blurb));
      btn.appendChild(txt);
      btn.addEventListener("click", () => { if (isLocked()) return; state.pathKey = key; state.step = 0; state.answers = []; renderQuestion(); });
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
      if (isLocked()) return;
      if (state.step === 0) renderLanding();
      else { state.step--; state.answers.pop(); renderQuestion(); }
    });
    wrap.appendChild(back);
    wrap.appendChild(el("p", "adv-step-label", "Question " + (state.step + 1) + " of " + path.questions.length));
    wrap.appendChild(renderProgress());
    if (state.step === 0) wrap.appendChild(el("p", "adv-intro", "“" + path.intro + "”"));
    wrap.appendChild(el("p", "adv-q", q.q));
    const choices = el("div", "adv-choices");
    q.choices.forEach((c, ci) => {
      const btn = el("button", "adv-choice"); btn.type = "button";
      btn.appendChild(iconEl("span", "adv-choice-icon", c.icon));
      btn.appendChild(el("span", null, c.label));
      btn.addEventListener("click", () => {
        if (isLocked()) return;
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
    wrap.appendChild(iconEl("div", "adv-summary-badge", path.icon));
    const h = el("h3"); h.innerHTML = svg("sparkles") + " Our day would look something like…";
    wrap.appendChild(h);
    wrap.appendChild(el("p", "adv-story", path.story(frags)));
    const actions = el("div", "adv-actions");
    const again = el("button", "adv-btn", "↻ Start over"); again.type = "button";
    again.addEventListener("click", () => { if (isLocked()) return; renderLanding(); });
    actions.appendChild(again);
    wrap.appendChild(actions);
    mount(wrap);
  }

  renderLanding();
})();

// Cootie catcher (paper fortune teller) — every choice happens on the paper itself
(function cootie() {
  const app = document.getElementById("cootie-app");
  if (!app) return;
  const catcher = document.getElementById("cc-catcher");
  const stepEl = document.getElementById("cc-step");
  const srEl = document.getElementById("cc-sr");
  const revealEl = document.getElementById("cc-reveal");

  const POSITIONS = ["top", "right", "bottom", "left"];
  const flaps = {};
  POSITIONS.forEach((p) => (flaps[p] = catcher.querySelector(".cc-" + p)));

  // color name shown on each closed flap (letter count drives the count animation)
  const COLORS = { top: "Red", right: "Blue", bottom: "Green", left: "Yellow" };
  // the four numbers visible in each open orientation, mapped to flap position.
  // horizontal shows 1,2,5,6 · vertical shows 3,4,7,8 — they swap on every move.
  const NUM_SETS = {
    h: { top: 1, right: 2, bottom: 5, left: 6 },
    v: { top: 3, right: 4, bottom: 7, left: 8 }
  };
  const alt = (o) => (o === "h" ? "v" : "h");
  // single source of truth: number -> its fixed first-date fortune
  const FORTUNES = {
    1: { icon: "flower", text: "Go to the farmers market" },
    2: { icon: "bag", text: "Picnic by the lake" },
    3: { icon: "sun", text: "Sunset at Monona Terrace" },
    4: { icon: "icecream", text: "Get ice cream and walk around town" },
    5: { icon: "utensils", text: "Find a good brunch spot" },
    6: { icon: "flag", text: "Go mini golfing" },
    7: { icon: "target", text: "Go bowling" },
    8: { icon: "gamepad", text: "Go to an arcade bar" }
  };

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const OPEN_MS = reduce ? 0 : 300;
  const HOLD_MS = reduce ? 0 : 190;

  let busy = false;
  let phase = "color"; // "color" | "first" | "final"
  let orientation = "h"; // current open orientation

  const announce = (msg) => { srEl.textContent = msg; };
  const setStep = (txt) => { stepEl.textContent = txt; };
  const setDisabled = (state) => POSITIONS.forEach((p) => (flaps[p].disabled = state));
  const label = (p) => flaps[p].querySelector(".cc-flap-label");
  const sortedSet = (o) => POSITIONS.map((p) => NUM_SETS[o][p]).sort((a, b) => a - b).join(", ");

  function clearFlapState() {
    POSITIONS.forEach((p) => flaps[p].classList.remove("lift"));
    catcher.classList.remove("chomp-h", "chomp-v", "is-bounce");
  }

  // closed: four colors
  function showColors() {
    phase = "color";
    catcher.classList.remove("is-open", "is-dim");
    clearFlapState();
    POSITIONS.forEach((p) => {
      label(p).textContent = COLORS[p];
      flaps[p].setAttribute("aria-label", COLORS[p] + " section");
      flaps[p].disabled = false;
    });
    setStep("Tap a color to begin");
  }

  // put the visible number set for `orient` onto the four panels (does not move them)
  function setNumbers(orient) {
    orientation = orient;
    const set = NUM_SETS[orient];
    POSITIONS.forEach((p) => {
      label(p).textContent = String(set[p]);
      flaps[p].setAttribute("aria-label", "Number " + set[p]);
    });
  }

  // move the catcher into an open orientation (numbers ride along on the panels)
  function moveTo(orient) {
    catcher.classList.remove("chomp-h", "chomp-v");
    void catcher.offsetWidth; // reflow so re-adding always animates
    catcher.classList.add(orient === "h" ? "chomp-h" : "chomp-v");
  }

  // Count `count` beats. The catcher stays open with four numbers visible the
  // whole time; each beat moves to the alternate orientation and — the instant
  // it arrives — swaps to that orientation's number set. `firstOrient` is beat
  // one's orientation; when `preShown` is true beat one's numbers are already on
  // screen (used by the color reveal so numbers appear immediately, not late).
  async function runCount(count, firstOrient, preShown) {
    let orient = firstOrient;
    for (let i = 1; i <= count; i++) {
      moveTo(orient);
      await sleep(OPEN_MS);          // wait until it reaches the new orientation…
      if (i > 1 || !preShown) setNumbers(orient); // …then update the numbers on arrival
      announce("Numbers " + sortedSet(orient));
      await sleep(HOLD_MS);          // hold so the set is readable before the next move
      if (i < count) orient = alt(orient);
    }
    return orient; // final orientation the animation stopped on
  }

  // settle into a calm open pose with `orient`'s numbers left clickable
  function settleOpen(orient, nextPhase) {
    phase = nextPhase;
    setNumbers(orient);
    catcher.classList.remove("chomp-h", "chomp-v"); // rest in the gentle open pose
    if (!reduce) { catcher.classList.add("is-bounce"); setTimeout(() => catcher.classList.remove("is-bounce"), 340); }
    setDisabled(false);
    setStep(nextPhase === "first" ? "Tap a number" : "Now tap your final number");
    announce("Numbers " + sortedSet(orient) + " are showing. Choose one.");
  }

  async function chooseColor(p) {
    busy = true;
    setDisabled(true);
    const name = COLORS[p];
    setStep("Spelling out " + name + "…");
    // immediately flip the colored outer sections to the numbered inner sections
    catcher.classList.add("is-open");
    setNumbers("h");
    // first set is horizontal (1,2,5,6); it alternates on every letter after
    const finalOrient = await runCount(name.length, "h", true);
    settleOpen(finalOrient, "first");
    busy = false;
  }

  async function chooseFirstNumber(p) {
    busy = true;
    setDisabled(true);
    const n = NUM_SETS[orientation][p];
    setStep("Counting to " + n + "…");
    // first beat moves to the alternate orientation so the motion is visible;
    // numbers stay up throughout and swap on every move
    const finalOrient = await runCount(n, alt(orientation), false);
    settleOpen(finalOrient, "final");
    busy = false;
  }

  async function reveal(p) {
    busy = true;
    setDisabled(true);
    const n = NUM_SETS[orientation][p];
    const f = FORTUNES[n];
    setStep("Opening flap " + n + "…");
    if (!reduce) {
      flaps[p].classList.add("lift");
      await sleep(420);
    }
    announce("Your first date: " + f.text + ". Looks like this is our first date.");
    catcher.classList.add("is-dim");
    revealEl.innerHTML = "";
    const card = document.createElement("div");
    card.className = "cc-card";
    card.innerHTML =
      '<div class="cc-card-emoji">' + svg(f.icon) + "</div>" +
      '<h3 class="cc-card-title">' + f.text + "</h3>" +
      '<p class="cc-card-sub">Looks like this is our first date.</p>';
    const again = document.createElement("button");
    again.type = "button";
    again.className = "cc-again";
    again.textContent = "↻ Play again";
    again.addEventListener("click", resetGame);
    card.appendChild(again);
    revealEl.appendChild(card);
    revealEl.hidden = false;
    setStep("Our first date");
    again.focus();
    busy = false;
  }

  function resetGame() {
    revealEl.hidden = true;
    revealEl.innerHTML = "";
    orientation = "h";
    showColors();
    flaps.top.focus();
  }

  POSITIONS.forEach((p) => {
    flaps[p].addEventListener("click", () => {
      if (busy) return;
      if (phase === "color") chooseColor(p);
      else if (phase === "first") chooseFirstNumber(p);
      else if (phase === "final") reveal(p);
    });
  });

  showColors();
})();

// MASH game (paper fortune / future teller)
(function mash() {
  const app = document.getElementById("mash-app");
  if (!app) return;
  const board = app.querySelector(".mash-board");
  const controls = document.getElementById("mash-controls");
  const futureEl = document.getElementById("mash-future");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const CATS = [
    { icon: "home", label: "Our first home", name: "M · A · S · H", options: ["Mansion", "Apartment", "Shack", "House"] },
    { icon: "pin", label: "Our forever home", name: "Forever home", options: ["A cottage in the woods", "A little homestead", "A cabin on the lake", "Somewhere brand new"] },
    { icon: "car", label: "We'll drive", name: "Vehicle", options: ["Toyota RAV4", "Vanlife", "Toyota 4Runner", "Toyota Tacoma"] },
    { icon: "paw", label: "We'll have", name: "Pet", options: ["French Brittany", "English Setter", "Corgi", "None"] },
    { icon: "navigation", label: "Honeymoon", name: "Honeymoon", options: ["Japan", "Finland", "New Zealand", "Greece"] },
    { icon: "leaf", label: "Together we'll build", name: "We'll build", options: ["A business", "A garden", "A home renovation", "A vacation home"] },
    { icon: "heart", label: "Married to", name: "Spouse", options: ["Kelsey"] },
    { icon: "user", label: "Kids", name: "Kids", options: ["No kids"] }
  ];

  function compute(N) {
    const items = [];
    CATS.forEach((c, ci) => c.options.forEach((o, oi) => items.push({ ci, oi, alive: true })));
    const aliveInCat = (ci) => items.filter((it) => it.ci === ci && it.alive).length;
    const eligible = (it) => it.alive && aliveInCat(it.ci) > 1;
    const nextEligible = (from) => {
      for (let s = 1; s <= items.length; s++) { const j = (from + s) % items.length; if (eligible(items[j])) return j; }
      return -1;
    };
    const order = [];
    let pos = -1, guard = 0;
    const anyLeft = () => CATS.some((c, ci) => aliveInCat(ci) > 1);
    while (anyLeft() && guard++ < 3000) {
      let idx = pos;
      for (let k = 0; k < N; k++) { const nx = nextEligible(idx); if (nx < 0) { idx = -1; break; } idx = nx; }
      if (idx < 0) break;
      items[idx].alive = false;
      order.push({ ci: items[idx].ci, oi: items[idx].oi });
      pos = idx;
    }
    const winners = CATS.map((c, ci) => items.find((it) => it.ci === ci && it.alive).oi);
    return { order, winners };
  }

  function renderBoard() {
    board.innerHTML = "";
    const doodles = [["star", "top:10px;right:18px;transform:rotate(12deg)"], ["flower", "bottom:14px;left:64px;transform:rotate(-10deg)"], ["heart", "top:44%;right:22px;transform:rotate(8deg)"], ["smile", "bottom:22px;right:34px;transform:rotate(-6deg)"]];
    doodles.forEach(([d, css]) => { const s = document.createElement("span"); s.className = "mash-doodle"; s.innerHTML = svg(d); s.style.cssText = css; board.appendChild(s); });

    const title = document.createElement("div");
    title.className = "mash-title";
    CATS[0].options.forEach((o, oi) => {
      const span = document.createElement("span");
      span.className = "mash-letter mash-item";
      span.dataset.ci = 0; span.dataset.oi = oi;
      span.innerHTML = "<b>" + o[0] + "</b>" + o.slice(1);
      title.appendChild(span);
    });
    board.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "mash-cats";
    CATS.forEach((c, ci) => {
      if (ci === 0) return;
      const cell = document.createElement("div");
      cell.className = "mash-cat";
      const h = document.createElement("h4");
      h.innerHTML = svg(c.icon) + " " + c.name;
      cell.appendChild(h);
      const ul = document.createElement("ul");
      ul.className = "mash-opts";
      c.options.forEach((o, oi) => {
        const li = document.createElement("li");
        li.className = "mash-opt mash-item";
        li.dataset.ci = ci; li.dataset.oi = oi;
        li.textContent = o;
        ul.appendChild(li);
      });
      cell.appendChild(ul);
      grid.appendChild(cell);
    });
    board.appendChild(grid);
  }

  let busy = false;

  function renderControls() {
    controls.innerHTML = "";
    const gen = document.createElement("div");
    gen.className = "mash-num-gen";
    const hint = document.createElement("p");
    hint.className = "mash-hint";
    hint.textContent = "Hold the pencil to scribble your magic number…";
    const tally = document.createElement("div");
    tally.className = "mash-tally";
    const hold = document.createElement("button");
    hold.type = "button";
    hold.className = "mash-hold";
    hold.innerHTML = svg("pencil") + " Hold to draw tallies";
    gen.appendChild(hint); gen.appendChild(tally); gen.appendChild(hold);
    controls.appendChild(gen);

    let marks = 0, holdTimer = null, finalized = false;
    const MAX = 12;

    const startHold = (e) => {
      if (busy || finalized) return;
      if (e && e.preventDefault) e.preventDefault();
      if (holdTimer) return;
      hold.classList.add("holding");
      if (reduce) { marks = 3 + Math.floor(Math.random() * 7); drawTally(tally, marks); return; }
      holdTimer = setInterval(() => { if (marks >= MAX) return; marks++; drawTally(tally, marks); }, 110);
    };
    const endHold = () => {
      if (holdTimer) { clearInterval(holdTimer); holdTimer = null; }
      hold.classList.remove("holding");
      if (finalized) return;
      if (marks > 0) { finalized = true; finishNumber(Math.max(3, marks), gen, hold); }
    };
    hold.addEventListener("pointerdown", startHold);
    hold.addEventListener("pointerup", endHold);
    hold.addEventListener("pointerleave", () => { if (holdTimer) endHold(); });
    hold.addEventListener("pointercancel", endHold);
    hold.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") startHold(e); });
    hold.addEventListener("keyup", (e) => { if (e.key === " " || e.key === "Enter") endHold(); });
  }

  function drawTally(container, n) {
    container.innerHTML = "";
    let i = 0;
    while (i < n) {
      const groupN = Math.min(5, n - i);
      const g = document.createElement("div");
      g.className = "mash-group";
      for (let k = 0; k < Math.min(4, groupN); k++) { const m = document.createElement("span"); m.className = "mash-mark"; g.appendChild(m); }
      if (groupN === 5) { const sl = document.createElement("span"); sl.className = "mash-slash"; g.appendChild(sl); }
      container.appendChild(g);
      i += groupN;
    }
  }

  async function finishNumber(N, gen, hold) {
    busy = true;
    if (hold) hold.disabled = true;
    const out = document.createElement("p");
    out.className = "mash-num-out";
    out.textContent = "Your number: " + N;
    gen.appendChild(out);
    await sleep(reduce ? 200 : 950);
    const { order, winners } = compute(N);
    await eliminate(order, winners);
  }

  async function eliminate(order, winners) {
    const step = reduce ? 0 : 300;
    for (const { ci, oi } of order) {
      const it = board.querySelector('.mash-item[data-ci="' + ci + '"][data-oi="' + oi + '"]');
      if (it) it.classList.add("crossed");
      await sleep(step);
    }
    await sleep(reduce ? 0 : 250);
    winners.forEach((oi, ci) => {
      const it = board.querySelector('.mash-item[data-ci="' + ci + '"][data-oi="' + oi + '"]');
      if (it) it.classList.add("mash-winner");
    });
    await sleep(reduce ? 0 : 700);
    reveal(winners);
  }

  function reveal(winners) {
    board.hidden = true;
    controls.hidden = true;
    futureEl.hidden = false;
    futureEl.innerHTML = "";
    const card = document.createElement("div");
    card.className = "mash-future-card";
    const h = document.createElement("h3");
    h.innerHTML = svg("sparkles") + " Our future together";
    card.appendChild(h);
    const ul = document.createElement("ul");
    ul.className = "mash-future-list";
    CATS.forEach((c, ci) => {
      const li = document.createElement("li");
      li.style.animationDelay = (ci * 0.09) + "s";
      const fi = document.createElement("span"); fi.className = "fi"; fi.innerHTML = svg(c.icon);
      const ft = document.createElement("span"); ft.className = "ft";
      const fk = document.createElement("span"); fk.className = "fk"; fk.textContent = c.label + ": ";
      const b = document.createElement("b"); b.textContent = c.options[winners[ci]];
      ft.appendChild(fk); ft.appendChild(b);
      li.appendChild(fi); li.appendChild(ft);
      ul.appendChild(li);
    });
    card.appendChild(ul);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mash-play";
    btn.textContent = "↻ Play again";
    btn.addEventListener("click", resetGame);
    card.appendChild(btn);
    futureEl.appendChild(card);
    if (!reduce) confetti();
    btn.focus();
  }

  function resetGame() {
    busy = false;
    futureEl.hidden = true;
    futureEl.innerHTML = "";
    board.hidden = false;
    controls.hidden = false;
    renderBoard();
    renderControls();
  }

  function confetti() {
    const colors = ["#9caf88", "#e0a83e", "#e4572e", "#3a86c8", "#f2c14e", "#3fa34d"];
    for (let i = 0; i < 80; i++) {
      const p = document.createElement("span");
      p.className = "mash-confetti-piece";
      p.style.left = Math.random() * 100 + "%";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (2 + Math.random() * 1.8) + "s";
      p.style.animationDelay = (Math.random() * 0.5) + "s";
      p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      app.appendChild(p);
      setTimeout(() => p.remove(), 4400);
    }
  }

  renderBoard();
  renderControls();
})();

// Message Kelsey — modal form, submission storage, and private review
(function messageForm() {
  const form = document.getElementById("msg-form");
  if (!form) return;
  const openBtn = document.getElementById("open-message");
  const modal = document.getElementById("msg-modal");
  const thanks = document.getElementById("thanks-modal");
  const review = document.getElementById("review");

  document.querySelectorAll("[data-icon]").forEach((e) => { e.innerHTML = svg(e.dataset.icon); });

  const KEY = "kelsey_submissions_v1";
  // Paste your form endpoint (Getform / Formspree / Basin) to receive submissions by
  // email; leave "" to store submissions in this browser only.
  const FORM_ENDPOINT = "https://formspree.io/f/xrenglpa";
  function dataURLtoBlob(u) { var a = u.split(","), mime = a[0].match(/:(.*?);/)[1], bin = atob(a[1]), arr = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i); return new Blob([arr], { type: mime }); }
  const LS_OK = (function () { try { localStorage.setItem("__t", "1"); localStorage.removeItem("__t"); return true; } catch (e) { return false; } })();
  let mem = [];
  const load = () => { if (LS_OK) { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } } return mem; };
  const store = (a) => { if (LS_OK) { try { localStorage.setItem(KEY, JSON.stringify(a)); return; } catch (e) {} } mem = a; };
  const esc = (t) => { const d = document.createElement("div"); d.textContent = t || ""; return d.innerHTML; };
  const fmt = (ts) => { try { return new Date(ts).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }); } catch (e) { return ts; } };

  // photo -> downscaled data URL
  let photoData = null;
  const photoInput = document.getElementById("msg-photo");
  const preview = document.getElementById("msg-photo-preview");
  photoInput.addEventListener("change", () => {
    const file = photoInput.files && photoInput.files[0];
    const nameEl = document.getElementById("msg-file-name");
    const upBtn = document.getElementById("msg-upload-btn");
    if (upBtn) upBtn.classList.remove("invalid");
    if (!file) { photoData = null; preview.hidden = true; if (nameEl) nameEl.textContent = ""; return; }
    if (nameEl) nameEl.textContent = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 640; let w = img.width, h = img.height;
        if (w > max) { h = Math.round(h * max / w); w = max; }
        const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);
        photoData = cv.toDataURL("image/jpeg", 0.82);
        preview.querySelector("img").src = photoData;
        preview.hidden = false;
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  function openModal() { modal.hidden = false; document.body.style.overflow = "hidden"; setTimeout(() => { const n = form.querySelector('[name="name"]'); if (n) n.focus(); }, 40); }
  function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
  if (openBtn) openBtn.addEventListener("click", openModal);
  modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  const errEl = document.getElementById("msg-error");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const g = (n) => (form.querySelector('[name="' + n + '"]').value || "").trim();
    const name = g("name"), about = g("about"), firstDate = g("firstDate"), contact = g("contact");
    form.querySelectorAll(".invalid").forEach((x) => x.classList.remove("invalid"));
    const missing = [];
    if (!name) { missing.push("your name"); form.querySelector('[name="name"]').classList.add("invalid"); }
    if (!photoData) { missing.push("a photo"); const ub = document.getElementById("msg-upload-btn"); if (ub) ub.classList.add("invalid"); }
    if (!firstDate) { missing.push("a first-date idea"); form.querySelector('[name="firstDate"]').classList.add("invalid"); }
    if (!contact) { missing.push("how to reach you"); form.querySelector('[name="contact"]').classList.add("invalid"); }
    if (missing.length) { errEl.textContent = "Please add " + missing.join(", ") + "."; errEl.hidden = false; return; }
    errEl.hidden = true;
    const ts = new Date().toISOString();
    const subs = load();
    subs.push({ name: name, photo: photoData, about: about, firstDate: firstDate, contact: contact, ts: ts });
    store(subs);

    if (FORM_ENDPOINT) {
      const sendBtn = form.querySelector('button[type="submit"]');
      if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = "Sending…"; }
      const body = (withPhoto) => {
        const fd = new FormData();
        fd.append("name", name); fd.append("about", about);
        fd.append("firstDate", firstDate); fd.append("contact", contact);
        fd.append("submittedAt", ts);
        if (withPhoto && photoData) fd.append("photo", dataURLtoBlob(photoData), "photo.jpg");
        return fd;
      };
      let ok = false, why = "";
      try {
        let res = await fetch(FORM_ENDPOINT, { method: "POST", body: body(true), headers: { Accept: "application/json" } });
        // some form hosts reject file uploads outright — retry once, text only
        if (!res.ok && photoData) res = await fetch(FORM_ENDPOINT, { method: "POST", body: body(false), headers: { Accept: "application/json" } });
        ok = res.ok;
        if (!ok) { why = "the form service replied " + res.status; console.error("Form endpoint returned", res.status, await res.text().catch(() => "")); }
      } catch (err) {
        why = "I couldn't reach the form service";
        console.error("Message send failed:", err);
      }
      if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = "Send"; }
      if (!ok) {
        errEl.textContent = "That didn't send — " + why + ". Your note is saved; please try again in a moment.";
        errEl.hidden = false;
        return;
      }
    }

    form.reset(); photoData = null; preview.hidden = true;
    closeModal();
    thanks.hidden = false; document.body.style.overflow = "hidden";
    const tb = thanks.querySelector(".modal-thanks .btn"); if (tb) tb.focus();
  });

  thanks.querySelectorAll("[data-close-thanks]").forEach((b) => b.addEventListener("click", () => {
    thanks.hidden = true; document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));

  // private review (unlisted): add #for-kelsey to the URL
  function renderReview() {
    const list = document.getElementById("review-list");
    const subs = load().slice().reverse();
    list.innerHTML = "";
    if (!subs.length) { list.innerHTML = '<p class="review-empty">No submissions yet.</p>'; return; }
    subs.forEach((s) => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.innerHTML =
        (s.photo ? '<img class="review-photo" src="' + s.photo + '" alt="' + esc(s.name) + '" />' : "") +
        '<div class="review-body">' +
          "<h3>" + esc(s.name) + "</h3>" +
          '<p class="review-meta">' + fmt(s.ts) + "</p>" +
          (s.about ? "<p><strong>About:</strong> " + esc(s.about) + "</p>" : "") +
          "<p><strong>First date:</strong> " + esc(s.firstDate) + "</p>" +
          "<p><strong>Contact:</strong> " + esc(s.contact) + "</p>" +
        "</div>";
      list.appendChild(card);
    });
  }
  function checkHash() {
    const on = location.hash === "#for-kelsey";
    review.hidden = !on;
    document.body.style.overflow = on ? "hidden" : "";
    if (on) renderReview();
  }
  window.addEventListener("hashchange", checkHash);
  checkHash();
})();
