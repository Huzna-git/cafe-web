document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        if (nav.hasAttribute('hidden')) nav.removeAttribute('hidden');
        else nav.setAttribute('hidden', '');
      });
    }
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
          // Close mobile nav on small screens
          if (nav && !nav.hasAttribute('hidden') && window.innerWidth < 800) {
            nav.setAttribute('hidden','');
            navToggle.setAttribute('aria-expanded','false');
          }
        }
      });
    });
  
    // Set copyright year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  });
  