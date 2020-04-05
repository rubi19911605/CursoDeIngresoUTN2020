/*Debemos lograr tomar el importe por ID ,
 id="importe"
 id="resultado"
transformarlo a entero (parseInt), luego
mostrar el importe con un decuento del 25 %. 
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

    var importe;
    var descuento;


    importe = document.getElementById("importe").value;
    importe = parseInt(importe);

    descuento = importe * 25/ 100;

    Resultado = importe - descuento;

    (document.getElementById("resultado").value) = Resultado;



}
