// Entradas con prompt y validación
// Ejecuta este archivo desde index.html en un navegador.
const numero = prompt("¿Cuántos productos deseas comprar?");
console.log("Ingresaste:", numero);
if (Number.isNaN(Number(numero))) {
  console.log("Error: No es un número válido.");
} else if (Number(numero) <= 0 || !Number.isInteger(Number(numero))) {
  console.log("Error: Debe ser un número entero mayor que 0.");
} else {
  const total = Number(numero) * 12;
  console.log("Total a pagar: $" + total.toFixed(2));
}

// TAREA 1: Convierte el dato a número.
// TAREA 2: Comprueba si es un número válido, entero y mayor que 0.
// TAREA 3: Muestra un mensaje de error si no es válido.
// TAREA 4: Si es válido, calcula el total a $12 por unidad.
