// LABORATORIO 2: Organizar codigo en funciones
const nombres = ["Mouse", "Teclado", "Monitor"];
const precios = [12, 20, 130];
const mostrarProductos = () => {
  console.log("Productos disponibles:");
  for (let i = 0; i < nombres.length; i++) {
    console.log(`${nombres[i]} - $${precios[i]}`);
  }
};
const buscarProducto = (nombre) => {
  const index = nombres.findIndex(producto => producto.toLowerCase() === nombre.toLowerCase());
  if (index !== -1) {
    console.log(`El producto "${nombres[index]}" fue encontrado con precio $${precios[index]}.`);
  } else {
    console.log(`El producto "${nombre}" no se encuentra en el inventario.`);
  }
};
const calcularTotal = () => {
  let total = 0;
  for (const precio of precios) {
    total += precio;
  }
  console.log("Total de precios:", total);
};
mostrarProductos();
buscarProducto("teclado");
calcularTotal();



// TAREA: crea mostrarProductos(), buscarProducto(nombre) y calcularTotal().
// TAREA: llama a las tres funciones para probarlas.
