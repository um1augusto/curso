//Escreva uma classe cujos objetos representam alunos matriculados em uma
//disciplina mágica.
//Cada objeto dessa classe deve guardar os seguintes dados do aluno:
//matrícula, nome, 2 notas de prova e 1 nota de trabalho.
//Escreva os seguintes métodos para esta classe:

export class Aluno {

    matricula: number;
    nome: string;
    notaProva1: number
    notaProva2: number;
    notaTrabalho: number
    mediaAluno: number
    finalAluno: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number,notaTrabalho: number){
    this.matricula = matricula
    this.nome = nome
    this.notaProva1 = notaProva1
    this.notaProva2 = notaProva2
    this.notaTrabalho = notaTrabalho
    this.mediaAluno = 0
    this.finalAluno = 0
    }
    media(): number{
      this.mediaAluno = (this.notaProva1 = this.notaProva2) /2
      return this.mediaAluno;
     }
     final(): number{
        this.mediaAluno = (this.notaProva1 = this.notaProva2) /2
        return this.mediaAluno;
       }
}

//Escreva uma classe Data cuja instância (objeto) represente uma data mágica.
//Esta classe deverá dispor dos seguintes métodos:

export class Data {
    dia: number;
    mes: number;
    ano: number;
    mesExtenso: string;
    isBissexto: boolean;
    outraData: number;

    constructor(dia: number, mes: number, ano: number){
    if(dia>=1 && dia<=30){
    this.dia = dia;
    } else {
        console.log("Dia inválido");   
    }
    if(mes>=1 && mes<=12){
    this.mes = mes
    } else {
        console.log("Mes inválido");   
    }
    if(ano === ano){
    this.ano = ano
    } else {
        console.log("Ano inválido");   
    }
  }
}

//Questão 3 - Vôos Encantados
//Escreva uma classe em que cada objeto representa um vôo mágico que acontece
//em determinada data e horário.
//Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação das vagas.
//A classe deve ter os seguintes métodos:

export class Voo {
    private numeroVoo: string;
    private data: Date;
    private ocupacao: boolean[];

    constructor(numeroVoo: string, data: Date){
        
    }
}