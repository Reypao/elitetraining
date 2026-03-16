const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const sidebar = document.querySelector(".site-header");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (formMessage) {
      formMessage.textContent = "Thank you! Your message has been sent successfully.";
    }

    contactForm.reset();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
  }, 5000);
}