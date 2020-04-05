/* Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio. */
function mostrar() {

	var numero;
	var contador;
	var acumulador;
	var promedio;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Reingrese un numero");
			numero = parseInt(numero);
		}
		/*La variable acumulador va a ir en este 
		  caso sumando lo que entre por variable numero*/
		acumulador = numero + acumulador;

		//Este es el contador
		contador++;
	}
	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN