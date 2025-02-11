import * as leitor from 'readline-sync'

//3. Faça um algoritmo que converta valores de reais (R$) para dolares (U$).
//Pergunte pro usuário a cotação do dolar e quantos dolares ele tem.

//a. Atualize o programa e adicione 10% de taxa em cima do valor convertido

const valorDoDinheiro: number = leitor.questionFloat ('Quantos dolares voce tem? ')
const cotacaoDoDolar: number = leitor.questionFloat ('Qual a cotacao do dolar? ')

let convertido: number = valorDoDinheiro / cotacaoDoDolar

console.log ('O valor convertido é ', convertido)

let taxa: number = convertido * 0.10
let taxaAbatida: number = convertido - taxa

console.log ('O valor convertido e com a taxa é: ', taxaAbatida)