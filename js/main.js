import { Navbar, Hero, Fixtures, Gallery, Footer } from './components/index.js';
import { FixtureService, PlayerService } from './services/index.js';
import { applyMobileAdjustments, initHorizontalScroll } from './utils/index.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    const navbar = new Navbar('navbar-container');
    const hero = new Hero('hero-container');
    const fixtures = new Fixtures('fixtures-container');
    const footer = new Footer('footer-container');

    // Initialize services
    const fixtureService = new FixtureService();
    const playerService = new PlayerService();

    // Apply mobile adjustments if needed
    if (window.innerWidth <= 768) {
        applyMobileAdjustments();
        initHorizontalScroll();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            applyMobileAdjustments();
            initHorizontalScroll();
        }
    });
});