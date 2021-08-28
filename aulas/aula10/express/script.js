let express = require('express');
let app = express();

app.get('/', function (requisicao, resposta) {
  resposta.send('AewwwwwAewww EEE ohhhh ohhh ohhh');
});

app.listen(3005, function () {
  console.log('Iniciando servidor....');
});
