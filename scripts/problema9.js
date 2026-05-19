function calcularPoliza(){

    let tipo =
    document.getElementById("tipo").value;

    let alcohol =
    document.getElementById("alcohol").value;

    let lentes =
    document.getElementById("lentes").value;

    let enfermedad =
    document.getElementById("enfermedad").value;

    let edad =
    parseFloat(document.getElementById("edad").value);

    let base;
    let total;

    if(tipo == "A" || tipo == "a"){

        base = 1200;

    }

    else{

        base = 950;

    }

    total = base;

    if(alcohol == "si"){

        total += base * 0.10;

    }

    if(lentes == "si"){

        total += base * 0.05;

    }

    if(enfermedad == "si"){

        total += base * 0.05;

    }

    if(edad > 40){

        total += base * 0.20;

    }

    else{

        total += base * 0.10;

    }

    document.getElementById("resultado").textContent =
    "Costo total: $" + total.toFixed(2);

}