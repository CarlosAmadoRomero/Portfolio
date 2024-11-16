const slide = document.querySelectorAll('.slide');
let indice = 0;
function moverSlide(index){
    // slides.style.transform=`translateX(-${index * 100}%)`;
    slide.forEach(video => video.classList.add('NoActivo'));
    slide[index].classList.remove('NoActivo');
    
}

function siguiente(){
    if (indice<3) {
        indice++;
        // console.log(indice);
        moverSlide(indice);
    }
}

function anterior(){

    if (indice>0) {
        indice--;
        // console.log(indice);
        moverSlide(indice);
    }

}


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