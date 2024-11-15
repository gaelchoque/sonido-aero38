let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-image");
    currentSlide += step;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll(".carousel-image");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });
}

// Cambiar automáticamente las imágenes cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);  // 3000 milisegundos = 3 segundos

// Inicializar el carrusel
updateCarousel();
