// Effet simple au chargement (optionnel)
document.addEventListener('DOMContentLoaded', function () {
  console.log('Bienvenue sur Burger Express !');

  // Ajout dynamique de la classe "active" selon la page (optionnel)
  const currentLocation = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});

 window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });