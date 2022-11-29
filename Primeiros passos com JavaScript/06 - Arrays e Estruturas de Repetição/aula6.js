/* .push (adiciona) , .pop (remove o último), .shift (remove o primeiro) */
const alunos = ['João','Vitor','Marina'];

alunos.push('Renan');
alunos [4] = 'Vinícius';

console.log(alunos);
console.log(alunos[0]);

console.log(alunos.pop());
console.log(alunos);

console.log(alunos.shift());
console.log(alunos);

delete alunos[1];
console.log(alunos);

/* Parte 2 da aula */

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas [0] + notas [1] + notas [2] + notas [3] + notas [4];

console.log(notas.length);

console.log(soma/5);

/* Estrutura de repetição 
      i = posição 
A lista sempre começa na posição zero.
Uma string é uma array de caracteres.
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const nome = 'Cristianna Oliveira'; 
    
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}

/* Voltar para as notas */

const notas2 = [];

notas2.push(5);
notas2.push(7);
notas2.push(8);
notas2.push(2);
notas2.push(5);
notas2.push(8);

let soma2 = 0;

for (let i = 0; i < notas2.length; i++) {
    const nota = notas2[i];
    soma2 = soma2 + nota;
}

const media = soma2 / notas2.length;

console.log(media);
