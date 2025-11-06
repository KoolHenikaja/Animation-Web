 const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

// Slider principal
let currentSlideIndex = 0;
let autoSlideInterval;

function showSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n >= slides.length) currentSlideIndex = 0;
  if (n < 0) currentSlideIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
  clearInterval(autoSlideInterval);
  currentSlideIndex += n;
  showSlide(currentSlideIndex);
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(autoSlideInterval);
  currentSlideIndex = n;
  showSlide(currentSlideIndex);
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  }, 5000);
}

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Effet simple au chargement (optionnel)
document.addEventListener('DOMContentLoaded', function () {
  console.log('Bienvenue sur Burger Express !');

  // Lancement du slider auto
  startAutoSlide();

  // Observer les éléments à l’écran
  document.querySelectorAll('.product-card, .product-category h3').forEach(el => {
    observer.observe(el);
  });

  // Ajout dynamique de la classe "active" selon la page (optionnel)
  const currentLocation = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});

// Effet de scroll sur le header
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
