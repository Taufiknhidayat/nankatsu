/**
 * Horizontal scroll utilities
 * Enhances the horizontal scrolling experience on mobile
 */

export function initHorizontalScroll() {
  // Add swipe indicators for horizontal scrolling sections
  addSwipeIndicators();
  
  // Add touch-friendly scrolling behavior
  enhanceScrolling();
}

function addSwipeIndicators() {
  // Target fixtures and sponsors sections
  const scrollSections = document.querySelectorAll('#fixtures .row:not(.mb-4), #sponsors .row:not(.mb-4)');
  
  if (window.innerWidth <= 768) {
    scrollSections.forEach(section => {
      // Check if indicator already exists
      if (!section.querySelector('.swipe-indicator')) {
        const indicator = document.createElement('div');
        indicator.className = 'swipe-indicator';
        indicator.innerHTML = '<i class="fas fa-chevron-left"></i> Geser <i class="fas fa-chevron-right"></i>';
        
        section.parentNode.appendChild(indicator);
        
        // Hide indicator after user has scrolled
        section.addEventListener('scroll', function() {
          const indicator = section.parentNode.querySelector('.swipe-indicator');
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
}

function enhanceScrolling() {
  // Add momentum-based scrolling for iOS
  const scrollSections = document.querySelectorAll('#fixtures .row:not(.mb-4), #sponsors .row:not(.mb-4)');
  
  scrollSections.forEach(section => {
    // Add visual feedback on touch
    section.addEventListener('touchstart', function() {
      this.classList.add('touching');
    });
    
    section.addEventListener('touchend', function() {
      this.classList.remove('touching');
    });
  });
}