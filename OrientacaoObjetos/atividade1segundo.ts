import { Animal, Cachorro, Gato, Passaro } from "./ativade1primeiro";
import * as leitor from 'readline-sync';

const opcao = leitor.questionFloat('1-Cachorro\n2-Gato\n3-Passaro\Digite o numero do animal que quer chamar: ');

switch(opcao){
    case 1:
        const nomeCachorro = leitor.question("Qual o nome do seu cachorro?")
        const cachorro = new Cachorro (nomeCachorro)
        cachorro.latir();
        break;
    case 1:
        const nomeGato = leitor.question("Qual o nome do seu gato?")
        const gato = new Gato (nomeGato)
        gato.latir();
    case 1:
        const nomePassaro = leitor.question("Qual o nome do seu cachorro?")
        const passaro = new Passaro (nomePassaro)
        passaro.latir();

}



