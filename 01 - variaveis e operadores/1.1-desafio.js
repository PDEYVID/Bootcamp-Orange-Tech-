/*Faça um programar para calcular o gasto de combustivel de uma viagem
tera 3 variaveis 
sendo elas
1 preco do combustivel
2 valor medio de gasto do carro
3 Distancia de KM da viagem
 imprimar no console o valor gasto de combustivel da viagem
 */

// Declaração de Variáveis
const precoCombustivel = 7.59; // Camelcase variavel
const kmPorLitros = 10;
const distanciaPorKm = 1000;

// Cálculo ou lógica
const LitrosCosumidos = distanciaPorKm / kmPorLitros;
const valorGasto = LitrosCosumidos * precoCombustivel;


// Resultado da lógica / toFixed Arrendonda o Valor grande
console.log("Valor Gasto de Combustivel é: " + valorGasto.toFixed(2));