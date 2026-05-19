function menorEdad(){

    let nombre1 =
    document.getElementById("nombre1").value;

    let edad1 =
    parseFloat(document.getElementById("edad1").value);

    let nombre2 =
    document.getElementById("nombre2").value;

    let edad2 =
    parseFloat(document.getElementById("edad2").value);

    let nombre3 =
    document.getElementById("nombre3").value;

    let edad3 =
    parseFloat(document.getElementById("edad3").value);

    let menor = nombre1;
    let edadMenor = edad1;

    if(edad2 < edadMenor){

        menor = nombre2;
        edadMenor = edad2;

    }

    if(edad3 < edadMenor){

        menor = nombre3;
        edadMenor = edad3;

    }

    document.getElementById("resultado").innerHTML =
    "Persona menor: " + menor +
    "<br>Edad: " + edadMenor;

}