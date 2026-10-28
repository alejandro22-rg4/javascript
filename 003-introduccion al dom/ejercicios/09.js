// EJEMPLO: al hacer clic, JavaScript lee el input y cambia el párrafo.
const boton = document.querySelector("#saludar");
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
boton.addEventListener("click", function () {
  const texto = nombre.value.trim();
  if (texto ===""){
    mensaje.textContent="escribe tu nombre";
  }else{
  mensaje.textContent = "Hola, " + nombre.value;
  }
});

// TAREA 1: Cambia el saludo para que diga "Bienvenido/a, NOMBRE".
// TAREA 2: Usa .trim() para quitar espacios al inicio y al final.
// TAREA 3: Si el nombre está vacío, muestra "Escribe tu nombre".
