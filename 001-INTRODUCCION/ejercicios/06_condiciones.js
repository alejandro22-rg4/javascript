// Condicionales y descuentos
const totalCompra = 120;
if (totalCompra >= 100) {
  console.log("Compra con descuento");
} else {
  console.log("Compra sin descuento");
}
if(totalCompra >= 200){
  console.log("descuento del 15%");
} else if (totalCompra >= 100){
  console.log("descuento del 10%");
}else{
  console.log("sin descuento");
}
// TAREA 1: Usa if / else if / else para aplicar 15% si >= 200,
// 10% si >= 100 y 0% en los demás casos.
// TAREA 2: Calcula y muestra el valor final.
// TAREA 3: Prueba 50, 120 y 250.
