/*MODULO III - LAB2:
Definición de Arrays y Operaciones
Desarrollado Por: Edison Rosero.*/

//Declaración de Variables:
var num1=0;
var num2=0;
var num3=0;
var num4=0;
var lista;

//["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


//Función que almacena los numeros ingresados en un arreglo:
function ordenar(){
	num1=2;
	num2=30;
	num3=7;
	num4=6;
	num5=1;
    lista = [num1, num2, num3, num4, num5];
    console.log("Lista sin ordenar: "+ lista);
    var i=0;
    var j=0;
    var temp=0;
    for (i=1; i<5; i++){
        for (j=0 ; j<4; j++){
            if (lista[j] > lista[j+1]){
                temp = lista[j];
                lista[j] = lista[j+1];
                lista[j+1] = temp;
            }
        }
    }
    console.log("Lista ordenada: "+lista);
}

ordenar();