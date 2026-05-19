function verificarVoto(){

    let edad =
    parseFloat(document.getElementById("edad").value);

    if(edad >= 18){

        document.getElementById("resultado").textContent =
        "Puede votar";

    }

    else{

        document.getElementById("resultado").textContent =
        "No puede votar";

    }

}