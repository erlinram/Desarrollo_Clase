// - Un negocio de banquetes tiene la siguiente politica para definir el cobro por sus servicios:
//a) Los primeros 30 platillos se cobran a L. 150 c/u
//b) Por los siguientes 31 hasta 50 platillos se cobran a L. 125 c/u
//c) Los platillos que van desde el 51 hasta el 200 se cobran a L. 100 c/u
//d) Los platillos desde el numero 201 en delante se cobran a L. 75 c/u
//*Hacer un programa que muestre cuanto debe pagar un cliente dependiendo del numero de platillos 
//que este desea ordenar.
let cantidad = 200
let precio 
if (cantidad = 30){
    precio = 150
}  
if (cantidad >=31 && cantidad <= 50){
    precio = 125
}
if (cantidad > 51 && cantidad <= 200){
    precio = 100
}
if (cantidad > 201){
    precio = 75
}

console.log("El precio de cada plato es de: " ,cantidad )