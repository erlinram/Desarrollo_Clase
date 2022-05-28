// - Elaborar un programa que permita identificar si un numero entero es perfecto o no.
var numero = 28
var div = 0
for (var i=1; i<numero; i++){
    if (numero % i == 0) div += i;
}
if (numero == div){                                                                                 
    console.log("el numero es perfecto")
} else {
    console.log("el numero no es perfecto")
}