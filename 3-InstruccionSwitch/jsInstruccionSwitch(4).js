/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

function mostrar() {

    var mes;

    mes = document.getElementById("mes").value;

    switch (mes) {

        case "Febrero":
            alert("El mes tiene 28 días.");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":

            alert("El mes tiene 30 días.");
            break;
        default:
            alert("El mes tiene 31 días.");

    }

}//FIN DE LA FUNCIÓN