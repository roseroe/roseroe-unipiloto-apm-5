function calcularHora(){
   document.getElementById('horaLocal').innerHTML  = Date();
}
function calcularEdad(){
	var anioEdad = document.getElementById('edad').value;
    if(isNaN(anioEdad))
    {
    	alert("El valor debe ser numerico");
    	return;
    }
    var varEdad = 2016-anioEdad;
	document.getElementById('lbledad').innerHTML=varEdad;
}