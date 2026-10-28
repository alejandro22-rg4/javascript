// EJEMPLO: .value lee lo que hay dentro de un input.
const campo = document.querySelector("#nombre");
console.log("Valor inicial:", campo.value);
const resultado =document.querySelector("#resultado");
resultado.textContent="nombre inicial:"+campo.value;
campo.value="Lionel Messi"

// TAREA 1: Selecciona #resultado.
// TAREA 2: Muestra en el párrafo el texto "Nombre inicial: " seguido del valor del campo.
// TAREA 3: Cambia desde JavaScript el valor del input a "Carlos".
// NOTA: En este ejercicio no hay botones: el código se ejecuta al cargar la página.
