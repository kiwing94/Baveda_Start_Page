const greetingsList = [
  { text: "Greetings", lang: "English" },
  { text: "Salvē!", lang: "Latin" },
  { text: "Χαῖρε!", lang: "Koine Greek" },
  { text: "नमस्ते", lang: "Sanskrit" },
  { text: "𒀀𒋾", lang: "Sumerian (a-ti)" },
  { text: "Ϝαῖρε", lang: "Proto-Greek" },
  { text: "Eśom!", lang: "Old Italic (reconstructed)" },
  { text: "𐤀𐤋 𐤋𐤌", lang: "Aramaic (ʾl lm ‘Peace’)" },
  { text: "𓋴𓂋𓏤", lang: "Egyptian Hieroglyphs (sr ‘Greetings’)" }
];

function rotateGreeting() {
  const index = Math.floor(Math.random() * greetingsList.length);
  const greeting = greetingsList[index];
  document.getElementById('greetings').textContent = greeting.text;
  document.getElementById('lang-label').textContent = greeting.lang;
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}

// Initialize once
rotateGreeting();
updateClock();
setInterval(updateClock, 1000);
setInterval(rotateGreeting, 10000);
