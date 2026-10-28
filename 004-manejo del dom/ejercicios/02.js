const aviso = document.querySelector("#aviso")
const activar = document.querySelector("#activar");
const quitar = document.querySelector("#quitar");
activar.addEventListener("click",function(){
    aviso.classList.add("destacado");
    console.log(aviso.classList.contains("destacado"));   
});
quitar.addEventListener("click",function (){
    aviso.classList.remove("destacado");
    console.log(aviso.classList.contains("destacado"));
});

// TAREA 1: Al pulsar #activar, añade la clase "destacado" a #aviso.
// TAREA 2: Al pulsar #quitar, elimina la clase "destacado".
// TAREA 3: Comprueba la clase con classList.contains y muéstralo en consola.
