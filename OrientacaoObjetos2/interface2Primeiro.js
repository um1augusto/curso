"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const interface1Primeiro_1 = require("./interface1Primeiro");
const leitor = __importStar(require("readline-sync"));
function aguia() {
    let aguia;
    const aguiaRapida = leitor.question('Qual nome da aguia? ');
    aguia = new interface1Primeiro_1.Aguia(aguiaRapida);
    aguia.voarRapido();
}
function baleia() {
    let baleia;
    const baleiaProfunda = leitor.question('Qual o nome da baleia? ');
    baleia = new interface1Primeiro_1.Baleia(baleiaProfunda);
    baleia.nadarProfundo();
}
function iguana() {
    let iguana;
    const iguanaColorida = leitor.question('Qual nome da iguana? ');
    iguana = new interface1Primeiro_1.Iguana(iguanaColorida);
    iguana.mudarDeCor();
}
function iguanaNadar() {
    let iguana;
    const iguanaNada = leitor.question('Qual nome da iguana? ');
    iguana = new interface1Primeiro_1.Iguana(iguanaNada);
    iguana.nadar();
}
function baleiaNadar() {
    let baleia;
    const baleiaNada = leitor.question('Qual nome da baleia? ');
    baleia = new interface1Primeiro_1.Baleia(baleiaNada);
    baleia.nadar();
}
function rebanhoDeIguana() {
    const rebanho = new interface1Primeiro_1.RebanhoDeIguana();
    for (let i = 0; i < 5; i++) {
        const nomeIguana = leitor.question(`Qual o nome da iguana? `);
        const iguana = new interface1Primeiro_1.Iguana(nomeIguana);
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
