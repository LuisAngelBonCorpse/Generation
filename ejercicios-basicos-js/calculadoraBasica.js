/*Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html. */

function calcular(n1, n2) {
   let suma = n1 + n2;
   let resta = n1 - n2;
   let producto = n1 * n2;
   let división = n1 / n2;
   
   console.log("La suma del número uno ("+ num1 + ") mas el número dos ("+ num2 + ") es: " + suma);
   console.log("La resta del número uno menos el número dos es: " + resta);
   console.log("La multiplicación del número uno por el número dos es: " + producto);
   console.log("La división del número uno entre el número dos es: " + división);
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

calcular(num1, num2);
