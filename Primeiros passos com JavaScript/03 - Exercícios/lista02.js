/* 
2) O IMC - Índice de massa corporal é um critério da Organização Mundial de Saúde para dar uma
indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso/(altura*altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com
a tabela abaixo.

Condição de IMC adulto:
- Abaixo de 18.5 kg = 'Abaixo do Peso';
- Entre 18.5 e 25 kg = 'Peso Normal';
- Entre 25 e 30 kg = 'Acima do Peso';
- Entre 30 e 40 kg = 'Obeso';
- Acima de 40 = 'Obesidade Grave';
*/

var peso = 60
var altura = 1.58
const imc = peso / Math.pow (altura,2)
console.log('O IMC dessa pessoa é ' + imc.toFixed(2));


if(imc < 18,5 ) {
    console.log('Abaixo do Peso');
} else if (imc = 18.5 > imc < 25) {
    console.log('Peso Normal');
} else if (25 > imc < 30) {
    console.log('Acima do Peso');
} else if ( 30 > imc < 40) {
    console.log('Obeso');
} else if (imc > 40) {
    console.log('Obesidade Grave');
}



