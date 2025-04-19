import Navbar from '../components/navbar/Navbar.js';
import Hero from '../components/hero/Hero.js';
import Fixtures from '../components/fixtures/Fixtures.js';
import Footer from '../components/footer/Footer.js';
import { applyMobileAdjustments } from './utils/responsive.js';
import { initHorizontalScroll } from './utils/horizontalScroll.js';

class App {
    constructor() {
        this.components = {
            navbar: new Navbar(),
            hero: new Hero(),
            fixtures: new Fixtures(),
            footer: new Footer()
        };
        this.currentPage = this.detectCurrentPage();
    }

    detectCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('galery.html')) {
            return 'gallery';
        } else if (path.includes('player.html')) {
            return 'player';
        } else {
            return 'home';
        }
    }

    init() {
        // Initialize components
        this.components.navbar.render('navbar-container');
        
        // Render components based on current page
        if (this.currentPage === 'home') {
            this.components.hero.render('hero-container');
            this.components.fixtures.render('fixtures-container');
        } else if (this.currentPage === 'gallery') {
            // Initialize gallery page specific functionality
            this.initGallery();
        } else if (this.currentPage === 'player') {
            // Initialize player page specific functionality
            this.initPlayerPage();
        }
        
        this.components.footer.render('footer-container');
        
        // Apply mobile adjustments if needed
        if (window.innerWidth <= 768) {
            applyMobileAdjustments();
            initHorizontalScroll();
        }
        
        // Setup event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                applyMobileAdjustments();
                initHorizontalScroll();
            }
        });
    }

    initGallery() {
        // Initialize Fancybox if available
        if (typeof Fancybox !== 'undefined') {
            Fancybox.bind("[data-fancybox]", {
                // Custom options
            });
        }

        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    initPlayerPage() {
        // Add any player page specific functionality here
        console.log('Player page initialized');
        
        // Example: Add hover effects to player cards
        const playerCards = document.querySelectorAll('.player-card');
        playerCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('player-card-hover');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('player-card-hover');
            });
        });
    }
}

export default App;