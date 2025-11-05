// ===================================
// SCRIPT POUR LA PAGE À PROPOS
// ===================================

// Effet de scroll sur le header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===================================
// ANIMATION DES COMPTEURS
// ===================================

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 secondes
  const increment = target / (duration / 16); // 60 FPS
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
      // Ajouter un "+" pour certains compteurs
      if (target > 1000) {
        element.textContent = target.toLocaleString() + '+';
      }
      if (element.parentElement.querySelector('.stat-label').textContent.includes('Satisfaction')) {
        element.textContent = target + '%';
      }
    }
  };

  updateCounter();
}

// Observer pour déclencher l'animation des compteurs
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      
      statNumbers.forEach((stat, index) => {
        setTimeout(() => {
          animateCounter(stat);
        }, index * 200); // Décalage de 200ms entre chaque compteur
      });
    }
  });
}, { threshold: 0.5 });

// Observer la section des statistiques
document.addEventListener('DOMContentLoaded', function() {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// ===================================
// ANIMATION AU SCROLL DES SECTIONS
// ===================================

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observer toutes les cartes et sections
document.addEventListener('DOMContentLoaded', function() {
  // Cartes de valeurs
  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    sectionObserver.observe(card);
  });

  // Cartes d'équipe
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
    sectionObserver.observe(card);
  });

  // Items d'engagement
  const commitmentItems = document.querySelectorAll('.commitment-item');
  commitmentItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    sectionObserver.observe(item);
  });

  // Section Histoire
  const storyText = document.querySelector('.story-text');
  const storyImage = document.querySelector('.story-image');
  
  if (storyText) {
    storyText.style.opacity = '0';
    storyText.style.transform = 'translateX(-30px)';
    storyText.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(storyText);
  }

  if (storyImage) {
    storyImage.style.opacity = '0';
    storyImage.style.transform = 'translateX(30px)';
    storyImage.style.transition = 'all 0.8s ease-out 0.2s';
    sectionObserver.observe(storyImage);
  }

  // Section Engagement
  const commitmentText = document.querySelector('.commitment-text');
  const commitmentImage = document.querySelector('.commitment-image');
  
  if (commitmentText) {
    commitmentText.style.opacity = '0';
    commitmentText.style.transform = 'translateX(30px)';
    commitmentText.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(commitmentText);
  }

  if (commitmentImage) {
    commitmentImage.style.opacity = '0';
    commitmentImage.style.transform = 'translateX(-30px)';
    commitmentImage.style.transition = 'all 0.8s ease-out 0.2s';
    sectionObserver.observe(commitmentImage);
  }
});

// ===================================
// EFFET DE PARALLAXE SUR LE HERO
// ===================================

window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.about-hero');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===================================
// ANIMATION DES TITRES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const titles = document.querySelectorAll('.section-title');
  const subtitles = document.querySelectorAll('.section-subtitle');

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.5 });

  titles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    title.style.transition = 'all 0.6s ease-out';
    titleObserver.observe(title);
  });

  subtitles.forEach(subtitle => {
    subtitle.style.opacity = '0';
    subtitle.style.transform = 'translateY(-20px)';
    subtitle.style.transition = 'all 0.6s ease-out 0.2s';
    titleObserver.observe(subtitle);
  });
});

// ===================================
// SMOOTH SCROLL POUR LES ANCRES
// ===================================

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

// ===================================
// EFFET HOVER SUR LES ICÔNES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const valueIcons = document.querySelectorAll('.value-icon');
  
  valueIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease';
      this.style.transform = 'scale(1.2) rotate(5deg)';
    });

    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});

// ===================================
// LAZY LOADING DES IMAGES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in';
        
        img.onload = () => {
          img.style.opacity = '1';
        };
        
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// ===================================
// ANIMATION DU BADGE DE L'HISTOIRE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const storyBadge = document.querySelector('.story-badge');
  
  if (storyBadge) {
    const badgeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          entry.target.style.animation = 'bounceIn 0.8s ease-out';
        }
      });
    }, { threshold: 0.5 });

    badgeObserver.observe(storyBadge);
  }
});

// Keyframes pour l'animation bounceIn (à ajouter dans le CSS si nécessaire)
const style = document.createElement('style');
style.textContent = `
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

// ===================================
// GESTION DE LA PERFORMANCE
// ===================================

// Désactiver les animations si l'utilisateur préfère réduire les mouvements
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}

// ===================================
// INTERACTION CTA
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta .btn');
  
  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    ctaButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });

    ctaButton.addEventListener('click', function(e) {
      // Animation de clic
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }
});

console.log('📖 Page À propos de Big Food chargée avec succès!');