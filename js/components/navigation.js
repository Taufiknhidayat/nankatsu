/**
 * Navigation component
 * Handles navigation-related functionality
 */

export function initNavigation() {
  // Get current page path
  const path = window.location.pathname;
  const page = path.split("/").pop();
  
  // Set active class for navbar items
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      link.parentElement.classList.add('active');
    } else if (page === 'player.html' && link.textContent.includes('TENTANG KLUB')) {
      link.parentElement.classList.add('active');
    } else if (page === 'galery.html' && link.textContent.includes('MEDIA')) {
      link.parentElement.classList.add('active');
    }
  });
  
  // Force correct navbar color after DOM loaded
  document.querySelector('.navbar').style.backgroundColor = '#1e3a8a';
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.style.backgroundColor = '#1e3a8a';
  });
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupScrollHandler() {
  // Initial check
  if (window.scrollY > 50) {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');
    }
  }
  
  // Handle navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
  });
}

function setupHeroSection() {
  // Check if this is the home page
  if (window.location.pathname === '/' || 
      window.location.pathname === '/index.html' || 
      window.location.pathname.endsWith('/index.html')) {
    document.body.classList.add('home-page');
    
    // Make hero section full screen on all devices
    const adjustHeroHeight = function() {
      const heroSection = document.querySelector('.background-image');
      if (heroSection) {
        const windowHeight = window.innerHeight;
        heroSection.style.height = windowHeight + 'px';
        heroSection.style.minHeight = windowHeight + 'px';
        
        // Adjust hero content spacing for better mobile view
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && window.innerWidth <= 768) {
          heroContent.style.paddingTop = '80px';
          
          // Adjust spacing between hero elements
          const heroTitle = heroContent.querySelector('h1');
          const heroParagraph = heroContent.querySelector('p');
          
          if (heroTitle) {
            heroTitle.style.marginBottom = '1rem';
          }
          
          if (heroParagraph) {
            heroParagraph.style.marginBottom = '1.5rem';
          }
        }
      }
    };
    
    // Run when page loads and resizes
    adjustHeroHeight();
    window.addEventListener('resize', adjustHeroHeight);
  }
}