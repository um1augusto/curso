//#7 Mensagem Oculta

//Textos podem conter mensagens ocultas. Neste problema a mensagem oculta em um texto é composto pelas
//primeiras letras de cada palavra do texto, na ordem em que aparecem.
//É dado um texto composto apenas por letras minúsculas ou espaços. Pode haver mais de um espaço entre as
//palavras. O texto pode iniciar ou terminar em espaços, ou mesmo conter somente espaços.

//Entrada
//Cada caso de teste consiste de uma única linha contendo de um a 50 caracteres, formado por letras minúsculas
//(‘a’-‘z’) ou espaços (‘ ’). Atenção para possíveis espaços no início ou no final do texto!
//Nota: No exemplo de entrada os espaços foram substituídos por pequenos pontos (‘·’) para facilitar o entendimento
//dos exemplos.

//Saída
//Para cada caso de teste imprima a mensagem oculta no texto de entrada

import * as leitor from 'readline-sync'

const texto: string = leitor.question("escreva : ")

let mensagemOculta: string  = " "

const palavras: string[] = texto.split(' ')

for (const palavra of palavras) {
    if (palavra !== '') {
      mensagemOculta += palavra[0];
    }
  }
  
  console.log(`Mensagem oculta:${mensagemOculta}`);