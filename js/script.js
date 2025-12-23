// Select all h2 elements
const headings = document.querySelectorAll("h2");
// Create Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-left"); // trigger animation
        observer.unobserve(entry.target); // optional: stop observing after animation
      }
    });
  },
  {
    threshold: 0.1, // trigger when 10% visible
  }
);

// Observe each h2
headings.forEach((h2) => observer.observe(h2));

// ======== Gallary =========
const images = document.querySelectorAll(".gallary .images-box img");
const overlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const popupImg = popupBox.querySelector("img");
const closeBtn = popupBox.querySelector(".close-button");

// Function to open popup
images.forEach((img) => {
  img.addEventListener("click", () => {
    popupImg.src = img.src; // Set clicked image
    overlay.style.display = "block";
    popupBox.style.display = "block";
  });
});

// Function to close popup
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  popupBox.style.display = "none";
});

// Close popup when clicking overlay
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  popupBox.style.display = "none";
});

// ======== Nav Bullets =========
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".links a");

function scrollToSpecificSec(elements) {
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSpecificSec(allBullets);
scrollToSpecificSec(allLinks);

// ======== Toggle Menu =========
let hamburgerBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

hamburgerBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("active-menu");
  links.classList.toggle("open");
};

links.onclick = function (e) {
  e.stopPropagation();
};

document.addEventListener("click", (e) => {
  if (e.target !== hamburgerBtn && e.target !== links) {
    if (links.classList.contains("open")) {
      hamburgerBtn.classList.toggle("active-menu");
      links.classList.toggle("open");
    }
  }
});

// ======== Handle Activity =========
function handleActivity(element) {
  element.target.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  element.target.classList.add("active");
}
