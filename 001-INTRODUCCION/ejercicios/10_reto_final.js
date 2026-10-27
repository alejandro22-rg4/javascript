// Reto desde cero: cotizador
// RETO FINAL: construye un cotizador de TechStore.
// Requisitos:
// 1. Solicitar con prompt() nombre, precio y cantidad del producto.
const nombre = prompt("Ingresa el nombre del producto:");
const precio = prompt("Ingresa el precio del producto:");
const cantidad = prompt("Ingresa la cantidad del producto:");
if (nombre === null || precio === null || cantidad === null) {
  console.log("Operación cancelada por el usuario.");
} else if (Number.isNaN(Number(precio)) || Number(precio) <= 0) {
  console.log("Error: El precio debe ser un número positivo.");
} else if (Number.isNaN(Number(cantidad)) || Number(cantidad) <= 0) {
  console.log("Error: La cantidad debe ser un número positivo.");
} else {
  const subtotal = Number(precio) * Number(cantidad);
  let descuento = 0;
   if (subtotal >= 100) {
    descuento = subtotal * 0.10;
  }
  
  const totalFinal = subtotal - descuento;
  
  console.log(`Producto: ${nombre}`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Descuento: $${descuento.toFixed(2)}`);
  console.log(`Total final: $${totalFinal.toFixed(2)}`);
}
// 2. Validar que precio y cantidad sean números positivos.
// 3. Calcular subtotal.
// 4. Aplicar 10% de descuento si subtotal >= 100.
// 5. Mostrar en consola nombre, subtotal, descuento y total final.
// 6. Mostrar valores monetarios con dos decimales.
// EXTRA: si el usuario cancela, mostrar un mensaje sin lanzar errores.
// Puedes consultar los ejercicios anteriores; no hay código resuelto aquí.
