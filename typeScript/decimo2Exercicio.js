"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calcularSalarios() {
    var quantidadeFuncionarios;
    quantidadeFuncionarios = Number(readlineSync.question("Digite a quantidade de funcionários: "));
    var funcionarios = [];
    var generos = { 'M': 0, 'F': 0, 'N': 0 }; // Armazena a contagem de gêneros
    var salarios = { 'M': 0, 'F': 0, 'N': 0 }; // Armazena a soma dos salários por gênero
    var receberDadosFuncionario = function (indice) {
        if (indice === quantidadeFuncionarios) {
            var totalSalarios = 0;
            var generoComMaiorSalario = '';
            var maiorSalario = 0;
            for (var genero_1 in generos) {
                totalSalarios += salarios[genero_1];
                if (salarios[genero_1] > maiorSalario) {
                    maiorSalario = salarios[genero_1];
                    generoComMaiorSalario = genero_1;
                }
            }
            console.log("Quantidade de funcionários por gênero:");
            console.log("Masculino: " + generos['M']);
            console.log("Feminino: " + generos['F']);
            console.log("Não-Binário: " + generos['N']);
            console.log("Total gasto em salários: " + totalSalarios);
            console.log("Salários por gênero:");
            console.log("Masculino: " + salarios['M']);
            console.log("Feminino: " + salarios['F']);
            console.log("Não-Binário: " + salarios['N']);
            console.log("Gênero com maior salário: " + generoComMaiorSalario);
            return;
        }
        var indiceFuncionario = indice + 1;
        var nome = readlineSync.question("Digite o nome do funcion\u00E1rio ".concat(indiceFuncionario, ": "));
        var genero = readlineSync.question("Digite o g\u00EAnero do funcion\u00E1rio ".concat(indiceFuncionario, " (M - Masculino, F - Feminino, N - N\u00E3o-Bin\u00E1rio): "));
        var salario = Number(readlineSync.question("Digite o sal\u00E1rio do funcion\u00E1rio ".concat(indiceFuncionario, ": ")));
        funcionarios.push({ nome: nome, genero: genero, salario: salario });
        generos[genero]++;
        salarios[genero] += salario;
        receberDadosFuncionario(indice + 1);
    };
    receberDadosFuncionario(0);
}
calcularSalarios();
