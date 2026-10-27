// LABORATORIO 2: Modificar una lista
const productos = ["Mouse", "Teclado", "Monitor"];
console.log("Inicial:", productos);
productos.push("Webcam");
console.log("agregar Webcam:",productos);
productos.pop();
console.log("eliminando el ultimo producto:",productos);
productos[0] = "audifonos";
console.log("reemplazado mouse por audifonos:",productos);
// TAREA: agrega Webcam, elimina el ultimo y reemplaza Teclado por Audifonos.
