const slides = document.querySelector('.slides');
const caja_bullets = document.querySelectorAll('.bullet');

let indiceActual = 0;


console.log(slides);

function mostrarSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    caja_bullets.forEach(bullet => bullet.classList.remove('active'));
    caja_bullets[index].classList.add('active');
}


caja_bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        indiceActual = bullet.getAttribute('posicion_slide');
        mostrarSlide(indiceActual);
    });
});



function nextSlide() {
    indiceActual = (indiceActual + 1) % caja_bullets.length;
    mostrarSlide(indiceActual);
}
// setInterval(nextSlide, 3000);


// console.log(caja_bullets);