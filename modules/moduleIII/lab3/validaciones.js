/*MODULO III - LAB3:
Funciones anonimas y declaradas
Desarrollado Por: Edison Rosero.*/
var fechaHoy;

(function (){
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var f=new Date();
    var fechaActual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    alert("LA FECHA DE HOY ES:" + fechaActual);
    fechaHoy=fechaActual;
})();

function calcular()
{
    //console.log("La fecha calculada es:" + fechaHoy);
    alert("La fecha calculada es:" + fechaHoy);
}