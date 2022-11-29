// Importação

const funcoes = require ('./funcoes-auxiliares');

console.log(funcoes);
console.log(funcoes.gets());

const pessoa = { nome: 'Vitor'};

/* const {nome} = pessoa;
 é igual á
 const nome = pessoa.nome; */

 const {gets,print} = require ('./funcoes-auxiliares');

 print (gets());