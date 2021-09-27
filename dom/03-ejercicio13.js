// ingresar Edad y mostrar si es o no mayor de edad

const esMayorEdad = () => {
  let edad = parseInt(document.querySelector('#edad').value);
  let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
  document.querySelector('#respuesta').textContent = mensaje;
}

//CON QUERYSELECTOR SI LO OBTENGO DE UNA CLASE DEVUELVE UN ARREGLO ASI SOLO HALLA UN ELEMENTO, CON ID SOLO OBTIENE UN ELEMNTO, POR SI LO OCUPAS 