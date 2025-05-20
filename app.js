const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu"); // <- id corrected

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
// navbar end

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // Scroll out hone par remove
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});








