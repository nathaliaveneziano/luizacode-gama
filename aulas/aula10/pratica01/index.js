const express = require('express');
const app = express();

// configuracao
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var bancoDeDados = {
  produtos: [
    {
      id: 1,
      nome: 'Chocolate',
      categoria: 'Alimentos',
      preco: 10,
    },
    {
      id: 2,
      nome: 'iPhone',
      categoria: 'Celular',
      preco: 50000,
    },
    {
      id: 3,
      nome: 'Sorvete',
      categoria: 'Alimentos',
      preco: 30,
    },
    {
      id: 4,
      nome: 'Notebook',
      categoria: 'Computador',
      preco: 8000,
    },
  ],
};

var qtdId = bancoDeDados.produtos.length + 1;

// Listar Produto
app.get('/produtos', (req, res) => {
  res.sendStatus = 200;
  res.json(bancoDeDados);
});

// Buscar produto por ID
app.get('/produto/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);
    var produto = bancoDeDados.produtos.find((prod) => prod.id === id);

    if (produto === undefined) {
      res.sendStatus(404);
    } else {
      res.sendStatus = 200;
      res.json(produto);
    }
  }
});

// Criar produto
app.post('/produto', (req, res) => {
  var { nome, categoria, preco } = req.body;

  if (nome == null || preco == null) {
    res.sendStatus(400);
  } else {
    bancoDeDados.produtos.push({
      id: qtdId,
      nome,
      categoria,
      preco,
    });
    // res.json(req.body);
    res.sendStatus(201);
    qtdId += 1;
  }
});

// Deletar produto
app.delete('/produto/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id, 10);
    var produtoID = bancoDeDados.produtos.findIndex((prod) => prod.id === id);

    if (produtoID === -1) {
      res.sendStatus(404);
    } else {
      bancoDeDados.produtos.splice(produtoID, 1);
      res.sendStatus(200);
    }
  }
});

// Editar Produto
app.put('/produto/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id, 10);
    var produto = bancoDeDados.produtos.find((prod) => prod.id === id);

    if (produto == undefined) {
      res.sendStatus(404);
    } else {
      var { nome, categoria, preco } = req.body;

      if (nome !== undefined) {
        produto.nome = nome;
      }

      if (categoria !== undefined) {
        produto.categoria = categoria;
      }

      if (preco !== undefined) {
        produto.preco = preco;
      }

      res.sendStatus(200);
    }
  }
});

app.listen(3005, function () {
  console.log('Servidor ta em pe...');
});
