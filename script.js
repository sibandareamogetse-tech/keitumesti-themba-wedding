// Small entrance effect: reveal sections as the guest scrolls.
const sections = document.querySelectorAll(".section, .day-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(18px)";
  section.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(section);
});
