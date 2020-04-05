/* Al presionar el botón pedir números hasta que el usuario quiera, 
		mostrar:
		1-Suma de los negativos. 
		2-Suma de los positivos. 
		3-Cantidad de positivos. 
		4-Cantidad de negativos. 
		5-Cantidad de ceros. 
		6-Cantidad de números pares. 
		7-Promedio de positivos. 
		8-Promedios de negativos. 
		9-Diferencia entre positivos y negativos, (positvos-negativos). */
		
		function mostrar() {

	var numero;
	var cantCeros;
	var sumaPositvo;
	var cantPosivivo;
	var promedioPositivo;
	var sumaNegativo;
	var cantNegativo;
	var diferencia;
	var promedioNegativo;
	var contadorPares;

	cantPosivivo = 0;
	sumaPositvo = 0;
	cantNegativo = 0;
	sumaNegativo = 0;
	cantCeros = 0;
	contadorPares = 0;

	do {

		numero = prompt("ingrese un número.");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Reingrese un número.");
			numero = parseInt(numero);
		}
		if (numero < 0) {
			sumaNegativo = sumaNegativo + numero;
			cantNegativo++
		}
		else
			if (numero > 0) {
				sumaPositvo = sumaPositvo + numero;
				cantPosivivo++;
			}
			else
				cantCeros++;

		if (numero % 2 == 0 && numero!=0) {
			contadorPares++;
		}

		seguir = prompt("¿Desea seguir ingresando numeros?");
	} while (seguir == "s");

	promedioPositivo = sumaPositvo / cantPosivivo;
	promedioNegativo = sumaNegativo / cantNegativo;
	diferencia = cantPosivivo - cantNegativo;


	document.write("1 - Suma de los negativos: " + sumaNegativo + "</br>");
	document.write("2 - Suma de los positivos: " + sumaPositvo + "</br>");
	document.write("3 - Cantidad de positivos: " + cantPosivivo + "</br>");
	document.write("4 - Cantidad de negativos: " + cantNegativo + "</br>");
	document.write("5 - Cantidad de ceros: " + cantCeros + "</br>");
	document.write("6 - Cantidad de números pares: " + contadorPares + "</br>");
	document.write("7 - Promedios de positivos: " + promedioPositivo + "</br>");
	document.write("8 - Promedios de negativos: " + promedioNegativo + "</br>");
	document.write("9 - Diferencia entre positivos y negativos: " + diferencia + "</br>");


}//FIN DE LA FUNCIÓN