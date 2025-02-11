import * as leitor from 'readline-sync'

//1. Faça um algoritmo que pergunte o nome e horário do dia. Receba M para manhã, T para tarde e N para noite.
//Escreva “Bom dia, nome”, “Boa tarde, nome” ou “Boa noite, nome”, de acordo com o horário.

const nome: string = leitor.question ('Qual seu nome? ')
let horario: string = leitor.question ('Qual seu qual horario do dia e?')

switch (horario.toUpperCase()) {
    case 'M':
     horario = 'Bom dia';
      break;
    case 'T':
     horario = 'Boa tarde';
      break;
    case 'N':
     horario = 'Boa noite';
      break;
    default:
     horario = 'Olá';
      break;
  }
  console.log (`${horario}, ${nome}`)
