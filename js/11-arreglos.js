let lenguajes = [ "Javascript", "Java", "PHP", "Python", "C#","C++","Scala","Rust","Ruby", "Cobol"];



document.write(`<ol>`);
lenguajes.forEach(function(lenguaje, index) {
  document.write(`<li>${lenguaje} | ${index} </li>`);
});
document.write(`</ol>`);

let numerosNorteños = new Array(1,3,5,7,11,13,17);
let otrosNumeros = numerosNorteños.map(function(numero){
  return numero * 2;
});

console.log(numerosNorteños);
console.log(otrosNumeros);

//includes pregunta si contiene algo el arreglo

console.log(lenguajes.includes("PHP"));
console.log(lenguajes.includes("Ensamblador"));

//filter, crea un nuevo arreglo con los elementos que cumplan la condicion

let filtrados = numerosNorteños.filter(function(numero){
  if (numero < 10) {
    return numero;
  }
});

console.log(filtrados);