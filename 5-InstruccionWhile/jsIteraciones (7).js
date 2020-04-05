/* Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio. */
function mostrar() {

	var numero;
	var acumulador;
	var promedio;
	var contador;
	var seguir;

	contador = 0;
	acumulador = 0;


	do {

		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Reingrese un número.");
			numero = parseInt(numero);
		} 
		acumulador = acumulador + numero;
		contador++;
		seguir = prompt("¿Desea ingresar otro número?");
	}
	while (seguir == "s");

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN