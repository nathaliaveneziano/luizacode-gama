class ProdutoService {
  constructor(ProdutoModel) {
    this.produto = ProdutoModel;
  }

  async get() {
    const produtos = await this.produto.findAll();
    return produtos;
  }

  async adicionar(produtoDTO) {
    // Verificar se ja existe um produto com o mesmo nome
    const findProduto = await this.produto.findOne({
      where: {
        nome: produtoDTO.nome,
      },
    });

    if (findProduto) {
      throw new Error('Ja existe um produto com esse nome no BD!');
    }

    try {
      await this.produto.create(produtoDTO);
    } catch (error) {
      console.erro(error.message);
      throw error;
    }
  }
}

module.exports = ProdutoService;
