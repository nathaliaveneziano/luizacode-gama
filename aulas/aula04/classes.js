const livro = {
  nome: 'Harry Potter',
  editora: 'Taina Editions',
  paginas: 300,
  anunciar: function () {
    console.log(`O livro ${this.nome} tá a venda`);
  },
};

console.log(livro.editora);
livro.anunciar();

// Estutura de objeto
const livroFunc = function (nome, editora, paginas) {
  (this.nome = nome), (this.editora = editora), (this.paginas = paginas);

  this.anunciar = function () {
    // return `O livro ${this.nome} tá a venda`;
    console.log(`O livro ${this.nome} tá a venda`);
  };
};

// Criando novo objeto baseado numa function
const livroHP = new livroFunc('Harry Potter', 'TE', 300);
console.log(livroHP);
// console.log(livroHP.anunciar());
livroHP.anunciar();
