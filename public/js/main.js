document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

  // Active Navigation Link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Normaliza os caminhos para comparação
    const href = link.getAttribute('href');
    
    // Remove barras finais para comparação robusta
    const cleanHref = href === '/' ? '/' : href.replace(/\/$/, '');
    const cleanPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

    if (cleanPath === cleanHref) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Reveal Animations on Scroll (Simple scroll observer)
  const sections = document.querySelectorAll('section');
  
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  sections.forEach(section => {
    // Adiciona classe de animação inicial
    section.classList.add('section-fade-in');
    sectionObserver.observe(section);
  });
});
