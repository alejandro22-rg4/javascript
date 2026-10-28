const lista = document.querySelector("#lista");
const entrada = document.querySelector("#producto");
const estado = document.querySelector("#estado");
const botonAgregar = document.querySelector("#agregar");

botonAgregar.addEventListener("click", function () {
  const nombre = entrada.value.trim();
  if (nombre === "") {
    estado.textContent = "Escribe el nombre de un producto.";
    return;
  }
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.append(item);
  entrada.value = "";
  estado.textContent = "";
  entrada.focus();
});
// TAREA 1: Lee el nombre y elimina espacios con trim().
// TAREA 2: Si está vacío, escribe una advertencia en #estado.
// TAREA 3: Si hay nombre, crea un elemento li usando createElement.
// TAREA 4: Usa textContent y append() para añadirlo a la lista.
// TAREA 5: Limpia el campo de texto.
