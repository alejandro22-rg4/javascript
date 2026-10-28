const formulario = document.querySelector("#registro");
const inputNombre = document.querySelector("#cliente");
const inputCorreo = document.querySelector("#correo");
const mensaje = document.querySelector("#confirmacion");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = inputNombre.value.trim();
  const correo = inputCorreo.value.trim();
  if (nombre === "" || correo === "") {
    mensaje.textContent = "Error: completa el nombre y el correo.";
    return;
  }

  mensaje.textContent = "Registro exitoso: " + nombre + " (" + correo + ")";
  formulario.reset();
});
// TAREA 1: Escucha el evento submit del formulario.
// TAREA 2: Usa event.preventDefault() para evitar recargar la página.
// TAREA 3: Lee nombre y correo, elimina espacios.
// TAREA 4: Si están vacíos, muestra un error; si no, una confirmación.
// TAREA 5: Limpia el formulario con reset() tras registrar.
