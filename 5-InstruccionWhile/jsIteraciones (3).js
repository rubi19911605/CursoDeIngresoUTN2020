/* al presionar el botón pedir la CLAVE (ayuda: es utn750) */

function mostrar() {

    var clave;

    clave = prompt("Ingrese el número clave.");
    clave = parseInt(clave);

    while (clave != "utn750") {
        clave = prompt("Reingrese el número clave.");
    }

}//FIN DE LA FUNCIÓN
