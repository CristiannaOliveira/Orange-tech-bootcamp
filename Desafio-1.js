/*Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
-1. Preço do combustível;
-2. Gasto médio de combustível do carro por KM;
-3. Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

let litrosConsumidos = distanciaEmKm/kmPorLitros;
let valorGasto = litrosConsumidos*precoCombustivel;

console.log("O valor que será gasto é igual a " + valorGasto.toFixed(2) + " reais.");