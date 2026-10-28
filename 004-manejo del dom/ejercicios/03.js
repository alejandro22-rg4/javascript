let contador = 0;
const numero = document.querySelector("#numero");
const sumar = document.querySelector("#sumar");
const reiniciar = document.querySelector("#reiniciar");
sumar.addEventListener("click",function(){
    contador++;
    numero.textContent=contador;
});
reiniciar.addEventListener("click",function(){
    contador =0;
    numero.textContent=contador;
});
// TAREA 1: Escucha el clic de #sumar e incrementa contador.
// TAREA 2: Actualiza el texto de #numero con el valor actual.
// TAREA 3: Haz que #reiniciar vuelva a mostrar 0.
