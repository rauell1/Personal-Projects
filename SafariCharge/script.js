// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Scroll Animation
const elements = document.querySelectorAll(".fade-in, .fade-up, .fade-left, .fade-right");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
