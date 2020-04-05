/* Al ingresar una edad que sea igual a 15, 
edad" id="edad">
mostrar el mensaje "niña bonita". */

function mostrar() {
    //tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);


    if (edad == 15) {

        alert("niña bonita");
    }

}//FIN DE LA FUNCIÓN