function validarNumero(variableAValidar, mensaje){
    while(!variableAValidar){
        variableAValidar = parseInt(prompt(mensaje))
    }
    return variableAValidar
}

// Calcular pago en cuotas sobre un monto determinado
// 1° Pedir que el usuario ingrese el monto total de la compra
let montoTotal = parseInt(prompt("Ingrese el monto total de la compra:"));

// Llamar a la función para validar los numeros ingresados
montoTotal = validarNumero(montoTotal, "Incorrecto, ingrese un valor númerico")

// 2° Pedir al usuario que ingrese el número de cuotas

let cuotasIngresadas = parseInt(prompt("Ingrese la cantidad de cuotas deseada (3, 6, 9, 12, 18 o 24):"));
// Llamar a la función para validar la cantidad de cuotas ingresadas
cuotasIngresadas = validarNumero(cuotasIngresadas, "Incorrecto, ingrese una opción válida (3, 6, 9, 12, 18 o 24)")

// 3°  Opciones de cuotas
const cuotas = "3, 6, 9, 12, 18, 24";

// 5° Función para calcular el pago en cuotas
function calcularCuotas(monto, cuota){
    if (cuotas.includes(cuota)){
        const cuotaMensual = monto / cuota;
        alert(`Pago en ${cuota} cuotas de ${cuotaMensual} cada una.`);
        
    } 
    else {
        cuota = prompt("Opción de cuotas no válida, las opciones disponibles son: 3, 6, 9, 12, 18 y 24.")
        calcularCuotas(monto, cuota);
    }
    /*else{
        alert("Opción de cuotas no válida. Las opciones disponibles son: 3, 6, 9, 12, 18 y 24. Reinicie e intente nuevamente");
    }*/
}
// 6° Llamar a la función para calcular las cuotas

calcularCuotas(montoTotal, cuotasIngresadas);

// por algun motivo el console log me da la información incorrectamente
// no sabría como añadirle un bucle 
