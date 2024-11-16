// //
// var nombre="Carlos";
// var apellido="Amado";
// let edad=27;
// const mascota=false;

// console.log("Nombre : "+nombre+ " \nApellido : "+apellido+" \nEdad : "+edad+" \nMascota : "+mascota);

// // promt
// // let nombreIngresar=prompt("Ingrese su nombre");
// // console.log(nombreIngresar);

// // alert("Hola alumnos");

// //Programa que pida datos y los muestre por consola y por alerta

// let dato;
// // dato=prompt("Ingrese dato");

// // alert(dato);
// //  console.log(dato);

// /////////////////////////////////// ////EJ2
// //  let dato1=prompt("Dato 1");
// //  let dato2=prompt("Dato 2");

// //  alert("\nSuma:"+(parseInt(dato1)+parseInt(dato2))+"\nResta:"+(dato1-dato2)+"\nMultiplicacion:"+dato1*dato2+"\nDivision:"+dato1/dato2);
// //  console.log("\nSuma:"+(parseInt(dato1)+parseInt(dato2))+"\nResta:"+(dato1-dato2)+"\nMultiplicacion:"+dato1*dato2+"\nDivision:"+dato1/dato2);


//////////////////////////////////////////EJ boton

let variable = document.getElementById('miBoton');
//  console.log(variable);
variable.addEventListener('click', escribir);


function escribir() {
    alert('has comprado el coche');
};

let inicio = document.getElementById('Inicio');
// let nosotros = document.getElementById('Nosotros');
// let productos = document.getElementById('Productos');
// let contactos = document.getElementById('Contactos');

inicio.addEventListener('click', cambio);
// nosotros.addEventListener('click', cambio("Nosotros"));
// productos.addEventListener('click', cambio("Productos"));
// contactos.addEventListener('click', cambio("Contactos"));

function cambio() {
alert('Vas a la pagina de ');
}

//
var nuevoTexto;

function cambiarTexto(){
    
    if (nuevoTexto==null) {
        alert("No hay texto guardado");
     }else{
        document.getElementById("miParrafo").textContent=nuevoTexto;
     }
}

function escribirTexto(){
     
  
        nuevoTexto = prompt("Ingresar dato"); 
     
}


///hacer 4 prompt que se comviertan en parrafo

// let p1=prompt("parrafo 1");
// let p2=prompt("parrafo 2");
// let p3=prompt("parrafo 3");
// let p4=prompt("parrafo 4");
// let p5=p1+" "+p2+" "+p3+" "+p4;
// document.getElementById("miParrafo2").textContent=p5;