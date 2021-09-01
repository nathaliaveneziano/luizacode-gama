import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
  async create(req: Request, res: Response) {
    const data = req.body;
    await knex('tab_cadastro').insert(data);
    return res.status(201).json({ data });
  },

  async list(req: Request, res: Response) {
    const result = await knex('tab_cadastro').orderBy('nome');
    return res.status(200).json({ data: result });
  },

  async find(req: Request, res: Response) {
    const { id } = req.params;
    const user = await knex('tab_cadastro').where({ id });
    return res.status(200).json(user);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    await knex('tab_cadastro').update(data).where({ id });
    const user = await knex('tab_cadastro').where({ id });
    return res.status(200).json({ data: user });
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await knex('tab_cadastro').del().where({ id });
    return res.status(200).json({ message: 'Registro excluido com sucesso!' });
  },
};
