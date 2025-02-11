import{ContaBancaria} from "./primeiro2Exercicio";
import * as leitor from 'readline-sync';

const proprietarioDaConta = leitor.question ('Qual o nome do proprietario da conta? ')
const numeroDaConta = leitor.question ('Qual o numero da conta? ')

const conta = new ContaBancaria (proprietarioDaConta,numeroDaConta);

console.log(conta);

const deposito = leitor.questionInt('Quanto quer depositar ?');
conta.deposito(deposito);

const sacar = leitor.questionInt('Qual o valor quer sacar');
conta.sacar(sacar);

const verificarSaldo = leitor.questionInt('Verifique seu saldo: ');
conta.verificarSaldo();