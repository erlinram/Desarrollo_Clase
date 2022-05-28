// - En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
// dependerá del número de computadoras que compre.
// Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra;
// si el número de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de 
// descuento;
// y si son 10 o más se les da un 40% de descuento.
// El precio de cada computadora es de $11,000.
// Preguntar al usuario cuantas computadoras va a comprar y mostrar un console.log el valor a pagar.

var precio = 22000
var cantidad = 6
var total 
if (cantidad < 5){
    total = 0.10
}
if (cantidad >= 5 <10){
    total = 0.20
}
if (cantidad >= 10){
    total = 0.40
}

console.log("Su total es de Lps.", ((precio * cantidad) - ((precio * cantidad) * (total))))