//#1 Conversão de Tempo

//Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e
//informe-o expresso no formato horas:minutos:segundos.

//Entrada

//A entrada contém um valor inteiro N.

//Saída

//Imprima o tempo lido de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.


import * as leitor from 'readline-sync'

const tempoDaAtividade:number = leitor.questionInt("Quantos segundos leva essa atividade ?")

let horas:number = Math.floor( tempoDaAtividade/3600 )
let minutos:number = Math.floor((tempoDaAtividade % 3600)/60 )
let segundos:number = Math.floor(tempoDaAtividade % 60 )




console.log("Tempo de atividade",horas,"H",minutos,"M",segundos,"S");