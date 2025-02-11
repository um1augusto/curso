//3.Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
//Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número.
//Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa,
//indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

//Um resumo das funcionalidades são:

//a) Solicitar que o primeiro jogador escolha um número, através do leitor. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

//b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do leitor. A cada chute, deve ser informado no console:
//- O número chutado, com a mensagem: `O número chutado foi: <número>`
//- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

//c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem:
//`Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

const leitor = require('readline-sync');

console.log('Vamos jogarrrr\n');

const primeiroJogador = leitor.questionInt('PRIMEIRO JOGADOR\nDigite um numero Inteiro: ');

console.log('\nSEGUNDO JOGADOR, TENTE ADIVINHAR O NUMERO QUE O PRIMEIRO JOGADOR DIGITOU\n');

let segundoJogador = leitor.questionInt('SEGUNDO JOGADOR\nDigite um numero Inteiro: ');

function jogo() {
  let tentativas = 1;
  while (primeiroJogador !== segundoJogador) {
    if (primeiroJogador < segundoJogador) {
      console.log('Voce errouuuu, É MENOR');
    } else {
      console.log('Voce errouuuu, É MAIOR');
    }
    segundoJogador = leitor.questionInt('SEGUNDO JOGADOR\nDigite um numero Inteiro: ');
    tentativas++;
  }
  console.log('Acertou');
  console.log(`O número de tentativas foi: ${tentativas}`);
}

jogo();