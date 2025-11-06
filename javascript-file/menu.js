// ===================================
// SCRIPT POUR LA PAGE MENU
// ===================================

 const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

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
// SYSTÈME DE FILTRAGE DES PRODUITS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCategories = document.querySelectorAll('.product-category');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Mettre à jour les boutons actifs
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filtrer les catégories
      productCategories.forEach(category => {
        const categoryType = category.getAttribute('data-category');
        
        if (filter === 'all') {
          // Afficher toutes les catégories
          category.classList.remove('hidden');
          animateCategory(category);
        } else if (categoryType === filter) {
          // Afficher la catégorie correspondante
          category.classList.remove('hidden');
          animateCategory(category);
        } else {
          // Cacher les autres catégories
          category.classList.add('hidden');
        }
      });

      // Smooth scroll vers les produits après filtrage
      setTimeout(() => {
        const firstVisibleCategory = document.querySelector('.product-category:not(.hidden)');
        if (firstVisibleCategory && filter !== 'all') {
          firstVisibleCategory.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    });
  });

  // Fonction d'animation pour les catégories
  function animateCategory(category) {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      category.style.transition = 'all 0.6s ease-out';
      category.style.opacity = '1';
      category.style.transform = 'translateY(0)';
    }, 50);
  }
});

// ===================================
// ANIMATION AU SCROLL DES CARTES
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer toutes les cartes produits
document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
});

// ===================================
// BOUTONS "COMMANDER"
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.querySelectorAll('.btn-order');
  
  orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Récupérer les informations du produit
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;
      
      // Animation du bouton
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
      
      // Afficher un message de confirmation
      showNotification(`${productName} ajouté ! Prix: ${productPrice}`);
      
      // Ici vous pouvez ajouter la logique pour ajouter au panier
      // Par exemple: addToCart(productName, productPrice);
    });
  });
});

// ===================================
// SYSTÈME DE NOTIFICATION
// ===================================

function showNotification(message) {
  // Créer l'élément de notification s'il n'existe pas
  let notification = document.getElementById('notification');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, #06d6a0, #118ab2);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      transform: translateX(400px);
      transition: transform 0.3s ease-out;
    `;
    document.body.appendChild(notification);
  }
  
  notification.textContent = message;
  
  // Afficher la notification
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Cacher après 3 secondes
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
  }, 3000);
}

// ===================================
// BOUTONS DES FORMULES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const formuleButtons = document.querySelectorAll('.formule-card .btn');
  
  formuleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const formuleCard = this.closest('.formule-card');
      const formuleName = formuleCard.querySelector('h3').textContent;
      const formulePrice = formuleCard.querySelector('.new-price').textContent;
      
      // Animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
      
      // Notification
      showNotification(`${formuleName} sélectionnée ! Prix: ${formulePrice}`);
    });
  });
});

// ===================================
// ANIMATION DES FORMULES AU SCROLL
// ===================================

const formuleObserver = new IntersectionObserver(function(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 150);
    }
  });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', function() {
  const formuleCards = document.querySelectorAll('.formule-card');
  formuleCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    formuleObserver.observe(card);
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
// COMPTEUR ANIMÉ POUR LES PRIX
// ===================================

function animatePrice(element) {
  const finalPrice = parseInt(element.textContent.replace(/\D/g, ''));
  const duration = 1000;
  const steps = 50;
  const increment = finalPrice / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= finalPrice) {
      current = finalPrice;
      clearInterval(timer);
    }
    element.textContent = `Ar ${Math.floor(current).toLocaleString()}`;
  }, duration / steps);
}

// Observer pour animer les prix au scroll
const priceObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      animatePrice(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
  const prices = document.querySelectorAll('.new-price');
  prices.forEach(price => {
    priceObserver.observe(price);
  });
});

// ===================================
// EFFET DE PARALLAXE SUR LE HERO
// ===================================

window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.menu-hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

console.log('🍔 Menu Big Food chargé avec succès!');