function resolver(id, res) {

    switch (id) {
        case '1':
        switch (res) {
                case 'V':document.getElementById("S1").style.color='green';break;
                case 'F':document.getElementById("S1").style.color='red';break;
                case 'NSNC': document.getElementById("S1").style.color='rgb(182, 182, 10)'; break;
        }
        document.getElementById("S1").textContent="Solucion: Verdadero";
            break;

        case '2':
            switch (res) {
                case 'V':document.getElementById("S2").style.color='green';break;
                case 'F':document.getElementById("S2").style.color='red';break;
                case 'NSNC': document.getElementById("S2").style.color='rgb(182, 182, 10)'; break;
        }   
        document.getElementById("S2").textContent="Solucion: Verdadero";
            break;

        case '3':
            switch (res) {
                case 'V':document.getElementById("S3").style.color='red';break;
                case 'F':document.getElementById("S3").style.color='green';break;
                case 'NSNC': document.getElementById("S3").style.color='rgb(182, 182, 10)'; break;
        }
        document.getElementById("S3").textContent="Solucion: Falso";
            break;

        case '4':
            switch (res) {
                case 'V':document.getElementById("S4").style.color='red';break;
                case 'F':document.getElementById("S4").style.color='green';break;
                case 'NSNC': document.getElementById("S4").style.color='rgb(182, 182, 10)'; break;
        }
        document.getElementById("S4").textContent="Solucion: Falso";
            break;

        case '5':
            switch (res) {
                case 'V':document.getElementById("S5").style.color='green';break;
                case 'F':document.getElementById("S5").style.color='red';break;
                case 'NSNC': document.getElementById("S5").style.color='rgb(182, 182, 10)'; break;
        }
        document.getElementById("S5").textContent="Solucion: Verdadero";
            break;

        case '6':
            switch (res) {
                case 'V':document.getElementById("S6").style.color='green';break;
                case 'F':document.getElementById("S6").style.color='red';break;
                case 'NSNC': document.getElementById("S6").style.color='rgb(182, 182, 10)'; break;
        }
        document.getElementById("S6").textContent="Solucion: Verdadero";
            break;

        default:
            break;
    }
}
