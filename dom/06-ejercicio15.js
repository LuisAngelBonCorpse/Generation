/* 
    Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista.
*/

const $lista = document.querySelector('.lista');
const $btn = document.querySelector('#btn');
let NumElemento = 1;
let elementos = '';

$btn.addEventListener('click', () => {
  elementos = elementos + `<li>Elemento ${NumElemento}</li>`;
  $lista.innerHTML = elementos;
  NumElemento++;
});


/* otra manera de hacerlo
$btn.addEventListener('click', () => {
  let listaElemento = document.createElement('li');
  listaElemento.textContent = 'Elemento número ' + NumElemento;
  $list.appendChild(listaElemento);
  NumElemento++;
});
*/