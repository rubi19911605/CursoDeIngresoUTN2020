/* Al ingresar una edad menor a 18 años 
id="edad"
y un estado civil distinto a "Soltero", NO HACER NADA,
    id="estadoCivil"
    "Soltero"> Soltero 
    "Casado"> Casado 
    "Divorciado"> Divorciado
pero si no es asi, y es soltero y no es menor,
 mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar() {

    var edad;
    var estadocivil;


    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    estadocivil = document.getElementById("estadoCivil").value;

    //edad menor a 18 años - estado civil distinto a "Soltero", NO HACER NADA,
    if (edad < 18 && estadocivil == ("Casado") || estadocivil == ("Divorciado")) {
    }
    //pero si no es asi, y es soltero y no es menor - mostrar el mensaje: 'Es soltero y no es menor
    else
        if (edad >= 18 && estadocivil == ("Soltero")) {

            alert("Es soltero y no es menor");
        }



}//FIN DE LA FUNCIÓN