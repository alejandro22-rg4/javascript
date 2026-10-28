const productos = [
  { nombre: "Teclado", precio: 25 },
  { nombre: "Mouse", precio: 12 },
  { nombre: "Audífonos", precio: 30 }
];
const catalogo = document.querySelector("#catalogo");
const resumen = document.querySelector("#resumen");
const formProducto = document.querySelector("#formProducto");
const inputNombre = document.querySelector("#nombreProducto");
const inputPrecio = document.querySelector("#precioProducto");
const buscar = document.querySelector("#buscar");
const mensaje = document.querySelector("#mensaje");
function mostrarProductos(filtro = "") {
  catalogo.textContent = "";

  const texto = filtro.trim().toLowerCase();
  let cantidad = 0;
  let suma = 0;
  for (const producto of productos) {
    if (producto.nombre.toLowerCase().includes(texto)) {
      const item = document.createElement("li");
      item.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
      catalogo.append(item);

      cantidad++;
      suma += producto.precio;
    }
  }
  resumen.textContent = "Productos: " + cantidad + " | Total: $" + suma.toFixed(2);
}
formProducto.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = inputNombre.value.trim();
  const precio = Number(inputPrecio.value);
  const precioValido = inputPrecio.value.trim() !== "" && precio >= 0;

  if (nombre === "" || !precioValido) {
    mensaje.textContent = "Error: escribe un nombre y un precio válido (≥ 0).";
    return;
  }
  productos.push({ nombre: nombre, precio: precio });
  resumen.textContent = "Producto agregado: " + nombre;
  formProducto.reset();
  mostrarProductos(buscar.value);
});
buscar.addEventListener("input", function () {
  mostrarProductos(buscar.value);
});
mostrarProductos();

// TAREA 1: Crea la función mostrarProductos(filtro) que limpie #catalogo.
// TAREA 2: Recorre productos y crea un li por cada coincidencia.
// TAREA 3: Usa textContent para mostrar nombre y precio; NO uses innerHTML.
// TAREA 4: Muestra en #resumen cantidad y suma de precios de los visibles.
// TAREA 5: Escucha submit de #formProducto y valida nombre y precio.
// TAREA 6: Agrega productos al array y actualiza la lista sin recargar.
// TAREA 7: Escucha input en #buscar para filtrar en tiempo real.
// TAREA 8: Muestra los tres productos iniciales al abrir la página.
