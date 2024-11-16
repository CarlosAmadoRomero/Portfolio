
// const slides = document.querySelector('.slides');
const slides = document.querySelector('.slides');
const botones = document.querySelectorAll('.boton');

// const slidelenth=Array.from(slide).length;
// console.log(slides.childNodes.length);

let indice=0;



function siguiente(){
    indice++;
    if (indice==botones.length) {
        indice=0;
    }
    moverSlide(indice);
    // console.log(indice);
}

 setInterval(siguiente,2000);

function moverSlide(indice){
    slides.style.transform = `translateX(-${indice * 100}%)`;
    console.log(indice);
     
     botones.forEach(boton=>boton.classList.remove("activo"));
     botones[indice].classList.add("activo");
}


function cambiarBoton(numBoton){
    indice=numBoton;
    moverSlide(numBoton);
}