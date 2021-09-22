/*Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado */
let nums = [];
let suma=0, media=0; 
let num = parseInt(prompt("Ingrese un número"));

while (num >= 0) {
  suma=0; 
  media=0; 
  nums.push(num);
  for (let index = 0; index < nums.length; index++) {
    suma += nums[index];
  }
  media = suma / nums.length;
  document.write(`<p>La suma de los numeros es: ${suma}</p> <p>La media de los numeros es: ${media}</p> <br />`);
  num = parseInt(prompt("Ingrese un número"));
} 