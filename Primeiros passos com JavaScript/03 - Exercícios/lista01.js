/*
1) Faça um algoritmo que dado as 3 notas tiradas por aluno em um semestre da faculdade  
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3)/3;

Classificação:
- Média menor 5 = Reprovado;
- Média entre 5 e 7 = Recuperação;
- Média acima de 7 = Aprovado; 
*/

const nota1 = 8;
const nota2 = 3;
const nota3 = 6;
var mediaSemestre = (nota1 + nota2 + nota3)/3;
console.log(mediaSemestre.toFixed(2));


if (mediaSemestre < 5) {
    console.log('Reprovado');
} if ( 5 > mediaSemestre < 7) {
    console.log('Recuperação');
} if (mediaSemestre > 7) {
    console.log('Aprovado');
}
 