function calcularBono(){

    let sueldo =
    parseFloat(document.getElementById("sueldo").value);

    let antiguedad =
    parseFloat(document.getElementById("antiguedad").value);

    let bonoAntiguedad = 0;
    let bonoSueldo = 0;
    let bonoFinal;

    if(antiguedad > 2 && antiguedad < 5){

        bonoAntiguedad = sueldo * 0.20;

    }

    else if(antiguedad >= 5){

        bonoAntiguedad = sueldo * 0.30;

    }

    if(sueldo < 1000){

        bonoSueldo = sueldo * 0.25;

    }

    else if(sueldo <= 3500){

        bonoSueldo = sueldo * 0.15;

    }

    else{

        bonoSueldo = sueldo * 0.10;

    }

    if(bonoAntiguedad > bonoSueldo){

        bonoFinal = bonoAntiguedad;

    }

    else{

        bonoFinal = bonoSueldo;

    }

    document.getElementById("resultado").textContent =
    "Bono final: $" + bonoFinal.toFixed(2);

}