
// Definindo a classe pai (superclasse)
class Animal {
    constructor(nome) {
      this.nome = nome;
      let nome=prompt("Digite o Nome")
  
    }
  
    fazerBarulho() {
      alert(`${this.nome} faz um barulho.`);
    }
  }
  
  // Definindo a classe filha (subclasse) que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome); // Chama o construtor da classe pai
      this.raca = raca;
      let raca=prompt("Digite a Raça")
    }
  
    latir() {
      alert(`${this.nome} (${this.raca}) late: Woof! Woof!`);
    }
  }
  
  
  
  // Criando uma instância da classe Cachorro
  const meuCachorro = new Cachorro("Tothor", "Labrador");
  
  // Chamando métodos da classe pai e da classe filha
  meuCachorro.fazerBarulho(); // Saída: Max faz um barulho.
  meuCachorro.latir(); // Saída: Max (Labrador) late: Woof! Woof!
  