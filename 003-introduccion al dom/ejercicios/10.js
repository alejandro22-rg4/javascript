// EJEMPLO: este código identifica los elementos que usarás.
const boton = document.querySelector("#mostrar");
const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
boton.addEventListener("click", function () {
  nombreProducto.textContent = "Teclado mecánico";
  precioProducto.textContent = "Precio: $45.00";
  nombreProducto.style.color = "darkgreen";
  console.log("Ficha actualizada");
});

// TAREA 1: Agrega un evento click al botón, como en el ejercicio 08.
// TAREA 2: Dentro del evento cambia el nombre a "Teclado mecánico".
// TAREA 3: Cambia el precio a "Precio: $45.00".
// TAREA 4: Cambia el color del título a "darkgreen".
// TAREA 5: Muestra "Ficha actualizada" en consola después del clic.
