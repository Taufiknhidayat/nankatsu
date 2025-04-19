/**
 * Player page functionality
 */

export function initPlayerPage() {
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