/* Aula sobre função
 function nomeDaFuncao(parâmetros) {

 }
 invocar a função:
 nomeDaFuncao(); se chama procedimento, não tem retorno
 para ter retorno de algo use return
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