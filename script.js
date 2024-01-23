// script.js

// Efek smooth scrolling pada semua link dengan class "nav-link"
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Efek parallax pada gambar latar belakang
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $(".background-image").css("background-position", "50% " + (0.4 * scroll) + "px");
    });

    // Menampilkan dan menyembunyikan lebih banyak pemain dengan animasi
    function showMorePlayers() {
        $(".card-deck .card:hidden").slice(0, 2).slideDown();
    }
});
