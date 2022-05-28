window.addEventListener("load", iniciarf)
function iniciarf(){
    //Capturar el elemnto HTML con el id costop
    vcosto = document.getElementById("costop");
    //Capturar el elemnto HTML con el id porcentajev
    vporcentaje = document.getElementById("porcentajev");
    //Prepara el evento input del objeto vcosto
    vcosto.addEventListener("input", mostrarpventa);
    vporcentaje.addEventListener("input", mostrarpventa);
    vimage.addEventListener("input", mostrarImagen);
}
function calcularPorcentaje(costof, porcentajef) {
    //Realizar el calculo del porcentaje
    let TantoTotal = costof * (porcentajef / 100);
    //Calcular el precio de venta
    let PVenta = parseFloat(costof) + parseFloat(TantoTotal);
    //Retornar el presio de venta a la funcion
    return PVenta;
}
function mostrarpventa() {
    //Si el costo y el porcentaje es distinto e vacio entonces 
    if (vcosto.value !="" && vporcenataje.value !="") {
        //LLamar a la funcion calcularporcentake y almacenar el
        //resultado en la variable calculo
        let calculo = calcularPorcentaje(vcosto.value, vporcenataje.value);
        //Mostrar el precio de venta
        document.getElementById("pventa").value = "";
    } 
}
function mostrarImagen() {
    /*Asiganr la etiqueta img a la variable verimagen*/
    var verimagen = document.querySelector('img');
    /*Asignar el input de tipo file a la variable archivof*/ 
    var archivof = document.querySelector('input[type=file]').files[0];
    /*Asignar el archivo leido a la variable leerarchivo*/
    var leerarchivo = new FileReader();
    /*Ejecutar la funcion anonima cuando el archivo se carge*/
    leerarchivo.onloadend = function (){
    /*Asignar la direccion del arcivo al aributo src de img
    para mostrar la imagen cargada */
    verimagen.src = leerarchivo.result;
    } 
    /* si existen datos en la variable archivof entoces*/
    if(archivof) {
        /*Asignar la direccion de la variale archivof a la variable leerarchivo */
        leerarchivo.readAsDataURL(archivof);
    } else { /*si no existe datos en la variable leeracivo, entonces asignar
    un valor vacio al atricuto src de img */
    verimagen.src = "";

    }
}