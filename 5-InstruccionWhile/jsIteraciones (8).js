/* Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos. */


function mostrar() {

	var contador;
	var sumaPositivos;
	var multiplicacionNegativos;
	var seguir;
	var numero;


	contador = 0
	sumaPositivos = 0
	multiplicacionNegativos = 1


	do {
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Reingrese un numero.");
			numero = parseInt(numero);
		}

		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		} else
			multiplicacionNegativos = multiplicacionNegativos * numero;
		contador++;

		seguir = prompt("Desea seguir ingresando numeros?");
	} while (seguir == "s");
	if (contador == 0) {
		multiplicacionNegativos = 0;
	}

	document.getElementById('suma').value = sumaPositivos;
	document.getElementById('producto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN