// Prática Bônus 03
/* 
Escreva um programa que exiba o 1001 nũmero primo
*/
let primosEncontrados = 0;
let dividendo;

// percorrer numeros
// condição - se o 1001 numero primo foi encontrado

for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
  let ehPrimo = true;

  for (let divisor = 2; dividendo > divisor; divisor += 1) {
    if (dividendo % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    primosEncontrados++;
  }
}

console.log(`O 1001 numero primo e ${--dividendo}`);
