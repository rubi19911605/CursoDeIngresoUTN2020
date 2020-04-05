/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar() {
	var maximo = 10;
	var minimo = 1;
	var nota;

	nota = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (nota >= 9) {
		alert("EXCELENTE su nota es: " + nota);
	}
	else
		if (nota >= 4) {
			alert("APROBÓ su nota es: " + nota);
		}
		else
			alert("Vamos, la proxima se puede, su nota es: " + nota);

}//FIN DE LA FUNCIÓN