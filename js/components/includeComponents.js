document.addEventListener('DOMContentLoaded', () => {
    // Load navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        fetch('../components/navbar-template.html')
            .then(res => res.text())
            .then(html => {
                navbarContainer.innerHTML = html;
                initNavbarActiveState();
            });
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('../components/footer-template.html')
            .then(res => res.text())
            .then(html => {
                footerContainer.innerHTML = html;
                initFooterInteraction();
            });
    }

    // MARK: Highlight active nav-link based on current page
    function initNavbarActiveState() {
        const path = location.pathname.split('/').pop().toLowerCase();

        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            const text = link.textContent.trim().toLowerCase();

            // Match by href or keyword in text
            if (
                href && href.toLowerCase().includes(path) ||
                (path === 'galery.html' && text.includes('media')) ||
                (path === 'player.html' && text.includes('pemain')) ||
                (path === 'schedule.html' && text.includes('jadwal')) ||
                (path === 'contact.html' && text.includes('kontak'))
            ) {
                link.classList.add('active');
            }
        });
    }

    // MARK: Footer interaction (if needed)
    function initFooterInteraction() {
        document.querySelectorAll('.footer-link').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('.footer-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
});
