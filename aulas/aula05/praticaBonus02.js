// Pratica Bônus 02
/* 
Criar um jogo de Pedra, Papel e Tesoura, onde:
- Pedra ganha de Tesoura
- Papel ganha de Pedra
- Tesoura ganha de Papel
 */

const jogo = ['pedra', 'papel', 'tesoura'];

const user1 = 'tesoura';
const user2 = 'papel';

console.log('Escolha uma opcao:');
for (let index = 0; index < jogo.length; index += 1) {
  console.log(`${index + 1}. ${jogo[index]}`);
}

console.log(`\nUsuario 1: ${user1}`);
console.log(`Usuario 2: ${user2}\n`);

function jogar(j1, j2) {
  if (j1 === 'pedra' && j2 === 'papel') {
    console.log(`${j2} ganhou`);
  } else if (j1 === 'papel' && j2 === 'pedra') {
    console.log(`${j1} ganhou`);
  } else if (j1 === 'tesoura' && j2 === 'pedra') {
    console.log(`${j2} ganhou`);
  } else if (j1 === 'pedra' && j2 === 'tesoura') {
    console.log(`${j1} ganhou`);
  } else if (j1 === 'tesoura' && j2 === 'papel') {
    console.log(`${j1} ganhou`);
  } else if (j1 === 'papel' && j2 === 'tesoura') {
    console.log(`${j12} ganhou`);
  } else {
    console.log('empate');
  }
}

jogar(user1, user2);
