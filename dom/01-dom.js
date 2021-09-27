// document.writeln('Hola desde JS');

/* const title = document.getElementsByTagName('h1');

title[0].innerHTML = 'Titulo cambiado desde JS'; // se pone el [0] porque title es un arreglo, por el getElements

const texto = document.getElementById('text');
texto.innerHTML = 'Texto añadido desde JS';
texto.style.background = '#0a0';
texto.style.color = '#fff';

console.log(texto); */

const text = document.querySelector('#text');
text.textContent = "Estoy escribiendo desde JS";

console.log(text);

// creando elementos HTML

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);