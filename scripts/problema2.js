function calcularSueldo(){

    let horas =
    parseFloat(document.getElementById("horas").value);

    let pago =
    parseFloat(document.getElementById("pago").value);

    let sueldo;

    if(horas > 40){

        let extras = horas - 40;

        sueldo =
        (40 * pago) +
        (extras * pago * 2);

    }

    else{

        sueldo = horas * pago;

    }

    document.getElementById("resultado").textContent =
    "Sueldo semanal: $" + sueldo.toFixed(2);

}