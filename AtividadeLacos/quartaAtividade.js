//4. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente.
//Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima.
//Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador.
//A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar.
//Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
//Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração?
//O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**

const leitor = require('readline-sync')

console.log('Vamos jogarrrr\n')

const computador = Math.floor(Math.random() * 100) + 1

console.log('\nSEGUNDO JOGADOR, TENTE ADIVINHAR O NUMERO QUE O COMPUTADOR DIGITOU\n')

let segundoJogador = leitor.questionInt('SEGUNDO JOGADOR\nDigite um numero Inteiro: ')

function jogo() {
  let tentativas = 1
  while (computador !== segundoJogador) {
    if (computador < segundoJogador) {
      console.log('Você errou! É MENOR')
    } else {
      console.log('Você errou! É MAIOR')
    }
    segundoJogador = leitor.questionInt('SEGUNDO JOGADOR\nDigite um numero Inteiro: ')
    tentativas++
  }
  console.log('Acertou');
  console.log(`O número de tentativas foi: ${tentativas}`)
}

jogo()

//Nao foi facil fazer a alteracao por mais pequena que tenha sido pois,tive que procurar outra forma de usar o codigo ja que com somente math.ramdom nao estava dando certo.
//oque eu poderia para ter sido mais facil foi dentro do que conheco usar esse codigo mesmo 