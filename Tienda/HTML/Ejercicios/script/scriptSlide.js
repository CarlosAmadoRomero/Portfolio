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