/* Al presionar el botón pedir un sexo
 'f' para femenino, 'm' para masculino. */
function mostrar() {

    var sexo;


    sexo = prompt("Ingrese el sexo femenino = f ó masculino = m .");

    while (!(isNaN(sexo)) || sexo != "f" && sexo != "m") {

        sexo = prompt("Reingrese el sexo femenino = f ó masculino = m .");
    }
    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN