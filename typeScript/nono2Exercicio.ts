import * as leitor from 'readline-sync'

//3. Faça um algortimo que receba um valor em reais e pergunte para qual moeda deseja converter
//(dolar, pesos uruguaios ou euros). Informe o resultado final. (Utilize a cotação do google).

const primeiroNumero: number = leitor.questionFloat ('Quantos reais voce tem? ')
const operacao: string = leitor.question ('Qual tipo de moeda deseja converter \nEUROS\nPESOS (URUGUAIOS)\nEUROS\n\n')
let resultado: number = 0

switch (operacao.toUpperCase()){

    case 'DOLAR':
        resultado = primeiroNumero * 0,20
    
    case 'PESOS':
        resultado = primeiroNumero * 7.86

    case 'EUROS':
        resultado = primeiroNumero * 0.19
}
    
console.log (`o resultado da operacao escolhida e ,${resultado}`)
