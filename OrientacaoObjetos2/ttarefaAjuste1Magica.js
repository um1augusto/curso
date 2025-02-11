"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.Aluno = void 0;
class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = 0;
        this.nota2 = 0;
        this.notaTrabalho = 0;
    }
    cadastroAluno(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
    insercaoDeNotas(nota1, nota2, notaTrabalho) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabalho = notaTrabalho;
    }
    media() {
        return (this.nota1 + this.nota2) / 2;
    }
    final() {
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    }
}
exports.Aluno = Aluno;
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    cadastroData(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    compararData(outraData) {
        if (this.ano === outraData.ano && this.mes === outraData.mes && this.ano === outraData.ano) {
            return "Datas iguais";
        }
        else {
            return "Datas diferentes";
        }
    }
    printData() {
        console.log(`Dia: ${this.dia}\nMês: ${this.mes}\nAno: ${this.ano}\n`);
    }
}
exports.Data = Data;
