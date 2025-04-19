class Hero {
    constructor() {
        this.template = `
            <section class="hero-section">
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <h1 class="hero-title">NANKATSU FC</h1>
                            <p class="hero-subtitle">Klub Sepak Bola dengan Semangat Juara</p>
                            <div class="hero-buttons">
                                <a href="#fixtures" class="btn btn-primary btn-lg me-3">Jadwal Pertandingan</a>
                                <a href="#team" class="btn btn-outline-light btn-lg">Tentang Klub</a>
                            </div>
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
        }
    }
}

export default Hero;