/* Al ingresar una edad debemos informar 
si la persona es mayor de edad, sino informar que es un menor de edad. */


function mostrar()
{

var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);


    if (edad >=18) {

        alert("Tiene "+edad+ " años, es mayor de edad");
    }
    else {

        alert("Tiene "+edad+ " años, es menor de edad");

    }

    
    }
    //FIN DE LA FUNCIÓN