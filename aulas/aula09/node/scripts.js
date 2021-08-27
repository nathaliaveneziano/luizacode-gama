const { readFile, writeFile } = require('fs');

// function tratandoErro(error, texto) {
//   if (error) {
//     throw error
//   } else {
//     console.log(texto)
//   }
// }

readFile('arquivo.txt', 'utf-8', (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

const novoTexto = 'Pense como um boleto. Um boleto sempre vence';

writeFile('arquivo.txt', novoTexto, (error) => {
  if (error) {
    throw error;
  } else {
    console.log('Deu certo a escrita');
  }
});
