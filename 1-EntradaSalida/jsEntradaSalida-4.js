/* 
Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'id'   id="elNombre"
al presionar el botón 'mostrar'
*/
function mostrar()
{

var nombre;

nombre = prompt ("ingrese su nombre");

document.getElementById("elNombre").value=nombre;

}

