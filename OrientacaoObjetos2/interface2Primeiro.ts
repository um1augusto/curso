import { Aguia, Baleia, Iguana, RebanhoDeIguana } from "./interface1Primeiro";
import * as leitor from 'readline-sync';

function aguia() {
    let aguia: Aguia;
    const aguiaRapida = leitor.question('Qual nome da aguia? ');
    aguia = new Aguia(aguiaRapida);
    aguia.voarRapido();
}

function baleia() {
    let baleia: Baleia;
    const baleiaProfunda = leitor.question('Qual o nome da baleia? ');
    baleia = new Baleia(baleiaProfunda);
    baleia.nadarProfundo();
}

function iguana() {
    let iguana: Iguana;
    const iguanaColorida = leitor.question('Qual nome da iguana? ');
    iguana = new Iguana(iguanaColorida);
    iguana.mudarDeCor();
}

function iguanaNadar() {
    let iguana: Iguana;
    const iguanaNada = leitor.question('Qual nome da iguana? ')
    iguana = new Iguana (iguanaNada);
    iguana.nadar();
}

function baleiaNadar() {
    let baleia: Baleia;
    const baleiaNada = leitor.question('Qual nome da baleia? ')
    baleia = new Baleia (baleiaNada);
    baleia.nadar();
}
function rebanhoDeIguana() {
    const rebanho = new RebanhoDeIguana(); 
    for (let i = 0; i < 5; i++) {
        const nomeIguana = leitor.question(`Qual o nome da iguana? `);
        const iguana = new Iguana(nomeIguana);
        rebanho.adicionarIguana(iguana);
    }
    rebanho.nadarEmGrpo();
}

function opcao() {
    console.log("\n========");
    console.log("\n 1- Aguia");
    console.log(" 2- Baleia");
    console.log(" 3- Iguana");
    console.log(" 4- Fazer iguana nadar");
    console.log(" 5- Fazer baleia nadar");
    console.log(" 6- Vamos pro rebanho");
    
    

    const escolha = leitor.questionInt('Escolha uma opcao');

    switch (escolha) {
        case 1:
            aguia();
            break;
        case 2:
            baleia();
            break;
        case 3:
            iguana();
            break;
        case 4:
            iguanaNadar();
            break;
        case 5: 
            baleiaNadar();
            break;
        case 6:
            rebanhoDeIguana();
    }
}

opcao();
