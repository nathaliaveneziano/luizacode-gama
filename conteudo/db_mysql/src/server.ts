import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3005, () => console.log('Servidor inicializado na porta 3005'));
