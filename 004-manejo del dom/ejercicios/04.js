const entrada = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
const saludar = document.querySelector("#saludar");
saludar.addEventListener("click",function(){
    if (texto ===""){
        mensaje.textContent="escribe tu nombre";
    }else{
        mensaje.textContent="HOLA CRACK,"+entrada.ariaValueMax;  
    }
});
// TAREA 1: Al pulsar #saludar, lee entrada.value y aplica trim().
// TAREA 2: Si está vacío, muestra "Escribe tu nombre".
// TAREA 3: Si hay texto, muestra "Hola, NOMBRE" en #mensaje.
