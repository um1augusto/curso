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
const tarefa1Magica_1 = require("./tarefa1Magica");
const leitor = __importStar(require("readline-sync"));
const aluno = new tarefa1Magica_1.Aluno(10, "Teste", 10, 9, 8);
console.log(aluno.media());
if (aluno.media() >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
console.log(aluno);
console.log(aluno.final());
const data1 = new tarefa1Magica_1.Data(1, 1, 2023);
const data2 = new tarefa1Magica_1.Data(1, 2, 2023);
console.log(data1.compara(data2));
console.log(data1.getMesExtenso());
console.log(data1.clone());
const voo = new tarefa1Magica_1.Voo("voo-123", "22-08-2023");
console.log(voo.proximoLivre());
console.log(voo.ocupa(1));
console.log(voo.proximoLivre());
console.log(voo.verifica(1));
console.log(voo.ocupa(2));
console.log(voo.vagas());
const prova = new tarefa1Magica_1.Prova();
for (let i = 1; i < 15; i++) {
    const resposta = leitor.question("Resposta da questão " + (i) + ": ").toUpperCase();
    prova.respostaAluno(resposta);
}
console.log(prova.acertos());
console.log(prova.nota());
const outraProva = new tarefa1Magica_1.Prova();
for (let i = 1; i < 15; i++) {
    const resposta = leitor.question("Resposta da questão " + (i) + ": ");
    outraProva.respostaAluno(resposta);
}
console.log(outraProva.acertos());
console.log(outraProva.nota());
console.log(prova.maior(outraProva));
