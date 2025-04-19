class Navbar {
    constructor() {
        this.template = `
        <header id="site-header">
            <!-- Top Info Bar -->
            <div class="top-info-bar">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="contact-info d-flex align-items-center">
                        <div class="contact-info-item me-3">
                            <i class="fas fa-envelope me-1"></i>
                            <span>info@nankatsufc.com</span>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-phone me-1"></i>
                            <span>+62 123 456 7890</span>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-link me-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link me-2"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            
            <!-- Main Navbar -->
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/logo.png" alt="Nankatsu FC" height="40">
                        <span>Nankatsu FC</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages/about.html">Tentang Kami</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tim
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="pages/player.html">Pemain</a></li>
                                    <li><a class="dropdown-item" href="pages/coach.html">Pelatih</a></li>
                                    <li><a class="dropdown-item" href="pages/management.html">Manajemen</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages/fixtures.html">Jadwal & Hasil</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="pages/news.html">Berita</a></li>
                                    <li><a class="dropdown-item" href="pages/gallery.html">Galeri</a></li>
                                    <li><a class="dropdown-item" href="pages/videos.html">Video</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages/contact.html">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
            this.initNavbar();
        }
    }
    
    initNavbar() {
        // Set body padding to accommodate fixed header
        this.adjustBodyPadding();
        
        // Apply scroll effect
        this.setupScrollEvent();
        
        // Fix navbar links for different pages
        this.fixNavbarLinks();
        
        // Initialize dropdowns if Bootstrap is loaded
        if (typeof bootstrap !== 'undefined') {
            const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
            const dropdownList = [...dropdownElementList].map(dropdownToggleEl => 
                new bootstrap.Dropdown(dropdownToggleEl)
            );
        }
    }
    
    adjustBodyPadding() {
        const header = document.getElementById('site-header');
        if (header) {
            document.body.style.paddingTop = header.offsetHeight + 'px';
            
            // Re-adjust on window resize
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    document.body.style.paddingTop = header.offsetHeight + 'px';
                }, 100);
            });
        }
    }
    
    setupScrollEvent() {
        window.addEventListener('scroll', () => {
            const header = document.getElementById('site-header');
            const topInfoBar = document.querySelector('.top-info-bar');
            const navbar = document.querySelector('.navbar');
            
            if (header && navbar) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                    navbar.classList.add('scrolled');
                    
                    // On smaller screens, hide the top info bar when scrolled
                    if (window.innerWidth < 992 && topInfoBar) {
                        topInfoBar.classList.add('d-none');
                        this.adjustBodyPadding();
                    }
                } else {
                    header.classList.remove('scrolled');
                    navbar.classList.remove('scrolled');
                    
                    // Show top info bar again when at top
                    if (window.innerWidth < 992 && topInfoBar) {
                        topInfoBar.classList.remove('d-none');
                        this.adjustBodyPadding();
                    }
                }
            }
        });
    }
    
    fixNavbarLinks() {
        // Get current page path
        const currentPath = window.location.pathname;
        const isRoot = currentPath === '/' || currentPath.endsWith('index.html');
        
        // Fix navbar links
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        
        // Remove all active classes
        navLinks.forEach(link => link.classList.remove('active'));
        dropdownItems.forEach(item => item.classList.remove('active'));
        
        // Set active class based on current path
        if (isRoot) {
            // Home page
            document.querySelector('.navbar-nav .nav-item:first-child .nav-link').classList.add('active');
        } else {
            // Other pages
            let activeSet = false;
            
            // Check dropdown items first
            dropdownItems.forEach(item => {
                const href = item.getAttribute('href');
                if (href && currentPath.includes(href.replace('pages/', ''))) {
                    item.classList.add('active');
                    // Also set parent dropdown as active
                    const parentDropdown = item.closest('.dropdown');
                    if (parentDropdown) {
                        const dropdownToggle = parentDropdown.querySelector('.dropdown-toggle');
                        if (dropdownToggle) {
                            dropdownToggle.classList.add('active');
                        }
                    }
                    activeSet = true;
                }
            });
            
            // If no dropdown item is active, check main nav links
            if (!activeSet) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && !link.classList.contains('dropdown-toggle') && 
                        currentPath.includes(href.replace('pages/', ''))) {
                        link.classList.add('active');
                    }
                });
            }
        }
        
        // Fix links for non-root pages
        if (!isRoot) {
            // Fix navbar brand link
            const navbarBrand = document.querySelector('.navbar-brand');
            if (navbarBrand) {
                navbarBrand.href = '../index.html';
                
                // Fix logo src
                const logo = navbarBrand.querySelector('img');
                if (logo) {
                    logo.src = '../assets/logo.png';
                }
            }
            
            // Fix nav links
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#') && !href.startsWith('http')) {
                    if (href.startsWith('pages/')) {
                        link.href = href.replace('pages/', '');
                    } else if (href === 'index.html') {
                        link.href = '../index.html';
                    }
                }
            });
            
            // Fix dropdown items
            dropdownItems.forEach(item => {
                const href = item.getAttribute('href');
                if (href && !href.startsWith('#') && !href.startsWith('http')) {
                    if (href.startsWith('pages/')) {
                        item.href = href.replace('pages/', '');
                    }
                }
            });
        }
    }
}

export default Navbar;