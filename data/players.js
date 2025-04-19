const players = [
    {
        id: 1,
        name: "David de Gea",
        number: 1,
        country: "Spanyol",
        position: "Penjaga gawang",
        image: "assets/De gea.jpeg"
    },
    {
        id: 2,
        name: "Victor Lindelof",
        number: 3,
        country: "Swedia",
        position: "Pemain Belakang",
        image: "assets/lindelof.jpeg"
    }
    // Add more players here
];

// Export for use in other files
if (typeof module !== 'undefined') {
    module.exports = { players };
}