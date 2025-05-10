const box = document.getElementById("box");
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// Store user preference in localStorage
function setTheme(theme) {
  document.body.className = theme + "-mode";
  localStorage.setItem("preferredTheme", theme);
}

// Retrieve and apply theme on load
function applyStoredTheme() {
  const savedTheme = localStorage.getItem("preferredTheme") || "light";
  setTheme(savedTheme);
}

// Animate box on click
box.addEventListener("click", () => {
  // Randomly switch colors during animation
  const colors = ["red", "blue", "yellow", "purple", "green", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor; // Set random color during animation
  box.classList.add("animate");

  setTimeout(() => {
    box.classList.remove("animate");
    box.style.backgroundColor = ""; // Reset to original color
  }, 600);
});

// Theme buttons
lightBtn.addEventListener("click", () => setTheme("light"));
darkBtn.addEventListener("click", () => setTheme("dark"));

// On page load
applyStoredTheme();
