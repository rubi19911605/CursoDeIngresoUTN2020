/* Al ingresar una edad solo debemos informar 
si la persona NO es adolescente. */

function mostrar()
{
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);


    if (edad < 13 || edad > 17) {

        alert("Tiene " + edad + " años, no es adolescente");
    }


}//FIN DE LA FUNCIÓN