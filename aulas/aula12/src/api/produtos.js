const express = require('express');
const router = express.Router();
const { produto } = require('../models');
const ProdutoService = require('../services/produtos');
const { body, check, validationResult } = require('express-validator');

const produtoService = new ProdutoService(produto);

router.get('/', async (req, res) => {
  const produtos = await produtoService.get();
  res.json(produtos);
});

router.post(
  '/',
  body('nome').not().isEmpty().trim().escape(),
  check('preco')
    .not()
    .isEmpty()
    .matches(/\d/)
    .withMessage('O preco precisa ser numero!'),
  async (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() });
    }
    const { nome, preco } = req.body;

    try {
      await produtoService.adicionar({ nome, preco });
      res.status(201).send('Produto cadastrado com sucesso!');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

module.exports = router;
