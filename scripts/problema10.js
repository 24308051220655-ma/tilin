function destinoVacaciones(){

    let dinero =
    parseFloat(document.getElementById("dinero").value);

    let costo =
    parseFloat(document.getElementById("costo").value);

    let mexico =
    750 * 2 * costo;

    let pv =
    800 * 2 * costo;

    let acapulco =
    1200 * 2 * costo;

    let cancun =
    1800 * 2 * costo;

    let destino;

    if(dinero >= cancun){

        destino = "Cancún";

    }

    else if(dinero >= acapulco){

        destino = "Acapulco";

    }

    else if(dinero >= pv){

        destino = "Puerto Vallarta";

    }

    else if(dinero >= mexico){

        destino = "México";

    }

    else{

        destino = "Quedarse en casa";

    }

    document.getElementById("resultado").textContent =
    "Destino: " + destino;

}