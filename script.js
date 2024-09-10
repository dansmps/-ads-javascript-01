const readline = require('readline-sync')
  
//solicitar que o usuário digite seu nome:
const nome = readline.question('Digite seu nome:')

const sobrenome = readline.question('digite seu sobrenome:')

//imprimir o nome completo no console

const nomeCompleto = `${nome} ${sobrenome}`;
console.log('Nome completo:', nomeCompleto);
