const $btnCat = document.querySelector('#btnCat');

$btnCat.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    const imgCat = document.createElement('img');
    imgCat.src = data[0].url;
    document.body.append(imgCat);
  });
});



/* 
  Desestructuracion

  Dentro del then de data

  const [cat] = data;         // con esto se extrae el elemnto del arreglo 
  es igual a
  const cat = data[0];
*/