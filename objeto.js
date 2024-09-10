function nomedegente(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const p1 = nomedegente("Daniel", "Sampaio", 24);
const p2 = nomedegente("Sabrina", "Fernandes", 23);

console.log(p1.nome + ", você aceita se casar com " + p2.nome + " nas suas respectivas idades de " + p1.idade + " e " + p2.idade + " anos?");
