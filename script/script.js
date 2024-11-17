const burguer=document.getElementById('burger');
const menu=document.getElementById('menuOpciones');

burguer.addEventListener('click',mostrarMenu);

function mostrarMenu(){
    
    menu.classList.toggle('mostrar');
   
}


const color = document.getElementById('pincel');
color.addEventListener('click',menuColores);


function menuColores(){
    document.getElementById('menuColores').classList.toggle('verColores');
}

const paletaOscura=document.getElementById('paletaOscuro');
const paletaClara=document.getElementById('paletaClaro');
const paletaMarron=document.getElementById('paletaMarron');
const paletaVerde=document.getElementById('paletaVerde');


paletaOscura.addEventListener('click', function() {
    var root = document.querySelector(':root');
            root.style.setProperty('--color-primario', '#121212');
            root.style.setProperty('--color-secundario', 'whitesmoke');
            root.style.setProperty('--color-terciario', '#whitesmoke');
            
});

paletaClara.addEventListener('click',function() {
    var root = document.querySelector(':root');

            root.style.setProperty('--color-primario', 'whitesmoke');
            root.style.setProperty('--color-secundario', '#121212');
            root.style.setProperty('--color-terciario', '#333333');


            
});
paletaMarron.addEventListener('click',function() {
   
    var root = document.querySelector(':root');
            root.style.setProperty('--color-primario', 'brown');
            root.style.setProperty('--color-secundario', 'burlywood');
            root.style.setProperty('--color-terciario', 'whitesmoke');
            
});
paletaVerde.addEventListener('click',function() {
 
    var root = document.querySelector(':root');
            root.style.setProperty('--color-primario', 'green');
            root.style.setProperty('--color-secundario', 'greenyellow');
            root.style.setProperty('--color-terciario', 'whitesmoke');
            
});



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
    // console.log("aaa");
    // window.scroll(0,0);

    // window.scrollY=0;
    window.scrollTo({top:0, behavior:"smooth"});
});


let barraNav=document.querySelectorAll('barraNavegacion');

window.addEventListener('scroll',function () {
console.log("aaa");
    });