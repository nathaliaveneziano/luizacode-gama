// Prática 01
/* 
Crie uma classe para pessoa com as seguintes características:
- Atributos:
  - Nome, idade, CNH
- Mẽtodos:
  - Dirigir, dormir, comer
*/

class Pessoa {
  constructor(nome, idade, cnh) {
    this.nome = nome;
    this.idade = idade;
    this.cnh = cnh;
  }

  dirigir() {
    console.log(`O número da sua é ${this.nome}`);
  }

  dormir() {
    console.log(`${this.nome} está na hora de dormir...`);
  }

  comer() {
    console.log(`${this.nome}, vem comer!!!`);
  }
}

const pessoa1 = new Pessoa('Nathalia', 34, 7863409238478);
console.log(pessoa1);
pessoa1.dirigir();
pessoa1.dormir();
pessoa1.comer();
