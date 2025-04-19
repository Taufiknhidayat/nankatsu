class Fixtures {
    constructor() {
        this.template = `
            <section id="fixtures" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">JADWAL PERTANDINGAN</h2>
                    <div class="fixtures-slider">
                        <div class="fixtures-container">
                            <!-- Match 1 -->
                            <div class="fixture-card">
                                <div class="fixture-date">
                                    <i class="far fa-calendar-alt"></i> 25 January 2024
                                </div>
                                <div class="fixture-time">
                                    <i class="far fa-clock"></i> 15:00 WIB
                                </div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        <img src="assets/team-logo1.png" alt="Nankatsu FC">
                                        <span>Nankatsu FC</span>
                                    </div>
                                    <div class="fixture-vs">VS</div>
                                    <div class="team">
                                        <img src="assets/team-logo2.png" alt="Toho Academy">
                                        <span>Toho Academy</span>
                                    </div>
                                </div>
                                <div class="fixture-venue">
                                    <i class="fas fa-map-marker-alt"></i> Nankatsu Stadium
                                </div>
                            </div>
                            
                            <!-- Match 2 -->
                            <div class="fixture-card">
                                <div class="fixture-date">
                                    <i class="far fa-calendar-alt"></i> 2 February 2024
                                </div>
                                <div class="fixture-time">
                                    <i class="far fa-clock"></i> 19:30 WIB
                                </div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        <img src="assets/team-logo3.png" alt="Furano FC">
                                        <span>Furano FC</span>
                                    </div>
                                    <div class="fixture-vs">VS</div>
                                    <div class="team">
                                        <img src="assets/team-logo1.png" alt="Nankatsu FC">
                                        <span>Nankatsu FC</span>
                                    </div>
                                </div>
                                <div class="fixture-venue">
                                    <i class="fas fa-map-marker-alt"></i> Furano Stadium
                                </div>
                            </div>
                            
                            <!-- Match 3 -->
                            <div class="fixture-card">
                                <div class="fixture-date">
                                    <i class="far fa-calendar-alt"></i> 15 February 2024
                                </div>
                                <div class="fixture-time">
                                    <i class="far fa-clock"></i> 15:00 WIB
                                </div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        <img src="assets/team-logo1.png" alt="Nankatsu FC">
                                        <span>Nankatsu FC</span>
                                    </div>
                                    <div class="fixture-vs">VS</div>
                                    <div class="team">
                                        <img src="assets/team-logo4.png" alt="Meiwa FC">
                                        <span>Meiwa FC</span>
                                    </div>
                                </div>
                                <div class="fixture-venue">
                                    <i class="fas fa-map-marker-alt"></i> Nankatsu Stadium
                                </div>
                            </div>
                        </div>
                        <div class="fixtures-controls d-none">
                            <button class="prev-fixture"><i class="fas fa-chevron-left"></i> Geser</button>
                            <button class="next-fixture">Geser <i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.template;
            this.initFixtures();
        }
    }
    
    initFixtures() {
        const fixturesContainer = document.querySelector('.fixtures-container');
        const prevButton = document.querySelector('.prev-fixture');
        const nextButton = document.querySelector('.next-fixture');
        
        if (fixturesContainer && prevButton && nextButton) {
            // Apply styling to fixtures
            this.styleFixtures();
            
            // Initialize slider functionality
            let scrollAmount = 0;
            const cardWidth = fixturesContainer.querySelector('.fixture-card').offsetWidth + 20; // card width + margin
            
            prevButton.addEventListener('click', () => {
                scrollAmount = Math.max(scrollAmount - cardWidth, 0);
                fixturesContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            nextButton.addEventListener('click', () => {
                scrollAmount = Math.min(scrollAmount + cardWidth, fixturesContainer.scrollWidth - fixturesContainer.clientWidth);
                fixturesContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Add touch scrolling for mobile
            fixturesContainer.style.overflowX = 'auto';
            fixturesContainer.style.scrollBehavior = 'smooth';
            fixturesContainer.style.webkitOverflowScrolling = 'touch';
            fixturesContainer.style.scrollbarWidth = 'none'; // Firefox
            fixturesContainer.style.msOverflowStyle = 'none'; // IE/Edge
            
            // Hide scrollbar
            fixturesContainer.style.scrollbarWidth = 'none';
            fixturesContainer.style.msOverflowStyle = 'none';
            
            // Add CSS to hide scrollbar in WebKit browsers
            const style = document.createElement('style');
            style.textContent = `
                .fixtures-container::-webkit-scrollbar {
                    display: none;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    styleFixtures() {
        const fixturesSection = document.getElementById('fixtures');
        const fixturesContainer = document.querySelector('.fixtures-container');
        const fixtureCards = document.querySelectorAll('.fixture-card');
        
        if (fixturesSection) {
            fixturesSection.style.backgroundColor = '#f8fafc';
            fixturesSection.style.padding = '60px 0';
        }
        
        if (fixturesContainer) {
            fixturesContainer.style.display = 'flex';
            fixturesContainer.style.gap = '20px';
            fixturesContainer.style.padding = '10px 5px';
            fixturesContainer.style.marginBottom = '20px';
        }
        
        fixtureCards.forEach(card => {
            card.style.backgroundColor = '#fff';
            card.style.borderRadius = '10px';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            card.style.padding = '20px';
            card.style.minWidth = '300px';
            card.style.flex = '0 0 auto';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            });
            
            // Style fixture date
            const fixtureDate = card.querySelector('.fixture-date');
            if (fixtureDate) {
                fixtureDate.style.color = '#3b82f6';
                fixtureDate.style.fontWeight = '600';
                fixtureDate.style.marginBottom = '5px';
                fixtureDate.style.fontSize = '0.9rem';
            }
            
            // Style fixture time
            const fixtureTime = card.querySelector('.fixture-time');
            if (fixtureTime) {
                fixtureTime.style.color = '#64748b';
                fixtureTime.style.marginBottom = '15px';
                fixtureTime.style.fontSize = '0.9rem';
            }
            
            // Style fixture teams
            const fixtureTeams = card.querySelector('.fixture-teams');
            if (fixtureTeams) {
                fixtureTeams.style.display = 'flex';
                fixtureTeams.style.alignItems = 'center';
                fixtureTeams.style.justifyContent = 'space-between';
                fixtureTeams.style.marginBottom = '15px';
            }
            
            // Style teams
            const teams = card.querySelectorAll('.team');
            teams.forEach(team => {
                team.style.display = 'flex';
                team.style.flexDirection = 'column';
                team.style.alignItems = 'center';
                team.style.gap = '5px';
                
                const teamImg = team.querySelector('img');
                if (teamImg) {
                    teamImg.style.width = '50px';
                    teamImg.style.height = '50px';
                    teamImg.style.objectFit = 'contain';
                }
                
                const teamName = team.querySelector('span');
                if (teamName) {
                    teamName.style.fontWeight = '600';
                    teamName.style.color = '#0f172a';
                    teamName.style.fontSize = '0.9rem';
                }
            });
            
            // Style VS
            const fixtureVs = card.querySelector('.fixture-vs');
            if (fixtureVs) {
                fixtureVs.style.fontWeight = '700';
                fixtureVs.style.color = '#ef4444';
                fixtureVs.style.padding = '5px 10px';
                fixtureVs.style.borderRadius = '5px';
                fixtureVs.style.backgroundColor = '#fee2e2';
            }
            
            // Style venue
            const fixtureVenue = card.querySelector('.fixture-venue');
            if (fixtureVenue) {
                fixtureVenue.style.color = '#64748b';
                fixtureVenue.style.fontSize = '0.9rem';
                fixtureVenue.style.textAlign = 'center';
            }
        });
        
        // Style controls
        const fixturesControls = document.querySelector('.fixtures-controls');
        if (fixturesControls) {
            fixturesControls.style.display = 'none'; // Hide controls completely
        }
    }
}

export default Fixtures;