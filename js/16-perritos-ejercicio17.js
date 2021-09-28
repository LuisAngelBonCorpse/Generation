const $btnDog = document.querySelector('#btnDog');

$btnDog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(resp => resp.json())
  .then(data => {
    // console.log(data);
    const imgDog = document.createElement('img');
    imgDog.src = data.message;
    document.body.append(imgDog);
  })
});