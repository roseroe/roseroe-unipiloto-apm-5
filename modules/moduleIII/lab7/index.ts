'use strict'; //usar javascript de manera mas limpia

var my_array: Array<number> = [1,2,3,4,5];

var other_array: Array<any> = ["array", 3, 5, 6, [1,2,3,4]];

var tasks: Array<number> = [1,3,4,5];

//funcion parametros tipo de dato
function greeter(person: Array<string>){
    return person;
}

var user: Array<string> = ["1","32"];

console.log(greeter(user));
var a: string = '2' ;
