export class Pessoa{
//Atributos e metodo constructor

nome: String;

constructor(nome:String){
    this.nome = nome
}

correr(velocidade: number){

    if(velocidade> 7){
        console.log('Voce nao e atleta ainda');
        
    }else{
        console.log(('tenha um boa corrida'));
    }
}
}

export class Atleta extends Pessoa{
    //Essa classe herda o metodo constructorda outra classe

    correr(velocidade:number){
        if(velocidade > 7){
            console.log('continue nesse ritmo');
        }else{
            console.log(('tenha uma boa corrida'));
        }
    }
}