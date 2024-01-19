// script.js

// Smooth scrolling for navigation links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Toggle navigation menu on small screens
$('.navbar-toggler').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
});

// Toggle additional players on button click
function showMorePlayers() {
    $('.card-deck .card:hidden').slice(0, 3).show();
}

// Close modal when close button or overlay is clicked
$('.modal').on('click', function (e) {
    if (e.target === this) {
        $(this).modal('hide');
    }
});

// Make the navigation bar sticky on scroll
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
});

// Enable Bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Collapse navigation bar on item click (for small screens)
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
