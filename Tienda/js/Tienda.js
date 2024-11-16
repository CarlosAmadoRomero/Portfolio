const slides = document.querySelector('.slides');
let siguiente = document.getElementById('siguiente');
let anterior = document.getElementById('anterior');

anterior.addEventListener('click',prevSlide);
siguiente.addEventListener('click',nextSlide);
let indice = 0;

setInterval(nextSlide,300000);

function prevSlide(){
    if (indice==0) {
        indice=2;
    }else{
        indice--;
    }
    moverSlide(indice);

}
function nextSlide(){
    if (indice<2) {
        indice++;
    }else{
        indice=0;
    }
    moverSlide(indice);
}


function moverSlide(index){
    slides.style.transform=`translateX(-${index * 100}%)`;
    
}





const caja_bullets = document.querySelectorAll('.bullet');
const slidesofertas = document.querySelector('.slidesOferta');
let indiceOfertas = 0;

setInterval(siguienteSlideOfertas,3000);

function siguienteSlideOfertas(){
    if (indiceOfertas<2) {
        indiceOfertas++;
    }else{
        indiceOfertas=0;
    }
    moverSlideOfertas(indiceOfertas);
}

caja_bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        indiceOfertas = bullet.getAttribute('indice');
        moverSlideOfertas(indiceOfertas);
        // console.log(indiceOfertas);
    });
});

function moverSlideOfertas(index){
    slidesofertas.style.transform=`translateX(-${index * 100}%)`;
    caja_bullets.forEach(bullet => bullet.classList.remove('selected'));
    caja_bullets[index].classList.add('selected');
    
}