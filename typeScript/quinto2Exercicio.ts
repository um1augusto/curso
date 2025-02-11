import * as leitor from 'readline-sync'

//2. Faça um algoritmo que receba dois números e qual operação deve ser realizada
//(soma, subtração, multiplicação ou divisão). Exiba a operação e o resultado na tela.

const primeiroNumero: number = leitor.questionInt ('Qual o primeiro numero? ')
const segundoNumero: number = leitor.questionInt ('Qual o segundo numero? ')
const operacao: string = leitor.question ('Qual tipo de operacao quer realizar? ')

if (operacao === 'soma' || operacao === 'SOMA' || operacao === 'Soma'){
    
    let soma: number = primeiroNumero + segundoNumero
    console.log ('A soma dos numeros é ',soma)
}else if (operacao === 'subtracao' || operacao === 'SUBTRACAO' || operacao === 'Subtracao'){
    let subtracao: number = primeiroNumero - segundoNumero
    console.log ('A subtracao dos numeros é ',subtracao)
}else if (operacao === 'multiplicacao' || operacao === 'MULTIPLICACAO' || operacao === 'Multiplicacao'){
    let multiplicacao: number = primeiroNumero * segundoNumero
    console.log ('A multiplicacao dos numeros é ',multiplicacao)
}else if (operacao === 'divisao' || operacao === 'DIVISAO' || operacao === 'Divisao'){
    let divisao: number = primeiroNumero / segundoNumero
    console.log ('A multiplicacao dos numeros é ',divisao)
}