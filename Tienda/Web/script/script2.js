function validarFormulario() {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    if (nombre === "" || correo === "" || contrasena === "") {
        alert("Campos obligatorios");
        return false;
    } else {
        return true;
    }
}

function cambiarImagen($ID) {
    var elemento = document.getElementById($ID);
    var barra=document.getElementById("pasos-barra");

    // if (elemento.classList.value == "bi-circle") {
    //     elemento.classList.add("bi-check-circle");
    //     elemento.classList.remove("bi-circle");
    // } else {
    //     elemento.classList.add("bi-circle");
    //     elemento.classList.remove("bi-check-circle");
    // }

    switch ($ID) {
        case "C1":
        document.getElementById("textoh1").textContent="Applicant Data";
        document.getElementById("textop").textContent="Please take a selfie with your document so that it s clearly visible anddose not cover your face.";
         
        var sel="C";

        //bucle para quitar el check a los circulos posteriores
        for (let j = 5; j >1; j--){
            sel+=j
            document.getElementById(sel).classList.add("bi-circle");
            document.getElementById(sel).classList.remove("bi-check-circle");
            sel="C";
        }
        document.getElementById("relleno-barra-progreso").style.width='20%';
        barra.textContent="1 of 5 completed";
        break;

        case "C2":
            var sel="C";
            //bucle para poner el check al circulo anteriores
            for (let index = 1; index <= 2; index++) {
                sel+=index;
                console.log(sel);
                document.getElementById(sel).classList.add("bi-check-circle");
                document.getElementById(sel).classList.remove("bi-circle"); 
                sel="C";          
            }
               //bucle para quitar el check a los circulos posteriores
            for (let j = 5; j >2; j--){
                sel+=j
                document.getElementById(sel).classList.add("bi-circle");
                document.getElementById(sel).classList.remove("bi-check-circle");
                sel="C";
            }
          
            document.getElementById("textoh1").textContent="Tax Residency";
            document.getElementById("textop").textContent="Tell us about your Tax details. This is important for both for us";
            document.getElementById("relleno-barra-progreso").style.width='40%';
            barra.textContent="2 of 5 completed";
            break;

        case "C3":
            var sel="C";
              //bucle para poner el check al circulo anteriores
            for (let index = 1; index <=3; index++) {
                sel+=index;
                console.log(sel);
                document.getElementById(sel).classList.add("bi-check-circle");
                document.getElementById(sel).classList.remove("bi-circle"); 
                sel="C";          
            }
   //bucle para quitar el check a los circulos posteriores
            for (let j = 5; j >3; j--){
                sel+=j
                document.getElementById(sel).classList.add("bi-circle");
                document.getElementById(sel).classList.remove("bi-check-circle");
                sel="C";
            }

            document.getElementById("textoh1").textContent="Indentity Documents";
            document.getElementById("textop").textContent="Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.";
            document.getElementById("relleno-barra-progreso").style.width='60%';
            barra.textContent="3 of 5 completed";
            break;

        case "C4":
            var sel="C";
              //bucle para poner el check al circulo anteriores
            for (let index = 1; index <= 4; index++) {
                sel+=index;
                console.log(sel);
                document.getElementById(sel).classList.add("bi-check-circle");
                document.getElementById(sel).classList.remove("bi-circle");
                

                // document.getElementById(sel).classList.toggle("bi-check-circle");
                sel="C";          
            }
   //bucle para quitar el check a los circulos posteriores
            for (let j = 5; j >4; j--){
                sel+=j
                document.getElementById(sel).classList.add("bi-circle");
                document.getElementById(sel).classList.remove("bi-check-circle");
                sel="C";
            }
            document.getElementById("textoh1").textContent="Indentity Documents";
            document.getElementById("textop").textContent="Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.";
            document.getElementById("relleno-barra-progreso").style.width='80%';
            barra.textContent="4 of 5 completed";
            break;

        case "C5":
            var sel="C";
              //bucle para poner el check al circulo anteriores
            for (let index = 1; index <= 5; index++) {
                sel+=index;
                console.log(sel);
                document.getElementById(sel).classList.add("bi-check-circle");
                document.getElementById(sel).classList.remove("bi-circle"); 
                sel="C";          
            }
            document.getElementById("textoh1").textContent="Submit Final";
            document.getElementById("textop").textContent="Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.";

            document.getElementById("relleno-barra-progreso").style.width='100%';
            barra.textContent="5 of 5 completed";

            break;
        default:
            break;
    }
}