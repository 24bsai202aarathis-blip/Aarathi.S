// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demo
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your details have been submitted! (Demo only)");
  form.reset();
});