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

// Mobile hamburger menu - fixed and simple
const hamburger = document.getElementById('hamburger');
const links = document.querySelector('.links');

if (hamburger && links) {
  hamburger.addEventListener('click', () => {
    const isOpen = links.classList.contains('show');

    if (isOpen) {
      // Close menu
      links.classList.remove('show');
      links.classList.add('fadeout');
      hamburger.classList.remove('open');
      
      setTimeout(() => {
        links.style.display = 'none';
        links.classList.remove('fadeout');
      }, 500);
    } else {
      // Open menu
      links.style.display = 'flex';
      links.classList.add('show');
      hamburger.classList.add('open');
    }
  });
}

// Navbar hide/show on scroll - fixed
let lastScroll = 0;
const nav = document.querySelector('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 80) {
      // Scrolling down - hide navbar
      nav.style.transform = 'translateY(-100%)';
      nav.style.transition = 'transform 0.3s ease';
    } else {
      // Scrolling up - show navbar  
      nav.style.transform = 'translateY(0)';
      nav.style.transition = 'transform 0.3s ease';
    }
    
    lastScroll = currentScroll;
  });
}

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