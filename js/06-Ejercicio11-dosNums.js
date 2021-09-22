/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
 */

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

if (num1>num2) {
  console.log(num1+num2);
  console.log(num1-num2);
} else if (num1<num2){
  console.log(num1*num2);
  console.log(num1/num2);
} else{
  console.log("Ambos numeros son iguales.");
}