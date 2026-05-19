function calcularBeca(){

    let edad =
    parseFloat(document.getElementById("edad").value);

    let promedio =
    parseFloat(document.getElementById("promedio").value);

    let resultado;

    if(edad > 18){

        if(promedio >= 9){

            resultado = "Beca de $2000";

        }

        else if(promedio >= 7.5){

            resultado = "Beca de $1000";

        }

        else if(promedio >= 6){

            resultado = "Beca de $500";

        }

        else{

            resultado =
            "Carta de invitación para estudiar más";

        }

    }

    else{

        if(promedio >= 9){

            resultado = "Beca de $3000";

        }

        else if(promedio >= 8){

            resultado = "Beca de $2000";

        }

        else if(promedio >= 6){

            resultado = "Beca de $100";

        }

        else{

            resultado =
            "Carta de invitación para estudiar más";

        }

    }

    document.getElementById("resultado").textContent =
    resultado;

}