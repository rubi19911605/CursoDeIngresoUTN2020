/* al presionar el botón repetir el pedido de número 
hasta que ingresemos el 9. */

function mostrar() {

    var numero;

    numero = prompt("Ingrese un numero.");
    numero = parseInt(numero);

    while (isNaN(numero)) {
        numero = prompt("Reingrese un numero.");
        numero = parseInt(numero);
    }
    for (var num = 0; num = numero; num++) {
        if (num != 9) {
            numero = prompt("Ingrese un numero.");
            numero = parseInt(numero);
            while (isNaN(numero)) {
                numero = prompt("Reingrese un numero.");
                numero = parseInt(numero);
            }
        } else
            if (num == 9) {
                alert("por fin ingresó el numero 9");
                break;
            }
    }
}//FIN DE LA FUNCIÓN