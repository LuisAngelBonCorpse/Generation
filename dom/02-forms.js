const nameTitle = document.querySelector('#name');
const input = document.querySelector('#input');
console.log(input);

const writeName = () => {
  nameTitle.textContent = input.value;
}
