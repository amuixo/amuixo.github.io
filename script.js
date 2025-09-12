const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // stop observing/only do the animation once when its done
    }
  });
}, {
  threshold: 0.3 // this triggers when you see the amount of the element like 30% asof right now.
});

// target elements to observe
const targets = document.querySelectorAll(".fade-on-scroll");
targets.forEach(target => {
  observer.observe(target);
});
