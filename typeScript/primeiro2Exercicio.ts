import * as leitor from 'readline-sync'

//1. Faça um algoritmo que pergunte o nome do usuário e dê boas vindas para ele

let nome: string = leitor.question("Qual o seu nome?")

console.log ('Boas vindas',nome)
