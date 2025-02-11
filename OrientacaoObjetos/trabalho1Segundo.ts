import { Guerreiro, CriaturaMagica, GuardiaoAnciao, DragaoMilenar, SereiaEncantada } from "./trabalho1Primeiro"
import * as leitor from "readline-sync"

function magiaDaCriatura(criatura: CriaturaMagica) {
    criatura.usarMagia()
}

function ataqueDoGuerreiro(atacante: Guerreiro, alvo: CriaturaMagica) {
    magiaDaCriatura(alvo)
    console.log(`${atacante.getNome()} ataca ${alvo.nome} e causa ${atacante.getDano()} de dano!`)
    alvo.receberDano(atacante.getDano())
    console.log("\n")
}


// Criando novos guerreiros e criaturas e adicionando valores aos seus atributos
const guerreiro = new Guerreiro(`Eragon, o destemido`, 10, 100, 20)
const guardiaoAnciao = new GuardiaoAnciao(`Godrick, o sábio`, 15, 150, 25)
const dragaoMilenar = new DragaoMilenar(`Thanatos, a chama eterna`, 20, 200, 30)
const sereiaEncantada = new SereiaEncantada(`Lunara, a voz do oceano`, 12, 120, 18)

let menu = true
console.log(`Boas vindas Guerreiro!`)
while (menu === true) {

    const opcao = leitor.questionInt(`Escolha a criatura que deseja atacar:\n1 - Guardião Ancião\n2 - Dragão Milenar\n3 - Sereia Encantada\n0 - Sair\n`);

    switch (opcao) {
        case 1:
            ataqueDoGuerreiro(guerreiro, guardiaoAnciao);
            break
        case 2:
            ataqueDoGuerreiro(guerreiro, dragaoMilenar);
            break
        case 3:
            ataqueDoGuerreiro(guerreiro, sereiaEncantada);
            break
        case 0:
            menu = false
            console.log(`Saindo...`)
            break
        default:
            console.log("Opção inválida. O ataque não foi realizado.\n")
    }
}