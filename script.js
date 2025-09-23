 
 tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            mincho: ['"BIZ UDPMincho"', 'serif']
          }
        }
      }
    }

    // Initialization for ES Users



    
    // Toggle mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    // Fade-on-scroll from your original script
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-on-scroll").forEach(target => observer.observe(target));

    