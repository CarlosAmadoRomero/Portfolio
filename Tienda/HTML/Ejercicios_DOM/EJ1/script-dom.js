// 1
let containerNode=document.getElementById('container');
console.log(containerNode);

// 2

let parrafo1Node=document.getElementById('parrafo1');
console.log(parrafo1Node);

// 3

let listaItems=document.querySelectorAll('li');
console.log(listaItems);


listaItems.forEach(li=>{
    li.textContent="ASDASDASDAS";
})
listaItems[2].textContent="RRR";

// 4

let parrafoClase=document.getElementsByClassName('parrafo');
console.log(parrafoClase);

// 5
let parrafoSelector=document.querySelector('#parrafo2');
console.log(parrafoSelector);

// 6

parrafo1Node.textContent="Este párrafo ha sido modificado con JavaScript.";