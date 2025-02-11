//Quarta Questão Crie uma classe chamada "Calculadora" com métodos para realizar operações matemáticas,
//como "soma", "subtracao", "multiplicacao" e "divisao".
//Chame os métodos da classe diretamente para realizar algumas operações matemáticas e imprimir os resultados.

export class Calculadora{
    n1: number;
    n2: number;

    constructor(n1:number, n2:number){
        this.n1 = n1;
        this.n2 = n2;

    }
    soma(): number{
        console.log('O resultado da soma é: \n')
       return this.n1+this.n2
    }
    subtracao(): number{
        console.log('O resultado da subtracao é: \n')
        return this.n1-this.n2
     }
     multiplicacao(): number{
        console.log('O resultado da multiplicacao é: \n')
        return this.n1*this.n2
     }
     divisao(): number{
        console.log('O resultado da divisao é: \n')
        return this.n1/this.n2
     }

}