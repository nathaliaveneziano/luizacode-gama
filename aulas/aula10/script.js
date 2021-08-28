let { readFile, writeFile } = require('fs');

function modificarUsuario(nome, idade, profissao) {
  readFile('arquivo.json', 'utf8', (error, texto) => {
    if (error) {
      throw error;
    } else {
      var conteudo = JSON.parse(texto);
      console.log(conteudo);

      conteudo.nome = nome;
      conteudo.idade = idade;
      // console.log('conteudo apos a mudanca...');
      // console.log(conteudo);
      conteudo.profissao = profissao;

      writeFile('arquivo.json', JSON.stringify(conteudo), (error) => {
        if (error) {
          throw error;
        } else {
          console.log('alterado com sucesso!!!');
        }
      });
    }
  });
}

// PROGRAMA PRINCIPAL
modificarUsuario('Tamires', 28, 'Analista de Dados');
