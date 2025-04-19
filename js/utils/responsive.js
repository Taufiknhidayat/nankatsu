/**
 * Responsive utilities
 * Handles responsive adjustments for mobile devices
 */

export function applyMobileAdjustments() {
  // Add swipe indicators for horizontal scrolling elements
  addSwipeIndicators();
  
  // Adjust gallery items for better mobile display
  adjustGalleryItems();
  
  // Fix navbar on mobile
  adjustNavbar();
  
  // Fix tables on mobile
  adjustTables();
  
  // Fix fixtures and sponsors sections
  adjustFixturesAndSponsors();
  
  // Remove conflicting classes
  removeConflictingClasses();
}

function addSwipeIndicators() {
  // Add swipe indicators to scrollable elements
  const scrollableElements = document.querySelectorAll('.mobile-scroll');
  
  scrollableElements.forEach(element => {
    // Check if indicator already exists
    if (!element.querySelector('.swipe-indicator')) {
      const indicator = document.createElement('div');
      indicator.className = 'swipe-indicator';
      indicator.innerHTML = '<i class="fas fa-chevron-left"></i> Geser <i class="fas fa-chevron-right"></i>';
      
      element.appendChild(indicator);
      
      // Hide indicator after user has scrolled
      element.addEventListener('scroll', function() {
        const indicator = this.querySelector('.swipe-indicator');
        if (indicator) {
          indicator.style.opacity = '0';
          setTimeout(() => {
            indicator.style.display = 'none';
          }, 500);
        }
      });
    }
  });
}

function adjustGalleryItems() {
  // Make gallery items more responsive on mobile
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      // Add touch-friendly hover effect
      item.addEventListener('touchstart', function() {
        this.classList.add('touch-hover');
      });
      
      item.addEventListener('touchend', function() {
        setTimeout(() => {
          this.classList.remove('touch-hover');
        }, 300);
      });
    });
    
    // Adjust gallery filter buttons for touch
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.classList.add('touch-friendly');
    });
  }
}

function adjustNavbar() {
  // Make navbar more mobile-friendly
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('mobile-navbar');
    
    // Add active class to dropdown parent when child is active
    const activeDropdownItem = document.querySelector('.dropdown-item.active');
    if (activeDropdownItem) {
      const parentDropdown = activeDropdownItem.closest('.dropdown');
      if (parentDropdown) {
        parentDropdown.classList.add('active');
      }
    }
  }
}

function adjustTables() {
  // Make tables more mobile-friendly
  document.querySelectorAll('.table-responsive').forEach(table => {
    table.classList.add('mobile-table');
  });
}

function adjustFixturesAndSponsors() {
  // Fix fixtures section for mobile
  const fixturesSection = document.getElementById('fixtures');
  if (fixturesSection) {
    const fixturesContainer = fixturesSection.querySelector('.row:not(.mb-4)');
    if (fixturesContainer && !fixturesContainer.classList.contains('mobile-scroll')) {
      // Create a wrapper div for horizontal scrolling
      const scrollWrapper = document.createElement('div');
      scrollWrapper.className = 'mobile-scroll';
      
      // Clone the fixtures container
      const clonedContainer = fixturesContainer.cloneNode(true);
      
      // Replace the original container with the scroll wrapper
      fixturesContainer.parentNode.replaceChild(scrollWrapper, fixturesContainer);
      
      // Add the cloned container to the scroll wrapper
      scrollWrapper.appendChild(clonedContainer);
    }
  }
  
  // Fix sponsors section for mobile
  const sponsorsSection = document.getElementById('sponsors');
  if (sponsorsSection) {
    const sponsorsContainer = sponsorsSection.querySelector('.row:not(.mb-4)');
    if (sponsorsContainer && !sponsorsContainer.classList.contains('mobile-scroll')) {
      // Create a wrapper div for horizontal scrolling
      const scrollWrapper = document.createElement('div');
      scrollWrapper.className = 'mobile-scroll';
      
      // Clone the sponsors container
      const clonedContainer = sponsorsContainer.cloneNode(true);
      
      // Replace the original container with the scroll wrapper
      sponsorsContainer.parentNode.replaceChild(scrollWrapper, sponsorsContainer);
      
      // Add the cloned container to the scroll wrapper
      scrollWrapper.appendChild(clonedContainer);
    }
  }
}

function removeConflictingClasses() {
  // Remove mobile-scroll from team content to prevent horizontal scrolling
  const teamContent = document.querySelector('#team .row.align-items-center');
  if (teamContent) {
    teamContent.classList.remove('mobile-scroll');
  }
  
  // Add appropriate classes to tables
  document.querySelectorAll('.table-responsive').forEach(table => {
    table.classList.add('mobile-table');
  });
  
  // Add mobile-navbar class to navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('mobile-navbar');
  }
}