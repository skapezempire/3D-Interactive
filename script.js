// Typing effect
const animatedText = document.getElementById('animated-text');
const typingText = "3D Interactive";
let typingIndex = 0;

// Timer
const timer = document.getElementById('timer');
let countdown = 3; // Timer duration in seconds

// Typing animation function
function typeText() {
  if (typingIndex < typingText.length) {
    animatedText.innerHTML += typingText.charAt(typingIndex) + "<span class='cursor'></span>";
    typingIndex++;
    setTimeout(typeText, 150); // Adjust typing speed here (in ms)
  } else {
    // Remove blinking cursor after typing finishes
    animatedText.innerHTML = typingText; // Remove cursor after typing finishes
  }
}

// Timer countdown and redirect function
const interval = setInterval(() => {
  countdown--;
  timer.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(interval);
    window.location.href = "topics.html"; // Redirect to your target page
  }
}, 1000);

// Start the typing effect
typeText();



// scripts.js
document.querySelector('.view-space-button').addEventListener('click', () => {
  alert('Launching AR experience...');
  // Implement AR expansion logic here
});

document.querySelectorAll('.ar-card').forEach(card => {
  card.addEventListener('click', () => {
    const pageName = card.querySelector('h3').textContent.toLowerCase();
    window.location.href = `${pageName}.html`;
  });
});


