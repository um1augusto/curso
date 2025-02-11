import * as leitor from 'readline-sync'

//Você recebe uma gravação das habilidades que nosso herói usou em suas batalhas.
//A primeira linha de entrada conterá um único inteiro n (1 ≤ n ≤ 100)
//o número de batalhas que nosso herói jogou.
//Em seguida, siga n linhas, cada uma com uma sequência de caracteres ki (1 ≤ ki ≤ 1000)
//cada um dos quais sendo 'C', 'D' ou 'O'.
//Isso denota a sequência de habilidades usadas por nosso herói na i-ésima batalha.
//'C' é Chains of Ice,'D' é Death Grip e 'O' é Obliterate.

const numeroDeBatalhas: number = leitor.questionInt('Digite o número de batalhas: ');

const sequenciaDeHabilidades: string[] = [];

for (let i = 0; i < numeroDeBatalhas; i++) {
    const habilidades: string = leitor.question(`Digite a sequência de habilidades para a batalha ${i + 1}: `);
    sequenciaDeHabilidades.push(habilidades);
  }
  
  let numeroDeVitorias: number = 0;
  
  for (let i = 0; i < numeroDeBatalhas; i++) {
    const habilidades: string = sequenciaDeHabilidades[i];
    let venceuBatalha: boolean = true;
  
    for (let j = 0; j < habilidades.length - 1; j++) {
      if (habilidades[j] === 'C' && habilidades[j + 1] === 'D') {
        venceuBatalha = false;
        break;
      }
    }
  
    if (venceuBatalha) {
      numeroDeVitorias++;
    }
  }
  
  console.log(`Número de batalhas vencidas: ${numeroDeVitorias}`);
  
  // Exemplo de exibição das sequências de habilidades:
  for (let i = 0; i < numeroDeBatalhas; i++) {
    console.log(`Sequência de habilidades da batalha ${i + 1}: ${sequenciaDeHabilidades[i]}`);
  }