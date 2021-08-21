// Prãtica Bônus 01
/* Troque a posição de um array de 1 a 10 .Imprimir array trocando o primeiro com último, segundo com penúltimo e assim por diante...  */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumeros = [];

// for (let index = numeros.length - 1; index >= 0; index -= 1) {
//   newNumeros.push(numeros[index]);
// }

// console.log(newNumeros);

// console.log('--------------------------');

// console.log(numeros);
// numeros.reverse();
// console.log(numeros);

// console.log('--------------------------');

let tamanho = numeros.length - 1;
let auxiliar;

for (let index = 0; index < numeros.length / 2; index += 1) {
  auxiliar = numeros[index];
  numeros[index] = numeros[tamanho];
  numeros[tamanho] = auxiliar;

  tamanho -= 1;
}

console.log(numeros);
