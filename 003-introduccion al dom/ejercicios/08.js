// EJEMPLO COMPLETO: léelo y pruébalo ANTES de completar las tareas.
// 1. Buscamos el botón y el texto por su id.
const boton = document.querySelector("#boton");
const estado = document.querySelector("#estado");
// 2. "click" significa que la persona pulsó el botón.
// 3. La función entre llaves se ejecuta solamente cuando ocurre el clic.
boton.addEventListener("click", function () {
  estado.textContent = "¡click gano Mbappe!";
  console.log("Se hizo click en el boton");
  estado.style.color="green";
});

// TAREA 1: Cambia el mensaje mostrado después del clic.
// TAREA 2: Añade un console.log() dentro de la función para registrar cada clic.
// TAREA 3: Cambia el color del texto #estado dentro de esa misma función.
