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