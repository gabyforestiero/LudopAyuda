const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('toggle'); // Agregar o quitar la clase 'toggle' al burger
});
