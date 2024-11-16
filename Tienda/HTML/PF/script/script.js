const burguer=document.getElementById('burger');
const menu=document.getElementById('menu');

burguer.addEventListener('click',mostrarMenu);

function mostrarMenu(){
    
    menu.classList.toggle('mostrar');
   
}