// Prática Bônus 06
/* 
Faça um script que receba uma data no formato "dd/mm/aaaa" e escreva a data por extenso.

Exemplo:
- Para a entrada "22/04/1983" deve ser escrito "22 de abril de 1983"
*/

function converteData(data) {
  const [dia, mes, ano] = data.split('/');
  const meses = [
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

  console.log(`${dia} de ${meses[Number(mes) - 1]} de ${ano}`);
}

converteData('22/04/1983');
converteData('14/03/1987');
