// Pratica Bonus 04
/* 
Crie uma classe que modele uma bomba de combustível e permite definir a capacidade da bomba, o preço do combustível por litro e permita encher a bomba (sempre encher completamente) e consultar sua quantidade de combustível.

- É necessário também que seja permitido abastecer por quantidade de litros (retornando o valor a ser pago).
- Deve ser permitido também alterar o valor do preço por litro.
- Deve ser tratatda a situação de não haver combustível suficiente na bomba para um determinado abastecimento.
- A bomba não deve aceitar preço zero ou negativo.
*/

class BombaCombustivel {
  constructor(capacidade, precoLitro) {
    this.capacidade = capacidade;
    this.precoLitro = precoLitro;
    this.quantidade = capacidade;
  }

  encherBomba() {
    if (this.quantidade === this.capacidade) {
      console.log('A bomba ta full');
    } else {
      this.quantidade = this.capacidade;
      console.log('Enchendo a bomba em 3...2...1...');
    }
  }

  alterarPrecoLitro(valor) {
    if (valor > 0 && typeof valor === 'number') {
      this.precoLitro = valor;
      console.log(`Novo valor: ${this.precoLitro}`);
    } else {
      console.log('Valor deve ser acima de 0.');
    }
  }

  abastecerCarro(litros) {
    if (this.quantidade >= litros) {
      this.quantidade -= litros;
      console.log('Abastecido com sucesso');
      console.log(`Total a pagar: ${litros * this.precoLitro}`);
    } else {
      console.log(
        `Capacidade insuficiente de gasolina. Temos apenas ${this.quantidade}`
      );
    }
  }
}

const bomba1 = new BombaCombustivel(50, 10);

console.log(bomba1);
bomba1.abastecerCarro(20);
bomba1.alterarPrecoLitro(5);
bomba1.abastecerCarro(20);
bomba1.abastecerCarro(20);
bomba1.encherBomba()
bomba1.abastecerCarro(20);
