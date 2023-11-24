class Veiculo {
    constructor(marca, modelo, ano,) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, potencia) {
        super(marca, modelo, ano)
        this.potencia = potencia;
        let hp = parseInt(prompt("Qual a potencia?"))
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, potencia) {
        super(marca, modelo, ano)
        this.potencia = potencia;
        let cc = parseInt(prompt("Quantas Cilindradas?"))
    }
}

let marca = prompt("Digite a Marca");
let modelo = prompt("Digite o Modelo");
let ano = parseInt(prompt("Digite o Ano"));
const veiculo1= new Veiculo (marca,modelo,ano)
alert(veiculo1.marca + "\n" + veiculo1.modelo + "\n" + veiculo1.ano);

//Garagem do Raylan.C
let opcao = prompt("Garagem do Cabral\n 1.carro\n 2.moto")
switch (opcao) {
    case '1':
        alert("Moto"); break

    case '2':
        alert("Carro"); break
    default: alert("Opção Invalida");

}
switch (op) {
    case '1':
        var marca = prompt("Marca");
        let modelo = prompt("Modelo");
        let ano = prompt("Ano");
        let potencia = prompt("potencia");
        const carro1 = new Carro(marca, modelo, ano, potencia);
        alert(`${carro1.marca}\n${carro1.modelo}\n${carro1.ano}\n`);
        break

}