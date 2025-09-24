document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        primaryNav.classList.toggle('open');
    });

    // Close nav when a link is clicked
    const navLinks = primaryNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav.classList.contains('open')) {
                primaryNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Dynamically set the current year in the footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
});