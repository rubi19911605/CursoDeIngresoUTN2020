/* al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no. */

function mostrar() {

    var numero;
    var numPrimo;
    numPrimo = 0;

    numero = prompt("Ingrese un numero mayor a 1.");
    numero = parseInt(numero);

    while (isNaN(numero) || numero < 1) {
        numero = prompt("Reingrese un numero mayor a 1.");
        numero = parseInt(numero);
    }

    for (var i = 1; i <= numero; i++) {

        if (i % 2 == 0 && i%i==0 && i%1==0) {
            document.write(i + "  No es un numero Primo  </br>");
        }
        else
        numPrimo++
            document.write(i + "  Es un numero Primo  </br>");

    }




}//FIN DE LA FUNCIÓN