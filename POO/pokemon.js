/* El nombre de la clase debe empezar con mayuscula */

class Pokemon {
  #name = "";                // # pone a los atributos como privados
  #type = "";
  #evolutions = [];

  constructor(name, type, evolutions){
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
  }

  // Set sirve para asignar valores privados y tener mas control para los cambios
  set name (name) {
    name == '' ? this.#name = 'No existe' : this.#name = name; 
  }
  set type (type) {
    this.#type = type;
  }
  set evolutions (evolutions) {
    this.#evolutions = evolutions;
  }

  //Get sirve para retornar ya, los valores asignados por set
  get name(){
    return this.#name;
  }
  get type(){
    return this.#type;
  }
  get evolutions(){
    return this.#evolutions;
  }

  attack() {
    return `${this.#name}, esta atacando`;
  }

  evolve(evolution = 0){
    const EVOLVE =  this.#evolutions[evolution] || false;  //sino tiene evoluciones lo llena con un false se puede poner con '' que en JS es igual a falso
    let message = `${this.#name} no puede evolucionar`;

    if (EVOLVE) {
      message = `${this.#name} esta evolucionando a ${EVOLVE}`;
      this.name = EVOLVE;
    }

    return message;
  }
}

class TypeFire extends Pokemon {  // extends es para la herencia

  constructor (name, evolutions){
    super (name, 'fire', evolutions); // es para llenar el constructor de la clase Pokemon
  }

  message() {
    return `Hola soy ${this.name} y soy de tipo FUEGO`
  }

}

const charmander = new TypeFire('Charmander', ['Charmeleon', 'Chorizard']);
console.log(charmander.message());

charmander.name = 'gato';
console.log(charmander.message());


/* const charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Chorizard']);
const squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise']);
const zangoose = new Pokemon('Zangoose', 'Normal', [])

console.log(`${charmander.name} es de tipo ${charmander.type}`);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(`${charmander.name} es de tipo ${charmander.type}`);
charmander.name = '';
console.log(`${charmander.name}`);
console.log('--------------------------------------------');
console.log(`${squirtle.name} es de tipo ${squirtle.type}`);
console.log(squirtle.attack());
console.log(squirtle.evolve());
console.log(`${squirtle.name} es de tipo ${squirtle.type}`);
console.log('--------------------------------------------');
console.log(`${zangoose.name} es de tipo ${zangoose.type}`);
console.log(zangoose.attack());
console.log(zangoose.evolve());
console.log(`${zangoose.name} es de tipo ${zangoose.type}`); */
