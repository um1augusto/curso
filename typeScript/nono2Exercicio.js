"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
//3. Faça um algortimo que receba um valor em reais e pergunte para qual moeda deseja converter
//(dolar, pesos uruguaios ou euros). Informe o resultado final. (Utilize a cotação do google).
var primeiroNumero = leitor.questionFloat('Quantos reais voce tem? ');
var operacao = leitor.question('Qual tipo de moeda deseja converter \n EUROS\nPESOS (URUGUAIOS)\nEUROS');
var resultado = 0;
switch (operacao.toUpperCase()) {
    case 'DOLAR':
        resultado = primeiroNumero * 0, 20;
    case 'PESOS':
        resultado = primeiroNumero * 7.86;
    case 'EUROS':
        resultado = primeiroNumero * 0.19;
}
console.log("o resultado da operacao escolhida e ,".concat(resultado));
