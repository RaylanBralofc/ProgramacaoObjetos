class estudante{

constructor ( matricula,nome,idade){
this.nome=nome;
this.matricula=matricula;
this.idade=idade ;


}

}

let nome=prompt("Nome Estudante");
let matricula=parseInt (prompt("Matricula Estudante"));
let idade=parseInt(prompt("Idade Estudante"))
const estudante1= new estudante(nome,matricula,idade);
alert(estudante1.nome + "\n" + estudante1.matricula + "\n"+ estudante1.idade);