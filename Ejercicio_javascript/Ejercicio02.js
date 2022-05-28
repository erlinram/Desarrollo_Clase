//Elaborar un programa que permita calcular la edad de una persona según el 
//año de nacimiento y el año actual.

var año_actual =2022;
var fecha_nac = 2009;
var edad = año_actual - fecha_nac;
if (edad >= 18){
    console.log("ES MAYOR DE EDAD");    
} else {
    console.log("Es menor de edad");
}