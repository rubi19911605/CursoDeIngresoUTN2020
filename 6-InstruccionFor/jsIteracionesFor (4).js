/* al presionar el botón repetir hasta que utilizamos 'BREAK'. */

function mostrar() {

    for (var i = 0; i < 50; i++) {
        if (i == 10) {
            break
        }
        document.write(i+"</br>");
    }


}//FIN DE LA FUNCIÓN