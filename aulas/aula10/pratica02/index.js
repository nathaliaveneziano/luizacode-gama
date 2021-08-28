// Prática 02
/* 
Livraria

Compre livros novos, seminovos e usados pelos menores preços.

Nessa nossa livraria o usuário poderá ver nossa extensa lista de livros que estão a venda, porém, para aguçar a curiosidade dos programadores, só mostramos o nome do livro e seu estado (novos, seminovos e usados).

Também mostramos a lista de autores que temos, bem como os livros que aquele autor possui, a venda em nosso catálogo.
  - Cada autor possui nome e sua nacionalidade

Caso você se interessa em um livro, clique para ver mais os demais detalhes.
  - Nesse momento você consegue ver todos os campos: id, nome, descricao, id do autor, ano de publicação, preço e estado.

Se você tem algum livro que não queira mais, sinta-se a vontade de cadastrá-lo em nosso site.
*/

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bancoDeDados = {
  livros: [
    {
      id: 1,
      nome: 'Dom Casmurro',
      idAutor: 2,
      descricao: 'Resumo1',
      ano: 1980,
      preco: 10,
      estado: 'Novo',
    },
    {
      id: 2,
      nome: 'Hora da Estrela',
      idAutor: 1,
      descricao: 'Resumo2',
      ano: 2020,
      preco: 20,
      estado: 'Semi-Novo',
    },
    {
      id: 3,
      nome: 'Harry Potter',
      idAutor: 3,
      descricao: 'Resumo3',
      ano: 1990,
      preco: 35,
      estado: 'Usado',
    },
  ],

  autores: [
    {
      id: 1,
      nome: 'Clarice Lispector',
      nacionalidade: 'Brasileira',
    },
    {
      id: 2,
      nome: 'Machado de Assis',
      nacionalidade: 'Brasileira',
    },
    {
      id: 3,
      nome: 'J. K. Rowling',
      nacionalidade: 'Britânica',
    },
  ],
};

// Listar todos os livros
app.get('/livros', (req, res) => {
  // Listar livros por query
  if (req.query.nome) {
    // % -> espaco em branco
    var nome = req.query.nome;
    // var livros = bancoDeDados.livros.filter((livro) =>
    //   livro.nome.toLowerCase().match(nome)
    // );
    var livros = bancoDeDados.livros.filter((livro) =>
      livro.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (livros === undefined) {
      res.sendStatus(404);
    } else {
      res.sendStatus = 200;
      res.json(livros);
    }
  } else {
    res.sendStatus = 200;
    res.json(bancoDeDados.livros);
  }
});

app.get('/autores', (req, res) => {
  res.sendStatus = 200;
  res.json(bancoDeDados.autores);
});

// Buscar livro por ID
app.get('/livro/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);
    var livro = bancoDeDados.livros.find((livro) => livro.id === id);

    if (livro === undefined) {
      res.sendStatus(404);
    } else {
      res.sendStatus = 200;
      res.json(livro);
    }
  }
});

var livroID = bancoDeDados.livros.length + 1;

// Cadastrar novo livro
app.post('/livro', (req, res) => {
  var { nome, idAutor, descricao, ano, preco, estado } = req.body;

  if (!nome && !idAutor && !descricao && !ano && !preco && !estado) {
    res.sendStatus(400);
  } else {
    var autor = bancoDeDados.autores.find((autor) => autor.id === idAutor);

    if (autor) {
      bancoDeDados.livros.push({
        id: livroID,
        nome,
        idAutor,
        descricao,
        ano,
        preco,
        estado,
      });
      res.sendStatus(201);
      livroID += 1;
    } else {
      res.sendStatus(404);
    }
  }
});

app.listen(3005, () => console.log('Servidor funcionando...'));
