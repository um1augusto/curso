"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
//1. Faça um algoritmo que pergunte o nome e horário do dia. Receba M para manhã, T para tarde e N para noite.
//Escreva “Bom dia, nome”, “Boa tarde, nome” ou “Boa noite, nome”, de acordo com o horário.
var nome = leitor.question('Qual seu nome? ');
var horario = leitor.question('Qual seu qual horario do dia é?');
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
console.log("".concat(horario, ", ").concat(nome));
