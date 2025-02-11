import * as leitor from 'readline-sync'

//2. Faça um algoritmo que receba dois números e apresente
//a soma, divisão, multiplicação e subtraçãodesses dois números

//a. Atualize o programa e exiba a média de todos os resultados

const primeiroNumero: number = leitor.questionInt ('Digite o primeiro numero:')
const segundoNumero: number = leitor.questionInt ('Digite o primeiro numero:')

let soma: number = primeiroNumero + segundoNumero
let divisao: number = primeiroNumero / segundoNumero
let subtracao: number = primeiroNumero - segundoNumero
let multiplicacao: number = primeiroNumero * segundoNumero
let media: number = (soma + divisao + subtracao + multiplicacao)/4

console.log('A soma dos numeros é:',soma)
console.log('A divisao dos numeros é:',divisao)
console.log('A subtracao dos numeros é:',subtracao)
console.log('A multiplicacao dos numeros é:',multiplicacao)
console.log('A media dos numeros é:',media)