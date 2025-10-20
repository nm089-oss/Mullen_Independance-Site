// main.js - site-wide helpers (dark mode removed)

// SIMULATED FORM SUBMISSIONS
function saveSubmission(key, obj) {
  const arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.push(obj);
  localStorage.setItem(key, JSON.stringify(arr));
  alert('Submission saved!');
}

// HERO ANIMATION ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-section h1");
  const heroText = document.querySelector(".hero-section p");
  const heroBtn = document.querySelector(".hero-section .btn");

  if (heroTitle) heroTitle.classList.add("fade-in");
  if (heroText) setTimeout(() => heroText.classList.add("fade-in"), 200);
  if (heroBtn) setTimeout(() => heroBtn.classList.add("fade-in"), 400);

  // SCROLL FADE-IN OBSERVER FOR CARDS AND SECTIONS
  const scrollElements = document.querySelectorAll(".card, section, img, .scroll-fade");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  scrollElements.forEach(el => observer.observe(el));

  // NAVBAR SCROLL EFFECT
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  }

  // SMOOTH SCROLL FOR INTERNAL LINKS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
