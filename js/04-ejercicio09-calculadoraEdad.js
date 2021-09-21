let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));

let respuesta = `<p>Tu edad es: ${- añoNacimiento + new Date().getFullYear()} </p>`;

document.write(respuesta);


let residuo = añoNacimiento % 2;

if (residuo === 0) {
  document.write(`<p>Naciste en un año par.</p>`);
} else{
  document.write(`<p>Naciste en un año impar.</p>`);
}
  