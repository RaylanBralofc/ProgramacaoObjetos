class veiculo{

constructor(marca,modelo,ano){
this.marca=marca;
this.modelo=modelo;
this.ano=ano;

}

}
let marca=prompt("marca do carro");//renoult
let modelo=prompt("modelo do carro");//duster
let ano=parseInt(prompt("ano do carro"));//2016
const veiculo1= new veiculo(marca,modelo,ano);
alert(veiculo1.marca + "\n" + veiculo1.modelo + "\n" + veiculo1.ano);
