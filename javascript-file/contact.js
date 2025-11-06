// ===================================
// SCRIPT POUR LA PAGE CONTACT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  // Gestion du header au scroll
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Récupération des données du formulaire
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Validation basique
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.phone || !formData.subject || !formData.message) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
      }

      // Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
      }

      // Simulation d'envoi (dans un vrai projet, vous enverriez les données à un serveur)
      console.log('Données du formulaire:', formData);

      // Animation de soumission
      const submitBtn = contactForm.querySelector('.btn-submit');
      submitBtn.style.opacity = '0.6';
      submitBtn.style.pointerEvents = 'none';
      submitBtn.innerHTML = '<span>Envoi en cours...</span>';

      // Simulation d'un délai d'envoi
      setTimeout(() => {
        // Masquer le formulaire
        contactForm.style.display = 'none';
        
        // Afficher le message de succès
        successMessage.classList.add('show');

        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
          successMessage.classList.remove('show');
          contactForm.style.display = 'flex';
          contactForm.reset();
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
          submitBtn.innerHTML = '<span>Envoyer le message</span><span class="btn-icon">→</span>';
        }, 5000);
      }, 1500);
    });
  }

  // Animation des cartes info au scroll
  const infoCards = document.querySelectorAll('.info-card');
  const faqCards = document.querySelectorAll('.faq-card');

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const animateOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Initialiser l'animation pour les cartes
  infoCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    animateOnScroll.observe(card);
  });

  faqCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    animateOnScroll.observe(card);
  });

  // Validation en temps réel des champs
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#e63946';
      } else {
        this.style.borderColor = '#e9ecef';
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      // Permettre uniquement les chiffres, espaces, +, -, et ()
      this.value = this.value.replace(/[^0-9+\-() ]/g, '');
    });
  }

  // Animation du bouton de soumission au hover
  const submitBtn = document.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    submitBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  }

  // Smooth scroll pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});