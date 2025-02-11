export class Livro{
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo:string,autor:string,anoPublicacao:number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    obterDetalhes(){
        console.log("titulo", this.titulo, "autor", this.autor, "Ano de Publicacao", this.anoPublicacao)
    }
}