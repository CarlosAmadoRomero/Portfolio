const burguer=document.getElementById('burger');
const menu=document.getElementById('menuOpciones');

burguer.addEventListener('click',mostrarMenu);

function mostrarMenu(){
    menu.classList.toggle('mostrar');
}




let botonArriba=document.getElementById('scrollTop');

window.addEventListener('scroll',function () {
if (window.scrollY>300) {
    console.log(window.scrollY);
    botonArriba.style.display="block";
}else{

    botonArriba.style.display="none";
}
});

botonArriba.addEventListener('click',function(){
  
    window.scrollTo({top:0, behavior:"smooth"});
});


let barraNav=document.querySelectorAll('barraNavegacion');

window.addEventListener('scroll',function () {
// console.log("aaa");
    });


// modo noche

let noche=document.getElementById('noche');
let puntoNoche=document.getElementById('punto');
var check=0;
noche.addEventListener('click',modoNoche);
function modoNoche(){
    puntoNoche.classList.toggle('der');
    var root = document.querySelector(':root');
    
    if (check==0) {   
        root.style.setProperty('--color-primario', 'whitesmoke');
        root.style.setProperty('--color-secundario', 'lightgrey');
        root.style.setProperty('--color-terciario', '#333333');
        check=1;
    }else if (check==1) {
        root.style.setProperty('--color-primario', '#2d2d2d');
        root.style.setProperty('--color-secundario', 'whitesmoke');
        root.style.setProperty('--color-terciario', '#whitesmoke');     
        check=0;    
    }
    
    
}



