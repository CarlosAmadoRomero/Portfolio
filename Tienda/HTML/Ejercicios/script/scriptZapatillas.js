const botones = document.querySelectorAll('.botones');
const slides = document.querySelectorAll('.contenido');
let indiceActual = 0;
const color = document.querySelector(':root');

// console.log(botones);
function cambiarSlide(indice) {
    // console.log(indice);

    slides.forEach(slide => slide.classList.add('cuadroOculto'));
    slides[indice].classList.remove('cuadroOculto');

    botones.forEach(bullet => bullet.classList.remove('boton-negro'));
    botones[indice].classList.add('boton-negro');

    switch (indice) {
        case 0:
            console.log(indice);
            color.style.setProperty('--color-primario', 'blue');
            color.style.setProperty('--color-secundario', 'lightblue');
            break;
        case 1:
            color.style.setProperty('--color-primario', 'red');
            color.style.setProperty('--color-secundario', 'lightcoral');
            break;
        case 2:
            color.style.setProperty('--color-primario', 'yellow');
            color.style.setProperty('--color-secundario', 'lightyellow');
            break;
        case 3:
            color.style.setProperty('--color-primario', 'green');
            color.style.setProperty('--color-secundario', 'lightgreen');
            break;

        default:
            break;
    }
}

botones.forEach(bullet => {
    bullet.addEventListener('click', () => {
        indiceActual = parseInt(bullet.getAttribute('indice'));
        // console.log(indiceActual);
        cambiarSlide(indiceActual);
    });

});

function prevSlide() {
    if (indiceActual>0) {
        indiceActual--;
        cambiarSlide(indiceActual);
        
    }
}

function nextSlide() {
    if (indiceActual<botones.length-1) {
        indiceActual++;
        cambiarSlide(indiceActual);
        
    }
}

// setInterval(console.log(indiceActual), 1000);