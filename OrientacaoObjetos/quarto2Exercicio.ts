import { ContaBancaria } from "./primeiro2Exercicio";
import * as leitor from 'readline-sync';

const contas: ContaBancaria[] = [];
let menu: boolean = true;

while (menu === true) {

    console.log('Menu: \n 1 - Criar conta \n 2 - Depositar \n 3 - Sacar \n 4 - Verificar Saldo \ 0 - Sair');
    const opcao = leitor.question('Escolha uma opcao, digite o numero: ')

    switch (opcao) {
        case '1':

            const nome = leitor.question("Qual o nome do proprietário da conta?: ");
            const numero = leitor.question("Qual o número da conta?: ");
            const novaConta = new ContaBancaria(nome, numero);
            contas.push(novaConta)
            console.log("A conta número: ", numero, " foi criada");
            break;

        case "2":
            const contaDeposito = leitor.question("Digite o número da conta: ")
            const depositar = leitor.questionInt("Qual o valor a ser depositado? : ");
            const contaEncontradaDeposito = contas.find(conta => conta.numeroConta === contaDeposito);
            if (contaEncontradaDeposito) {
                contaEncontradaDeposito.deposito(depositar);
            } else {
                console.log("A conta não foi encontrada. :/");
            }
            break;
        case "3":
            const contaSaque = leitor.question("Digite o número da conta: ");
            const saque = leitor.questionInt("Qual o valor a ser retirado?: ");
            const contaEncontradaSaque = contas.find(conta => conta.numeroConta === contaSaque);
            if (contaEncontradaSaque) {
                contaEncontradaSaque.sacar(saque);
            } else {
                console.log("A conta não foi encontrada. :/");
            }
            break;
        case "4":
            const contaExtrato = leitor.question("Digite o número da conta: ");
            const contaEncontradaExtrato = contas.find(conta => conta.numeroConta === contaExtrato);
            if (contaEncontradaExtrato) {
                contaEncontradaExtrato.verificarSaldo();
            } else {
                console.log("A conta não foi encontrada. :/");
            }
            break;

        case "0":
            console.log("Saindo...");
            menu = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }

}