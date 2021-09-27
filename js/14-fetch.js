/* 
  Fetch nos permite hacer peticiones http desde JS
*/

const peticion = fetch('https://jsonplaceholder.typicode.com/posts')
.then(resp => resp.json())
.then(data => console.log(data))
.catch(e => console.log(e)); // json = javascript objet notation

console.log(peticion);