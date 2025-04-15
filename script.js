// Initialize the typing animation
const typingAnimationElement = document.getElementById("typing-animation");

// Create an array of typing text
const typingTexts = ["Front-End Developer", "Student  ", "Web intern  "];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 200); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const links = document.querySelector('.links');

mobileMenuBtn.addEventListener('click', () => {
  links.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.links') && !e.target.closest('.mobile-menu-btn')) {
    links.classList.remove('active');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
  });
});

// Typing animation
const text = "A passionate Web Developer";
const typingElement = document.getElementById('typing-animation');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);
