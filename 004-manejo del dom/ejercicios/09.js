
const selector = document.querySelector("#categoria");
const productos = document.querySelectorAll("#productos li");
const conteo = document.querySelector("#conteo");
selector.addEventListener("change", function () {
  const categoriaElegida = selector.value;
  let visibles = 0;
  for (const elemento of productos) {
    const categoriaProducto = elemento.dataset.categoria;
    if (categoriaElegida === "todos" || categoriaElegida === categoriaProducto) {
      elemento.hidden = false;
      visibles++;
    } else {
      elemento.hidden = true;
    }
  }
  conteo.textContent = "Productos visibles: " + visibles;
});

// TAREA 1: Escucha el evento change del selector.
// TAREA 2: Recorre los elementos con for...of.
// TAREA 3: Lee el atributo data-categoria con elemento.dataset.categoria.
// TAREA 4: Oculta los que no coincidan; "todos" muestra todo.
// TAREA 5: Muestra cuántos productos están visibles en #conteo.
