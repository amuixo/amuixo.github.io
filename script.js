// Define the callback for Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is in view
});

// Target elements to observe
const targets = document.querySelectorAll(".fade-on-scroll");
targets.forEach(target => {
  observer.observe(target);
});
