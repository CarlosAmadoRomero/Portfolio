
function mover() {
        document.getElementById('rueda').classList.toggle('alt');
        document.getElementById('contenedorColorYRueda').classList.toggle('coloresAlt');
}
function cambiarColor(color) {
        var root = document.querySelector(':root');

        switch (color) {
                case 'azul':
                        root.style.setProperty('--color-primario', 'blue');
                        root.style.setProperty('--color-secundario', 'lightblue');
                        console.log("hola");
                        break;
                case 'rojo':
                        root.style.setProperty('--color-primario', 'red');
                        root.style.setProperty('--color-secundario', 'lightcoral');
                        break;
                case 'verde':
                        root.style.setProperty('--color-primario', 'green');
                        root.style.setProperty('--color-secundario', 'lightgreen');
                        break;
                case 'morado':
                        root.style.setProperty('--color-primario', 'purple');
                        root.style.setProperty('--color-secundario', 'lightpink');
                        break;
                case 'naranja':
                        root.style.setProperty('--color-primario', 'orange');
                        root.style.setProperty('--color-secundario', 'lightsalmon');
                        break;

                default:
                        break;
        }
}
function cambiaFrame(id) {
        var elemento1 = document.getElementById("primerCuadro");
        var elemento2 = document.getElementById('segundoCuadro');
        var elemento3 = document.getElementById('tercerCuadro');
        switch (id) {
                case '1':
                        document.getElementById('triangulo').classList.add('pos1');
                        document.getElementById('triangulo').classList.remove('pos3');
                        document.getElementById('triangulo').classList.remove('pos2');

                        document.getElementById('botonClinica').classList.add("botonActivo");
                        document.getElementById('botonFilosofia').classList.remove("botonActivo");
                        document.getElementById('botonEquipo').classList.remove("botonActivo");

                        elemento1.classList.add("activo");
                        elemento1.classList.remove('NoActivo');

                        elemento2.classList.remove('activo');
                        elemento3.classList.remove('activo');
                        elemento2.classList.add('NoActivo');
                        elemento3.classList.add('NoActivo');

                        console.log("1");

                        break;
                case '2':


                        document.getElementById('triangulo').classList.add('pos2');
                        document.getElementById('triangulo').classList.remove('pos1');
                        document.getElementById('triangulo').classList.remove('pos3');

                        document.getElementById('botonClinica').classList.remove("botonActivo");
                        document.getElementById('botonFilosofia').classList.add("botonActivo");
                        document.getElementById('botonEquipo').classList.remove("botonActivo");

                        elemento2.classList.add('activo');
                        elemento2.classList.remove('NoActivo');

                        elemento1.classList.remove('activo');
                        elemento3.classList.remove('activo');
                        elemento1.classList.add('NoActivo');
                        elemento3.classList.add('NoActivo');

                        console.log("2");
                        break;
                case '3':


                        document.getElementById('triangulo').classList.add('pos3');
                        document.getElementById('triangulo').classList.remove('pos1');
                        document.getElementById('triangulo').classList.remove('pos2');

                        document.getElementById('botonClinica').classList.remove("botonActivo");
                        document.getElementById('botonFilosofia').classList.remove("botonActivo");
                        document.getElementById('botonEquipo').classList.add("botonActivo");

                        elemento3.classList.add('activo');
                        elemento3.classList.remove('NoActivo');

                        elemento1.classList.remove('activo');
                        elemento2.classList.remove('activo');
                        elemento1.classList.add('NoActivo');
                        elemento2.classList.add('NoActivo');

                        console.log("3");
                        break;

                default:
                        break;
        }
}

function MostrarMenu() {
        document.getElementById("menuOculto").classList.toggle('verMenuOculto');
}

function respuesta(id) {
        document.getElementById(id).classList.toggle('mostrar');
}


