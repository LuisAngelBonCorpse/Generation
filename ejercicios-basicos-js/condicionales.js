/* var edad = prompt('¿Cual es tu edad?', 0);


if (edad >= 18)
  document.write('Eres mayor de edad'); //console.log('Eres mayor de edad');
else
  document.write('Eres menor de edad');//console.log('Eres menor de edad'); */

/* Preguntarle al usuario su edad por promt. Despues hacer una condicional if 
con las siguientes situaciones, si el usuario es mayor de 18 y menor de 29 años
mostrar mensaje: Felicidades has sido aceptado en el bootcamp de generation, 
en caso contrariomostrar mensaje: No cumples con los requisitos del programa. */

let edad = prompt('Ingrese su edad', 0);

if (edad >= 18 && edad < 30)
   document.write('Felicidades has sido aceptado en el bootcamp de Generation.');
else
   document.write('Lo sentimos, no cumples con los requisitos del programa.');
