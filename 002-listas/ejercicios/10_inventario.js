// LABORATORIO 2: Sistema basico de inventario
// PROYECTO FINAL - INVENTARIO TECHSTORE
// Trabaja con arrays paralelos: nombres, precios y cantidades.
const nombres = ["Mouse", "Teclado", "Monitor"];
const precios = [12, 25, 140];
const cantidades = [8, 2, 4];
// TAREA 1: registrar un producto nuevo
function registrarProducto(nombre, precio, cantidad) {
  nombres.push(nombre);
  precios.push(precio);
  cantidades.push(cantidad);
  console.log(`Producto registrado: ${nombre}`);
}
function mostrarInventario() {
  console.log("--- INVENTARIO TECHSTORE ---");
  for (let i = 0; i < nombres.length; i++) {
    console.log(`${i + 1}. ${nombres[i]} | Precio: $${precios[i]} | Cantidad: ${cantidades[i]}`);
  }
}

function buscarProducto(nombre) {
  const indice = nombres.findIndex(
    (n) => n.toLowerCase() === nombre.toLowerCase()
  );

  if (indice === -1) {
    console.log(`"${nombre}" no existe en el inventario.`);
    return -1;
  }

  console.log(`Encontrado: ${nombres[indice]} | Precio: $${precios[indice]} | Cantidad: ${cantidades[indice]}`);
  return indice;
}
function calcularValorInventario() {
  let total = 0;
  for (let i = 0; i < precios.length; i++) {
    total += precios[i] * cantidades[i];
  }
  console.log(`Valor total del inventario: $${total}`);
  return total;
}
function mostrarBajoStock(limite) {
  console.log(`--- Productos con stock <= ${limite} ---`);
  let hayProductos = false;

  for (let i = 0; i < nombres.length; i++) {
    if (cantidades[i] <= limite) {
      console.log(`${nombres[i]}: ${cantidades[i]} unidades`);
      hayProductos = true;
    }
  }

  if (!hayProductos) {
    console.log("Ningún producto con stock bajo.");
  }
}
registrarProducto("Webcam", 35, 5); 
mostrarInventario();
buscarProducto("mOuSe");           
buscarProducto("Impresora");         
calcularValorInventario();
mostrarBajoStock(4);
// TAREA 1: crea registrarProducto(nombre, precio, cantidad).
// TAREA 2: crea mostrarInventario().
// TAREA 3: crea buscarProducto(nombre) (sin distinguir mayusculas).
// TAREA 4: crea calcularValorInventario() (precio * cantidad).
// TAREA 5: crea mostrarBajoStock(limite), incluyendo cantidades menores o iguales al limite.
// TAREA 6: ejecuta pruebas con un producto nuevo y uno inexistente.
// No necesitas prompt ni interfaces HTML en esta fase.
