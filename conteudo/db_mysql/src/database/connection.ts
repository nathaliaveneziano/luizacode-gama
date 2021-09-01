import knex from 'knex';
import knexfile from '../../knexfile';

export default knex(knexfile['development']);

console.log("Conexao realizada com sucesso!");
