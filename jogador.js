var jogador={
nome: nome,
numero: numero,
gols: gols
};

var nome ,numero ,gols;
jogador.nome=prompt("Digite seu nome");
jogador.numero=prompt("numero");
jogador.gols=prompt("gols")

document.writeln(`${jogador.nome}<br>${jogador.numero}<br>${jogador.gols}`);
