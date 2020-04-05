/* al presionar el botón 
pedir la cantidad de veces que quiero repetir el mensaje 
"Hola UTN FRA" */


function mostrar() {

    var respuesta

    respuesta = prompt("¿cuantas veces quiere repetir el mensaje?");
    respuesta = parseInt(respuesta);

    while (isNaN(respuesta)) {

        respuesta = prompt("su respuesta debe ser un numero");
        respuesta = parseInt(respuesta);
    }


    for (var mensaje = 0; mensaje < respuesta; mensaje++) {

        document.write("Hola UTN FRA </br>");

    }





}//FIN DE LA FUNCIÓN