// Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario 

let numero1 = parseInt(prompt("Ingrese un numero."));

let numero2 = parseInt(prompt("Ingrese otro numero."));

if (numero1>numero2) {
  for (let i=numero2+1; i<numero1; i++) {
    console.log(i % 2);
    if (i % 2 !== 0) {
      document.write(`<p>Número: ${i}</p>`);
    }
  }
} else {
  for (let i=numero1+1; i<numero2; i++) {
    console.log(i % 2);
    if (i % 2 !== 0) {
      document.write(`<p>Número: ${i}</p>`);
    }
  }
}