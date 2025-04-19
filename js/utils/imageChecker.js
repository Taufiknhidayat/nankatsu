/**
 * Utility to check if images exist and create placeholders if needed
 */

export function checkImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Save original src
        const originalSrc = img.getAttribute('src');
        
        // Error handler for images
        img.onerror = function() {
            console.warn(`Image not found: ${originalSrc}`);
            
            // Create a canvas placeholder with the image dimensions
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set dimensions
            canvas.width = img.width || 300;
            canvas.height = img.height || 200;
            
            // Fill with a gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#1e3a8a');
            gradient.addColorStop(1, '#3b82f6');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add text
            ctx.fillStyle = 'white';
            ctx.font = '14px Poppins';
            ctx.textAlign = 'center';
            ctx.fillText('Image Placeholder', canvas.width/2, canvas.height/2);
            ctx.fillText(originalSrc, canvas.width/2, canvas.height/2 + 20);
            
            // Replace the image source with the canvas data
            img.src = canvas.toDataURL();
        };
    });
}