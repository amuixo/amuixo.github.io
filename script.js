// Angela's Portfolio - Esraa's Animation System with Sakura Theme

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

let lastScrollY = window.scrollY;

// Restore visible elements from localStorage on page load
document.querySelectorAll('.scrolll').forEach((el, index) => {
  const wasVisible = localStorage.getItem(`scrolll-visible-${index}`);
  if (wasVisible === 'true') {
    el.classList.add('show');
    el.classList.remove('hide');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    const el = entry.target;

    if (entry.isIntersecting) {
      if (window.scrollY > lastScrollY) {
        el.classList.add('show');
        el.classList.remove('hide');

        const idx = Array.from(document.querySelectorAll('.scrolll')).indexOf(el);
        localStorage.setItem(`scrolll-visible-${idx}`, 'true');
      }
    } else {
      if (window.scrollY < lastScrollY) {
        el.classList.remove('show');
        el.classList.add('hide');

        const idx = Array.from(document.querySelectorAll('.scrolll')).indexOf(el);
        localStorage.removeItem(`scrolll-visible-${idx}`);
      }
    }
  });

  lastScrollY = window.scrollY;
}, {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
});

document.querySelectorAll('.scrolll').forEach(el => {
  observer.observe(el);
});

window.addEventListener('load', () => {
  const SPEED = 60;
  const track = document.getElementById('track');

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

  const duration = loopWidth / SPEED;
  track.style.animation = `marquee-right ${duration}s linear infinite`;
});

const hamburger = document.getElementById('hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  const isOpen = links.classList.contains('show');

  if (isOpen) {
    links.classList.remove('show');
    links.classList.add('fadeout');
    hamburger.classList.remove('open');

    setTimeout(() => {
      links.style.display = 'none';
      links.classList.remove('fadeout');
    }, 500);
  } else {
    links.style.display = 'flex';
    links.classList.add('show');
    hamburger.classList.add('open');
  }
});

// Scroll effects for decorative lines
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
