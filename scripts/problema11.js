function calcularBono(){

    let antiguedad =
    parseFloat(document.getElementById("antiguedad").value);

    let bono;

    if(antiguedad == 1){

        bono = 100;

    }

    else if(antiguedad == 2){

        bono = 200;

    }

    else if(antiguedad == 3){

        bono = 300;

    }

    else if(antiguedad == 4){

        bono = 400;

    }

    else if(antiguedad == 5){

        bono = 500;

    }

    else if(antiguedad > 5){

        bono = 1000;

    }

    else{

        bono = 0;

    }

    document.getElementById("resultado").textContent =
    "Bono: $" + bono;

}