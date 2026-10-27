// Comparaciones y operadores lógicos
const edad = 17;
const tieneEntrada = true;
console.log("edad:",edad);
console.log("¿Mayor de edad?", edad >= 18);
console.log("¿tiene entrada?",tieneEntrada);
if (edad >=18&& tieneEntrada){
    console.log("acceso permitido");
}else{
    console.log("acceso denegado");
}
const descuentoestudiante = true;
const descuentoadultomayor = false;
if (descuentoestudiante && edad >=18 || descuentoadultomayor && edad >=65){
}else{
    console.log("NO HAY DESCUEENTO");
}

// TAREA 1: Permite ingresar si tiene 18 años o más Y tiene entrada.
// TAREA 2: Muestra "Acceso permitido" o "Acceso denegado".
// TAREA 3: Prueba varias combinaciones de edad y entrada.
// TAREA 4: Crea una condición con OR (||) para descuento estudiantil o adulto mayor.
