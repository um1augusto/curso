//Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números).
//Crie um método para receber as notas e dar o .push no array.
//Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno,
//serão no total três notas.
//Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.

export class Aluno{
    nome: String;
    notas: number[] = [];

    constructor(nome:String){
        this.nome = nome
        this.notas = []
    }
    adicionaNota(nota: number): void{
        this.notas.push(nota);
    }
    calcularMedia(): number{
        let soma = 0 
        for (let i = 0 ; i < this.notas.length; i++){
            const nota = this.notas[i];
            soma += nota
        }
        return soma/3
    }
}