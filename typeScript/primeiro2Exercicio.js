"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
//1. Faça um algoritmo que pergunte o nome do usuário e dê boas vindas para ele
var nome = leitor.question("Qual o seu nome?");
console.log('Boas vindas', nome);
