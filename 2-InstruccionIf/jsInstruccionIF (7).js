/* Al ingresar una edad menor a 18 años 
id="edad"
y un estado civil distinto a "Soltero", 
id="estadoCivil"
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.' */


function mostrar() {
    var edad;
    var EstadoCivil;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    EstadoCivil = document.getElementById("estadoCivil").value;


    if (edad < 18 && EstadoCivil!="Soltero") {

        alert("Es muy pequeño para NO ser soltero");
    }


}//FIN DE LA FUNCIÓN