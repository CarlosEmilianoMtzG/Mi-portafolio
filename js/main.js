// Función para mostrar secciones al hacer scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('show');
    }
  });
}

// Ejecutar al cargar la página
window.addEventListener('load', revealOnScroll);

// Ejecutar cada vez que se hace scroll
window.addEventListener('scroll', revealOnScroll);