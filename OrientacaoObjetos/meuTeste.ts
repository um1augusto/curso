class Aluno {
    matricula: number;
    nome: string;
    primeiraNota: number;
    segundaNota: number;
    notaTrabalho: number;
    mediaAluno: number;
    notaFinal: number;

    constructor(matricula: number, nome: string, primeiraNota: number, segundaNota: number, notaTrabalho: number){
       
      this.matricula = matricula;
      this.nome = nome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
      this.notaTrabalho = notaTrabalho;
      this.mediaAluno = 0;
      this.notaFinal = 0;
    }
    media(): number {
        this.mediaAluno = (this.primeiraNota + this.segundaNota)/2
        return this.mediaAluno;
    }
}