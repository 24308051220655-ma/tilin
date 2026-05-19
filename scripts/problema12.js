function calcularSueldo(){

    let horas =
    parseFloat(document.getElementById("horas").value);

    let pago =
    parseFloat(document.getElementById("pago").value);

    let sueldo;

    if(horas <= 40){

        sueldo = horas * pago;

        document.getElementById("resultado").textContent =
        "Sueldo: $" + sueldo.toFixed(2);

    }

    else if(horas <= 45){

        let extrasDobles = horas - 40;

        sueldo =
        (40 * pago) +
        (extrasDobles * pago * 2);

        document.getElementById("resultado").textContent =
        "Sueldo: $" + sueldo.toFixed(2);

    }

    else if(horas <= 50){

        let extrasDobles = 5;

        let extrasTriples = horas - 45;

        sueldo =
        (40 * pago) +
        (extrasDobles * pago * 2) +
        (extrasTriples * pago * 3);

        document.getElementById("resultado").textContent =
        "Sueldo: $" + sueldo.toFixed(2);

    }

    else{

        document.getElementById("resultado").textContent =
        "No está permitido trabajar más de 50 horas";

    }

}