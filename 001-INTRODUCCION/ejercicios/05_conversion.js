// Conversión de texto a números
const entradaPrecio = "24.50";
const entradaCantidad = "3";
console.log("Concatenación:", entradaPrecio + entradaCantidad);
numprecio=Number(entradaPrecio);
numcantidad=Number(entradaCantidad);
const total=numprecio * numcantidad;
console.log("total:",total);
numsaludo=Number("hola");
console.log("¿es nan",Number.isNaN(numsaludo));
// TAREA 1: Convierte el precio con Number().
// TAREA 2: Convierte la cantidad con Number().
// TAREA 3: Calcula el total correctamente.
// TAREA 4: Prueba Number("hola") y usa Number.isNaN() para detectar el error.
