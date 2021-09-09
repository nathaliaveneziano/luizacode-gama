const express = require('express');

const produtosRouter = require('./produtos');
const fornecedoresRouter = require('./fornecedores');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Huhulllll');
});

router.use('/produtos', produtosRouter);
router.use('/fornecedores', fornecedoresRouter);

module.exports = router;
