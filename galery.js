    $(document).ready(function () {
        // Initialize Fancybox
        $('[data-fancybox="gallery"]').fancybox({
            loop: true, // Enable looping of images
            transitionEffect: "slide", // Set the transition effect
            buttons: ["slideShow", "fullScreen", "thumbs", "close"], // Show additional buttons
        });
    });
