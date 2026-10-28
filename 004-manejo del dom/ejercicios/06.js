const detalle = document.querySelector("#detalle");
const boton = document.querySelector("#alternar");
boton.addEventListener("click",function(){
    detalle.hidden=!detalle.hidden;
    if (detalle.hidden){
        boton.textContent="mostrar detalle";
    }else{
        boton.textContent="ocultar detalle";
    }
});
// TAREA 1: Alterna la propiedad hidden de #detalle al pulsar el botón.
// TAREA 2: Cambia el texto del botón según el contenido esté visible u oculto.
