/* Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado. */
function mostrar() {


	var numero;
	var maximo;
	var minimo;
	var contador;
	var seguir;

	contador = 0;



	do {

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Reingrese un numero");
			numero = parseInt(numero);
		}
		if (contador == 0 || numero > maximo) {
			maximo = numero;
		}
		if (contador == 0 ||numero < minimo) {
			minimo = numero;
			contador++;
		}
		seguir = prompt("¿Desa seguir ingresando números?");
	} while (seguir == "s");


	(document.getElementById("minimo").value) = minimo;
	(document.getElementById("maximo").value) = maximo;


}//FIN DE LA FUNCIÓN