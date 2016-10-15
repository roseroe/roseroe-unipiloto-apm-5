/*MODULO III - LAB1:
Definición de Variables y Comentarios
Desarrollado Por: Edison Rosero.*/

//Declaración de Variables:
var descripcion = "Bienvenido";
var nombre="";

//Función que brinda bienvenida al usuario:
function darBienvenida(){
   nombre = document.getElementById('nombre').value;
   alert(descripcion + " " + nombre)
}
