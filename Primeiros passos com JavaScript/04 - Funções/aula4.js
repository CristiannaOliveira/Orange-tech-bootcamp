/* Aula sobre função
 function nomeDaFuncao(parâmetros) {

 }
 invocar a função:
 nomeDaFuncao(); se chama procedimento, não tem retorno
 para ter retorno de algo use return
 Funções são valores também.
 Função entre parentêses é uma função que é chamada imediatamente e só é chamada uma vez.
 */

 function dizerONome (nome) {
    console.log( 'Meu nome é ' + nome + '.');
 }
 
 dizerONome ('Cristianna');
 dizerONome ('Rosângela');

 function quadrado (valor) {
    return valor * valor ;
 }
  const resultado = quadrado (20)
  console.log('O resultado é ' + resultado + '.');

  function incrementarValor(valor, percentualJuros) {
    const acrescimo = (percentualJuros/100 * valor)
    return acrescimo + valor;
  }

  console.log('O valor é ' + incrementarValor(100,15) + '.');
  console.log('O valor é ' + incrementarValor(100,35) + '.');
 
  function calculoImc(peso, altura) {
    return peso / Math.pow (altura,2)
 }

 function classificacao (imc) {
    if(imc < 18.5 ) {
        console.log('Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso Normal');
    } else if (imc > 25 && imc <= 30) {
        console.log('Acima do Peso');
    } else if ( imc > 30 && imc < 40) {
        console.log('Obeso');
    } else if (imc > 40) {
        console.log('Obesidade Grave');
    }
}

  (function () {
    const peso = 60
    const altura = 1.58
    const imc = calculoImc(peso,altura);
    console.log('O IMC dessa pessoa é ' + imc .toFixed(2));
    classificacao (imc)
    }) ();
   