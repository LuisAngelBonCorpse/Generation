// try nos eprmite ejecutar codigo propenso a fallar de manera segura

const gravedad = 9.81;
console.log(gravedad);

try {  // aqui va el codigo propenso a falla
  gravedad = 10;
} catch (error) {    // se ejecuta si hay error
  console.log(error);
} finally {  // se ejecuta de cualquier manera (con o sin error)
  console.log(gravedad);
}


