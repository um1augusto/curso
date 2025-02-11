import * as leitor from 'readline-sync';

let countSub: number = 0;
let countDiv: number = 0;
let countMul: number = 0;
let countSum: number = 0;
let maxResult: number = 0;
let op: string = "";

while (op !== "sair") {
    op = leitor.question("Digite a operação desejada (soma, subtracao, multiplicacao, divisao, sair): ");

    if (op === "sair") {
        break;
    }

    const num1: number = leitor.questionFloat("Digite o primeiro número: ");
    const num2: number = leitor.questionFloat("Digite o segundo número: ");

    let result: number = 0;

    switch (op) {
        case "subtracao":
            result = num1 - num2;
            countSub++;
            break;

        case "divisao":
            result = num1 / num2;
            countDiv++;
            break;

        case "multiplicacao":
            result = num1 * num2;
            countMul++;
            break;

        case "soma":
            result = num1 + num2;
            countSum++;
            break;

        default:
            console.log("Operação inválida");
            continue;
    }

    if (result > maxResult) {
        maxResult = result;
    }

    console.log("\nResultado:", result);
}

console.log("\n--- Relatório ---");
console.log("Operações de subtração realizadas:", countSub);
console.log("Operações de divisão realizadas:", countDiv);
console.log("Operações de multiplicação realizadas:", countMul);
console.log("Operações de soma realizadas:", countSum);
console.log("Maior resultado encontrado:", maxResult);