"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
//1. Faça um algoritmo que pergunte o nome e o gênero de um ou uma usuário.
//Se o gênero for masculino diga “Bem vindo, nome”.
//Se for feminino diga “Bem vinda, nome”.
//Se for não binário diga “Bem vinde, fulano”.
var nome = leitor.question('Qual seu nome? ');
var genero = leitor.question('Qual seu genero? ');
if (genero === 'masculino' || genero === 'Masculino' || genero === 'MASCULINO') {
    console.log('Seja bem vindo', nome);
}
else if (genero === 'feminino' || genero === 'feminino' || genero === 'feminino') {
    console.log('Seja bem vinda', nome);
}
else {
    console.log('Seja bem vinde', nome);
}
