/* Al ingresar una edad debemos informar 
si la persona es adolescente, edad entre 13 y 17 años (inclusive) . */

function mostrar() {
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);


    if (edad >= 13 && edad <= 17) {

        alert("Tiene " + edad + " años, es adolescente");
    }


}
    //FIN DE LA FUNCIÓN