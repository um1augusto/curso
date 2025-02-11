//Crie uma hierarquia de classes para modelar animais, com uma classe base "Animal"
//e classes derivadas como "Cachorro", "Gato" e "Pássaro" com métodos e propriedades específicas
//para cada tipo de animal, por exemplo: quando chamar o cachorro, print "Au au au".
//Obs.: utilize o extends nas classes específicas, link para exemplo

export class Animal{

    nome: string;
    
    constructor(nome:string){

        this.nome = nome;
    }
}

export class Cachorro extends Animal{
    latir(): void{
        console.log('Au au au')
       }
}
export class Gato extends Animal{
    latir(): void{
        console.log('Miau miau miau')
       }
}
export class Passaro extends Animal{
    latir(): void{
        console.log('Piu piu piu')
       }
}