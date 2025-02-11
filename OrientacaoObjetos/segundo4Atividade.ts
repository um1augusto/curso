import { Calculadora } from "./primeiro4Atividade";
import * as leitor from 'readline-sync';

let menu: boolean = true;

while(menu === true){
    const opcao = leitor.questionFloat('1-Soma\n2-Subtracao\n3-Multiplicacao\n4-Divisao\nDigite o numero da funcao: ');
    const n1 = leitor.questionFloat('Insira o valor numero 1: ')
    const n2 = leitor.questionFloat('Insira o valor numero 2: ')
    const numeros = new Calculadora (n1,n2)

    switch(opcao){

        case 1:
        console.log(numeros.soma())
        break;

        case 2:
        console.log(numeros.subtracao())
        break;

        case 3:
        console.log(numeros.multiplicacao())
        break;

        case 4: 
        console.log(numeros.divisao())
        break;

        case 5:
            menu = false;
            console.log ('Saindoooo:)')

        default:
            console.log('Valor invalido.');
            break;
    }
}
