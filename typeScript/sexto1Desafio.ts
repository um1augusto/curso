//#6 Grenais

//A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística do resultado
//de vários GRENAIS. Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um
//GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. Se a resposta for
//1, o algoritmo deve ser executado novamente solicitando o número de gols marcados pelos times em uma nova
//partida, caso contrário deve ser encerrado imprimindo:
//Quantos GRENAIS fizeram parte da estatística.

//O número de vitórias do Inter.
//O número de vitórias do Grêmio.
//O número de Empates.

//Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor",
//caso termine empatado)

//Entrada
//A entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente.
//Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.

//Saída
//Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for
//encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio"
//deve ser impressa sem acento, conforme o exemplo abaixo.

import * as leitor from 'readline-sync'

 let vitoriaGremio:number = 0
 let vitoriaInter:number = 0
 let Empates:number = 0
 let jogos:number = 1
 
 

let opcao = leitor.questionInt("\nnovo grenal 1-sim 2-nao :")


for (let i = 0; 1 === opcao ; i++) {
    
 const gremio:number = leitor.questionInt("Quantos gols o Grêmio marcou? ")
 const inter:number = leitor.questionInt("Quantos gols o Internacional marcou? ")
 

 if (gremio > inter) {
     vitoriaGremio  =+ 1
 } else if (inter > gremio) {
     vitoriaInter =+ 1 
 } else {
     Empates =+ 1
 } 



 console.log(`\nNumero de jogos: ${jogos}`);
 
 console.log(`Empates ${Empates}` );
 console.log(`Vitórias do grêmio ${vitoriaGremio}`);
 console.log(`Vitórias do inter ${vitoriaInter}`);
 
 opcao = leitor.questionInt("\nnovo grenal 1-sim 2-não :")
 
 jogos = jogos + 1
 
}

console.log("Saindo...");

if (vitoriaGremio > vitoriaInter) {
    console.log("O grêmio possui mais vitórias");
    
} else if (vitoriaInter > vitoriaGremio) {
    console.log("O inter possui mais vitórias");

} else {
    console.log("Os times estão empatados");
    
}