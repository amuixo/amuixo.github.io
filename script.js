// Angela's Portfolio JavaScript - Simple & Clean

// Text slider animation
document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const texts = document.querySelectorAll(".slider-text");
  let index = 0;

  function slideUp() {
    index = (index + 1) % texts.length;
    sliderWrapper.style.transform = `translateY(-${index * 50}px)`;
  }

  if (texts.length > 0) {
    setInterval(slideUp, 3000);
  }
});

// Scroll animations - keep it simple like original but remove localStorage
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
});

document.querySelectorAll('.scrolll').forEach(el => {
  observer.observe(el);
});

// Image gallery animation
window.addEventListener('load', () => {
  const track = document.getElementById('track');
  if (!track) return;

  const loopWidth = track.scrollWidth;
  track.appendChild(track.cloneNode(true));

  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee-right {
      0%   { transform: translateX(-${loopWidth}px); }
      100% { transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);

  const duration = loopWidth / 60;
  track.style.animation = `marquee-right ${duration}s linear infinite`;
});

// Mobile menu removed as requested

// FIXED: Navbar scroll behavior - simple
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down - hide navbar
    nav.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up - show navbar  
    nav.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Decorative lines scroll effect - keep original
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const leftLines = document.getElementById('leftLines');
  const rightLines = document.getElementById('rightLines');
  
  if (leftLines && rightLines) {
    const opacity = Math.max(0.1, 0.3 - scrollY * 0.001);
    const translateY = scrollY * 0.5;
    
    leftLines.style.opacity = opacity;
    rightLines.style.opacity = opacity;
    leftLines.style.transform = `translateY(${translateY}px)`;
    rightLines.style.transform = `translateY(-${translateY}px)`;
  }
});