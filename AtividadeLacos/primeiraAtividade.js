//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//DICA: Coloque o seu leitor de nomes dentro de um loop.
//Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu.
//Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

//c) Por fim, imprima o array com os nomes dos bichinhos no console

const leitor = require('readline-sync');

const quantidadeDeAnimaisDeEstimacao = leitor.questionInt("Quantos bichinhos de estimacao voce tem? ");

if (quantidadeDeAnimaisDeEstimacao === 0) {
  console.log("Que pena! Voce pode adotar um pet!");
} else {
  const nomesAnimaisEstimacao = [];

  for (let i = 0; i < quantidadeDeAnimaisDeEstimacao; i++) {
    const nome = leitor.question(`Digite o nome do seu ${i + 1} bichinho de estimacao : `)
    nomesAnimaisEstimacao[i] = nome
  }

  console.log("Nomes dos bichinhos de estimacao:", nomesAnimaisEstimacao);
}