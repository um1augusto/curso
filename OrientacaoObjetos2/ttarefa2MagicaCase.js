"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ttarefaAjuste1Magica_1 = require("./ttarefaAjuste1Magica");
const leitor = __importStar(require("readline-sync"));
const alunos = [];
function opcao() {
    console.log("\n==== BIBLIOTECA ====");
    console.log("\n 1- Cadastrar aluno");
    console.log(" 2- Inserir notas");
    console.log(" 3- Calcular média");
    const escolha = leitor.questionInt("Escolha uma opção: ");
    switch (escolha) {
        case 1:
            const matricula = leitor.questionInt("Informe a matrícula do aluno: ");
            const nome = leitor.question("Informe o nome do aluno: ");
            const novoAluno = new ttarefaAjuste1Magica_1.Aluno(matricula, nome);
            novoAluno.cadastroAluno(matricula, nome);
            alunos.push(novoAluno);
            return opcao();
        case 2:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.");
            }
            else {
                const index2 = leitor.questionInt("Informe o índice do aluno: ");
                if (Number.isInteger(index2) && index2 >= 0 && index2 < alunos.length) {
                    const aluno = alunos[index2];
                    const nota1 = leitor.questionFloat("Informe a primeira nota do aluno: ");
                    const nota2 = leitor.questionFloat("Informe a segunda nota do aluno: ");
                    const notaTrabalho = leitor.questionFloat("Informe a nota do trabalho do aluno: ");
                    aluno.insercaoDeNotas(nota1, nota2, notaTrabalho);
                    return opcao();
                }
                else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
            break;
        case 3:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.");
            }
            else {
                const index3 = leitor.questionInt("Informe o índice do aluno: ");
                if (Number.isInteger(index3) && index3 >= 0 && index3 < alunos.length) {
                    const aluno = alunos[index3];
                    console.log(`Média do aluno: ${aluno.media()}`);
                    return opcao();
                }
                else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
            break;
        case 4:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.");
            }
            else {
                const index4 = leitor.questionInt("Informe o índice do aluno: ");
                if (Number.isInteger(index4) && index4 >= 0 && index4 < alunos.length) {
                    const aluno = alunos[index4];
                    console.log(`Média do aluno: ${aluno.final()}`);
                    return opcao();
                }
                else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
        default:
            ("Saindo");
            break;
    }
}
opcao();
