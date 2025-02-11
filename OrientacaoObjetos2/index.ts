import * as readlineSync from 'readline-sync';

console.log("1 - Cafe com canela (R$ 2,00)");
console.log("2 - Cafe com leite (R$ 2,00)");
console.log("3 - Capuccino (R$ 3,00)");
console.log("4 - Mocaccino (R$ 3,00");

const opcao = readlineSync.questionInt("Digite o cafe que voce quer");
let valorPagar = 0
let valorCafe



while (true) {
    if (opcao == 1 || opcao == 2) {
        valorCafe = 2
        valorPagar = readlineSync.questionInt("Insira o valor de 2 Reais")
        if (valorCafe < valorPagar) {
            console.log("Voce inseriu um valor acima (MAQUINA NAO OFERECE TROCO");
        break;
        }
    } else if (opcao == 3 || opcao == 4) {
        valorCafe = 3
        console.log("insira 3 reais")
    } else {
        console.log("Opcao invalida");
    }
}
