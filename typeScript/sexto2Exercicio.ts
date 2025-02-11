import * as leitor from 'readline-sync'

//3. Faça um algortimo que receba um valor em reais e pergunte para qual moeda deseja converter
//(dolar, pesos uruguaios ou euros). Informe o resultado final.
//(Utilize a cotação do google).

const primeiroNumero: number = leitor.questionInt ('Quantos reais voce tem? ')
const operacao: string = leitor.question ('Qual tipo de moeda deseja converter ')

if (operacao === 'dolar' || operacao === 'DOLAR' || operacao === 'Dolar'){
    
    let dolar: number = primeiroNumero * 0.21
    console.log ('O valor em dolar é ',dolar)

}else if (operacao === 'pesos uruguaios' || operacao === 'PESOS URUGUAIOS' || operacao === 'Pesos uruguaios'){

    let pesos: number = primeiroNumero * 7.95
    console.log ('O valor em pesos uruguaios é ',pesos)

}else if (operacao === 'Euros' || operacao === 'EUROS' || operacao === 'euros'){
    
    let euros: number = primeiroNumero * 0.19
    console.log ('O valor em euros é ',euros)

}