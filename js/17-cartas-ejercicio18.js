let $cartas = document.querySelector('#cartas');
let carta = "";

const creaCartas = (albumId, url, title) => {
  carta = carta + `
  <div class="card" style="width: 18rem;">
    <img src="${url}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
  </div>
  `;
  $cartas.innerHTML = carta;
};

for(let i = 0; i<50 ; i++){
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then(resp => resp.json())
  .then(data => {
  let albumID = data[i].albumID;
  let url = data[i].url;
  let title = data[i].title;
  creaCartas(albumID, url, title);
  });
};