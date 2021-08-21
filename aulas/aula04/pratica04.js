// Prática 04
/* 
Declare os seguintes vetores e faça um programa para que seja informado quantos dias tem cada mês.
  Ex. "O mês de janeiro tem 31 anos"
*/

const mes = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const tot = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let index = 0; index < tot.length; index += 1) {
  console.log(`O mês de ${mes[index]} tem ${tot[index]} dias`);
}
