//#5 PUM

//Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas
//na execução do programa.

//Entrada
//A entrada contém um número inteiro positivo N.

//Saída
//Imprima a saída conforme o exemplo fornecido.

import * as leitor from 'readline-sync'

const entradaN = leitor.questionInt('Digite a quantidade de linhas:' )
  
  
  for (let i = 1; i <= entradaN; i++) {
    const num1 = (i - 1) * 4 + 1;
    const num2 = (i - 1) * 4 + 2;
    const num3 = (i - 1) * 4 + 3;
    console.log(`${num1} ${num2} ${num3} PUM`);
  }