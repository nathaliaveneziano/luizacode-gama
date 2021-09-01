import { Request, Response } from 'express';

export default {
  async create(req: Request, res: Response) {
    const { nome, cpf } = req.body;
    const id = 3;
    const data = { id, nome, cpf };
    return res.status(201).json({ data: data });
  },

  async list(req: Request, res: Response) {
    const result = [
      { id: 1, cpf: '09329314058', nome: 'JOSE DA SILVA' },
      { id: 2, cpf: '01135196052', nome: 'MARIA DE LOURDES' },
    ];
    return res.status(200).json({ data: result });
  },

  async update(req: Request, res: Response) {
    const { nome, cpf } = req.body;
    const dataAlteracao = '30/05/2021 16:00';
    const cadastro = { nome, cpf, dataAlteracao };
    cadastro.nome = 'JOSE DA SILVA LIMA';
    return res.status(200).json({ data: cadastro });
  },
};
