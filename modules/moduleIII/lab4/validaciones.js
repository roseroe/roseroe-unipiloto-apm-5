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

function cargar()
{
    //console.log("La fecha calculada es:" + fechaHoy);
    alert("La fecha calculada es:" + fechaHoy);
}

function Person(nom1, nom2, ape1, ape2) {
    this.nom1 = first;
    this.nom2 = last;
    this.ape1 = age;
    this.ape2 = eyecolor;
}