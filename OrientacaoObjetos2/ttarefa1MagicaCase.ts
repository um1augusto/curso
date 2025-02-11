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
    media(): number{
        return (this.nota1 + this.nota2) / 2;
    }
    final(): number{
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    }
}