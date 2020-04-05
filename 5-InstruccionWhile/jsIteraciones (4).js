/* al presionar el botón pedir un número entre 0 y 9 inclusive. */

function mostrar() {

	var numero;

	numero = prompt("Ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while (isNaN(numero) || numero < 0 || numero > 10) {
		numero = prompt("Error reingrese un número entre 0 y 10.");
	}
	(document.getElementById("Numero").value) = numero;

}//FIN DE LA FUNCIÓN