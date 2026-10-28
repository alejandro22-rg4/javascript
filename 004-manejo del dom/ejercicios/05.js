const resultado = document.querySelector("#resultado");
const inputprecio=document.querySelector("#precio");
const inputcantidad=document.querySelector("#cantidad");
const botoncalcular=document.querySelector("#calcular");

botoncalcular.addEventListener("click",function(){
    const precio =Number(inputprecio.value);
    const cantidad=Number(inputcantidad.value);
    const preciovalido=inputprecio.value.trim()!==""&&precio>=0;
    const cantidadvalida=Number.isInteger(cantidad)&&cantidad>0;
    if (preciovalido && cantidadvalida){
        const total=precio*cantidad;
        resultado.textContent="total:"+total.toFixed(2);
    }else{
        resultado.textContent="error:Introduce un precio valido(>=0)y una cantidad entera positiva.";
    }
});
// TAREA 1: Lee el precio y la cantidad cuando se pulse #calcular.
// TAREA 2: Convierte ambos valores con Number().
// TAREA 3: Valida que precio >= 0 y cantidad sea entero positivo.
// TAREA 4: Muestra el total con toFixed(2) o un mensaje de error.
