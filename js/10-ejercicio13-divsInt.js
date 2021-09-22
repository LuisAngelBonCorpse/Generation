//Mostrar todos los numero divisores de un número introducido.


let num = parseInt(prompt("Introduce un número:"));

let divisores = [];

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    divisores.push(i);
  }
}
document.write(divisores);
