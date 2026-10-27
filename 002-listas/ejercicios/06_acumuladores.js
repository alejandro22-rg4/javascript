// LABORATORIO 2: Total de una compra
const carrito = [15.5, 22, 8.5, 30];
let total = 0;
for (const precio of carrito){
    total +=precio;
}
const promedio = total /carrito.length;
console.log("total de la compra:",total);
console.log("promedio de precio:",promedio)
// TAREA: suma los precios con for...of y calcula el promedio.
