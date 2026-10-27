// LABORATORIO 2: Buscar un producto
const productos = ["Teclado", "Mouse", "Monitor", "Webcam"];
const buscado = "  mouse ";
const encontrado = productos.some(producto => producto.trim().toLowerCase() === buscado.trim().toLowerCase());
if (encontrado) {
  console.log(`El producto "${buscado.trim()}" fue encontrado en el inventario.`);
} else {
  console.log(`El producto "${buscado.trim()}" no se encuentra en el inventario.`);
}
   
// TAREA: recorre productos y compara usando trim() y toLowerCase().
// Muestra si fue encontrado o no.
