const elementos = document.querySelectorAll('.card-social, .card-funcionario, .hero-texto');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.1 });

elementos.forEach(el => {
    el.classList.add('oculto');
    observador.observe(el);
});