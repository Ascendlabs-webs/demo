document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('is-active');
    }
  });

  // Reveal on scroll
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

  // Contact form - WhatsApp redirect
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || '';
      const email = document.getElementById('formEmail')?.value || '';
      const service = document.getElementById('formService')?.value || '';
      const message = document.getElementById('formMessage')?.value || '';
      const text = `Name: ${name}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
      window.open(`https://wa.me/916385314684?text=${text}`, '_blank');
    });
  }
});