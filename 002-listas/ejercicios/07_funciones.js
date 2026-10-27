// LABORATORIO 2: Funciones y return
// Ejemplo:
function multiplicar(a, b) { return a * b; }
console.log(multiplicar(3, 4));
const subtotal =multiplicar(12,3);
console.log("subtotal:",subtotal);
const descuento = 0.1;
function aplicardescuento(subtotal,porcentaje){
    return subtotal - (subtotal*porcentaje);
}
const total = aplicardescuento(subtotal,descuento);
console.log("total con descuento:",total);
// TAREA: crea calcularSubtotal(precio, cantidad).
// TAREA: crea aplicarDescuento(subtotal, porcentaje).
