"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = exports.Voo = exports.Data = exports.Aluno = void 0;
class Aluno {
    constructor(matricula, nome, nota1, nota2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabalho = notaTrabalho;
    }
    ;
    media() {
        return (this.nota1 + this.nota2) / 2;
    }
    ;
    final() {
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    }
    ;
}
exports.Aluno = Aluno;
class Data {
    constructor(dia, mes, ano) {
        if (dia > 1 || dia < 31 || mes > 1 || mes < 12 || ano > 1) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
        else {
            throw new Error("Data inválida");
        }
    }
    ;
    compara(outraData) {
        if (this.ano === outraData.ano && this.mes === outraData.mes && this.ano === outraData.ano) {
            return "Datas iguais";
        }
        else {
            return "Datas diferentes";
        }
    }
    ;
    getDia() {
        return this.dia;
    }
    ;
    getMes() {
        return this.mes;
    }
    ;
    getMesExtenso() {
        switch (this.mes) {
            case 1: return "Janeiro";
            case 2: return "Fevereiro";
            case 3: return "Março";
            case 4: return "Abril";
            case 5: return "Maio";
            case 6: return "Junho";
            case 7: return "Julho";
            case 8: return "Agosto";
            case 9: return "Setembro";
            case 10: return "Outubro";
            case 11: return "Novembro";
            case 12: return "Dezembro";
        }
        return "";
    }
    ;
    getAno() {
        return this.ano;
    }
    ;
    isBissexto() {
        let retorno;
        const bissexto = (this.ano % 4 === 0 && this.ano % 100 != 0) || this.ano % 400 === 0;
        if (bissexto) {
            retorno = "O ano é bissexto";
        }
        else {
            retorno = "O ano não é bissexto";
        }
        return retorno;
    }
    ;
    clone() {
        return new Data(this.dia, this.mes, this.ano);
    }
    ;
}
exports.Data = Data;
class Voo {
    constructor(numeroVoo, data) {
        this.passageiros = [];
        this.passageiros = new Array(100).fill(false);
        this.numeroVoo = numeroVoo;
        this.data = data;
    }
    ;
    proximoLivre() {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1;
            }
        }
        return -1;
    }
    ;
    verifica(cadeira) {
        return this.passageiros[cadeira - 1];
    }
    ;
    ocupa(cadeira) {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }
        return false;
    }
    ;
    vagas() {
        return this.passageiros.filter((ocupada) => !ocupada).length;
    }
    ;
    getVoo() {
        return this.numeroVoo;
    }
    ;
    getData() {
        return this.data;
    }
    ;
    clone() {
        return new Voo(this.numeroVoo, this.data);
    }
    ;
}
exports.Voo = Voo;
class Prova {
    constructor() {
        this.respostas = [];
        this.gabarito = [];
        this.gabarito = ["A", "B", "C", "A", "B", "D", "B", "C", "A", "B", "C", "D", "A", "C", "D"];
    }
    ;
    respostaAluno(resposta) {
        this.respostas.push(resposta);
    }
    ;
    acertos() {
        return this.respostas.filter((resposta, indice) => resposta === this.gabarito[indice]).length;
    }
    ;
    nota() {
        const acertos = this.acertos();
        return acertos * 0.5 + (15 - acertos);
    }
    ;
    maior(outraProva) {
        const notaAtual = this.nota();
        const notaOutra = outraProva.nota();
        if (notaAtual > notaOutra) {
            return notaAtual;
        }
        else {
            return notaOutra;
        }
    }
    ;
}
exports.Prova = Prova;
