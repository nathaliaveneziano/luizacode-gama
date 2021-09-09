const express = require('express');
const routers = require('./api');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

// sequelize.sync({ force: true }).then(() => {
sequelize.sync().then(() => {
  console.log('Banco conectado com sucesso');
});

app.listen(3000, () => {
  console.log('Servidor tá em pé...');
});
