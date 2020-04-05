/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */

function mostrar()
{
	
	var maximo = 10;
	var minimo = 1;
	
	
	alert (Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo));	

}//FIN DE LA FUNCIÓN