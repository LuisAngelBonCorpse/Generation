// Switch estructura de control de flujo, nos ayuda a tomar desiciones de un cumulo de casos y un default

/* const edad = parseInt(prompt("Ingrese su edad:")); */

let mensaje = "";

/* switch (edad) {
  case 18:
    mensaje = "Acaba de cumplir la mayoria de edad.";
    break;
  case 25:
    mensaje = "Ya eres un adulto";
    break;
  case 70:
    mensaje = "Ya esta en la tercera edad";
    break;
  default:
    mensaje = "No estas en una edad critica";
    break;
} */

const nombre = prompt("Ingrese su nombre");

switch (nombre.toLocaleLowerCase()) {
  case "carlos":
    mensaje = "Eres Admin";
    break;
  case "juan":
    mensaje = "Eres User";
    break;
  default:
    mensaje = "No eres nadie (en este sistema), registrate.";
    break;
}


document.write(`<p>${mensaje}</p>`);