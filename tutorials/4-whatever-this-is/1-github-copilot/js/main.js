const form = document.getElementById("guestbook-form");
const entryList = document.getElementById("entry-list");
const avalanche = document.getElementById("egg-avalanche");
const submitButton = form.querySelector('button[type="submit"]');
const STORAGE_KEY = "eggRetroGuestbookEntries";

// Load saved guestbook entries from localStorage
function loadEntries() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

// Save guestbook entries back to localStorage
function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// Create a new list item for a guestbook entry
function createEntryItem(entry) {
  const item = document.createElement("li");
  item.className = "entry";
  item.innerHTML = `
    <strong>${entry.name}</strong>
    <p>${entry.message}</p>
  `;
  return item;
}

// Render all guestbook entries into the page
function renderEntries() {
  entryList.innerHTML = "";
  const entries = loadEntries();
  entries.forEach(entry => {
    entryList.appendChild(createEntryItem(entry));
  });
}

// Spawn a falling egg emoji element for the avalanche effect
function spawnEgg() {
  const egg = document.createElement("div");
  egg.className = "falling-egg";
  egg.textContent = "🥚";
  egg.style.left = `${Math.random() * 100}vw`;
  egg.style.fontSize = `${16 + Math.random() * 24}px`;
  egg.style.animationDuration = `${4 + Math.random() * 4}s`;
  avalanche.appendChild(egg);

  egg.addEventListener("animationend", () => {
    egg.remove();
  });
}

// Move the submit button to a new random position on hover
function moveButtonRandomly() {
  const offsetX = (Math.random() - 0.5) * 400;
  const offsetY = (Math.random() - 0.5) * 300;
  submitButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

submitButton.addEventListener("mouseenter", moveButtonRandomly);

// Handle guestbook form submissions and save new entries
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = form.name.value.trim();
  const message = form.message.value.trim();
  if (!name || !message) return;

  const entries = loadEntries();
  entries.unshift({ name, message, createdAt: Date.now() });
  saveEntries(entries.slice(0, 30));
  renderEntries();
  form.reset();
});

// Initialize the page and start the falling egg animation
renderEntries();
setInterval(spawnEgg, 700);