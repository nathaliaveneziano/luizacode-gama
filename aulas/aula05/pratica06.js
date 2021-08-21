// Prática 06
/* 
Escreva um programa que contenha uma lista com 5 nomes pré-cadastrados. O programa deverá dar ao usuário a opção de excluir um único nome da lista, com valores entre 1 e 5, exemplo.

Qual dos nomes abaixo você deseja excluir da lista?
  1. Tainá
  2. Stellinha
  3. Tequilina
  4. Pituzinha
  5. <Seu nome>

Feito a escolha do usuãrio pelo número correspondente ao nome, o programa deverá mostrar na tela os quatro nomes que restam cadastrados na lista.
 */
const nomes = ['Tainá', 'Stellinha', 'Tequilina', 'Pituzinha', 'Nathália'];
let excluido = 3;

function listagemNome(lista) {
  for (let index = 0; index < lista.length; index += 1) {
    console.log(`${index + 1}. ${lista[index]}`);
  }
}

console.log('Qual dos nomes abaixo você deseja excluir da lista?');
listagemNome(nomes);

console.log('--------------------------');

console.log(`Nome excluido: ${excluido}\n`);
nomes.splice(excluido - 1, 1);
listagemNome(nomes);
