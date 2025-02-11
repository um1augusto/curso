//Crie uma classe chamada "Pessoa" com as propriedades nome e idade. Adicione um método chamado "cumprimentar" que imprime uma saudação com o nome da pessoa. Em seguida, crie uma instância da classe e chame o método "cumprimentar".

export class Pessoa{
    nomePessoa: string;
    idadePessoa: number;

    constructor (nomePessoa: string, idadePessoa: number){
        this.nomePessoa = nomePessoa;
        this.idadePessoa = idadePessoa
    }

    cumprimentar(): void{
        console.log("Olá", this.nomePessoa);
        
    }
    
}