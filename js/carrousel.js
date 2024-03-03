const carrousel = document.querySelector(".carrousel-items");
let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
let intervalo = null;
let step = 1;

/* movimiento del carrousel */
const start = () => {
  intervalo = setInterval(function () {
    carrousel.scrollLeft = carrousel.scrollLeft + step;

    if (carrousel.scrollLeft === maxScrollLeft) {
      step = -1;
    } else if (carrousel.scrollLeft === 0) {
      step = 1;
    }
  }, 12);
};

start();

// Función para reiniciar el carrusel
const restartCarousel = () => {
  clearInterval(intervalo);
  start();
};

// Agregar evento de escucha a los enlaces de navegación
const navLinks = document.querySelectorAll(".nav_link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Detener el intervalo del carrusel cuando se hace clic en un enlace de navegación
    clearInterval(intervalo);
    // Reiniciar el carrusel después de un breve retraso
    setTimeout(restartCarousel, 2000);
  });
});
