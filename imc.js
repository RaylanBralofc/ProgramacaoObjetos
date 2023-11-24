function imc(peso, altura){
return(peso/(altura*altura));

}
let peso=parseFloat(prompt("Digite seu Peso"));
let altura=parseFloat(prompet("Digite sua Altura"));
alert(imc(peso,altura));