/// player.js

// Fungsi untuk menambahkan efek animasi menggunakan Animate.css
function animatePlayerCards() {
    // Tambahkan class "animate__animated" dan class Animate.css yang diinginkan ke setiap card
    $(".card").addClass("animate__animated animate__fadeInUp");

    // Tambahkan class "animate__animated" dan class Animate.css yang diinginkan ke setiap gambar dalam card
    $(".card img").addClass("animate__animated animate__fadeInUp");
}

// Fungsi untuk menampilkan lebih banyak pemain dengan animasi
function showMorePlayers() {
    // Pilih card yang masih tersembunyi dan terapkan animasi fadeInUp
    $(".card:hidden").slice(0, 2).addClass("animate__animated animate__fadeInUp").slideDown();
}

// Jalankan fungsi saat dokumen sudah siap
$(document).ready(function () {
    // Jalankan animasi saat pertama kali halaman dimuat
    animatePlayerCards();

    // Tangani animasi saat menggulir
    $(window).scroll(function () {
        // Ambil posisi scroll
        var scroll = $(window).scrollTop();
        
        // Terapkan efek parallax pada gambar latar belakang
        $(".background-image").css("background-position", "50% " + (0.4 * scroll) + "px");
    });

    // Tangani animasi saat mengklik link navigasi
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

    // Tangani animasi saat mengklik tombol "Tampilkan Lebih Banyak"
    $("#show-more").on('click', function () {
        showMorePlayers();
    });
});
