const titulo = document.querySelector("#titulo");
console.log("Mi primera pagina dinamica:", titulo.textContent);
titulo.textContent="Mi primera pagina dinamica";
const descripcion = document.querySelector("#descripcion");
const boton = document.querySelector("#cambiar");
boton.addEventListener("click",function(){
 descripcion.textContent= "JavaScript modifico este texto";
});
// TAREA 1: Selecciona el párrafo #descripcion.
// TAREA 2: Cambia el título a "Mi primera página dinámica".
// TAREA 3: Al pulsar #cambiar, cambia la descripción a "JavaScript modificó este texto".
