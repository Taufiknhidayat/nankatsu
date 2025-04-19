class Footer {
    constructor() {
        this.template = `
            <footer class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h5 class="text-white">NANKATSU FC</h5>
                            <p class="text-muted">Klub sepak bola dengan semangat juara dan dedikasi tinggi.</p>
                            <div class="social-icons mt-3">
                                <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="me-2"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h5 class="text-white">LINKS</h5>
                            <ul class="list-unstyled footer-links">
                                <li><a href="index.html" class="footer-link">Beranda</a></li>
                                <li><a href="pages/player.html" class="footer-link">Pemain</a></li>
                                <li><a href="pages/galery.html" class="footer-link">Media</a></li>
                                <li><a href="#fixtures" class="footer-link">Pertandingan</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-white">KONTAK</h5>
                            <ul class="list-unstyled footer-contact">
                                <li><i class="fas fa-map-marker-alt me-2"></i>Stadion Nankatsu, Jepang</li>
                                <li><i class="fas fa-phone me-2"></i>(123) 456-7890</li>
                                <li><i class="fas fa-envelope me-2"></i>info@nankatsufc.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr class="footer-divider">
                    <div class="text-center copyright">
                        <p class="mb-0">&copy; 2023 Nankatsu FC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
            this.applyFooterStyles();
            this.initFooterInteraction();
            this.fixFooterLinks();
        }
    }
    
    applyFooterStyles() {
        // Apply footer styles directly to ensure they're applied
        const footer = document.querySelector('.footer-section');
        if (footer) {
            footer.style.backgroundColor = '#0f172a';
            footer.style.color = '#f8fafc';
            footer.style.padding = '60px 0 30px';
        }
        
        // Style footer links
        document.querySelectorAll('.footer-link').forEach(link => {
            link.style.color = '#94a3b8';
            link.style.textDecoration = 'none';
            link.style.transition = 'color 0.3s';
        });
        
        // Style footer divider
        const divider = document.querySelector('.footer-divider');
        if (divider) {
            divider.style.borderColor = '#334155';
            divider.style.margin = '30px 0';
        }
        
        // Style copyright text
        const copyright = document.querySelector('.copyright');
        if (copyright) {
            copyright.style.color = '#94a3b8';
            copyright.style.fontSize = '14px';
        }
    }
    
    initFooterInteraction() {
        document.querySelectorAll('.footer-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.color = '#3b82f6';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.color = '#94a3b8';
            });
            
            if (link.getAttribute('href').startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }
    
    fixFooterLinks() {
        // Fix relative links based on current page
        const isHomePage = window.location.pathname.endsWith('/') || 
                          window.location.pathname.endsWith('index.html') || 
                          window.location.pathname.endsWith('nankatsu/');
        
        if (!isHomePage) {
            document.querySelectorAll('.footer-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('pages/')) {
                    link.setAttribute('href', '../' + href);
                } else if (href === 'index.html') {
                    link.setAttribute('href', '../index.html');
                }
            });
        }
    }
}

export default Footer;