import * as leitor from 'readline-sync'

//2. Faça um algoritmo que receba dois números e qual operação deve ser realizada
//(soma, subtração, multiplicação ou divisão). Exiba a operação e o resultado na tela.

//UTILIZANDO ESCOLHA, CASO

const primeiroNumero: number = leitor.questionInt ('Qual o primeiro numero? ')
const segundoNumero: number = leitor.questionInt ('Qual o segundo numero? ')
let operacao: string = leitor.question ('Qual tipo de operacao quer realizar? ')
let resultado: number = 0  
switch (operacao.toUpperCase()) {
    case 'SOMA':
     resultado = primeiroNumero + segundoNumero;
      break;
    case 'SUBTRACAO':
     resultado = primeiroNumero - segundoNumero;
      break;
    case 'MULTIPLICACAO':
     resultado = primeiroNumero * segundoNumero;
      break;
    case 'DIVISAO':
     resultado = primeiroNumero / segundoNumero;
      break;
    default:
      break;
  }
  console.log (`o resultado da operacao escolhida e ,${resultado}`)

