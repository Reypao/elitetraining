const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
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


const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})
document.querySelectorAll("section").forEach(el => {
el.classList.add("hidden")
observer.observe(el)

})


const menuToggle = document.getElementById("menuToggle")
const sidebar = document.querySelector(".site-header")

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})