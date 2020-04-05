/* al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados. */

function mostrar() {

    var numero;
    var cantnumeropar;
    cantnumeropar=0;

    numero = prompt("Ingrese un numero.");
    numero = parseInt(numero);

    while (isNaN(numero)) {
        numero = prompt("Reingrese un numero.");
        numero = parseInt(numero);
    }

    for (var i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            cantnumeropar++
            document.write("numero par = " + i + "</br>");
            
        }
    }

    document.write("la cantidad de numeros pares encontrados es: " + cantnumeropar + "</br>");



}//FIN DE LA FUNCIÓN