let contOffer = 1;
function cambiarOferta(numBoton) {
        switch (numBoton) {
                case 'b1':
                        contOffer = 1
                        document.getElementById('b1').classList.add('bActivo');
                        document.getElementById('b2').classList.remove('bActivo');
                        document.getElementById('b3').classList.remove('bActivo');

                        document.getElementById('of1').classList.remove('offersNoActivo');
                        document.getElementById('of2').classList.add('offersNoActivo');
                        document.getElementById('of3').classList.add('offersNoActivo');

                        break;
                case 'b2':
                        contOffer = 2
                        document.getElementById('b2').classList.add('bActivo');
                        document.getElementById('b1').classList.remove('bActivo');
                        document.getElementById('b3').classList.remove('bActivo');

                        document.getElementById('of2').classList.remove('offersNoActivo');
                        document.getElementById('of1').classList.add('offersNoActivo');
                        document.getElementById('of3').classList.add('offersNoActivo');

                        break;
                case 'b3':
                        contOffer = 3
                        document.getElementById('b3').classList.add('bActivo');
                        document.getElementById('b1').classList.remove('bActivo');
                        document.getElementById('b2').classList.remove('bActivo');

                        document.getElementById('of3').classList.remove('offersNoActivo');
                        document.getElementById('of1').classList.add('offersNoActivo');
                        document.getElementById('of2').classList.add('offersNoActivo');
                        break;

                default:
                        break;
        }
}


let contCliente = 1;

function cambiarCliente(numBoton) {
        switch (numBoton) {
                case 'bc1':
                        contCliente = 1
                        document.getElementById('bc1').classList.add('bcActivo');
                        document.getElementById('bc2').classList.remove('bcActivo');
                        document.getElementById('bc3').classList.remove('bcActivo');

                    
                        document.getElementById('cliente1').classList.remove('clienteNoActivo');
                        document.getElementById('cliente2').classList.add('clienteNoActivo');
                        document.getElementById('cliente3').classList.add('clienteNoActivo');

                        break;
                case 'bc2':
                        contCliente = 2
                        document.getElementById('bc2').classList.add('bcActivo');
                        document.getElementById('bc1').classList.remove('bcActivo');
                        document.getElementById('bc3').classList.remove('bcActivo');

                  
                        document.getElementById('cliente2').classList.remove('clienteNoActivo');
                        document.getElementById('cliente1').classList.add('clienteNoActivo');
                        document.getElementById('cliente3').classList.add('clienteNoActivo');

                        break;
                case 'bc3':
                        contCliente = 3
                        document.getElementById('bc3').classList.add('bcActivo');
                        document.getElementById('bc1').classList.remove('bcActivo');
                        document.getElementById('bc2').classList.remove('bcActivo');

                     
                        document.getElementById('cliente3').classList.remove('clienteNoActivo');
                        document.getElementById('cliente1').classList.add('clienteNoActivo');
                        document.getElementById('cliente2').classList.add('clienteNoActivo');
                        break;

                default:
                        break;
        }
}




setInterval(LlamarCliente, 2000);
function LlamarCliente() {
        // console.log(cont);
        cambiarCliente('bc'.concat(contCliente));
        contCliente++;
        if (contCliente==4) {
                contCliente = 1;
        }
}
 
 

setInterval(LlamarOferta, 2000);
function LlamarOferta() {
        // console.log(cont);
        cambiarOferta('b'.concat(contOffer));
        contOffer++;
        if (contOffer==4) {
                contOffer = 1;
        }
}

let contSliderFriend = 1;
function siguiente(){
        if(contSliderFriend<4){
        document.getElementById('img'.concat(contSliderFriend)).classList.add('img'.concat(contSliderFriend));
        contSliderFriend++;
        document.getElementById('img'.concat(contSliderFriend+2)).classList.remove('img'.concat((contSliderFriend+2)));
        }
}
 
function anterior(){
        if(contSliderFriend>1){
        document.getElementById('img'.concat(contSliderFriend+2)).classList.add('img'.concat(contSliderFriend+2));
        contSliderFriend--;
        document.getElementById('img'.concat(contSliderFriend)).classList.remove('img'.concat((contSliderFriend)));
        }
}



let contSlide=1;
setInterval(LlamarSlide1, 4000);
function LlamarSlide1() {
        // console.log(cont);
        cambiarSlide('slide'.concat(contSlide));
        contSlide++;
        if (contSlide==5) {
                contSlide = 1;
        }
}


