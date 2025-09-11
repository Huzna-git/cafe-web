document.addEventListener('DOMContentLoaded', function () {
  // Set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.hidden = expanded;
    });
  }

  // Smooth scroll for links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(nav && !nav.hasAttribute('hidden') && window.innerWidth < 800){
          nav.setAttribute('hidden','');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});
