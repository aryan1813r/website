/**
 * Mohsinaa Ahmed - Website Scripts
 * Mobile menu toggle, smooth scroll, premium motion
 */

document.addEventListener('DOMContentLoaded', function () {
  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Premium motion - fade-up on scroll
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll('.section-reveal, .animate-on-scroll');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  const menuToggle = document.getElementById('menuToggle');
  const navMobile = document.getElementById('navMobile');
  const iconHamburger = document.querySelector('.icon-hamburger');
  const iconClose = document.querySelector('.icon-close');

  function closeMenu() {
    if (navMobile) navMobile.classList.remove('active');
    if (iconHamburger) iconHamburger.style.display = '';
    if (iconClose) iconClose.style.display = 'none';
  }

  function openMenu() {
    if (navMobile) navMobile.classList.add('active');
    if (iconHamburger) iconHamburger.style.display = 'none';
    if (iconClose) iconClose.style.display = '';
  }

  // Mobile menu toggle
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navMobile.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close mobile menu when clicking a nav link
  const mobileLinks = navMobile ? navMobile.querySelectorAll('a') : [];
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Pre-select offer on contact page from URL (e.g. ?offer=podcast)
  const offerSelect = document.getElementById('offer');
  if (offerSelect) {
    const params = new URLSearchParams(window.location.search);
    const offer = params.get('offer');
    if (offer && offerSelect.querySelector('option[value="' + offer + '"]')) {
      offerSelect.value = offer;
    }
  }

});