function cambiarSlide(numBoton) {
        switch (numBoton) {
                case 'slide1':
                        contSlide=1;
                        document.getElementById('slide1').classList.add('botonActual');
                        document.getElementById('slide2').classList.remove('botonActual');
                        document.getElementById('slide3').classList.remove('botonActual');
                        document.getElementById('slide4').classList.remove('botonActual');


                        document.getElementById('slideImagen1').classList.remove('noDisplay');
                        document.getElementById('slideImagen2').classList.add('noDisplay');
                        document.getElementById('slideImagen3').classList.add('noDisplay');
                        document.getElementById('slideImagen4').classList.add('noDisplay');

                        
                        document.getElementById('tituloCuadroOscuro').textContent='Welcome to happy paws';
                        document.getElementById('tituloCuadroOscuro2').textContent='Welcome to happy paws';
                        document.getElementById('botonCuadroOscuro').textContent='our services';

                        document.getElementById('textoCuadroOscuro').textContent="We offer all the best quality product and services for your adorable pets";

                        

                        break;
                case 'slide2':
                        contSlide=2;
                        document.getElementById('slide2').classList.add('botonActual');
                        document.getElementById('slide1').classList.remove('botonActual');
                        document.getElementById('slide3').classList.remove('botonActual');
                        document.getElementById('slide4').classList.remove('botonActual');


                        document.getElementById('slideImagen2').classList.remove('noDisplay');
                        document.getElementById('slideImagen1').classList.add('noDisplay');
                        document.getElementById('slideImagen3').classList.add('noDisplay');
                        document.getElementById('slideImagen4').classList.add('noDisplay');

                        document.getElementById('tituloCuadroOscuro').textContent='Enjoy our daily offers';
                        document.getElementById('tituloCuadroOscuro2').textContent='Enjoy our daily offers';

                        document.getElementById('botonCuadroOscuro').textContent='our offers';

                        document.getElementById('textoCuadroOscuro').textContent=" we have great offers with amazing prices every week,check it out today";


                        break;
                case 'slide3':

                contSlide=3;
                        document.getElementById('slide3').classList.add('botonActual');
                        document.getElementById('slide2').classList.remove('botonActual');
                        document.getElementById('slide1').classList.remove('botonActual');
                        document.getElementById('slide4').classList.remove('botonActual');


                        document.getElementById('slideImagen3').classList.remove('noDisplay');
                        document.getElementById('slideImagen2').classList.add('noDisplay');
                        document.getElementById('slideImagen1').classList.add('noDisplay');
                        document.getElementById('slideImagen4').classList.add('noDisplay');

                        document.getElementById('tituloCuadroOscuro').textContent ='We take care of oyur pet';
                        document.getElementById('tituloCuadroOscuro2').textContent ='We take care of oyur pet';

                        document.getElementById('botonCuadroOscuro').textContent='more obout us';

                        document.getElementById('textoCuadroOscuro').textContent="Discover the amazing health services that we can offer to your pets";

                        break;

                case 'slide4':
                        contSlide=4;
                        document.getElementById('slide4').classList.add('botonActual');
                        document.getElementById('slide2').classList.remove('botonActual');
                        document.getElementById('slide3').classList.remove('botonActual');
                        document.getElementById('slide1').classList.remove('botonActual');


                        document.getElementById('slideImagen4').classList.remove('noDisplay');
                        document.getElementById('slideImagen2').classList.add('noDisplay');
                        document.getElementById('slideImagen3').classList.add('noDisplay');
                        document.getElementById('slideImagen1').classList.add('noDisplay');

                        document.getElementById('tituloCuadroOscuro').textContent='Adopt A Pet';
                        document.getElementById('tituloCuadroOscuro2').textContent='Adopt A Pet';

                        document.getElementById('botonCuadroOscuro').textContent='adopt today';
                       
                        document.getElementById('textoCuadroOscuro').textContent="we have many adorable pets whe need a home, share the love , adopt";

                       
                        break;

                default:
                        break;
        }
}