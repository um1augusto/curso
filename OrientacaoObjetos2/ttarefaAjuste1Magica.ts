export class Aluno {
    matricula: number;
    nome: string;
    nota1: number;
    nota2: number;
    notaTrabalho: number;

    constructor(matricula: number, nome: string) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = 0; // Inicializa as notas com zero
        this.nota2 = 0;
        this.notaTrabalho = 0;
    }

    cadastroAluno(matricula: number, nome: string): void {
        this.matricula = matricula;
        this.nome = nome;
    }

    insercaoDeNotas(nota1: number, nota2: number, notaTrabalho: number) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabalho = notaTrabalho;
    }
    media(): number {
        return (this.nota1 + this.nota2) / 2;
    }
    final(): number {
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    }
}


export class Data {
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    cadastroData(dia: number, mes: number, ano: number): void {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    compararData(outraData: Data): string {
        if (this.ano === outraData.ano && this.mes === outraData.mes && this.ano === outraData.ano) {
            return "Datas iguais";
        } else {
            return "Datas diferentes";
        }
    }
    printData() {
        console.log(`Dia: ${this.dia}\nMês: ${this.mes}\nAno: ${this.ano}\n`);
    }
}