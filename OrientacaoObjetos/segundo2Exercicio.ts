import { ContaBancaria } from "./primeiro2Exercicio";
import * as leitor from 'readline-sync';

const user = new ContaBancaria ('Augusto', '999-1');
console.log(user);

user.deposito(100);
user.sacar(80);
user.verificarSaldo();