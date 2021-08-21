// Prática Bônus 05
/* 
As gerências da Magalu resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para resolver o problema que calculará os reajustes. Faça um programa que receba o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado no salário atual:

- Salário até R$ 280,00 (incluindo): aumento de 20%
- Salário entre R$ 280,00 e R$ 700,00: aumento de 15%
- Salários entre R$ 701,00 e R$ 1500,00: aumento de 10%
- Salários de R$ 1501,00 em diante: aumento de 5%

Após o aumento ser calculado, deverá ser informado: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.
*/

function percentualSalario(salario) {
  let percentual;

  if (salario <= 280.0) {
    percentual = 20;
  } else if (salario <= 700.0) {
    percentual = 15;
  } else if (salario <= 1500.0) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  const reajuste = salario * (percentual / 100);

  console.log(`Salário atual: R$ ${salario}`);
  console.log(`Percentual: ${percentual}%`);
  console.log(`Reajuste: R$ ${reajuste}`);
  console.log(`Salário reajustado: R$ ${salario + reajuste}`);
  console.log('---------------------------');
}

percentualSalario(250.0);
percentualSalario(500.0);
percentualSalario(1000.0);
percentualSalario(2000.0);
