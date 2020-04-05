/* al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados. */

function mostrar()
{

    var numero;
    var cantdivisores;
    cantdivisores=0;

    numero = prompt("Ingrese un numero.");
    numero = parseInt(numero);

    while (isNaN(numero)) {
        numero = prompt("Reingrese un numero.");
        numero = parseInt(numero);
    }

    for (var i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            cantdivisores++
            document.write("numero divisor = " + i + "</br>");
            
        }
    }

    document.write("la cantidad de numeros divisores encontrados es: " + cantdivisores + "</br>");


}//FIN DE LA FUNCIÓN