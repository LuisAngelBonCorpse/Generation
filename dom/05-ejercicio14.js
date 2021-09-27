const $body = document.querySelector('body');
const $selectColor = document.querySelector('#colors');

$selectColor.addEventListener('change', (e) => {
  let color = e.target.value;
  if (color === 'red') {
    $body.className = '';
    $body.classList.add = 'red';
    console.log(color);
  }else if (color === 'blue') {
    $body.className = '';
    $body.classList.add = 'blue';
  } else if (color === 'green'){
    $body.className = '';
    $body.classList.add = 'green';
  }
});
