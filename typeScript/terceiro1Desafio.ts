//#3 Tempo de Jogo

//Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode
//começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

//Entrada

//A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

//Saída

//Apresente a duração do jogo conforme exemplo abaixo.
import * as leitor from 'readline-sync'

const horaInicial:number = leitor.questionInt("Que horas o jogo começou :") 
const horaFinal:number = leitor.questionInt("Que horas o jogo terminou :")
let tempoDeJogo:number

if (horaFinal > horaInicial) {
   tempoDeJogo = horaFinal - horaInicial
} else {
   tempoDeJogo = horaFinal - horaInicial + 24 
}

console.log(`\nO JOGO DUROU ${tempoDeJogo} HORAS(S)`);