/*Faça um programa para calcular um valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível ou de etanol do carro por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem. */

const precoEtanol = 4.35;
const precoGasolina = 5.29;
const kmPorLitroCarro = 12;
const distanciaKmViagem = 250;

var carro = 'gasolina'
if (carro = 'gasolina') {
    console.log('O valor da viagem com o carro a gasolina é ' + 
    ((distanciaKmViagem/kmPorLitroCarro)*precoGasolina).toFixed(2)+
    ' reais.');
}
carro = 'etanol'
if (carro != 'etanol') {
    console.log('O valor da viagem é inválido');
    
} else {
    console.log('O valor da viagem com o carro usando etanol é ' +
    ((distanciaKmViagem/kmPorLitroCarro)*precoEtanol).toFixed(2)+
    ' reais.' );
}
