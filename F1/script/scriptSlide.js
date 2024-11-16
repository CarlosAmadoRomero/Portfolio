const slides = document.querySelector('.slides');
let indice = 0;
function moverSlide(index){
    slides.style.transform=`translateX(-${index * 100}%)`;
}

function siguiente(){
    if (indice<3) {
        indice++;
        console.log(indice);
        moverSlide(indice);
    }
}

function anterior(){

    if (indice>0) {
        indice--;
        console.log(indice);
        moverSlide(indice);
    }

}

let menuBurguer = document.getElementById("menuBurguer");
menuBurguer.addEventListener("click",MostrarMenu);

function MostrarMenu(){
    document.getElementById('slider').style.display="none";
    document.getElementById('otros').style.display="flex";
    document.getElementById('cerrar').style.display="block";
    
    
}

function Cerrar(){
    document.getElementById('slider').style.display="block";
    document.getElementById('otros').style.display="none";
    document.getElementById('cerrar').style.display="none";
}
