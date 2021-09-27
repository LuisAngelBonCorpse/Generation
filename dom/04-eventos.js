const $btn = document.querySelector('#btn');
$btn.addEventListener('click', () => console.log('Si me puchaste D:'));

const $inpText = document.querySelector('#text');
$inpText.addEventListener('keydown', (e) => console.log(e.target.value)); //e de evento, no forzoso, pero es convecional