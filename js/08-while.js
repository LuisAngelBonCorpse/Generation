//Nos deja repetir mientras la condicion sea verdadera


const num1 = parseInt(prompt("Ingrese un número"));

/* while (isNaN(num1)) {
  const num1 = parseInt(prompt("Ingrese un número"));
} */

/* while (num1 !== 23) {
  console.log("No adivinaste el numero");
  const num1 = parseInt(prompt("Ingrese un número"));
}

console.log('Le atinaste'); */

//Do while lo mismo que el while pero ejecuta el codigo antes de comprobar la condicion

do {
  document.write(`<p>El número introducido es: ${num1}</p>`)
  const num1 = parseInt(prompt("Ingrese otro número"));
} while (num1 > 5)
