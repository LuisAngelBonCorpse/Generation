let cuentas =[];

cuentas.push(parseInt(prompt("Ingresa la cantidad de la cuenta 1")));
cuentas.push(parseInt(prompt("Ingresa la cantidad de la cuenta 2")));
cuentas.push(parseInt(prompt("Ingresa la cantidad de la cuenta 3")));

function mayor(c1, c2, c3) {
   if (c1>=c2 && c1>=c3)
      console.log("El mayor es la cuenta 1: " + c1)
   else if (c2>=c1 && c2>=c3)
      console.log("El mayor es la cuenta 2: " + c2)
   else if (c3>=c1 && c3>=c2)
      console.log("El mayor es la cuenta 3: " + c3)
}

mayor(cuentas[0], cuentas[1], cuentas[2]);
 


//o
/* let cuentas =[];

cuentas[0] = prompt("Ingresa la cantidad de la cuenta 1");
cuentas[1] = prompt("Ingresa la cantidad de la cuenta 2");
cuentas[2] = prompt("Ingresa la cantidad de la cuenta 3");

function mayor() {
   cuentas.sort();
   cuentas.reverse();
   console.log("El mayor es: "+cuentas);
}

mayor(); */  

//Este codigo tiene problemas con numeros de diferentes cifras, porque sort esta diseñado pára string y ese algoritmo falla con numeros. function(a, b){return a - b}, con esa funcion dentro de sort ya jala, pero si se puede evitar mejor porque no se entiende del todo como funciona
