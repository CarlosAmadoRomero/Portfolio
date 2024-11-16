// var mas=30;
function botones(boton) {
    let parrafo = document.getElementById('parrafo');
    let style = getComputedStyle(parrafo);
    var size = style.getPropertyValue('font-size');

    let cajaBotones = document.querySelectorAll('#boton');
    let numero = size.split('px');
    let numeroInt=parseInt(numero[0]);
    
    switch (boton) {
        case "agrandar":
            numeroInt+=10;
            parrafo.style.fontSize=numeroInt+'px';
            break;
        case "reducir":
            if (numeroInt>5) {
                numeroInt-=5;
            }
            parrafo.style.fontSize=numeroInt+'px';
            break;
        case "original":
            parrafo.style.fontSize = "20px";
            break;

        case "modificar":
            // cajaBotones.forEach(element => {
            //     element.classList.toggle('boton-modificado');
            // });

            let botones=document.querySelectorAll("button");
            botones.forEach(boton => {
                boton.style.backgroundColor="green";
            });
            break;

        case "prompt":
            let valor = prompt("Escribe nuevo texto");
            parrafo.textContent = valor;
            break;

        case "cambiar":

            parrafo.style.fontFamily = 'arial';
            parrafo.style.color='black'
            break;

        case "estilo1":

            parrafo.style.fontFamily = 'times-new-roman';
            parrafo.style.color='green';
            break;
        case "estilo2":

            parrafo.style.fontFamily = '"Courier New", Courier, monospace';
            parrafo.style.color='red';
            break;
        case "estilo3":

            parrafo.style.fontFamily = 'cursive';
            parrafo.style.color='purple';
            break;

        default:
            break;
    }
}